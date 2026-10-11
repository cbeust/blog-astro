---
title: Useless methods
date: '2004-05-17T10:39:46'
slug: useless-methods
categories:
- Java
comments:
- id: 1635
  author: Robert Watkins
  date: '2004-05-17T13:34:12'
  content: 'You can also like at an inverse-Builder pattern; get the class to define an interface of getters, then pass an instance of that interface into the class and have it call the getters instead.

    Not Javabeans-ish, but good for non-reflection-based code.'
  replies: []
- id: 1636
  author: James Strachan
  date: '2004-05-17T22:23:23'
  content: Cedric, this seems to be one of the best arguments for using constructor-based dependency injection I've seen :)
  replies: []
- id: 1637
  author: Ben Hogan
  date: '2004-06-02T07:23:50'
  content: 'What is it about modifying your constructor to support injection that seems intrusive?

    Ben'
  replies: []
- id: 1638
  author: David Medinets
  date: '2004-09-03T11:04:05'
  content: I'm in favor of setter injection because I want my code to be independent of containers. I simply don't want my team of developers to learn a container API but I still want the improved testability and code decoupling associated with setter injection.
  replies: []
---

Having methods in a Java object that you will never invoke is a pretty obvious Design Smell.  It's already hard to keep the complexity of your objects in check when you limit yourself to strict business logic, so why would you add these useless methods on top of it?

Well, it's actually quite common in Java programming.  So common that you probably add such methods every day to your classes without even realizing it.

Some examples:  HttlServlet.doPost(), JMSListener.onMessage(), EntityBean.passivate(), etc...

Dependency injection is also a big offender in this area:  setter injection forces you to implement setters you will never invoke, and constructor injection makes you modify the signature of your constructors (which is even more intrusive in my opinion).

Alright, at this point you are probably rolling your eyes and dozens of objections are coming to your mind.  Fair enough, I agree that most of these methods actually provide important connection points between the container and your object.  When these methods are invoked, you are given a chance to execute some logic that can be very important to your application.

As a matter of fact, all the methods I have just mentioned enable this.  All of them except...  setter injection.

Setter injection is a way for the container to hand you some objects so you can store them and reuse them later.  The problem is, it's not the setter you are interested in, but the getter.  The typical implementations of an injected setter is to store the value in a field for later use.  You don't get more boiler-plate than this.

There are three ways to look at this problem:

  1. It's only a one-line method, it's not a big deal.
  2. Since the setter is useless, have the container perform field injection (possibly tagged by an @ContainerProvided annotation).
  3. Let the container implement the getter.



I wish there were one simple answer, but unfortunately, these three approaches all have pros and cons.  The one-line method can be seen as needlessly polluting your POJO class.  Field injection is a little less invasive but I'm not sure I like the idea that the container is messing with private parts of my object.  Finally, solution 3 sounds like the ideal solution (no pollution, no messing with private fields) but it requires either abstract methods or objects whose bytecode has been tweaked by the container, both of which make testability harder.
