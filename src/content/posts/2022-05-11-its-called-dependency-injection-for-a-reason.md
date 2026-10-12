---
title: It's called Dependency "Injection" for a reason
date: '2022-05-11T18:04:27'
slug: its-called-dependency-injection-for-a-reason
categories:
- Uncategorized
comments:
- id: 10845
  author: Michael Bayne
  date: '2022-05-11T20:43:39'
  content: "Scala 3's implicit function arguments were designed for purposes like this, among other things. https://docs.scala-lang.org/scala3/reference/contextual/using-clauses.html\r\n\r\nI recall an article or presentation from Martin taking exactly about this when he first proposed implicit function arguments for Dotty but I can't track it down at the moment."
  replies: []
- id: 10852
  author: Laurent Simon
  date: '2022-05-18T05:18:40'
  content: 'It''s not intuitive nor readable. A keyword between the two parameters sets will be welcome, like : `fun sendPacket(packet: Packet) using (logger: Logger)`'
  replies: []
---

It's fascinating to me that so many years after the concept of Dependency Injection (DI) became popular, so many people still don't seem to understand what it is and why it's such a fundamental idea that transcends languages.

> "I already have Dependency Injection, it's called 'passing parameters'"
> 
> \- Pretty much everyone in a discussion about Dependency Injection

No, passing dependencies as parameters is not DI and it's actually a terrible way of building software. Let's explore why.

## Dependency Injection, the wrong way

Let's imagine a typical application that starts at `main()` and then ends up calling a function you are working on, let's call it "`sendPacket()`":
```kotlin
fun main() {
  f()
}

fun f() {
  g()
}

fun g() {
  sendPacket(packet)
}

fun sendPacket(packet: Packet) { ... }
```

Next, you decide you want to log whenever a packet is sent, so you need a logger. The traditional, non DI (and wrong) way to do this would be to instantiate this logger as high as possible (so it can be used by other functions) and then passed down:

```kotlin
fun main() {
  val logger = Logger()
  f(logger)
}

fun f(logger: Logger) {
  g(logger)
}

fun g(logger: Logger) {
  sendPacket(packet, logger)
}

fun sendPacket(packet: Packet, logger: Logger) { ... }
```

Here are some things that are immediately apparent in this new version of the code:

  * By adding this dependency to `sendPacket()`, I have impacted all the callers, who now have to pass a logger even though they never need one themselves.
  * Anyone who wants to call `sendPacket()` now needs to find such a logger, even though all they want to do is send a packet.
  * `sendPacket()` is now exposing private details to the outside world, its encapsulation is now completely broken.
  * This approach will never scale. Imagine a code base of millions of lines of code and the effect that adding a logger to one function will cause on the entire code base.



A few quick observations before we dive deeper:

  * _It is not the purpose of this article to analyze why being able to create these instances differently based on the deployment environment (e.g. production, testing, staging, benchmarking, etc...) is desirable._
  * _This problem statement generalizes to classes as well, except that you would pass these dependencies in the constructor with the same devastating effect._
  * _The monadic approach to this problem (using`Reader`) suffers from this exact problem (on top of introducing monads, which create even more issues)._



## A better approach

Having established that passing dependencies as parameters is not a good idea, what are our options?

Here are a couple:

  * _Make the dependencies global variables._  
We all know how bad an idea that is, but while it turns the code into an ungodly pile of spaghetti, it does address the encapsulation breaking aspect: functions can add dependencies to their implementations without impacting callers since these dependencies are no longer passed as parameters.
  * _Find a way to "inject" the dependency where it's needed, and only where it's needed._  
This way, the dependency can't be seen nor used by anyone that doesn't need it and callers are none the wiser.



And this is where the word "Injection" comes into play.

Java and Kotlin have a great mechanism for DI (they are not the only ones, but I'll focus on them since their approach is fairly well known by now).

It's very simple: you use the annotation `@Inject` to mark values as dependencies, and this annotation can be used in different places based on your scenario. The limitation of this annotation in Java and Kotlin is that it cannot be directly injected into a function (and just that function), so instead, we declare it in the class that this function belongs to, but the effect is the same:

```kotlin
class PacketSender {
    @Inject
    val logger: Logger

```kotlin
fun sendPacket(packet: Packet) {
    logger.log("Hello")
    // send packet
}
```

}
```

The encapsulation aspect is neatly fixed by this approach: the developer of the `PacketSender` class can add and remove dependencies with abandon without ever impacting the signature of `sendPacket()`, which means that its users will never break.

The next issue to address is how to instantiate a class like `PacketSender` with the right dependencies, but I will leave that aside since this is a problem that's pretty well documented and solved by the various DI libraries that are available today. Instead, I'd like to follow these observations with a short discussion about how we could improve on this mechanism even further.

## A language with native support for DI

As I mentioned above, the one limitation of the Java/Kotlin approach to DI is that the injection is still too broad: it needs to be done at the class level, which means these dependencies are visible to all the functions of the class. Can we do better?

Well, not with the current versions of Java and Kotlin, but let's think about what this could look like.

We have established that functions need two kinds of parameters:

  * "Business parameters", values that the function needs to perform its function.
  * "Dependency parameters" (or we could call them "Support" or "Utility" parameters), values that the function can use for reasons that are not directly related to its function and which should be kept as private implementation details. 



The interesting observation here is that these two kinds of parameters are coming from different origins, and the signature of the function should reflect that. Which led me to the following (hypothetical) syntax:
```kotlin
fun sendPacket(packet: Packet)(logger: Logger) {
    logger.log("Hi")
    // send packet
}
```

We now have two lists of parameters, with the second one being optional. Any parameter mentioned in that second list of parameters will have to be supplied by the DI runtime of the language and its parameters are only visible while inside the function. Callers of such functions only have to supply the parameters in the first list and can completely ignore the dependency parameter list.

With this approach, we achieve the desired encapsulation and we cleanly separate the parameters in two very distinct categories, which improves the readability of the code without compromising type safety. Dependencies are created "somewhere else" (to be defined, but like I said above, existing DI frameworks have given us plenty of interesting mechanisms to build these dependencies) and passed transparently to functions without ever impacting callers.

Guice's "Assisted Injection" offers a mechanism that's very similar to what I'm proposing ([here is an article with more details about it](https://www.beust.com/weblog/advanced-dependency-injection-with-guice/)), but other than that, I haven't found any language trying to solve this particular problem. Please let me know if you know of any!
