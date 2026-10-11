---
title: Using annotation inheritance for testing
date: '2004-08-18T09:41:45'
slug: using-annotation-inheritance-for-testing
categories:
- General
comments:
- id: 2198
  author: Jonathan Ellis
  date: '2004-08-18T10:43:38'
  content: 'It''s also easier to type

    find . -name "*.java" | xargs grep TODO

    :)'
  replies: []
- id: 2199
  author: Lasse
  date: '2004-08-18T12:49:14'
  content: It's even easier to do nothing and let Eclipse tell you where your TODO markers are...
  replies: []
- id: 2200
  author: Suraj
  date: '2004-08-18T17:54:11'
  content: 'Grep can also search recursively and match filename patterns:

    grep -r --include="*.java" TODO .'
  replies: []
- id: 2201
  author: Andy
  date: '2004-08-19T01:25:17'
  content: 'Not all greps are recursive.

    Windows search sucks.'
  replies: []
- id: 2202
  author: Frank Nestel
  date: '2004-08-19T05:40:45'
  content: Recent cygwin grep work recursive and have the power of regexp. I'd bet a windows supporting this will not come within this decade...
  replies: []
- id: 2203
  author: Tim
  date: '2004-08-19T07:50:20'
  content: 'Even better, Use IntelliJ IDEA as your IDE and let it tell you where the TODO markers are.

    If you want to find something else, it has full regex support as well as Structural search, Usage search, implementor search, ...

    And, since you are probably searching in order to change something, the powerful refactoring in IDEA does all that searching and code modification for you.'
  replies: []
- id: 2204
  author: Stepan Samarin
  date: '2004-09-28T07:24:26'
  content: Cedric, I don't really understand the benefit of inheritance in this case. Ok, child class "sees" methods and group of the parent. May be it'd be better to accomplish this task on the level of TestNG? Without inheritance mechanism? I do use inheritance when I have a serious reason to do this like polymorphic behaviour...
  replies: []
- id: 2205
  author: Garry
  date: '2006-10-13T03:34:22'
  content: '1'
  replies: []
---

Imagine I am trying to test a server.  In order to do this, my test class will contain the following test methods:

  * Check that we are running the correct JVM.
  * Check that the server started correctly.
  * About twenty methods making various calls to the server.



Obviously, the first two test methods listed above should be run before everything else.  The way you would do this with JUnit is to put the first two methods in the initialization code, which will probably have to be static since JUnit instantiates a new object before each test method invocation, and we can't use setUp() either since it's invoked before each test method.  This initialization code will set two booleans and the twenty test methods will have to test for these two booleans before proceeding, and if one of them is false, it will fail.

Now let's assume that on a test run, I used the wrong JVM.  In this case, JUnit will probably report this in the initialization code and it will then report twenty more failures for each test method.

This is very bad for a variety of reasons:

  * The initialization code is not in a test method per itself.  This is bad because report of its success/failure will be done in a separate track.
  * When QA reads the result of this test run, they will see "1 SUCCESS, 21 FAILS" and they will, rightfully, get really scared.
  * Upon reading of this result, QA will have to provision for fixing 20 tests, while the reality is that only one test failed.



This is why I believe that a test framework needs to provide support for "dependent test methods", where you can mark test method b() as depending on the successful run of test method a().  If a() failed, then b() will be marked as a SKIP, and not a FAIL.

With such a feature, the test run will be marked "1 SUCCESS, 1 FAIL, 20 SKIPS", which is much more accurate.

Here is how I would write this test using [TestNG](http://beust.com/weblog/testng/):

```java
@Test
public correctVM() {}
@Test
public serverStartedOk() {}
@Test(dependsOnMethods = { "correctVM", "serverStartedOk" })
public method1() {}
...
```

This is a good start, but having to list all the methods that we depend on for each new test method on is error-prone, so instead, let's use TestNG's groups:

```java
@Test(groups = { "init" })
public correctVM() {}
@Test(groups = { "init" })
public serverStartedOk() {}
@Test(dependsOnGroups = { "init.* })
public method1() {}
...
```

We have gained a lot of flexibility with groups.  For example, imagine that I want to add another init test method, such as "firewall is on".  All I need to do is add this test method and declare that it is part of the group "init".

Also, note that I used a regular expression in the "dependsOnGroups" declaration, as a reminder that you can actually define several init groups (such as "initOS", "initJVM", etc...) and they will automatically be run before any test method is invoked.

But we can do even better.

In the above example, I don't like the fact that whenever I add a new "real" test method, I need to remember to specify that it depends on the group "init.*".  In TestNG, the traditional way to indicate that an annotation should apply to all test methods is to move this annotation at the class level.

Also, I don't like the fact that "init" methods and "real" test methods are in the same class, so I'd like to use inheritance to provide a cleaner separation of roles.

Therefore, I will restructure my tests like this:  

```java
@Test(groups = "init")
public class BaseTest {
public correctVM() {}
public serverStartedOk() {}
}
```

This is now the base class for my tests.  The @Test annotation is now on the class, which means it applies to all the public methods inside that class (so there is no need to repeat it on each individual method).  Therefore, each public method automatically becomes part of the group "init".

Next, I write my test class as a subclass of BaseTest:

```java
@Test(dependsOnGroups = { "init.*" })
public class TestServer extends BaseTest {
public method1() { ... }
public method2() { ... }
...
}
```

Here again, the @Test annotation is now on the class, which means that it applies to all the public test methods, making it easier to add new testing methods.  Also, since this class extends BaseTest, it "sees" not only the methods that are being inherited, but their annotations as well, so TestNG will include all the methods from the base class that belong to the "init.*" group to determine which methods need to be run first.

What's the overall result?

  * Two classes that have responsibilities that are very clearly delineated.  
 
  * Very easy maintenance and evolution, since adding test methods (whether they are init or "real" test methods) boils down to just adding these methods to the right class (no need to annotate them).  A newcomer doesn't even need to know about what annotations that are needed to get all this to work.  
 
  * A report that will accurately reflect the result of the test runs and will correctly identify the real failures from those that are caused by a cascade effect, and whose resolution should therefore be postponed until all the FAILs have been resolved.
