---
title: Objects that won't budge
date: '2003-10-01T09:11:48'
slug: objects-that-wont-budge
categories:
- Java
comments:
- id: 572
  author: information about zone diet
  date: '2004-11-04T13:11:35'
  content: 'Hi - I was looking for some political sites with articles on the recent US election and found your nice site. The comments from others on here are pretty good so I just thought I''d add my thoughts also!

    Elaine Cooper'
  replies: []
---

Since people asked, I thought I would make a few clarifications on my previous posting on the Half-Bean technique presented by Brian.

The problem that Brian is trying to solve is that of objects incompletely initialized.  Such bugs happen in the code, and Brian's attempts (correct me if I'm wrong) are aimed at catching these errors as soon as possible:  at object construction instead of when the object is used, which can be buried deep inside application code.  The problem is **not** about immutable objects (although this is interesting as well, see below).

I don't think there is an easy solution to this problem, and I still believe that the Half-Bean technique introduces a lot of fragility in the code.  You should try to catch this error as soon as possible, which means, in decreasing order of robustness:

  * In the constructor of the class.  
 
  * Every time a setter is invoked.  
 
  * When the object is being used. 



Decoupling the validating logic from the business object is dangerous.  It looks appealing from an encapsulation point of view but in the long run, it will cause more problems than it solves.  After all, the validating logic is a subset of the business logic encapsulated in your object.

Next, I'd like to address [ Brian's clarifications](http://slesinsky.org/brian/code/functional/half_bean_questions.html), which allow me to see more clearly where he is coming from.

Brian is trying to emulate some of the good qualities often associated with functional programming, one of which being object immutability.

First of all, one could probably argue that object immutability is just a very small portion of functional programming and that just like a lot of other aspects (such as the absence of side effects), it's easy to find counter-examples in the real world:  Lisp typically supports functions that modify the object physically (e.g. rplaca), and the "no side-effect" rule is violated every time somebody uses "setq" or "lets".

Note also that Ruby addresses this problem syntactically:  methods that modify an object physically should contain an exclamation point (this is just a convention, though).  For example, the method "s.sub" returns an object with the substituted strings, while "s.sub!" will directly modify the object s.

But let's get back to immutable objects.

Immutable objects certainly make it easier to write thread-safe programs, but except for this particular case, I would argue that their importance is vastly overestimated.

I used to be a zealous "const" adept back in the C++ days, but as time went by, I realized that maintaining the constness of my code was a daily struggle that consumed much more energy than it should, while the benefits were really hard to notice.

The situation in C++ became so bad that the Committee eventually introduced "const_cast", a cast specifically designed to strip an object from its const quality, and the "mutable" modifier, which allows you to declare a method "kind of const".

I wouldn't go as far as saying that "const is a failed experiment", but C++ implementation of immutability was certainly riddled with flaws that made the whole idea very unwieldy.

I will continue discussing these issues in the next entry.
