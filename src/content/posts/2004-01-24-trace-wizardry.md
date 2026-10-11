---
title: Trace wizardry
date: '2004-01-24T14:24:36'
slug: trace-wizardry
categories:
- Java
comments:
- id: 1004
  author: Cameron
  date: '2004-01-24T15:42:40'
  content: I'm not sure if you noticed, but my "StackFrame support" is built manually by parsing the exception stack trace ;-) .. the trace() code that I posted works all the way back to 1.2. Peace.
  replies: []
---

Indeed, [ Cameron's trick](http://jroller.com/page/cpurdy/20040123#yaul_trace) is pretty cool.  I have been using a similar trick for a while now, except that when I wrote it, we didn't have StackFrame support, so it was all about dirty manual parsing of the stack trace.

However, my technique is different from Cameron's in the following ways:

  * I don't print the name of the variable.  Most of the time, I'm not tracing a variable (could be an array or the result of a method) and anyway, the name of the variable is not that important.  
 
  * However, I use the trick to print the name of the class.  This is the most important part, in my opinion.  I can't count the number of times where I painfully looked for a particular trace in my source code in order to remove it.  IDE's make it a little easier to do that now, but they also have limits (like when the text happens to be i18n'ed and therefore, nowhere to be found in your *.java files).  
 
  * And finally, I give my trace functions a very identifiable name, for a reason related to the previous point.  Using a name like "trace()" or "p()" makes it challenging to find all the places where you invoke the trace, so I typically use "ppp()".  You can't type this by accident :-)



All that being said, IDE's make this kind of hack almost useless these days.  For example, I have a template called "ppp" and all I need to do is type "ppp<space>" at any moment to have the trace method automatically implemented with the class name and everything else in it.

But it's nowhere near as elegant as the trace walking.
