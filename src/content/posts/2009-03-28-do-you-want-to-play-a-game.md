---
title: Do you want to play a game?
date: '2009-03-28T21:28:00'
slug: do-you-want-to-play-a-game
categories:
- General
comments:
- id: 7707
  author: dkaz
  date: '2009-03-28T22:14:54'
  content: nope...game is worth 81 cents by my count
  replies: []
- id: 7708
  author: Daniel Spiewak
  date: '2009-03-28T23:46:23'
  content: 'Not quite.  I''m too tired to do the proper math, but here''s the intuitive argument...

    50% of the time, you lose all your money.  This means that to compensate, you must receive *at least* twice as much as you bet another 50% of the time just to stay even.  Since this threshold 76-100, I think it''s safe to say that the game is weighted fairly heavily in favor of the house.

    This is assuming of course that you bet exactly the same amounts every time.  Though, I suppose that over an infinite number of rolls, given these odds, it doesn''t matter how much you bet, you''re not going to get much of it back.'
  replies: []
- id: 7709
  author: Chris
  date: '2009-03-29T01:28:37'
  content: Depends if I want to deliberately lose money to you or not. I should on average loose 19 cents to you every time I play.
  replies: []
- id: 7710
  author: Jesse Wilson
  date: '2009-03-29T01:56:37'
  content: If I get to play multiple times and there's no bet limit, I'll play. I'll just use the Martingale roulette system, wherein I double-up each time I lose.
  replies: []
- id: 7711
  author: Alexis Kennedy
  date: '2009-03-29T05:53:58'
  content: '>you roll a die

    I roll the die, not you? Excellent, let''s go!'
  replies: []
- id: 7712
  author: Timothy Patrick Connor
  date: '2009-03-29T10:53:20'
  content: Jesse, cool, you have an infinite pile of money to play with?
  replies: []
- id: 7713
  author: mlbright
  date: '2009-03-29T14:01:20'
  content: 'Yes, I would like to play...

    #!/usr/bin/python

    import random

    import sys

    TRIES = 1000000

    BET = 1

    otaku = 0

    me = 0

    while TRIES > 0:

    TRIES -= 1

    x = random.randint(1, 100)

    if x = 51 and x = 66 and x = 76 and x &lt;= 99:

    me += 2 * BET

    elif x == 100:

    me += 3 * BET

    print "otaku: %d, me: %d" % (otaku, me)'
  replies: []
- id: 7714
  author: mlbright
  date: '2009-03-29T14:04:34'
  content: My last comment didn't paste quite right.... But I still would like to play ...
  replies: []
- id: 7715
  author: Cedric
  date: '2009-03-29T14:11:48'
  content: mlbright, there's an error in your calculation, can you spot it?
  replies: []
- id: 7716
  author: Weeble
  date: '2009-03-29T15:40:39'
  content: mlbright, I am assuming that chunks of your code between less-than and greater-than signs have been eaten by the comment system, however I think you may still have overlooked something important. Think about what your variables represent and what important invariant should exist between them after any round.
  replies: []
- id: 7717
  author: Matthias
  date: '2009-03-30T00:33:30'
  content: '#Version in ruby (Note that one variable me/otaku would suffice since this is symmetrical)

    experiments = 5

    while experiments > 0 do

    experiments = experiments -1

    tries = 1000000

    otaku = 0

    me = 0

    while tries > 0 do

    tries = tries  - 1

    me = me -1

    otaku = otaku +1

    x = 1+rand(100)

    if x >= 51 and x = 66 and x = 76 and x &lt; 100:

    me = me +2

    otaku = otaku -2

    elsif x == 100:

    me = me +3

    otaku = otaku -3

    end

    end

    puts "I have #{me}, while you have #{otaku}"

    end

    #Results confirm my analytical solution'
  replies: []
- id: 7718
  author: n
  date: '2009-03-30T09:59:17'
  content: I think I'd be better off playing roulette and betting on red/black.
  replies: []
- id: 7719
  author: Sony Mathew
  date: '2009-03-31T12:51:23'
  content: I would play those odds..There's a 50% probability that I will win (I play 21 which is about 48%).  Additionally my wins have a higher probability of being double the bet.
  replies: []
---

You put down some money and you roll a die between 1 and 100. Depending on your roll: 

  * **1-50** : I keep your money. 
  * **51-65** : You get your money back. 
  * **66-75** : You get 1.5 times your money (if you bet $1, you get $1.50) 
  * **76-99** : You get 2 times your money 
  * **100** : You get 3 times your money 
Do you want to play? 

_Update: here is[the solution](http://beust.com/weblog/weblog/archives/000509.html)_
