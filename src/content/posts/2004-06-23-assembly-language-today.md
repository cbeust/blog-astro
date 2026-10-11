---
title: Assembly language today
date: '2004-06-23T08:11:17'
slug: assembly-language-today
categories:
- General
comments:
- id: 1682
  author: Dan Creswell
  date: '2004-06-23T11:45:31'
  content: 'Whilst I don''t agree with the original author''s concern about performance, bloat etc I do think there''s another aspect which is of more interest.

    Programming in assembly language means you''re "close to the metal" in all sorts of ways.  You have to learn about branch prediction, memory barriers etc.  Chances are you also make use of the deeper levels of the software stack, maybe even bypassing it completely.  You''re quite likely to come into contact with interrupt handling and the like.  Working at this level means you gain a grasp of how things hang together much better than you do when using, for example, Java in a JVM which hides so much from you.

    This deep awareness helps you understand the tradeoffs in your architecture and your code that much better and, when things start going wrong, provides you with other tools you can use to try and determine what the issue is.

    My definition of a programmer would be one who chooses the right tools for the job and chooses well because he has an excellent grasp of the environment in which he works and the effects of the choices he makes.  Messing around with a bit of assembly language contributes to that excellent grasp.'
  replies: []
- id: 1683
  author: Frank Bolander
  date: '2004-06-24T09:13:15'
  content: 'IMO, the problem with software nowadays is that it has become so abstracted from the "metal", as Dan said, that Software Design is more poetry that engineering anymore. Abstraction is a good thing,  but everything in moderation is a better thing.

    15 years ago, if you brought up O(n) vs O(log(n)) complexity arguments in a discussion, it would be understood what the argument was.  Nowadays, you get blank stares from 9 out of 10 of your development team.'
  replies: []
- id: 1684
  author: Jonathan Ellis
  date: '2004-06-24T09:56:20'
  content: 'Huh?  Knowing about algorithm efficiency is completely separate from knowing assembly language.  Algorithms by definition are implementation-agnostic.

    Case in point: I don''t think any of the CS programs in my state teach assembly language anymore; certainly it''s not required.  But ALL of them require classes on basic algorithms.'
  replies: []
- id: 1685
  author: Stephane Rodriguez
  date: '2004-06-26T08:18:00'
  content: 'Someone who understands assembly code has a tremendous power over his peers, and is not in fear of seeing an disassembled view of code. This I believe does nothing good to time-to-market, but what about the ability to debug a problem regardless the conditions and environment?

    Definitely a plus in your resume.'
  replies: []
- id: 1686
  author: Dan Weinreb
  date: '2004-06-29T22:32:35'
  content: Cedric says "I encourage developers to learn as many new languages as they can, and the more esoteric the better.  Assembly language is no exception..."  That's one way to look at it. I'd suggest a different way to look at it, namely that I'd recommend study of "assembly language" not because it is a language, but because it's useful for people to know about computer architectures. That is, what's more important to understand is machine instruction sets. (The various cool macro features of assembly langauge are much less important to understand, these days, for example.) It's helpful to understand what's going on at all the different levels of abstraction. These days it's also nice to know something about the level below the instruction set, things like branch prediction and pipelining and caches and so on. Of course not everybody needs to know all that, but it's one of those things that a senior professional should have some familiarty with at least.
  replies: []
---

As a former assembly language addict who used to live and breathe hexadecimal on a daily basis (okay, that was twenty years ago, until I saw the light with C), I was quite intrigued by [this article](http://www.onlamp.com/pub/a/onlamp/2004/05/06/writegreatcode.html) called "Why learning assembly language is a good idea".  Unfortunately, the author's obsession with performance spoiled what otherwise sounded like a promising piece of advice.

> However, as new programmers worked their way into the system, without the benefits of having written several applications in assembly, the efficiency of software applications began to decline. 

This is the first questionable assertion and while all of us can come up with examples of applications that are too slow to our taste, I don't believe this to be the case in a general manner.

> it is clear today that the demise of assembly language's popularity has had a big impact on the efficiency of modern software. 

This is not that clear to me.  There are many skills  you can leverage to make an application go faster, among which:

  * Consummate use of a profiler.
  * Knowing when your code is I/O / network / CPU / memory - bound.
  * Understanding the documentation of the external API (the one you don't own) that you are using.
  * Having some basic knowledge of algorithm complexity (O(n) versus O(log(n)).



I would argue that in modern software, the knowledge of assembly language will come in handy much less frequently than any of the above.

> their ability to read disassembled high-level language code and detect heinous bugs in a system, and their understanding of how the whole system operates elevates them to near legendary status among their peers. 

This might have been true twenty years ago.  Nowadays, it's just cute :-)

> The first milestone I achieved was the release in the mid-1990s of the electronic edition of _The Art of Assembly Language_. This book, along with the use of the accompanying UCR Standard Library for 80x86 Language Programmers, reduced the effort needed to learn assembly language programming. 

I'm sure this is a great book, but what if I want to write assembly language on a Mac?  Oops.

Maybe, just maybe, this might be a reason why assembly language is not as necessary as it used to be?  Because it ties you to an architecture.  Or worse, to a specific version at a certain point in time of a certain architecture.  Until the next revision comes up, with its own set of operands, registers (or disappearance thereof) and quirks.

Since the author of the article teaches assembly language, I can understand his disappointment on the state of software, but what worries me is that his bitter attitude and partisan advice is part of the problem. 

The best way to gain respect from your students is by not insulting their intelligence and just be honest with them.  I've had math teachers open their class with "I know most of you don't care about mathematics and you will probably never use much of what is being taught here, so just take this opportunity to listen to some unusual things that will challenge your mind, and after that, you can just decide for yourself how useful it should be for you".  Now **that** got my interest.

I encourage developers to learn as many new languages as they can, and the more esoteric the better.  Assembly language is no exception, so if you've never had a chance to study it, grab a book one day and go ahead and I'm sure you will become a better programmer, somehow.  But to me, the definition of a good programmer is not someone who is an expert on a specific language, but one who knows a lot of them and uses his good judgment to pick whichever is best for the job.

RTS.
