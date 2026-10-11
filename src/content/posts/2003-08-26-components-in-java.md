---
title: Components in Java
date: '2003-08-26T13:16:33'
slug: components-in-java
categories:
- Java
comments:
- id: 430
  author: Sam Pullara
  date: '2003-08-26T14:16:24'
  content: '1/2) There is no need for a central place to look up all the Java components.  That is not a fundamental characteristic of a component model.  VB doesn''t even need this, you can just point it at a .dll, and .NET certainly doesn''t encourage this, you point it at an assembly.

    3) The JavaBeans specification gives you the ability to define what classes are available and where the metadata can be found.  The classes are defined in the .jar manifest and the other metadata is in the BeanInfo and the BeanContext.  This is discoverable through the Introspector.

    4) QueryInterface is covered by Beans.getInstanceOf().

    The fact that you are enamored with central registries is troubling.  It is the reason for .dll hell and that is why MS moved to assemblies in their newest component programming model.

    I think you are also missing the fact that most Java code is pretty reusable to begin with, even without the source, if written cleanly, whereas most C/C++ code was not until the invention of COM.  This is probably why JavaBeans never caught on, people just found it easier to ignore all that component stuff and just work with POJOs.'
  replies: []
- id: 431
  author: Paul Mclachlan
  date: '2003-08-26T16:06:10'
  content: 'See my recent blog on java.util.prefs.Preferences.systemRoot().  I didn''t even realize the sucker was there, but it''s one way you could register and scan for components on the current system, anyway.

    I''m still really psyched about this API that I somehow didn''t notice all the time 1.4 has been out.'
  replies: []
- id: 432
  author: John Lewicki
  date: '2003-08-27T09:58:04'
  content: Its interesting that nobody has mentioned (at least that I noticed) another raison d'etre for COM, which is cross-language component reuse.  Maybe (or maybe not ) JavaBeans enables a COM-like component model *for Java*, but what if you want to use that bytecode in an app written in VB or C++ or C# or whatever.  COM specifies precisely the binary layout of a component interface so lots of languages can talk to it.  Thats another reason VB was/is popular; not only could you talk to Word or Excel from a VB app, but you could also write a VB component and call it from a ASP script or your C++ app.  Thats very powerful, or as Don Box would say, COM is love.
  replies: []
- id: 433
  author: Paul Mclachlan
  date: '2003-08-27T19:22:35'
  content: 'I can''t stand COM.  I don''t think it''s the concept I dislike, I think it''s the implementation.  Whenever I''m programming with COM I spend a lot of time in the registry looking for particular unintelligible strings.

    But, other little things always get me with it, as well.  Like one of my proxy stubs doesn''t get rebuilt properly & I spend 3-4 hours trying to debug a call that''s mysteriously failing.

    I think these days, if you want to expose a real-time programming interface to another "process" on the system you should do it via a socket ... maybe using REST, or something like that.  If you need a higher-level API, then put some code that wraps the underlying message calls.

    Anyway...

    Maybe I''m missing something - but I don''t see what you need more than a convention for putting things into the string registry.

    Like, say you want to expose a component interface:

    package com.company.magicInterop;

    public interface NiftyFeatureFactory

    {

    public NiftyFeature createNiftyFeature( String constructorArg1, String constructorArg2 );

    }

    And you put entries into the registry, like:

    /com/company/magicInterop/jar = "C:\Program Files\Company\Magic\lib\niftyImpl.jar"

    /com/company/magicInterop/factory = "com.company.ourProduct.interop.NiftyFeatureFactoryImpl"

    Obviously your client application would have a copy of niftyInterfaces.jar in his classpath already.  He could then load up the jar, Class.forName the factory, create a new instance of it, cast it to a NiftyFeatureFactory, and away you go, right?

    I mean, you could even provide the bootstrapping code (that looks up the implementation and instantiates it) for him inside niftyInterfaces.jar.

    So, what I''m not sure if I "get" is --- what else is required?

    Maybe all that''s required is for component developers to start doing something like this, eh?'
  replies: []
---

I guess I need to clarify my previous post.  I am not complaining about the impossibility to access COM from Java or from Python, but about the fact that Java doesn't enable component-based computing like COM does.  More precisely, Java needs the following:

  * A tool to look up all the Java components available on my desktop, or on a distant server.
  * A central place (either physical, file system, or virtual, such as a registry) where all the Java components can be found and browsed.
  * An API to declare what classes I make available and where the metadata can be found (contracts, documentation, etc...).
  * An API to look up the said components (QueryInterface()).



And if someone wants to point me to JavaBeans, I kindly invite them to reread the points above and realize that JavaBeans doesn't even get close to enabling component-based computing.

It's actually interesting to see that in some way, Web Services offer these services on a WAN.  But Java has no mechanism built in the JDK to enable true component reuse.  And it's very sad and causes endless rounds of wheel reinvention in the Java community.
