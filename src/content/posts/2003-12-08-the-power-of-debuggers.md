---
title: The Power of Debuggers
date: '2003-12-08T13:54:22'
slug: the-power-of-debuggers
categories:
- Java
comments:
- id: 687
  author: Cameron
  date: '2003-12-08T14:19:21'
  content: 'In C/C++, I went through EVERY line in a debugger.

    In Java, I have never used a debugger (on my own computer,) but yet I still agree with everything you''ve said ;-)

    Any good recommendations for a debugger?'
  replies: []
- id: 688
  author: Zohar Melamed
  date: '2003-12-08T14:35:38'
  content: 'In C/C++, I went through EVERY line in a debugger.

    In Java I write unit tests.

    I do use the debugger when needed, but testing is faster, more directed, and not transient.

    This is the gospel circa ''Code Complete'' and the good old C++ days.

    Let it go.'
  replies: []
- id: 689
  author: Matt Gerrans
  date: '2003-12-08T18:38:14'
  content: 'Good points.    Sounds like you know how to use a debugger!

    A couple typos, FYI:

    "hard to know where to being" -> should be "begin"

    "...easy to use, is simply disappears." -> "it simply disappears." (actually, Joshua''s original has the typo)'
  replies: []
- id: 690
  author: Julian
  date: '2003-12-08T23:04:29'
  content: 'In the debugger debate, people are elevating their personal preferences into moral imperatives.

    I rarely use debuggers, since staring at my Java usually suffices and I haven''t used the Eclipse debugger enough to learn it well. Still, if debuggers make other people more productive, they should use then.'
  replies: []
- id: 691
  author: Roger
  date: '2003-12-08T23:34:33'
  content: One more reason.  println often has side effect.  In some cases it may be as subtle as changing the timing of a race condition.  Or in others, such as XmlBeans, the toString operation called on the object being printed results in the resolution of lazily synchronized object models, and thus possibly hiding or eliminating the bug you are looking for.
  replies: []
- id: 692
  author: Klaus
  date: '2003-12-09T01:11:46'
  content: Totally agreed to you arguments against println. Whoever uses println on a broad basis makes something wrong. They contaminate code, they are error-prone, they are long winded. Not to talk about the hot swap feature of debuggers. What about stopping and restarting the server, the client, entering several data to access one special form containing a malicious behaviour? 15 minutes later and you get a second go with println. 20 seconds later and the thing is done with a hot swap debugger (like with JBuilder). What's the discussion about?
  replies: []
- id: 693
  author: Jonathan
  date: '2003-12-09T03:36:57'
  content: 'Some war stories:

    One company I worked for never used debuggers. Just plenty of printlns and its slightly better behaved log() statements. One time, we spent 2 days looking for a bug, that turned out to be the evaluation of one of the args to the println.

    O''Connor''s law of printouts: The larger the printout, the less it is read.

    Of course, some of the AOP ideas for logging can be applied quite nicely to the code, without infecting every method.'
  replies: []
- id: 694
  author: Mike Spille
  date: '2003-12-09T10:27:17'
  content: 'Cedric, I completely disagree with just about everything you say here.  I find debuggers are enormous time wasters, and often cause enormous ancillary problems - timeouts, missing multi-threading problems, etc.

    The big problems with debuggers are very well capured in "The Practice of Programming".  Debug sessions are ephemeral, and they suck in mult-request/multi-thread environments.  Debuggers can''t generally be used to diagnose production problems in-flight.

    Worst of all, what you say here "When you are running your code through a debugger, you don''t just think it''s working.  You know it." - you are in fact completely wrong.  When you''re running your code through a debugger, what you''re seeing is the code right now in certain paths at it exists at that moment.  Think interfaces and factories with pluggable backends, and you can see that understand the underlying design in detail, in your head, is far more important than being able to stumble through a debug session - because that session is only a brief moment in time.  Not that I advocate something so primitive as println''s - use a logging package, for shrike''s sake!  As a final note - debug sessions do not help the poor slob who next has to debug the code - again because a debug session is ephemeral.  Stop wasting your time in a debug, and craft logging information that will far outlast the current version (and possibly even outlast you!).'
  replies: []
- id: 695
  author: Mark Griffith
  date: '2003-12-09T11:20:57'
  content: One thing that I find irrating about debuggers is stepping through EVERY line and down into the bowels.  I know there is step-over and step-out, but it is often uncertain where to do either, and I find that printlns are helpful when carefully organized and thought through.
  replies: []
- id: 696
  author: mjasnowski
  date: '2003-12-09T12:54:05'
  content: Another downside to println's/LOGGING or such is that programmers often forget to take them out, resulting in code that is sometimes only useful for that one problem they were put in for, and result in extraneous info being written to the log, which customers always love to see.
  replies: []
- id: 697
  author: Iain
  date: '2003-12-09T21:02:08'
  content: 'mjasnowski: that''s why you either have some constant defined (-DDEBUGGING) or log with a special log level.'
  replies: []
- id: 698
  author: Thomas Quas
  date: '2003-12-09T23:27:46'
  content: 'It must have been a real bad day for you, Cedric ;-)

    I''m with Rob Marting here: bascially everything you can do with a debugger you can do with the appropriate set of unit tests. Only better because it''s reproducable.

    You mention that "[...]pretty much every time I write a reasonable chunk of code, I always run it first inside a debugger" and earlier "the problem is that by then, you might have missed your deadline[...]". Exactly! I write code for a target environment, not the debugger, so I don''t see the point in doing what you seem to do. Unit tests help me to reach deadlines often enough; no need for debuggers most of the time.

    That said, I use debuggers as a "a tool of last resort." If thinking does not help, I run the debugger. Needless to say that I add unit tests for this very scenario to make sure I don''t come across it later again.

    For the logging part: logging is a customer requirement, not only a means of debugging. At least in the enterprise arena. Ask your operations team to operate a system without log diagnostics; I bet they''ll love you.

    "A println is human, hence fragile." So is any line of code written by a programmer. The point is to develop some instinct on where the critical sections are. There you''ll place the log. Well, sometimes we hit, sometimes we miss, that''s a rule of the game...

    At least I can reproduce failure conditions in a production system. And for those who still believen in the log performance myth: cut the crap, compare it with database access times and relax ;-)

    -tom'
  replies: []
- id: 699
  author: Mike Spille
  date: '2003-12-10T08:40:50'
  content: 'To piggyback on what Tom said: an important quality of logging statements, monitoring systems, and unit tests is that they are the result of accumulated knowledge.  People who advocate debugging sessions most often seem to be discussing new development or unfamiliar territory.  There''s some new thing they''re working on they don''t fully understand yet; it''s new code and they don''t know the best place to put log statements; it''s someone else''s code and they haven''t got a clue what''s going on.  To me, talking about these scenarios is optimizing for corner cases.  In my work at least, most of my time is not spent on totally new or unknown things.  Mostly, I''m building upon, fixing, or enhancing existing code.  I''m working with classes that I already know pretty well.  In that domain, over time I will build up log statements, monitoring tools, and tests which reflect my extended experience with that code base.  The combination of "instrumentation" in the code points out
    areas of concern to me and others.  "These are the pieces that often cause problems, that operations needs to look at, that are complex and somewhat fragile".  Code instrumentation is a reflection of experience.  In contrast, when you talk about a debugger, debugging sessions are typically one developer bopping around the code.  When they close out the debugger, two things happen: first, they lose that debug session.  It''s gone.  Second, all of the knowledge they gain from the session is stuck in their head only.  It benefits no one else, and often doesn''t even benefit the developer in the long term - they come back to the same code 3 months later, and completely forget the complex debugging session they set up to track down a similar problem and waste an enormous amount of time recreating the same conditions, trace points, and breakpoints.  In my opinion, constant use of debuggers goes hand-in-hand with over-use of XP methodologies - no one''s an expert, there''s no long-lasting design,
    experience is dissipated.  Everybody''s in their own little debug sessions, and the code base never really gets better over time.'
  replies: []
- id: 700
  author: mjasnowski
  date: '2003-12-16T12:22:22'
  content: '>mjasnowski: that''s why you either have some >constant defined (-DDEBUGGING) or log with a >special log level.

    Yeah, you would think so, but many don''t, then you sometimes end up with a mess of either println()''s conditionalized on some non-configuratble constant, along with a configuratble logging infrastructure'
  replies: []
- id: 701
  author: Dan Weinreb
  date: '2003-12-17T20:11:51'
  content: 'On a project I worked on a few years ago, we were using Java but did not have a usable debugger (for various reasons).  A few of us decided that software would inevitably break in the field, where it was very hard for us to get in with a debugger, so we came up with the principle that logging (when turned on "full blast") should provide enough information to debug any problem.  We just added lots and lots of logging statements, with a simple but careful discipline about levels and categories. Sadly, I left before the product was widely deployed so I didn''t get a chance to test the theory, but I still think it makes sense.

    I do like debuggers -- I even wrote one that I and others used heavily for years -- especially for rapid development.  But for field-debuggability, a situation which unfortunately does really arise, extensive logging is great.  Of course you have to be careful that all logging is configured properly.  We never took out logging statements; we just made sure that they were under the appropriate conditional.  Once you get into the habit, it''s easy to follow a set of well-chosen conventions; it took us a little while to work out the conventions, but not long.

    I don''t see logging or debuggers as alternatives to unit tests.  We had extensive unit tests; I have truly found that the time invested in writing and debugging unit tests is more than made up for in the long run and even the medium run.'
  replies: []
- id: 702
  author: Chad Woolley
  date: '2004-01-21T15:24:14'
  content: Even when I do strict test-first development, with constant 100% test coverage, I still find debuggers useful.  With this approach, I still encounter situations where things aren't working, and I don't know why.  In these cases, I find it's easier to fire up the debugger and see what is going on than scratching my head and looking at the code trying to figure out what test to write.  In these cases, I usually know in pretty good detail what part of the code I'm interested in (my currently failing test!), so I don't waste a lot of time stepping through unrelated code.  I may or may not find it useful to write additional tests based on the info I find while debugging.  I could probably do something different to avoid these situations, but I don't know what it is yet.  :)
  replies: []
- id: 703
  author: block popups
  date: '2004-07-16T21:08:27'
  content: Interesting information on this blog, thanks
  replies: []
- id: 704
  author: block popups
  date: '2004-08-31T01:33:46'
  content: I'm new to this site, just browsing around
  replies: []
---

[Rob Martin doesn't like debuggers](http://www.artima.com/forums/flat.jsp?forum=106&thread=23476)...

> A good debugger is a very capable tool. With it, an experienced developer can step through very complex code, look at all the variables, data structures, and stack frames; even modify the code and continue. And yet, for all their power, debuggers have done more to damage software development than help it. 

Rob goes on: 

> ...a debugger is a tool of last resort. Once you have exhausted every other avenue of diagnosis, and have given very careful thought to just rewriting the offending code, *then* you may need a debugger. 

The problem is that by then, you might have missed your deadline and wasted your precious time by adding and removing manually all sorts of logging code, not mentioning the headache by staring at the screen for the outputs.

[Andreas chimes in](http://weblogs.java.net/pub/wlg/743) with a mind-boggling analogy:

> A debugger is like a telescope looking at the night sky and you have to find the North Star. 

Talk about a leaky abstraction (how about a telescope where you can type in the name of the star you want to watch and which will possibly rotate the Earth for you so you can observe it.  Now that's a more accurate analogy).

People who campaign against debuggers typically think that debuggers are only good to find bugs.  That's an unfortunately common misconception.

A debugger is also very powerful at making sure a bug doesn't happen in the first place.  I don't know about you, but pretty much every time I write a reasonable chunk of code, I always run it first inside a debugger.  No stupid println comment, just the hard facts and the naked truth about all the variables I created.

Now let's turn to the alternative chosen by Rob and Andreas, which is so deeply flawed that it's hard to know where to being:  println debugging.  Here are a few facts about this practice:

  * **A println is tedious and error prone.**   You need to know exactly where to insert your println and make sure you remove it before you ship.  No matter how good you are, I'll bet my little kitten Trogdor that shipping with a debug statement has happened to you at least once.  
 
  * **A println is human, hence fragile.**   This debugging method is only as good as your eyes, or your brain.  No matter how good you are at reading scrolling consoles or log files, your eyes will get tired.  Really quickly.  And at some point, I guarantee that you will miss something essential.  Which you will forget to remove from your production code (have I already mentioned that?).  
 
  * **A println cannot be automatically tested.**   Whenever you feel the need for println debugging, I am betting that you should write a regression test to make sure the bug is fixed.  println's don't really lend themselves to this kind of exercise and you will probably find yourself changing your println statements to something more testable, like values in a HashMap.  
 
  * **A println carries your bias.**   This is the worst thing about println's:  they are typically only found in places where you _think_ there might be a bug.  If you created three variables in a method, it's pretty common to only print one or two of them, because you don't really need to check that third variable, you just know it contains the right value.  Right?



A debugger shows no mercy.  It will expose every single variable you created, including arrays, hashmaps or Properties.  When you are running your code through a debugger, you don't just **think** it's working.  You **know** it.

Don't underestimate the power of debuggers, they play a huge part in the software quality cycle.
