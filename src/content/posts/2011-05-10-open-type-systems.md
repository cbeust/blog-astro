---
title: Open type systems
date: '2011-05-10T19:42:25'
slug: open-type-systems
categories:
- General
comments:
- id: 8935
  author: Thomas Jung
  date: '2011-05-10T23:09:36'
  content: 'If you change the language significantly it should replace most of the meta-programming needs implemented with reflection, JDK-proxy, AOP, annotations, APT, bytecode manipulation and source generation.

    The sum of these techniques leaves us with a mess. You end-up with implementation (what to pick), debugging (loooong stack traces, new types), and build (overhead/complexity) problems. I did not think it through, but if an Open Type could be the Grand Unified Theory of Java meta-programming it would be worthwhile to try.'
  replies: []
- id: 8936
  author: Trygve Laugst??l
  date: '2011-05-11T03:25:55'
  content: 'Sounds like you just described JMX: http://download.oracle.com/javase/6/docs/api/javax/management/MBeanInfo.html'
  replies: []
- id: 8937
  author: Jarle Stabell
  date: '2011-05-11T06:52:23'
  content: 'You may find some interesting/related ideas in (upcoming) F# 3.0 type providers, which sounds quite similar to Gosu''s type loaders. Here''s a great presentation about type providers in F# 3.0.

    http://channel9.msdn.com/Events/PDC/PDC10/FT12'
  replies: []
- id: 8938
  author: Scott McKinney
  date: '2011-05-11T21:32:27'
  content: 'Great to see you''ve discovered Gosu and it''s open type system!

    A couple of comments.  First, while it''s true the open type system saves you from what would otherwise be a tedious and limited code generation step in Java, there''s a bit more to it than meets the eye.  The features of the Gosu language coupled with the open system provide capabilities that would otherwise not be achievable with code generation.  For an extreme example, implementing a Dynamic type (like C#''s dynamic type) is not possible with code generation.  Essentially the dynamics of the meta-type (IType) and type information (ITypeInfo) features like placeholder typing and very late binding that cannot be approximated in static code.  On a more practical level, our type system''s type redefinition capabilities make dynamic-language-style iterative development possible, but with static verification.  Code generation basically crushes any chance you have of making that happen.  Gosu gives you the best of both worlds.  (I should plug the DCEVM here while I''m at it: http://ssw.jku.at/dcevm/)

    I''d also like to point out that the successes of Guidewire Software are living proof of that Gosu''s open type system is far more than a "theoretical toy".  Quite the contrary.  Gosu was not built in a lab; it''s a product of pragmatic thinking and modern-world problem solving.  Our products are very large scale enterprise applications, large portions of them are written in Gosu utilizing the open type system to provide a unified model of a wide range of otherwise disparate domains (entities, web UI, xml/xsd, rules, wsdl, workflow, queries, Java, and on and on).  Customers only need to know one language and don''t have to muck with awkward one-off libraries or bindings or not-quite-what-you-want code gen;, it''s all *directly* available and statically verified in Gosu with deterministic code completion, navigation, usage searching, etc.  I could go on, but my point is that Guidewire''s success is very much based on the fact that our products are extremely configurable, maintainable,
    and testable, all due in large part to Gosu and the capabilities of its open type system... our secret sauce ;)

    Scott'
  replies: []
- id: 8939
  author: Sony Mathew
  date: '2011-05-12T08:56:27'
  content: 'Sounds interesting.

    Re: your example of HostProperties.  For it to be usable as you did with System.out.println or from other parts of your code, you''d need to define an actual Java class or interface called HostProperties or IHostProperties that can be compiled against, unless I missed something.

    If you defined an interface IHostProperties, nothing stops PropertiesTypeLoader("host.properties") from returning an IHostProperties dynamic proxy backed by a Hashmap.  This same approach can be just as easily applied to decorating database tables, xml files, etc as well.

    Sony'
  replies: []
- id: 8940
  author: Reinier Zwitserloot
  date: '2011-05-13T10:13:26'
  content: 'The real trick here is tool lookup.

    In order for javac (and eclipse, etc) to know what "HostProperties" is, it needs a mechanism to look it up.

    Right now this mechanism is classpath. It might be a shiny, all totted up version with build path configs or maven or ivy involved, but nevertheless its a classpath lookup: the tool looks in a bunch of jars and directories for a very specifically named and pathed file; in this case it would look for package/of/the/thing/HostProperties.class.

    If that is there, the compiler (or the IDE, etc) knows what to do. If it isn''t, the code will not compile and the IDE can''t do anything we associate with types, such as autocomplete dialogs.

    To make an open type system work, the system would be quite different. Right now we have 1 classloader mechanism: Classpath lookup. To make this work, we need a variable size set of loader mechanisms. We need a way to specify them, as well as a way to arbitrate between them (if 2 different mechanisms both claim to know how to make the ''foo.bar.HostProperties'' type, which one wins?).

    Easiest thing that could possibly work is that you put a subclass of ClassLoader in a jar someplace, add an appropriate entry in its META-INF/services/java.lang.ClassLoader file, and create a new command line option (for which all tools will eventually find their own way to do it) to add as many of these as you feel like. By default the system tosses UrlClassLoader in there set to whatever -cp is set to, or if that''s not present, whatever $CLASSPATH is set to.

    That, and ClassLoader needs a massive update to replace all cases of Class and Method and such with IType and IMethod. That by itself is quite the challenge, what with java''s approach to backwards compatibility. Probably takes a new interface (TypeLoader?), which the current java.lang.ClassLoader ends up extending (and subclasses can tighten return types so then it''ll work).

    Fantastic idea. Want!'
  replies: []
- id: 8941
  author: The Open Type System vs. Code Gen &laquo; Development at Guidewire
  date: '2011-05-23T19:27:02'
  content: '[...] &nbsp;&nbsp;http://beust.com/weblog/weblog/2011/05/10/open-type-systems/ [...]'
  replies: []
- id: 8942
  author: Rikiya
  date: '2012-08-29T08:48:27'
  content: 'The real trick here is tool lookup.In order for javac (and ecsplie, etc) to know what  HostProperties  is, it needs a mechanism to look it up.Right now this mechanism is classpath. It might be a shiny, all totted up version with build path configs or maven or ivy involved, but nevertheless its a classpath lookup: the tool looks in a bunch of jars and directories for a very specifically named and pathed file; in this case it would look for package/of/the/thing/HostProperties.class.If that is there, the compiler (or the IDE, etc) knows what to do. If it isn''t, the code will not compile and the IDE can''t do anything we associate with types, such as autocomplete dialogs.To make an open type system work, the system would be quite different. Right now we have 1 classloader mechanism: Classpath lookup. To make this work, we need a variable size set of loader mechanisms. We need a way to specify them, as well as a way to arbitrate between them (if 2 different mechanisms both claim
    to know how to make the  foo.bar.HostProperties'' type, which one wins?).Easiest thing that could possibly work is that you put a subclass of ClassLoader in a jar someplace, add an appropriate entry in its META-INF/services/java.lang.ClassLoader file, and create a new command line option (for which all tools will eventually find their own way to do it) to add as many of these as you feel like. By default the system tosses UrlClassLoader in there set to whatever -cp is set to, or if that''s not present, whatever $CLASSPATH is set to.That, and ClassLoader needs a massive update to replace all cases of Class and Method and such with IType and IMethod. That by itself is quite the challenge, what with java''s approach to backwards compatibility. Probably takes a new interface (TypeLoader?), which the current java.lang.ClassLoader ends up extending (and subclasses can tighten return types so then it''ll work).Fantastic idea. Want!'
  replies: []
---

`java.lang.Class` is probably one of Java's most famous classes, and whether you write applications or frameworks, you have probably encountered it many times, either superficially (`getClass()`) or in more depth (reflection, class loaders, etc...). 

`java.lang.Class` is also a very special class in the Java ecosystem, and as such, it is limited in some very specific ways. One of them is that developers can't create a new `Class` object themselves (the class has no public constructor), only the JVM can create `Class` objects. When you are writing Java code and you want to materialize some of these objects, your options are fairly limited: 

  * Create a class loader and use the `defineClass()` method. Class loaders are complex and require a lot of intimate knowledge of the JVM to get right, and `defineClass()` also requires you to supply the bytecode for the class you want to create. 
  * Code generation. This is the more traditional approach. It's easier to achieve in some ways (all you need to do is generate the source of the class you need) and more complicated in others (you need to infect your build with the knowledge of these generated classes and teach it how to bundle them with your application). 
  * You can use dynamic proxies. Dynamic proxies don't exactly materialize new classes, so they shouldn't really be part of this list, but I thought I'd mention them since they can be a pretty powerful solution to the overall problem of generating new types in Java programs (note that this approach is less typed than the other two). 
Despite their shortcomings, all these approaches have been used with great success by various Java frameworks, and these techniques played a great role in making Java such a strong platform that remains able to solve most of the engineering problems that arise these days. 

Having said that, what can we do to improve on these approaches? 

Imagine a new type called `IType`. This is actually an interface, so any class can implement it. Let's now assume that everywhere in the JVM where a `Class` is expected, we can use an `IType` instead (obviously, we'll make `Class` implement `IType`). `IType` is the new representation of a class inside the JVM, and any object that implements it can be passed instead of a `Class`. 

Obviously, an `IType` needs to be able to perform all the operations that `Class` can, among which: 

  * Return information about its name, package, parent type(s), nested types, etc... 
  * Respond to standard introspection operations, such as returning the list of methods that it exposes. 
The methods returned by the `IType` need to be abstracted as well, so instead of returning `java.lang.reflect.Method`, we return a new type called `IMethod`. We place the same requirements on `IMethod` that exist on `Method`: introspection must work on these objects and, more importantly, we need to implement `invoke()`. If the object we are returning is an instance of `Method`, implementing `invoke()` is trivial (just delegate it to the underlying `Method` object). 

But what happens if, instead of returning standard Java `Class` and `Method` objects, we decide to return something different? 

Actually, what could these other objects be? 

As it turns out, anything. They could represent files: `.xml` obviously, but how about `.xsd` or `.properties`? Or how about sources of another language? Maybe a `.groovy`, `.bash` or `.scala`? Thinking further outside the box, how about concepts that are not files, such as database tables? Or virtual files, or files present on a remote file system? How about the endpoint of a network connection (and we don't care what's feeding this endpoint)? We could also decide to represent the results of a REST or AJAX or JSON API. 

This new type system doesn't care what the underlying concept actually is, all it needs is a set of `ITypes` (and a few other details that I'm glossing over), and it will expose these types to the JVM as if they were genuine classes. Whether they are backed by Java bytecode or some other logic is irrelevant. 

Here is a quick example of what such a type might look like. 

Let's suppose we want to make Java property files first class citizens in this new type system (it's a silly example since a simple hash table is good enough, but this is just for illustration). The idea is that whenever we encounter a file called "foo.properties", we'll create a class called `FooProperties` and each key/value found in this file will be represented as a getter. For example, loading this file in this new type system: 
    
    
    # File: host.properties
    host: 127.0.1.0
    port: 1245
    

will allow you to write the following code: 
    
    
    HostProperties fp = PropertyTypeLoader.load("host.properties");
    System.out.println("Host:" + fp.getHost() + " port:" + fp.getPort());
    

The implementation of the corresponding `IType` and `IMethod` interfaces is pretty straightforward in this case, but this should give you an idea of the flexibility of such a type system. 

What I have just described is basically [Gosu's Open Type System](http://guidewiredevelopment.wordpress.com/2010/11/18/gosus-secret-sauce-the-open-type-system/). [Gosu](http://gosu-lang.org/) is not just "yet another JVM language", it also enables the kind of type openness that allows you to materialize pretty much anything as a real Gosu type. Once you have described your type, it becomes a part of your Gosu program and as such, benefits from the same privileges as any other type (e.g. it can be used by IDE's for completion, browsing, refactoring, etc...). 

Having said that, let's now put things in perspective: 

  * Java's metaclass design is intentional: it was conceived this way for security reasons, the idea being that types materializing in your JVM process need to go through a very specific pipeline so it can be validated and checked against malignant attacks. I am guessing that this system is extremely paranoid because Java was initially driven by applets, but I wonder if such concerns are still valid today. 
  * While elegant, Gosu's open type system is basically just saving you from a code generation phase. 
I'm guessing that not everyone will think that the benefits from such a type system outweigh the drawbacks, but I'd love to hear some feedback on whether you think that future languages should give access to such functionality or if it's just a nice theoretical toy whose practicaly is doubtful. 

Here is some additional material on Gosu's Open type System: 

  * [Scott McKinney's blog post](http://guidewiredevelopment.wordpress.com/2010/11/18/gosus-secret-sauce-the-open-type-system). 
  * [An XML + XSD type loader](http://lazygosu.org/xml.html). 
  * [Example of a simple type loader](http://groups.google.com/group/gosu-lang/browse_thread/thread/e690c686e3ebb91e/62fc75810dce61e4?lnk=gst&q=open+type#62fc75810dce61e4).
