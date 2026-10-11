---
title: 'Canvas:  a Velocity killer'
date: '2004-03-07T19:02:20'
slug: canvas-a-velocity-killer
categories:
- Java
comments:
- id: 1264
  author: Anthony Eden
  date: '2004-03-07T21:41:01'
  content: First of all, embedding Groovy in your HTML is much more like JSP than it is like Velocity.  The reason I appreciate Velocity is specifically because you can't embed code in it this way.  Additionally it has been possible for quite some time to use scripting languages such as Jython inside a JSP as a replacement for Java code.  Given these two things I really don't think calling it a "Velocity killer" is appropriate or correct.
  replies: []
- id: 1265
  author: Rickard
  date: '2004-03-07T22:24:04'
  content: I agre with Anthony. We are using Velocity almost exclusively in our CMS, and one of the main reasons is that it is impossible to "code" in it. This makes it possible for us to allow end-users (mostly non-technical) to access and modify the templates without giving them a chance to mess up to much or cause security problems.
  replies: []
- id: 1266
  author: Sam Pullara
  date: '2004-03-07T22:25:50'
  content: 'Velocity scripts are extremely ugly, and you do embed code in it all the time, its just not in any recognizable language.  Anyway, Cedric has gotten me off my butt to add this functionality to Groovy directly.

    Although, I would really like to know why you think there is a big difference between velocity and a generic non-web version of JSP?'
  replies: []
- id: 1267
  author: Sam Pullara
  date: '2004-03-07T22:28:09'
  content: 'You''re fooling yourself if you think people can''t code in velocity:

    http://today.java.net/pub/a/today/2003/12/16/velocity.html?page=2'
  replies: []
- id: 1268
  author: Lee
  date: '2004-03-08T02:25:01'
  content: Sam... that's not really "coding" in the same way as you can by adding scriptlets to JSPs. It forces you to implement business rules and logic outside of the presentation layer, which can only be a good thing.
  replies: []
- id: 1269
  author: Davide Baroncelli
  date: '2004-03-08T02:48:32'
  content: 'When I read people saying that it is impossible to "code" in velocity and that this pushes people to write pages more maintainable than JSP, I would force them to eat all the listings of the web layer for the software I had to work with until some months ago. Some totally retarded geek decided that velocity was cooler than JSP, and the result was that our web based order management system had the logic totally duplicated: an applet client sent orders through a well-coded servlet, and the html forms sent orders through a bunch of absolutely horrific velocity pages with the SAME LOGIC embedded inside. Introducing features, new parameters and so on was delightful: one had to add them to the servlet-based one, and then trying to replicate the same stuff in that #mess : debugging velocity code is ridiculous, as are the error messages (or at least were in the 1.2 version). Don''t know if "writing logic" in velocity is possible or not (though the presence of conditionals, assignments
    and loops gives me a hint about that...): I know it is possible to write absolutely monstruous and  unmaintainable stuff, with the exception that at least a similar JSP would be developable with the support of the IDE and debuggable.'
  replies: []
- id: 1270
  author: Rickard
  date: '2004-03-08T03:31:09'
  content: 'Sam, I wouldn''t call that "coding". In any case, even if it was possible to "code", by some definition of the word, we are not using it that way.

    Davide, that sounds more like a problem with your design rather than a problem with Velocity per se.'
  replies: []
- id: 1271
  author: ''
  date: '2004-03-08T03:40:15'
  content: Why does velocity NEED to be "active?" If it works, it works. Sounds to me like it's "stable," not "dead."
  replies: []
- id: 1272
  author: Gwyn Evans
  date: '2004-03-08T03:53:24'
  content: If you want an active template language, why not use FreeMarker, as that appears to have equivalent (or more) functionality and seems to be being maintained/developed?
  replies: []
- id: 1273
  author: Bob Lee
  date: '2004-03-08T04:30:11'
  content: I think the power of Velocity is less in the language and more in the fact that you can use it outside of a web container (unlike JSP). Great work Cedric. I've wanted something like this for a while.
  replies: []
- id: 1274
  author: Davide Baroncelli
  date: '2004-03-08T05:34:09'
  content: 'Rickard, of course the problem was in the design: but the result was horrible, and it was horrible in such a way that exposed a lot of weaknesses of velocity as a development tool from a maintenance point of view (especially with regards to error messages). This is not to say I think v. is bad: only it''s not always the wonderful panacaea for the maintenance problem that everyone seems so convinced it is: I''m afraid that every tool is potentially dangerous, in the wrong hands.'
  replies: []
- id: 1275
  author: Matthew Payne
  date: '2004-03-08T05:46:33'
  content: 'I just don''t have the same itch to scratch.

    I don''t think velocity scripts are ugly at all.  They are so simple.  Its the sample template syntax that most ide''s give you for code generation.  Its the sample syntax for escaping variables in ANT. We have a non-java web/artist that got up to speed very quickly with velocity.  Anyone thats touched ant or templates in eclipse/idea is already velocity capable.

    The project is not dead either.  The velocity "tools " project has gotten a lot of cool features over that last 9 months.

    I would agree if someone wanted to put program code in it, it would be ugly.  Otherwise, I never seen the need to debug velocity.  It works as expected, given the variables I debug with in my java code.'
  replies: []
- id: 1276
  author: Mikael
  date: '2004-03-08T07:02:32'
  content: The principal reason behind the use of Velocity in my projects is not it's features - it is the lack of unnecessary features. If I wanted to let my customers break my applications while enhancing them, I would just use JSP, but unfortunately I must make money, therefore they get Velocity.
  replies: []
- id: 1290
  author: It's not rael, it's real
  date: '2004-03-08T07:04:26'
  content: '<strong>Is Velocity dead?</strong>

    Read Cedric''s entry about Canvas aka. "The Velociy Killer"....'
  replies: []
- id: 1277
  author: Frank Nestel
  date: '2004-03-08T07:21:06'
  content: 'Theses mixture of scripting and non scripting make all template languages to a potential break of the MVC modell. JSP and Velocity have this problem and Canvas will share it. Stringtemplate is looking so much cleaner and powerful enough.

    http://www.antlr.org/stringtemplate/index.tml

    Haven''t look at WebStringTemplate which is a promising looking extension.'
  replies: []
- id: 1278
  author: Merrick
  date: '2004-03-08T08:59:50'
  content: 'Sounds a lot like GSP: http://cvs.groovy.codehaus.org/viewcvs.cgi/groovy/modules/pages/src/?root=codehaus'
  replies: []
- id: 1279
  author: Soumen Sarkar
  date: '2004-03-08T11:06:23'
  content: 'Puting more power to template could be considered

    a violation of MVC separation (specially in web

    site building). I kind of agree with this view

    point and strive to keep velocity template as

    close to final output (my interest is codegen).

    The following paper from ANTLR creator Terrance

    Parr discusses this MVC separation issue.

    Regards,

    Soumen Sarkar

    http://www.cs.usfca.edu/~parrt/papers/mvc.templates.pdf

    ============================================

    Enforcing ModelView Separation in Template

    Engines

    DRAFT Submitted to WWW 2004

    Terence Parr University of San Francisco parrt@cs.usfca.edu

    ============================================'
  replies: []
- id: 1291
  author: Stefan Arentz
  date: '2004-03-08T14:18:57'
  content: '<strong>Canvas; Yet Another Java Template Engine</strong>

    Cedric Beust just released a small template engine that he calls Canvas. Very tiny, the template engine is less than 300 lines of code in just 3 classes. The scripting in the templates is provided by the Groovy language, which...'
  replies: []
- id: 1280
  author: Rodrigo Reyes
  date: '2004-03-08T15:48:01'
  content: 'I have been working with velocity for almost two years and there are at least two things now I know for sure:

    1) It''s still too low level when working with HTML. Even the simplest form element needs work to be generated. Sure you can create or find some extra tools and put them in your context, but I would like to see some sort of already built in technology with would let me insert even complex elements/widgets without having to create them by hand. There are already some frameworks moving in that direction and although I haven''t tried them yet, I am looking forward to. I don''t want to keep creating every javascript and HTML code I need for even the smallest thing. I would like to use velocity for some other and more important stuff, like presentation or info placing within the page.

    2) It is possible to create really ugly code. But the real problem is that there are almost no tools to manage/debug that code. And that is what keeps people from embeding too much code inside templates, from my point of view. When we started using velocity here we were so happy with it because it was a lot easier than JSP that we embedded too much code. We still regret about that. Right now, we use it only for the minimum and we try to have all the complex code generated with Java Objects which default behaviour is to generate HTML when calling its toString() method. Works great so far.

    My 2 cents... ;)'
  replies: []
- id: 1281
  author: Geir Magnusson Jr
  date: '2004-03-08T18:03:30'
  content: 'Velocity isn''t a dead project.  It greatly slowed down for a while, but the product works, and there is an active community of support and users.  There is one book out, and more are coming.

    In terms of new features, the 1.4 relase is coming out this week, the 1.5 release with loads of improvements and additions to VTL is going into ''release candidate'' phase this or next week, and we have plans for 1.6 to include new additions such as floating point.

    We have been working on what would go into 2.0, the major version number indicative of non-backwards-compatible changes.

    I applaud people pushing the envelope with templating solutions, but don''t really think it''s necessary to denigrate a usable stable solution to promote it.'
  replies: []
- id: 1282
  author: Bing Ran
  date: '2004-03-08T22:17:49'
  content: 'Nice and easy so far. How about some performance enhancement? Instead of doing merging every time, can the package be enhanced to compile the .canvas tmeplate and cache it? With that capability, Canvas can go for real work!

    Thanks for the work!'
  replies: []
- id: 1283
  author: Dorel
  date: '2004-03-08T23:39:47'
  content: 'To Davide:

    "Rickard, of course the problem was in the design: but the result was horrible"

    Bad design ALLWAYS produce horrible results. Just because some fuckwit, (you can find the explanation of the term in the bileblog :-) ), used Java and Velocity in a completely wrong way doesn''t mean Java or Velocity is horrible. I''ve never used Velocity as presentation technology but I have used it for code generation and it''s awesome. For what it has been designed for, template engine, it is great.

    And to the subject of this blog, if Cedric found it usefull to combine it with groovy because he felt the need for a more powerfull language in templates that''s fine. When you''ll feel that need too, you can use Canvas. You have the right to choose. Use Velocity for templating. Use canvas if you need more powerfull coding inside templates. However, in this respect, and hearing what Geir said, I don''t think Canvas is a Velocity killer. It depends on Velocity and if Canvas lives, so will Velocity isn''t it ? :-)'
  replies: []
- id: 1284
  author: Stephan Schmidt
  date: '2004-03-09T07:03:35'
  content: Doesn't Ruby's ERB.rb consist of only one class?
  replies: []
- id: 1292
  author: Stefan Tilkov's Random Stuff
  date: '2004-03-09T10:04:14'
  content: '<strong>Canvas: Groovy Templating</strong>

    Cedric Beust has created a prototype of a templating engine based on Groovy. Very cool....'
  replies: []
- id: 1285
  author: flacco
  date: '2004-03-16T01:52:36'
  content: '> Right now, we use it only for the minimum and we try to have all the complex code generated with Java Objects which default behaviour is to generate HTML when calling its toString() method. Works great so far.

    why generate the html in the java code?  velocity intends to separate presentation and logic, usually by preventing the html/jsp designer from pulling logic into the presentation layer.  why are you pulling presentation into the logic layer by generating html?'
  replies: []
- id: 1293
  author: It's not rael, it's real
  date: '2004-08-14T10:17:52'
  content: '<strong>Is Velocity dead?</strong>

    Read Cedric''s entry about Canvas aka. "The Velociy Killer"....'
  replies: []
- id: 1286
  author: jeff
  date: '2004-09-28T12:04:14'
  content: Canvas meets my requirement for light-weight, simple to use, and support for a natural sounding scripting language templating framework OUTSIDE of the view layer.   My template implementation was up and running within hours of downloading canvas!
  replies: []
- id: 1287
  author: driedtoast
  date: '2006-08-03T07:31:37'
  content: 'I have been using velocity for years now and what I like about it is the simplicity and the use of a templating language that could be parsed with some old c++ template engines as well as velocity. The VTL is used in a lot of other tools as well so the template creation becomes natural.

    If you wanted something more powerful why not look at Jelly? Not sure why people are not using that but if you''re heading in the JSP type direction I think it is very beneficial to look at that one.

    One other note about velocity is how a visual designer can create the html page and add variables and see what the page will look like even though variables will be show instead of actual text. Markup templating languages hide the variables which doesn''t let people see where it will be. (Sure they are still in the page but not show by the browser)'
  replies: []
- id: 1288
  author: Rob Dawson
  date: '2007-03-29T03:36:05'
  content: 'For todays bit of irony....

    I am visiting this page in March 2007, and I''m thinking... hey this is a bit of an unused product... I don''t think I''ll be using it.'
  replies: []
- id: 1289
  author: Thomas W
  date: '2007-05-10T18:26:50'
  content: 'To add insult to injury... Java has never had the slightest hint of a logging API.

    What it *now* has, is an almost-exact ripoff of Log4J. With nearly identical, but not compatible, API; and rather less functionality.

    When a bunch of twat engineers can''t get their own work right, they go rip off someone else and then publish it under their own name.  Three cheers for modal dialogs, while we''re at it!'
  replies: []
---

Now that I have your attention :-)

Velocity is a fine product that delivers its promise, but it has a few shortcomings:

  * Velocity is pretty much a dead project.  There has hardly been any activity in over a year and nobody seems to be interested in taking over.  The good news is that from my experience, Velocity is relatively bug free, but it doesn't bode well for its ability to evolve with the increasing demand of modern Java computing.  
 
  * It comes with some annoying dependencies, such as log4j or commons.  I am not criticizing the quality of these two packages but Velocity has a rude way of instantiating its loggers that recently gave me quite a headache.  On a related note, if you intend to publish a framework, please think twice before adding dependencies on packages that your users might be using in their own code base.  To add insult to injury, log4j happens to have a perfectly decent equivalent in the JDK itself.  Granted, java.util.logger isn't as powerful as log4j, but in this particular case, I see no reason why Velocity is trying to impose its own logger on pour souls like me who only need a simple generator framework.  
 
  * Finally, Velocity offers very little control on the indentation and shape of generated files and I haven't found any satisfying way to solve that problem. 



With that in mind, I started thinking about a replacement.  The Velocity API is simple and easy to understand, but I had no desire to implement yet another expression language.  The solution quickly imposed itself to me:  Groovy.

Not only is Groovy a cool language that borrows features from two of my favorite languages, Java and Ruby, it's also extremely easy to embed in a Java application.

With that in mind, it took me just a few hours to put together this quick prototype of a product reusing the Velocity API but using Groovy as its expression language.  The good news is that the dependency is now limited to one jar file:  groovy.jar.

I called this product Canvas and you can read more about it on its [home page](http://beust.com/weblog/canvas).

Also, I'd like to take this opportunity to hereby claim the title of the smallest framework ever:  Canvas only has three classes.  You can't get more lightweight than that!
