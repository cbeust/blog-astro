---
title: JUnit pain
date: '2004-02-08T17:45:08'
slug: junit-pain
categories:
- Java
comments:
- id: 1109
  author: Tim Downey
  date: '2004-02-09T09:35:47'
  content: 'Whether or not it makes sense, if you want once-per-test-class initialization, you can implement on your test class.

    public static Test suite(){

    TestSuite suite = new TestSuite(MyTestClass.class);

    return new TestSetup(suite) {

    protected void setUp() {

    // one-time setup

    }

    protected void tearDown() {

    // one-time teardown

    }

    };

    }'
  replies: []
- id: 1110
  author: ''
  date: '2004-02-09T10:47:02'
  content: Why is this a problem?  So what if it ititializes test# times?
  replies: []
- id: 1111
  author: Cedric
  date: '2004-02-09T10:47:58'
  content: It creates unnecessary instances and can be very time consuming.
  replies: []
- id: 1112
  author: Vinny Carpenter
  date: '2004-02-09T13:08:24'
  content: Hi Cedric.  I think a lot of it may just be defensive programming.  You're right that you can create fixtures such as setUp() and teadDown(), but they don't have mandate the use of those fixture methods.  So I think JUnit fires up x number of instances of the class if there are x number of testxx() methods and calls setup/teardown on each distinct instance and executes each of the testxx() methods separately.  I think the goal is probably to create the cleanest possible test scenario and not worry about extra object creation and instantiation time.
  replies: []
- id: 1113
  author: Jon Mountjoy
  date: '2004-02-09T14:13:36'
  content: 'The reason is that the running of one test should never affect the running of another.  That was the design decision behind it, I believe - they want them isolated.

    So if one test breaks, it won''t cause another test to break simply by virtue of it breaking, and perhaps leaving some instance data in a bad state.  Likewise, since they are independent you can select any subset and run that subset in any order.  (Hmm, handy functionality that Eclipse doesn''t seem to offer.  Darn.)

    Hence the number of class instantiations.

    So hints Kent Beck in "Test-Driven Development by Example"'
  replies: []
- id: 1114
  author: Carlos Villela
  date: '2004-02-09T15:17:59'
  content: 'Indeed, this behaviour is just unexplainable to me - if the reason for the multiple instances is to avoid having stale data from failing tests hurting other sane ones, then the setUp and tearDown mechanism sounds quite a bit redundant to me...

    Ok, being pragmatic: anyone tried Artima TestRunner?'
  replies: []
- id: 1115
  author: J. Betancourt
  date: '2004-02-09T15:46:30'
  content: 'In the JUnit FAQ they do describe how to do a one-time setup by using a TestSetup wrapper.  I''ve done it, works ok.

    See: How can I run setUp() and tearDown() code once for all of my tests?

    J. Betancourt'
  replies: []
- id: 1116
  author: Brian Slesinsky
  date: '2004-02-09T22:20:14'
  content: 'It makes a little more sense if you look at how tests are used in a data structure.  A TestSuite is basically a list of Test instances.  Running a test suite looks like this:

    for test in TestSuite:

    &nbsp; test.setUp()

    &nbsp; test.run()

    &nbsp; test.tearDown()

    Since a test suite can contain any number of tests in any order, and the tests need not be instances of the same class, it probably wasn''t immediately obvious how to optimize this.

    I got around it with some custom subclasses: LazyTest and LazyTestSuite.  A LazyTestSuite checks to see if two consecutive LazyTests have the same setup, and if so, calls the test''s clean() in the middle instead of tearDown()/setUp().'
  replies: []
- id: 1117
  author: Joel Hockey
  date: '2004-02-10T16:04:37'
  content: 'I''ve also been finding junit (integrated with ant) to be quite frustrating.  I wasn''t aware of the new class for each test quirk, but I found that the ant batchtest created a separate TestSuite for each class and ran each in a different classloader.  This meant that my Hibernate (and other) config would need to load many times throughout my tests.  At around 4s per load, this was really annoying.

    My solution was to create a DynamicTestSuite class that creates a single testsuite by matching a classname suffix that you give it.

    E.g.  Give it "Test" to match all test classes, "LgoinActionTest" for a specific class, or "ActionTest" to test all actions.

    More detail (including source code) at: http://marc.theaimsgroup.com/?l=ant-user&m=107645600632538&w=2'
  replies: []
- id: 1118
  author: Hani Suleiman
  date: '2004-02-10T18:57:45'
  content: I'm surprised the TDD fanatics haven't proposed putting you up against a wall and shooting you for daring to suggest that in the real world you might sometimes need fixtures that remain in place across tests.
  replies: []
- id: 1145
  author: Codito ergo sum
  date: '2004-02-11T07:36:55'
  content: '<strong>Junit: designed to be painful</strong>

    Cedric   blogs about his pain when using Junit :

    I am beginning to think we are once more stuck with a de facto standard that is utterly broken.

    Actually his problem is that Junit instantiated  TestCase as many times as it contains test me'
  replies: []
- id: 1119
  author: Fred Grott
  date: '2004-02-11T08:06:36'
  content: 'Cedric are you sure you are not confusing unit tests with system tests?

    would not maintaining states or connections or objects between tests denote a system test insteadof a unit test?'
  replies: []
- id: 1120
  author: NatPryce
  date: '2004-02-11T09:25:25'
  content: '"if the reason for the multiple instances is to avoid having stale data from failing tests hurting other sane ones, then the setUp and tearDown mechanism sounds quite a bit redundant to me..."

    If test cases shared the same fixture state and something failed during the tearDown of one test, the fixture would be left in an inconsistent state, and would cause confusing errors in subsequent tests running with the same fixture.

    The alternative would be to require extremely defensive programming in the tearDown method, but that is impractical in practice: if you know where you should be defensive against programmer errors (RuntimeExceptions, for example) then you should just fix those errors!'
  replies: []
- id: 1121
  author: Jason Marshall
  date: '2004-02-11T12:32:58'
  content: 'A lot of people seem to either be talking around Cedric''s problem, or simply apologizing for (as in, rationalizing) the behavior of JUnit, which I find to be a bit of a shame.

    I''ll attempt a different tack, and see if perhaps this illuminates the problem for the folks that don''t see Cedric''s point.

    When you write tests, you subclass a class called TestCase.  Not TestCases, not SetOfTestCases... TestCase, as in One Test Case.  My expectation would be that an instanceof TestCase constitutes an indivisible unit of testability, and therefore should only need one set up and one tear down method call.

    This notion that any method begining with ''test'' in its name constituted a single unit test is excessively foreign to Java, despite the fact that numerous programmers seem to think it''s a good idea to push things in that direction.  The unit of design contract in Java is the Interface.  Use it, instead of fighting to make the method name the unit of contract.'
  replies: []
- id: 1122
  author: Jim Moore
  date: '2004-02-12T05:48:46'
  content: 'When I absolutely MUST share state between invocations of different test* methods in a test class, the solution is trivial:

    public class MyTest extends TestCase {

    static {

    // shared setup

    }

    //...

    }

    the class only gets loaded once, so the static block is only run once.

    Of course, as has been brought up many times, it''s best to avoid doing so.  But when you need to do it, it''s easy.'
  replies: []
- id: 1123
  author: Phil Aston
  date: '2004-02-19T11:28:45'
  content: 'I''ve always wondered this.

    I''ve thought for a long time that JUnit design is v. poor - hard to stomouch considering its ubercool parentage, and that orginal design paper on its evolution.

    Two vaguely relevant mini-rants:

    1. I so frustrated with the ANT JUnit  task having to fork a process for every testcase (as in class, sigh - Jason is so right about the stupid naming; there are two types of sets of test cases, test suites of test cases which are actually Java classes of things that you and I would call test cases, and all of these are tests. got that?), because forking a JVM is very slow when you''ve got clearcase hosting half your classpath, that I contributed a version that didn''t. I''m found I wasn''t the only one to find that the ANT development community is deaf to such useful contributions.

    2. The previous version of The Grinder (The Grinder 2  - http://grinder.sourceforge.net) has a JUnit plugin. Once upon a time I wrote this simple monstrosity to produce a list of JUnit tests decorated with my wrapper:

    private void getTests(junit.framework.Test test, Set tests) {

    // Really hacky switch on type, but no obvious other way of

    // doing this with the JUnit API.

    if (test instanceof TestSuite)  {

    final Enumeration jUnitTestEnumeration = ((TestSuite)test).tests();

    while (jUnitTestEnumeration.hasMoreElements()) {

    junit.framework.Test jUnitTest = (junit.framework.Test)jUnitTestEnumeration.nextElement();

    getTests(jUnitTest, tests); // Recurse.

    }

    }

    else if (test instanceof TestCase) {

    tests.add(new TestWrapper((TestCase)test, ...));

    }

    else { /* Handle unknown type. */ }

    }

    which both sucks and blows. I don''t think this was totally my fault.'
  replies: []
- id: 1124
  author: Gavin
  date: '2004-02-22T21:31:17'
  content: This problem is an absolute PITA to me and I had to do disgusting things to work around it in the Hibernate test suite (the initialization I need to perform is to read the mapping documents, create the SessionFactory, and export the db schema). The workaround? Keep the SessionFactory in a static variable and lazily initialize it from setUp(). Uggghhhh.....
  replies: []
- id: 1125
  author: Catherine
  date: '2004-05-08T05:09:18'
  content: Learn Linux.
  replies: []
- id: 1126
  author: Stephane Bailliez
  date: '2004-07-26T00:49:59'
  content: 'For people complaining about Ant JUnit task''s behavior..in Ant 1.6.2 there has been a new forkmode attribute introduced. More on this in the documentation: http://ant.apache.org/manual/OptionalTasks/junit.html'
  replies: []
- id: 1127
  author: Sarah S
  date: '2004-11-06T13:46:05'
  content: Ciao
  replies: []
- id: 1128
  author: aarone
  date: '2005-01-13T11:52:47'
  content: 'I thought jim moore  a simple answer:

    public class MyTest extends TestCase {

    static {

    // shared setup

    }

    //...

    }

    and then I quickly realized that doesn''t allow you to tear down the type of things you actually want to set up, like database connections.

    Cedric is right.  Junit is broken.  It''s worth rewriting from scratch just for this feature alone.'
  replies: []
- id: 1146
  author: d2dcc15c17cb352a9389fc29
  date: '2005-04-17T17:04:12'
  content: '<strong>d2dcc15c17cb352a9389fc29</strong>

    f84626766e926c2d5a569eee5bf97636 <a href="bdd7b63361330ce54839c.com" rel="nofollow ugc">3e6de3</a>.'
  replies: []
- id: 1147
  author: screaming penguin
  date: '2005-05-16T08:01:28'
  content: '<strong>No, not really. I am</strong>

    No, not really.

    I am entering this discussion admittedly late but it is still a useful dialog so . . .'
  replies: []
- id: 1129
  author: j. betancourt
  date: '2005-06-14T09:30:41'
  content: 'Easy solution?  Leave in the existing per test setup and teardown, but add parallel one-time versions of these:

    protected void setUpOnce() throws java.lang.Exception;

    protected void tearDownOnce() throws java.lang.Exception'
  replies: []
- id: 1130
  author: Michael Bushe
  date: '2005-08-16T19:10:09'
  content: 'I''m also annoyed about having instances for each test method, but one-time setup is trivial, no?  There is still one test class, right?

    public class TestMyClass {

    static hasSetup = false;

    public void setUp() {

    if (hasSetUp) {

    doMySetup();

    hasSetUp = false;

    }

    }

    }

    Granted, I''d rather not do this.'
  replies: []
- id: 1131
  author: Steven
  date: '2005-08-17T11:34:59'
  content: 'Lots of discussion about JUnit and there have been some harsh edicts, like:

    Cedric:   "I am beginning to think we are once more stuck with a de facto standard that is utterly broken."

    Utterly broken?  I have produced enterprise applications for companies that have made millions of dollars and used JUnit for testing 80% of the code.  Utterly is an extreme adjective here.

    Cedric:  "It creates unnecessary instances and can be very time consuming."

    I guess I would like to see some metrics on this.  Object creation, with todays hardward and OS''s, is incredibly fast.  I don''t see what the problem is with unnecessary instances.  For instance, I have ten unit tests that each have 3-6 test methods, and the suite runs in about 2 seconds.  This is super fast.  In my experience, the most JUnit tests I''ve had for a project was about 400, with probably (on average) 5 tests per class and it took about 15 minutes to run.  And we once calculated that 5 minutes of that was dedicated to starting up and tearing down Hibernate.

    Carlos:  "then the setUp and tearDown mechanism sounds quite a bit redundant to me..."

    In some cases that is true, but I write unit tests with the same design principles as my production code.  So I use the setUp() method to prevent code duplication in the tests.  By the way, I rarely override the tearDown() method.  I try to write all tests such that they are responsible for setting up their but not tearing it down.  That has another benefit too, if the test fails you can see the current state of the test.  If tearDown() runs then your broken test data gets cleaned up.

    Jason:  "This notion that any method begining with ''test'' in its name constituted a single unit test is excessively foreign to Java, despite the fact that numerous programmers seem to think it''s a good idea to push things in that direction. The unit of design contract in Java is the Interface. Use it, instead of fighting to make the method name the unit of contract."

    Well, a good argument in theory I suppose.  I prefix all test methods with "test" because 1) it''s easy to find the test and non-test methods in the class, and 2) it works well with the underlying JUnitRunner (it finds all test methods with the prefix "test").  I think pragmatically this argument is not that powerful, in reality the use of the prefix "test" is idempotent.

    Also, comments about the Ant JUnit task are well founded, but I have managed to build successful software projects with this.

    My last comment, I overall believe that JUnit works quite well with the Agile folks, because they (we) tend to write code in a way that makes it easy to test.  So we don''t often have to make massive fixtures and set up Tomcat and get JDBC Connections, put messages on queues.  But JUnit isn''t the write tool for every test scenario.'
  replies: []
- id: 1132
  author: Francisco
  date: '2006-06-08T12:36:40'
  content: 'Just to add my 2 cents...

    Steven says:

    Cedric: "It creates unnecessary instances and

    can be very time consuming."

    Steven: I guess I would like to see some metrics on

    this. Object creation, with todays hardward and

    OS''s, is incredibly fast. I don''t see what the

    problem is with unnecessary instances. For

    instance, I have ten unit tests that each have

    3-6 test methods, and the suite runs in about 2

    seconds. This is super fast.

    I am totally in agreement with Cedric. I am currently working on a project that uses WebWork+Spring+Hibernate and if I use the basic setUp and tearDown mechanism for setting up each test I get a test setUp time of about 5 seconds *for each* test. Multiply that by the number of tests and you get to what Cedric was saying about time consuming. The solution of sharing the initialized WebWork+Spring+Hibernate environment does reduce each test''s execution time to a fraction of a second.

    Reiterating what Stephane Bailliez said previously:

    "in Ant 1.6.2 there has been a new forkmode attribute introduced. More on this in the documentation: http://ant.apache.org/manual/OptionalTasks/junit.html"

    That solved it for me. Thanks Steve! :-)'
  replies: []
- id: 1133
  author: Francisco
  date: '2006-06-08T12:37:03'
  content: 'Just to add my 2 cents...

    Steven says:

    Cedric: "It creates unnecessary instances and

    can be very time consuming."

    Steven: I guess I would like to see some metrics on

    this. Object creation, with todays hardward and

    OS''s, is incredibly fast. I don''t see what the

    problem is with unnecessary instances. For

    instance, I have ten unit tests that each have

    3-6 test methods, and the suite runs in about 2

    seconds. This is super fast.

    I am totally in agreement with Cedric. I am currently working on a project that uses WebWork+Spring+Hibernate and if I use the basic setUp and tearDown mechanism for setting up each test I get a test setUp time of about 5 seconds *for each* test. Multiply that by the number of tests and you get to what Cedric was saying about time consuming. The solution of sharing the initialized WebWork+Spring+Hibernate environment does reduce each test''s execution time to a fraction of a second.

    Reiterating what Stephane Bailliez said previously:

    "in Ant 1.6.2 there has been a new forkmode attribute introduced. More on this in the documentation: http://ant.apache.org/manual/OptionalTasks/junit.html"

    That solved it for me. Thanks Steve! :-)'
  replies: []
- id: 1134
  author: ''
  date: '2006-09-06T02:05:03'
  content: 'This works for me

    private static int countTestCases = 0;

    protected void setUp() throws Exception {

    if(countTestCases == 0) {

    log.info("oneTimeSetUp()");

    // do some one time setup

    countTestCases = this.countTestCases();

    }

    }

    protected void tearDown() throws Exception {

    --countTestCases;

    if(countTestCases == 0) { // no more tests, tear down now

    log.info("oneTimeTearDown()");

    // do some one time tear down

    }

    }'
  replies: []
- id: 1135
  author: ''
  date: '2006-09-06T02:06:34'
  content: 'This works for me

    private static int countTestCases = 0;

    protected void setUp() throws Exception {

    if(countTestCases == 0) {

    log.info("oneTimeSetUp()");

    // do some one time setup

    countTestCases = this.countTestCases();

    }

    }

    protected void tearDown() throws Exception {

    --countTestCases;

    if(countTestCases == 0) { // no more tests, tear down now

    log.info("oneTimeTearDown()");

    // do some one time tear down

    }

    }'
  replies: []
- id: 1136
  author: Toddius Zho
  date: '2006-10-24T13:27:35'
  content: 'The first Commentor was correct. Just use junit.extensions.TestSetup. It wraps a Test and only  calls setUp and tearDown once and only once, no matter how many testXXX() methods the wrapped Test has.

    I found the best way to do this was to wrap the Test in a TestSuite it''s Class ctor and in turn pass the TestSuite to the TestSetup:

    public static Test suite()

    {

    return new MyTestSetup(new TestSuite(MyRealTest.class));

    }

    where MyTestSetup contains your "one-time methods" and MyRealTest contains the testXXX methods. Add more Classes to the throwaway TestSuite to have setUp and tearDown span across more than one Test.

    NOW THE REAL BITCH IS ...

    Ant doesn''t let you automatically build up structures of TestSetups, TestDecorators, TestSuites, and Tests.  will not save you. I''d rather never write a single suite() method and build it up in Ant instead. Something like:

    testsetup@name and test@name will be FQCNs, but testsuite@name will be a string value identifier, not tied to a particular Java class -- more like an abstract container name.

    And one should be able to nest TestSetups. So I can have "A" setup Hibernate and "B" setup JNDI with the deeper nested Tests having the benefit of  both services being available.'
  replies: []
- id: 1137
  author: roman
  date: '2007-08-13T06:49:48'
  content: nd one should be able to nest TestSetups. So I can have "A" setup Hibernate and "B" setup JNDI with the deeper nested Tests having the benefit of both services being available.
  replies: []
- id: 1138
  author: tramadol
  date: '2007-09-24T05:46:46'
  content: And one should be able to nest TestSetups. So I can have "A" setup Hibernate and "B" setup JNDI with the deeper nested Tests having the benefit of both services being available.
  replies: []
- id: 1139
  author: Sekhar
  date: '2007-10-05T13:12:41'
  content: An excellent discussion on JUnit, I don't have anything to add as most of the senarios are discussed in detaild. But its a worth reading thread for any one who want to venture in to JUnit.
  replies: []
- id: 1140
  author: Merlyn Albery-Speyer
  date: '2008-01-10T20:11:02'
  content: FYI The first two links of "all these deficiencies" don't link to any content.
  replies: []
- id: 1141
  author: artem
  date: '2008-01-22T04:53:36'
  content: If test cases shared the same fixture state and something failed during the tearDown of one test, the fixture would be left in an inconsistent state, and would cause confusing errors in subsequent tests running with the same fixture.
  replies: []
- id: 1142
  author: cris
  date: '2008-04-01T06:48:58'
  content: I saw more of this staff at loadingvault.com
  replies: []
- id: 1143
  author: sriram
  date: '2008-05-05T05:53:07'
  content: 'Can some one tell me the purpose of

    countTestCases = this.countTestCases();

    in the code for escaping setUp() and tearDown() call during each testmethod''s run?'
  replies: []
- id: 1144
  author: Vlad
  date: '2008-11-01T04:30:40'
  content: 'I would like you to recomend filespump.com to look for files you are interested in.

    Now it''s the best file hosting search engine in the web.

    More than 4 000 000 files indexed.

    Try it and i think you will be satisfied with search results.

    Use search string.'
  replies: []
- id: 1148
  author: no name
  date: '2010-10-29T07:07:53'
  content: The reason for creating an instance for each test makes them easy to run in parallel
  replies: []
---

# 

**J Unit **

Why does a TestCase get instantiated as many times as it contains test methods? 

Try this: 

> public class MyTest extends TestCase {  
>    
>    public MyTest(String name) {  
>      super(name);  
>      System.out.println("Created a MyTest");  
>    }  
>    
>    public void testA() {}  
>    
>    public void testB() {}  
>  }  
> 

and you will see "Created a MyTest" displayed twice. 

My initial reaction when I see code that puzzles me is to give the author the benefit of the doubt, so my first thought was "Maybe they do this to make sure that test methods are independent from each other, that is, a test cannot fail because of a side effect created by another test method". 

Then I realized that this justification was stupid for two reasons: 

  * If I want two test methods to be truly independent, I will just put them in two different classes. 
  * The setUp() method is called before each test method, thus guaranteeing that the state of the object is restored before each invocation. 
The more I thought about it, the more I realized that being able to share some state between test methods, such as a JDBC connection or a parsed XML file, was actually quite useful. The problem is that JUnit makes this simply impossible:  you have to put this code in setUp() and therefore, rerun it before every test method.

At this point, and after finding [all](http://www.jroller.com/page/cbeust/20030425) [these](http://www.jroller.com/page/cbeust/20030426) [deficiencies](http://beust.com/weblog/weblog/archives/000077.html) in JUnit's design and implementation, I am beginning to think we are once more stuck with a de facto standard that is utterly broken.

Unless someone can explain to me this behavior?
