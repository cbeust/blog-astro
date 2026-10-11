---
title: The Lisp dilemma
date: '2004-03-26T08:09:06'
slug: the-lisp-dilemma
categories:
- General
comments:
- id: 1374
  author: ''
  date: '2004-03-26T11:50:11'
  content: '"The Lisp community suffers from a severe case of "underdogness" which manifests itself as acute short-sightedness, persistent bitterness and ravaging delusion, which I also like to refer to as the "Luke Skywalker syndrome", where you feel you are part of the resistance against a bigger and ruthless power (I once suffered from this syndrome when I was the proud -- too proud -- owner of an Amiga)."

    This is an absolute crack-up. Look around yourself, dude. You''re doing it again.'
  replies: []
- id: 1375
  author: Chris Maeda
  date: '2004-03-26T14:07:22'
  content: Don't confuse the Lisp hackers with Functional Programming weenies.  The Lisp hackers I know are some of the most practical-minded systems builders you will ever want to meet; many of them ended up working for Sun on various parts of Java.  The people that are into languages like Haskel, ML, etc tend to be closet mathematicians and generally don't care that people ever use or even compile the programs they write.
  replies: []
- id: 1376
  author: ''
  date: '2004-03-26T14:09:33'
  content: 'Take a closer look at Haskell - it''s quite cool in lots of bizarre ways, though the chances of actually getting to use it in the real world are a bit limited, to say the least. It''s not the same animal as Lisp. It really is strongly and statically typed (unlike Lisp as far as I know). The compiler is guaranteed to catch all type errors at compile time, even though you as a programmer don''t have to declare the types of variables. How cool is that?

    It''s an easy language to learn too, but you do need to undergo a preparatory brain transplant :-)'
  replies: []
- id: 1377
  author: ''
  date: '2004-03-27T03:39:37'
  content: '"The compiler is guaranteed to catch all type errors at compile time, even though you as a programmer don''t have to declare the types of variables. How cool is that?"

    Not very cool, unless it''s a write-only programming language.

    It may be useful if the compiler would annotate the source with this information so humans can understand it as well. But these things are not that great because the compiler can only analyse what the program does at present, but not what the programmer intends to do in the future. The programmer may make assertions about a type that will be used only in a later version.'
  replies: []
- id: 1378
  author: Brian
  date: '2004-03-27T10:22:42'
  content: 'You might be interested in http://groups.google.com/groups?selm=qjhgo91m7z.fsf%40mpih16.mpi.nl -Not the comp.lang.functional FAQ. Very funny.

    Lisp shouldn''t be counted in this category though (and it shouldn''t be ALL CAPS either; this isn''t 1970 anymore). I doubt many lispers make the presumption that their programs are intuitive to those who haven''t studied programming; in fact it was a prominent lisper who wrote http://www.norvig.com/21-days.html -Teach Yourself Programming in Ten Years. The language itself is very pragmatic with a powerful OO system (CLOS) that I use all of the time when writing web applications. The ability to update live data to reflect a different class definition at runtime is wonderful!'
  replies: []
- id: 1379
  author: Gavin
  date: '2004-03-27T10:53:02'
  content: 'I''m not sure where your confusion lies in the meaning that was ascribed to strong typing in Haskell.

    There is some confusion as to the meaning of strongly typed.  The meaning that was presumably used on the Haskell page was the widely understood definition in the CS community.  The meaning of strongly typed is that operations to be performed on one type can only ever be performed on that type, and must never be applicable to other types.  Haskell obeys this principal.  Haskell compilers often do extensive type analysis that allows static type reasoning for many parts of the program.  Was static typing what you refered to?  A Haskell compilers may only use run time typing if there is no way to deterministically reason about the type of something at compile time.

    Also the comment about core dumps betrays some ignorance you have about the reasons for core dumps.  Haskell will never cause a core dump for any reason since there is no possibility of type violation, or memmory violation.  Bounds checking is only dispensed with if it can be deterministically decided at compile time.  This of course does not apply to libraries that may be linked to a Haskell program, so I guess in that sense you could obtain a core dump, but that just leads one to believe that perhapse the library should have been writen in Haskell.'
  replies: []
- id: 1380
  author: David Friar
  date: '2004-03-27T11:30:52'
  content: '"It may be useful if the compiler would annotate the source with this information so humans can understand it as well"

    It can. Or at least when developing with the Hugs  interpreter you can type :t to get the type signature of any function, so for example :t qsort shows me that the type of Cedric''s quicksort function is

    qsort :: Ord a => [a] -> [a]

    which reads "qsort is a function that takes a single parameter which is a list of type "a" and returns a list of type "a", where "a" is any type which is a member of the Ord typeclass (which is analagous to saying "a implements Comparable" in Java)

    When declaring a function you can supply this type signature explicitly yourself if you wish (and it''s generally considered good practice to do so). (If you do the compiler will check it at compile time.)

    "But these things are not that great because the compiler can only analyse what the program does at present, but not what the programmer intends to do in the future."

    The trouble is that in Java we have a tendency to end up being either too specific or too general. We''ll either end up saying

    public int[] qsort(int[] ints)

    in which cased we''ve severely limited our reusability, since all we really care about is that we can compare the things in the list, not whether they''re ints, floats or intergalactic bananas,

    or we''ll end up too general...

    public List qsort(List objects)

    ...and have to unsafely typecast things at runtime. Haskell''s polymorphic type system solves this problem and is in a sense not completely dissimilar to having generics in Java.

    "Not very cool, unless it''s a write-only programming language"

    In my (actually quite limited) experience it''s more of a read-only language :-) Getting things done that you''d think would be straightforward can sometimes require an unexpected amout of lateral thinking. This is a langauge that has no assignment, no statements and no iteration, where functions are not allowed to have side effects and the compiler will flag an error if it detects that you do not have both hands tide behind your back. OK I lied about the last bit.'
  replies: []
- id: 1381
  author: Jerry
  date: '2006-12-16T17:27:14'
  content: Uh, haskell and ML aren't lisp.  They just happen to also be functional languages with some smug users.  And haskell is strongly typed, I don't see how you think you're gonna build a flamewar out of that.
  replies: []
- id: 1382
  author: Brian Adkins
  date: '2007-10-09T13:04:33'
  content: 'Maybe you should use the following qsort definition. It seems pretty clear to me:

    qsort [] = []

    qsort (x:xs) = qsort less ++ [x] ++ qsort more

    &nbsp;&nbsp;where less = filter (=x) xs

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;more = filter (>=x) xs

    It''s nice that you have a preview (I wish I did), but having to enter the captcha each time is a pain. It should know that the session is associated with a successful captcha :('
  replies: []
- id: 1383
  author: haskeller
  date: '2007-11-06T15:19:38'
  content: 'qsort [] = []

    qsort (x:xs) = qsort elems_less_than_x ++ [x] ++ qsort elems_more_than_x

    where elems_less_than_x = filter (=x) xs'
  replies: []
- id: 1384
  author: ''
  date: '2007-11-06T15:20:36'
  content: 'qsort [] = []

    qsort (x:xs) = qsort less ++ [x] ++ qsort more

    where less = filter (=x) xs'
  replies: []
- id: 1385
  author: Frywater
  date: '2008-05-24T21:53:07'
  content: 'Haskell is a statically typed language, that is a fact. (haskell 98 report)

    Every statically typed language is strongly typed, that is a fact. (on understanding types, data abstraction, and polymorphism cardelli/wegner)

    Haskell is a strongly typed language.'
  replies: []
- id: 1386
  author: asdf
  date: '2009-07-24T14:32:27'
  content: '> Every statically typed language is strongly typed, that is a fact.

    Um, no. It is generally accepted that C is statically typed, but not strongly typed. Any data in C can be cast into any other type. eg. A character string can be cast into a struct.'
  replies: []
---

I like Lisp.  I really do.  I learned it in college about fifteen years ago and during my PhD, I was happily hacking emacs Lisp on a regular basis.  When the OOP trend hit, I was ecstatic to be able to combine the power of Lisp and objects in Common Lisp and also some other variants, such as Scheme, CAML, or Haskell.  They're all fascinating tools for the mind and they definitely change the way you look at programming.

That being said, there is something I don't quite like about Lisp:  its users.

Lisp is a language that never really made it in the mainstream, and this failure has caused a profound trauma in its followers.

The Lisp community suffers from a severe case of "underdogness" which manifests itself as acute short-sightedness, persistent bitterness and ravaging delusion, which I also like to refer to as the "Luke Skywalker syndrome", where you feel you are part of the resistance against a bigger and ruthless power (I once suffered from this syndrome when I was the proud -- too proud -- owner of an Amiga).

Lisp fanatics are an amusing crowd, really, and what prompted this post is precisely the amusement that [this introduction to Haskell](http://www.haskell.org/aboutHaskell.html) procured me.

This page starts by giving an implementation of Quick Sort in C and then in Haskell:

> 
>     qsort []     = []
>     qsort (x:xs) = qsort elts_lt_x ++ [x] ++ qsort elts_greq_x
>     where
>     elts_lt_x   = [y | y <- xs, y < x]
>     elts_greq_x = [y | y <- xs, y >= x]
>     

which is then described as:

> Functional programs are often easier to **understand**. You should be able to understand the program without any previous knowledge of either Haskell or quicksort. The same certainly cannot be said of the C program. 

What a gem.

I also liked:

> In particular, strong typing means **no core dumps**! 

The assumption here being that Haskell is strongly typed, a claim that would be enough to start an all-out flamewar on comp.lang.* that lasts for months, but the core dump argument really takes the cake.  Are you convinced to convert to Haskell yet?

Lisp users do have a sense of humor, though, so make sure you visit [Paul Graham's collection of Lisp quotes](http://www.paulgraham.com/quotes.html).
