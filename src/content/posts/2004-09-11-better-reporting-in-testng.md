---
title: Better reporting in TestNG
date: '2004-09-11T19:10:03'
slug: better-reporting-in-testng
categories:
- Java
comments:
- id: 2310
  author: benb
  date: '2004-09-13T00:14:22'
  content: Get that horrible green color away ;)
  replies: []
- id: 2311
  author: gnic
  date: '2004-09-13T01:53:47'
  content: 'try to define a default default-style.css.

    Then allow a firm-oriented myfirm-style.css, that override default-style.css to personalize your default.

    Than every report feels graciusly at home.

    Great work cedric!'
  replies: []
- id: 2312
  author: Stepan Samarin
  date: '2004-09-24T08:47:16'
  content: Cedric, please please, get rid of this green stuff. By the way, check out how report of JDepend looks like.
  replies: []
---

I have improved the reporting made by [TestNG](http://beust.com/weblog/testng) to give you more information on your last test run, and more precisely: 

[**The list of groups with their methods**](http://beust.com/weblog/testng/test-output/groups.html). When you write your test methods and assign them to certain groups, you might lose track of which method belongs to which groups since these groups can span over different classes. This view allows you to quickly see the list of groups and which methods are in them, which makes it easy to see, for example, which tests are in the "broken" group (and therefore are in need to be fixed) or how many methods your "functest" group really contains. 
[**The sequence of method invocations**](http://beust.com/weblog/testng/test-output/methods.html). This is a list of all the methods that were invoked during your test, sorted chronologically. This is a good way to make sure that your configuration methods are being invoked correctly or that your inclusion and exclusion of test methods is as you expect it. As you can see from this view, configuration class methods are invoked before the instantiation of your test class and after the last test method has run, while configuration methods methods are being invoked "around" each test method. 
I am still not quite satisfied with the way the [main page](http://beust.com/weblog/testng/test-output/index.html) looks, so if you have suggestions to improve it, please let me know.
