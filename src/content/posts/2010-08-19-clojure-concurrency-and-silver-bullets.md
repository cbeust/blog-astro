---
title: Clojure, concurrency and silver bullets
date: '2010-08-19T20:18:57'
slug: clojure-concurrency-and-silver-bullets
categories:
- General
comments:
- id: 8410
  author: Nabeel Ali Memon
  date: '2010-08-19T20:31:05'
  content: That is an awesome myth-buster. Seriously, libraries like j.u.concurrent don't get the praise they deserve.
  replies: []
- id: 8411
  author: Brian Slesinsky
  date: '2010-08-19T20:47:48'
  content: I wonder about the comment that Java doesn't have concurrency support at the language level. The concurrency libraries couldn't be as robust as they are without a clearly specified memory model and language-level support for threads.
  replies: []
- id: 8412
  author: Cedric
  date: '2010-08-19T20:55:16'
  content: 'Brian: Java obviously does have low level language support for synchronization but I was referring to higher level constructs such as actors, syntax for message sending, etc...'
  replies: []
- id: 8413
  author: David Nolen
  date: '2010-08-19T21:01:14'
  content: 'Sometimes the Clojure fans are overly enthusiastic. I think Clojure is fairly reasonable about it''s claims around concurrency. Sometimes (not very often) performance is absolutely critical and manual locking is required. But for many tasks, trading some performance for programmer relief is simply the right path - Garbage Collection is the analogue.

    Take a look at the code at the bottom of this page, http://clojure.org/refs. That would be mind-numbingly painful with locks. Your viewpoint does less to poke holes in Bob''s claims than reveal your limited knowledge of just how much of an advantage Clojure can provide when it comes to concurrency over lower-level solutions.

    Also I find your tone to be fairly misleading - as if concurrency is a solved problem in the land of C, C++, Java. Why would a company like Apple be innovating on a consumer level OS level with solutions like Grand Central Dispatch if we were really already taking advantage of all our cores? And mind you, even Grand Central Dispatch is very low-level. It''s only really fun to use from much higher-level Objective-C APIs like NSOperation, NSOperationQueue.'
  replies: []
- id: 8414
  author: Marek Krj.
  date: '2010-08-19T22:34:51'
  content: 'I agree. Multithreading isn''t that difficult, it''s just a little bit different. You know, the fear of the unknown ;-). I don''t particulary like util.concurrent, but in principle you are right, it''s possible to write parallel code in an imperative language, I did it.

    On the I use some higher level abstractions as to introduce some discipline in my code, so that''s what Clojure etc. introduce at language level.  Well, that''s the question: hide complexity in the language or libraries?

    @David Nolen : libdispatch is for me just an way to make your asynchronous interactions more visible at the code level. Low-level, yes, but that''s C. What about Apple''s code block extension?'
  replies: []
- id: 8415
  author: Dan Creswell
  date: '2010-08-19T23:03:15'
  content: '@cedric: "First, a nit: when you write multi-threaded code, two processors shouldn??t scare you more than four. Either your code is multi-threaded safe or it??s not. The only thing that changes when you run it on multiple processors is that you are more likely to find bugs when you throw more processors at it."

    There is one other thing that scares me though not related to safety in concurrency - contention as processor count rises. Drives the need for different algorithms and finer-grained locking - the latter I guess can make it increasingly hard to maintain safety.

    @David: "Your viewpoint does less to poke holes in Bob??s claims than reveal your limited knowledge of just how much of an advantage Clojure can provide when it comes to concurrency over lower-level solutions."

    I think we need to be careful to differentiate between patterns and language. Many of the patterns used for concurrency in Clojure can be done in Java or other languages - Clojure might do some of it more efficiently Lines-Of-Code wise but that''s much less of an advantage.

    And there are some disadvantages to using STM - one can''t always just leave the "smart platform" to sort out concurrency for us. Transactions are fine but badly constructed ones at least (and even the good) can lead to contention etc just as is seen with other approaches:

    http://queue.acm.org/detail.cfm?id=1454466

    Concurrent collections? Scala''s gaining those, Java could too. Efficient collections that take advantage of immutability can also be "ported".

    Clojure has it''s place for sure (I use it along with Scala, Java, C++ etc) but I certainly don''t see it as the concurrency silver bullet (yet).'
  replies: []
- id: 8416
  author: Alexey Romanov
  date: '2010-08-19T23:37:18'
  content: '"That kind of code is admittedly harder to write than straight imperative programming, but can anyone who??s looked at Clojure??s STM API (atoms, agents, ref) or Scala and Erlang??s actors say that writing code with these paradigms is that much easier?"

    1. Only refs belong to STM in Clojure; agents are closer to Erlang actors and atoms to AtomicInteger and friends.

    2. Yes, I certainly can and will say that.'
  replies: []
- id: 8417
  author: Alexey Romanov
  date: '2010-08-19T23:40:39'
  content: Which doesn't mean I consider them to be a "silver bullet". Maybe bronze at best :)
  replies: []
- id: 8418
  author: Patrick Kristiansen
  date: '2010-08-20T00:06:09'
  content: '@Dan Creswell: Please note that the infamous STM Research Toy article reviews a number of specific STM implementations for imperative languages that do not have persistent data structures, which Clojure has. Clojure''s persistent data structures makes an efficient MVCC implementation possible, which can be an advantage in many cases.

    I will not claim that Clojure is a silver bullet, and neither does the author (Rich Hickey) or any of the main contributors. First and foremost, I think Clojure is an interesting and fun Lisp to program in. Second, I love having persistent data structures (not for STM''s sake), because I mostly do not have to worry about mutability and sharing.'
  replies: []
- id: 8419
  author: Dan Creswell
  date: '2010-08-20T02:05:46'
  content: '@Patrick: "@Dan Creswell: Please note that the infamous STM Research Toy article reviews a number of specific STM implementations for imperative languages that do not have persistent data structures, which Clojure has. Clojure??s persistent data structures makes an efficient MVCC implementation possible, which can be an advantage in many cases."

    Infamous eh? :) Yep some interpretation is required. I think I''d say persistent data structures make a _more efficient_ MVCC implementation possible equally there''s still book-keeping to do per ref so how efficient and what happens in the face of contention, how a developer deals with that, how they detect etc is still a discussion worth having.

    "because I mostly do not have to worry about mutability and sharing."

    Well you have to worry about it anywhere you have atoms or refs etc, right?'
  replies: []
- id: 8420
  author: Dan Creswell
  date: '2010-08-20T03:19:04'
  content: 'There''s an excellent discussion of locks and STM here between Messrs Hickey and Click:

    http://groups.google.com/group/clojure/browse_thread/thread/5c7a962cc72c1fe7

    Goes heavily into the tradeoffs etc and as they are way smarter than me, they''re much more succinct than I was in my comments above.'
  replies: []
- id: 8421
  author: Osvaldo Pinali Doederlein
  date: '2010-08-20T03:39:30'
  content: 'Wrt silver bullet thing, fair enough; and +1 to java.util.concurrent and Java concurrency in general. On the other hand, it''s hard to argue that reducing mutable state makes concurrency much more tractable. Over the last 5+ years I have been adopting that as a good-practice even in my Java code - of course it''s a limited trick when the language and APIs don''t help; but it''s good enough to be worth it. And although not really experienced with a true functional language, I see benefits (for general programming, not just concurrency) in every small step towards that goal, e.g. in JavaFX Script with its immutable sequences, and other little functional bits like generators and declarative idioms.

    On asynchronous behavior: you only have to "wrap your head around it" if you have a lifetime of synchronous techniques to put behind... I don''t consider async, message-passing idioms to be more complex than their more popular counterparts. I remember when many years ago, I started looking at Windows 3.0 programming and it looked like an incredible mess due to the message-driven paradigm that I wasn''t used to - remarkably with pure Win16 APIs, where you wouldn''t call a function/method to change some property of a control; you would send a message to that control and it would receive that message in some point in the future and react to it. But after I learned the new paradigm, it was beautiful - and it was also very convenient in a cooperative-multitasking OS, where all these messages acted as yield points to let the scheduler work, so well-written code would allow smooth multitasking (you could even use messages to split long-running computations in manageable pieces for scheduling;
    only I/O was a real problem). This intensive, explicit messaging doesn''t exist anymore in modern GUI APIs, because we use OO frameworks that wrap everything with synchronous method calls, and enforce a simple single-threaded model for event dispatch and component-tree changes. This may have the unfortunate side effect that young developers don''t get as much used to asynchronous messaging when they learn GUI programming.'
  replies: []
- id: 8422
  author: Philipp Siegmantel
  date: '2010-08-20T03:52:16'
  content: 'I see you agree with Rich Hickey (the creator of clojure) on actors: http://clojure.org/state (Message Passing and Actors paragraph)'
  replies: []
- id: 8423
  author: Nirav Thaker
  date: '2010-08-20T04:58:25'
  content: 'Cedric, I agree with you java.util.concurrent is really helpful and deserves all the love and a step up from bare locks.

    Small nit about scala: I haven''t come across a single language primitive which supports concurrency at language level (actors is a library), scala lang spec doesn''t even define memory model IIRC, so it is likely that underlying implementation will have different semantics based on host run-time platform (JVM/CLR).'
  replies: []
- id: 8424
  author: James Iry
  date: '2010-08-20T05:59:29'
  content: '&gt; can anyone who??s looked at Clojure??s STM API (atoms, agents, ref) or Scala and Erlang??s actors say that writing code with these paradigms is that much easier?

    Yes. A thousand times yes.

    Okay, more answer: STM in particular is shockingly easy to use safely.  Even more so in Haskell than in Clojure but Clojure does well.   Performance can be a challenge, but the best model for STM is to keep mutation relatively course grained. The important part is that, unlike locks, STM can compose naturally and automatically.  That''s what makes it so easy to use.

    Actors aren''t quite so easy and they can and do have races and deadlocks.  But they''re still substantially easier to use safely than locks because the interaction points are made so obvious.

    But note that neither STM nor actors are particularly functional.  Both involve side effects.   It''s just that functional languages make it pleasant to keep most of the non-actor/non-STM data immutable so the data is safe to use across threads.

    There''s a reason Java''s collection API is mutable and non-persistent while functional languages tend to go the other way (or offer both): Java makes immutable, persistent structures very, very painful to use.'
  replies: []
- id: 8425
  author: James Iry
  date: '2010-08-20T06:02:06'
  content: 'Hit save too soon.

    All that said, locks or CAS plus mutable variables are disgustingly fast and cheap.  There are reason to use them.  I''m just answering the question about whether they are really that much easier to use.'
  replies: []
- id: 8426
  author: Cedric
  date: '2010-08-20T07:24:30'
  content: 'David Nolen: this is actually a trivial concurrency problem, you just lock around the vector swap. Where''s the headache?

    Of course, it would be more verbose in Java, but that''s not what we are discussing, and I would argue that the Java version would also be more configurable. For example, switching from a fixed thread pool to a scheduled one is a one line change, as is changing the way workers get queued and managed. It wouldn''t be that easy to in the Clojure example.'
  replies: []
- id: 8427
  author: Sam
  date: '2010-08-20T07:55:10'
  content: 'To all the people who think Clojure, in any real way, addresses concurrency for typical, real world business problems, you are seriously delusional. The moment you step outside of Clojure''s walled garden, it''s game over.  I haven''t worked on many apps lately where I haven''t had to talk to a database.  STM, etc. do nothing for you there.  Persistence breaks their concurrency, and the vast majority of apps use persistence.  It also completely breaks when you leave the machine you''re running on.  So, if your company uses things like..server clusters, or the cloud, then game over.  Their concurrency becomes worthless at that point.  In short, their concurrency is fantastic so long as you live in a fantasy world but once you enter the real world, it''s of no value whatsoever and you''re actually better off with what Java gives you.

    I will also add that if you are a Java dev, and you''re working on a web app (which is true for 90% of all java deves), clojure does nothing for you with concurrency.  Concurrency is handled by the app server anyway so you have no direct control over it.

    Finally, I''m not a Clojure hater.  I think it''s a cool language and I''m thrilled that there''s a lisp for the jvm but Clojure fans remind me of the Rails fans that are so blinded by the love of their favorite language that they can''t see its warts.  Get a grip people.  It''s not the second coming no matter how hard you wish it were true.'
  replies: []
- id: 8428
  author: David Nolen
  date: '2010-08-20T08:11:31'
  content: '@Cedric

    More configurable ... less composable. What if your operations change? How many more synchronized method will you have to add. How many locks do you have to add if a new object comes into play? Why should reads from unrelated code block because there''s a swap happening?

    This code is very generic and very composable. Your solution is the non-composable hand-rolled optimized one which breaks once your requirements change, which they often do.

    Again everything you''re describing is possible in Clojure. Old techniques don''t just disappear. Now you have new, more general techniques.'
  replies: []
- id: 8429
  author: Cedric
  date: '2010-08-20T08:14:15'
  content: 'I would argue that the Java code will be *more* composable: it uses Callable objects and an Executor object. You can also add Queue objects for even more composition goodness. In contrast, the Clojure code in this example looks very procedural.'
  replies: []
- id: 8430
  author: David Nolen
  date: '2010-08-20T08:17:58'
  content: '@Cedric,

    You can do all those things from Clojure. All of Java''s low-level goodness is directly available to you when you need it.'
  replies: []
- id: 8431
  author: Cedric
  date: '2010-08-20T08:20:11'
  content: We're not discussing what can and cannot be done in Clojure and Java, just analyzing the claims that Clojure simplifies concurrent programming. And so far, the evidence against this claim is piling up fast.
  replies: []
- id: 8432
  author: David Nolen
  date: '2010-08-20T08:38:11'
  content: '@Cedric,

    Last comment. Considering the fact that Clojure is designed by a professional Java programmer with plenty of experience working on highly concurrent systems who got sick of the tediousness of many of Java''s constructs for concurrency ... I find your claim to be lacking in evidence.'
  replies: []
- id: 8433
  author: Stuart Halloway
  date: '2010-08-20T10:28:42'
  content: "There is certainly no silver bullet for concurrency. The community of\nfolks that care about these problems are looking for tools that let us\ntackle the problems of concurrency directly, rather than fighting\nagainst a programmatic model that is constraining.\nA key element of Clojure's approach to concurrency is understanding\nthat reading and writing are asymmetric operations. As Rich often\nquips, \"Only one person can be at bat (writing), but any number of\npeople can watch the game.\" All of Clojure's reference types respect\nthis notion, which locks and actors generally handle poorly.\nThis is not to say, of course, that locks or actors are bad, or have\nno place. Clojure provides the same locking primitive that Java does\n(no surprise). There is no actor facility in Clojure, but actors are\nat their best when you start crossing process and network boundaries,\nand thus we have found it reasonable (so far) to treat actors as a\nlibrary issue, not a language one.\nBut since\
    \ actors are not a Clojure feature, let's turn to the portion\nof your post that is specifically about Clojure concurrency. As far as\nI can tell, that is the following single sentence: \"Can anyone\nwho??s looked at Clojure??s STM API (atoms, agents, ref) or Scala and\nErlang??s actors say that writing code with these paradigms is that\nmuch easier?\"\nUnfortunately, the question itself is erroneous. Clojure's STM API\ndoes not include agents, atoms, and refs. Only refs are part of the\nSTM API. Atoms are explicitly separate, and agents can interoperate\nwith the STM, or work outside it. This may seem like a minor point, but\nconsider your article title: the reality is that Clojure provides a\nbunch of different bullets to handle different problems. And this\ndoesn't even take into account Clojure's other concurrency-savvy\nfeatures: immutable collections, vars, futures, and delays, to name a\nfew.\nBut to answer your question. Yes. I, one person, who has looked at a\nbunch of different\
    \ languages, find that working in a language with a\ntime model is much easier. Easy? No. But easier.\nIf your readers are interested, I think some good introductory\nmaterial is:\n  \"Are We There Yet?\"\n  http://www.infoq.com/presentations/Are-We-There-Yet-Rich-Hickey\nand\n  http://clojure.org/state\nCheers,\nStu"
  replies: []
- id: 8434
  author: Heinz Gies
  date: '2010-08-20T13:16:43'
  content: '&gt; Strive to learn new languages, technologies, paradigms, just don??t fall in love with them.

    Actually for me it is essential to love the language you work in it makes it very much easier if things are hard on you to suffer through it :) that said I think you shouldn''t let yourself be blinded by the love'
  replies: []
- id: 8435
  author: Pedro Newsletter 20.08.2010 &laquo; Pragmatic Programmer Issues &#8211; pietrowski.info
  date: '2010-08-21T22:54:02'
  content: '[...] view on Functional Silver bullet, good rebalancing [...]'
  replies: []
- id: 8436
  author: 'This weekend in the intertweets (Aug 22nd Ed) | disclojure: all things clojure'
  date: '2010-08-22T22:37:09'
  content: '[...] concurrency and silver bullets (here, via @cbeust) &#8212; Cedric Beust, the author of amongst other things TestNG, comments on Bob [...]'
  replies: []
- id: 8437
  author: Aaron Brooks
  date: '2010-08-23T07:08:48'
  content: 'I''d like to make three small points:

    Clojure is certainly no silver bullet but there''s a lot of space between same-old-same-old and .50 caliber, armor piercing, werewulf stopping rounds; I think there''s room to claim that Clojure offers a dramatic improvement for many common cases in concurrent (or, for that matter, non-concurrent) programming without resorting to hyperbole.

    There''s been no mention of differences in applications. Just as with performance benchmarks, it''s impossible to characterize the range of concurrent applications across a single axis. There are many factors which affect the performance of concurrent applications and it wouldn''t be too hard to find applications which perform poorly given the set of tools in either j.u.c or Clojure. I think the point of the Clojure advocates is that many of their common cases are solved easily and intelligibly with the set of approaches offered by Clojure.

    Lastly, having a set of functionality in a library is not the same as having those features in the language. Yes, languages are turning complete and you can use any language to construct the features of another language but (particularly with low-level features) you do so incurring considerable overhead in expression, runtime performance and often it''s impossible to ensure integrity without the library subsuming most of the functionality of the language.

    Simple case: we could add library based Java style garbage collection to C but with no tie in with the base language, the usage would be some measures of awkward, slower and/or unsafe (depending on lengths taken to prevent the creation of computed references, etc). If you''ve faithfully reconstructed the all functionality of Java garbage collection in C, you''ve likely re-invented a new language which is called very painfully through a cumbersome API.

    I thiink the same is true with Clojure''s immutable types and concurrency system. You can add them to other languages but don''t expect the full benefits that you have in Clojure.'
  replies: []
- id: 8438
  author: polypus74
  date: '2010-08-23T07:48:09'
  content: The very title of the article contains a straw-man, so I wasn't expecting much, but seriously? All you have to know is that clojure has immutable data structures and is functional, after that the question becomes academic. Of course it's easier to do concurrency, as it would be in any language with these two properties. End of story.
  replies: []
- id: 8439
  author: Massimo
  date: '2010-08-23T12:45:26'
  content: 'IMO, writing new concurrency-friendly code in Java/C++/C# has never been difficult or problematic.

    The two hairy, difficult, frustrating problems related to concurrency have been:

    - Debugging concurrency related issues on a large legacy code base that you aren''t familiar with.

    - Squeezing ideal performance out of multi-core/multi-thread systems. Sure, you can write bug-free multi-threaded code, but does it actually deliver the performance gains you were expecting? This is often very difficult.'
  replies: []
- id: 8440
  author: Tinkering with Clojure | Trying things
  date: '2013-07-14T09:24:34'
  content: '[...] Aaaannnndddd&#8230; that was it for the moment. Did I learn Clojure? Certainly not  come on, after only a few hours tinkering??? I just had a look at what the environment offers and stomped away some fears. Not that many though, the language itself still IS something much different from what I know but the environment works pretty much familiar. There will be an episode 2 to this adventure, just not now. I still plan to figure out what&#8217;s its concurrency approach and I got the feeling it&#8217;s going to be tough&#8230; [...]'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/tracks.jpg)

Rob Martin has become a [fan of Clojure](http://thecleancoder.blogspot.com/2010/08/why-clojure.html) recently. Nothing wrong with that, Clojure has a lot going for it and if you've never had a chance to write code in Lisp, it's probably the best way to begin these days. 

But then, Rob gets a little bit too emotional and he starts drawing all kinds of dangerous conclusions. Such as this one: 

> Why is functional programming important? Because Moore's law has started to falter. 

It's not the first time that functional programming gets advocated as the heroic technology that will rescue us from buggy multithreaded code *and* that it will allow our programs to magically scale along with the multiple cores that computers have these days. Concurrency problems? Just pick a functional programming language -- any language -- and suddenly, your code is multithread safe and it will automatically scale. 

I find this simplification a bit disappointing coming from technologists, but I really read this at least once a week these days. 

> If you've ever written multi-threaded code, the thought of eight, sixteen, thirty-two, or even more processors running your program should fill you with dread. Writing multi-threaded code correctly is hard! But why is it so hard? Because it is hard to manage the state of variables when more than one CPU has access to them. 

First, a nit: when you write multi-threaded code, four processors shouldn't scare you more than two. Either your code is multi-threaded safe or it's not. The only thing that changes when you run it on multiple processors is that you are more likely to find bugs when you throw more processors at it. 

I'll agree with Rob on the fact that managing the state of variables with more than one CPU is hard, but come on, it's still not rocket science. As I write this, hundreds of thousands of lines written in C, C++, C#, Java and who knows what other non functional programming languages are running concurrently, and they are doing just fine. 

Java has shown amazing powers of adaptation over the years, and when it comes to concurrency, people like Brian Goetz and Doug Lea and libraries such as `java.util.concurrent` don't get the recognition they deserve. Java is also the living proof that you don't need concurrency support at the language level to be effective, libraries can do just fine. 

That kind of code is admittedly harder to write than straight imperative programming, but can anyone who's looked at Clojure's STM API (atoms, agents, ref) or Scala and Erlang's actors say that writing code with these paradigms is that much easier? 

To make matter worse, these new paradigms come at a cost that's very often glossed over by their own advocates. When people tell you that "Actors are a share nothing architecture", they are lying to you. You are sharing a great deal with actors, just in more subtle ways that your mind needs to be very aware of. You have the illusion of automatic multi thread safety but you pay the price by having to wrap your head around a fully asynchronous model. It's not easy. And when you have two actors A and B that are sending messages to an actor C, aren't they sharing the state of C? 

Stephan Schmidt [attacked this subject](http://codemonkeyism.com/actor-myths/) not long ago. Read his post and don't miss the comments, they are very enlightening as well. My take away from that discussion is that if there is a silver bullet to concurrency programming, Actors are not it. 

Actually, it's pretty clear to me that there is no silver bullet, and [Alex Payne](http://al3x.net/2010/07/27/node.html) seems to agree. In this post, Alex sends a very powerful message of compromise and inclusion. Blocking or non-blocking I/O? Select or events? Java locking or Actors? Agents or refs? 

Anyone who tells you that only one of these approaches works and the others don't is trying to sell you something. 

To quote Alex: 

> In fact, taking a hybrid approach to concurrency seems to be the way forward if the academy is any indication. 

Strive to learn new languages, technologies, paradigms, just don't fall in love with them.
