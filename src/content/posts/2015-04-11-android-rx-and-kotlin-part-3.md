---
title: 'Android, Rx and Kotlin: part 3'
date: '2015-04-11T21:41:20'
slug: android-rx-and-kotlin-part-3
categories:
- Android
- Kotlin
- Rx
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/prestige.jpg)

This is part three of my Rx - Android - Kotlin series ([part 1](http://beust.com/weblog/weblog/2015/03/23/android-rx-and-kotlin-a-case-study/), [part 2](http://beust.com/weblog/weblog/2015/04/05/android-rx-and-kotlin-part-2/)). 

This article has three parts, [much like a magic trick](http://www.imdb.com/title/tt0482571/quotes?item=qt0441491): 

  * The Pledge: we will implement a simple GUI operation with Rx and Kotlin on Android. 
  * The Turn: we will create a brand new Rx operator. 
  * The Prestige: we will use a standard feature of Kotlin for a final _coup de gr âce_ in code elegance. 
Let's get started. 

## The Pledge

We want to detect triple taps. There are various ways to define what a triple tap is so let's just settle on a simple one: three taps are considered a triple tap if the first and last tap are separated by less than five hundred milliseconds. 

With a traditional (non Rx) implementation, you would probably have two fields maintaining the timestamps of two taps ago `[t-2]` and that from one tap ago `[t-1]`. When a new tap arrives, `[t]`, you compare the timestamp of `[t]` and `[t-2]` and if it's less than five hundred milliseconds, we have a triple tap. Then you shift down the timestamps: `[t-2]` receives `[t-1]` and `[t-1]` receives the current timestamp. Repeat. 

This approach is pretty standard but it's also ugly: it bleeds state into your class and it allows for little flexibility in terms of filtering, transforming and composing. 

Let's look at this problem from an Rx perspective. 

## The Turn

As I explained in the first article of this series, we need to change our perspective to find out how to implement this with Rx. We are now looking for emitters and consumers of events. 

The emitter is pretty obvious: it's a tap. On Android, we can just create an `Observable` from a `View` with the convenient [RxAndroid project](https://github.com/ReactiveX/RxAndroid). Once we receive the tap events from the view, we need to use an operator which will pass them in sets of threes. This is sometimes referred to as a "sliding window". For example, if you have an `Observable` that emits the numbers from 0 to 5, you would expect a sliding window of size 3 to receive the following parameters: 

```kotlin
[0, 1, 2]
[1, 2, 3]
[2, 3, 4]
[3, 4, 5]
```

Any list that is not of size three is ignored. Then, whenever our operator is notified, we simply extract the timestamps of the first and last index of that list and we see if the difference is less than five hundred milliseconds. 

For the sake of learning, we'll assume that such an operator doesn't already exist and we'll implement it ourselves (as it turns out, this is not true, jump to the bottom of this article if you want to find out). 

## Implementing an Rx operator

I don't want to dive too deep into the internals of how Rx works so I'll just focus on the important parts here. Fundamentally, an operator is like a `Callable`: it receives parameters and it returns a value. That value is a `Subscriber` which needs to implement methods you are probably familiar with now after a few hours spent on Rx: `onNext()`, `onCompleted()` and `onError()`. 

We're just going to focus on `onNext()` for now in order to keep this article short and because this is where our main logic resides. The implementation is pretty simple: 

```kotlin
class SwSubscriber<T> (val child: Subscriber<in List<T>>, val size: Int)
        : Subscriber<T>(child)
{
    val buffer = ArrayList<T>(size)
    override fun onNext(t: T) {
        buffer.add(t)
        if (buffer.size() == size) {
            child.onNext(ArrayList(buffer))
            buffer.remove(0)
        }
    }
    override fun onCompleted() { /* ... */ }
    override fun onError(e: Throwable?) { /* ... */ }
}
```

We maintain a buffer of size three and we accumulate the elements from the `Observable` in it. When that buffer reaches the size three, we emit it and we shift the buffer. Note that when I call `onNext()` on the buffer, I pass a copy of the list and not the list itself. This is just a precaution against the fact that the subscriber might decide to alter the list I pass them, which would break our operator. 

Now that we have a subscriber, we can create our operator: 

```kotlin
class SwOperator<T>(val n: Int) : Observable.Operator<List<T>, T> {
    override fun call(child: Subscriber<in List<T>>): Subscriber<in T>? =
            SwSubscriber(child, n)
}
```

And this is how we use it: 

```kotlin
Observable.just(1, 2, 3, 4, 5)
    .lift(SwOperator(3))
    .subscribe { println("Received ${it}") }
```

... which prints: 

```kotlin
Received [1, 2, 3]
Received [2, 3, 4]
Received [3, 4, 5]
```

## The Prestige

We're not quite done yet: you might have noticed that because our new function is, obviously, not part of the `Observable` class, we need to use a helper method called `lift()` in order to insert our code in a composition chain. Of course, we can always send a pull request to the project to have our new operator added, but we don't have to wait: we can define an extension method in Kotlin to do just that: 

```kotlin
fun <T> Observable<T>.slidingWindow(n: Int) =
    lift(SwOperator(n))
```

And now we can write: 

```kotlin
Observable.just(1, 2, 3, 4, 5)
    .slidingWindow(3))
    .subscribe { println("Received ${it}")
```

Our new operator looks just as if it were part of the Rx library. 

## Android

Let's close the loop on the initial problem so we can move on to more interesting things: now we want to use our sliding window to report triple taps. 

Using RxAndroid, we have the convenient `clicks()` method that turns taps from a `View` into a stream of events. Unfortunately, these events are simple wrappers that don't carry with them the timestamp of the tap, but that's not really a problem: we just need to convert our stream of events into a stream of timestamps and we can add our logic then: 

```kotlin
    ViewObservable.clicks(view)
	    .map { System.currentTimeMillis() }
	    .slidingWindow(3)
        .filter { it.get(2) - it.get(0) < 500 }
        .subscribe { println("Triple tap!") }
)
```

This is another example of the power of composition: no need to create our own events or our own wrappers. When you look at problems in the form of streams of data that you can transform at will, a lot of problems become trivial. 

## Rx and the sliding window

Note that Rx already has the functionality we implemented in this article: it's called `buffer()` and you pass it not just the window size but also by how many elements you want to skip. `buffer()` behaves a bit differently from our implementation, though, by notifying subscribers of windows that are smaller than the desired size: 

```kotlin
        Observable.just(1, 2, 3, 4, 5)
            .buffer(3, 1)
            .subscribe { p("Received ${it}")
```

prints: 

```kotlin
[main] Received [1, 2, 3]
[main] Received [2, 3, 4]
[main] Received [3, 4, 5]
[main] Received [4, 5]
[main] Received [5]
```

## Wrapping up

The concept of a sliding window is very common in all domains. Detecting multiple taps in a user interface is an example but you could also conceive using this to determine the bounding box of multiple taps. Stepping out from the graphical domain, your stream could contain geo locations and you could use the sliding window to determine instant or average speed. A few years ago, I actually posed [a coding challenge to implement a sliding window in order to throttle calls to a server](http://beust.com/weblog/weblog/2012/09/02/coding-challenge-a-sliding-window-map/). Needless to say, I would use Rx for this today. 

Hopefully, this article gave you some insight on the benefits that Rx can bring to your application, regardless of the domain. Revisiting problems with the Rx philosophy is always an interesting exercise which often results in simpler, more elegant solutions. 

Read [part 1](http://beust.com/weblog/weblog/2015/03/23/android-rx-and-kotlin-a-case-study/), [part 2](http://beust.com/weblog/weblog/2015/04/05/android-rx-and-kotlin-part-2/).
