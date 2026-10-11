---
title: Dependent test methods
date: '2004-08-19T10:57:25'
slug: dependent-test-methods
categories:
- Java
comments:
- id: 2206
  author: Christian Murphy
  date: '2004-08-20T07:08:51'
  content: I have to say that this concrete example demonstrates the shortcomings of JUnit and the advantages of TestNG much more convincingly than anything else I have seen so far.  Thank you very much, Cedric!
  replies: []
- id: 2220
  author: Furious Purpose
  date: '2004-08-20T07:12:51'
  content: '<strong>TestNG as JUnit Extension</strong>

    With  ongoing

    and  pleasing

    commentary on TestNG, I wonder

    how much of this could be impelemented as a JUnit extension,

    at least as a starting point to start getting some value out

    of these ideas and getting some traction without losing'
  replies: []
- id: 2207
  author: Philippe
  date: '2004-08-22T02:07:37'
  content: 'I don''t buy your arguments. It just looks to me as though you''re overlooking the "unit" aspect of JUnit.

    The premise of JUnit is that a TestCase is a collection of independant tests. The setUp method MUST therefore be called before each test because that is how the tests are made independant : its responsibility is to setup up the environement.

    That is also why you will get 20 failures : each test is independant, the only relationship between them is that they use the same setUp method (or, as almost everybody using JUnit does, they refer to the same Class to test).

    TestNG is interesting but you keep bashing JUnit for things it was never designed for : non-regression testing (rather than plain, simple unit-testing) :)'
  replies: []
- id: 2208
  author: Deva
  date: '2004-08-23T12:40:57'
  content: When did QA folks started using Junit for their testing ? ;-)
  replies: []
- id: 2209
  author: J. B. Rainsberger
  date: '2004-08-24T12:31:04'
  content: I have to agree that TestNG is looking more at end-to-end testing requirements than at programmer testing requirements. I think there is room for both tools (TestNG and JUnit) to have their use. I, for one, am involved in bringing JUnit out of stasis and breathing life into the project. I think that Cedric and I should work together, with Cedric capturing the testing market and JUnit retaining the programmer's market. I would love to see JUnit off the list of required skills for testers, replaced by TestNG.
  replies: []
- id: 2210
  author: Robert McIntosh
  date: '2004-09-21T08:50:36'
  content: 'J. B. makes an interesting argument about the two different markets, but from my unlucky experience the best thing you can do for the QA folks is to give them a script that runs Ant (or whatever you use) which in turn invokes all required methods and they send you the results. I personally have never seen a QA person who had enough programmatic experience to do what is required to effectively run TestNG or JUnit tests by themselves, let alone know _what_ they are testing.

    I understand some of the JUnit purests point of view, but you look into any moderately complex application and you will probably not find ''pure'' JUnit going on, but something more like what TestNG is actually intended to allow. I for one have run into this problem on my project, a framework, where you either have dependencies between tests or you fake this by giving a dependant test known good data, and therefore you can''t really do a full throughput test, where you would like to take the results of test ''A'' and if that test passes, and feed those results directly into test ''B'', which may in turn cause test ''C'' to run, etc. I have a ton of hard coded test information that is effectively configuration info, that I could more effectively do by having the tests that actually test the config files feed the tests that use the configuration. That would also get rid of any error prone programming that would come about because of all that hard coding. That is where the elegance of TestNG
    comes into play I believe.'
  replies: []
- id: 2211
  author: Simon John
  date: '2004-12-06T20:30:00'
  content: 'Fundamentally junit performs individual tests as a single isolated unit with the setup and teardown functions providing the necessary isolation. The dependency aspect is not considered or atleast they are assumed correct. So I guess when Junit test are being performed, the dependency aspect could be safely ignored.

    However I see TestNG shine in the area of functional testing where it makes perfect sense to include such dependencies as mentioned.

    Many Thanks Cedric for the framework.'
  replies: []
- id: 2212
  author: Aramis
  date: '2005-01-02T21:16:59'
  content: 'Philippe''s point about overlooking the "unit" aspect of JUnit is semi-valid. That may well be what JUnit was initially intended for, but as time has passed it is now used as a general purpose testing framework. I for one have never used anything other than JUnit and its extensions for both unit and functional tests (except for UI tests).

    The problem is that the core of JUnit has not changed with the changes in it the way that developers use it.'
  replies: []
- id: 2213
  author: Marcelo Caldas
  date: '2006-10-30T10:06:22'
  content: 'I get a cyclical error when tryint to implement the inheritance mechanism.

    Exception in thread "main" org.testng.TestNGException:

    Cyclic graph of methods

    at org.testng.internal.Graph.topologicalSort(Graph.java:122)

    at org.testng.internal.MethodHelper.topologicalSort(MethodHelper.java:415)

    at org.testng.internal.MethodHelper.sortMethods(MethodHelper.java:467)

    at org.testng.internal.MethodHelper.collectAndOrderMethods(MethodHelper.java:72)

    at org.testng.internal.MethodHelper.collectAndOrderMethods(MethodHelper.java:40)

    at org.testng.TestRunner.initMethods(TestRunner.java:351)

    at org.testng.TestRunner.init(TestRunner.java:216)

    at org.testng.TestRunner.init(TestRunner.java:187)

    at org.testng.TestRunner.(TestRunner.java:132)

    at org.testng.remote.RemoteTestNG$2.newTestRunner(RemoteTestNG.java:68)

    at org.testng.SuiteRunner$ProxyTestRunnerFactory.newTestRunner(SuiteRunner.java:439)

    at org.testng.SuiteRunner.privateRun(SuiteRunner.java:177)

    at org.testng.SuiteRunner.run(SuiteRunner.java:142)

    at org.testng.remote.RemoteTestNG.run(RemoteTestNG.java:86)

    at org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:123)

    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

    at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

    at java.lang.reflect.Method.invoke(Method.java:585)

    at com.intellij.rt.execution.application.AppMain.main(AppMain.java:90)'
  replies: []
- id: 2214
  author: Gururaj
  date: '2007-01-02T23:33:14'
  content: 'I am working on TestNG for unit testing, first i installed jdk1.5 & in Myeclipse testNG was working fine.

    But now i uninstalled jdk1.5 & installed the jdk1.4 as per proj req.

    But am getting

    java.lang.UnsupportedClassVersionError: org/testng/remote/RemoteTestNG (Unsupported major.minor version 49.0)

    at java.lang.ClassLoader.defineClass0(Native Method)

    at java.lang.ClassLoader.defineClass(Unknown Source)

    at java.security.SecureClassLoader.defineClass(Unknown Source)

    at java.net.URLClassLoader.defineClass(Unknown Source)

    at java.net.URLClassLoader.access$100(Unknown Source)

    at java.net.URLClassLoader$1.run(Unknown Source)

    at java.security.AccessController.doPrivileged(Native Method)

    at java.net.URLClassLoader.findClass(Unknown Source)

    at java.lang.ClassLoader.loadClass(Unknown Source)

    at sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)

    at java.lang.ClassLoader.loadClass(Unknown Source)

    at java.lang.ClassLoader.loadClassInternal(Unknown Source)

    Exception in thread "main"

    please let me know the reason asap........

    Regards

    Gururaj'
  replies: []
- id: 2215
  author: Gururaj
  date: '2007-01-02T23:34:06'
  content: 'I am working on TestNG for unit testing, first i installed jdk1.5 & in Myeclipse testNG was working fine.

    But now i uninstalled jdk1.5 & installed the jdk1.4 as per proj req.

    But am getting

    java.lang.UnsupportedClassVersionError: org/testng/remote/RemoteTestNG (Unsupported major.minor version 49.0)

    at java.lang.ClassLoader.defineClass0(Native Method)

    at java.lang.ClassLoader.defineClass(Unknown Source)

    at java.security.SecureClassLoader.defineClass(Unknown Source)

    at java.net.URLClassLoader.defineClass(Unknown Source)

    at java.net.URLClassLoader.access$100(Unknown Source)

    at java.net.URLClassLoader$1.run(Unknown Source)

    at java.security.AccessController.doPrivileged(Native Method)

    at java.net.URLClassLoader.findClass(Unknown Source)

    at java.lang.ClassLoader.loadClass(Unknown Source)

    at sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)

    at java.lang.ClassLoader.loadClass(Unknown Source)

    at java.lang.ClassLoader.loadClassInternal(Unknown Source)

    Exception in thread "main"

    please let me know the reason asap........

    Regards

    Gururaj'
  replies: []
- id: 2216
  author: Vasanth
  date: '2007-06-13T04:18:13'
  content: How to create and run the TestNG script in intellij 6 IDEA.
  replies: []
- id: 2217
  author: ''
  date: '2007-06-19T08:59:56'
  content: 'I also get the "Cyclic graph of methods" Exception from topologicalSort by following this example, using TestNG 5.5.

    However, it only seems to happen if the base class has the @Test(groups = "init") annotation on the class, not if it is on the method(s).

    Thus you may bypass the problem by having the annotation for the init group(s) on the method(s) of such a base class, extend this class, and then you may choose whether the the dependsOnGroup shall be on the classes or the methods - both work.'
  replies: []
- id: 2218
  author: ''
  date: '2008-09-30T23:31:16'
  content: 'Hi, I am getting following error while running TestNg from eclipse:

    java.lang.UnsupportedClassVersionError: org/testng/remote/RemoteTestNG (Unsupported major.minor version 49.0)

    at java.lang.ClassLoader.defineClass0(Native Method)

    at java.lang.ClassLoader.defineClass(ClassLoader.java:539)

    at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:123)

    at java.net.URLClassLoader.defineClass(URLClassLoader.java:251)

    at java.net.URLClassLoader.access$100(URLClassLoader.java:55)

    at java.net.URLClassLoader$1.run(URLClassLoader.java:194)

    at java.security.AccessController.doPrivileged(Native Method)

    at java.net.URLClassLoader.findClass(URLClassLoader.java:187)

    at java.lang.ClassLoader.loadClass(ClassLoader.java:289)

    at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:274)

    at java.lang.ClassLoader.loadClass(ClassLoader.java:235)

    at java.lang.ClassLoader.loadClassInternal(ClassLoader.java:302)

    Exception in thread "main"'
  replies: []
- id: 2219
  author: Frode M. J.
  date: '2009-03-11T06:26:50'
  content: 'I should really like to see a small set of working code. I tried to make a super and sub-class test as described in the article. And got a TestNGException (cyclic dependencies).

    I suppose what happens is that the @Test annotation is inherited in subclass. The workaround of moving @Test to methods, is not nice, and then some of the main points in the article is not in accordance with current version of TestNG. (I look forward to a new release)'
  replies: []
- id: 2221
  author: Adam Spiers
  date: '2010-09-02T06:46:00'
  content: 'As three other commenters have already observed, I also got cyclic dependencies when I copied the approach from this article.  I know this article is 6 years old but unfortunately the official docs still refer to it even though the code is broken:

    http://testng.org/doc/documentation-main.html#dependent-methods

    Therefore I have submitted a new issue to the tracker in the hope that I will be the last TestNG newbie to get stuck on this problem...

    http://jira.opensymphony.com/browse/TESTNG-409'
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
    
    
    @Test
    public correctVM() {}
    @Test
    public serverStartedOk() {}
    @Test(dependsOnMethods = { "correctVM", "serverStartedOk" })
    public method1() {}
    ...
    

This is okay but having to list all the methods that we depend for each new test method on is error-prone, so instead, let's use TestNG's groups:
    
    
    @Test(groups = { "init" })
    public correctVM() {}
    @Test(groups = { "init" })
    public serverStartedOk() {}
    @Test(dependsOnGroups = { "init.* })
    public method1() {}
    ...
    

We have gained a lot of flexibility with groups.  For example, imagine that I want to add another init test method, such as "firewall is on".  All I need to do is add this test method and declare that it is part of the group "init".

Also, note that I used a regular expression in the "dependsOnGroups" declaration, as a reminder that you can actually define several init groups (such as "initOS", "initJVM", etc...) and they will automatically be run before any test method is invoked.

But we can do even better.

In the above example, I don't like the fact that whenever I add a new "real" test method, I need to remember to specify that it depends on the group "init.*".  In TestNG, the traditional way to indicate that an annotation should apply to all test methods is to move this annotation at the class level.

Also, I don't like the fact that "init" methods and "real" test methods are in the same class, so I'd like to use inheritance to provide a cleaner separation of roles.

Therefore, I will restructure my tests like this:  

    
    
    @Test(groups = "init")
    public class BaseTest {
      public correctVM() {}
      public serverStartedOk() {}
    }
    

This is now the base class for my tests.  The @Test annotation is now on the class, which means it applies to all the public methods inside that class (so there is no need to repeat it on each individual method).  Therefore, each public method automatically becomes part of the group "init".

Next, I write my test class as a subclass of BaseTest:
    
    
    @Test(dependsOnGroups = { "init.*" })
    public class TestServer extends BaseTest {
      public method1() { ... }
      public method2() { ... }
      ...
    }
    

Here again, the @Test annotation is now on the class, which means that it applies to all the public test methods, making it easier to add new testing methods.  Also, since this class extends BaseTest, it "sees" not only the methods that are being inherited, but their annotations as well, so TestNG will include all the methods from the base class that belong to the "init.*" group to determine which methods need to be run first.

What's the overall result?

  * Two classes that have responsibilities that are very clearly delineated.
  * Very easy maintenance and evolution, since adding test methods (whether they are init or "real" test methods) boils down to just adding these methods to the right class (no need to annotate them).  A newcomer doesn't even need to know about that annotations that are needed to get all this to work.
  * A report that will accurately reflect the result of the test runs and will correctly identify the real failures from those that are caused by a cascade effect, and whose resolution should therefore be postponed until all the FAILs have been resolved.
