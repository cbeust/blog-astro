---
title: Porting JUnit extensions to TestNG
date: '2005-08-31T14:33:36'
slug: porting-junit-extensions-to-testng
categories:
- Java
comments:
- id: 4182
  author: Robert Watkins
  date: '2005-08-31T16:27:10'
  content: Would it be possible to write, for TestNG, a generic JUnitAdaptor, based on this work, that would suffice for a large percentage of similar JUnit extensions?
  replies: []
---

![](http://www.dbunit.org/images/dbunit-logo.jpg)

Phil Zoio wrote [ an interesting article](http://www.realsolve.co.uk/site/tech/blog.php?name=philzoio&mydate=20050826) describing his experience porting a JUnit extension ([DBUnit](http://www.dbunit.org/)) over to [TestNG](http://testng.org).

The bottom line:  it's very easy.

The nice thing about JUnit extensions is that they usually interface with JUnit in a very simple manner:  by providing their own base class (which you need to extend) and their own `setUp()``/tearDown()` methods (which you need to call in your own `setUp()``/tearDown()`).  And this if course very easy to emulate with TestNG.

With that in mind, using existing JUnit extensions with TestNG is straightforward, as Phil convincingly demonstrates.

Phil actually went even further and leveraged the finer TestNG `@Configuration` methods to provide a `DBUnit` TestNG extension that's even more flexible than its JUnit counterpart.
