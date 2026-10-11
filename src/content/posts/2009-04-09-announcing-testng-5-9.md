---
title: Announcing TestNG 5.9
date: '2009-04-09T13:09:44'
slug: announcing-testng-5-9
categories:
- Java
comments:
- id: 7743
  author: Dmitriy Volk
  date: '2009-04-09T14:10:57'
  content: 'Congratulations on the release.

    Any idea about how well the new version works with Maven/Surefire?'
  replies: []
- id: 7744
  author: lumpynose
  date: '2009-04-09T15:13:18'
  content: 'Sounds really good; congratulations.

    I''m bummed because I can''t use it with Spring because their test framework (e.g., AbstractTransactionalTestNGSpringContextTests) doesn''t do the @Before stuff correctly.  Or something like that.  Fixed in 3.0 if I remember correctly.'
  replies: []
- id: 7745
  author: Alex Ruiz
  date: '2009-04-10T23:57:10'
  content: Congrats C
  replies: []
- id: 7746
  author: Alex Ruiz
  date: '2009-04-11T09:42:09'
  content: 'Oops! My mistake! I was looking for link with a "5.9"...I didn''t see the "download TestNG here" (I blame staying too late at night) :D

    Cheers,

    -Alex'
  replies: []
- id: 7747
  author: Ophir Radnitz
  date: '2009-04-12T14:07:33'
  content: 'Congrats!

    So... no Maven repo1 artifact yet?'
  replies: []
- id: 7748
  author: ''
  date: '2009-04-28T11:21:14'
  content: Not yet in Maven repo?
  replies: []
- id: 7749
  author: Haw-Bin Chai
  date: '2009-04-29T12:33:47'
  content: I'm also wondering why this hasn't been published to the maven.org repositories.
  replies: []
- id: 7750
  author: Dave
  date: '2009-05-05T07:14:59'
  content: 'Where can we log issues for TestNG? I have the issue explained here: jira.opensymphony.com/browse/TESTNG-219. Has this been addressed? I am using 5.9.'
  replies: []
---

I'm happy to announce the release of [TestNG 5.9](http://testng.org). A lot of bug fixes went into this release, and a few noteworthy new features: 

  * Parallelism can now be specified on classes. In the previous versions, you could specify either a setting of `"methods"` (every test method will be run in its own thread) and `"tests"` (all the methods in a given <test> tag will be run in the same thread but each `<test>` tag will run in its own thread). The new `"classes"` setting extends this functionality to test classes: all the test methods in the same class will run in the same thread but each class will have its own thread. Of course, the thread pool size and time out for these three settings are configurable. 

  * You can now specify a time-out on `@Test` methods that use the `invocationCount` attribute. This way, you can specify that a test method should be invoked fifty times but that the maximal time allowed for these fifty invocations is ten seconds. If the invocations don't complete in time, the test will be marked as failed. 

  * A few new interfaces to assist developers who use the TestNG API: `IAnnotationTransformer2` extends the annotation modification capabilities to more than just `@Test` and `IInvokedMethodListener`, which gives you additional monitoring on what test method is being invoked and when. 
A lot of people have contributed patches, fixed and improvements for this release, and their names can be found in the full release notes below. Thank you all! 

**Release notes for TestNG 5.9**

  * Added: New ant task boolean flag: `delegateCommandSystemProperties` (Justin) 
  * Added: `skipfailedinvocations` under `<suite>` in testng-1.0.dtd (Gael Marziou / Stevo Slavic) 
  * Added: `-testrunfactory` on the command line and in the ant task (Vitalyi Pamajonkov) 
  * Added: TESTNG-298: `parallel="classes"`, which allows entire classes to be run in the same thread 
  * Added: `@BeforeMethod` can now declare `Object[]` as a parameter, which will be filled by the parameters of the test method 
  * Added: `IAnnotationTransformer2`
  * Added: `@Test(invocationTimeOut)`, which lets you set a time out for the total time taken by invocationCount 
  * Added: `IInvokedMethodListener`
  * Added: `-testjar` supports jar file with no testng.xml file 
  * Fixed: `IInvokedMethodListener` wasn't properly recognized from the command line (Leonardo Rafaeli) 
  * Fixed: TESTNG-309 Illegal default value for attribute in DTD file 
  * Fixed: TESTNG-192: JUnit XML output includes wrong tests (Aleksandar Borojevic) 
  * Fixed: Set a generated suite to default to non-parallel (Mark Derricutt) 
  * Fixed: `-testJar` command line parsing bug 
  * Fixed: testng-failed.xml didn't include the listeners 
  * Fixed: annotation transformers were not run when specified in testng.xml 
  * Fixed: TESTNG-192: JUnit XML output includes wrong tests (Borojevic) 
  * Fixed: `@Parameters` was not working correctly on `@BeforeMethods` with `@DataProvider` used on `@Test` methods 
  * Fixed: testng-failed.xml was sometimes incorrectly generated (Borojevic) 
  * Fixed: TESTNG-228: `Assert.assertEqualsNoOrder`
  * Fixed: TESTNG-229: `Assert.assertEquals` does not behave properly when arguments are sets 
  * Fixed: TESTNG-36: `assertEquals(Collection actual, Collection expected, String message)` may have bug 
  * Fixed: TESTNG-296: Malformed jar URLs breaking -testJar 
  * Fixed: TESTNG-297: TestNG seemingly never stops running while building failed test suite (Gregg Yost) 
  * Fixed: TESTNG-285: `@Test(sequential=true)` works incorrectly for classes with inheritance 
  * Fixed: TESTNG-254: XmlSuite toXML() ignores listeners 
  * Fixed: TESTNG-276: Thread safety problem in Reporter class 
  * Fixed: TESTNG-277: Make Reporter.getCurrentTestResult() public 
  * Fixed: Potential NPE in `XmlTest#getVerbose` (Ryan Morgan) 
  * Fixed: EmailableReporter only displayed the first group for each test method 
  * Fixed: time-outs were not working in `<test>` and `<suite>
  * Fixed:` `@BeforeTest` failing in a base class would not cause subsequent test methods to be skipped 
  * Fixed: TESTNG-195: `@AfterMethod` has no way of knowing if the current test failed 
  * Fixed: TESTNG-249: Overridden test methods were shadowing each other if specified with `<include>
  * Fixed:` DataProviders from `@Factory`-created tests were all invoked from the same instance 
  * Fixed: enabled was not working on configuration methods 
  * Fixed: `IIinvokedMethodListener` was not correctly added in TestNG 
  * Fixed: NPE in `XmlSuite#toXml`
  * Fixed: TESTNG-231: NullPointerException thrown converting a suite to XML (Mark)
