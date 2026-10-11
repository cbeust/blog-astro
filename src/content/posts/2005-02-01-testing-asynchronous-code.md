---
title: Testing asynchronous code
date: '2005-02-01T22:44:41'
slug: testing-asynchronous-code
categories:
- Uncategorized
comments:
- id: 3075
  author: Bob Lee
  date: '2005-02-02T09:03:46'
  content: If you use Object.wait(long)/notify() instead of Thread.sleep(long), the test can complete without always waiting the full 1000 ms. You could also interrupt the thread, but the wait/notify approach is cleaner.
  replies: []
- id: 3076
  author: Bob Lee
  date: '2005-02-02T09:37:07'
  content: If you use Object.wait(long)/notify() instead of Thread.sleep(long), the test can complete without always waiting the full 1000 ms. You could also interrupt the thread, but the wait/notify approach is cleaner.
  replies: []
- id: 3077
  author: Brian Goetz
  date: '2005-02-17T12:59:08'
  content: Even better, use FutureTask.
  replies: []
---

A user recently submitted his problem on the TestNG mailing-list:  he needed to send asynchronous messages (this part hardly ever failed) and then wanted to use TestNG to make sure that the response to these messages was well received.

As I was considering adding asynchronous support to TestNG, it occurred to me that it was actually very easy to achieve:
    
    
    private boolean m_success = false;
    @BeforeClass
    public void sendMessage() {
      // send the message, specify the callback
    }
    private void callback() {
      // if we receive the correct result, m_success = true
    }
    @Test(timeOut = 10000)
    public void waitForAnswer() {
      while (! m_success) {
        Thread.sleep(1000);
      }
    }
    

In this test, the message is sent as part of the initialization of the test with `@BeforeClass`, guaranteeing that this code will be executed before the test methods are invoked.

After this, TestNG will invoke the `waitForAnswer()` test method which will be doing some partially busy wait (this is just for clarity: messaging systems typically give you better ways to wait for the reception of a message).  The loop will exit as soon as the callback has received the right message, but in order not to block TestNG forever, we specify a time-out in the `@Test` annotation.

This code can be adapted to more sophisticated needs:

  * If the sending of the message can also fail and you want to test that as well, you should turn the `sendMessage()` into a `@Test` method as well, and in order to guarantee that it will be called before `waitForAnswer()`, simply have `waitForAnswer()` depend on `sendMessage()`:  

        
        @Test(groups = { "send" })
        public void sendMessage() {
          // send the message, specify the callback
        }
        @Test(timeOut = 10000, dependsOnGroups = { "send" })
        public void waitForAnswer() {
          while (! m_success) {
            Thread.sleep(1000);
          }
        }
        

The difference with the code above is that now that `sendMessage()` is a `@Test` method, it will be included in the final report. 
  
  

  * It is not uncommon for messaging systems to be unreliable (or more precisely, "as reliable as the underlying medium"), so your business logic should take into account the potential loss of packets.  To achieve this, you can use the "partial failure" feature of TestNG: 
        
        @Test(timeOut = 10000, invocationCount = 1000, successPercentage = 98)
        public void waitForAnswer() {
          while (! m_success) {
            Thread.sleep(1000);
          }
        }
        

which instructs TestNG to invoke this method a thousand times, but to consider the overall test passed even if only 98% of them succeed (of course, in order for this test to work, you should invoke sendMessage() a thousand times as well).

"Partial failures" are a new feature of TestNG 2.1, which will be released very soon.
