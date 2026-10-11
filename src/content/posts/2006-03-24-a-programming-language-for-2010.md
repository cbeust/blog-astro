---
title: A programming language for 2010
date: '2006-03-24T16:44:10'
slug: a-programming-language-for-2010
categories:
- General
comments:
- id: 4969
  author: Lachlan
  date: '2006-03-25T06:01:56'
  content: 'Very interesting stuff, makes a lot of sense.

    The idea that the compiler catches null pointers, array index out of bounds, etc is in start contrast to the rise in popularity of more dynamic languages such as Ruby and Python. In such languages the compiler does far less checking, and almost all statements are potentially unsafe at runtime.

    Java-heads may be interested in "Nice". It runs on the JVM and incorporates some of the ideas from this presentation. Indeed, my favourite feature of Nice is that it eliminates NullPointerException :-). Unfortunately, the lack of docs and tools made it pretty hard for me to use it in my day job. http://nice.sourceforge.net/.'
  replies: []
- id: 4970
  author: Laurent Simon
  date: '2006-03-25T09:07:39'
  content: I agree with Lachlan. Nice is a safe and powerful language. I always ask myself why Java did not include similar features ?
  replies: []
- id: 4971
  author: Taras Tielkes
  date: '2006-03-25T10:52:55'
  content: 'There are a couple of IDE excensions for static nullability checking in the Java space:

    http://www.jetbrains.com/idea/documentation/howto.html

    There''s similar work being done for Eclipse.'
  replies: []
- id: 4972
  author: Dalibor Topic
  date: '2006-03-25T12:49:22'
  content: Over here (since I am in Saarbr
  replies: []
- id: 4973
  author: Dalibor Topic
  date: '2006-03-25T12:49:39'
  content: Over here (since I am in Saarbr
  replies: []
- id: 4974
  author: nono
  date: '2006-03-25T15:06:01'
  content: 'Hi Cedric and all,

    I''ve still got letters from Tim Sweeney dating back to the early days of Epic Megagames (when Jack Jazzrabbit was in development, way before the first line of code of the first Unreal had been written and even before everybody had Internet access).

    :)

    One of my "all-time Tim favorites" is a paper on how the game state replication was done in Unreal, written in 1999 by Tim Sweeney.  It is still good today and was just plain visionary back in the days.

    You didn''t emphasize on something very important he''s saying now: we''re moving to more complex systems and... Type inference doesn''t scale.

    Funny how everybody who responded so far talked about Nice, JML, Jetbrains''s annotations.jar (@NotNull/@Nullable), etc.  There are obviously people who want "more control".  And I''m one of these people (I do use IDEA 5.x/JDK 1.5 and @NotNull is a real time-saver): the stricter the limit you put on your abstract data types, the easier you make it for the compiler to "proove" that the various components will act as their contract say they will, the sooner you catch bugs, etc.

    You didn''t mention it directly but he also talks about the benefits of referential transparency ... (one obvious advantage being to allow the use of memoization [yup, without an ''r''], one other advantage being to help the compiler "proove" the correctness of some part of the program).

    I side with everybody who recommends functional programming (and Joshua Bloch hints that it is possible to program in Java in a more functional way that what is usually seen, Effective Java item 13).

    And I side with everybody who''s horrified by the horrible abuse of exceptions (the glorified goto''s) in Java and C#.

    It is really good to see his hard data backing his statements on all the defects Java has and... terminating the presentation with a full page devoted to one of Haskell''s main flaw: type inference doesn''t scale.

    I hope that the "next mainstream programming language" will ressemble the best of several worlds (I''ve got my idea as to how it should look like... And I''m more than convinced it is *very* similar to Tim Sweeney''s view).

    Really a good read, thanks for that nice blog entry,

    (I''ll go check those Spec# slides now...)'
  replies: []
- id: 4975
  author: Jason Carreira
  date: '2006-03-26T00:23:29'
  content: 'Check out Scala:

    http://scala.epfl.ch

    It''s got a lot of things inspired by Haskell, with a nicer looking syntax and stronger typing than Java, although it does provide for type inference... I''m not sure how type inference works in Haskell, but in Scala it''s done by the compiler, so I''m not sure how that is supposed to break at runtime...

    It looks like an interesting combination of OO and functional programming so far... and it runs on the JVM or the .NET CLR.'
  replies: []
- id: 4976
  author: Dalibor Topic
  date: '2006-03-26T03:27:07'
  content: 'The most exciting thing for me about spec# was that the underlying theorem prover, the intermediate language and all the pretty nice machinery to prove the properties worked transparently, on the fly, without the IDE user noticing (or having to know) anything about the underlying ATP, it''s syntax, logic, proving programs correct, etc.

    It was a bit like DHH''s ROR demo: call a method from the standard class libraries, finish typing, a red squigly line would appear almost insabtly and a pop up box would tell you that you may end up violating a specific contract (for example your array index going out of bounds for a substring method), type some more, another squigly line ... until your specifications and your code matched. Proving program properties beats unit testing, in my opinion. In particular having the fun part (actual proofs) being done automatically and quickly in the background.

    cheers,

    dalibor topic'
  replies: []
- id: 4977
  author: Stephan Schmidt
  date: '2006-03-26T12:10:51'
  content: Wanted to read the Spec# slides  but I wasn't able to. Some people still think PPT is a universal exchange format :-(
  replies: []
- id: 4978
  author: Laurent
  date: '2006-03-27T06:36:54'
  content: 'Definitely nice reading.

    However the example on circularity (page 36) is really not convincing.  He should have put some real world example.

    An argument I don''t get is that he goes from execption everywhere to exception nowhere (except where explictly asked for).  There are some cases where this can''t be avoided:  what about data read from a file a user can change (.ini comes to mind)?

    I also don''t agree with slide 61, The Coming Crisis in Computing:

    - I don''t think we will get 20 cores each with 4 way hw threads by ''09;  look at AMD and Intel roadmaps...  Anyway multi threading will expand, though probably not as symetrically.

    - hardware is already reaching 1 TFlops (see PS3 Cell)

    - GPU''s already have general computing capabilities though it''s not that easy to get it (see http://www.gpgpu.org/ or recent announcements by NVIDIA and Havok).

    A side note is that PS3 hardware is probably a hint at what the future looks like, much more than XBox 360.  I really think the direction is heterogeneous computing.

    BTW HLSL is not a scripting language, it is DX9 shading language (more or less the same as NVIDIA''s cg).'
  replies: []
- id: 4979
  author: '&#38500;&#23576;&#22120;'
  date: '2006-03-31T00:30:36'
  content: '&#38500;&#23576;&#22120;'
  replies: []
- id: 4980
  author: -L
  date: '2006-04-07T01:06:46'
  content: 'I find it strange that much of the language features he calls have been available to those programming in Ada since the early 80''s yet there is no mention of Ada. Ada has high-level concurrency support (rendezvous, protected objects, suspension objects), strong typing, real arrays, support for object oriented programming etc.

    For example the Transform method on page 31 of the PDF would be straightforward to express in Ada such that all the requirements were satisfied.

    What Ada is missing though is lazy evaluation (although the compiler will warn about uses of uninitialized values) and C-like syntax (Ada is a far descendant of Algol family, thus to most people it looks like Pascal). The verbose syntax, however is justified since the user-defined types define contracts, and is therefore not really a burden.'
  replies: []
- id: 4981
  author: lol
  date: '2006-04-07T03:59:45'
  content: Isn't this "homegrown" HLSL language made by a small garage company called Microsoft?
  replies: []
- id: 4982
  author: lol
  date: '2006-04-07T04:00:07'
  content: Isn't this "homegrown" HLSL language made by a small garage company called Microsoft?
  replies: []
- id: 4983
  author: Bobby Fellon
  date: '2006-05-22T00:47:33'
  content: I have a question to the people posting on this thread, if someone can kindly answer, what does it take to have a job in the game programming industry or even programming, I would just like to understand what qualifications did you get, what did you have to learn to know the stuff you know?
  replies: []
- id: 4984
  author: Rene Dudfield
  date: '2006-05-30T17:33:39'
  content: 'They use C++ with SIMD intrinsics.  This is basically inline assembly.

    Cheers.'
  replies: []
- id: 4985
  author: Jim McCoy
  date: '2006-05-30T22:27:03'
  content: 'If anyone is looking for a language that offers most of what is asked for here and doesn''t suffer from the original sin that will end up strangling some of the suggested JVM/CLR variants, take a look at Erlang.

    _Strong_ concurrency support, almost purely functional (you can create side-effects by using what is known as the process dictionary, but this is discouraged), very nice fault-tolerance and reliability features, hot-swappable code, and lazy evaluation.  It even offers a shell-like interface so you can play around with bits on the fly.

    As far as which language will end up being "hot" in five years due to the requirements stated in the original article, I am betting on either Erlang, OCaml, or Haskell.  While I personally favor Erlang I think that OCaml is probably the leading candidate in this group at the moment...'
  replies: []
- id: 4986
  author: Wouter Lievens
  date: '2006-06-07T07:13:37'
  content: 'To me this sounds pretty similar to what the guys are Intentional Software are saying.

    http://www.intentsoft.com/

    I''ve also read a few Martin Fowler articles that express similar ideas. And before that, it''s hit me as well independently: we don''t need more run-time dynamicity, we-need compile time dynamicity. The ability to extend your language without losing early checking. Design contracts, not just on method entry and exit points, but on any language element (from expressions to classes to packages) is what we need.'
  replies: []
- id: 4987
  author: justasecond
  date: '2006-06-21T11:54:04'
  content: '"No languages today capture integers correctly". Err...Delphi/pascal has integer subranges and can enforce range checking.

    var i : 1..3 ;

    is a valid declaration.'
  replies: []
- id: 4988
  author: Stefan Scholl
  date: '2006-06-22T11:15:37'
  content: 'Haskell is fast enough: http://shootout.alioth.debian.org/gp4/benchmark.php?test=all&lang=all'
  replies: []
- id: 4989
  author: simon
  date: '2006-06-23T01:35:42'
  content: 'Qi [http://www.lambdassociates.org/] would be another interesting alternative with it''s Turing-equivalent type notation.

    For example, interval arithmetic in Qi:

    http://www.lambdassociates.org/studies/study01.htm'
  replies: []
- id: 4990
  author: simon
  date: '2006-06-23T01:37:03'
  content: 'Qi (http://www.lambdassociates.org/) would be another interesting alternative with it''s Turing-equivalent type notation.

    For example, interval arithmetic in Qi:

    http://www.lambdassociates.org/studies/study01.htm'
  replies: []
- id: 4991
  author: Frater Plotter
  date: '2006-07-02T12:21:14'
  content: I'm sure as hell glad Tim Sweeney's ideas of language design have changed since ZZT-OOP. :) :)
  replies: []
- id: 4992
  author: Praca
  date: '2006-10-08T00:27:20'
  content: yea! fascinating presentation thanks for link!
  replies: []
- id: 4993
  author: Sam Bronson
  date: '2006-10-23T14:53:12'
  content: Heh, yeah, ZZT-OOP sucked! But it was a lot better than hardcoding the behaviour of one-of-a-kind things in the engine.
  replies: []
- id: 4994
  author: BUses
  date: '2006-12-04T18:16:34'
  content: This presentation is professional and to the point.
  replies: []
- id: 4995
  author: Futureboy
  date: '2006-12-15T02:16:59'
  content: '"All dereference and array accesses must be statically verifiable, rather than causing sequenced exceptions"

    Heh.  Call me when you solve that and the Halting Problem, which are equivalent.'
  replies: []
- id: 4996
  author: Former Game Programmer
  date: '2007-01-21T23:13:23'
  content: Sweeny doesn't like the Agol/Pascal/Modula/Ada family which is why there was no mention of Ada, which has nearly all the features Sweeny was talking about.
  replies: []
- id: 4997
  author: Former Game Programmer
  date: '2007-01-21T23:13:49'
  content: Sweeny doesn't like the Agol/Pascal/Modula/Ada family which is why there was no mention of Ada, which has nearly all the features Sweeny was talking about.
  replies: []
- id: 4998
  author: Former Game Programmer
  date: '2007-01-21T23:15:57'
  content: Sweeny doesn't like the Agol/Pascal/Modula/Ada family which is why there was no mention of Ada, which has nearly all the features Sweeny was talking about.
  replies: []
- id: 4999
  author: Sridhar
  date: '2007-03-26T02:47:16'
  content: 'Yeah, Futureboy, to take an arbitrary program in a non-safe language and analyze whether its dereferences/array accesses are safe is equivalent to the Halting Problem. But that''s not what Tim is proposing. He''s proposing the use of a safe language, in which, in order to make a dereference/array access, the programmer has to supply enough information to the compiler to prove the safety of that access (with an elegantly designed system, in many real-world cases, the compiler will have enough information to deduce the safety on its own, without extra information from the programmer beyond the same sort of code as he would typically write today. In such cases as that this will not be enough, the programmer will have to modify his code and/or provide some extra information for the safety proof, perhaps (in the easiest but least satisfying way) through wrapping the access in a run-time safety check).

    So Tim''s goals aren''t incompatible with the undecidability of the Halting Problem; he doesn''t want to take existing, potentially unsafe code and algorithmically analyze it for safety. He wants to ask programmers (who presumably have an idea in their head of why their code is safe) to code in a manner which makes this safety clear.

    Or, to just make it clear that Tim''s goals are entirely possible: algorithmically determining whether a C program has no null pointer dereferences is of course impossible, for Halting Problem reasons. But nonetheless, many serious general-purpose languages exist in which null pointer dereferences simply cannot happen in code which successfully compiles (e.g., in Standard ML).'
  replies: []
- id: 5000
  author: Leba
  date: '2007-05-29T11:45:25'
  content: '"By 2009, game developers will face'
  replies: []
- id: 5001
  author: sprezarki
  date: '2007-10-15T01:43:47'
  content: 20+ cores... damn! I`m a game addict and i can`t wait !
  replies: []
- id: 5002
  author: shawn
  date: '2007-10-22T13:21:40'
  content: The examples "type inference doesn't scale" I feel are misleading. Actually the problem is Haskell's implementation. He talks about wanting contract enforcement without exceptions, typing is one of the means to that end. Because Haskell doesn't autoconvert a string to an int in a "duck" type way, doesn't mean that it doesn't scale. The type-classing in Haskell would be a better example. That stuff is really useful, but when one needs it downstream in the process, it was probably not done upstream. Then the ouch sets in.
  replies: []
- id: 5003
  author: Ryanair
  date: '2007-10-30T06:36:20'
  content: 20+ cores - great result
  replies: []
- id: 5004
  author: Zutestrane
  date: '2007-11-11T15:28:02'
  content: Ok we have almost 2008, the newest CPUs have 4 Cores, could be 8 by 2009. Dont think it will be 20+.. btw. the Unreal 3 engine is overhyped, it doesnt look sooo good everybody says. The New Unreal Tournament screens arent that impressive from my point of view, what u guys say about that?
  replies: []
- id: 5005
  author: Zutestrane
  date: '2007-11-11T15:28:50'
  content: Ok we have almost 2008, the newest CPUs have 4 Cores, could be 8 by 2009. Dont think it will be 20+.. btw. the Unreal 3 engine is overhyped, it doesnt look sooo good everybody says. The New Unreal Tournament screens arent that impressive from my point of view, what u guys say about that?
  replies: []
- id: 5006
  author: narus
  date: '2007-12-19T10:04:12'
  content: 'How does Haskell aid in multiprocessing?

    Any comparison with Erlang, which extends to multiprocessing systems with no additional programming required?'
  replies: []
- id: 5007
  author: barbie oyunlar&#305;
  date: '2008-01-19T10:19:38'
  content: thnaks for the archives
  replies: []
- id: 5008
  author: Blog Directory
  date: '2008-01-20T19:04:02'
  content: I hope that in 2010, my computer can have amy core. Currently, i am still using old pentium 4 computer and it can't multi task. Hopefully by then, we are able to do many mutli task!
  replies: []
- id: 5009
  author: James burt
  date: '2008-02-27T23:21:45'
  content: I have just bought a quad core 6600 2.4ghz, it really is fast compare to me old pc. I can't imagine having 10 or 20 core!!
  replies: []
- id: 5010
  author: mike
  date: '2008-03-17T08:26:25'
  content: 'you said:

    By 2009, game developers will face CPU'
  replies: []
- id: 5011
  author: rabbit vibrator
  date: '2008-03-25T07:07:40'
  content: 08, the newest CPUs have 4 Cores, could be 8 by 2009. Dont think it will be 20+.. btw. the Unreal 3 engine is overhyped, it doesnt look sooo good everybody says. The New Unreal Tournament screens arent that impressive from my point of view, what u guys say about that?
  replies: []
- id: 5012
  author: Webdesigner
  date: '2008-05-08T07:43:44'
  content: I guess the next mainstream programming language is going to be Ruby! It definitely rules, check it out!
  replies: []
- id: 5013
  author: bilard
  date: '2008-05-24T02:38:42'
  content: Great and excellent article it
  replies: []
- id: 5014
  author: ankh47
  date: '2008-09-04T12:13:07'
  content: 'his example in the slide "type-inference doesnt scale" seems plain misguided to me.

    of course string is not an integer, you have to "process" the string to make it an int, even in c ...

    and if he is talking about an scripting lang. built on top of the statically typed core lang (ie. haskell), it''s the scripting lang''s task to know the right types and automatically cast the values so the programmmer doesn''t have to.

    would sb. enlighten me WTF was he trying to say/ how should i translate so it would make some sense ?'
  replies: []
- id: 5015
  author: voyance
  date: '2008-10-03T13:33:18'
  content: exactly
  replies: []
- id: 5016
  author: Ali
  date: '2008-10-20T00:44:18'
  content: Incredible efforts and work is put into creating a video game. Never acknowledged this until I saw the Powerpoint presentation
  replies: []
- id: 5017
  author: Voyance
  date: '2008-10-31T04:41:50'
  content: i'am agree with you
  replies: []
- id: 5018
  author: alex
  date: '2009-09-09T00:36:59'
  content: 'Lots students transpire the duty to qualified resume writers because they miss the ability to write a respectable resume so the cause why you

    need  to resume writer, but such customers like composer don''t do that. Thanks a lot for the topic. Very good topic about A programming language for 2010.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/sweeney.jpg)

I just came across a fascinating presentation called The Next Mainstream Programming Language (see links at the bottom).

It was made by Tim Sweeney, the founder of Epic, a video game company that created Unreal.

The title of the presentation is actually misleading, because the topics addressed by Sweeney in his presentation are not exactly about the next programming language but more a reflection on the programming requirements of the video game industry with hard number and real code.  What makes this presentation much more special than other typical talks trying to explain that _"performance is really important and you need to squeeze as much power as possible in your code"_ is that Sweeney has obviously thought a lot about the bigger picture behind these problems, and as a consequence, he offers some startlingly insightful suggestions to address these problems, mostly coming from...  Haskell.

That's right, Haskell.

Now, Haskell is not exactly known for its speed, but the concepts that it allows to express turn out to be a very fitting match for the challenges of video game programming. 

He breaks down game development in three distinct kinds of code, in increasing order of FPU usage:

  * Gameplay simulation:  can run with lower animation speed and typically involves C++ and a scripting language (0.5 GFLOPS).
  * Numeric computation:  low-level, high performance code, almost exclusively C++ with a strong functional slant (5 GFLOPS).
  * Shading:  generates pixels and vertex attributes, runs on the GPU, "embarrassingly parallel" and done in a homegrown scripting language called HLSL (500 GFLOPS).



They use no assembly language.  Ever.

Here are some of the other points found in this presentation:

  * No languages today capture integers correctly.  What he means is that languages do have integers, of course, but most of the time, users really want a very distinct subset of integers (iterating over a loop, bounding an array, verifying certain conditions) and that if these constraints were enforced by the language, a lot of bugs could be avoided.  
 
  * There is a wonderful correspondence between features that aid reliability and features that enable concurrency.  
 
  * Lenient evaluation is the right default.  
 
  * Purely Functional is the right default.  
 
  * The Java/C#
