---
title: Please don't seal your classes
date: '2004-04-17T11:28:51'
slug: please-dont-seal-your-classes
categories:
- Java
comments:
- id: 1443
  author: tjansen
  date: '2004-04-17T15:25:51'
  content: 'I think most classes have never been designed for being inherited. If the designer did not think about it and the possible consequences, especially for compatibility with future versions, it''s pretty dangerous.

    If you design a class for being inherited, you need to:

    - state which methods should be overridden together. e.g. a method may acquire a resource, and anther one frees it. If you override only one, the resource will not be freed. On the other hand, maybe you override it to avoid acquiring the resource, so you can''t call super(). This is very implementation-dependent and likely to cause problems later

    - make sure that there is no other code that explicitly assumes a certain class. E.g. some code may store the data from an object and re-create it later. If you used a sub-class for the object that you stored, the re-created class will be the original class and not your sub-class

    - always mention whether super() needs to be called or not. Super may do implementation-dependent things like logging. On the other hand, maybe you override it to prevent logging. Without proper documentation which describes what you need to do if you don''t call super() it''s likely to get it wrong

    The real problem, that you want to solve by not sealing classes, is to have some way extending a class if it does not fit your needs. But there is a *much* better way to do this: provide the source code.'
  replies: []
- id: 1444
  author: Cedric
  date: '2004-04-17T16:08:05'
  content: 'Providing the source code doesn''t solve anything except giving the possibility to the developer to change "private" to "public", which is exactly what they are going to do.

    Providing the source is a poor excuse for saying "I don''t care to design my classes for reusability so here, take these 10k lines of code and have fun.  Yeah me, I am reusable."

    Haven''t we learned anything from the Netscae and XDoclet fiasco?'
  replies: []
- id: 1445
  author: tjansen
  date: '2004-04-18T06:44:30'
  content: 'Providing the source

    - allows users to see how the class works. Otherwise trial&error is often the only way to find out how to extend it. Most classes that have not been designed for inheritance do not provide enough documentation

    - allows the user to copy the class and fork it, thus giving the user full control.

    - frees the original developer from the constraints that a inheritable class has. Once a class is deployed and users inherited from it, it is much more difficult to change the implementation without breaking compatibility. I''d guess the design and documentation of a class that allows inheritance while offering backward-compatibility costs at least twice the amount of work of a sealed class'
  replies: []
- id: 1446
  author: Sam Newman
  date: '2004-04-19T09:08:03'
  content: This is another one of those issues that have arisen partially due to Java's constant desire to try and stop you shooting yourself in the foot. Sure, some asshat could start overiding things he shouldn't (or more to the point in a way he shouldn't), but at some point we're going to have to accept that such people would be better off playing around with drag-and-drop development tools where they're less likely to hurt themselves. Hopefully once that happens we'll start getting some really powerful features in Java that Sun haven't put in for fear of us blowing up nuclear power stations or something (is dynamic typing too much to hope for?).
  replies: []
- id: 1447
  author: cupdike
  date: '2004-04-23T06:51:54'
  content: 'Ever try subclassing PrintWriter?  It can get tricky because of the way PrintWriter is implemented (you end up getting things printed twice if your not careful).  Two points:

    - it''s an example of how designing for extension is not always taken into account

    - I would have given up had I not had source code available to figure out what the problem was'
  replies: []
- id: 1448
  author: Chuck Schwartz
  date: '2004-04-23T07:30:00'
  content: On one of my projects we had to override an io class because we needed an instance to send to an XML parser based on our data which had its own start of file/end of file markers.  Even though well documented in comparison, we still had to override each and every method just to make sure our code would work properly.  This was especially true because we weren't sure how the parser would be utilizing an instance and which methods it might be calling.  Sure we might not have needed to override all, but how could we tell without doing some heavy testing (testing just to see what we needed to override let alone testing to make sure our overridden methods worked properly).  The push needs to be made for inheritance dependency documentation if classes need to be overridden.
  replies: []
- id: 1449
  author: Richard Brewster
  date: '2004-04-23T07:30:25'
  content: It is a vastly different if you are publishing Java APIs for use by developers outside your own group, than if your APIs are all internal.  For internal development, I make every class as final and private as possible, because the greater encapsulation makes the whole code base safer and more understandable.  If we decide to extend a class, we just change the design.  It's not a problem if you are Agile and have lots of unit tests.  But if you are publishing APIs for external groups, you have a much higher burden of stability, and change has to be tightly controlled.  But many open source projects do manage this just fine, because the source is open.  The worst case is supplying closed or obsuscated source for classes intended for extension by other developers.  About the only code like that which we ourselves use is standards, like J2EE APIs.
  replies: []
- id: 1450
  author: Jason Marshall
  date: '2004-04-24T10:45:27'
  content: 'A great example of this are the Collection classes.    Everyone I''ve run into who needed to do anything sophisticated with collections has been forced to implement their own from scratch, because the data flow is too obtuse, and they insist on using private methods everywhere.  Why so many people idolize Josh Bloch, I''ll never know.  Look.  Most people who would go to the trouble of trying to create a new type of collection class are probably intelligent enough to not screw it up completely.  Give us a little credit, here.

    My philosophy on the subject has evolved to this: If it''s not security related, don''t make it inaccessible or immutable to subtypes (ie, private or final methods).'
  replies: []
---

[ Ted is campaigning for the "final" keyword](http://www.neward.net/ted/weblog/comment.jsp?entryID=1082196226625):

> I'm sorry, but your comment "Run, don't walk, from any code developed by people who think this way _[Cedric:   people who want everything to be overridable by default]_..." is really appropriate for Smalltalk code, but wildly out of place for code developed for the JVM, the CLI, or the C++ programming environments. 

I disagree with Ted's firm stance on this issue.  While "final" has some very good niche uses, I contend that most of the code should be written as being inheritable by default.  As a developer, you just can't guess all the possible ways that future programmers will use your code.  Sure, they could misuse it and break it, but that's not your concern.  If your API is well documented (contract, side effects, parameters, etc...) and that a good developer then tries to extend it, they will come up with things that will probably amaze you.

That being said, I see "final" as being useful in core classes of the libraries, such as String.  For various reasons (security being one of them), such fundamental classes need to be free of tampering and extension.  That's perfectly reasonable.

But for any other type of "user code", please write your code assuming that one day, someone will want to override the method you are writing.  It will make you see your work in a very different light.
