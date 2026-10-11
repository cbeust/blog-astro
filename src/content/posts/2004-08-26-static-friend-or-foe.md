---
title: 'Static:  friend or foe?'
date: '2004-08-26T23:21:40'
slug: static-friend-or-foe
categories:
- Java
comments:
- id: 2275
  author: ''
  date: '2004-08-27T03:06:18'
  content: 'What''s the difference between storing command line parameters in static variables and ensuring that the statics get reinitialised each time your program is invoked and storing them in a singleton class and ensuring that the singleton gets reinitialised each time your program is invoked?

    Answer: none.

    A singleton class has all the disadvantages of statics.'
  replies: []
- id: 2276
  author: nnevatie
  date: '2004-08-27T03:46:52'
  content: That's right. Singleton is an evil anti-pattern.
  replies: []
- id: 2284
  author: Euxx
  date: '2004-08-27T04:55:11'
  content: '<strong>Notable "feature" of Ant''s java target</strong>

    As part of his  mission against static variables  Cedric posted interesting example of Ant script that will work incorrectly if application does not reinitialize its static variables for every run. From my view it should be handled by Ant correctly, so it'
  replies: []
- id: 2277
  author: Robert Watkins
  date: '2004-08-27T06:55:01'
  content: Singleton is not evil. Singletons as static is evil, which is Cedric's point.
  replies: []
- id: 2278
  author: Roger Rustin
  date: '2004-08-27T07:09:31'
  content: Thanks Cedric for answering my query. Highly appreciated.
  replies: []
- id: 2279
  author: Kevin Greer
  date: '2004-08-27T07:20:43'
  content: '"*Stateful* Singletons" are evil; they are just Object Oriented global variables. "Stateless Singletons" which are just used to avoid creating multiple instances of an Object with no instance variables, is fine.'
  replies: []
- id: 2280
  author: Dave
  date: '2004-08-27T07:41:35'
  content: 'Idiots.  The problem with that code is that there is a path of execution that does not ensure that m_versbose gets a value.  The true solution is to use the "else" technology builtin to java.

    Static variables are there for a purpose.  When used properly, they are very useful and simply a great deal of code.  They are not across-the-board "evil" (nor are singletons or any other thing you may have a problem with).

    And, a singleton is just a global variable, same as a static.  The only difference is that a static variable can be scoped to be global only within a class, whereas a singleton typically is not (thus making static vars more powerful and a more appropriate choice).'
  replies: []
- id: 2281
  author: Kevin Greer
  date: '2004-08-27T08:51:59'
  content: 'Dave,

    An ''else'' isn''t going to help you if you run two or more instances at once. In that case everyone will share the verbosity level of whoever set m_verbose last.

    Statics values do have a purpose: they often afford short-term convenience, but at the cost of loosing re-usability and re-composability.   Once you use a static you restrict yourself to only having a single instance of that item or whatever else depends on it.

    Fortunately in Java statics really aren''t global to the JVM but only to the ClassLoader so you can work around this problem by using multiple class-loaders.  It would be better however if you didn''t have to.  Inversion of Control or Environmental Acquisition systems are the solution (Java even has one built in the java.beancontext package but it is a bit verbose and easier solutions are available).

    The software industry has long hoped to establish a level of software re-use through componentization, much like the electronics and other industries.  Unfortunately software components haven''t succeeded as expected.  The reason for this failure is the simple static or global variable.  Only in software do individual components have a'
  replies: []
- id: 2282
  author: Slava Imeshev
  date: '2004-09-06T22:07:57'
  content: 'Cedric,

    Using wrongs to prove yourself right is wrong :)

    No one (well, that''s what I thougth till know) calls tests with fork="no" because that one would want a known test environment, including classpath. This is guaranteed by fork="yes".

    Even if that one hits the wall with fork="no", the one would turn fork="yes" and move on.

    I think doesn''t make sense to write your own new test framework just because you have screwed your build scripts once.'
  replies: []
- id: 2283
  author: Cris
  date: '2004-09-07T16:20:45'
  content: 'Another hidden problem with statics (and singletons for that matter) is that there is NO guarantee that  only one will be instantiated. If your test were to simultaneously start two programs (fork="no"), there is a potential race condition where the JVM instantiates two instances of your supposedly unique singleton class. This could lead to potentially awkward situations where you expect a state change in your singleton to propogate across your threaded app.

    Obviously, this can happen in static fields as well as singleton classes because the JVM does not differentiate.

    This is incredibly easy to test. Make a standalone app which creates a few thousand threads. Bind the threads to a single listener that will invoke a method on a lazy loading singleton. Afterwards, iterate each thread and .equals() on the singletons. If you construct the test right, you''ll find at least a few cases where you get a different object reference.

    Despite the elaborate test, I''ve seen this come up a lot in the real world, just as much with singletons that initialize on classloading as with lazy-loaders. It comes across as impossible to reproduce and ridiculous bugs that usually lead to you accusing your customer of being crazy.

    Stateless singletons are okay, and static fields are NEVER okay, except to hold your stateless singletons :)'
  replies: []
---

A comment in my [previous entry](http://beust.com/weblog/weblog/archives/000173.html) asks why statics can cause problems. Here is a quick example of a program that wants to handle a -verbose option: 
    
    
    public class Foo {
    private static boolean m_verbose = false;
    public static void main(String[] argv) {
    if (/* argv contains -verbose */) {
    m_verbose = true;
    }
    runProgram();
    }
    

Now imagine you invoke your program twice in the same build file as follows: 
    
    
    <java classname="Foo" line="-verbose"/>
    ... and somewhere else
    <java classname="Foo" />
    

You will probably wonder why the second invocation keeps being invoked in verbose mode... 

The solution is of course: 
    
    
    <java fork="yes" classname="Foo" line="-verbose"/>
    ... and somewhere else
    <java fork="yes" classname="Foo" />
    

If you forget to fork a new JVM, the static variables set in the previous invocations will not be reinitialized. The problem with the fork flag is that it creates a new JVM each time, which dramatically increases the time of your build. 

Therefore, it is much cleaner to avoid static variables as a rule of thumb, for example by storing all your command line variables in a singleton class and make sure this singleton gets reinitialized each time your program is invoked. 

Now, does this mean you should never use static methods/fields? Of course not. Actually, I like to use static methods as much as I can as long as they don't modify static state, because const static methods decrease the coupling of your classes. 

But this will be the subject of a future entry.
