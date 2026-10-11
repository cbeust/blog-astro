---
title: Annotations and Behavior-Driven Testing
date: '2005-11-17T08:00:01'
slug: annotations-and-behavior-driven-testing
categories:
- Java
comments:
- id: 4411
  author: Noah
  date: '2005-11-17T17:11:05'
  content: Hey, this comment isn
  replies: []
- id: 4412
  author: BoD
  date: '2005-11-18T02:17:54'
  content: 'Noah: check http://en.wikipedia.org/wiki/Otaku'
  replies: []
- id: 4413
  author: ''
  date: '2005-11-22T13:38:46'
  content: Otaku means geek.
  replies: []
---

I have been a long-time fan of annotations, and my devotion started with EJBGen (which was using JavaDoc annotations in 2001, imagine that!), followed by my involvement in JSR 175 and now, with TestNG.

Annotations make a lot of sense for a testing framework, but once in a while, I still hear a few people wondering if they are appropriate for this particular domain.  Not only do I have a few reasons to believe this, but interestingly, the latest emergence of something called Behavior-Driven Testing is making this point further.  Here's why.

JUnit requires your test methods to start with the word "test".  When you do this, you are actually adding information to your method, attaching the "metadata" (extra information) that it's not just a Java method:  it's a Java **test** method.  This is the very definition of "metadata":  data on top of existing data.  But what are you really trying to achieve?  You are flagging your method so that it can be found by JUnit.  If you think a little bit about it, this goal doesn't have much to do with the name of your method.

Here is another way of looking at it:  what if you are using a framework that, says, automatically generates RMI stubs for any methods that start with "remote".  How do you combine this with JUnit?  It's easy to see that this approach doesn't scale very far.

Recently, a practice called Behavior-Driven Testing (BDT) has received some publicity.  The idea is to use a different terminology for your tests, not only for your test method names, but also in the way you perform your assertions.  Here is an example:

> public void testAccountIsEmpty() {  
>    assertEquals(m_account.size(), 0);

Which can be rewritten as:

> public void accountShouldBeEmpty() {  
>    m_account.shouldEqual(0);

I'll save the discussion on the pros and cons of BDT for a future posting and observe that the idea of baking the "test" attribute into the method name breaks down for this approach, proving the point that the name of the method and what this method means to a particular framework are completely orthogonal ideas.

Of course, the corollary of this observation is that [TestNG](http://testng.org) already supports BDT :-)
