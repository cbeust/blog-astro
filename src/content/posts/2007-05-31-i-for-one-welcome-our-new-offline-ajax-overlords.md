---
title: I, for one, welcome our new offline AJAX overlords
date: '2007-05-31T14:55:43'
slug: i-for-one-welcome-our-new-offline-ajax-overlords
categories:
- General
comments:
- id: 6765
  author: Guillaume Laurent
  date: '2007-05-31T16:17:15'
  content: 'Come on. Ajax may be an underlying layer, but it''s right underneath the surface of your app. As soon as you try to do something a bit off-path, you will get into ugly details, there''s no way around it.

    I can''t see it as liberating, rather it''s the ultimate kludge over a broken technology, in that it''s been pushed to fill a niche it wasn''t designed for (networked applications). I''m all with Werner, I hope for a quick death as soon as a better way to achieve this goal is found.'
  replies: []
- id: 6766
  author: Michael Neale
  date: '2007-05-31T16:32:59'
  content: '"ultimate kludge over a broken technology"

    - yes, I think thats the story of ALL technology. It only has to work enough and people use it.'
  replies: []
- id: 6767
  author: frank
  date: '2007-05-31T20:22:06'
  content: 'after working with ajax for a while both in bare-bones fashion and with all of the popular toolkits i still feel like i''m building a ship in a bottle every single time.  it''s not horrible, it''s definitely doable, but there are some real constraints and it takes a while to understand all of the techniques and how all of the various parts move together.

    admit it--this is not the technology we would have designed if we had a clean slate.  i''ll admit it''s the technology we have to work with and it can be used to great effect when used by great engineers.  sometimes the result is beautiful--oftentimes it''s an unbelievable tangle of multiple technologies.'
  replies: []
- id: 6768
  author: Guillaume Laurent
  date: '2007-06-01T01:21:30'
  content: '@Michael : No, I don''t think that Ajax is at the same level as OS/X Cocoa or even MS .NET for instance. For instance, try to get the position of the cursor in a text edition area. Look at how it''s done. Or look at how wysiwyg text edition is done.

    I agree with Frank, this isn''t what we''d have designed if we had a clean slate. I have much more faith into Flex to solve this problem.'
  replies: []
- id: 6769
  author: Michael Mahemoff
  date: '2007-06-02T06:17:12'
  content: 'I, for one, welcome the opportunity to maintain the UI in a dynamic scripting environment with excellent library support, so I can evolve it fast to fit the needs of my users.

    On a separate note, Ajax has been around for 10 years in spirit, 5 years in practice, and 2.5 years in name. There will hopefully be ongoing evolution in this space, but don''t expect a quick death of Ajax any more than you can expect a quick death of C++ or Cobol.'
  replies: []
- id: 6770
  author: Jon Tirsen
  date: '2007-06-03T17:50:51'
  content: Guillaume, I don't know how much x86 assembler/machine code you've seen or written. The technology that pretty much every computer application (anything running on Sun, Mac or Windows) is based on is an incredibly botched frankenstein of a technology. It was originally intended to be written by humans, it then got matrix operations added, later on some RISC philosophies as no humans ever write machine code directly any more. And so on. XMLHttpRequest and it's friends is a wonder of computer design in comparison. I agree with you on that it's pretty damn ugly but luckily we have higher level tools that hide that ugliness now, just like we have compilers and bytecode that hide the ugliness of x86 machine code.
  replies: []
- id: 6771
  author: Charlie Collins
  date: '2007-06-07T13:37:24'
  content: 'Ajax (not AJAX, to be a total pedantic jackass - http://weblogs.java.net/blog/arungupta/archive/2007/04/ajax_vs_ajax_aj.html) is a pain, true. However, web apps are not going away, and Ajax enables a lot of benefits in web apps.

    Ajax is here to stay. Native stuff - aka HTML/CSS/JavaScript - *feels* better than a plugin, not all users have all the plugins and plugins come with a support and adoption cost (despite the 98% claims for some things). The async nature allows for a better user experience. The capability to move a lot more stuff to the *client* improves performance and offloads the server (you can build the view and so on on the client, not build it on the server in an action and return it, for example).

    Some of the benefits come from JavaScript, some from being async, some from both. None of this stuff is new though.

    Using frameworks and toolkits though, you can "reign in" the difficulty.  Look at GWT or the new Laszlo for example. That kind of thing is the ticket.  Doing Ajax by hand (though some people are really good at it) is not fun, but using a toolkit and getting Ajax style results is.'
  replies: []
- id: 6772
  author: Guillaume Laurent
  date: '2007-06-09T08:21:38'
  content: 'Jon, I have no doubt that the assembler code that my compiler generates is ugly (although from what I''ve heard I believe compilers produce more efficient code than humans, so it being human-readable isn''t an issue). But it''s not a problem because I *never* have to deal with it. That''s not the case with Ajax, no matter the library sooner or later (and generally more sooner than later) you *will* have to deal with javascript/html stuff.

    I just can''t consider that an environment where simple things such as widget layout, adding scrollbars, or even getting the current insert position of a text editor get so complicated can be any good.

    I very much believe in alternatives like Apollo/Flex for web apps. But certainly not Ajax. Ajax is like adding an Object Oriented layer over Cobol or Fortran, pushing a technology way beyond its limits.'
  replies: []
- id: 6773
  author: Anonymous Coward
  date: '2007-06-13T14:18:42'
  content: Damn Cedric! I take it you haven't personally *written* asynchronous JavaScript.  That whole AJAX ecosystem is fugly.  Fuglier than anything we have today.  Sure, there are good toolkits out there, like GWT...  But we're not in "engineering land" here, we're into "deep fugly hack land".  I don't agree that every technology is ugly.  I've coded using many languages and technologies and AJAX is the worst I've had to work with.  AJAX, the whole broken browser (insecure) sandbox, the uber-kludge that JavaScript tries to be as a language (take a look at scala if you want to see real functional programming mixed with OO), the various broken *and* different *and* incomplete browser JavaScript implementations, the broken and incomplete EcmaScript specs themselves, etc.  Basically AJAX is the *worst* technology I've seen since I'm a programmer (and, yup, this is coming from an old timer that used to do COBOL on mainframes).  There's hardly one week passing by without another "JavaScript
    root exploit" in this or that browser.  Not too mention the memory leaks etc.  Really fugly thing.  Adobe is on to something here.  I'm a GMail fan (very simple app) and I do occasionally use Google documents (for very simple spreadsheets).  But it simply doesn't scale.  And now we'll have an "offline" kludgy layer on top of all this non-sense!?  Bullocks.
  replies: []
- id: 6774
  author: mjasnows
  date: '2007-06-13T15:33:55'
  content: I think of Ajax as one more tool, you get out of it what you need. Not everyone needs the silver bullet of languages, plugins, etc.. to do their work, and that doesn't mean they're being careless either.  In my somewhat short experience using Ajax, long time experience doing web dev ,plugins, etc. It's added immeasurably to the usability of the web app I'm working on, and that's without reiventing things, I'm using the DOJO Toolkit at the moment, it's been quite painless, though I tend to be more pragmatic about it's use (and other shiny technologies) and currently only targetting it where I think I'll get the most from it.
  replies: []
- id: 6775
  author: mjasnows
  date: '2007-06-13T15:35:47'
  content: 'btw Gears sounds similar, at least in technology, to the now defunct "Alchemy Project at BEA"

    http://news.com.com/BEA+transforms+mobile+apps+with+Alchemy/2100-1012_3-5220902.html'
  replies: []
- id: 6776
  author: Gaurav Gathania
  date: '2007-07-06T03:36:24'
  content: 'Yes I totally agree with  mjasnows.

    Being a Java related technology devleoper I guess Ajax is one hell of a tool/api to do things that are quite difficult to implement otherwise and I guess its quite easy to incorporate into your existing application without much of a pain.

    all that matters is that you need to have right set of tools and some resuable code and you get things done in no time.

    As per the UI part most of the time I am able to get better UI results than other technologies.

    Dont overkill with Ajax thats all is required.'
  replies: []
- id: 6777
  author: Gaurav Gathania
  date: '2007-07-06T03:37:26'
  content: 'Yes I totally agree with  mjasnows.

    Being a Java related technology devleoper I guess Ajax is one hell of a tool/api to do things that are quite difficult to implement otherwise and I guess its quite easy to incorporate into your existing application without much of a pain.

    all that matters is that you need to have right set of tools and some resuable code and you get things done in no time.

    As per the UI part most of the time I am able to get better UI results than other technologies.

    Dont overkill with Ajax thats all is required.'
  replies: []
- id: 6778
  author: Srini Kancharla
  date: '2007-08-24T17:39:16'
  content: 'I love ajax. I feel its very useful technology.  Good alternative to javascript. No browser compatibility issues and better user experience.

    I used the DWR library. I feel its very useful technology.

    Srini Kancharla

    www.orangeglobesoftware.com'
  replies: []
---

Werner Schuster is making [a few interesting remarks](http://jroller.com/page/murphee?entry=google_gears_workerpool_message_passing) about [Google Gears](http://code.google.com/apis/gears/) and how concurrency is implemented in Javascript. However, I'm quite puzzled by his following statement: 

> I still hope that AJAX will die a quick death, like Java Applets, just for being so damn ugly and horrible to implement. 

Mmmh... AJAX ugly? Are we talking about the same thing? 

AJAX is just the underlying medium. It's a loosely defined set of language and design constructs that make it possible to fetch data asynchronously while displaying an HTML page. It's like oil in your engine: it's dirty and smelly, but you couldn't get anywhere without it and if you're not a mechanic, there is very little reason why you should ever have to manipulate it. 

Werner is probably referring to the pages themselves that are using AJAX behind the scenes, and there is obviously not much that can be done about this UI problem except wait for the market (and the UI designers) to mature and get comfortable with this new paradigm. 

As for AJAX being horrible to implement... well, not any more. 

Yes, the low-level details are ugly, but you can't expect any less from a foundation API. The early days were tough for programmers, but nowadays, there is really no excuse to reimplement another browser-neutral XmlHttpRequest layer. Whatever you want to do with AJAX, you can now do it in the language of your choice, and for each language, you easily have a handful of different toolkits at your disposal. 

The way I look at it, AJAX is a liberating technology. I can't wait to see what kinds of products await us in the next few years, and I certainly hope they will be built upon AJAX while allowing me to get work done while off-line.
