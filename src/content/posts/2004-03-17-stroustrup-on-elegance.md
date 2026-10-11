---
title: Stroustrup on elegance
date: '2004-03-17T09:35:49'
slug: stroustrup-on-elegance
categories:
- Java
comments:
- id: 1346
  author: Stefan Tilkov
  date: '2004-03-18T07:53:20'
  content: Never mind C++'s obvious shortcomings, but I believe that in some areas, C++ programs can be shorter than their Java equivalents - especially when you use the (excellent) STL.
  replies: []
---

It's always interesting to get a chance to look inside Bjarne Stroustrup's mind.  Even though I am more and more distressed to see him entrenched in positions that are not easy to justify, such as "C++ is simple" and "Java is a bad language", he is a pragmatist at heart, and it's a quality I appreciate a lot.

This time, [Bjarne is being interviewed](http://www.artima.com/intv/elegance.html) by Bill Venners.  Here are a few things that made me react.

I find it interesting that when asked what "simple" or "elegant" means for a program, Bjarne answers:

> **Bjarne Stroustrup** : "Elegant" and "simple" are very related words. "Understandable" is another word in that area. What do they mean? It comes to down to: you can apply tools to your program. You can optimize it. You can maintain it. You can port it. If you can logically identify something, you can deal with it. If it's just a bunch of code scattered throughout a large program, you can't do a thing with it. 

This is vastly different from what I would have answered myself:  a program is simple if I can read it and understand it right away. All these other desirable features that Bjarne enumerates are a consequence of simplicity, but they do not define simplicity.  I suspect that Bjarne is trying to redefine the term "simple" so it applies to C++, which is quite a challenge in my opinion :-)

I also notice that Bjarne doesn't seem to be a big fan of YAGNI:

> **Bill Venners**** : How do we do that? How do we design for situations we can't imagine? **  
> Bjarne Stroustrup** : You listen to a lot of people and then you aim for generality. 

I also agree wholeheartedly with his laziness principle:

> I keep telling my students that they should be lazy. I reject programs that are too long, because when students get to do real work, they won't have time to write that much code. A lot of the things I call elegant you'll find are short compared to alternatives. 

However, the following quote:

> One of the things that amazes people is when you compare good C++ code to good code in other languages, the C++ code tends to be shorter. C++ code is shorter when it's written in terms of things like the standard library or other good libraries, because you can express ideas very succinctly. 

shows his bias, as he is obviously comparing C++ with C, not with Java, where I am willing to be that equivalent programs are shorter in Java because of its

  * Extensive libraries.
  * Simpler syntax.
  * Automatic memory management.



As a matter of fact, Bjarne manages to avoid talking about Java completely in this interview...

I wonder if in five years from now, Gosling will be giving a similar defensive interview while Groovy has become the de facto standard to write enterprise applications :-)
