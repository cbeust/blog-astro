---
title: How many snakes on this plane?
date: '2006-08-22T16:27:28'
slug: how-many-snakes-on-this-plane
categories:
- General
comments:
- id: 5890
  author: Chris Nokleberg
  date: '2006-08-22T18:26:05'
  content: I think it takes 8 snakes.
  replies: []
- id: 5891
  author: Chris Nokleberg
  date: '2006-08-22T18:45:21'
  content: 'http://sixlegs.com/misc/snakes.png

    You should wait until Friday to post these things you know :-)'
  replies: []
- id: 5892
  author: Alan Green
  date: '2006-08-23T20:31:43'
  content: Four.
  replies: []
- id: 5893
  author: Patrick Gras
  date: '2006-08-25T03:30:45'
  content: I also say 4...
  replies: []
- id: 5894
  author: Mike M.
  date: '2006-08-25T12:13:16'
  content: 'I was trying to find solutions to this puzzle because it was puzzling me elsewhere (that is, assuming the author intended to mention 0 is not a valid answer) and I stumbled upon this page.

    By the way, Chris - your solution doesn''t work.  The third snake from the top (shaped like a ''&lt;'') has two heads touching him.'
  replies: []
- id: 5895
  author: Eugene Kaganovich
  date: '2006-08-25T13:31:09'
  content: zero
  replies: []
- id: 5896
  author: Eugene Kaganovich
  date: '2006-08-25T13:31:41'
  content: zero
  replies: []
- id: 5897
  author: Lolita
  date: '2006-08-26T06:29:11'
  content: Warez, lolitas, porn movies, cracks, trojans http://liveshow.ru
  replies: []
- id: 5898
  author: Chris Nokleberg
  date: '2006-08-26T09:16:29'
  content: 'Shoot!

    Okay then I change my answer to infinity :-)'
  replies: []
- id: 5899
  author: Mocky
  date: '2006-08-28T12:46:34'
  content: 'Zero is the easy way out. If you take zero then you miss out on some interesting problem solving.

    After reading the rules it becomes immediately obvious there is only a small set of ways a snake can touch its neighbors. For any given snake, as soon as you touch its head to the tail of another you are forcing its middle to touch a head and tail to touch a middle. In fact there are exactly 2 ways for a snake to touch its neighbors.

    http://img143.imageshack.us/img143/9196/snakesonaplanewo5.gif

    Configuration #1 (C1) C1'
  replies: []
- id: 5900
  author: Mocky
  date: '2006-08-28T12:47:19'
  content: 'Zero is the easy way out. If you take zero then you miss out on some interesting problem solving.

    After reading the rules it becomes immediately obvious there is only a small set of ways a snake can touch its neighbors. For any given snake, as soon as you touch its head to the tail of another you are forcing its middle to touch a head and tail to touch a middle. In fact there are exactly 2 ways for a snake to touch its neighbors.

    http://img143.imageshack.us/img143/9196/snakesonaplanewo5.gif

    Configuration #1 (C1) C1'
  replies: []
- id: 5901
  author: Alan Green
  date: '2006-08-28T19:03:30'
  content: 'No really, Mocky, four.

    Start off with two snakes 1 and 2. Have the tail of snake 1 (T1), touch the Head of snake 2 (H2). Now get snakes 3 and 4, with the head of 3 touching the tail of 4. That gives the following touching pairs:

    T1 H2

    H3 T4

    At this stage, there are two free tails, two free heads and four free middles. If we match up the heads with the tails, that would leave four free middles, so instead, we match the heads and tails to the middles. Given the rules about only being able to touch each other snake once, there aren''t many ways to do that. That gives the following additional pairs:

    M1 T4

    M2 H3

    M3 T2

    M4 H1

    So that''s all the pairs. You can then draw out the snakes on paper and satisfy yourself that the pairs can touch without the lines crossing.'
  replies: []
- id: 5902
  author: Mocky
  date: '2006-08-29T05:44:07'
  content: 'That doesn''t work Alan.

    T1 H2

    H3 T4

    M1 T4

    M2 H3

    M3 T2

    M4 H1

    You omitted T3 and had T4 twice, so I assume that''s a typo. You also omitted H4 and have H3 touching both T4 and M2.

    But the bottom line with only 4 snakes even if you sort out your doubles and omissions is that you''ll break rule #2 (Each snake is touched by exactly one head, one middle, and one tail.)'
  replies: []
- id: 5903
  author: Alan Green
  date: '2006-09-04T17:35:35'
  content: 'Mocky,

    Yeah, I think you''re right. I fluffed it when I drew my picture.

    Alan.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/snakes-plane.gif)

Snakes are laid out on a plane with the following requirements:

  * Each snake has 3 parts: head, middle and tail.
  * Each snake is touched by exactly one head, one middle, and one tail.
  * Each snake can only touch another snake at most once.
  * Each part of a snake must touch a different part of another snake (no head-head, middle-middle, tail-tail).
  * The snakes can't overlap or cross as they are on a plane.



What is the minimum number of snakes that you need?
