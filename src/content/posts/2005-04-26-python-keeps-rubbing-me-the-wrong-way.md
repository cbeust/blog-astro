---
title: Python keeps rubbing me the wrong way
date: '2005-04-26T15:22:43'
slug: python-keeps-rubbing-me-the-wrong-way
categories:
- General
comments:
- id: 3517
  author: Jonathan Aquino
  date: '2005-04-26T20:20:52'
  content: Amen brotha
  replies: []
- id: 3518
  author: Jonathan Ellis
  date: '2005-04-26T21:23:43'
  content: You can be elegant without being OO and vice versa...  the python code is much easier on my eyes.
  replies: []
- id: 3519
  author: Patrick Calahan
  date: '2005-04-26T21:42:50'
  content: I really just don't want to think about you rubbing your Python, Cedric.
  replies: []
- id: 3520
  author: Martin
  date: '2005-04-26T23:06:03'
  content: 'Or yet simpler (Ruby) :

    (0..10).each {|it| puts it if it % 2 == 0 }

    I like this language.'
  replies: []
- id: 3521
  author: Henry Story
  date: '2005-04-27T00:21:42'
  content: 'yes, I gave up on python as soon as I saw the "self" keyword. It just made me feel really uncomfortable.

    I think these experiments with languages are really great. Something good is going to come out of it. At some point I may even feel like learning Ruby or Groovy. But learning a new language is a lot of work, especially when I can get the above easily in java with

    class tmp {

    public static void main(String [] args) {

    for (int i = 0; i &lt;= 10; i+=2) {

    System.out.println(i);

    }}}'
  replies: []
- id: 3522
  author: Someone
  date: '2005-04-27T00:59:26'
  content: 'I think it''s just a matter of what you''re used to. For me as a Python and Java programmer, the Ruby code you show looks just as unnatural and weird as the Python code looks to you.

    But maybe that''s just because I''m not used to seeing Ruby, just as you''re not used to seeing Python code.

    What I suggest, if you want to get a better feel for Python, is to do the Python tutorial (available at www.python.org, also available in any Python distribution you download) which takes you on a (really quick) trip through Python''s features. Shouldn''t take more than a couple hours.

    It''s definitely a mis-characterization when you say "Python does support some object orientation". Complete object orientation was built in from the start, and it goes further than Java does in a lot of ways : Python allows multiple inheritance and operator overloading, for instance.

    It''s true that it allows you to mix object-oriented and script-style code but I really don''t see what''s wrong with that, since you get the best of both worlds.'
  replies: []
- id: 3523
  author: se7en
  date: '2005-04-27T01:21:24'
  content: 'Did you forgot groovy?

    (1..10).findAll { it % 2 == 0 }.each { println it }'
  replies: []
- id: 3524
  author: Simon
  date: '2005-04-27T01:25:55'
  content: 'But Henry - you example is not filtering; it''s simply iterating through a list with an index increment of 2.

    You may not like self but it''s a lot cleaner than a wrapper class "tmp", a static method "main" and an array of unused params "args" - just for the sake of getting it to compile and run...'
  replies: []
- id: 3525
  author: Simon
  date: '2005-04-27T01:40:16'
  content: 'Or in python if you want to cheat with the filtering (increment of 2) -

    for x in range(10)[::2]:

    print x'
  replies: []
- id: 3526
  author: ''
  date: '2005-04-27T05:26:30'
  content: 'try this:

    for nr in filter(lambda arg: arg%2 == 0, range(10)): print nr'
  replies: []
- id: 3527
  author: James Stauffer
  date: '2005-04-27T05:33:16'
  content: As someone who is familiar with neither Python nor Ruby I find the Ruby code easier to understand.  (BTW I program mostly in Java)
  replies: []
- id: 3528
  author: ''
  date: '2005-04-27T13:57:48'
  content: 'My python code was not about filtering as much as it was about generators and the fact that because they are useful, sometime you can use expression syntax aka expedite and yet be lazy.

    If arguing about the architecture of a scalable, robust, flexible, elegant and maintainable piece of 3 lines of code is what you do I am at lost.

    What about creating an entire MVC for the sake of it? Let''s not be ridiculous when it''s not the case.

    By the way your code has 4 "it" and I''ll let you count the different semantics to yourself.'
  replies: []
- id: 3529
  author: Bitter
  date: '2005-04-27T16:54:33'
  content: 'I''m not sure I see those four semantically different uses of nr.

    There are two for loops. In both cases "for nr" declares the nr variable. The "nr" at the start of the list comprehension expression and the nr in "nr % 2 == 0" are both the number (taken from values) for the current iteration of the for loop - exactly the same as the nr in "print nr" in the outer for loop.

    So that''s two meanings for the string "nr": declaration of a variable, and accessing the value it contains. That would be the same number of meanings as "it" has in your Ruby code, right? What did I miss?

    You seems to object to the fact that Python doesn''t force every possible operation into the obj.function(arg) syntax pigeonhole. I''m not sure that''s a bad thing.

    Seriously though, I wonder if an utterly trivial rearrangement of the Python code would make you feel better about the filtering/writing separation:

    values = range(10)

    filtered = (nr for nr in values if nr % 2 == 0)

    for nr in filtered:

    print nr'
  replies: []
- id: 3530
  author: gheorghe milas
  date: '2005-04-27T19:41:31'
  content: 'Here is a totally different code:

    values = range(10)

    for nr in [nr for nr in values if nr%2 == 0]:

    print nr

    which may be better as:

    even = lambda x: x%2 == 0

    for nr in filter(even, values):

    print nr

    However this versions are actually building the resulting list of even numbers then the outer loop will consume it.

    The generator version is different in the sense that it produces the even numbers as the outer loop requests them so

    you could say there is only one traversal while without the generator there are 2 traversals.

    I''m not sure how the ruby code you posted behaves, is it like a generator or is it more like this second version actually?

    As far as comic OO design goes:

    class RubyList(list):

    def find_all(self, predicate):

    return RubyList(filter(predicate, self))

    def each(self, func):

    map(func, self)

    even = lambda x: x%2 == 0

    def write(x):

    print x

    RubyList(range(10)).find_all(even).each(write)

    -code blocks are indeed nice, however I figure on larger scale coding conceptualizing the block into an abstraction

    (naming it) may be in order so the end is the same as above

    -reducing usage of temporary variable and actually better yet reducing side effects are almost crying for functional

    composition map(write, filter(even, values) in the inverse (mathematics) notation or the latin

    (conversational - call it object message passing if you will) notation values.filter(even).map(write).

    -combining paradigms are common not only since Derrida persuaded us to do nothing but deconstruct reality in new ways'
  replies: []
- id: 3531
  author: Chris Winters
  date: '2005-04-27T21:17:44'
  content: 'And here''s the same thing a few ways in perl:

    print for ( grep { $_ % 2 == 0 } ( 0 .. 10 ) );

    for ( 0 .. 10 ) {

    print if ( $_ % 2 == 0 );

    }

    foreach my $value ( 0 .. 10 ) {

    print $value if ( $value % 2 == 0 );

    }

    Here''s what I like about them:

    - I can use shortcuts if I want (that scary $_ is really just a form of "it")

    - I can use more the often more readable form of post-conditions if I want ("print it if this is true")

    - I can use functional constructs alongside everything else (grep filters a list from right to left using a block or regex)

    And I don''t think I''ve heard Derrida brought up in discussions of combining paradigms before, nice. (But I''m probably just not in on the right discussions...)'
  replies: []
- id: 3532
  author: Prakash Kailasa
  date: '2005-05-03T08:37:13'
  content: 'Re: Chris Winters'' comment above:

    I prefer this one with fewer parentheses:

    print for grep {$_ % 2 == 0} 0..10;

    Another perl variant:

    map {print} grep {$_ % 2 == 0} 0..10;'
  replies: []
- id: 3533
  author: Berlin Brown
  date: '2005-05-04T04:11:53'
  content: I really recommend Jython(JavaPython).  You can write Python code if you have to as a simple scripting glue over your Java frameworks plus you don't have to get too deep inside of Python if you don't want to.  It really makes coding a lot smoother.
  replies: []
- id: 3534
  author: ''
  date: '2005-05-06T13:12:57'
  content: 'You can separate out the filtering and printing:

    evens = [n for n in range(10) if n%2==0]

    for number in evens:

    print number

    But yeah, Python does have its warts.  In boo ( http://boo.codehaus.org/ ) the "self" is optional.  The colon at the end of lines is redundant and could be made optional too.'
  replies: []
- id: 3535
  author: ''
  date: '2005-05-09T05:28:53'
  content: 'This is better:

    for nr in range(10):

    _if not nr%2:

    __print nr'
  replies: []
- id: 3536
  author: ''
  date: '2005-05-09T05:29:24'
  content: 'dont call both variables nr and your problem is solved

    as to the ruby example, I think it is nowhere near as "obvious" as the python code.'
  replies: []
- id: 3537
  author: Paul
  date: '2005-05-09T06:28:05'
  content: 'You can write unreadable code in any language...

    Doesn''t mean you have to, though.'
  replies: []
- id: 3538
  author: Fredrik C
  date: '2005-05-09T08:05:59'
  content: 'What have happened to Pythons "Only one obvious way to do it"-slogan?

    As more and more constructs get added to Python the more time I use to find the optimal.

    In classic python (before list and generator expressions) the one proposed by  Berlin Brown would have been the obvious.

    for nr in range(10):

    _if not nr%2:

    __print nr

    Wonderful, and what made me love python! Easy to read and obvious even to non python programmers.

    I''m worried as I cant recommend Python to beginners as much as I used to.'
  replies: []
- id: 3539
  author: Daniel
  date: '2005-05-09T09:20:01'
  content: 'Python:

    print [it for it in range(10) if not it % 2]

    Ruby:

    (0..10).each {|it| puts it if it % 2 == 0 }

    Please observe that nobody has a leg to stand on in this argument.'
  replies: []
- id: 3540
  author: Curtis
  date: '2005-05-09T10:54:31'
  content: 'I think everyone missed the most straight forward solution in Python:

    for number in range(0,10,2): print number'
  replies: []
- id: 3541
  author: Ian Bicking
  date: '2005-05-09T11:26:22'
  content: 'Using a generator for the expression in a for loop is quite awkward, no doubt.  I never ever do that.  So identifying and critisizing that awkwardness is not particularly insightful, since it''s entirely resolveable.  Python is resistent to confusing programming structures, but certainly not invulnerable.

    Anyway, generally Python style is that you give objects names if things seem confusing, in this case "evens = (n for n in values if n % 2 == 0)".  There''s your abstract logic.  Then "for n in evens: print n" is your display logic.  Separate them into functions if you want more abstraction, they are quite ammeniable to such separation and reuse.

    The OO equivalent of adding an "evens" method to all sequences is rather absurd (at least if you care about large systems, localized changes, and safe integration of multiple libraries).  I general for this kind of code OO is inappropriate; OO offers little improvement to algorithmic code.

    The critique of self here doesn''t even apply; self doesn''t appear anywhere in the Python code, and the Ruby code doesn''t use any construct where Python would use self either.  It seems like "self" is the new irrational reason to dislike Python these days, now that significant whitespace seems to have gained some degree of acceptance.  While its presence in method signatures is largely superfluous, I think it is very justifiable in code bodies; that Ruby shortens it to "@" doesn''t change much.  Leaving out any localized distinction between globals functions/variables, and instance methods/variables (as in, say, C++), is (IMHO, as always) far more confusing.'
  replies: []
- id: 3542
  author: John
  date: '2005-05-09T11:32:03'
  content: 'Ruby''s equivalent of

    for number in range(0,10,2): print number

    is

    0.step(10,2) {|i| puts i}

    The python code seems slightly more readable to me.'
  replies: []
- id: 3543
  author: random python surfer
  date: '2005-05-09T11:38:48'
  content: '"self" is not a keyword in Python, it is a convention. What is built-in to Python is that every instance method defined in the body of a class definition (which is any function that isn''t explicitly made into a class method or whatever) has as its first argument the instance that the method is called on. The convention is to use the name "self" for this argument. But you could just as well use "bob" as long as you are consistent.'
  replies: []
- id: 3544
  author: edwardam
  date: '2005-05-09T15:58:19'
  content: 'So basically you like ruby because their list/sequence types have a method called ''find_all'' and ''each''. Where ''find_all'' accepts and expression (''it %2 == 0'') and ''each'' accepts another method (''puts'').

    ''Cause that''s what I see happening in the Ruby code. Although I don''t speak ruby.'
  replies: []
- id: 3545
  author: edwardam
  date: '2005-05-09T16:16:02'
  content: 'class slist(list):

    def find_all(self, var, expr):

    exec """a = [%s for %s in self if %s]""" % (var,var,expr)

    return slist(a)

    def each(self, var, expr):

    exec """for %s in self: %s""" % (var, expr)

    if __name__ == "__main__":

    slist(range(10)).find_all(''n'', "n % 2 == 0").each("n","print n")'
  replies: []
- id: 3546
  author: mark
  date: '2005-05-10T03:56:14'
  content: 'I am fascinated that you spend so much time complaining about Python. Is someone making you use it for a job?

    There is a reason that there are so many programming languages - and that is that there are many ways of expressing these concepts. Python clearly doesn''t suit the way you think or your sense of aesthetics. That doesn''t mean that there is anything wrong with you or Python.'
  replies: []
- id: 3547
  author: Stefan
  date: '2005-05-10T13:03:43'
  content: 'Anyhow, seing the first complain was about unclear syntax. Python promotes clarity, but certainly does not enforce it. In any real application this is how you should do

    def listfilter(argument):

    return argument % 2 == 0

    unfilteredlist = range(10)

    filteredlist = filter( listfilter, unfilteredlist )

    for item in filteredlist:

    print item

    One-liners are never pretty, there is always a way to make things obfuscated. Take a look at this C code example and see if its clear :D

    http://remus.rutgers.edu/~rhoads/Obfuscated_C/pi.c'
  replies: []
- id: 3548
  author: ''
  date: '2005-05-22T22:47:43'
  content: 'To preserve formatting:

    print ''\n''.join([str(it) for it in range(10) if not it % 2])'
  replies: []
- id: 3549
  author: Tuomas
  date: '2005-05-31T03:37:42'
  content: 'Why don''t do it like this?

    for nr in range(0,10,2):

    print nr'
  replies: []
- id: 3550
  author: shev
  date: '2005-09-30T01:30:21'
  content: 'Why not

    for nr in range(0,10,2):

    print nr

    Come on folks, you must compare the most beautiful way in a language to another language.

    I am in love with Ruby, but the original post of cedric is really unfair if there are more beautiful and still short ways to achieve something in Python.'
  replies: []
- id: 3551
  author: Charge Back
  date: '2005-11-14T06:26:22'
  content: href
  replies: []
- id: 3552
  author: exe
  date: '2007-04-20T22:06:25'
  content: 'in c# 3.0:

    Int32.Range(0,20).WhereIndexIs(i=>i.Even()).ForEach(v=>Console.WriteLine(v));

    or:

    Int32.Range(0,20,2).ForEach(v=>Console.WriteLine(v));

    It is truly beautiful but needs some extension methods to be included.'
  replies: []
- id: 3553
  author: exe
  date: '2007-04-20T22:06:48'
  content: 'in c# 3.0:

    Int32.Range(0,20).WhereIndexIs(i=>i.Even()).ForEach(v=>Console.WriteLine(v));

    or:

    Int32.Range(0,20,2).ForEach(v=>Console.WriteLine(v));

    It is truly beautiful but needs some extension methods to be included.'
  replies: []
- id: 3554
  author: exe
  date: '2007-04-20T22:11:33'
  content: 'obviously it is

    Int32.Range(0,20).Where(i=>i.Even()).ForEach(v=>Console.WriteLine(v)); - no "WhereIndexIs"'
  replies: []
- id: 3555
  author: nguyen
  date: '2009-07-09T07:06:00'
  content: '&#12508;&#12452;&#12473;&#12488;&#12524;&#12540;&#12491;&#12531;&#12464;

    20&#19975;&#20197;&#19978;&#12398;&#36035;&#36024;

    &#38666;&#22290;

    &#27835;&#39443;

    &#26684;&#23433;&#33322;&#31354;&#21048;&#12288;&#22269;&#20869;

    &#20661;&#21209;&#25972;&#29702;

    &#20661;&#21209;&#25972;&#29702;

    &#32954;&#12364;&#12435;

    &#12524;&#12531;&#12479;&#12523;&#12458;&#12501;&#12451;&#12473;

    &#37240;&#32032;&#12459;&#12503;&#12475;&#12523;

    &#12480;&#12452;&#12456;&#12483;&#12488;&#12469;&#12503;&#12522;&#12513;&#12531;&#12488;

    FX&#21462;&#24341;

    &#12452;&#12531;&#12503;&#12521;&#12531;&#12488;

    &#24215;&#33303;&#12487;&#12470;&#12452;&#12531;

    &#23130;&#27963;

    &#12475;&#12531;&#12481;&#12517;&#12522;&#12540;21&#12288;&#22524;&#29577;

    &#22320;&#12487;&#12472;

    &#32080;&#23130;&#24335;

    FX&#21462;&#24341;

    &#22823;&#26862;&#12503;&#12525;&#12473;&#12488;&#12471;&#12486;&#12451;&#12524;&#12472;&#12487;&#12531;&#12473;

    &#40169;&#12534;&#35895;&#24066;&#12288;&#19968;&#25144;&#24314;&#12390;

    &#12494;&#12505;&#12523;&#12486;&#12451;

    &#22615;&#35013;

    &#25163;&#12398;&#33509;&#36820;&#12426;

    &#31563;&#32905;&#22679;&#24375;

    &#26149;&#26085;&#37096;&#24066;&#12288;&#19981;&#21205;&#29987;

    &#36024;&#12375;&#20107;&#21209;&#25152;

    &#21513;&#30000;&#19981;&#21205;&#29987;

    &#26495;&#27211;&#12288;&#12510;&#12531;&#12471;&#12519;&#12531;

    &#32080;&#23130;&#25351;&#36650;

    &#12454;&#12456;&#12487;&#12451;&#12531;&#12464;&#12489;&#12524;&#12473;

    &#25658;&#24111; &#12469;&#12452;&#12488; &#20316;&#25104;

    &#12473;&#12522;&#12483;&#12497;

    &#22823;&#30000;&#21306;&#12288;&#19981;&#21205;&#29987;&#22770;&#21364;

    &#12524;&#12468;

    &#28023;&#22806;&#30041;&#23398;

    &#22823;&#23398;&#30041;&#23398;

    &#20013;&#22269;&#30041;&#23398;

    &#30041;&#23398;

    &#38463;&#20304;&#12534;&#35895;&#12288;&#19981;&#21205;&#29987;

    SEO&#23550;&#31574;

    &#26032;&#23487;&#12288;&#12450;&#12540;&#12488;&#12513;&#12452;&#12463;

    &#32080;&#23130;&#30456;&#35527;&#25152;&#12288;&#20013;&#22830;&#21306;&#26085;&#26412;&#27211;

    &#12481;&#12521;&#12471;&#12487;&#12470;&#12452;&#12531;

    &#26032;&#24231;&#12288;&#19981;&#21205;&#29987;

    &#24321;&#35703;&#22763;&#12288;&#37504;&#24231;

    &#32722;&#12356;&#20107;

    &#12488;&#12452;&#12524;&#12388;&#12414;&#12426;

    &#12488;&#12452;&#12524;&#12388;&#12414;&#12426;

    &#12488;&#12452;&#12524;&#12388;&#12414;&#12426;

    &#26495;&#27211;&#21306;&#12288;&#19968;&#25144;&#24314;&#12390;

    &#65315;&#65331;&#65330;

    Bloom

    &#23567;&#38996;

    &#12469;&#12540;&#12514;&#12471;&#12455;&#12452;&#12503;

    &#12362;&#35211;&#21512;&#12356;&#12497;&#12540;&#12486;&#12451;&#12540;

    &#12414;&#12388;&#12370;&#12456;&#12463;&#12473;&#12486;

    &#30456;&#32154;

    &#20250;&#31038;&#35373;&#31435;

    &#20250;&#35336;&#12471;&#12473;&#12486;&#12512;

    &#12502;&#12521;&#12452;&#12480;&#12523;&#12456;&#12473;&#12486;

    &#36786;&#21830;&#24037;&#36899;&#25658;

    &#12456;&#12523;&#12513;&#12473;'
  replies: []
- id: 3556
  author: nguyen
  date: '2009-07-09T07:06:52'
  content: 'nt32.Range(0,20).WhereIndexIs(i=>i.Even()).ForEach(v=>Console.WriteLine(v));

    or:

    Int32.Range(0,20,2).ForEach(v=>Console.WriteLine(v));

    It is truly beautiful but needs some extension methods to be included.

    Posted by: exe at April 20, 2007 10:06 PM

    obviously it is'
  replies: []
---

In response to [Luke Hutteman's post on continuations](http://www.hutteman.com/weblog/2005/04/26-224.html), someone offered the following Python snippet to illustrate filtering:
    
    
    values = range(10)
    for nr in (nr for nr in values if nr%2==0):
        print nr

There are several things that bother me with this code:

  * I count four different meanings for the variable `nr`, each with a different semantics. You should not need more than two (one as a parameter to for and the other one used inside the body)
  * It mixes procedural, and inverted style and doesn't contain anything that is object-oriented.  Python does support some object orientation, so for more complex pieces of code, you will find yourself constantly mixing three different styles of programming.
  * It mixes filtering `(nr % 2 == 0)` and business logic (`print`), making it hard to parameterize either.



Here is a Ruby way of doing the same thing:
    
    
    (0..10)
      .find_all { |it|
        it %2 == 0
      }
      .each { |it|
        puts it;
      }

What I like about it:

  * It's object-oriented, which makes it regular:  each object is applied a message and the result is then piped into the next treatment.
  * Filtering and business logic are clearly separated, so you can improve this example by substituting blocks (strategy pattern)
  * It minimizes the number of intermediate variables (only one:  `it` and it is only used as a parameter and inside the body of the closure.



The latter solution feels much more natural and intuitive to me, whereas most of my time in Python is typically spent 

  * Filtering out the omnipresent and totally useless keyword `self`.
  * Wondering if the object I am staring at responds to a method or if I need to call a global function on it (such as `range` in the example above). 



I guess I'm too young for Python and spoiled by modern languages :-)
