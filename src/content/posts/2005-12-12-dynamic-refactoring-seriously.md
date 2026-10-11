---
title: Dynamic refactoring?  Seriously?
date: '2005-12-12T08:36:30'
slug: dynamic-refactoring-seriously
categories:
- General
comments:
- id: 4563
  author: Jon Tirsen
  date: '2005-12-12T09:54:29'
  content: 'C# and VB in .NET haven''t had refactoring support at all for a very long time (they''re getting it now with the next release of Visual Studio). That hasn''t stopped them from being widely successful and used. Same goes for PHP.

    To think that a language''s adoption is only related to technical issues such as these are quite frankly a bit naive and really not historically accurate.

    Btw, have you at all tried the Smalltalk IDEs you''re so keen to debunk? I don''t think so. Download Dolphin Smalltalk and play around with it for a while. They are a *lot* more sophisticated than you make them out to be. More so than Eclipse/IDEA? In some areas, not in others.'
  replies: []
- id: 4564
  author: Patrick Lightbody
  date: '2005-12-12T10:34:28'
  content: Thanks for trying to educate the public on this. I hope the rails fanatics read it ;)
  replies: []
- id: 4565
  author: kent
  date: '2005-12-12T11:41:35'
  content: I'm not a rails fanatic per se, but having deployed several quite big web applications powered by rails, I can say that I don't need that much of refectoring in Ruby as I desperately needed it in Java. Just because there is no a super powerful Intellij IDEA for Ruby, doesn't mean that the language or the framework is doomed. I'm much more productive with Vim plus Ruby than with IDEA/Eclipse plus Java.
  replies: []
- id: 4566
  author: Patrick Mueller
  date: '2005-12-12T13:05:00'
  content: 'I programmed in Smalltalk for years, as part of the Visuage for Smalltalk development team, and I don''t remember ever needing this "dynamic refactoring".  I don''t remember this even being available.  So, does dynamic refactoring seem nutty: yes; did I ever need it: no.

    Off the top of my head, I don''t remember how I used to do refactoring, but I can tell you I did it all the time.  In fact,  I remember working a project with an engineer from Sun, where I did a chunk in ST, he did a chunk in Java (this was 1997).  When we were all done, he asked if I had ever considered rearchitecting/refactoring my work, because he certainly wished that he had (hindsight being 20/20).  My response was that I did a fairly major refactoring about once/week.  He was shocked.'
  replies: []
- id: 4567
  author: Jon Tirsen
  date: '2005-12-12T13:29:33'
  content: 'Patrik Mueller, that is correct. The refactoring technique outlined above is only a theoretical way of doing Rename Method in Smalltalk presented in some paper (I don''t remember which). It is not how it''s actually implemented in modern Smalltalk IDEs. Instead they rely on statical analysis just like the Java ones. I think they might do some runtime statistics gathering but running the app is not required to do a refactoring.

    As I said, modern Smalltalk IDEs have evolved quite a lot since the days.'
  replies: []
- id: 4568
  author: Daniel Wintschel
  date: '2005-12-12T17:51:59'
  content: 'Gonna have to agree that the dynamic refactoring thing seems, well... um, urgh? I really don''t see what the problem is with just using IDEA to refactor a method is, and it (usually) only takes about 4.26 seconds. Just wanting to mention about Ruby / RoR though - I don''t think that dynamically typed languages like Ruby/Groovy/Python/whatever are doomed. I started to play with Ruby about 3 weeks ago, and knowing absolutely nothing about the language, I built a web-app in about 3-4 days that would''ve taken me about 10+ days in Java (and I know Java inside-out-and-backwards).

    Just because a lot of people are jumping on the Ruby / Rails bandwagon doesn''t mean that you should avoid it like the plague (it also doens''t mean you should blindly follow). Heck, I avoided it when I first read the onlamp tutorials a couple months ago. Not sure what got me to change my mind and start to look into it more, but I certainly don''t regret it.

    As far as I''m concerned, there is way too much money to be made in this world doing non-enterprise applications (read: projects or applications or systems that don''t _need_ a language like Java) that something like RoR is almost foolish to dismiss without so much as a week of time spent on it.

    But back to the refactoring again - I don''t need to refactor my RoR app, because it''s only a few hundred lines of code. I''ve seen ejb-jar.xml files that have more lines of code than my entire application. ;)

    Oh! And Cedric, thanks for the comment you left on my Blog a few weeks back regarding my post on TestNG - since then I''ve put up a few more postings about it (TestNG), and I''m totally loving it. Thanks for the great tool.'
  replies: []
- id: 4569
  author: Norla
  date: '2005-12-13T06:39:19'
  content: 'I''ve also jumped the rails bandwagon recently and see great potential for it. I would use it if I were to write a relatively simple online application from scratch (database and all). This seems to be what rails is aimed at, and in that field is just shines. For anything else (applications with legacy access, xa transactions etc) I would probably stick with ol java/j2ee.

    Oh and one more thing: Unit testing seems even more important when you work with "dynamic" languages, since there is no compiler to tell you about invalid method calls and so forth. Developers familiar with writing unit tests for their code are probably a lot more comfortable switching to a language like ruby or groovy for "serious" stuff.'
  replies: []
- id: 4570
  author: Norla
  date: '2005-12-13T06:41:41'
  content: 'I''ve also jumped the rails bandwagon recently and see great potential for it. I would use it if I were to write a relatively simple online application from scratch (database and all). This seems to be what rails is aimed at, and in that field is just shines. For anything else (applications with legacy access, xa transactions etc) I would probably stick with ol java/j2ee.

    Oh and one more thing: Unit testing seems even more important when you work with "dynamic" languages, since there is no compiler to tell you about some of your mistakes. Developers familiar with writing unit tests for their code are probably a lot more comfortable switching to a language like ruby or groovy for "serious" stuff.'
  replies: []
- id: 4571
  author: murphee
  date: '2005-12-13T08:13:03'
  content: 'Cedric

    I''m the author of the referenced blog entry. Let me just point out that you have chosen to ignore my big argument about how Java code adopts more and more  dynamic constructs (examples: JSP, dynamic AOP, etc. see blog entry for longer list).

    My article *does* say that Java wins hands down if you only use statically typed Java code. BUT as soon as you use the more dynamic constructs, you''re out of luck with it. So... why not spy on dynamic languages (like Smalltalk), see how they have solved this problem and try to borrow their ideas?

    BTW... I''m *NOT* suggesting of adopting the dynamic refactoring ideas for Java and throw out the existing parts. The ideas I put down (appendix of first article, and update in 2nd article) are simply ideas for using the dynamic refactorings to improve the situation in Java.

    For instance:If you rename a property that a JSP uses, you''ll have to roam your code and find all usage sites; with the proposed idea that could be automated.

    And again: let''s keep one thing in mind: dynamic languages (Smalltalk and friends like Ruby) have had a long time to get ideas for solving problems with the dynamic nature of their tools. So... checking out their solutions can only be helpful... if not directly, then it might help think up new ideas.'
  replies: []
- id: 4572
  author: Isaac Gouy
  date: '2005-12-13T14:01:12'
  content: '1) "I can''t believe... more than just a passing amusement"

    Perhaps we should think of behaviour preserving transformations as an amusement - compared to the seriously interesting use of the same rewrite engine to change behaviour:

    "This allowed us to systematically make 16,000 changes almost bug free."

    "Transformation of an Application Data Layer"

    http://csc.noctrl.edu/f/opdyke/OOPSLA2002/Papers/TransformDataLayer.pdf

    2) "there are some refactorings in dynamic languages that, while not theoretically impossible, are so impractical that they are not worth doing"

    Which refactorings?'
  replies: []
- id: 4573
  author: Isaac Gouy
  date: '2005-12-13T18:42:58'
  content: '"there are some refactorings in dynamic languages that, while not theoretically impossible, are so impractical that they are not worth doing"

    You mean specifically - method renaming.

    1) We *will* rename methods - so we''re really talking about whether the programmer has to refactor manually, or whether the IDE automates method renaming.

    2) Old Smalltalk IDEs provided a simple way to find all the implementors of a method, and all call-sites; and the programmer would work through the call-sites manually editing the method name.

    3) afaik the current Smalltalk IDEs only automate one very special case - global rename - every method named X (in any class) is renamed Y, and every call of X is changed to call Y.

    4) In contrast, if we had static type information then we could automate method renaming for a method X in class A without changing method X in class B.

    A refactoring for global method renaming is useful - but not as useful as selective method renaming.'
  replies: []
- id: 4574
  author: Isaac Gouy
  date: '2005-12-14T23:21:47'
  content: Was it just the refactoring for method renaming, or is there something else?
  replies: []
- id: 4575
  author: Brian Neal
  date: '2005-12-15T14:45:32'
  content: 'Honestly, General Custer, you should just rely on your own conclusions. All these other folks are just misinformed.

    :)'
  replies: []
- id: 4576
  author: drscroogemcduck
  date: '2006-10-06T05:32:58'
  content: i'm guessing you would do method renaming in a dynamic language based on a combination of static analysis and runtime analysis. if you have tests that exercise the code with all the types they expect then you can gather enough information do a rename correctly.
  replies: []
---

![](http://www.dpw.wau.nl/pv/temp/clipart/screenbeans/gif/Puzzled.GIF)

I can't believe that some people actually consider the dynamic refactoring approach used by the Smalltalk IDE as more than just a passing amusement.

Case in point, Werner Schuster has done a very good job at dissecting how it works and how it could be applied to Java with Eclipse [here](http://jroller.com/page/murphee/20051209) and [here](http://jroller.com/page/murphee/20051212).  I have to give him credit for actually reflecting on the idea more than anyone has so far.  Having said that, I still scratch my head over his conclusion:

> So as I see it
