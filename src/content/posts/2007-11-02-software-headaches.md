---
title: Software headaches
date: '2007-11-02T10:27:50'
slug: software-headaches
categories:
- Uncategorized
comments:
- id: 6987
  author: Geoff Wozniak
  date: '2007-11-02T11:37:55'
  content: 'The main one for me was functions as values/closures.  I was coming from a C/Pascal background and it took me a full day of doing an assignment in Scheme for my programming languages course before I figured out what the big deal was.  I have not since been happy programming in any other way.

    I was also mystified by PEEK/POKE on the Commodore 64, mainly because I had no manual for it and just copied code out of Byte magazine.  I would just change values to figure out what to do with them, but it wasn''t until recently that I learned what those operations really did.'
  replies: []
- id: 6988
  author: David Hayes
  date: '2007-11-02T11:50:24'
  content: 'Perl for me, I have to re-learn it everytime I want to use it :)

    Seriously though I struggle to think of a reason I''d use closures. I have a vague recollection of being totally baffled by peek and poke in my Vic 20 days (I was 8). Having learnt to code such a long time ago I find it hard to remember that programming constructs are highly abstract to most people (non-coders). This became very clear to me recently when I was trying to explain objects/classes to an interested friend.'
  replies: []
- id: 6989
  author: Ed
  date: '2007-11-02T11:52:52'
  content: Regular Expressions. It is amazing what you can do with expressions that look like line noise...
  replies: []
- id: 6990
  author: Aristotle Pagaltzis
  date: '2007-11-02T14:11:09'
  content: The one thing that gave me serious trouble was the fact how really quite simple it is to talk to periphery in software, in several senses. Assembler mystified me largely because of this; I understood what PRINT does in BASIC, but I couldn
  replies: []
- id: 6991
  author: Fred
  date: '2007-11-03T15:14:07'
  content: 'Definetly:

    - Regular expressions. They really look like someone is insulting you...

    - Operator Preceence. I did a conversion from C to Java, and after a while HORROR. They don''t have the same priority for / and *...

    Nightmares :-('
  replies: []
- id: 6992
  author: Mark Griffith
  date: '2007-11-03T16:42:51'
  content: 30 years in "The industry"? ?! You've been a professional coder since you were 6? :)
  replies: []
- id: 6993
  author: Michael
  date: '2007-11-03T17:36:35'
  content: 'I learned pointers in Pascal as well, and it was every bit as painful. I learned the mathematics of the arithmetic more or less, but without understanding it fundamentally. It wasn''t until years later (and a degree in math, not cs) that it really clicked.

    Now I routinely encounter senior Java programmers who obviously don''t really understand pointers. They can talk about pass-by-reference ''til they''re blue in the face, but they''ll turn around and want to "optimize" some method by passing an int field of an object, instead of the actual, already-loaded-in-memory object...'
  replies: []
- id: 6994
  author: Gordon J Milne
  date: '2007-11-04T02:01:53'
  content: Wow, 30+ years. You must be ancient. I'm 43 and I only have 18 years experience.
  replies: []
- id: 6995
  author: morten wilken
  date: '2007-11-04T23:41:26'
  content: 'Second on the learning assembly, then learning about c pointers. And suddenly it dawns on you.. this is not hard, i''ve done this in assembly.

    move.l #$10000,a0

    move.l #$10000,(a0)

    (68000 assembly, ymmv)'
  replies: []
- id: 6996
  author: ''
  date: '2007-11-06T01:29:27'
  content: 'Same thing for continuations, one of the worst memories of a Scheme training.

    Now struggling with monads. I''ll see if it works better.'
  replies: []
- id: 6997
  author: ''
  date: '2007-11-13T22:43:15'
  content: I hate Assembley langunage .I couldn't pass the lesson However I worked  :(
  replies: []
- id: 6998
  author: Saverio
  date: '2007-11-24T17:30:28'
  content: 'Trees.

    I found quite difficult to develop them, because one has to keep track of several pointers at the same time, and be extremely precise on which pointers to change, and think every single routine in a general way, and it''s not even easy to debug, and blahblahblah.

    In this days I''m writing B-Tree[s] routines for a database, and I spent several hours just to have a working insertion.

    Of course, I love trees ;-)

    On the other side, I never had any problem anyway with recursion, pointers, or assembler :-)'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/mindblowing.png)

Every once in a while in your career, you encounter problems or concepts that blow your mind. Either because they are complex or just because they are just plain exotic. Here are a few I can remember over the past 30+ years that I have been in the software industry... 

  * **Assembly language**. I encountered this for the first time on my Apple ][. After a year of learning some Applesoft Basic, I encountered a curious instruction that I had never seen before: CALL 768. When I ran it, it played some music. After weeks of research (this was in the early 80's... no Internet nor even books), I managed to figure out that I needed to switch to the "monitor", convert the address in hexadecimal ($300) and see the "listing" (basically opcodes). I was absolutey mystified. I couldn't make sense of any of this and but I did manage to alter the pitch and tune by inserting values in random places. It took me years to finally get a grasp of what's going on. One thing for certain: I was hooked. 

  * **fork()**. I encountered this mysterious function in my early CS classes, and if you're not familiar with UNIX, it basically lets you spawn a new process. The semantics of this function is absolutely baffling, I just can't understand how anyone could ever come up with this and think it's intuitive. But as years go by, you just get used to it, just like you stop noticing this eyesore building every morning on your way to work. 
  * **Pointers**. Aaah... pointers. Just when you think you start having a handle on this programming thing, a mean teacher throws you a curve ball and tries to explain to you how pointers work in Pascal. How inhuman. I suffered months of mental anguish trying to wrap my head around this concept, and then suddenly, it made sense (and I even managed to relate this to my earlier assembly language discoveries... now *that* was an epiphany). 
  * **Continuations**. As opposed to the other three items described above, I can't say that even as of today, I understand continuations. They just don't make any sense to me and even if they did, I just can't see any practical use to them except maybe to torture students and make sure you grade along the curve. Yuck. 

These are the main painful experiences I can remember, I'm sure there are more. 

How about you, readers: do you have any painful learning experiences to share in the area of computers?
