---
title: 'J15: an Eclipse plug-in to migrate to the JDK 1.5'
date: '2004-08-11T10:30:07'
slug: j15-an-eclipse-plug-in-to-migrate-to-the-jdk-1-5
categories:
- Java
comments:
- id: 1941
  author: Dion
  date: '2004-08-11T14:26:43'
  content: Sun will send you a letter saying that you have to rename it to be J50 ;)
  replies: []
- id: 1942
  author: Val
  date: '2004-08-11T23:16:22'
  content: Great job, C
  replies: []
- id: 1943
  author: ''
  date: '2004-08-12T20:07:45'
  content: Why aren't you putting all this effort into Workshop? ;)
  replies: []
---

![](http://beust.com/weblog/j15/pictures/completion1.JPG)

I have been converting a lot of code to the new JDK 1.5 constructs recently and I decided it was too tedious, so I wrote a quick Eclipse plug-in to assist me.  It's called J15 ("J One Five") and I am happy to announce its [first release](http://beust.com/weblog/j15).

Right now, J15 can convert for loops on arrays and collections but I have quite a few other enhancements in mind which I will disclose as I implement them.

In the meantime, please test it and let me know how it works for you, as I am confident there are quite a few cases that I haven't covered (manipulating a Java Abstract Syntax Tree is fun but it produces very ugly code...).

By the way, you will need a recent Eclipse build to run it (since it needs to support these new constructs).  I am currently running N20040806 which passed all the Windows tests.
