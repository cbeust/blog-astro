---
title: Announcing TestNG 5.13.1
date: '2010-08-05T08:41:23'
slug: announcing-testng-5-13-1
categories:
- General
comments:
- id: 8359
  author: Christophe Vanfleteren
  date: '2010-08-05T08:49:04'
  content: You've got a bad link to the downloads, I assume you mean http://testng.org/doc/download.html instead :)
  replies: []
- id: 8360
  author: Pedro Newsletter 16.08.2010 &laquo; Pragmatic Programmer Issues &#8211; pietrowski.info
  date: '2010-08-17T02:44:27'
  content: '[...] TestNG 5.13.1 was released. [...]'
  replies: []
- id: 8361
  author: lei
  date: '2010-08-25T21:38:35'
  content: Hi ,I specified preserve-order="true" in the  tag, but it seems that TestNG does not  run my classes in the same order I listed them.Why?Thanks in advance.
  replies: []
- id: 8362
  author: hlamik
  date: '2010-09-24T00:30:33'
  content: 'The same for me - it looks that preserve-order=??true?? doesn''t work at all. Sometimes when I have 2 classes - the second one also starts first. If I add one more class - it is OK. Adding one more class leads to run commands randomly.

    Could someone help me? Thank you.'
  replies: []
- id: 8363
  author: rina solomon
  date: '2010-10-12T08:31:09'
  content: I run tests using ant,  preserve-order="true" doesn't work for testng-5.14 as well. It's very strange because when I run it in Eclipse the test flow saves its order as in testng.xml appears.
  replies: []
- id: 8364
  author: Miller
  date: '2010-11-23T16:07:31'
  content: I run testd with version 5.13.1 and not able to get preserve-order work as well. Did I miss something? Thanks,
  replies: []
- id: 8365
  author: aeren
  date: '2011-02-10T02:49:44'
  content: I have the same problem with preserve-order. It doesn't work. I have tried to run tests in many ways from eclipse, but it seems that testng don't take into account preserve-order attribute at all.
  replies: []
---

TestNG 5.13.1 is now available. The previous release was just three months ago, but as you can see below, a lot of fixes went into this new version. A big thanks to everyone who helped (hopefully credited below), and especially to Nalin Makar, who made some major contributions to TestNG these past months. 

You can either download TestNG [from the web site](http://testng.org/doc/download.html) or from Maven: 

```text
      org.testng
      testng
      5.13.1
      test
```

Here is the complete list of changes, please refer to [the documentation](http://testng.org) for more details. 

### TestNG

  * _Added:_ -methods 
  * _Added:_ -configfailurepolicy (Todd Quessenberry) 
  * _Added:_ -methodselectors (Todd Quessenberry) 
  * _Added:_ `@NoInjection`
  * _Added:_ `<test preserve-order="true">`
  * _Added:_ -testnames (command line) and testnames (ant) 
  * _Added:_ New ant task tag: propertyset (Todd Wells) 
  * _Added:_ `ITestNGListenerFactory`
  * _Added:_ Passing command line properties via the ant task and doc update (Todd Wells) 
  * _Added:_ Hierarchical XmlSuites (Nalin Makar) 
  * _Added:_ `Reporter#clear()`
  * _Fixed:_ NullPointerException when a suite produces no results (Cefn Hoile) 
  * _Fixed:_ Identical configuration methods were not always invoked in the correct order in superclasses (Nalin Makar) 
  * _Fixed:_ `@DataProvider(parallel = true)` was passing incorrect parameters with injection 
  * _Fixed:_ Replaced `@Test(sequential)` with `@Test(singleThreaded)`
  * _Fixed:_ If inherited configuration methods had defined deps, they could be invoked in incorrect order (Nalin Makar) 
  * _Fixed:_ Initialize all Suite/Test runners at beginning to catch configuration issues right at start (Nalin Makar) 
  * _Fixed:_ Issue7: Issue86 Incorrect dates reported for configuration methods 
  * _Fixed:_ Issue24: OOM errors in SuiteHTMLReporter (Nalin Makar) 
  * _Fixed:_ Time outs specified in XML were not honored for <suite parallel="tests">
  * _Fixed:_ <suite> and <test> time outs were hardcoded, they now honor their time-out attribute 
  * _Fixed:_ TestNG was hanging if no test methods were found 
  * _Fixed:_ `onTestSuccess()` was called after `@AfterMethod` instead of after the test method (test: test.listener.ListenerTest) 
  * _Fixed:_ XML test results contained `skipfailedinvocationCounts` instead of `skipfailedinvocationcounts`
  * _Fixed:_ Issue4 assertEquals for primitive arrays, Issue34 assertNull javadoc updated 
  * _Fixed:_ Issue78 NPE with non-public class. Now throws TestNG exception 
  * _Fixed:_ NPE with `@Optional` null parameters (Yves Dessertine) 
  * _Fixed:_ TESTNG-387 TestNG not rerunning test method with the right data set from Data Provider (Fran??ois Reynaud) 
  * _Fixed:_ Show correct number of pass/failed numbers for tests using @DataProvider 
  * _Fixed:_ Return correct method status and exception (if any) in `InvokedMethodListener.afterInvocation()`
  * _Fixed:_ Trivial fixes: TESTNG-241 (log message at Info), Issue2 (throw SAXException and not NPE for invalid testng xml) 
  * _Fixed:_ Configuration methods couldn't depend on an abstract method (Nalin Makar) 
  * _Fixed:_ `TestNG#setTestClasse`s was not resetting m_suites 
  * _Fixed:_ Exceptions thrown by `IInvokedMethodListeners` were not caught (Nalin Makar) 
  * _Fixed:_ `@Listeners` now works on base classes as well 
  * _Fixed:_ Test priorities were not working properly in non-parallel mode 
  * _Fixed:_ `@Listeners` wasn't working properly with ITestListener 


### Eclipse

  * _Fixed:_ TESTNG-395 New wizard was creating classes called "NewTest" 
  * _Fixed:_ TESTNG-397 Class level @Test was preventing groups from showing up in the launch configuration 


### Doc

  * Updated Maven documentation (Brett Porter)
