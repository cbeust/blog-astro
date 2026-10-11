---
title: Various ways to get randomness wrong
date: '2012-02-20T08:00:59'
slug: various-ways-to-get-randomness-wrong
categories:
- Coding challenge
comments:
- id: 9475
  author: Weeble
  date: '2012-02-21T05:57:25'
  content: 'To create a random unbiased source that returns random values between 0 and vary values of x, from an unbiased source that returns random values between 0 and 1, how about this:

    Maintain a "pool" of randomness. At any time, the pool should have a range n and a current value v, 0&lt;=v&lt;n, such that v is with equal probability any of the possible values, and independent of any previous values "output" by the pool. We will always restore this invariant before returning from a method call. Initially, the pool has n=1 and v=0, and the invariant can be seen trivially to hold. We call this state the empty state.

    You can increase the range of the pool by drawing on your random source of 0s and 1s. Each time you do so n becomes n * 2 and v becomes v * 2 + b, where b is the random 0 or 1. The range is doubled and the value is still with equal probability any of the possible values.

    With this setup, suppose you want a random value q, 0&lt;=q&lt;x. A crude approach is simply to keep increasing the range of the pool until n&gt;=x. At this point, if v&lt;=x, take it as your value and empty the pool, otherwise empty the pool and start over. However, if the source of random numbers is costly this is wasteful, as it may discard lots of useful entropy and result in a lot of re-rolls. The key insight is that in both scenarios it may be possible to leave some value in the pool without compromising the invariant that v is always with equal probability any value such that 0&lt;=v&lt;n, and independent of previous output.

    First of all, suppose that the pool has a large range n and x is small. Choose some value k such that k*x&lt;=n. Now so long as v&lt;k*x, we can decompose it (using integer division and remainder) into two independent random values, one of them q, 0&lt;q&lt;=x and the other v'', 0&lt;v''&lt;=k. q is our return value, v'' is the new value for v and k is the new value for n. This restores our invariant and doesn''t leave the pool empty (unless k=1, of course). We should always choose as large a value of k as possible.

    Secondly, consider the case when v&gt;=k*x. Within this branch, we need to try again, but we needn''t completely empty the pool. We now know that v is with equal probability any value &gt;=k*x and &lt;n. We can decrement both n and v by k*x and restore our invariant that v is with equal probability any value &gt;=0 and &lt;n, independent of previous output. In the worst case, k*x=n-1, in which case n becomes 1 and v becomes 0 - the pool is empty. As before, we continue by refilling the pool and trying again.

    This pool can be used with the Fischer-Yates algorithm for shuffling whatever you want. I think it avoids introducing any bias from rounding. Principally, I think it does a good job at minimizing the number of calls to the underlying random number source, so long as the pool is always topped up to keep n much larger than x. I believe the cost of refilling the pool on a miss rises more slowly than the probability of misses falls as you increase the minimum size of the pool.'
  replies: []
- id: 9476
  author: ted
  date: '2012-02-22T00:06:56'
  content: "Your intuition here is wrong:\n  &gt;&gt; Since the matrix is NxN = 25, we would expect\n  &gt;&gt; each element of the matrix to be approximately\n  &gt;&gt; 5,000,000 / 25 = 200,000.\nEach element of the matrix will contain approximately\n    NumTrials / N\nelements.  Not\n    NumTrials / N^2\nWhy?"
  replies: []
- id: 9477
  author: fredv
  date: '2012-02-22T00:29:05'
  content: Since a bubble sort has enough steps to sort an array, it also must have enough to shuffle one, so how about doing a bubble sort and have the random source replace the comparison function.
  replies: []
- id: 9478
  author: xavier
  date: '2012-02-27T15:05:18'
  content: Thanks for the article, I found it very usefull for a real world use case (ie evaluate random weighted loadbalancing algorithms) in Camel. See https://issues.apache.org/jira/browse/CAMEL-5039
  replies: []
- id: 9479
  author: Sony Mathew
  date: '2012-03-01T10:10:21'
  content: Interesting stuff.  If you truly presume a "fair" random source - distribution would be "randomly" skewed.  E.g. tossing a coin theoretically could produce heads the first 10000000 times.
  replies: []
- id: 9480
  author: Nicoo
  date: '2012-03-01T11:22:19'
  content: 'So, we want to generate values between 0 (inclusive) and x (exclusive).

    Let''s have N=ceil(log_2(x)) (the smallest n such that 2^n&gt;=x).

    The simplest solution is taking N random bits for the source, and concatenate them. We get some random integer Y, uniformly distributed over [0;2^N[, and the successive values it takes are independent (since consecutive bits are independent).

    If it is lesser than Y, we output it; if not, we compute another Y, rinse and repeat.

    However, on average, you need (2^N)/x trials (which is between 1 and 2), using N(2^N)/x bits, when log_2(x) is (theoretically) enough.

    For the ''a..e'' example, we use 3*8/5=4.8 bits, when only ?2.32 are required, "wasting" about 51% of the random bits we take.

    However, we can improve on that by producing k numbers in [0;x[ at the same time :

    We use the previous method to produce a number Y in [0; x^k[.

    You write it down in base x (Y_0 = Y mod x, Y_1 = (Y/x) mod x, ... Y_(k-1) = Y/x^k), producing your k random numbers.

    It''s fairly easy to show they are independent, uniformly distributed, since Y is taken uniformly in [0; x^k[.

    To produce we used M*2^M/(k*(x^k)) bits per number, with M = ceil(k*log_2(x)).

    On the ''a..e'' example, for k=3, we use a bit less than 2.39 bit per number generated, wasting less than 3% of generated bits, which is a huge improvement.

    Intuitively, I chose k so that x^k=125 is close (but lesser than) a power of 2 (here, 128).'
  replies: []
- id: 9481
  author: Nicoo
  date: '2012-03-01T15:53:29'
  content: 'PS : Of course, in the Fisger-Yates shuffle, the improved version cannot be used "as is", since we change the bound x every time we call the random generator.'
  replies: []
- id: 9482
  author: Anonymous Coward
  date: '2012-03-18T16:12:26'
  content: 'I''d take your "Fisher-Yates that is not really a Fisher-Yates" and cut and paste it to make *sure* I don''t mess and change an ''i'' with an ''n'', etc.  In other words I''d take an algorithm that works and then I''d do this:

    I''d always take 6 bits and shuffle a deck of 64 cards.  I''d then do an O(n) pass and only keep cards [1..52].

    This is short and there''s not "many ways to get it wrong" if I start by copy/pasting a correct Fisher-Yates.

    That''s an average of 64*6 / 52 bits / card.  Hardly the best possible but quite fast and very simple.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/xkcd-221.png)  
_[xkcd's random generator](http://xkcd.com/221/)_

Here is the wrap up of [the coding challenge I proposed a few days ago](http://beust.com/weblog/weblog/2012/02/16/a-new-coding-challenge-2/), and which gathered some interesting feedback, both in the comments and also on [reddit](http://www.reddit.com/r/programming/comments/pt60b/coding_challenge_testing_randomness/).

## Randomness

First of all, as many commenters pointed out, you can't really test for randomness, so we'll have to settle for a looser criterion, such as even distribution. Randomness usually implies even distribution but not the other way around. On the face of it, even distribution can seem like a very weak assertion (for example, the series "[1,2,3],[2,3,1],[3,1,2],[1,2,3],..." is evenly distributed but obviously not random) but if you can ascertain it with a data set that was generated from a fair random source, then you can probably make a good claim that your algorithm is reasonably unbiased.

## Shuffling

Let's get the first question out of the way. The [Fisher-Yates](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) shuffle is very simple to explain: start from the end and swap the element at that index with a random one. Then take the next to last and swap it with a random element between 0 and i -1. Here is the (simplified) Java library version, `Collections.shuffle()`:
    
    
    public static void shuffle(List<?> list, Random rnd) {
        int size = list.size();
        for (int i = size; i > 1; i--)
            swap(list, i - 1, rnd.nextInt(i));
        }
    }

_Note: this is actually *not* the Fisher-Yates algorithm, which runs in O(n^2) but an improved version, which runs in linear time. For some reason, most people still call it the Fisher-Yates algorithm, probably because of its resemblance to it.  
_

Before I can show in how many ways you can actually get this wrong, we need to find out how we can measure the distribution of these results, which was the heart of the second question.

## Simple distribution measurements

Again, there are many ways to go about this and all of them have various compromises in time and space (mostly in space, actually). One of the most intuitive ways of reasoning about this is to maintain a matrix where each element [i,j] records how many times the digit i appeared at index j. If we call N the size of the array (for example 5) and RUNS the number of times we will invoke our function to get a representative sample (for example one million), we will generate one million arrays, so five million numbers. Since the matrix is NxN = 25, we would expect each element of the matrix to be approximately 5,000,000 / 25 = 200,000.

I will be using this approach in the rest of this article, but for the sake of completeness, let's spend a short time considering other options.

You might be thinking that such a matrix doesn't contain enough information. For example, while it will tell you that "2" appeared 201,000 times in position "3", it doesn't tell you if there was any pattern to these appearances or whether these appearances were coupled with other numbers in the array. Whatever additional data you want to measure, you will probably end up having to extend your matrix with either constant space or maybe N (e.g. turn it into a 3D matrix).

Another thought might be that instead of counting the occurrences of these numbers, we could calculate the average of the number that each index has contained. And if you have some education in statistics, you know that once you start getting into the idea of computing averages, you can't avoid looking at standard deviations as well.

Here is what we get for an evenly distributed algorithm:
    
    
    Averages:[1.9988, 1.9992, 2.0023, 2.0011, 1.9983]
    Stddev: [1.4131, 1.4145, 1.4145, 1.4147, 1.4140]

The average is 2 since the elements range from 0 to 4 inclusive. The standard deviation is the square root of 2, which means that the numbers are evenly distributed around the average within a distance of 2.

Here are the results for the identity function, which doesn't distribute at all:
    
    
    Averages:[0.0, 1.0, 2.0, 3.0, 4.0]
    Stddev: [2.0, 1.0, 0.0, 1.0, 2.0]

Unsurprisingly, the average of numbers appearing in position 0 is 0 and 4 for the position 4. The elements in position 0 and 4 are 2 away from the average, etc...

So we can get some approximate information about how evenly distributed our function is with a simple average and standard deviation, but if we want to dig further, we need to go back to our count matrix.

## The count matrix

Here is how the identity function spreads on the count matrix:
    
    
    1000000 0 0 0 0
    0 1000000 0 0 0
    0 0 1000000 0 0
    0 0 0 1000000 0
    0 0 0 0 1000000

And here is a typical run for `Collections.shuffle()`:
    
    
    2000455 2000514 2000895 1998349 1999787
    2001463 1999130 1999621 1999253 2000533
    1997862 2000217 2001450 2000810 1999661
    1999117 1999870 1998689 2000809 2001515
    2001103 2000269 1999345 2000779 1998504

This looks good but it's a bit difficult to read, so instead, let's count how many of these numbers differ from the expected value by, say, 1%:
    
    
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < N; j++) {
        float delta = Math.abs((RUNS / N) - mat[i][j]);
        float percent = delta * 100f / N / RUNS;
        if (percent > 0.01f) {
          failures++;
        }
      }
    }

The outcome:
    
    
    Failures: 0/25

We would expect the number of failures to increase as we reduce the number of runs:
    
    
    Runs: 10000000, failures: 0/25
    Runs: 1000000, failures: 0/25
    Runs: 100000, failures: 15/25
    Runs: 10000, failures: 24/25
    Runs: 1000, failures: 24/25

## Doing it wrong

Alright, so `Collections.shuffle()` seems to score well on this scale. Now let's turn our attention to the many ways you can get this algorithm wrong. Let's make a copy of it:
    
    
    for (int i = N; i > 1; i--) {
      Collections.swap(result, i-1, rnd.nextInt(N));
    }

Let's reset RUNS to one million and try again:
    
    
    Runs: 1000000, failures: 17/25

Oops. Running it again and again yields similar results. What happened?

Okay, I'll admit it, I introduced a bug when copying the code, can you spot it?
    
    
    Collections.swap(result, i-1, rnd.nextInt(N));  // incorrect
    Collections.swap(result, i-1, rnd.nextInt(i));  // correct

It looks like selecting the random index to swap among the entire array totally wrecks the distribution, while selecting it from only these elements we haven't reached in our loop makes everything right. I'll leave the interpretation of this behavior as an exercise to the reader.

Here is another way to get this wrong.

When you look at the fundamentals of the algorithm, you may wonder if you really need to go through the entire array to perform the swaps. After all, once you reach the half point of the array, it's very likely that the second half of the array has been swapped randomly already, so why not stop there? Well, let's try (I am also increasing the size of the array to 10):
    
    
    Runs: 1000000, failures: 25/100

Again, it looks like we messed up the algorithm. Let's take a look at the distribution matrix:
    
    
    for (int i = N; i > N / 2; i--) {
      Collections.swap(result, i-1, rnd.nextInt(i));
    }
    
    
     
    
    
    499916 0 0 0 0 99893 100776 99757 99744 99914 0 499489 0 0 0 
    100013 100040 100580 99643 100235 0 0 499929 0 0 99719 99753
    100135 100363 100101 0 0 0 500268 0 99903 100346 99934 100079
    99470 0 0 0 0 500255 99669 99766 100426 100040 99844 100364 100323
    99846 99878 99909 100102 99518 99608 99934 100518 100392 99868 99843
    100204 99662 100333 99544 99582 100313 100259 99946 100439 100138
    99926 100406 99785 100144 99898 99773 99545 99906 99622 99748 100211
    99641 100624 100149 100188 100003 99908 99476 100259 100496 99513
    100127 99959 99964 99892 100108 100206

Our modified algorithm has introduced a strong bias in the first half of the array (the one we decided wasn't worth selecting on): number 0 has a 50% chance of being found in position 0, same for 1-4. From 5 to 9, the probability drops to the expected 10% odds.

Let's see what happens if we go a bit further than the half point, say 3/4 of the array:
    
    
    for (int i = N; i > N / 4; i--) {
      Collections.swap(result, i-1, rnd.nextInt(i));
    }
    
    
    199836 0 100150 100374 100292 100139 99861 99665 99861 99822
    0 200711 100183 99753 100317 99945 99761 99403 99879 100048
    100283 99860 99936 99915 99693 100480 99786 100128 99848 100071
    100057 99592 100152 99785 100017 99507 99550 100557 100564 100219
    99933 100225 99808 100193 99844 100017 100212 99573 100462 99733
    99776 99789 99895 99753 99953 99973 100124 100873 99518 100346
    99921 100068 100020 100316 99589 99728 100461 100206 99900 99791
    100169 99896 99941 99880 99922 100094 100168 99947 99754 100229
    100217 99964 99812 100066 100413 100209 99975 99593 100216 99535
    99808 99895 100103 99965 99960 99908 100102 100055 99998 100206
    Runs: 1000000, failures: 4/100

Here is another way to mess it up. Let's restore our loop to swap the entire array:
    
    
    for (int i = N; i > 1; i--) {
      Collections.swap(result, i-1, new Random().nextInt(i));
    }

Let's run it:
    
    
    137244 44545 91552 87602 100969 122467 100299 125866 101490 87966
    71720 138821 92466 107337 103311 123042 99610 73350 103791 86552
    129376 113794 114303 98828 102760 55589 100312 102734 95621 86683
    71216 112960 111268 115538 102947 99968 100271 98012 100026 87794
    94519 94294 94709 94851 93888 103046 99956 100257 101460 123020
    95533 96387 95852 96858 96351 96101 99570 99488 96360 127500
    99901 99926 99890 99421 99929 100409 99989 99744 100489 100302
    100233 99852 99969 99940 99872 99922 100016 100154 100071 99971
    99725 99387 99817 99841 100002 99500 100061 100811 100863 99993
    100533 100034 100174 99784 99971 99956 99916 99584 99829 100219
    Runs: 1000000, failures: 49/100

Wow, that's another massive failure. What did I do wrong this time?
    
    
    private Random rnd = new Random();
    // ...
    Collections.swap(result, i-1, rnd.nextInt(i));  // correct
    Collections.swap(result, i-1, new Random().nextInt(i)); // incorrect

Why would creating a new `Random` object trigger such a bug while reusing the same `Random` object through our loops provides a good distribution?

If you ever deal with random generation in Java (and probably other languages), you absolutely need to be aware of the way `java.lang.Random` is implemented. The problem here is that new objects are seeded with the current time, so creating objects within a loop pretty much guarantees that these objects will be created within a timeframe that's smaller than the clock granularity, which means that a lof ot the random numbers generated in succession will be identical. You address this either by reusing the same `Random` object (consider warming it up, too) or, better, by using `java.util.Math#random` (or even better: `java.security.SecureRandom)`.

I'll show one more common mistake, which might actually not always be one:
    
    
    for (int i = N; i > 1; i--) {
      Collections.swap(result, i-1, rnd.nextInt(i - 1));  // was i
    }

The difference here is that the random index is picked between 0 and i-1, instead of between 0 and i. Here is the distribution:
    
    
    0 249684 250515 249406 250395
    250334 0 249828 249915 249923
    249569 249612 0 250188 250631
    249973 250505 250471 0 249051
    250124 250199 249186 250491 0
    Runs: 1000000, failures: 25/25

We observe that no number i can ever be found in position i, which, while totally failing our even distribution test, possesses a few interesting qualities. This approach is actually known as the Sattolo algorithm, and it's actually useful because it always generates cycles (look it up in a section of its own in the [Fisher-Yates entry on Wikipedia](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)).

This is getting much longer than I anticipated, so I'll just leave you with a final thought in the form of a simple problem, which touches on a question that Lawrence Kesteloot mentioned on in his comment on the original entry: I'm giving you an unbiased random source that returns either 0 or 1 and I want you to use it to generate a random list of the letters 'a', 'b', 'c', 'd' and 'e'. And then, extend the idea to shuffle a deck of 52 cards.

_Update:[discussion on reddit](http://www.reddit.com/r/programming/comments/pzlmh/various_ways_to_get_randomness_wrong/)_
