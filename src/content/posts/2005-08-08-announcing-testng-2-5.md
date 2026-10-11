---
title: Announcing TestNG 2.5
date: '2005-08-08T06:46:37'
slug: announcing-testng-2-5
categories:
- Java
comments:
- id: 4119
  author: Shitasam Suitam
  date: '2005-08-08T13:05:10'
  content: U give me java project!
  replies: []
- id: 4120
  author: miracle
  date: '2005-08-12T04:31:23'
  content: why it give no results when I use jdk1.4 doclet?
  replies: []
- id: 4121
  author: Andrew
  date: '2005-08-18T00:52:49'
  content: 'The download link should be http://testng.org/doc/download.html

    Andrew.'
  replies: []
---

![](http://testng.org/pictures/idea-output.png)

The TestNG team is happy to announce the release of TestNG 2.5.

Highlights of this release:

  * A [brand new Web site](http://testng.org).
  * An IDEA plug-in, courtesy of Hani Suleiman and [Mark Derricutt](http://www.talios.com/testngj010.htm).
  * An improved Maven plug-in.
  * You can now specify entire packages in `testng.xml` instead of enumerating all your test classes.
  * `alwaysRun` configuration methods:  if a test fails, any configuration methods annotated with this boolean will always be run, regardless of whether something wrong happened during the tests.
  * Package support in `testng.xml`.



The full list of changes is included below.  
  
The Eclipse plug-in has also been updated (2.5.0) and is available from the update site (<http://beust.com/weblog/eclipse>) or downloadable as a zip file from [http://testng.org](http://testng.org/download.html).  
  
Thanks a lot to everyone who contributed to this release, it's a pretty major step for TestNG!  
  
_Change list for TestNG 2.5  
_  
**Core**

  * Added: `ITestListener.onTestStart(ITestResult)`
  * Added: Support for `<packages>`
  * Fixed: `@Configuration` methods were not invoked with individual test methods
  * Added: Resource files for easier ant `taskdefs`
  * Fixed: Bug with `ExpectedExceptions`
  * Fixed: Didn't support nested factory classes
  * Fixed: NPE if `-target` is omitted with JDK 1.4
  * Fixed: `@Configuration` failures in a class would cause other classes to fail
  * Fixed: `beforeTestClass/afterTestClass` were broken for a pathological case
  * Added: `@Configuration(alwaysRun)`
  * Added: `JUnitConverter` task
  * Fixed: < and > characters in reports were not escaped

**Eclipse plug-in:**

  * Fixed: Class dialog wasn't showing `@Factory` classes

**IDEA plug-in:**

  * First release!

**Documentation:**

  * Added: Brand new look!!!
  * Added: Section on `testng.xml`
  * Fixed: Numbering of sections
