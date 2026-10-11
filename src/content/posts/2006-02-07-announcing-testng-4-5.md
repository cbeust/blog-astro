---
title: Announcing TestNG 4.5
date: '2006-02-07T23:08:14'
slug: announcing-testng-4-5
categories:
- Java
comments:
- id: 4796
  author: VVS
  date: '2006-02-08T12:31:28'
  content: 'Hi Cedric.

    Could you please elaborate on "Added: Distributed TestNG" feature. It looks really interesting. Do you have any info about it, like links, examples, blog entries?

    Thanks!!

    --Vladimir'
  replies: []
- id: 4797
  author: Cedric
  date: '2006-02-08T12:55:27'
  content: 'Hi Vladimir,

    I just posted a new entry explaining what Distributed TestNG is...

    Feedback welcome!'
  replies: []
- id: 4798
  author: t800t8
  date: '2006-02-09T06:00:47'
  content: TestNG IDEA Plug-in has problem with IntelliJ IDEA Demetra build 5131. But maybe too early to work for Demetra's plugin. ;-)
  replies: []
- id: 4799
  author: t800t8
  date: '2006-02-09T06:01:09'
  content: TestNG IDEA Plug-in has problem with IntelliJ IDEA Demetra build 5131. But maybe too early to work for Demetra's plugin. ;-)
  replies: []
- id: 4800
  author: Sunny
  date: '2006-04-28T15:13:42'
  content: Help, I'm trying to find a senior dev with exp developing eclipse plugins and familiarity with AJAX. Also, some one who is active in the community and would like to be a guru at an excellent startup in gorgeous San Diego. Please contact me if you know someone or would like to see the job description out of curiosity. ;-)
  replies: []
- id: 4801
  author: Matthew McGowan
  date: '2006-08-15T12:41:17'
  content: 'Needed to decorate test cases (acquire/release resources around test cases, get hold of the current test name.) Just found IHookable - w00t!

    It would be nice if test decoration were a first class entity in TestNG. (We can fake it with @BeforeMethod/AfterMethod if the execution can be broken up into separate methods. For a single execution context, e.g. as needed with JAAS, the alternative, IHookable, runs for all tests on that test class.)

    A TestDecorator would generalize IHookable and allow it to be tied in with groups, so the decorators are only applied to certain tests, or allows multiple decorators to be applied.

    @TestDecorator(groups="...")

    ITestDecorator createDecorator()

    {

    return new ITestDecorator() {

    public void runTest(Runnable test) {

    // pre-execute stuff

    test.run();

    // post-execute stuff

    }

    }

    }

    (If you prefer not to introduce a code dependency in clients on a TestNG interface, perhaps java.util.concurrent.Executor might fit instead of ITestDecorator.)

    Clients that want the current ITestResult can cast the Runnable argument to an appropriate interface, either ITestResult itself, or an interface that provides the ITestResult.

    Behind the scenes, TestNG would instantiate  Runnable implementations that handle chaining of multiple test decorators for a given test method.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/testng.jpg)

I'm happy to announce the immediate availability of [TestNG 4.5](http://testng.org).  It features a lot of bug fixes, a few new minor features (`runAfter` didn't make it in this release but will appear in the next one).  And of course, a new look for the Eclipse plug-in (the update site has been updated as well), a new look for the documentation and a few added sections as well.

_[Interestingly, this is my 350th entry on this weblog, not counting the two years I spent on JRoller before that]_

Here is the change log.  
  
**4.5**  
  
_Core:_

  * Fixed: Methods were not implicitly included, only groups
  * Fixed: Bug with failed parent @Configuration don't skip child @Configuration/@Test invocations
  * Fixed: Bug with overridding @Configuration methods (both parent and child were run)
  * Fixed: Bug when overriding beforeClass methods in base class (cyclic graph)
  * Added: Support for JAAS (see org.testng.IHookable)
  * Fixed: Problem with nested classes inside <package name="foo.*"
  * Fixed: If a group is not found, mark the method as a skip instead of aborting
  * Fixed: testng-failed.xml was not respecting dependencies
  * Fixed: class/include method in testng.xml didn't work on default package
  * Fixed: DTD only allowed one <define>
  * Fixed: ArrayIndexOutOfBoundsException for jMock
  * Added: dependsOnMethods can contain methods from another class
  * Fixed: JUnitConverter required -restore, not any more (option is now a no-op) 
  * Fixed: JUnit mode wasn't invoking setName() on test classes
  * Added: Regular expressions for classes in <package>
  * Added: Distributed TestNG
  * Fixed: Command line parameters and testng.xml are now cumulative 
  * Fixed: Reports now work for multiple suites
  * Fixed: Was ignoring abstract classes even if they have non-abstract instances
  * Fixed: If setUp() failed, methods were not skipped
  * Fixed: Was not clearly indicating when beforeSuite fails 
  * Added: @Configuration.inheritGroups
  * Fixed: inconsistency between testng.xml and objects regarding method selectors



_Eclipse plug-in:_

  * New look for the progress view.
