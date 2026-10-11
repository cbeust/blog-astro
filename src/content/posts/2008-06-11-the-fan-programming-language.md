---
title: The Fan programming language
date: '2008-06-11T08:29:02'
slug: the-fan-programming-language
categories:
- General
comments:
- id: 7301
  author: Wilson MacGyver
  date: '2008-06-11T08:48:30'
  content: 'Maybe I''m reading too much into what you wrote. You said "I find myself particularly fond of Fan because I happen to agree with a lot of the choices that the designers made, which is exactly how I felt about Groovy in the beginning."

    Do you still feel this way toward Groovy or was it only in the beginning. If so, what changed your feeling?'
  replies: []
- id: 7302
  author: Patrick Wright
  date: '2008-06-11T12:12:38'
  content: The Fan developers introduced themselves to the JVM Languages group a few months back; see  preview.tinyurl.com/3quezp. I like their approach as well; personally, I think the website is the most important first step--and they have that nailed--before the IDE support. I'm sort of hoping that IDE support will come more quickly for many interesting languages now that people are banging out plugins to support Groovy, Ruby, Scala, etc. Cheers! Patrick
  replies: []
- id: 7303
  author: Tom
  date: '2008-06-11T19:38:10'
  content: I think Scala "lazy val" is fairly close (equivalent) to "once" functions.
  replies: []
- id: 7304
  author: Tom
  date: '2008-06-11T19:38:49'
  content: Oh, and I meant to say "equivalent?" as a question.
  replies: []
- id: 7305
  author: Brian Frank
  date: '2008-06-12T07:29:39'
  content: 'Thanks for the great writeup on Fan!

    Not sure I really got your typing syntax issue, but you can write a function type as just |File,File->Int| - you don'
  replies: []
- id: 7306
  author: Keith
  date: '2008-06-12T15:18:25'
  content: 'TOOLING?!!!

    After all this is what lets Groovy down...'
  replies: []
- id: 7307
  author: Paul Beckford
  date: '2008-06-13T02:43:28'
  content: 'Fan looks cool. Tooling will be the make or brake of these new languages. Again this is another area where Smalltalk shows the way forward.

    I understand the desire to keep things looking like C, but for those willing to make a clean break with the past, then the tooling and the language can merge. This approach opens up a whole new set of possibilities.

    The language I find most interesting at the moment is Newspeak, which is dynamic but will also support a pluggable static type system too.  Newspeak and it''s IDE hopscotch are being developed in unison. So tooling will not be an after thought.

    Paul.'
  replies: []
- id: 7308
  author: Paul Beckford
  date: '2008-06-13T02:45:36'
  content: 'Fan looks cool. Tooling will be the make or brake of these new languages. Again this is another area where Smalltalk shows the way forward.

    I understand the desire to keep things looking like C, but for those willing to make a clean break with the past, then the tooling and the language can merge. This approach opens up a whole new set of possibilities.

    The language I find most interesting at the moment is Newspeak, which is dynamic but will also support a pluggable static type system too.  Newspeak and it''s IDE hopscotch are being developed in unison. So tooling will not be an after thought.

    Paul.'
  replies: []
- id: 7309
  author: lordpixel
  date: '2008-06-16T11:01:39'
  content: Can I return an arbitrary instance out of the 'new make' method? i.e. can I substitute the instance to implement Singleton or Flyweight (or class clusters for the Objective C heads out there).
  replies: []
- id: 7310
  author: Facundo Quiroga
  date: '2008-06-17T13:44:18'
  content: 'Allowing users to define constructor''s names also allows smalltalk-like code like "Collection with: anObject" or I guess in this case "Collection.with(anObject)". Of course, it''s still a matter of preference.'
  replies: []
- id: 7311
  author: SomeGuy
  date: '2008-06-23T05:00:56'
  content: The problem i have with Scala is its complexity. The power of the language allows you to do many things and thus could produce cryptic non maintainable code in the long run. Of course someone could argue that maybe this could be controlled with Scala coding best practices. There probably is iron here - but for someone like me who moved from c to c++ and then finally to Java - Scala does not seem to be intuitive. Simplicity is important for the masses to use the language - for a 'Head First' book to come out - otherwise Scala will be yet another niche language with not much $ behind it. So from this perspective how does fan look ?
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/fan.png)

I just came across a language that I never heard of before: [Fan](http://www.fandev.org/). 

Here is a quick snippet: 
    
    
    // find files less than one day old
    files := dir.list.findAll |File f->Bool|
    {
    return DateTime.now - f.modified < 1day
    }
    // print the filenames to stdout
    files.each |File f|
    {
    echo("$f.modified.toLocale:  $f.name")
    }
    

After a few hours surveying the language, I have to say that Fan seems to get a lot of things right. Here is a short list of its features: 

  * Reuses the C# syntax for properties. 
  * Optional static typing and type inference. Use "." to enable static typing, "->" for dynamic typing. Non-existent methods are sent to a catch-all "trap" method, which is the equivalent of Ruby's `method_missing`. It is also possible to create types at runtime, which Fan calls -- a bit confusingly albeit accurately -- "dynamic types". 
  * Currying with the `&` operator. 
  * Closures. I also like the fact that closures and Fun functions can be transparently converted to methods (think "delegates") via currying. See below for an example. 
  * `override` and `virtual` keywords (as opposed to Java, Fan methods are not virtual by default). 
  * Untyped annotations (called Facets). Facets are pairs of (key, value) and they can be introspected at run time. The system reserves a few facet names for itself, such as `@transient` or `@serializable`. 
  * Immutability (classes can be created `const` and objects can be made immutable). 
  * Mix-ins (represented by interfaces that can have implementation). Fan mix-ins can have properties, although these need to be abstract (an approach that I find less restrictive than Scala's). 
  * Runs on both the JVM and .Net (wow!). 
  * Uses `:=` for assignment. I remember liking this symbol a lot when I was programming in Pascal and Modula 2, but I haven't used it in about twenty years, so it might be a bit disconcerting at first. 
  * Interesting approach to modularity leveraging REST URI's to denote namespaces. This area is still in development, but here is a quote that summarizes Fan's approach: 

> Java and .NET to a lesser degree separate the concepts of namespace and deployment. For example in Java packages are used to organize code into a namespace, but JAR files are used to organize code for deployment. The problem is there isn't any correspondence between these concepts. This only exacerbates classpath hell - you have a missing class, but the class name doesn't give you a clue as to what JAR file the class might live in. 

  * "once" methods (a feature I can only remember ever seeing in Eiffel). 
  * Constructor declarations need to be prefixed with the keyword "new" but can take any arbitrary name, although the prefix "make" is commonly used. Constructing an object is done by invoking that constructor as a static method on the type (like Ruby), which I find intuitive. 
  * Good-looking web site with extended documentation. 
Here are a few code samples illustrating the main feature of Fan. 

**Constructor**
    
    
    class Point
    {
    new make(Int x, Int y) { this.x = x; this.y = y; }
    Int x
    Int y
    }
    // make a point
    pt := Point.make(30, 40)
    

**Properties**
    
    
    class Person
    {
    Str name
    Int age { set { checkAge(val); @age = val } }
    }
    

In the code above, `@age` is used to refer to the actual field and not the property. 

**Facet**
    
    
    @version=Version("1.2")
    @todo=["fix it", "really fix it"]
    class Account
    {
    }
    

You can pass methods when closures are expected. For example, [Thread.make](http://www.fandev.org/doc/sys/Thread.html#make) expects a closure that takes a Thread in parameters and returns an Obj: 
    
    
    new make(Str name := null, |Thread -> Obj| run := null)
    

You don't need to create an object to invoke that method: 
    
    
    static Void readerRun(Thread t) {
    // ...
    }
    reader := Thread.make("reader", &readerRun;).start
    

Here are some of my pet peeves about Fan: 

  * The typing syntax. I would have preferred "f: File->Bool" instead of "File f->Bool" so that formal parameters and the type of the closure can be more easily told apart. 

  * No generics. All successful languages eventually get there, so I hope Fan will as well, but the creators seem to be hostile to the idea: 

> Our philosophy is that generics are a pretty complicated solution to a fairly insignificant problem. 

I'm sure they will change their mind in due time, and in the meantime, `List`, `Map` and `Func` offer a limited type of genericity. 

  * There doesn't seem to be any IDE support. I'm not sure how old Fan is, but the documentation states that it is approaching v1.0, so I'm hoping that the Fan developers will learn from Groovy's mistakes and focus their attention on IDE support as soon as possible. 

  * I prefer for constructors to have a fixed name instead of one arbitrarily chosen by the developer. While class declarations make it easy to pinpoint which methods are constructors (just look for "new"), it's not as easy to tell when you are on the call site, since a constructor invocation cannot be differentiated from a static call. From that respect, I still find that Ruby's approach (`Person.new`) represents the best of both worlds, although I think it could be perfected even further by eliminating the duality `"new"`/`"init"` completely. For example, instead of: 
        
        // Valid Fan
        class Point {
        new make(Int x, Int y) { this.x = x; this.y = y; }
        Int x
        Int y
        }
        p = Point.make(2, 3)
        

Why not: 
        
        // Invalid Fan
        class Point {
        new(Int x, Int y) { this.x = x; this.y = y; }
        Int x
        Int y
        }
        p = Point.new(2, 3)
        

? (the same remark can be made about Ruby) 
Except for partial generics, Fan doesn't seem to add as many innovations as its predecessors did, which is not necessarily a bad thing. It's pretty clear that the Fan authors have a solid knowledge of multiple languages and they ported these concepts, sometimes hardly modified, into Fan. And speaking of porting, I am thoroughly impressed by the fact that Fan works on both the JVM and .Net. 

Overall, it looks like Fan is being driven by motivations that are very similar to what started Groovy: pick the best features of the current popular languages and try to blend them into a coherent set. I find myself particularly fond of Fan because I happen to agree with a lot of the choices that the designers made, which is exactly how I felt about Groovy in the beginning. Of course, Fan has the advantage of hindsight and it borrows from a few additional languages than Groovy did (namely, C#, Scala and a bit of Erlang), so I find the result quite promising.
