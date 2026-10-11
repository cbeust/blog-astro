---
title: 'Announcing TestNG 5.1:  making testing easier, one thread at a time'
date: '2006-08-18T09:38:19'
slug: announcing-testng-5-1-making-testing-easier-one-thread-at-a-time
categories:
- Java
comments:
- id: 5867
  author: Alexandru Popescu
  date: '2006-08-21T04:32:15'
  content: 'I hope our users are happy with this new release and  also for the new features added to the Eclipse plugin.

    ./alex

    http://themindstorms.blogspot.com'
  replies: []
- id: 5868
  author: Jesse Kuhnert
  date: '2006-08-21T06:26:13'
  content: 'I''m definitely very happy with the release AND eclipse plugin updates.

    Nice work guys! :)'
  replies: []
- id: 5869
  author: Md
  date: '2006-09-01T13:58:44'
  content: 'For the eclipse plugin feature:

    "Added: run contextual test classes with parameters from suite definition files"

    Does this allow running a single test method with @Parameters with data from testng.xml file? If so how? I could not find the a option in the run configurations in Eclipse, nor in the mailing list on opensymphony.

    Thanks'
  replies: []
- id: 5870
  author: RaPe
  date: '2010-01-12T01:45:26'
  content: Hey guys, what about the NetBeans Plugin?
  replies: []
- id: 5871
  author: thomson joseph
  date: '2010-01-13T02:32:05'
  content: Can any one help me  ,How can we give augments in the eclipse pugin through testNG for parallel running of test suites ???
  replies: []
- id: 5872
  author: moshe
  date: '2010-01-27T04:29:52'
  content: "I am using testng and after running the tests I see result, while I run those test reagain the old result disappear.\nin the junit the result was saved till closed the eclipse\nif you have any just how to solve it I would be glad to get your suggestion\nRegards,\n Moshe"
  replies: []
- id: 5873
  author: Fomeololagbab
  date: '2010-11-05T21:59:50'
  content: 'Bonjour ?? tous,

    Desirez-vous gagner des objets pour pas cher ?

    Le site Bidou.ca est un un site interessant qui vous donne la possibilite de remporter de  fantastique prix sans investir beaucoup!

    Venez participer sur: [url=http://bidoubidou.ca/]bidou.ca[/url]'
  replies: []
---

TestNG 5.1 is now available for download from [ http://testng.org](http://testng.org).  The change log is included below and contains a lot of bug fixes, but also a particular feature I'd like to expand on.

TestNG makes it very easy for you to run your tests in separate threads, which provides a very significant speed up in a lot of cases (this particular user said that switching to multithreaded tests [ reduced their test run times from forty minutes down to... four minutes!](http://groups.google.com/group/testng-users/browse_frm/thread/dff9feb2d28a59d0/6894d9b909c2b722?lnk=gst&q=feuer&rnum=2#6894d9b909c2b722)).  However, when you do this, you can encounter various problems if the classes you are testing are not multithread-safe (which is very often the case).

For example:

```java
public class ATest {
private A a;
@BeforeClass
public void init() {
this.a = new A();
}
@Test
public void testf1() {
// test a.f1();
}
@Test
public void testf2() {
// test a.f2();
}
}
```

In this example, the two test methods `testf1()` and `testf2()` test the methods `A#f1` and `A#f2` respectively, but when you ask TestNG to run these tests in parallel mode, these two methods will be invoked from different threads, and if they don't properly synchronize with each other, you will most likely end up in a corrupt state.

One way to solve this problem is to declare that the test methods depend on each other, thus forcing TestNG to run them in the same thread, but that's obviously tedious and also not semantically correct (they don't really depend on each other).

Another possibility is to make `A#f1` and `A#f2` properly synchronized, but again, it's a lot of work just to enable testing, and while I'm fine with making minor modifications to my classes to make them easier to test (making certain methods more visible, adding accessors, etc...), I think that making my classes multithread-safe crosses the line.

Therefore, TestNG 5.1 provides a new attribute in the `@Test` annotation, which can be specified at the class level:

> @Test(sequential = true)  
>  public class ATest {  
>    ...

When TestNG sees this flag, it will make sure that all the test methods in the given class are always run sequentially (right now, it uses the simplest way to achieve this goal:  run all the test methods in the same thread, but there are other ways to do this).

An interesting consequence of this fix (which was trivial to make since support for sequential runs this was already in TestNG because of dependencies) is that the workers used by TestNG can now contain either:

  * A single test method.
  * A set of ordered methods (if `dependsOnGroups` or ` dependsOnMethods` is being used).
  * A set of unordered methods (if `@Test(sequential = true)` was used).



Obviously, the last two workers are going to be holding on to threads longer than the first one, but I still think that the runs will be faster than if the parallel flag is not set.

Note that the link to the thread of discussion that I posted above ([here it is again](http://groups.google.com/group/testng-users/browse_frm/thread/dff9feb2d28a59d0/6894d9b909c2b722?lnk=gst&q=feuer&rnum=2#6894d9b909c2b722)) is a good example of how new features are added to TestNG:

  * A user posts a request for a feature.
  * I ask for other people to comment on the issue, we validate the need.
  * Once the feature has been deemed useful, a few emails are exchanged on the proper way to add it to TestNG.
  * The feature is implemented, tested and I upload a beta on <http://testng.org> for immediate validation by the user.



Here is the complete change log for TestNG 5.1 (big thanks to Alexandru for all the bug fixing!)

Enjoy!

Core

  * Added: @Test(sequential = true)
  * Fixed: TESTNG-102 (Incorrect ordering of @BeforeMethod calls when a dependency is specified)
  * Fixed: TESTNG-101 (HTML output contains nested <P> tags and a missing <tr> tag)
  * Added: support for specifying test-only classpath ([http://forums.opensymphony.com/thread.jspa?mesageID=78048&tstart=0](http://forums.opensymphony.com/thread.jspa?messageID=78048&tstart=0))
  * Fixed: TESTNG-93 (method selectors filtering @BeforeMethod)
  * Fixed: TESTNG-81 (Assert.assertFalse() displays wrong expected, actual value)
  * Fixed: TESTNG-59 (multiple method selectors usage results in no tests run)
  * Fixed: TESTNG-56 (invocation of @Before/AfterClass methods in parallel/sequential scenarios)
  * Fixed: TESTNG-40 (failures suite does not contain @Before/After Suite/Test methods)
  * Fixed: TESTNG-37 (allow passing null parameter value from testng.xml)
  * Fixed: TESTNG-7 (display classname when hovering method)



Eclipse plug-in

  * Added: run contextual test classes with parameters from suite definition files
  * Added: TESTNG-100 (Show HTML reports after running tests)
  * Added: TESTNG-97 (Double click top stack to raise comparison)
  * Added: TESTNG-84 (plug-in UI for suite option should support absolute path)
  * Added: TESTNG-20 (copy stack trace)
  * Fixed: TESTNG-72 (display groups with non-array values)
  * Fixed: TESTNG-64 (Eclipse plug-in applies added groups to all launch configurations)
  * Fixed: TESTNG-28 (Cannot select groups from dependent eclipse projects)
  * Fixed: TESTNG-25 (do not display fully qualified method name when running contextual test class)



Improved behavior

  * TESTNG-98 (temporary files have guaranteed fixed names)
  * TESTNG-95 (Assertion failed comparison trims trailing ">")
  * TESTNG-70 (TestNG prevents eclipse from opening an older CVS version of a java class)
  * Display of test hierarchy information (TESTNG-29)
