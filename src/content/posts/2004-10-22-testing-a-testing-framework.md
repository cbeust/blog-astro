---
title: Testing a testing framework
date: '2004-10-22T10:31:26'
slug: testing-a-testing-framework
categories:
- Java
comments:
- id: 2648
  author: Robert Watkins
  date: '2004-10-25T13:42:07'
  content: 'It''s quite amusing how much your design is starting to look like JUnit, Cedric... ;).

    "inner TestNG instance", "beforeTestMethod", specifying groups programatically...

    On a more serious note: Beck''s TDD book has a good section on rolling a test harness using itself to test itself.

    (BTW: "Eat your own dogfood" is a cooking phrase from England; a chef couldn''t know if he was making quality food or dog food unless he tried it himself)'
  replies: []
- id: 2649
  author: R.J.
  date: '2004-10-26T05:40:27'
  content: 'Cedric, couldn''t find another way to reach you. I replied to your post on my website - I don''t think you read my blog carefully enough ;)

    R.J.'
  replies: []
---

The best way to test a testing framework is, of course, to use it on itself.  There are plenty of benefits to this approach:

  * I like to "drink my own champagne" (I prefer this analogy to "eating my own dog food", being French and all).  If I don't use my own code in-house, I am missing an opportunity to receive important feedback.  
 
  * It's a great way to refine the listening API and make sure it covers all possible cases (this is the API that allows clients to be informed of when a test is being called, is succeeding, failing, etc...).  
 
  * It also allows me to make sure that [TestNG](http://beust.com/weblog/testng) is reentrant, since it is basically calling itself.  This is important since TestNG supports parallel execution of tests, so no deadlocks are permitted.



With this in mind, the requirements for testing TestNG are as follows:

  * I need to be able to specify testng.xml programatically.  I don't want to create sub XML files for each test.  Instead, I want to set up my testing environment completely in Java.  
 
  * When I run the tests, I want to make sure that the right methods are called and that their status (pass, fail, skip) matches what I expect.



The design I have achieved so far allows me to write tests like this:
    
    
    @Test
    **public** **void** partialGroupsClass**(****)** **{**
    addClass**(** "test.sample.PartialGroupTest"**)** ;
    addIncludedGroup**(** "classGroup"**)** ;
    run**(****)** ;
    String**[****]** passed = **{**
    "testMethodGroup", "testClassGroup"
    **}** ;
    String**[****]** failed = **{**
    **}** ;
    verifyTests**(** "Passed", passed, getPassedTests**(****)****)** ;
    verifyTests**(** "Failed", failed, getFailedTests**(****)****)** ;
    **}**
    

In this test, I specify the test class to be invoked and the group to be included for this run.  Then I run the tests and compare the methods actually run against the ones I expect to be run.

As you can expect, the class PartialGroupTest contains several methods, of which only testMethodGroup() and testClassGroup() belong to the group "classGroup", so I only expect these methods to be invoked and to pass.

Now, how does this work exactly?  It's quite simple:  the inner TestNG instance is configured in a "beforeTestMethod" method, so that it gets invoked before each test method.  This way, I am guaranteed to start with a clean inner TestNG instance for each test method:
    
    
    @Configuration**(** beforeTestMethod = **true****)**
    **public** **void** methodSetUp**(****)** **{**
    setPassedTests**(****new** HashMap**(****)****)** ;
    setFailedTests**(****new** HashMap**(****)****)** ;
    setSkippedTests**(****new** HashMap**(****)****)** ;
    // ...
    **}**
    

This method is defined in a base class that all my tests inherit, so I don't need to worry about this when I write my tests.  It is also responsible for setting itself as a listener to the inner TestNG instance so that it gets notified each time a test passes, fails or skips.  Later, the method verifyTests() can be invoked by each test method to compare the methods run against the ones they expect.

This infrastructure makes it trivial for me to add new tests and new functionalities and be test-happy.  For example, as I was writing this entry, I realized I could also test failures of partial groups, so I added a couple of methods that belong to the same group, made them fail with an "assert false", verified that the test failed, then I added the names of these two methods in the failed array and the test passed.

I cannot over-emphasize how important it is to have a testing framework that is flexible and yet, easy to use.  No matter how you look at it, if you don't understand how your tests work and you are not clear on how to add tests yourself, your work as a developer is sub-optimal and you are probably not as productive and not as aggressive as you could be.

This applies to "real life" as well, where you are working with an entire QA department that came up with its own testing framework and is responsible for writing most of the tests.  If this testing framework is too complex for you and your developers, you need to get together with your QA department and come up with a way that both units can exchange tests easily.
