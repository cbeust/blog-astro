---
title: Announcing TestNG 5.0
date: '2006-07-19T09:06:42'
slug: announcing-testng-5-0
categories:
- Java
comments:
- id: 5789
  author: Matt
  date: '2006-07-19T13:32:43'
  content: But why did you reduce the mana cost of Lightning bolt?  Any why just 17%?
  replies: []
- id: 5790
  author: Hani Suleiman
  date: '2006-07-19T13:35:54'
  content: Damn, and I was hoping Shadow Bolt's mana cost would go down. Oh well, maybe TNG 6.0or in some other upcoming patch...
  replies: []
- id: 5791
  author: ''
  date: '2006-07-19T13:46:55'
  content: Nerf Shaman
  replies: []
- id: 5792
  author: t800t8
  date: '2006-07-19T18:41:54'
  content: Cedric, seems you miss @Test's expectedExceptions in TestNG documentation (http://testng.org/doc/documentation-main.html)
  replies: []
- id: 5793
  author: ''
  date: '2006-07-19T22:55:23'
  content: will this work?
  replies: []
- id: 5794
  author: x
  date: '2006-07-19T22:56:39'
  content: and now, will *this* work?
  replies: []
- id: 5795
  author: call2biz
  date: '2006-07-20T00:41:47'
  content: 'wwww.call2biz .com  How about launching your store on

    Call2biz.com with one of your smartest bets,

    I bet you your hot items will be sold out soon.

    With its protecting system, your business interest

    will be guard against those business scams,

    you wonder like me where to start your business

    on Call2biz.com, the Call2biz.com is your source of

    detail information need to do it. We would help you

    and marketing your products without any charges of

    fees! You will save up to 100% and earn more easy

    money on Call2biz.com. with a only computer and phone

    at your home, you can, while being successful,

    enjoy this easy-money-making experience online.

    A homebased business will begin at Call2biz.com.

    lily'
  replies: []
- id: 5796
  author: t880t8
  date: '2006-07-20T18:00:57'
  content: 'Cedric,

    Also you forgot to discard @ExpectedExceptions.'
  replies: []
- id: 5797
  author: will ortiz
  date: '2006-07-28T10:12:13'
  content: 'Did you really mean:

    "Read on, because this is

    no unusual

    product announcement!" ?'
  replies: []
- id: 5798
  author: '&#24322;&#22411;&#38050;&#31649;'
  date: '2006-08-10T22:14:58'
  content: '&#24322;&#22411;&#38050;&#31649;'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/wow1.jpg)

I'm happy to announce the [immediate availability of TestNG 5.0](http://testng.org). 

A lot has gone into this release, and instead of boring you with a standard product announcement, I thought I'd try something new by giving you not only the list of the new features (at least the most important ones) but also a quick explanation why this feature was added.  Read on, because this is no unusual product announcement!

Let's start with a quick overview of the main TestNG 5.0 features:

  * The configuration annotations are now called `@BeforeTest`, `@BeforeSuite`, etc... 
  * The reports are now created in their own directory (one per suite) and a main index file shows a list of all the suites that were just run.  They have also received a series of improvements in appearance and content.
  * It is now possible to specify the suite and test names directly in the `@Test` annotations, which allows you to do without a testng.xml. 
  * `expectedExceptions` has moved inside `@Test`.
  * TestNG shows you friendly stack traces.
  * Lightning Bolt:  Mana cost reduced approximately 17%.



Okay, I was just kidding about that last one.  Just making sure you're paying attention.

Let's go into details now.

**Configuration annotations**

In the early days of TestNG, the idea of an annotation that would indicate that a method has a special role was obvious to me.  What was not obvious was:  what should it be called?  Believe it or not, I was already hesitating back then between `@BeforeSuite` and `@Configuration(beforeSuite = true)`.  That was two years ago.

I could find virtues in either of these approaches, but I eventually opted for the latter because of IDE support.  I thought that if all the configuration options can be gathered under one convenient annotation, it would be very easy for an IDE user to have a list of everything that's available:  they can just type `@Configuration(<ctrl-space>` and they would get the full list.

I still think this argument holds, but one can argue that it's equally easy to type `@Before<ctrl-space>` to get a list of all the "before types" that you can use.  On top of that, the newer style has two extra benefits:

  * It's less verbose (compare the two versions above).  
 
  * It is more obvious that configuration annotations should not mix with each other.  That's a downside of the approach I initially chose:  while it is legal to specify several booleans (`@Configuration(beforeSuite = true, beforeTest = true)`), it doesn't make a lot of sense, and the shorter version makes this a bit clearer.



Of course, the old annotations are still recognized, but they are now deprecated.

**New report structure**

While TestNG lets you invoke multiple test suites easily (e.g. `java org.testng.TestNG testng1.xml testng2.xml`), the reports didn't maintain this distinction and bunched up all the results in the main output directory.  I thought I would take advantage of this release to clean up this structure and have each suite create its reports in its own directory (named after the suite name).  Additionally, the output directory now contains a single ` index.html` that gives a composite view (and links) of all the suites that were run along with their outcome.

Also, the reports are now using a CSS file and their appearance has been improved.  They also contain additional information, such as a pointer to the `testng.xml` that was used for a particular suite.

**suiteName and testName**

These two attributes belong to the `@Test` annotation and they can be used as follows:

> @Test(suiteName = "My suite", testName = "My test")  
>  public class Test { 

This feature will be of interest to users who don't want to use a testng.xml and, instead, prefer to use the command line or ant to invoke their test suite.  With these two new attributes, these users can now get the benefit of seeing their test suites end up in a specific report.

Of course, classes that use these attributes will have their reports generated in the structures as described in the previous paragraph.

**expectedExceptions**

This attribute used to have its own annotation (`@ExpectedExceptions`), but it was pointed to me that this annotation made little sense if it wasn't coupled with a `@Test` annotation, so this was definitely a design mistake that needed to be corrected.  As of 5.0, `@ExpectedExceptions` is deprecated and you should now use the new `expectedExceptions` attribute from @Test:

> @Test(expectedExceptions = NumberFormatException.class)  
>  public void shouldThrow() {

**Friendly stack traces**

This was another heavily-requested feature.  Whenever a test fails, it does so with an AssertionException which shows the entire stack trace, including TestNG's internal frames, reflection, etc...  These stack traces will now be hidden by default so that the report only shows what you really care about:

Before:

> java.lang.NullPointerException  
>  at java.util.Hashtable.put(Hashtable.java:396)  
>  at java.util.Properties.setProperty(Properties.java:128)  
>  at org.testng.xml.XmlSuite.toXml(XmlSuite.java:318)  
>  at org.testng.reporters.SuiteHTMLReporter.generateXmlFile(SuiteHTMLReporter.java:81)  
>  at org.testng.reporters.SuiteHTMLReporter.generateReport(SuiteHTMLReporter.java:72)  
>  at org.testng.TestNG.run(TestNG.java:613)  
>  at test.configuration.BeforeTestOrderingTest.verifyBeforeTestOrdering(BeforeTestOrderingTest.java:47)  
>  at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)  
>  at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)  
>  at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)  
>  at java.lang.reflect.Method.invoke(Method.java:585)  
>  at org.testng.internal.MethodHelper.invokeMethod(MethodHelper.java:552)  
>  at org.testng.internal.Invoker.invokeMethod(Invoker.java:411)  
>  at org.testng.internal.Invoker.invokeTestMethods(Invoker.java:785)  
>  at org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:110)  
>  at org.testng.TestRunner.privateRun(TestRunner.java:687)  
>  at org.testng.TestRunner.run(TestRunner.java:567)  
>  at org.testng.SuiteRunner.privateRun(SuiteRunner.java:242)  
>  at org.testng.SuiteRunner.run(SuiteRunner.java:148)  
>  at org.testng.TestNG.createAndRunSuiteRunners(TestNG.java:899)  
>  at org.testng.TestNG.runSuitesLocally(TestNG.java:861)  
>  at org.testng.TestNG.run(TestNG.java:611)  
>  at org.testng.TestNG.privateMain(TestNG.java:999)  
>  at org.testng.TestNG.main(TestNG.java:936)

After:

> java.lang.NullPointerException  
>  at java.util.Hashtable.put(Hashtable.java:396)  
>  at java.util.Properties.setProperty(Properties.java:128)  
>  at test.configuration.BeforeTestOrderingTest.verifyBeforeTestOrdering(BeforeTestOrderingTest.java:47)  
>  ... Removed 21 stack frames, _click here to show them_.

Finally, here is the complete TestNG 5.0 change log:

  * Added: Stack traces can be interactively shown in the HTML reports
  * Added: Link to testng.xml in the reports
  * Added: Ant task: support for JVM, workingDir, timeout
  * Added: New structure for reports, suites go in their individual directory
  * Added: @Test(suiteName) and @Test(testName)
  * Added: The stack traces in reports do not include TestNG frames (system property testng.exception)  
see: [ http://groups.google.com/group/testng-dev/browse_thread/thread/9f4d46ade10b0fda](http://groups.google.com/group/testng-dev/browse_thread/thread/9f4d46ade10b0fda))
  * Fixed: Exit with error when no methods are run  
(see: [ http://groups.google.com/group/testng-dev/browse_thread/thread/3c26e8a5658f22ac](http://groups.google.com/group/testng-dev/browse_thread/thread/3c26e8a5658f22ac))
  * Added: List of methods in alphabetical order
  * Fixed: Class-scoped annotations were not recognized when inherited
  * Added: Deprecated @Configuration and introduced @BeforeSuite/Test/Class/TestMethod
  * Added: Deprecated @ExpectedExceptions and moved it into @Test
  * Added: expectedExceptions to @Test, deprecated @ExpectedExceptions
  * Added: New annotations: @BeforeSuite, @BeforeTest, etc...
  * Fixed: Was returning an exit code of 0 if a cyclic graph was detected
  * Added: Interface org.testng.ITest so that tests can declare a name  
Fixed: The Text reporter was reporting the square of the actual number of methods
  * Fixed: Bug reported by Eran about dependencies with an afterClass method
  * Added: IHookCallBack now receives the ITestResult in its run() method
  * Added: Name of suite for command line can be set with -Dtestng.suite.name=xxx
  * Fixed: TestNGAntTask was hardcoding m_haltOnFSP to true
  * Fixed: Passing a null parameter caused an NPE in the reports
  * Added: "listener" to the ant task (and documentation)
  * Added: if patch-testng-sourcedir.properties is found in the classpath  
with a property "sourcedir" containing a ; separated list of  
directories, this list will override -sourcedir.



[Download TestNG 5.0.](http://testng.org)
