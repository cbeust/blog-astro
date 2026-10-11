---
title: Announcing TestNG 4.6
date: '2006-02-27T09:32:30'
slug: announcing-testng-4-6
categories:
- Java
comments:
- id: 4912
  author: Willem Verstraeten
  date: '2006-02-27T10:46:39'
  content: 'This probably isn''t very critical, but the plugin no longer works in Eclipse 3.2M5... This is the error: java.lang.NoClassDefFoundError: org/eclipse/jdt/internal/junit/ui/TabFolderLayout

    (I can totally imagine this isn''t important to fix, just thought I would point it out)

    Willem'
  replies: []
- id: 4913
  author: Cedric
  date: '2006-02-27T10:51:12'
  content: 'Hi Willem,

    Yes, we''re aware of this, there is a bug filed in JIRA to that effect.  We are waiting for the 3.2 API to freeze before we port the plug-in there, which was supposed to happen in M6 but might actually have happened in M5, so we''ll be addressing this bug very soon...'
  replies: []
- id: 4914
  author: Ruslan Zenin
  date: '2006-02-27T12:05:39'
  content: 'Thanks for including multithreaded testing feature!

    That was really fast...'
  replies: []
- id: 4915
  author: Anjan Bacchu
  date: '2006-02-27T17:18:00'
  content: 'hi all,

    I apologize for asking a forum question over here.

    "Thanks for including multithreaded testing feature!"

    is there a tutorial for this feature ?

    thank you,

    BR,

    ~A'
  replies: []
- id: 4916
  author: Stephan Schmidt
  date: '2006-03-01T00:24:59'
  content: 'Hi Cedric,

    perhaps I''m an especially stupid user, but for months I''m unable to switch to TestNG because I can|t find a download link for the IDEA plugin on javaforge,

    bye

    -stephan'
  replies: []
- id: 4917
  author: Stephan Schmidt
  date: '2006-03-01T00:28:12'
  content: Solved, I used the IDEA plugin manager. stupid me.
  replies: []
- id: 4918
  author: Stephan Schmidt
  date: '2006-03-01T02:41:03'
  content: 'Somehow google doesn''t find anything usefull for TestNG and jMock, are the mocks evaluated after a test? how can I do this?

    Thanks.'
  replies: []
- id: 4919
  author: robertj
  date: '2006-03-01T07:31:53'
  content: 'hi cedric,

    i think your example for description is not very compelling.

    how about

    @Test(description = "Verify the server is up")

    public void t1() { ... }

    or even better

    @Test(description = "initial data: left(x=10, y=20), right(x=10, y=23)")

    public void t1() { ... }

    as this simply can not be expressed naturally in a java method name.

    ciao robertj'
  replies: []
- id: 4920
  author: Howard M. Lewis Ship
  date: '2006-03-02T17:48:26'
  content: Are you getting these updated libraries into the central Maven 2 repository?  Alternately, can you set up a repository for TestNG (and other toys)?  It easy enough to change settings.xml to point to additional repositories.
  replies: []
- id: 4921
  author: Howard M. Lewis Ship
  date: '2006-03-02T17:48:55'
  content: Are you getting these updated libraries into the central Maven 2 repository?  Alternately, can you set up a repository for TestNG (and other toys)?  It easy enough to change settings.xml to point to additional repositories.
  replies: []
- id: 4922
  author: pcdinh
  date: '2006-03-14T19:26:06'
  content: Oh my god, no plugin for NetBeans 5.0?
  replies: []
- id: 4923
  author: Varun Rupela
  date: '2006-03-23T21:53:40'
  content: 'Hi Cedric:

    Congratulations on the release.

    I was interested in using the distributed testng features. When is the distributed testng work expected to be completed?

    Thanks.

    varun.'
  replies: []
- id: 4924
  author: Jean
  date: '2006-06-16T08:29:13'
  content: '> jMock, are the mocks evaluated after a test?

    Stephan, normally, jmock calls "verify" on all your mocks in the teardown method.  However, you can call verify manually at the end of every test.  This could be a big change if you''ve got a lot of jmock tests.  Example:

    Mock mockGui = mock(IGuiController.class);

    Notifier notifier = new Notifier((IGuiController)mockGui .proxy());

    mockGui.expects(once()).method("alert");

    notifier.doStuff();

    mockGui.verify();  // &lt;-- add this line to force verify

    There may be a better way to accomplish this with TestNG, but I don''t know it well enough.  You would also need a way to access a list of all mocks created in a test, which JMock must be doing internally, so that you can call "verify" on all of them.'
  replies: []
- id: 4925
  author: Alex Popescu
  date: '2006-08-07T18:37:02'
  content: 'I have posted about TestNG and JMock: http://themindstorms.blogspot.com/2006/08/more-on-jmock-and-testng.html.

    And I am doing some work on this direction.

    ./alex

    --

    .w( the_mindstorm )p.

    TestNG co-founder'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/new-look.png)

I am happy to announce the release of TestNG 4.6 (the Eclipse and IDEA plug-ins have been updated as well).  There are a lot of new features in this release, here is a quick rundown:

  * Method thread pools.  TestNG was already allowing you to run all your tests in parallel, and you can now use this feature on individual test methods as well:

> @Test(invocationCount = 10, threadPoolSize = 3, timeOut = 10000)  
>  **public  ****void  **f1() { ... }

In this example, the method f1() will be invoked ten times from a pool made of three threads.  If any of these invocations fail to complete with ten seconds, TestNG will abort the test and mark it failed.  You can find more information on this feature in [this article](http://beust.com/weblog/weblog/archives/000369.html) and in [the documentation](http://testng.org/doc/documentation-main.html#parallel-running).   
 
  * A new [Reporter API](http://testng.org/javadocs/org/testng/Reporter.html) lets you log messages that will be reproduced in the HTML reports, either on each individual method or as a combined output.

![](http://testng.org/doc/pics/show-output2.png)

  * @Test now contains a description attribute that will also be included in the final reports:

> @Test(description = "Verify that the server is up")  
>  **public  ****void  **serverShouldBeRunning() { ... }

  * The reports have been considerably improved and now:
    * Give a list of all the methods that didn't run.
    * Show all the methods with different colors based on their class.
    * Use both relative and absolute timings, to make it easier to cross-reference your tests with your logs.
    * List the parameters passed to each test method, if any.

![](http://testng.org/doc/pics/parameters.png)  

You can see a full report sample [here](http://testng.org/test-output/index.html).   
 
  * Writing your own reports has never been easier with the introduction of the [IReporter interface](http://testng.org/javadocs/org/testng/IReporter.html).  Only one method to override, it doesn't get any easier than this...  
 
  * `@DataProviders` can now know which test method they are providing data for.  If you declare the signature of your `@DataProvider` with a `java.lang.reflect.Method` as first parameter, TestNG will invoke it with the `@Test` method that is about to be executed.  This makes it easier for you to provide slightly different data based on the current test method.  See the [documentation](http://testng.org/doc/documentation-main.html#parameters-dataproviders) for more details.  
 
  * Numerous bug fixes in the Eclipse plug-in (see the CHANGES file) and an improved view of the results (see the picture at the beginning of this post).



Download TestNG at <http://testng.org>.
