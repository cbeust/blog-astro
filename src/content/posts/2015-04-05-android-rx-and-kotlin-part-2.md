---
title: 'Android, Rx and Kotlin: part 2'
date: '2015-04-05T04:56:10'
slug: android-rx-and-kotlin-part-2
categories:
- General
- Kotlin
---

I haven't been quite honest with you [my previous post](http://beust.com/weblog/weblog/2015/03/23/android-rx-and-kotlin-a-case-study/): the code I showed in the article doesn't exactly result in the short video of the application at the top of the article. 

If you run the code as is, you will notice something very irritating (and unacceptable in any application): whenever the app is pretending to make a network call, the entire user interface freezes for a second. You can't type anything and the loading icon stops spinning. This is the classic symptom of blocking the main thread. You will remember that I am simulating network calls by simply sleeping for a little while, and obviously, if you do this on the main thread, you will freeze your UI. 

By default, Rx runs everything on your current thread, which is the main thread in Android: the thread that is in charge of updating your user interface. Android is exactly like most graphical toolkits: you should only use the main thread to update your UI but anything else you do (network or file system access, computations, database updates, etc...) needs to be done on a background thread. Rx has a very good solution to this problem. 

## Threading

Until recently, [`AsyncTask`](http://developer.android.com/reference/android/os/AsyncTask.html) was the recommended way of performing this kind of task: by creating and executing an `AsyncTask`, you can run your code in two locations, one that will be run in a background thread (`doInBackground()`) and once that task completes, code that will run on the main thread (`onPostExecute()`). 

`AsyncTask` has a troubled past and it has evolved quite a bit over the many revisions of the Android API: first it was single threaded, then it became multithreaded and more recently, it's running in the background on one thread in an attempt to provide both parallelism and sequencing at the same time. If you need more information about `AsyncTask`, [this article explains how it evolved](http://bon-app-etit.blogspot.com/2013/04/the-dark-side-of-asynctask.html). 

This is not the only issue with `AsyncTask`: it's also fairly challenging to get its behavior right while going through configuration changes or the possibility of your activity being paused or destroyed while the task is still running. 

Rx offers a few solutions to some of these problems, but not all. 

## Threading and Rx

Rx offers two methods to control your threading model: `subscribeOn()` and `observeOn()`. 

In a nutshell, `observeOn()` defines what thread your observer will run on (this is where you usually do the work) and `subscribeOn()` defines the thread where your operators will run (`map()`, `filter()`, etc...). 

The parameter you give to these methods is a `Scheduler`, an Rx abstraction that encapsulates a thread. Rx defines a few standard ones: 

  * `Schedulers.computation()`: When you are calculating something. 
  * `Schedulers.io()`: When you are doing I/O (network, file system, database access, ...). 
  * And a few others I won't get into here. 
Additionally, RxAndroid defines the more Android-specific `AndroidSchedulers.mainThread()`, which is self explanatory. 

A typical piece of code on Android is to run a few tasks in the background (network access, expensive computation, database update, etc...) and based on the result of that action, you update your UI. The way to implement this with Rx is straightforward: you subscribe on whichever background thread is more appropriate for your actions and you observe on the main thread: 

```scala
trait Server {
    fun findUser(name: String) : Observable<JsonObject>
}
data class User(val id: String, val name: String)
fun p(s: String) {
    println("[${Thread.currentThread().getName()}] ${s}")
}
Observable.just("cedric")
    .subscribeOn(Schedulers.io())
    .flatMap {
    	p("Calling server.findUser");
    	server.findUser("cedric")
    }
    .map{jo ->
        p("Mapping to a User object")
    	User(jo.get("id").getAsString(),
             jo.get("name").getAsString())
     }
    .observeOn(AndroidSchedulers.mainThread())
    .subscribe{ u -> p("User: ${u}a") }
```

We start with a string (which could come from an `EditText` and we specify that we'll be subscribing from the I/O thread. Then we call the server with that name (on the I/O thread), turn the JSON response into a `User` object and we print that object: 

```kotlin
[IoThreadScheduler-1] Calling server.findUser
[IoThreadScheduler-1] Mapping to a User object
[Main] User: User(id=123, name=cedric)
```

Note that even though you can specify multiple `subscribeOn`, all the subscriptions will happen on the first scheduler (subsequent `subscribeOn` will be ignored). I'm not sure if this is by design or just an oversight, but it's not really a problem in practice. If you ever want to subscribe on multiple schedulers, you can always make this happen in the body of your subscription itself (for example, in the example above, if the server call was actually using Retrofit, you would see it's using its own thread pool to make that call). 

And that's about all there is to get started with thread management with Rx on Android. As you can see, structuring your code this way makes the intent and thread handling extremely clear and easy to trace through, much more so than with `AsyncTask`. 

With the growing number of Android libraries adding support for Rx, it's becoming even more trivial to use these libraries within this framework and combine them in straightforward yet powerful ways. You can see in the examples I used in this post and the previous one how Rx makes it trivial to combine network calls and GUI updates simply by the fact that Retrofit returns Observables. You should also take a look at [SQLBrite`](https://github.com/square/sqlbrite), which wraps `SQLiteOpenHelper` in Observables to offer you similar flexibility but for database access. 

Read [part 1](http://beust.com/weblog/weblog/2015/03/23/android-rx-and-kotlin-a-case-study/), [part 3](http://beust.com/weblog/weblog/2015/04/11/android-rx-and-kotlin-part-3/).
