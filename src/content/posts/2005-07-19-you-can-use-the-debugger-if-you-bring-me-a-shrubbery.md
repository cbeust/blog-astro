---
title: You can use the debugger if you bring me a shrubbery
date: '2005-07-19T11:54:54'
slug: you-can-use-the-debugger-if-you-bring-me-a-shrubbery
categories:
- General
comments:
- id: 3863
  author: Eric M. Burke
  date: '2005-07-21T12:39:50'
  content: 'Just by coincidence, I happened to post a discussion forum (inside our company) where I described how I used a debugger along with a JUnit test to find a problem. In a nutshell, we were seeing a very rare bug in a GUI. For months, I was unable to duplicate it. Finally, yesterday, I figured out a specific sequence of steps to duplicate the problem in the GUI.

    At this point, I could observe the problem at the highest level of the app, in the GUI. But I had no clue where the problem originated. This is where I stepped through code in the debugger to locate the problem. Sure enough, I found a bug deep within our frameworks.

    From there, I wrote a JUnit test (at this very low level) to expose the bug. After observing the test failure, I fixed the bug, re-tested the GUI scenario (by clicking on things), and was done.

    Dogmatic rules like the one you describe are great for textbook examples, but in the so-called real world we sometimes encounter REALLY hard problems. I''ll keep my debugger, thank you very much. And I''ll continue writing unit tests.'
  replies: []
- id: 3864
  author: Marc Logemann
  date: '2005-07-21T13:07:06'
  content: 'I can agree with Cedric on this one. Fist of all, using a debugger has nothing to do with inability to read code or solve problems by reading code. By forbidding using a debugger, people will start system.outing at thousands of spots in your application. Most likely, some of them will preserve until deployment.

    Another important thing about a debugger is that you can change values at runtime (it seems some people are not aware of that :)) and you can also prevent the JVM halt and use it as a logger tool (at least with IDEA this is a snap). So you can do so many things with, that you really dont want to miss it.

    Saying dont use a debugger is the same as saying "dont use an IDE" or "dont use the mouse". If you have trainees and you think that such idioms will make them better developers, i would certainly disagree on this statement. You make them better developers when you share your knowledge with them, thats the only way to go.'
  replies: []
- id: 3865
  author: Jonathan Ellis
  date: '2005-07-21T13:59:42'
  content: 'Sure, "never use a debugger" is a stupid policy.

    But that''s not what was proposed.

    "Ask a senior guy before using a debugger" really seems quite reasonable.  Many junior people spend a huge amount of time trying to solve problems with a debugger that could be solved much faster in other ways.  Yes, you can figure that out "the hard way" by wasting the time, BUT you could also accelerate the learning process by going to a more experienced mentor and asking how he would approach the problem.'
  replies: []
- id: 3866
  author: Victor
  date: '2005-07-21T14:01:38'
  content: Interestingly, I found a good use of Eclipse debugger lately as a run time inspector. I worked on a project lately that I need to use JAXB generated object from an XML schema. Gosh to get just one piece of info, there are so many classes, methods that I need to call, So I had a thought, then I use the debugger to look at the objects at runtime, then I figured out which method to call. It is totally reverse engineering but I have no other choices.
  replies: []
- id: 3867
  author: Robert Watkins
  date: '2005-07-21T14:02:24'
  content: '*sigh* The position above is not saying "Don''t use the debugger". It''s saying that you have to ask first.

    It''s a training technique. They''re trying to encourage developers to use TDD and/or write tests to flesh out problems rather than using the debugger. That''s why the restriction is only for juniour programmers. I''d be reasonably sure that, in the situation described, the junior programmers were spending time in the debugger, finding bugs and fixing them, but not exposing the bug with a failing test.

    How do you justify it? "Um, Tim... I''m having problems tracking down this bug. Can you help me?" sounds like a good start. Then Senior Programmer Tim would come over and assist the junior programmer. If Tim was having problems tracking it down, then I''d imagine Tim would fire up the debugger.'
  replies: []
- id: 3868
  author: eu
  date: '2005-07-21T17:58:57'
  content: 'Those guys should see that flash demo of the test-driven development session with Eclipse, started from a test case failed on unimplemented method and concinued with a debug session where implementation were being typed in while being in a middle of the debugging and hot-replaced without restarting the test...

    The same work quite well with servlets or even EJB''s when you can fix the code without restarting or redeploying application.'
  replies: []
- id: 3869
  author: Mohan Radhakrishnan
  date: '2005-07-21T20:58:27'
  content: 'It think treating developers without respect is one of the problems that I face everyday. This problem seemed to be the one that people-oriented practices were supposed to solve.

    Extreme measures like these don''t help.'
  replies: []
- id: 3870
  author: Brian Slesinsky
  date: '2005-07-21T21:12:40'
  content: 'A more respectful and egalitarian policy would be:  "You should pair-program on any problem complicated enough to require a debugger."  It''s up to us as senior programmers to set good examples for everyone else.'
  replies: []
- id: 3871
  author: Dejan
  date: '2005-07-22T02:05:32'
  content: Junior people tend to spend a huge amount of time on almost every aspect of the development process. They rewrite methods that are already written, they fix bugs that are not there and generally try to fit a sqare peg into a round hole. Everyone knows it and, basically, expects it with a knowing smile, but when it comes to debuggers it's a big no-no... I mean what's so frightening about them? If your juniors have to ask permission for every activity that's a potential time-sink, they are going to end up asking permision for everything including toilet breaks.
  replies: []
- id: 3872
  author: Julian
  date: '2005-07-22T06:14:35'
  content: '"Ask a senior guy before using a debugger" conflicts with the far more important directive "Don''t disrupt a senior guy unless you have a good reason."

    I''m happy to help coworkers who would like me to review a design, answer a technical question, or assist in debugging. However, a company policy forcing someone to ask me something is ridiculous.'
  replies: []
- id: 3873
  author: Brian Slesinsky
  date: '2005-07-22T09:03:07'
  content: 'Those last two posts sound like they come from people at disfunctional workplaces.  A senior developer''s primary job is (or should be) to improve the entire team''s productivity.  When someone asks for help, this is a teachable moment that should be taken advantage of.   If you don''t understand this, you might have some leet coding skillz but you''re not really a senior developer.

    Newbies especially should never be coding alone.  The way to quickly make them productive members of the team rather than a drain on it is to pair-program with them.'
  replies: []
- id: 3874
  author: Sony Mathew
  date: '2005-07-25T11:04:48'
  content: Unit tests tell u that bugs exist, Debuggers help you find the exact location of the bug.  They are not mutually exclusive and never will be.  The senior folk should instead track that Unit tests have been written for all bugs reported.
  replies: []
---

The following quote recently came up on the TDD mailing-list:

> I have worked in places where we would tell junior developers that they were not allowed to use the debugger without asking permission first. Only if they could justify the debugger's use were they allowed to use it.

This is a fairly radical position, so I can't possibly agree with it :-)

There are several disturbing points about this quote:

  * **How do you justify the use of a debugger?**   It's a red herring to give some grounds to this arbitrary decision but in short, I'm pretty sure it's an impossible task.  And if you are talking to an extreme TDD advocate, you can be sure they will always find a good reason to convince you that writing tests is the only way to locate a problem.  
 
  * **The only way to learn when _not_ to use a debugger is to use a debugger a lot**.  Practice will teach you the strengths and weaknesses of a debugger, what its limitations are, what you can achieve with it and what should better be approached differently.  As you use it, you will accumulate knowledge on which categories of bugs a debugger is good at solving and when you tend to come back empty-handed.  In short, you are building up this intangible set of diffuse knowledge referred to as "experience".  
 
  * **It's better to teach someone how to use a tool properly rather than forbidding them from using it completely.**  
 
  * By the time the problem shows up, you probably don't have tests to catch it yet, so whatever you will end up doing is not test-driven development anyway.



My dirty little secret is that I love both test-driven development and debuggers.  I use both all the time without any particular pattern.  Sometimes I spend most of my time writing tests, other times I'm knee-deep in Eclipse's debugger, juggling with conditional breakpoints, stack frames and multiple expressions that I keep reevaluating.

Is it the most productive use of my time?  I don't know, I'm still working it out and it's impossible to answer such a question anyway.  But by using all the tools I have at my disposal, I have definitely increased my knowledge in the general area of "finding and solving problems".  And I don't think anybody should be denied that right.

Again, what concerns me in the quote above is the dogmatic attitude and the total lack of regards for the skills of the person making the request.  They might be less experienced than you, but it doesn't mean they are stupid and that they should be treated as children.  And who knows, maybe one day they will be teaching you something about debuggers...
