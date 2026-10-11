---
title: More on debuggers
date: '2003-12-11T07:26:55'
slug: more-on-debuggers
categories:
- Java
comments:
- id: 705
  author: Stepan Samarine
  date: '2003-12-11T08:07:16'
  content: Well, I don't remember myself using a debugger in a several years. It's simply impossible in the production environment. In the day-to-day development, it's also of no use, at least to me. Logging and unit testing is more that enough. I can say that debugging can be some kind of a last resort to understand, what's going on.
  replies: []
- id: 706
  author: Merg
  date: '2003-12-11T10:26:40'
  content: Does this also mean that the guys that don't use any debugger also don't use the hotswapping feature? (I can't imagine don't using this in a J2EE environment, this is a huge time-saviour.) I find debugging and logging complementory. We do both quite intensivly. (Debugging in a production environment is of course out of the question.)
  replies: []
- id: 707
  author: Mike Spille
  date: '2003-12-11T13:52:31'
  content: 'Cedric, you said "As for the ephemeral aspect, yes, but fixing a bug is also by nature, ephemeral. A debugging session might end up in one or several fixes, which you might want to capture in a regression test once you are done."

    What you''re missing is all of the information you churned through in the debugging session to find the problem in the first place.  Break pointing here and there, printing objects and variables out as need be.  What I see people doing in debuggers is printing, or setting watch points, on the same sorts of objects and data repeatedly over weeks and months of development.  Each person is individually spending hours looking at the same data, and none of their experiences are shared.  Slap those suckers into a logging statement, and _everyone_ can benefit from them.  Note that this is above and beyond unit tests - this is information shown over time to be useful in tracking down issues.  They''re not tests - they''re extended tracing information.  As I see it, you can commit this information to the code once in trace statements; or you can have each individual rediscover it repeatedly in their own private debug sessions.'
  replies: []
- id: 708
  author: Mike Spille
  date: '2003-12-11T13:52:33'
  content: 'Cedric, you said "As for the ephemeral aspect, yes, but fixing a bug is also by nature, ephemeral. A debugging session might end up in one or several fixes, which you might want to capture in a regression test once you are done."

    What you''re missing is all of the information you churned through in the debugging session to find the problem in the first place.  Break pointing here and there, printing objects and variables out as need be.  What I see people doing in debuggers is printing, or setting watch points, on the same sorts of objects and data repeatedly over weeks and months of development.  Each person is individually spending hours looking at the same data, and none of their experiences are shared.  Slap those suckers into a logging statement, and _everyone_ can benefit from them.  Note that this is above and beyond unit tests - this is information shown over time to be useful in tracking down issues.  They''re not tests - they''re extended tracing information.  As I see it, you can commit this information to the code once in trace statements; or you can have each individual rediscover it repeatedly in their own private debug sessions.'
  replies: []
- id: 709
  author: Frank Bolander
  date: '2003-12-11T17:29:29'
  content: 'Cedric,

    I agree with you with your assessment of what a good developer''s toolkit should consist of:

    Debugger

    Logging

    Tests

    Each one of these tools addresses different granularities of code inspection throught the development/regression process. Tests should invariably test the coarsest level of code functionality. Logging provides a solid snapshot into a given code sequence and a debugger allows you to transition from snapshot to snapshot to see how an application state is evolving.

    They are all, as you said, complementary not mutually exclusive.'
  replies: []
- id: 710
  author: Brian Slesinsky
  date: '2003-12-11T22:04:28'
  content: They may be complementary, but time spent debugging is time not spent improving logging and system diagnostics.  If you reach for the debugger first when there's a problem, you're less likely to see deficiencies in the logging and be motivated to improve it.
  replies: []
- id: 711
  author: Jonathan
  date: '2003-12-12T04:15:23'
  content: If you only use logging, then you're a one-trick pony. If you also use unit tests, then you're a two-trick pony. Personally, I'm a three trick pony!
  replies: []
---

There were quite a few reactions to my previous entry.  I'd like to add a few comments of my own.

First of all, [Rob wrote](http://www.artima.com/forums/flat.jsp?forum=106&thread=23476&start=60&msRange=15):

> [Debuggers are] a little *too* clever sometimes. A print statement does not (usually) interrupt the flow of execution. A breakpoint does. 

That's why the best way to do this with a debugger is to install a watchpoint at a location and do a println there. It won't stop the code but it will print your debug code. No interruption, no spurious println in your code and the exact effect you were waiting for. 

> Have you ever blown an hour or two debugging the right code > in the wrong context because you didn't realize that the breakpoint would get hit more than once, and so you used the first hit instead of the 17th? 

Sure, the very first time I used a debugger. About 20 years ago :-) 

Besides, good luck finding the 17th println in your console. 

At least, I can tell a debugger to stop the 17th time the breakpoint is hit. With your method, I need to discard manually and visually the first 16 println.

[Mike said](http://beust.com/weblog/weblog/mt-comments.cgi?entry_id=55):

> Cedric, I completely disagree with just about everything you say here. I find debuggers are enormous time wasters, and often cause enormous ancillary problems - timeouts, missing multi-threading problems, etc. 
> 
> The big problems with debuggers are very well capured in "The Practice of Programming". Debug sessions are ephemeral, and they suck in mult-request/multi-thread environments. Debuggers can't generally be used to diagnose production problems in-flight. 

While this is true, I am having a hard time seeing how debuggers fall shorter than println debugging for this kind of task. 

As for the ephemeral aspect, yes, but fixing a bug is also by nature, ephemeral. A debugging session might end up in one or several fixes, which you might want to capture in a regression test once you are done. 

That's why I really don't understand people who say "don't use debuggers, use unit tests". If you only use one of these two tools, you are not doing your job correctly. They are complementary. 

In an ideal world, every developer uses test-driven development or at least writes regression or unit tests for any bug they fix and feature they add. In my world, you can never convince most developers to write a test to save their life, but at least, they understand the importance of finding bugs. 

> When you're running your code through a debugger, what you're seeing is the code right now in certain paths at it exists at that moment. 

True, and once again, how is that different from a line in a log file? 

> Think interfaces and factories with pluggable backends, and you can see that understand the underlying design in detail, in your head, is far more important than being able to stumble through a debug session - because that session is only a brief moment in time. Not that I advocate something so primitive as println's - use a logging package, for shrike's sake! 

No difference in my mind, you are just using a different API with more powerful output capabilities. Which is still missing the point. 

> As a final note - debug sessions do not help the poor slob who next has to debug the code - again because a debug session is ephemeral. Stop wasting your time in a debug, and craft logging information that will far outlast the current version (and possibly even outlast you!). 

I have certainly never said that debugging should replace logging, which is yet another orthogonal issue. 

In my opinion, a good developers uses: 

  * A debugger
  * Logging
  * Tests



As I a said above, if you are not using these three tools, your productivity is not as high as it could be.
