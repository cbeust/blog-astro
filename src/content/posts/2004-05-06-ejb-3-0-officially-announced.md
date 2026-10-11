---
title: EJB 3.0 officially announced
date: '2004-05-06T19:18:22'
slug: ejb-3-0-officially-announced
categories:
- Java
comments:
- id: 1571
  author: Eric Ma
  date: '2004-05-06T19:28:36'
  content: A great victory for JBoss and Marc Fluery.  Gavin King has also gained the statue of a saint.  Impact on BEA - market share erosion :-(
  replies: []
- id: 1572
  author: G Hermitage
  date: '2004-05-07T00:38:23'
  content: '"Impact on BEA - market share erosion :-( " - Eric Ma.

    How does this influence BEA''s market share? Won''t they just implement EJB 3.0 like every other J2EE vendor?'
  replies: []
- id: 1573
  author: Hem
  date: '2004-05-07T03:42:28'
  content: This is the death of Hibernate, isn't it?
  replies: []
- id: 1574
  author: Gilles Philippart
  date: '2004-05-07T05:54:23'
  content: Hibernate can also work in a 'local' environment (outside the container) like in a client/server desktop application. Does EJB O/R Mapping feature allow such setup (acting like a lib) or is it bound to the J2EE app server ?
  replies: []
- id: 1575
  author: Brian Repko
  date: '2004-05-07T06:03:30'
  content: 'JSR-175 vs deployment descriptors is not an either or - if you get components from someone else you need somewhere (outside of source) to configure the components.  You need to have both and if they throw that away, then it will be pointless.

    I still think that EJB 3.0 will require a better JavaBeans model (for relationships) and JMX/JSR-175 annotations and then they can get into this.'
  replies: []
- id: 1576
  author: Felicity
  date: '2004-05-07T12:39:27'
  content: Seeing Hibernate as a threat the powers that be decided to co-opt it, and kill it... Gavin is comprador.
  replies: []
- id: 1577
  author: greg
  date: '2004-05-07T12:40:46'
  content: 'Eric, positively stupid comments (and not germane to Cedric''s blog entry to top it off). I can recall Linda saying "deployment descriptors must die" at least two years ago, long before bastardizing AOP was on the JBoss agenda.

    Greg'
  replies: []
- id: 1578
  author: Eric Ma
  date: '2004-05-07T13:19:06'
  content: 'Well, I don''t know what Linda said or not said 2 yrs ago, but I do know that EJB 2.1 that came out last year did not get rid of DD''s, nor the remote/home interfaces, and no metadata tags or dependency injection were introduced.  It was JBoss (read Fleury), having Gavin on board, who finally pushed the sucker over the hump.

    Why did I say BEA will lose market share (even with Cedric enthusiastically applauding EJB 3.0)?  Because EJB 3.0 entity bean is essentially Spring+Hibernate.  Today people are developing/deploying with Tomcat+Spring+Hibernate free of charge, why do they have to pay BEA big bucks for the same feature?  For legacy EJB 1.x/2.x compatibilities only?  Also, Marc Fleury is no dummy.  If he pushes something, it has to benefit JBoss more than the others.'
  replies: []
- id: 1585
  author: Saroj's Blog
  date: '2004-05-10T09:03:28'
  content: <strong>EJB 3.0 Spec is getting finalized</strong>
  replies: []
- id: 1579
  author: Sivagopal.B
  date: '2004-05-12T21:45:56'
  content: Found good in getting a huge useful information keep sending me the updates of EJB3.0 and updated tutorials if any
  replies: []
- id: 1580
  author: PK
  date: '2004-05-18T05:23:22'
  content: 'Eric, Enterprise customers (read customers with money in the bank) will still need enterprise (read robust, secure, scalable etc) platforms such as WebLogic.

    The rest is better of with JBoss et al.

    my 2c'
  replies: []
- id: 1581
  author: Frauke
  date: '2004-08-23T06:39:04'
  content: Great site, well done. I enjoy beeing here and i
  replies: []
- id: 1582
  author: Rupert
  date: '2004-12-15T08:13:57'
  content: End of Hibernate + Spring? Since they are ahead in this field, having basically thought up EJB 3.0, can't they now be the first to put out an EJB 3.0 compliant server and go into direct competition with BEA, Jboss, and all?
  replies: []
- id: 1583
  author: B.Sivagopal
  date: '2005-04-24T05:27:26'
  content: Hibernate+Spring gives a very good and scalable solutions in Tomcat, so we do not need to go for EJB3.0 since it needs a big hanging transactional awareness.
  replies: []
- id: 1584
  author: Sivagopal.BALIVADA
  date: '2006-06-27T04:25:10'
  content: the overhead of writing deployment descriptors is reduced in EJB3.0, and writing Beans is as simple as that we need not have to worry about home and remote references...the usage call back methods also nolonger required..altogether..EJB3.0 is a jargon..But what about Object relational mapping..how it is worth than Hibernate..?? if anybody have idea..do reply..! !
  replies: []
---

Linda de Michiel, EJB 3 spec lead, just finished her presentation of the EJB 3 work at TheServerSide symposium.  The Experts Group has been very busy these past nine months and considering the enthusiastic response of the audience, it's been time well spent.  Here are the salient points of the new specification.  
  
The focus of EJB 3 is ease of development.  Session and Message-Driven Beans will also benefit from this simplification, but I think the most interesting developments are for Entity CMP beans.  EJB3 has learned a lot from the previous version and is taking ideas introduced in Hibernate and other persistence framework to come up with a brand new programming model featuring:  


  * POJO-based (no more abstract methods, support of new)
  * Simplification of the design (now optional:  homes, component interfaces, lifecycle methods, no more EJBLocalObject, etc...)
  * Use of injection to make it easier to test outside the container
  * Use JSR 175 annotations instead of deployment descriptors
  * Support for disconnected access
  * Many EJB QL enhancements (bulk updates, etc...) as well as support for native SQL
  * A standard O-R mapping

I am positively thrilled by the direction EJB3 is headed.  The Experts Group has been extraordinarily active these past nine months and the activity on the phone calls and on the mailing-list is a testament to the commitment of the 20+ members to this task.  Of course, there are still quite a few undecided issues, but the major items are pretty much agreed upon at this time.  
  
I think EJB3 has the potential to solve the problem of persisting Java objects to relational databases once and for all.  It took a while and a lot of errors, but we are finally getting there.  
  
The EJB 3.0 BOF session tomorrow night will be a great opportunity for us to hear more feedback from the community.
