---
title: Parallel framework shoot out
date: '2011-01-13T10:23:49'
slug: parallel-framework-shoot-out
categories:
- General
comments:
- id: 8735
  author: Keith Sader
  date: '2011-01-13T10:30:55'
  content: 'From my cursory, limited, and largely ignorant survey of the concurrency landscape it seems that the actor model suffers from a fundamental data structure problem.  The folks who built LMAX talk about it at length in this presentation: http://www.infoq.com/presentations/LMAX

    While I can''t begin to dissect what they present it does seem like they have a fairly amazing parallel system built.'
  replies: []
- id: 8736
  author: Gordon J Milne
  date: '2011-01-13T11:14:20'
  content: 'At one point in the history of the car, all cars had controls for the advancement and retardation of the ignition spark. Does anyone''s car have that feature today?

    Today we have multiple ways of writing parallel code. Many of these solutions are similar and seem to involve some way to making locking easier/safer to use. However, the simplest model remains lock free code with no side effects. Scala seems to offer that, as does Erlang in the non-JVM world.

    In 5-10 years time we will all look back and wonder why we found parallel code so hard. By then we will have some language, or language feature, that makes writing such code easy and neatly hides all that complexity about locks if they turn out to be at all necessary.

    This sort of discussion brings to mind a favourite quotation - "if I wanted to get ther, I wouldn''t start from here"!'
  replies: []
- id: 8737
  author: Cedric
  date: '2011-01-13T11:16:26'
  content: '"However, the simplest model remains lock free code with no side effects"

    This is exactly the kind of claim that keeps being made without much data to back it up.

    Simpler in what terms? Lines of code? Readability? Maintenance? etc...

    Let''s see some objective comparison, because to me, a lock free model is certainly not obviously simpler.'
  replies: []
- id: 8738
  author: Toby
  date: '2011-01-13T11:50:07'
  content: 'Another framework / library to look at is kilim (http://www.malhar.net/sriram/kilim/), which uses some clever bytecode manipulation to allow for light-weight threads that interoperate via messages. So at the core, it''s another actor implementation, but still one worth noting.

    Also of note is Software-Transactional Memory (http://en.wikipedia.org/wiki/Software_transactional_memory), which takes a very different approach to concurrency by modeling critical sections in terms of transactions rather than locks. The most notable implementations are Haskell''s and Clojure''s built-in STM libraries.

    I think the assessment of java.util.concurrent is a bit faulty. The primary structures in j.u.c for better concurrency, namely the ExecutorService/CompletionService, are all based on various implementations of BlockingQueues. Insertion and retrieval on these queues results in locking the data structure, which can seriously hamper performance when the number of competing threads becomes nontrivial.

    Doug Lea''s Fork-Join framework is specifically designed to address this issue, by eliminating the synchronization bottleneck in all but the most necessary cases. Granted, his reference implementation leaves a bit to be desired in terms of API design, but at the core it''s a notable improvement over j.u.c. without a significant change in design - the core concept of creating a master "executor" and submitting tasks asynchronously remains.

    Actors are indeed a contentious topic, and I agree that they can be hard to debug and may lead to spaghetti code. However, they are still a useful abstraction, and some problems are much easier to model in a message-passing paradigm than in the more traditional producer/consumer model.

    A final note is that Scala''s Actor implementations are mostly built on top of Fork-Join, so they minimize locking and contention on the inbox queues as much as possible.'
  replies: []
- id: 8739
  author: Jos??
  date: '2011-01-13T11:52:17'
  content: 'Some thoughts about the "lock free" aspect of the Actors model : http://codemonkeyism.com/actor-myths/.

    My thoughts about parallelizing code : just beware, some algorithms work sequentially, but fail once parallelized. Think about simulated annealing, if you parallelize it, it doesnt converge anymore... annoying.'
  replies: []
- id: 8740
  author: Josh Berry
  date: '2011-01-13T13:21:13'
  content: I think the contender that you left out that will have the heaviest impact is Continuations.  I see C# just added them, and Scala has some on the way.  Not sure how long before other languages get something similar.  I know that Jetty has had them simulated for quite some time.
  replies: []
- id: 8741
  author: Josh Berry
  date: '2011-01-13T13:22:35'
  content: I should say I realize they aren't necessarily in the same realm.  I just think they will be used to solve much of what your every day "web programmer" is concerned with when it comes to concurrency and such.
  replies: []
- id: 8742
  author: Gordon J Milne
  date: '2011-01-13T14:32:01'
  content: '-- Simpler in what terms? Lines of code? Readability? Maintenance? etc??

    All of the above:

    * Simple so that I can understand what is being done without the task code being [overly] sprinkled with code to manage the paralleism.

    * The lines of code that are there are for the task in hand and there are few lines of code dedicated to the parallelization.

    * It needs to be readable so the less code that deals with parallelism aspect of the task, the better as far as I am concernedc.

    * Maintainability is very important. When you do maintenance you really want to work on fixing/extending the feature, you do not want to spend (i.e. waste) time on the parallelism aspects of the code if at all possible.

    I don''t have numbers for this because I have no ability to run any kind of project to evaluate which way is best. This is my gut-feel on the subject albeit gut-feel born of 20+ working years.

    In general I would prefer to use a language/model that kept the majority of developers away from manipulating locks since this is a known swampy area. I am more likely to trust developers from an RTOS background since they often have experience of deadlocking and are, therefore, less like to misuse locks.

    I agree with Jose, some algorithms do not parallelize well. My own limited experience has shown me that things are often done in parallel to improve throughput or to improve responsiveness.'
  replies: []
- id: 8743
  author: Marceli
  date: '2011-01-13T16:01:52'
  content: I thought that the benefit of the Fork Join Framework was improving performance rather than ease of development. I wrote my own benchmarks of large array quick sorts; Fork Join outperformed java.util.concurrent and single threaded approaches.
  replies: []
- id: 8744
  author: Vaclav Pech
  date: '2011-01-14T00:41:31'
  content: 'I''m very glad to see this topic has been brought up and I really appreciate the angle you took, Cedric. This is definitely an uncharted territory and we''ll probably see in the coming years how usable the various concurrency concepts are, which ones gain public popularity and which don''t.

    Also, thank you for the credits you gave to GPars. As a matter of fact, making concurrency in GPars approachable was one of the fundamental visions behind the decisions we''ve made along the way. Not to mention that using Groovy for the DSL layer helped a lot in this regard.

    Clearly, some concurrency concepts are more intuitive than others. Not to be forgotten, we''re comparing against using low-level synchronization primitives here, meaning against code with threads, locks, latches, barriers and such. Parallel collection processing, agents or dataflow, in my opinion, outdo j.u.c in almost all the aspects you mentioned (maintainability, testability, readability, debuggability, performance, reliability). These abstractions are each focused on particular problem domains and so can solve them really well.

    Actors, on the other hand, aim to be generic. They process messages asynchronously, need to be addressed directly and make decisions solely on the type and content of the message they receive. Using actors feels quite different compared to coding sequentially and the complexity that comes with the design may well be too much for people to be willing to handle in their applications. Maybe, the voices stating that actors are still too low-level for main-stream programming can be right.

    Now, when we got to this, I''d be interested to hear back what people think of the Active Object concept (http://en.wikipedia.org/wiki/Active_object), where asynchronous message processing hides behind a good all object facade, transparently turning all method calls on the object into asynchronous messaging. Maybe this could be a way for actors to gain acceptance?

    Once again, thanks a lot for opening up the discussion.'
  replies: []
- id: 8745
  author: Debasish Ghosh
  date: '2011-01-14T01:36:37'
  content: 'Nice discussion! It''s true that actors can be used to model a *specific* class of problem - it''s not a panacea for all concurrency problems on earth. So, as the saying goes, there''s no silver bullet.

    Regarding j.u.c, there''s no doubt about its utility and the value that the library adds to developers when writing concurrent programs in the JVM world. Incidentally Akka (http://akka.io) actors are also based on j.u.c abstractions.

    Actors and also other asynchronous frameworks lead to a programming model which often is not comfortable to all programmers. As Vaclev has mentioned above, hiding them behind good old method calls may often be a more desirable model. In Scala delimited continuations offer one such model where you can hide the message passing stuff behind method calls. Have a look at http://www.tikalk.com/java/blog/asynchronous-functions-actors-and-cps for a similar attempt using Scala actors and shift/reset based continuations.'
  replies: []
- id: 8746
  author: Klaus Baumecker
  date: '2011-01-14T04:02:48'
  content: I'm in favor of GPars as well, but not because it sits on top of j.u.c. Is this an advantage at all? I like it because of being really high-level and keeping me away from low-level thread programming. But what I would like even more is to avoid thinking about (the problems with) concurrency too much. That's where Clojure really raises my attention. Ok, Clojure is not mainly concerned with concurrency but with the management of state, which is where concurrency causes trouble. What I want to say, is that such concepts like state (or even concurrency itself) built into the language have advantages over frameworks. GPars falls partially into this area by providing a nice DSL (which is a language). Pure Java with a framework/library will always stay behind.
  replies: []
- id: 8747
  author: Alex Miller
  date: '2011-01-14T07:49:44'
  content: 'You seem to mention a mix of concurrency models and libraries (for example, GPars is really a library of DSLs for representing many different models).  That''s ok, just making an observiation.  If I were going to throw a few more on the pile I would mention Scala''s Akka framework which combines actors and STM, Clojure and its approach, data flow as a model that I don''t think has been fully exploited yet, and interesting things in the Microsoft world include CCR, Meier''s work on RX, etc.

    I''ve actually been thinking about this stuff a lot lately and I''ve written down some more thoughts at greater length here: http://tech.puredanger.com/2011/01/14/comparing-concurrent-frameworks/'
  replies: []
- id: 8748
  author: Daniel Serodio
  date: '2011-01-14T09:22:13'
  content: Cedric, you forgot to close an italics tag on the bottom of this post, so the rest of the page is all in italics.
  replies: []
- id: 8749
  author: Daniel Ribeiro
  date: '2011-01-14T09:23:54'
  content: 'Actor model can also be used to solve any map-reduce problem. I wrote an example using JRuby and the Actors from the Scala framework Akka:  http://metaphysicaldeveloper.wordpress.com/2010/12/16/high-level-concurrency-with-jruby-and-akka-actors/

    On this post I also showed how, as Alan Kay said, OO has more to do with message passing than with objects.'
  replies: []
- id: 8750
  author: Kevin Chalmers
  date: '2011-01-14T23:28:32'
  content: There is also the framework that GPars utilises underneath, JCSP (Communicating Sequential Processes for Jave), which has been around for a number of years as a standalone download (http://www.cs.kent.ac.uk/projects/ofa/jcsp/).  The main aims of the project are easy to understand and correct concurrency, with transparent distributed parallelism and mobility as new features.
  replies: []
- id: 8751
  author: Russel Winder
  date: '2011-01-15T09:32:54'
  content: 'JCSP is only an option dependency of GPars.  GPars offers support for Actor Model, Dataflow Model, and Data Parallelism Model as well as for Communicating Sequential Processes (CSP).  Indeed there is a road map for software transactional memory (STM).  The CSP support in GPars stems from Jon Kerridge''s GroovyCSP which is a wrapper around JCSP.  If you don''t use CSP then you don''t need JCSP.  It is also worth noting that the JCSP page is somewhat old and has not been updated to note that I build 1.1-rc5 and uploaded this to the Maven repository.

    Personally I am finding Actor Model restrictive because you have to work with a single message queue and hence introduce lots of case classes to wrap messages.  CSP has multiple input channels from which you can select which generally avoids the need for case classes.  However, CSP is a fully synchronous message passing system, Actor Model asynchronous message send seems somehow easier to reason about.  Dataflow Model is an interesting middle ground:  lots of input channels, no need for case classes, asynchronous message send, highly structured action triggering (like CSP, unlike Actor Model).'
  replies: []
---

The JVM concurrent (or parallel, I'm using these terms interchangeably although I'm aware they have subtly different meanings) worlds has been exploding with activity and innovations lately. It all started with the now veteran but extremely well designed `java.util.concurrent` package and more recently, we have seen Scala enter the fray with its [Actor Model](http://www.scala-lang.org/node/242), Groovy with [GPars](http://gpars.org/guide/guide/single.html) and Doug Lea's [Fork Join Framework (PDF)](http://gee.cs.oswego.edu/dl/papers/fj.pdf). Let me know if I forgot any. 

I find all these frameworks intellectually interesting but I'm still not quite convinced that either of the incumbents is superior to `java.util.concurrent` (although if I had to pick one, it would probably be GPars). Interestingly, all these frameworks intend to simplify concurrent programming but a lot of these claims are going pretty much unchallenged, or supported by trivial exercises that are biased toward the framework's own documentation. 

I'm keeping my mind open but so far, I haven't seen any blinding proof of either of these superiority claims. What I would really like to see is a non-trivial (i.e. requiring a few hundreds of lines of code to solve) concurrent problem written with `java.util.concurrent` and other parallel frameworks and a tentatively objective analysis of the pros and cons of each approach, on several axes: maintainability, testability, readability (more subjective), debuggability, performance, reliability, etc... 

My gut feeling is telling me that while the Actor/Immutable/lock free model appears simpler, it also introduces a radical shift in the way you implement your solution that might be detrimental to its maintenance on the long run. At the end, you might end up with a simple locking model (since there are no locks) but at the expense of a more spaghetti-ish structure, since all these actors are now sending asynchronous messages to each other and retracing and debugging such a flow can be challenging. 

Another gut feeling that I haven't been able to shake off is the fact that the actor model introduces a single locking choke point (the inbox queue) while Java's traditional locking approach allows you to position your lock wherever you want, and over an arbitrarily large (or small) portion of code. Determining such a locking can be challenging, but once you've solved that particular problem, it's hard for me to imagine that there are more optimal ways of solving this problem. 

I'm pretty optimistic about GPars because it's built on top of `java.util.concurrent` while offering Groovy's more compact syntax, which has the benefit of being simpler while very accessible for Java programmers. 

The first step would be to come up with a non trivial problem that is a good match for a parallel implementation... Any suggestions? 

_Update: here is a[timely discussion](http://groups.google.com/group/nodejs/browse_thread/thread/c334947643c80968?hl=en) about someone expressing the difficulty they're having switching to an asynchronous mindset. _
