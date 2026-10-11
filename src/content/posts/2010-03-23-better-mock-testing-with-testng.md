---
title: Better mock testing with TestNG
date: '2010-03-23T13:12:03'
slug: better-mock-testing-with-testng
categories:
- General
tags:
- testng
comments:
- id: 8088
  author: Swetty
  date: '2010-03-23T13:37:00'
  content: 'In your example I would expect to the result of t1 to have some set of things to verify that might be different than after calling t2.  How does verify know what context it came from?

    Seems like dependsOnMethod solves this too and you always know that when that test is executed you just came from the dependent method.

    Maybe I''m not thinking about the problem correctly.'
  replies: []
- id: 8089
  author: Cedric
  date: '2010-03-23T13:41:42'
  content: 'Hi Swetty,

    - The context should be contained in the mock being verified, and if you need additional information, you can either store it in a class field or as a user attribute in the mock itself, if your mocking framework allows that.

    - dependOnMethods doesn''t work well here since you would have to keep updating it as you add new test methods:

    @Test(dependsOnMethods = { "t1", "t2", "t3", etc... })

    public void verify() { ... }

    The method interceptor approaches automates this idea, although it doesn''t declare a dependency between the method and its verifier (something that could be achieved with an annotation transformer...  maybe material for a follow up post).'
  replies: []
- id: 8090
  author: Peter Niederwieser
  date: '2010-03-23T16:20:25'
  content: '&gt; the verification aspect has never been well integrated in testing frameworks.

    Just to let you know: Several testing frameworks on the JVM (Spock, Unitils, etc.) have long integrated mock verification and neither require annotations like @Verify nor custom code like the verify() method to make it work.

    Cheers,

    Peter'
  replies: []
- id: 8091
  author: Cedric
  date: '2010-03-23T16:37:38'
  content: I would argue that these are add-ons that you need to download and install, while the solution I offer here can be written on top of the standard TestNG distribution.
  replies: []
- id: 8092
  author: Ed
  date: '2010-03-24T06:23:07'
  content: 'Hi,

    I like the idea, and agree that this is the way to go.

    However, I think it''s a very common behavior, so why not make it part of the testNG framework just like other have like mentioned by Peter above?

    Like mentioned before: many of my tests are run by non-developers, and they simple select tests and click the "run test" button (I hope one day we are able to select more then 1 tests in the testNG eclipse view, something my testers always ask ;(  ) .

    Anyway: I can''t ask them to add an interceptor to their test configuration.

    So I can only use the above when it''s accessible in an "easy way"

    Is it possible to add this interceptor to my tests through an annotation? For example int he @BeforeClass annotation... ? Such that it''s picked up by the testNG eclipse plugin ?

    I like to know your idea''s about "his usage" and to solve these issues ?

    BTW: maybe it''s better to reply in the testNG forum group as I don''t know if I am informed if you answer this post.

    Ed'
  replies: []
---

When you are using mocks in your tests, you usually follow the same pattern: 

  1. Create your mock. 
  2. Set it up. 
  3. Play it. 
  4. Verify it. 
Of these four steps, only steps 2 and 3 are specific to your tests: creating and verifying your mock is usually the exact same code, which you should therefore try to factor out. It's easy to create your mock in a `@BeforeMethod` but the verification aspect has never been well integrated in testing frameworks. 

Until today. 

Mock verification, or more generally, systematic invocation of certain test methods, is a feature that's been requested several times by TestNG users and while I've often been tempted to go ahead and implement it, something has always felt "not right" about it. 

As it turns out, there are apparently three ways that you can automate mock verification in TestNG: one that is incorrect, one that doesn't work and one that actually works. 

Let's start with the incorrect one: 

```java
  @BeforeMethod
  public void init() {
    this.mock = // create mock
  }
  @Test
  public void t1() {
    // set up and play mock
  }
  @Test
  public void t2() {
    // set up and play mock
  }
  @AfterMethod
  public void verify() {
    this.mock.verify();
  }
```

This approach will run the verification after each test method, but the problem is that this code is being run in a configuration method (`@AfterMethod`) instead of a test method (`@Test`). Configuration methods are handled differently by TestNG in how they fail and how they get reported (in a nutshell, a configuration method that fails typically aborts the entire run since your test environment is no longer stable). 

My next thought was to use TestNG's groups and dependencies: 

```java
  @BeforeMethod
  public void init() {
    this.mock = // create mock
  }
  @Test(groups = "mock")
  public void t1() {
    // set up and play mock
  }
  @Test(groups = "mock")
  public void t2() {
    // set up and play mock
  }
  @Test(dependsOnGroups = "mock")
  public void verify() {
    this.mock.verify();
  }
```

At least, this solution runs the verification in a `@Test` annotation, but because of the way dependencies are run, the order of invocation for the code above will be `t1()`, `t2()` and then `verify()`. This is obviously wrong since we will only be verifyin whatever mock was played last. You could consider having each test method create and store a different mock and then have `verify()` go through all these mocks and calling `verify()` on them, but it's clearly a subpar solution. 

So let's turn our attention to the correct solution, which involves the use of a method interceptor. 

I already feature method interceptors in a [previous entry](http://beust.com/weblog/weblog/2008/03/29/test-method-priorities-in-testng/) that showed you how to create a new annotation `@Priority` that allows you to order your methods. The idea is similar here, except that instead of reordering the methods that we want TestNG to run, we are going to change their number as well. 

For this to work, we introduce two new annotations: `@Verify` which indicates that this method needs to be verified, and `@Verifier`, which annotates the method that performs the verification. Here is an example of how you use them: 

```java
  @Verify
  @Test
  public void t1() {
    // set up and play mock
  }
  @Verify
  @Test
  public void t2() {
    // set up and play mock
  }
  @Verifier
  @Test
  public void verify() {
    this.mock.verify();
  }
```

Now we need to write a method interceptor that will go through all the `@Test` methods, locate the verifier and then return a list of methods where each method annotated with `@Verify` is followed by the invocation of the `@Verify` method. The code is straightforward: 

```java
IMethodInterceptor mi = new IMethodInterceptor() {
  public List<IMethodInstance> intercept(List<IMethodInstance> methods,
      ITestContext context) {
    List<IMethodInstance> result = Lists.newArrayList();
    IMethodInstance verifier = null;
    // Doing a naive approach here: we run through the list of methods
    // twice, once to find the verifier and once more to actually create
    // the result. Obviously, this can be done with just one loop
    for (IMethodInstance m : methods) {
      if (m.getMethod().getMethod().getAnnotation(Verifier.class) != null) {
        verifier = m;
        break;
      }
    }
    // Create the result with each @Verify method followed by a call
    // to the @Verifier method
    for (IMethodInstance m : methods) {
      if (m != verifier) {
        result.add(m);
      }
      if (m.getMethod().getMethod().getAnnotation(Verify.class) != null) {
        result.add(verifier);
      }
    }
    return result;
  }
};
```

Running it produces the following output: 

```text
t1
Verifying
t2
Verifying
```

With this simple interceptor ([full source](http://code.google.com/p/testng/source/browse/trunk/test/src/test/verify/VerifyTest.java)), you can now completely factor out the boiler plate logic of your mocks and focus on their business logic. 

Happy mocking!
