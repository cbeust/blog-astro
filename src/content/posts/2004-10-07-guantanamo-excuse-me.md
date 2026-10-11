---
title: Guantanamo?  Excuse me?!?
date: '2004-10-07T19:22:35'
slug: guantanamo-excuse-me
categories:
- Java
comments:
- id: 2569
  author: ''
  date: '2004-10-07T10:48:47'
  content: well ask TDD maniacs ... They would happily trade an arm for it ;-)
  replies: []
- id: 2570
  author: the_mindstorm
  date: '2004-10-07T11:12:01'
  content: 'Paraphrasing (if allowed):

    Guantanamo? A tool to forget.

    ./the_mindstorm'
  replies: []
- id: 2571
  author: Stephen Kestle
  date: '2004-10-07T12:10:26'
  content: 'I thought it was funny at first, but I must admit that I would consider using it on some projects.  If you don''t change any code before writing a test, then you should be fine.

    It would be hazardous however for people who do mock-based testing (as getters and setter (say) wouldn''t necessarily be called), and other "non-testable" components (guis etc).

    However, I have been thinking about splitting projects into different jars, and there are definitely some component packages that you do want to have 100% coverage.

    Anyhow - what''s the problem?  Why would you not want to test something?  Is your product static?

    And just so you know - I''m not a "hard-core XP" type.  I''m just pragmatic.  If you code doesn''t have tests, then it doesn''t work by design, it works by coincidence.'
  replies: []
- id: 2572
  author: Hani Suleiman
  date: '2004-10-07T14:04:42'
  content: 'All those tools are jokes, they make for nice toys, and I think Aslak is just about sane enough to see that himself.

    What''s disturbing though is people who think this isn''t just a joke, and use this stuff for real. Stephen''s comment above is typical of how brain damaged people can be about this, with nonsense like ''I''m pragmatic, but if your code works without tests, you''re pure evil! you''re clueless! you''re lucky!''

    Stephen, this might be stunning to you, but there are craploads of software applications, products, and systems out there that don''t have junit type testing.

    What''s odd is that everyone seems to have forgotten last week''s idea of the week, which is that aiming for 100% coverage is wasteful and pointless. Thanks to their delightful 3 second memory, they now nod along to this obscene tool just as they did to the ''don''t aim for 100% coverage'' preaching they heard earlier.

    It makes me so angry I might have to blog about the damn thing!'
  replies: []
- id: 2573
  author: Zohar
  date: '2004-10-07T17:07:57'
  content: The name is indeed a regretable choice and in very poor taste.
  replies: []
- id: 2574
  author: Bruce
  date: '2004-10-07T19:43:21'
  content: 'Has anyone done this,

    run Guantanamo on itself,

    recompile it,

    does it still work?'
  replies: []
- id: 2575
  author: Perryn Fowler
  date: '2004-10-07T21:02:58'
  content: 'Bruce

    Guantanamo does indeed ''eat its own dogfood''

    http://docs.codehaus.org/display/ASH/Guantanamo

    Having said that I think Guantanamo is indeed not

    seriously intended to be used to blindly delete code*. I routinely decide not to have tests for things ( getters and setters for eg). However it

    could seriously be used as part an exercise to help you identify things to think about in your code.

    It could also be argued that *all* tools should be used this way.

    Pez

    *(AFAIK actually it doesnt really do that - it creates a copy and deletes the code from that)'
  replies: []
- id: 2576
  author: Julias Shaw
  date: '2004-10-07T21:39:20'
  content: 'For the record, I like Guantanamo.  It isn''t appropriate for everything but I plan on using it on a couple of critical projects.

    You can tell Clover to ignore a section of code using:

    ///CLOVER:OFF

    ...

    ///CLOVER:ON'
  replies: []
- id: 2577
  author: Silent Bob
  date: '2004-10-08T05:53:02'
  content: 'So if "all those tools are jokes", why doesn''t Aslak stop wasting time writing them and get on with doing his actually job.

    Oh yeah, I forgot - he works for ThoughtWorks.'
  replies: []
- id: 2578
  author: Sam Newman
  date: '2004-10-08T06:50:08'
  content: 'Oh, Bob, that''s harsh!

    Yeah, I''m sure that''s just how ThoughtWorks runs. I''m sure that unlike every other company in the world, they don''t need to make a profit, so things like "work" aren''t actually needed...

    Sorry, I lost my train of thought - what was the point of your comment again?'
  replies: []
- id: 2579
  author: ''
  date: '2004-10-13T16:55:15'
  content: 'Oh Hani - my first time at feeling your brunt.  I especially like that you think I''m brain-dead.  Guess what?  I disagree.

    And I AM pragmatic.  My post was about it''s usefulness (as opposed to being completely useless, as maintained by everybody else at that point).  I did not say that ALL software is unit tested, and that ALL software should be unit tested!

    I said that there are SOME projects that I would continue using this for - ie - the domain layer for a new application, perhaps?

    I did not say that those who did not unit test are evil.  You blew it way out of proportion - I merely said that their applications work by coincidence.  What happens when you''ve left your company and mr junior programmer comes along and makes a lovely change.  Can you say that your programme retains all of the previous functionality? Or not? No you cannot.  Can you even answer that question on a day to day basis?  I doubt it.  That was the point.

    Without tests, there is little that you can do that you can guarantee that nothing has changed.

    Please read before you type next time.

    PS I suppose I could go into the meaning of coincidence a little - " an event that might have been arranged although it was really accidental", "the quality of occupying the same position or area in space", "the temporal property of two things happening at the same time" (all at www.cogsci.princeton.edu/cgi-bin/webwn).  The space time principle of a "meeting of program and functionality".  Tests ensure that the program stays at a specified functional point, rather than just coinciding with it.'
  replies: []
- id: 2580
  author: Stephen Kestle
  date: '2004-10-13T16:56:04'
  content: Oop - it lost my name in page navigation (looking for word defs).  So the above was me :).
  replies: []
- id: 2581
  author: Mike Spille
  date: '2004-10-14T09:27:04'
  content: 'Steven, everything you say sounds great, except you''re falling for the fallacy that unit tests actually says something meaningful about an app as a whole.  Where you ask the question "Can you say that your programme retains all of the previous functionality", you''re making a critically flawed assumption - that a suite of unit tests actually say anything useful about whether your app works or not.

    You''re not being pragmatic, you''re being obsessive over a minor development technique.  Tens of millions of lines exist in the world that do not have unit tests - but also do not work by "coincidence".  They work because their owners have more comprehensive testing techniques than JUnit.'
  replies: []
- id: 2582
  author: ''
  date: '2004-10-15T06:54:56'
  content: 'I think Guatanamo solves the wrong problem.  Code that is not exercised by tests is not the problem.  Some code is so trivial (getters/setters, although they are a problem in themselves) that it doesn''t need testing.

    Much worse is code that is ONLY exercised by the tests.  A tool that could remove all code that is only tested and not used by the app (barring entry points, of course) would be much more useful.'
  replies: []
- id: 2583
  author: Aslak Hellesoy
  date: '2004-10-15T14:26:54'
  content: 'Having Guantanamo remove code that is not used in the app itself is also possible. Just instrument your code with with Clover or JCoverage (EMMA support coming soon) and play with it for a while.

    When you shut down the app, there will be coverage info that you can use to run Guantanamo again.

    -And this time it will remove code that isn''t used by the app (as opposed to by the tests).

    Pretty obvious isn''t it? -Given that all Guantanamo does is to read coverage data.

    And please - what''s so tasteless about taking the piss of the completely revolting US concentration camp where the prisoners have no legal rights whatsoever? Defending the Guantanamo camp is what''s tasteless!'
  replies: []
---

It was so obvious to me that [ Guantanamo](http://blogs.codehaus.org/people/rinkrank/archives/000844_poor_test_coverage_send_your_code_to_guantanamo.html) (this name is very poor taste, by the way) was a joke that I found the entire idea amusing, but now, I'm not so sure.  Aslak seems to be awfully serious about it, but seriously... 

A tool that _deletes_ lines of code that are not tested?  Surely, even the most hardcore XP proponent wouldn't be that radical and would just read the reports of a coverage tool and use his judgment to decide whether the untested code should be tested or not...

If anything is missing from Clover and other coverage tools, it's a way to tell "I know this part is not tested and/or exercised, but it's okay".  But a tool that will delete my code?

Come on...
