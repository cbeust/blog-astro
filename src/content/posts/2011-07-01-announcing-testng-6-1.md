---
title: Announcing TestNG 6.1
date: '2011-07-01T10:17:04'
slug: announcing-testng-6-1
categories:
- General
comments:
- id: 8989
  author: 'A Smattering of Selenium #53 &laquo; Official Selenium Blog'
  date: '2011-07-14T03:35:09'
  content: '[...] Announcing TestNG 6.1 with a bunch of goodies. Well, if you like Java&#8230; [...]'
  replies: []
---

I'm happy to announce the immediate availability of TestNG 6.1. 

You will find the full change log below but here are the highlights of this new version. 

### Improved syntax for factories

You no longer need to specify a separate factory method: you can now specify that the constructor of your test accepts a data provider and TestNG will instantiate one test class per set of values returned by the data provider: 

```java
public class FactoryDataProviderSampleTest {
  @Factory(dataProvider = "dp")
  public FactoryDataProviderSampleTest(int n) {
    super(n);
  }
  @DataProvider
  static public Object[][] dp() {
    return new Object[][] {
      new Object[] { 41 },
      new Object[] { 42 },
    };
  }
}
```

[Link to the discussion](http://groups.google.com/group/testng-users/browse_thread/thread/9c21b07009904aef#). 

### Support for ServiceLoader

If you're not familiar with the tremendously useful class [ServiceLoader](http://download.oracle.com/javase/6/docs/api/java/util/ServiceLoader.html), it's a very simple facility to look up implementations of interfaces found on the classpath. This comes in particularly handy for TestNG when you want to define listeners and you don't want to bother specifying them in testng.xml/ant/maven/annotations/whatever. 

With ServiceLoader, all you need to do is create a jar file that contains your listener(s) and a few configuration files, put that jar file on the classpath when you run TestNG and TestNG will automatically find them. 

[Full details here](http://groups.google.com/group/testng-users/browse_thread/thread/655968336ea01282/82ed616698a61bc3?lnk=gst&q=serviceloader#82ed616698a61bc3). 

### Eclipse

The Eclipse TestNG plug-in has received a lot of improvements as well: more conversions from JUnit, new @Test refactorings, more control on the tree view (you can now clear it and you can specify stack trace filters), etc... 

Thanks to everyone who contributed patches, ideas, feature requests and bug reports! 

### Availability

As usual, you can either use Maven: 

```xml
    <dependency>
      <groupId>org.testng</groupId>
      <artifactId>testng</artifactId>
      <version>6.1</version>
      <scope>test</scope>
    </dependency>
```

or [download the jar file directly](http://testng.org/doc/download.html). 

## Full Change log

### Core

  * Added: Support for `ServiceLoader` for `ITestNGListener`
  * Added: `@Factory(dataProvider / dataProviderClass)` on constructors 
  * Added: `assertNotEquals()` to Assert 
  * Added: `assertArrayEquals()` to `AssertJUnit`
  * Added: Nested classes are now automatically added for consideration for inclusion 
  * Added: `<suite preserve-order="true">` will cause this attribute to be propagated to all  tags 
  * Added: `<groups>` can now be specified under a `<suite>`
  * Added: Tycho compatibility (Aleksander Pohl) 
  * Added: New `<test>` and `<suite>` flag: `group-by-instances`
  * Added: `-xmlpathinjar` to specify the path of `testng.xml` inside a test jar file 
  * Added: `ISuite#getAllMethods`, to retrieve all the methods at the start of a suite. 
  * Added: Output `ITestResult` attributes in XML report (nguillaumin) 
  * Fixed: Thread safety problem in `MethodInvocationHelper` (Baron Roberts) 
  * Fixed: Group dependencies were not being skipped properly. 
  * Fixed: Dependency failures only impact the same instance 
  * Fixed: Static classes could cause a `StackOverFlowError`
  * Fixed: `IConfigurationListener` was not extending `ITestNGListener`
  * Fixed: `IConfigurationListener#onConfigurationFailure` was never called 
  * Fixed: TESTNG-476: `<test>` tags are now run in the order found in testng.xml 
  * Fixed: Now showing failed/skipped error messages on the console for verbose >= 2 
  * Fixed: `ITestResult#getEndMillis()` return 0 
  * Fixed: TESTNG-410: Clearer error message 
  * Fixed: TESTNG-475: `@DataProvider` doesn't support varargs 
  * Fixed: Performance problems in `EmailableReporter`
  * Fixed: TESTNG-472: Better output for `assertNull()`
  * Fixed: `ConcurrentModificationException` when using parallel data providers. 
  * Fixed: TESTNG-282: Problem when including+excluding packages (addicted) 
  * Fixed: TESTNG-471: `assertEquals(Map, Map)` fails if a map is a subset of the other 
  * Fixed: JUnitReporter generates an `<error>` tag for successful `expectedExceptions` tests 
  * Fixed: ISSUE-47: Don't allow two `<test>`s with same name within same suite (Nalin Makar) 
  * Fixed: If a listener implements both `ISuiteListener` and `IInvokedMethodListener,` only one of them gets invoked 


### Eclipse:

  * Added: New quick fix "Add static import org.testng.AssertJUnit.assertXXX" 
  * Added: New workspace wide setting: excluded stack traces, to provide shorter stack traces in the view 
  * Added: New "Clear results" icon in the tool bar 
  * Added: When the search filter is modified, don't update the tree live if it is too big 
  * Added: Two new `@Test` refactorings (pull to class level, push to method level) 
  * Added: JUnit conversion: `@Ignore`
  * Added: JUnit conversion: `assertArrayEquals()`
  * Added: JUnit conversion: `@RunWith(Parameterized.class)`
  * Added: Support for Hamcrest failed assertions in the compare dialog 
  * Added: JUnit conversion: `suite()` methods can now either be removed, commented out or left untouched 
  * Fixed: JUnit conversion: `super.setUp()/tearDown()` were being removed when extending a class other than TestCase 
  * Fixed: "Run as" menu not appearing for methods that take a generic parameter. 
  * Fixed: The tree was incorrect if the same class is used in different `<test>` tags 
  * Fixed: When creating a new Run/Debug configuration, "Launch.label" was displayed 
  * Fixed: TESTNG-459: TestNG menu should not always be present in context menu (Mykola Nikishov) 
  * Fixed: Performance problems in the plug-in 
  * Fixed: Workspace-wide XML template files are not being honored. 
  * Fixed: `@BeforeClass/@AfterClass` from JUnit4 are not being properly converted 
  * Fixed: Conversions generate `@Test()` instead of `@Test`
