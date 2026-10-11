---
title: JDK 5.0 in practice
date: '2004-09-21T06:54:47'
slug: jdk-5-0-in-practice
categories:
- Java
comments:
- id: 2381
  author: Marc Logemann
  date: '2004-09-21T07:23:36'
  content: You are using JDK5 for 6 months now? Jesus, thats a word. Everybody around me seems not to have any kind of old software to maintain, cruel world ;-) But nice idea to put your experiences in the blog and i am eager waiting for the generics usage testimonial.
  replies: []
- id: 2382
  author: Tony Nguyen
  date: '2004-09-21T08:57:23'
  content: Regarding static imports and varargs, I think it's a question of initial ease of coding versus readability. While it may make it easier to do a static import initially, down the line understanding where the static members came from will be harder. Readability is more important IMHO. Same issue with varargs.
  replies: []
- id: 2383
  author: Cedric
  date: '2004-09-21T09:23:59'
  content: Yes, I started playing with Tiger in the very early builds (20 or so).  It wasn't pretty :-)
  replies: []
- id: 2384
  author: ''
  date: '2004-09-21T09:56:45'
  content: If you have room for it, I'd be curious to know what you think about the new API libraries as well.  I've just started using it and am pretty happy to be using the concurrency libraries built in, instead of importing util.concurrent.
  replies: []
- id: 2385
  author: Stephan
  date: '2004-09-21T11:06:14'
  content: Which IDE are you using that completely supports JDK 5 yet? I'm aware of IntelliJ IDEA and the new Netbeans 4.0 Beta. No real luck with Eclipse yet. I don't feel like changing the IDE I'm used to "just" to painlessly work with Tiger.
  replies: []
- id: 2386
  author: Thomas Heller
  date: '2004-09-21T12:40:41'
  content: Could you comment on the stability of jdk5? You ever ran into ugly bugs or hotspot failures or something critical?
  replies: []
- id: 2387
  author: Paul
  date: '2004-09-21T16:15:28'
  content: 'I am eagerly awaiting 1.5 support in the IDE that I use.  I will be using lots of enums and static imports to implement pattern matching over different characteristics.

    Consider the readability of:

    import static Filters.*;

    List results = matchShapes(list, and(isBlue, or(isSquare, isTriangle)));

    instead of:

    List results = matchShapes(list, new AndFilter(new ColorFilter(Color.BLUE), new OrFilter(new ShapeFilter(Shape.Square), new ShapeFilter(Shape.Triangle))));

    My point is there are a lot of keywords and identifiers in the second call that obfuscate the underlying meaning of the code.  Static import removes most of the clutter.  If I need more information about isTriangle, for example, I''ll use "Goto Definition".'
  replies: []
- id: 2388
  author: Roger Voss
  date: '2004-09-21T23:41:15'
  content: 'On account I use C# regularly for client-side programming and Java for J2EE servers-side (and a little bit of Swing stuff on occasion), I''ve gotten to use some features in C# that are very similar to the new ones added to Tiger Java - for well over a year.

    I concur with the sentiments toward the enhanced for loop. In C# it is foreach. I also do a lot of Perl programming so this construct was very familiar to me. (Am originally an old C++ programmer, though).

    Used C# annotations a bit with ASP.NET web services stuff (but soon got out of that scene and switched over to the J2EE world). Haven''t really had much occasion to use them in the C# client-side stuff that I''ve written (which is quite a bit). There is one exception. I use an annotation to enable log4net to locate its config info in a section of .NET app config files. I can certainly see where annotations will be useful to the Java world as I do a lot with tools like JAXB, Hibernate, and of course those J2EE descriptor files - but that seems to be a lot of server-side oriented stuff doesn''t it? Is there a common theme here - that the impetus toward annotations is somewhat being propelled by all the funky stuff going on over on the server-side?

    In C# I use an aliasing feature of the ''using'' keyword. You can create an alias name to any type via a using statement (in addition to it''s normal purpose of making symbols from a namespace available). Achieves somewhat similar effect as a static import but is at the granularity level of a single discreet symbol. I probably don''t use as cool as an IDE as most folks so I might very well appreciate the static import feature in Java as too much typing and redundant symbol name pollution gets to be tedious to me.

    The feature of variable length arguments is why I even bothered to respond on this blog and this subject. I like this feature in C# quite a bit. I''ve used it to very good effect in this work flow manager that I''ve recently written for a client-side app which uses a lot of loose coupling between state modules and where things are defined a lot in XML - much as with XMBean descriptors in JBoss. This feature also enables me to use an idiom programming that I frequently use in Perl programming (in Perl, arguments to a subroutine can always be accessed in manner of an array access if that is desired). I''m quite anxious to have a variable length arguments feature in Java. After generics and annotations this will likely rank as my next most desired new feature of Tiger Java.

    I use enums in C# quite regularly. Is always felt very weird to program in a major language, such as Java, and not have this language feature. Sure, like everyone else in Java land I could live without them just fine. But I''ll take to them very naturally once I start using Java 5.0 regularly (I''m waiting on the final release before I bother).

    No mention of autoboxing/unboxing. C# for .NET has that too. I''ve had no grief from it and like it well enough. Of course C# hasn''t had generics so as to really make it pay off, but... There is this method String.Format() that is nearly as useful as printf() in C/C++ for formatted output. This C# method works similar to Java MessageFormat.format() class methods - but is more convenient to use than the Java counterpart. Both variable arg and autoboxing features make the String.Format() and StringBuilder.AppendFormat() methods work very nicely in C#. It''ll pay similar dividends to Java as well. Which brings to notice that there was no mention of the improved formatted output capabilities of Java 5.0 - guess I''ll rank that as my next favorite new thing after the variable args feature. I do a lot of log4j logging for my J2EE beans and I''d like to have much betting formatting mechanisms for that purpose.

    Now the astute observer may have noticed that pretty much every new addition to Tiger Java, C# .NET already has had as a language feature. The only feature that I can think of that C# has not had is generics - and something that works precisely like static import. Java has anonymous inner class adapters as its answer to C# delegates. There is no Java language feature equivalent to the C# event type nor the property type or the indexer type. On balance, though, there are a lot of other matters that cause me to prefer Java relative to C#. But to go into that would be to delve into a lot of issues pertaining to how assemblies are packaged vs. .jar archives, class loaders vs. the assembly loader, and bunches and bunches of other stuff that is outside of the scope of the language syntax per se. It would be a lot to cover and warrants a blog topic of its own.'
  replies: []
- id: 2389
  author: Dondi Imperial
  date: '2004-09-22T18:06:17'
  content: 'Instead of variable arguments I would have preffered default argument values. That would change code like this:

    public class Foo{

    public Foo(){

    this("Bar",1);

    }

    public Foo(String s){

    this(s,1);

    }

    public Foo(String s, int i){

    // do something here

    }

    }

    to this:

    public class Foo{

    public Foo(String s="Bar", int i=1){

    // do something here

    }

    }

    Seems a lot easier to read (less code) and maintain.'
  replies: []
- id: 2390
  author: pawel opalinski
  date: '2004-10-08T06:18:55'
  content: 'Why is ''import static'' on a file level instead of a class level?   Why is it:

    import static BorderLayout.*;

    class Mine {

    ...

    }

    instead of:

    class Mine {

    import static BorderLayout.*;

    }

    I pleasently suprised how Java code with generics is still much clearer than C++ code.'
  replies: []
- id: 2391
  author: congtru
  date: '2004-11-22T23:38:16'
  content: help mi!
  replies: []
- id: 2392
  author: asyrveqc
  date: '2007-03-21T16:56:20'
  content: zmsrkagi http://yxwsnfwa.com ptuzlnjf waukwopd  xlyxkutl  [URL=http://zdupvync.com]gjvdoute[/URL]
  replies: []
- id: 2393
  author: etxnscgc
  date: '2007-03-21T17:00:19'
  content: apsgqtiw http://sjgapuca.com kpkpuwuw crcybboh  [URL=http://vllmufeh.com]kdtvkyme[/URL]  gzctlhsi
  replies: []
- id: 2394
  author: umcqbrvi
  date: '2007-03-21T17:04:22'
  content: avkixvfe http://zfnjmqhn.com bklxcaip hjdnhioz  [URL=http://gttzcyvd.com]uhcujsnr[/URL]  suavkfmh
  replies: []
- id: 2395
  author: zhseawvi
  date: '2007-03-21T17:05:38'
  content: iketilyf http://drrhbrwv.com lwvpfmkp mdvkobrc  tfiypkzh  [URL=http://ahnkjqjh.com]zunzfqdz[/URL]
  replies: []
- id: 2396
  author: lzhlzuhp
  date: '2007-06-12T05:54:54'
  content: zjvxdkrt http://nfxhtquo.com cavzbrvp efjwcgwx  [URL=http://qbrwxmjg.com]sutlvfiu[/URL]  djokqvax
  replies: []
- id: 2397
  author: fcddyocu
  date: '2007-06-12T05:56:18'
  content: '[URL=http://ebzijaba.com]dysfylcl[/URL]  znuakjzz  ddzxptly http://bxrzvpoc.com wouxqyhw uvwoaofo'
  replies: []
- id: 2398
  author: sudheer
  date: '2007-10-15T22:52:16'
  content: what is the fun using static import when we can access methods and static constats using normal import?????
  replies: []
---

I have been writing JDK 5.0 code for over six months now, so I thought I would take some time to reflect on my experience and draw a few conclusions on the features that were introduced. 

**Enhanced for loop**

The undisputed winner. I can't even begin to describe how good it feels to use the new `for` loop everywhere (well, almost everywhere). I mentally cringe the few times when I am forced to use the old `for` loop, typically when I need the index or that I want the Iterator to be visible outside the loop. 

The code is much more readable and feels less cluttered with noise (e.g. indices when you don't need them or incrementation exposing the underlying implementation). This latter point was an unexpected benefit of the new loop, by the way. Imagine that you have: 
    
    
    String[] names = ...;
    for (String name : names) {
    // ...
    }
    

and you decide that you want to change the type of `names` to a Collection. How do you modify your code? 
    
    
    **List <String> names = ...;**
    for (String name : names) {
    // ...
    }
    

That's right, just one line. It doesn't get better than that. 

**Annotations**

Obviously, I am partial to annotations since they are at the heart of [TestNG](http://beust.com/weblog/testng) but I am a firm believer that annotations are going to change the way we build software in Java. We have been relying for far too long on reflection hacks to introduce meta-data in our programs, and annotations are finally going to provide an excellent solution to this problem. 

Also, I haven't felt the need to use some of the predefined annotations such as @Override, so I haven't formed an opinion on them yet. 

It seems inescapable to me that in a couple of years, most of the Java code that we will be reading and writing will contain annotations. 

**Static imports**

I hardly use them at all, except in my annotations type for Retention and Target. I am still not convinced that the original intent that motivated the addition of this feature (discourage the anti-pattern of implementing an interface to be able to reuse its constants without having to qualify them) justifies the introduction of a new language feature, but time will tell. 

I guess that in some way, the use of an IDE in my day-to-day programming makes imports absolutely obsolete, so I can't really get myself to feel strongly about this feature anyway. 

**Variable-length arguments**

I haven't had the need for this feature at all so far. It might come in handy once in a while but I'm really not convinced it warranted a change in the language. 

**Enums**

While I definitely give Enums a theoretical nod of approval, I haven't really converted my code to them yet, and I haven't acquired the reflex to use them either. I believe that when I do, I'll be happy with the result and it will make my code a tad more robust. 

**Generics**

I left the best for the end... but since this entry is getting a bit long, I will save the Generics discussion for tomorrow.
