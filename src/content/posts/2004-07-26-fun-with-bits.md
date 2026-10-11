---
title: Fun with bits
date: '2004-07-26T07:58:47'
slug: fun-with-bits
categories:
- General
comments:
- id: 1872
  author: Heiko W. Rupp
  date: '2004-07-26T08:33:58'
  content: Shouldn't for 2) something like n & 0xfe (for a byte) be simpler/faster?
  replies: []
- id: 1873
  author: Heiko W. Rupp
  date: '2004-07-26T08:34:14'
  content: Shouldn't for 2) something like n & 0xfe (for a byte) be simpler/faster?
  replies: []
- id: 1874
  author: John Wilson
  date: '2004-07-26T08:39:52'
  content: '"a power of two ends in zero in binary (except for 1..." Actually, a power of two has precisely one non zero bit in its twos compliment representation (which is what your rather neat code tests for)

    If you want to clear the rightmost bit why not just do n & ~1

    the last example is neat!

    my first try would have been:

    int counter = n & 1;

    while (n != 0) {

    counter += (n >>= 1) & 1;

    }

    This and your first solution to this problem don''t "executes p times, where p is the size in bits of n" that''s the upper bound to the number of times it executes the loop. It executes x+ 1 times where x is the bit position of the most significant bit in n (assuming that the least significant bit is bit zero).

    "pretty much every single candidate that I have ever interviewed who did well on the other questions that I asked (typically at a higher-level, such as OO design or design pattern) also does well on the bit-shifting question" you probably don''t meet to many programmers with an embedded real time systems background, then ;)

    You might like to also see if your interviewee has any idea what XOR does'
  replies: []
- id: 1875
  author: Cedric
  date: '2004-07-26T08:52:54'
  content: 'Heiko:  because the value you use depends on the internal representation of the scalar:  0xfe for a byte, but for an integer, how do you know?  (note that I didn''t even say if the code snippets were Java, C or C++ :-)).'
  replies: []
- id: 1876
  author: Cedric
  date: '2004-07-26T08:55:21'
  content: 'John:  ~1 works but it also suffers from the same limitation I just described:  you need to make it long enough.  I guess (~1)L should cover all cases.

    Good remark about the execution time!  I stand corrected.

    Good suggestion about XOR, maybe I could also ask the old inplace string reversal problem :-)'
  replies: []
- id: 1877
  author: John Wilson
  date: '2004-07-26T09:13:24'
  content: 'Cedric: ~1 works without suffering from the limitations you describe (at least in C and C like languages). ~1 is an integer with the top bit set. If n is long than the widening coercion propagates the MS bit into the top bits of the long.

    Note: neither of our code samples work if n is a byte and bytes are signed in the language being used (Java, for example).'
  replies: []
- id: 1878
  author: Heiko W. Rupp
  date: '2004-07-26T09:20:53'
  content: 'As a side note: I hate it, when scritps allow you to double-submit as it happens and when browsers don''t show that they do something after one hits a button.'
  replies: []
- id: 1879
  author: Jase
  date: '2004-07-26T10:56:13'
  content: 'This sentence looks wrong:

    "Can you describe to me what the expression n & (n-1) does to n?".

    Did you mean to write:

    "Can you describe to me what the expression n - (n&1) does to n?".'
  replies: []
- id: 1880
  author: LawnBoy
  date: '2004-07-26T11:09:12'
  content: 'a power of two ends in zero in binary

    Actually, this just describes an even number.  More precise is to say "a power of two ends in zero in binary and has only one 1".'
  replies: []
- id: 1881
  author: glen martin
  date: '2004-07-26T11:13:12'
  content: 'The C (and later, C++) junky in me really enjoyed this blog.  Dusting off the java hat I recently took off, I must say that this whole discussion really demonstrates the value of Java. ;)

    But seriously, I wonder what a really good C optimizing compiler would emit, at least for (1) (which problem can be expressed easily).  Or (2).

    My own interview questions trend to questions like:

    - how is polymorphism implemented in C++

    - knowing exactly what you know now, figure out how many taxi cabs there are in NY.

    - What data structure would you use to implement a 1-800 number database in a telecom switch? (and why, of course)'
  replies: []
- id: 1882
  author: ''
  date: '2004-07-26T11:35:33'
  content: Maybe I'm not in the spirit of the interview, but why would asking about a low-level operation that could easily be figured out looking on the web be important? I guess I have a problem with interviewers who assume that, because I happen to have one aspect of the language/libraries in my head, that I can't learn what I need quickly when the time comes. Maybe the focus here is on a junior person who, for example, will be given the unlikely task of creating a device driver in Java...
  replies: []
- id: 1883
  author: Cedric
  date: '2004-07-26T11:43:40'
  content: 'I am not really interested in the correct answer to any of these tests, I just want to know if the person knows bits, that''s all.

    I know how hard it is to do whiteboard programming, so in all these questions, I am more interested in the process and in hearing the candidate think out loud than having a response to everything.

    --

    Cedric'
  replies: []
- id: 1884
  author: Gavin
  date: '2004-07-26T13:18:14'
  content: 'Oh well, looks like I will never be a BEA employee. :-(

    I suck at bits.'
  replies: []
- id: 1885
  author: Alex
  date: '2004-07-26T14:04:19'
  content: 'Man, I promise I''ll walk out the minute the interviewer asks me about "population count".

    It''s dead. It died a violent death -- by beating.'
  replies: []
- id: 1886
  author: Robert Watkins
  date: '2004-07-26T15:06:36'
  content: 'Um, Cedric, you need to know the internal order for some of these things.

    For example, how do you know if -254 is a power of two? Your test says it is, for a byte (with 2''s-complement arithmetic).'
  replies: []
- id: 1887
  author: Philippe Mougin
  date: '2004-07-26T15:48:53'
  content: Fun little puzzles indeed. Often, published puzzles are completely out of reach unless you want to spend half an hour, or more, on them. Yours are fun, accessible and entertaining. And they give me good ideas for interviews. BTW, did you wrote in french magazines like Hebdogiciel or places like that a very long time ago? Your name sounds familiar... Anyway, thanks for posting this.
  replies: []
- id: 1888
  author: Nefilim
  date: '2004-07-26T18:08:53'
  content: 'Hehe, fun indeed. As I read the third question I thought I''d try it out to wake up my tired brain a little bit.  I guess I came up with a small variation:

    while (i > 0)

    {

    if ((i >> 1) == ((i-1) >> 1))

    {

    onebits++;

    }

    i = i >> 1;

    }

    Which also runs p times but should help in explaining the final question ;)

    PS. sorry about code formatting, commenter takes leading white space out it seems.'
  replies: []
- id: 1889
  author: Anjan Bacchu
  date: '2004-07-26T23:51:37'
  content: Hacker's Delight (with a foreword from Guy Steele (http://www.campusi.com/bookFind/asp/bookFindPriceLst.asp?prodId=0201914654) has a lot of such useful shortcuts .
  replies: []
- id: 1890
  author: Dejan Predovic
  date: '2004-07-27T01:01:05'
  content: 'What you are asking is basically - "Have you ever done graphics for 8 and 16 bit computers, in assembler or in C?" ;)

    Oh the joys of the bit-twiddling. :D

    BTW answer to 1) is "there is only 1 bit set", the order of the set bit is the exponent.'
  replies: []
- id: 1891
  author: Cameron
  date: '2004-07-27T19:09:06'
  content: Gosh, Cedric, you'd never pass my hiring tests ;-)
  replies: []
- id: 1892
  author: Jason Marshall
  date: '2004-07-27T21:30:05'
  content: 'There''s a lovely algorithm that will do bit-counting for you in O(log b) where b is the number of bits in the data type (ie, b=32 for int, 64 for long) with no branching.  In other words, it''s wicked-fast on a pipelined processor.

    It uses a pattern of mask-shift-add operations:

    int number = ...;

    int accumulator, mask1, mask2;

    accumulator = number;

    mask1 = accumulator & 0xaaaaaaaa; //1010101010101010

    mask2 = accumulator & 0x55555555; //0101010101010101

    accumulator = (mask1 >>> 1) + mask2;

    mask1 = accumulator & 0xdddddddd; //1100110011001100

    mask2 = accumulator & 0x33333333; //0011001100110011

    accumulator = (mask1 >>> 2) + mask2;

    mask1 = accumulator & 0xf0f0f0f0; //11110000111100001111000011110000

    mask2 = accumulator & 0x0f0f0f0f; //00001111000011110000111100001111

    accumulator = (mask1 >>> 4) + mask2;

    mask1 = accumulator & 0xff00ff00; //11111111000000001111111100000000

    mask2 = accumulator & 0x00ff00ff; //00000000111111110000000011111111

    accumulator = (mask1 >>> 8) + mask2;

    mask1 = accumulator & 0xffff0000; //11111111111111110000000000000000

    mask2 = accumulator & 0x0000ffff; //00000000000000001111111111111111

    int count = (mask1 >>> 16) + mask2;

    IIRC, the total instruction count is 40 for 32 bits, and 47 for a 64 bit number.  You can''t do much better than that.'
  replies: []
- id: 1893
  author: Dan Weinreb
  date: '2004-07-27T23:27:19'
  content: 'With all these questions, it''s really only fair if you''re up-front about precisely what you mean by a "number", and what primitives the candidate is supposed to assume to be available.  It''s somewhat provincial to assume that C''s primitives are the only set of primitives in the world.

    How about the question: write an algorithm to find the next higher number with the same number of one-bits as this number?  Assume positive binary numbers, and the primitives you get to use are the Digital Equipment PDP-6/10/20 instruction set.  The known cool answer is:

    MOVE B,A

    MOVN C,B

    AND C,B

    ADD A,C

    MOVE D,A

    XOR D,B

    LSH D,-2

    IDIVM D,C

    IOR A,C

    The IDIVM is an integer divide instruction!'
  replies: []
- id: 1894
  author: Stepan
  date: '2004-07-28T02:25:54'
  content: Ah, man, you remind me of the nightmarish course of discrete mathematics I had in university. In fact, when all these interviewers start to ask me questions like what's polymorphism or do this bit arithmetics or that, I kinda get a little mad. Each and every time when you come into an interview, you have to prove, in some form, that you're not some kind of a faker.
  replies: []
- id: 1895
  author: Renaud Waldura
  date: '2004-07-28T10:20:31'
  content: 'French speakers might get a kick out of this article of mine.

    http://renaud.waldura.org/essi/entretiens-embauche.html

    I am not convinced bit-twiddling questions are appropriate for an interview.'
  replies: []
- id: 1896
  author: Jonathan
  date: '2004-07-29T04:17:02'
  content: 'The bit-counting code (taking time proportional to the number of 1 bits) is that since it contains a branch, it may be slow even for small numbers of set bits.

    The new JDK 1.5 Integer.bitCount() method uses a very clever constant-time technique which is probably very, very fast. Can you see how it works? (I know but I don''t think I''d have guessed.) The technique was taken from the new book Hacker''s Delight, which is full of clever bit-twiddling tricks.

    /**

    * Returns the number of one-bits in the two''s complement binary

    * representation of the specified int value.  This function is

    * sometimes referred to as the population count.

    *

    * @return the number of one-bits in the two''s complement binary

    *     representation of the specified int value.

    * @since 1.5

    */

    public static int bitCount(int i) {

    // HD, Figure 5-2

    i = i - ((i >>> 1) & 0x55555555);

    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);

    i = (i + (i >>> 4)) & 0x0f0f0f0f;

    i = i + (i >>> 8);

    i = i + (i >>> 16);

    return i & 0x3f;

    }'
  replies: []
- id: 1897
  author: ''
  date: '2004-07-29T04:19:37'
  content: Actually I see Jason Marshall's comment above is based on the same technique as JDK 1.5's Integer.bitCount().
  replies: []
- id: 1898
  author: stas @ it.kubasek.com
  date: '2004-08-26T13:52:53'
  content: 'I don''t see the point of such questions. I used to know bits and probably could have answered those questions right after school. However, I have not done any bit operations in my daily work and I''ve simply forgotten how to do that. I''m sure that most of Java programmers do not use bit operations in their daily work.

    How do those questions tell you anything useful about the programmer? Oh, because I forgot how to use them (or don''t know about them) I''m worse than somebody that knows them? I don''t think so.

    If this interview is for a designer position, I would ask about Design Patterns (advantages of one in the other); flexible architecture; TDD; hiding complexity; past designs; etc. This would tell you if you''re dealing with a good, experienced professional.

    I simply don'
  replies: []
- id: 1903
  author: Neeraj Kumar
  date: '2004-12-01T13:22:10'
  content: '<strong>Interview questions from Cedric</strong>

    <p>When I interview someone, I usually ask at least one bit-shifting question to the candidate. It''s not a dealbreaker if ...</p>'
  replies: []
- id: 1899
  author: KeviKev
  date: '2005-08-02T15:25:39'
  content: Interesting...
  replies: []
- id: 1900
  author: Jeff
  date: '2005-08-04T13:29:10'
  content: Some of you are asking why would you ever ask a candidate bit questions.  The point isn't to see if the person can actually do bit manipulations, it's to see if the person thinks in terms of a computer.  The base of computer logic is bits.  Everything is a bit.  Numbers are bits.  Pixels on the screen are bits.  Some of the most difficult bugs and problems I have ever encountered dealt with obscure memory problems and stack corruption because somebody didn't understand how data is stored and managed to cross the bits when doing a tpyecast or incorrect pointer math.  Understanding bits is critical to being a good programmer.
  replies: []
- id: 1901
  author: shkelqim
  date: '2005-12-26T06:55:17'
  content: I need a full program in java with ecryption by method for example.we have a byt and to encrypt must make xor in postion three of byte and to move the bits three position in to the left and like outpu file must be 2 byts.
  replies: []
- id: 1902
  author: outsourcing world
  date: '2006-12-12T09:56:22'
  content: outsourcing-world, Outsourcing  Jobs find a job in googleIndia Outsourcing,Software Solutions Provider CompanyHr Outsourcing,elevated the importance of HROffshore Outsourcing,Outsourcing Services, IT consulting company to partnerBenefits Of Outsourcingmore on googlePayroll Outsourcing,an experienced accounting Software Outsourcing,more on msnCall Center Outsourcing,all jobs in yahooOutsourcing Newsbout the effects of globalizationOutsourcing IndiaIt Outsourcing,software development company with specialization Outsourcing Companies,for more on googleOutsourcing Consultant IndiaOutsourcing Add Your LinkOutsourcing Add New SiteOutsourcing List UrlBusiness Process OutsourcingOutsourcing Jobs To Foreign countries,development company in foreignAccounting  And Finance Outsourcing,IT consulting company to partner
  replies: []
---

When I interview someone, I usually ask at least one bit-shifting question to the candidate.  It's not a dealbreaker if she fails to answer it, but it certainly wins her a lot of points if she can, or at least discuss it in convincing ways.

Interestingly, pretty much every single candidate that I have ever interviewed who did well on the other questions that I asked (typically at a higher-level, such as OO design or design pattern) also does well on the bit-shifting question, so it's usually a pretty strong indicator of someone who has a good computer science background overall. 

There are three categories of bit-shifting questions that I usually pick from, in increasing order of difficulty:

  1. How can you determine if a number is a power of two?
  2. How can you clear the rightmost bit?
  3. How can you count the number of 1 bits?



This last question is a classic, so I added my own personal twist to it (see below).

Let's take them in turn.

**1.   How can you determine if a number is a power of two?**

The easiest way to answer this question is to notice that a power of two has exactly one 1 followed by only zero's (except for 1, which is also covered by the following solution).  Therefore, the quickest way is probably: 
    
    
    return x != 0 && (x & (x-1)) == 0;
    

The idea is that subtracting one from such a number will flip all its bits:  the 1 becomes a 0 and all the zeros become 1.  "and"ing these two numbers will therefore equal to zero.

As far as I can tell, this only happens for powers of two:  if the number has any other 1 than the one we are interested in, it will not be flipped by the subtraction and will therefore survive the &.

I will accept any variations thereof:  at this point, I am just trying to see if the candidate has any notion of binary coding.

**2.   How can you clear the rightmost bit?**

There are several ways to answer this question and ideally, the candidate will start by giving me the easiest one and then, the bit-oriented one when pressed.  You can simply observe that clearing the rightmost bit is a no-op is the number is even and a decrement of the number if it is odd:
    
    
    return (n % 2 == 0 ? n : (n - 1))
    

This is not very efficient so I will ask for a faster solutions.  There are a couple of options:
    
    
    return n - (n & 1)
    

or
    
    
    (n >> 1) << 1
    

This last solution is mine, and I prefer it over the others because shifting is much faster than subtracting.  If the candidate doesn't provide it, I will usually suggest it and ask her to discuss the pros and cons of each.

**3\. How can you count the number of 1 bits?**

And finally, we reach this timeless classic.  If the candidate has never heard of it, she's in for a tough time.  And even if she does, I have my own twist to it that guarantees me that I will get to take a close look at the way she thinks.

Let's start with the naive solution:  shift the number right and increment a counter each time the rightmost bit is 1:
    
    
    int counter = 0;
    while (n > 0) {
    if (n % 2 == 1) counter++;
    n >>= 1;
    }
    

Next comes the leap of faith:  "This algorithm executes p times, where p is the size in bits of n.  Can you think of a solution that executes in b times, where b is the number of 1 bits in n?".

Either she knows the answer or she doesn't, and if she doesn't, she'll be stumped.  At this point, I will step in and I will give her a hint:  "Can you describe to me what the expression _n & (n-1)_ does to n?".

If you've never seen this trick, it's impossible to answer right away:  you will need to apply the formula on the board on a few numbers before you put the pieces together (which is already not very easy).  The answer is:  "It clears the rightmost 1 bit in n".

With this in mind, the solution to the puzzle becomes:
    
    
    int counter = 0;
    while (n != 0) {
    counter++;
    n = n & (n-1);
    }
    

If she gave me this answer without help, I will strongly suspect that she already knew the trick, so I will throw in my own twist:  "Can you demonstrate that _n & (n-1)_ clears the rightmost bit?".

And I will leave this as an exercise to the reader for now.  Answer in a few days.
