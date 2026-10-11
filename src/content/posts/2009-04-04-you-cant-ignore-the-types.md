---
title: You can't ignore the types
date: '2009-04-04T17:25:05'
slug: you-cant-ignore-the-types
categories:
- Uncategorized
comments:
- id: 7733
  author: Iman
  date: '2009-04-04T21:34:19'
  content: Its actually getting dynamic productivity in a "static" language ...
  replies: []
- id: 7734
  author: Rusty
  date: '2009-04-05T11:47:31'
  content: 'There are languages, for example, OCaml, that allow you to write without declaring your variable types, but the compiler keeps track of their types and enforces their correct use.

    Even that seems like a bad idea to me.  I look at type declarations for variables as a form of enforced documentation.  And the compiler''s enforcement of their correct usage as a sort of built in micro unit tests.'
  replies: []
- id: 7735
  author: Jason
  date: '2009-04-05T14:04:10'
  content: 'Pay me now, pay me later.

    At the end of any of these mature development processes, that''s the decision that''s made, and it''s almost universally ''pay me now''.

    Mature developers of every flavor: ready, aim, fire

    Immature developers in any setting: ready, fire, aim

    The question I keep asking and nobody can answer to me is this:  If doing your dynamic code the ''right'' way starts to look like TDD (and I hear quite a few people say this is true), then what''s the difference?  You''re rigorously designing your code and its interactions with the world before it runs successfully for the first time either way.

    Why the venom at those of us who chose to get it in our compilers, and oh yeah, get a better IDE in the bargain?'
  replies: []
- id: 7736
  author: Sony Mathew
  date: '2009-04-06T11:11:27'
  content: Early points by Bill & Fred were really good.  Michele made a valid argument that Bill used dynamic 'Any' to solve the problem, however, most problems aren't that dynamic in nature but even for those cases Java lets you accept Object and (cast) to right type or check instanceof - however, most folks try and avoid that.
  replies: []
- id: 7737
  author: james
  date: '2009-04-06T14:50:24'
  content: I can still dig a hole with a spoon - thats dynamic - In a static world id be looking for something that implements dig, rather than something that responds the message to dig. This is the subtle difference.
  replies: []
- id: 7738
  author: lumpynose
  date: '2009-04-06T15:38:59'
  content: 'I''m also reminded of something Edsger Dijkstra said; (paraphrasing) something along the lines that computer programming is inherently error prone and therefore we should use tools that help us make fewer errors.

    There''s also the adage that a good framework, language, tool, whatever, should make it easier to do the right things, and more difficult to do the wrong things.'
  replies: []
- id: 7739
  author: ''
  date: '2009-04-06T21:34:27'
  content: 'True, that is if yo do OO development then typing is one unavoidable aspect of it.  Although you can still loosely define your types and that is one great strenght of Python for example, you still need to now "what" is it you have when performing actions on the instance.

    I would frankly much prefer knowing the elephant cannot quack when trying to cast it to a duck than seing it fail when I try to make it quack.

    But to cast anything you need to have definition of objects, thus types.

    those that say that types are useless simply have not gotten bitten enough to realize it...   wait a few years when they actually have to support their own software, if they do not learn by then then they will never do.'
  replies: []
- id: 7740
  author: tieTYT
  date: '2009-04-07T17:22:18'
  content: 'I''m very interested in Jason''s point of view here.  I''ve seen some of the Object Mentor guys say that the advantage of a dynamic language is that it''s easier to test in the first place.  In my interpretation, "If you''re going to write the tests either way, may as well pick a language that makes writing tests easier".

    Now, I code almost entirely in Java (I like JavaScript and I''m interested in giving Ruby/Haskell another try soon) and I also use Mockito.  And, Mockito makes it pretty damn easy to write tests.  I''m sure a dynamic language still has an advantage over it, though.

    That being said, I worry that in a dynamic language every time I want new code to use old code, I have to figure out how the old code uses its parameters.  Whereas, with a language like Java, I (theoretically) just need to look at it''s method signature.  To put it another way: In a dynamic language, I need to inspect a method''s implementation.  In a static language, I only need to inspect it''s interface.  Can someone explain to me where I''m wrong or why this isn''t an important detail?'
  replies: []
- id: 7741
  author: lumpynose
  date: '2009-04-09T15:18:47'
  content: 'I''ve also come to the conclusion that it''s essentially a religious argument; no amount of rational, objective, etc. discussion is going to change either side.

    So as a static types zealot I''ve started wondering what is it that makes one a run time type checking zealot?  Is it simply lack of having been burned?  Or is there more?'
  replies: []
- id: 7742
  author: sidereal
  date: '2009-05-03T12:56:17'
  content: '&lt;?php

    var_dump("true" == true);

    var_dump(true == 1);

    var_dump("true" == 1);

    ?&gt;

    Unless you''re excited at the prospect of tracking down the bugs that that causes (oh, and SQL injection), I strongly recommend strong static typing.'
  replies: []
---

The thread called ["Getting Dynamic Productivity in a Static Language"](http://www.artima.com/forums/flat.jsp?forum=106&thread=253855&msRange=15) on Artima has generated a lot of very interesting comments. 

In particular, the following statement made me react: 

> So that was the history, and so I was asking him what it was that made him feel so productive in Smalltalk, and one of the things he said is he didn't have to waste time thinking about types. 

This is a fundamental mistake that a lot of dynamic enthusiasts (short for "dynamically typed language enthusiasts") keep making over and over. 

The fact is: you always have to think about types when you write code, period. 

Dynamic enthusiasts are convinced that they can ignore this aspect of development altogether, but it always comes back to bite you, either when 

  * you write tests for your code 
  * you try to refactor it 
  * somebody else needs to modify it 
  * or simply when someone needs to use your code 
Eventually, you look at an object and you have to figure out what methods or messages it responds to, and I find that this problem is much easier to solve when the answer is in the source code in a form that can be enforced by the compiler. 

If you are interested in this topic, read the entire thread, it's worth it.
