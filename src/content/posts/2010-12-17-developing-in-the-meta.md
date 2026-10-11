---
title: Developing in the meta
date: '2010-12-17T12:24:13'
slug: developing-in-the-meta
categories:
- General
comments:
- id: 8616
  author: Manfred Moser
  date: '2010-12-17T13:02:21'
  content: If you separate out the tests into a separate module that depends on the main codebase via a parent pom you should be able to use ${project.version} as part of the testng configuration and build it all in one sweep...
  replies: []
- id: 8617
  author: Rusty Wright
  date: '2010-12-17T13:16:46'
  content: Have you read Lev Grossman's The Magicians?  He has a reference to "it's turtles all the way down" in the book; it was the first time I'd heard it.  I just read the book a few days ago so it was amusing to me to see your graphic.
  replies: []
- id: 8618
  author: Verifying the version of your Java classes &laquo; Otaku, Cedric&#039;s blog
  date: '2011-02-21T20:39:20'
  content: '[...] of the constraints when you work on fundamental software is that you need to be very careful about the classes that you ship. Not just the code itself, but [...]'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/turtles.gif)

Working on "fundamental" software comes with its own set of challenges, and since a few people have asked me about it, I thought I'd share a few war stories about my experience with working on TestNG. 

First of all, what do I call "fundamental" software? It's a bit hard to define precisely, but it's basically any jar file that usually ends up at the bottom of your dependency stack. A testing framework seems to belong quite naturally there, but you can extend this to libraries such as the Google Collections, or Guice, or build software (Ant, Maven or Maven plug-ins) and of course, languages themselves (e.g. Groovy). 

#### Exhibit 1: TestNG and Maven

TestNG is built in two forms: via ant (which produces a jar file that is self-contained) and via Maven, which builds a jar file that only contains the TestNG classes. With Maven, If I'm building version N in my `pom.xml`, I can't tell my tests to use TestNG version N to run, since this would create a circular dependency, and Maven forbids it. 

Instead, I have to create two pom.xml files: one that builds version N-SNAPSHOT (`pom.xml` but doesn't run the tests and one that depends on N-SNAPSHOT (which must have been previously installed and deployed) which only runs the tests (`pom-tests.xml`). The entire build with Maven is therefore a two step process: 
    
    
    mvn clean install -Dgpg.skip=true
    mvn -f pom-test.xml test
    

Note that it's important to `install` in the first step, otherwise, the second step won't be able to find the snapshot. 

#### Exhibit 2: The TestNG Eclipse plug-in

As you probably know, the TestNG Eclipse plug-in is a [mug of awesomeness topped with creamy magnificence](http://beust.com/weblog/weblog/2010/11/02/eclipse-and-testng-the-next-next-generation/). You would think that I use it day in and day out to work on TestNG, yet I don't. 

Actually, I can't. 

The reason is simple: the TestNG Eclipse plug-in has to use its own version of the `testng.jar` file, for many reasons. Because of this limitation, the plug-in can't see modifications of the TestNG code base that I the current instance of Eclipse, since it has already loaded classes from its `testng.jar`. It's a bit unfortunate but of course, there are plenty of other ways to work on TestNG without using the plug-in. Most of the time, I just launch a standard Java application. And of course, when I need to work on the Eclipse plug-in itself, I just launch it as an Eclipse application. 

#### Exhibit 3: [JCommander, all the way down](http://en.wikipedia.org/wiki/Turtles_all_the_way_down)

I was adding a few features to JCommander some time ago. When I was done, I added a few tests for the new features, ran them with Eclipse, they passed. Then I switched to the shell, ran a quick `mvn package` to make sure everything was fine before committing when... all the new tests failed. 

That was puzzling. Looking closer, it looks like Maven was running the tests against an older version of JCommander, and since the new functionality was obviously not implemented then, they failed with `NoSuchMethodException` and similar errors. 

Now that was quite puzzling, did I find a bug in Maven? Why was it running against a version of the source that's not the one I'm working on? And where did this version come from? Why that one in particular? 

I had to convince Maven to be a bit more verbose than it usually is (it's actually possible) and I finally solved the mystery. 

JCommander obviously uses TestNG to run its tests, and it turns out that TestNG uses JCommander to parse its command line. Of course, the version that TestNG depends on is older than the one I'm working on, so Maven ends up with two versions of JCommander on its classpath, and unfortunately, it puts the dependency's version first. 

Mystery solved. 

As it turns out, there is actually a way out of this, which Brett Porter kindly pointed out to me. The solution is to have your Surefire dependency explicitly specify which version of JCommander it wants: 
    
    
    
     org.apache.maven.plugins
     maven-surefire-plugin
     
       
         com.beust
         jcommander
         ${project.version}
       
     
    
    

_(Update: this still doesn't quite seem to work, trying to investigate with Brett's help)._

This is just a quick overview of what it's like to work on fundamental libraries and how this kind of development can differ from working on more regular applications that sit at the top of the software stack. 

Feel free to share if you have similar tips or stories!
