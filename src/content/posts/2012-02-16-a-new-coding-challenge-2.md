---
title: A new coding challenge
date: '2012-02-16T11:43:24'
slug: a-new-coding-challenge-2
categories:
- General
comments:
- id: 9441
  author: Laurent Pireyn
  date: '2012-02-16T11:53:32'
  content: The answer to 1) is trivial if a random number generator can be used. The answer to 2) depends on the availability of a *real* random number generator then, doesn't it?
  replies: []
- id: 9442
  author: Tom Hawtin
  date: '2012-02-16T12:19:06'
  content: I was going to suggest that java.util.Collections.shuffle will shuffle your array, you then merely need to prove that your interfacing to that method is correct (such proofs are beyond me). Unfortunately, looking at the documentation (yes, it does exist), the method is only specified in vague and approximate terms. I shall generate my private keys elsewhere. What you really need for a proof is sloppily accurate specifications.
  replies: []
- id: 9443
  author: Cedric
  date: '2012-02-16T12:21:56'
  content: 'Laurent: even with a "good" random generator, getting the answer right to 1) is surprisingly tricky if you don''t know how to go about it, which is why 2) is important.

    Tom: I''m not asking a formal proof, just a test that can give you a quick estimate of how random your function is, at least so you can compare two different implementations. I wrote such a function and the Java shuffle() method gets a perfect score on it.'
  replies: []
- id: 9444
  author: ysopex
  date: '2012-02-16T12:33:20'
  content: 'http://pastebin.com/UMWVAQdK

    Pipe the output of this to something that looks for collisions/dups, ''uniq -d'' seemed to work pretty well. The fewer dupes the more random.'
  replies: []
- id: 9445
  author: Lawrence Kesteloot
  date: '2012-02-16T12:41:03'
  content: 'What''s interesting is that if n &gt; 16 then the answer to #2 is "no" unless you have an unusual random number generator. At n=17 or above you exceed the state space of java.util.Random (48 bits) and most other generators. So all routines that shuffle a deck of cards are unfair, for example, and by a very long shot. They only come up with one combination in 10^54.'
  replies: []
- id: 9446
  author: Cedric
  date: '2012-02-16T13:38:47'
  content: 'Lawrence: maybe I''m missing something but I disagree. I am pretty sure that I can test the randomness of your function on arrays of the size in the millions or even billions.'
  replies: []
- id: 9447
  author: Robert Konigsberg
  date: '2012-02-16T14:09:23'
  content: 'Here is the Java solution: http://pastebin.com/Ziv3yma9

    Here is the more hastily written Javascript solution: http://pastebin.com/Y6ejtRPz

    The Javascript solution may have a bug, but demonstrates what is provable. Anyway here''s my best guess for what you want. Time to walk the dog: http://pastebin.com/ZaawpZXV'
  replies: []
- id: 9448
  author: Lawrence Kesteloot
  date: '2012-02-16T14:12:36'
  content: 'Cedric: I didn''t say that you couldn''t test it, I said that the answer would be "not random". In other words, you can''t prove that it''s "really random" because it''s not. It can''t be, there''s not enough state in the random number generator to cover all the permutations once n &gt; 16.'
  replies: []
- id: 9449
  author: Chris Dolan
  date: '2012-02-16T14:21:45'
  content: 'http://pastebin.com/Dh33ajHV

    Mine is a Perl solution. The shuffle is in an iterative pick N with removal. Then I analyze the result statistically. I''m pretty sure I did the math wrong in the end, but here''s how I did it: run the shuffle M times and count how many times each number lands in each position. As M increases, the counts should approach the average value of M/N. I compute the sample standard deviation of the actual answer from the expected value. But I think I''ve done that std dev computation incorrectly.'
  replies: []
- id: 9450
  author: Lawrence Kesteloot
  date: '2012-02-16T14:44:58'
  content: 'Chris: Imagine an algorithm that generates [0, 1, ..., n-1], and all rotations of it (shifted over, not permuted). Your test would pass but it''s not a good shuffle.'
  replies: []
- id: 9451
  author: Chris Dolan
  date: '2012-02-16T15:07:20'
  content: 'Lawrence: good point. I could improve it my measuring change between shuffles, but then I''d be hurt by an algorithm that permuted the change...'
  replies: []
- id: 9452
  author: Praveen
  date: '2012-02-16T15:40:03'
  content: https://gist.github.com/1849215
  replies: []
- id: 9453
  author: Trevor Bentley
  date: '2012-02-16T18:25:06'
  content: 'You can''t prove a selection of numbers are ''random''.  You could possibly prove that an algorithm is ''random'', for certain definitions of ''random'', but not programmatically.  Don''t confuse ''random'' with ''uniformly distributed'', which are absolutely not the same thing.

    If you just pick continuously increasing digits of pi, you''ll get approximately uniform distribution (for large sets, on average).  But a random number generator that just picks digits of pi certainly isn''t random... it''s highly predictable and repeatable.'
  replies: []
- id: 9454
  author: Cedric
  date: '2012-02-16T18:27:54'
  content: "Trevor: Yes, I clarified this earlier on Google+, here is my comment:\n Right, I guess a better description would be \"evenly distributed\", or \"not predictable\". Imagine your code will be used to power gambling machines that will be used hundreds of thousands of times every day. You really want to make sure that no pattern can be inferred in the arrays that you return. How would you test for that?"
  replies: []
- id: 9455
  author: Philip
  date: '2012-02-16T18:42:03'
  content: 'Let''s get the easy part out of the way with #1

    http://pastebin.com/LfjPvsr1

    Unless I''m an idiot (which I may be), I don''t think that given a good RNG #1 is difficult.  An Inductive proof is in the comments.  (note that the code uses the framework''s fast generator - I used a crypto safe RNG generator as well but it ran about 200x slower).  Note that the proof assumes the RNG has no bias - if it does, the shuffle will be biased as well.

    So #1 is the easy part and is uninteresting.  Writing code to for question #2 is the fun bit.   I''m using the code above as my "reference" to create a proof test harness.  I will also create a few "bad" random generators to make sure my prover can reject a bad implementation.   In fact, perhaps I''ll see just how bad the .net framwork''s random.next() really is.

    I have written the exhaustive prover (give every possible permutation and verify the results are unique each run) that shows the algorithm is solid, but the running time and memory consumption are unacceptable.  I will attempt to tweak that.

    A statistical prover will be more insteresting and also test the RNG, especially if I can set a "sigma threshold" where it will generate test runs until it hits a given confidence level.   I''ll work on that a bit.  I''m going to try not to peek at the Diehard suite.

    Note that even though your test code can show that java''s shuffle (.net''s random as well) has a std deviation approaching correct, it doesn''t mean it isn''t biased in what shuffle it produces- just that the shuffles have good individual randomness.   I don''t believe shuffle() has enough degrees of freedom - since it takes a 32-bit seed, it can only produce 2^32 different random sequences, which is WAY less than the 52! different shuffles.

    For a 52 card deck, to be able to produce all possible shuffles with no bias requires a RNG that is seeded with at least 226 bits (to get past 52! possible states)   I believe Schneier and Ferguson''s Fortuna could be put to use here because it uses entropy gathering to continually reseed in a safe manner.  I believe there''s a Java implementation, so I may switch to that rather than write my own.'
  replies: []
- id: 9456
  author: Eric A.
  date: '2012-02-16T18:57:44'
  content: 'XKCD solved the problem of proving randomness a long time ago.

    http://xkcd.com/221/'
  replies: []
- id: 9457
  author: Cedric
  date: '2012-02-16T19:01:31'
  content: Yeah but his algorithm wouldn't pass my test :-)
  replies: []
- id: 9458
  author: Tom Ritchford
  date: '2012-02-16T23:15:10'
  content: 'Part 2 is of course a trick question.

    First, any program you write is deterministic (unless you''re using some sort of hardware randomizer) - which means the numbers aren''t "random" at all.

    Second, you can''t actually prove that any sequence of numbers is random.  There are numerous tests for non-randomness - but all they will do is show that a sequence of numbers is probably non-random, and that''s the best you can do.

    Even if you pretend you have a real random number generator, what you''re going to prove is simpler than "true randomness" randomness - simply that any array element at the start has a uniform distribution of appearing in any of the slots at the end.'
  replies: []
- id: 9459
  author: Harmlezz
  date: '2012-02-17T00:33:47'
  content: 'Ok, here is my solution: http://pastebin.com/hsk4RHUx. The test tries to succeed as fast as possible (if the function does produce random arrays) without sacrificing correctness. In case the function does not produce random arrays the test will never terminate. My idea: if a function does not produce random arrays than there is at least on permutation which will never be returned. So there must exist at least to indexes and two numbers which are never returned by any array. Hope i am correct :)'
  replies: []
- id: 9460
  author: Frank Spychalski
  date: '2012-02-17T01:20:20'
  content: 'http://pastebin.com/QWDyP3n0

    This is basically drawing values without returning them.'
  replies: []
- id: 9461
  author: Thomas Grainger
  date: '2012-02-17T03:13:19'
  content: 'One way of obtaining "true random" numbers is to use data from the system entropy pool, usually with a front end like /dev/random

    A way to test randomness would be to use a Monti-carlo method to calculate a value that can be calculated through an alternative route, such as the Monti-carlo method to determine pi.'
  replies: []
- id: 9462
  author: Vijay
  date: '2012-02-17T04:34:35'
  content: Groovy solution at http://goo.gl/ip8WG
  replies: []
- id: 9463
  author: rrp
  date: '2012-02-17T06:10:51'
  content: 'This is more of algorithm question. So let me first tell the algorithm

    There are n! (n factorial) permutations

    1) Use java ''s Random.nextInt(n!) to get a random index to Kth permutation (index 0 .. n!-1)

    2) Print Kth permutation  (it is possible to print it in O(n) )'
  replies: []
- id: 9464
  author: Danno Ferrin
  date: '2012-02-17T07:02:26'
  content: How do these 'randomness checkers' respond to being fed Costas Arrays?  http://en.wikipedia.org/wiki/Costas_array  To me this is more of a QA question than a coding question, as the test cases are essential to a good answer.
  replies: []
- id: 9465
  author: Davide
  date: '2012-02-17T11:25:47'
  content: 'quoting Bruce Schneier:

    The cause of this is almost certainly a lousy random number generator [...]This shouldn''t come as a surprise. One of the hardest parts of cryptography is random number generation. It''s really easy to write a lousy random number generator, and it''s not at all obvious that it is lousy.

    http://www.schneier.com/blog/archives/2012/02/lousy_random_nu.html'
  replies: []
- id: 9466
  author: Justin
  date: '2012-02-17T12:01:35'
  content: For part 2, testing your random generator, you could try generating several arrays of size n, treat the generated arrays as a table, and compute the Chi-square of the table to look up its p-value. If it produces a high p-value then then it suggests there is no relationship between column data and likely to be random.
  replies: []
- id: 9467
  author: Ricardo
  date: '2012-02-18T09:53:23'
  content: 'Perhaps the best solution to #2 would be to attempt to predict the output of #1. If you can successfully write code to predict the next result, then you test will fail.'
  replies: []
- id: 9468
  author: Ricardo
  date: '2012-02-18T10:01:11'
  content: In other words, maybe you don't need to prove randomness, you just need to demonstrate that your algorithm cannot be predicted with the techniques you are aware of.
  replies: []
- id: 9469
  author: Ryan
  date: '2012-02-18T10:03:01'
  content: 'This uses python''s random.shuffle() over a series of trials and displays the frequency of the [0]th value:

    https://github.com/rflynn/python-examples/blob/master/src/random/shuffle/icky-shuffle.py'
  replies: []
- id: 9470
  author: Tetha
  date: '2012-02-18T15:26:20'
  content: 'Thinking about it, I think the best approach to (2) would be to separate the problem into a source of random bits and an actual shuffler.

    That way, you first have to prove that the random shuffler takes at least a certain estimateable value of random bits for a certain input (for an array, this will be the logarithm of the number of permutations of elements in this array) and implements a bijective mapping from a bitvector of at least this length to the permutations of elements in this array. This should be provable easily enough with an algorithm, because you mostly derive a permutation from a bitstring and a bitstring from a permutation.

    If you have demonstrated this, your shuffle algorithm is essentially as random as your random source is. As others have noted, proving true randomness is impossible, and proving that things are pseudorandom with huge periods is har so using a previously implemented one is the best bet there :)'
  replies: []
- id: 9471
  author: Spacebark
  date: '2012-02-18T18:32:39'
  content: 'The algorithm is this: http://pastebin.com/cnCCpnyK

    it has O(n) runtime

    Proof is by induction on the elements in the array in the order they are filled in. I am assuming that the randint() function outputs the integers in its range with uniform probability

    Base case:

    The first element can be any element in the list

    Inductive Step:

    Assume that the first k elements in the array are a uniformly distributed random subset of the n elements of the list. Then it is also the case that the elements from [k:n] are a uniformly distributed subset of the list. We choose one of these elements and swap it into place, so the k''th element has a uniform probability of being any element in the array'
  replies: []
- id: 9472
  author: Ryan
  date: '2012-02-19T04:50:41'
  content: 'Spacebark,

    I believe that is the http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

    That algorithm is implemented in random.shuffle. Here''s how to tell:

    &gt;&gt;&gt; import random, inspect

    &gt;&gt;&gt; print inspect.getsource(random.shuffle)'
  replies: []
- id: 9473
  author: Brian
  date: '2012-02-19T11:34:14'
  content: 'I could easily do it in Python by appending all the numbers to a list and then shuffling the list using the random module, but that only generates "pseudo-random" numbers.. lol but isn''t that what Ramsey theory is all about?

    Ramsey theory: the mathematical study of combinatorial objects in which a certain degree of order must occur as the scale of the object becomes large.

    In other words, once a sequence becomes large enough, there''s no way to "completely" randomize it.'
  replies: []
- id: 9474
  author: Various ways to get randomness wrong &laquo; Otaku, Cedric&#039;s blog
  date: '2012-02-20T08:01:11'
  content: '[...] About                   &laquo; A new coding challenge [...]'
  replies: []
---

[It's been a while since I proposed a coding challenge](http://beust.com/weblog/weblog/2008/08/28/coding-challenge-wrap-up/), so I've been thinking about another one. Coming up with original problems that are not solved with a simple Google search is not easy, but I think this new one, while not especially hard, should produce some interesting and creative results. 

This problem comes in two parts. The first part is more of a warm up since it's very easy to look up, but the follow up question will, hopefully, be the source of innovative answers. 

Here it is: 

> 1) Write a function which, passed an int n, returns an array of size n containing all the numbers between 0 and n-1 in random order. For example, with n=5, valid answers are [0, 2, 3, 1, 4], [4, 1, 2, 0, 3], etc... 2) Prove that the function you wrote in 1) returns "really random" arrays. 

I'm being intentionally vague on how to answer the second question in order not to lead the answers, but hopefully, the question is specific enough that no further clarifications is needed. Feel free to ask in the comments otherwise. 

All languages welcome, and I suggest you use [pastebin](http://pastebin.com) to submit your code.
