---
title: Objects that should budge
date: '2003-10-03T07:44:44'
slug: objects-that-should-budge
categories:
- Java
comments:
- id: 573
  author: Brian Slesinsky
  date: '2003-10-03T10:53:29'
  content: 'I agree that remembering to use final is annoying.  I actually think variables should be final by default, and you should have to declare them mutable if that''s what you want.  (With the exception of the counter in a for loop.)  Assigning a variable once and never changing it is actually more common than updating a variable.

    I don''t think you''ve fully thought throught he consequences of making string mutable by default.  Most programmers tend to find aliasing to be surprising.  That is, after "String s = t", modifying "s" should not modify t as well.  Mutable objects that are passed by reference can be a rich source of surprises (that is, bugs).

    For thread safety we would have to religiously copy strings everywhere to prevent thread synchronization and security bugs, or (better) have the language do it automatically.  Then the performance tip would be to remember to use ConstString instead of String to avoid all the copying.'
  replies: []
- id: 577
  author: Dichotomy's Purgatory
  date: '2003-10-03T12:46:00'
  content: '<strong>Renaming Java Strings to ConstStrings</strong>

    This linkage, I do agree with -- Objects that should budge. Quoting: "call the current String class ''ConstString'' and StringBuffer,...'
  replies: []
- id: 574
  author: Hristo
  date: '2003-10-07T11:42:31'
  content: 'On the string issues:

    ... One improvement in J2SE1.5 is the "AbstractStringBuilder". Neal Gafter (The javac guy) is using for the compiler-emitted code,

    for example. I guess, it is like a faster StringBuffer, without the synchronized keyword. You can see it, if you download the latest generics prototype 2.2 EA (jsr14). BTW, there are other interesting classes there too, which give you a clue where things are going ...

    Hmm..., have not I seen "StringBuilder" in the  "useless" (as per Hani) commons-lang?

    Hristo'
  replies: []
- id: 575
  author: Ross Judson
  date: '2003-10-13T10:02:15'
  content: 'I couldn''t disagree more.  We have several million lines of code in our system, and there are probably fewer than two dozen StringBuffer usages in all that code.

    Virtual all string manipulation is concatenation, and the compiler''s default "+" handling does a good job on that.  If you are finicky about performance in a particular place, or want to tightly control the memory that is being allocated, your own StringBuffer and code is a good idea.

    For everything else, the benefits of this optimization vastly outweight what are, in my opinion, non-existent costs.'
  replies: []
- id: 576
  author: Jonathan
  date: '2003-10-14T17:07:27'
  content: Strings were made immutable for one main reason - thread safety.
  replies: []
---

A few additional thoughts on the [ "Half-Bean" technique](http://slesinsky.org/brian/code/functional/half_bean_questions.html).  Brian says:

> If I add a final instance variable to Album and forget to set it in the constructor, the code won't compile. 

Mmmh, yes, but you need to remember to use "final".  And also not to assign it directly in the declaration.  If you don't religiously do these two things (I don't know about you, but I pretty much only use "final" on constants), my original complaint applies:  you have no way to remember you need to update the Builder class every time the main class changes.

On a slightly different topic:

> Making Strings immutable was a wonderful choice 

I wonder about that.

One of the main reasons why String is immutable is performance.  While trying to make Java faster, the designers pushed an optimization decision on us, poor programmers, who are now paying a dear price.  String is immutable, but the fact is that we need mutable strings on a daily basis.  How did the Java designers solve this problem?  By silently introducing StringBuffer objects whenever the operator "+" is applied to a String.

The consequence of this choice is sadly obvious:  the #1 tip you see in Java performance books is "Use StringBuffer to manipulate strings, not String".

Making String immutable was a very poor design decision, because in people's minds, a String object is mutable.  Always was, always will be.  It would have been much more realistic to call the current String class "ConstString" and StringBuffer, "String".  At least this naming obeys the principle of least surprise.
