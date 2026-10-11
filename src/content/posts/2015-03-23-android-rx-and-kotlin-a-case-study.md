---
title: 'Android, Rx and Kotlin: a case study'
date: '2015-03-23T16:28:23'
slug: android-rx-and-kotlin-a-case-study
categories:
- Android
- Kotlin
- Rx
---

There are countless introductions to Rx and quite a few discussing Rx on Android, so instead of writing another one, I decided to come up with a simple activity and go through the entire exercise of implementing it using Rx and Kotlin. I'm sure you'll be able to follow these article easily even if you're not familiar with Kotlin because the syntax is remarkably similar to what you would write if you were using Java 8 (just with fewer semi colons). 

## The activity

It's shown at the top of this article. It's pretty simple while covering some important basics and, as we'll find out along the way, the devil is in the details. Here is a simple functional specification of this activity: 

  * The user types a nick name in an `EditText`. The activity asks the server if such a name is known and if it is, it returns a user record.
  * At this point, the user can "Add" this person as a friend, which triggers another call to the server to verify that the addition is allowed. The server returns a simple "ok" or "error" if that person can't be added as a friend.

A few additional details: 
  * We want to display a progress bar during all server calls.
  * Since we don't want to bother the server too much, we only start sending requests for names that have three or more characters (we'll add to this condition later).



## Without Rx

Implementing this activity with "regular" Android practices is straightforward: 

  * Add a listener to the `EditText` so we get notified each time a character is typed.
  * Send a network request with an `AsyncTask`. 
  * When the result comes, update the UI (on the main thread and not in whatever thread `AsyncTask` ended up running). 
  * Enable the "Add friend" button and listen to it, calling the server if pressed to verify that the friend can be added (one more `AsyncTask` \+ main thread post tap dance). 
This implementation is straightforward but it's very scattered. You will very likely end up with a lot of empty methods added just to satisfy listener requirements, storing state in fields to communicate between the various asynchronous tasks and making sure your threading model is sound. In other words, a lot of boiler plate, a messy mix of headless and graphical logic and graphical update code spread a bit everywhere. 

There is a better way. 

## Kotlin and Android

I found Kotlin to be a very good match for Android even in the early days but recently, the Kotlin team has really cranked up their support for Android and adding specific functionalities for the platform in their tooling, which makes Kotlin even more of a perfect match for Android. 

Kotlin M11 was released about a week ago and it added a functionality that makes the appeal of Kotlin absolutely irresistible for Android: automatically bound resources. Here is how it works. 

Suppose you define the following View in your layout `activity_search.xml`: 

```xml
<Button ...
    android:id="@+id/addFriendButton"
>
```

All you need to do is add a special kind of import to your source: 

```python
import kotlinx.android.synthetic.activity_search.addFriendButton
```

and the identifier `addFriendButton` becomes magically available everywhere in your source, with the proper type. This basically obsoletes `ButterKnife/KotterKnife` (well, not quite, there's still `OnClick` which is pretty nice. Besides, Jake tells me he has something in the works). And if you press `Ctrl-b` on such an identifier, Android Studio takes you directly to the layout file where that View is defined. Very neat. 

## The server

For the purpose of this article, I'm just mocking the server. Here is its definition: 

```scala
trait Server {
    fun findUser(name: String) : Observable<JsonObject>
    fun addFriend(user: User) : Observable<JsonObject>
}
```

If you think this definition looks a lot like a [Retrofit](http://square.github.io/retrofit/) service interface, it's because it is. If you're not using Retrofit, you should. Right now, I'll be mocking this server by returning a set of hardcoded answers and also making each call sleep one second to simulate latency (and so we can see the progress bar on the screen). Note that each call on this interface returns an `Observable`, so they fit right in with our Rx implementation. 

In this example, I hardcoded the server to know about two friends ("cedric" and "jon") but only "cedric" can be added as a friend. 

## The Rx mindset

Switching to the Rx mindset requires you to start thinking in terms of event sources (observables) and listeners (subscribers). If this idea doesn't sound that novel, it's because it's not. This model was already being advocated in the book "Design Patterns" in 1994 and even in the early versions of Java twenty years ago (and no doubt you can find traces of it in the literature before that). However, Rx introduces new concepts in this idea that we'll explore in this series. 

So let's rethink our activity in Rx terms: what are event sources (I'll use the name "observable" from now on) in this activity? 

I can count four observables: 

  1. First, we have the `EditText`: whenever a new character is typed, it emits an event that contains the entire text typed so far. We can emit a new name once we have more than three characters. 
  2. Next is the name observable, which calls the server and emits the JsonObject it receives in response. 
  3. Next in the chain, we have a "user" Observable, which maps the JsonObject into a `User` instance with the name and id of that person. 
  4. Finally, the "Add friend" button is another observable: if the user presses that button, we make another call to the server with the `User` we have and we update our UI based on the results. 
There are various ways we can break this problem into observables and the final result depends on how you want to handle various tasks, which observables you want to reuse, the threading model you prefer, etc... 

## Implementation

### The "EditText" Observable

Let's start with our `EditText`. Its implementation is pretty straightforward: 

```kotlin
WidgetObservable.text(editText)
    .doOnNext { e: OnTextChangeEvent ->
        addFriendButton.setEnabled(false)
        loading.setVisibility(View.INVISIBLE)
    }
    .map { e: OnTextChangeEvent -> e.text().toString() }
    .filter { s: String -> s.length() >= 3 }
    .subscribe { s: String -> mNameObservable.onNext(s) }
```

Let's go through each line in turn: 

  * `WidgetObservable` turns an ordinary `View` into an `Observable`. It's a wrapper coming from RxAndroid that calls all subscribers with the full text whenever a new character is typed.
  * Next we reset the UI to its default state.
  * The `map` line converts an `OnTextChangeEvent` into a string. It's a purely convenience step, so that the next operators in the chain can deal with the context of the `EditText` as a String instead of having to repeatedly extract it from the event (`e.text().toString()` everywhere). 
  * Next, if the text is less than three characters long, we stop right there.`
  * Finally, we subscribe to the value we have obtained if we have reached this far: a string that's at least three characters long. We pass this string to our name observable. 


### The "name" Observable

```kotlin
val mNameObservable: BehaviorSubject<String> = BehaviorSubject.create()
```

A `BehaviorSubject` is a special kind of `Observable` that you can send events to after its creation. I like to think of it as an event bus, except that it's focused on a very specific kind of events (as opposed to an event bus that is used to post pretty much anything to). Using a `Subject` here allows me to create that `Observable` early and only post new events to it as they come in, which is what we did with the snippet of code above. 

Let's see how we use that `Observable` now, by simply subscribing to it, which means receiving names that have three or more characters in them. All we do is call the server and pass the result to the "user" observable: 

```kotlin
mNameObservable
    .subscribe{ s: String ->
        mServer.findUser(s).subscribe { jo: JsonObject ->
            mUserObservable.onNext(jo)
        }
    }
```

We're not quite done, though: we actually have another subscriber to that `Observable`: 

```kotlin
mNameObservable
    .subscribe { s: String ->
        loading.setVisibility(View.VISIBLE)
    }
```

We need to let the user know we just issued a network call, so we show the progress bar (this is a suboptimal implementation, this logic should be done at the server level, but we'll save this for later). 

Note that I'm intentionally hiding a very important part of this logic in order to stay focused on the topic, and this also explains why we have two separate subscriptions. I explain why at the end of this article. 

### The "User" Observable

Next, we have the `User` Observable, which gets notified when the server sends us a response to the query "Does the user named 'foo' exist?": 

```kotlin
mUserObservable
    .map { jo: JsonObject ->
        if (mServer.isOk(jo)) {
            User(jo.get("id").getAsString(), jo.get("name").getAsString())
        } else {
            null
        }
    }
    .subscribe { user: User? ->
        addFriendButton.setEnabled(user != null)
        loading.setVisibility(View.INVISIBLE)
        mUser = user
    }
```

This `Observable` does two things: it updates our UI and it maps the JsonObject response to our data class `User`. If the call was a success, we assign this value to the field `mUser`. 

### The "Add friend" Observable

Finally, we have the "Add friend" button, which only gets enabled once we have a valid `User`. If the user presses that button, we issue another call to the server to request that person to be added as a friend and then we update the UI depending on the response: 

```kotlin
ViewObservable.clicks(addFriendButton)
    .subscribe { e: OnClickEvent ->
        mServer.addFriend(mUser!!)
            .subscribe { jo: JsonObject ->
                val toastText: String
                if (mServer.isOk(jo)) {
                    toastText = "Friend added id: " + jo.get("id").getAsString()
                    editText.setText("")
                } else {
                    toastText = "ERROR: Friend not added"
                }
                Toast.makeText(this, toastText, Toast.LENGTH_LONG).show();
            }
    }
```

## Stepping back

This is a very different implementation of how you would write the code with regular Android calls, but in the end, it's not just compact but it also divides our entire logic in four very distinct components that interact with each other in very clear ways. This is the macro level. At the micro level, these four components are not just self contained, they are also highly configurable thanks to operators, operations you can insert between your Observable and your Subscriber and which transform the data in ways that are easier for you to handle. I only have one such example of this in the code above (transforming an `OnTextChangeEvent` into a `String`) but you get the idea. 

Another benefit that should be immediately obvious to you even if you don't buy into the whole Rx paradigm shift yet is that thanks to Rx, we now have a universal language for observables and observers. I'm sure that right now, your Android code base contains a lot of such interfaces, all with subtly different method names and definitions and all needing some adapaters to be inserted before they can talk to each other. If ever you felt the need to write an interface with a method called `"onSomethingHappened()`", Rx will be an immediate improvement. 

### Operators

I have barely touched upon operators and this topic in itself is worthy of an entire book but I'd like to spend a few minutes to give a quick example of the power of operators. 

Going back to our activity, remember that as soon as the user types more than three characters, we send a query to the network for each character typed. This is a bit wasteful: a lot of phone users are very fast typists and if they type letters in quick succession, we could be sparing our server some extra work. For example, how about we define that we only call the server when the user stopped typing? 

How do we define "stopped typing"? Let's say that we'll decide that the user stopped typing if two keypresses are separated by more than 500ms. This way, a quick typing of "cedric" will result in just one server call instead of four without this function. How do we go about implementing this? 

Again, the traditional approach would mean that each time our text change listener is invoked, we compare the current time with the timestamp of the last character typed and if it exceeds a certain value, we trigger the event. 

As it turns out, observables have an operator that does this for us called `debounce()`, so our code becomes: 

```kotlin
WidgetObservable.text(editText)
    .doOnNext {(e: OnTextChangeEvent) ->
        addFriendButton.setEnabled(false)
        loading.setVisibility(View.INVISIBLE)
    }
    .map { e: OnTextChangeEvent -> e.text().toString() }
    .filter { s: String -> s.length() >= 3 }
    .debounce(500, TimeUnit.MILLISECONDS)
    .subscribe { s: String -> mNameObservable.onNext(s) }
```

I know what you're thinking: "You just picked a problem that could be solved by an operator that already exists". Well, kind of, but that's not my point. First of all, this is not a made up problem and I'm sure a lot of developers who write user interface code will agree that this is pretty common. 

However, my point is more general than this: the `debounce()` operator has nothing to do with Android. It is defined on `Observable`, which is the base library we are using. It's an operator that's generally useful to have on any source that emits events. These events might be graphical in nature (as is the case here) or of any other kind, such as a stream of network requests, coordinates of a mouse cursor or capturing data from a geolocation sensor. `debounce()` represents the general need for getting rid of redundancies in streams. 

Not only do we get to reuse an existing implementation without having to rewrite it ourselves, we preserve the locality of our implementation (with the traditional approach, you would probably have polluted your class with a couple of fields) and we maintain the composition abilities of our observable computations. For example, do you need to make sure that the user is not adding themselves before calling the server? Easy: 

```kotlin
WidgetObservable.text(editText)
    // ...
    .filter { s: String -> s.length() >= 3 }
    .filter { s: String -> s != myName }
```

## Wrapping up

At this point, you should probably take a look at [the full source](https://github.com/cbeust/kotlin-android-example/blob/master/app/src/main/kotlin/com/beust/example/SearchActivity.kt) so you can step back and see how all these pieces fit together. It's obvious to me that the view of decomposing your problem in terms of observables that emit values that subscribers observe is extremely powerful and leads to cleaner, more self contained and composable code. The non-Rx version of this class feels incredibly messy to me (a lot more fields holding state, methods added just to satisfy slightly incompatible listener interfaces and a total lack of composability). 

Having said that, our work here is not over: 

  * The threading model is all wrong. I intentionally omitted any thread consideration in this article in order to stay on topic but the code as it is right now is extremely suboptimal. It works but you shouldn't ship it in its current form. In the next installment, I will show how Rx makes it trivial to get Android's multithreaded model right.
  * There is a lot of UI code peppered through the business logic. It's messy, it obfuscates how our UI works and it's hard to maintain. We'll have to fix that as well. 
Stay tuned! 

_Update: Discussion on[reddit](http://www.reddit.com/r/androiddev/comments/305k8o/android_rx_and_kotlin_a_case_study/)._

Read [part 2](http://beust.com/weblog/weblog/2015/04/05/android-rx-and-kotlin-part-2/).
