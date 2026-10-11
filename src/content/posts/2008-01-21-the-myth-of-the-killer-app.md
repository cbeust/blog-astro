---
title: The myth of the Killer App
date: '2008-01-21T08:20:21'
slug: the-myth-of-the-killer-app
categories:
- Java
comments:
- id: 7099
  author: Rich
  date: '2008-01-21T08:59:49'
  content: Sorry, I'm being picky, and I'm not trying to pick a fight or be a troll or anything, just making a silly remark! In response to "Who would have guessed back then that Java would become the de facto standard on the back-end, sharing an equal footing with .Net in delivering millions of transactions every day to users around the world?" - surely nobody, because .Net wasn't around in '96? :P
  replies: []
- id: 7100
  author: Erik Engbrecht
  date: '2008-01-21T09:49:35'
  content: 'What about Apache Tomcat?  Sure, that''s not really an "app," but I bet people would call RoR Ruby''s "kill app" and RoR isn''t an app, either.

    Think about it.  Do you really think Java enterprise programming would be where it is today if it wasn''t for Tomcat?'
  replies: []
- id: 7101
  author: Scott
  date: '2008-01-21T10:07:22'
  content: 'I think the rest of this story is that the killer app also had to be "backed" by some entity. With Windows, there was trust (however misplaced) by corporations in Microsoft that made it ''ok for decision makers purchase large quantities of Windows and Office. IIRC, there was something called GEM and something else from Logitech that much more stable, user friendly and less resource intensive than the first 3 version of Word and Windows.

    From where I stood around 1998-9, for Java, the "killer" combo was IBM/Websphere/WSAD. Even though the first versions of Websphere were buggy as hell, enough of it worked (along with BEA and Scientific Atlanta??) that the decision makers in corporations felt that they go this direction trusting IBM''s support. WSAD/Websphere pulled the Java out of being just another niche language / environment and into the mainstream.'
  replies: []
- id: 7102
  author: Michael McLawhorn
  date: '2008-01-21T17:10:59'
  content: 'I think a killer app is like a movie blockbuster, it represents a marketing coup.  It doesn''t matter if it''s really useful or really works, as long as it gets attention.  And applets did do that for Java.  And EJBs did that for the enterprise.  The nice thing about these failures is that they forced other people to meet the failed promise of the original overshoot.  So even a failed ''killer app'' can be good for the larger ecosystem.

    Also worth noting, in the way of things, the worm has turned, and Applets and Rich clients may be becoming respectable again.

    Honestly, what I think the real driver of magic outcomes is, is the arms race.  The arms race between Microsoft and Sun led to both pushing hard and fast in a variety of markets, innovating and copying off each other as fast and hard as they could.  And who won?  Developers, developers, developers, developers.

    Whichever side you were on, technologically, huge leaps forward in terms of support occured.  And the Apache and Jakartas and the like came in behind and limited the ability to back into the ghetto of compatibility warfare.'
  replies: []
- id: 7103
  author: Carl Rosenberger
  date: '2008-01-22T03:27:06'
  content: 'Some of the next approaching killer apps:

    Systems that truely make use of multicore computers.

    No question, Scala is all set up to be a champion. It is statically typed, so it allows refactoring and working with big teams. It merges functional programming style with object-orientation. It comes with message passing. It runs on Java VMs and therefore it can go anywhere.

    If someone pumps a couple of millions into a really strong Scala Eclipse plugin, Scala will be wildly successful very quickly.

    Your Android team did a nice job at writing a full-blown VM and very strong Eclipse integration. If you would have been really courageous (and smart, and looking into the future), you could have chosen Scala as the language for Android.

    ...but I suppose there would have been no way to do this for political reasons for a platform that is supposed to "feel mainstream".'
  replies: []
- id: 7104
  author: ahmetaa
  date: '2008-01-22T04:32:56'
  content: 'Carl: Nobody would use Android if Google have used Scala. Plus It would take years to prepare the tools, and some more years to build the developer base.  They leveraged the Java language, libraries, IDE and tool support nicely. After reading comments like yours i am understanding how making business decisions is more than trying to plug just another "language" to everywhere. get real.'
  replies: []
- id: 7105
  author: Carl Rosenberger
  date: '2008-01-22T09:40:02'
  content: 'ahmetaa: I can prove you are wrong with "Nobody".

    I would have used a Scala Android. ;-)

    ...but I do understand business decisions a little bit, I even mentioned the concern in the last sentence of my post.

    I just felt like showing Cedric a mirror that he himself is sitting on one big killer app framework that can make a language mainstream.'
  replies: []
- id: 7106
  author: ahmetaa
  date: '2008-01-22T15:45:15'
  content: 'you can use Android with Scala, or some other people. it is still nothing comparing with the number of other developers.

    Here is another thing, Scala can be a nice language. no problem. but if the guys who wrote Scala would have the mindset of understanding business  -or having the intention of becoming popular- they would go with a near identical syntax with java the language. That is what microsoft(C#) and what groovy did to lure the Java developers. The current syntax of scala, like ruby is too alien to attract big number of Java developers. i dont want to start counting the problems with IDE and tool support. it''s performance also not on par with compiled Java Language code -yet-. Java is doing the job well in most cases, with its problems.

    And honestly there is nothing wow about the syntax of the Scala, if i want to use a real revolutionary language and syntax for the JVM or for parallel processing, Fortress would be my choice, not scala, groovy or ruby.. Once it is finalized, Fortress can challenge Scala easily.'
  replies: []
- id: 7107
  author: Grant Rettke
  date: '2008-01-28T07:29:06'
  content: Fame is fleeting and fickle. Replace "killer app" with "fame".
  replies: []
- id: 7108
  author: Javier
  date: '2008-01-31T05:57:33'
  content: '@ahmetaa

    Sure, I want my mixed language application to have for all languages the same syntax (and, of course, different semantics). Just to make my life interesting, I''d just change the file extensions and recompile ... because we know, the hard part of programming is getting syntax, right, it takes about 10 minutes ... The rest you can learn by trial and error, right?'
  replies: []
- id: 7109
  author: Javier
  date: '2008-01-31T07:05:40'
  content: '@ahmetaa

    Sorry for being so harsh but I think it has been pointed elsewhere:

    In Scala explicit typing is optional in most cases. Now, if you are a left-to-right writer and reader (if you are not, well, languages aren''t really designed either for non english keyboards ...). Would you put types as ''english'' modifiers (you know with all the volatile, static, protected, final ... mumbo-jumbo)? If the answer is yes, then I guess you also what varargs arguments in the first position in Java methods ...

    Or maybe you would not have to care also about variable names? As the full description of your item comes before it ...  Let''s see:

    this is a:

    @overridable @property @abstract volatile static  public (and by the way its type is Map,List>) a;

    Do you think the above declaration is The One And True WayTM? Why?

    Or maybe you have a syntax configuration for your favorite language in your favorite editor and want to use it with all languages?

    I''m sure you can find better reasons if you dig into the syntax of functional languages of the last 20 years ... Maybe Algol60''s syntax is not the only way.

    Or maybe you just  want it all, and all written in Java?

    A language supplies a different way of thinking and building, and not all things can be expressed easily by the old ways (inner classes as closures ...)'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/scenery1.gif)

An innocent [blog post](http://lambda-the-ultimate.org/node/2600) on Lambda the Ultimate has generated a storm of comments about the idea of a _killer app_ for programming languages. 

I'm sure you've heard this expression before, and the idea is very simple: it's an application which, in and of itself, will promote its infrastructure (the operating system, or the programming language or the framework it's built on) from obscurity to instant fame and de facto standard overnight. 

For example, one might say that Microsoft Office was Windows' _killer app_. Of course, this would be simplifying the equation somewhat since a lot of factors made Windows the success it is today, but you get the idea. 

While reading through these comments, I started questioning the very existence of the _killer app_ concept. Especially for programming languages. 

Let's start with Java. Does Java have a _killer app_? Did Java go through the transition "obscurity -> _killer app_ -> fame"? 

Back in the early Java days (circa 1996), there was one thing that made Java stand out from other languages. It doesn't mean that Java was more popular than these languages, nor that it was gaining momentum: it's just that it was attached to a particular concept that was unique to it and because of that, it received a lot of hype and was discussed heavily on Usenet and other forums. 

Do you remember what that _killer app_ was? 

Applets. 

Thanks to applets, Java was going to take over the world and redefine the web as we know it. 

We all know what happened. 

Applets never went anywhere, but Java had enough interesting properties that a lot of programmers started working with it in many areas, most of them never envisioned by any pundit at the time. Who would have guessed back then that Java would become the de facto standard on the back-end, sharing an equal footing with .Net in delivering millions of transactions every day to users around the world? 

Let's take another example: PHP. 

Does PHP have a _killer app_? 

None that I can think of. Of course, a lot of very successful programs and web sites are written in PHP (forums, blogs, etc...), but none of these can be considered "clinchers". Instead, PHP became successful quietly, discreetly, behind closed doors, while both programmers and the required infrastructures (massive support by Internet Service Providers) were being slowly achieved without anyone realizing it. To onlookers, it looked as if one day we woke up, and PHP was everywhere. But make no mistake: the process was continuous, slow and developed on a massive scale. 

A similar argument can be made for Javascript. 

The more I thought about it, the more I started wondering if the idea of a _killer app_ isn't a fallacy. Or worse: a kiss of death. As soon as a programming language or a framework finds itself in need of a _killer app_ , it has already failed and its proponents are just reaching and trying to save a product that they know is already slowly falling back into obscurity, as the rest of the world inexorably percolates toward the next big thing, one that makes them truly more productive and that doesn't need bigot advocates to sell. 

Maybe what we are really looking for is not a _killer app_ but _killer app**s**_. Not one defining product by which all the others are measured, but a multitude of tiny ones which, individually, don't really deserve any particular mention, but when put together, create a comfortable ecosystem in which programmers thrive, are productive and enjoy working in. 

Now, let's see if we can find the Next Big Programming Language using this criterion...
