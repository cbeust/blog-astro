---
title: Why unit tests are disappearing
date: '2005-09-10T17:42:26'
slug: why-unit-tests-are-disappearing
categories:
- Java
comments:
- id: 4202
  author: Michael
  date: '2005-09-10T21:16:23'
  content: 'Indeed, the term "unit test" has been around for a long time, and it is only recently that the term has been hijacked to have a more dogmatic meaning.

    I guess you can think of tests being a continuum from true isolated unit tests all the way up to stricly only testing what a user can do (functional, integration whatever...). Its all good, especially if automated !'
  replies: []
- id: 4203
  author: Naresh Jain
  date: '2005-09-11T11:19:45'
  content: 'Good post! I agree that we can fight these terminologies and slogans war for ever. But what matters at the end of the day, is working code that does what the end user wants.

    I usually categorize my tests in these 4 types:

    1. Unit isolation testing - Test each unit in isolation. Written by Devs.

    2. Unit integration testing - Test units in context. Written by Devs.

    3. Integration tests - Test across the layers. Written by Devs and Testers.

    4. Acceptance / Functional tests - Across layers, but more focused on end user driving it. Written by Customers/Business Analyst and Testers, with the help of Devs.'
  replies: []
- id: 4204
  author: Mohan Radhakrishnan
  date: '2005-09-11T22:02:04'
  content: 'I used to think that a unit is a class but now I think that it is a unit of functionality. It need not be one class all the time.

    I have been advocating this approach after reading Dave Astels which made sense to me. Obviously this term has many conflicting meanings ?'
  replies: []
- id: 4205
  author: ''
  date: '2005-09-12T00:49:44'
  content: 'Wah, "pure" Tests. Great Thing (TM). Best would be we would not use any hardware at all ..... ;)

    When talking to others I use one term - unit test. The most important thing about is, that you have defined input parameters and defined output. Now you can automate the validation.

    The second important thing is that unit test have to run quickly.'
  replies: []
- id: 4206
  author: Erik B
  date: '2005-09-14T01:30:15'
  content: '[copied from comment at theserverside.com]

    I agree with Cedrics point of view and would like to expand a little on it and the problems inherited with unit test. These are a few points off the top of my head:

    1. Unit tests treat compiled code as the only first class testable unit.

    2. Unit tests do not hold a solution for composed structures

    3. Unit "class as king" perspective rigid and actually irrelevant.

    This discussion is aimed at the unit test purists that actually sits down and compose small bulleted lists ala Michael Feathers that defines what a unit test should be in their eyes. Answers are listed below.

    Discussion:

    1) Saying that other related data such as databases and configuration files are not relevant for the unit testing is complete and utter bullshit. It should be tested to the maximum possible extent. Take for example a system that is centered around a tree structure of data stored in a database. The system may not even have a mening without that data. This makes that data a first class citizen of the system, which implies that it should be tested along with the rest of the code. If this means running the tests in a deployed environment, so be it.

    I make the sanity check of the configuration and startup state a part of the system to the maximum possible extent. This may mean database access, configuration file finding and parsing.

    This does not of course imply that you shouldn''t write a test that tests a single class where applicable, on the contrary.

    2) This is a big problem for unit test purists. When you build for example, an engine, you have a rigid quality assurance of the parts that compose the engine. But the main testing is done with the engine composed togheter. You may have a lot of places where you can hook in and check the status of the engine, but the workings of the engine is not tested in parts. This holds true for engine development and it holds true for software production. The tests should measure functionality, not classes. The class perspective is an artificial view imposed upon us by the now existing languages. Today classes, tomorrow something else.

    3) This means that some unit testing standards people that I have happened to stumble across measure their testing coverage in the number of classes that exists that has a corresponding test class. This is of course, an irrelevant figure. It would be like measuring the quality of a real world process by the number of documents describing it, not the output it produces.

    The real useful measurement is of course how large portion of the codebase is being exercised and found healty. This is done much better with a code coverage tool used in conjunction with your tests. An ideal situation would also measure how much of any other related data and logic where measured when the tests runs.

    If focus would have been more on coverage tools and less on the unit tests, we would have had a much better system development process today.'
  replies: []
- id: 4207
  author: G.
  date: '2005-09-14T01:38:30'
  content: This discussion helps me to understand why i have so many difficulties trying to create unit tests with simple apps (mostly CRUD apps). In these applications, the point is database and mappping. There is few smart things to test.
  replies: []
- id: 4208
  author: David Saff
  date: '2005-09-14T03:07:14'
  content: 'Not that Feathers needs me on his defense team, but do take a moment to think about why he would use these rules.  Read some of his other articles, if you will.  By thinking about these rules, it helps you to think about whether your units are the right size.

    For example, from your article, "the responsibility of your class is to verify that a file contains the appropriate data."  Hmm, I can''t test that using Feathers'' rule.  Maybe there''s actually two responsibilities here.  (1) Get data out of a file.  (2) Ensure that some data is appropriate.  Maybe this means that there''s two classes, and class 2 could be completely tested using Feathers'' rules.

    That''s actually probably what I''d do, in this case.  As a nice side benefit, I''m now already ready to verify the data if it came over the network, instead of from a file.

    And, truth be told, I''d probably also write a single test for class 1 that accesses a small file quickly from a known location, throw it in with my unit tests, and call it a "unit test".  Cause I''m ornery, and ideas and definitions are tools to help us get real work done.

    But if I found that 90% of my "unit tests" were accessing the file system, and I wasn''t writing, well, a file system, I might be worried that I wasn''t testing the things I really wanted to be units.  Thanks, Michael Feathers.'
  replies: []
- id: 4209
  author: ''
  date: '2005-09-14T06:28:14'
  content: When I need to access data over the network, I'll worry about it then.  Until then, I'll use the simplest solution that works.  Convoluting the problem to be dogmatic is going to cause more problems than it solves.
  replies: []
- id: 4210
  author: Paul Croarkin
  date: '2005-09-15T06:02:40'
  content: 'However, when I write a test, I don''t really care if it''s a unit test or a functional test.

    Exactly. What I really care about is 1) does the code do what it is intended to do?, 2) is the functionality repeatable?, and 3) does it still work as intended after making some change?'
  replies: []
- id: 4211
  author: Erik Engbrecht
  date: '2005-09-15T15:55:18'
  content: '1. Unit Tests should be Fast

    2. Unit Tests should be strictly repeatable

    3. Unit Tests should not affect other developers'
  replies: []
- id: 4212
  author: Sam Newman
  date: '2005-09-18T02:50:41'
  content: '> However, when I write a test, I don''t really care if it''s a unit test or a functional test.

    If you don''t care about the scope of the tests you are running, then you''ll find yourself testing larger and larger groups of code (multiple classes, external third-party code). If you test a group of classes (as you do in a functional test) more than a single class, you increase the risk that individual classes are not highly focuses and loosly coupled as you are never forced/encouraged to test the units in isolation from the rest of your code.

    You need functional tests to test your end to end slices through the system. You need unit tests to give you the freedom to refactor your codebase in safety, decrease the size of individual checkins (and therefore promote frequent integration), and make it easy to develop simple, loosly-coupled, highly cohesive code. They fullfil two very different roles, and if you start merging the two you''ll find yourself with a test suite that does neither very well.'
  replies: []
- id: 4213
  author: Robert Watkins
  date: '2005-09-20T19:07:14'
  content: 'Cedric,

    It is quite likely that 90% of the tests you look at are not unit tests, per Michael''s definition. It is a lot less likely that they could not be unit tests.

    The main emphasis of Michael''s rules are about _fast_ tests. When you have lots of tests, you want them to be fast - tests that take a second each drag on when you''ve got a thousand of them. When you''ve got ten thousand, they literally take hours to run.

    Michael recommends dividing your test into fast and slow categories - the fast ones are what he calls unit tests. That''s the only distinction he makes - fast vs slow, with the recommendation that you make most of your tests fast. You want fast tests because it means you can run them more often.

    Making tests fast usually involves mocking things out. So they are definitely unit tests, not integration tests or any other sort of test. Feel free to weaken Michael''s rule to be "may not be a unit test" instead of "is not a unit test".

    Like many of these "dogmatic" positions, the point is to create a "default option". Thus, the default option becomes: if it does one of the things on the list, it''s not a unit test. That doesn''t mean you can''t change your mind when required, on a case-by-case basis.'
  replies: []
- id: 4214
  author: Daniel
  date: '2006-03-28T23:45:24'
  content: Good to know what is Unit testing from experts
  replies: []
- id: 4215
  author: KANTH
  date: '2007-05-17T03:29:02'
  content: 'Hi all,

    After reding all ur postings I came to know tht there will be  no additional benfit of writing UNIT test cases especially for WebApp. If u are not able to test each and every unit of ur application how can we able to test it as whole. I think If we we are not going to test an application be unit then definitely it will not be an efficient system. Talking to the Database, network or something else are secondary things. First we have to make sure that each and every unit in our system should give same and fast result.'
  replies: []
- id: 4216
  author: DbUnitTest
  date: '2009-04-20T23:27:21'
  content: 'For Db unit testing, it is hard to implement. But I would like to introduce one database unit testing tool. It is named as AnyDbTest(www.anydbtest.com). AnyDbTest Express edition is free of charge. It help to us to find value of TDD in database programming.

    I know some guys are using DbUnit or other xUnit test framework to perform DB unit testing. I also tried to use them in my projects, but at last I had to give up these tools because I must keep focus on the database rather than switch to be as application developer.

    AnyDbTest is declarative style testing tool. We will not need to program at all. What we do is to express what we want to test, rather than how to test. We only need to configure an Xml test file to tell AnyDbTest what we want to test.  Rather than painstakingly writing test code for xUnit test framework. So AnyDbTest is the right choice for DBA or DB developers.

    AnyDbTest also offers a visual dashboard. Success or failure of test is automatically computed and presented to us via an easy-to-understand red/green light display.

    Features specific to AnyDbTest:

    *Writing test case with Xml, rather than Java/C++/C#/VB test case code.

    *Many kinds of assertion supported, such as StrictEqual, SetEqual, IsSupersetOf, Overlaps, and RecordCountEqual etc.

    *Allows using Excel spreadsheet/Xml as the source of the data for the tests.

    *Supports Sandbox test model, if test will be done in sandbox, all database operations will be rolled back meaning any changes will be undone.

    *Unique cross-different-type-database testing, which means target and reference result set can come from two databases, even one is SQL Server, another is Oracle.'
  replies: []
---

In a [recent article](http://www.artima.com/weblogs/viewpost.jsp?thread=126923), Michael Feathers enumerates a set of rules defining unit tests:

> A test is not a unit test if:
> 
>   * It talks to the database
>   * It communicates across the network
>   * It touches the file system
>   * It can't run at the same time as any of your other unit tests
>   * You have to do special things to your environment (such as editing configuration files) to run it.
> 


These are indeed very surprising rules, because a unit test is traditionally defined as a _set of test that exercises a single class in isolation of all others_.  With this definition, if the responsibility of your class is to verify that a file contains the appropriate data, it will obviously violate one of Michael's laws.  Yet, by my definition, this test still qualifies as a unit test.

Another interesting observation is that based on my experience, 90% of the tests that I see written with JUnit on a daily basis are **not** unit tests.

Anyway, these semantic games are fun to play but not very useful at the end of the day.  The bottom line is that the success of JUnit has shown that the line between unit and non-unit tests is increasingly being blurred.

However, when I write a test, I don't really care if it's a unit test or a functional test.

What I care about, though, is its categorization:  is it a database test?  A front-end test?  A network test?  Does it run quickly?  Slowly?

This is why groups are so important in tests, because they give the developer maximum flexibility to define additional information on the tests they write, something that packages or class naming cannot give you (a test class can obviously not belong to two packages).  And obviously, these categories are not mutually exclusive:  a database test can run fast or slow, as can a network test.

Here is what it looks like with [ TestNG](http://testng.org):

> @Parameters({ "name" })  
>  @Test(groups = { "fast", "database" })  
>  public void insertOneRow(String name) { ... }  
>    
>  @Test(groups = { "slow", "database" })  
>  public void verifyIntegrity() { ... }

Do you want a quick sanity check before committing code? Run all the `fast` tests, regardless of whether they exercise the database or the network.  
  
Do you want a full functional coverage to make sure absolutely nothing is broken in your product? Run the `slow` tests (or the `integration` ones).  
Did you just modify a schema and you want to make sure you didn't break anything? Just run the `database` tests.  
  
Groups are a very powerful and addictive feature once you start using them...
