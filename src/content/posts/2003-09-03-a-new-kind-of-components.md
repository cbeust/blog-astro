---
title: A new kind of components
date: '2003-09-03T10:05:02'
slug: a-new-kind-of-components
categories:
- Java
comments:
- id: 450
  author: Lance
  date: '2003-09-03T11:23:18'
  content: '"Roller (has) a fundamental design flaw that prevents them from scaling" - that was true.  In the not-yet-released version this has been addressed.  Not to say there aren''t more lurking, though.'
  replies: []
- id: 466
  author: All Things
  date: '2003-09-03T12:50:39'
  content: '<strong>Re: A new kind of components</strong>

    Cedric weighs in  on  Joe''s editorial .  Cedric believes that we are already seeing "components" just not in the form which we exepected.  I think we are seeing services but not components.  A service is provided by a contain... [Technology, 1370 chara...'
  replies: []
- id: 451
  author: Mark Griffith
  date: '2003-09-03T15:41:09'
  content: I wonder how much the translation will be from components to "services" and the whole "service oriented architecture"? Mabye this is just scemantics and they are they same but at different levels of granularity.  I wonder if services will have more re-use than components?
  replies: []
- id: 452
  author: Dilip
  date: '2003-09-03T18:36:39'
  content: The analogy about Integrated Circuits was also echoed by one Mr. Don Box a couple of months ago when delivering a seminar about SOA.  If you want I can whip out the video clip of the talk.  But you'd have to download Windows Media Player.. would you do that? ;-)
  replies: []
- id: 453
  author: Craig Pfeifer
  date: '2003-09-03T21:25:31'
  content: 'IMHO, the only difference between "components" and "service oriented architecture" is a layer.

    Components are used to build the SOA. SOA is a collection of coarse grained methods (typically in the context of web services, but not exclusively) that fulfill a well defined bit of business functionality.

    Saying that SOA will replace components is like saying OO will replace procedural programming. OO is widely adopted and yet we still have iterative loops, conditional logic, subroutines and all the other stuff from procedural.

    It''s all about layers.'
  replies: []
- id: 454
  author: Sathish
  date: '2003-09-03T22:35:24'
  content: 'The idea that J2EE provides lot of reusuable components like transaction, remoting etc is not actually components, it''s just services provided by the Container. I want components in true business components (visual drag and drop). Java components currently are in state where C++ class libraries (MFC etc..). It did provide re-usuability but no where close to VB.

    I want VB like environment. Business selling components which i can buy and glue and create application rapidly which will bring Java to everybody (small buisnesses to casual developers)'
  replies: []
- id: 455
  author: Craig Pfeifer
  date: '2003-09-04T05:40:33'
  content: 'Sathish > Business selling components which i can buy and glue and create application rapidly which will bring Java to everybody

    This was the original intent of EJBs when you read the spec. The EJB author writes the bean and exposes config params via the deployment descriptor. The EJB deployer then takes the beans and customizes them at deployment time via the descriptor. And then Flashline.com was supposed to provide the component bazaar where folks could buy/sell these components. But it never really came to pass.

    I don''t know whether to blame EJB for producing an awkward component model, developers for misappying EJBs or Java tool vendors for not producing tools to support "a VB flavor of Java."'
  replies: []
- id: 456
  author: Tom Cox
  date: '2003-09-04T14:51:01'
  content: I'm sorry, but are there a lot of M$ components out there that fit the description of the original author?  I'm not talking about visual ui components.  The author gave the example of an Order management component.  Is someone selling those for platforms other than Java?  I don't think so, unless you count such features in packaged ERP software.  I don't count those, because they are not sold as components and because they usually require so much customization that they don't qualify for the drag and drop requirement.  Java isn't any worse in the business process component market than any of the other platforms.
  replies: []
- id: 457
  author: Gavin
  date: '2003-09-04T21:37:54'
  content: 'Ah just a correction: I have never had anything to do with the FreeRoller code and have never looked into why there are scalability problems that other Hibernate apps don''t suffer from. I believe that other people had a look and noted that FreeRoller was using Hibernate sessions completely incorrectly.

    Other Hibernate applications have not reported scalability problems.

    I''d appreciate if you posted this correction.

    TIA.'
  replies: []
- id: 458
  author: Gavin
  date: '2003-09-05T02:17:01'
  content: 'Okay, so I finally *did* have a look at the roller source. I have posted a list of "problems" to roller-development list. There are some potentially huge performance killers there, like not using JCS caching _at_all_, and never using proxies.

    I''d say that roller is not really looking like a hibernate app. It is still a castor app that is using hibernate.'
  replies: []
- id: 459
  author: Jimmy
  date: '2003-09-05T20:52:09'
  content: 'Hibernate does have performance problems. Micro benchmarks, and trivial web applications aside, Hibernate cannot point to a true enterprise product that requires massive scalability.

    I will say the API is pretty good, however.'
  replies: []
- id: 460
  author: Gavin
  date: '2003-09-07T16:46:46'
  content: 'What about ifilm.com, one of the top ten streaming media sites on the web, who are using Hibernate?

    I get emails every other day from people who ported EJB applications to Hibernate and achieved order of magnitude performance improvements.

    What "performance problems"? Apart for Roller, -you- can''t point to a single Hibernate application which -does- have performance problems.

    Of the thousands and thousands of posts in our user forum, not -one-single-thread- relating to performance was not easily fixed by explaining to the user how to do things properly.

    So so much for you, "Jimmy".'
  replies: []
- id: 461
  author: Jimmy
  date: '2003-09-08T14:51:40'
  content: 'I wouldn''t call iFilm "enterprise scale".

    We tried using Hibernate for a real enterprise real-time and batch processing application and it fell short. We spent a fair amount of time looking at the causes of the poor performance and decided it would be too difficult to fix. Yes, we were using Hibernate correctly, we even tried the parts that were implemented incorrectly (JCA).

    Depending on the EJB architecture, it''s very believable that porting to Hibernate would increase performance.

    Maybe the reason I can''t point to public products that use Hibernate and have performance issues because the development team just pulls the plug on Hibernate and moves on to a better performing solution.

    Like I said, Hibernate will probably work fine for web-app type non-enterprise stuff.

    btw, "So so much for you, Jimmy" makes you sound pretty bitter. You need to distance yourself from your invention a bit; not everyone is going to agree with you all the time.'
  replies: []
- id: 462
  author: Geoffrey Wiseman
  date: '2003-09-09T13:36:19'
  content: My experience says that many EJB entity implementations (I haven't used them all, of course) are markedly slower than Hibernate and that Hibernate is not likely to be a serious performance barrier.  That said, my use of Hibernate has, thus far, been on relatively painless applications that didn't require massive loads, and thus, I can't speak directly to that.
  replies: []
- id: 463
  author: saravanakumar
  date: '2004-02-09T15:03:49'
  content: is castor a beter performmer than hibernate?
  replies: []
- id: 464
  author: amira
  date: '2004-11-30T10:27:20'
  content: 'hi

    i want to have a comparaison between hibernate and ejb. i''m bored and know what making. i had an expose about hibernate monday and the professor doesn''t like

    our research because it di not contain this comparaison.

    i want references wrote by Mr Gavin King.

    please help me

    the professor want an example that uses Hibernate and ejb

    thanks and excuse my bad english because my second langage is the french

    thanks'
  replies: []
- id: 465
  author: Faisal Taimoor
  date: '2006-12-18T14:47:16'
  content: hey lot has changed since November 30, 2004 10:27 AM , castor has changed and hibernate has changed more than castor with ejb3 specification implementation available in market , hibernate is more of a monster from JBOSS as it handles all the persistance on JBOSS software platform and while the intake from Red Hat Inc of JBOSS I think that has proved the durability of JBOSS products.
  replies: []
---

In "[Where are the components](http://sys-con.com/java/article.cfm?id=2195)", Joseph Ottinger makes some interesting points about the absence of reusable components in the Java land.  In many ways, I share his concerns and I said so in a [previous entry](http://beust.com/weblog/weblog/archives/000016.html).  However, there are a few inaccuracies in his editorial that I'd like to address.

Joseph says:

> EJBs were the answer to distributed computing, with a promise of massive scalability. 

That's not at all what EJB's were supposed to be, nor what they promised.  Initially, the EJB specification defined a component model, and nothing more.  Granted, it was ambitious, as it tried to address several "fringe" issues as well, such as security, remotability and persistence.  The specification made a few initial errors in its first revisions, which are now addressed for the most part.

I do agree with Joseph about Stateful Session beans, which qualify as a failed experiment in my book as they are bested by servlet sessions, but the following statement needs some precisions:

> Sure, you can get some of their promise out of session beans, and message-driven beans are easily my favorite aspect of the EJB spec, but getting good performance out of stateful beans or entities can be a fine art in and of itself. 

It's true that writing Entity beans that scale requires some expertise, but then again, scalability is a complex problem.  No technology will give you this feature for free.  Blaming the EJB specification for this is unfair.

Let me turn to a quick example to illustrate my point.

Those of you who are aware of [FreeRoller](http://freeroller.net) already know about this.  FreeRoller still has massive scalability problems and the hardware and the bandwidth can no longer be the culprit.  This leaves two possibilities:

  * Hibernate and/or Roller need to be optimized.
  * Hibernate and/or Roller have a fundamental design flaw that prevents them from scaling.



A few very good developers (including Gavin) have been investigating this issue but so far, the results were inconclusive and FreeRoller is still showing dire scalability problems.

Now don't get me wrong:  I love Hibernate and I think it's a piece of software that will pave the way for future persistence frameworks, but right now, it is showing that scaling and relational persistence are two goals that are extremely hard to achieve together.

I contend that EJB's enable this goal, as many WebLogic customers can testify.

But don't let this distract you from Joseph's article, which makes good points about the absence of real Java components.  This problem is not new and I read about it for the first time in 1994 in Oliver Sims' seminal book "[Business objects](http://www.amazon.com/exec/obidos/tg/detail/-/0077079574/qid=1062607142/sr=1-3/ref=sr_1_3/102-2472881-6121768?v=glance&s=books#product-details)".  CORBA took a shot at it back then, but didn't go very far.

Now here is a thought:  what if the components were already here, but we're not seeing them because they adopted a shape we are not expecting?

Think about it.

When a corporation buys Microsoft Word, they do it for the end user application in the first place.  The fact that they suddenly have all these powerful COM components at their disposal is just a by-product of this choice.  It's not advertised, nor does it represent the main use of the software, but it gets used nevertheless.

Let's turn to J2EE application servers now.  Aren't they the epitome of component reuse?  When you write a J2EE application, you are reusing a staggering amount of components that have been written and packaged for you by experts:  web, database, remote access, transaction, security...

These are components right there.  Not the kind that Oliver Sims envisioned, but components nevertheless.

Components are happening.  Slowly, but surely and pervasively.  J2EE application servers provide us the equivalent of integrated circuits for the electronic world:  well-defined blocks of functionalities that developers can build upon to raise the level of abstraction that they provide.  We have the plumbing and we are now progressively building the house around it.

And J2EE is the main enabler for this amazing phenomenon.  I can't wait to see what the business world will look like in ten years from now...
