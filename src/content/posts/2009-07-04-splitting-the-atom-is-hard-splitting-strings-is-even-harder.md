---
title: Splitting the atom is hard, splitting strings is even harder
date: '2009-07-04T14:09:02'
slug: splitting-the-atom-is-hard-splitting-strings-is-even-harder
categories:
- Java
comments:
- id: 7815
  author: Joshua Foster
  date: '2009-07-04T16:19:28'
  content: Interesting, nice tip.
  replies: []
- id: 7816
  author: Evgeny
  date: '2009-07-04T19:36:03'
  content: 'Yep, Ruby sure works a bit differently.

    irb(main):001:0> "abc.def".split(".").length

    => 2

    irb(main):002:0> "abc.def".split(/\./).length

    => 2

    irb(main):003:0> "abc.def".split(/./).length

    => 0'
  replies: []
- id: 7817
  author: Alex Blewitt
  date: '2009-07-05T11:10:49'
  content: 'It''s also valid Python code, wot gives 2

    >>> len("abc.def".split("."))

    2'
  replies: []
- id: 7818
  author: Alex Blewitt
  date: '2009-07-05T15:35:42'
  content: 'Ok, so I cheated a little and moved the .length to .len. However, it''s also a valid JavaScript expression, at least according to WebKit''s development console:

    > "abc.def".split(".").length

    2'
  replies: []
- id: 7819
  author: Kevin
  date: '2009-07-06T14:52:23'
  content: 'Read the Java Docs for Pattern before you write stuff like this.  There is no perform problems if acutally know how to use Pattern:

    Pattern matchPeriod = Pattern.compile("\\.");

    for(String s : getSomeStrings()){

    String[] list = matchPeriod.split(s);

    // do whatever

    }

    java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html#split(java.lang.CharSequence)'
  replies: []
- id: 7820
  author: Cedric
  date: '2009-07-06T15:18:35'
  content: Kevin, this is *exactly* what I recommend at the end of the post. What part of "Avoid using String#split in a loop" do you disagree with?
  replies: []
- id: 7821
  author: unacoder
  date: '2009-07-06T19:19:43'
  content: i would have guessed 8, but that's javascript. i imagine perl might behave the same way. i could never bring myself to like the java implementation.
  replies: []
- id: 7822
  author: Charles Oliver Nutter
  date: '2009-07-09T10:49:26'
  content: A better implementation would be to have literal regular expressions in Java, so that there's no confusion about whether a string is going to be used as a string or a regexp. :)
  replies: []
- id: 7823
  author: John Barnard
  date: '2009-07-10T22:37:55'
  content: Wow, I am really doing rocket science computation all the time that I can't afford a couple of microseconds in the sake of simplicity...
  replies: []
- id: 7824
  author: ashbyp
  date: '2009-07-13T15:05:01'
  content: 'Interestingly,

    // apache commons

    StringUtils.split(str, pattern);

    is about 3 times faster than the pre-compiled java version

    Pattern matchPeriod = Pattern.compile("\\.");

    for(String s : getSomeStrings()){

    String[] list = matchPeriod.split(s);

    // do whatever

    }

    Of course, you need to be spliting a sh1t load of strings for this to be important, but you might be...'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/splitting-atom.jpg)

I always seem to underestimate how much readers of this blog enjoy a good coding challenge. A few days ago, one of my coworkers was tripped by a line of code and I thought I'd share his confusion with people [following me on Twitter](http://twitter.com/cbeust), which turned out to be a fitting medium for this micro challenge: 
    
    
    Pop quiz: "abc.def".split(".").length should return...?
    

I really didn't think much of it but I got much more responses than I anticipated. A lot of them were incorrect (hey, if I throw a challenge, there has to be a trick), but I still want to congratulate everyone for playing the game and answering without testing the code first. That's the spirit! 

A few people saw the trap, and interestingly, they pointed out that I must have made a mistake in the question instead of just giving the correct answer (“You must have meant split("\\\\.")”). 

As hinted above, the trick here is that the parameter to `java.lang.String#split` is a regular expression, not a string. Since the dot matches all the characters in the given string and that this method cannot return any character that matches the separator, it returns an empty string array, so the answer is "0". 

This didn't stop a few people from insisting that the answer is "2", which made me realize that the code snippet above happens to be valid Ruby code, a pretty unlikely coincidence. So to all of you who answered 2 because you thought this was Ruby, you were right. To the others, you are still wrong, sorry :-) 

The bottom line is that this method is terribly designed. First of all, the string confusion is pretty common (I've been tricked by it more than a few times myself). A much better design would be to have two overloaded methods, one that takes a `String` (a real one) and one that takes a regular expression (a class that, unfortunately, doesn't exist in Java, so what you really want is a `java.util.regex.Pattern`). 

API clarity is not the only benefit of this approach, there is also the performance aspect. 

With the current signature, each call to `split()` causes the regular expression to be recompiled, as the source sadly confirms: 
    
    
    public String[] split(String regex, int limit) {
    return Pattern.compile(regex).split(this, limit);
    }
    

Since it's not uncommon to have such parsing code in a loop, this can become a significant performance bottleneck. On the other hand, if we had an overloaded version of `split()` that accepts a `Pattern`, it would be possible to precompile this pattern outside the loop. 

Interestingly, [that's how Ruby implements `split()`](http://www.ruby-doc.org/core/classes/String.html#M000803): 

> If pattern is a String, then its contents are used as the delimiter when splitting str. If pattern is a single space, str is split on whitespace, with leading whitespace and runs of contiguous whitespace characters ignored. 
> 
> If pattern is a Regexp, str is divided where the pattern matches. Whenever the pattern matches a zero-length string, str is split into individual characters. 

But there is a catch: since Ruby is dynamically typed (which means it doesn't support overloading either), the determination of the class of the parameter has to be done at runtime, and even though this particular method is [implemented in C](http://www.ruby-doc.org/doxygen/1.8.4/string_8c-source.html#l03467), there is still an unavoidable performance toll to be paid, which is unfortunate for such a core method. 

The conclusion of this little drill is that if you are going to split strings repeatedly, you are better off compiling the regular expression yourself and use `Pattern#split` instead of `String#split`.
