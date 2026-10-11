---
title: Announcing TestNG 1.0!
date: '2004-09-01T18:42:56'
slug: announcing-testng-1-0
categories:
- Java
comments:
- id: 2299
  author: Euxx
  date: '2004-09-02T04:56:29'
  content: '<strong>TestNG 1.0 and missing integration for Eclipse.</strong>

    Cedric  announced  TestNG 1.0. Too bad it is only work on Java 5 and have integration with none of popular IDE. It would be really interesting to see how it would fit into Eclipse to continue good tradition of innovation and remove ugliness and limitation'
  replies: []
- id: 2300
  author: Blue Sky On Mars
  date: '2004-09-05T05:28:38'
  content: '<strong>Cedric releases TestNG 1.0 released</strong>

    Cedric has released TestNG 1.0!. It''s very good to see activity in this area, and I think the annotations approach seems like a good one. Though I am likely to be using Java 1.5 soon, I plan to really give...'
  replies: []
- id: 2292
  author: Carlos de Luna
  date: '2005-12-28T16:02:51'
  content: 'I am trying to use testng on eclipse, all seems to be fine, but the plugin doesn''t recognize the annotations, i am using a package tag on the XML file to set all the clases on the "test.whatever" package to be reviewed for testng...

    where can i find more examples with the 1.4 JDK?

    Greetings'
  replies: []
- id: 2293
  author: Eko SW
  date: '2006-08-26T20:51:07'
  content: 'I am interested in TestNG as AppFuse embark it.

    I plan to use it...

    Thanks.

    http://swdev.blogs.friendster.com/my_blog/'
  replies: []
- id: 2294
  author: Ana
  date: '2007-01-30T13:33:32'
  content: 'Hello Cedric,

    is there a way to use groups with @Factory annotation? Right now I have a configuration file that specifies all my tests. I have a @DataProvider that reads the file and passes the info to @Factory method which instantiates the actual test objects. The @Test method is generic for all tests. How can I still use the grouping functionality with such a way of instantiating my test classes? Is there a way to  specify the various groups in my configuration file and somehow pass that along to the @Factory method?

    Thank you for the help!! Ana'
  replies: []
- id: 2295
  author: Andr
  date: '2007-08-07T15:00:06'
  content: HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  replies: []
- id: 2296
  author: David
  date: '2007-09-21T11:26:09'
  content: Can I find a testNG Eclipse plug-in?
  replies: []
- id: 2297
  author: Prasoon Kumar
  date: '2008-04-02T06:10:41'
  content: Does testNG supports java 1.6
  replies: []
- id: 2298
  author: Bhupinder Singh
  date: '2008-06-02T22:29:44'
  content: 'I have just downloaded the tool. Will let you know as I sail in the features provided. Looks great from the documentation provided. Just wrote my first test but waiting to get it executed!

    CHEERS!!!'
  replies: []
---

I am happy to announce the availability of [TestNG 1.0](http://beust.com/weblog/testng). A lot of changes have been made since the early releases thanks to the recent addition of Jolly Chen to the team.

As a quick reminder, TestNG is a testing framework using annotations to provide a more powerful way to test your code in various ways: unit, regression, functional, integration, etc... TestNG allows you to clearly separate your Java code from the way your tests are run. You never need to recompile any of your classes if you decide to run a different set of tests or suites.

TestNG also provides a very flexible configuration mechanism allowing you to specify arbitrary methods to be invoked at particular moments during your test run, such as "before every test method" or "after all the test methods have run".

Here is a quick example of what TestNG code looks like:

```java
import com.beust.testng.annotations.*;

public class SimpleTest {
    @Configuration(beforeTestClass = true)
    public void setUp() {
    // code that will be invoked when this test is instantiated
}

    @Test(groups = { "functest" })
    public void itWorks() {
      // This method will be invoked if the current run
      // includes the group "functest"
    }
}
```

Some of the major changes since the previous versions include:

  * **XML**. The property files were easy to work with in the beginning but it was quickly obvious that they wouldn't scale. Now, the information for a suite run (which contains several tests, each test containing several classes) is conveniently located in one XML file.
  * **Dependent methods**. With this feature, you can guarantee that certain groups of methods are always invoked before others. If the dependents didn't run or fail, the method will be marked as a SKIP, which can be seen as less critical than a FAILURE since SKIPs will typically be automatically resolved when the FAILURE that caused them is fixed.
  * **Groups of groups**. Once you have specified that your test methods belong in specific groups, you can specify bigger groups, giving you a lot of flexibility on exactly what tests are run each time.
  * **Better reporting**. Not only does TestNG have its [own HTML reporting](http://beust.com/weblog/testng/test-output/index.html), it is also compatible with JUnitReport. You can see an example [here](http://beust.com/weblog/testng/test-report/junit-noframes.html).
  * **Open API**. TestNG exposes its engine with a convenient set of listeners which allow you to plug-in your own reporting mechanism or for any other purpose (as a matter of fact, the JUnitReport code is such a listener). It is also trivial to invoke TestNG programmatically, thus skipping the XML phase and providing TestNG with direct Java objects.



The XML is fully validate and has a [public DTD](http://beust.com/weblog/testng/testng-1.0.dtd), but here is a quick description. testng.xml lets you specify a test Suite, which contains parameters and tests. Tests contain three kinds of data:

  * **Parameters** , which override the Suite parameters.
  * **Groups** , made of two parts, definitions and runs.
  * **Classes** , which define which classes are going to be part of this test run



In turn, groups are made of two parts:

  * **Definitions** , when you want to create groups that contain other groups.
  * **Runs** , which specify the groups to be run.



The TODO list for future versions is pretty long but this version should give you a good idea of the future directions.

[Download TestNG](http://beust.com/weblog/testng) and try it, you won't regret it!
