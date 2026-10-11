---
title: Looking beyond languages
date: '2008-04-01T08:53:09'
slug: looking-beyond-languages
categories:
- General
comments:
- id: 7191
  author: RichB
  date: '2008-04-01T09:43:18'
  content: But stuff like this already exists (Reflector?). So why bother creating an April Fools?
  replies: []
- id: 7192
  author: Frank Bolander
  date: '2008-04-01T10:24:11'
  content: 'Jeebus Cedric, don''t you know Rick Astley is a Rails guru now.

    I''d rather see the Clash

    youtube.com/watch?v=0Ag8J2NMYmc'
  replies: []
- id: 7193
  author: Daniel Spiewak
  date: '2008-04-01T10:25:43'
  content: 'I smiled anyway.  :-)

    In all seriousness, it turns out that things like this are more complicated than they would seem.  For example, have you ever tried feeding AspectJ''s output through a decompiler?  Bytecode supports far more powerful constructs than Java (or many other languages for that matter).  The only thing which allows reverse compilation to Java source is that the bytecode itself *originally* was produced from such sources.  You would have a much easier time translating directly from Java into the target language.

    Nice thought though...'
  replies: []
- id: 7194
  author: jesse kuhnert
  date: '2008-04-01T11:14:37'
  content: you sob....I had successfully avoided having this happen to me until now.  nice
  replies: []
- id: 7195
  author: Andres Almiray
  date: '2008-04-01T12:05:44'
  content: Props on the project name! Don't forget the Parrot story (developers.slashdot.org/article.pl?sid=01/03/28/1742237)
  replies: []
- id: 7196
  author: Nikita Ivanov
  date: '2008-04-01T15:01:32'
  content: 'I did click on the link :) Don''t know what it is saying about me...

    Good one,

    Nikita.'
  replies: []
- id: 7197
  author: Cosmin Marginean
  date: '2008-04-01T23:35:32'
  content: Hehe. When you see JavaScript and C/C++ in the same context you gotta know something is fishy :)
  replies: []
- id: 7198
  author: Ron
  date: '2008-04-08T13:31:32'
  content: :) Today being April 8th and all, I clicked on that link twice before I caught on.
  replies: []
- id: 7199
  author: Anonymous Coward
  date: '2008-04-22T13:45:07'
  content: 'I just read this today (22 of April), not noticing the date.  So I didn''t realize it was an April fool: I was ready to call my co-workers/CEO saying ''check this out, this is similar to what we''re doing''.

    And, yup, we''re converting bytecode back to source files in other language (C++ and Objective-C) that are then instantly compiled on various platforms.

    I won''t go into the details but our clients are paying mucho bucks for this technology and we''re not the only company doing this.

    Automatic conversion from language ''x'' to language ''y'' has been a reality since many years.  We happen to build non-Java source from ''java'' bytecode (others company are doing this too).

    So it''s not really an April fool.  This technology is very real.'
  replies: []
- id: 7200
  author: Carl Rosenberger
  date: '2008-04-28T05:26:38'
  content: 'I got fooled today and I was also about to post the link to "Toledo" to coworkers. We are doing exactly what you describe to port Java code to IL and to use it from C#, VB and managed C++.

    You did a great job to fool people but sorry, I didn''t get the joke part of the post.'
  replies: []
---

I remember the first time I used a Java decompiler... I picked a random class file, fed it to the decompiler and sat in amazement as the tool spit out Java code that was almost identical in all parts to my original source code. Ever since I saw that, I have always wondered how hard it could be to create a tool that would output something else than Java... Would it be possible to have a program that could translate Java into pretty much anything? 

It turns out that it's quite possible. 

For the past couple of years, I and a few other people have been working at just that. The idea is to provide an API that makes it easy to read bytecode in a form that's relatively structured (identifiying method and class names, iteration structures, etc...) so that developers can easily generate source code for whatever language they feel like. 

I'm very happy to announce an initial release of project Toledo. 

Toledo is a very ambitious project that's made of three parts: 

  * An API that reads class files and expose it as higher constructs in order to make code generation as easy as possibe. 
  * A set of modules built on this API that generate code in several languages (see below for the languages we support today). 
  * Extra libraries in these languages to bridge the gap between JDK libraries and target libraries. 
This last point was the one that caused me the most worries. I wasn't interested in creating a tool that generates source code which is useless because it no longer has access to the Java libraries it was built upon. Several people on the Toledo team have come up with very innovative ideas to make this port not only possible but extremely easy as well, and thanks to them, the code that's being translated is actually really running in the target environment (see the demo section on the project home page). 

I'm not going to dive deep into details with this post, but I will certainly do so in the next few months in this blog. Before I point you to the project's page, I'd like to thank some of the people without whom Toledo would never have happened: 

  * Ruby: Rick Astels, Dan Bentley 
  * Javascript: Jeff Parks 
  * C: Rich Austern, Laurent Desnogues 
  * Python: Mike Oswell 
  * Intercal (seriously!): Austin Conway 
  * Lisp: Chad Older 
There are a lot more languages being worked on... 

For more details, go to the [Project Toledo's home page](http://beust.com/weblog/toledo) and please send your feedback!
