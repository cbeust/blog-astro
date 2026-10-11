---
title: More on multithreaded topological sorting
date: '2009-12-13T12:45:48'
slug: more-on-multithreaded-topological-sorting-2
categories:
- Java
tags:
- testng
comments:
- id: 7972
  author: Nish
  date: '2009-12-13T13:21:50'
  content: Your example always schedules every free test, which would happen with the random scheduler as well. Do you have an example where scheduling random free nodes differs from scheduling free nodes based on their dependencies?
  replies: []
- id: 7973
  author: Cedric
  date: '2009-12-13T13:34:53'
  content: 'Nish,

    Take a look at this new graph:

    beust.com/topo/Topo8.png

    When a1 completes, it frees both b1 and c1, but with this scheme, c1 would have a weight of 0 (no dependees) while b1 has a weight of 2 (2 nodes depend on it), so b1 would get scheduled first, and when it completes, it will free 2 more nodes (b2 and b3).'
  replies: []
- id: 7974
  author: Brian Slesinsky
  date: '2010-01-17T14:08:21'
  content: I can't tell from these examples, but hopefully you're counting the number of descendants of each node rather than the number of children?
  replies: []
- id: 7975
  author: Olivier
  date: '2010-01-18T08:24:17'
  content: 'Hi Cedric,

    I''ve used a similar technique to structure a large batch process recently. In my case, a task also has the ability to dynamically spawn various child tasks, that get reinjected in the dependency graph (probably not relevant for TestNG though).

    Another interesting issue is to evaluate the maximum parallelism that can be achieved on the graph (under ideal circumstances), which gives an upper bound on the thread pool''s size. This amounts to calculating the independence number of the graph, which can be solved in linear time for a directed acyclic graph.'
  replies: []
- id: 7976
  author: Daniel
  date: '2010-01-19T21:08:18'
  content: 'I ran into a similar problem trying to parallelize the eager initialization of Spring singleton beans in order to reduce application startup time [1]. I really like your implementation, especially the dot file generation as a visualization aid... so I stole the idea! ;-) Thanks for a great series of posts.

    [1] http://github.com/gredler/spriths'
  replies: []
- id: 7977
  author: Jack3d
  date: '2011-06-05T18:00:55'
  content: Thanks for the tip. I've been having the same issues and I thought I would never find any solution online! I've used your technique and it worked out great! Kudos!
  replies: []
- id: 7978
  author: Annie Ignacio
  date: '2011-09-15T00:30:51'
  content: Great site! I have an eager solutions to those problems I've encountered and ruin my works.  I modified the executor to dump the graph . Finally, I can wrote a good script to convert these dot files into images and to create an HTML file. I can a simple processed the files with the  script, an interesting issues will be evaluated. Thanks for the idea...
  replies: []
---

![](http://beust.com/weblog/topo/03.png)  
I received [a few interesting comments](http://beust.com/weblog/weblog/2009/11/28/hard-core-multicore-with-testng/) on my previous entry regarding the new multithreaded topological sort I implemented in TestNG and there is one in particular from Rafael Naufal that I wanted to address:

> The @Priority annotation couldn't be adapted to say which free methods get scheduled first? BTW, the responsibility of knowing which nodes are free couldn't be moved to the graph of test methods?

This is pushing my current algorithm even further in the sense that we not only want to schedule free nodes as they become available, we also want to schedule them in order of importance.  
What makes a node more important than another? Its level of dependencies. The more a node is depended upon, the more beneficial it is to schedule it as soon as possible since this will end up freeing more nodes. Admittedly, you are still bounded by the size of your thread pool, but this is exactly what we want: increasing the pool size should lead to more parallelism and therefore better performance, but the current scheduling algorithm being fair (or random) means that we are not guaranteed to see this performance increase.  
My first reaction was to modify [my Executor](http://code.google.com/p/testng/source/browse/trunk/src/main/org/testng/internal/thread/GroupThreadPoolExecutor.java) but as it turns out, you can actually do this with the existing implementation. The constructor of all the [Executors](http://java.sun.com/j2se/1.5.0/docs/api/java/util/concurrent/ThreadPoolExecutor.html) takes a  
BlockingQueue in parameter, which is the queue that the Executor will use to process the workers. Unsurprisingly, there already is a priority queue called [PriorityBlockingQueue](http://java.sun.com/j2se/1.5.0/docs/api/java/util/concurrent/PriorityBlockingQueue.html).  
All you need to do is to use that queue instead of the default one when you create your Executor and then make sure that the workers you pass it have a natural ordering. In this case, the weight of a worker is how many other workers depend on it, which is very easy to calculate.  
On a related topic, I wanted to get a closer look at how the algorithm I described in my previous blog post actually works. I described the theory and I have tests that show that it seems to work as expected, but it occurred to me that I could actually "view it from the inside" with little effort.  
First, I added a method called `toDot` which generates a [Graphviz file](http://www.graphviz.org/) representing the current graph. This turned out to be trivial:
    
    
    /**
    * @return a .dot file (GraphViz) version of this graph.
    */
    public String toDot() {
      String FREE = "[style=filled color=yellow]";
      String RUNNING = "[style=filled color=green]";
      String FINISHED = "[style=filled color=grey]";
      StringBuilder result = new StringBuilder("digraph g {\n");
      Set<T> freeNodes = getFreeNodes();
      String color;
      for (T n : m_nodesReady) {
        color = freeNodes.contains(n) ? FREE : "";
        result.append("  " + getName(n) + color + "\n");
      }
      for (T n : m_nodesRunning) {
        color = freeNodes.contains(n) ? FREE : RUNNING;
        result.append("  " + getName(n) + color + "\n");
      }
      for (T n : m_nodesFinished) {
        result.append("  " + getName(n) + FINISHED+ "\n");
      }
      result.append("\n");
      for (T k : m_dependingOn.getKeys()) {
        List<T> nodes = m_dependingOn.get(k);
        for (T n : nodes) {
          String dotted = m_nodesFinished.contains(k) ? "style=dotted" : "";
          result.append("  " + getName(k) + " -> " + getName(n) + " [dir=back " + dotted + "]\n");
        }
      }
      result.append("}\n");
      return result.toString();
    }

Then I modified the executor to dump the graph every time a worker terminates, and finally, I wrote a shell script to convert these dot files into images and to create an HTML file. I ran a simple test case, processed the files with the shell script and [here is the final result](http://beust.com/weblog/topo/graphs.html).  
A yellow node is "free", green means that the node is "ready" (to be run in the thread pool), grey is "finished" and white nodes haven't been processed yet. Dotted arrows represent dependencies that have been satisfied.

As you can see, the execution matches very closely what you would expect based on my description of the algorithm and I confirmed that changing the size of the thread pool creates different executions.
