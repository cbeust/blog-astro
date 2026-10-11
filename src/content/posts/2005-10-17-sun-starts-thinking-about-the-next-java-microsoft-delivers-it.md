---
title: Sun starts thinking about the Next Java.  Microsoft delivers it.
date: '2005-10-17T10:46:47'
slug: sun-starts-thinking-about-the-next-java-microsoft-delivers-it
categories:
- Java
comments:
- id: 4306
  author: Alain Rogister
  date: '2005-10-17T12:50:39'
  content: Funny, I just read this after posting on TSS a link to Gilad's blog entry and a series of links to Microsoft innovations for the CLR. I can only hope for Java that Sun is working hard at similar ideas behind closed doors and not just waiting for some committee to see the light, or else...
  replies: []
- id: 4307
  author: RichB
  date: '2005-10-17T12:52:36'
  content: The current C# spec only contains new features which are directly used to implement or provide syntactic sugar for LINQ. If you compare C# v3 to C Omega, it's clear there are more features to come.
  replies: []
- id: 4308
  author: Romain Guy
  date: '2005-10-17T13:29:06'
  content: '>why Generics and not Templates?

    Because generics are not templates. They are different at many levels. Even a different name makes it hard for many people to get those things are different so I guess many would have been angry if Sun had called them templates.'
  replies: []
- id: 4309
  author: murphee
  date: '2005-10-17T14:08:09'
  content: 'New Bytecode: sure, it''s an incompatible change, but then you can''t really run 1.5 (sorry: Java 5) code on anything older anyway (with all the Autoboxing and Generics requirements). Seems like that kind of compatibility has been dismissed with Java 5 anyway. If invokedynamic can be used by Hotspot to optimize dynamic dispatch in some way, then I think this can only be beneficial'
  replies: []
- id: 4310
  author: Cedric
  date: '2005-10-17T14:11:22'
  content: 'Murphy:

    I actually said it''s a *backward compatible* change.  You''re guaranteed that you won''t break any existing code with this, so my point was that adding it to the language should be a no-brainer from a compatibility standpoint (there are other issues, of course).'
  replies: []
- id: 4311
  author: Behrang Saeedzadeh
  date: '2005-10-17T14:20:48'
  content: 'If adding a new bytecode instruction won''t introduce compatibility issues, why didn''t Sun add new instructions for implementing Generics?

    The current Generics misses a few features because they couldn''t be implemented by using the current instruction set.'
  replies: []
- id: 4312
  author: Yuri Schimke
  date: '2005-10-17T14:28:45'
  content: 'On backwards compatibility, even with Java 1.4 syntax selected in eclipse, you can easily produce Java 1.5 specific code.

    ''BigDecimal.ZERO'' fails, but you can''t just call ''new BigDecimal(0)'' since the int constructor was added in 1.5, so you have to call ''new BigDecimal((double) 0)''.

    On the invokedynamic side, groovy can easily call the right method at runtime.  Maybe performance improves with this change.  But on the other hand it also opens a window for support for even java taking advantage of ActiveRecord style classes, where the supported methods are confirmed at runtime.'
  replies: []
- id: 4313
  author: Brian Slesinsky
  date: '2005-10-17T15:14:41'
  content: Wait a second.  C# 3.0 hasn't shipped yet.  Is there any release date?  How long is this going to take?
  replies: []
- id: 4314
  author: Romain Guy
  date: '2005-10-17T15:25:15'
  content: .NET 2.0 just reached or will soon reach RC stage so I guess there is still some time before 3.0.
  replies: []
- id: 4315
  author: Sumit
  date: '2005-10-17T17:33:49'
  content: Another way of looking at it might be, Java is pretty established so changing the language is more disruptive. C# pickup has been way below expectations (when it came out, it was supposed to kill Java and all that), so much so that (1) Microsoft needs to attract more developers with the promises of more features. With so many new ones promised, some are sure to stick with every developer. (2) With not so much an established base, they can afford to play with the language and its syntax.
  replies: []
- id: 4316
  author: Mohan Radhakrishnan
  date: '2005-10-17T22:09:58'
  content: I agree with Cedric totally. After 8 years I have started to take a look at C# and I find it has lot of features. Sun needs to be a bit fast.
  replies: []
- id: 4317
  author: ''
  date: '2005-10-17T23:06:08'
  content: 'Sun caught up once (Java 5). They can do it again (provided there''s something to catch up with).

    > work behind closed doors and when done, publish it and tell the world "this is it". It''s easy to hate this approach, but there is also a lot to like about it.

    You''re right, there''s a lot to like about JUnit 4...'
  replies: []
- id: 4318
  author: Patrick Schriner
  date: '2005-10-17T23:55:25'
  content: I think C# has a lot of features that should not be copied. It
  replies: []
- id: 4319
  author: Tom
  date: '2005-10-18T08:31:32'
  content: Properties are less readable than getters and setters?
  replies: []
- id: 4320
  author: ''
  date: '2005-10-18T09:22:22'
  content: 'I''ve found VS considerablably less retarded than any other Java IDE in the way it works. C# goes a long way into simplifying and localizing the CONTEXT of code. Sometimes this leads to lower LOC. Sometimes it doesn''t. But in the end, the code is a lot easier and more sensible to work with. C# doesn''t give a rat''s ass about OOness when there are better ways to do it. The willingness to accept that all programming concepts are not perfect is where the C# designers really have a leg up on their Java counterparts.

    When working with VS, it works for me, but when working with Eclipse or IDEA, I''m forced to work for it. I have this love-hate relationship with IDEA, I love its features, but hate the way how it works.'
  replies: []
- id: 4321
  author: bn
  date: '2005-10-18T09:23:19'
  content: 'I''ve found VS considerablably less retarded than any other Java IDE in the way it works. C# goes a long way into simplifying and localizing the CONTEXT of code. Sometimes this leads to lower LOC. Sometimes it doesn''t. But in the end, the code is a lot easier and more sensible to work with. C# doesn''t give a rat''s ass about OOness when there are better ways to do it. The willingness to accept that all programming concepts are not perfect is where the C# designers really have a leg up on their Java counterparts.

    When working with VS, it works for me, but when working with Eclipse or IDEA, I''m forced to work for it. I have this love-hate relationship with IDEA, I love its features, but hate the way how it works.'
  replies: []
- id: 4322
  author: ''
  date: '2005-10-18T10:16:30'
  content: '"Microsoft publishes the specification for what will become C# 3.0"

    Very true, next we will be hearing that ECMA is incompatible with the ''standard''.'
  replies: []
- id: 4323
  author: ''
  date: '2005-10-18T10:24:47'
  content: '"... but this is an approach that has been pretty successful for C++, and I expect the same success for C# 3.0."

    feature bloat is what made c++ successful?? you need urgent help, doesn''t google have inhouse therapists?'
  replies: []
- id: 4324
  author: JerryJ
  date: '2005-10-18T10:58:53'
  content: '''you have Microsoft, which used its own process to find a heir to the very successful C#:  work behind closed doors and when done, publish it and tell the world "this is it".''

    Yeah, but what were Microsoft''s motives?  Are they introducing features because Microsoft is a cool company, or do they want to ensnare people into the .net of their proprietary implementation?'
  replies: []
- id: 4325
  author: Graham Lea
  date: '2005-10-19T05:39:35'
  content: 'On Generics v. Templates:

    Romain is absolutely correct. Generics are not templates. Generics result in a single class that is generic, and yet has compile-time type safety based on the source code. Templates, on the other hand (I belive) result in an entire class being created for each specific invocation. So, unlike a generic class, a template is not itself a class, but only a template for a class, with many classes being created from the one template.

    On Java:

    Is Java not Turing-complete? So, scientifically speaking, there is nothing C# can do that Java cannot. The thing I love (and I would suspect most other Java devs secretly love) about Java is its simplicity. In particular, the simplicity of the language makes it very easy to work on "the one true path" - the code that actually matters, rather than memory management, deciphering operator overloads, et cetera. Because of this, every addition of a feature to Java puts its most important feature in danger.'
  replies: []
- id: 4326
  author: Shitasam Suitam
  date: '2005-10-19T06:45:58'
  content: 'Finally OTAKU word origins found:

    http://en.wikipedia.org/wiki/Otaku

    "Fat, unshaven, wearing glasses, a ponytail and fantasizing with an anime girl doll, a popular stereotype of an otaku."

    Are you really like this?'
  replies: []
- id: 4327
  author: Cedric
  date: '2005-10-19T09:33:58'
  content: 'Good one :-)

    In spoken Japanese, Otaku simply means "geek", and since I studied Japanese and I usually introduce myself as a "computer geek", I thought it would be a fitting title for my weblog.

    As for what I look like, my picture is easy to find on the Web, I''ll let you draw your own conclusion :-)

    --

    Cedric'
  replies: []
- id: 4328
  author: Gert Cuppens
  date: '2005-10-19T11:01:25'
  content: 'Rebel attitude ? Microsoft ?

    This company seems more like a Borg cube travelling through space and time and telling people :"Resistance is futile. You will be assimilated.".

    If you''re working for a company where your boss does not give you a big enough budget to study, you''re very happy that Java, Tomcat, MySQL and eclipse are totally free so you can do some studying. If it depended on Microsoft, I could forget that. So much for the rebel attitude of MS.'
  replies: []
- id: 4329
  author: Andy
  date: '2005-10-19T11:13:26'
  content: '"Microsoft publishes the specification for what will become C# 3.0"

    Actually, according to an interview with Anders Hejlsberg (http://www.ondotnet.com/pub/a/dotnet/2005/10/17/interview-with-anders-hejlsberg.html), the C# 3.0 spec that was just published corresponds to what Microsoft is calling C# 2.0, which will be released next month. Maybe the spec for what Microsoft called C# 1.1 was v2.0 of the spec?'
  replies: []
- id: 4330
  author: Gilad Bracha
  date: '2005-10-19T18:15:12'
  content: 'Hi Cedric,

    A couple of points:

    The term generics predates C++ templates, and goes back at least to Eiffel in the late 80s. I used it to describe my own work on similar constructs in Strongtalk in 1992. So I did not introduce a new term, nor did I seek to confuse people. On the contrary, it would be misleading to use the term templates for Java generics, and from day one we very explicitly compared these two and said that they were distinct and why that was so. We were very honest about that.

    The fact that Microsoft did not use terms like VM, byte code or verifier, and in fact for a long time never mentioned the word Java in the context of .Net or C# speaks for itself. No one believes the similarity between the two systems is coincidental.

    As for invokedynamic being a compatible change - sure it is. And every VM vendor on the planet will have to implement and ship it, and byte code level tools will have to deal with. It is no small thing to do unilaterally. Note that C# 3.0 is also the next

    next release, and will ship in a comparable time frame - so please try and be fair.'
  replies: []
- id: 4331
  author: Gilad Bracha
  date: '2005-10-19T18:15:48'
  content: 'Hi Cedric,

    A couple of points:

    The term generics predates C++ templates, and goes back at least to Eiffel in the late 80s. I used it to describe my own work on similar constructs in Strongtalk in 1992. So I did not introduce a new term, nor did I seek to confuse people. On the contrary, it would be misleading to use the term templates for Java generics, and from day one we very explicitly compared these two and said that they were distinct and why that was so. We were very honest about that.

    The fact that Microsoft did not use terms like VM, byte code or verifier, and in fact for a long time never mentioned the word Java in the context of .Net or C# speaks for itself. No one believes the similarity between the two systems is coincidental.

    As for invokedynamic being a compatible change - sure it is. And every VM vendor on the planet will have to implement and ship it, and byte code level tools will have to deal with. It is no small thing to do unilaterally. Note that C# 3.0 is also the next

    next release, and will ship in a comparable time frame - so please try and be fair.'
  replies: []
- id: 4332
  author: Infernoz
  date: '2005-10-19T21:47:07'
  content: WTF is this blog item linked to by JavaLobby, this does not help Java, this is just a Microsoft propaganda minion rant blog and serves no useful purpose for Java developers!  BTW C# lost the battle, it is a minority language on .Net, live with it, either offer constructive help for Java or disappear (polite version)!
  replies: []
- id: 4333
  author: ''
  date: '2005-10-20T01:16:08'
  content: 'Comparing a blog entry from a Sunie and the C#3 prortal from MSFT to gain knowledge is absurd.

    Just had a look at demos, the only fancy thing is the OR/Mapper to access RDBMS via a SQL like API.

    Perhaps I missed sth. as I just skimmed through but the rest was easy doable in Java too. Only the syntax in Java is a bit more ugly.

    If C#-Language becomes more complex, its readability will just drop as in C++, where you need years to only understand syntax. A maintainer will fail in understanding the sources written by an expert.'
  replies: []
- id: 4334
  author: ''
  date: '2005-10-20T07:21:14'
  content: 'I would like to correct myself on the point that Java provides similar things at the moment.

    Actually all the things are really strongly typed and compile time checked. Impressive.

    http://channel9.msdn.com/Showpost.aspx?postid=114680'
  replies: []
- id: 4335
  author: Matt Warren
  date: '2005-11-05T21:17:22'
  content: 'The C# just released last week is C# 2.0.  It is the 3rd version of Visual Studio .Net however. The prior two were C# 1.0 and C# 1.1.

    The LINQ preview does include a preview of the C# 3.0 specification related to the LINQ features.

    LINQ, C# 3.0, VB 9.0 and the rest are slated to release with the next version of Visual Studio which is something like 1.5 to 2 years out.'
  replies: []
- id: 4336
  author: www.openentities.com
  date: '2006-01-12T22:47:49'
  content: 'Hi , This was really great information to compare 2 technologies. I was always wondering what the heck James Gosling was doing about Java, to catch up with C#. I always believed the differences or advancement made by C# always going to be met by the other side, its like a rat race. But Microsoft took atleast 4 years to come up with CLR and a fabulous language C#.

    But the industry is in trouble to decide which side to go with. I''m putting up a ''Technology neutral'' solution in www.openentities.com (not ready yet) or you can also look at www.geocities.com/pvmoorthi.

    I like to hear from you folks.

    Thanks.

    Moorthi'
  replies: []
---

![](http://msdn.microsoft.com/nodehomes/graphics/80x60/Deploy.jpg)

It's not without a certain sense of irony that just as Gilad Bracha, Sun's language expert, starts [blogging about the next Java](http://blogs.sun.com/roller/page/gbracha?entry=invokedynamic), Microsoft publishes the specification for what will become [ C# 3.0](http://www.google.com/url?sa=t&ct=res&cd=1&url=http://msdn.microsoft.com/vcsharp/future/&ei=ItxTQ4TIHse2YKiu7YUH&sig2=pQicnGpPHy41HVke1CHfCg).  Interestingly, these two pieces of news are a pretty good illustration of how the two companies work.

Gilad's post discusses the possibility of adding a new bytecode to Java's virtual machine:  `invokedynamic`.  If you put aside the obligatory Microsoft jabs that all Sun employees seem to feel forced to include in their posts (it's probably in their employment contract) and the fact that accusing Microsoft of coming up with non-standard terminology while Java came with its own term reinvention (why Generics and not Templates?) is quite ironic in itself, the entire entry is really focused around this simple consideration:  what are the repercussions of adding `invokedynamic` to the Java Virtual Machine?

I'll let the experts discuss between themselves, but I can't help making two observations:

  * Adding a byte code is the ultimate backward compatible change.  
 
  * `invokedynamic` is really not that big a deal.  Groovy, JRuby, Jython, and many other existing scripting languages have shown that dynamic invocation support at the virtual machine level is not all that important.



Still, it's quite discouraging to hear from Gilad that should this change be approved, it wouldn't make it into Java before the next next (that's two _ "next") _version of Java. Probably at least two years in the future.

And on the other side of the fence, you have Microsoft, which used its own process to find a heir to the very successful C#:  work behind closed doors and when done, publish it and tell the world "_this is it_ ".

It's easy to hate this approach, but there is also a lot to like about it.  While I share some sympathy for Gilad's _fondness of committees_ (his words), my experience has taught me that committees just don't work for languages.  Successful languages are not created:  they just happen.  And there's not much you can do to drive that process.

Does this mean I like all the new C# 3.0 features?  No. And actually, C# 3.0 has so many new features that statistically, you are guaranteed to hate at least half of them, but this is an approach that has been pretty successful for C++, and I expect the same success for C# 3.0.

I can't help giving credit to Microsoft for coming up with so many innovations and such a rebel attitude.  I am predicting that C# 3.0 will usher us in the fifth generation language era and that all the features they are adding to C# 3.0 will be the new reference against which future languages will be judged.

There is a lot to say about these new features but going over them would make this post too long, so I'll save this for a future entry.
