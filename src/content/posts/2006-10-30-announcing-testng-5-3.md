---
title: Announcing TestNG 5.3
date: '2006-10-30T08:01:00'
slug: announcing-testng-5-3
categories:
- Java
comments:
- id: 6102
  author: rb
  date: '2006-11-02T01:21:06'
  content: 'Excellent!

    Cedric, does TestNG have the capability to define database-related test methods that perform a rollback() at the end? I mean, as in the Spring''s abstract base class.

    ThankQ!'
  replies: []
- id: 6103
  author: henrik lynggaard
  date: '2006-11-07T11:59:24'
  content: 'I really like to start using TestNG, but whenever I take a look at it I get stuck at a particualer point.

    In JUnit I am using cactus to do in container testing, and I don''t know what to replace cactus with in the TextNG world.

    My setup is using hudson (hudson.dev.java.net)  and maven2 to build the program and run the unittests

    What is the recommended way of doing testNG in container testing ?'
  replies: []
- id: 6104
  author: ''
  date: '2006-11-26T09:32:11'
  content: I use Cargo to start up a container to test my Webapps.  Perhaps that might be what you're looking for.  I've never used Cactus, so it's hard to say whether or not it'll be equivalent for your needs.
  replies: []
- id: 6105
  author: Mathew
  date: '2006-12-06T07:53:20'
  content: Hei! I esteem people that can do something like that! I have a friend - he is cool in programming!
  replies: []
- id: 6106
  author: sdff
  date: '2007-01-17T19:34:06'
  content: asdf
  replies: []
---

I'm pleased to announce the immediate [availability of TestNG 5.3](http://testng.org).  
  
The main feature in this new release is the introduction of Annotation Transformers, that I described in a [previous post](http://beust.com/weblog/weblog/mt-cedricqwerty.cgi?entry_id=418).  The full documentation for Annotation Transformers can be found [here](http://testng.org/doc/documentation-main.html#annotationtransformers).  As you can see below, the change log is quite big as well, so if we failed to fix a bug you reported or an improvement you requested, please let us know and we'll try to get it in for the next release!  
  
Thanks to all who helped make 5.3 a reality!  
  
Core  


  * Fixed: use a single instance of bsh.Interpreter
  * Added: @Before/@AfterMethod can declare a java.lang.reflect.Method parameter to be informed about the @Test method
  * Fixed: super classes must not be listed in testng-failures.xml
  * Fixed: parallel attribute must not appear if empty or null in testng-failures.xml
  * Fixed: parsing for javadoc annotations is done on request only
  * Added: improved multiple suite summary page report
  * Added: -target option deprecated in favor of -annotations javadoc|jdk
  * Fixed: filesets in the ant task didn't work if the paths have spaces in them
  * Fixed: Before/After Suite were behaving wrong in parallel execution
  * Added: A generic/extensible RemoteTestNG was added to the core
  * Fixed: Before/AfterGroup-s were behaving wrong when using invocationCount, dataProvider and threadPoolSize
  * Fixed: improved support for running different annotation type tests in the same suite
  * Fixed: testng-failed.xml was generated even if there were no failures/skipps
  * Fixed: -usedefaultlisteners was wrongly passed to JVM instead of TestNG options
  * Added: Attribute dataProviderClass for @Test and @testng.test
  * Fixed: Forgot to account for cases where both invocationCount and DataProviders are present
  * Fixed: AfterGroups were invoked out of order with invocationCount and DataProviders
  * Fixed: Reporter.getOutput() returned an empty array if a timeOut was specified
  * Added: testng.xml now supports <suite-files>
  * Added: ant task can receive several listeners
  * Fixed: TESTNG-109 Skipped tests with expected exceptions are reported as failures
  * Added: ant task can now select the parallel mode for running tests
  * Fixed: ant task correctly deals with empty groups and excludedgroups parameters
  * Added: ant task can override default suite and test names
  * Added: comand line support for setting parallel mode, suite and test names

  
Eclipse plug-in  


  * Added: Support for configuring per project usedefaultlisteners
  * Added: Contextual drop-down menu on failures tab of the TestNG view to enable running/debugging method failure only
  * Added: Suppport for configuring per project TestNG jar usage (project provided one or plugin provided one)
