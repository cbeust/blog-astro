---
title: Ant profiling
date: '2005-05-17T10:01:34'
slug: ant-profiling
categories:
- Java
comments:
- id: 3644
  author: eu
  date: '2005-05-17T10:53:07'
  content: BTW, here is the link to my first post about Ant build antipatterns. http://jroller.com/page/eu/20050516#profiling_and_statical_analysis_of :-)
  replies: []
- id: 3645
  author: Val
  date: '2005-05-17T12:27:09'
  content: Concerning bullet 1, there is neat tool called "Grand" (http://wiki.apache.org/ant/DocumentingAntBuildFiles) that uses Graphviz in order to provide a visual representation of ant target dependencies... Check it out !
  replies: []
---

Eugene is [ trying to write an `ant` profiler](http://jroller.com/comments/eu/Weblog/profiling_ant_builds_take_two).  His preliminary results are encouraging but I believe he's only solved the easy problem.

In my experience, `ant` builds are not slow because they spend too much time in targets (this time is usually incompressible) but because identical targets get run multiple times or or the same files get processed several times.

Here are a few steps that might lead to a good `ant` profiler:

  1. **Provide a way to visualize the graph of dependencies.**

This should be easy enough:  parse all the targets and their `depends` clauses and show a graphical view of what it looks like.  With some simple graph algorithms, it's also pretty easy to point out extraneous and redundant paths.  
  2. **Add finer-grained support in` ant`'s listeners.**  
  
This requires active participation from the ant project but I think it would be worth it.  The [ current listeners](http://ant.apache.org/manual/listeners.html) are fairly primitive and do not provide any insight on the internals of each task.  What I believe would be interesting is for each task to implement an interface that lets observers know when a certain file is being processed and when the resulting file is starting and finishing to be generated.  With support for such listeners, it would be trivial to see that the file "A.java" is being processed twice even in the most complex builds.  
 
  3. **Start identifying a few "`ant` build anti-patterns" (targets and depends that create extra work)**

When I looked for examples of anti-patterns in my various builds, I came up empty.  It's not that my build files are good (I know they're not), but it just seems very hard to pinpoint exactly what goes wrong as your build files start accreting fat throughout time.  
  
Also, there are two different ways we can derive information from this stage:  a) by looking at the `build.xml` (or its DOM representation) directly or b) at runtime, by storing information on the target paths that are being walked by `ant` and displaying a report at the end.



Can you think of any ant design anti-pattern that will cause a build to take longer than it should?
