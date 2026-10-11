---
title: Coding challenge
date: '2008-06-27T23:48:40'
slug: coding-challenge
categories:
- Coding challenge
comments:
- id: 7316
  author: dubek
  date: '2008-06-28T01:08:20'
  content: 'In Ruby, brute-force, probably really slow:

    (98..103).select { |x| x.to_s.size == x.to_s.split(//).uniq.size }

    => [98, 102, 103]'
  replies: []
- id: 7317
  author: szeryf
  date: '2008-06-28T01:15:08'
  content: 'Perl:

    #!perl -wl

    use strict;

    use List::Util qw(reduce max);

    use constant MAX => 10_000;

    my @nums  = grep !/(.).*\1/, 1..MAX;

    my $count = @nums;

    my $jump  = 0;

    reduce {$jump = max($jump, $b - $a); $b} @nums;

    print "@nums";

    print "$count, $jump";'
  replies: []
- id: 7318
  author: szeryf
  date: '2008-06-28T01:26:33'
  content: 'Ruby, same approach (dunno if you call it clever or brute):

    #!ruby -w

    MAX = 10_000;

    nums = (1..MAX).reject {|num| num.to_s =~ /(.).*\1/}

    count = nums.length

    jump = 0

    nums.inject(1) {|a, b| jump = [jump, b - a].max; b}

    p nums, count, jump'
  replies: []
- id: 7319
  author: szeryf
  date: '2008-06-28T01:44:57'
  content: 'Python, same approach:

    #!python

    import re

    MAX = 10000

    r = re.compile(r''(.).*\1'')

    nums = [x for x in range(1, MAX) if not r.search(str(x))]

    count = len(nums)

    jump = 0

    last = 0

    for x in nums :

    &nbsp;&nbsp;&nbsp;&nbsp;jump = max(jump, x - last)

    &nbsp;&nbsp;&nbsp;&nbsp;last = x

    print nums

    print count

    print jump

    BTW. Now I see I forgot to use precompilation of regexps in Perl and Ruby versions -- to do this, add o after the regexp, i.e. /(.).*\1/o'
  replies: []
- id: 7320
  author: dirkf
  date: '2008-06-28T02:05:54'
  content: 'Javascript, approach based on regexp :

    &lt;script&gt;

    &nbsp;&nbsp;var max = 10000, count=jump=bigjump=0;

    &nbsp;&nbsp;for(var i=1; i&lt;=max; i++) {

    &nbsp;&nbsp;&nbsp;&nbsp;jump++;

    &nbsp;&nbsp;&nbsp;&nbsp;if(! /(\d).*\1/g.test(i) ) {

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.write(i+'' ''+jump+'' '' +''&lt;br /&gt;'');

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bigjump = Math.max(jump,bigjump);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jump=0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;}

    &nbsp;&nbsp;bigjump = Math.max(jump,bigjump);

    &nbsp;&nbsp;document.write(''Total count:''+count+''&lt;br /&gt;Biggest jump:''+bigjump+''&lt;br /&gt;'');

    &lt;/script&gt;'
  replies: []
- id: 7321
  author: Marc Logemann
  date: '2008-06-28T02:15:55'
  content: 'Sounds like a Google interview question or something. :) Am far too tired to "work" on that, but its a funny puzzler.

    Marc'
  replies: []
- id: 7322
  author: levi_h
  date: '2008-06-28T02:16:45'
  content: 'Java (I''m sorry for the lack of indentation, I couldn''t figure out how the system expects you to post code):

    import java.io.PrintStream;

    import java.util.LinkedList;

    import java.util.List;

    public class Test {

    private final int start;

    private final int end;

    private List numbersWithoutRepeatingDigits;

    private int biggestJump;

    public Test(int start, int end) {

    this.start = start;

    this.end = end;

    numbersWithoutRepeatingDigits = new LinkedList();

    }

    public void calculateResults() {

    int previousNumber = 0;

    for (int number = start; number  0);

    return false;

    }

    public void displayResults(PrintStream out) {

    out.printf("Numbers up to %d without repeating digits (%d): %s%n", end, numbersWithoutRepeatingDigits.size(), numbersWithoutRepeatingDigits);

    out.printf("Biggest jump: %d%n", biggestJump);

    }

    public static void main(String... parameters) {

    Test test = new Test(1, 10000);

    test.calculateResults();

    test.displayResults(System.out);

    }

    }

    A Set solution seems to be twice as slow, a regex one about 11 times. Both are still fast enough for finding results between 1 and 10000, though.'
  replies: []
- id: 7323
  author: levi_h
  date: '2008-06-28T02:24:36'
  content: The comment system also ate my generics and most of both the calculateResults and hasRepeatingDigit(int) methods... oh well. I published it at docs.google.com/Doc?id=dppnxf9_0gtzdzzfw
  replies: []
- id: 7324
  author: Keith Henry
  date: '2008-06-28T02:39:06'
  content: 'C#3:

    //this could also be a regex based func

    Func isNonRepeat =

    i =>

    {

    char[] digits = i.ToString().ToCharArray();

    return digits.Distinct().Count() == digits.Length;

    };

    //get all the non-repeating nums

    var nums =

    from int i in Enumerable.Range( 1, 10000 )

    where isNonRepeat( i )

    select i;

    int last = 1, gap = 0, count = 0;

    foreach ( var i in nums )

    {

    gap = Math.Max( gap, i - last );

    last = i;

    count++;

    }

    Console.WriteLine( "count: {0,0}", count );

    Console.WriteLine( "max gap: {0,0}", gap );

    Still brute forcing to get the gaps, I''m not sure whether there''s a Linq expression for Last.'
  replies: []
- id: 7325
  author: Nils Kassube
  date: '2008-06-28T02:52:35'
  content: '// Groovy version. The readable version seems fast enough

    final MAX = 10000

    def candidates = (1..MAX).findAll {

    it.toString().size() == it.toString().toList().unique().size()

    }

    def jump = 0

    def last = 0

    for (x in candidates) {

    if (x-last > jump) {jump = x-last}

    last = x

    }

    println "Number of candidates: $candidates.size - Biggest jump $jump"'
  replies: []
- id: 7326
  author: Kannan Kartha
  date: '2008-06-28T04:59:00'
  content: 'Here is one from me in Java.

    May not be a smart one, but works ... Regex was really slow. Apologies for the indentation problem.

    public class GenrateNumbers {

    static int jump = 0;

    static int MAX = 10000;

    public static void main(String[] args) {

    int tempValue = 0;

    for (int i = 1; i &lt; MAX; i++) {

    String number = String.valueOf(i);

    boolean flag = hasRepeatingNumber(number.toCharArray());

    if(!flag){

    System.out.println(number);

    jump = jump &lt; (i - tempValue) ? (i - tempValue) : jump;

    tempValue = i;

    }

    }

    System.out.println("Jump: " + jump);

    }

    private static boolean hasRepeatingNumber(char[] charArray) {

    for (int j = 0; j &lt; charArray.length; j++) {

    for (int j2 = j+1; j2 &lt; charArray.length; j2++) {

    if(charArray[j] == charArray[j2]){

    return true;

    }

    }

    }

    return false;

    }

    }'
  replies: []
- id: 7327
  author: Thierry Janaudy
  date: '2008-06-28T05:57:58'
  content: 'Cedric,

    Here is my not-clever solution: janaudy.com/weblog/

    But, there is an easier solution to the total count of numbers, for 1 to 10,000:

    I am going to do it from 1, to 9,999 as 10,000 is not part of it (4 0s):

    How many 4 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0) * 9 (for the second) * 8 (third) * 7 (fourth) = 4,536

    How many 3 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0) * 9 (for the second) * 8 (third)  = 648

    How many 2 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0) * 9 = 81

    How many 1 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0)  = 9 (0 excluded)

    So the total count is 4,536 + 648 + 81 + 9 = 5,274

    As for the biggest jump, it can only appear in the 4 digits one, so it is 10,000 - 9,876 = 124

    (99xx, 9899, 9898, etc.. going down to 9,876)

    Thierry'
  replies: []
- id: 7328
  author: Thierry Janaudy
  date: '2008-06-28T05:58:22'
  content: 'Cedric,

    Here is my not-clever solution: janaudy.com/weblog/

    But, there is an easier solution to the total count of numbers, for 1 to 10,000:

    I am going to do it from 1, to 9,999 as 10,000 is not part of it (4 0s):

    How many 4 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0) * 9 (for the second) * 8 (third) * 7 (fourth) = 4,536

    How many 3 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0) * 9 (for the second) * 8 (third)  = 648

    How many 2 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0) * 9 = 81

    How many 1 digits number can be made out of 0, 1, ..., 9 if no digit can repeat:

    9 (9 choices for the first digit, no 0)  = 9 (0 excluded)

    So the total count is 4,536 + 648 + 81 + 9 = 5,274

    As for the biggest jump, it can only appear in the 4 digits one, so it is 10,000 - 9,876 = 124

    (99xx, 9899, 9898, etc.. going down to 9,876)

    Thierry'
  replies: []
- id: 7329
  author: Dan
  date: '2008-06-28T06:30:45'
  content: Thierry, your answer raises an important question.  Is the biggest jump 124?  Do we include the gap between 9876 and 10000 as a "jump" even though 10000 is not one of the values in the sequence?
  replies: []
- id: 7330
  author: Dan
  date: '2008-06-28T06:34:28'
  content: 'Here is my naive Haskell solution:

    import List(nub)

    -- Predicate that returns True if a number contains no duplicate digits.

    noDuplicateDigits :: Int -> Bool

    noDuplicateDigits n = length (nub (digits)) == length digits

    where digits = show n

    values :: Int -> [Int]

    values n = [x | x  (Int, Int)

    answer n = (length sequence, gap)

    where sequence = values n

    gap = maximum (zipWith subtract sequence (tail sequence))'
  replies: []
- id: 7331
  author: dimitris
  date: '2008-06-28T06:50:23'
  content: "Brute force in Erlang without erlang library calls.\n-module(count).\n-compile(export_all).\nto_digits(Number) ->\nto_digits(Number, []).\nto_digits(Number, List) when Number div 10 == 0 ->\n[Number | List];\nto_digits(Number, List) ->\nto_digits(Number div 10, [Number rem 10 | List]).\ntest_to_digits() ->\n[3] = to_digits(3),\n[1,2] = to_digits(12),\n[1,0,0] = to_digits(100).\nin_list(Element, [Element|_T]) ->\ntrue;\nin_list(_Element, []) ->\nfalse;\nin_list(Element, [_H|T]) ->\nin_list(Element, T).\ntest_in_list() ->\ntrue = in_list(1,[1,2,3]),\ntrue = in_list(2,[1,2,3]),\ntrue = in_list(3,[1,2,3]),\nfalse = in_list(0,[1,2,3]),\nfalse = in_list(0,[]),\ntrue = in_list(1,[1]).\nunique_list([]) ->\ntrue;\nunique_list([H|T]) ->\ncase in_list(H,T) of\ntrue ->\nfalse;\nfalse ->\nunique_list(T)\nend.\ntest_unique_list() ->\nfalse = unique_list([1,1]),\ntrue = unique_list([1,2]),\ntrue = unique_list([1]),\nfalse = unique_list([1,2,1]),\nfalse = unique_list([2,1,1]),\nfalse = unique_list([1,1,2]),\n\
    true = unique_list([1,2,3]).\ncount(From, Max) ->\nCons = fun(List,Element) -> [Element|List] end,\ncount(From, Max + 1, Cons, []).\ncount(Upto, Upto, _Fun, State) ->\nState;\ncount(From, Upto, Fun, State) when From\ncase unique_list(to_digits(From)) of\ntrue ->\ncount(From + 1, Upto, Fun, Fun(State,From));\nfalse ->\ncount(From + 1, Upto, Fun, State)\nend.\ntest_count() ->\n[3,2,1] = count(1,3),\n[12,10,9] = count(9,12),\n[103,102,98,97] = count(97,103).\ntest_count4() ->\nCounter = fun({List,Sum},Element) -> {[Element|List],Sum + 1} end,\n{[12,10],2} = count(10,13,Counter,{[],0}),\n4 = count(97,104,fun(Sum,_Element) -> Sum + 1 end,0),\nGapFinder = fun({[H|_T]=List,MaxGap},Element) when Element - H > MaxGap ->\n{[Element|List],Element - H};\n({List,MaxGap},Element) ->\n{[Element|List],MaxGap}\nend,\n{[103,102,98],4} = count(98,104,GapFinder,{[],0}).\nchallenge(Max) ->\nFinder = fun({[H|_T]=List,MaxGap,Counter},Element) when Element - H >= MaxGap ->\n%\t\t     io:format(\"Gap ~p from\
    \ ~p to ~p~n\", [Element-H,H,Element]),\n{[Element|List],Element - H,Counter + 1};\n({List,MaxGap,Counter},Element) ->\n{[Element|List],MaxGap,Counter + 1}\nend,\n{_,BiggestJump,CountOfNumbers} = count(1,Max+1,Finder,{[],0,0}),\n{BiggestJump, CountOfNumbers}.\ntest_challenge() ->\n{1,10} = challenge(10),\n{2,90} = challenge(100),\n{11,738} = challenge(1000),\n{105,5274} = challenge(10000),\n{1047,32490} = challenge(100000).\ntest() ->\ntest_to_digits(),\ntest_in_list(),\ntest_unique_list(),\ntest_count(),\ntest_count4(),\ntest_challenge(),\nok."
  replies: []
- id: 7332
  author: Dan
  date: '2008-06-28T07:32:48'
  content: 'I also posted my solution on my blog, because the comments and indentation were stripped here.

    blog.uncommons.org/2008/06/28/cedrics-coding-challenge/'
  replies: []
- id: 7333
  author: DeWitt
  date: '2008-06-28T07:49:43'
  content: 'The following python generator also works:

    (i for i in xrange(start, end) if len(str(i)) == len(set(str(i)))):

    -DeWitt'
  replies: []
- id: 7334
  author: Keith Henry
  date: '2008-06-28T08:43:31'
  content: 'C#3 again, down to two Linq loops:

    //get all the non-repeating nums, conv to array to make ordinal lookups quicker

    int counter = 0;

    var nums = (

    from i in Enumerable.Range( 1, 10000 )

    let digits = i.ToString().ToCharArray()

    where digits.Distinct().Count() == digits.Length

    select new { num = i, ordinal = counter++ }

    ).ToArray();

    Console.WriteLine( "count: {0,0}", nums.Length );

    //get all the gaps, using array to loop up previous

    var gaps =

    from item in nums

    let last = item.ordinal > 0 ? nums[item.ordinal - 1].num : 1

    select item.num - last;

    Console.WriteLine( "max gap: {0,0}", gaps.Max() );'
  replies: []
- id: 7335
  author: Pete Kirkham
  date: '2008-06-28T09:37:54'
  content: 'Another python implementation at tincancamera.com  which is somewhat coloured by my normal use of python (prototyping algorithms before porting them to C++ or Java). Both brute-force iterate and filter and a combinatorics approach; the combinatorics one is faster for big N, but slower for N &lt; 2e6. For max = 10000, total 25277895; biggest jump 105, from 1098 to 1203.

    Why doesn''t your url form allow h t t p'
  replies: []
- id: 7336
  author: Pete Kirkham
  date: '2008-06-28T09:39:10'
  content: No, I don't want my email published on your web site. Please remove link.
  replies: []
- id: 7337
  author: ''
  date: '2008-06-28T10:00:46'
  content: 'A Scala version:

    for (i &lt;- 1 to 100000; s = i.toString; if HashSet[Char](s:_*).size == s.size) println(i)'
  replies: []
- id: 7338
  author: Eugene Kuleshov
  date: '2008-06-28T10:36:20'
  content: 'Java version (brute-force) without collections and nearly no memory allocation. www.jroller.com/eu/entry/cedric_s_coding_challenge

    I wonder if it is possible to give an answer to "the biggest jump" question without iterating trough entire sequence.

    Also, it would be interesting to check possibilities of parallelizing tasks, perhaps using Kilim or Doug Lea''s for/join framework.'
  replies: []
- id: 7339
  author: Eugene Kuleshov
  date: '2008-06-28T10:39:07'
  content: Cedric, what is with your comment filter? it doesn't allow to use "http" "colon" "slash" "slash" in the comment text and in the url field...
  replies: []
- id: 7340
  author: Thierry Janaudy
  date: '2008-06-28T10:40:02'
  content: 'Dan,

    You are right. Cedric needs to clarify this point. It is no a ''jump'' as per say, let''s call my jump a ''relative jump'' and not an ''absolute jump''.'
  replies: []
- id: 7341
  author: Mathieu Robin
  date: '2008-06-28T11:06:54'
  content: 'Non brute force, in python:

    from collections import deque

    BASE = 10

    MAX = 10000

    queue = deque(range(1, BASE))

    max_gap = 0

    count = 1

    prev_n = 0

    while len(queue) > 0:

    __n = queue.popleft()

    __max_gap = max(max_gap, n - prev_n)

    __prev_n = n

    __count += 1

    __if n * BASE &lt; MAX:

    ____has_digit = [False] * BASE

    ____k = n

    ____while k != 0:

    ______has_digit[k % BASE]= True

    ______k /= BASE

    ____for d, b in enumerate(has_digit):

    ______if not b:

    ________q = n * BASE + d

    ________queue.append(q)

    print count, max_gap

    Also results in 5275 numbers in the sequence, max gap of 105.'
  replies: []
- id: 7342
  author: Thierry Janaudy
  date: '2008-06-28T11:29:05'
  content: 'Following my investigation, a "clever" solution, only valid when max is a multiple of 10: 1000, 10,000, 100,000....

    Result is immediate:

    public class CC2 {

    static final int[] PCA = {

    9,

    9 * 9,

    9 * 9 * 8,

    9 * 9 * 8 * 7,

    9 * 9 * 8 * 7 * 6,

    9 * 9 * 8 * 7 * 6 * 5,

    9 * 9 * 8 * 7 * 6 * 5 * 4,

    9 * 9 * 8 * 7 * 6 * 5 * 4 * 3,

    9 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2

    };

    static final int[] ST = {

    9,

    98,

    987,

    9876,

    98765,

    987654,

    9876543,

    98765432,

    987654321

    };

    public static void main(String[] args) {

    // 4 is up to 9999, 5 up to 99,999, 9 up to 999,999,999,

    // Biggest is 9,876,543,210

    int nbd = Integer.parseInt(args[0]);

    int max = (int)Math.pow(10, nbd);

    int nbt = 0;

    for(int i=1; i &lt;= nbd; i++) {

    nbt += PCA[i-1];

    }

    int rjump = max - ST[nbd-1];

    System.out.println("For Max "+ max);

    System.out.println("Total Count Of Numbers: " + nbt);

    System.out.println("Relative Jump: "+rjump);

    }

    }'
  replies: []
- id: 7343
  author: Mathieu Robin
  date: '2008-06-28T11:55:42'
  content: 'Small patch to my solution:

    - 0 is not part of the sequence, so count is initialized at 0, not 1

    - to make it work if MAX is not a power of BASE:

    if q    queue.append(q)'
  replies: []
- id: 7344
  author: Andres Almiray
  date: '2008-06-28T14:28:48'
  content: Waiting for someone to post a solution using Fan ;-)
  replies: []
- id: 7345
  author: Charles Miller
  date: '2008-06-28T15:49:43'
  content: This problem is so much easier to solve in binary.
  replies: []
- id: 7346
  author: Ants Aasma
  date: '2008-06-28T16:08:06'
  content: 'A somewhat non-bruteforce functionally factored Python solution: pastebin.com/f63ce9880'
  replies: []
- id: 7347
  author: Ants Aasma
  date: '2008-06-28T16:09:19'
  content: Sorry, pasted the wrong URL, the correct one is pastebin.com/f5cec4683
  replies: []
- id: 7348
  author: Ed Davies
  date: '2008-06-28T17:30:52'
  content: 'szeryf, in your Ruby solution (which is neat and quick, by the way) wouldn''t this

    jump = 0

    nums.inject(1) {|a, b| jump = [jump, b - a].max; b}

    be more naturally expressed using each_cons(2) instead of inject with its "arbitrary" initial value and redundant return value?'
  replies: []
- id: 7349
  author: Erik Engbrecht
  date: '2008-06-28T18:30:19'
  content: 'I''ve got a heuristics based solution on my blog.  It''s mildly slower than a brute-force solution for small n, and I bet it''s competitive with a combinatronics based solution for large n.

    I would post a link, but your comment filter will just eat it.'
  replies: []
- id: 7350
  author: Cedric
  date: '2008-06-28T18:49:47'
  content: Eric's heuristic solution is at erikengbrecht.blogspot.com/2008/06/cedrics-code-challenge.html
  replies: []
- id: 7351
  author: szeryf
  date: '2008-06-28T23:44:20'
  content: 'Ed Davies: sure, I forgot about each_cons. But the return value in inject is not redundant, it''s used as `a'' in next pair :)

    Ruby version with each_cons:

    #!ruby -w

    require "enumerator"

    MAX = 10_000

    nums = (1..MAX).reject {|num| num.to_s =~ /(.).*\1/o}

    count = nums.length

    jump = 0

    nums.each_cons(2) {|a, b| jump = [jump, b - a].max}

    p nums, count, jump'
  replies: []
- id: 7352
  author: Logan Johnson
  date: '2008-06-29T00:51:31'
  content: 'solution based on searching the string space:

    docs.google.com/View?docID=dhpjhcjh_14f9msp3c8'
  replies: []
- id: 7353
  author: Bob Lee
  date: '2008-06-29T01:52:38'
  content: 'Here''s a really simple and efficient Java implementation that can find all values up to 10,000,000,000 on my Mac Pro in about 0.7s (not counting println overhead): crazybob.org/BeustSequence.java.html'
  replies: []
- id: 7354
  author: Bob Lee
  date: '2008-06-29T02:17:51'
  content: Make that 0.6s after a slight refactoring.
  replies: []
- id: 7355
  author: Samuel A. Falvo II
  date: '2008-06-29T02:19:42'
  content: 'Please find herein a version that satisfies the challenge as stated, written in ANSI Forth.  *WARNING* -- This blog strips whitespace.  VERY annoying.  If the Forth code is found to be hard to read, this is partly to blame.

    10000 constant largest

    : rdrop             postpone r> postpone drop ; immediate

    ( a simple approximation of integer sets using bit-masks )

    ( good enough to satisfy the challenge )

    : mask ( n -- n'' )       1 swap lshift ;

    : union ( n a -- )       swap mask over @ or swap ! ;

    : intersects ( n a -- f ) @ swap mask and ;

    ( the challenge solution proper )

    variable seen-set

    variable recurs-set

    variable t

    variable max-j

    variable j

    : digits ( n -- c-addr u ) 0 &lt;# #s #&gt; ;

    : digit ( c-addr u -- c-addr u n ) over c@ [char] 0 - ;

    : recurs ( n -- )   seen-set intersects recurs-set @ or recurs-set ! ;

    : seen ( n -- )     seen-set union ;

    : analyze ( c-addr u -- ) seen-set off  recurs-set off  begin dup while digit dup recurs seen 1 /string repeat 2drop ;

    : recur ( c-addr u -- f ) analyze recurs-set @ ;

    : unique ( n -- n ) dup digits recur if 1 j +! rdrop exit then ; ( filters numbers for uniqueness )

    : j0 ( -- )         1 j ! ;

    : initialize ( -- ) t off j0 max-j off ;

    : jumps ( -- )      j @ max-j @ max max-j ! j0 ;

    : total ( -- )      1 t +! ;

    : stats ( -- )      jumps total ;

    : number ( n -- n ) unique dup u. cr stats ;

    : report ( -- )     max-j @ . ." max jump" cr   t @ . ." total numbers displayed" cr ;

    : numbers ( -- )    1 begin number 1+ dup largest > until drop ;

    : challenge ( -- )  initialize numbers report ;

    challenge

    bye

    To execute, paste the above code into "challenge.fs", then execute "gforth challenge.fs" from the shell prompt.'
  replies: []
- id: 7356
  author: david
  date: '2008-06-29T03:20:49'
  content: 'Another Scala approach

    class Counter(lower:Int, upper:Int) {

    printMaxGapAndCount(filterDuplicates(new Range(lower, upper, 1)))

    def hasNoDuplicate(charvals:Array[Char]):Boolean = {

    charvals.takeWhile(charval => charvals.filter(el => el == charval).size == 1).size == charvals.size

    }

    def filterDuplicates(range:Range):List[Int] = {

    range.toList.filter(num => hasNoDuplicate(num.toString.toArray))

    }

    def printMaxGapAndCount(list:List[Int]) = {

    println("count: " + list.size + ", max gap: " + list.map(el => list.dropWhile(num => num  x > y).head)

    }

    }

    new Counter(1,10000) results in count: 5274, max gap: 105 after about 5 minutes'
  replies: []
- id: 7357
  author: The real Mr. Funk
  date: '2008-06-29T03:24:02'
  content: 'AS3:

    private const powers : Array = [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 ];

    private function doIt(max : Number) : void {

    max = Math.min(max,999999999);

    outer: for (var i : Number = 1; i  0) {

    var remainder : uint = tmp % 10;

    if (digits & powers[remainder])

    continue outer;

    digits += powers[remainder];

    tmp /= 10;

    }

    trace(i);

    }

    }'
  replies: []
- id: 7358
  author: The real Mr. Funk
  date: '2008-06-29T03:26:59'
  content: 'Repost in html :)

    private const powers : Array = [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512 ];

    private function doIt(max : Number) : void {

    &nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;max = Math.min(max,999999999);

    &nbsp;&nbsp;&nbsp;&nbsp;outer: for (var i : Number = 1; i &lt; max; i++) {

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var tmp : uint = i;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var digits : uint = 0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (tmp &gt; 0) {

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var remainder : uint = tmp % 10;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (digits & powers[remainder])

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue outer;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digits += powers[remainder];

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tmp /= 10;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trace(i);

    &nbsp;&nbsp;&nbsp;&nbsp;}

    }'
  replies: []
- id: 7359
  author: Boni Gopalan
  date: '2008-06-29T04:16:49'
  content: 'Writing of the program was very simple with Java.  The answer with 10K as the max limit is , a Jump of 124 : The jump from 9876 to 10K, a jump of 123 nos (All numbers from 9877 to 10000 are excluded hence a jump of 123).  It was interesting to look at how the gap progression happened.  There is a clear pattern and with this knowledge one can very trivially predict the biggest gap for numbers as big as google :-)

    ______________________________________________

    The following is the test results of how the gap progression happened for a range of 1 to 1000000000

    -------------------------------------------------------

    T E S T S

    -------------------------------------------------------

    Running com.boni.challenge.service.TestSeriesGenerator

    Lower:1, Higher :2 Difference :1

    Lower:10, Higher :12 Difference :2

    Lower:98, Higher :102 Difference :4

    Lower:109, Higher :120 Difference :11

    Lower:987, Higher :1023 Difference :36

    Lower:1098, Higher :1203 Difference :105

    Lower:9876, Higher :10234 Difference :358

    Lower:10987, Higher :12034 Difference :1047

    Lower:98765, Higher :102345 Difference :3580

    Lower:109876, Higher :120345 Difference :10469

    Lower:987654, Higher :1023456 Difference :35802

    Lower:1098765, Higher :1203456 Difference :104691

    Lower:9876543, Higher :10234567 Difference :358024

    Lower:10987654, Higher :12034567 Difference :1046913

    Lower:98765432, Higher :102345678 Difference :3580246

    Lower:109876543, Higher :120345678 Difference :10469135

    Lower:987654321, Higher :1000000000 Difference :12345679

    Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 41.883 sec

    Results :

    Tests run: 2, Failures: 0, Errors: 0, Skipped: 0

    ------------------------------------------------------------------------

    BUILD SUCCESSFUL

    ------------------------------------------------------------------------

    Total time: 44 seconds

    Finished at: Sun Jun 29 16:44:34 GMT+05:30 2008

    Final Memory: 16M/289M

    ------------------------------------------------------------------------

    ______________________________________________'
  replies: []
- id: 7360
  author: Assen Kolov
  date: '2008-06-29T06:32:53'
  content: 'A fast non-trivial readable Java solution is published on docs.google.com/Doc?id=ddn32vzw_25dqbrq2c4

    With printing all numbers is commented out, it executes in 430ms on a MacBook.

    The trick is to generate only the next good number - starting from the end see which is the first digit that can be incremented, then fill the rest with the smallest allowed number.'
  replies: []
- id: 7361
  author: DavidLG
  date: '2008-06-29T07:53:59'
  content: 'Scala code that only visits valid numbers:

    def numsWithDigits(len: Int, digs: Set[Char], leading:Boolean): Iterator[List[Char]] = {

    if (len == 0) Iterator.single(Nil)

    else {

    for (c &lt;- (if (leading) digs-''0''+'' '' else digs).elements;

    n &lt;- numsWithDigits(len-1, digs-c, leading && c=='' '')) yield c :: n;

    }

    }

    val nums = (for (x &lt;- numsWithDigits(4, scala.collection.immutable.TreeSet((''0'' to ''9'').toList:_*), true);

    str = x.mkString.trim if str.length > 0;

    n = str.toInt if n > 0) yield n).toList;

    printf("Count: %d\n", nums.length);

    val (first, second, gap) =

    nums.zip(nums.tail).map { case (x,y) => (x,y, y-x) }.reduceLeft((a,b)=>if (a._3 > b._3) a else b);

    printf("Biggest gap is %d between %d and %d\n", gap, first, second);'
  replies: []
- id: 7362
  author: raveman
  date: '2008-06-29T08:37:48'
  content: nice idea, however its pretty easy
  replies: []
- id: 7363
  author: Bob Lee
  date: '2008-06-29T11:05:02'
  content: 'I further simplified and sped up my implementation. It''s down to 330ms for max=10,000,000,000. It recursively iterates through all possible values for each digit.

    crazybob.org/BeustSequence.java.html'
  replies: []
- id: 7364
  author: Bob Lee
  date: '2008-06-29T12:57:57'
  content: 'Out of curiosity, I ported my solution to C: crazybob.org/beust.c.html

    Even when compiled using "gcc -O3", the C version takes 532ms while the Java version only takes 475ms (335ms if you subtract Java startup time).'
  replies: []
- id: 7365
  author: chrisb
  date: '2008-06-29T12:59:29'
  content: 'Brute force, 44ms on my 1.8 lappy:

    Func include = i => {

    var chars = i.ToString().ToCharArray();

    return chars.Distinct().Count() == chars.Length;

    };

    var sequence = Enumerable.Range(1, 10000).Where(i => include(i)).ToArray();

    var gap = sequence.Skip(1).Select((i, j) => i - sequence[j]).Max();

    Console.WriteLine("Count: {0,0}", sequence.Length);

    Console.WriteLine("Max Gap: {0,0}", gap);'
  replies: []
- id: 7366
  author: Bob Lee
  date: '2008-06-29T14:31:03'
  content: '@chrisb: FWIW, that would take 12 hrs. for max=10,000,000,000.'
  replies: []
- id: 7367
  author: ciju
  date: '2008-06-29T15:56:12'
  content: 'I spent some time over the problem, with python. The result is linked below. Bob Lee might find this interesting, as there is a comparison with my implementation of his methods.

    ciju.wordpress.com/2008/06/29/beust-sequence-aka-sequence-of-numbers-without-repeating-digits/'
  replies: []
- id: 7368
  author: Bob Lee
  date: '2008-06-29T17:10:57'
  content: 'OK, last time. I made mine a little longer, but clearer and faster: crazybob.org/BeustSequence.java.html

    @ciju: This implementation may help reduce the overhead you''re seeing from method calls in Python.'
  replies: []
- id: 7369
  author: Bob Lee
  date: '2008-06-29T20:46:07'
  content: 'OK, last last time. I went the other direction and made an alternate, more concise version: crazybob.org/BeustSequence2.java.html'
  replies: []
- id: 7370
  author: John Wilson
  date: '2008-06-30T07:04:46'
  content: 'A not very pretty but quite fast Java version: rifers.org/paste/show/7580

    Time of 1 to 10,000,000 ~58ms on a very old Pentium 4.

    The test method could do to be a bit more comprehensive.'
  replies: []
- id: 7371
  author: ciju
  date: '2008-06-30T07:41:27'
  content: 'Tried my solution in C. It ran through the whole sequence in 180ms. The most important change is the use of integer to store the sequence, rather than string(originally, Bob''s idea).

    @Bob: I tried implementing your method(BeustSequence2), in C. It took about 700ms. Again I am being partial of not trying to improve your code. Let me know if you would like to see the code, and suggest changes, although I assume we have spent too much time on this problem.'
  replies: []
- id: 7372
  author: ciju
  date: '2008-06-30T07:45:06'
  content: 'Forgot to mention. The performance results are for limit of 10,000,000,000(ex: all possible).'
  replies: []
- id: 7373
  author: Thierry Janaudy
  date: '2008-06-30T08:15:22'
  content: 'Created another (my last ;-)) version based on ''Permutations Listing'': oogifu.blogspot.com/2008/06/coding-challenge-ii.html

    Runs the 10^9 one in .6 second.'
  replies: []
- id: 7374
  author: ciju
  date: '2008-06-30T08:32:02'
  content: 'There was a bug in the code :(. Current version runs in about 230ms($time ./a.out).

    ciju.wordpress.com/2008/06/29/beust-sequence-aka-sequence-of-numbers-without-repeating-digits/'
  replies: []
- id: 7375
  author: Danil
  date: '2008-06-30T08:57:55'
  content: 'This is a pretty fast solution using ascii-APL J (jsoftware.com). Experts from likely will write even more terse code

    f =: [:(#;[:>./2-~/\])(#~([:*/[:~:":)"0)

    f i. 10000

    +----+---+

    |5275|105|

    +----+---+'
  replies: []
- id: 7376
  author: Bob Lee
  date: '2008-06-30T09:22:38'
  content: '@ciju: BeustSequence2 is the slower but more concise version. I''d try BeustSequence. Then again, the C compiler may not optimize around the recursion very well.'
  replies: []
- id: 7377
  author: Taylor Venable
  date: '2008-06-30T09:32:18'
  content: 'Not really particularly cute or clever, but a solution in Lua that uses a coroutine that generates numbers as high as your implementation can count:

    local c = coroutine.create(function ()

    &nbsp;&nbsp;&nbsp;&nbsp;local i = 0

    &nbsp;&nbsp;&nbsp;&nbsp;while true do

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while tostring(i):match("(%d).*%1") do

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coroutine.yield(i)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1

    &nbsp;&nbsp;&nbsp;&nbsp;end

    end)

    I''m sure it''s not especially fast either.'
  replies: []
- id: 7378
  author: Jason Cheatham
  date: '2008-06-30T10:58:31'
  content: 'public static void main(String[] args) {

    int max = 5437;

    for (int i = 0; i  repeats = new HashSet();

    for (int i = 0; i &lt; str.length(); i++) {

    if (!repeats.add(str.substring(i, i + 1))) {

    return true;

    }

    }

    return false;

    }'
  replies: []
- id: 7379
  author: Jason Cheatham
  date: '2008-06-30T11:00:36'
  content: 'Oops:

    public static void main(String[] args) {

    int max = 5437;

    for (int i = 0; i  repeats = new HashSet();

    for (int i = 0; i &lt; str.length(); i++) {

    if (!repeats.add(str.substring(i, i + 1)))

    return true;

    }

    }

    return false;

    }'
  replies: []
- id: 7380
  author: Jason Cheatham
  date: '2008-06-30T11:07:04'
  content: 'public static void main(String[] args) {

    int max = 5437;

    for (int i = 0; i &lt; max; i++) {

    if (!hasRepeatingInteger(i + "")) {

    System.out.println(i + "");

    }

    }

    }

    public static boolean hasRepeatingInteger(String str) {

    Set&lt;String&gt; repeats = new HashSet&lt;String&gt;();

    for (int i = 0; i &lt; str.length(); i++) {

    if (!repeats.add(str.substring(i, i + 1))) {

    return true;

    }

    }

    return false;

    }'
  replies: []
- id: 7381
  author: Bob Lee
  date: '2008-06-30T11:31:01'
  content: 'Alright, I''ve settled on the shorter solution: crazybob.org/BeustSequence.java.html

    Here''s the test harness which prints the count and largest gap: crazybob.org/TestBeustSequence.java.html

    And here''s the shared Listener interface: crazybob.org/Listener.java.html'
  replies: []
- id: 7382
  author: Bill Kress
  date: '2008-06-30T12:11:05'
  content: 'This is exactly the type of problem in which you want to avoid high level structures like Strings.

    Couldn''t post the code so I put it in my google docs:

    docs.google.com/Doc?id=avjh8kg87sn_29d4p2gk35

    My guess is this is about the fastest implementation you''ll come up with unless someone codes it in C with pointers, and even then the JVM is probably close.  To do large numbers be sure to comment out the println that prints a number every iteration.

    The one you requested:

    For a max of: 10000

    Total Displayed=5274

    Biggest Jump=104

    A smallish one:

    For a max of: 1000000

    Total Displayed=168570

    Biggest Jump=10468

    The largest power of 10 that executes instantly:

    For a max of: 10000000

    Total Displayed=712890

    Biggest Jump=104690

    Big one still takes less than a minute:

    For a max of: 100000000

    Total Displayed=2345850

    Biggest Jump=1046912

    The pattern on "Biggest Jump" seems strange.  I suppose it''s a power of 10 type thing.

    I could probably go up another power of 10 or two, but that would start to take minutes/hours and any higher than that and I''ll have to change a few ints to longs.'
  replies: []
- id: 7383
  author: Bill Kress
  date: '2008-06-30T12:17:45'
  content: Never mind--I hadn't seen Eugene's solution--keeping it all within ints improves the hell out of it as long as you aren't printing anything each iteration.
  replies: []
- id: 7384
  author: Pete Kirkham
  date: '2008-06-30T17:07:48'
  content: 'I think the sum of the values for n digits is (9!/(9-(n-1))!) * ( 45 * pow(10, n-1) + 40 * floor(pow(10, n-1) / 9) ) . Or the progression of the pattern in my blog.

    Empirically, the maximum jump for n digits is floor( ( 1203456789-1098765432 ) / pow(10, 10-n) ), since they all have much the same format. For the maximum below an arbitrary value, you''d test the 987... 1023... jump as well.

    Probably could think of an expression for a non-noughty number, but it''s bed time.

    tincancamera.com/blog'
  replies: []
- id: 7385
  author: Bob Lee
  date: '2008-06-30T17:40:55'
  content: '@Bill Kress: Mine handles 10^10 in less than half a second.'
  replies: []
- id: 7386
  author: ''
  date: '2008-07-01T05:03:29'
  content: factor-language.blogspot.com/2008/06/cedrics-code-challenge.html
  replies: []
- id: 7387
  author: Bill Kress
  date: '2008-07-01T11:13:50'
  content: 'Yeah, sorry.  I started coding before reading the bottom 1/2 of the responses (the power solutions).

    I mostly feel strange about all the earlier solutions using higher language constructs to make a short (nloc) solution when that really doesn''t help anyone.  Even java String should be out of the consideration--let alone anything that actually manipulated their strings by splitting them apart just to compare them--holy cow that''s inefficient.

    Also, all the solutions are brute force.  The pattern of count of numbers found for each power of 10 leads me to believe there actually is a much faster mathematical solution than comparing digits.  Probably some factorial-looking thing.'
  replies: []
- id: 7388
  author: stinkyminky
  date: '2008-07-01T11:30:48'
  content: 'Another version of recursive approach - the similar with Crazy Bob''s.  I did a quick benchmark and it is faster.  I''m not sure it is because I calculate bits and reuse them...

    public class Test {

    private static class ResultListener

    {

    public void foundResult(long result)

    {

    // System.out.println(result);

    }

    }

    static int BITS[];

    static

    {

    BITS = new int[10];

    BITS[0] = ( 1 = max )

    return;

    for( int i = 0 ; i &lt; 10; i++ )

    {

    if ( (used & BITS[i]) == 0 )

    {

    l.foundResult(start+i);

    recurseRetrieve( (start+i) * 10 , max,  used | BITS[i], l );

    }

    }

    }

    }'
  replies: []
- id: 7389
  author: stinkyminky
  date: '2008-07-01T11:47:49'
  content: My bad.  The above does not return in 1 to MAX in sequence.  It is basically combinatorial approach so it will be ( 1 , 10 , 102, 1023 , 1203 )
  replies: []
- id: 7390
  author: Robert Fischer
  date: '2008-07-01T13:03:04'
  content: 'As requested, I posted my solution on my blog.

    It''s in OCaml, and finds all the values from 1 to max_int in 27 seconds on my 2.16 GHz MacBook Pro.

    enfranchisedmind.com/blog/2008/07/01/cedrics-problem-in-ocaml/'
  replies: []
- id: 7391
  author: Robert Fischer
  date: '2008-07-01T13:03:56'
  content: BTW, your blog software balks at if you prefix the URL with the HyperText Transfer Protocol prefix.
  replies: []
- id: 7392
  author: ciju
  date: '2008-07-01T14:24:14'
  content: '@Bill Kress

    I don''t know what makes you feel that all solutions are brute force. At the least Bob''s and my solutions are not. They just generate the required numbers(which the problem statement asks to generate).

    If you are talking about the count of such numbers, then thats altogether a different issue. Its simple permutation. Here''s google helping us out with the answer for maximum possible such numbers.

    www.google.co.in/search?hl=en&q=9*(1+%2B+9!%2F8!+%2B+9!%2F7!+%2B+9!%2F6!+%2B+9!%2F5!+%2B+9!%2F4!+%2B+9!%2F3!+%2B+9!%2F2!+%2B+9!+%2B+9!)

    If you need explanation, visit the end of my blog entry.

    ciju.wordpress.com/2008/06/30/beust-sequence-aka-sequence-of-numbers-without-repeating-digits/

    Note: the link has changed from the one posted before, I don''t know what wordpress.com is doing.'
  replies: []
- id: 7393
  author: sidereal
  date: '2008-07-01T17:16:29'
  content: 'I''m fascinated by the number of authors that claim their solution isn''t brute force, when in fact the solution is clearly brute force (up to and including regex!  A recompiled regex on every loop iteration!  That''s brute with a big, wooden club!)

    We may be watching the end of the era when programmers even cared about the performance of an algorithm and nowadays simply assume that the implementation that takes the fewest characters to write is the fastest one.

    We need a symposium on the definition of brute force.'
  replies: []
- id: 7394
  author: ciju
  date: '2008-07-01T18:51:26'
  content: 'Brute-force or not!

    Regarding the confusion about whats brute-force and whats not, let me explain a little. If you are asked to generate numbers form 1 to 10, generating those numbers is not brute-force. You have to go though them to print them out, at the least. Now, if you are asked to print numbers in range [1, 10] which are divisible by 5. Then checking each number and printing only the once divisible by 5 (ex: 5 and 10), does make it brute-force. Because the output length is 2, and you are going through whole of the search space to generate those 2 numbers. The one which only generates 5 and 10 is the _not_ brute-force method. And I can conform that at least Bob''s and my method are not brute-force. They only generate the numbers which don''t have repeated digits. They don''t generate the whole sequence and check whether digits are repeated in a number. And thats why, for example, my solution completes in about 0.2s (I am talking about generating all the possibilities and only the possibilities, 8877690(see
    my comment above), in sequential order).'
  replies: []
- id: 7395
  author: Paulo Gaspar
  date: '2008-07-01T20:51:57'
  content: '@Bill Kress:

    Something wrong with your algorithm: I could verify that your "Biggest Jump" is wrong for the 10,000 case. Here are my results:

    The one you requested:

    For a max of: 10,000   done in 0 ms

    Total Displayed: 5,274

    Biggest Jump: 124

    Biggest Jump begin: 9,877

    Biggest Jump end  : 10,000

    @Crazy Bob:

    414 ms

    ... yeah, I have fast hardware and yeah your code is cleaner!

    Huge Crazy Bob''s one...:

    For a max of: 10,000,000,000   done in 414 ms

    Total Displayed: 8,877,690

    Biggest Jump: 123,456,790

    Biggest Jump begin: 9,876,543,211

    Biggest Jump end  : 10,000,000,000

    @all:

    I just jump number ranges when most significant numbers have repetitions. The essentials (copy+paste on your IDE and format if you will):

    public class BeustLongSequenceFinder {

    private final long m_maxValue;

    private long m_maxContinuousSkippingCount;

    private long m_maxContinuousSkippingEnd;

    private long m_continuousSkippingCount;

    private long m_totalSkippingCount;

    public BeustLongSequenceFinder(final long maxValue) {

    if (maxValue  0");

    m_maxValue = maxValue;

    }

    //... getters ...

    public void findNumbers() {

    // Result fields

    m_maxContinuousSkippingCount = 0;

    m_maxContinuousSkippingEnd = 0;

    m_totalSkippingCount = 0;

    // Calc. state fields

    m_continuousSkippingCount = 0;

    final long xNextVal = loopNext(0, m_maxValue, digitCount(m_maxValue) - 1, 0);

    if (0 != m_continuousSkippingCount)

    storeJump(xNextVal);

    } // end method findNumbers

    private final void storeJump(final long xNextVal) {

    m_totalSkippingCount += m_continuousSkippingCount;

    if (m_continuousSkippingCount > m_maxContinuousSkippingCount) {

    m_maxContinuousSkippingCount = m_continuousSkippingCount;

    m_maxContinuousSkippingEnd = xNextVal - 1;

    }

    }

    private final long loopNext(long nextValue, final long maxValue,

    final long digitIndex, final int leftmostMask) {

    if (0 == digitIndex) {

    for (int i = 0; (i  maxValue)

    m_continuousSkippingCount += maxValue - nextValue + 1;

    else

    m_continuousSkippingCount += xSkipped;

    nextValue = xNextNextValue;

    }

    else {

    nextValue = loopNext(nextValue, maxValue, xNextIndex, leftmostMask | (1 &lt;&lt; i));

    } // end if-else

    } // end for

    } // end if-else

    return nextValue;

    } // end if-else

    } // end method loopDigit

    private static final long digitCount(final long num) {

    return (long) Math.log10(num) + 1;

    } // end method digitCount

    } // end class BeustSequenceFinder'
  replies: []
- id: 7396
  author: Paulo Gaspar
  date: '2008-07-01T21:00:11'
  content: "Sorry! 2nd attempt giving HTML escaping to less-than and greater-than operators:\npublic class BeustLongSequenceFinder {\nprivate final long m_maxValue;\nprivate long m_maxContinuousSkippingCount;\nprivate long m_maxContinuousSkippingEnd;\nprivate long m_continuousSkippingCount;\nprivate long m_totalSkippingCount;\npublic BeustLongSequenceFinder(final long maxValue) {\nif (maxValue &lt;= 0)\nthrow new IllegalArgumentException(\"must be: maxValue &gt; 0\");\nm_maxValue = maxValue;\n}\n//... getters ...\npublic void findNumbers() {\n// Result fields\nm_maxContinuousSkippingCount = 0;\nm_maxContinuousSkippingEnd = 0;\nm_totalSkippingCount = 0;\n// Calc. state fields\nm_continuousSkippingCount = 0;\nfinal long xNextVal = loopNext(0, m_maxValue, digitCount(m_maxValue) - 1, 0);\nif (0 != m_continuousSkippingCount)\nstoreJump(xNextVal);\n} // end method findNumbers\nprivate final void storeJump(final long xNextVal) {\nm_totalSkippingCount += m_continuousSkippingCount;\nif (m_continuousSkippingCount\
    \ &gt; m_maxContinuousSkippingCount) {\nm_maxContinuousSkippingCount = m_continuousSkippingCount;\nm_maxContinuousSkippingEnd = xNextVal - 1;\n}\n}\nprivate final long loopNext(long nextValue, final long maxValue,\nfinal long digitIndex, final int leftmostMask) {\nif (0 == digitIndex) {\nfor (int i = 0; (i &lt; 10) && (nextValue &lt;= maxValue); ++i, ++nextValue) {\nif (0 != (leftmostMask & (1 &lt;&lt; i)))\n++m_continuousSkippingCount;\nelse {\nif (0 != m_continuousSkippingCount) {\nstoreJump(nextValue);\nm_continuousSkippingCount = 0;\n}\n} // end if-else\n} // end for\nreturn nextValue;\n}\nelse {\nfinal long xNextIndex = digitIndex - 1;\nif (0 == leftmostMask) {\nnextValue = loopNext(nextValue, maxValue, xNextIndex, 0); // Leading 0\nfor (int i = 1; i &lt; 10; i++)\nnextValue = loopNext(nextValue, maxValue, xNextIndex, (1 &lt;&lt; i));\n}\nelse {\nfor (int i = 0; (i &lt; 10) && (nextValue &lt;= maxValue); i++) {\nif (0 != (leftmostMask & (1 &lt;&lt; i))) {\n// Digits already repeated\n\
    // Skipping inner loops\nlong xSkipped = 10; // = pow10(digitIndex);\n{\tfor (int p = 1; p &lt; digitIndex; ++p)\nxSkipped *= 10;\n}\nfinal long xNextNextValue = nextValue + xSkipped;\nif (xNextNextValue &gt; maxValue)\nm_continuousSkippingCount += maxValue - nextValue + 1;\nelse\nm_continuousSkippingCount += xSkipped;\nnextValue = xNextNextValue;\n}\nelse {\nnextValue = loopNext(nextValue, maxValue, xNextIndex, leftmostMask | (1 &lt;&lt; i));\n} // end if-else\n} // end for\n} // end if-else\nreturn nextValue;\n} // end if-else\n} // end method loopNext\nprivate static final long digitCount(final long num) {\nreturn (long) Math.log10(num) + 1;\n} // end method digitCount\n} // end class BeustSequenceFinder"
  replies: []
- id: 7397
  author: Bob Lee
  date: '2008-07-01T22:37:23'
  content: '@sidereal: For max=10^10, 8,877,691 values match. My algorithm only performs 8,877,690 operations while the brute force approach requires 10^10 ops (or 1,125X more than mine).'
  replies: []
- id: 7398
  author: Bob Lee
  date: '2008-07-01T22:58:28'
  content: '@sidereal: To illustrate, here''s a log2-scale graph of:

    1) the # of ops performed by my algorithm

    2) the # of ops performed by a brute force algorithm

    3) the number of matching values

    for maximum values up to 10^10: crazybob.org/beust.png

    As you can see, a brute force algorithm scales at about O(max) while my algorithm scales at O(matches) in the worst case (and much better in common cases).'
  replies: []
- id: 7399
  author: jdumb
  date: '2008-07-01T23:30:34'
  content: 'some ugly java code

    usage

    long from = Long.parseLong(args[0]);

    long to = Long.parseLong(args[1]);

    long last=-1;

    for(Udin z = new Udin(from); z.inc() && (last=z.toLong())  0 || number==0){

    int rem = (int) (num % 10);

    if(set.get(rem)){

    throw new IllegalArgumentException( number + " is invalid ''cas "+rem+" exist in "+set );

    }

    setDigit(++biggest, rem);

    num = num / 10;

    if(number==0){

    break;

    }

    }

    Arrays.fill(digits, biggest+1, digits.length, (short) -1);

    }

    @Override

    public String toString() {

    StringBuilder str = new StringBuilder();

    for (int i=biggest; i>=0; i--){

    str.append(digits[i]);

    }

    return str.toString();

    }

    public long toLong(){

    long rez = 0;

    for (int i=biggest; i>=0; i--){

    rez = rez*10 + digits[i];

    }

    return rez;

    }

    void setDigit(int pozition, int digit) {

    assert !set.get(digit) : digit + " already there " + set+" - "+Arrays.toString(digits);

    digits[pozition] = (short) digit;

    set.set(digit);

    }

    /**

    * @return false means state becomes inconststent

    * */

    public boolean inc(){

    int little=0;

    // try to inc littlest

    for(; little0){

    // havent free digits to fill

    if(little > 10-set.cardinality()){

    return false;

    }else{

    // fill digits from oldest by less numbers

    little--;

    for( ;little>=0; little-- ){

    setDigit(little, set.nextClearBit(0));

    }

    return true;

    }

    } else {

    return true;

    }

    }// newVal=10 go ahead to next little

    }

    return false;

    }

    }'
  replies: []
- id: 7400
  author: Hoang Thang
  date: '2008-07-02T01:36:23'
  content: 'using System;

    using System.Collections.Generic;

    using System.Text;

    namespace ConsoleApplication1

    {

    class Program

    {

    static void Main(string[] args)

    {

    //System.Console.WriteLine(1  reserved = new List();

    ICollection ketqua = new List();

    void print()

    {

    foreach (int i in ketqua)

    {

    System.Console.Write(i + " ");

    }

    System.Console.WriteLine();

    System.Console.WriteLine(count);

    System.Console.ReadKey();

    }

    void dequi(int next)

    {

    for (int j = 0; j &lt; 10; j++)

    {

    int temp = next * 10 + j;

    if (!reserved.Contains(j) && temp &lt; max && temp != 0)

    {

    ketqua.Add(temp);

    count++;

    reserved.Add(j);

    dequi(temp);

    reserved.Remove(j);

    }

    }

    }

    }

    }'
  replies: []
- id: 7401
  author: Paulo Gaspar
  date: '2008-07-02T02:38:24'
  content: 'Slight improvement after a couple of optimizations, including seeding (when max big enough) the biggest jump with a very conservative (max/100)-1.

    Code is still ugly and I will just post the timings:

    The one you requested:

    For a max of: 10,000   done in 0 ms

    Total Displayed: 5,274

    Biggest Jump: 124

    Biggest Jump begin: 9,877

    Biggest Jump end  : 10,000

    Huge Crazy Bob''s one...:

    For a max of: 10,000,000,000   done in 383 ms

    Total Displayed: 8,877,690

    Biggest Jump: 123,456,790

    Biggest Jump begin: 9,876,543,211

    Biggest Jump end  : 10,000,000,000

    Have Fun,'
  replies: []
- id: 7402
  author: augustss
  date: '2008-07-02T05:58:45'
  content: 'Simple Haskell version:

    import Data.List(nub)

    main = print $ counter 10000

    counter n = (length ns, maximum $ zipWith (-) (tail ns) ns) where ns = filter (not . anySame . show) [1..n]

    anySame xs = xs /= nub xs'
  replies: []
- id: 7403
  author: Bob Lee
  date: '2008-07-02T07:52:34'
  content: '@Paulo: Both 9,876,543,211 and 10,000,000,000 contain dups.'
  replies: []
- id: 7404
  author: Paulo Gaspar
  date: '2008-07-02T08:02:42'
  content: '@Bob Lee

    Of course they are! They are the first and last element of the range, since I am presenting the jump as a closed boundary interval.

    Now, if I can get my implementation as clean as yours...

    Have fun,'
  replies: []
- id: 7405
  author: Daniel Spiewak
  date: '2008-07-02T10:01:23'
  content: 'Another Scala version (completely untested):

    def printNonRep(min: Int)(max: Int) = {

    (min until max).toList.flatMap { num =>

    val str = num.toString.toCharArray

    val (_, res, _) = ( str :\ (false, Nil, Set[Char]()) ) { (tuple, ch) =>

    val (dup, res, set) = tuple

    if (dup || set contains ch) {

    (true, res, set)

    } else {

    (false, ch :: res, set + ch)

    }

    }

    (0 /: res) { (_ * 10) + _ }

    }

    }

    No-where near as elegant as the first version given, but I think it works and is reasonably efficient.  Of course, it''s functional soup...

    There''s probably an issue with type inference in the foldRight tuple, but I haven''t tried it to be sure.'
  replies: []
- id: 7406
  author: Sam Pullara
  date: '2008-07-02T12:41:27'
  content: Bob Lee's version in Java is by far the best one I've seen.
  replies: []
- id: 7407
  author: Paulo Gaspar
  date: '2008-07-02T13:14:21'
  content: '@Sam

    Yes, it is cleeeaaan!

    I wonder if I am getting any meaningful performance gain over Bob''s version and still can''t get clean code with my strategy.'
  replies: []
- id: 7408
  author: Deva
  date: '2008-07-02T13:29:19'
  content: 'www.lolcode.com/home

    I will followup soon with a kickass LOLCODE implementation soon ;-)'
  replies: []
- id: 7409
  author: Mauricio Fernandez
  date: '2008-07-02T17:08:10'
  content: 'I have written a slightly more general solution in OCaml (it can count efficiently in any arbitrary base, not only in base 10, so e.g. base 1000 is no problem for it, unlike most solutions above).

    It is a bit faster than Bob Lee''s Java version on my box (AMD Athlon 64 X2 6000+). My program runs in 640ms, the Java implementation counts to 10^10 in ~680ms (total exec time ~750ms including JVM startup time, etc.).

    It can be found at

    eigenclass.org/hiki/ordered_permutations'
  replies: []
- id: 7410
  author: Jim
  date: '2008-07-02T21:19:53'
  content: What, no Lisp submissions?!
  replies: []
- id: 7411
  author: sunwukong
  date: '2008-07-02T22:20:38'
  content: 'Well, here is one.

    (defun collect-numbers-without-repetition (min max)

    &nbsp;&nbsp;(flet ((repeatedp (n)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(let ((digits (format nil "~d" n)))

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(/= (length digits) (length (remove-duplicates digits))))))

    &nbsp;&nbsp;&nbsp;&nbsp;(loop for i from min to max unless (repeatedp i) collect i)))'
  replies: []
- id: 7412
  author: Bob Lee
  date: '2008-07-03T01:38:20'
  content: 'Since Mauricio upped the ante, here''s a slightly longer version which runs in 210ms for max=10^10 on my machine: crazybob.org/FastBeustSequence.java.html

    Like Mauricio''s OCaml solution, iteration of the digit set is now O(size) as opposed to O(capacity), but unlike the OCaml solution, set ops are O(1) instead of O(log(n)).'
  replies: []
- id: 7413
  author: ragstorooks
  date: '2008-07-03T02:25:45'
  content: 'I have a different approach which works quite quickly but is highly customized to fit max=10,000. It would in its current state involve code changes if max changed. Anyway, for what its worth, the code can be found here: ragstorooks.wordpress.com/2008/07/03/cedrics-coding-challenge/'
  replies: []
- id: 7414
  author: Paulo Gaspar
  date: '2008-07-03T04:00:49'
  content: '@Bob

    Interesting code!

    You have to tell us what Java version + hardware you are using.

    My 10,000,000,000 done in 383 ms was ran in Java 6 on under OS X on a MacPro 2008 2.8GHz. (8 cores but that is not important.)

    Java 5 runs it twice as slow!

    Tkx,'
  replies: []
- id: 7415
  author: Chris Card
  date: '2008-07-03T06:17:37'
  content: 'Here is a brute force implementation in Fan.

    class Nonrepeat

    {

    static const Int START := 0

    static const Int MAX := 10000

    static Void main()

    {

    Int m := 0 //max gap

    Int k := 0 //valid value count

    Int p := START //previous valid value

    (START..MAX).each |Int x|

    {

    Str s := x.toStr

    if(s.size == uniqueCharCount(s))

    {

    k++

    Int g := (x-p)

    echo( "$x gap: $g (count $k)")

    if(g>m)

    {

    m=g

    }

    p=x

    }

    }

    echo("Max gap is $m" )

    }

    static Int uniqueCharCount(Str s)

    {

    u := Int[,]

    s.each |Int c |

    {

    if(!u.contains(c))

    {

    u.add(c)

    }

    }

    return u.size

    }

    }'
  replies: []
- id: 7416
  author: Paulo Gaspar
  date: '2008-07-03T06:48:35'
  content: 'I still have to run it on my usual hardware to see how much faster it is, but this is for sure faster and leaner than my previous solution:

    public&nbsp;class&nbsp;BeustFastSequenceFinder&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;static&nbsp;final&nbsp;long&nbsp;LAST_NOREPS&nbsp;&nbsp;&nbsp;=&nbsp;9876543210L;

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;static&nbsp;final&nbsp;long[]&nbsp;POW10;

    &nbsp;&nbsp;&nbsp;&nbsp;static&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;POW10&nbsp;=&nbsp;new&nbsp;long[11];

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;long&nbsp;xPow&nbsp;=&nbsp;1;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;POW10.length;&nbsp;++i)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;POW10[i]&nbsp;=&nbsp;&nbsp;xPow;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xPow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*=&nbsp;10;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;final&nbsp;long&nbsp;m_maxValue;

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;long&nbsp;m_maxJumpDelta;

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;long&nbsp;m_maxJumpPreviousPrintedValue;

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;long&nbsp;m_printCount;

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;long&nbsp;m_lastPrintedValue;

    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;BeustFastSequenceFinder(final&nbsp;long&nbsp;maxValue)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(maxValue&nbsp;&lt;=&nbsp;0)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw&nbsp;new&nbsp;IllegalArgumentException("must&nbsp;be:&nbsp;maxValue&nbsp;&gt;&nbsp;0");

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_maxValue&nbsp;=&nbsp;maxValue;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;long&nbsp;getMaxJumpBegin()&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;m_maxJumpPreviousPrintedValue+1;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;long&nbsp;getMaxJumpSize()&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;m_maxJumpDelta-1;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;long&nbsp;getMaxValue()&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;m_maxValue;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;long&nbsp;getPrintCount()&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;m_printCount;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;void&nbsp;findNumbers()&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_maxJumpDelta&nbsp;=&nbsp;Math.max(1,&nbsp;m_maxValue&nbsp;/&nbsp;100);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_maxJumpPreviousPrintedValue&nbsp;=&nbsp;0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_lastPrintedValue&nbsp;=&nbsp;0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_printCount&nbsp;=&nbsp;0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loopNext(0,&nbsp;(m_maxValue&nbsp;&gt;&nbsp;LAST_NOREPS)&nbsp;?&nbsp;LAST_NOREPS&nbsp;:&nbsp;m_maxValue,&nbsp;10,&nbsp;0);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;final&nbsp;long&nbsp;xDelta&nbsp;=&nbsp;(m_maxValue+1)&nbsp;-&nbsp;m_lastPrintedValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(xDelta&nbsp;&gt;&nbsp;m_maxJumpDelta)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_maxJumpPreviousPrintedValue&nbsp;=&nbsp;m_lastPrintedValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_maxJumpDelta&nbsp;=&nbsp;xDelta;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;long&nbsp;getMaxJumpEnd()&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;m_maxJumpPreviousPrintedValue&nbsp;+&nbsp;m_maxJumpDelta&nbsp;-&nbsp;1;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;protected&nbsp;void&nbsp;print(final&nbsp;long&nbsp;value)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(0&nbsp;!=&nbsp;value)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;final&nbsp;long&nbsp;xDelta&nbsp;=&nbsp;value&nbsp;-&nbsp;m_lastPrintedValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(xDelta&nbsp;&gt;&nbsp;m_maxJumpDelta)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_maxJumpPreviousPrintedValue&nbsp;=&nbsp;m_lastPrintedValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_maxJumpDelta&nbsp;=&nbsp;xDelta;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m_lastPrintedValue&nbsp;=&nbsp;value;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++m_printCount;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;System.out.println(value);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;long&nbsp;loopNext(long&nbsp;nextValue,&nbsp;final&nbsp;long&nbsp;maxValue,&nbsp;final&nbsp;int&nbsp;digitIndex,&nbsp;final&nbsp;int&nbsp;leftmostMask)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(0&nbsp;==&nbsp;digitIndex)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;xUsedMask&nbsp;=&nbsp;leftmostMask;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;(i&nbsp;&lt;&nbsp;10)&nbsp;&&&nbsp;(nextValue&nbsp;&lt;=&nbsp;maxValue);&nbsp;++i,&nbsp;++nextValue,&nbsp;xUsedMask&nbsp;&gt;&gt;=&nbsp;1)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(0&nbsp;==&nbsp;(xUsedMask&nbsp;&&nbsp;1))

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(nextValue);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;nextValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(0&nbsp;==&nbsp;leftmostMask)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nextValue&nbsp;=&nbsp;loopNext(nextValue,&nbsp;maxValue,&nbsp;digitIndex&nbsp;-&nbsp;1,&nbsp;0);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;1;&nbsp;i&nbsp;&lt;&nbsp;10;&nbsp;i++)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nextValue&nbsp;=&nbsp;loopNext(nextValue,&nbsp;maxValue,&nbsp;digitIndex&nbsp;-&nbsp;1,&nbsp;(1&nbsp;&lt;&lt;&nbsp;i));

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nextValue&nbsp;&gt;&nbsp;maxValue)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;nextValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;final&nbsp;long&nbsp;xDigitPow10&nbsp;=&nbsp;POW10[digitIndex];

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;xUsedMask&nbsp;=&nbsp;leftmostMask;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;(int&nbsp;i&nbsp;=&nbsp;0;&nbsp;i&nbsp;&lt;&nbsp;10;&nbsp;i++,&nbsp;xUsedMask&nbsp;&gt;&gt;=&nbsp;1)&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(0&nbsp;!=&nbsp;(xUsedMask&nbsp;&&nbsp;1))&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nextValue&nbsp;+=&nbsp;xDigitPow10;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nextValue&nbsp;&gt;&nbsp;maxValue)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;nextValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nextValue&nbsp;=&nbsp;loopNext(nextValue,&nbsp;maxValue,&nbsp;digitIndex&nbsp;-&nbsp;1,&nbsp;leftmostMask&nbsp;|&nbsp;(1&nbsp;&lt;&lt;&nbsp;i));

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(nextValue&nbsp;&gt;&nbsp;maxValue)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;nextValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;nextValue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;}

    }

    // Have Fun!'
  replies: []
- id: 7417
  author: Juan Manuel
  date: '2008-07-03T09:01:17'
  content: 'import itertools

    MAX=10000

    # Using lists

    nums = filter(lambda x: len(str(x)) == len(set(d for d in str(x))), range(1, MAX+1))

    print "LIST", nums

    print "MAX", max(map(lambda x,y: (x-y, y, x), nums[1:], nums[:-1]))

    print "COUNT", len(nums)

    # With iterators and functional programming

    # Remove initial dots

    def mkseq(max):

    ....return itertools.ifilter(lambda x: len(str(x))==len(set(d for d in str(x))), xrange(1, max+1))

    def mkdiff(max):

    ....curr, next = itertools.tee(mkseq(max))

    ....next.next()

    ....return itertools.imap(lambda x,y: (x-y, y, x), next, curr)

    def max_count_step(x,y):

    ....max_, count_ = x

    ....return (max(max_, y), count_+1)

    print "MAX, COUNT=", reduce(max_count_step, mkdiff(MAX), ((0, 0, 0), 1))

    # Results:

    MAX, COUNT=((105, 8796, 8901), 5274)'
  replies: []
- id: 7418
  author: Peter Maciocia
  date: '2008-07-03T09:27:42'
  content: 'Python:

    [x for x in xrange(10000) if len(str(x))==len(set(str(x)))]'
  replies: []
- id: 7419
  author: Bob Lee
  date: '2008-07-03T09:47:06'
  content: '@Paulo: Same as above, 3ghz Mac Pro, Java 6 w/ -server.'
  replies: []
- id: 7420
  author: Paulo Gaspar
  date: '2008-07-03T10:06:25'
  content: '@Bob

    I tested your (very interesting) algorithm at my laptop.

    Yours is faster. Takes roughly 60% of mine''s time for the 10 Giga test.

    However, it is missing the last Gap/Jump, because the last gap does not end at the max value boundary and you only collect the gap/jump data when you "print".

    Therefore I got results like this (both printed my way):

    *** Bob Lee''s: ***

    The largest power of 10...:

    For a max of: 10,000,000   done in 34 ms

    Total Displayed: 712,890

    Biggest Jump: 104,691

    Biggest Jump begin: 1,098,766

    Biggest Jump end  : 1,203,455

    *** Paulo''s: ***

    The largest power of 10...:

    For a max of: 10,000,000   done in 39 ms

    Total Displayed: 712,890

    Biggest Jump: 123,457

    Biggest Jump begin: 9,876,544

    Biggest Jump end  : 10,000,000

    So, you are just missing a final gap check to get the last and bigger one.

    Have fun,

    PJG'
  replies: []
- id: 7421
  author: Sam Pullara
  date: '2008-07-03T11:06:29'
  content: '@PJG That last jump isn''t really.  There are no more jumps because after that last begin it always has duplicate digits.'
  replies: []
- id: 7422
  author: Bob Lee
  date: '2008-07-03T11:08:26'
  content: I interpreted the biggest jump as being between two valid values (which 10^6 is not), but I suppose you could interpret it either way.
  replies: []
- id: 7423
  author: Darmani
  date: '2008-07-03T12:28:48'
  content: 'Ruby one-liner (not counting the import):

    require ''enumerator''

    puts (a=(1..10000).to_a.reject{|x| x.to_s.split(//).uniq!}), a.enum_cons(2).to_a.sort_by{|(b,c)|c-b}.last.inspect, a.inject(0){|s,n|s+n}'
  replies: []
- id: 7424
  author: Jon
  date: '2008-07-03T14:02:55'
  content: 'In Python

    u = [x for x in range(1,10000) if len(str(x))==len(set(str(x)))]

    gaps = [u[i+1]-u[i] for i in range(len(u)-1)]

    print ''number: '',len(nonrepeating) # 5274

    print ''biggest gap: '',max(gaps) # 105'
  replies: []
- id: 7425
  author: Dennis Furey
  date: '2008-07-03T14:29:41'
  content: '# solution in Ursala

    #import nat

    func = ^(nleq$^+ difference*typ,length)+ ~&triK2tkZ2FlS+ iota+successor; * ^lrhPX/~& %nP

    answer = func 10000'
  replies: []
- id: 7426
  author: Paulo Gaspar
  date: '2008-07-03T15:11:47'
  content: 'Yes, reading the original post it really looks open to both interpretations.

    Anyway, changing Bob''s code to my interpretation is trivial and, obviously, has no impact on its to performance. I can''t imagine a more efficient solution (even if a couple of details could be added(*)).

    (*) - Like always limiting the search to max &lt;= 9876543210, since afterwards all numbers are repeated for base 10. But its number of digits limit does something like that too.

    Have Fun,'
  replies: []
- id: 7427
  author: dan
  date: '2008-07-03T16:04:59'
  content: 'lisp

    (let ((seq (loop for i from 1 to 1000 when

    (= (parse-integer (remove-duplicates (write-to-string i))) i)

    collect i)))

    (list (length seq)

    (reduce #''max (maplist #''(lambda (x) (if (cdr x) (- (cadr x) (car x)) 0)) seq))))'
  replies: []
- id: 7428
  author: Yifan
  date: '2008-07-03T17:23:49'
  content: '//a recursion one , use C

    #include

    #define N 10

    int flag[N];

    int number[N];

    int lastNumber[N];

    int maxdepth;

    int max=0;

    int this_num,last_num=20000000;

    int run=1;

    int count=0;

    int max_begin, max_end;

    //set your max value here;

    int input_max=10000;

    int recu(int depth)

    {

    int i;

    if(depth==maxdepth)

    {

    this_num=0;

    //get the value of current number

    for(i=0;iinput_max)

    {

    run=0;

    return;

    }

    //update max

    if(max&lt;this_num-last_num)

    {

    max=this_num-last_num;

    max_begin=last_num;

    max_end=this_num;

    }

    //store the last_num;

    last_num=this_num;

    //increase the counter by 1

    count++;

    }

    else

    {

    //recursion to find the number

    for(i=0;i&lt;10 && run==1;i++)

    {

    if(!(depth==0 && i==0))

    {

    if(flag[i]==0)

    {

    //set flag

    number[depth]=i;

    flag[i]=1;

    //recursion

    recu(depth+1);

    //reset flag

    number[depth]=0;

    flag[i]=0;

    }

    }

    }

    }

    }

    int main()

    {

    int i;

    //set all flag to 0

    for(i=0;i&lt;N;i++)

    flag[i]=0;

    //start search for the number, maxdepth is actually the width of the number, i.e   45321, maxdepth = 5+1, or   564321, maxdepth=6+1

    for(maxdepth=1;run==1;maxdepth++)

    {

    recu(0);

    }

    printf("max:%d\n", max);

    printf("begin, end: %d , %d\n", max_begin, max_end);

    printf("count:%d\n", count);

    return 0;

    }'
  replies: []
- id: 7429
  author: Yifan
  date: '2008-07-03T17:29:13'
  content: '//sorry for last post, the html tag covered some of the code, and that code is not complete

    //the following code is complete

    //a recursion one, using C

    #include

    #define N 10

    int flag[N];

    int number[N];

    int lastNumber[N];

    int maxdepth;

    int max=0;

    int this_num,last_num=20000000;

    int run=1;

    int count=0;

    int max_begin, max_end;

    //set your max value here;

    int input_max=10000;

    int recu(int depth)

    {

    int i;

    if(depth==maxdepth)

    {

    this_num=0;

    //get the value of current number

    for(i=0;i&lt;maxdepth;i++)

    {

    this_num=(this_num&lt;&lt;1)+(this_num&lt;&lt;3)+number[i];

    }

    //if larger than max, just abort

    if(input_max&lt;this_num)

    {

    run=0;

    return;

    }

    //update max

    if(max&lt;this_num-last_num)

    {

    max=this_num-last_num;

    max_begin=last_num;

    max_end=this_num;

    }

    //store the last_num;

    last_num=this_num;

    //increase the counter by 1

    count++;

    }

    else

    {

    //recursion to find the number

    for(i=0;i&lt;10 && run==1;i++)

    {

    if(!(depth==0 && i==0))

    {

    if(flag[i]==0)

    {

    //set flag

    number[depth]=i;

    flag[i]=1;

    //recursion

    recu(depth+1);

    //reset flag

    number[depth]=0;

    flag[i]=0;

    }

    }

    }

    }

    }

    int main()

    {

    int i;

    //set all flag to 0

    for(i=0;i&lt;N;i++)

    flag[i]=0;

    //start search for the number, maxdepth is actually the width of the number, i.e   45321, maxdepth = 5+1, or   564321, maxdepth=6+1

    for(maxdepth=1;run==1;maxdepth++)

    {

    recu(0);

    }

    printf("max:%d\n", max);

    printf("begin, end: %d , %d\n", max_begin, max_end);

    printf("count:%d\n", count);

    return 0;

    }'
  replies: []
- id: 7430
  author: Mauricio Fernandez
  date: '2008-07-04T06:19:07'
  content: "@Bob: interesting representation of the set of remaining digits.\nI have nothing against imperative code in general (I use it often in OCaml),\nbut I decided to see how far a functional set could go. The resulting program\ntakes three additional lines of code and here's how it compares to your\nFastBeustSequence on an AMD Athlon 64 X2 6000+ (using Java 6):\n$ time ./beust\nFound 8877690 numbers under 10000000000.\nMax jump: 104691357 (1098765432 -- 1203456789).\nreal\t0m0.273s\nuser\t0m0.268s\nsys\t0m0.004s\n$ time java -server TestBeustSequence 10000000000\ncount: 8877690\nlargest gap: 104691357 (1098765432..1203456789)\n269ms\nreal\t0m0.350s\nuser\t0m0.328s\nsys\t0m0.008s\nThe difference is within the experimental error; I guess it's a draw :)\nYou can find the code at eigenclass.org/misc/beust.ml\nThe set of digits is represented with two lists (in a way reminiscent of a\nfunctional queue), and all the operations are (amortized) O(1) and\nnon-destructive."
  replies: []
- id: 7431
  author: joel
  date: '2008-07-04T06:31:03'
  content: 'simpler ruby to to the basic stuff

    (10..12).to_a.reject { |x| x.to_s.split(//).uniq! }'
  replies: []
- id: 7432
  author: Mathieu BORDAS
  date: '2008-07-04T08:11:03'
  content: 'I found that challenge very interesting. I have an idea about finding the largest gap between two unvalid numbers. I tried that way:

    I think that a very simple alorithm can generate all valid numbers (ie with no pair of symbols) simply in making the current one grow by the right. I mean: 10,12,13,14,15,16,17,18,19,20,21,23,24, etc.

    We are to jump a gab when the unit just preceeds a symbol already used. So, the more the numbers used are near each other, the more the gab may be big. I mean: 4563 will goes to 4567 (gap of 4), but 4573 goes to 4576 (gap of 3). I think this is the way gap appears. So I tried to find a good combination, and I immediately found: 9876 which  jumps over 9877, 9878, 9879, 988X, 989X, then 99XX, until 10234 (gap = 358). Ok, gap seems cool, but makes us go too far (over 10000). Trying that method with 3 symbols gives: 987 goes to 1023 with a gap of 36. I have a good feeling about that.

    Sorry for my English, and for the lack of programming example.

    Thanks.

    Mathieu BORDAS, France'
  replies: []
- id: 7433
  author: Frank Bolander
  date: '2008-07-04T09:43:56'
  content: 'Prolog Version(Well, GNU Prolog)

    checkit([]):-!.

    checkit([H|T]):- \+memberchk(H,T),checkit(T).

    dif([_|[]],[]).

    dif([X,Y|T],R):-dif([Y|T],T2),

    D is Y-X,

    append([D],T2,R),!.

    beust(Low,Hi):-

    retractall(norpt(_)),

    for(C,Low,Hi),

    write_term_to_codes(X,C,[]),

    checkit(X),

    assertz(norpt(C)),

    fail.

    beust(_,_):-!.

    printResults:-

    bagof(X,norpt(X),R),

    !,

    length(R,Len),

    dif(R,D),

    max_list(D,M),

    write(''Count : ''),write(Len),nl,

    write(''Max difference : ''),write(M),nl,

    write(''Results ''),write(R),nl.

    printResults:-!.

    main:- beust(98,120),printResults.'
  replies: []
- id: 7434
  author: Elias Pipping
  date: '2008-07-04T12:49:29'
  content: 'Here''s one in awk.

    function scan(num)

    {

    nlen = length(num);

    for (j = 1; j &lt;= nlen; j++) {

    cmp = substr(num, j, 1);

    for (i = j; i &lt; nlen; i++)

    if (index(substr(num, i+1, nlen-j+1), cmp))

    return 0;

    }

    return 1;

    }

    function iter(max)

    {

    for (n=1; n&lt;=max; n++)

    if(scan(n))

    print n;

    }

    BEGIN { iter(5440) }'
  replies: []
- id: 7435
  author: Bob Lee
  date: '2008-07-04T12:55:54'
  content: '@Mauricio: When I try to run your program, I get:

    File "beust.ml", line 19, characters 12-26:

    Integer literal exceeds the range of representable integers of type int'
  replies: []
- id: 7436
  author: Bob Lee
  date: '2008-07-04T13:47:41'
  content: 'I modified my test program to not allocate objects. Now it runs in 150ms for 10^10:

    crazybob.org/FastBeustSequence.java.html

    crazybob.org/TestFastBeustSequence.java.html'
  replies: []
- id: 7437
  author: Mauricio Fernandez
  date: '2008-07-04T16:58:24'
  content: "Bob: you need a 64-bit ocamlopt.\nI pushed the functional set some more.\neigenclass.org/misc/beust2.ml\nBest of 5 runs:\n$ time ./beust2\nFound 8877690 numbers.\nMax jump: 104691357 (1098765432 -- 1203456789).\nreal\t0m0.217s\nuser\t0m0.216s\nsys\t0m0.000s\n$ time java -server TestFastBeustSequence 10000000000\ncount: 8877690\nlargest gap: 104691357 (1098765432..1203456789)\n207ms\nreal\t0m0.309s\nuser\t0m0.256s\nsys\t0m0.020s\nThe standard deviation is quite large, around 15ms (real time for OCaml,\nSystem.nanoTime deltas for Java; a bit more for the latter) or so...\nI guess an imperative structure is required for further improvements, but it's\ntoo late."
  replies: []
- id: 7438
  author: Bob Lee
  date: '2008-07-05T12:43:23'
  content: 'Best of 5 runs on my computer:

    eigenclass.org/misc/beust2.ml:

    $ time ./beust2

    Found 8877690 numbers.

    Max jump: 104691357 (-1048718216 -- -944026859).

    real    0m0.237s

    user    0m0.233s

    sys     0m0.004s

    crazybob.org/FastBeustSequence.java.html:

    $ time java TestFastBeustSequence 10000000000

    count: 8877690

    largest gap: 104691357 (1098765432..1203456789)

    150ms

    real    0m0.272s

    user    0m0.233s

    sys     0m0.042s

    So, not counting Java startup overhead, we''re looking at 237ms (OCaml) vs 150ms (Java).'
  replies: []
- id: 7439
  author: Mark Mahieu
  date: '2008-07-05T13:10:17'
  content: 'Interesting to see the effects of -client and -server on the Java versions.  With -client (and Soylatte 1.0.2 on a MacBook Pro 2.16Ghz Core Duo) this one is faster than FastBeustSequence (though not as elegant):

    slm888.com/snippets/Beust.java

    slm888.com/snippets/BeustTest.java

    $ java -client BeustTest 10

    count: 8877690

    max gap: 104691357 (1098765432..1203456789)

    352ms

    $ java -client TestFastBeustSequence 10000000000

    count: 8877690

    largest gap: 104691357 (1098765432..1203456789)

    456ms

    With -server they both have best run times of around 400ms.'
  replies: []
- id: 7440
  author: Mauricio Fernandez
  date: '2008-07-05T13:35:35'
  content: 'The best times I can get after N (= a few dozen) runs are 205ms for Java

    (without startup overhead), 212ms for OCaml with the functional set.

    While my box runs the OCaml code a bit faster, yours is much better at Java.

    I''m using this JVM:

    java version "1.6.0_04"

    Java(TM) SE Runtime Environment (build 1.6.0_04-b12)

    Java HotSpot(TM) 64-Bit Server VM (build 10.0-b19, mixed mode)

    I''ve compiled the OCaml program in a 32-bit jail with no substantial

    difference in speed (it is meant to be compiled with a 64-bit ocamlopt though;

    you can notice the integer overflow in the output you''re getting). Either

    we''re observing a AMD vs. Intel discrepancy, or the 32-bit JVM is much faster

    than the 64-bit one (even though 32-bit OCaml isn''t really faster than 64-bit,

    on my machine). Not that it matters.'
  replies: []
- id: 7441
  author: bearophile
  date: '2008-07-05T18:27:35'
  content: 'I have ported that fast Java code to C, it''s about twice faster on my PC:

    codepad.org/wlz2Vaqn'
  replies: []
- id: 7442
  author: Aristotle Pagaltzis
  date: '2008-07-05T23:33:41'
  content: 'A nicer Perl version:

    #!/usr/bin/perl

    use strict; use warnings;

    use List::Util qw(max);

    use List::MoreUtils qw(pairwise);

    my @num = grep { !/(.).*\1/ } 1 .. 10_000;

    my $max_diff = max pairwise { $b - $a } (

    $num[ 0 .. $#num - 1 ],

    $num[ 1 .. $#num ],

    );

    print @num . "numbers, max diff $maxdiff\n";

    print "@num\n";'
  replies: []
- id: 7443
  author: Unni Prasad
  date: '2008-07-07T04:21:33'
  content: "Hi, my code is very simple but are not getting through properly via this comment, Contact me via email if you are interested.\n/*\n* Author \t\t: Unni Prasad\n* Email\t\t: unniready@gmail.com\n* Date\t\t\t: July 07,2008\n*/\npublic class Counter {\npublic static void main(String [] args)\n{\nint limit=10000;\nint count=0,flag=0,number,jump=0,max_jump=0,max_jump_position=1;\nint i,j,k,l;\nint array[]=new int[5];\nint answer[]=new int[10000];\nfor(i=0;i2)\njump=answer[count-1]-answer[count-2];\nif(max_jump&lt;jump){\nmax_jump=jump;\nmax_jump_position=count-1;\n}\n}\n}\nSystem.out.println(\"The biggest jump was from \"+answer[max_jump_position-1]+\" to \"\n+answer[max_jump_position]);\nSystem.out.println(\"The max jump was : \"+max_jump);\nSystem.out.println(\"Total number counted : \"+count);\n}\n}\n/*Output\nThe biggest jump was from 1098 to 1203\nThe max jump was : 105\nTotal number counted : 5275\n*/"
  replies: []
- id: 7444
  author: unni prasad
  date: '2008-07-07T04:22:50'
  content: "Hi, My codes are not getting through this comment, if you are interest contact me via email\n/*\n* Author \t\t: Unni Prasad\n* Email\t\t: unniready@gmail.com\n* Date\t\t\t: July 07,2008\n*/\npublic class Counter {\npublic static void main(String [] args)\n{\nint limit=10000;\nint count=0,flag=0,number,jump=0,max_jump=0,max_jump_position=1;\nint i,j,k,l;\nint array[]=new int[5];\nint answer[]=new int[10000];\nfor(i=0;i2)\njump=answer[count-1]-answer[count-2];\nif(max_jump&lt;jump){\nmax_jump=jump;\nmax_jump_position=count-1;\n}\n}\n}\nSystem.out.println(\"The biggest jump was from \"+answer[max_jump_position-1]+\" to \"\n+answer[max_jump_position]);\nSystem.out.println(\"The max jump was : \"+max_jump);\nSystem.out.println(\"Total number counted : \"+count);\n}\n}\n/*Output\nThe biggest jump was from 1098 to 1203\nThe max jump was : 105\nTotal number counted : 5275\n*/"
  replies: []
- id: 7445
  author: Mark Mahieu
  date: '2008-07-07T08:32:46'
  content: 'Final couple of tweaks to mine:

    slm888.com/snippets/Beust.java

    slm888.com/snippets/BeustTest.java

    It now accepts a radix so you can try a larger range of values, eg base 11:

    $ java BeustTest 10000000000 11

    count: 62353010

    max jump: 104690246 (10a9876543..1203456789)

    1858ms'
  replies: []
- id: 7446
  author: Paulo Gaspar
  date: '2008-07-07T13:10:01'
  content: '@Bob

    The new method names for the Digit class are a readability improvement too - especially since your implementation is quite original / unusual.

    @Mark

    The radix thing is not so usefull since the maximum value without repeated digits is: 9876543210.

    Above this value ALL integer numbers have repeated digits.

    Have Fun,'
  replies: []
- id: 7447
  author: Mark Mahieu
  date: '2008-07-07T14:14:47'
  content: '@Paolo

    That''s correct for base 10 numbers, but I''m applying the radix to the calculation as well, so in base 11, a9876543210 is the maximum value without repeating digits.

    There are limits though.  Eg. in hex, fedcba987654321 is the maximum non-repeating value it''s capable of finding since the data types I''m using limit it to values less than 2^63.'
  replies: []
- id: 7448
  author: Mark Mahieu
  date: '2008-07-07T14:16:37'
  content: '@Paulo

    Oops, sorry I mis-typed your name on that last comment.'
  replies: []
- id: 7449
  author: ''
  date: '2008-07-07T15:40:22'
  content: '@Mark Mahieu

    Sorry, I had missed the multi-base "detail".

    And don''t hurry: that mistyping is quite common.

    =;o)'
  replies: []
- id: 7450
  author: Wheelwright
  date: '2008-07-07T20:22:06'
  content: 'var nums = (from n in Enumerable.Range(1, 10000)

    where n.ToString().Select(c => c).Distinct().Count() == n.ToString().Length

    select n).ToArray();

    var gap = -1; for (int n = 1; n &lt; nums.Length; n++) gap = Math.Max(gap, nums[n] - nums[n - 1]);

    Response.Write(String.Format("count: {0}, max gap: {1}", nums.Length, gap));

    Takes about 0.01sec on my old 3.2GHz Athlon. And since it is written in performant C# I don''t have to jump through hoops to optimize it.'
  replies: []
- id: 7451
  author: cav
  date: '2008-07-08T04:31:04'
  content: '@Wheelwright

    "Takes about 0.01sec on my old 3.2GHz Athlon. And since it is written in performant C# I don''t have to jump through hoops to optimize it."

    haha that''s not very impressive really, it''s barely faster than the Ruby one-liner...

    Try to count up to 10000000000 with that code. See you in a couple days ;-) (if you can stand the disk trashing)'
  replies: []
- id: 7452
  author: Ananyo Banerjee
  date: '2008-07-08T05:12:24'
  content: 'public class Puzzle

    {

    public static void main(String []args)

    {

    int max=new Integer(args[0]).intValue();

    String digitString=null; //holds string representation of numbers.

    boolean flag;

    for(int i=1;i&lt;=max;i++)

    {

    flag=true;

    digitString=new Integer(i).toString();

    //start of code for comparing digits of a number with each other

    for(int strcount=0;strcount&lt;digitString.length()-1;strcount++)

    {

    if(digitString.substring(strcount,strcount+1).equalsIgnoreCase(digitString.substring(strcount+1,strcount+2)))

    {

    flag=false;

    }

    else{

    flag=true;

    break;

    }

    }

    //end of code for comparing digits of a number with each other

    if(flag==true)

    {

    System.out.println(i);

    }

    }

    }

    }'
  replies: []
- id: 7453
  author: Ananyo Banerjee
  date: '2008-07-11T02:02:25'
  content: Sorry Cedric...The code in my previous comment is wrong and incomplete.I had posted the modifed code in my blog (ananyobanerjee.blogspot.com).Please have a look.
  replies: []
- id: 7454
  author: Zach Beane
  date: '2008-07-12T16:48:39'
  content: 'I put a Common Lisp version here:

    paste.lisp.org/display/63602

    It does the 10,000 solution in 0.005 seconds.'
  replies: []
- id: 7455
  author: Murali
  date: '2008-07-19T00:05:00'
  content: 'No solution using

    * bash

    * vi (remember vi is turing complete!)'
  replies: []
- id: 7456
  author: Toby
  date: '2008-08-05T20:24:48'
  content: 'A ''lispier'' lisp solution (no iteration, just tail recursion) which also runs faster than any of my iterative solutions interestingly

    paste.lisp.org/display/64850'
  replies: []
- id: 7457
  author: Sijin Joseph
  date: '2008-08-21T08:32:48'
  content: 'class Beust

    {

    &nbsp;&nbsp;&nbsp;&nbsp;public static void Run(int max)

    &nbsp;&nbsp;&nbsp;&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Diagnostics.Debug.Assert(max &gt; 1);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int maxGap = 0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int last = 0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int total = 0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 1; i &lt;= max; ++i)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (DoDigitsRepeat(i) == true)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.Write(&quot;{0}, &quot;, i);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++total;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int gap = i - last;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxGap = Math.Max(gap, maxGap);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last = i;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(&quot;\nTotal: {0}&quot;, total);

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(&quot;Max Gap: {0}&quot;, maxGap);

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;private static bool DoDigitsRepeat(int num)

    &nbsp;&nbsp;&nbsp;&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//Used to track which digits have already been encountered

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int table = 0;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (num &gt; 0)

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int digit = num % 10;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num = num / 10;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int index = 1 &lt;&lt; digit;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ((table &amp; index) == index){

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else{

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;table |= index;

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    }'
  replies: []
- id: 7458
  author: daniel lujan
  date: '2008-08-21T11:50:08'
  content: '//javascript version (apply in c/c++,java,c#)

    //using firebug over FF:

    function check(x)

    {

    var x=x+'''';

    var z= 0

    for( y in x) {

    if( z & (1&lt;&lt;x[y])) return false

    z |= (1&lt;&lt;x[y]);

    }

    return true;

    }

    for( var n =0 ;n&lt;1000; n++)

    if( check(n))

    console.log(n)'
  replies: []
- id: 7459
  author: John Smith
  date: '2008-08-30T20:46:20'
  content: ''
  replies: []
- id: 7460
  author: Hatem Nassrat
  date: '2008-08-30T21:14:39'
  content: '#!PYTHON

    max = 10000

    # Dual-brute-force, First attempt ----------

    nums = [x for x in range(1,max+1) if len(list(str(x))) == len(set(str(x)))]

    count = len(nums)

    gaps = [(nums[i]-nums[i-1],i) for i in range(1,count)]

    gaps.sort()

    print nums

    print count

    i = gaps.pop()[1]

    print ''GAP:'',nums[i-1],''->'',nums[i]

    #---- Refactored for effeciency.

    count = last = 0

    gap = (1,1)

    nums = []

    for x in range(1,max+1):

    if len(list(str(x))) == len(set(str(x))):

    nums.append(x)

    count += 1

    if last and x - last > gap[1] - gap[0]:

    gap = (last,x)

    last = x

    print nums

    print "\nCOUNTED:", count

    print "GAP      :", gap'
  replies: []
- id: 7461
  author: dr-steve
  date: '2008-08-30T21:39:03'
  content: 'So I''ll ask the obvious question: do leading zeroes count as repeated digits?

    (Is that an African or a European swallow?)'
  replies: []
- id: 7462
  author: Keegan Carruthers-Smith
  date: '2008-08-31T01:14:26'
  content: 'This is by no means the fastest way, but is done using list generators only

    #!/usr/bin/env python

    maximum = 10000

    numbers = [a for a in range(1,maximum+1) if len(set(str(a))) == len(str(a))]

    biggest_jump = max([numbers[i] - numbers[i-1] for i in range(1, len(numbers))])

    print len(numbers), biggest_jump

    you can also work out biggest_jump using zip

    biggest_jump = max([b-a for a,b in zip(numbers, numbers[1:])])'
  replies: []
- id: 7463
  author: miranl
  date: '2008-08-31T03:52:05'
  content: 'ghci> let xs = filter (\x -> let st = show x in st == nub st) [1..10000]

    ghci> length xs

    5274

    ghci> maximum . map (abs . uncurry (-)) . zip xs . tail $ xs

    105'
  replies: []
- id: 7464
  author: Saverio
  date: '2008-08-31T04:10:52'
  content: 'I don''t understand exactly the definition of the problem. What does brute-force mean? Linear respect to max?

    I am pretty lazy to write the code. My high level solution is the following, which is NlogN complexity, where N = number of digits of _max_, power 10.

    Actually it requires to subclass the standard library function of the binary tree, as as far as I know, there is no function in C/Java/Ruby to extract the left/right leaves of the tree.

    tot_digits = number of digits of _max_

    create an empty ordered binary tree

    max_difference = 0

    for all the permutations from 1 to 10^tot_digits:

    if permutation &lt;= _max_

    put in the tree and extract left and right

    if there is left and the difference with permutation is greater than max_difference, store

    else if there is right and the difference with permutation is greater than max_difference, store

    total_permutations = size of the tree'
  replies: []
- id: 7465
  author: vbgunz
  date: '2008-08-31T10:29:04'
  content: '# a single line lambda, returns numbers in which no digit repeats itself

    cunique = lambda x, y: [i for i in range(x,y) if len(set(str(i)))==len(str(i))]

    print cunique(1, 10000)'
  replies: []
- id: 7466
  author: Ketil
  date: '2008-09-04T08:37:05'
  content: 'Here''s a simple, permutation-based Haskell solution:

    Prelude> let perms 0 _ = [[]]; perms n xs = concat [ map (y:) (perms (n-1) (filter (/=y) xs)) | y &lt;- xs]

    Prelude> let numbers = filter ((/=''0'').head) $ concatMap (flip perms [''0''..''9'']) [1..]

    Prelude> take 100 numbers

    ["1","2","3","4","5","6","7","8","9","10","12","13","14","15","16","17","18","19","20","21","23","24","25",

    "26","27","28","29","30","31","32","34","35","36","37","38","39","40","41","42","43","45","46","47","48","49","50",

    "51","52","53","54","56","57","58","59","60","61","62","63","64","65","67","68","69","70","71","72","73","74","75",

    "76","78","79","80","81","82","83","84","85","86","87","89","90","91","92","93","94","95","96","97","98",

    "102","103","104","105","106","107","108","109","120","123"]

    (Sorry if somebody posted something like this already, and I missed it).'
  replies: []
- id: 7467
  author: none
  date: '2008-09-05T23:39:03'
  content: 'Here''s my dumb haskell solution:

    import Data.List (nub)

    nodup n = (sn == nub sn)

    where sn = show n

    beust = filter nodup [1..10000]

    main = do

    print $ maximum $ zipWith (-) (tail beust) beust

    print (length beust)'
  replies: []
- id: 7468
  author: B P
  date: '2008-09-14T09:53:31'
  content: Bob's solution in C# - 459 ms.
  replies: []
- id: 7469
  author: Aaron Davies
  date: '2008-09-22T18:55:19'
  content: 'k4:{(|/-'':;#:)@\:&(='').#:''''(::;=:'')@\:$1+!x}

    10.1 ms for 10,000, 141 ms for 100,000, 160 ms for 1,000,000'
  replies: []
- id: 7470
  author: Aaron Davies
  date: '2008-09-22T18:57:16'
  content: Oops, that should have been 1560 ms for 1,000,000
  replies: []
- id: 7471
  author: RC
  date: '2008-10-05T06:47:34'
  content: 'hmmmmmmmmmmmmmmmmm,

    It seems that SQL is not cool because no one has tried to solve this problem with SQL.

    Here Oracle SQL:

    select num, count_tot, (max(diff) over ())  max_diff

    from

    (

    select num

    ,      (count(*) over ()) count_tot

    ,      (num-(lag(num) over (order by num))) diff

    from

    (

    select  level num

    from    dual

    connect by level = length(num) -1

    and   length(replace(translate(num,''1'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''2'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''3'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''4'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''5'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''6'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''7'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''8'',''X''),''X'',null)) >= length(num) -1

    and   length(replace(translate(num,''9'',''X''),''X'',null)) >= length(num) -1)

    or (length(num)=1)

    )

    order by num

    /

    NUM  COUNT_TOT   MAX_DIFF

    ---------- ---------- ----------

    1        738         11

    2        738         11

    3        738         11

    4        738         11

    5        738         11

    6        738         11

    7        738         11

    8        738         11

    9        738         11

    10        738         11

    12        738         11

    13        738         11

    .....

    967        738         11

    968        738         11

    970        738         11

    971        738         11

    972        738         11

    973        738         11

    974        738         11

    975        738         11

    976        738         11

    978        738         11

    980        738         11

    981        738         11

    982        738         11

    983        738         11

    984        738         11

    985        738         11

    986        738         11

    987        738         11

    I used the Mikito way the generate the numbers.

    If anyone knows how to use a regular expression as a filter to check for duplicate digits I could use this regular expressions instead of all the translate functions?'
  replies: []
- id: 7472
  author: RC
  date: '2008-10-05T07:03:10'
  content: 'My sql statement becomes maimed, I can''t post it properly.

    Beneath the connect by level.... one should insert:

    )

    where (length(replace(translate(num,''0'',''X''),''X'',null)) >= length(num) -1'
  replies: []
- id: 7473
  author: John Haugeland
  date: '2008-12-08T13:57:23'
  content: 'This one''s pretty easy.

    is_unique_digital(X) ->

    Base    = int_to_list(X),

    Uniqued = lists:usort(Base),

    length(Base) = length(Uniqued).

    non_repeating_digit_numbers_in(Low, High) ->

    [ X || X &lt;- lists:seq(Low,High), is_unique_digital(X) ].'
  replies: []
- id: 7474
  author: vidhut
  date: '2009-02-27T06:52:54'
  content: '#!perl -wl

    use strict;

    my $max=10000;

    my @nums;

    my$count=1;

    my $max_jump=1;

    my $numbers=0;

    while($count $max_jump;

    }

    }

    $count++;

    }

    print join (" ",@nums);

    print "\n $numbers , jump $max_jump";'
  replies: []
- id: 7475
  author: vidhut
  date: '2009-02-27T06:55:09'
  content: there is some problem i am not able to post my code
  replies: []
- id: 7476
  author: Tracy Harms
  date: '2009-05-28T17:58:15'
  content: 'A tacit solution in J:

    ddr=: (#~ [: (= ~.&.>) 10&#.^:_1&.>)@: i.'
  replies: []
- id: 7477
  author: Tracy Harms
  date: '2009-05-29T09:02:50'
  content: 'I didn''t originally see all the requirements. Drawing on Danil''s code to improve my own, here''s a complete solution:

    summarizeTo=: (bigjump, #) & cf

    bigjump=: [: >./ 2-~/\]

    cf =: ddr @: >: @: i.

    ddr=: #~ ([:*./ [:~: 10&#.^:_1)"0

    summarizeTo 1000

    11 738'
  replies: []
- id: 7478
  author: Peter Marks
  date: '2009-05-30T19:20:07'
  content: 'My Haskell solution is not as fast as some of the other optimized solutions here, nor as elegant as some of the unoptimized proposals, but it demonstrates memoization, recursive values and two ways to force strict evaluation. Compiled, it runs the whole list in about 2 seconds.

    module Main where

    import Data.List(foldl'')

    import Data.Bits

    data Result = Result !Int !Int !Int deriving Show

    beust :: [(Int, Int)]

    beust = tail digits ++ [(num * 10 + n, ds'') | (num, ds) &lt;- beust, (n, d) &lt;- digits, let ds'' = ds .|. d, ds'' /= ds]

    digits = [(n, bit n) | n &lt;- [0..9]]

    calc m = foldl'' step (Result 0 0 0) . takeWhile (&lt;= m) . map fst $ beust

    where

    step (Result maxJump count prev) n = Result (max maxJump (n - prev)) (count + 1) n

    main = do

    let (Result maxJump count _) = calc (9876543210)

    putStrLn $ "max jump: " ++ show maxJump

    putStrLn $ "count: " ++ show count

    Further optimization suggestions welcome.'
  replies: []
- id: 7479
  author: F. Levine
  date: '2009-12-04T19:45:08'
  content: '3 lines of F#

    let result = [0 .. 10000] |> List.filter (fun x -> x.ToString().ToCharArray() |> (fun (arr : _[]) -> arr.Length = (Set.ofArray arr).Count))

    let max = List.max result

    let gap = Seq.pairwise result |> Seq.map (fun (a,b) -> b-a) |> Seq.max'
  replies: []
- id: 7480
  author: Madura
  date: '2010-01-13T00:25:35'
  content: 'I''ll publish this with more info in my blog @ madurax86.co.nr

    well lets get down to business! I coded it in C and ran it on Ubuntu 9.10 system it tells that it took only 0.010 seconds to execute! Well my approach was different I didn''t convert the integers to string, I just let it be integers and did all comparing without any type conversion.

    Here''s the code.

    #include

    #include

    #include

    clock_t startm, stopm;

    #define START if ( (startm = clock()) == -1) {printf("Error calling clock");exit(1);}

    #define STOP if ( (stopm = clock()) == -1) {printf("Error calling clock");exit(1);}

    #define PRINTTIME printf( "\nExecution Time : %6.3f seconds.", ((double)stopm-startm)/CLOCKS_PER_SEC);

    #define MAX 10000

    #define t 5

    int main(){

    int i,j=1,k=10,l,n,x,y,z,prev=0,jmp=0,bTop=0,bLow=0;

    START;

    for (i=10;i&lt;MAX;i++){// drop 1 to 10 and count to MAX

    if (i==k){ // keep track of number length

    k=k*10;

    j++; // j= number length

    }

    y=i;

    int a[t]; // list to keep the digits of the number

    for (l=0;l&lt;j;l++){// go through the digit list

    x=y%10; // get digit list by simple math, x gets the digit this starts from the end of the number

    y=y/10;

    z=0;

    for (n=0;n&lt;l;n++){

    if (a[n]==x){z=1; break;}// check(1) one digit appears again

    }

    a[l]=x;// add new digit

    if (z==1) break;// if the check(1) found duplicates get out of loop

    }

    if (z==0){

    printf("\n %d",i);

    x=i-prev;

    if (jmp&lt;x){ jmp=x; bTop=i; bLow=prev;}

    prev=i;

    }

    }

    STOP;

    printf("\nBiggest jump is %d: %d to %d",bTop-bLow,bLow,bTop);

    PRINTTIME;

    }'
  replies: []
- id: 7481
  author: The D
  date: '2011-01-04T19:05:45'
  content: "if my assumption is not wrong about the your challenge, here's the vb6 code, what you required are textbox as text1and command button as command1,suggestion are welcome:\nPrivate Sub Command1_Click()\nmaxjump = 0\nmaxjumpno = \"\"\nCounts = 0\nprevnum = 0\nFor a = 1 To 10000\n    If a = 122 Then\n        jg = gg\n    End If\n    valid = True\n    For b = 1 To Len(a)\n        twin = 0\n        For c = 1 To Len(a)\n            If Mid(a, b, 1) = Mid(a, c, 1) Then\n                twin = twin + 1\n            End If\n            If twin &gt;= 2 Then\n                valid = False\n            End If\n        Next c\n    Next b\n    If valid = True Then\n        Text1.Text = Text1.Text &amp; a &amp; \",\"\n        Counts = Counts + 1\n        If Val(a) - prevnum &gt;= maxjump Then\n            maxjump = Val(a) - prevnum\n            maxjumpno = a\n        End If\n        prevnum = a\n    End If\n    twin = 0\nNext a\nMsgBox \"max jump = \" &amp; maxjump &amp; \" Max Jump Number =\
    \ \" &amp; maxjumpno &amp; \" count = \" &amp; Counts\nEnd Sub"
  replies: []
- id: 7482
  author: Dinesh
  date: '2011-03-13T06:49:49'
  content: "here is my solution using java--\n/**\n *\n * @author Dinesh\n */\npublic class Main {\n    public static boolean isCorrect(int number){//this method returns true if the condition ok\n        boolean isOK = true;\n        String numberValues = number+\"\";\n        char array[] = numberValues.toCharArray();\n        for(int i=0;i&lt;array.length;i++){\n            for(int j=0;j&lt;i;j++){\n                if(array[i]==array[j]){\n                    isOK = false;\n                    break;\n                }\n            }\n        }\n        return isOK;\n    }\n    public static void main(String[] args) {\n        int total=0;\n        int previousValue = 0;\n        int maxGap = 0;\n        int max = 10000;\n        System.out.println(&quot;The numbers are ---&quot;);\n        for(int i = 0;i &lt;= max;i++){\n            if (isCorrect(i)) {\n                int gap = i-previousValue;\n                if(maxGap \"+i);\n                previousValue = i;\n                total\
    \ += i;\n            }\n        }\n        System.out.println(\"Maximum gap is -- \"+maxGap);\n        System.out.println(\"The total is -- \"+total);\n    }\n}"
  replies: []
---

_Update: I posted a wrap-up[here](https://www.beust.com/weblog/coding-challenge-wrap-up/)_. Here is an interesting coding challenge: write a counter function that counts from 1 to max but only returns numbers whose digits don't repeat. For example, part of the output would be: 

  * 8, 9, 10, 12 (11 is not valid)
  * 98, 102, 103 (99, 100 and 101 are not valid)
  * 5432, 5436, 5437 (5433, 5434 and 5435 are not valid)

Also: 
  * Display the biggest jump (in the sequences above, it's 4: 98 -> 102)
  * Display the total count of numbers
  * Give these two values for max=10000

Post your solution in the comments or on your blog. All languages and all approaches (brute force or not) are welcome. I'm curious to see if somebody can come up with a clever solution (I don't have one)...
