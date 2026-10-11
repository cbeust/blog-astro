---
title: 'suite() :  good or bad?'
date: '2004-09-09T10:41:39'
slug: suite-good-or-bad
categories:
- Java
comments:
- id: 2301
  author: jc
  date: '2004-09-09T11:26:31'
  content: I avoid using suites() because of that reason. I find myself depending on Ant to run my test "suites". Where tests for grouped using a naming convention into regular unit tests and integration tests. I would rather have just one test per file as it makes it easier to find whats wrong when things break.
  replies: []
- id: 2302
  author: Robert McIntosh
  date: '2004-09-09T12:30:01'
  content: 'I don''t use suites for the purpose you show, but use ants junit tasks for combining tests. However, I do use the suite() method when I''m in development so that I can ''turn off'' tests that I''m not working on at the moment. During my code/test/debug cycle I most often output to a log file items in my unit test so I can see what is going on and turnig off all the tests except the one I''m working on is a real help. It is also nice when the tests may be long running, and because of the the way JUnit discovers tests, the one I''m working on may be down the list thus slowing me up.

    The downside is that I have to remember to uncomment the tests so that they will run. I usually do this after I get a test working, then I''ll turn them all on again as a mini-regression test, then commit to CVS :-)'
  replies: []
- id: 2303
  author: Robert Watkins
  date: '2004-09-09T14:20:28'
  content: 'Technically, this is a flaw in the runners and the way they present the result; they should be able to drill down through multiple levels of suites. Most GUI-based test runners seem to do this okay. However, the  task in Ant does not. As you''re doing your own reporting, you might be able to solve it. :)

    One advantage of grouping suites is to give a group-level decorator. However, I believe you''ve already got that in TestNG, haven''t you?'
  replies: []
- id: 2304
  author: ''
  date: '2004-09-09T17:32:55'
  content: 'I never had any problem doing test hierarchies using suite with the Eclipse runner.  I can know easily which tests fail and which succeed.

    The way I had it setup is one test suite in each package like this:

    public static Test suite() {

    TestSuite suite = new TestSuite();

    suite.addTest(new TestSuite(FirstClassTests.class));

    suite.addTest(new TestSuite(SecondClassTests.class));

    return suite;

    }

    Then one test suite for my whole "module" like this:

    public static Test suite() {

    TestSuite suite = new TestSuite();

    suite.addTest(FirstPackageTestSuite.suite());

    suite.addTest(SecondPackageTestSuite.suite());

    return suite;

    }

    I''m not sure if it would have worked using ant or other runners, but it did work fine using Eclipse''s runner.  When running tests with Ant I was simply using a fileset to run all my test classes, anyway the report task sort them by package.  But the problem I had with this way is I had to add manually each test in my suite, I couldn''t just tell Eclipse to run every tests it finds.'
  replies: []
- id: 2305
  author: Cameron
  date: '2004-09-09T18:17:56'
  content: Your opinions on jUnit can't be trusted because you have a competing product :-p
  replies: []
- id: 2306
  author: J. B. Rainsberger
  date: '2004-09-12T06:53:01'
  content: 'I almost always just run all my tests, avoiding the problem altogether. By using Eclipse or  or IntelliJ IDEA or DirectorySuiteBuilder... I can simply point to a location on disk and run all the tests contained in that file system tree.

    If I want to /permanently/ separate tests from one another -- for example, slow-running ones from quick-running ones -- then I put them in separate source trees. This makes it very easy to run all the slow-running tests in the background with CruiseControl, and run all the quick-running tests as part of my normal TDD cycle. Of course, I want to move tests from the slow-running tree to the quick-running tree, because running more tests (all things being equal) is better.

    After that, there are only two reasons I use suite(): (1) for the Parameterized Test Case pattern, (2) to create a temporary view of the tests while dealing with a specific problem, such as a defect.

    The Parameterized Test Case needs suite() to generate tests with external fixture data, a pattern I describe in detail in _JUnit Recipes_, recipe 4.8. I do this more and more rarely, preferring to use Fit instead.

    As for dealing with a defect, the idea is to create a suite of tests that likely expose the defect and cover the surrounding area, including any end-to-end tests (if needed). I have found myself doing this only a few times, since TDD tends to stop me from making those kinds of mistakes. (I make other, more interesting mistakes, but that''s not on point for now.)

    These are the techniques and strategies I use to make suite() -- such as used in an AllTests class -- essentially obsolete.

    [Please note that, when working on legacy code, I use OrderedTestSuite with suite() to tease apart tests that rely on executing in a given order. I just don''t work on much legacy code these days, so it''s easy for me to forget.]'
  replies: []
- id: 2307
  author: Mats Henricson
  date: '2004-09-13T00:38:34'
  content: 'I use suite() in one case to make a poor mans load test, like this:

    public class LoadWebTest extends TestCase

    {

    public static Test suite()

    {

    ActiveTestSuite suite =

    new ActiveTestSuite();

    for (int i = 0; i &lt; 20; i++)

    {

    suite.addTestSuite(WebTest.class);

    }

    RepeatedTest repeatedTest =

    new RepeatedTest(suite, 10);

    return repeatedTest;

    }

    }'
  replies: []
- id: 2308
  author: Harald M. Mueller
  date: '2004-09-13T07:16:24'
  content: 'Hi -

    we use suite() for a more or less obvious purpose - so that more people can write a common, overall test suite: Each one writes test case classes; these are combined into a single suite(). Thus, most of the time, the suite has only a single level.

    We do not currently use Ant for running tests (we should/should we?), so we combine the tests via suite().

    (BTW: Why do all previous posts use the pronoun "I" [actually, they all *start* with "I"!]? I assume that you all are in teams that write tests together - some of you certainly in larger (>=10 people) teams. What are the practice and feeling team-wise?

    - this is a standard question I add at many places: We really want to know this - as a team ;-) ).

    Regards

    Harald M. Mueller'
  replies: []
- id: 2309
  author: J. B. Rainsberger
  date: '2004-09-20T15:02:14'
  content: Don't assume we're all on teams, Harald. Some of us are poor independents who have to beg to be on teams. Hell, I worked free at ObjectMentor for a week, just to be on a team!
  replies: []
---

I have a love-hate relationship with JUnit's suite() feature. 

Quick reminder: a JUnit class can either have test methods (starting with _test_) or a _suite()_ method such as this: 
    
    
    public static Test suite() {
    TestSuite suite= new TestSuite();
    suite.addTest(new MoneyTest("testMoneyEquals"));
    suite.addTest(new MoneyTest("testSimpleAdd"));
    return suite;
    }
    

In which case, the Tests returned by your suite() method will be inspected recursively for either test methods or more suites. 

This is a powerful concept that allows you to define an entire hierarchy of tests easily. Typically, you can end up with a "root" suite such as: 
    
    
    public static Test suite() {
    TestSuite suite= new TestSuite();
    suite.addTest(new BackEndSuite());
    suite.addTest(new FrontEndSuite());
    return suite;
    }
    

and in turn, have BackEndSuite() contain more suites (DataBaseSuite, SecuritySuite, UserProfileSuite, etc...) and FrontEndSuite() contain things such as HTMLSuite, TemplateSuite, PostSuite, etc... 

The problem comes from debugging a failed test. Suddenly, it becomes really hard to pinpoint exactly what test is failing because, well, you simply can't tell right away which tests are active, enabled, and what suite they belong to. 

In short, there is not a single file that you can look at and get an overall view of your test structure. 

Confronted with this problem with [TestNG](http://beust.com/weblog/testng), I am not sure what to do. I like the idea of the hierarchy but I wonder if it doesn't have more downsides than upsides. 

For now, I have decided to try the "one file only" approach, and that file is your build.xml. The  ant task allows you to specify a fileset, so you would have something like this: 
    
    
    <testng outputDir = "${basedir}/test-output">
    <fileset dir="${basedir}">
    <include name="back-end/database/testng.xml" />
    <include name="back-end/security/testng.xml" />
    <include name="front-end/html/testng.xml" />
    ...
    </fileset>
    </testng>
    

If I wanted to introduce the concept of a hierarchy of tests, I would simply allow testng.xml to reference other testng.xml files. 

Thoughts?
