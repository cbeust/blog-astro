---
title: 'No silver bullet: reloaded'
date: '2013-01-02T22:30:55'
slug: no-silver-bullet-reloaded
categories:
- General
- Kotlin
comments:
- id: 9628
  author: Dennis
  date: '2013-01-03T06:18:56'
  content: Uncle Bob has made dubious claims throughout his career.
  replies: []
- id: 9629
  author: aboli bibelot
  date: '2013-01-03T06:46:14'
  content: I'm very fond of Clojure and functional languages in general, but Uncle Bob's article is embarrassing in its raving tone and its strange definitions.
  replies: []
- id: 9630
  author: Joshua
  date: '2013-01-03T08:38:43'
  content: Small nit, immutable structures make concurrency easy, but it doesn't necessarily make parallelism easy.
  replies: []
- id: 9631
  author: Mike
  date: '2013-01-03T09:22:00'
  content: Cedric, you and Dennis both hit the nail on the head.  "Uncle Bob" has been pushing his consulting businesses since at least the early 90s.  He's been making the simple look hard and the misrepresenting the hard as simple from his comp.object days right up to now.
  replies: []
- id: 9632
  author: Dilip
  date: '2013-01-03T10:11:48'
  content: That's not the only issue. I don't understand the target audience for this piece. Is it for laymen? Why else does he try to diminish the importance of concepts like referential transparency with flippant addendums like fanfare, glitter etc.?
  replies: []
- id: 9633
  author: James Roper
  date: '2013-01-03T15:46:28'
  content: You've missed the point about multiple cores.  The issue is not that we have multiple cores, it's the CPUs are not getting faster but our requirements of them continue to increase.  The solution is to utilise multiple cores in situations where previously things would be done on one core.  For example, previously a typical web app would handle each request with one thread.  In future, due to increased complexity of what we want to do in a single request, many types of requests will need to be handled with multiple concurrent threads because the CPU's won't be fast enough to do everything they need to one thread.
  replies: []
- id: 9634
  author: aaron
  date: '2013-01-03T22:41:56'
  content: 'I was curious the bit about mergesort not being parallelizable. Could you elaborate? I''m aware that the common, straightforward parallel merge sort runs in O(n + n log n / p). However, the O(n) term is due to performing a sequential merge. There are other parallel merge algorithms that can further reduce the sort time to O( log n + n / p + n log n / p).

    You would be right to note that the conventional definition would be impractical to automatically parallelize.'
  replies: []
- id: 9635
  author: Jose M. Arranz
  date: '2013-01-03T23:32:15'
  content: 'I''m strugling to understand what is "new" in FP beyond love for using stack as memory holder for temporal data (umm I ironically "suspect" stacks were invented to save thread based temporal data) and what is "incompatible" with OOP (most of FP is trying to bash).

    Oh wait, I understand what is "new": a new term to sell consulting.'
  replies: []
- id: 9636
  author: Yann
  date: '2013-01-04T03:22:28'
  content: First TDD, now functional programming? The lengths this guy will go to spread his religions really defy belief.
  replies: []
- id: 9637
  author: Tetsuo
  date: '2013-01-04T04:54:42'
  content: '@James This is mostly a myth. If you''re building an application that does raytracing (a CPU-intensive, highly parallelizable image rendering algorithm) and will have just one or two simultaneous users, yes, you want to use all cores to handle each request. But for pretty much anything else the number of simultaneous requests will exceed the number of CPU cores by far, and the one-thread-per-request model will make good use of all cores just fine.'
  replies: []
- id: 9638
  author: Seth Tisue
  date: '2013-01-04T05:38:28'
  content: Robert Martin, fish in a barrel.
  replies: []
- id: 9639
  author: Robert Virding
  date: '2013-01-04T07:53:58'
  content: '@Tetsuo Yes, but multi-core will force everything to become concurrent/parallel which will mean that you WILL have synchronisation problems in your system. And if you seriously consider it functional programming DOES make both much simpler.'
  replies: []
- id: 9640
  author: Stephan Schmidt
  date: '2013-01-04T09:03:05'
  content: '@Robert: FP does not make anything easier with concurrent writes to one resource, and concurrent reads are trivial in any language.'
  replies: []
- id: 9641
  author: Tetsuo
  date: '2013-01-04T09:06:11'
  content: '@Robert It will force everything to parallel as much as having multiple users accessing the same web application. We already handle massive concurrency/parallelism, it''s just that WE (application developers) don''t have to deal with it directly, since app server/container/framework developers already dealt with it for us. The concurrency we do face on a daily basis is handled by the database (locking and versioning), not in application code (threads).

    It''s certain that infrastructure software (databases, app servers), and some kinds of single user heavy-processing CPU-bound applications (games, math, image/audio/video processing) will benefit greatly by application-level concurrency handling, and maybe, MAYBE, pure functional programming languages will help in that. Other than that, all this ''multicore will change everything'' talk is just plain bs.'
  replies: []
- id: 9642
  author: Stephan Schmidt
  date: '2013-01-04T09:14:25'
  content: '@Robert:  How does FP make it much simpler? For example compared to juc.*Deque, juc.Fork/Join etc.?'
  replies: []
- id: 9643
  author: Daniel Spiewak
  date: '2013-01-04T15:16:27'
  content: '&gt; there are a lot of algorithms (such as merge sort) that are inherently not parallelizable.

    This is incorrect.  Or at least, the merge sort bit of it is.  Your broader point, that some algorithms are not parallelizable, is very true.  In fact, there are some *problems* that cannot be solved effectively in parallel.  For example, the class of PTIME-complete problems (which includes things like context-free parsing) is generally understood to be not parallelizable.  The consequence for things like generalized CF parsing is that the more parallel your parser is, the faster it runs in terms of clock time, but the more *steps* it requires to complete the task.  In the limit, you could parse in O(k) time if you have an arbitrary number of cores, but the number of cores required would be O(c^n), where n is the number of tokens.  This holds even though generalized CF parsing is O(n^3) on a single core.  Curious, no?

    Back to Merge Sort??  It''s somewhat humorous that you would use this as an example of a non-parallelizable algorithm, since it is often upheld as an algorithm which is embarrassingly *easy* to parallelize.  Observe: the two branches of the recursion are entirely independent, even for in-place versions of the algorithm.  That alone gives you a significant amount of parallelism.  The merge step can also be parallelized, though not as easily.'
  replies: []
- id: 9644
  author: Peter Williams
  date: '2013-01-04T17:44:28'
  content: This idea was covered here http://bit.ly/VJtOfL too.
  replies: []
- id: 9645
  author: Lance Legstrong
  date: '2013-01-05T00:23:45'
  content: 'Hello, Cedric,

    I would agree with the general thread of your fine commenters: it''s perhaps unwise to write about an Unlce Bob post.

    Uncle Bob seems to have fallen in love with his own voice/typing some time ago and has now filled his argument armory with just two weapons: argument from authority and analogy, despite neither actually being an argument.

    A key inflextion point was reached on with his post where he sadly insulted all non-TDDers with a broad and imprecise brush:

    https://sites.google.com/site/unclebobconsultingllc/home/articles/echoes-from-the-stone-age

    Don''t wrestle with a pig. He''ll cover your in lipstick.'
  replies: []
- id: 9646
  author: narke
  date: '2013-01-07T02:36:38'
  content: 'Uncle Bob was right, there aren''t assignments in functional programming languages, values are binded to identifiers.

    Assignements exists in imperative languages, they are mutable variables.'
  replies: []
- id: 9647
  author: Derek Neighbors
  date: '2013-01-07T08:07:31'
  content: '"Hundreds of thousands of Java programmers write multithreaded code every day and they are doing just fine, because the intricacies of parallelism are abstracted away from them by the frameworks they rely on to get their job done."

    Every Java programmer I have met thinks they do multi-threaded well.  The truth is less than 10% of multi-threaded code out in the world works well.  Clearly, there is a disconnect somewhere.  Perhaps it''s a cognitive bias of Illusory superiority kicking in for the community?'
  replies: []
- id: 9648
  author: Petter Eriksson
  date: '2013-01-07T18:01:53'
  content: '@Stephan: "FP does not make anything easier with concurrent writes to one resource" - Clojure does with managed references. In fact, managed references changes the game.

    Try Clojure for a month or two. Come back here. Smile :)'
  replies: []
- id: 9649
  author: Michele Mauro
  date: '2013-01-07T20:50:19'
  content: '@Cedric: if your argument on the language choice is purely your "pretty clear to be" sentiment, then Clojure is as good as others. Uncle Bob is re-living his early days with LISP, so he currently fancy clojure a lot. As for the business side of things, well, everybody has to make a living, and Uncle Bob''s videos are funny and seriously thought-provoking. He being over-the-top and all is part of the style.

    @Lance why shouldn''t you argue with Uncle Bob? This kind of criticism, even if hard, is perfectly justified and enough argumented, so it can only be beneficial.'
  replies: []
- id: 9650
  author: Konstantin Solomatov
  date: '2013-01-07T23:49:14'
  content: Merge sort is easily parallelizable. We can improve it from O(n log n) to O(n). You probably wanted to mention quicksort.
  replies: []
- id: 9651
  author: fp-programmer
  date: '2013-01-08T01:45:45'
  content: 'I first time have seen Martin''s article few days ago and seems that he is totally crazy - he''s writing complete bullshit and thinks he is absolutely right. Moreover, there are a lot of people who praise him, but none of his readers could discuss the topic.

    Even this article (tnx to OP) is generally discussed like a personal offence, but actually they should notice - it has good points.'
  replies: []
- id: 9652
  author: fp-programmer
  date: '2013-01-08T01:51:23'
  content: '&gt; The truth is less than 10% of multi-threaded code out in the world works well.

    Thats true - from my point of view, I started learning (and using, thats important) Erlang few years ago listening to all that shit about "no free lunch" and "amazingly easy parallel coding". Well... nowadays the most diffucult problem for me is still write really parallel program. It is an incredibly complex task, and even when you have Erlang, Scala, Clojure and so on - probably you are going to write sequental program (OK, there will be 5 or 10 parallel algorithms which are parallel by default, like `array.forEach(x-&gt;x*x)`)'
  replies: []
- id: 9653
  author: Cedric
  date: '2013-01-08T06:06:15'
  content: '@Konstantin:  Do you have a source showing an O(n) sorting algorithm? (any sort will do, not just merge :-))'
  replies: []
- id: 9654
  author: Uncle Bob.
  date: '2013-01-08T13:25:19'
  content: Were it not for the tone of the article, and the posters here, I would be happy to engage the discussion; as I have with others.  But I feel particularly unwelcome here, so I'll refrain from further comment.
  replies: []
- id: 9655
  author: David William
  date: '2013-01-13T09:12:36'
  content: 'I understand Uncle Bob attitude. There is a freaking hereditary load in the software development community, in general, that believes, in a ridiculous way, that to be heard, it is necessary to talk in a way to destroy the image of the other person. That sounds immature in all forms. It seems to me that insecurity is so great that it is necessary to add high doses of aggressiveness to make the broth thicker content. It is both ridiculous and unfortunate.

    The biggest loss of all is: there is no a healthy discussion, thoughts do not evolve, each gang keeps their ideas and it becomes impossible to build a synthesis.'
  replies: []
- id: 9656
  author: Sequ??ncias Infinitas em Scala e Java &laquo; Mente de Iniciante
  date: '2013-02-11T11:58:33'
  content: '[...] Bob tem escrito sobre como utilizar conceito de Programa????o Funcional em Java e tem recebido diversas [...]'
  replies: []
---

I had to read the recent article ["Functional Programming Basics", by Robert Martin](http://pragprog.com/magazines/2013-01/functional-programming-basics), several times to make sure that I wasn't missing any deeper point, but every time, I just became more and more concerned by the sloppiness of the arguments presented. 

Here are a few thoughts. 

> First, it??s almost certainly true that functional programming is the next big thing. 

We'll see about that. This has been predicted for several decades and it still hasn't happened. Some say that it will never happen, others say it's already happened and more moderate people just observe that quite a few core concepts of functional programming have been leaking into mainstream languages for a while, so in some way, functional programming is slowly percolating through the industry. 

> Functional programming is programming without assignment statements. 

This is a pretty silly statement since functional programming languages have assignments. Maybe the emphasis should be more on referential transparency or perhaps "variables can never be assigned more than once" would be a more accurate description of one of the important tenets of functional programming. 

> Let??s look at a functional program for the squares of integers. We??ll use the language Clojure for this, though the concepts we??re going to explore work the same in any functional language. (take 25 (squares-of (integers))) 

I find the use of Clojure (or more generally, Lisp) to illustrate his points a bit puzzling because while the question of whether functional programming will play a big part in the software industry's future is still up for debate, it seems pretty clear to me that 1) object orientation and 2) static typing are two concepts that have clearly established themselves as powerhouse ideas that have an established track record and a bright future ahead of them. Scala or Kotlin would have been a better choice, especially they are not that much more verbose on such a trivial example: 
    
    
    // Kotlin
    ints.map { it * it }.take(25)
    

> Read that sentence again; because I did something important there. I took the three separate definitions of the functions that I gave you in the preceding paragraph and combined them into a single sentence. That??s called: (are you ready for the buzzword?) Referential Transparency. [cue: Fanfare, glitter, ticker tape, cheering crowds] 

This is where I start being a bit confused by Robert's point, because if anything, the code he just showed is illustrating a lot more composition than referential transparency. 

If you are trying to sell functional programming as a big thing in order to prop up your consultant business, you should probably skip the trivial stuff and start with the hard problems right away, such as preserving referential transparency and immutability, demonstrating the power of composition while accessing a database, returning JSON data from a servlet and have another servlet modify that same database. Do this with a functional programming language and with snippets of code that show clear advantages over today's Java and C# based solutions and you have yourself a market. 

> Honestly, we programmers can barely get two Java threads to cooperate. 

Not really. Hundreds of thousands of Java programmers write multithreaded code every day and they are doing just fine, because the intricacies of parallelism are abstracted away from them by the frameworks they rely on to get their job done. I'm not talking just about complex Java EE or Spring-based containers but even the simple Tomcat or Jetty servers. More advanced programmers dabble with the amazing `java.util.concurrent` classes but even those never really have to think much about the hard problems that heavy paralellism involve, because domain gurus such as Brian Goetz and Doug Lea have already done all the hard work for them. 

I continue to be wholly unconvinced by the claim that "the new era of multi cores is going to wreak havoc on our code bases unless we adopt a functional programming language". This claim has two sides, both equally bogus. 

As I mentioned above, the fact that we are now running our programs on multiple cores instead of multiple CPU's brings very little practical difference for anyone writing multithreaded code. What processor/core/green thread/lightweight process your thread will be riding should have zero impact on how you structure your code. If your code was multithread safe on "n CPU's / 1 core", it will be equally multithread safe on "1 CPU / n cores" or even "n CPU's / m cores". The only major difference is that it now becomes possible to test for actual parallelism (not just concurrency) on inexpensive developer boxes. 

The second part of the claim, that only functional programming languages can save us from the impending multicore apocalypse, is equally dubious but I'll save this for another post, although I'll point out that traditional OO and imperative programming has shown an amazing power of adaptation and versatility for several decades now, so whatever the next big paradigm will be, it will have to bring significant improvements to the table. 

> More importantly, if you could peer into the computer??s memory and look at the memory locations used by my program, you??d find that those locations would be initialized as the program first used them, but then they would retain their values, unchanged, throughout the rest of the execution of the program. In other words, no new values would be assigned to those locations. 

This is a bizarre claim that shows that Bob only has a passing familiarity with the internals of how a compiler or a VM works. Just because the observable effects of a program are consistent with immutable structures does not mean that the underlying memory is not being shifted around by the OS or by the abstraction layer standing between the source code and the CPU. 

Moreover, the claim that immutable structures automatically lead to easy concurrency is not just na??ve but plain incorrect: there are a lot of algorithms (such as merge sort) that are inherently not parallelizable. 

Overall, this is a fairly unconvincing article that seems to miss most of the well recognized benefits of functional programming (composability remains the aspect that has the highest impact on my code on a daily basis) while touting advantages that range from poorly understood concepts to plain incorrect claims.
