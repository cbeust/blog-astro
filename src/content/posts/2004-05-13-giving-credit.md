---
title: Giving credit
date: '2004-05-13T09:34:30'
slug: giving-credit
categories:
- Uncategorized
comments:
- id: 1623
  author: Vincent Massol
  date: '2004-05-13T10:51:57'
  content: Talking about IoC credit, I feel the Apache Avalon guys are not often mentioned but for me it all started there. AFAIK, they were one of the first project promoting IoC strongly with a supporting framework.
  replies: []
- id: 1624
  author: metaele
  date: '2004-05-14T01:11:44'
  content: 'Call it conspiracy if you may. But as a newbie who has been watching j2ee space with interest for quite some time, I would say this is not suprising. Even the earlier post on lightweight containers.Apparently IOC container guys are the only ones who wants credit but i don''t think that is the case.i think there are other people who are calling for that. I read Ted neward''s blog just to mention a few, a few days ago and what he basically says is that to really get EJB 3.0 you should have a look at "Spring" and hibernate. Now which one came 1st Spring or EJB 3.0?

    So i think you guys just dont want to give credit to things like Spring bcos some other newbies like me or other people who have not given spring a run would say "Hey wait a minute! what''s this spring/pico there are talking about that can even have effect on specs? Can you find out about it?".

    The thing then would be that if they have a close look at spring/pico/HM e.t.c they may never go back and by the time the EJB 3.0 they would not care less as they would have found a solution to their problems(E.g declarative transactions without EJB: By the way i started them a few weeks ago and they rock!!).

    Continuing with my "conspiracy theory", hibernate is mentioned bcos

    1. i think it''s now widely used and you can no longer ignore it.

    2.It''s now part of an EJB server company.

    Actually Aslak has just given a very good reply here: http://www.theserverside.com/news/thread.tss?thread_id=25896#121935.

    So i personally, this lightweight container talk, who wants credit what, what and so forth does falls into something that i have kinda expected.

    Give credit at your own risk!!'
  replies: []
---

[ Aslak](http://blogs.codehaus.org/people/rinkrank/archives/000715_ejb3_red_herrings.html) is not the first one wondering why the EJB3 Experts Group is not giving credit where credit is due.  I have heard this quite a few times since last week, although to be honest, the complaints were only coming from the people who thought they should be credited, so they're probably not the most subjective people either anyway...

First of all, I'd like to dispel the conspiracy idea (very popular these days).  There is absolutely no conscious intent from the group or from its members to avoid giving credit where credit is due.

Second, there is a difference between inventing a concept and popularizing it, but there is no question that both deserve credit.

When the first suggestions of dependency injections surfaced on the Experts Group, I didn't immediately make the connection with existing IoC containers because

  * These proposals were natural extensions of the EJB2 model (ejbCreate() is a pretty good example of inversion of control:  you are telling the container to invoke you whenever it wants to initialize your bean).  
 
  * They were innovative in their own right (as far as I know, EJB3 is the first one to use annotations to enable dependency injection, an approach I like a lot and that I'll blog about in a near future).



Innovation happens all the time in software and except for a few very rare exceptions, it's usually very hard to tell who invented what, but we certainly know of a few names who are strongly associated to certain ideas (and Aslak is certainly on my list in the IoC category).

So apologies if a few feelings were hurt, but there is not much we can do about this and we certainly had no intention to offend anyone.
