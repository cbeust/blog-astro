---
title: It's okay to return null
date: '2007-11-21T08:23:07'
slug: its-okay-to-return-null
categories:
- Java
comments:
- id: 7010
  author: Alex
  date: '2007-11-21T08:52:39'
  content: '"This generally requires firing up the code in a debug mode, where you can step through individual lines of code, inspecting what your mystery value contains at different points of execution."

    This has to be a joke, right?  I can''t think of a single time where I''ve had to fire up the debugger to track down a null object.'
  replies: []
- id: 7011
  author: Jesse Kuhnert
  date: '2007-11-21T09:32:02'
  content: '@Alex: Ummm...maybe you just don''t have a good debugger handy that makes this easy?   It''s usually useful to find out why an object is null instead of just adding more defensive checks in irrelevant portions of code.'
  replies: []
- id: 7012
  author: Marty Alchin
  date: '2007-11-21T09:47:37'
  content: 'Thanks for this post. I think it''s the first time someone has posting an opposing opinion in their own post, so I feel like I''ve somehow crossed another threshold in my blogging career. :) You''re right, I did take a very lopsided approach to the issue, but that''s not really all that unusual, anyway.

    Admittedly, my "exceptionally hard to debug" comment was based on my own experience (as a non-Java programmer working with Java) and observations (of the Java programmers I work with). I hardly consider that a representative sample, but the fact that you can debug them in less than a minute, while programmers with masters degrees can spend an afternoon on it, doesn''t really help sort out the issue. I suppose it has to do with how good the rest of your code is, whether it''s easy to figure out where the null value came from. As a side note, the "pity" thing about IDEs is also just as subjective as anything else, since I spend more time fighting with my Java IDE than I save with its "features". But, as you, I digress.

    Your comments about looking dictionary keys and configuration values are somewhat valid, but I think there''s more to it than that. For instance, in Python, a dictionary will throw an exception if you try to reference a non-existent key using the bracket syntax (dict[''key'']), it will raise an exception. But if you use the get() method (dict.get(''key'')), it will return None.

    The more well-understood technique raises an exception, while it can be bypassed if the calling code wants to specifically allow an unknown key to return None. I suppose the trick here is knowing (when you''re writing your code), whether or not the dictionary''s values should be a certain set of keys, or if they''re dynamic, such as input from a web form. You pick the method that makes the most sense.

    And yes, I do agree that Java''s exception handling is more sophisticated, no language war needed there. But that''s a separate issue from whether or not people actually use it. But again, I doubt either of us have access to enough of a representative sample to make objective observations on that subject.

    I keep thinking of more to write, but the rest is more of a follow-up to my post than a response to yours, so I think I''ll use today''s post to expand on my original thoughts, with your responses in mind. And I''ll even lay off the Java references. Thanks for the feedback!'
  replies: []
- id: 7013
  author: Mark Derricutt
  date: '2007-11-21T09:53:09'
  content: '@Alex - actually - you might have a line line "if (userManager.userExists(someUser.getUserName())" - the null might be on userManager OR someUser.  Without a debugger you can''t tell.

    Ideally I''d love to see NPE exceptions automatically mention the variable name that was null (or at least its type).

    I''m also loving the new @Nullable/@NotNull annotations and IDE support in IDEA (and others) for explicitly defining and checking those ''possible null'' conditions.'
  replies: []
- id: 7014
  author: lumpynose
  date: '2007-11-21T09:55:29'
  content: In cases where I've had an NPE it's been obvious where the null came from, and why, by simply inspecting the code.  I can't recall ever having to trace back through several calls finding out where it came from.
  replies: []
- id: 7015
  author: Kevin Menard
  date: '2007-11-21T10:25:31'
  content: '@Jesse

    While a debugger can certainly help figure out why something is null in the first place, my guess is that Alex is saying that you can employ practices that make this unnecessary in most cases.

    E.g., mark ivars as final.  With a single assignment, you know exactly where the value became null.  Looking at the assigment line, you may very well be able to figure out what the problem is without ever needing to fire up the debugger.

    The real problem can be paths of calls as Mark illustrates.  Oftentimes, however, I can tell what the issue is without needing to open up the debugger *shrug*'
  replies: []
- id: 7016
  author: Kevin Menard
  date: '2007-11-21T10:29:34'
  content: '@Marty

    Unfortunately, having a Master''s degree in computer science has about zero correlation to programming ability.  Graduate studies focus far more on theory than implementation and even then, many students will use an academic language.

    In my grad school days I worked with a lot of smart people that generated absolutely atrocious code in Java, C, C++, Python, Ruby, ML, Lisp, Scheme, and just about any other language you can think of.'
  replies: []
- id: 7017
  author: Jesse Kuhnert
  date: '2007-11-21T11:24:04'
  content: '@Kevin

    Duly noted on the debugger point,  though with the limited python experience I possess I''m a little skeptical of how often it becomes immediately obvious for your own code or when maintaining someone else''s code.  (or larger codebases)

    The dictionary example Marty came in to the comments with is a perfect example of why throwing an exception in the dict[key] case is annoying/unnecessary as I''ve personally been bitten by this weirdness in my own python development.

    Why is asking a dictionary for a key that doesn''t exist an error?  Not only is it not an error,  it would seem to force (I''m imagining, maybe not) weird code structures where you must either use get instead because dict[key] doesn''t work if you don''t know it exists or rely on exception blocks executing as part of the normal flow of your program.

    Am I the only one that had to learn the hard way that dict[key] throws an exception for a missing key and must be replaced by dict.get(key) instead?   Seems counterintuitive to me.  My paper bound dictionary doesn''t self destruct if I fail to find a word in it,  nor do online dictionaries.'
  replies: []
- id: 7018
  author: afsina
  date: '2007-11-21T13:53:13'
  content: Many times, returning null indicates poor API design, like returning a null instead of a zero size array or empty collection. but yes i agree that returning null is sometimes OK and throwing an exception for those cases, is most of the time, wrong.
  replies: []
- id: 7019
  author: Kevin Menard
  date: '2007-11-21T14:40:46'
  content: '@Jesse

    I guess a common theme in Python is to ask for forgiveness rather than permission.  This is based on my experience with Python, which was initially fueled by Django (as seems to be the case with Marty), but has moved to other areas.  As such, it''s common to throw exceptions.

    The alternative is to ask for permission first, which means either using dict.has_key() or the "in" keyword.  I''ve grown into a habit of using the latter.  "if key in dict: blah = dict[key]".  I view this as idiomatically similar to doing null checks in Java.  Both are quirky to one familiar with the other.  Neither are better than the other.'
  replies: []
- id: 7020
  author: Alan Cyment
  date: '2007-11-21T15:43:29'
  content: 'I think two different subjects are being discussed at the same time:

    A- When should an exception be thrown?

    B- How do we model, using OO, the concept "lack of"

    For A, I wholeheartedly agree with exceptions being thrown only when an exceptional condition takes place. But as far as B is concerned, I don''t agree with your quick dismission of the Null pattern, and I so does the GoF guys. At a recent OOPSLA where they were given a prize for their contribution to the OO community, E.Gamma said during his keynote that the original book had many patterns that were not quite useful, and it definitely lacked a very useful one, which they''d like to add if they ever published a 2nd version: the Null Pattern.

    I''m not saying "don''t you ever use null". I''m simply stating that Null is sometimes too general in its meaning, which leads to bloated, null-checking code that ends up hurting readability and decoupling. If you''re simply querying to see if a hash table has a value, maybe null is just fine. But be warned: null-dependent code maybe just around the corner.

    my 2 pesos,

    Alan'
  replies: []
- id: 7021
  author: Bernd Eckenfels
  date: '2007-11-21T16:24:41'
  content: A program which shoes NPE is usually programmed very sloppy. Avoiding NPEs is just a minor step in increasing software quality (however one which must be taken).
  replies: []
- id: 7022
  author: Hrm2100
  date: '2007-11-21T21:55:14'
  content: '@Alex:

    >> This has to be a joke, right?

    >> I can''t think of a single time where

    >> I''ve had to fire up the debugger

    >> to track down a null object.

    Really? Have you ever seen constructions like that one:

    doSomething(getThat().doThis().getIt());'
  replies: []
- id: 7023
  author: Kirk
  date: '2007-11-21T22:47:19'
  content: 'Other non-exceptional cases include throwing an exception when you''ve reached the end of file. This is not an exceptional case, every file has and end!

    I will say this, I don''t like returning null and I will avoid returning null except for when it becomes difficult to avoid doing so. That said, I rarely return null.'
  replies: []
- id: 7024
  author: Wouter Lievens
  date: '2007-11-22T00:40:49'
  content: The best way to track down the source of null pointer exceptions is by making sure all involved methods (including setters and constructors) check their arguments and throw IllegalArgumentException's in case null is not allowed. That way you "push" the error up so that it occurs earlier in the flow, closer to the source of the problem. It's the most powerful advantage of design-by-contract, in my opinion.
  replies: []
- id: 7025
  author: Rob W
  date: '2007-11-22T06:01:04'
  content: 'I''ve never needed to fire up a debugger to track down NPEs either....

    On the other hand, I tend to write with a "fail fast" approach, so null objects that must not be null generally hit an assertion pretty quickly, and the offending method that broke its contract is trivial to locate.

    This is an aspect of design by contract (mentioned in another comment), and it''s incredibly valuable... I''ve seen coders who always initialize new variables to a new empty object (even though that''s discarded later when the "real" object is retrieved and assigned!), for fear of NPEs.  Now *that* can be a pain to debug -- instead of a null and a quick NPE, you can have a half-initialized object floating around the system for however long....

    I guess one of these lines with method calls on 4-5 different objects is also pretty rare in clean code.  Just break it out a bit -- it''s easier to code review, easier to debug, and easier to maintain later.'
  replies: []
- id: 7026
  author: Geoffrey Wiseman
  date: '2007-11-22T17:50:06'
  content: None is Python's equivalent of None?  ;)
  replies: []
- id: 7027
  author: G.Ka
  date: '2007-11-26T23:43:15'
  content: 'Great post as usually!

    Good to read real toughts of a real programmer'
  replies: []
- id: 7028
  author: Alain O'Dea
  date: '2007-12-02T07:14:51'
  content: '@Cedric

    The Null Object pattern is useful beyond preventing NullPointerExceptions. Joshua Kerievsky''s book "Refactoring to Patterns" indicates that this pattern is more useful for reducing duplicated logic for interpreting the meaning of null. I don''t disagree that null is a valid return type in certain cases. However, it has proven to be problematic in the system I am currently working on where everything in the data model is a JavaBean in order to work with JDO. This lends itself to very complicated NullPointerExceptions whose origins are non-obvious. I am guilty of making generalizations as well and having read your post I see why my colleagues find it so offensive when I do.'
  replies: []
- id: 7029
  author: Chowdary Thammineedi
  date: '2008-01-05T07:18:50'
  content: 'To hell with the architects and their Design patterns.

    I follow the principle "Don''t accept nulls, Don''t return nulls".

    Obviously this means raising an exception but at-least that makes the code much more consistent. I would say not finding an account is an Exception but its an exception NOT an ERROR.'
  replies: []
- id: 7030
  author: BradMcBad
  date: '2008-11-20T09:44:44'
  content: '@Chowdary

    Using exceptions as part of the expected flow is a bad idea in all instances. Exceptions are for exceptional circumstances, and as such their implementations is never very streamlined, compared to the main body of JVM code. Not so much of a problem in a small desktop app, but in a large scale enterprise app, can destroy performance.

    Of course, there''s nothing to stop you from doing.

    Foo variable = operation(abc);

    if(variable == null);

    If returning empty sets isn''t an option.'
  replies: []
---

This blog post called [Returning None is evil](http://gulopine.gamemusic.org/2007/11/returning-none-is-evil.html) caught my attention. In this article, the author (Marty Alchin) tries to explain why you should never return `None` (this is Python's equivalent of `None`). Since he also takes this opportunity to take a few unnecessary potshots at Java, I thought I'd make a few comments. 

Marty seems to be prone to exaggeration. For example, he states that `NullPointerExceptions` (or rather, their Python equivalent) are: 

> exceptionally hard to debug 

It typically takes me less than a minute to find such errors. The first ten seconds are dedicated to jumping to the place where the exception occurred, and the remaining to finding where that value came from (usually instantaneous with Java IDE's. Python doesn't have those... pity). 

Marty then continues by saying that returning a `None` value indicates that 

> an error occurred 

Well, not always. For example, when you look up a key that doesn't exist in a dictionary, is this an error? It seems very much part of the contract of the class to me. There are many, many other situations where the fact that a value cannot be returned is not an error (such as looking up a configuration preference). Throwing an exception in these cases is not just a waste, it complicates the caller code needlessly and it deceives future readers into thinking that something very wrong occurred. 

> If you're using Python (which I hope you are), embrace exceptions. 

Absolutely. And Java programmers embrace exceptions just as much as Python developers (I'd argue that Java's exception system is more sophisticated since it allows for both checked and unchecked exceptions, but let's not digress). 

> I hope I've made the point well enough without writing a song called Raise an Exception. Whatever you do, don't return None unless None represents some usefulness to your code. 

Well... so what do we do? Unfortunately, the article ends here. At least if you're going to criticize, offer a few suggestions to remedy the problem, will you? 

Here is a scoop: exception should only be thrown for **exceptional** situations. Not finding a configuration value is not exceptional. Not finding a word in a document is not exceptional: it can happen, it's even expected to happen, and it's perfectly okay if it does. 

So, what are we supposed to do when the situation is not exceptional and that, according to Marty, we can't return `None` either? His post is interestingly silent on this, so let me try to offer a suggestion. 

There is a design pattern known as the Null Object, which also tries to minimize the number of `NullPointerExceptions` one can encounter in the code. The idea is that when you are tempted to return `null`, you return an empty object of the desired type. This saves the user from testing for `null`, but it's also fraught with all kinds of problems that I won't get into, so it's hardly ever used. 

My advice: there is nothing wrong with returning `null`/`None`. All you need to do when you're wondering whether you should throw an exception instead of returning `null` is whether the current situation is an error or whether it is expected to happen.
