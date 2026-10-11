---
title: Announcing TestNG 2.0!
date: '2004-12-06T08:31:36'
slug: announcing-testng-2-0
categories:
- Java
comments:
- id: 2903
  author: Daniel Grenner
  date: '2004-12-07T23:44:22'
  content: This is great! I've wanted to start using TestNG for some time, but since I've been stuck in JDK 1.4 development I have not been able to switch before. I look forward to trying it out.
  replies: []
---

I am very happy to announce the availability of [TestNG 2.0](http://beust.com/weblog/testng)!

TestNG is a testing framework that fixes most of JUnit's deficiencies and innovates in a number of ways:  use of annotations, configurable dynamic invocation (no need to recompile), test method groups, dependent methods, external parameters, etc...

There is only one new feature in this release, but it's quite a big one:  JDK 1.4 support.

Thanks to the restless efforts of Alexander "Mindstorm" Popescu, TestNG can now be run with JDK 1.4, using the familiar JavaDoc annotations.

Here is an example:

```java
import com.beust.testng.annotations.*;
public class SimpleTest {
/**
* @testng.configuration beforeTestClass = "true"
*/
public void setUp() {
// code that will be invoked when this test is instantiated
}
/**
* @testng.test groups = "functest"
*/
public void testItWorks() {
// your test code
}
}
```

Using TestNG with JDK 1.4 is straightforward and very similar to how you invoke it with JDK 1.5, which will make future migrations easy:

  * Include the TestNG jdk14 jar file in your classpath
  * Specify a _srcdir_ attribute in the testng ant task, so TestNG can locate your annotated sources



And that's all!  TestNG works exactly the same regardless of whether you use JavaDoc or JDK 1.5 annotations, and all the regression tests have been updated to make sure both versions cover the exact same features.  For the record, we are using the excellent [QDox](http://qdox.codehaus.org/) to parse annotations and Doug Lea's original concurrent utilities to implement parallel test runs.
