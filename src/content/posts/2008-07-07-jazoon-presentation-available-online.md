---
title: Jazoon presentation available online
date: '2008-07-07T15:23:46'
slug: jazoon-presentation-available-online
categories:
- Java
comments:
- id: 7483
  author: Bill Kress
  date: '2008-07-07T18:42:23'
  content: 'I''ve been thinking lately about the nature of code and what is really good or bad about coding on a large/ongoing project (like ALL the projects I seem to end up on).

    It occurs to me that "Concise" has almost nothing to do with how long a project is going to take.

    I came to this conclusion after considering how quickly I could retype any of the projects I''ve worked on.  Less than 1/100 of the man hours are spent typing in the end--much less.  (Look at your entire code base, figure out how long it would take you to re-type it from a print-out.  That''s your typing time.  Compare to how many man-years it took to develop that codebase.)

    From this point of view, quite a few things change.  Pair Programming and testing make a bit more sense and "Concise" becomes a non-measurement.

    So what can a language do to improve the development time?

    Every time you have to think out a concept or fix something, it takes a given amount of time.  I think of this like sorting.  Anything done once might take a few hours or a day, but then it''s done.  Over the length of any project I''ve been on, a single man-day is insignificant. So Just solving a problem once factors out. DRY code is therefore important, but not really a language consideration--most languages allow you to be DRY if you''re good enough.

    On the other hand, getting stuck on tricky syntax happens repeatedly--sometimes for one person, sometimes for each person on the team.  There are a few of these stumbling points in Java: Exception syntax, inner classes, Iterators, generics, etc...  All these stumbling points have something in common: Syntax.  Either unique (exceptions, inner classes, generics) or hard to remember (like iterators).

    You get used to oddball syntax, but the more instances of it that you have in your language, the more likely each member of your team is to waste time when they hit that point.  Ruby has a LOT of syntax.

    The other thing a language can help with is isolation.  Java does a pretty good job.  Ruby does not (Any class can modify the operation of an already tested and running class--eek).  OO is also good for isolation.

    Since I have started seeing code this way, I just look for a language that lets me write, factored, readable, compartmentalized code in the most minimal syntax possible.

    When you look at it this way, the current Java is about as good as you are likely to get. (Except, perhaps, for the obviously huge syntax addition caused by Generics)

    (This really just applies to coding a medium-sized or larger project, and not trying to get a web site up in 3 days, heavily-threaded high-speed tasks or giving programmers new toys to play with--those are problems with other linguistic requirements that Java may or may not meet)'
  replies: []
- id: 7484
  author: Daniel Spiewak
  date: '2008-07-07T19:32:57'
  content: 'Slide 27: you have an error in your Ruby syntax.  The example you gave will not work because Ruby does not support the "space syntax" for method invocation (it''s a pity).  The correct syntax is:

    employee.promote

    Parens are optional, not the dot.

    Slide 39: Groovy isn''t really statically typed at all, it just allows type annotations for documentation purposes and ends up failing at runtime.  To quote Ricky Clarkson''s favorite example:

    int abc = "123"

    The above works at compile time, fails at runtime.  Type inference is just as inapplicable in Groovy as it is in Ruby, it just seems like it has it due to the sometimes on/sometimes off type annotations.

    Oh, and I still disagree with you that case classes break encapsulation, but I guess that''s an argument for another time.  :-)  Also, your argument against implicits is a bit contrived.  You can make the same case against any language feature: misuse it and it sucks.  There''s a fair bit of discussion on just this point here (in the comments): www.vector-seven.com/2008/07/05/implicits-for-the-masses

    Other than that, interesting presentation; I wish I had seen it.  :-)'
  replies: []
- id: 7485
  author: yartz
  date: '2008-07-07T21:19:14'
  content: 'Not wanting to nag or to start a flamewar, but your checklist for your dream language, i.e.

    Syntax derived from C/C++/Java

    Statically typed/optionnaly dynamic

    OO

    Functional features(closures, method objects)

    Reads like a feature list of C#3. Well, no dynamic typing (but it may rear its ugly/pretty head in the next instalment) but var goes a long way to make type inference forget about the absurd redundant blabber of anally statically typed languages.

    And as for closures, it''s there since C#2 (anonymous delegates in C#2, lambda expressions in C#3), methods are first order functions, and the syntax, well, is a direct rip-off from Java (with a few warts removed).

    C#3 has become a functional joy to code in. It can get a bit weird sometimes, but it''s a long way now from a me-too semi-colon rip-off.'
  replies: []
- id: 7486
  author: yartz
  date: '2008-07-07T21:28:01'
  content: 'Your Ruby example:

    zippedFiles =

    Dir.new(dir)

    .entries

    .sort

    .reverse

    .delete_if { |x| ! (x =~ /gz$/) }

    could be written like this in C# 3

    var zippedFiles =

    Directory

    .GetFiles(dir)

    .OrderBy(x => -x)

    .DeleteIf(x => x.IsMatch(".*?gz$"));

    with a couple of extension methods thrown in.'
  replies: []
- id: 7487
  author: Daniel Spiewak
  date: '2008-07-07T22:20:48'
  content: 'Sounds like fun.  Here''s the Ruby example in Scala:

    val zippedFiles = new File(dir).listFiles.toList.sort(_ > _).filter(_ match "gz$")

    A bit of implicit magic could make it *much* shorter, but I figure this is probably good enough.  Incidentally, I agree that the underscores are pretty darn cryptic, but they do make the code shorter and that''s essentially what I was going for.'
  replies: []
- id: 7488
  author: Daniel Spiewak
  date: '2008-07-07T22:26:13'
  content: 'For laughs, here it is with implicit magic (useful stuff, not just conversions for the sake of conversions):

    implicit def str2file(str: String) = new File(str)

    implicit def arr2list[T](arr: Array[T]) = arr.toList

    implicit def regexpOp(str: String) = new {

    def =~(regexp: String) = str match regexp

    }

    // ...

    val zippedFiles = dir.listFiles.sort(_ > _).filter(_ =~ "gz$")'
  replies: []
- id: 7489
  author: Peter Becker
  date: '2008-07-07T23:15:18'
  content: Ever considered writing that new language you'd like to have? I feel similar about the current state of languages, but somehow writing not only the language spec and the compiler, but also all the IDE tooling seems to big a task for just one man. And since I personally would find it hard to go back to writing code without IDE support I feel I can't be bothered to even start my own language. But I can imagine that Google has a few more people who feel like us, maybe even enough to create such a project.
  replies: []
- id: 7490
  author: tcmaster
  date: '2008-07-08T13:47:20'
  content: 'C#2 has been a good improvement. I haven''t tried c#3 yet. But reading code like

    var result = obj.PerformAction();

    scares me. Ok, you save some time for typing, but reading code because a pain. That''s something I dislike.'
  replies: []
- id: 7491
  author: yartz
  date: '2008-07-10T06:56:29'
  content: 'It''s type inference. It''s great for DRY (

    Foo f = new Foo();

    becomes

    var f = new Foo();

    And for types that are not that easy to know beforehand what they really are (and whose type you don''t care as long as you can enumerate them) or plainly impossible to know (for anonymous types).

    For better or worse, C# is still stubbornly statically typed, it''s just relying on a less braindead compiler to infer types. And a good IDE shows the underlying type in the editor.'
  replies: []
- id: 7492
  author: Paul Beckford
  date: '2008-07-11T13:28:56'
  content: 'Hi Cedric,

    Interesting slides. There is one important consideration that is absent from your assessment:

    The Problem.

    Depending on the problem you are trying to solve different languages have strengths and weaknesses.

    Where we agree is that Java has a future, in the same way that C and C++ has a future. The question that you have avoided though is whether Java is best suited to the types of problems to which it is being commonly applied today.

    Lets take the web as an example. I understand how "static typing" appeals to your need to feel safe and sound, but how does an HTTPRequest where everything is encoded within a single String fit in here? At best you can trap type errors when decoding bits of the string into variables, data structures etc, but this will only happen at runtime, so bang goes your compile time type checking.

    The last time I tried to debug a JSP page static typing didn''t help much :) Another thing that is absent from your wish list is late binding. So back to my web application. Since I will only know whether my web page works when I run it, I will want to make changes to my code and resubmit my a new web request as quickly as possible. So what I really want is hotswapping. Well, this sorts of works sometimes in Eclipse, if I don''t change too much, but to be sure I should really stop and start Tomcat. What a pain, and what a waste of time :)

    Lastly, I''d rather not be messing around reading from sockets, parsing Strings and orchestrating request/response flows to a browser, so I decide to use a framework to do all this for me. The problem is that due to the poor reflection capabilities in the language and missing features like closures that should have been there in the first place, my framework developers hands are tied. So instead of providing a DSL specific to the web domain as he would like to have done, he is stuck relying on XML and Annotations as a way of extending Java closer to the problem domain.

    Now you''ve got a PhD so these deficiencies could not have missed your attention, which means that you must place less value on them the the supposed benefits of the features that make it to your wish list. So we are left with is personal preference and with the advent of dynamic languages and Scala we now also have personal choice.

    Dan Ingalls has been working on a rich client that runs on the browser and is written totally in Javascript. It is called the "Lively kernel". If you''ve got a Mac you can see a demo of it which runs on Safari (Its at sSun Research). Dan points to the advantages of using a proper client rather then relying on Strings (HTML), he mentions that the biggest barrier to adoption will be that mainstream programmers will need to adjust to a new programming style suited to dynamic languages like Javascript. He is right.

    So people actually feel more comfortable manipulating Strings then using Javascript? So what is an objective assessment of what is going on here? For me the market speaks for itself. Web 2.0 is booming, populated by small startups, the vast majority of whom have selected dynamic languages by choice. With an open playing field and educated customers then markets do actually work. In terms of winning web 2.0 market and mind share Java isn''t in the race.

    This could be due to the brashness of youth, or perhaps these young guys are less risk adverse and willing to make an assessment based on the merit alone rather than fear? Only time will tell :)

    PS. Nice presentation, but I couldn''t resist presenting the other side of the argument :)

    Paul.'
  replies: []
- id: 7493
  author: Paul Beckford
  date: '2008-07-13T03:55:05'
  content: I have made an additional response here
  replies: []
- id: 7494
  author: Paul Beckford
  date: '2008-07-13T10:51:44'
  content: 'OK. So html is not valid.

    Here is the link:

    h t  t p://pab-data.blogspot.com/2008/07/dynamic-languages-fud-continues.html

    (Remove the spaces in h t t p because this site doesn''t allow urls either).'
  replies: []
- id: 7495
  author: john wang
  date: '2008-08-14T08:38:03'
  content: 'Yes i agree the original java syntax is minimum and flexible... with the introduction of annotations and Generics, the syntax even jdk API becomes not intuitive any more.... and it is ugly and contaminated the simplicity and beauty of java...

    java should open itself, in several ways:

    1. it can open the java compiler or runtime stack, or provide interfaces, so there is still a way to do dynamic weaving.

    2. in java.lang.Object, add in AOP methods, like before(), after() etc...

    3, if not, these methods can be added in the same way  like the ones readObject(), writeObject().... where were they BTW?

    4. Look at CGLib enhancer, the way it does is simple and powerful... why cannot jdk do it this way?

    cglib.sourceforge.net/apidocs/index.html

    5. provide a mechanism to be able to find out the reference object of "this" object in runtime... how about call it "that"? so "this" and "that" can dynamically interact essentially function like multi inheritance...'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/jazoon.png)

The presentation I gave at Jazoon is now [available online](http://docs.google.com/Presentation?id=ajk7j7kqvmqd_75c4mq9vgn). It suffered a bit from the converstion to PDF, but it's still readable. Note that I tend to write slides with less text and bigger fonts, so a lot of the content is not captured in these slides, but this will be enough to give you an idea. 

In this presentation, I gave a fast and furious tour of the programming languages that you have seen on front pages recently, some of which are seen as potential successors to Java. I also make the point that despite these claims, I don't see any language dethrone Java for a very long time. My prediction is that Java will keep cherry picking the best features from all these languages and continue to adapt to meet the challenges of tomorrow, either at the language level (unlikely to change much) or via frameworks (much more likely).
