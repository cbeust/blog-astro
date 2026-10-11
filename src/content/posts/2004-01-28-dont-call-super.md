---
title: Don't call super
date: '2004-01-28T10:01:32'
slug: dont-call-super
categories:
- Java
comments:
- id: 1054
  author: Howard M. Lewis Ship
  date: '2004-01-28T10:44:21'
  content: 'This is the kind of issue that really plague oo development when you make too much use of inheritance, something I''ve learned hard over the last few years.

    I tend to make as many of my methods private as possible. I occasionally even use final on non-private methods (but rarely). I document methods that should be overriden, and always try to document whether it is important to invoke the super-class definition.

    However, I''m beginning to feel that inheritance is only of limited use; aggregation is very much the way to go. With inheritance, the "surface area" of your class expands, sucking in the surface area of the class it inherits from (including parts that are private or not well documented).

    Moving from inheritance to aggregation is part of the theory behind HiveMind --- to make it easy to plug together lots of small objects at runtime, rather than relying on inheritance to do it for you.'
  replies: []
- id: 1055
  author: Vincent Massol
  date: '2004-01-28T10:49:04'
  content: 'Hi Cedric,

    I personnally try not to extend specialized TestCase. I prefer to work with Suites. I think this is the "official" way to extend JUnit (i.e. wrapping a custom test suite around a JUnit Test). Frameworks built on top of JUnit should all provide a way to run their unit tests by providing a custom test suite (okay, I know, I started extending TestCase when I first wrote Cactus... but I was wrong and I''ve learnt since then :-)).

    BTW, you don''t have to extend DatabaseTestCase to write DBUnit tests.

    -Vincent'
  replies: []
- id: 1056
  author: Hristo
  date: '2004-01-28T11:43:40'
  content: 'Sorry for your troubles, Cedric.

    Yes inheritance IS EVIL and should almost always be replaced with compositions (or AOP introductions).

    I was recently very frustrated with the Spring framework where there are 8-level-deep hierarchies, beating the worst offenders in Swing. Go figure how to correctly override methods and where to (not) call super! I ended up understanding there complete class hierarchy, though it was not the my intention at all...

    Now, remeber that little JW article from Allen Holub about "Why extend is evil" you critisized a while ago :-) Sorry, could not resist...

    Have a great day,

    Hristo'
  replies: []
- id: 1057
  author: Hani Suleiman
  date: '2004-01-28T11:53:14'
  content: 'Ugh, typically, the peanut gallery pipes up with ignorant comments that deduce bizarre conclusions from the original post.

    Inheritance isn''t evil, people who don''t understand it or design for it are. It REALLY isn''t hard to be explicit and conscious of exactly where your subclass points are, and use access modifiers (with smart use of final) to clearly spell out this contract.

    Instead what most people seem to do is ''oh I''ll make everything protected so it can be subclassed one day''. Fools!'
  replies: []
- id: 1058
  author: Bo
  date: '2004-01-28T11:58:15'
  content: 'Um, as far as I can tell, you haven''t made a case against not calling super you''ve made a case about why you should put initialization logic in constructors. (Hint: base class constructores *always* get called). This is a problem with JUnit''s design and I can''t see how it follows that inheritance is evil. (Even if you have an onSetUp method that doesn''t ensure setUp will be called BTW since somebody could still override setUp.) As for ''forgetting'' to call super I think this is a pretty huge thing to forget. It''s too bad that java doesn''t have an overrides keyword yet (1.5 will introduce @Overrides) but IMO calling super should be the first thing you do when you override a method. If you don''t call super the first thing should be to explain why in the javadoc.'
  replies: []
- id: 1059
  author: Dave
  date: '2004-01-28T12:37:54'
  content: Agree with Bo.  Stupid rules like "Don't call super" or "design around the need to call super" are braindead.  That's like saying that some people forget to increment loop counters in while loops, so don't use while loops.  Overridable methods already ARE hooks, and a lot of times the reason to override a method is so that you can do something IN ADDITION to what the superclass does.  And furthermore, you don't always have the source to create your wonderful design.  Now, as to the whole business with constructors, THAT is a point to be argued.  You should not have to call super() or this() as the first line, and you should by default inherit the superclasses constructors.
  replies: []
- id: 1060
  author: Steve Molitor
  date: '2004-01-28T14:40:40'
  content: 'A few points:

    1.  The name of this ''hook'' technique is called the ''Template Method'' pattern.  The classic ''Design Patterns'' book by the Gang of Four documents it well.

    2.  Yes, you should put object initialization logic in constructors.  But the ''setUp'' method in JUnit gets invoked before every test method, not just once upon object initialization.

    We''ve used this ''Template Method'' approach with our base test classes.  The base class final setUp method invokes ''setUpHook'' or whatever.'
  replies: []
- id: 1061
  author: Brendan
  date: '2004-01-28T15:41:52'
  content: 'JUnit creates a new instance for each test so

    >>  2. But the ''setUp'' method in JUnit gets invoked before every test method, not just once upon object initialization."

    does not make sense.

    Brendan'
  replies: []
- id: 1062
  author: Michael Jouravlev
  date: '2004-01-28T16:10:17'
  content: 'Do I hear another religious war coming? It is like checked exceptions are evil or lines longer than 80 are evil or SUVs are evil (well, I can agree with the last one). Anyway, it all depends on class structure design. Better IDEs show which methods are overriden in you code so it is easy to spot places where super() might go. I do not see much problem here.

    What I really do not get is why should I call super() from the very first line of my constructor, this can be so inconvenient sometimes.

    Deep Spring heirarchy drove me crazy too when I tried to understand how the core classes worked and where do I need to make a change or where do I need to plant my own class definition. During design time it is simply impossible to trace the calls up and down this fancy IoC structure because all classes implement the same interface. Dang.

    About aggregation. 10 years ago guys at Microsoft were laughed at because COM was not a "true OO technology". Who is laughing now?'
  replies: []
- id: 1079
  author: The Fishbowl
  date: '2004-01-28T16:34:07'
  content: '<strong>It''s OK To Make Mistakes (Re: Cedric on Super)</strong>

    Maybe this initial success makes us feel that we can solve all programming problems by just cutting out anything that could be dangerous: limiting ourselves to further and further subsets of programming until it''s impossible to make a mistake?'
  replies: []
- id: 1063
  author: Hristo
  date: '2004-01-28T16:46:50'
  content: 'Michael

    Indeed, we laughed at MS for the way they understood "true OO technology" and declaring VB an OO language without inheritance. Inheritance is one of the questionable features in Java, to the extent that James Gosling himslf is unsure if it was worth adding it to Java at all. Josh Bloch makes the case for a very limited/controlled/responsible use of inheritance in his EJP book, if at all and there are a number of others that voiced similar opinions.

    As Cedric admits, his "hooks" work-around is not a solution and comes with its own set of problems down the road. My experience is that I almost always regret the liberal use of class inheritance and end up refactoring code. If I use it, I try to confined in (package private) classes, which I fully understand and do not expose as part of the API. That''s how long it takes to get rid of old C++ habits and religious OOP rules!

    Peace,

    Hristo'
  replies: []
- id: 1064
  author: Dimiter
  date: '2004-01-28T17:57:12'
  content: 'IMHO there is nothing bad with inheritance from abstract classes and interfaces. There''s also nothing wrong with providing adapter classes if there are too many template methods (how many of you would use the WindowListener).

    What is wrong is the inherititance to reuse behavior not related to the ROLE of the class. If two classes share common behavior and have completely different roles, then using inheritance you are asking for trouble.

    It''s too late to change the JUnit design right now, but if I started a clean implementation right now, I''d make the setUp() and tearDown() methods abstract. This clearly expresses that the user should implement them and REQUIRES him to think about initialization/cleanup.

    -- dimiter'
  replies: []
- id: 1065
  author: dimiter
  date: '2004-01-28T18:05:30'
  content: oops, I should've read the whole article more carefully. Sorry for the noise :-/
  replies: []
- id: 1066
  author: Bo
  date: '2004-01-28T19:33:29'
  content: Hristo, I'm sorry, but calling inheritance one of the questionable features of java is just dumb. Claiming that inheritance represents a non-OO "C++ habit" is even dumber. What I'd really like to know is why Java programmers feel this incredible urge to state these kinds of silly rules or invent new "design patterns" like "dependency injection." (BTW, something I stumbled upon today which amused me quite a bit. An IBM article from early 2001 explaining "dependency injection." See http://www-106.ibm.com/developerworks/webservices/library/co-single.html). I'm not complaining here, but I'm really curious why Java seems to drive people to wallow around in design issues that normally aren't even design issues.
  replies: []
- id: 1067
  author: Dan Weinreb
  date: '2004-01-28T22:06:32'
  content: 'I agree that it''s a problem that, for methods in which the subclasses are supposed to call the "super", there is no way to check to make sure that they really do, and, as you say, someday someone will forget to call "super" and everything will break.

    There are object-oriented languages that let you say "this method is the kind where, when someone invokes the method, the object should run ALL of the methods provided by each of the classes & subclasses, rather than running just the ''most specific'' method."  This was provided in "Flavors", an O-O extension to Lisp developed around 1980, and it was carried over into the Common Lisp Object System.  The feature is called "method combination".  See http://www.lisp.org/HyperSpec/Body/sec_7-6-6.html for details.  Other kinds of method combination let you run each method until the first one that produces a non-null result and return that, or run each method and then add up the results of all of them and return the sum, and of course, this being Lisp, you can define your own new method combination...'
  replies: []
- id: 1068
  author: ''
  date: '2004-01-29T00:53:37'
  content: '> Bo > Even if you have an onSetUp method that doesn''t ensure setUp will be called BTW since somebody could still override setUp.

    So where you want to ensure that behaviour is not modified by subclasses, what do you do? Declare setUp final. Provide an empty or abstract onSetUp method to allow for additional behaviour. This is a much clearer contract, and indeed you can use CheckStyle''s ''Design for extension'' validation to encourage writing code in this way.

    > Hristo > I was recently very frustrated with the Spring framework where there are 8-level-deep hierarchies, beating the worst offenders in Swing. Go figure how to correctly override methods and where to (not) call super!

    Spring makes extensive use of the above technique, providing numerous extension points to plug in behaviour without breaking superclass code making subclassing really simple (and indeed, generally making subclasses themselves simple). IMHO it is one of the most sensible, flexible and extensible APIs I''ve seen.'
  replies: []
- id: 1069
  author: Jon Tirsen
  date: '2004-01-29T03:39:45'
  content: 'The fundamental problem here is that you specifically have to design the way a class supports inheritance. In this case TestCase supports inheritance in one level but not very well in two levels.

    In C# there''s actually a language construct for ensuring just that: ''sealed''. The explicit ''virtual''/''override'' also forces you to think more about the inheritance part of your class'' contract. In my opinion it might be putting to much work and bloat into a mechanism that is too fragile to start with. You can certainly get inheritance to work, but it''s usually too much work outside a non-trivial case.

    So in this case the misstake is that DBUnit provides a base-class that you need to extend to use it. (Correct me if I''m wrong, I haven''t specifically used DBUnit.) For some reason many JUnit extensions seem to do the same and frankly in most cases that is wrong. Another issue you run into is that you can''t use several of these extensions at the same time (since Java does not, for very valid reasons, support multiple inheritance). For example you might want to employ a database fixture (with DBUnit) in order to execute a GUI based test (using JFCUnit). This is not possible since they both require you to use subclass a base-class to use them.

    A better pattern is to provide "fixture" classes thay you explicitly instantiate and use in setup/teardown and the actual tests. I''ve found this pattern to be both easier to use and much more intuitive. A couple of lines of code extra that the base-class approach automagically provides but those extra lines actually makes the test more explicit (and thus easier to understand).

    I.e. replace inheritance by composition.'
  replies: []
- id: 1070
  author: Gabriel Belingueres
  date: '2004-01-29T05:42:52'
  content: 'Hi,

    Some time ago I discussed the usefullness of super in OOP, which I believe does not help to produce good designs.

    My own metric of super is this: If to use a framework I need to write more than a few supers (lets say 3 or 4, numbers are not important), I don''t use it, since either it means is not mature enough to use it, or I''m really using it to try to accomplish the task it wasn''t designed for.

    You can see the thread in

    http://groups.google.com/groups?hl=en&lr=&ie=UTF-8&oe=UTF-8&th=6eac03cfb0295adb&seekm=7tldac%24ikm%40chronicle.concentric.net&frame=off

    Regards,

    Gabriel'
  replies: []
- id: 1071
  author: Leif Ashley
  date: '2004-01-29T07:44:30'
  content: 'As a strong OOA and OOD, I find this type of coding to be a VERY bad idea because he''s right, someone will break it. There''s no guarentee that super() will be called, and so by defintion there can be no contract that requires it. Method contracts apply only to how a method is called, not to how it''s overridden. I''ve had issues with this for a while and with the no arg constructor. However, there might be something that can be done about it:

    http://www.purpletech.com/junit-patch/index.jsp

    This patch removes the constructor issue. Maybe someone can do something about the setup method''s super() req.

    You don''t see this type of requirement in the SUN JDK or any other that I know about. Still you can''t beat on the JUnit developers too much. It works, and it''s free, right?'
  replies: []
- id: 1072
  author: ''
  date: '2004-01-29T10:17:23'
  content: 'Bo-,

    I know it hurts to hear that class C++-style (e.g. class) inheritance should be avoided. For

    the record, I have nothing against interface inheritance and the use of inteface+abstract class pattern, as advocated by Josh Bloch. For your information, here is where James Gosling sort of regrets putting (class-)inheritance in Java:

    -----------------------------------------

    Part "A delegation-only language":

    http://www.javaworld.com/javaone01/j1-01-gosling_p.html

    -----------------------------------------

    And he is just one of the many bold enough to declare "Avoid Class Inheritance". You may also educate yourself further, reading these:

    - http://www.cas.mcmaster.ca/~emil/publications/fragile/

    - http://www.javaworld.com/javaworld/jw-08-2003/jw-0801-toolbox.html

    - "Effective Java Programming" by J. Bloch Item 15,16

    - "Favor composition over inheritance", GOF

    Do not be a dumb programmer - read more and question always! Do not repeat my mistakes of liberal use of inheritance, only to have to refactor later!

    Thanks,

    Hristo'
  replies: []
- id: 1073
  author: ''
  date: '2004-01-29T10:29:54'
  content: 'On the Spring Framework (SF):

    Some anonymous reader noted that the deep SF class hierarchy is good, since it provides many hooks and extension points. In my view, in well designed APIs it is much more important WHAT YOU CAN NOT DO. Giving you too  many "extension points" is like giving you to much rope to hang yourself. How about declaring all private fields public and having the ultimate "flexibility". ENCAPSULATION IS MORE IMPORTANT THAN INHERITANCE.

    In SF,apart for having to comb ALL the code/javadocs for ALL the classes in SF before you produce something useful, the SF developers have already taken huge responsibility to SF API users - not to change any of these inheritable classes in future. Can they do that, realistically?

    Thanks

    Hristo'
  replies: []
- id: 1074
  author: ''
  date: '2004-01-29T12:34:36'
  content: 'Hristo,

    > Some anonymous reader noted that the deep SF class hierarchy is good, since it provides many hooks and extension points.

    The deep class hierarchy is not of itself good - the fact that the API is well designed and flexible is good.

    > In my view, in well designed APIs it is much more important WHAT YOU CAN NOT DO.

    Which is the point I was making, and the point of this thread. If you actually *looked* at the Spring API you''ll see that an awful lot of useful classes are largely final, with helpful, easy to understand points at which additional behaviour can be introduced.

    > Giving you too many "extension points" is like giving you to much rope to hang yourself.

    But again, preventing you from *breaking* behaviour by using the Template design pattern was the point I was making. I don''t mean there are many classes that can be overridden, but that the classes that are available lend themselves well to being subclassed by providing useful, non-final hooks into the parent class'' processing

    The Spring example:

    To have a working MVC Controller, all a developer needs to do is implement a one-method interface.

    For convenience, an abstract baseclass is available that provides some default behaviour for this method, and a template method that can be used to introduce behaviour *if desired*.

    There are several more subclasses, each of which provides more specialised behaviour (such as populating objects from request parameters using reflection) - again with most methods declared final and specific template extension points made available (for example, onSubmit behaviour in the SimpleFormController).

    > How about declaring all private fields public and having the ultimate "flexibility". ENCAPSULATION IS MORE IMPORTANT THAN INHERITANCE.

    Lost me here. I''m not sure what you''re arguing for or against - Spring has a high degree of encapsulation. Again, aided by the use of the Template pattern.

    > In SF,apart for having to comb ALL the code/javadocs for ALL the classes in SF before you produce something useful, the SF developers have already taken huge responsibility to SF API users - not to change any of these inheritable classes in future. Can they do that, realistically?

    Well for starters, the simple fact that they have made extensive use of the *Template pattern* means that, since behaviour can only be introduced by subclasses at well defined points, they can pretty much guarantee that those extension points will never change, and subclasses will be pretty well unaffected by any other API changes.'
  replies: []
- id: 1075
  author: Julian
  date: '2004-01-29T21:07:19'
  content: I simply avoid extending classes that I didn't write, unless there's a very good reason for doing so. I have no problem extending my own classes, which I understand completely.
  replies: []
- id: 1076
  author: Manuel Laflamme
  date: '2004-01-30T07:32:02'
  content: 'You don''t need to extend DatabaseTestCase to use DbUnit:

    http://www.dbunit.org/howto.html#noextend

    I rarely do it myself. The main DbUnit functionalities don''t lie in this class. Think about this class as a template that shows you how you can invoke DbUnit from your own tests.

    I found that DbUnit integration greatly varies from one project to another. Up to now, I''ve done it differently for every projects.'
  replies: []
- id: 1077
  author: Ken
  date: '2004-02-06T19:28:13'
  content: 'This seems to be the Java mentality: "C++ lets you shoot yourself in the leg, so let''s make Java so strict you can''t possibly screw up."  Then when somebody finds a way to screw up with Java, the call is immediately "Oops, we let the stupid programmer have too much power again."

    The problem isn''t with "extends".  Extending classes can be tremendously useful, if you use it right.  I''ve found subclassing to be nothing but helpful, when done right.

    And there''s the problem: it''s so often done wrong.  When you see it done wrong enough times, I guess you start to believe that "extends" itself is the problem, rather than the misuse of it.

    Perhaps Java is at fault here, too -- not for having "extends", but for not having good support for other ways to re-use code.  Since classes and subclassing are basically the only language feature (no closures, macros, and so on), it forces everybody to use "extends", even in places it isn''t a good solution.

    When I look at Lisp, for example, I see a language with lots of features, including object-oriented programming (with subclassing).  But subclassing is only rarely used -- it''s rarely the best solution.

    (I''m not sure if I had a point here.  These are just the thoughts that floated to the top of my brain when I read this.  I make no guarantee they make sense.)'
  replies: []
- id: 1078
  author: ''
  date: '2004-10-25T01:21:59'
  content: 'The solution is simple: put the initialization code in the constructor. From "Java Extreme Programming Cookbook" by Eric Burke:

    "You may be wondering why you should write a setUp()method instead of simply initializing fields in a test case'
  replies: []
---

Okay, I found why my DBUnit tests were not working:  I was overriding setUp() but not calling its parent version.

The fix was simply to invoke super.setUp() in my own setUp():

> public void setUp() {  
>    try {  
>      Class.forName(JDBC_DRIVER).newInstance();  
>      super.setUp();   
>    ...

Note that the order of these two instructions is important, or DatabaseTestCase will be unable to locate your driver.  Seems obvious, but I didn't get it right the first time.

Now, all this makes me angry for a lot of reasons.

First of all, this is the kind of design flaws that has been around since the C++ days.  [I weblogged about it](http://www.jroller.com/page/cbeust/20030623) a while ago:

> This kind of pattern is similar to seeing methods invoke their super counterpart, a definite code smell in my book (if you override the said method and forget to call super, everything breaks). 

I'll restate my point:  whenever you feel the need to call super inside a method that is not a constructor, it's a code smell.  If on top of that, this method can be overridden by subclasses, you absolutely need to get rid of that constraint because I guarantee you that someone (a user or even yourself) **will** break that contract.

How do you solve this problem?  With a technique called "hooks".

In this particular example, DatabaseTestCase.setUp() performs some very important initialization logic.  If this code is not run, then DBUnit breaks.  As simple as that.  The problem is that subclasses are very likely to override setUp(), since it's the recommended and documented way to set up your tests in JUnit.

When you face such a situation, you should consider moving the vital code in a private method that cannot be subclassed, and then have this method invoke one or several "hooks".  The hook would be, in that case "onSetUp()".  This way, subclasses can be notified when the setUp() is happening but they won't override the important initialization that's happening in it.

Admittedly, this technique has limits when the hierarchy of subclasses deepens, and there is no easy way to achieve that, so DBUnit is not completely to blame.

The real culprit is JUnit which was designed without realizing that subclasses of TestCase can be either more specialized parent test classes or real tests, and that subclassing rules should be different depending on which class you are implementing.

The more I work with JUnit, the more angry [<blam>](http://www.jroller.com/page/cbeust/20030425) I [<blam>](http://www.jroller.com/page/cbeust/20030426) get.
