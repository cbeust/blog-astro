---
title: Hard core multicore with TestNG
date: '2009-11-28T10:05:49'
slug: hard-core-multicore-with-testng
categories:
- Java
comments:
- id: 7959
  author: Davide
  date: '2009-11-28T10:35:10'
  content: Interesting. Do you have a way to choose which free methods execute first? E.g. it may be better to run a1 & a2 before x and y in the first of your gray/green pictures.
  replies: []
- id: 7960
  author: Davide
  date: '2009-11-28T10:36:24'
  content: Ehy, but your blog show email addresses in clear! Please fix it!
  replies: []
- id: 7961
  author: Cedric
  date: '2009-11-28T10:43:41'
  content: 'Not really: the free methods just get added to the Executor which is in charge of scheduling them whenever it feels like it.

    I see your point, though: it might be interesting to add another feature to the executor that would add a priority to its workers, and the method with the highest priority gets scheduled first.

    I would be very surprised if this didn''t exist already, I''ll have to look into it.

    Also, I removed your email address, sorry about that.'
  replies: []
- id: 7962
  author: Romain Guy
  date: '2009-11-28T12:09:25'
  content: C
  replies: []
- id: 7963
  author: OrigamiMarie
  date: '2009-11-29T10:03:24'
  content: Oh that is very cool.  It makes me want a new version of the IntelliJ plugin even more :).  Is there anything I can do to bring the IDEA plugin back to life?  I see there's a Google Project for it, but it looks pretty stale and I guess the most recent version was made by the JetBrains folks?  But that hasn't moved in a while.  Anyway, please let me know if there's any way I can offer some constructive help (besides just nagging).  Ah . . . I don't think I'll post my email here though, because I don't need that much spam.
  replies: []
- id: 7964
  author: Taras Tielkes
  date: '2009-11-29T10:41:09'
  content: IntelliJ IDEA comes with the TextNG plugin bundled out of the box. Which features are you missing?
  replies: []
- id: 7965
  author: OrigamiMarie
  date: '2009-11-29T12:05:08'
  content: 'Yes, there is a TestNG plugin bundled with the IDEA download, but it uses an older version of TestNG (something like 5.6, but I''m not sure because I am not currently on the computer with IDEA installed).  The IDEA 9 beta is using the same plugin as 8 used, so I suspect that the JetBrains branch of the plugin is stalled.

    I would love to use the multi-threading DataProvider support from 5.10, and this new Executor would be nice to have as well.  And of course those aren''t in the current IDEA plugin.

    How does the layering work for this plugin?  Can I just change out some jar files to get these new features, or is there coding work to be done in the plugin itself to enable these things?  I would love some directions if it''s a simple jar file transplant, and I would be happy to help if coding is required.  And I don''t really know how the ownership model works for the plugin right now . . .'
  replies: []
- id: 7966
  author: Rafael Naufal
  date: '2009-11-30T12:08:25'
  content: The @Priority annotation couldn't be adapted to say which free methods get scheduled first? BTW, the responsibility of knowing which nodes are free couldn't be moved to the graph of test methods?
  replies: []
- id: 7967
  author: OrigamiMarie
  date: '2009-12-02T20:04:28'
  content: 'Okay, I am working with the JetBrains folks to get what I need.  It sounds like it won''t happen for a while because they say there is a bug in TestNG 5.10 (which they also note is actually fixed in trunk), so they''ll wait for a bug-fix version (or I''m thinking probably just 5.11) before incorporating it into a new plugin.

    Meanwhile, oh I can''t wait for 5.11 to come out of beta because I just wrote a test suite that wants smarter dependency analysis.  Thank you so much for the continued work on TestNG :).'
  replies: []
- id: 7968
  author: xsonymathew
  date: '2009-12-03T16:15:54'
  content: 'nice...

    How about?

    1) Create the dependency graph.

    2) Have a thread at each root-node just traverse the graph, depth-first or breadth-first and execute each node? also nodes need to be locked from execution if a thread already visited it.

    p.s. checkout my new article: Context IoC Revisted at sonymathew.blogspot.com'
  replies: []
- id: 7969
  author: Anonymous Coward
  date: '2010-01-07T21:21:09'
  content: 'It''s not about topological sorting and concurrency but... I realize of really poor the single-threaded default sort algos in Java where.  It occured to me on a 16-cores / 20 GB of ram OS X machine: it was pathetic to see only one core doing the sort.  I implemented a correctly multi-threaded sorting algo and boom, instant ''times x'' speed increase.  It''s weird for a language offering so many features and API related to concurrency to have such basic thing as sorting using only a single thread and slowing to a crawl on a desktop 16-cores machine.'
  replies: []
- id: 7970
  author: Andy
  date: '2011-02-21T10:58:03'
  content: 'Cedric,

    Do you anticipate producing/releasing an updated version of the TestNG book at some point in time?

    Warmest regards,

    Andy'
  replies: []
- id: 7971
  author: Narayana
  date: '2012-03-28T02:42:36'
  content: Well, it talks about the dependency tests inside on e class. I have two classes. Say for example ClassA &amp; ClassB. ClassA is having a1,a2,a3 methods. ClassB is having b1,b2,b3 methods.  b1 method is depending on a1 method which is another class. How dependsOnGroup works here. Cross level dependsOnGroups will support ?
  replies: []
---

[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo2.png)  
](http://beust.com/weblog/topo/Topo2.dot)  
I recently implemented a new feature in TestNG that took me down an interesting technical path that ended up mixing graph theory with concurrency.  
Here are a few notes.

### The problem

TestNG allows you to declare dependencies among your test methods. Here is a simple example:

```java
@Test
public void a1() {}

@Test(dependsOnMethods = "a1")
public void b1() {}

@Test
public void x() {}

@Test
public void y() {}
```

In this example, `b1()` will not run until `a1()` has completed and passed. If `a1()` fails, `b1()` will be marked as "Skipped". For the purpose of these articles, I call both method `a1()` and `b1()` "dependent" methods while `x()` and `y()` are "free" methods.  
Things get more interesting when you want to run these four test methods in parallel. When you specify that these methods should be run in a pool of three threads, TestNG still needs to maintain the ordering of `a1()` and `b1()`. The way it accomplishes this is by running all the dependent methods in the same thread, guaranteeing that not only will they not overlap but also that the ordering will be strictly respected.  
The current algorithm is therefore simple:

  * Break all the test methods into two categories: free and dependent.
  * Free methods are thrown into the thread pool and executed by the Executor, one method per worker, which guarantees full parallelism.
  * Dependent methods are sorted and run into an executor that contains just one thread.



This has been the scheduling algorithm for more than five years. It works great, but it's not optimal.

### Improvements

Dependent methods are a very popular feature of TestNG, especially in web testing frameworks such as Selenium, where the testing of pages is very dependent on the ordering in which operations are performed on these pages. These tests are typically made of a majority of dependent methods, which means that the current scheduling algorithm makes it very hard to leverage any parallelism at all in these situations.  
For example, consider the following example:  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo7.png)  
](http://beust.com/weblog/topo/Topo7.dot)  
Since all four methods are dependent, they will all be running in the same thread, regardless of the thread pool size. An obvious improvement would be to run `a1()` and `b1()` in one thread and `a2()` and `b2()` in a different thread.  
But why not push thing further and see if we can't just throw all these four methods in the main thread pool and still respect their ordering?  
This thought led me to take a closer look at the concurrent primitives availables in the JDK, and more specifically, [Executors](http://java.sun.com/j2se/1.5.0/docs/api/java/util/concurrent/Executors.html).  
My first question was whether it was possible to add workers to an Executor without necessarily having them ready to run right away, but this idea soon appeared to me as going against the principle of Executors, so I abandoned it.  
The other idea was to see if it was possible to start with only a few workers and then add more workers to an Executor as it's running, which turns out to be legal (or at least, not explicitly prohibited). Looking through the existing material, it seems to me that Executors typically do not modify their own set of workers. They get initialized and then external callers can add workers to them with the [`execute()`](http://java.sun.com/j2se/1.5.0/docs/api/java/util/concurrent/Executor.html#execute%28java.lang.Runnable%29) method.  
At this point, the solution was becoming fairly clear in my mind, but before I get into details, we need to take a closer look at sorting.

### Topological sort

In the example shown at the beginning, I said that TestNG was sorting the methods before executing them but I didn't explain exactly how this was happening. As it turns out, we need a slightly different sorting algorithm than the one you are used to.  
Looking back at this first example, it should be obvious that there are more than one correct way to order the methods:

  * a1() b1() x() y()
  * x() a1() b1() y()
  * y() a1() x() b1()
  * ...



In short, any ordering that executes `a1()` before `b1()` is legal. What we are doing here is trying to sort a set of elements that cannot all be compared to each other. In other words, if I pick two random methods "f" and "g" and I ask you to compare them, your answer will be either "f must run before g", "g must run before f" or "I cannot compare these methods" (for example if I give you `a1()` and `x()`).  
This is called a [Topological sorting](http://en.wikipedia.org/wiki/Topological_sorting). This link will tell you all you need to know about topological sorting, but if you are lazy, suffice to say that there are basically two algorithms to achieve this kind of sort.  
Let's see the execution of a topological sort on a simple example.  
The following graphs represent test methods and how they depend on  
each other. Methods in green are "free methods": they don't depend on any other methods. Arrows represent dependencies and dotted arrows are dependencies that have been satisfied. Finally, grey nodes are methods that have been executed.  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo1.png)  
](http://beust.com/weblog/topo/Topo1.dot)  
First iteration, we have four free methods. These four methods are ready to be run.  
Result so far: **{ a1, a2, x, y }**  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo2.png)  
](http://beust.com/weblog/topo/Topo2.dot)  
The four methods have been run and they "freed" two new nodes, `b1` and `b2`, which become eligible for the next wave of executions. Note that while one of `d`'s dependencies has been satisfied (`a1`), `d` still depends on `b1` so it's not free yet.  
Result so far: **{ a1, a2, x, y, b1, b2 }**  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo3.png)  
](http://beust.com/weblog/topo/Topo3.dot)  
` b2` and `b1` have run and they free three additional methods.  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo4.png)  
](http://beust.com/weblog/topo/Topo4.dot)  
The last methods have run, we're done.  
Final result: **{ a1, a2, x, y, b1, b2, c1, c2, d }**  
Again, note that this is not the only valid topological sort for this example: you can reorder certain elements as long as the dependencies are respected. For example, a result that would start with **{a2, a1}** would be as correct as the one above, which starts with **{a1, a2}**.  
This is a pretty static, academic example. In the case of TestNG, things are a lot more dynamic and the entire running environment needs to be re-evaluated each time a method completes. Another important aspect of this algorithm is that all the free methods need to be added to the thread pool as soon as they are ready to run, which means that the `ExecutorService` will have workers added to its pool even as it is running other workers.  
For example, let's go back to the following state:  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo2.png)  
](http://beust.com/weblog/topo/Topo2.dot)  
At this stage, we have two methods that get added to the thread pool and run on two different threads: `b1` and `b2`. We can then have two different situations depending on which one completes first:  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo6.png)  
](http://beust.com/weblog/topo/Topo6.dot)  
`b1` finishes first and frees both `c1` and `d`.  
Or...  
[  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/Topo5.png)  
](http://beust.com/weblog/topo/Topo5.dot)  
`b2` finishes first but doesn't free any new node.

### A new kind of Executor

Since the early days, TestNG's model has always been very dynamic: what methods to run and when is being decided as the test run progresses. One of the improvements I have had on my mind for a while was to create a "Test Plan" early on. A Test Plan means that the engine would look at all the TestNG annotations inside the classes and it would come up with a master execution plan: a representation of all the methods to run, which I can then hand over to a runner that would take care of it.  
Understanding the scenario above made me realize that the idea of a "Test Plan" was doomed to fail. Considering the dynamic aspect of TestNG, it's just plain impossible to look at all the test classes during the initialization and come up with an execution plan, because as we saw above, the order in which the methods are run will change depending on which methods finish first. A Test Plan would basically make TestNG more static, while we need the exact opposite of this: we want to make it even more dynamic than it is right now.  
The only way to effectively implement this scenario is basically to reassess the entire execution every time a test method completes. Luckily, [`Executors`](http://java.sun.com/j2se/1.5.0/docs/api/java/util/concurrent/Executor.html) allow you to receive a callback each time a worker completes, so this is the perfect place for this. My next question was to wonder whether it was legal to add workers to an `Executor` when it's already running (the answer is: yes).  
Here is an overview of what the new Executor looks like.  
The `Executor` receives a graph of test methods to run in its constructor and then simply revolves around two methods:

```java
/**
* Create one worker per node and execute them.
*/
private void runNodes(Set<ITestNGMethod> nodes) {
  List<IMethodWorker> runnables = m_factory.createWorkers(m_xmlTest, nodes);
  for (IMethodWorker r : runnables) {
    m_activeRunnables.add(r);
    setStatus(r, Status.RUNNING);
    try {
      execute(r);
    }
    catch(Exception ex) {
      // ...
    }
  }
}
```

The second part is to reassess the state of the world every time a method completes:

```java
@Override
public void afterExecute(Runnable r, Throwable t) {
  m_activeRunnables.remove(r);
  setStatus(r, Status.FINISHED);
  synchronized(m_graph) {
    if (m_graph.getNodeCount() == m_graph.getNodeCountWithStatus(Status.FINISHED)) {
      shutdown();
    } else {
      Set<ITestNGMethod> freeNodes = m_graph.getFreeNodes();
      runNodes(freeNodes);
    }
  }
}
```

When a worker finishes, the Executor updates its status in the graph. Then it checks if we have run all the nodes, and if we haven't, it asks the graph the new list of free nodes and schedules these nodes for running.

### Wrapping up

This is basically a description of the new TestNG scheduling engine. I tried to focus on general concepts and I glossed over a few TestNG specific features that made this implementation more complex than I just described, but overall, implementing this new engine turned out to be fairly straightforward thanks to TestNG's layered architecture.  
With this new implementation, TestNG is getting as close to possible to offering maximal parallelism for test running, and a few Selenium users have already reported tremendous gains in test execution (from an hour down to ten minutes).  
When I ran the tests with this new engine, very few tests failed and the ones that did were exactly the ones that I wanted to fail (such as on that verified that dependent methods execute in the same thread, which is exactly what this new engine is fixing). Similarly, I added new tests to verify that dependent methods are now sharing the thread pool with free methods, which turned out to be trivial since I already have plenty of support for this kind of testing.

This new engine will be available in TestNG 5.11, which you can beta test [here](http://testng.org/beta).

_Update: I posted a follow up[here](https://www.beust.com/weblog/more-on-multithreaded-topological-sorting-2/).  
_
