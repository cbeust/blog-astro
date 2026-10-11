---
title: More testing doesn't mean less debugging
date: '2007-02-07T10:15:10'
slug: more-testing-doesnt-mean-less-debugging
categories:
- Java
comments:
- id: 6510
  author: ErikFK
  date: '2007-02-07T11:13:45'
  content: Hi C
  replies: []
- id: 6511
  author: Tiago Silveira
  date: '2007-02-07T13:44:08'
  content: 'I don''t really know what to say about that. I agree that the myth "testing means no more debugging" needs to die. But from where I see it, it''s already dead.

    I like to see testing as "less" debugging. Debugging things you don''t need to debug is pointless.

    Also, I share with you the feeling that I''ve been using the debugger more often, probably because debugging a very small program such as a test is far easier that a whole application.'
  replies: []
- id: 6512
  author: Tim Vernum
  date: '2007-02-07T16:14:22'
  content: '> Also, I share with you the feeling that I''ve been

    > using the debugger more often, probably because

    > debugging a very small program such as a test is

    > far easier that a whole application.

    That''s an interesting observation.

    I hadn''t really thought about it that way, but I think you''re right.

    If my app is misbehaving, but my tests are passing (or I don''tr have any tests), then it''s quite hard to sort out. I sit with the code, and I walk through it, and look at the logs, and try and see if I can work out where the problem might be.

    But if my test is failing, I have a quick look at the code to get my head around the problem and see whether I can understand why that problem might be there. After that I fire up the debugger. The test is (usually) a small enough problem space that I can use a debugger efficiently.'
  replies: []
- id: 6513
  author: Jesse Kuhnert
  date: '2007-02-07T19:52:34'
  content: 'That mentality is even more dangerous when it gets into toolkit / framework writers hands.

    Far too often these "book"/academic programmers focus only on the ideal and leave you twisting in the wind when you are faced with real problems that you they hadn''t anticipated.

    I like to think that those edge cases are where we separate the wannabes from the programmers.'
  replies: []
- id: 6514
  author: Tarik
  date: '2007-02-08T05:30:24'
  content: 'I would put it this way:

    The more assertions you have in your test, the less time you will spend debugging.

    Assertions tell you what you otherwise can only find through debugging or tracing, it checks on the state of variables and such. The other thing test will do for you is decrease your turnaround time. You don''t have to deploy your program and use it to reproduce a bug, instead you can isolate the suspicious classes (gleamed from log statements or just experience).

    If you want prove that assertions and debugging often fulfill the same functional role, try the following: If you find a bug in your application and you have a test suite, try isolating it only by adding assertions. Unless you have badly designed code (from a testing standpoint, i.e. it is not modular enough) you will be able to quickly isolate the problem. And although debugging might be quicker, assertions have a reproducible outcome.'
  replies: []
- id: 6515
  author: Adrian Howard
  date: '2007-02-08T06:03:06'
  content: 'I don''t think anybody says testing means no debugging. Anybody who gets an unexpectedly failing test or legacy code has to spend time debugging.

    However, I certainly spend a _lot_ less time debugging than I used to before I started TDD.

    The use of a debugger is an entirely different question. I certainly occasionally use it for exploratory testing, looking at other peoples code. However my use of a debugger for figuring out why the code I''ve just written has dropped to pretty close to zero.'
  replies: []
- id: 6516
  author: Shane Courtrille
  date: '2007-02-08T06:34:24'
  content: My comment wasn't allowed for questionable content.  Then my link to my comment posted on my own blog wasn't allowed for questionable content.  Sufficive to say I agree with Erik and made a few of my own point about simplicity of tests.
  replies: []
- id: 6517
  author: Shane Courtrille
  date: '2007-02-08T06:35:29'
  content: 'Figured out the problem.  If you do a comment preview you can enter a URL to link to your name.  Turns out that URL can''t be a blogspot URL :)  Here is my response:

    I can''t come anywhere near Erik in diplomacy and politeness so I''m just going to say that I agree completely with him. If you feel most comfortable running your code every time in a debugger first, then by all means do so. But there is no need to get upset because those around you are feeling more comfortable using their debuggers less.

    One thing I will point out is that personally my tests are so specific and simple that it usually takes about 2 seconds of looking at one to verify it is what I want. Of course there are points where I still end up using the debugger. I do find that a large percentage of that time is with code that hasn''t (inherited code) been switched (yet) to testable code. While I of course have to start up the debugger in my tests on the rare occasion it is just that, rare.'
  replies: []
- id: 6518
  author: Erik Engbrecht
  date: '2007-02-09T06:42:37'
  content: 'Cedric,

    I absolutely agree that testing won''t reduce time in the debugger.  If a developer in spending less time in the debugger because of his tests, I would argue that he probably doesn''t have very good tests.  Afterall, when a test fails, don''t you debug it?  Isn''t the point of having nice, reasonably independent tests so that you can debug w/o 10,000 different variables confusing the situation?  Shouldn''t tests cover edge conditions that sometimes can be incorrectly handled for years in production w/o raising much of an issue?

    As for tracing code prior to knowing there''s a problem...I admire your discipline.  I prefer liberal use of assert statements.  But I have to admit that often times when I find a problem, I often step back and start tracing from the beginning (and adding more asserts) to make sure everything is as I think it is.

    -Erik (but not the same as the first poster)'
  replies: []
- id: 6519
  author: Chui
  date: '2007-02-12T02:34:21'
  content: Steve McDonnell has advocated stepping through every new line of code written. It's an excellent way to learning about bugs.
  replies: []
- id: 6520
  author: Chui
  date: '2007-02-12T02:34:52'
  content: Steve McConnell has advocated stepping through every new line of code written. It's an excellent way to learning about bugs.
  replies: []
- id: 6521
  author: Anonymous Coward
  date: '2007-02-13T13:33:30'
  content: 'Hello all,

    I can''t help but think about this quote:

    ''Writing multi threaded applications is more fun than writing single threaded applications.''

    ''Debugging multi threaded applications is less fun than debugging single threaded applications.''

    :)'
  replies: []
- id: 6522
  author: Jon Skeet
  date: '2007-02-16T07:08:37'
  content: 'Erik wrote:

    "Afterall, when a test fails, don''t you debug it?"

    No, typically I tend to look at the code first, and try to work out what''s wrong - often I can do that based on the way that the test failed without going into the debugger. If I can''t, then sometimes/often that means the code I''m testing isn''t simple enough to start with, and after sorting out what''s wrong in the debugger, I''ll refactor it to make it easier to understand anyway.

    Suffice to say I''m in the "less time in the debugger" camp.'
  replies: []
- id: 6523
  author: Jeremy Weiskotten
  date: '2007-03-19T17:14:32'
  content: 'In response to Erik''s contention that less debugging implies poor tests -- that doesn''t make any sense to me. One benefit of writing small, focused unit tests in isolation (among many benefits) is that when a test fails it''s usually fairly obvious why it failed, especially if you run the tests often while adding and changing code. I''ve heard this called "localization of failure". It''s not uncommon to be able to fix a bug caught by a focused test without using the debugger.

    On the subject in general, I recently started working with Ruby on Rails. There aren''t a lot of great tools for Ruby yet, including debuggers. Without even really having a debugger, I''ve found that I rely a lot more on unit, functional, and integration tests (to use the Rails terms). Sometimes I do miss having a debugger, but I think that''s happening less and less as I continue to grok the new language and new framework. And an increased reliance on automated testing is good for the project in the long run.

    That''s not to say I wouldn''t welcome a world-class Ruby debugger! They''re a valuable tool and they do complement unit testing, but from personal experience I think there is validity to the idea that unit tests can ween you off your debugger -- or even help you quit cold turkey if you have to.'
  replies: []
- id: 6524
  author: Joshua Lewis
  date: '2009-12-03T06:35:07'
  content: My problem with your statement that you verify that your code works properly by pre-emptive debugging is that this is not automated, which means that you cannot prove this certainty in the future without debugging all of your code every time you make a change, to prove that you have no unintended consequences from recent code changes. Who had time to debug every line of code for every change?
  replies: []
---

This myth that "testing means no more debugging" needs to die.

Seriously.

[Anyone](http://www.artima.com/forums/flat.jsp?forum=106&thread=194506) [ making this claim](http://weblogs.java.net/blog/sspielman/archive/2003/10/dear_johneri_me.html#comments) is doing a lot of damage to the software engineering world. 

Just as we are finally getting good IDE's, good debuggers and, more importantly, an increasingly widespread conviction in the developer community that these tools are part of a healthy software engineering process, a new vanguard of smug programmers come out of the woodwork with their superior attitude and resurrect the old mantra that only bad developers use debuggers.

Enough already.

Yes, testing is important, and promoting testing is laudable, but not at the expense of equally useful tools and practices that it took us decades to hone and perfect.

Ever since I've become serious at testing, my usage of debuggers has increased, if only because I write more code now than before (I didn't used to write any tests), and this extra code needs to be debugged, like any other.  Or do these people assume that just because the code that you write is called "tests", it's suddenly become bug-free?

But here is my real secret:  most of the time, I don't use a debugger to debug.  I use it to verify that my code works as I think it does.

That's right:  I launch my debugger even before a bug has manifested itself.  Even before my code is working at all!

I launch it to inspect all the variables, verify my assumptions, stare at my code for what it really is, not for what my biased view tells me it is.  I also use the debugger to modify variables and try to trip my code, cause errors that could or shouldn't happen and make sure it reacts accordingly.  Of course, eventually, I capture all of this in tests, but these approaches are complementary.

Don't throw away your debugger, or the quality of your code will suffer.
