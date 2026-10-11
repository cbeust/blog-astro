---
title: 'AOP and annotations:  just say no'
date: '2004-05-14T10:25:11'
slug: aop-and-annotations-just-say-no
categories:
- Java
comments:
- id: 1625
  author: Hani Suleiman
  date: '2004-05-14T13:11:14'
  content: 'I''m surprised that people aren''t stressing the importance of defaults here.

    If EJB3 were nothing more than moving ''annotations'' from xml to source code, we haven''t really moved very far, and arguably have lost a lot since you''re now tightly coupled, with obfuscated sources to boot that mix concerns.

    However, defaults take care of that. For example, when you specify @Session, the spec will/should assume a whole buttload of defaults for a session bean (eg, stateless, local, tx-Supports, etc). Thus, minimal clutter.

    Couple that with the ability (I hope) of vendors to in turn supply their own defaults (specified external to source), as well as override values specified in the source (eg, entity table), and I think you end up with a pretty nice flexible system that still lets you view code, instead of fighting to find it in an annotations swamp.'
  replies: []
- id: 1626
  author: Gavin
  date: '2004-05-14T15:40:17'
  content: 'I''m not sure if people have recognized that using naming conventions like "setXXX", together with pointcut languages is just a kind of poor-mans annotation. The JavaBeans naming conventions were introduced precisely /because/ there were no annotations in the Java language at the time.

    If annotations are so evil, we should remove public/static/private keywords and replace them with a naming convention, like in Python'
  replies: []
- id: 1627
  author: John Davies
  date: '2004-05-14T18:20:00'
  content: 'My personal view is that we''re doing another full circle. Years ago we had C++, good pure C++ code is relatively easy to read and understand but add macros and operator overloading to "simplify" things and it quickly becomes efficient, tight code that only gurus can write. Sadly though it''s only the gurus that can read it, understand it and maintain it and they''re also going to cost the Earth to hire when things need to be changed.

    Remember what happened to C programmers when C++ gave them overloaded operators???  It was supposed to make code easier to understand and reduce the amount of code. It''s one of the best things we don''t have in Java, yet.

    Perhaps Marc was referring to "Automatic Obfuscation" when talking about "AO".

    -John-'
  replies: []
- id: 1628
  author: Matthew Payne
  date: '2004-05-14T20:31:27'
  content: 'I have an idea.  Instead of going around in a cirle like this, lets just hard code our connection strings right in our source code.

    I didn''t mind xml hell that much.  My editors give me dtd/xsd code completion.  I like being about to change settings without re-compiling.'
  replies: []
- id: 1629
  author: ''
  date: '2004-05-14T22:48:13'
  content: I pray the default won't be Tx-Supports as Hani suggested, cause then I'd have to change it *everywhere*.
  replies: []
- id: 1630
  author: James Strachan
  date: '2004-05-14T23:38:17'
  content: 'However we solve the annotations overkill issue, we need to take a hard look at it. If we''re not careful code is just gonna be chocked full of annotations - just like many peoples use of XDoclet is.

    Hopefully Hani''s right and we can have sensible defaults so that we use a single annotation like @Session and we don''t have to litter annotations on every method.

    I can''t help the feeling that we need macro support. So developers can define their own macros annotations which auto-default J2EE annotations. e.g.

    @StatefulLocalSessionNoTransaction class Foo {

    ...

    }

    This would be easy to do with AOP - use AOP to spot user specific annotations & introduce all the J2EE annotations in the bytecode.

    Gavin: Noone''s saying annotations are evil here - we''re just discussion ways of avoiding pointless annotations. A great example is getters and setters. They''ve been so common in Java for years and years now that they are a given. Introducing an anotation for getters and setters effectively breaks backward compatibility and makes code more verbose for no real gain.

    So a more sensible approach would be to introduce an annoation to disable the default introspector & overload the default introspector (either on a class level or getter/setter level).'
  replies: []
- id: 1631
  author: Rickard
  date: '2004-05-15T00:31:22'
  content: 'I agree with James'' last comments. On the one hand people are saying "as long as there are good defaults it''ll be fine", and on the other "using AOP to apply annotations is evil". What most don''t seem to realize is that AOP is a good way to apply those defaults. For example, if all *Impl classes are sessions, and all *Bean classes are entities, why not use an AOP pointcut to introduce those annotations as defaults? Aspects, or services, using the annotation does not have to care *how* that annotation got there, but only that it *is* there.

    Also, about the "breaking through annotation" part. Most of those issues are solved by using a decent AOP browser to verify that everything is applied as intended.'
  replies: []
- id: 1632
  author: Jon Tirsen
  date: '2004-05-15T02:08:24'
  content: 'I agree with Rickard and James, and even Hani! AOP would be a great way to specify defaults that makes sense to you in you application.

    I think Rickards indirection is actually quite useful. His pointcut is based on the ''setter'' annotation and then there is a pointcut that introduces the ''setter'' annotation based on well-known naming schemes, but whenever he choose to divert from those  naming schemes he can just add the ''setter'' and it would just work!

    (The next version of AJDT will support renaming classes or methods and it would get updated in a fully qualified pointcut.)'
  replies: []
- id: 1633
  author: Renat Zubairov
  date: '2004-05-17T03:57:01'
  content: Actually using term AOP is not correct here. As far as I understood, under AOP we assume pointcut definition language?
  replies: []
- id: 1634
  author: Mickel
  date: '2004-05-17T15:14:35'
  content: 'Renat, I would disagree there. A pointcut is a way to pick out join points. How you declare and apply your pointcuts is IMHO up to the framework authors.

    It could be declared in XML, AspectJ syntax, Java code etc.

    It could be applied using bytecode engineering, proxies, annotations, whatever I guess, as long as the pointcuts are applied as specified, the advice code is executed when it''s supposed to, and declared introductions are available.'
  replies: []
---

James Strachan likes the idea of using AOP to introduce annotations in your code:

> This will let us use our own conventions (naming conventions such as Java Beans default conventions) and let AOP weave in all the annotations 

Well, it's not very often, but I strongly disagree with this.

Using pointcuts to specify where the annotations are going to be inserted is a huge step backward that brings us back to XML hell.

The reason why we are moving away from XML as a metadata description language is that it introduces redundancy:  in order to define where the metadata is going to be introduced, you need to specify the Java element it applies to:  class name or method name, parameter types, exceptions thrown, etc...  This redundancy makes your code extremely fragile and even the most advanced IDE's of today don't cover  the case of refactoring this kind of metadata.  If you rename your method and forget to adjust your pointcut, you application will break.  If you define your pointcut poorly, it might start introducing annotations in unexpected parts of your application with similar disastrous results.

JSR 175 annotations have two very strong points.  They are:

  * Close to your source code. 
  * Part of your Java type system.



These two points are already important separately, but taken together, they take Java programming to a whole new level of expressiveness.

Besides, what is exactly the problem, James?  Are you afraid that the Java syntax is becoming encumbered?  If so, then you need not worry:  code folding and other IDE assistance will make it very easy for you to completely ignore the annotations if you so desire.

In a similar vein, Rickard posted the following comment:

> Yeah, the way we solved this (the annotation nightmare) is to allow AOP pointcuts to introduce annotations. And then use those annotations in pointcuts for aspects. E.g. instead of setting an annotation "setter" on all set* methods and apply a "StoreToDb" aspect on those methods, I can create a pointcut that says "apply attribute 'setter' on all set* methods" and then have the "StoreToDb" trigger on the "setter" attribute. Just as you mention, with this approach I only have to mark the special cases with annotations; everything else is automatic. It works great, and is a big help. 

I have to confess my skepticism about this approach as well.  It seems to me that this method only adds a level of indirection for no obvious benefit.  In effect, you are still defining a pointcut on "set*", calling it "StoreToDb" and invoking an aspect on it.  Why the extra step?

All that being said, James original point is valid:  are we going to see an abuse of annotations in the next couple of years?  Most likely.  But I think it's a little too early to worry about that right now.  As the use of annotations percolates through our Java habits, good and bad practices will emerge and we can rely on book authors and fellow bloggers to spot those as they come.  And on Hani to keep these people in check.
