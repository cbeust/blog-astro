---
title: The definitive Python rant
date: '2005-04-29T09:50:59'
slug: the-definitive-python-rant
categories:
- General
comments:
- id: 3557
  author: Jonas Galvez
  date: '2005-04-29T10:56:58'
  content: 'Cedric: "So Python tried to adapt and started to incorporate a mishmash of features from various origins."

    I would say this is a rather misleading, misinformed statement, but I''m not willing to get into a long, tedious argument here. I''ll just say that from my point of view the situation is completely the opposite.

    Since Guido has steadfastly resisted the urge to add features in a haphazard fashion, Python has maintained a simplicity which has allowed it to scale in an unprecedented manner: it is at once the most learnable, and most scalable language on the planet. It has adapted in a controlled fashion, and adopted only those features which have proven to be useful and, above all, used in other languages.'
  replies: []
- id: 3558
  author: Tom
  date: '2005-04-29T13:05:03'
  content: 'I don''t program much Python these days, and I definitely dislike "self" as an explicit parameter, but I disagree with your assessment of Python''s evolution. As you noted, they do radically (but carefully) change language style on occasion, and in fact (as I see it) they choose what they do because they prefer it way.

    Also, here''s the preferred way these days for doing static methods, if you really must have them:

    @classmethod

    def foo(cls):

    pass

    See here for more on the Python 2.4 feature:

    http://www.python.org/peps/pep-0318.html

    Think easy domain-specific language construction. (Although I really wish everything had Ruby''s blocks, too.) While these look like Java annotations, among other things for familiarity, they are not really the same thing, and they are way simpler to work with than Java annotations.

    And while I''m not a big fan of "x for x in list" syntax, it''s not designed to look like C. It''s designed to look like traditional math set notation, as in [x | x element-of set].'
  replies: []
- id: 3559
  author: Anothermike
  date: '2005-04-29T15:33:36'
  content: Monkey patching. Enough said.
  replies: []
- id: 3560
  author: daniel
  date: '2005-04-29T18:47:02'
  content: 'You''re misunderstanding classmethods.

    They''re not the same as static methods, and are not ''retrofitted'' into the language as you state.

    See here for info:

    http://naeblis.cx/rtomayko/2004/12/15/the-static-method-thing

    http://www.faqts.com/knowledge_base/view.phtml/aid/16824

    http://mail.python.org/pipermail/python-list/2002-September/121324.html

    Cheers,

    /d'
  replies: []
- id: 3561
  author: Jon Tirsen
  date: '2005-05-02T00:42:02'
  content: 'This is one of the things I agree whole-heartedly with you Cedric.

    I know from experience that there''s a certain ''suckiness-phase'' you go through while learning a new language. Things feel inconsistent because you haven''t quite yet learned the logic/paradigm/whatever of the new language.

    I certainly felt that with Ruby when I first started. ("What!? Procs are passed automagically to methods and invoked with the magical keyword ''yield''!? Yuck!") After a while you get used to it, and after another while you start to understand and appreciate it.

    I''ve tried so many times to learn Python and I''ve never gotten over that suckiness-phase. It just feels like patch over patch, compromise after compromise. And it''s not like I don''t appreciate the functional stuff, I spent 2 years of my career on Common Lisp.

    Nah, I think I''ll pass on Python...'
  replies: []
- id: 3562
  author: Frederick Ros
  date: '2005-05-02T03:01:42'
  content: 'I do totally agree with you Cedric. I tried to learn Pyhton several times (the first one was around 1998), but I failed each time.

    I don''t like the block-by-indentation, I can''t understand the self stuff (and it''s funny to see the explanantion for self presence in the FAQ), and I do not like when the motto is something like "There''s only one way to do it" .. My way is perhaps not the same that some Python Gurus ...

    What I also do not like is that I perceived (but perhaps I''m wrong) some kind of aggressivity from the Python communauty as soon as someone says that  Python is not the most OO language or has some inconsistencies.

    What makes me laugh also is the incorporation of the Ruby block paradigm in one of the latest PEP ... after so many Pythonist said me that there''s nothing interesting in Ruby once you know Python, it''s quite .. funny ;)'
  replies: []
- id: 3563
  author: Gheorghe Milas
  date: '2005-05-02T10:11:45'
  content: '"There''s nothing interesting in Ruby once you know Python"

    That''s not the point.

    Yes we should keep learning new languages because they help us keep an open mind.

    However committing to a language for production is usually a different story.

    It''s not only about the language, is also about the libraries, community, support, availability ... lets say maturity.

    If it''s about that, then why not stay with Java/C++/VB/C#. Well is about the language too.

    I played (vaguely) with Ruby a few times, sometime to say gee that''s nice, but then I usually quickly came up with

    solutions in python not very far from Ruby''s way.

    If I were to go to another language tomorrow I may chose Ruby instead of Boo, and I would probably definitly chose Boo

    instead of IronPython.

    I can''t speek about next year.

    There are many things to keep under considerations for many aspects of someone''s life and many time they fail

    to appear in discussions. That said, polemics may quickly become rants or whatever. My opinion is that if we were to

    really be able to understand someone''s point we would usually not end in rants. More "paradoxically" said

    we don''t love anything until we already do.'
  replies: []
- id: 3564
  author: German Arduino
  date: '2005-05-04T03:22:37'
  content: 'I was reading this interesting talk about languages and I''ve see also several technologies mentioned (as   Prolog, Lisp, etc) but I''m wonder why too many people don''t consider the possibility of work with someting more than a language: I want to say "an environment" who has a language: as Smalltalk.

    Smalltalk is real object technology, not only object "oriented".

    Well, only a comment (and sorry by my bad English, I''m Spanish native speaker).'
  replies: []
- id: 3565
  author: Angsuman Chakraborty
  date: '2005-05-05T05:21:28'
  content: '> it is at once the most learnable, and most scalable language on the planet

    When will people stop getting religious over languages?

    BTW: Can you please remove the displayed email from my  last comment. I already get lots of spam as it is.

    PS. The comment form do not display an option to input URL (otherwise it shows the email in the post), unless I preview. At that point I have to enter CAPTCHA again. Wondering if this could be addressed :)'
  replies: []
- id: 3566
  author: ''
  date: '2005-05-08T16:16:04'
  content: '"So Python tried to adapt and started to incorporate a mishmash of features from various origins."

    You misspelled Java.'
  replies: []
- id: 3567
  author: ''
  date: '2005-07-25T03:15:38'
  content: Yo, Cedric I find this entertaining and all, but where's the beef?
  replies: []
- id: 3568
  author: John Rogers
  date: '2005-08-04T09:11:33'
  content: Lately I have been reading some blogs about the relative merits of various scripting languages. I see many performance comparisions and debates made between Python, Perl, TCL, Ruby and Java. However, I cannot remember even one instance where Euphoria was included. I would like to know why the Euphoria programming language never seems to get considered as a viable contender in any of these discussions.
  replies: []
- id: 3569
  author: Walt Hucks
  date: '2005-10-23T11:02:12'
  content: 'John:

    Euphoria?  Have you tried it?  I''d rather use REBOL, instead of Euphoria.  Yuck!'
  replies: []
- id: 3570
  author: exposed skin care
  date: '2006-10-04T23:35:10'
  content: big thank
  replies: []
- id: 3571
  author: Rich Katz
  date: '2007-08-23T18:43:53'
  content: 'Cedric,

    With regard to comment 2, there are, I believe, only two semantic meanings of nr in the Python version.  Here they are with the meanings divided between variables m and n.

    for m in (n for n in xrange(0,10) if n%2==0): print m

    m is the reference variable of the outer "for" which is assigned the value of inner expression.  n, is the result of the inner generator expression beginning (n...)  and thus consumes each n in the generator expression itself.

    I liked a number of the comments you received, especially - Ian Bickings suggestion to use a name "even" for the generator expression. He called it more Pythonic.  In fact it''s nearly 1/2 way to Haskellian (Haskeltonian?).

    To go further, you could also return the generator as a function from:

    def evens (*requiredrange): return (nr for nr in xrange(*requiredrange) if nr%2==0)

    followed by:

    for e in evens(0,10): print e,

    The function evens(requiredrange) is now actually a range generator function that takes the same set of arguments as range does.  As such, it provides a playful new benefit:

    for e in evens(0,50,3): print e,

    0 6 12 18 24 30 36 42 48

    for e in evens(0,100,7): print e,

    0 14 28 42 56 70 84 98

    With regard to the Python "for in" syntax, it hardly seems obtuse.  It''s essentially the same syntax as the Java (JDK 5) Pizza "for each" syntax (the one for which you wrote the J15 translator), designed by Martin Odersky and Phil Wadler.

    HTH.

    Regards,

    Rich'
  replies: []
- id: 3572
  author: Commiar Bush
  date: '2007-12-01T10:21:26'
  content: Has Anybody ever used the environment "Hot-Jizz" it's interface is essentially the same as any other programming environment by using your hand. But in rare instances you may fall upon a partner who can help you "Programmmmmmme"
  replies: []
- id: 3573
  author: Sally B.
  date: '2007-12-01T10:23:15'
  content: Hahaha cedric remember masterbating on cam in a internet chatline hahahahaha
  replies: []
- id: 3574
  author: Eric
  date: '2008-07-08T09:53:55'
  content: Arrogant comme un blog de Fran
  replies: []
---

Unsurprisingly, there have been quite a few reactions to my small Python rant earlier.  It's good to see people stand up for their language, that's what makes our profession so unique.

Here are a few comments and my reactions to them:

> Complete object orientation was built in from the start 

That's not true, see below for more on Python's history.

> It's true that it allows you to mix object-oriented and script-style code but I really don't see what's wrong with that, since you get the best of both worlds. 

Not always.  I think languages such as Ruby and Groovy definitely enable both types of programming and offer the best of both worlds, but Python has made a lot of compromises when adopting various styles of programming, and my experience with Python has been less about choosing between two great alternatives than picking the least of two evils.

> By the way your code has 4 "it" and I'll let you count the different semantics to yourself. 

I already did:  there are two.  One to declare the parameter and the other one to use it inside the closure.  And that's how it should be.

> I think it's just a matter of what you're used to. For me as a Python and Java programmer, the Ruby code you show looks just as unnatural and weird as the Python code looks to you.  But maybe that's just because I'm not used to seeing Ruby, just as you're not used to seeing Python code. 

Fair enough.  For the record, I read a couple of Python books and I do see a decent amount of Python code every day, so I'm certainly used to reading it (not as much writing it, though).  But my dislike for Python is caused by more than the odd `for` syntax I commented on in my previous entry, but let me elaborate on that.

C offers a `for` loop similar to Python's (a bit less powerful actually) which is so flexible that pretty much any language that appeared after C provided a similar construct.  Having said that, I still think that C is more elegant than Python because it's more consistent.

The problem with Python is that it came out at a time that turned out to be pivotal in software history.  The software world was slowly realizing the power of several programming paradigms (imperative, functional, declarative, etc...) and set out to explore them all through different languages (C++, Modula, Eiffel, Haskell, Prolog, etc...).  Python started as a very basic script language that mimicked the already bare-bone syntax of C while doing away with most of its type safety (a layer was pretty thin to start with).

Even though object-oriented concepts were slowly emerging as a must-have for industrial software programming, the idea of including them in Python made as much sense as it would to add templates to Ruby, so creating Python without any of these advanced features made perfect sense (Python didn't even have support for `static` initially!).

But things changed and some of these advanced features turned out to be not only necessary but essential for any language that pretended to be of industrial caliber.  So Python tried to adapt and started to incorporate a mishmash of features from various origins.

Unfortunately, Python wasn't designed to grow.  It didn't follow the recipes laid out by Guy Steele's seminal paper _[Growing a language](http://homepages.inf.ed.ac.uk/wadler/steele-oopsla98.pdf)_, and as such, the inclusion of all these features took a heavy toll on Python's syntax (sometimes acceptable) and Python's consistency (much worse).

For example, `static` was retrofitted in Python and must now be achieved like this:
    
    
    def say_hello(cls):
    print X.message
    say_hello = classmethod(say_hello)
    

That's right:  not only do you make a method `static` by invoking a magic function on it, you actually need to reassign the method to the value returned by this magic method.

I'm sure there are very good technical reasons for this kind of wart, but that's exactly the problem I have with Python:  these reasons were obviously motivated by the complexity that Guido van Rossum had to face in order to incorporate these new features, and not really aimed at making the language simpler for Python users.  I can't imagine there would be any other reason (readability?) than Guido having a problem adding a keyword to his language, or coming up with another less awkward syntax (Ruby does it in a creative way, but I still prefer the `static` keyword approach).

And this was just to add `static`.  Retrofitting more complex object-oriented language features to Python has been even more problematic, and the ubiquitous and useless `self` keyword is just the tip of the iceberg (take a look at how Python implements `private/protected` or how accessors work).

The same can be said about Python's mixed support for features coming from the functional world.  Generators, lambdas, closures, continuations, etc...  are all implemented with strange restrictions that make guessing the right behavior or syntax almost impossible (to such an extent that some of these features are actually being considered for removal, which is probably the worst thing you can do to a language).

If you are interested in more details about my feelings about Python, here are a [few](http://www.jroller.com/page/cbeust/20030504) [older](http://www.beust.com/weblog/weblog/archives/000217.html) [entries](http://www.beust.com/weblog/weblog/archives/000181.html) [I](http://www.beust.com/weblog/weblog/archives/000182.html) [wrote](http://www.beust.com/weblog/weblog/archives/000015.html) on [this](http://www.jroller.com/page/cbeust/20030526) topic.

Anyway.

At the end of the day, elegance is something that just cannot be argued because everyone has different criteria to define it.  Throughout the years and after studying quite a few languages, I have reached a point where languages need to possess a certain set of features in terms of syntax and semantics to get my attention.  Over and over again, I have tried hard to like Python because, frankly speaking, its momentum is undeniable.  But it just never clicked, while my attraction for languages such as Lisp, Java, Ruby and more recently, Groovy, happened within a matter of hours of tinkering.

Wherever your preferences lie, keep your mind open and learn at least a new language every year.  It will make you a better developer.
