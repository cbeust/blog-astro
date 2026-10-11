---
title: Improving exceptions
date: '2010-04-25T15:49:44'
slug: improving-exceptions
categories:
- General
comments:
- id: 8133
  author: DanielFath
  date: '2010-04-25T16:44:51'
  content: 'I concur, there are some times when using checked exceptions are a much better choice than runtime.

    It occurs to me that the greatest problem with checked exception is that you''ll either have to deal with with try-catch or changing the signature of a method (which IIRC pollutes the interface).

    I think introducing some kind of ExceptionStream that would allow you to say where exactly you want to your Exceptions to go, would solve the problem with CheckedExceptions.

    The exceptions wouldn''t go away, they would just be re-routed to the exception handler skipping any intermediate layer.

    I know it kinda defeats the point of checked exceptions, but I often want to handle an unrecoverable events in order to make the application more robust.'
  replies: []
- id: 8134
  author: Daumier
  date: '2010-04-25T20:57:28'
  content: Next I hope to see you take on Dijkstra. I think all programming languages should go out of their way to include any and every feature which could ever be useful, no matter how often they are misunderstood and misused. That's why Perl and C++ are the number one and two tools in my toolbox.
  replies: []
- id: 8135
  author: Andrew
  date: '2010-04-26T00:40:13'
  content: I've always found the "check exceptions are bad" movement to be quite baffling and bizarre.  I think the fact that an API can force me to think about "situation x" is an extremely important thing.  Of course what I do with that situation always depends on the context, both interms of the scope (i.e. small tool verses a "it shall never fail" app) and the nature of the error (can I recover or has the "government failed and money has no value").  The fact the combination of a the API and language/compiler requires me to make the choice is in my opinion a very good thing if you're going to build reliable software (where "reliable software" means software that is as reliable as you need it to be).
  replies: []
- id: 8136
  author: Xavier
  date: '2010-04-26T01:10:49'
  content: 'Why not have the same exception (FileNotFoundException) but different ways of throwing it (which would require a small language change):

    throw (checked|runtime) new FileNotFountException();

    void readFile(String name) throws (checked|runtime) FileNotFoundException {...}'
  replies: []
- id: 8137
  author: Cedric
  date: '2010-04-26T01:23:40'
  content: 'Xavier, it seems to me that if you move this decision to runtime, the compiler can no longer statically verify that your program handles these exceptions correctly...

    However, I can see the point in a "checked" keyword that you could use when you declare the exception class, it might make more sense than the magical approach used by Java today.'
  replies: []
- id: 8138
  author: Jens Peter Grosen
  date: '2010-04-26T01:31:17'
  content: 'You don??t address the fundamental problem with checked exceptions. That a method needs to know if a calling method can recover from it or not - which breaks encapsulation. Further a method can be called both from a place that can recover and a place that cannot.

    Take Apache common FileUtils as an example. There is no way the developers of FileUtils would know if the calling methods could recover from a FileNotFoundException or not. So should they use FileNotFoundException or FileNotFoundBug or both?'
  replies: []
- id: 8139
  author: Xavier
  date: '2010-04-26T01:40:28'
  content: "you're right but sometimes I would like not to be forced to wrap checked exception into runtime exceptions. It is possible to use the sun.misc.Unsafe.throwException() to do that (under sun jvm) but something like this would be better:\nvoid readFile(String name) throws transient FileNotFoundException {\n   Reader reader = new FileReader(name); // throws checked FileNotFoundException I normally would have to catch\n   ...\n}\nhere I'm reusing the transient keyword to tell the compiler I don't want it to check if methods calling readFile() do catch FileNotFoundException."
  replies: []
- id: 8140
  author: Beno??t
  date: '2010-04-26T02:26:26'
  content: 'The case of recoverable Unexpected exception exists. It is the general case of gracefull degradation.

    Look at a page of Amazon. It is composed as a aggregation of a lots of non-intrusive each other services.

    Each of these service is switchable.

    When an unexpected exception arise in a service, the service is getting off, and a workflow (including call to the dev...) is started, but the application is still alive.

    By the way, my opinion on checked exception is that Java is the language of industrialization. It uses more code, but constraint the coder to do (more or less) what he is supposed to do (well, actually, more than with other language).  The use of checked exceptions is one of the tool to force coders to use properly an API, and to manage limit cases.'
  replies: []
- id: 8141
  author: kosiakk
  date: '2010-04-26T04:05:52'
  content: 'it should be the other way round:

    throw new Bug();

    In my opinion, this is closer to current Java ideas'
  replies: []
- id: 8142
  author: Herv?? A.
  date: '2010-04-26T04:17:45'
  content: 'The case X (unexecpted and recoverable) is possible if :

    1) the program can restart from some point (sort of reset)

    2) it''s state can be find from it''s environment.

    For very simple exemple, if I am in a car at a stopligth. The engine stop abruptly (it''s the "unexpected exception"). I can restart it, and, if I lookat the fire, be in exactly the same state.

    I have "recovered" from an unexpected exception :-)

    I used this scenario in some robot software.'
  replies: []
- id: 8143
  author: kosiakk
  date: '2010-04-26T04:19:36'
  content: 'Sorry, blog parser eats all the generics =(

    throw new Bug[FileNotFound]();'
  replies: []
- id: 8144
  author: Nikita Ivanov
  date: '2010-04-26T10:40:01'
  content: 'We''ve had this on and off on TSS 5-6 years ago. Your post there (despite Spring pressure to abolish checked exceptions) was the reason I actually added your blog to my feed.

    With closures (and overall functional additions) the use of checked exceptions gets smaller and things like Option in Scala allow, in some cases, for better code. But still, in Java, checked exception is a major part of the ecosystem.

    Nikita.'
  replies: []
- id: 8145
  author: Bill K
  date: '2010-04-26T12:33:06'
  content: 'I''m having a lot of trouble imagining a scenario where the helpfulness of the checked exception (Say, file not found exception) outweighs the fact that some (many?) programmers will, for one reason or another, use an empty catch block because it it a checked exception.

    There are many reasons this happens (poor libraries, prototype code, inexperienced programmers)--I''m not saying any are valid, but the cost is enormous.  Man days or man months spent finding a bug hidden by  {}.  With unchecked exceptions this just doesn''t happen.

    What, in man hours, is the argument FOR checked exceptions?'
  replies: []
- id: 8146
  author: Cedric
  date: '2010-04-26T12:41:55'
  content: 'Bill:

    I think I made the point for checked exceptions pretty clearly (as did Elliote).

    You are criticizing the concept just because some developers might write bad code, which I don''t find very convincing.  People swallowing exceptions will produce bad software, whether they use checked exceptions or not.'
  replies: []
- id: 8147
  author: Nikita Ivanov
  date: '2010-04-26T16:40:20'
  content: '@Bill:

    What really kills me about this never-ending debate is the argument like Bill''s (no offence)... Since when does the existence of sub-par engineers contradict the sound programming concept? Following Bill''s logic we should all use GOTO because that''s what the lowest denominator among us could ever fully comprehend...

    Nikita.'
  replies: []
- id: 8148
  author: Nikita Ivanov
  date: '2010-04-26T16:46:27'
  content: 'Btw, "X" option (unexpected but recoverable) happens left and right in the functional context (especially, in Java). Since closures (anonymous inner classes for now) use runtime exceptions for their ''apply'' methods - users of functional APIs routinely catch java.lang.RuntimeException and attempt to recover from there on...

    Lack of monadic support for something like ''Option'' or ''Maybe'' in Java forces this usage.

    Nikita.'
  replies: []
- id: 8149
  author: Sony Mathew
  date: '2010-04-27T15:29:27'
  content: 'I am in opposite camp these days - as i noted here:

    http://sonymathew.blogspot.com/2010/04/checked-vs-runtime-exception.html

    Some of my points were also made by Jens Peter Grosen earlier in the comments.'
  replies: []
- id: 8150
  author: Stephane Galles
  date: '2010-04-27T23:37:08'
  content: 'Sony,

    I''ve experienced the exact same thing. I used to be a proponent of checked exceptions too.

    A few month ago, I tried to describe the process that made me gradually change my mind :

    http://userstories.blogspot.com/2008/12/checked-exception-why-debat-is-not-over.html'
  replies: []
- id: 8151
  author: Bj??rn Konestabo
  date: '2010-04-29T02:50:34'
  content: 'The problem with checked exceptions is that it lets the api designer determine what errors are recoverable. The api writer cannot possibly know that. Exceptions gets thrown upward _because_ they are not recoverable at the APIs level.

    The problem with unchecked exceptions is that you get no help from the IDE on what kinds of exceptions may occur.'
  replies: []
- id: 8152
  author: Links &laquo; Beautiful Discovery
  date: '2010-04-29T18:22:26'
  content: '[...] by wanderer99 on April 29, 2010    Improving exceptions This is a good way of thinking about exceptions but it&#8217;s not really what I would do. When I [...]'
  replies: []
- id: 8153
  author: The exceptions, they come from the future &#8211; they all come from the future! &laquo; The Subclass Explosion
  date: '2010-05-01T11:19:25'
  content: '[...] In my experience &#8211; which I eventually, painstakingly, finally gathered &#8211; checked exceptions aren&#8217;t pulling their weight. In fact, they are downright harmful. But explaining why is really hard, or so it seems. It must be, since so many have tried and still it hasn&#8217;t sunk in. [...]'
  replies: []
- id: 8154
  author: Anonymous Coward
  date: '2010-05-02T10:40:50'
  content: If you can't see for the case "X" you're not apt to comment on exception and certainly not to "redesign Java's exception mechanism".
  replies: []
- id: 8155
  author: Pedro Newsletter 23-26.04.2010 &laquo; Pragmatic Programmer Issues &#8211; pietrowski.info
  date: '2010-05-16T14:39:18'
  content: '[...] about exception usage and one more, but I??m still against checked [...]'
  replies: []
---

In a recent article called ["Bruce Eckel is wrong"](http://cafe.elharo.com/programming/bruce-eckel-is-wrong/), Elliote Harold decided to write a counter-argument to Bruce Eckel's critique of checked exceptions. 

Developers trying to argue that checked exceptions are a "failed experiment" and that we should only use runtime exceptions are missing a fundamental point in error handling theory, here's why. 

### How did we get here?

I think the Java exception implementation is fine, but it was initially used by developers who didn't really understand how it was supposed to work, and because of that, a lot of improper code ended up being committed to the JDK that we now have to live with. Quite a few API's in the JDK use checked exceptions instead of runtime ones, and for that reason, a lot of programmers ended up developing negative feelings toward the concept, which led to a few absurd extreme claims saying that checked exceptions should never be used, ever. 

In reality, the idea of having two different kinds of exceptions makes a lot of sense, as I will show below. 

### Categorizing the failures

When an error occurs in a program, there are two things I want to know about it: 1) is it expected? and 2) is it recoverable? 

Let's take a closer look: 

  | Recoverable | Not recoverable  
---|---|---  
Expected | (a) | (c)  
Unexpected | X | (b)  
  
Let's discuss each of these in turn: 

  * **X** I crossed this option because I just can't come up with a scenario in which we can recover from an unexpected exception. 

  * **(a)** Recoverable and Expected. This is a pretty common scenario that is covered by Java's checked exceptions. A typical example is `FileNotFoundException`: very often, you either want to let the user know that you couldn't find the file, or if this is not information the user cares about, you can always log it or ignore it. 

  * **(b)** Unexpected and not recoverable. This scenario is covered by Java's runtime exceptions. A typical example is `NullPointerException`. Of course, null pointers are pretty common in Java code, but you know this situation is not expected because if it were, the developer would have guarded against it (`"if (p != null)"`). Because it's unexpected, your system is now in an unstable state and it's likely that your application will either crash or behave erratically, so this situation is not recoverable. 

(c)** Expected but not recoverable. Interestingly, I have found very little documentation of this scenario. After all, if the exception is expected, shouldn't we be able to recover from it? Well, not always. Read on. 
Understanding scenario **(c)** requires realizing that the same exception can sometimes be recovered from and sometimes not, depending on **when** it happens. 

For example, you could imagine a situation where an application needs to open the same file in two different places. The first time it does, not finding this file means asking the user to provide a different file. But once this file has been supplied, the system can rightfully assume that it's there, so the second time it needs to open this file, it will expect to find it. But what if something happened that made this file disappear in-between these two times? (e.g. hard drive failure). Suddenly, our exception has become unrecoverable. 

This seems to lead us down a new path: it appears that we need **two** different exceptions for `FileNotFound`: one that is checked, and one that is not. 

### Toward a solution

If I had a chance to redo Java's exception mechanisms, there is actually very little I would change. First of all, I believe that we need to keep the checked/unchecked distinction, which maps very well to the real world, as I just demonstrated. 

However, I would probably pick different names to make the difference between these two concepts more palatable. The JDK uses the class `Error` for this but the difference between an `Error` and an `Exception` is quite subtle and often misundertood. To make matter worse, the JDK uses the word "Exception" to call both checked and runtime exceptions. No wonder people are confused. 

How about `Panic`, or maybe `Bug` instead of `Error`? I know this sounds a bit childish, but it has the merit of being very clear and when someone not familiar with these concepts is writing new Java code, deciding whether they should throw an `Exception` or a `Bug` should be easier. 

Second, I would provide two versions of the most common exception classes: one that is an `Exception` and one that is a `Bug`. For example, we would have both a `FileNotFoundException` and a `FileNotFoundBug`: 

  * You are asking the user to enter a number and they type in a letter? Your application should throw a `NumberFormatException` and catch it so the user can fix their error. 

  * You are trying to read a preference file that you saved earlier and a number cannot be parsed correctly? It's likely that the file got corrupted and you probably want to throw a `NumberFormatBug` 


Having said that, I'm not a fan of the idea that the entire exception hierarchy is now going to be duplicated, so maybe we could push this idea a bit further and use Generics to cut down on the number of classes: 
    
    
      throw new FileNotFound<Bug>();
    

or 
    
    
      throw new FileNotFound<Exception>();
    

Of course, the compiler would have to apply different rules depending on the Generic parameter, which I don't believe is feasible today, but you get the idea. 

### Moving things forward

It's a pity that the debate on exceptions has become so polarized, because I really think that if Java's dual approach to exception handling is not the best way to support failures in programs, it's certainly a step in the right direction. 

In the future, I'd like to see discussions on this topic focused more on where and when to use checked exceptions and runtime exceptions instead of reading articles telling you that you should always do "this" and never do "that".
