---
title: A new coding challenge
date: '2011-10-30T11:38:19'
slug: a-new-coding-challenge
categories:
- Coding challenge
comments:
- id: 9342
  author: Lawrence Kesteloot
  date: '2011-10-30T12:02:42'
  content: 'Here''s my write-up of this puzzle from a few years ago:

    http://www.teamten.com/lawrence/puzzles/balance.html

    It doesn''t use programming to solve it, but it does show that you can measure up to 81 pounds, not 40, if you''re willing to measure in two sessions instead of one.'
  replies: []
- id: 9343
  author: Dhananjay Nene
  date: '2011-10-30T15:02:37'
  content: https://gist.github.com/1326624
  replies: []
- id: 9344
  author: David Nolen
  date: '2011-10-30T15:19:41'
  content: 'Solved efficiently and with very little code using cKanren, the constraint logic programming system designed  by Dan Friedman, William Byrd.

    http://dosync.posterous.com/a-taste-of-ckanren'
  replies: []
- id: 9345
  author: Leon
  date: '2011-10-30T17:06:05'
  content: 'As brute force as it gets, Java, no libraries, can be ported pretty much directly into straight C: https://gist.github.com/1326736'
  replies: []
- id: 9346
  author: Chris Dolan
  date: '2011-10-30T17:19:16'
  content: 'Here''s a Perl solution. The answer is fairly clear in retrospect... My brief analysis is in the gist comments.  I added a human-readable output of the left/right scale distribution for each target weight to help visualize the problem.

    https://gist.github.com/1326753'
  replies: []
- id: 9347
  author: Lucian
  date: '2011-10-30T17:25:52'
  content: "Let's try to see what the maximum number of weights we would be able to measure with 4 stones.\nIn the maximum case, let's assume any combination will sum up to a different weight.\nWe have:\n- C(1,4) = 4 - combinations when we take each stone alone\n- C(2,4) = 6 - combinations when we take two stones\n- C(3,4) = 4 - combinations when we take three stones\n- C(4,4) = 1 - when we use all stones at the same time\n=&gt; 15 different weights max =&gt; impossible to solve the problem even with our very generous assumptions.\nIn general: Sum(C(k,n)) for k in 1..n = 2^n-1\nBut here we made an assumption: we put the scales on the same part of the scale. But we can do better than that!\nIf we can put them on either side of the scale we can model the problem like this: we have four weights x0, x1, x2, x3 each in [1,40] and we need to find out how many combinations we can make with them on either side of the scale: each can be off the scale, on the left and on the right =&gt; 3^4=81 combinations.\
    \ OK, no answer but we know we must look further.\nWe need to find those x0..3 such that for each w in [1,40] we have four ai in {-1,0,1} such that\n     w=sum(xi*ai)\nWe can simplify the problem further all weights must have as a sum 40 to measure a weight of 40, so x3 = 40 - x0 - x1 - x2, and to remove repetitions we can asset x3&gt;=x2=&gt;x1=&gt;x0.\nLets build the solution from N=2, N=3 and N=4.\nN=2: x0=1, x1=3 gives us our widest range: 1,2,3,4\nN=3:\n  - we need to get a 5 to continue the range, but we'll get it by setting x0,x1 on one side of the scale and x2=5+x0+x1 on the other side =&gt; x2=9\n  - we can get 6,7,8 by removing something from the x0,x1 part of the scale\n  - we have 9\n  - we can get everything from 9 to 9 + 4=13 by combining with x0, x1\n  - =&gt; 1..13\nN=4:\n  - we need 14 and we get it by setting x0,x1,x2 on one side and x3=14+x0+x1+x2 on the other side =&gt; x3=27\n  - we can get everything from [15..27] = [14+1..14+13] by removing elements from the x0,x1,x2\
    \ side as seen in N=3\n  - we can get everything from in [27..27+13=40] as by combining x3 with x0,x1,x2 as seen in N=3\nSolution 1,3,9,27.\nGeneralized:\nN=n: we can measure every weight from 1 to sum(3^k) for k in [0..n]=3^(n+1)/(3-1) and the stones weigh 3^k."
  replies: []
- id: 9348
  author: AnotherCed
  date: '2011-10-30T17:39:59'
  content: "Quick'n'dirty Java solution (Some Emacs magic mainly wrote that code ;)\nIt's not 'short'.  It's brute force (but it's basically instantaneous).\nI'm not sure I got the problem right.  It writes 1,3,9,27 as the solution.\n @Test\n    public void doIt() {\n        final int n = 40;\n        int[] max = new int[5];\n        for (int i = 1; i &lt; n; i++) {\n            for (int j = i + 1; j &lt; n; j++) {\n                for (int k = j + 1; k &lt; n; k++) {\n                    for (int l = k + 1; l  max[0] ) {\n                            max = new int[] {v,i,j,k,l};\n                        }\n                    }\n                }\n            }\n        }\n        System.out.println( \" max: \" + max[0] + \" (\" + max[1] + \", \" + max[2] + \", \" + max[3] + \", \"\n + max[4] + \")\" );\n    }\n    public int cnt( final int[] a ) {\n        int cnt = 0;\n        for (int p = 1; p &lt;= 40; p++) {\n            boolean b = false;\n            // 1 piece...\n            for\
    \ (int i = 0; i &lt; 4; i++) {\n                b = b || p == a[i];\n            }\n            // 2 pieces\n            for (int i = 0; i &lt; 4; i++) {\n                for (int j = i + 1; j &lt; 4; j++) {\n                    b = b || p == a[i] + a[j];\n                    b = b || p == a[i] - a[j];\n                    b = b || p == a[j] - a[i];\n                }\n            }\n            // 3 pieces\n            for ( int i = 0; i &lt; 4; i++ ) {\n                for ( int j = i + 1; j &lt; 4; j++ ) {\n                    for ( int k = j + 1; k &lt; 4; k++ ) {\n                        b = b || p == +a[i]+a[j]+a[k];\n                        b = b || p == +a[i]+a[j]-a[k];\n                        b = b || p == +a[i]-a[j]+a[k];\n                        b = b || p == -a[i]+a[j]+a[k];\n                        b = b || p == -a[i]-a[j]+a[k];\n                        b = b || p == -a[i]+a[j]-a[k];\n                        b = b || p == +a[i]-a[j]-a[k];\n                    }\n      \
    \          }\n            }\n            // 4 pieces\n            b = b || p == +a[0]+a[1]+a[2]+a[3];\n            // 4 pieces: 1-\n            b = b || p == -a[0]+a[1]+a[2]+a[3];\n            b = b || p == +a[0]-a[1]+a[2]+a[3];\n            b = b || p == +a[0]+a[1]-a[2]+a[3];\n            b = b || p == +a[0]+a[1]-a[2]-a[3];\n            // 4 pieces: 2-\n            b = b || p == -a[0]-a[1]+a[2]+a[3];\n            b = b || p == -a[0]+a[1]-a[2]+a[3];\n            b = b || p == -a[0]+a[1]+a[2]-a[3];\n            b = b || p == +a[0]-a[1]-a[2]+a[3];\n            b = b || p == +a[0]-a[1]+a[2]-a[3];\n            b = b || p == +a[0]+a[1]-a[2]-a[3];\n            // 4 pieces: 3-\n            b = b || p == +a[0]-a[1]-a[2]-a[3];\n            b = b || p == -a[0]+a[1]-a[2]-a[3];\n            b = b || p == -a[0]-a[1]+a[2]-a[3];\n            b = b || p == -a[0]-a[1]-a[2]+a[3];\n            cnt += b ? 1 : 0;\n        }"
  replies: []
- id: 9349
  author: AnotherCed
  date: '2011-10-30T17:40:49'
  content: 'Same Java code but nicely formatted by pastebin:

    http://pastebin.com/qw76rGHX

    (saw this late at night, too late to answer the other questions ;)'
  replies: []
- id: 9350
  author: Jim White
  date: '2011-10-30T18:11:27'
  content: 'Haven''t checked out the answer but I''m guessing it''s right:

    weights = [1..10, 1..20, 1..20, 1..40].combinations().grep { it.sum() == 40 }.collect { it.sort() }.unique()

    println (weights.grep { it.inject([0], { a, v -&gt; a + a*.plus(v) + a*.plus(-v) }).containsAll ( 1..40 )})

    Gives:

    [[1, 3, 9, 27]]

    See it in action with the Groovy Web Console:  http://groovyconsole.appspot.com/script/582001'
  replies: []
- id: 9351
  author: Vijay
  date: '2011-10-30T19:17:21'
  content: 'Solution in Groovy at http://vijay-nathani.blogspot.com/2011/10/solution-to-coding-challenge.html

    The first solution found is 1, 3, 9, 27.'
  replies: []
- id: 9352
  author: Igor
  date: '2011-10-30T23:54:37'
  content: "Java solution\nOutput: 1 3 9 27\npublic class StonePuzzle {\n    public static final int N = 40, signum[] = {-1, 0, 1};\n    public static void main(String[] args) {\n        long success = (long) Math.pow(2, N) - 1;\n        for (int p1 = 1; p1 &lt; N; p1++)\n            for (int p2 = p1; p2 &lt; N; p2++)\n                for (int p3 = p2; p3 &lt; N; p3++) {\n                    int p4 = N - p1 - p2 - p3;\n                    if (p4  0 &amp;&amp; result &lt;= N) mask |= (long) 1 &lt;&lt; (result - 1);\n                    }\n        return mask;\n    }\n}"
  replies: []
- id: 9353
  author: Igor
  date: '2011-10-31T00:01:31'
  content: 'Weird, this is not what I wanted to submit.

    Here is a nicely formatted version.

    http://pastebin.com/WZ97t029'
  replies: []
- id: 9354
  author: Pepijn de Vos
  date: '2011-10-31T02:40:56'
  content: 'Can we use stones on both sides of the weight?

    Vijay seems to assume this, while David Nolen doesn''t seem to do that.'
  replies: []
- id: 9355
  author: SKroah
  date: '2011-10-31T03:56:00'
  content: Thanks Lucien for reminding everyone that these are math problems not brute force coding problems.
  replies: []
- id: 9356
  author: Chris
  date: '2011-10-31T06:56:13'
  content: 'But can you run it in a browser:

    http://jsfiddle.net/RfpPU/'
  replies: []
- id: 9357
  author: zerology
  date: '2011-10-31T07:10:17'
  content: '(Beginners Haskell)

    import Data.List

    allStones = [[a,b,c,d]| a &lt;- [1..39], b &lt;- [a..39], c &lt;- [b..39], d  [w-x, w, w+x]) (combineWeights xs)

    result = filter (\x -&gt; ((sort $ filter (&gt;0) $ nub $ map abs (combineWeights x)) == [1..40])) allStones'
  replies: []
- id: 9358
  author: zerology
  date: '2011-10-31T07:11:21'
  content: '(Beginners Haskell. The first post seems to miss something)

    import Data.List

    allStones = [[a,b,c,d]| a &lt;- [1..39], b &lt;- [a..39], c &lt;- [b..39], d  [w-x, w, w+x]) (combineWeights xs)

    result = filter (\x -&gt; ((sort $ filter (&gt;0) $ nub $ map abs (combineWeights x)) == [1..40])) allStones'
  replies: []
- id: 9359
  author: zerology
  date: '2011-10-31T07:14:37'
  content: 'Well then

    https://gist.github.com/1327860

    Beginners Haskell.'
  replies: []
- id: 9360
  author: Fun problem
  date: '2011-10-31T07:45:55'
  content: Thanks for the fun problem! I did it on paper and found the first two numbers (1,3) by looking at what I would need to weigh 39 (an edge case) -&gt; this implies one of the weights has to be 1 pound. Then I looked at 37 and figured I needed a 3, then I just leapt to a "base 3" number system since a given weight is either on the left, on the right or on neither (3 possibilities).
  replies: []
- id: 9361
  author: Cedric
  date: '2011-10-31T07:58:01'
  content: 'Hi "Fun Problem",

    Actually, your assumption is wrong: 1 doesn''t have to be one of the weights since you can measure one pound with, for example, two weights of two and three pounds respectively.

    As it turns out, a 1 pound weight ends up being part of the solution, but it''s merely a coincidence (e.g. you got lucky :-)).

    Edit: I''m wrong, Mike correctly pointed out that you can''t measure 39 pounds without a 1 pound stone.'
  replies: []
- id: 9362
  author: Martin
  date: '2011-10-31T08:41:55'
  content: 'https://gist.github.com/1328114

    A faster version of Dhananjay Nene''s solution (post #2)'
  replies: []
- id: 9363
  author: David Gageot
  date: '2011-10-31T09:49:35'
  content: A (slow) solution using Ioke. https://gist.github.com/1328433
  replies: []
- id: 9364
  author: Alex Shneyderman
  date: '2011-10-31T14:35:34'
  content: "Fun. Here is Erlang solution in about 4 lines of useful code:\n#!/usr/bin/env escript\nmain(_Args) -&gt;\n    % Generate all combinations of weights that add up to 40\n    StoneWeights = [ {St1,St2,St3,St4} || St1 &lt;- lists:seq(1,37),\n                                          St2 &lt;- lists:seq(1,37),\n                                          St3 &lt;- lists:seq(1,37),\n                                          St4 &lt;- lists:seq(1,37),\n                                          (St1 + St2 + St3 + St4) == 40 ],\n    % Find all the weight combinations that could be our solutions\n    Solutions = [ Weights || Weights\n    lists:all( fun(X) -&gt;\n                 length( [{Sgn1,Sgn2,Sgn3,Sgn4} || Sgn1 &lt;- [1, 0, -1],\n                                                   Sgn2 &lt;- [1, 0, -1],\n                                                   Sgn3 &lt;- [1, 0, -1],\n                                                   Sgn4 &lt;- [1, 0, -1],\n                              \
    \                     (X + Sgn1 * St1 + Sgn2 * St2 + Sgn3 * St3 + Sgn4 * St4) == 0 ] ) /= 0\n               end, lists:seq(1,40) )."
  replies: []
- id: 9365
  author: Alex Shneyderman
  date: '2011-10-31T14:49:08'
  content: Ahh, formatting in these comments is messing things up. Here is a well formatted Erlang version http://bit.ly/scLAPQ
  replies: []
- id: 9366
  author: Stephane Geneix
  date: '2011-10-31T15:38:24'
  content: 'I heard it some time ago as a logical problem more than as a coding problem (coding is pretty trivial here once you get that you could put stones on either edge of the scale).

    As the non-bruteforce solution, I''ll try to explain mine here :

    let''s call the stones x, y, z and t (x being the lightest, t the heaviest)

    let''s say that the position of a stone on the balance can be identified by a number : -1 (on the left side, with the weight to mesure), (0 : not on the scale) and +1 (on the right side).

    if you can mesure all values from 1 to 40, you can mesure also from -1 to -40 (whatever value you are currently mesuring, you transform all the -1 in +1).

    also, you can mesure 0 (by not putting anything on the scale).

    in other words, you have to be able to mesure 81 values with 4 stones.

    now, let''s look at how many vlaues we can mesure with 4 stones :

    every single one of them can be in 3 states independantly from each other (-1, 0, +1). Which means we have a total of 3^4 different states. Which is 81. So 81 is also the max number of weights you can mesure with 4 stones...

    so, now, let''s revert the problem : what''s the max number of consecutive weights we can mesure with 3 stones ? with 2 stones ? with 1 ? Easy answer : 27 9 and 3.

    with one stone you can mesure 3 weights (from -1 to +1) with one stone of 1lb.

    with 2 stones, you can go from -4 to +4 with x = 1 and y = 3 (bc 1+3 = 4).

    with 3 stones, you can go from -13 to +13 with x=1, y=3 and z=9 (bc 1+3+9 = 23).

    and with 4 stones you have x=1, y=3, z=9 and t=27.

    i''m sure there''s a better way to explain it but you get how I arrived to the correct answer without coding anything :)'
  replies: []
- id: 9367
  author: Aaron Brooks
  date: '2011-10-31T16:03:32'
  content: This problem is related to Optimal Golomb Rulers ( http://en.m.wikipedia.org/wiki/Golomb_ruler ), though I believe less constrained. I'd post a solution but the surprise snowstorm in the Northeast has left me without power for the last several days and, while I still have my phone, I wouldn't relish trying to write a solution using the Android Clojure REPL. :-)
  replies: []
- id: 9368
  author: David Nolen
  date: '2011-10-31T18:44:28'
  content: Here's a correct solution using cKanren that solves the puzzle in ~12ms under Racket on my machine. http://dosync.posterous.com/another-taste-of-ckanren
  replies: []
- id: 9369
  author: Mocky
  date: '2011-11-01T03:25:08'
  content: "Here's my solution that uses clojure.contrib.combinatorics\n(defn trinary\n  \"Returns a sequence containing x, -x and zero\"\n  [x] (list x (- x) 0))\n(defn cartesian-sum\n  \"Returns a sequence of the sum of each cartesian product\"\n  [col] (map #(apply + %) (apply cartesian-product col)))\n(defn weights\n  \"Returns all unique positive weights measurable by items in col\"\n  [col] (filter pos? (into #{} (cartesian-sum (map trinary col)))))\n(defn by-weight-counts\n  \"Comparable for sorting based on the count of measureable weights\"\n  [col1 col2] ( (last (sort by-weight-counts combos))\n(1 3 9 27)"
  replies: []
- id: 9370
  author: Filip Deleersnijder
  date: '2011-11-01T04:11:50'
  content: '1, 3, 9, 27 is only one of the solutions.

    What the above solutions forget is exploiting the fact that when the stones allow you to weight an object with weight X and they allow you to weight an object with weight X+2, you can implicitly weigh something with weight X+1 by stating that it is heavier then X but lighter then X+2 ( And it must be integer ).

    This leads to the following solutions :

    16, 16, 6, 2

    17, 15, 6, 2

    17, 16, 5, 2

    18, 14, 6, 2

    18, 15, 5, 2

    19, 13, 6, 2

    19, 14, 5, 2

    20, 12, 6, 2

    20, 13, 5, 2

    20, 14, 4, 2

    21, 11, 6, 2

    21, 12, 5, 2

    21, 13, 4, 2

    22, 10, 6, 2

    22, 11, 5, 2

    22, 12, 4, 2

    23, 9, 6, 2

    23, 10, 5, 2

    23, 11, 4, 2

    23, 12, 4, 1

    24, 8, 6, 2

    24, 9, 5, 2

    24, 10, 4, 2

    24, 11, 4, 1

    25, 7, 6, 2

    25, 8, 5, 2

    25, 9, 4, 2

    25, 10, 4, 1

    26, 6, 6, 2

    26, 7, 5, 2

    26, 8, 4, 2

    26, 9, 4, 1

    27, 6, 5, 2

    27, 7, 4, 2

    27, 8, 4, 1'
  replies: []
- id: 9371
  author: David Gageot
  date: '2011-11-01T07:13:58'
  content: Filip, great idea. However using this strategy, I find more combinations than you do. 44 instead of 36
  replies: []
- id: 9372
  author: Cedric
  date: '2011-11-01T07:18:57'
  content: 'Filip: true but you need more than one measurement to measure such a weight, so it doesn''t qualify for this problem.'
  replies: []
- id: 9373
  author: Laurent Petit (@petitlaurent)
  date: '2011-11-01T12:55:07'
  content: 'Here is a clojure solver, using clojure.contrib.combinatorics''s subset &amp; cartesian product helper functions.

    This solution is "general" : works for searching solutions for N pieces of stone and a maximum weight of M pounds.

    https://gist.github.com/1332020

    It also prints out how to check the 1..M weights with a balance.

    Not bad for 38 lines, but I''m pretty sure it could be shortened without compromising lisibility (I''m pretty sure it could help lisibility by avoiding reinventing the wheel or using an improved algorithm).

    Uses brute force algorithm.'
  replies: []
- id: 9374
  author: Horia
  date: '2011-11-01T15:44:17'
  content: 'Cedric, how do you define a measurement?

    For instance, to weight X=2 pounds with the weights (27,9,3,1) you may have to do:

    1. start with 1, find that X is heavier.

    2. add 3, X is lighter.

    3. remove  1, X is still lighter. We could determine X=2 and end up here.

    4. add 1 on the X side, X=2;

    With Filip''s combination (27,8,4,1) you may have to do:

    1. start with 1, X is heavier

    2. Add 4, X is lighter

    3. remove 1, X is still lighter

    4. add 1 on the X side, X is still lighter, thus X=2;

    In both cases stones have to be added and removed from plates. The main difference is that in Filip''s case some combinations cannot end with balanced plates.

    Two additional questions:

    1. What (if any) is the weighting strategy that requires the smallest number of stone movements when weights between 1 and 40 (or 1 to (3^N - 1)/2 for the general case ) are presented in random order?

    2. Is there any change if N is relatively large but the number of unknown weights is small?'
  replies: []
- id: 9375
  author: Filip Deleersnijder
  date: '2011-11-02T02:06:37'
  content: '@David, there was a small mistake in my code, there are indeed 44 solutions.

    @Cedric.  I think that constraint in the problem definition should be interpreted as : "It is not allowed to divide the food that must be weighted and weigh the different parts"'
  replies: []
- id: 9376
  author: Raghav
  date: '2011-11-02T02:56:05'
  content: 'My brute-force clojure solution: http://ragstorooks.wordpress.com/2011/11/02/coding-challenge/'
  replies: []
- id: 9377
  author: pyritschard
  date: '2011-11-03T23:40:29'
  content: 'Here''s my solution in clojure: https://gist.github.com/1338927'
  replies: []
- id: 9378
  author: Ben Eng
  date: '2011-11-04T18:18:29'
  content: "// I cheated by solving it in my head first to figure out the pattern\nint total = 40\ndef result = []\nint next = 1\nint sum = next\nwhile( sum &lt;= 40 ) {\n    result &lt;&lt; next\n    next = 2 * sum + 1\n    sum += next\n}\nprintln result"
  replies:
  - id: 9379
    author: Cedric
    date: '2011-11-04T19:01:09'
    content: Well... yes, that's a big cheat. What if the total is 41? Might as well "return new int[] { the solution }" :-)
    replies: []
- id: 9380
  author: Ben Eng
  date: '2011-11-07T14:37:48'
  content: '@Cedric I am guessing the solution works in general to measure the most weights, based on how the combinations give coverage of the possible weights without overlap. I''m assuming a fix to the typo in the code to say "while( sum &lt;= total )&quot;.'
  replies: []
- id: 9381
  author: AnotherCed
  date: '2011-11-16T04:42:06'
  content: 'I don''t understand why you say that Filip''s *solutions* don''t qualify.  Where was it written in the original problem (or in your version) that it''s not allowed to weight vs ''x'' and vs ''x + 2'' and infer the weight is ''x+1''.   How would all the other solutions (the ones finding only one solution) weight ''x+1'': by magically putting the correct number of stones at left and the correct number of stones at right?  To me Filip''s solving not only solving the problem: he''s also solving a much, much more interesting problem.'
  replies: []
- id: 9382
  author: Dhawal Jaiswal
  date: '2011-11-26T12:21:43'
  content: Can't we just wait three stone pieces and subtract it from total to get one stone weight and so on.
  replies: []
- id: 9383
  author: tao
  date: '2012-02-21T21:08:10'
  content: but who can write it in as a clear and concise programming solution!
  replies: []
- id: 9384
  author: Tarek Abdelmaguid
  date: '2012-02-22T20:52:05'
  content: "Here is a solution in scala:\nhttps://gist.github.com/1890672\nPasting here for easy reference, though the format may not be as nice:\nimport scala.math._\ndef stone_weights(w: Int) : List[Int] = w match {\n    case 1 =&gt; List(1)\n    case _ =&gt;\n        val one_third : Int = ceil((w-1).toDouble/3).toInt\n        w - one_third :: stone_weights (one_third)\n}\nprintln(stone_weights(40));\nThis function should work for any given positive parameter.\nThe solution relies on the function stone_weights to return a list of the minimum number of stone weights, that can make up to all weights between 1 and w.\nThe function itself calculates the list using the following logic:\n1. if w = 1, the answer is the list [1]\n2. otherwise, the answer is the number at 2 thirds of w, appended to a list of the stone_weights of (one third of w)\nThink of the solution as dividing the target weight into 3 portions. If we had a set of stone pieces that represent all the weights up to a third of that\
    \ weight, then we can combine this set with a stone weighing two thirds of the target weight, to be able to represent all the wights up to the desired weight.\nThe solution requires a bit of rounding and +/- 1, to provide the exact coverage.\nFeedback welcome."
  replies: []
- id: 9385
  author: Tarik
  date: '2012-05-19T03:01:20'
  content: "This problem is related to a base 3 numbering system with -1, 0, 1 as possible digit at each position. -1 = put weight on left side, 1 = put weight on the right side, 0 = do not use the weight. Following is an exhaustive enumeration which when multiplied respectively by 27, 9, 3, 1 produces the result on the right most column.\nThe problem is symmetric in the sense that you could do the same weighing by flipping the weights at the two sides.\nSolutions such as (16, 16, 6, 2) and (17, 15, 6, 2) and 42 others provided by Filip and David seem incorrect.\n0\t-1\t-1\t-1\t-1\t\t-40\n1\t-1\t-1\t-1\t0\t\t-39\n2\t-1\t-1\t-1\t1\t\t-38\n3\t-1\t-1\t0\t-1\t\t-37\n4\t-1\t-1\t0\t0\t\t-36\n5\t-1\t-1\t0\t1\t\t-35\n6\t-1\t-1\t1\t-1\t\t-34\n7\t-1\t-1\t1\t0\t\t-33\n8\t-1\t-1\t1\t1\t\t-32\n9\t-1\t0\t-1\t-1\t\t-31\n10\t-1\t0\t-1\t0\t\t-30\n11\t-1\t0\t-1\t1\t\t-29\n12\t-1\t0\t0\t-1\t\t-28\n13\t-1\t0\t0\t0\t\t-27\n14\t-1\t0\t0\t1\t\t-26\n15\t-1\t0\t1\t-1\t\t-25\n16\t-1\t0\t1\t0\t\t-24\n17\t-1\t0\t1\t\
    1\t\t-23\n18\t-1\t1\t-1\t-1\t\t-22\n19\t-1\t1\t-1\t0\t\t-21\n20\t-1\t1\t-1\t1\t\t-20\n21\t-1\t1\t0\t-1\t\t-19\n22\t-1\t1\t0\t0\t\t-18\n23\t-1\t1\t0\t1\t\t-17\n24\t-1\t1\t1\t-1\t\t-16\n25\t-1\t1\t1\t0\t\t-15\n26\t-1\t1\t1\t1\t\t-14\n27\t0\t-1\t-1\t-1\t\t-13\n28\t0\t-1\t-1\t0\t\t-12\n29\t0\t-1\t-1\t1\t\t-11\n30\t0\t-1\t0\t-1\t\t-10\n31\t0\t-1\t0\t0\t\t-9\n32\t0\t-1\t0\t1\t\t-8\n33\t0\t-1\t1\t-1\t\t-7\n34\t0\t-1\t1\t0\t\t-6\n35\t0\t-1\t1\t1\t\t-5\n36\t0\t0\t-1\t-1\t\t-4\n37\t0\t0\t-1\t0\t\t-3\n38\t0\t0\t-1\t1\t\t-2\n39\t0\t0\t0\t-1\t\t-1\n40\t0\t0\t0\t0\t\t0\n41\t0\t0\t0\t1\t\t1\n42\t0\t0\t1\t-1\t\t2\n43\t0\t0\t1\t0\t\t3\n44\t0\t0\t1\t1\t\t4\n45\t0\t1\t-1\t-1\t\t5\n46\t0\t1\t-1\t0\t\t6\n47\t0\t1\t-1\t1\t\t7\n48\t0\t1\t0\t-1\t\t8\n49\t0\t1\t0\t0\t\t9\n50\t0\t1\t0\t1\t\t10\n51\t0\t1\t1\t-1\t\t11\n52\t0\t1\t1\t0\t\t12\n53\t0\t1\t1\t1\t\t13\n54\t1\t-1\t-1\t-1\t\t14\n55\t1\t-1\t-1\t0\t\t15\n56\t1\t-1\t-1\t1\t\t16\n57\t1\t-1\t0\t-1\t\t17\n58\t1\t-1\t0\t0\t\t18\n59\t1\t-1\t0\t1\t\t19\n60\t1\t\
    -1\t1\t-1\t\t20\n61\t1\t-1\t1\t0\t\t21\n62\t1\t-1\t1\t1\t\t22\n63\t1\t0\t-1\t-1\t\t23\n64\t1\t0\t-1\t0\t\t24\n65\t1\t0\t-1\t1\t\t25\n66\t1\t0\t0\t-1\t\t26\n67\t1\t0\t0\t0\t\t27\n68\t1\t0\t0\t1\t\t28\n69\t1\t0\t1\t-1\t\t29\n70\t1\t0\t1\t0\t\t30\n71\t1\t0\t1\t1\t\t31\n72\t1\t1\t-1\t-1\t\t32\n73\t1\t1\t-1\t0\t\t33\n74\t1\t1\t-1\t1\t\t34\n75\t1\t1\t0\t-1\t\t35\n76\t1\t1\t0\t0\t\t36\n77\t1\t1\t0\t1\t\t37\n78\t1\t1\t1\t-1\t\t38\n79\t1\t1\t1\t0\t\t39\n80\t1\t1\t1\t1\t\t40"
  replies: []
---

It's been a while since I offered a [coding challenge](http://beust.com/weblog/weblog/2008/06/27/coding-challenge/), so let's remedy this. 

This one comes from [this week's Car Talk's puzzler](http://www.cartalk.com/content/puzzler/transcripts/201143/index.html). Here is the short version of it: 

> A farmer has a forty pound stone that he uses to weigh food for his animals on a scale. One day, he loans the stone to his neighbor. A few days later, the neighbor returns the stone and apologizes to the farmer because his stone is now broken in four pieces. The farmer responds "Please don't apologize, you have actually made my life easier because with these four pieces, I can now measure any weight between one and forty pounds". 
> 
> The question is: how much do these four individual pieces weigh? 

I'm adding a few clarifications, which are not necessarily what the Car Talk guys meant (I don't have the solution and I haven't looked at any discussion on the subject): 

  * The four weights are integers. 
  * The weights we can measure between one and forty pounds are in one pound increment. 
  * They are measured in one session (otherwise, you could measure forty pounds with a one pound stone by performing forty measurements). 
  * If there is no solution (the farmer might be bad at math), show the four weights that allow to measure the most weights between one and forty pounds. 


The challenge? Write a brute force solution to this puzzler in any language that you want. I don't care if your solution is slow, fast, ugly or elegant as long as it works, and I suspect that certain languages will be very good for this puzzler 

Bonus questions: 

  * Your solution should explain how exactly you use the stone pieces to measure each weight. 
  * Is there a formal way to solve this problem without using brute force?
