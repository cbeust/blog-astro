---
title: Build philosophies
date: '2004-12-30T09:29:55'
slug: build-philosophies
categories:
- Java
comments:
- id: 2944
  author: Vincent Massol
  date: '2004-12-30T06:32:19'
  content: 'Cedric,

    I won''t answer to all your points... But here are 2 answers:

    * "Finding the subproject a file belongs to": This is quite easy and can use the same approach used to send diff emails to the subproject''s mailing list. A simple regexp should be enough as you don''t create subprojects every day.

    Ex:

    cargo/core/.* --> core

    cargo/ant/.*  --> ant

    If the file maches the regexp on the left then it belongs to the subproject indicated on the right.

    If you use Maven, you could code an autodiscovery as Maven has a well-defined build structure. You could look for the project.xml file to automatically find the root of the project. But I don''t think this is required. The simple correspondance table above should be enough.

    * The "5-10" minutes stuff is per subproject, not the overall project. A subproject should use binary dependencies to the other subprojects. IMO a good build practice is to have lots of small and focused projects (what Maven is forcing you to do -which you may like or not but that''s another story...).

    -Vincent'
  replies: []
- id: 2945
  author: Vincent Massol
  date: '2004-12-30T06:35:00'
  content: '"and they will work around this limitation by holding on to their submission for as long as possible,"

    This is my only fear. But if the server build does not take longer than the build the developer is used to running on his local machine, I think it''ll be all right.

    The fact that the build runs fast on the server is indeed critical.

    Anyway, the best way to see if this solution may work is to implement it and try it out...

    Thanks

    -Vincent'
  replies: []
- id: 2950
  author: Euxx
  date: '2004-12-30T08:05:00'
  content: '<strong>Patch-based approach to code changes.</strong>

    Cedric and Vincent  continue discussion  about managing code changes in large-scale builds. I agree with Cedric that it is important that build will not interfere with developer activities. I think that it must be an administrative task to handle code cha'
  replies: []
- id: 2946
  author: Kevin Bourrillion
  date: '2004-12-30T12:38:17'
  content: 'Vincent - your answer to finding subprojects is a non-answer.  If you''ve managed to (and if it is possible to) keep your package hierarchy that organized, then of *course* it would be trivial to find subprojects.  That''s not the hard part.

    I don''t hold out hope for any "always"/"never" type solutions.  I think there are many different ways to incrementally reduce developer pain from the build.  Which is best for your team will depend on a lot of things.  What we need is a "toolkit" of build practices that are known to work well in various situations, so individual teams can evaluate what''s best for their needs.

    On some teams, "make-every-developer-do-a-clean-build-and-run-every-single-test-before-commit" is practical.  On most, you need to define a subset of build criteria that the developer is responsible for meeting.  This means that, yes, builds can break.  Three of the tools I''ve heard mentioned for dealing with this problem are auto-rollback, submitting to a staging area, and "safe-syncing" to labels.  Each of these is problematic in its own way, but if one of these approaches (or a combination) makes your team more productive on net balance, then good for you!'
  replies: []
- id: 2947
  author: Michael Slattery
  date: '2004-12-30T13:48:58'
  content: 'I think most of the problem goes away if the programmer is blocked from commiting any code that has hasn''t passed all unit tests.

    I''ve never worked in an environment where a build took more than 10 minutes, so I can''t say much about builds that take hours to run.  But for builds that take under 10 minutes, I would imagine that incremental compiling and running of all unit tests should take less than a minute (assuming sufficient use of mocks).

    If unit tests do take a long time to run it wouldn''t be difficult to (automatically) run only tests against code that has been modified since the last commit or checkout.

    A clean compile followed by functional tests could run in the continuous build process.  It''s a lot less likely for a build to fail in the functional tests if all the unit tests pass (so long as 100% of all methods are covered by the unit tests).

    (We have an ant task that uses BCEL to make sure that all public methods in recently modified classes are called by their corresponding test classes.  It refuses to let you do anything until you put all methods under test.)'
  replies: []
- id: 2948
  author: Ravi
  date: '2005-01-06T20:44:19'
  content: 'Cedric, which SCM do you use @ work?

    -Ravi'
  replies: []
- id: 2949
  author: Sam Newman
  date: '2005-01-11T07:57:48'
  content: 'The single, biggest problem with a pre-checkin buold step is with what happens when you have parallel checkins. Once that happens, you are delaying the integration build step till after the checkin, so you still need a continuous integration build, after your initial pre-checkin build, therefore doubling the amount of time before a developer can be happy that what they''ve checked in worked.

    As for long, 1-3 hour long builds, I''d answer that by suggesting breaking it up into a series of smaller builds, to offer fail-fast feedback, and to enable parallelisation of build targets. Some of the work I''ve been doing on build pipelines may be of interest: http://www.magpiebrain.com/archives/2005/01/07/build_pipelining and http://www.magpiebrain.com/archives/2005/01/10/automating_build)'
  replies: []
---

By an interesting timing twist, Vincent just posted a [ lengthy entry about build systems](http://blogs.codehaus.org/people/vmassol/archives/000937_unbreakable_builds.html) where he explains how to set up an infrastructure where builds never break:

> The general principle is to catch the commit data before they get committed to the SCM, to perform a build and to perform the actual commit only if the build is successful. 

While the idea is interesting, I believe it won't work for technical and philosophical reasons.  Let's go through the technical reasons first: 

> The committed data are intercepted using a pre-commit hook script (all modern SCM support this). This script is in charge of doing 2 things: 
> 
>   * Finding out the list of projects to be built.
> 


From my experience, this is just plain impossible as soon as your project becomes moderately big.  This problem is almost impossible to solve for disparate code bases (mix of Java, C++, Python, you name it) but it's actually even surprisingly difficult to achieve even on a 100% pure Java code base.  In the past, I have even been confronted to build systems that forced you to enumerate every single file involved in your build instead of using directories or wildcards (a technique that has pros and cons but which I tend to like) and even then, we were never able to determine with 100% accuracy all the dependencies involved, resulting in mysterious "symbols not found" errors and causing new hires endless hours of frustration and more senior people a lot of wasted hours trying to explain and diagnose these errors.

In the end, we always ended up recommending doing a complete "clean" to solve these problems, which worked 99% of the time but still failed once in a while for reasons we never figured out (at which case, the only final solution is to recreate a client from scratch).

> * We need build machines to perform the actual build.

Unfortunately, this problem cannot be solved by simply throwing more machines into the pool.  As various builds are in process coming from dozens of developers in parallel, these change lists need to be reconciled before the final approval is given to one committer.  In other words, multiple build validation is not a process that is easy to parallelize.

> When the build is finished (or if an error occurs) 

This is another problem:  the builds can be arbitrarily long, forcing developers to either resume their work on a change list that has not been approved yet, or create a new client workspace, sync it and start working there.  Either way, it's not the friendliest environment for developers.

Among the advantages of his approach, Vincent lists:

> Forces atomic commits! 

Which, of course, should be a feature of the underlying SCM, and not of your build infrastructure.  Any SCM system that doesn't feature atomic commits (such as CVS) should not be used for large-scale software.  Obviously, Vincent has been using CVS too much :-)

> You need to ensure your build is taking as little time as possible. I think 5-10 minutes should be ok. 

This one really made me laugh.  The only projects on which I have worked that built in less than 5-10 minutes are my own open-source projects.  In my past employments, build times of one to three hours were more the norm.  And that's just for building:  check-in tests usually run in under ten minutes but it's common for functional tests to take an entire night to run.  Vincent's system clearly does not scale for such numbers and I can't imagine developers being productive if they need to wait for at least an hour before their commit receives approval (and they will work around this limitation by holding on to their submission for as long as possible, resulting in huge submission lists, thus causing a whole new set of problems which I won't discuss here).

Despite my skepticism, I find Vincent's approach interesting because of its contrasting philosophy to mine.  Having a good build infrastructure is a very difficult task, and he chooses to put the burden on the developers instead of the release managers.  I don't believe this is the right way to approach this problem, and the ideas I put forth in [yesterday's entry](http://beust.com/weblog/weblog/archives/000220.html) use the opposite approach:  I want to make the build infrastructure as transparent for developers as possible.  But not more.

By "not more", I mean that developers still need to be aware that breaking builds is not acceptable and that their submission will be automatically rolled back if it happens.  The approach I recommend solves this problem not by making build breaks impossible, but by making them harmless to as many people as possible.
