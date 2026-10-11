---
title: Are dependent test methods really evil?
date: '2005-03-17T10:21:19'
slug: are-dependent-test-methods-really-evil
categories:
- Java
comments:
- id: 3275
  author: Tiago Silveira
  date: '2005-03-17T10:45:55'
  content: 'I believe test independency is wanted because you don''t want one test to influence results of other tests. And all it takes is to allow changes executed by tests to remain in the tested system after the test ends.

    We wouldn''t want to prevent that, because we need side effects sometimes. The framework should make it hard to implement it by accident (and certainly NOT by instantiating my test everytime), but I guess good practices will always be there.

    []s'
  replies: []
- id: 3276
  author: JR Boyens
  date: '2005-03-17T11:41:42'
  content: '"Didn''t your momma ever teach you nothin''?"

    Clean up after yourself. Clean up the database connections, reset the DB structure, clean out your written files, etc. etc. etc. If you don''t want your tests to affect other tests. Don''t let them.

    If you''ve coded your tests correctly, (i.e. short and simple), you won''t have much to clean up. If your test fails, catch the Exception, clean up and then throw and let JUnit or TestNG continue.

    Even better, catch that Exception, and before you clean up save state to a zipfile or something, mail to yourself or QA and you have a good start to figuring out what went wrong.'
  replies: []
- id: 3277
  author: Robert Watkins
  date: '2005-03-17T13:17:18'
  content: 'The purpose of the independence is to allow you to understand what a test is doing by reading one method (or, if there are setUp() and tearDown() methods, three). Re-running tests (which is a feature of the test runner you use, and there are a couple out there for JUnit already) is not the intent.

    Let''s take a test case with 10 test methods in it. There''s a bug in the first one; it doesn''t reset a variable properly. The very last one has a bug - it should use the reset value of the variable, but instead the bug is hidden because it''s using the value set up by the first test. By using independent tests, you avoid this issue.

    There are, of course, other ways to achieve this goal. There are also, of course, other interdependence problems to consider, notably with test fixtures (particularly ones set up with static methods).'
  replies: []
- id: 3278
  author: Patrick Calahan
  date: '2005-03-17T15:18:10'
  content: 'I have simply never understood this debate.  If you''re testing an even moderately complex system, it''s absolutely crucial to have some kind of dependency mechanism.

    Monolothic test cases are fine for toy tests and toy systems.  Meanwhile, back in the real world, I pull my hair out trying to get JUnit to work for me.

    It''s baffling to me that the features Cedric is putting into TestNG weren''t in JUnit from the outset.'
  replies: []
- id: 3279
  author: Hani Suleiman
  date: '2005-03-17T15:53:30'
  content: See, something good can come out of drunken ranting and raving at 2am in Vegas after all!
  replies: []
- id: 3280
  author: Pierre Samanni
  date: '2005-03-17T16:55:12'
  content: '"So you can rerun your tests easily"... I have to admit I am baffled that developers might mention this as - what they think is - the main reason why unit tests should be independent. It''s as if repeatability and straight-to-target functional focus were not clearly perceived as some of the best features of unit testing.

    I had a break of two years doing programmatic QA, before going back to dev. I even worked on an internal test harness somewhat similar to TestNG. My experience makes me wish testing would represent a better part of the software engineering enterprise culture, truly. If only to sell more, but also please customers, and save considerable money in the long run. I wish we could one day see a VP of Quality, or a Chief Quality Officer.

    However right now, I think we still are in a "features to market" vs "quality" situation. Even though the software economy has slowed down from its peak in 2000, features still seem to be rushed to delivery by lean engineering teams working with even leaner QA teams. I frankly hope that tools like TestNG will become much more popular than they already are. They are quite necessary.'
  replies: []
- id: 3281
  author: Sam Newman
  date: '2005-03-18T08:58:34'
  content: 'If your single test is huge, it either isn''t a unit test, or your code isn''t testable - no matter the size of the system. From the sounds of it, Patrick Calahan''s systems are not very testable, therefore he has problems writing simple tests to test it, therefore he blames JUnit - I struggle to see how TestNG can help him with this.

    The reason you should be able to run one test end to end without it being dependent on the result of the other test is so the test itself is straightforward - you can read the test, and understand what it does, understand the interactions it''s testing, and understand the internal state it''s verifying.'
  replies: []
- id: 3282
  author: Patrick Calahan
  date: '2005-03-18T15:02:53'
  content: 'Sam, allow me to provide a simple example to aid you in your stuggle to understand what TestNG does for me:

    Say I want to test a JDBC driver I have written by running 100 queries and verifying the results.  Say also that for whatever reason, establishing a database connection and ensuring the sample data is there takes a fairly long time (say 30 seconds) relative to the query time (0.1 ms).

    Under the JUnit philosophy, I have two choices

    1)  Establish the DB connection in the setUp() method and have a test* method for each of the 100 queries.  GOOD: fine-grained test cases BAD: the tests take nearly an hour to run.

    2) Do everything in a single test* method.  GOOD: the test takes less than a minute to run.  BAD: coarse-grained test cases (just one)

    Are you really prepared to argue that I must choose between these approaches simply to get a warm fuzzy feeling that my test methods are independent?  As Mr. Boyens quite rightly points out above, this does nothing more than allow you to be sloppy in writing your tests.  Fortunately, though, I have other options:

    3) Store the DB connection in a static variable in my test class and initialize it only during the first test case.  GOOD: fine-grained tests AND they run in 60 seconds  BAD: it''s a gross hack but JUnit gives me no choice.

    4) Use TestNG and do the DB setup in a separate test case on which all the other tests depend.  GOOD: even more fine-grained test cases that run in seconds and without a hack.  BAD: I still find myself arguing with people who inexplicably insist on the inherent evil of dependent test methods.

    The bottom line is that when you''re testing real world systems, you simply have to be able to use the postconditions of some tests as preconditions for others.  It is naive to insist that every single test start from scratch in building up the state of the system under test.

    And you''re a lot better off if your test framework realizes this and has formal mechanisms to help you cope with it.'
  replies: []
- id: 3283
  author: Patrick Calahan
  date: '2005-03-18T15:10:14'
  content: Yeah yeah, I meant 100ms for query time in my JDBC example.  Whatever.  :)
  replies: []
- id: 3284
  author: Patrick Calahan
  date: '2005-03-18T16:30:28'
  content: '...and I do understand that I could use a JUnit TestSetup for initializing the database connection.  The problem for me is that if I''d like to capture that setup work as it''s own test case, I''m out of luck.  IMHO, the distinction between ''set up'' work and ''test work'' artificial - all of the work is testing different pieces of my system, and I want to be able to capture that work in well-defined test cases.

    A better example might be testing a long sequence of transactions which must be performed in order.  I''d like to have each be a separate test case, but I need to make sure that the nth transaction runs the 1-(n-1)th transactions first.  JUnit simply gives me no good way to do this.'
  replies: []
- id: 3285
  author: Jean-Louis Berliet
  date: '2005-03-18T23:09:17'
  content: 'Test independency is very important for functional testing (blackbox testing) : each test is divided into differents steps : step1, step 2, step 3, ... .  And step1 has to be completed before step2, step2 before step3, ...

    So TestNG is far better than JUnit for funtional testing !'
  replies: []
- id: 3286
  author: Axel
  date: '2005-03-21T08:41:10'
  content: 'The biggest reason for test-indepence is that the order of test method execution is not always the same with the different testrunners !

    Eclipse and maven, for example frequently use a different order when running tests (there is probably a HashMap somehere ?).'
  replies: []
- id: 3287
  author: Tiago Silveira
  date: '2005-03-22T08:19:53'
  content: 'I think Patrick has a point. I agree that you should clean up after you, but not with the idea that sloppy programmers should be blessed in detriment of reusability. Think of this scenario: you have code that peels and apple, than chops it, than eats it, this is a real example of what Jean-Louis Berliet proposed above.

    testPeel()

    testChop()

    testEat()

    You can only chop a peeled apple, so the setup for the testChop() is to bring the system to a state where I have a successful peel. Which code is better to leave the system in this state than testPeel()? I can even pull "Once and Only Once" for this argument.

    The benefits of allowing state to be passed between test methods is imense. Let us have it.

    And I want to have some control about the order of tests too. I''d like testChop() to run only if testPeel() succeds, not have two failures. Maybe the guy who''s running the tests did not write them and cannot tell that he has one problem causing two failures. Maybe I am this guy, some months from now!'
  replies: []
- id: 3288
  author: Robert McIntosh
  date: '2005-04-27T09:04:13'
  content: 'I agree with those who made mention of complex tests. Sure it would be nice if everything could be tested in a simple, short and sweet manner, but it doesn''t always work out that way. I have a bunch of tests that are short and sweet and they can all pass easily, but once I have a test that uses a chain of events to test, this model breaks down.

    As an example, I have a persistence engine and I have tests for the config, the parts that execute SQL, the parts that populate objects from resultsets, etc. and those are done in isolation. I use things such as mock objects, mock resultsets, mock configs, etc. to set up these tests. However, do an end to end test and little things can crop up that the smaller tests don''t take into account and performing these complex tests in Junit can be quite cumbersome, even with things like TestSetup.

    So I, and I''m sure others, have found small, fine-grained tests are great with JUnit, but once you scale up your tests it starts to become a hindrance. Before anyone says ''Well, unit testing means testing at the smallest level'', go right ahead and believe that. ''Unit'' is arbitrary and could mean a single method, or a single subsystem.'
  replies: []
- id: 3289
  author: ''
  date: '2005-09-14T14:44:28'
  content: 'Robert, your test is not a UNIT test.  You''re testing the integration of various aspects.  JUnit is not intended for that.  This seems to be the problem with most defendants of test dependency:

    - you''re usually testing multiple parts of the system!

    It needs to be done, but the tools might differ.'
  replies: []
- id: 3290
  author: Ondrej Medek
  date: '2009-05-04T05:41:01'
  content: 'Well, I am a little bit late for this discussion, but I think it quite clear: unit tests should not depend on each other. If you need dependency, then you probably write integration/functional tests. TestNG can help you with that, JUnit cannot.'
  replies: []
- id: 3291
  author: Roger Keays
  date: '2012-08-29T09:17:22'
  content: It seems many people fail to see the difference between "test dependency" and "global state". You can write dependent tests without using global state (i.e. mathematically independent). The dependency annotations just serve to control the test suite, simple to complex, get an error? skip, find a new starting point... etc
  replies: []
---

One of the basic tenets of unit testing is that test methods should be independent of each other.  JUnit goes to extremes to guarantee this principle by [ reinstantiating your test class before every method](http://www.beust.com/weblog/weblog/archives/000175.html).  I personally think that as soon as you do more than unit testing, your test methods will invariably become dependent on each other (and as a matter of fact, [what are `setUp()` and `tearDown()`](http://beust.com/weblog/weblog/archives/000252.html) if not dependent methods?), and that a testing framework needs to account for that.  But that's not the point of this post.

Recently, I started wondering why this principle seemed to be so important and I asked the following question to several developers:  _" Why is it important to have test methods that are independent of each other?"_.

I was quite surprised to receive pretty much only one type of answer:  _" So you can rerun your tests easily"_.

My surprise comes from the fact that this is a tool concern and not a core design principle.

What was even more surprising is that JUnit doesn't actually give you any way to achieve this task, but let me give you an example.

Every night, thousands of tests are run and when I come into the office in the morning, I check the reports and investigate the failures.  Being able to quickly rerun the failures is of critical importance to developers but there is no easy way to achieve this with JUnit.  Actually, there is not even an easy way to run a specific test method without the assistance of a third-party ant task, and at any rate, such add-ons are not really helping you with the problem at heart:  you should be able to rerun the failed tests the same way your nightly tests ran them.

Now, imagine a testing framework that would give you a very easy way to rerun only the tests that failed in the previous run.  Would independence of test methods from each other be so important any more?

With that in mind, I spent a couple of hours on the plane yesterday coding this feature for [TestNG](http://beust.com/weblog/testng) (you saw that coming, didn't you?), and it turned out to be quite trivial.

TestNG runs tests based on a definition file called `testng.xml`.  Whenever tests fail in a test run, TestNG will create a corresponding ` testng-failed.xml` that will contain only the tests that failed.  Therefore, a typical session will look like this:

> testng -d output testng.xml  
>  testng output\testng-failed.xml

This task is made slightly more complicated by the fact that TestNG supports dependent methods, so if a failed method depended on the successful run of previous test methods, these test methods must also be included in ` testng-failed.xml`, but this was trivial to achieve since TestNG already knows the order in which the methods must be ordered.  It was just a matter of filtering out all the test methods that succeeded and/or were not necessary to rerun the failed tests. 

I already started using this feature to debug TestNG itself and it's made me save a lot of precious minutes already.
