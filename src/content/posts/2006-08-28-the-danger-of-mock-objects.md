---
title: The danger of mock objects
date: '2006-08-28T07:19:18'
slug: the-danger-of-mock-objects
categories:
- Java
comments:
- id: 5904
  author: Erik
  date: '2006-08-28T08:10:52'
  content: 'Generally speaking I cannot agree with you as I "intensively" use mock objects for many years now - and with success as far as I can say.

    That said it is clear that you have to be aware that mock objects are (usually) "good" for unit tests but are quite definitely not "good" for integration tests.

    Mock objects allow you to verify that your code actually does what you think it does (or if you''re working in TDD manner to first define what it should do before you write the actual code) - they cannot help you find out that what you''re intending to do is not what you should do to have the requested functionality work (let alone find bugs in foreign system).

    Erik'
  replies: []
- id: 5905
  author: Oliver Geisser
  date: '2006-08-28T08:18:48'
  content: 'Hi Cedric,

    IMHO both approaches are valid.

    In your Unit Test you will/should use a mock object, because you want to test YOUR code/class/method.

    A Unit Test works under the assumption "everything else" work.

    For an integration test you will test with a real JDBC connection.

    An integration test works under the assumption "all pieces work - now let''s see if they work together".'
  replies: []
- id: 5906
  author: Philip
  date: '2006-08-28T08:19:05'
  content: 'Unit tests DO NOT verify that your application works.

    In this case, your unit test is verifying that Close() is called.  That''s it.  One unit test, one assertion.

    If you want to verify that Close() works as intended, then write a different unit test for that.

    The mock object answer is certainly the correct one - Your three-step test is really more of an integration test than a unit test.  In your case, you''re also testing if the connection works properly and responds properly when operations are attempted when closed.   That''s a lot more than what the method in question is actually doing.

    By testing too much, your unit tests lose some value - if your test fails, where''s the issue?  Is it in the original method, or in the connection provider? the data source?  If I change the original method and the test still passes, is that because the connection provider is smart enough to fix my bug?

    No, I see value in integration testing, but make sure you know what you''re testing and call it what it is.'
  replies: []
- id: 5907
  author: Dustin
  date: '2006-08-28T08:22:36'
  content: Isn't this exactly the reason why you would use mocks in a unit test? Wouldn't this still indicate that the code that you wrote is still solid, and that the problem must be elsewhere? As long as you still have acceptence tests that would catch the bad driver problem, you would still be in a good scenario to diagnose the problem.
  replies: []
- id: 5908
  author: ocean
  date: '2006-08-28T09:25:34'
  content: My own thoughts at ( http://blogs.concedere.net:8080/blog/discipline/software+engineering/?permalink=The-Mock-Objects-Are-Coming.html ) but I'm inclined to agree with Cedric on this point.
  replies: []
- id: 5909
  author: Cedric
  date: '2006-08-28T09:49:08'
  content: 'When you start saying things such as "mock objects are good for unit tests but not for integration tests", you are beginning to lose the big picture, which is:  you are testing so your application will work.  Whether you use a mock object or not, you write a unit test or an integration test, every single line of test code you write should work toward that goal:  make sure your application works.

    This particular case illustrates a very simple point:  mock objects should only be used when the object under test is hard to materialize in a test.  It''s clearly not the case here since previous tests were most certainly running on a working Connection, so you might as well reuse that connection to test close().'
  replies: []
- id: 5910
  author: earl
  date: '2006-08-28T10:22:02'
  content: 'While I can conceptually understand the purpose of separating unit tests from integration tests, I think that there are many situations in which this distinction provides less "bang for your buck" than just focusing on the integration tests.

    Unless the mock/real or unit/integration components can be switched at runtime by an easy configuration switch, but this doesn''t seem possible with the mock-specific code that needs to be written to ensure that your mocks were interacted with in the expected manner.

    I typically work on teams and projects where I spend a lot of energy trying to convince people to write any form of tests at all.  TDD and mock objects are a pipe dream when I can''t even sell JUnit as a "good thing".'
  replies: []
- id: 5911
  author: Uri
  date: '2006-08-28T10:47:01'
  content: '"Mock objects allow you to verify that your code actually does what you think it does..." well, IMHO unit testing is there to verify that your code actually does what you think it does, mock objects actually verify that your code does it in a very specific way. These are two different things. In the case of the connection, you actually test that the implementation should call the close() method... but it doesn''t mean that it''s actually doing what you want it to do (which is of course closing the connection).'
  replies: []
- id: 5912
  author: Erik
  date: '2006-08-28T11:02:23'
  content: 'It seems that I work in a different environment than some of you do. My every day bread is earned writing code that uses other subsystems that are not yet built or are being built or are rather complex/expensive to put up to work. In such an environment I''m pretty happy to get a fast feedback whether the code I wrote does what I intended to (hoping I call the right method of the foreign subsystem and that this method is up to its promises) and whether a change I made doesn''t break anything "obvious" in the code (as tested by the unit tests).

    I certainly make integration tests and don''t rely only or even primarily on the unit tests (whether they use mock objects or not) to decide whether the work is done or not.

    Another fact is that the unit tests normally runs within seconds - while integration tests easily take minutes or hours (some even days). So I''m pretty happy to have them to verify that I (or anybody in the team) hasn''t broken something "obvious" inadvertendly.

    Under the line I can only say that everyone should do what he is confortable with and what gives him the (hopefully somehow verifiable) feeling that he has actually done the job. I''ve found mock objects (and unit tests) to be very effective for my purpose - if they''re not for yours, that''s OK with me. The only attitude I would reject is the one stating that something is bad without having given it a "reasonable" try.

    Though I tend to think that mock objects should be in your toolbox and you should know how (and when) to use them, not having them will definitely not prevent you from doing a great job.

    Erik'
  replies: []
- id: 5913
  author: Robert
  date: '2006-08-28T14:44:45'
  content: 'This isn''t the real danger of mocks, Cedric... this is exactly the scenario mocks are called for. You have a few tests that test your understanding of the API (e.g. that close() works correctly), then everywhere else you test that you use your understanding correctly.

    The real danger of mocks is when you do NOT test your understanding. It is very easy to use mocks in such a way that you codify an erroneous assumption (e.g. that database connections do not _need_ to be closed, because they are in a pool, and closing it would make the pool re-open it).

    One thing about mocks is that they tend to push people in particular design directions. e.g. I found myself being pushed towards an IoC approach because I got tired of doing mock connection setup and teardown; I ended up having the connection passed in, ala IoC. Mocks tend to show up violations of the Single Responsibility Principle - if you ask yourself "why do I need to mock this?", the answer is you probably don''t - you shouldn''t be doing that in that class.'
  replies: []
- id: 5914
  author: Rob Meyer
  date: '2006-08-28T14:55:25'
  content: '"The problem with this answer is that if you upgrade your JDBC driver and that in the new version, close() is broken, your test will keep passing but your application will fail."

    And that''s okay for a single unit test. Unit tests that run as part of every build are not going to excercise the entire system. By this logic, if you really want to make sure that this unit test matches production, then the developers are going to need a running instance of the database, the same version that''s in production, preferably in the same fault-tolerant configuration, with the identical production JDBC driver, configured with the exact same settings. Otherwise, the unit test might pass but the application will fail.

    Me, I''d prefer to make it possible to say run a set of tests that verifies the code itself without any external dependencies. The test you outline has value as well, but it should be logically grouped into it''s own set of tests.

    A lot of people have called it an "integration test", but I don''t like the binary notion that''s developed. There''s a hierarchy both in value of the test and the difficulty in automating the test. There are value in both sorts of tests. If your version breaks, then you have to dig through the code (or write the mock version of the test!) to verify that your code is indeed calling close(), and start digging through vendor errata to figure out what might have changed.

    The mock version tells you your code is doing the right thing, so if your app just broke in a test environment, you can start looking at vendor code right away, and prove to yourself the problem is theirs.

    "Deceptive sense of confidence" is a misleading way to put it. Mock objects should give you a certain type of confidence, and more complex integration-oriented tests should give you a different type of confidence. And by constantly measuring the value of the type of test by its difficulty in implementation, fragility, or diagnostic utility, you can find the balance of both that works for you.'
  replies: []
- id: 5915
  author: Mike Bosch
  date: '2006-08-28T15:04:00'
  content: 'This is something I have been saying internally at my company for a while now.  At first they looked really cool but after a while of using them I found that I really use mocks very little in practice.  My reasons aren''t necessarily because they give me a false sense of security but they just seem to be a pain more than anything else for me.

    I have used to them to test things like servlet filters and such so that they behave the way they should behave given specific data from the filter.  For example, if certain configuration data is not present I want to make sure they''ll fail a certain way and so on.

    I used to sometimes use them for implementing large interfaces that I didn''t want to code dummy methods for but Eclipse and other IDEs pretty much made that a non-starter (i.e. implement methods wizards).  In reality, though, the interface for them is a pain to remember and it always seems like what I need it to do is not so simple to do.  It''s usually just easier to have a dummy implementation that I extend and then override the methods for that particular test.

    As always, for some things and some people mocks may come in really really handy but for my needs at least I go to them very little these days.

    -Mike'
  replies: []
- id: 5916
  author: Howard Lewis Ship
  date: '2006-08-28T16:33:23'
  content: 'I agree with several others; mock objects are perfectly correct here, for unit testing. No amount of unit testing can prove that your application actually works. Integration testing and beyond get you closer to that goal (ultimately, there''s no way to "prove" that an application actually works).

    In any event, Mock objects are great for writing truly localized, independent unit tests. Tests that you run every few minutes. This builds the first layer of confidence before proceding up to slower, more complex integration tests that you run less often.'
  replies: []
- id: 5917
  author: Deepak Shetty
  date: '2006-08-29T20:15:04'
  content: 'Hi

    Cedric, I completely agree with you. I too have to spend a lot of time dealings with other systems managed by other teams (and vendors) where the interfaces are not yet ready or fully defined, and mock objects do give you a very false sense of security. *Unit* tests turn out to be of very low value and actual integration tests of very high value. When you code the mock, you set up expectations yourself and more often than not you write it returning data that you think is correct and coding against it. The reality may turn out to be very different. It turns out(atleast for me) that its far more fruitful spending your time getting the other systems to stub their interfaces and give you versions that you can run your code against than mocking these objects yourselves.

    In the specific case i guess either would be fine because your dealing with a connection object, though i''d only use a mock if there was no other alternative i.e. the database didnt exist.

    The surprising part is that some test driven people recommend using Mocks even when the actual system is available, to get the tests to run faster , or to run *true* unit tests. I mostly find this a waste of time. The logs should be sufficient to tell you where the error is quickly, without needing the unit tests to help you localize the problem quickly. If you need the localization of unit tests , what do you do when some things go wrong in production where speed of response is critical, far more than the response time needed to fix a development bug?'
  replies: []
- id: 5918
  author: Robert C. Martin
  date: '2006-09-01T14:54:30'
  content: 'See my response at:  http://butunclebob.com/ArticleS.UncleBob.TheDangerOfMockObjects'
  replies: []
- id: 5919
  author: Mike Dunbar
  date: '2006-09-08T06:14:03'
  content: 'I also have to say that the Mock is perfect here, for this "unit" test, and disagree with those saying unit tests aren''t important, etc. I agree that the "integration" tests are indispensable, but the unit tests should still be witten as you write the code, and should isolate the "unit" under test.

    It is not losing sight of the bigger picture, to write pure "unit" tests - as long as you don''t skip the whole integration testing thing, that is!'
  replies: []
- id: 5920
  author: Mike Dunbar
  date: '2006-09-08T06:14:40'
  content: 'I also have to say that the Mock is perfect here, for this "unit" test, and disagree with those saying unit tests aren''t important, etc. I agree that the "integration" tests are indispensable, but the unit tests should still be witten as you write the code, and should isolate the "unit" under test.

    It is not losing sight of the bigger picture, to write pure "unit" tests - as long as you don''t skip the whole integration testing thing, that is!'
  replies: []
- id: 5921
  author: Daniel
  date: '2006-10-11T08:15:54'
  content: I'm not an expert on TDD, but the little experience that I have tells me that I will be running tests about a zillion times. For only one test, for instance, I might fail it 10 times before the final code is done. So, if each run earns me 1 second, that's well worth the effort. My DB cannot be accessced in less than 3s (using hibernate, HSQLDB takes 3s, MYSQL 4s)
  replies: []
- id: 5922
  author: Daniel
  date: '2006-10-11T08:16:35'
  content: I'm not an expert on TDD, but the little experience that I have tells me that I will be running tests about a zillion times. For only one test, for instance, I might fail it 10 times before the final code is done. So, if each run earns me 1 second, that's well worth the effort. My DB cannot be accessced in less than 3s (using hibernate, HSQLDB takes 3s, MYSQL 4s)
  replies: []
- id: 5923
  author: Daniel
  date: '2006-10-11T08:17:15'
  content: I'm not an expert on TDD, but the little experience that I have tells me that I will be running tests about a zillion times. For only one test, for instance, I might fail it 10 times before the final code is done. So, if each run earns me 1 second, that's well worth the effort. My DB cannot be accessced in less than 3s (using hibernate, HSQLDB takes 3s, MYSQL 4s)
  replies: []
---

Somebody recently asked how he could test a void method that is supposed to close a connection.

I responded:

>   * Do something with the connection, make sure it works 
>   * Call your method
>   * Do something with the connection, make sure it throws an exception
> 


Somebody else said:

> Pass it a mock connection which has an expectation of a call on to the `close()` method.

The problem with this answer is that if you upgrade your JDBC driver and that in the new version, `close()` is broken, your test will keep passing but your application will fail.

Mock objects can give you a deceptive sense of confidence, and that's why you should avoid them unless there is really no alternative.
