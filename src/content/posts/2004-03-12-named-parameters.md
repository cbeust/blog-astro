---
title: Named parameters
date: '2004-03-12T08:57:22'
slug: named-parameters
categories:
- Java
comments:
- id: 1309
  author: Mike Spille
  date: '2004-03-12T10:03:12'
  content: 'Doesn''t work at all in most pragmatic cases.  Consider:

    int result = someObject.calculate (x:20, y:15);

    "calculate" may use both the passed in parameters and the object''s state held in member variables to do its calculation.  You may also want to allow calculate() to be called simultaneously in a multi-threaded context.

    The issue is that:

    Window w = new Window().x(0).y(0).color(blue);

    implies that you need to store state in the object for the object chaining to work.

    Most likely this wasn''t as much of a concern for the C++ committee beacause at that time multithreading was relatively rare (and of course C++ has no language support for it).  In java of course it''s quite common.  And besides, in my own work there''s alot more transient argument-based information being passed around than data being held in member variables.'
  replies: []
- id: 1310
  author: Michael Walter
  date: '2004-03-12T10:24:11'
  content: 'Works for

    int result = someObject.calculate(x:20, y:15);

    aswell -- in C++.

    int result = someObject.calculate().x(20).y(20);'
  replies: []
- id: 1311
  author: ''
  date: '2004-03-12T14:36:54'
  content: Go learn Objective-C
  replies: []
- id: 1312
  author: Dan Weinreb
  date: '2004-03-12T20:43:18'
  content: 'Let me get this straight.  It bothers you that

    "method parameters become part of the signature",

    but it does not bother you that in order to have

    a named parameter named "foo", you have to have

    a method named "foo" that means a certain thing?

    We had named parameters in Lisp

    for years and never had any problems.  We used

    them in very large, complex software systems

    that were maintained for many releases.  No

    problem.'
  replies: []
- id: 1313
  author: Julian
  date: '2004-03-12T23:08:37'
  content: 'I''ve started writing Python, but I still don''t use named parameters. Besides the extra typing when writing code, you also need to remember, or look up, the name of each parameter. Also, the parameters values are often local variables with the same name, and it''s silly to say

    new Window(x=x, y=y, color=color)

    Though named parameters make the code easier to read, they don''t seem worth the effort.'
  replies: []
- id: 1314
  author: Lasse
  date: '2004-03-13T23:21:38'
  content: 'Once again, the issue is whether we should put flexibility before consistency. For me, having the *possibility* to use named parameters (for the rare 12-parameter method calls) would be valuable enough to justify the added difficulty in reading (takes 1ms longer to understand what a method call passes as arguments).

    However, I don''t consider myself *needing* named parameters in Java. I''d prefer having named/numbered parameters for java.sql.Statement first (http://www.jroller.com/comments/lasse/Weblog/why_preparedstatement)...'
  replies: []
- id: 1315
  author: Lasse
  date: '2004-03-13T23:22:20'
  content: 'Once again, the issue is whether we should put flexibility before consistency. For me, having the *possibility* to use named parameters (for the rare 12-parameter method calls) would be valuable enough to justify the added difficulty in reading (takes 1ms longer to understand what a method call passes as arguments).

    However, I don''t consider myself *needing* named parameters in Java. I''d prefer having named/numbered parameters for java.sql.Statement first (http://www.jroller.com/comments/lasse/Weblog/why_preparedstatement)...'
  replies: []
- id: 1316
  author: Tom Hawtin
  date: '2004-03-14T11:50:43'
  content: 'I strongly suggest reading The Design and Evolution of C++ by Stroustrup himself. In particular section 6.5.1 dealing with keyword arguments (name parameters). I''m not going to regurgitate it all here, however:

    There are a number of techniques available in C++ (and Java) without named parameters. Static factory methods (perhaps with placement new), derived types or templates (in C++) can give common variations on parameter combinations.

    As Cedric shows, mutators that return a pointer or reference to this can be chained. An alternative organisation is to introduce a builder. Much the same as we have StringBuffer for Strings, ProcessBuilder (in 1.5) for Processes, or GridBagConstraints for whatever GridBagLayout uses internally (actually a clone in Sun''s implementation, but needn''t be). Or an argument object (whatever the correct name is), as the "new" Java event model.

    Window w = new WindowBuilder().x(0).y(0).color(blue).create();

    Window w = new Window(new WindowArgs().x(0).y(0).color(blue));

    Another technique that works better in C++ is to introduce types for each parameter:

    Date date(Day(14), PosixMonth(2), Year(2004)); // C++

    Data date = new Date(new Day(14), new PosixMonth(2), new Year(2004));

    C++ implementations will happily inline and remove trivial stuff. Off at a tangent, perhaps Java could do with something shorter in place of new (#?).

    But the worst thing about named parameters is that they encourage bad practise, as properties in C#.'
  replies: []
- id: 1317
  author: Mike Spille
  date: '2004-03-14T13:14:07'
  content: 'All the examples here require you to hold state - in the C++ world it happens to be in a stack based object, in Java you''d have to new the temporaries.  Either way, the developer is forced to formalize parameters as discreet method calls or classes.  All of your freakin'' parameters need a formalized method or class.  The word for this is "ugh", and is the reason that it''s not all that common.

    Call chaining is not the same as named parameters - that only works if you want to hold the state in your object.  Discreet classes for individual arguments is overkill.  In C++, that overkill is programmers spitting out a ton of boilerplate code just to get named parameters.  In Java, it''s the same overkill plus added memory pressure for all those parameter-objects.

    That''s alot of work compared to the alternative - syntatic sugar at the compiler level that checks via name and reorders call parameters appropriately.

    Cedric, I understand your objection to variable renaming, but you can work around it:

    public void foo (int day, int year)

    {

    int renamedDay = day;

    int renamedYear = year;

    }

    That''s not ideal but it is one way to change your internal method variables w/out impacting the signature.'
  replies: []
- id: 1318
  author: Andrew Athan
  date: '2004-06-09T08:24:38'
  content: 'The objections to named parameters posted above ignore the fact that the main impetus has to do with human factors.  We want our compilers to provide syntactic (and semantic) sugar for common coding activities--that''s part of the reason we have OO, constructors, etc in the first place. Right?

    Named parameters provide two main human factors benefits: (1) self-documenting functional call expressions and (2) abbreviated function call expressions.  At times, these are in opposition, since documented calls of small fucntions is less concise than positional representations.  But I posit that in such cases, people would use the positional version anyway.  (See comment on bad examples below).

    As to the examples regarding why named params are not great:  These are simplistic examples.  The "reverse edge cases" where named parameters aren''t as useful.  Often, the variables passed in as parameters in the caller''s frame of reference are not so obviously named, and named parameters are very useful with integer and other litterals (e.g., 0, 1, 15).

    As to the workarounds:  If I have to explicitly build and use "parameter types", or "parameter objects", that''s a lot of manual work that requires discipline and is likely not to occur.  And it is a source of bugs.  Defeats the human factor impetus and creates complexities (threading, etc.).'
  replies: []
- id: 1319
  author: Mike Cline
  date: '2004-11-30T15:25:00'
  content: 'I like the idea of named parameters.  The idea of using method chaining to accomplish this seemed neat to me at first, but now that I''ve thought about it a bit, it seems completely inadequate.

    First off, how come whenever I see an example of using method chaining to sit in for named parameters, its almost always an example where calls are chained on to the constructor.  So, I wondered, does this mean that it only works for imitating named parameters in constructors, or does it work for non-constructor methods too?

    Imagine if every method in your class used this method chaining idiom for named parameters.  Your class would be completely cluttered with extra "parameter-methods" used for all of the parameters in all of the methods.

    And since this idiom relies on storing things in local variables, you would have an extra local variable for every parameter in every method too.

    That''s not what I want at all.'
  replies: []
- id: 1320
  author: N Nerode
  date: '2006-02-01T16:28:17'
  content: 'It mostly only works for imitating named parameters in constructors.

    It is a lifesaver when you have a constructor which takes thirty or more parameters, however, especially if it derives the actual desired values from them in a complicated way (which I happen to have in my current project).

    It would probably work just as well for any method which takes a really really large number of parameters.'
  replies: []
- id: 1321
  author: Bert van Brakel
  date: '2006-05-10T01:54:12'
  content: 'Personally its a feature I would find useful. Wouldn''t even need a change in the JVM, just the compiler. As an example:

    class MyObject

    {

    /**

    * @param arg - the typesafe named map of really important stuff

    * @param arg.foo - you really need this value

    * @param arg.bar - this is optional

    * @param someOtherArg -

    * @param someOtherArg.foo -

    */

    public void foo(arg:{foo:String,bar:int},someOtherArg:{foo:int})

    {

    int local1 = arg.bar;

    String local2 = arg.foo;

    int local3 = someOtherArg.foo;

    }

    }

    ..

    //call the method with named params

    myObject.foo( { bar:7, foo:"some string" }, { foo:9 } );

    could be converted at compile time to:

    class MyObject

    {

    ...

    public void foo(SomeCompilerGeneratedClass arg,SomeCompilerGeneratedClass2 someOtherArgs)

    {

    int local1 = arg.bar;

    String local2 = arg.foo;

    int local3 = someOtherArg.foo;

    }

    }

    myObject.foo( new SomeCompilerGeneratedClass().setBar( 7 ).setFoo( "some string" ), ... );

    public SomeCompilerGeneratedClass

    {

    public String foo;

    public int bar;

    ...

    }

    How best to specify the named parameter list would have to be decided, some examples:

    //consistent with rest of java; type first, name after

    public void foo((foo:String,bar:int)arg,(foo:int)someOtherArg)

    //possibly more readable

    public void foo(arg(foo:String,bar:int),someOtherArg(foo:int))

    //more like the javascript approach to param maps,my personal choice

    public void foo(arg:{foo:String,bar:int}, someOtherArg:{foo:int})

    I could see a use for this in places where one can pass many options to a method. Granted, mostly its best to keep methods simple, with only a few params, but at times, I would find it really useful for base classes which do lots of funky tricky stuff, and where you want subclasses to just have to pass in a few non default options. This way all the tricky messy stuff can be easily hidden in a single method without the need to resort to lots of user generated classes, factories, overloaded methods etc

    For example in a base web controller:

    protected void performAction( myarg:{ bean:Class, action:CRUDAction, view:String, errorView:String, properties:String[], requiredPerms:String[] } )

    Aspects would work fine, they could access the compiler generated class and call set/get, so the usual bag of tricks would remain

    Subclassing could work as follows:

    //Parent class

    public void foo( alice:{ name:String })

    //subclass

    @Overide

    public void foo( alice2:{ someOtherParam } )

    -->

    //Parent class

    public void foo( CompilerGeneratedClass1 alice )

    //subclass

    @Overide

    public void foo( CompilerGeneratedClass2 alice2 )

    CompilerGeneratedClass2 extends CompilerGeneratedClass1

    {

    ...

    }

    The case becomes more complicated when there are 2 methods named foo in the same class and both take a single named param map, which one would you call? This would be a rare case and one the compiler should bail on.'
  replies: []
- id: 1322
  author: John Haefeli
  date: '2006-06-24T02:09:34'
  content: 'Named parameters improve readability, reduce coding errors, and reduce overhead.

    There are many benefits at every level.  It can actually lead to more efficient programs with more opportunities for compiler-level optimization, and lead to higher creativity and functionality for designers and programmers.

    It wasn''t put into C++ for the wrong reasons, primarily because they didn''t want it to look like "higher level" languages -- this argument (pun intended) is mute!  It is also snobby, eclectic, and ignorant.

    Named parameters should be implemented now -- even at this late date the existing code base would not be affected.

    Cast the stone.

    _____________________________________________'
  replies: []
- id: 1323
  author: John Haefeli
  date: '2006-06-24T02:10:46'
  content: 'Named parameters improve readability, reduce coding errors, and reduce overhead.

    There are many benefits at every level.  It can actually lead to more efficient programs with more opportunities for compiler-level optimization, and lead to higher creativity and functionality for designers and programmers.

    It wasn''t put into C++ for the wrong reasons, primarily because they didn''t want it to look like "higher level" languages -- this argument (pun intended) is mute!  It is also snobby, eclectic, and ignorant.

    Named parameters should be implemented now -- even at this late date the existing code base would not be affected.

    Cast the stone.

    _____________________________________________'
  replies: []
- id: 1324
  author: John McCabe
  date: '2007-09-07T03:59:47'
  content: 'I guess this a bit of an old blog now, but I thought I''d reply anyway. It seems like you are scared of named parameters! Ada has had them for years and they are extremely useful. I don''t think anyone would suggest forcing you to always use named parameters, only use them when it is useful. The Ada Quality and Style Guide has some suggestions on this at http://www.adaic.com/docs/95style/html/sec_5/5-2-2.html.

    In Ada, having named parameter association allows a lot of flexibility in function/method/procedure (whatever you want to call them) calls.

    In C++, as you are obviously aware, if you have ''optional'' parameters with default values they need to be at the end of your function signature. This is because in C++ you must use positional parameter associations (ignoring the nonsensical chaining methods mentioned earlier) and, if you want to _not_ specify a parameter, it must be one of the ones at the end (VB actually improves on this partially by having positional association where you don''t need to actually specify a value, you just supply the comma as a placeholder).

    In Ada, you can have any number of default valued parameters in any position in the parameter list (as long as they are "in" parameters). If you want to use a function like that and accept any defaults you just use named association for the ones you want to use. You can also start off using positional associations then change to named association so that you can skip parameters. It''s not an all or nothing approach.

    For more details, look at the Ada 2005 reference manual, section 6 at http://www.adaic.org/standards/05rm/html/RM-6.html.

    In my opinion C++ would do well to include named parameter association in the way Ada has done - it would make things a lot simpler in a lot of cases.'
  replies: []
- id: 1325
  author: Nick
  date: '2009-07-24T15:28:21'
  content: 'Reason 1 for using named parameters:

    Calling some function that takes many arguments of the same type, let''s say I have this function:

    float64

    filter(

    .        float64 sample_rate,

    .        float64 low_freq,

    .        float64 high_freq,

    .        float64 attenuation,

    .        float64 sample)

    In the client code, I might be making many calls that look like this:

    y = filter( 48000.0, 440.0, 880.0, 0.005, x);

    y = filter( 48000.0, 440.0, 880.0, 0.005, x);

    y = filter( 48000.0, 440.0, 880.0, 0.005, x);

    y = filter( 48000.0, 440.0, 880.0, 0.005, x);

    y = filter( 48000.0, 440.0, 880.0, 0.005, x);

    It can become cumbersome to count the commas to know what I''m doing.  If I could use named parameters:

    y = filter(

    .         sample = x,

    .         sample_rate = 48000.0,

    .         attenuation = 0.005,

    .         high_freq = 880.0,

    .         low_freq = 440.0)

    Then I don''t have to worry about the ordering but on the content.

    Reason 2 for using the Boost''s parameters, compile time correctness with no extra storage required.

    Adding all those class method assignments requires writing a setter function and storing the value.  To use this I would need an object and state stored.  To use the Boost Parameter library, I don''t need objects or storage for these things.  Most of it is compile-time and stateless.

    I would use it for user convince of my library, not for the developer of the library.  That''s a big difference!'
  replies: []
---

[Dion likes named parameters](http://www.almaer.com/blog/archives/000069.html):

> I have always liked named parameters, as I have seen many bugs due to methods such as: doFoo(String acct1, String acct2). Here we have no way to know if someone is passing in the right info (other than via Unit tests). 

Named parameters are indeed attractive, but they come at a price.

First of all, method parameters become part of the signature of your method, which means you can't modify them without breaking your users.  It might sound like a minor annoyance but my experience tells me that the least you expose in a public API, thee asier your life will be.

But the best lesson about named parameters comes from C++, again.

Named parameters almost made it into C++.  The proposal had been reviewed several times by the Committee and there was a universal agreement on their good qualities:  easy to explain, easy to implement, not representing any major backward compatibilities issue, etc...

Bjarne was just a little bit concerned about the extra verbosity in the source, which was going to make it harder to search source files, but he agreed that his objection was not strong enough to decline this new feature (we can also notice once again how pragmatic he is.  It's also interesting to point out that this kind of concern is moot now that IDE's provide us with semantic searches).

And then, a few days before the proposal was formally accepted, one of the group experts sent an email to everyone saying "We don't need named parameters, we already have them".  And then he proceeded to demonstrate his point by turning the working example (in Java syntax for readability):

> Window w = new Window(x:0, y:0, color:blue) 

into

> Window w = new Window().x(0).y(0).color(blue);
