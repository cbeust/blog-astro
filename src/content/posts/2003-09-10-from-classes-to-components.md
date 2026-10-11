---
title: From classes to components
date: '2003-09-10T09:12:10'
slug: from-classes-to-components
categories:
- Uncategorized
comments:
- id: 500
  author: Howard M. Lewis Ship
  date: '2003-09-10T11:13:03'
  content: 'While I was reading the original article, I realied that Tapestry''s listener methods are, essentially, C# delegates in disguise.

    At one time, Tapestry (like Swing) used inner classes to handle this function ... and it bugged me that it there was a fifteen to one ratio between the amount of code for handling a Tapestry "event", and the amount of application-specific code.  The listener method approach, like delegates, brings it back to about 1:1.

    Java could add syntactic sugar for this concept quite easily, especially with the new features in 1.5.'
  replies: []
- id: 501
  author: Jason Carreira
  date: '2003-09-10T11:29:27'
  content: I must say I'm not really familiar with delegates, but check out Xwork, the command framework at the heart of WebWork2. It allows you to map an Action to any method on your Action class and apply interceptors and results to it...
  replies: []
- id: 502
  author: Chris Nokleberg
  date: '2003-09-10T11:44:12'
  content: http://sixlegs.com/blog/java/delegates-history.html
  replies: []
- id: 506
  author: All Things
  date: '2003-09-10T13:01:54'
  content: '<strong>Components</strong>

    Cedric posted another interesting entry on components today which, in conjunction with a discussion that a friend I had, got me thinking again about what can be done to make programming with components more common. One of the things which...'
  replies: []
- id: 503
  author: Carlos E. Perez
  date: '2003-09-10T15:18:42'
  content: '"Components are Like Runtime Classes"

    http://www.manageability.org/blog/stuff/components_are_runtime_classes'
  replies: []
- id: 504
  author: Dave I
  date: '2003-09-11T07:14:42'
  content: '> "Delegates go one step further:  they don''t require type conformance but only signature  conformance.  This design choice reopens the age-old debate about static versus dynamic binding"

    Debate about static versus dynamic binding? - I think you are confusing terms. Static binding ofers performance AND dynamic binding ofers polymorphism.

    Java offers both: public/protected methods & private  methods.

    I think you mean the age-old debate about strongly

    typed languages versus weakly typed: Java (Eiffel etc)  V.S. Smalltalk (no type).

    Dave'
  replies: []
- id: 507
  author: sebastian's weblog
  date: '2003-09-11T10:06:12'
  content: '<strong>On Components</strong>

    Read three articles / blog entries on components today: <a href="http://www.manageability.org/blog/stuff/components_are_runtime_classes" rel="nofollow ugc">"Components are Like Runtime Classes"</a> by <a href="http://www.manageability.org/Members/ceperez" rel="nofollow ugc">Carlos E. Perez</a>'
  replies: []
- id: 505
  author: is zone diet safe
  date: '2004-11-04T13:11:35'
  content: 'Hi - I was looking for some political sites with articles on the recent US election and found your nice site. The comments from others on here are pretty good so I just thought I''d add my thoughts also!

    Elaine Cooper'
  replies: []
---

After Holub's nonsensical article about getters and setters, it's quite a relief to read [Anders Hejlsberg interview](http://www.artima.com/intv/simplexity.html), especially since the C# architect is basically saying the exact opposite of what Holub tried to say.

Anders emphasizes the fact that nowadays, developers need to think less in terms of classes and more in terms of components (another debate that has recently flared up in the Java community).

The way I see it, Components are a superset of Classes.  What exactly differentiates components from classes is open for interpretation, but I like Anders' simplification:  while classes are about properties and methods (PM), components are defined by PME:  properties, methods and events.

This observation makes both Properties and Events prime citizens of the Component programming model, which explains why C# supports both of them natively, while Java achieves this through interfaces (another language that has native support for accessors but not events is Ruby).

I, for one, really wish that Java had native support at least for accessors, so that we can finally drop the confusing "A read-write property is defined if the Java class has two methods, getFoo() and setFoo().  In this case, the name of the property is that of the method where you remove "get" and lowercase the first letter of the remaining name".  Yikes.

Another topic that Anders discusses in this interview is delegates.

Ever since Microsoft's initial attempts to add delegates to its own Java Virtual Machine, Java developers have had a very strong bias against this concept.  While creating an incompatible JVM is indeed something that should be fiercely condemned, it's a shame that the concept of delegates was thrown away with it, because it makes a lot of sense in a language such as Java.

Anders gives several reasons why delegates are a good idea, but to me, the one that's most important is that delegates allow you to keep the amount of classes and interfaces to a reasonable level.

Every Java developer who has written Swing applications (or any GUI, for that matter) knows how Action objects quickly proliferate, making the whole architecture hard to follow, not mentioning the number of objects that get created just so that a callback method can be invoked.

Delegates allow you to tie an Action to one single method.  No new interface or new class is needed.

Delegates go one step further:  they don't require type conformance but only signature  conformance.  This design choice reopens the age-old debate about static versus dynamic binding, and more particularly, begs the following question:  if two methods have the exact same signature but belong to two different classes, are they semantically equivalent?

My experience is that in practice, it's something that doesn't really cause problems (I usually make a similar observation about untyped Collections and the fact that in practice, the downcast is rarely a source of ClassCastExceptions).

Anders makes some other excellent points, such as the performance gain of a delegate versus a direct method invocation, or his interesting take on what he calls "simplexity".  Read the interview for more details.
