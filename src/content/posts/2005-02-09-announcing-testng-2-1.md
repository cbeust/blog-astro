---
title: Announcing TestNG 2.1
date: '2005-02-09T08:12:21'
slug: announcing-testng-2-1
categories:
- Java
comments:
- id: 3100
  author: Ruslan Zenin
  date: '2005-02-10T02:08:00'
  content: 'My congratulations with new release!

    I think once it will have Eclipse plugging ready it will be a killer app!

    Is there a complete list of changes available? And also you have mentioned new list of upcoming features - is it also available somewhere?'
  replies: []
- id: 3101
  author: mike
  date: '2005-02-11T20:01:10'
  content: hi
  replies: []
- id: 3102
  author: Cania
  date: '2005-03-30T15:36:57'
  content: How can  read the property file?
  replies: []
---

I am happy to announce the availability of [ TestNG 2.1](http://beust.com/weblog/testng).  Some of the new features include:

  * **`invocationCount` and `successPercentage`**, which I described in a [ previous entry](http://beust.com/weblog/weblog/archives/000236.html), and which allow you to invoke a test method a certain number of times while allowing some of these invocations to fail.  If the number of failures is under a certain threshold, the test is still considered a success.  
 
  * **`timeOut`** is now applicable to all test methods.  Whether you are running your tests in parallel or not, you can specify a time-out for your test method and if it fails to complete within the given amount of time, TestNG will mark it as a failure.  
 
  * **`dependsOnMethods`** was the most requested feature.  You can now specify dependencies on a method-based basis (no need to specify a group if your dependency graph is simple).  You can even mix ` dependsOnMethods `and `dependsOnGroups`.  
 
  * ... and of course, numerous bug fixes and other additions.



A special thanks to Alexandru Popescu who has pulled all-nighters to make this release happen!

We have an exciting list of new features lined up for our next version, among which a plug-in API, but in the meantime, enjoy TestNG 2.1,
