---
title: Are you saying you're lazy?
date: '2005-04-22T07:46:11'
slug: are-you-saying-youre-lazy
categories:
- General
comments:
- id: 3478
  author: eu
  date: '2005-04-22T08:15:53'
  content: Hey Cedric! Factorial would be the number of combinations of your dependend tests in TestNG... :-)
  replies: []
- id: 3479
  author: Cedric
  date: '2005-04-22T08:18:01'
  content: No, actually, that would be the number of ways your tests can be executed by JUnit.  In TestNG, if you use dependent tests, there is only one possible ordering :-)
  replies: []
- id: 3480
  author: eu
  date: '2005-04-22T08:33:33'
  content: 'You see, if your test depend on some other you can''t guarantee that they are working right. I guess, to prove that you''ll have to write tests for each test chain. :-)

    With JUnit it is much simple because tests are independent and responsible for their own preconditions... Anyway this is quite theological discussion. :-)'
  replies: []
- id: 3481
  author: Cedric
  date: '2005-04-22T08:40:19'
  content: 'Not sure I follow you.  Why can''t you guarantee that tests that depend on each other work right?

    Did it occur to you that your JUnit tests "depend on" setUp() to work right?'
  replies: []
- id: 3482
  author: eu
  date: '2005-04-22T09:08:45'
  content: 'Cedric, the point is that you acn''t because you have no tests for that code. Even if TestNG is saying that all tests passed it doesn''t really mean that code has no bugs. :-)

    In JUnit setUp() method is defined in the very same class as all test cases, so it is more verbose to the flexible TestNG approach where you can glue your dependend tests in any order and combination using external configuration (which, by the way is another place to make mistakes).'
  replies: []
- id: 3483
  author: Cedric
  date: '2005-04-22T09:12:50'
  content: 'So you are saying that if your setUp() method is in the same class, it''s a guarantee that it is correct.

    That''s definitely an interesting line of thinking.

    I guess we should start saying JUnit developers to stop putting setUp() methods in their base classes.

    And what if this setUp() method invokes a method on a different class?  Gasp, the horror!'
  replies: []
- id: 3484
  author: eu
  date: '2005-04-22T09:25:02'
  content: 'I didn''t say that using setUp() guarantee anything. It is just more verbose and easier to track. Also, if setUp method screwed up that only affects tests from this particular test case.

    As I said this is all very theological discussion. :-)'
  replies: []
- id: 3485
  author: ''
  date: '2005-04-22T09:34:05'
  content: 'Isn''t it 2 to the power 25 combinations?

    :-)'
  replies: []
- id: 3486
  author: ''
  date: '2005-04-22T10:40:49'
  content: Indeed it is 2^25, I was just scanning this thread to see if anyone had noticed.  Funny how often people correct people incorrectly, and for all the web to see for that matter.
  replies: []
- id: 3487
  author: sfodoug
  date: '2005-04-22T10:49:00'
  content: 'If by "every possible combination", the cartoon means that exactly two of them must be tried together (and not the same one twice), wouldn''t it be "25 choose 2", which is 25!/23!?

    If by "every possible combination", the cartoon means that all 25 have to be done exactly once, but in the right order, then it would be 25!?

    It''s been too damn long since I did math like this.  :-)'
  replies: []
- id: 3488
  author: Stephen
  date: '2005-04-22T10:49:42'
  content: 'If you were to try the fixes in pairs you would end up with 25*24 or 600 possible combinations of two fixes that will work.

    There are also the 25 fixes that each might work on their own, so it could be that any fix or any two fixes would solve the problem: 625'
  replies: []
- id: 3489
  author: Frank Bolander
  date: '2005-04-22T11:00:00'
  content: 'Actually,

    Permutations are defined by P(n,r) = n!/(n-r)! .

    So if all permutations are required=

    P(25,25) = 25!

    If pairs are assumed

    P(25,2) = 25!/(23!) = 25*24 = 600.

    This assuming the order that you applied the fixes mattered. If they didn''t matter, use combinations

    C(n,r) = P(n,r) / r!

    God I bored.'
  replies: []
- id: 3490
  author: Thierry
  date: '2005-04-24T03:10:55'
  content: 'Hi,

    My solution would be the following.

    As we know in IT, the ordering of patches is very important,

    so for each patch pi, pj, we need to apply pi, pj, pipj, pjpi

    to see if the thing works.

    My solution to this is:

    Let''s consider p patches, the number of tries is:

    Sump(i=1, p) C(n,p) where C(n,p) = n!/(n-p)!

    For p = 25, we then have 1,348,676,382 different combinations to apply'
  replies: []
- id: 3491
  author: log(e)
  date: '2005-04-24T07:06:02'
  content: 'I think it is 2^25 - 1 because,  in 2^25 combinations I think there is a  NULL combination - meaning not applying a patch at all ( equivalent to "empty sub set" ).

    In this case problem is there in computer without applying any patch. So NULL comobination should be excluded and number of things to try is 2^25 - 1'
  replies: []
- id: 3492
  author: laurent
  date: '2005-04-25T04:33:52'
  content: 'Let''s assume the following:

    - patch ordering matters

    - applying a given patch is optional and can be done only once

    - at least one patch should be applied

    Then the answer for n patches is:

    sum_{i=1}^n n!/(n-i)!

    Note, I have often be proven wrong :)'
  replies: []
- id: 3493
  author: laurent
  date: '2005-04-25T04:37:14'
  content: PS - Sorry I misread Thierry's post because he misused the C notation, and his numeric result is wrong since 25! > 1.5 10^25
  replies: []
- id: 3494
  author: Thierry
  date: '2005-04-25T07:08:03'
  content: 'Laurent,

    Does this  sum_{i=1}^n n!/(n-i)! read as:

    Sum for i = 1 until n included of n!/(n-i)! ???

    I wrote:

    Sump(i=1, p) C(n,p) where C(n,p) = n!/(n-p)!

    And indeed I should have written

    Sump(i=1, p) C(n,p) where C(n,p) = n!/(n-i)!

    :-) . Identical to yours.

    However, I still stand for 1,348,676,382'
  replies: []
- id: 3495
  author: laurent
  date: '2005-04-25T09:00:39'
  content: 'Thierry,

    the fact is that C(n,p) stands for n!/(p!.(n-p)!) IIRC.  That''s why I did not thoroughly read your soluation, my mistake.  So our solutions are identical.

    I don''t remember the notation for n!/(n-p)!.  In France, it is A(n,p) (''A'' stands for ''arrangement'', which makes me think it might be the same term in English).

    Regarding 1,348,676,382, just take a part of the sum (since all terms are positive this gives us a lower bound on the sum):

    let''s say i = p = 25;  the term is 25!/(25-25)! = 25! ~= 1.5 10^25...

    So definitely 1,348,676,382 is too small :)'
  replies: []
- id: 3496
  author: Thierry
  date: '2005-04-25T12:45:40'
  content: 'Bloody hell! You''re right. I used int .. should have used BigInteger.

    The result is now:

    42,163,840,398,198,058,854,693,625

    different possibilities :-)'
  replies: []
- id: 3497
  author: Daniel Sheppard
  date: '2005-05-02T18:14:28'
  content: 'Actually, it''s more complicated than the previously posted formulae due to the fact that there is no need to "Reset" the system before moving to the next combination.

    For example, if there were three fixes, using the above formula, you''d have to do 3 things 3! times (or 18 things):

    1 2 3

    1 3 2

    2 1 3

    2 3 1

    3 1 2

    3 2 1

    However, if you take advantage of the overlaps, you can reduce this.

    1..2 is 3   ( 1 2 1 )

    1..3 is 9   ( 1 2 3 1 2 1 3 2 1 )

    1..4 is 33  (as opposed to 4x4! which is 96)

    1..5 is 153 (as opposed to 5x5! which is 600)

    I''m not sure what the mathematical formula is for this (I let ruby loose with a few minutes of cpu time to get the above figures), but I''m still pretty sure that 1..25 is going to end up a lot bigger than 625.'
  replies: []
- id: 3498
  author: Daniel Sheppard
  date: '2005-05-03T00:14:44'
  content: 'Ah, now I remember my maths. The mathematical series in question is http://mathworld.wolfram.com/FactorialSums.html:

    The sequence hits 16,158,688,114,800,553,828,940,313 for

    n=25 - less than half the number returned by the formulae above

    To get back to programmer world (ruby):

    (1..25).inject(0) { |s,x| s + (1..x).inject {|m,y| m*y } }'
  replies: []
- id: 3499
  author: Berlin Brown
  date: '2005-05-04T00:23:30'
  content: lazy people live longer.
  replies: []
---

It's not very often that Scott Adams makes a factual mistake, so the opportunity is too good to pass up.

Here is today's cartoon:

![](http://www.dilbert.com/comics/dilbert/archive/images/dilbert2005036621422.gif)

Of course, the number of possible combinations for twenty-five numbers is not 25*25 but 25! (factorial of 25)

A friend pointed out that 625 is the right number if you need to try these combinations in pairs, so I'll let Scott get away easy for this time.
