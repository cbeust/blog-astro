---
title: Rehabilitating the singleton pattern
date: '2011-03-10T11:59:09'
slug: rehabilitating-the-singleton-pattern
categories:
- General
comments:
- id: 8818
  author: Elliotte Rusty Harold
  date: '2011-03-10T12:16:53'
  content: 'And while we''re on the subject of rehabilitation, can we please rehabilitate static *methods*? I''m really getting tired of hearing people naively rejecting any code that has the keyword static somewhere. Amusingly these are sometimes the same folks arguing vociferously for closures, Haskell, and functional programming. Even funnier are the singleton classes I''ve seen that exist simply to hold static methods.

    Static state has real problems as you point out. However a static method that does not interact with any static state, i.e. a pure function, is harmless and easy to test. Indeed if a method does interact with the state of its containing object in any way, it more often than not would be  better off static.'
  replies: []
- id: 8819
  author: Cedric
  date: '2011-03-10T12:19:13'
  content: Good point, Elliote. I have long time argued that static methods are less coupled than non-static ones since they don't have any dependency on a "this" object. They are also easier to refactor for that reason.
  replies: []
- id: 8820
  author: Casper
  date: '2011-03-10T12:25:02'
  content: 'Very interesting. One thing I have never understood about the singleton and DI debate, is why not just use the service provider API''s build into Java?

    No need for complex injection containers that way, you just let your build script control your dependencies through what''s on the classpath.'
  replies: []
- id: 8821
  author: Matt B
  date: '2011-03-10T12:30:54'
  content: 'I think that you might be largely redefining what "the Singleton pattern" means here.

    I don''t think that anyone has ever argued that the pattern means having one instance of a class. Rather, I''ve always seen the pattern defined as a class that creates it''s only instance and enforces that only this one instance can be created. It''s this enforcement - tying together the behavior of the class with logic about how many instances of the class can exist - that people attack and which is a death to testability.

    I don''t believe anyone arguing against the Singleton pattern was actually arguing against the concept of having just one instance of the object created at runtime.'
  replies: []
- id: 8822
  author: Ben Hardy
  date: '2011-03-10T13:08:56'
  content: '(blatant fanboyism) Scala''s design recognizes the utility of singletons as proper objects and supports them in the language at great convenience to the developer, compared to Java. Just declare it as "object" instead of "class" and you''re done.

    It would be interesting to see how well these interact with DI frameworks.'
  replies: []
- id: 8823
  author: Alex Feinberg
  date: '2011-03-10T13:29:36'
  content: There's a world of difference between singletons created using statics and "pseudo-singletons" injected using Guice (with .bind(..).asEaglerSingleton() or in .in(Scopes.SINGLETON)). Can we even call the latter a proper singleton? The latter can be substituted with a mock object for testing, re-factored to no longer be a singleton; the former can't be. I avoid creating "true" singletons, even non-framework based DI (using a class in which the instances are created or -- if in Scala -- using Traits) is a much nicer way (although I prefer to use Guice -- whenever possible -- in both Scala and Java).
  replies: []
- id: 8824
  author: Cedric
  date: '2011-03-10T13:30:52'
  content: 'Ben: not really, no. Scala''s companion objects are just a step up over creating your singleton in main() and passing it around, and they pretty much offer none of @Inject''s benefits.'
  replies: []
- id: 8825
  author: Dan Fabulich
  date: '2011-03-10T14:50:53'
  content: For testability, we don't really need to worry about statics anymore, at least in Java. Just use PowerMock or JMockIt; they let you mock out static method calls and constructors.
  replies: []
- id: 8826
  author: Alex Ruiz
  date: '2011-03-10T18:11:23'
  content: 'Hey C??dric,

    I was just writing a similar blog post ("Not all Singletons are Evil" - I even have a picture Justin Powers and Dr. Evil on the post!) I was making a similar case for them: as long as Singletons are injected and they don''t have mutable static state, they are fine.

    I guess I''ll post my entry anyway :)

    Cheers!

    -Alex'
  replies: []
- id: 8827
  author: Bob Lee
  date: '2011-03-10T21:46:33'
  content: 'From Javapolis ''07: http://www.parleys.com/#st=5&amp;id=59&amp;sl=38

    Great minds think alike.

    P.S. I had hurt my back and was on muscle relaxers, hence the speech impediment. ;-)'
  replies: []
- id: 8828
  author: Alex Snaps
  date: '2011-03-11T00:24:38'
  content: If I remember correctly though, Matt, the GoF book mentions the registry approach (name/reference pairs) to access one single instance of an object. While I agree most of the code in the book does use the static field approach to the Singleton (isn't the Registry itself implemented that pattern?), I'm not sure it did define Singleton as being tied to the static instance/getInstance() approach. Yet, I might remember wrong. The book's in some box somewhere in the attic (shame on me) ;-)
  replies: []
- id: 8829
  author: Samuel Tardieu
  date: '2011-03-11T01:20:55'
  content: 'It looks from your answer to Ben Hardy that you''re confusing Scala companion objects with singleton objects. The latter may be used with dependency injection, and the livetime of a singleton object depends on its scope (it is an instance, it doesn''t use static at the bytecode level).

    For an example, see https://gist.github.com/865697'
  replies: []
- id: 8830
  author: Mick Killianey
  date: '2011-03-11T01:34:00'
  content: '+1 to Matt B:  I think you''re right that an important part of GoF Singletons is the *enforcement* of singleton-ness.  If the original GoF-Singleton is a GlobalSingleton, this post seems to be discussing an ApplicationSingleton, which has a different best-practice.  Perhaps:

    "GlobalSingletons exist and have a natural enforcement mechanism in Java: use static (or enum).  ApplicationSingletons exist, but there is no natural language mechanism to enforce them, and using them with the global enforcement mechanism is problematic."

    Although...is OSGi a solution to this, since it scopes GlobalSingletons to application-level?

    @Ben Hardy:  Since Scala is mostly geared at writing application-level code, some feel it''s wrong-headed of the language to make it any easier to create SystemSingletons (which are rare) instead of ApplicationSingletons (which are common).'
  replies: []
- id: 8831
  author: Jon Vaughan
  date: '2011-03-11T05:38:22'
  content: You should implement singletons as single element enums (as recommended in effective java if i remember correctly).  No statics required.
  replies: []
- id: 8832
  author: Craig
  date: '2011-03-11T06:02:26'
  content: '@Ben, @Cedric: There''s huge benefits of Scala''s companion objects that you''re missing. They are implemented (at the bytecode level) without static state or methods. They can implement interfaces and be subclassed. That means you can write new MyClass(Singleton) but have the constructor for MyClass expect a SingletonInterface and you can pass in a SingletonMock in a unit test.'
  replies: []
- id: 8833
  author: Craig
  date: '2011-03-11T06:18:20'
  content: '@Jon The java enum keyword results in a bunch of code generation. If you look at the bytecode, it does use statics.'
  replies: []
- id: 8834
  author: Rog??rio Liesenfeld
  date: '2011-03-11T06:59:52'
  content: 'In the "Pattern Hatching" book, John Vlissides (one of the GoF authors) explains that the "single instance" provided by a Singleton is *per-context*, not necessarily per system/application. In Java, you don''t need to have exactly one singleton instance per JVM instance (process); you could have, for example, one singleton instance per thread, by using ThreadLocal storage. It would still be a Singleton.

    Personally, I think the Singleton pattern is fine. The problem is that it is often abused for objects that could perfectly well be instantiated locally as needed (and later reclaimed by the GC). My impression of typical DI framework usage is that such abuse gets exacerbated, as a consequence of the "singleton" scope being the default.'
  replies: []
- id: 8835
  author: Josh Berry
  date: '2011-03-11T07:53:57'
  content: 'I have found that the most evil static construct in java is the constructor.  Easiest example to show what I mean is to consider ArrayList, if you are using it by constructor, then changing out which list you are using would be a pain.  If, however, you are using a static factory method, then you can just change that factory method and not have to change everywhere it is called.

    Even better, look at any of the collections returned by Collections2, Lists, etc of the guava framework.  They could completely change those implementations removing classes at a whim, and as user you would never care, because removing a class does not necessitate changing which "static" method is used to instantiate it.'
  replies: []
- id: 8836
  author: Pete
  date: '2011-03-13T01:30:30'
  content: The problem with the singleton pattern is that it uses type to enforce the arity, and so the assumption that there is only one gets baked in. Unfortunately, the assumption is often brittle in the face of requirements change (e.g. when a colleague created code for an editor to edit a document, he did so with a singleton instance. When the clients wanted to open two documents and compare, all the code had to be refactored to work with a reference to one of many documents rather than the global ). Having the facility to inject zero, one or many of an object is a completely different pattern, and so doesn't cause the developers to make that assumption that there is only the single instance - code written against injection won't assume that, even if it only ever gets a single instance injected.
  replies: []
- id: 8837
  author: jmarranz
  date: '2011-03-13T09:07:43'
  content: 'My opinion at your cloned blog post at JavaLobby

    http://java.dzone.com/articles/rehabilitating-singleton'
  replies: []
- id: 8838
  author: cmk
  date: '2011-03-15T01:26:12'
  content: 'I am no expert in Java but in Objective-C and in Objective-C/Foundation there is at least one singleton that makes sense and maybe this also applies to Java/Scala in some way. In Objective-C we have collection classes (arrays, maps, etc.) that work very much like List/Map in Java but in Objective-C you cannot add nil (similar to null but no the same) to a collection. You always have to add a real object/pointer to an object to a collection. But what if you have an algorithm that needs to store nil/null in a collection to mark something? In Objective-C there is a singleton class called NSNull which you can use for that. It simply represents nil/null but its an object. By having NSNull implemented as a singleton you can add millions of NSNulls to a collection without creating millions of objects which would really hurt. I made tests to see what would happen if NSNull weren implemented as a singleton. Result: The majority of apps would require up to 100% more memory for doing simple
    things. All the frameworks assume NSNull to be very memory efficient and implementing it as a regular class would destroy that. I think there is a similar concept of null in Scala but as I said I am no Java nor Scala expert. Just my 2 cents.'
  replies: []
- id: 8839
  author: 'Genigraph : Le Blog'
  date: '2011-03-21T05:02:48'
  content: '[...] article int??ressant sur la??  R??habilitation du Singleton  et en creux de l&#8217;utilisation des m??thodes statiques et de l&#8217;injection pour am??liorer [...]'
  replies: []
- id: 8840
  author: Bill Kress
  date: '2011-03-24T10:09:36'
  content: 'Unless I misunderstood something you are discussing both the singleton pattern and dependency injection.

    Maybe it''s just me, but I keep these VERY separate in my head.   The singleton pattern can only return one object and one type of object, that is the problem with it.

    DI, fixes the problems with the singleton pattern.

    Keeping these two completely separate allows you to easily say what part of the pattern is evil (Singletons) and what part follows the holy path (DI)

    I guess an easy way to differentiate here is to say that if you can easily mock it, it''s not a singleton.  If what''s returned to your code can be switched depending on state, it''s not a singleton.

    However, considering what you''ve done with testing, I''m pretty sure I misread something--you already know this--or perhaps you are just more easy-going with your definition of singleton.'
  replies: []
- id: 8841
  author: codematrix
  date: '2012-08-11T08:12:41'
  content: "It's not that singletons themselves are bad but the GOF design pattern is. The only really argument that is valid is that the GOF design pattern doesn't lend itself in regards to testing, especially if tests are run in parallel.\nUsing a single instance of an class is a valid construct as long as you apply the following means in code:\n 1. Make sure the class that will be used as a singleton implements an interface. This allows stubs or mocks to be implemented using the same interface\n 2. Make sure that the Singleton is thread-safe if necessary.  That's a given.\n 3. The singleton should be simple in nature and not overly complicated.\n 4. During the RUNTIME of you application, where singletons need to be passed to a given object, use a class factory that builds the depending object and have the class factory pass the global singleton instance to the depending object that requires it.\n 5. During TESTING and to ensure deterministic behavior, create the singleton class as separate\
    \ instance as either the actual class itself or a stub/mock that implements its behavior and pass it as is to the object that requires it. Don't USE the class factor that creates that object under test that needs the signleton during test as it will pass the global singleton  instance, which defeats the purpose. But rather, create the class under test exactly how the class factory would have created but with the added benefit of substituding the global singleton with a copy or stub/mock.\nWe've used Singletons in our solutions with a great deal of success that are not tightly bound, extensible, replaceable and are testable, ensuring deterministic behavior in parallel test run streams.\ncodematrix"
  replies: []
- id: 8842
  author: Java | Annotary
  date: '2013-06-01T11:50:16'
  content: '[...]  Sort:  Newest Oldest Title Publisher   More from Kyle Poole:    Miscellaneous         Sort Share   beust.com &nbsp; &nbsp; &nbsp; 1 minute [...]'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/design-patterns.png)

["Design Patterns: Elements of Reusable Object-Oriented Software"](http://en.wikipedia.org/wiki/Design_Patterns) came out in 1994 and it changed the software engineering landscape. What made this book unique is that it wasn't really based on code (although it did contain a decent amount of it) but on terminology. It picked up general ideas and concepts, captured them in diagrams and, most importantly, gave them a name. 

## The power of names

Nobody had really thought about doing that before, and the idea was so good that even today, fifteen years later, most of these names are still in common use. You won't come across a developer who has never heard about Singleton, a Visitor, a Factory or a Façade. 

Of course, the science of software engineering has advanced quite a bit since 1994, and some of the concepts explained in the book came under attack. For example, we know a lot more about testing now, and this past decade has allowed us to identify techniques that make testing easier, and also anti-patterns that tend to get in the way of making our code testable. 

Of all the design patterns from the book that have been criticized, none has taken as much of a beating as the Singleton. Not a day goes by without reading in blogs or irc that "Singletons are evil" and that you should avoid them at all costs. What's surprising is that I read this coming from senior developers, and this statement tends to deeply puzzle more junior developers who suddenly find themselves having to rewrite a piece of code that they thought was quite natural and officially acknowledged as a good coding practice. 

Here is the truth: 

### Singletons are fine as long as you don't implement them with static  
  
---  
  
## Scoping it out

Let's take a closer look at this statement. 

Singletons are very natural entities in a software engineering. Regardless of the kind of code you write (front end, back end, embedded in a browser, running in a container, etc...), you will most likely need to talk to certain services that only need to exist as a single instance. It's also no surprise that popular dependency injection frameworks such as Guice and Spring [explicitly](http://google-guice.googlecode.com/svn/trunk/javadoc/com/google/inject/Scopes.html#SINGLETON) [support](http://static.springsource.org/spring/docs/1.2.x/reference/beans.html#beans-factory-modes) the Singleton pattern. 

Don't feel bad for feeling the need to implement a certain concept as a Singleton, it's perfectly natural. 

So what's wrong with statics? 

There is ample documentation on the problems that static variables and methods (but mostly variables) cause, but in nutshell, they make testing and concurrency more challenging, and as such, they should be avoided. The main problem is that static defines a scope that's even bigger than the application itself. It's a state that will only disappear once the class that contains it gets unloaded, so frameworks have very little room to control its life cycle. Another way to look at it is that the `static` scope is beyond the reach of Java programs and lives in the realm of the JVM. 

This is really the only problem. If we can find ways to have singletons that are more narrowly scoped, then the concerns I mentioned above disappear. 

The next smaller scope to the one that static provides is instance: the value will remain live as long as someone is holding on to a reference to the object, but once that is no longer the case, this value is gone. 

One way to improve on the static scope would be to create all your singletons in your main method and then pass them down to your application. With this change alone, you have suddenly made your entire application much easier to test and easier to reason about from a concurrent stand point. 

Once you start going down that path, you start wondering if this "main" scope isn't too broad. If a singleton you create in your main method is not needed until way further down the stack frames, maybe there is no point in exposing that singleton to your entire application. Is there any way that you could either create (ideal case) or at least expose (second best case) that singleton only to the section of your code that needs it? 

This code structure also rises another question: it's not exactly convenient to create a bunch of singletons in your main method and then pass them "down". How do you do that, anyway? Ideally, you pass them as parameters to the methods you are calling, but that is not going to scale very well, never mind the fact that your method signatures are going to start looking like monsters. Updating your entire call chain whenever you need access to a new singleton is an absolute disaster since you will have to add this parameter to the signature of each method. 

One way to mitigate this problem is to group all your singletons in one class called, say, `Configuration`, and only pass that class around. If ever you need one more singleton down the road, you just add it to this class and you don't need to change any method signature. That's better. 

We are still exposing a lot of code to all these singletons, though, and even that uber `Configuration` parameter looks like extra weight on these methods (most of which might just pass them around and not even use them). 

## Injecting for fun and profit

This is where the `@Inject` annotation comes in. Initially popularized by Guice, this annotation ended up being promoted to a standard by [JSR 330: "Dependency injection for Java](http://jcp.org/en/jsr/detail?id=330)". I'm not going to go into details on how to use this annotation (check out [Guice's excellent documentation](http://code.google.com/p/google-guice/wiki/TableOfContents)), but I'll just limit my comments to the topic of this post, which is how to implement singletons properly. 

Using `@Inject` to gain access to your singletons solves the following problems: 

  * No `static`. 
  * The creation of the singleton is externalized. You don't need to worry how or where that singleton is created, you just need to specify that you need it. 
  * Finer scope. Only the class that you declare this injected field in will have access to that singleton. A side benefit of this is that you no longer need to pollute all your method signatures in order to pass this singleton all the way down the stack frames. It's declared as a field and the dependency injection will automatically assign it at start up time. 
  * Finer granularity. You no longer need to pass a monster `Configuration` object that contains all your singletons around: just specify which singletons you need exactly. 
This post is getting a bit long already so I'll stop for now. There is much more to cover on the subject of singletons and, more broadly, of dependency injection, which I'll try to cover in a future post. 

In the meantime, let's all agree to acknowledge that when implemented and used properly, the Singleton is a very useful design pattern.
