---
title: Advanced parallel testing with TestNG and data providers
date: '2009-04-22T07:28:50'
slug: advanced-parallel-testing-with-testng-and-data-providers
categories:
- Uncategorized
comments:
- id: 7777
  author: Karthik Krishnan
  date: '2009-04-23T10:25:11'
  content: Great Addition to TestNG. Will you be updating this in the standard testng documentation?
  replies: []
- id: 7778
  author: Frank Harper
  date: '2009-04-28T11:49:10'
  content: 'Cedric,

    Don''t you mean the following?

    With this new feature, TestNG makes it even easier to run your tests in parallel, and tests that are using data providers returning large sets of values are likely to see a significant DECREASE in running time.'
  replies: []
- id: 7779
  author: Chris Dolan
  date: '2009-06-16T10:48:41'
  content: 'Hi Cedric,

    Thanks for continuing to improve this GREAT software!  You may already be aware, but the link to the beta at testng.org/testng-5.10.zip is not working.

    ~Chris'
  replies: []
- id: 7780
  author: Mohan
  date: '2009-06-19T05:23:23'
  content: Is there any way to test time schedules of a scheduler ? If the time and timezones are varying it is difficult to simulate. How is time simulated usually ?
  replies: []
- id: 7781
  author: kalidasya
  date: '2009-11-13T00:32:00'
  content: 'I hope someone can help me, I have a problem.

    I have more test methods (in a dependency chain) and I want to run each chain in one thread. (like the xml setting: parallel=methods)

    Is it possible with dataproviders?'
  replies: []
- id: 7782
  author: Jim
  date: '2010-01-08T00:37:18'
  content: 'Hi Cedric,

    Could you take a look of my question>

    I had used 5.10 update from maven

    org.testng

    testng

    5.10

    jdk15

    test

    but it''s not working by

    in java file:

    @DataProvider(name = "testdata", parallel = true)

    public String[][] testdata()

    { return String[][] }

    in testng.xml'
  replies: []
---

TestNG allows you to run your test methods in separate threads. You can configure the size of the thread pool and the time-out and TestNG takes care of the rest. For example, consider the following test class invoked with a thread pool size of 2: 
    
    
    @Test
    public class A {
    public void g1() { log("g1"); }
    public void g2() { log("g2"); }
    public void g3() { log("g3"); }
    public void g4() { log("g4"); }
    }
    

The output: 
    
    
    Thread:9 g4()
    Thread:8 g2()
    Thread:8 g3()
    Thread:9 g1()
    

As you can see, TestNG created a pool of two threads and it is dispatching all the test methods on each of these threads as they become available. You can also configure the threading strategy ("each test method in its own thread", "each class in its own thread", etc...) and the time out for each of these thread pools. 

Another popular feature of TestNG is data providers. Let's add two methods and two data providers to the test class above: 
    
    
    @DataProvider()
    public Object[][] dp1() {
    return new Object[][] {
    new Object[] { 1 },
    new Object[] { 2 },
    new Object[] { 3 },
    new Object[] { 4 },
    };
    }
    @Test(dataProvider = "dp1")
    public void f1(Integer n) {
    log("f1", n);
    }
    @DataProvider
    public Object[][] dp2() {
    return new Object[][] {
    new Object[] { 11 },
    new Object[] { 12 },
    new Object[] { 13 },
    new Object[] { 14 },
    };
    }
    @Test(dataProvider = "dp2")
    public void f2(Integer n) {
    log("f2", n);
    }
    

`f1()` will be invoked with 1, 2, 3 and 4 while `t2()` will receive 11, 12, 13 and 14. 

Here is the output (each color represents a different kind of test method: one for the four methods that don't use any data provider, one for `f1()` and one for `f2()`: 
    
    
    Thread:9 g4()
    Thread:8 g3()
    Thread:9 g2()
    Thread:8 f1(1)
    Thread:9 f2(11)
    Thread:9 f2(12)
    Thread:9 f2(13)
    Thread:8 f1(2)
    Thread:9 f2(14)
    Thread:8 f1(3)
    Thread:9 g1()
    Thread:8 f1(4)
    

Everything is still running on a thread pool of size 2, but you will also notice that the two methods using data providers (`f1()` and `f2()`) are invoked in sequence on the same thread. In other words, `f1()` is invoked on one thread an then it remains on that same thread until it has received all the values from its data provider (1, 2, 3 and then 4). Same thing for `f2()` and the values 11, 12, 13 and 14. 

Extending multithreading to data providers has been one of the most requested features for TestNG, and I'm happy to announce that it's now implemented and it will be part of the next release of TestNG. 

In order to make a data provider run in a pool of threads, you use the new annotation `parallel`: 
    
    
    @DataProvider(parallel = true)
    public Object[][] dp2() {
    

Data Providers are run in their own thread pool, which is different from the thread pool used for test methods. Let's run the example above again with a test thread pool size of 2 and a data provider thread pool of 3: 
    
    
    Thread:9 g4()
    Thread:8 g3()
    Thread:8 g2()
    Thread:9 f1(1)
    Thread:10 f2(11)
    Thread:11 f2(12)
    Thread:12 f2(13)
    Thread:9 f1(2)
    Thread:12 f2(14)
    Thread:9 f1(3)
    Thread:9 f1(4)
    Thread:8 g1()
    

In this run, both the `g` methods and `f1()` are running on the test thread pool (remember that even though `f1()` is using a data provider, it's not using `parallel=true`, so it's using the test thread pool). The novelty here is that the four invocations of `f2()` are now happening on three different threads (10, 11 and 12). These three threads are part of the data provider thread pool, which was configured with a size of three. 

Let's now make the other data provider parallel as well: 
    
    
    @DataProvider(parallel = true)
    public Object[][] dp1() {
    

The output: 
    
    
    Thread:9 g4()
    Thread:8 g3()
    Thread:8 g2()
    Thread:10 f2(11)
    Thread:11 f1(1)
    Thread:12 f1(2)
    Thread:10 f1(3)
    Thread:11 f1(4)
    Thread:12 f2(12)
    Thread:11 f2(13)
    Thread:10 f2(14)
    Thread:9 g1()
    

This time, only the `g()` methods are using the test thread pool (threads 8 and 9) while the two methods using a data provider (`f1()` and `f2()`) are sharing the data provider thread pool (threads 10, 11 and 12). 

With this new feature, TestNG makes it even easier to run your tests in parallel, and tests that are using data providers returning large sets of values are likely to see a significant decrease in running time. 

Parallel data providers will be part of TestNG 5.10 but you can already [download the beta](http://testng.org/beta) and try it for yourself.
