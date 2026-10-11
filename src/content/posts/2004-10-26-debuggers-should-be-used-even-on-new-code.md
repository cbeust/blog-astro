---
title: Debuggers should be used even on new code
date: '2004-10-26T10:46:56'
slug: debuggers-should-be-used-even-on-new-code
categories:
- Java
comments:
- id: 2650
  author: Heiko W. Rupp
  date: '2004-10-26T12:35:00'
  content: 'I think it is overkill to step through all new code. But if the unit tests signal that something is going wrong, then I am the first to step through the code.

    Wrt: to wrongs might give a false: if your tests are correctly done, then this should not happen, as you test every feature on its own and only then in combination.'
  replies: []
- id: 2651
  author: Tinou Bao
  date: '2004-10-26T12:47:56'
  content: 'I thought you didn''t want to revive the debugger debate ;-)

    I don''t disagree that debuggers aren''t a great tool to have, but it''s one of those tools that should be used as a "last" resort, because too often it''s a sign that the code is too complicated and you don''t understand what''s really going on.

    It follows from my principle that you should be almost as productive with the "fancy" tools (IDEs, debuggers) as you are without them.

    That said, I think they''re good and often it just comes down to style/preference.'
  replies: []
- id: 2652
  author: Rafael Alvarez
  date: '2004-10-26T13:15:38'
  content: 'hmm. I agree and disagree.

    Unit test should fail if something goes wrong, so as Heiko said there can''t be two errors cancelling each other in a good test harness. BUT, if the test harness is not good enough, the debugger is the only option (and, after the bug is found the proper test should be created).

    OTOH, if a unit test fails and the bug is not obvious, well, at least you have a good "shortcut" as a starting point for the debugger.

    So, IMHO, debuggers and unit test complemets each others.'
  replies: []
- id: 2653
  author: Noah Campbell
  date: '2004-10-26T13:32:43'
  content: 'Wouldn''t debugging be similar to inspecting the output stream minus all the System.out.println statements?

    I personally think that unit testing has its place and a debugger usually goes hand in hand, i.e. it gives you a context to debug in.  Nightly integration builds have more than once saved me from embarrassment before deploying to production.  Regression testing is also very important.  Regarding the statement about "fancy tools."  To me, it''d be like taking away a carpenter''s hammer and expecting him to pound nails with his fist or a rock.  I haven'
  replies: []
- id: 2654
  author: Paul Mclachlan
  date: '2004-10-26T14:17:37'
  content: 'Don''t single-step - that''s slow!

    Instead, run a coverage tool to make sure the right code paths are being executed the right number of times.

    It''s much faster than single-stepping.

    And yes, coverage tools without execution counts are less helpful.'
  replies: []
- id: 2655
  author: Nick Minutello
  date: '2004-10-26T16:26:07'
  content: 'My 2p :-)

    Debugging should be used to... debug? When you dont know whats going on (e.g why is that test failing? Or, Why are my tests passing, but I still have this bug - how can that be?!?)

    The trouble with debugging as a form of code verification, is that you cannot easily Re-verify your code (say, after a change). Its just too time consuming.

    Ultimately, if your unit tests cant easily verify that a piece of code works, then its likely that your code/design isnt test-friendly (often too complex or not well-designed http://jroller.com/page/rickard/20040814)

    Now, I see extensive java/C# debugging code as a smell... (the no-unit-tests smell) :-)

    -Nick'
  replies: []
- id: 2656
  author: Dave Gynn
  date: '2004-10-26T20:28:06'
  content: 'I completely agree about using a debugger to observe your code in action.  Seeing the code execute line-by-line is the only way to make sure it is performing the way you intended.  "Debugger" is probably the wrong name for the tool that allows you to do this.

    You still need unit tests to tell you that the results were correct, and stay correct over time and through refactorings.  But tests can''t tell you that the code performed as you expected it to.  Unit tests won''t alert you that your code is inefficient.'
  replies: []
- id: 2657
  author: federico
  date: '2004-10-26T23:16:27'
  content: 'Oh well,

    the debugger debate !

    A developer of your caliber can use each tools he uses as he knows his own tools.

    For me it is quite siginificant that the most wanted C# feature in VS2005 was Edit&Continue while debugging: for me it is a clear sign of the culture of developers using microsoft products, a kind of culture I cannot understand.

    Lack of code coverage tools, code navigation, refactoring, even source code control (why for hell VS does not have something like Visual Age/IntelliJ/eclipse local version history ?).

    Thay are all sign of the same programming culture.

    An average developer cannot even ask himself questions like these: he will be always under other kind of pressures.'
  replies: []
- id: 2658
  author: Jean-Baptiste Nizet
  date: '2004-10-27T01:16:33'
  content: Stepping through the code is useful to detect if some cache you've implemented works as expected, for example. Sometimes you miss something obvious and everything works as expected, except that the cache isn't used at all. Stepping through the code can help determining if the cache is useful, and how to avoid cache misses.
  replies: []
- id: 2659
  author: Radu Popescu
  date: '2004-10-27T11:01:12'
  content: 'Stepping into code and checking that the "variables are correct" works for simple or complex processing code, such as algorithms.

    It does not work in testing even moderately complex interactions though. Even more so, I''ve found it can be quite distracting to use the debugger instead of just think about what could be wrong.

    You''re not going to catch thread problems, OpenGL state problems, web-app misbehaviour, asynchronous IO interaction problems by using the debugger.

    I''ve been writing software for 10 years now, and while in the first few years I''ve extensively used debugging, I''ve come to find myself using those less and less as time passes, while the correctness and quality of my code increases.

    I''m obviously _not_ saying "used debugger -> write bad code", but that the need, at least in my case, to use debuggers has diminished significantly.

    I''ve also seen other people spend a huge percent of their development time inside the debugger - which I personally judge as lack of experience or flair. What''s even worse is cases when edit and continue looses grip over the actual code state and yields to some of the weirdest fake bugs I''ve ever seen.

    However Cedric Beust is not a lamer who''s been coding since this morning, au contraire(http://koala.ilog.fr/beust.html), and yet he still likes debuggers ! :) That''s something to keep in mind.

    Peace

    P.S.

    Cedric, the link to libICE++ is broken !'
  replies: []
- id: 2660
  author: '7'
  date: '2006-02-19T16:33:11'
  content: '7'
  replies: []
---

In [ this TheServerSide thread](http://theserverside.com/news/thread.tss?thread_id=29589#143829), Amin Mansuri has this to say about debuggers:

> I dunno.. maybe I'm a bit old school, but I'm influenced by Steve McConnell author of Writing Solid Code and Debugging the Software Development process who suggests that you should step through all your code in the debugger before checking it in. 

Yes!

I actually got this habit from reading "Writing Solid Code" myself.  Single-stepping through **all** your new code might be a bit overkill, though, but I am a firm believer in the idea that debuggers should be used on new code, and I find myself doing that very often as the result of reading this book more than ten years ago.

Frankly, I don't understand the argument "unit tests are good enough, I don't need a debugger" put forth by so many anti-debugger people.

First of all, even unit tests break and have bugs, so you have to debug at some point.

But more importantly, unit tests only give you a superficial view of the quality of your code.  Okay, the bar is green, but are you really sure your code is behaving the way you designed it, and not by accident?  Or that two bugs are not canceling each other out, yielding a good result by accident?

What better way is there to really make sure of this than by putting a breakpoint in your fresh new code, single-stepping through it and verifying that all the variables are what you expect?
