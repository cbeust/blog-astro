---
title: AOP still not there
date: '2004-09-14T10:53:04'
slug: aop-still-not-there
categories:
- Java
comments:
- id: 2313
  author: the_mindstorm
  date: '2004-09-14T12:15:39'
  content: 'Hi Cedric!

    I think what is going in a way wrong about AOP is developers incapability to explain the benefits of this approach to the management layers.

    As long as we are not able to persuade ''em I think we cannot complain about AOP acceptance (my 2c).

    ./the_mindstorm

    http://themindstorms.blogspot.com/'
  replies: []
- id: 2314
  author: Daniel Ritchey
  date: '2004-09-14T13:11:04'
  content: I don't think the everyday developer should have to think about AOP.  Most of the "cross cutting concerns" that AOP solves will be exposed to the developer through an app container.  So long as the app container provides tx support, persistence, security, etc.  I don't think it matters how the app container implements it, be it AOP or something else.
  replies: []
- id: 2315
  author: dave
  date: '2004-09-14T13:46:40'
  content: I hate to be the one to tell you, but your timescale is way off for how mainstream language uptake goes.  Once there are 1) quality tools, 2) a large marketting push, 3) and a set of hard problems that developers need to solve on a day-to-day basis which are notably easier with AOP, it will _still_ take 5 to 10 years for AOP to become a mainstream technology.  That's just the reality given the tremendous fixed costs our industry has in tooling and training.  Examine the historical uptake times of OOP and structured programming, if you don't believe me.   AOP is close on 3), although the implementations are still a bit clunky, to my eyes.  On 1) and 2), there's a long way to go.
  replies: []
- id: 2316
  author: the_mindstorm
  date: '2004-09-14T14:08:29'
  content: 'Hi dave!

    I have to disagree with you :-|.

    1. At this moment the available tools satisfy the needs. (maybe they miss the brightness of a master-piece, but this is given by the time)

    3. There are problems which in fact are easier to be treated with AOP

    2. I do not need a "marketting push" to offer a solution or to solve some problems. If it cuts out the costs and reduce the risks, why not use it?

    ./the_mindstorm

    http://themindstorms.blogspot.com/'
  replies: []
- id: 2317
  author: Bob Lee
  date: '2004-09-14T14:58:46'
  content: 'Mindstorm, the tools still have a long way to go. I tried the AspectJ plug-in in WSAD a couple months back, and it was very buggy. I''ll probaby have to wait until WSAD catches up. Other IDEs don''t support AOP at all.

    More in my blog: http://weblogs.java.net/pub/wlg/1853'
  replies: []
- id: 2318
  author: the_mindstorm
  date: '2004-09-14T15:13:40'
  content: 'When adopting OO they have talked about a big shift in thinking and concepts. When adopting AO we talk about tool support. When the next will come into play, what reason we shall invoke?

    ./the_mindstorm

    http://themindstorms.blogspot.com/'
  replies: []
- id: 2319
  author: Dave
  date: '2004-09-14T15:38:23'
  content: '>If it cuts out the costs and reduce the risks, why not use it?

    Because management hasn''t bought in yet.  Because half of your team has never heard of it.  Because it''s impossible to hire junior programmers that know anything about it.  Because there are no or few decent books or training courses.  Because it isn''t supported by your [IDE|build|design|analysis|deployment|debugging|profiling] tools.  Because you''ve got an arbitrary amount of valuable legacy code that your next ten projects _must_ leverage.  Because you''ve only got five hours per week to invest in professional development, and it''ll take at least fifty to become proficient.

    It''s one thing for an individual developer to embrace a technology.  It''s quite another for the industry to embrace a technology.  There''s simply too much inertia due to existing infrastructure and sunk costs.  It does happen, but it takes quite a while.  In my lifetime, there have been a total of three major programming paradigm advancements that have made the mainstream (structured, OO, and relational db query languages), out of several dozen proposed.  In that time, there have been a grand total of six languages that acheived mainstream success (C, C++, SQL, Visual Basic, Java, Perl), out of countless hundreds offered.  Except for Java, each of them took many years to acheive mainstream status.  Expecting a shift as difficult as AOP to happen more quickly than that is simply kidding yourself.'
  replies: []
- id: 2320
  author: Filippo
  date: '2004-09-14T23:31:33'
  content: 'I actually see some interest in AOP. Some colleagues of mine regularly ask me about AOP and AspectJ, trying to understand if they can use it in their project.

    The main problem as I can see is that there''s not too much support by big companies; in fact, even though they are sponsoring some aop projects, they still don''t provide support for aop in their enterprise-level servers.

    Another problem is the lack of a standard.

    I think that at the end Aop will become something real, productive and popular, but it will take probably 2 or 3 years.

    Filippo

    http://www.jroller.com/page/fdiotalevi'
  replies: []
- id: 2321
  author: Serge Beaumont
  date: '2004-09-15T00:24:41'
  content: I discovered AOP about two years ago, three months ago I bought and read the Manning book, starting next week I'm using it. And I consider myself just-ahead-of-mainstream, so I expect AOP to take off in about a year. I've seen it happen when I adopted OO, J2EE, Hibernate...
  replies: []
- id: 2322
  author: Pascal Bleser
  date: '2004-09-15T01:03:18'
  content: 'To me, it doesn''t have anything to do with "management push" as it is something deeply technical. It doesn''t even have the acceptance of architects and developers (yet?), besides a few.

    I think one of the issues is a lack of

    - good, concise, easy-to-understand papers to explain what it is: AOP has a lot of acronyms and (buzz?)words one first has to understand and digest

    - practical, real-world examples to show where the benefit lies in: it''s always about logging/tracing... that doesn''t really tell architects what they would gain from it (besides more ease for tracing but that''s not much for introducing a new paradigm and additional software)'
  replies: []
- id: 2323
  author: the_mindstorm
  date: '2004-09-15T01:54:24'
  content: 'The AOP management push means involving non-tech guys in something that is purely tech. You can read my AOP marketing thoughts here:

    http://themindstorms.blogspot.com/2004/09/marketing-aop.html

    ./the_mindstorm'
  replies: []
- id: 2324
  author: Simon
  date: '2004-09-15T02:12:22'
  content: 'In the academic community, the feeling is that AOP is not even mature for industrial use. Think of all problems we currently have : non-robust pointcut (sensitive to refactoring), violation of encapsulation, performance issue, to name a few.

    In my opinion, concepts are still barely understood and we do not have the right metaphors to explain/conceive aspects everywhen/everywhere.

    First objects concepts appear in the late 60s : it takes 20 years to get used to them. OO has been adopted when the performance extra cost was no more than 10%-20% compared to equivalent imperative programs.

    Kiczales says at last AOSD conf'' that, although things are growing quickly (IBM announced AOP marketing), this will take a while before it is mature (perhaps 10 years).

    (excuse my poor english)'
  replies: []
- id: 2325
  author: Pascal Bleser
  date: '2004-09-15T03:33:45'
  content: '"the_mindstorm", I can''t see the point in involving non-tech people in a decision to go with AOP or not.

    To me, it''s something that has to be discussed within a development team, but not with management or sales.

    Heck, it''s just a tool/paradigm to help you solve some issues better. IMHO it''s mostly for horizontal stuff like logging, transaction handling, security, measuring performance, ... - or at least those are the only examples I''ve seen on AOP yet. It''s not like you would switch from CORBA/C++ to J2EE/Java.

    What does your management or sales have to do with the fact that you use AOP or not ? Compare it to OO. Whether you do it with good OO or imperative/bad OO programming just doesn''t matter to them either (or if it does, tell me what company you''re working for, I''ll apply ;) ).

    Now, it''s not the same as whether you use Java/J2EE, CORBA, C++, .wet, PHP, ... - because the choice of the underlying platform does provide advantages and inconvenients to the customers (portability, vendor support, ...). Our sales do emphasize the fact that we build our applications on J2EE because of the benefits it brings (and because most customers are much more technology-aware today than 5 years ago), but they wouldn''t praise the fact we use AOP (which we actually don''t, at least at the moment) or not: it''s not visible to the customer, it doesn''t provide an advantage to them (except, maybe, that the application is easier to maintain). It''s just a developer tool.

    IMO it''s the same as using e.g. XDoclet, Hibernate or Spring: you have to know whether it''s stable, well-supported, whether there''s at least one good OpenSource implementation, evaluate it yourself. But none of that has to be discussed with the management (unless you count a system architect as management ;) ).

    Let''s wait for the hype cycle to do its job...

    http://www.ayeconference.com/wiki/scribble.cgi?read=HypeCycle

    ... or maybe it''s just me underestimating the AOP [ ] paradigm shift / [ ] hype (choose your option) ;)'
  replies: []
- id: 2326
  author: the_mindstorm
  date: '2004-09-15T05:20:12'
  content: 'Pascal that you are expressing exactly my point :-) (not the other way around). I was advocating the use of AOP and its adoption in tech divisions without involving externals (management, financial, etc).

    Thank you for making stronger my arguments.

    ./the_mindstorm

    http://themindstorms.blogspot.com/'
  replies: []
- id: 2327
  author: patrick
  date: '2004-09-15T06:37:54'
  content: 'Have a look at http://community.java.net there is

    a poll on AOP :)'
  replies: []
- id: 2328
  author: Jason Kratz
  date: '2004-09-15T06:46:43'
  content: 'I have to agree with Dave.  Look at how long it took for OO languages to become the default teaching tool in universities.  I suspect that many are still starting people on C.  Even now many developers don''t know OO well enough to use it properly.  Sure they are creating their objects, etc. but that is only one tiny bit of what it means to be doing OO programming.  Look at the widespread use of VB in the industry and it just started having real OO features as of the first release of .NET.  That isn''t a long time.

    There has to be a really huge benefit to using AOP and people just don''t understand it well enough yet.  I don''t yet and the reason is at the moment I just don''t have enough time to learn it.  That goes along with all of these other neat new things that I constantly hear about in the Java world.  As great as Spring or Hibernate sound how many people are really using them out in the wild?  Who has the time to learn them?  I haven''t yet.

    Jason'
  replies: []
- id: 2329
  author: kevin
  date: '2004-09-15T07:05:44'
  content: The reason it's not adopted well is because nobody knows what it is except for the few who is adopting it.  I am speaking from a developer's view.  I myself have looked at it a few times, but every time, it just does not get my attention.  All the buzzword "Aspect".  So, what is it?  Aspect what?  Show developers something useful and they will adopt.  Don't just show a few short examples on logging and lame things like that.  Either way, the reason it's not getting to the mainstream is because of that.  It has nothing to do with management.  If developers don't use/adopt it, it's over.
  replies: []
- id: 2330
  author: Kyle Lahnakoski
  date: '2004-09-15T18:27:21'
  content: 'I agree with Pascal and Kevin, AOP examples I have seen only involve logging and tracing.  AOP is not worth using if it does what my IDE does already.

    If the AOP people can not provide examples where solutions to specific problems are made simpler with AOP, then I will not adopt AOP.'
  replies: []
- id: 2331
  author: Val
  date: '2004-09-16T04:08:35'
  content: C
  replies: []
- id: 2335
  author: John M Flinchbaugh
  date: '2004-09-16T10:15:44'
  content: '<strong>Not Studying AOP</strong>

    <p>I''ve dug up a few AOP links and I''ve read about it repeatedly in weblogs, but I''ve just not found the motivation to really learn it.  I''ve had no need for it, and it seems that <a href="http://beust.com/weblog/weblog/archives/000180.html" rel="nofollow ugc">the rest of the...</p></a>'
  replies: []
- id: 2332
  author: Craig
  date: '2004-09-20T12:05:01'
  content: Dave brings up that there are no junior programmers who are proficient in AOP. I just graduated from university and during my last term I worked on a project doing a comparison of AspectJ, Aspectwerzk and JBoss AOP. While there may be very few of us, if someone wants to give me a job that involves AOP they would be my hero ;)
  replies: []
- id: 2333
  author: Yann R
  date: '2004-11-08T08:27:07'
  content: 'AOP is a great technical tool. But what for ????

    If a tool needs a lurning curve, add more complexity (for debugging, for example) but doesn''t give new functionalities (new features or development comfort), who would use it except some geeks ?'
  replies: []
- id: 2334
  author: Belaran
  date: '2005-04-29T09:01:24'
  content: 'I know that this weblog has been done for several month, but i would try to start again this discussion.

    Indeed, i''m right know investigating the prospect for AOP for my company and i didn''t really see ( through this log) what was the futur (or not) of AOP.

    First of all, i would like to point out that there is no such technical invalidity in AOP. Most of you seems to agree that AOP is possible, but you express two problems :

    1) "Tools aren''t ready or advance enought"

    Maybe , but how so ? Can you provide this log with  practical example of what is there and what is missing...

    2) "AOP is useless"

    I believe that this statment is only generate by the abuse of the "logger example", that''s really starting to undermine AOP. If you feel that aop is useless, can you add some arguments ?

    Example of aop''s use distinct from logger:

    dealing with exeception

    debug & testing( of course)

    assertions, constraint ( good features from effeil language)

    profiling and performances

    optimisation

    detecting updates and updating

    context propagation

    ect...

    in a word : crosscutting concern.'
  replies: []
---

I wish Dion were right [when he says that AO is gaining use, or at least interest](http://www.almaer.com/blog/archives/000440.html). Indeed, we have seen a significant pick up in interest in AOP these past two years, but unfortunately, not much progress has been made since then in terms of visibility. 

The sad truth is that the only times AOP makes an appearance is in bleeding edge conferences such as No Fluff Just Stuff or The ServerSide Symposium. Are you seeing it around you in your every day job? I certainly don't, and actually, most of the developers I talk to don't even know what it is. 

What went wrong? Failure to communicate or simple inadequacy to the problems software developers are facing every day? 

Is AOP doomed to be a niche technology reserved to a tiny fraction of the developers?
