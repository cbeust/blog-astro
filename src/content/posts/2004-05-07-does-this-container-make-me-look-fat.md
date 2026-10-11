---
title: Does this container make me look fat?
date: '2004-05-07T19:44:52'
slug: does-this-container-make-me-look-fat
categories:
- Java
comments:
- id: 1586
  author: David Jones
  date: '2004-05-07T21:02:44'
  content: At the ServerSide Symposium dinner tonight I heard Marc refer to JBoss as a lightweight container due to its pluggable nature.  So I think it is pretty official that it is a buzzword.
  replies: []
- id: 1587
  author: ''
  date: '2004-05-08T00:06:28'
  content: ii am tired of reading your stupidity on javablogs.
  replies: []
- id: 1588
  author: ''
  date: '2004-05-08T03:34:03'
  content: 'You''re right Cedric, "lightweight" has been used out of context too many times and has lost most of it''s original meaning.

    Being part of coining the phrase I''d just like to say that lightweight containers clarify what we where trying to get across. It was never about the amount of classes. It was more about how easy it was to use and how small impact it would have. So Jetty would be a lightweight servlet container because it can easily be embedded and you can even start it in your testcase. Orion would be more lightweight than JBoss because you can simply start Orion inside your IDE. And so on...

    But as I said, the phrase has lost it''s original meaning, so let''s stop using it.'
  replies: []
- id: 1589
  author: Jon Tirsen
  date: '2004-05-08T03:34:35'
  content: Sorry, forgot to fill in the personal info on the last comment.
  replies: []
- id: 1590
  author: Anonimous boxed rampant clown puncher++
  date: '2004-05-08T04:25:39'
  content: Maybe lightweight means "free"?
  replies: []
- id: 1591
  author: fletch
  date: '2004-05-08T06:33:19'
  content: a lightweight container is one where you don't feel constrained by where you can use it. spring can be used on the client side, the web tier, the business layer. you can run up the entire thing in a testcase and you don't have to make a remote connection to debug it. you can run it on top of any other container, whether it's a servlet engine, ejb container or perhaps even the eclipse rcp. most ejb containers? heavyweight. try running weblogic, websphere, jboss, orion, geranimo, etc. up in a testcase or try to convince someone it's a good idea to run them on the client side.
  replies: []
- id: 1592
  author: Jon Tirsen
  date: '2004-05-08T08:51:25'
  content: 'I agree, just one minor point: Geronimo can actually be executed within a testcase.'
  replies: []
- id: 1593
  author: Robert Lowe
  date: '2004-05-09T04:41:05'
  content: 'My understanding of "lightweight" is that it''s unrelated to the number of classes or the "size" of the container; rather it''s about the degree to which the container/framework "intrudes" into you programming model.

    Hence, EJB 2.x beans don''t qualify because application code is highly dependent on EJB classes and interfaces. Whereas e.g. Spring and Hibernate qualify because application code has minimal/no dependencies on these frameworks. Perhaps EJB 3.x will make the cut. :-)

    I think it''s a valid, if fuzzy, term, although it certainly gets plenty of abuse...'
  replies: []
- id: 1594
  author: Craig Pfeifer
  date: '2004-05-09T06:56:47'
  content: 'I just found a cool new container, it''s not lightweight, but very feature rich!

    It can handle all the current cool buzzwords: AOP, IoC, Dep Ind, Dynamic Proxies, etc. I''ve successfully run every major (and not so major, I''m looking at you Jetty) EJB / Web container, and uh, those other containers (Pico, Nano, Spring etc). It can also handle Groovy.

    To start it up, it''s really simple:

    > java.exe

    Oh, wait. Never mind.'
  replies: []
- id: 1595
  author: ''
  date: '2004-05-10T11:15:58'
  content: '"Lightweight" == the "Atkins-friendly" of the web application framework world.'
  replies: []
- id: 1596
  author: John Archer
  date: '2004-05-12T22:25:09'
  content: 'I define lightweight in two fashions...

    One being the actual footprint caused when executed and the other in terms of feature/functionality.  So most lightweight frameworks will get me part of the way, but somewhere along the path I will have to do some development to deliver a valuable solution. So some of these frameworks I tend to think more along the lines of "incomplete" framework.'
  replies: []
- id: 1597
  author: ''
  date: '2004-05-13T00:47:04'
  content: '"incomplete" : thus maybe creating another underrated buzzword!'
  replies: []
- id: 1598
  author: Taylor Cowan
  date: '2004-05-13T09:22:25'
  content: 'Cedric,

    Good points.  More needs to be said about IoC containers.  You are correct that they are no longer light weight.  What I''m seeing is that even if they aren''t visibly "intrusive", they cause the code base to take on strange characteristics.  Developers stop using "new" as if it were evil, and depend on injection exclusively for almost any dependency.  I''m discovering that IoC conainers can foster a higher level of container dependency than even EJB.  For instance, a session bean is coupled at the api layer, however, the rest of the underlying implementation is POJO and independent.  Code written for IoC containers on the other hand is tightly coupled even down the the most simple objects.  JUnit tests have to boot strap the container, because the container handles the instiation and lifecycle of everything.

    Taylor'
  replies: []
- id: 1599
  author: fletch
  date: '2004-05-13T09:30:38'
  content: 'Taylor: new is evil.'
  replies: []
- id: 1600
  author: Ryan Breidenbach
  date: '2004-05-13T14:21:36'
  content: 'Taylor,

    Huh? IoC containers *add* dependecies? You have to boot strap the container for units test? Why?

    Ryan'
  replies: []
- id: 1601
  author: ''
  date: '2004-05-13T20:07:47'
  content: 'There are ISVs that embed JBoss, I could have sworn I saw an IDE vendor do it couple of years ago at J1.

    Fully agree with Cedric''s point that "lightweight" is a bullshit term.'
  replies: []
- id: 1602
  author: metaele
  date: '2004-05-14T00:41:17'
  content: Yeah these "lightweight" containers seem to show a lot of promise as a lot of developers are finding out and using them with success(This is from visiting several blogs around the net). So since they are obviously affecting the some "products" in the market, one of the things would be to try and discredit them. I was going to be very suprised if something like this was not going to come up.
  replies: []
- id: 1603
  author: Rod Johnson
  date: '2004-05-14T01:19:22'
  content: '- How large are the Jar/jars required to run a container, and use all IoC features? (Just the IoC/AOP Jars, not the whole shebang for something like Spring or HiveMind. The core "container" doesn''t depend on that.)

    - How long does it take to start up a supposedly lightweight container (so long as the objects it creates don''t have expensive startup?) For example in a test case. Rule of thumb: over 2 seconds is *definitely* not lightweight IMO. If you notice it starting up (even in every test method) it''s not lightweight...

    Amusing title, but I think it''s pretty obvious that there are quite straightforward ways to define what is and isn''t lightweight...

    Btw the contention that leading lightweight containers (presumably you mean Spring) "stopped being lightweight a long time ago" makes sense only if you consider the totality of what they do today, and totally ignore how they do it. As I pointed out, the IoC+AOP stuff does not depend on any of the third party integrations, data access etc etc etc. I''m sure this is true with HiveMind also. It''s even more explicit in the design of Pico/Nano/etc.

    Regards,

    Rod'
  replies: []
- id: 1604
  author: Rod Johnson
  date: '2004-05-14T02:03:19'
  content: We have a few users using Spring IoC in applets (yes, people still write them...), using our fine-grained Jars. Does this mean we can call Spring "lightweight"? I think at least one of those guys is also using AOP features on client side, although I'd have to check on that detail.
  replies: []
- id: 1605
  author: Steve
  date: '2004-07-13T11:42:58'
  content: 'Rod. Great points. Startup time really is the killer when it comes to unit testing, besides ease of use. As much as I''d love JBoss to be a lightweight container, it''s not quite there yet. It can be lightweight-ish, but it''s not something that is easily contained within a JUnit test.

    Steve'
  replies: []
- id: 1606
  author: Cliff
  date: '2004-08-02T10:27:24'
  content: I'm of the belief that Lightweight is something that is easily embedable (can be executed inline in your app), does not have many requirements, and does not have many classes. For example HSQL can be considered a lightwieght DBMS because it doesn't have any external req's it can be run directly within your app, and the jar is quite small. The Spring jar is still under a MB and can also be used easily from within your app. Jetty is the same. Something like JBoss has many depandancies and. For example you cannot "java -cp jbosss.jar com.my.App" and "jbossCompnent.methodCall()" and be done with it. IoC containers allow youuu to use the container in whole/ in part/ not at all as necessary. JBoss imposes a programming model that is way too intrusive and why am I even bantering on this blog... Anyway...
  replies: []
---

I am getting tired of hearing "lightweight" tagged to the description of every piece of software that comes out.  "Lightweight" has to be the most underrated buzzword of the year.  Well, not any more.  I hereby nominate "Lightweight" (and its evil sibling, "lightweight container") as a buzzword.  Consequently, it should be reserved to PR releases and be banned from the vocabulary of anybody who claims to possess a minimum amount of technical knowledge.

Lightweight containers are all over the place these days, and you won't get the attention of the community if your framework weighs more than a certain number of pounds.

What cracks me up is that most of these frameworks have been in the making for quite a while and they stopped being lightweight a long time ago, but since the concept is totally undefined (hence its qualification as a buzzword), nobody will ever contradict you if you say your framework is lightweight. 

I don't know about you, but I can't wait to be using an IDE that asks me if I want to create a "Lightweight / Mediumweight / Fatass project".  Then it would monitor the number of classes/methods/keys that I type and if I pass a certain limit, it would show up a dialog box saying "Sorry, you selected a Lightweight project and the variable you just declared is turning your project into a Mediumweight one.  Please delete all your files, close this project and create the right kind, this time.  Moron."
