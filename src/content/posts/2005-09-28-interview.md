---
title: Interview
date: '2005-09-28T20:39:55'
slug: interview
categories:
- Java
comments:
- id: 4266
  author: Michael Neale
  date: '2005-09-28T20:57:54'
  content: 'Cedric,

    Do think that the features of dynamic languages that make them dynamic will make it hard or impossible to do equivalently powered IDEs?

    I don''t know enough about the subject to know if it is impossible or just difficult. I am sure it would be at least difficult enough to stop any quick efforts that aren''t vendor backed.

    Its a good point though, despite how "wordy" people complain Java (and C#) are, using appropriate IDEs I find I am using much less keystrokes then it would appear. Reminds me of moving to a morse code paddle rather then a button (!).'
  replies: []
- id: 4267
  author: kevinb
  date: '2005-09-28T23:10:48'
  content: '''For example, I have always thought that using class and package names to simulate some kind of categorization in your tests was ill-formed and didn''t scale . . . suddenly it hit me: why would I not be able to "tag" my test methods?  . . .  It was one of those moments when you realize that things just fall into place naturally and they make so much sense that you wonder why nobody thought of doing that before.''

    D''oh!  Actually... it isn''t that no one thought of it before, just that the people who did were too damned busy to spend the time to contribute what they did back to the community. :(  damn!

    I was doing this since late 2000.  And also had your "rerun failed tests" feature. :)'
  replies: []
- id: 4268
  author: Robert Watkins
  date: '2005-09-28T23:50:26'
  content: 'Cedric: you''re absolutely right about the IDE support, and it''s the same argument I make to my Python- and Ruby-loving colleagues.

    I know Python moderately well, and I''ve dabbled a bit in Ruby. And, if I''m not working with an IDE, then I''m more productive in them than in Java.

    However, with an IDE, and a code base above a few files in size, the Java environment wins hands down. Well, to be precies, Eclipse or IDEA wins hands down. :) The refactoring support, code completion, code browsing: all are incredibly powerful features that dynamic environments have problems with.

    Now, the interesting part is that most of these features were first implemented in Smalltalk - perhaps the most dynamic environment ever! The reason, of course, is that you actually worked on an image of your codebase - a lot of the information that is inferred in a static environment can be deduced at runtime if needed. But Python and Ruby environments aren''t like that yet.'
  replies: []
- id: 4269
  author: Bob Lee
  date: '2005-09-29T11:12:48'
  content: kevinb, I think Cedric means he's surprised no one open sourced it; that's how I understood it anyway. Who cares who thought of it and when. It doesn't help anyone unless you open source it or at least write about it.
  replies: []
- id: 4270
  author: Jason Marshall
  date: '2005-09-29T15:25:13'
  content: 'And once I learned HOW Smalltalk does refactoring, (as Robert says, by doing work at runtime if needed), I was even more sure that statically typed languages were more amenable to tools support.

    At the same time, I can see that to a small extent statically typed languages bring a need for tools.  It can be very expensive in a statically typed language, unless you are routinely throwing away type information (see Java Collections, prior to Generics) to experiment with changes to your type system.  However, once you find a likely candidate, it''s simple to prove that it is a good one, except in certain situations (see Java Collections, prior to Generics).

    Almost invariably, this comes down to arguments about near-term versus long-term productivity.  Does the time that will eventually be spent writing essentially type-checking unit tests exceed the time spent patching up type declarations?  Who''s to say?  Nobody seems to be interested in trying to prove it out objectively.

    What I can say is that like many industries, there''s a lot of pressure from all sides in the software industry to favor short-term benefits to the exclusion of long-term ones.  I can also say that static typing is a piece of safety equipment  like a seat belt, or air bags, or a bicycle helmet, and there have been people who''ve tried to block the use of all of these.

    Professional bicyclists refused for decades to wear helmets, claiming they were heavy, and retained heat, which lessened their performance.  Certainly a helmet made you ride a little bit slower, but it also increased the chances that you''d get to ride at all (instead of pushing up the daisies).  Better tools - lighter, better ventilated helmets - and experience - a few spectacular crashes - eventually let both sides meet in the middle.

    I wonder sometimes if there is a ''happy middle'' for typing.  Will someone finda way to temporarily have islands of dynamically typed code to support these ''in flight'' changes to class heirarchies?  Will someone make type declarations more consistent and easy to declare?  Will someone make a refactoring tool that can identify when you''re breaking your heirarchy, and proactively help you fix it?  Hopefully time will tell.'
  replies: []
- id: 4271
  author: Stephan Schmidt
  date: '2005-09-30T01:40:57'
  content: 'How funny, I wrote something about that, but as an answer to a different weblog post

    http://www.sonotine.com/index.php?id=4'
  replies: []
- id: 4272
  author: pEANUT
  date: '2005-11-14T06:42:48'
  content: Rob Harwood is a knob
  replies: []
- id: 4273
  author: ''
  date: '2005-11-14T06:43:37'
  content: so is stephan schmidt
  replies: []
---

![](http://www.vanwardtechnologies.com/images/test_often.jpg)

Vanward Technologies just posted [their interview of me](http://www.vanwardtechnologies.com/cedricb01.php).  On the menu:  testing, scripting  languages, IDE's, and software in general.

There is one particular point I'd like to emphasize:

_The reason why dynamic languages are not taking off as much as they should is because of the lack of IDE support.   I urge all people who feel passionate about their scripting language of choice to carve out some time from their busy schedule and write a fantastic IDE plug-in.  Failure to do that will condemn your language to a niche market forever._

For more details, please see the interview, and post your comments here.

And big thanks to Andrew for the interesting email exchange that led to this interview!
