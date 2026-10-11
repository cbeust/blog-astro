---
title: Coding challenge wrap-up
date: '2008-08-28T10:00:25'
slug: coding-challenge-wrap-up
categories:
- Uncategorized
comments:
- id: 7496
  author: sidereal
  date: '2008-07-10T11:30:47'
  content: 'As one of the people decrying the profligate and inappropriate claim of ''not brute-force'', let me state for the record that I wasn''t including Bob''s solution in my complaint, which was primarily directed at people that seemed to confuse typing time with runtime, and assumed that anything that was fast to type couldn''t possibly be brute-force.

    I think I''ve reached the stage in my coding career where I''m officially sick of ''elegance''.  Yes, it''s cute that you can write an algorithm in 60 characters because your language is so high level that all you''re doing is gluing your standard library to itself.  No, you can''t check it into subversion, because it''s impossible to comment, debug, and test.

    Programmers tend to vastly overstate the importance of coding time, because that''s the time that we spend.  We often willfully ignore the fact that time spent writing code is dwarfed by time spent using it, and then reading it and debugging it, and then optimizing it. . by many orders of magnitude.  So a syntax or coding style that shaves 50% off of your initial writing time, but adds 10% to your execution time, and 20% to your eventual test and debug time, 100% to the time it takes another developer to understand it (or 1000%, if it''s perl) and 50% to any optimization time is enormously expensive over the lifetime of your software, and isn''t even worth considering.'
  replies: []
- id: 7497
  author: Mauricio Fernandez
  date: '2008-07-10T11:32:03'
  content: 'A few corrections regarding my OCaml solutions: they are all functional, there

    was no imperative version to begin with, and the second version just used a

    different functional set representation, making it nearly three times faster

    than the initial one (which was as fast as Bob''s first attempt). The latest

    version is as fast as Bob''s fastest one on my machine (Linux x86_64, Java

    1.6.0_05-b12, 64-bit OCaml), 40% slower on his (OSX with 32-bit OCaml build?,

    unknown JVM).

    Here''s a summary of the performance race :)

    (The times from Bob''s Java versions are without JVM startup and system time;

    the overhead is over 100ms.)

    crazybob.org/BeustSequence.java.html      680ms

    eigenclass.org/hiki/ordered_permutations  640ms

    crazybob.org/FastBeustSequence.java.html 269ms (doubly linked list)

    eigenclass.org/misc/beust.ml             273ms (functional set with 2 lists)

    crazybob.org/TestFastBeustSequence.java.html (avoid allocation)

    207ms (Linux x86_64, Java 1.6.0_04-b12) / 150ms (OSX, unknown JVM)

    eigenclass.org/misc/beust2.ml (expanded pattern matching)

    217ms (Linux x86_64) / 237ms (OSX, 32-bit OCaml build)'
  replies: []
- id: 7498
  author: RichB
  date: '2008-07-10T12:28:20'
  content: 'I''m convinced the problem is a constraint problem with a solution similar to Peter Norvig''s stunningly fast Sudoku solver.

    But my brain hurts.'
  replies: []
- id: 7499
  author: david
  date: '2008-07-10T12:35:51'
  content: 'Hey Cedric,

    could you let us know the story behind the challenge?

    regards, David'
  replies: []
- id: 7500
  author: Anonymous Coward
  date: '2008-07-10T16:33:43'
  content: 'There are a lot of intermediate complexities between brute force and closed form.

    Brute force in this case here would be O(n) [I don''t see how you could do worse than O(n) on such a problem] while a closed form would be O(1).

    A solution that is not O(1) is not necessarily O(n)...  Some people here are smoking some heavy crack.

    A serious discussion should involve big-O, not simply "mine is brute force but less brute force than yours".'
  replies: []
- id: 7501
  author: stinkyminky
  date: '2008-07-10T22:02:00'
  content: 'Ruby - version but it takes longer than 30 sec on my box.

    def findDigits( used , value , ndigit , start , listener )

    if ( ndigit == 1 )

    start.upto(9) { |i| listener.hear( value + i ) unless used[i] }

    else

    start.upto(9) do |i|

    unless( used[i] )

    used[i] = true

    findDigits(used,(value+i)*10 , ndigit-1, 0, listener);

    used[i] = false

    end

    end

    end

    end

    1.upto(10) do |x|

    findDigits( {} , 0, x , 1 , TestListener.new )

    end'
  replies: []
- id: 7502
  author: stinkyminky
  date: '2008-07-10T22:04:37'
  content: 'C version - if I compile with -O3, it is faster than CrazyBob''s Java version

    #include

    #include

    void recurseMe( int* used, unsigned long value, int ndigit, int start )

    {

    int i = 0;

    if ( ndigit == 1 )

    {

    for( i = start; i &lt; 10 ; i++ )

    if ( used[i] == 0 )

    {

    printf( "%lu\n", value + i );

    }

    }

    else

    {

    for( i = start; i &lt; 10; i++ )

    {

    if ( used[i] == 0 )

    {

    used[i] = 1;

    recurseMe( used , (value+i) * 10, ndigit - 1, 0 );

    used[i] = 0;

    }

    }

    }

    }

    int main(char* arg)

    {

    int n = 1;

    int used[10];

    struct timeval start, end;

    double dT = 0.0;

    for( n = 0; n &lt; 10; n++ )

    used[n] = 0;

    gettimeofday(&start, NULL);

    for( n = 1; n &lt;= 10; n++ )

    recurseMe( used, 0l, n, 1);

    gettimeofday(&end, NULL);

    dT = ( end.tv_usec - start.tv_usec );

    printf("time = %15.9lf miillseconds\n", dT);

    return 0;

    }'
  replies: []
- id: 7503
  author: Igor Ostrovsky
  date: '2008-07-11T01:03:16'
  content: 'Here is a non-brute-force dynamic programming solution that counts integers that don''t contain duplicate elements, in C#:

    class UniqueDigits

    {

    private int[] m_limit;

    private int[,,,] m_cache;

    public UniqueDigits(long limit)

    {

    m_limit = new int[10];

    for (int i = 0; limit &gt; 0; i++)

    {

    m_limit[i] = (int)(limit % 10);

    limit /= 10;

    }

    m_cache = new int[1 &lt;&lt; 10, 10, 2, 2];

    for (int i = 0; i &lt; 1 &lt;&lt; 10; i++) for (int j = 0; j &lt; 10; j++)

    for (int k = 0; k &lt; 2; k++) for (int m = 0; m &lt; 2; m++)

    {

    m_cache[i,j,k,m] = -1;

    }

    }

    public int Compute()

    {

    return Compute(0, 9, true, false);

    }

    private int Compute(int taken, int pos, bool firstDigit, bool isLess)

    {

    if (pos &lt; 0) return taken == 0 ? 0 : 1;

    if (m_cache[taken, pos, firstDigit ? 1 : 0, isLess ? 1 : 0] &gt;= 0) return m_cache[taken, pos, firstDigit ? 1 : 0, isLess ? 1 : 0];

    int ans = 0;

    for (int digit = 0; digit &lt;= 9; digit++)

    {

    if ((taken &amp; (1 &lt;&lt; digit)) != 0) continue;

    if (!isLess &amp;&amp; digit &gt; m_limit[pos]) break;

    int newTaken = taken;

    bool newFirstDigit = (digit == 0 &amp;&amp; firstDigit);

    if (!newFirstDigit) newTaken |= (1 &lt;&lt; digit);

    ans += Compute(newTaken, pos - 1, newFirstDigit, isLess || digit &lt; m_limit[pos]);

    }

    return m_cache[taken, pos, firstDigit ? 1 : 0, isLess ? 1 : 0] = ans;

    }

    }

    Here is a usage example:

    Console.WriteLine(new UniqueDigits(9999999999L).Compute());

    This prints "8877690", which I believe is the correct answer.

    It runs in 4-7ms on my machine.

    I am pretty sure that there is an efficient solution to the second half of the problem - the biggest jump. It seems like a nasty case-enumeration problem. I''ll think a bit about it.'
  replies: []
- id: 7504
  author: Paulo Gaspar
  date: '2008-07-11T04:17:12'
  content: 'It was easy enough to do something faster than Bob''s first attempt, but I don''t see any way to beat his final solution.

    (At least it wouldn''t be anything measurable.)

    Have fun,'
  replies: []
- id: 7505
  author: Darrell Wright
  date: '2008-07-11T09:55:10'
  content: 'here is my ugly attempt.  It is very fast and does not seem to register a time using DataTime.Now as the metric.  So sub millisecond or two.

    using System;

    using System.Collections.Generic;

    namespace Challenge {

    class Program {

    public static List count( List inuse, int curVal, int maxvalue ) {

    List ret = new List( );

    curVal *= 10;

    for( int n=0; n maxvalue ) {

    break;

    }

    ret.Add( tmp );

    inuse.Add( n );

    ret.AddRange( count( new List( inuse ), tmp, maxvalue ) );

    }

    }

    return ret;

    }

    public static List count( int maxvalue ) {

    List inuse = new List( );

    List ret = new List( );

    for( int n=0; n maxvalue ) {

    break;

    }

    ret.Add( n );

    List newinuse = new List( inuse );

    newinuse.Add( n );

    ret.AddRange( count( new List( newinuse ), n, maxvalue ) );

    }

    return ret;

    }

    public static void Main(string[] args) {

    DateTime start = DateTime.Now;

    List ret = count( 10000 );

    ret.Sort( );

    int first = ret[0];

    int second = ret[1];

    int jumpsize = ret[1] - ret[0];

    int tmp;

    for( int n=2; n jumpsize ) {

    jumpsize = tmp;

    first = ret[n-1];

    second = ret[n];

    }

    }

    double secs = DateTime.Now.Subtract( start ).TotalMilliseconds;

    Console.WriteLine( @"There where {0} items and the biggest jump was from {1}->{2} it was a jump of {3}", ret.Count, first, second, jumpsize );

    Console.WriteLine( @"It took {0:F20} milliseconds to complete", secs );

    Console.Write( @"Press any key to continue . . . " );

    Console.ReadKey( true );

    }

    }

    }'
  replies: []
- id: 7506
  author: Darrell Wright
  date: '2008-07-11T10:28:04'
  content: 'Just a follow up to my previous recursive solution.  I let it go to 9876543210, which is obviously the largest number possible.  Here are the results.  Hopefully I didn''t miss something and it is correct.  It looks like it.

    There where 5120 items and the biggest jump was from 8012345679->9012345678 it was a jump of 999999999

    It took 0.00000000000000000000 milliseconds to complete'
  replies: []
- id: 7507
  author: Cedric
  date: '2008-07-11T10:32:21'
  content: Darrell, there are a lot more than 5120 items if you let it go to that number, it looks like you are still counting up to 10000 and not 10^10.
  replies: []
- id: 7508
  author: Darrell Wright
  date: '2008-07-11T10:36:56'
  content: Another follow up, it looks like the braces are not supported on the forum the types labeled List are all actually generic List's of type long.
  replies: []
- id: 7509
  author: Wheelwright
  date: '2008-07-11T15:16:43'
  content: '@Darrell

    > It took 0.00000000000000000000 milliseconds to complete

    My version beat that;) Unfortunately I can''t post it here because running the program can tear the very fabric of the universe (I still have a black hole where my CD player used to stand).'
  replies: []
- id: 7510
  author: Jonathan Hawkes
  date: '2008-07-12T12:54:43'
  content: 'Ok, I ported Bob''s to Common Lisp.  I haven''t done any performance metrics or anything yet. It feels slower than the Java version, but it still is probably under a second.

    I did make a few performance enhancements to Bob''s Java version though.  You can find the details at

    blog [-dot-] techhead [-dot-] B-I-Z

    /2008/07/beust-coding-challenge.html

    Sorry for the weird link.  It was necessary. My TLD is being screened by the software for some reason.'
  replies: []
- id: 7511
  author: CormacB
  date: '2008-07-14T04:36:40'
  content: 'A straightforward scala port of Bob''s code performs about the same and is marginally shorter.

    With just one iteration is is a bit slower, due to the extra load time for the scala-library jar. Over 100 iterations it takes 40 seconds to the Java versions 42 seconds.

    I would expect that some kind of permutation generator working over an array of ints would be a bit faster than this approach, but it would be a bit excessive.

    object BeustSeq {

    trait Listener {

    def hear(value: Long)

    }

    class Digit (var previous: Digit, val value: Int) {

    var next: Digit = if (value  max) return true

    listener.hear(newValue)

    }

    else {

    current.use()

    val newHead = if (current == head) head.next else head

    if (find(newHead, newHead, remaining - 1, newValue * 10, max, listener))

    return true

    current.yieldDigit()

    }

    current = current.next

    }

    return false;

    }

    def findAll(max: Long, listener: Listener) {

    val zero = new Digit(null, 0);

    val one = zero.next;

    for (length &lt;- 1 to 10) {

    if (find(one, zero, length, 0, max, listener)) return;

    }

    }

    }'
  replies: []
- id: 7512
  author: CormacB
  date: '2008-07-14T04:39:12'
  content: 'Oh no, forgot my angle brackets. Hopefully this will work:

    object BeustSeq {

    trait Listener {

    def hear(value: Long)

    }

    class Digit (var previous: Digit, val value: Int) {

    var next: Digit = if (value &lt; 9) new Digit(this, value + 1) else null

    /** Removes digit from the set. */

    def use() {

    if (previous != null) previous.next = next

    if (next != null) next.previous = previous

    }

    /** Puts digit back into the set. */

    def yieldDigit() {

    if (previous != null) previous.next = this;

    if (next != null) next.previous = this;

    }

    }

    def find(start: Digit, head: Digit, remaining: Int,

    value: Long, max: Long, listener: Listener) : Boolean = {

    var current = start

    while (current != null) {

    var newValue = value + current.value

    if (remaining == 1) {

    if (newValue &gt; max) return true

    listener.hear(newValue)

    }

    else {

    current.use()

    val newHead = if (current == head) head.next else head

    if (find(newHead, newHead, remaining - 1, newValue * 10, max, listener))

    return true

    current.yieldDigit()

    }

    current = current.next

    }

    return false;

    }

    }

    def findAll(max: Long, listener: Listener) {

    val zero = new Digit(null, 0);

    val one = zero.next;

    for (length &lt;- 1 to 10) {

    if (find(one, zero, length, 0, max, listener)) return;

    }

    }

    }'
  replies: []
- id: 7513
  author: xsonymathew
  date: '2008-07-14T10:08:40'
  content: Bob's solution is indeed pretty elegant.
  replies: []
- id: 7514
  author: Bill Kress
  date: '2008-07-14T10:46:52'
  content: 'Came across my old TRS-80 model 100 this weekend.  Seriously considering implementing it on that machine in it''s old-as-hell basic language.

    I don''t think it has longs, so I''ll probably have to implement integer string operations (addition and comparison) to make it work.  Or I could use arrays where each entry represents--hmm, 32767 max IIRC--each array item could be 1-4 digits I guess, then I''d still need custom addition and compare algorithms as well as a display routine.

    I expect it would be hideously slow, although Crazy Bob''s algorithm should help a lot. I could use recursion I guess--although it should be just as easy to implement as loops.

    sigh...'
  replies: []
- id: 7515
  author: Jonathan Hawkes
  date: '2008-07-15T10:33:17'
  content: 'Ok, looks like nobody bothered to type the funny link to read my blog entry, so I''ll just sum it up here.  I was able to improve the performance of Bob''s Java version by using a singly linked list, eliminating a few method calls and additional conditional statements within the loop and by using a Throwable to unwind the stack once the max is found.

    The modified version can be found here:

    code.google.com/p/blogcode/source/browse/trunk/BeustChallenge0708/src/beust/ModifiedBeustSequence.java

    I also ported to Common Lisp which was a fairly easy task considering Lisp''s native use of linked lists.

    code.google.com/p/blogcode/source/browse/trunk/BeustChallenge0708/beust.lisp'
  replies: []
- id: 7516
  author: bearophile
  date: '2008-07-16T10:45:27'
  content: 'Jonathan Hawkes''s version converted to C looks like the faster so far:

    codepad.org/6SW1RMQi

    This older version of mine seems a bit slower, but it allows to set up the upper value too:

    codepad.org/wlz2Vaqn'
  replies: []
- id: 7517
  author: bearophile
  date: '2008-07-16T19:01:04'
  content: 'Last C version (from Jonathan Hawkes''s version still):

    codepad.org/BTnMQ8mz

    A good algorithm is fast even with just Python + Psyco:

    codepad.org/V8rzUSo2'
  replies: []
- id: 7518
  author: Jeff Heon
  date: '2008-07-21T13:49:45'
  content: 'I put my solution, which is in the category nor fast not concise, here: thecarefulprogrammer.blogspot.com/2008/07/cdric-beusts.html

    I did not aim for performance, although I tried to avoid things I just would be bad like appending at the end of a list.

    For me, it was simply an occasion to explore Scala and functional programming.'
  replies: []
- id: 7519
  author: Torbjorn Gannholm
  date: '2008-07-21T16:24:27'
  content: 'I''ll stake my claim in the Java speed challenge, beating both Bob and Jonathan. Code at tobega.blogspot.com/2008/07/cedrics-coding-challenge.html

    It uses a created object and its fields instead of passing a lot of values on the stack. Also uses a singly-linked list with a guard element.'
  replies: []
- id: 7520
  author: Doug
  date: '2008-07-24T17:00:39'
  content: I can knock about 3/4 of the time off of Bob's first version by noting that the largest non-repeating value is 1234567890 which fits in an int.  Convert the code to only check up to this number at maximum, and use int everywhere rather than long.
  replies: []
- id: 7521
  author: Doug
  date: '2008-07-24T17:26:13'
  content: 'Here''s my improvement on Bob''s original, which I measure at 14.6s for 100 10^10 executions vs 47.2s for the original.  I''m sure this same improvement makes all the other algorithms improve similarly:

    private static final long _maxNoRepeat = 1234567890L;

    private static int _max;

    private static final Listener _listener = new Listener();

    public void testBobBeust() {

    //    findAll((long) 1200);

    for (int i = 0; i  _max) {

    return true;

    }

    _listener.hear(value);

    } else if (find(0, remaining - 1, value * 10, used | mask)) {

    return true;

    }

    }

    }

    return false;

    }

    private static class Listener {

    public void hear(int value) {

    //      System.out.println(value);

    }

    }'
  replies: []
- id: 7522
  author: Doug
  date: '2008-07-24T17:35:12'
  content: Sorry, didn't notice the code to html transformation doesn't work.
  replies: []
- id: 7523
  author: Doug
  date: '2008-07-24T17:38:50'
  content: 'private static final long _maxNoRepeat = 1234567890L;

    private static int _max;

    private static final Listener _listener = new Listener();

    public void testBobBeust() {

    //    findAll((long) 1200);

    for (int i = 0; i &lt; 100; i++) {

    findAll((long) Math.pow(10, 10));

    }

    }

    /**

    * Finds all numbers in sequence up to max.

    *

    * @param max maximum sequence value

    */

    public static void findAll(long max) {

    _max = (int) Math.min(max, _maxNoRepeat);

    for (int length = 1; length &lt; 11; length++) {

    if (find(1, length, 1, 0)) {

    return;

    }

    }

    }

    /**

    * Called recursively for each digit from most to least significant.

    *

    * @param first     digit, 0 or 1

    * @param remaining digits

    * @param value     so far

    * @param used      digit bitfield

    * @return true if we reached max, false otherwise

    */

    private static boolean find(int first, int remaining, int value, int used) {

    for (int digit = first; digit &lt; 10; digit++, value++) {

    int mask = 1 &lt;&lt; digit;

    if ((used &amp; mask) == 0) {

    if (remaining == 1) {

    if (value &gt; _max) {

    return true;

    }

    _listener.hear(value);

    } else if (find(0, remaining - 1, value * 10, used | mask)) {

    return true;

    }

    }

    }

    return false;

    }

    private static class Listener {

    public void hear(int value) {

    //      System.out.println(value);

    }

    }'
  replies: []
- id: 7524
  author: Svend
  date: '2008-08-04T09:07:13'
  content: Doug, you're on to something good, except 9876543210 is the largest non-repeating value.
  replies: []
- id: 7525
  author: Svend
  date: '2008-08-04T09:52:11'
  content: Of course I'm wrong. The number is 1023456789, which is lower than 1234567890.
  replies: []
- id: 7526
  author: Sijin Joseph
  date: '2008-08-29T09:35:43'
  content: 'Hi Cedric,

    It was interesting trying to come up with a faster solution than the ones already posted. I''ve blogged about my experiences at www.indiangeek.net/2008/08/29/a-case-study-in-micro-optimization/ if you''re interested.'
  replies: []
- id: 7527
  author: sai
  date: '2008-08-31T00:21:09'
  content: 's=''0123456789''

    all_vals=dict()

    all_vals_array=[]

    significant=''''

    incremented=''''

    total=0

    max_val=10**5

    while True:

    left_over=[i for i in s if i not in significant]

    for digit in left_over:

    all_vals[incremented]=significant+digit

    incremented=significant+digit

    all_vals_array.append(incremented)

    if incremented==''987654321'':

    break

    if significant!='''':

    significant=all_vals[significant]

    else:

    significant=''1''

    print incremented

    print len(all_vals_array)

    Returns the 5611771 length array in about 10 seconds'
  replies: []
- id: 7528
  author: MrDamien
  date: '2008-08-31T01:39:08'
  content: 'Hopefully I don''t make a fool of myself by posting something that is wrong, but here''s my longer/faster JavaScript:

    document.maximum = 10000000000; // 10^10

    var max_bin = "";

    var max_str = new String(document.maximum);

    var max_len = max_str.length;

    document.nums = "1234567890";

    document.nums2 = "9876543210";

    var nums = new Array();

    document.used = new Array();

    function clean(results){

    &nbsp;&nbsp;var filtered = new Array();

    &nbsp;&nbsp;filtered.push(0);

    &nbsp;&nbsp;results.sort(function(a,b){ return a-b;});

    &nbsp;&nbsp;for(i=0; i 0){

    &nbsp;&nbsp;&nbsp;&nbsp;bin = ''0'' + bin;

    &nbsp;&nbsp;&nbsp;&nbsp;morezeros--;

    &nbsp;&nbsp;}

    &nbsp;&nbsp;var newstr='''';

    &nbsp;&nbsp;for(var i=0; i 0){

    &nbsp;&nbsp;&nbsp;&nbsp;bin = ''0'' + bin;

    &nbsp;&nbsp;&nbsp;&nbsp;morezeros--;

    &nbsp;&nbsp;}

    &nbsp;&nbsp;var newstr='''';

    &nbsp;&nbsp;for(var i=0; i&lt;=bin.length; i++){

    &nbsp;&nbsp;&nbsp;&nbsp;if(bin.charAt(i) == ''1''){

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newstr = newstr + document.nums2.charAt(i);

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;}

    &nbsp;&nbsp;return +newstr;

    }

    var k=0;

    while(k&lt;max_len){

    &nbsp;&nbsp;max_bin += "1";

    &nbsp;&nbsp;k++;

    }

    var start = (new Date()).getTime();

    var i = 0;

    var ans;

    var max_dec = parseInt(max_bin, 2);

    var rev;

    while(i&lt;=max_dec){

    &nbsp;&nbsp;ans = pick(i.toString(2));

    &nbsp;&nbsp;nums.push(pick(i.toString(2)));

    &nbsp;&nbsp;nums.push(pickrev(i.toString(2)));

    &nbsp;&nbsp;i++;

    }

    nums = clean(nums);

    var end = (new Date()).getTime();

    alert((end - start) + " ms\nResults to follow");

    document.body.innerHTML = nums.join(", ");'
  replies: []
- id: 7529
  author: Harvey Swik
  date: '2008-08-31T01:58:55'
  content: 'I''ve got to say, I''m not 100% sure what the requirements for this "challenge" are.

    Anyway, here''s a straightforward port to C of Bob''s java code.

    codepad.org/Pf4N5ojK

    It runs in ~65ms on my machine.'
  replies: []
- id: 7530
  author: Kevin Scaldeferri
  date: '2008-08-31T18:32:38'
  content: 'The Erlang version that was posted looks more verbose (and

    "frightening") than it needs to because it needlessly reimplements

    some library functions, and intersperses test code (and dead code!)

    with the important stuff (and because the indentation was stripped.

    Here''s a slightly modified version which I

    hope is reasonably clear, and also runs more than twice as fast as the

    original (because it uses the built-in functions).

    -module(buest).

    -export([challenge/1]).

    unique_list([]) ->

    ____true;

    unique_list([H|T]) ->

    ____case lists:member(H,T) of

    ________true ->

    ____________false;

    ________false ->

    ____________unique_list(T)

    ____end.

    count(Upto, Upto, State) ->

    ____State;

    count(From, Upto, State) ->

    ____case unique_list(integer_to_list(From)) of

    ________true ->

    ____________count(From + 1, Upto, finder(State,From));

    ________false ->

    ____________count(From + 1, Upto, State)

    ____end.

    finder({RunStart,MaxGap,Counter},Element) when Element - RunStart >= MaxGap ->

    ____{Element,Element - RunStart,Counter + 1};

    finder({_RunStart,MaxGap,Counter},Element) ->

    ____{Element,MaxGap,Counter + 1}.

    challenge(Max) ->

    ____statistics(wall_clock),

    ____{_,BiggestJump,CountOfNumbers} = count(1,Max+1,{1,0,0}),

    ____{_, Elapsed} = statistics(wall_clock),

    ____io:format("~p ms elapsed to complete count to ~p~n", [Elapsed, Max]),

    ____{BiggestJump, CountOfNumbers}.

    It''s still much slower than the crazybob solution, because it''s still a naive brute force implementation.  Although it could be parallelized without too much trouble, there''s not really any point because the algorithmic differences dwarf the small constant factor you might pick up from it.'
  replies: []
- id: 7531
  author: MrDamien
  date: '2008-09-01T19:21:28'
  content: 'My last one was completely wrong.

    mrdamien.com/beust.html &lt;- this one works.

    Generates to 10^10 in 343,808 ms (slow, but much faster than the other JavaScript ones).'
  replies: []
- id: 7532
  author: none
  date: '2008-09-06T00:20:02'
  content: 'Computing the length of the list up to length k digits is trivially fast: for k digits, you can pick the first digits 9 ways (it can''t be zero).  The number of ways to pick the other digits is the number of permutations of the 9 remaining digits taken k-1 at a time.  Call this function "bc".

    The number of permutations of n elements taken r at a time is just (n-r+1)*(n-r)*...*n.  Write this in Haskell as:

    permutations n r = product [r+1 .. n]

    Then we can write the bc function:

    bc k = 9 * permutations 9 (k-1)

    Finally, the total size of the list UP TO k digits is just the sum of the size for 1 digit, 2 digits, etc:

    main = print (sum [bc k | k &lt;- [1..4])'
  replies: []
- id: 7533
  author: Ulf Ochsenfahrt
  date: '2008-11-05T04:33:07'
  content: 'Starting with Bob''s first version, I''ve come up with a version that is slightly faster than Bob''s second version (28% on my machine). It uses bit twiddling and a lookup table to figure out the next allowed digit in each iteration.

    -- Ulf

    package beust;

    /**

    * Finds base 10 numbers whose digits don''t repeat. Solution to Cedric''s coding

    * challenge: http:/ /beust.com/weblog/archives/000491.html

    *

    * @author Bob Lee (crazybob@crazybob.org)

    * @author Ulf Ochsenfahrt (ulf@ofahrt.de)

    */

    public class UlfsBeustSequence

    {

    private static final int[] lookup = createLookupTable();

    private static int[] createLookupTable()

    {

    int[] result = new int[1 &lt;&lt; 10];

    for (int i = 0; i &lt; result.length; i++)

    result[i] = Integer.numberOfTrailingZeros(i);

    return result;

    }

    /**

    * Finds all numbers in sequence up to max.

    *

    * @param max maximum sequence value

    * @param listener hears search results

    */

    public static void findAll(long max, Listener listener)

    {

    for (int length = 1; length &lt; 11; length++)

    {

    if (find(0x3fe, length, 0, 0, max, listener)) return;

    }

    }

    /**

    * Called recursively for each digit from most to least significant.

    *

    * @param allowed digits bitfield (calculated by the parent or by findAll)

    * @param remaining digits

    * @param value so far

    * @param used digit bitfield

    * @param max value

    * @param listener hears results

    * @return true if we reached max, false otherwise

    */

    private static boolean find(int allowed, int remaining, long value,

    int used, long max, Listener listener)

    {

    while (allowed != 0)

    {

    int digit = lookup[allowed];

    int mask = 1 &lt;&lt; digit;

    allowed = allowed-mask;

    long tempvalue = value+digit;

    if (remaining == 1)

    {

    if (tempvalue &gt; max) return true;

    listener.hear(tempvalue);

    }

    else if (find(0x3ff & ~(used | mask), remaining - 1, tempvalue * 10, used | mask, max,

    listener))

    {

    return true;

    }

    }

    return false;

    }

    }'
  replies: []
- id: 7534
  author: Moneo
  date: '2008-12-12T10:06:38'
  content: 'Here''s a mathematical solution.

    Let P(n,k) be the number of n-digit base k non-negative integers such that none of the digits are repeated, k>=n. Here I allow all numbers, from 0 to k^n-1. Obviously, P(n,k) = k*(k-1)*...*(k-n+1).

    Let us compute the number Q(n,k) of base k numbers with *exactly* n digits that satisfy our condition. In order to do that we need to exclude the integers starting with 0. Since we can take any base k digit from 0 to k-1 without any loss of generality, the number of integers starting with 0 is 1/k*P(n,k), and therefore Q(n,k) = (k-1)/k*k*(k-1)*...*(k-n+1) = (k-1)*(k-1)*(k-2)*...(k-n+1).

    Let us compute the number R(n,k,l,a_n,a_{n-1},...,a_{n-l+1}) - the number of non-negative n-digit base k integers A satisfying the uniqueness condition such that the first l digits of A are a_n, a_{n-1},...,a_{n-l+1}. If a_i=a_j for some i!=j, R(n,k,l,a_n,a_{n-1},...,a_{n-l+1}) =0. Otherwise, setting the first l digits of A to be fixed is equivalent to reducing the base k by l, therefore R(n,k,l,a_n,a_{n-1},...,a_{n-l+1}) = P(n,k-l).

    Denote the number of positive base k integers between 1 and Max satisfying the original uniqueness condition of the challenge as S(k, Max)

    In order to compute S(k, Max), let us first consider the digital representation of Max, Max = a_0 + 10*a_1 + ... + 10^m a_m. One can write

    S(k,Max) = Q(1,10) + Q(2,10) + \dots + Q(m,10) - R(m,k,1,a_m+1) - R(m,k,1,a_m+2) - ... - R(m,k,2,a_m,a_{m-1}+1) - R(m,k,2,a_m,a_{m-1}+2) - ... - R(m,k,2,a_m,9) - ... - R(m,k,m-1,a_m,...,a_2,a_1+1) - R(m,k,m-1,a_m,...,a_2,a_1+2) -... - R(m,k,m-1,a_m,...,a_2,9).

    This is a very complex expression that represents a very simple recursion: if something with a decimal represenation Something = b_0 + 10*b_1 + ... + 10^m b_m is bigger than Max, then either b_m>a_m or b_m=a_m, b_{m-1}>a_{m-1}, or b_m=a_m, b_{m-1}=a_{m-1}, b_{m-2}>a_{m-2}, etc.

    Clearly, an algorithm that will return S(k, Max) in O(log_10(Max)^2) operations or less can be designed quite easily. Should run under a millisecond on a modern PC, too.'
  replies: []
- id: 7535
  author: Moneo
  date: '2008-12-12T10:11:09'
  content: In the horrible expression, k should be replaced by 10 everywhere.
  replies: []
- id: 7536
  author: Toby
  date: '2010-08-03T09:57:47'
  content: 'Alternate C, Erlang and SQL solutions:

    http://telegraphics.com.au/svn/puzzles/trunk/beust/'
  replies: []
---

[  
![Click to see Eric's full comic strip](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/coding-challenge.png)  
  
](http://stuffthathappens.com/blog/2008/07/02/script-kiddies)  
_Click on the image to see Eric's full comic strip_

I certainly didn't expect so many reactions to the [coding challenge](https://www.beust.com/weblog/coding-challenge/)... More than 130 comments so far, wow.

First of all, I owe an apology to all commenters for my annoying comment system (which prohibits posting URL's that start with "http"). I'm very sorry about that but I receive so much spam that it's a necessity. Some people braved the odds and posted their solution anyway, others used creative ways to submit their code, such as using [Google Documents](http://docs.google.com) or [Paste Bin](http://pastebin.com) (which has the benefit of syntax highlighting).

Thank you all for putting up with this and participating in this fun contest anyway.

I've learned a lot from all these solutions and discussions, which featured the following languages: Java, C, Perl, Erlang, Javascript, C#, Groovy, Haskell, AS3, C, Fan, LUA, J, OCaml, Factor, Forth, Lisp, Ursala, Prolog.

Here is a quick wrap-up.

The solutions basically fall into three categories:

  1. Concise.
  2. Fast.
  3. None of the above.



Overall, languages that support closures do well on the conciseness aspect, with solutions that can fit in 1-5 lines, among which:

**Ruby**

```java
(98..103).select { |x| x.to_s.size == x.to_s.split(//).uniq.size }
```

**Python**

```text
(i for i in xrange(start, end) if len(str(i)) == len(set(str(i)))):
```

**Scala**

```java
for (i <- 1 to 100000; s = i.toString; if HashSet[Char](s:_*).size ==
s.size) println(i)
```

**J**

```text
f =: [:(#;[:>./2-~/\])(#~([:*/[:~:":)"0)
```

For a minute, I thought that last entry was a joke or that maybe, the poster was disconnected in the middle of posting his solution. But no, [J is a real programming language](http://jsoftware.com).

**Ursala**

```python
#import nat
func = ^(nleq$^+ difference*typ,length)+ ~&triK2tkZ2FlS+
iota+successor; * ^lrhPX/~& %nP
```

Quite an intidimidating syntax here too :-)

The problem with the concise solutions is that they eliminate duplicate digits by converting the integer into a string, which results in prohibitive running times (the Ruby code takes 27 hours to complete with max = 10^10, which is the baseline I'll be using from now on).

Let's turn our attention briefly to solutions that are neither concise nor fast...

I was disappointed to see the Erlang code, to be honest, because the (only) solution that was posted is a bit frightening. I would love to see more attempts in Erlang that are either concise or fast. This problem seems to be a good candidate for sharding, since all the numbers that satisfy the requirements can be found in complete isolation of the others, so this a good opportunity for Erlang to show what it's good at.

Also, somebody posted a Prolog solution which is shorter than Erlang's, so I don't think the declarative aspect of Erlang is the reason for the length of this solution.

Can somebody post an Erlang solution that is either concise or fast?

Similarly, Perl and Javascript didn't particularly shine in the contributions that I saw in the comments. People also posted solutions in Forth (a bit hard to read, but my Forth is rusty) and even [Factor](http://factor-language.blogspot.com/2008/06/cedrics-code-challenge.html) (which is reasonably concise but also seems to use a lot of libraries).

Crazy Bob was the first one to post [a solution that is reasonably concise and also scaringly fast](http://crazybob.org/BeustSequence.java.html). Not surprisingly, it's not brute force, it only uses primitive integers, it uses a bitmask to keep track of which digits have already been used and to top it all, it's recursive (it's not very often you see recursive code that is faster than everything else, although admittedly, the recursion doesn't go very deep).

Bob's first attempt was able to calculate all numbers from 1 to 10^10 in half a second, which blew away everything that had been posted so far. Interestingly, the C version of his Java code ran at about the same speed as Java.

Quite a few people observed that my problem was similar to generating permutations, with the little twist that '0' is not allowed to appear in first position. With that in mind, I thought I would see people grab the standard implementations for permutations that you can find on the web, adapt them to the constraints of my problem and then post them here. Interestingly, the opposite happened: Bob's solution is not only the fastest, but it can probably form the basis for a canonical solution to solve permutations quickly, especially since it's only limited by the number of characters that you can represent in a bitmask (64 if you want the bitmask to remain a primitive, unbounded if you represent it with a more complex structure).

Then, Mauricio entered the fray with OCaml and [his initial attempt](http://eigenclass.org/hiki/ordered_permutations) took 640ms to run up to 10^10. That was quite a shocker to me. I studied quite a bit of OCaml during my PhD (which I did at INRIA, so this should come as no surprise), but Caml and OCaml quickly fell off my radar when I moved on. I was quite surprised to see a real functional language be as fast as the top contenders in a purely algorithmic contest. Mauricio's version is about as concise as Java, which makes this even more impressive.

Some time later, Mauricio wrote a [more functional version of his solution](http://eigenclass.org/misc/beust.ml), which ended up running in about the same time as his imperative approach.

And then, Bob came up with a [solution that runs twice faster](http://crazybob.org/FastBeustSequence.java.html).

It's not very often that I get excited by a piece of Java code, because I think that Java is boring (in a good way). Obviously, Bob's trick is not specific to Java, but I did go "wow" the first time I read it.

Bob's initial algorithm is not very complicated but it does have a few code paths which, at first sight, would be good candidates for possible optimizations. What I found the most interesting in his approach is that he found the optimization in the most unexpected place: by getting rid of incrementations and by adding a class.

Bob introduced a class `Digit` that is a doubly linked list of digits. Initially, 0 points to 1 which points to both 0 and 2, which points to... You get the idea.

Calling `next()` on such an object gives you the next digit in the sequence without requiring an increment operation. The trick here is to rearrange the list as soon as you use a digit so that invoking `next()` will always return a digit that can be added to your number without violating the requirements. For example, as soon as you add 1 to your solution, the Digit list now becomes 0 <-> 2 <-> 3... There are a couple of additional tricks with regard to head tracking and backtracking, but that's pretty much the core of the optimization.

Beautiful code indeed.

### Concluding remarks

My first take away from this little exercise is that conciseness only goes so far. I have seen people post a one-liner solution on their blog in language X and conclude "X rocks". Except that their solution will take hours to complete.

A credible language must make it possible for developers to solve problems with either conciseness or performance in mind, and ideally, allow a whole spectrum between these two extremes.

The comments also discussed the definition of "brute force", and after some initial turmoil, everybody seems to agree that Bob's solution is not brute force since it only ever considers valid digits. At this point, I challenge anyone who disagrees to come up with a "really non brute force" solution which should, in theory, be much faster than Bob's solution. Good luck with that :-)

Finally, I'd like to get a better sense of performances for all the languages that have participated in this little contest, so I offer the following follow-up problem: port Bob's solution to your language of choice, post the code along with 1) how fast Bob's Java solution runs on your system and 2) how fast your solution runs.

So far, only Java, C/C++ and OCaml have shown to be up to the task. Can you add your own favorite language to the list?
