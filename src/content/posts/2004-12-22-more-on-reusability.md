---
title: More on reusability
date: '2004-12-22T01:18:35'
slug: more-on-reusability
categories:
- Java
comments:
- id: 2927
  author: Carsten Ringe
  date: '2004-12-22T02:37:22'
  content: 'For my use of plugins, I found the class "ServiceProvider". It''s not documented - I think - and you have to program it all by yourself. You can read about it at http://java.sun.com/j2se/1.4.2/docs/guide/jar/jar.html#Service%20Provider

    Thanks for this 2 articles, Cedric. :-)'
  replies: []
- id: 2928
  author: Pascal Bleser
  date: '2004-12-22T04:09:35'
  content: 'Sorry for that COM/IDL mistake of mine, it''s just that I never developed software on and/or with the microsoft platform (and I absolutely don''t feel bad about it).

    Java''s nifty (and sometimes painful) ClassLoader is already very much of a plugin framework on its own.

    But when you design a plugin-based application, you most often also have to care about plugin metadata and configuration as well - very much the way Eclipse does.

    There''s even a thing you can do with C++: have some code that''s executed ''magically'' when a shared library is loaded (just put that code in the constructor of a global object). Such trickery can be used to have plugins register themselves into a factory or plugin broker (singleton).

    I wasn''t aware of Eclipse using OSGi (or of OSGi at all), thanks for the implicit hint ;)'
  replies: []
- id: 2929
  author: Rob Meyer
  date: '2004-12-22T06:54:30'
  content: 'I think Eclipse and Mozilla also blur that line; they have enough functionality to become platforms, which maybe deserves its own category still.

    One thing I''ve always found interesting is considering audiences of API''s. For example, the way that COM automation layers are usually exposed in a way that a non-programmer might think about problems (1 indexed arrays). Whereas the same functionality is also available at a more raw possibly undocumented for the general public) layer. Reusability for developers is not the same thing as reusability for end-users, and the most successful (and expensive) way to handle it is to provide both. Make using the API simple enough, and the line gets very blurry.'
  replies: []
- id: 2930
  author: ''
  date: '2004-12-22T07:07:31'
  content: '>We have come a long way with OSGi but there is >still no real standard plug-in API in Java.

    We have plenty of them:

    Java Beans, JMX, EJBs, OSGi and few dozens of others. And we will surly have more.

    >Ideally, I''d like for such a thing to be shipped >with J2SE so that not everybody who wants to make >their application pluggable needs to download >external packages

    0% of chance for that. There are too big differences between available plugin/components standards and no single standard can suite the needs of evry possible application.

    And some of those technologies are already a part of j2se.

    >(wouldn''t it be nice if the >knowledge you acquired to write Eclipse plug-ins >could be readily reused to write an IntelliJ or >JEdit plug-in?).

    There is a JSR for that but I guess it will be never fruitful. Simply it will required to standardize way too many things and rewrite from scratch of all major ides.

    I mean of course the situation when plugins not only are compatible with runtime environments (a.k.a containers) but also out of the box they closly cooperate with other plugins.

    Michal'
  replies: []
- id: 2931
  author: Cedric
  date: '2004-12-22T07:12:43'
  content: 'Michal, I think you missed my point. I wasn''t arguing for a common IDE plug-in API, which is indeed a stupid idea, but a standard way of implementing the said architecture.  IDE''s and other tools will obviously have their own specific functionalities but the way you define extension points (XML), define factories or injection points, etc...  should be standardized.

    --

    Cedric'
  replies: []
- id: 2932
  author: Noah Campbell
  date: '2004-12-22T08:51:38'
  content: 'What''s wrong with using the JavaBean standard with the BeanInfo interface to define the functionality of your plugins and then use Reflection to interact with said plugin.  The JavaBean standard seems to compete directly with the COM Automation "platform" that makes VB such a success.  Both mechanism require a certain amount of wiring that cannot be automated, hence the rise of VB.  The key relationship is the ability to combine all these "components" in a design time mode and then flip the switch and it works.  I don''t see how this is possible without the design time element.

    Actually, that''s not true.  Currently the use of XML docs provides the contract for server side plugin architecture and the tools to make that configuration are coming along.  VS2005 will offer probably the best implementation of such server time control with their graphical component integration editor (my wording...they call it Whitehorse http://tinyurl.com/44ngz).  They''ve come a long way from IIS4 when I was working with MS.

    So what does all this have to do with plugins?  I think that people overlook the JavaBean spec and as means for plugin architecture (sure it''s missing some pieces like the resource resolvers, but that''s what J2EE is all about right?)  Java is also missing an equivalent of Whitehorse.  BEA (again my experience) is getting closer with it''s deployment descriptors outside of the ear http://e-docs.bea.com/wls/docs90/deployment/deployunits.html they call them plans, but still lacks the nice "design time" tools.

    A standard architecture would be nice and will hopefully be covered by the IDE plugin API, but it''ll probably just focus on IDEs and nothing else.  If that is the case, then wouldn''t the IoC containers be the perfect model for plug-in mechanics.  Sure a standard XML format would be nice, but it''s all pretty similar.  Also a design time environment would be great.  You create how your plugins are going to interact...deploy the application and the standard plugin api does the rest.  Standards will drive this type of innovation or one plugin architecture (in MS case).

    Cheers'
  replies: []
- id: 2933
  author: ''
  date: '2004-12-23T00:47:50'
  content: 'Cedric,

    The sentence to which I refered to was:

    >"Ideally, I''d like for such a thing to be shipped >with J2SE so that not everybody who wants to make >their application pluggable needs to download >external packages (wouldn''t it be nice if the >knowledge you acquired to write Eclipse plug-ins >could be readily reused to write an IntelliJ or >JEdit plug-in?)."

    So what do you want to ship with j2se then :)?

    Guidelines  how to write IDE plugins?

    Don''t we have JavaBeans and JMX already shipped with JDK. Aren''t they ignored (for good reasons) by the most of IDE vendors?

    Also your expression:

    "standard way of implementing the said architecture" is quite strange to me.

    What does it mean?

    Does it mean "good intentions" of IDE vendors to make things in a similar way (I don''t think such thing is possible) or some sort of API  standarization(java/xml)?

    Majority of the web framwork which are built on top of the Servlet API implements the same architecture based on request/response semantic and MVC. But still it is very hard to port application between framworks as there is very many detils which make this pratically impossible. In any IDE the complexivity is much, much higher. So I fail to see how you can "standarize the plugin architecture" without standarizing the API (java/xml/behavioral protocols etc). And I don''t think that the second thing should happen now as

    the results will be much poorer then JSF in case of web framworks.

    Michal'
  replies: []
---

My previous entry has generated a few interesting comments which deserve further thoughts...

Pascal writes:

> Cedric, while you're basically right, one should still differentiate about COM and CORBA (which is probably what you meant with IDL): 

Actually no, I was really talking about COM when I mentioned IDL.  Both COM and CORBA use IDL to define interfaces, and although Microsoft's version has a few Windows-specific flavors, they are basically identical and serve the same purpose.  And you're right, CORBA fits in category 2/3, and if I didn't mention it, it's simply because it hasn't succeeded as well as COM.

Thanks for the NetKernel information, I didn't know about it, I'll check it out.

Jeff wonders:

> Cedric, why do you think that binaries are more reusable than plug-ins? 

I was careful to put these two approaches very close to each other and the only reason why I said that COM is more reusable than a plug-in approach is because it belongs in the operating system.  We have come a long way with OSGi but there is still no real standard plug-in API in Java.  Ideally, I'd like for such a thing to be shipped with J2SE so that not everybody who wants to make their application pluggable needs to download external packages (wouldn't it be nice if the knowledge you acquired to write Eclipse plug-ins could be readily reused to write an IntelliJ or JEdit plug-in?).

> I don't really agree on your definitions of plug-in and binary reusability.  
>  The main difference I see between plug-ins and binaries is that the plug-in invite you to extend it and enhance its functionalities while you can only use the binaries without affecting its own set of functions. 

This is a subtle point (also made by Rob Meyer later in the comments), but after thinking about it more, I realize you are both right.  Both approaches are a manifestation of code reuse but they are definitely serving different purposes.  However, maybe using the HTML renderer as an illustration of COM's power is misleading, and if you look at Outlook's COM interfaces, you realize that the line between "reusing core components" and "extending an existing core architecture" is indeed quite blurred.

Interestingly, Reuters just published a [ very interesting article ](http://www.reuters.com/newsArticle.jhtml?type=technologyNews&storyID=7132723)describing Office as a full-fledged platform.  Not only is this important to Microsoft's business, it's also a very effective way to make sure that open-source alternatives to Office and Windows remain irrelevant regardless of how good they are.

At any rate, there is clearly a need for more thinking on this topic.

Justin says:

> Having written an eclipse plugin, I think the two best thing the Eclipse group ever did were to have the bindings specified by XML and most of the application functionality implemented via plugins. 

I couldn't agree more, and I like this approach so much that I based [TestNG](http://beust.com/weblog/testng) on it.  A careful mix of XML and sound coding patterns is the ultimate reusability weapon.  Having said that, there are still a lot of pitfalls to avoid (too much XML or too much modularization, reusing in a flexible but overly complex architecture), and I suspect that we will be discovering a lot of new concepts in the next years.

Keep the comments coming, I am trying to figure this out as much as anybody else!
