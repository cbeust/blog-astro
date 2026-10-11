---
title: The four degrees of reusability
date: '2004-12-21T07:41:59'
slug: the-four-degrees-of-reusability
categories:
- Java
comments:
- id: 2915
  author: Pascal Bleser
  date: '2004-12-21T08:40:16'
  content: 'Cedric, while you''re basically right, one should still differenciate about COM and CORBA (which is probably what you meant with IDL): those are frameworks that serve exactly and (more or less) only that purpose. I''m not sure it''s really honest to compare the intrinsinc "quality" in terms of reusability of, say, COM or CORBA on the one side, and Eclipse or any end-application on the other.

    NetKernel (http://www.1060research.com/netkernel/) is a pretty good example for a totally plugin-based architecture as well.

    At the end of your post, when you''re talking about not using "new", I get the feeling you''re going to say a lot about IoC and Dependency Injection (Spring, Pico et al), aren''t you ? ;)

    It''s definately the way to go, even for your very own application, as it also makes you write much better designed and cleaner code.'
  replies: []
- id: 2916
  author: Jeff Mesnil
  date: '2004-12-21T08:48:55'
  content: 'Cedric, why do you think that binaries are more reusable than plug-ins?

    If you''re not depending on the OS but on a runtime kernel, you can reuse on other OS where the runtime has been ported (e.g. OSGi can be used on a wide range of OS and devices).

    I don''t really agree on your definitions of plug-in and binary reusability.

    The main difference I see between plug-ins and binaries is that the plug-in invite you to extend it and enhance its functionalities while you can only use the binaries without affecting its own set of functions.

    With that definitions, OSGI bundles would be binary reusable and Eclipse plug-ins ... plug-in reusable.

    However you''re completely right when you''re saying that the first step to reusability is good documentation and software patterns (Eclipse is a terrific example).

    regards,

    jeff'
  replies: []
- id: 2917
  author: Justin Sher
  date: '2004-12-21T10:13:53'
  content: Having written an eclipse plugin, I think the two best thing the Eclipse group ever did were to have the bindings specified by XML and most of the application functionality implemented via plugins.  Spring and most IOC containers follow much the same pattern.  This ensures that the interfaces are stable but the implementations can change easily.  Also, if most of functionality of the application is in plugins then all plugins will have access, in one way or another, to exposed interfaces that allow manipulation of the system in much the same way the core plugins are able to.
  replies: []
- id: 2918
  author: Rob Meyer
  date: '2004-12-21T15:26:53'
  content: 'I don''t think of he difference between plug-ins and "binary reusability" as one of OS managed vs application managed; COM could certainly be implemented outside of the core OS as a container.

    I think it''s more a question of who calls who. In binary compatibility, you are exposing the functionality of your app so it can be extended -by other programs- in ways you hadnd''t anticipated. A plug-in to me, is allowing people to extend -your- application in ways you hand''t anticipate.

    Exposing your HTML control is binary compatibility; having an API so users can write and hook in a custom-written HTML renderer is a plug in.'
  replies: []
- id: 2919
  author: Eugene Kaganovich
  date: '2004-12-21T20:05:01'
  content: 'Cedric,

    I think I agree with the points you''re trying to make, but I think it''s better to clarify that all things being equal, an application is obviously more interoperable if its source is available. What is not acceptable is using the availability of source as an excuse to not provide well-defined extensibility points.'
  replies: []
- id: 2920
  author: Carlos E. Perez
  date: '2004-12-22T07:21:16'
  content: http://www.manageability.org/blog/stuff/on-reusability
  replies: []
- id: 2921
  author: Cameron
  date: '2004-12-23T11:46:00'
  content: When I come up with my own language, "new" will be virtual. ;-)
  replies: []
- id: 2924
  author: Tiago Silveira and the world
  date: '2004-12-23T16:36:37'
  content: '<strong>Responsibility and the JDistro translations</strong>

    Gillaume Desnoix wrote a comment in  my last post , and sent it to JDistro''s mailing list as well. He pointed out that I said a load of crap about  i18n  in JDistro. I should have looked at the files again before posting wrong information on the web. Like'
  replies: []
- id: 2925
  author: Tiago Silveira and the world
  date: '2004-12-23T16:48:50'
  content: '<strong>Responsibility and the JDistro translations</strong>

    Gillaume Desnoix wrote a comment in  my last post , and sent it to JDistro''s mailing list as well. He pointed out that I said a load of crap about  i18n  in JDistro. I should have looked at the files again before posting wrong information on the web. Like'
  replies: []
- id: 2922
  author: didier
  date: '2004-12-27T07:02:46'
  content: 'May be there is a fifth level, "service

    reusability of code" : API + access protocol.'
  replies: []
- id: 2923
  author: Javier Castanon
  date: '2004-12-30T11:31:34'
  content: 'Cedric,

    Perhaps I''d make a change in the entry, calling it "The four degrees of *code* reusability" ;-) I use to tell my programmers to reuse both code and design. Then come the degrees that describe if you''re going to reuse code in development time, in runtime, in binary form or source form as the four degrees describe.'
  replies: []
- id: 2926
  author: 'Thinking Out Loud: Thought Leadership from an Enterprise Architect'
  date: '2005-03-20T06:37:35'
  content: '<strong>Thoughts on J2EE Blueprints</strong>

    The folks over at Sun that created the J2EE blueprints have been successful in helping enterprises understand how to create reference implementations that support reference architectures. I asked myself, have they done a good enough job?...'
  replies: []
---

When I write code, I am always trying to think in terms of reusability, and not just for me.  Ideally, I want developers to be able to leverage my work efficiently and with very little effort.

I have identified four levels of software reusability:

  1. **No reusability.**   The least interesting of all.  It's typically a standalone application that was designed to serve a finite set of goals and not be extensible by anybody else but its creator.  
 
  2. **Binary reusability.**   While the source is not available, binary reusability enables third parties to write extensions to the software.  Microsoft COM is the best example of such an approach, and it's been tremendously successful.  For example, even though you don't have access to Internet Explorer's HTML renderer, you can still embed it in your applications and take advantage of all its power (Yahoo Messenger uses it but you would probably never tell).  
 
  3. **Plug-in reusability.**   This is very similar to the binary approach mentioned above but with the difference that the operating system is not involved in the connection between the plug-in and the core architecture.  Eclipse is a good example of such an approach, which can also be used in the absence of the source.  
 
  4. **Source reusability.**   The software is shipped with its entire source code, making it possible -- in theory -- for everyone to extend it at will.



From the least reusable to the most reusable, I would sort these approaches as follows:

**1 < 4 < 3 < 2**

First of all, the fallacy that all it takes to make a software reusable is to open-source it needs to die. You are truly deluded if you think developers will try to understand your thousands of lines of code, and that's a lesson that Netscape and most projects on _sourceforge_ have learned the hard way. 

The reason why options 2 and 3 are the best way to make your software reusable is simple:  instead of overwhelming the developers with your entire code base, you are making an extra effort to identify parts of your software that are truly reusable and you expose them in a readable way both in terms of documentation (Javadoc and similar) **and** software patterns (interfaces, factories and dependency injection mostly).

This is exactly what COM+IDL did with the resounding success that we know, and more recently, Eclipse, with its terrific plug-in API based on OSGi.

While reading up on COM and Eclipse will be very useful if you intend to make your code reusable, you can start with simpler tasks such as using your own plug-in API yourself, inside your core product.  Start with the core services and build on top of it while keeping in mind that in the future, other developers than you might be writing similar code.

A good hint that you're on the right track is to see a lot of interfaces in your code (and consequently, it is strongly discouraged to use "new" on classes that you intend to expose in your plug-in.

I'll expand on these techniques in future entries.
