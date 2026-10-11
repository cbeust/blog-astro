---
title: Scala's parallel collections
date: '2011-08-15T10:23:53'
slug: scalas-parallel-collections
categories:
- Programming languages
- Scala
comments:
- id: 9089
  author: Justin Ryan
  date: '2011-08-15T11:08:13'
  content: 'I believe the parallel collections feature uses Java''s Fork/Join framework, which can pool the threads and allocates one thread per core. That should minimize context switching and the cost of spinning up threads. The defaults for fork/join are pretty good, and Scala is riding on its coat tails.

    http://stackoverflow.com/questions/6039380/how-do-i-replace-the-fork-join-pool-for-a-scala-2-9-parallel-collection'
  replies: []
- id: 9090
  author: Heiko
  date: '2011-08-15T13:31:38'
  content: 'I believe that parallel collections really can ease the development of parallel software a lot. What do you think about this example: https://github.com/hseeberger/scamples/blob/master/src/main/scala/name/heikoseeberger/scamples/parallel/Weather.scala'
  replies:
  - id: 9091
    author: Cedric
    date: '2011-08-15T13:37:28'
    content: 'Heiko: there is no doubt that parallelism can be very useful, the question is "Is .par the best way to achieve it?". Your example looks reasonably straightforward but think about the implications a bit more: imagine that the web site you are contacting has enabled throttling and it won''t let the same IP access it more than five times within the same period of time.

      If ever the underlying implementation of .par spawns more than five threads by default, you are dead in the water and most of your requests will be rejected. This is why customization is very useful, even for small examples such as yours.'
    replies: []
- id: 9092
  author: Heiko
  date: '2011-08-15T13:48:08'
  content: 'Cedric,

    Google weather allows at least eight (the number of cores available for me) parallel requests, hence my example scales really well. But of course this is just a small example. Nevertheless it should make obvious, how easy going parallel the Scala way can be in certain cases.

    Heiko'
  replies: []
- id: 9093
  author: Cedric
  date: '2011-08-15T14:20:26'
  content: 'Heiko,

    I think you''re missing my point. Regardless of the fact that google.com is just an example, your code can start failing if you run it on a different machine.

    For example, if you run it on a machine with twice as many cores as your current on, we can assume that the underlying FJ framework will spawn twice as many threads, which will cause most of your requests to become rejected.

    Hence the important to have a minimum amount of control over thread scheduling.'
  replies: []
- id: 9094
  author: Dave
  date: '2011-08-15T14:24:57'
  content: Parallel collections are certainly not the One True Concurrency solution, but they do provide a very clean way of parallelizing a lot of use cases.   The basic operations that can utilize parallel collections best are map (obviously), flatmap, filter, and reduce over associative and commutative operations.  These are also the operations that are provided by the MapReduce algorithm made famous by Google and implemented in Hadoop and the various noSql database solutions.  If your algorithm is a good fit for MapReduce, then it's probably a good fit for Scala parallel collections.  I would not be surprised to eventually see distributed parallel collections as a Scala library, allowing you to scale out over multiple machines by saying something like set.dist.map(myMapFunc).reduce(myReduceFunc), and having the library automatically turn this into a Hadoop job.
  replies: []
- id: 9095
  author: Dave
  date: '2011-08-15T14:42:31'
  content: Your mkString example is very odd, and may reflect a misunderstanding of the point of parallel collections.  In the absence of side-effects, all of the parallel collections methods are purely deterministic.   Read that again.  It is crucial to understanding what parallel collections are trying to accomplish, which problems they are and are not useful for, and and why they are so powerful.  mkString has no side-effects of it's own, and calls no functions that have side effects (unless you code a very degenerate toString()), so it's results are going to be the same every time.  This doesn't mean that the implementation of mkString isn't parallel, or that you aren't using multiple cores when mkString is run.  Just that if they are parallel, the parallel collections library has to order and synchronize things to hide that fact.  Race conditions and other non-determinism are simply not allowed to arise, until you try to parallelize with side-effects (like the println in your first
    example).
  replies: []
- id: 9096
  author: David Gageot
  date: '2011-08-15T15:19:47'
  content: 'My experience is that using the number of cores as the size of a thread pool is almost never the best choice. And very often it''s a bad choice. The more the cores, the worst the choice. The vast majority of problems are I/O bound, sometimes it''s the network, sometimes it''s the memory, still very often it''s the hard drive. You really don''t want to hit the hard drive with 8+ threads. Hence the need to make it configurable.

    For eg. I''m pretty sure Linq''s AsParallel can be configured to use a given number of threads.'
  replies: []
- id: 9097
  author: Cedric
  date: '2011-08-15T15:28:00'
  content: 'David: Agree 100%. Convention over Configuration is a pretty bad practice with parallelism, because it''s still such an empirical science (see the discussion about Google''s weather service above). If you can''t lock down certain parameters, you take the risk of having your code randomly fail as soon as you run it on a different machine.

    Even if you can assume that the underlying framework (Fork/Join in the case of .par, at least as of 2.9) is using reasonable defaults (e.g. numThreads = numCores - 1), it''s still important to be able to tweak them if you want to reap all the benefits of this functionality.'
  replies: []
- id: 9098
  author: Jed Wesley-Smith
  date: '2011-08-15T16:10:38'
  content: 'The FJ framework was designed for purely CPU bound workloads, it will not necessarily handle threads stuck in IO wait very well.

    In the case of a CPU bound workflow, tuning matters if the defaults are bad, but tuning is not really a first order concern of the program to be parallelised, rather it is a framework concern. So, you can take your program written to the Scala parallel collections API and run it on some big iron, like Josh Suereth''s work on the Google distributed infrastructure.

    If however you really want to play with thread-pool sizes and rejection policies you of course can simply by using the same infrastructure the default parallel collection implementations use ?? Doug Lea''s FJ framework or build your own as you need. There is however a whole world of specialisation and expertise in this area.

    By the way, supplying a non-commutative accumulation function to a parallel fold is a beginner error - and String concatenation is not commutative (and therefore should never have used the plus operator)! And expecting an operation across a five element set to be performed in parallel ?? why would it be?'
  replies:
  - id: 9099
    author: Cedric
    date: '2011-08-15T16:13:56'
    content: 'Jed: I am well aware why mkString failed, I used this example because it''s the exact same one that the person coming on #scala was using.

      You seem to imply that the number of elements in the Range is a factor in the parallelism. It might be, but my previous example with println did show parallelism occurring with a collection of five elements, so it''s not unreasonable to have a similar expectation for another operation on a similar collection.'
    replies: []
- id: 9100
  author: Alain O'Dea
  date: '2011-08-15T16:41:36'
  content: 'Cedric, I think it would be helpful if your analysis included thread profiling results.  This would allow you to confirm the observations you have made.

    It is my impression that Parallel Collections would be extremely useful for reducing time for pure computations.  I believe that such computations are uncommon in business application code (which tends to be I/O bound), but frameworks and scientific computing could avail of them.

    Perhaps their merit lies in improving ease of use in simulation and prototyping use cases where Matlab currently reigns?

    Ideally, nothing in programming should be empirical including parallelism.  Part of the idea of the parallel work in Scala is to provide sensible

    working defaults so programs can scale or scale better to multi- and many-core machines with minimal programmer effort.  Parallelosm is currently a specialty and a potential bottleneck in resource planning that it would be nice to be without.'
  replies: []
- id: 9101
  author: Guillaume
  date: '2011-08-15T19:03:04'
  content: Cedric, I think you missed the point by Dave made about the mkString function. The result of that method should never be affected by being called in parallel or not. However, if you have a side effect in your function, like in the case of your foreach that has a println, then you can see the effect of non-determinist multi-thread calls. But the return value will never change because it was a parallel call, otherwise the parallel collection would make that call sequentially.
  replies: []
- id: 9102
  author: Jed Wesley-Smith
  date: '2011-08-15T20:17:57'
  content: 'Cedric, a check of mkString (implemented in TraversableOnce) shows that it is implemented using the underlying collection''s iteration order, which ParSet doesn''t change over its underlying Set. This is as it should be, a mkString that returned an undefined order wouldn''t be much use to anyone.

    foreach on the other hand does run in parallel, and the "order" of your operations are linearised by the lock on System.out''s PrintStream.'
  replies: []
- id: 9103
  author: Mokua
  date: '2011-08-15T20:22:02'
  content: I think what Cedric is trying to say is that the parameters for the underlying FJ framework should be exposed to the user.
  replies: []
- id: 9104
  author: Sam Pullara
  date: '2011-08-15T20:34:07'
  content: When I implemented a parallel transform for Guava, I passed in an ExecutorService. Your suggestion is spot on.
  replies: []
- id: 9105
  author: Cedric
  date: '2011-08-15T21:55:48'
  content: 'soc1:

    What does Java or Scala have anything to do with this? This is an article about an API, no need to scream murder because you don''t agree with the article.

    I actually chatted with Doug earlier today and what he removed from FJ has absolutely nothing to do with this article either, so let''s stay on topic.

    You are basically saying that there is no need to tune multithreaded applications, which makes absolutely no sense.

    Go take a walk outside, come back when you''ve calmed down and try to articulate your point with some sense (e.g. don''t compare Java''s garbage collection with C++''s, since C++ doesn''t have any).'
  replies: []
- id: 9106
  author: Martin
  date: '2011-08-16T01:32:14'
  content: 'Three remarks:

    (1) Parallel collections are no silver bullet, and none of their designers have claimed this. But, if complemented by careful algorithm design, they can safely increase the speed of compute intensive operations.

    (2) Parallel collections will be further optimized; we expect to add more tuning parameters to the framework, and document the ones that exist better.

    (3) I think par and seq are a key concept. Without them we''d introduce a lot of needless duplication between sequential and parallel collections. You state: "You should not pay what you don''t use:" By the same argument, you could argue for having separate frameworks for sets, maps, and sequences as well. You might reduce jar size that way. But you will introduce a lot of code duplication, and also will increase the cognitive load of using the API. Scala''s uniform collections architecture is IMO one of its most important assets.'
  replies: []
- id: 9107
  author: Doug Lea
  date: '2011-08-16T03:09:02'
  content: 'Hi Cedric,

    A couple of clarifications on JDK7 java.util.concurrent.ForkJoin*, that Scala collections will be based on once they run on JDK7 -- Until then they used a modified version of our jsr166y prerelease:

    FJ creates threads on-demand, although aggressively so,  up to a given parallelism level (by default, #processors). It keeps them around unless unused for a while then slowly kills them off. The number of threads can transiently exceed the parallelism level if necessary to prevent starvation of chains of dependent tasks. There are no user controls for any of this because I don''t know of any that would do more good than harm. We initially had some heuristic controls, but they weren''t effective or useful enough, so we removed them.

    FJ is designed for non-IO-based computations -- it doesn''t understand blocking IO at all.  However, people find that it can be made to work pretty well (much better than I had expected) with IO-based tasks. We''ll be adding a bit more support for doing even better sometime.'
  replies: []
- id: 9108
  author: Ian Clarke
  date: '2011-08-16T03:32:00'
  content: 'Cedric, I''m not sure why you claim that mkstring failed, didn''t it work exactly as it should have worked?

    Given the nature of strings and how they are constructed, I don''t see how that operation could be parallelized, and even if it was parallelized, I''m not sure why you would expect the ordering to be different each time.'
  replies: []
- id: 9109
  author: Daniel Spiewak
  date: '2011-08-16T08:22:27'
  content: "Other people have already commented about the mkString example, so I'm going to leave it alone.  It does reflect a much larger point about collection semantics in general.  Basically, this is it: in the absence of side-effects (in *user* code), parallel collections have the *exact* same semantics as the sequential collections.  Put another way:\nforAll { (xs: Vector[A], f: A =&gt; B) =&gt;\n  (xs.par map f) == (xs map f)\n}\nThis holds for all operations, not just map.  The only time you will see a difference (without looking at timings) is if your function has a side-effect.  This is why your foreach example exposed the parallelism: println is a side-effect.  And, really, foreach is only useful in a side-effecting context anyway.  However, if you had done something like this:\nVector(\"a\", \"bc\", \"def\", \"ghik\").par map { _.length }\nThis is going to produce the exact same results as without the .par method.  This point is fundamental to the nature of parallel collections.\
    \  Without this property, they would be entirely useless.\nRegarding unproven gains: I know several teams that are using the parallel collections in production (often in concert with Map/Reduce or Akka) to achieve sizable gains.  These are real, proven, benchmarked results.  The code cleanup in their actual implementations also reflect the improvement.  So, clearly parallel collections are quite useful in many contexts.  They're not a silver bullet, but they're equally not a pointless waste of scala-library.jar space.\nRegarding bloat: the API bloat is one method and a couple new extracted supertypes.  If you're not using the parallel collections, you don't see them.  Literally.  I think that falls exactly into the \"pay for what you use\" philosophy of API design.  I'll grant that the JAR did bloat up by a few MB (2, I believe) with the addition of the parallel collections.  However, given their utility (see above), I think that's more than worthwhile.  The classloader isn't going to\
    \ bring that into memory unless you actually use them, so again, pay for what you use.\nRegarding control: (and re: Doug).  No offense to Doug Lea, but Fork/Join is not a silver bullet for thread poll management.  I've run into many, many situations where its \"creates threads on demand\" heuristics are entirely insufficient, and its lack of configurability has been a major, major problem.  It's less of an issue if you avoid IO, but even for pure computation, fork/join is not the ultimate answer to everything.  I would have *vastly* preferred if the parallel collections were based simply on the java.util.concurrent frameworks, sitting on top of a configurable Executor.  This is a well understood framework that people know how to optimize and work with.  Another advantage is that parallel collections could share a thread pool with other, diverse parts of the application.  That's much harder to do with fork/join.  So, I'll give you that point.\nRegarding remedies.  Splitting up the parallel\
    \ and sequential collections is something that was considered, and it's also an opinion that has been expressed by several prominent Scala users (Josh Suereth is a bit of a fence-rider here).  Unfortunately, you lose a lot of the reuse advantages if you split up everything.  The maintenance of the parallel and sequential collections is *vastly* simplified by the fact that they each inherit from the same source.  New utilities can be added to the library, bug fixes can be implemented, etc.  All of that applies to both hierarchies almost without exception.  If we had split them up, we wouldn't be reaping those benefits.  Contrary to your maintenance point, this actually makes things *much* simpler.\nI do agree that a nice wrapper around some of the java.util.concurrent stuff would be, well, nice.  However, this isn't hard to do and arguably doesn't belong in the Scala stdlib.  I'm perfectly happy rolling my own wrapper(s) as my needs dictate.  Higher-level wrappers do exist.  For example,\
    \ Akka and Lift provide actor libraries which are (when used in their simplest modes) very little more than thin wrappers around java.util.concurrent.  The Scala stdlib actors also have a mode now which implements the same thing.  More importantly, I don't see how this point has anything to do with the parallel collections.  :-)\nIn summary, yes, parallel collections are not a silver bullet.  They're one tool among many, and they are *very* good at solving certain problems.  The could have been nicer in some ways (basing on Executor rather than fork/join is the big one in my mind), but on the whole, I'm pretty happy with the result.  The key thing to understand is that the semantics of the parallel collections are always *identical* to the semantics of the sequential collections.  The difference between the two is strictly confined to execution strategy.  Thus, if you're using them correctly, the only way to compare the two would be to actually gather timing information.  Simple println\
    \ tests in the REPL aren't going to cut it (and would tend to lead you to erroneous conclusions, like your point about mkString)."
  replies: []
- id: 9110
  author: '&raquo; links for 2011-08-16 (Dhananjay Nene)'
  date: '2011-08-16T11:01:20'
  content: '[...] Scala??s parallel collections ?? Otaku, Cedric&#039;s blog RT @mariofusco: Great reply by @djspiewak about the #Scala??s parallel collections debate http://t.co/I3NVnC7 (tags: via:packrati.us Scala??s)     This entry was posted on Wednesday, August 17th, 2011 at 1:30 am and is filed under Bookmarks. You can follow any responses to this entry through the RSS 2.0 feed. Responses are currently closed, but you can trackback from your own site. [...]'
  replies: []
- id: 9111
  author: Daniel Sobral
  date: '2011-08-16T13:03:56'
  content: 'Daniel, just a minor correction here: it is not just one method. I can count four out of the top of my head: par, seq, aggregate and fold.

    Not that I think four methods (or even a bit more) is a big deal -- it''s a ridiculously low price to pay, imho.'
  replies: []
- id: 9112
  author: Daniel Spiewak
  date: '2011-08-16T13:18:32'
  content: '@Daniel

    fold, aggregate, reduce and friends are all useful in both parallel and sequential contexts, so I''m not sure we can count them against the API footprint of the parallel collections (analogous to how we can''t count map against the parallel collections).'
  replies: []
- id: 9113
  author: Dave
  date: '2011-08-16T17:41:33'
  content: aggregate and fold should have existed before the parallel collections work, but didn't due to to left-over low-level LISP-ish sentiments. Eventually worrying about the difference between foldl and foldr will be seen as similar to worrying about register allocations.
  replies: []
- id: 9114
  author: Daniel Spiewak
  date: '2011-08-17T06:57:02'
  content: '@Dave

    Some catamorphisms aren''t associative.  Foldl and foldr will always have a place, if only as the building blocks for higher level combinators.'
  replies: []
- id: 9115
  author: Douglas Alan
  date: '2011-11-06T15:45:03'
  content: 'I''m not sure that I understand your disdain for parallel collections. I might be convinced that having them built into the standard collections is not the best place for them, though it doesn''t bother me either that they are there. But it''s clear to me that they are extremely useful as they are. In fact, I just used .par on an iterator to speed up a CPU-bound bioinformatics algorithm that I recently implemented by 4X on a four core computer. Implementing this huge speedup took me all of about an hour, and the scientists are extremely happy with the results.

    Re not having much control over what happens, e.g., how may threads are started up, etc., why would I want that? Scala is a high level language. I just want it to work. That''s also why I want a garbage collector, rather than having to explicitly manage memory, as I did in C++. For my recent use of parallel collections, the problem was embarrassingly parallel, and parallel collections solved the problem with ease and finesse while making full use of all the CPU cores.

    Concurrency is hard, so anything that makes it easier is very welcome, as far as I''m concerned. There is no one-size fits all tool for concurrency. Instead we need a bunch of different tools to help make concurrent different sorts of problems. Parallel collections seem to perfectly fit the bill for one common class of problem.

    |&gt;ouglas'
  replies: []
- id: 9116
  author: Attaque brute force, Java et parall??lisme &#171; Blog d??Ippon Technologies
  date: '2011-12-12T05:01:40'
  content: '[...] &lt;troll&gt; Il est ??crit en Scala, et donc personne ne le comprend &lt;/troll&gt;  Pour une critique de cette fonctionnalit??, nous vous conseillons de lire ce post de C??dric Beust. [...]'
  replies: []
- id: 9117
  author: Jason Wheeler
  date: '2012-01-23T22:15:20'
  content: 'In regards to your sentiment about the parallel collections being mostly useless, I disagree.

    I have a program that I use to crawl a very large website.  It takes about 8 hours with a single thread.  On an 8-core processor, I simply changed to using a parallel list, changed my counter from an int to an AtomicInteger, and now it runs in a little over an hour.  And as you can see from your comments, there are plenty of other people who have made useful gains from these parallel collections.

    In regards to your point about the no exposed configuration, I agree with that.  The bottleneck for my program is making the thousands of connections for each different page on the site, and then downloading the content.  If I could run say, 20 threads, I think I would get a lot closer to maxing my bandwidth, if not my cpu.

    At the same time, I wouldn''t want to run 20 threads on a 2-core machine, so having it auto-decide the number of threads to use has it''s benefits, at the expense of not maximizing my current resources in this particular case.'
  replies: []
- id: 9118
  author: Daniel Andor
  date: '2012-02-17T11:19:38'
  content: 'Following on from Jason''s point: there are many I/O-bound situations in which latency or non-local bandwidth are an issue, where I wouldn''t mind firing up more than 10 threads per core to gain real time improvements. I have found this to be very useful when connecting to multiple servers (http or database) or to one multithreaded server. Therefore the ability to configure the size of the pool would be very welcome.'
  replies: []
- id: 9119
  author: Pedro
  date: '2012-03-27T07:58:58'
  content: 'Great article. I don''t understand why the parallelism topic is surrounded with some sort of dense fog. Everyone talks about it, but very rarely we see anyone going to the bottom of it.

    Finally someone discussing it openly instead of just scratching the surface with fancy words.

    Daniel is stop on, IO blocking is a simple example of compulsory parallelism, yet there''s no simple framework for thread pooling it. I would guess actors would be the answer, but I came to learn that I was wrong as they don''t offer good control of thread usage policies. Scala built in actors, that is.'
  replies: []
- id: 9120
  author: Ben Wing
  date: '2012-04-27T19:55:58'
  content: 'Another data point here.  I''m working on a computational linguistics package called TextGrounder, whose purpose is to automatically geolocate documents based on their text, given a set of geolocated documents (e.g. a large collection of tweets annotated with latitude/longitude coordinates).  It was originally written in Python; when I converted it to Scala it got an order of magnitude faster -- but unfortunately took up about 3x the memory, which for me is a big issue since the processes are sometimes 40GB or more due to having to divide the earth up into hundreds of thousands or millions of grid cells and create hash tables of word counts for each cell.

    Even so, testing on large enough corpora of documents sometimes takes several hours or even several days.  I added Hadoop support but it was PAINFUL to write and it''s incredibly temperamental trying to get it working.  In addition, it''s a heavy-weight solution since each separate node has to create the entire cell grid and eat up all sorts of memory, meaning I can only have one or two worker tasks per 48GB, 8-core machine.

    I tried switching the inner loop to the .par() version.  Things immediately broke because of some non-thread-safe code that was using and reusing a static array to avoid lots of unnecessary garbage collection; but with this issue fixed, I get about a 6x speedup (average CPU usage about 600% according to ''top'') on the 8-core machines.  This is a big win and uses up no additional memory because the cell grid is shared.

    I''m not sure why I''m not getting completely efficient CPU usage, and it definitely would be nice to have some way of tuning the innards, but even so, it''s a lot of gain for not very much work (and would have been no work at all if my code were thread-safe from the beginning).

    BTW Cedric: See my comment above about ''top'' -- that''s how you figure out whether multiple threads are being used.'
  replies: []
---

Scala 2.9 introduced [parallel collections](http://days2010.scala-lang.org/node/138/140), which mirror most of the existing collections with a parallel version. Collections that have been parallelized this way have received a new method called `par` which magically parallelize certain operations on this collection. 

For example, here is a sequential version: 
    
    
    scala> (1 to 5) foreach println
    1
    2
    3
    4
    5
    

And the parallel version (notice the extra `par` keyword): 
    
    
    scala> (1 to 5).par foreach println
    1
    4
    3
    2
    5
    

Obviously, the ordering will change each time you run the parallel version. 

This piqued my curiosity and I decided to dig a bit further, starting with investigating what exactly is happening behind the scenes. 

First of all, the parallel collections are based on an article called ["A Generic Parallel Collection Framework"](http://infoscience.epfl.ch/record/150220/files/pc.pdf), by Martin Odersky, Aleksander Prokopec et al, which I highly recommend. It's a very interesting analysis of how to decompose the concepts of parallelism, concurrency, collections, ranges and iterators and assemble them in a generic manner. 

Sadly, this article ended up being the only highlight of my research in this area, because the more I dug into the Scala parallel collections, the more disappointed I became. By now, I am struggling to find a good use case for parallel collections, and I'm hoping that this article will generate some positive responses about their use. 

Here are some of the problems that I found with the parallel collections, starting with the one I think is the most important one. 

#### Lack of control

My first reaction when I saw the output above was to try to verify that indeed, threads were being spawned, and then find out how many of them, how I can control the size of the thread pool, etc... 

I came up pretty much empty on all counts, and if I have missed a piece of the documentation that explains this, I would love to see it, but browsing the sources of `ParSeq` and other classes produced no useful result. 

This is a big deal, and probably the worst problem with this framework. The loop above generated a parallel range of five entries, did it generate five threads? What happens if I try with 1000? 100000? The answer: it works for all these values, which makes me think that the loop is not allocating one thread per value. So it's using a thread pool. But again: what size? Is that size configurable? How about other characteristics of that thread pool? 

Digging deeper, what are the saturation and rejection policies? If the pool contains ten threads, what happens when it receives an eleventh value? It probably blocks, but can this be configured? Can the dispatch strategy be configured? Maybe I'm feeding operations of diverse durations and I want to make sure that the expensive operations don't starve the faster ones, how can I do this? 

This absence of configuration is a big blow to the parallel framework, and it relegates its usage to the simplest cases, where it will most likely not bring much speed gain compared to sequential execution. 

#### Silver bullet illusion

Over the past months, I have seen quite a few users pop in the `#scala` channel and complain that parallel collections are not working. Taking a closer look at their code, it usually becomes quickly obvious that their algorithm is not parallelizable, and either 1) they didn't realize it or 2) they were aware of that fact but they got the impression that `par` would magically take care of it. 

Here is a quick example: 
    
    
    scala> Set(1,2,3,4,5) mkString(" ")
    res149: String = 5 1 2 3 4
    scala> Set(1,2,3,4,5).par mkString(" ")
    res149: String = 5 1 2 3 4
    

You can run the `par` version over and over, the result will remain the same. This is confusing. Note that I used a `Set` this time, which indicates that I don't care for the ordering of my collection. Calling `mkString` on the sequential version of my set reflects this. With this in mind, I would hope that calling `mkString` on the parallel version of my set would randomize its output, but that's not what's happening: I'm getting the same result as the sequential version, over and over. 

It should be obvious that not all operations on collections can be parallelized (e.g. folds) but it looks like creating a string out of a set should be, and it's not. I'm not going to go too far down here because the explanation is a mix of implementation details and theoretical considerations (the catamorphic nature of folds, set, the Scala inheritance hierarchy and the `mkString` specification), but the key point here is that the parallelization of collections can lead to non-intuitive results. 

#### Bloat

I think the decision to retrofit the existing collections with the `par` operation was a mistake. Parallel operations come with a set of constraints that are not widely applicable to sequential collections, which leads to the situation that not all the collections support `par` (e.g. there is no `ParTraversable`) and more importantly, it imposes a burden on everyone, including people who don't care for this functionality. 

In doing this, Scala violates what I consider a fairly important rule for programming languages and API's in general: you shouldn't pay for what you don't use. Not only do the parallel collections add a few megs to a jar file that's already fairly big, but they probably introduce a great deal of complexity that is going to impact the maintainers of the collections (both sequential and parallel). It looks like anyone who will want to make modifications to the sequential collections will have to make sure their code is not breaking the parallel collections, and vice versa. 

#### Unproven gains

Scala 2.9 is still very recent so it's no surprise that we don't really have any quantitative feedback of real world gains, but I'll make a prediction today that the courageous developers who will decide to embrace the parallel collections wholeheartedly across their code base will see very little gains. In my experience, inner loops are hardly ever the bottleneck in large code bases, and I'd even go further in suspecting that spawning threads for elements of a loop could have adverse effects (context switching, memory thrashing, cache misses) for loops that iterate on very few elements or that are executing very fast operations already. I'm mostly speculating here, I haven't run any measurements, so I could be completely wrong. 

#### Remedies

Because of all these problems, I am a bit underwhelmed by the usefulness of the parallel collection framework overall, maybe someone who has a more extensive experience with it can chime in to share the benefits they reaped from it. 

I have a couple of suggestions that I think might be a better path for this kind of initiative: 

  * Split up the parallel and sequential collections, remove `par` and make sure that both hierarchies can be evolved independently of each other. 
  * Provide a nice Scala wrapper around the `Executor` framework. Executors have everything that anyone interested in low level parallelism can dream of: configurable thread pool sizes, and even thread pools themselves, thread factories, saturation and rejection policies, lifecycle hooks, etc... You could write a Scala wrapper around this framework in a few hundreds of lines and it would be much more useful than what is currently possible with `par`. 
Thoughts? 

_Update: Discussion on[reddit](http://www.reddit.com/r/programming/comments/jk39a/a_closer_look_to_scalas_parallel_collections/)_.
