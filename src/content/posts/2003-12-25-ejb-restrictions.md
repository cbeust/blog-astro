---
title: EJB restrictions
date: '2003-12-25T08:20:27'
slug: ejb-restrictions
categories:
- Java
comments:
- id: 728
  author: Euxx
  date: '2003-12-25T13:47:41'
  content: '<strong>Threads in EJB container.</strong>

    Cedric posted a  few comments  to the Bob''s post I  mentioned before . He is most concerned about creating new threads by the applications in J2EE container. I can''t agree more on that, however there are major vendors who are enforce to break this. I mean'
  replies: []
- id: 722
  author: Cameron
  date: '2003-12-25T18:55:52'
  content: Keep it in a HTTP session? First, no servers provide reliable session management (I can give plenty of examples that would be embarassing to 95+% of the J2EE app server market,) and sessions are definitely not transactional. That's assuming you can use them at all -- since they are not portably "visible" to the EJB tier and not all applications even have a web tier. Keep it in a stateful session EJB? And how do you get / manage that one? Let me guess, a handle that the client passes in? I mean, you have to have some way to find it on all subsequent invocations, right? There is no logical bootstrap to the EJB container. The specification must have been designed by people who had little or no practical application development experience, and it shows. I know you won't agree, since you work for the most successful EJB container vendor, and since you build the container and not the applications that are forced by all manner of hook and crook to run within it, but even your beloved
    WebLogic (my personal favorite EJB container) is badly and obviously hobbled by the short-sightedness of the specification. Peace. ;-)
  replies: []
- id: 723
  author: Pinocio
  date: '2003-12-25T22:30:21'
  content: 'One of the problems with static data in stateless EJB is that it is very dangerous to return it to the client if another thread can modify it. For example server-side cache. Usually, container "serialized" the object for its own protocol, for instance, IIOP, but for that it often requires access only in one reading thread. If another thread starts writing something in to the static data, the process responsible for marshalling throws a sort of ConcurentModificationException.

    I absolutly agree with Cameron that this is huge gap in J2EE spec. You cannot imagine what hacks I saw for implementation of such things as clearing cach in all containers in the cluster...'
  replies: []
- id: 724
  author: Bob Lee
  date: '2003-12-26T08:10:45'
  content: 'Actually, I don''t think you need to "bend the rules." I also don''t think there''s a problem with the EJB specification.

    The rules I quoted are clearly meant for Bean Providers (those solely responsible for business logic). The rules make sense in this context because you should almost never store business data in a static (multiple copies per application, non-transactional, etc.).

    The problem is that the real world is not that black and white. Sometimes application developers need to develop services to support their business logic, as in the example I provided.

    The rule doesn''t mean "never use statics in an EJB container." It simply means "don''t store business data in statics."'
  replies: []
- id: 725
  author: Dan Weinreb
  date: '2003-12-26T21:43:04'
  content: 'It''s hard to be sure what the "best" solution to the problem is.  I''m not quite sure what the developer was really trying to do (and I''m not an EJB expert by any means).  Why are so many stateless session beans being created at startup, that all do the same expensive computation?  What happens after startup: does the result of the expensive computation continue to be useful later?  That is, is this basically a caching scenario?  Can anything happen to invalidate the cache (thus creating synchronization issues)?  What is the proper EJB "design pattern" to do a one-cache-per-JVM?  And, as Cameron says, if you don''t use statics, how does an EJB locate the cached copy that is in its own JVM? I''m not sure whether the answers to these questions depend on whether the data is "business data" or not.

    It''s hard to see that using an HTTP session is really an answer, although my reasons are different from Cameron''s.  The question is how to do a certain thing with EJB''s.  There might not BE any HTTP session involved.  We''re starting with some EJB''s that were written in a straightforward way that follow the letter of the rules but are too slow, and we want to optimize them: it seems like there ought to be a solution within the EJB tier.'
  replies: []
- id: 726
  author: Alex
  date: '2004-01-08T03:09:53'
  content: 'One related question that I''m still not 100% clear on: is it ok to start a new thread in a session bean method if you DON''T want the new  thread to participate in the transaction, or have the security credentials, of the original thread - if you in fact want it to act as a new EJB client? (Obviously it then wouldn''t have an external user and would have to use the security credentials of some "system" user.)

    I''d appreciate any thoughts on this from the EJB experts around here. Also, if it''s not ok to do this, is there any spec compliant portable way to do it?'
  replies: []
- id: 727
  author: test
  date: '2004-02-27T18:16:25'
  content: blaj
  replies: []
---

Bob explains the [ reasons behind some of the restrictions of the EJB specification](http://crazybob.org/roller/page/crazybob/20031223#ejb_is_not_magic).  While it is certainly healthy to understand the rationale behind these kinds of decisions, Bob omits a very critical piece of information when he advises that these rules can be bent when you know what you are doing:  these restrictions are also used by the container.

For example, the fact that EJB's are not allowed to create threads makes it possible for the container to attach important information to ThreadLocal (such as clustering, transaction, security, etc...).  After reading Bob's article, you might decide that since your application will only ever run in a single JVM, you can safely violate the rule and create threads in your EJB.  But by doing that, you are going to break the container in disastrous ways.

Bob gives the example of an over-zealous architect who decided to follow the rule literally but by doing so, introduced a big performance problem in the application.  This is indeed unfortunate but there are better and more standard way to address this problem than by using a static (the two most obvious ways are to keep this information in the servlet session, or maybe a Stateful Session bean, if your application doesn't have a Web tier).

That being said, Bob's entry is a must-read for anybody who has ever wondered where these odd limitations in the EJB specification came from.
