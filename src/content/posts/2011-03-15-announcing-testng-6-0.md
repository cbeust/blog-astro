---
title: Announcing TestNG 6.0
date: '2011-03-15T14:12:28'
slug: announcing-testng-6-0
categories:
- Java
- TestNG
comments:
- id: 8867
  author: Mohamed Mansour
  date: '2011-03-15T14:23:40'
  content: Sweet :) Congrats on the release! This should be called 10.0 too many features to be true!
  replies: []
- id: 8868
  author: Jason Porter
  date: '2011-03-15T15:21:30'
  content: Great news. Can the Guice work be modified or extended to work with other JSR 330 impls? I'm think about arquillian here and what Aslak has done. Very nice work though!
  replies: []
- id: 8869
  author: victorcai
  date: '2011-03-15T17:14:10'
  content: Good news, I will try it immediately
  replies: []
- id: 8870
  author: Danny
  date: '2011-03-15T18:47:10'
  content: Maven dependency works great but can't find the 6.0 eclipse plug-in on the update site. Still at 5.14 :)
  replies: []
- id: 8871
  author: Cedric
  date: '2011-03-15T18:53:33'
  content: 'Hi Danny,

    Yes I need to bump the version number, but the current one is exactly identical to 6.0, FYI, it''s just a matter of packaging the "official" testng-6.0.jar in it.'
  replies: []
- id: 8872
  author: Dev{eloper} Stonez
  date: '2011-03-15T20:55:33'
  content: 'Great release,  my congrats !

    I also tweet about this, but also wanted to put it here since it doesn''t really fith in 140 chars :)

    It''s a delight to use TestNG, and I push it in all my projects ... except the Android ones :(

    So, since you''ve also been a Googler'' for quite long time,  can you please point me to some resources (articles, blogs, samples) that demonstrate usage of TestNG for Android integration testing ? Maybe this will imply a blog post with details ;)

    10x again for you hard work with testNG and keeping it in a very good shape !'
  replies: []
- id: 8873
  author: Tomek Kaczanowski
  date: '2011-03-15T22:22:56'
  content: 'Congrats on the release, keep on coding :)

    BTW. I was rather surprised by 6.0, there were no signs you are planning to release it.'
  replies: []
- id: 8874
  author: Rog??rio Liesenfeld
  date: '2011-03-16T04:44:08'
  content: The download page (http://testng.org/doc/download.html) is still pointing to testng-5.14.10.zip)...
  replies: []
- id: 8875
  author: Cedric
  date: '2011-03-16T09:27:02'
  content: I have updated the update page and the Eclipse plug-in version number as well.
  replies: []
- id: 8876
  author: Pedro Newsletter 16.03.2011 &laquo; Pragmatic Programmer Issues &#8211; pietrowski.info
  date: '2011-03-16T11:54:03'
  content: '[...] 6.0 was released. Eclipse plugin was improved, plus YAML as test suit description, plus Guice means great [...]'
  replies: []
- id: 8877
  author: Dev{eloper} Stonez
  date: '2011-03-17T20:32:09'
  content: Hi Cedric, I sent you 2 emails ? Did you've receive them ... or are eaten by spam filter ?!
  replies: []
- id: 8878
  author: Jose
  date: '2011-03-17T21:42:00'
  content: Congrats on the release
  replies: []
- id: 8879
  author: Andreas
  date: '2011-03-21T03:52:49'
  content: Does TestNG filter out synthetic (compiler-generated) methods now? It makes it easier to tests Scala/Groovy code.
  replies: []
- id: 8880
  author: Nirav Sanghavi
  date: '2011-03-22T21:54:19'
  content: Congratulations for the official release of 6.0!!!
  replies: []
---

I'm happy to announce the release of TestNG 6.0. A lot of changes have gone into this release, which have slowly accumulated in the 5.14 line over the past few months. I'll go over the most important features and bug fixes in this entry and I'm including the full change log at the bottom of this post. 

If I had to pick the most prominent features for TestNG 6.0, they would be: 

  * YAML. 
  * Guice. 
  * Improvements to the Eclipse plug-in. 


### YAML

As most of you know, TestNG uses an XML file to capture the entire description of your test suite, and while I think the schema for this file has managed to remain fairly simple over the years, the XML aspect of it can sometimes get in the way of making quick changes. I considered supporting an additional format for a while and I ended up narrowing my choices down to JSON and YAML. In the end, YAML won on tiny details such as not requiring the constant use of double quotes and the fact that JSON seems to be more optimized for computer than human consumption. Here is a short TestNG YAML example: 

```java
name: SingleSuite
threadCount: 4
parameters: { n: 42 }
tests:
  - name: Regression2
    parameters: { count: 10 }
    excludedGroups: [ broken ]
    classes:
      - test.listeners.ResultEndMillisTest
      - test.listeners.TimeOutTest
```

Unfortunately, YAML and JSON don't have as much tooling support as XML especially when it comes to editing and validation, but one thing that I liked in YAML is that it's much more "copy/paste friendly" than XML. In XML, it's rarely possible to just cut a line and paste it somewhere else in the file: you usually end up having to add surrounding tags or move closing tags. In YAML, you can usually just cut/paste lines right away. It's also much easier to comment out regions than XML's awkward "`<!--`" and "`-->`" delimiters. 

I discussed my choice of YAML in [this blog entry](http://beust.com/weblog/weblog/2010/08/15/yaml-the-forgotten-victim-of-the-format-wars/), and [here is the official TestNG documentation](http://testng.org/doc/documentation-main.html#yaml). 

### Guice

From the very early days (around 2006), TestNG has made it possible for users to take control of the instantiation of their test classes thanks to the very useful [`IObjectFactory`](http://testng.org/javadocs/org/testng/IObjectFactory.html) interface. Developers in need of creating the instances of their test classes themselves in order to prepopulate them could use this factory to perform whatever operations they needed and then return these instances back to TestNG, which would then use these to run the tests. 

The release of [Guice](http://code.google.com/p/google-guice/) made this interface even more useful: instead of instantiating their test objects, users were now able to simply ask Guice to hand them a fully injected instance. This worked great but considering the number of discussions and requests that we received on the mailing-list on this topic, I started wondering if we couldn't provide an even better way to support Guice directly with TestNG. 

A few hours later, TestNG's official Guice support was born: 

```java
@Guice(modules = GuiceExampleModule.class)
public class GuiceTest {
  @Inject
  ISingleton m_singleton;
  @Test
  public void singletonShouldWork() {
    m_singleton.doSomething();
  }
}
```

In this example, TestNG will use the `GuiceExampleModule` module to retrieve an instance of the `GuiceTest` class and then use that instance to run the tests. 

You no longer need to use the object factory, you can now directly tell TestNG which Guice module(s) should be used to create the instance of a given test. Here is the [original blog post that started the discussion](http://beust.com/weblog/weblog/2010/12/10/testng-and-guice-a-marriage-made-in-heaven/) (note that the syntax changed slightly since then) and the [direct link to the documentation](http://testng.org/doc/documentation-main.html#guice-dependency-injection). 

###  Improved Eclipse plug-in 

![](http://testng.org/pictures/summary1.png)

I have been adding a lot of features to the Eclipse plug-ins over the past months, among which: 

  * A summary tab that allows you to browse the results very easily (shown partially above). 
  * A search functionality for whenever you need to look for the result of a specific test among hundreds. 
  * Vastly improved automatic conversions from JUnit 3 and JUnit 4 to TestNG. 
  * A revamped display view that matches the `testng.xml` format more closely. 
Here is [a quick rundown of the latest features](http://beust.com/weblog/weblog/2010/11/02/eclipse-and-testng-the-next-next-generation/) and the [full documentation](http://testng.org/doc/eclipse.html). 

###  Miscellaneous 

These are the big items, here is the full change log, along with the contributors: 

####  Core 

  * Added: @Guice(moduleFactory) and IModuleFactory
  * Added: @Guice(module)
  * Added: timeOut for configuration methods
  * Added: -randomizesuites (Nalin Makar)
  * Added: IConfigurable
  * Fixed: @Test(priority) was not being honored in parallel mode
  * Fixed: @Test(timeOut) was causing threadPoolSize to be ignored
  * Fixed: [TESTNG-468](http://jira.opensymphony.com/browse/TESTNG-468): Listeners defined in suite XML file are ignored (Michael Benz)
  * Fixed: TESTNG-465: Guice modules are bound individually to an injector meaning that multiple modules can't be effectively used (Danny Thomas)
  * Fixed: Method selectors from suites were not properly initialized (toddq)
  * Fixed: Throw an error when two data providers have the same name
  * Fixed: Better handling of classes that don't have any TestNG annotations
  * Fixed: XmlTest#toXml wasn't displaying the thread-count attribute
  * Fixed: [TESTNG-415](http://jira.opensymphony.com/browse/TESTNG-438): Regression in 5.14.1: JUnit Test Execution no longer working
  * Fixed: [TESTNG-436](http://jira.opensymphony.com/browse/TESTNG-438): Deep Map comparison for assertEquals() (Nikolay Metchev)
  * Fixed: Skipped tests were not always counted.
  * Fixed: test listeners that throw were not reporting correctly (ansgarkonermann)
  * Fixed:  wasn't working.
  * Fixed: In parallel "methods" mode, method interceptors that remove methods would cause a lock up
  * Fixed: EmailableReporter now sorts methods chronologically
  * Fixed: [TESTNG-411](http://jira.opensymphony.com/browse/TESTNG-411): Throw exception on mismatch of parameter values (via DP and/or Inject) and test parameters
  * Fixed: IDEA-59073: exceptions that don't match don't have stack trace printed in console (Anna Kozlova)
  * Fixed: IDEA's plug-in was not honoring ITest (fixed in TestResultMessage)
  * Fixed: Methods depending on a group they belong were skipped instead of throwing a cycle exception
  * Fixed: [TESTNG-401](http://jira.opensymphony.com/browse/TESTNG-401): ClassCastException when using a listener from Maven
  * Fixed: [TESTNG-186](http://jira.opensymphony.com/browse/TESTNG-186): Rename IWorkerApadter to IWorkerAdapter (Tom??s Pollak)
  * Fixed: [TESTNG-415](<a href=): Assert.assertEquals() for sets and maps fails with 'null' as arguments
  * Fixed: typo -testRunFactory
  * Fixed: NPE while printing results for an empty suite (Nalin Makar)
  * Fixed: Invoke IInvokedMethodListener.afterInvocation after fixing results for tests expecting exceptions (Nalin Makar)
  * Fixed: [TESTNG-441](http://jira.opensymphony.com/browse/TESTNG-441): NPE in SuiteHTMLReporter#generateMethodsChronologically caused by a race condition (Slawomir Ginter)



####  Eclipse 

  * Added: Convert to YAML
  * Added: New global preference: JVM args
  * Added: Eclipse can now monitor a test-output/ directory and update the view when a new result is created
  * Added: Right clicking on a class/package/project now offers a menu "TestNG/Convert to TestNG"
  * Added: Excluded methods are now listed in the Summary tab
  * Added: "Description" column in the excluded methods table
  * Added: Dialog box when the plug-in can't contact RemoteTestNG
  * Added: Double clicking on an excluded method in the Summary tab will take you to its definition
  * Added: If you select a package before invoking the "New TestNG class" wizard, the source and package text boxes will be auto-filled
  * Added: When an item is selected in a tab, the same item will be selected when switching tabs
  * Added: A new "Summary" tab that allows the user to see a summary of the tests, sort them by time, name, etc...
  * Added: It's now possible "Run/Debug As" with a right click from pretty much any element that makes sense in the tree.
  * Added: JUnit conversion: correctly replaces assertNull and assertNotNull
  * Added: JUnit conversion: removes super.setUp() and super.tearDown()
  * Added: JUnit conversion: removes @Override
  * Added: JUnit conversion: replaces @Test(timeout) with @Test(timeOut) (5.14.2.4)
  * Added: JUnit conversion: replaces @Test(expected) with @Test(expectedExceptions) (5.14.2.4)
  * Added: JUnit conversion: replaces fail() with AssertJUnit.fail() (5.14.2.2)
  * Added: JUnit conversion: replaces Assert with AssertJUnit (5.14.2.1)
  * Added: The progress bar is now orange if the suite contained skipped tests and no failures
  * Added: Skipped test and suite icons are now orange (previously: blue)
  * Added: New method shortcuts: "Alt+Shift+X N", "Alt+Shift+D N" (Sven Johansson)
  * Added: "Create TestNG class" context menu
  * Added: When generating a new class, handle overridden methods by generating mangled test method names
  * Fixed: Green nodes could override red parent nodes back to green
  * Fixed: Was trying to load the classes found in the XML template file
  * Fixed: Stack traces of skipped tests were not showing in the Exception view
  * Fixed: XML files should be run in place and not copied.
  * Fixed: NPE when you select a passed test and click on the Compare Result icon (Mohamed Mansour)
  * Fixed: When the run is over, the plug-in will no longer force the focus back to the Console view
  * Fixed: The counter in the progress bar sometimes went over the total number of test methods (5.14.2.9)
  * Fixed: org.eclipse.ui.internal.ErrorViewPart cannot be cast to org.testng.eclipse.ui.TestRunnerViewPart (5.14.2.9)
  * Fixed: Workspace preferences now offer the "XML template" option as well as the project specific preferences (Asiel Brumfield)
  * Fixed: [TESTNG-418](http://jira.opensymphony.com/browse/TESTNG-418): Only last suite-file in testng.xml run by Eclipse plugin



####  Documentation 

  * Added: Section on Selenium (Felipe Knorr Kuhn)
  * Added: Link to an article on TestNG, Mockito and Emma in the Misc section



###  Upgrading to TestNG 6.0 

Ant users can download TestNG 6.0 [directly from the web site](http://testng.org/doc/download.html) while Maven users only need to specify the following dependency: 

```text
      org.testng
      testng
      6.0
```

Don't forget to [update your Eclipse plug-in](http://testng.org/doc/download.html) as well.
