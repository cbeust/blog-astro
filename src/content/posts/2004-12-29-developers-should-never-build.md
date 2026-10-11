---
title: Developers should never build
date: '2004-12-29T07:10:10'
slug: developers-should-never-build
categories:
- Java
comments:
- id: 2941
  author: Euxx
  date: '2004-12-29T10:25:05'
  content: '<strong>Self healing builds and responsibilities.</strong>

    Vincent  is writing about unbreakable continuous builds . I''m not sure what is the rationale behind that even idea is really nice. Usually, when continuous build fail it mean that committers either didn''t get recent updates before committing and/or did no'
  replies: []
- id: 2934
  author: Patrick Calahan
  date: '2004-12-29T13:25:49'
  content: 'I think most of what you both say here is pretty generally-accepted as far as it goes.  However, it seems to only take outward dependencies into account.  That''s fine if you''re building a high-level tool that has no inward dependencies.  But if you''re toiling away in the bowels of, say, a widely-used XML subsystem, the ''never build'' option is simply not feasible.

    Yes, the potential for breaking other people can be minimized with smart design.  But at the end of the day, if there is any chance that my change will break someone else, I simply have to build them before I check in.

    Fully agree about the importance of quickly rolling back changes which break b/t, but I don''t think automated rollbacks are ever going to be practical.  Are you going to rollback everyone''s change in the cycle as soon as things break?  That''s Bad for productivity, never mind what happens when you toss transient and timing-dependent failures into the mix.

    At the end of the day, the only viable solutions here are cultural.  Perl scripts can only take you so far; peer pressure and public humiliation are more democratic and far more effective.'
  replies: []
- id: 2935
  author: Vincent Massol
  date: '2004-12-29T23:28:29'
  content: 'Hi Cedric,

    Funny that you blog about this as I have just blogged yesterday about the concept of "Unbreakable Build" (http://blogs.codehaus.org/people/vmassol/archives/000937_unbreakable_builds.html). It''s purely a concept at this stage but I''m curious to get feedback.

    I do agree about not rebuilding all sources on developer''s machine and having a continuous build that produces binary snapshots continuously. It''s a "built-in" feature of Maven.

    Now with the unbreakable build concept, developers really do not need to run builds at all on their machine even though they can.

    Thanks'
  replies: []
- id: 2942
  author: Software Documentation Weblog
  date: '2004-12-30T06:06:38'
  content: '<strong>Degrees of brokenness</strong>

    I  a follow-up  to  Vincent''s unbreakable builds post   Dion Almaer  points to  a post by Cedric Beust  which essentially states that developers should not build large projects at all, they should compile their very component and use binary snapshots of r'
  replies: []
- id: 2936
  author: Dave
  date: '2004-12-30T07:05:27'
  content: Please explain how you are supposed to do any work without building the application you are developing.  I "build" (by which I mean, run our ANT script) about 100 times a day, because that's how you develop software.  Write code, compile, test/debug, repeat.  Are you saying we should go back to the mainframe days and submit our punchards for compilation and receive notification the next day of a compile error?
  replies: []
- id: 2937
  author: Patrick Calahan
  date: '2004-12-30T10:42:47'
  content: 're: punchards.  If you are able to build 100 times a day, then I don''t think you are facing the kind of problems Cedric is trying to address.  If your build only takes 5 minutes, then this discussion is less relevant (though definitely not irrelevant - little projects sometimes become big, and planning helps).

    When your build takes 30, 60, 120+ minutes, then you start to have to think about these things differently.'
  replies: []
- id: 2938
  author: Kevin Bourrillion
  date: '2004-12-30T12:45:13'
  content: 'I think by "build" he clearly means an *entire* build -- a build you could send right off to QA.  In many cases this can take hours, so the savings you can get by not making your developers have to do this can very easily outweigh the additional risk you take on -- risk that can be mitigated, but never completely expunged, by some smart tools such as the above.

    About undoing a rollback, I''m not sure I''d call it *trivial* with p4, but definitely easy -- unless you get conflicts!'
  replies: []
- id: 2943
  author: Tiago Silveira and the world
  date: '2004-12-30T22:18:54'
  content: '<strong>don''t break the build</strong>

    Maybe it''s the season, but my RSS feeds gave me lots of comments on building today.

    Euxx  contraposes  Vicent Massol ''s idea with two others: one is to rollback changes that break the build, the other is to work with patches that are only applied to'
  replies: []
- id: 2939
  author: Alex Moffat
  date: '2004-12-31T08:15:34'
  content: What sort of operations make building a Java based system take hours, or rather, what do people mean by build? At work we have 300k lines of code and completely recompiling and deploying to WebLogic takes about 5 minutes on a typical developer's machine. Running all of the automated tests for one platform/DB combination takes 7 hours though. So, no one should ever check in code that does not compile, there really is no excuse, but, passing the tests in another matter. Requiring each developer to run all 7 hours of tests before checkin is silly. Have a system of regular test runs to check that the code passes the tests and make fixing any errors a high priority.
  replies: []
- id: 2940
  author: Bill Kemp
  date: '2005-01-06T09:37:43'
  content: 'Thank you for posting this. Our builds take over 2 hours, rarely complete without a plethora of errors, and take me up to 2 weeks per quarter to figure out what the latest changes are that need to be made to get the thing to build. I spend at least 50% of my ''development'' time futzing with the build when all I work on is a small subset of the overall system. Management is oblivious, CM is opaque, and without some knowlegeable developers, the system would never get built. It''s our #1 productivity issue.'
  replies: []
---

[This entry](http://www.corvine.org/blog/archives/000057.html) makes an interesting analysis of various ways that a build can break.  As far as build philosophy is concerned, I have a very simple motto:

> Developers should never build. 

Never.  Period.

Over the past ten years, I have worked at companies that manipulate huge code bases on a daily basis, and their build system was so complex that teams of several people to run it are pretty common.  All these companies are experts at building software, but it's amazing how so few of them really understand how much time is wasted every time a developer needs to build the entire product to get their job done.

Typically, developers will only be working on a very small fraction of the code base, and they should only have to build this portion and nothing else.  All the classes and external libraries that this code depends on to build successfully should be downloadable in a binary form.

These "clean" snapshots should be generated by your continuous build system (CruiseControl or similar) and can have several variations.  The two most important types of snapshots in my opinion are:

  * **Clean build**.  The entire product built successfully but the tests have not been run, so some of them might fail.  
 
  * **Clean tests**.  The entire product built successfully **and** passed all the required tests.



Typically, the label for a clean build will advance faster than that of a clean test, therefore providing a more recent view of the product for those developers that need the most up-to-date clean version of the build.  Also, these two top categories can be declined in further subcategories (clean check-in test, clean functional tests, clean partial build, etc...).

If you manage to set up such an infrastructure, a broken build becomes much less harmful to the entire organization since there are very little instances where a developer absolutely needs to synchronize to HEAD, which is the only change list that can potentially be broken.  If developers only sync to a clean label, they become completely shielded from occasional build breaks.

That being said, build breaks should be treated with the utmost emergency by release engineers and I am more and more liking the idea that submissions that break the build (and possibly, the tests) should be immediately and automatically rolled back.  It might be a bit harsh, but it makes developers more aware and more careful before submitting their code, because undoing a rollback can sometimes be painful, depending on the source-control system you are using (it's trivial with Perforce, not necessarily so with others).

Once such an infrastructure is in place, the daily routine of a developer becomes:

  * About once a day, sync to a clean label and download the corresponding binaries.
  * Several times a day, sync only the subset of the project you are interested in if you need the latest bits (a step that's most of the time even optional).



No more build break syndrome.
