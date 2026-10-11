---
title: Easy SQLite on Android with RxJava
date: '2015-06-01T17:51:52'
slug: easy-sqlite-on-android-with-rxjava
categories:
- Android
- Java
- Rx
---

Whenever I consider using an ORM library on my Android projects, I always end up abandoning the idea and rolling my own layer instead for a few reasons: 

  * My database models have never reached the level of complexity that ORM's help with.
  * Every ounce of performance counts on Android and I can't help but fear that the SQL generated will not be as optimized as it should be.

Recently, I started using a pretty simple design pattern that uses Rx to offer what I think is a fairly simple way of managing your database access with RxJava. I'm calling this the "Async Rx Read" design pattern, which is a horrible name but the best I can think of right now. 

## Easy reads

One of the important design principles on Android is to never perform I/O on the main thread, and this obviously applies to database access. RxJava turns out to be a great fit for this problem. 

I usually create one Java class per table and these tables are then managed by my [SQLiteOpenHelper](http://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html). With this new approach, I decided to extend my use of the helper and make it the only point of access to anything that needs to read or write to my SQL tables. 

Let's consider a simple example: a `USERS` table managed by the `UserTable` class: 
    
    
    // UserTable.java
    List<User> getUsers(SQLiteDatabase db, String userId) {
      // select * from users where _id = {userId}
    }
    

The problem with this method is that if you're not careful, you will call it on the main thread, so it's up to the caller to make sure they are always invoking this method on a background thread (and then to post their UI update back on the main thread, if they are updating the UI). Instead of relying on managing yet another thread pool or, worse, using `AsyncTask`, we are going to rely on RxJava to take care of the threading model for us. 

Let's rewrite this method to return a callable instead: 
    
    
    // UserTable.java
    Callable<List<User>> getUsers(SQLiteDatabase db, String userId) {
      return new Callable<List<User>>() {
        @Override
        public List<User> call() {
          // select * from users where _id is userId
        }
      }
    }
    

In effect, we simply refactored our method to return a lazy result, which makes it possible for the database helper to turn this result into an `Observable`: 
    
    
    // MySqliteOpenHelper.java
    Observable<List<User>> getUsers(String userId) {
      return makeObservable(mUserTable.getUsers(getReadableDatabase(), userId))
        .subscribeOn(Schedulers.computation()) // note: do not use Schedulers.io()
    }
    

Notice that on top of turning the lazy result into an `Observable`, the helper forces the subscription to happen on a background thread (the computation scheduler here; do not use `Schedulers.io()` because it's backed by an unbounded executor). This guarantees that callers don't have to worry about ever blocking the main thread. 

Finally, the `makeObservable` method is pretty straightforward (and completely generic): 
    
    
    // MySqliteOpenHelper.java
    private static <T> Observable<T> makeObservable(final Callable<T> func) {
      return Observable.create(
          new Observable.OnSubscribe<T>() {
              @Override
              public void call(Subscriber<? super T> subscriber) {
                try {
                  subscriber.onNext(func.call());
                } catch(Exception ex) {
                  Log.e(TAG, "Error reading from the database", ex);
                }
              }
        });
    }
    

At this point, all our database reads have become observables that guarantee that the queries run on a background thread. Accessing the database is now pretty standard Rx code: 
    
    
    // DisplayUsersFragment.java
    @Inject
    MySqliteOpenHelper mDbHelper;
    // ...
    mDbHelper.getUsers(userId)
      .observeOn(AndroidSchedulers.mainThread())
      .subscribe(new Action1<List<User>>()) {
        @Override
        public void onNext(List<User> users) {
          // Update our UI with the users
        }
      }
    }
    

And if you don't need to update your UI with the results, just observe on a background thread. 

Since your database layer is now returning observables, it's trivial to compose and transform these results as they come in. For example, you might decide that your `ContactTable` is a low layer class that should not know anything about your model (the `User` class) and that instead, it should only return low level objects (maybe a `Cursor` or `ContentValues`). Then you can use use Rx to `map` these low level values into your model classes for an even cleaner separation of layers. 

Two additional remarks: 

  1. Your Table Java classes should contain no public methods: only package protected methods (which are accessed exclusively by your Helper, located in the same package) and private methods. No other classes should ever access these Table classes directly. 
  2. This approach is extremely compatible with dependency injection: it's trivial to have both your database helper and your individual tables injected (additional bonus: with Dagger 2, your tables can have their own component since the database helper is the only refence needed to instantiate them). 


This is a very simple design pattern that has scaled remarkably well for our projects while fully enabling the power of RxJava. I also started extending this layer to provide a flexible update notification mechanism for list view adapters (not unlike what SQLBrite offers), but this will be for a future post. 

This is still a work in progress, so feedback welcome!
