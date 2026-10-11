---
title: New version of TestNG
date: '2004-05-10T22:38:12'
slug: new-version-of-testng
categories:
- Java
comments:
- id: 1607
  author: ''
  date: '2004-05-11T15:13:46'
  content: Good stuff! Not all source code in the download zip though :(
  replies: []
- id: 1608
  author: Robert Lowe
  date: '2004-05-12T09:06:04'
  content: 'Oooow! Those colors sure hurt the eyes!

    Any chance of making the green a *little* less bright? (Otherwise I''ll be rooting for my tests to fail, since the red is a bit less painful. :-) )'
  replies: []
- id: 1609
  author: Furious Purpose
  date: '2004-07-08T06:59:23'
  content: '<strong>Cedric''s TestNG, a JUnit Replacement?</strong>

    The fil blog  pointed me

    to Cedric''s  TestNG  and some of the background (

    here  and

    here ).  I know, I''m a month behind.  ;)

    I''m pleased to find that I agree with most of what''s there.  I''d like more options for configuring setup'
  replies: []
---

I have just uploaded a new version of [ TestNG](http://beust.com/weblog/testng), the annotation-based test framework.  A lot has gone into this new release:

  * Revamped documentation
  * Transparent support for JUnit tests.
  * HTML reports covering the entire test run.
  * Groups can now be specified as regexps.
  * Support for tests and suites.



Extensible API allowing you to generate your own reports or even your own testing methods (two are supported right now:  annotations and JUnit).

The HTML reports are still fairly basic but they convey the results of the entire test run pretty well.  You can see an example [here](http://beust.com/weblog/testng/test-output/index.html) or just go directly to the [main documentation page](http://beust.com/weblog/testng).
