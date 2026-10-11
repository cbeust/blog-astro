---
title: Ant and Maven
date: '2005-02-10T23:15:14'
slug: ant-and-maven
categories:
- Java
comments:
- id: 3103
  author: Daniel Serodio
  date: '2005-02-11T07:43:54'
  content: Would you mind sharing your build scripts? I suppose you must have "template" scripts for new projects...
  replies: []
- id: 3104
  author: George Coller
  date: '2005-02-11T08:33:14'
  content: 'Yes, I looked into Maven recently and wondered if the overhead of learning it (and teaching it to the employees where I consult) would be worth it.  When I saw Jelly as the scripting language I dropped the idea completely.  Scripting in xml just doesn''t seem like the best idea.

    I haven''t played with ant macros yet but the import saved my butt on my last project which had many modules.

    If you are allowed to share some of your macro templates please do so.'
  replies: []
- id: 3105
  author: Jason Carreira
  date: '2005-02-11T10:55:57'
  content: Check out Savant. It gives you dependency management even better than Maven's (it finds the transitive closure of dependencies if you've specified the dependencies of your dependencies, etc), plus it lets you keep your Ant build with just a few additions.
  replies: []
- id: 3106
  author: Bruce Snyder
  date: '2005-02-11T20:07:00'
  content: Check out the build setup that Howard has created for Hivemind called Hivebuild. He uses macrodefs fairly extensively.
  replies: []
- id: 3112
  author: 'notgartner.com: Mitch Denny''s Blog'
  date: '2005-02-12T03:35:21'
  content: <strong>MFC, .NET and Java! UI's and multi-threading.</strong>
  replies: []
- id: 3107
  author: Geoffrey
  date: '2005-02-12T09:06:50'
  content: On the Maven userlist, Jason said that maven 2 will drop Jelly in favor of plain old java and other, better xml scripting languages.
  replies: []
- id: 3108
  author: ''
  date: '2005-02-12T09:42:04'
  content: 'I doubt Maven 2 will ever see the light. Too much energy has been spent in more than 2 years to create chaos.

    If they create a version 2 it will be incompatible with version 1 (even with micro releases it was already hard to have somewhat backward compatibility) and it will make existing Maven builds and the loadcrap of plugins complete history which is not what people want to heard.

    But Maven people like to mess around the build all the time, so sure again they will convert existing build 1 version to version 2 alpha pre release to create more havoc. :)'
  replies: []
- id: 3109
  author: Todd Huss
  date: '2005-02-13T19:21:38'
  content: 'I really like the concept of Maven. While the execution does fall short in some areas with Maven 1 I do hope it provides impetus for other projects to create a higher level build system on top of Ant that provides a default means of dependency management, multi-project relationships, and generation of build artifacts such as jars, wars, and ears.

    Perhaps it''s Maven 2 or perhaps someone creates a suite of Ant macros. Either way there''s a real need for higher level build systems to enable people to jumpstart their projects.

    I don''t want to have to maintain "my" set of macros to build build source, run unit test, and generate a WAR when every other company out there is doing it in almost the same way. I want to see reuse on the inter-company level and that I believe is the aim of a high level build system such as Maven.'
  replies: []
- id: 3110
  author: Henri Yandell
  date: '2005-02-17T18:47:55'
  content: 'With Ant you have to have people who can code in Ant, and are happy with XML.

    With Maven you just need people who are happy with XML.

    Yes you can extend Maven with Jelly, and you can extend Ant with Java, but for most projects you shouldn''t need to.'
  replies: []
- id: 3111
  author: Jonathan Aquino
  date: '2005-02-25T13:28:23'
  content: Cedric - Thanks for the pointer to the macrodef and import tags. I have used this knowledge to create the first video game written in Ant. It has a nice skiing theme. http://jonaquino.blogspot.com/2005/02/first-video-game-written-in-ant.html
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/ant.png)                                 ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/maven.gif)

I was going to post a comment on Dion's blog about his [entry on Maven](http://www.almaer.com/blog/archives/000707.html) when I realized that Mike posted it for me...

In short, `ant`'s `<import>` and `<macrodef>` are absolute life savers.  They have brought a lot of sanity into my build files, which I thought were already pretty lean and mean:

  * All my build files have shrunk a lot thanks to `<macrodef>` ("extract method").
  * All the targets contain fewer commands, and they clearly state their intent thanks to well-chosen names ("keep methods short").
  * The macros contain a set of sensible defaults that make most of their invocation straightforward and with rarely more than a couple of parameters ("program for the default case").



These rules of thumbs coupled with the following simple guidelines:

  * Everything that may vary from an installation to another should go into a `build.properties`, all the rest goes into your build file.
  * Break down your build files logically (e.g. I like to have all the macros defined in `build-macros.xml` and `<import>` it everywhere I need it).



... give me a feeling of empowerment and control over my infrastructure.

Another important point is that I only need to know two languages to find my way in `ant` (Java and `ant`'s XML) while Maven requires me to learn four different languages:  Java, `ant`'s XML, Maven's XML and...  gulp... Jelly.

I still like the idea behind Maven but even today, when I see that the same criticisms we were hearing two years ago still crop up on a regular basis, it doesn't make me very confident on my ability to diagnose Maven meltdowns.
