---
title: Testing JMS and asynchronous code
date: '2004-10-14T19:21:53'
slug: testing-jms-and-asynchronous-code
categories:
- Java
comments:
- id: 2594
  author: Jon Tirsen
  date: '2004-10-14T23:19:40'
  content: 'That test will intermittently produce false negatives.

    If the message is sent before the test thread manages to reach the m_done.wait() then the m_done.notify() will happen before m_done.wait() and the m_done.wait() will never return causing the timeout to happen. The test will fail when even if everything actually worked. (A better way is to use a Latch: http://gee.cs.oswego.edu/dl/classes/EDU/oswego/cs/dl/util/concurrent/Latch.html, or in JDK5 a CountDownLatch with a count of 1.) Also, you should almost never use notify, notifyAll is much better.

    What I''m trying to say (aside from playing the besserwisser, of course ;-)  ) is that unit-testing with multiple threads is really hard. What I''ve been starting to do is to test multiple interacting threads by simply having the test thread act as all the different threads. Not only does these tests not suffer from these intermittent false negatives (that are a real PITA to find), I''ve also found they improve my multi-threading design! They make me think a lot more on where the threads meets and collaborate and how to compartmentalize the different threads.

    (Btw, why not just use m_done.wait(5000) ???)'
  replies: []
- id: 2595
  author: Jon Tirsen
  date: '2004-10-14T23:20:19'
  content: 'That test will intermittently produce false negatives.

    If the message is sent before the test thread manages to reach the m_done.wait() then the m_done.notify() will happen before m_done.wait() and the m_done.wait() will never return causing the timeout to happen. The test will fail when even if everything actually worked. (A better way is to use a Latch: http://gee.cs.oswego.edu/dl/classes/EDU/oswego/cs/dl/util/concurrent/Latch.html, or in JDK5 a CountDownLatch with a count of 1.) Also, you should almost never use notify, notifyAll is much better.

    What I''m trying to say (aside from playing the besserwisser, of course ;-)  ) is that unit-testing with multiple threads is really hard. What I''ve been starting to do is to test multiple interacting threads by simply having the test thread act as all the different threads. Not only does these tests not suffer from these intermittent false negatives (that are a real PITA to find), I''ve also found they improve my multi-threading design! They make me think a lot more on where the threads meets and collaborate and how to compartmentalize the different threads.

    (Btw, why not just use m_done.wait(5000) ???)'
  replies: []
- id: 2596
  author: Aslak Hellesoy
  date: '2004-10-15T01:15:03'
  content: 'A couple of better approaches to unit testing async/multithreaded code are described here:

    http://nat.truemesh.com/archives/000413.html

    http://joe.truemesh.com/blog//000279.html

    An other comment. If I were to code a piece of logic that is to be used in a JMS system, I would put all the logic in a POJO without any asynchronicity and test it completely standalone.

    Then I''d write a thin JMS wrapper around it - without any logic at all - beyond delegating to the POJO.

    All of this in-container testing is too cumbersome. I should be able to trust the JMS to deliver messages properly, and shouldn''t have to test that.

    Of course, in event-driven architectures (EDA) - whether it''s based on JMS or not, integration testing becomes even more important. But in that case I would fire up the system, poke various messages at it and see that the expected messages come out of it.

    Aslak'
  replies: []
- id: 2597
  author: ''
  date: '2004-10-15T06:51:49'
  content: 'I don''t get it; what''s the point?  It would be far easier to test this with a mock object.  If all you want to test is that an object sends a message, just mock the message transport.  You don''t have to actually test the behaviour of JMS.  That should be a given, right? If you actually run JMS, your tests will be slow.

    Of course, one would have to run JMS in integration tests, but this test isn''t an integration test.  It doesn''t test the integrated behaviour of the sender and receiver.

    The test is also hard to read: you have to add comments to make it readable, which is a smell.

    Plus you have to use XML to configure your tests! Yuck.  Why use a document markup language when there are perfectly good languages designed for humans to read and write, and it''s trivial to write a user-friendly config file format with SableCC?'
  replies: []
- id: 2598
  author: ''
  date: '2008-11-09T22:04:56'
  content: ''
  replies: []
---

I recently added a couple of features to TestNG that make testing asynchronous code (such as JMS) very easy:  parallelism and time-outs.

Parallelism instructs [TestNG](http://beust.com/weblog/testng) to run your test methods in different threads.  The trick here is that some of these test methods depend on each other, so these methods will obviously be invoked sequentially in the same thread.  But all the other test methods that do not depend on anything else will be run in a separate thread, picked from a pool (which size is configurable).  Here is an example configuration:
    
    
    <suite name="Main Suite" parallel="true" thread-count="10">
    <test name="First Test">
    <classes>
    <class name="test.Test1" />
    <class name="test.Test2" />
    </classes>
    </test>
    </suite>
    

After the run, you can use the [chronological view](http://beust.com/weblog/testng/test-output/methods.html) to see which methods were invoked and in what threads they ran.

Another interesting feature is time-outs, where you can indicate that a specific test method is expected to return within a certain number of milliseconds.  If it fails to do so, it will be interrupted and marked as a FAIL with a TimeOutException.

With that in mind, testing JMS (or asynchronous code) becomes trivial.  For example, imagine that our application posts a message on a JMS topic whenever an error condition arises.  Here is how you could test it:
    
    
    public class ErrorMessageTest implements MessageListener {
    // Used to block
    private Object m_done = new Object();
    @Test(timeout = 5000 /* 5 seconds */)
    public verifyErrorMessageGetsPosted() {
    // register this class as a listener on the error topic
    // create the error condition
    // wait for completion
    m_done.wait();
    }
    // implements MessageListener
    public void onMessage(Message msg) {
    if ( /* msg contains what we expect */) {
    m_done.notify();
    }
    // else, do nothing, wait for another message
    // or for the time-out to kick-in
    }
    }
    

This code is fairly self-explanatory and it leaves the dirty part (handling the time-out and multi-threading issues to the testing framework).
