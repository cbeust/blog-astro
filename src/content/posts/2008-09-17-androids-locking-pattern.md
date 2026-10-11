---
title: Android's locking pattern
date: '2008-09-17T14:43:43'
slug: androids-locking-pattern
categories:
- General
comments:
- id: 7565
  author: Charles Crouch
  date: '2008-09-18T01:36:20'
  content: 'Would [5 0 2 1] be a valid 4 dot solution? Elided from [5 0 5 2 1] using a combination of the 3rd and 5th rules? I don''t see it in your list though? If it is valid then I''m getting figures such as:

    4 dots: 2352 solutions

    5 dots: 11760 solutions

    And for completeness:

    2 dots: 56 solutions (I know this one is right :-))

    3 dots: 392 solutions'
  replies: []
- id: 7566
  author: Nelson
  date: '2008-09-18T07:10:10'
  content: 'Nice small multiples diagram!

    This unlock system looks cool, but it sure seems less secure than a PIN and no easier to remember.'
  replies: []
- id: 7567
  author: Weeble
  date: '2008-09-19T02:22:07'
  content: '@Charles: I don''t believe that''s the meaning of the fifth rule. In fact, I think rule 5 is redundant with rule 4. Rule 3 may be redundant as well. I would restate the rules as follows:

    * A path must visit at least four dots.

    * Once a dot is visited, it must not be visited again.

    * You may only move between dots in straight lines, and may only change direction when visiting a dot.

    * You may not pass over an unvisited dot without visiting it (but you may pass over a visited dot).'
  replies: []
- id: 7568
  author: Weeble
  date: '2008-09-19T09:07:44'
  content: 'I can confirm those results, by means of a rather brute force search. I first created a function that takes the current dot and a set of all visited dots and reports which dots may be visited next. I further broke this down into "easy" cases and "hard" cases. For each dot, there is a set of dots that you can *always* visit next so long as you have not visited them before. These are the easy cases and can trivially be stored in a short table. The hard cases are the dots that can only be visited if the dot in the way has been visited first. For the corner dots, there are three such candidates, the dots in the other corners. For the dots in the middle of an edge, the candidate dot is the opposite dot. In all cases, the "blocking" dot is in between the two. The candidate dot can be visited next only when the blocking dot *is* in the visited set and the candidate dot *is not* in the visited set.

    Once you have that function, it''s easy to do a brute force search in a depth-first manner. There are some obvious ways to exploit the symmetry to chop down the search time a bit, and you can do most of the set operations with bitwise operations, but I''d be interested to know if there''s a more elegant algorithm. I don''t exploit the fact that, for example, the sets of possible suffixes for each of the prefixes 0134, 0314, 1034, 1304, 3014, 3104 are all identical.'
  replies: []
- id: 7569
  author: Weeble
  date: '2008-09-22T08:08:45'
  content: 'My implementation could be cleaner, and given that it appears to run instantaneously, the bit twiddling optimisation may have been completely unnecessary. Still, hopefully it''s not completely indecipherable.

    I put the code in pastebin, but it seems I can''t post the URL here. I''ll try without the prefix: pastebin.com/f6e4a1689'
  replies: []
- id: 7570
  author: Oscar Reyes
  date: '2008-10-11T15:32:13'
  content: This was the reason of the "code challenge"? Cool
  replies: []
- id: 7571
  author: Ian
  date: '2008-10-13T12:45:54'
  content: beautifull
  replies: []
- id: 7572
  author: J
  date: '2008-10-31T00:57:29'
  content: I like the page with all possible combinations using 4 dots.  You should post one showing all combinations using all 9 dots, or maybe just all possible combos!  That would be SWEET!!!
  replies: []
- id: 7573
  author: matt
  date: '2009-11-03T18:34:25'
  content: 'This is exactly the answer to the question I had - and then some. But the title should be Android''s unlocking pattern, not Android''s locking pattern.

    And yes, I see that the last comment is over a year old. Still a cool post though.'
  replies: []
- id: 7574
  author: JDub
  date: '2009-11-10T05:58:49'
  content: 'At first this is really cool ... but the smudges left behind might make it easy for someone to guess what pattern you are drawing.

    A better implementation would have the dots spaced with random variations/distortions.  For example, the dots could be uniformly stretched out or contracted, non-uniformly stretched/contracted (ex: one side a la trapezoid), or the entire grid could vary in its orientation or placement.  All of this of course would be random.

    As it exists, I personally would rather have the traditional pin/keypad.'
  replies: []
- id: 7575
  author: Android Users Wiki
  date: '2010-01-21T17:39:49'
  content: 'The Android unlock pattern is a big joke, since an attacker only has to trace the unlock smudge contour in each of the two directions, then they''re in. Actually, if you look carefully at a smudge, you can even tell where it started (a "tap" fingerprint) vs. where it ended (a "fly off the screen" smudge), so you can trace it right from the first try.

    I''ve posted a photo of the smudge on my HTC Hero to the bug at

    http://code.google.com/p/android/issues/detail?id=3146#c7'
  replies: []
- id: 7576
  author: Aprotim Sanyal
  date: '2010-03-18T11:49:12'
  content: 'It''s worth noting that you''re double-counting patterns. First off, in a brute-force attack, you don''t need to do every 9-dot sequence and every 8-dot sequence - each 8-dot sequence is exactly the same as a 9-dotter, except that you don''t go to the last dot (but since there''s only one dot, there''s only one place to go - hence the identical counts). However, because the phone will unlock as soon as you hit the correct sequence, you can just try every 9-dot sequence, and it will automatically try every 8-dot sequence.

    Extending this, you see that trying every 9-dot sequence is sufficient for brute force - on the way, you''ll try every 4-, 5-, 6-, 7- and 8-dot sequence. Thus, the reality is that at most there are 140704 combinations from the point of view of password strength. Worse, "knight moves" are unreliable and thus unlikely to be in a pattern, so the numbers are lower if you eliminate those.

    Given this information, how to order a brute force attack is an interesting question - how do you try every 9-dotter such that on the way you try every shorter pattern as quickly as possible?  Note, though that the phone will actually lock out an attacker copletely and revert to requiring a real password after some small amount of failed attempts.'
  replies: []
- id: 7577
  author: Aprotim Sanyal
  date: '2010-03-18T13:28:09'
  content: Hmm, never mind - I just tried again, and it doesn't accept the code until you lift your finger. Ignore previous comment.
  replies: []
- id: 7578
  author: Sriram Raman
  date: '2010-05-14T12:01:21'
  content: "I'm curious to know what the running time is for you guys. On python2.6, I get\nreal\t0m6.658s\nuser\t0m6.502s\nsys\t0m0.127s\nI can probably get that down to 3 easily with a couple of optimizations I can think of."
  replies: []
- id: 7579
  author: Austin Lawrence
  date: '2011-04-16T16:42:16'
  content: I like the unlock code concept and I disagree with post 11 because I don't think the majority of people would be able to figure out the pattern by smudges.
  replies: []
- id: 7580
  author: Rich K
  date: '2011-06-06T05:38:50'
  content: One potential problem I've been worried about with my phone (not that I've lost sleep over it) is that my finger leaves a "path" on the screen that I think could make it easier for someone to figure out what my code pattern is.
  replies: []
- id: 7581
  author: Morgan
  date: '2011-06-08T17:00:30'
  content: I'm surprised Android didn't just rip off the iPhone's lock screen. They've pretty much tried to copy every single feature already. This locking pattern is in no way innovative.
  replies: []
- id: 7582
  author: Michael
  date: '2011-08-24T10:23:28'
  content: Clean the screen, then there's no problem with hackers following the smudge line??
  replies: []
---

As you might already know, [Android](http://code.google.com/android/) uses an innovative approach to lock your phone and prevent accidental dialing. Play the short video above to see how it works. 

For the rest of this discussion, I will use the following convention to designate a locking pattern:  0 | 1 | 2  
---|---|---  
3 | 4 | 5  
6 | 7 | 8  
A pattern can be pretty much anything you want with the following constraints: 

  * It needs to contain at least four dots (and obviously, no more than nine). 

  * Once a dot is lit, it can't be used again. 

  * You can use one or several "knight moves", such as in [0 5 4 2]:  
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/knight.png)   
In this example, the knight move is between 0 and 5. 

  * You cannot go over an unlit dot without lighting it. For example, the pattern [0 2 1 4] is illegal, because moving your finger between 0 and 2 will light 1. 

  * Once a dot is lit, you can use it to reach another unlit dot. For example, both [0 4 3 5] and [0 4 5 3] are legal:   
![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/override.png)   
This example is a bit ambiguous but you get the idea: I trace [0 4 5] and then I slide over 4 again to reach 3. 
With these constraints in place, I wondered how many combinations were actually possible, so I wrote a short program to simulate it. It turns out there are quite a few: 389,112. Here is a breakdown: 

```text
4 dots: 1624 solutions
5 dots: 7152 solutions
6 dots: 26016 solutions
7 dots: 72912 solutions
8 dots: 140704 solutions
9 dots: 140704 solutions
Total:  389112
```

If you're not convinced, here is [a full list of all the four dot patterns](http://beust.com/weblog/keyguard.html) (the page only works on Firefox and it uses a big canvas object, it might take a few seconds to load). 

Still, I'm not sure my calculations are right, so I'd like you, dear reader, to confirm my numbers, and optionally explain how you coded your solution...
