---
title: 'TestNG:  Testing, the Next Generation'
date: '2004-04-28T02:10:22'
slug: testng-testing-the-next-generation
categories:
- Java
comments:
- id: 1556
  author: Glen Stampoultzis
  date: '2004-04-27T20:42:43'
  content: 'What about apricot? http://apricot.sourceforge.net/

    It''s no not flexible but it is simple, open and extensible apparently.'
  replies: []
- id: 1557
  author: Brendan Humphreys
  date: '2004-04-27T21:32:24'
  content: hmmm, the apricot smells a bit rotten. Last release, 0.1.4, was made in March 2002.
  replies: []
- id: 1558
  author: Chandrashekara K A
  date: '2004-04-27T22:19:40'
  content: 'It is not clear why JUnit TestSuite and the group concept are different -- for example, why not use annotations to generate a TestSuite based on "group

    " tags ...'
  replies: []
- id: 1559
  author: Robert Watkins
  date: '2004-04-27T22:45:32'
  content: 'I''ll check this out and take it for a spin, but...

    I''m not sure how this buys me anything over the reflection-based support in JUnit. A key thing to remember is that the reflection support is there as a "best-effort" approach; it saves having to roll test suites by hand. If you want to take a different approach, it''s trivial to do (including the TestCase that creates only one instance).

    If the annotation method doesn''t retain this flexibility, there would be problems. To be honest, I''d like a way I can blend the techniques.

    A number of the other problems that you metioned are with different tools (Ant, DbUnit), and not really limitations of JUnit itself.

    Oh, and if you want _me_ to adopt this (ah, vanity!) you''ll need to give the XML and XSLT support that come in various JUnit-aware tools (such as the JUnitReport task in Ant, and CruiseControl).'
  replies: []
- id: 1560
  author: Jon Tirsen
  date: '2004-04-28T02:09:22'
  content: 'Interesting. NUnit is definitely a much nicer experience than JUnit (and of course, it''s written by ThoughtWorkers ;-)  ).

    There''s two things though:

    1. IDE integration. The JUnit test-runner in IntelliJ (and to a lesser extent the one in Eclipse) is just superb. Can you make a JUnit compatability layer?

    2. XML log format. There''s a massive amount of tools for working with logs in the format produced by the  ant-task, there''s CruiseControl and JUnitReport, but I have also written billions of small nifty scripts that does analysis, graphing, reports and so on.

    If you want to compete, you have to address these issues in some way.'
  replies: []
- id: 1566
  author: Robert's House of Cards
  date: '2004-04-28T06:09:12'
  content: '<strong>JUnit Architecture Redux</strong>

    Looks like I''m talking about another  post of Cedric''s . It seems he doesn''t like JUnit''s test suites, and decided to write a new tool to solve his problem.

    I''m a regular reader of Cedric''s blog, and I''ve been following his periodic posts about JUn'
  replies: []
- id: 1561
  author: Geoff
  date: '2004-04-28T07:47:20'
  content: Sometimes it's best just to put your hand in your pocket and buy some decent software, XDE Tester.
  replies: []
- id: 1562
  author: Scott Stirling
  date: '2004-04-28T10:54:02'
  content: 'Check out http://www.artima.com/suiterunner/, Bill Venners'' attempt to kill JUnit.  Didn''t happen.  JUnit is entrenched, man.  At the very least, you probably need to provide a bridge for all the JUnit tests out there.  Your thing has to be able to run JUnit tests for it to be adopted, I''d venture.

    I like the idea of using attributes though.  But I guess I feel a bit of "If he spent more time writing tests and using JUnit, he''d probably have less problems with it."  I''ve used it a lot over the years (and contributed chapters to a book about it -- forthcoming from Manning, yada yada).  Most of the problems people have are with the test runners in the default junit.jar, but most people who use JUnit in real projects *don''t use* those test runners.  Everyone uses Ant or an IDE-based test runner that has none of those problems.  I haven''t written a TestSuite in years!  I don''t need to for anything whatsoever because Eclipse and Ant provide ways to easily run tests individually or in batches without relying on TestSuites.'
  replies: []
- id: 1567
  author: Euxx
  date: '2004-04-28T12:35:28'
  content: '<strong>Yet another JUnit killer.</strong>

    Cedric has recently  published  a  TestNG, the JUnit killer

    and Robert responds to that with  brief JUnit overview . First of all I don''t see much value in a Robert''s main methods, as well as in the following TestSuite usage (unless such suite is used b'
  replies: []
- id: 1563
  author: Ias
  date: '2004-04-28T21:25:43'
  content: 'I read your announcement of TestNG and found it very interesting. Here''s what I''d like to tell you from my enjoying it.

    1. JAVA_HOME and CLASSPATH

    In order to build and run TestNG, you need to set JAVA_HOME=tiger and CLASSPATH=testng.jar. Without the settings, I couldn''t see it working. I think it will be good for http://beust.com/weblog/testng/ documentation to explain them.

    2. Configuration annotation

    Configuration seems like a Marker, so my suggestion is declaring

    public @interface BeforeTestClass {}

    public @interface AfterTestClass {}

    public @interface BeforeTestMethod {}

    public @interface AfterTestMethod {}

    and using them like

    public class BaseTest {

    @BeforeTestClass

    public void setUp() {

    }

    @AfterTestClass

    public void tearDown() {

    }

    @BeforeTestMethod

    public void calledBeforeEachTest() {

    }

    @AfterTestMethod

    public void calledAfterEachTest() {

    }

    }

    for more brevity and readability.'
  replies: []
- id: 1564
  author: Frank Cohen
  date: '2004-05-01T12:26:56'
  content: 'This looks like cool stuff. You may find my XSTest library interesting. It takes functional test scripts written in Jython and turns them into scalability/load tests. XSTest is at http://www.pushtotest.com/Docs/howto/xstest.html.

    -Frank'
  replies: []
- id: 1565
  author: J. B. Rainsberger
  date: '2004-05-04T14:08:15'
  content: 'It''s interesting, but so far it just looks like another way to implement JUnit, rather than a replacement for it. It would probably help me if you would describe your specific motivation for certain, specific features in TestNG. As an example, what''s the problem with extending TestCase? I haven''t found the NUnit-style test case marking to be such a great improvement over the way I do things with JUnit.

    I''m trying not to be biased towards JUnit -- admittedly, that''s tough for me to do -- but it seems strange even to look at something new without understanding the motivation for it. You say that TestSuite confuses you, but it doesn''t confuse me, so I just don''t know what the big deal is.

    I must say that I like the attribute-based way to creating several, overlapping test suites (groups). That''s nice, but we could easily do that on top of JUnit; no need to start from scratch.

    I''ll keep an eye on it, and I /am/ interested, but I just don''t see the point yet.'
  replies: []
---

It's been a few weeks since I announced another killer app, hasn't it?

I have complained about JUnit many times, both in [terms](http://www.jroller.com/page/cbeust/20030425) [of](http://www.jroller.com/page/cbeust/20030425) [design](http://beust.com/weblog/weblog/archives/000077.html) and [implementation](http://www.beust.com/weblog/weblog/archives/000082.html).  I think my complaints are justified, but if there is something I don't like, it's people who complain but don't do anything to solve the problem they are complaining about.

Therefore, without further ado, I give you...  [TestNG, the JUnit killer.](http://beust.com/weblog/testng)

For quite a while, I have seen very little reason to write a replacement to JUnit since I didn't think the added value would be enough to convince the vast number of JUnit users to switch.  After reading up about NUnit, it occurred to me that using JSR 175 annotations for testing was an interesting evolution, but still not quite the quantum leap I expected (besides, in its effort to mimick JUnit, NUnit repeats a lot of its flaws).

So I went back to the drawing board, in search of one last killer argument to justify taking on this endeavor, and I came up with another ultimate complaint that, strangely, I hadn't voiced about JUnit:  the test Suite.

I have always been confused by JUnit's Test Suites.  Where should the method belong?  In the test class?  Separately?  Should it be static?  And if I want to change the tests run, why do I need to rebuild my code?

With these changes in mind, I came up with the design principles that are the foundation of TestNG.  To quote the documentation:

> TestNG is a testing framework inspired from JUnit and NUnit but introducing some new functionalities that make it more powerful and easier to use, such as:
> 
>   * JSR 175 Annotations.
>   * Flexible test configuration.
>   * Default JDK functions for runtime and logging (no dependencies).
>   * Powerful execution model (no more TestSuite).
> 


I think the combined use of JSR 175 annotations and Test Groups make TestNG a very flexi...  (augh, sorry Hani)...  a very supple testing framework that should compare decently with JUnit.

Check out [the documentation](http://beust.com/weblog/testng), take it for a run and let me know what you think.
