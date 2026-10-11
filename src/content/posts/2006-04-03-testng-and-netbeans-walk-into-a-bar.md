---
title: TestNG and NetBeans walk into a bar...
date: '2006-04-03T12:37:55'
slug: testng-and-netbeans-walk-into-a-bar
categories:
- Java
comments:
- id: 5064
  author: Robert
  date: '2006-04-03T14:32:33'
  content: I've got to ask... if it's a TestNG plugin, why is the file types category "JUnit"? Does it disable the JUnit plugin?
  replies: []
- id: 5065
  author: xzajo
  date: '2006-04-04T01:27:16'
  content: No, it doesn't. It'is not good idea to disable JUnit.  Many other modules depends on it.  You can use both variants. IMHO there is no reason to create special folder for a TestNG template.
  replies: []
- id: 5066
  author: Ruslan Zenin
  date: '2006-04-04T08:02:28'
  content: 'Congrats!

    BTW, I noticed you have invalid download link on testng.org for latest testNG 4.6 ver.

    http://testng.org/testng-4..zip

    has to be replaced to

    http://testng.org/testng-4.6.zip'
  replies: []
- id: 5067
  author: Howard Lewis Ship
  date: '2006-04-04T19:52:34'
  content: 'tapestry-testng is a somewhat misleading name; it has a few things specific to testing Tapestry apps, but its mostly about using EasyMock 2.0 with TestNG (and JDK 1.5 generics).

    Also, I''ve added a fun project logo.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/testng-netbeans.gif)

Today is definitely not a slow Monday.  Two TestNG-related announcements hit my inbox this morning:

  * [ A NetBeans plug-in (finally!), written by Xsajo.](http://blogs.sun.com/roller/page/xzajo?entry=test_ng_plugin_for_netbeans)
  * [A small library to make it easier to test your Tapesty applications, courtesy of Howard.](http://howardlewisship.com/tapestry-javaforge/tapestry-testng/)



Thanks to both of you, you are going to make quite a few people happy.
