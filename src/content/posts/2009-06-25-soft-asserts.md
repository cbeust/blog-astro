---
title: Soft asserts
date: '2009-06-25T09:24:43'
slug: soft-asserts
categories:
- Java
comments:
- id: 7783
  author: Sumit
  date: '2009-06-25T10:52:29'
  content: 'A name like assertTrueButContinue might be more descriptive.

    I also dislike having to manage StringBuilders separately. A chained way  assertTrueButContinue( selenium.isElementPresent("id=txtfiled"), "Couldn''t find txtfiled").assertTrueButContinue(selenium.isElementPresent("id=txtfiled"), "Couldn''t find submit").summarize();  may be more consistent.'
  replies: []
- id: 7784
  author: Sanjar Akhmedov
  date: '2009-06-25T11:25:36'
  content: 'interface ComplexAssert {

    &nbsp; ComplexAssert add(boolean success, String message);

    &nbsp; void requireAll();

    &nbsp; void requireAny();

    }

    ComplexAssert ca = ...;

    ca.add(selenium.isElementPresent("id=txtfiled"), "Couldn''t find txtfiled")

    &nbsp; .add(selenium.isElementPresent("id=txtfiled"), "Couldn''t find submit")

    &nbsp; .requireAll();'
  replies: []
- id: 7785
  author: Lowell
  date: '2009-06-25T11:41:55'
  content: Why not move the creation of the StringBuilder to the setup() method and move its checking to the teardown() method? That is, provided that the assertSoft method is used by more than one test method.
  replies: []
- id: 7786
  author: Tetsuo
  date: '2009-06-25T12:52:54'
  content: 'Why not create some sort of assert utility class, instead of using StringBuilder?

    @Test

    public void f() {

    SoftAssert sa = new SoftAssert();

    sa.assertTrue(selenium.isElementPresent("id=txtfiled"), "Couldn''t find txtfiled ");

    sa.assertTrue(selenium.isElementPresent("id=txtfiled"), "Couldn''t find submit ");

    sa.assertTrue(selenium.isElementPresent("id=txtfiled"), "Couldn''t find drpdwn1 ");

    sa.assertTrue(selenium.isElementPresent("id=txtfiled"), "Couldn''t find radiobtn ");

    sa.assertOk(); // whatever...

    }'
  replies: []
- id: 7787
  author: Sony Mathew
  date: '2009-06-25T13:22:28'
  content: '+1 for Sanjar''s design - same impl as yours but just better design.

    Similar design different names:

    class AssertAccumulator {

    void checkTrue(boolean expr) {...}

    void assertAll() {...}

    }

    Also: instead of accumulating String messages perhaps use the actual assertTrue() in a try/catch and accumulate the AssertionExceptions -checkTrue(expr) would need to do this right away to catch stack/line correctly.'
  replies: []
- id: 7788
  author: Thomas Jung
  date: '2009-06-25T13:29:20'
  content: 'One solution (at least for Junit 4) is to write a runner class that checks the soft assertions. I have no experience with TestNG but I think this should be possible in TestNG.

    @RunWith(SoftAssertRunner.class)

    public class SoftAssertTest {

    &nbsp;&nbsp;@Test

    &nbsp;&nbsp;public void f(SoftAssert sa) {

    &nbsp;&nbsp;&nbsp;&nbsp;sa.assertTrue(selenium.isElementPresent("id=txtfiled"), "Couldn''t find txtfiled ");

    &nbsp;&nbsp;}

    }

    The runner will check the assertion after each test method run.

    Alternatively it could also be implemented with some ThreadLocal magic without an explicit SoftAssert parameter.

    @RunWith(SoftAssertRunner.class)

    public class SoftAssertTest {

    &nbsp;&nbsp;@Test

    &nbsp;&nbsp;public void f() {

    &nbsp;&nbsp;&nbsp;&nbsp;SoftAssert.assertTrue(selenium.isElementPresent("id=txtfiled"), "Couldn''t find txtfiled ");

    &nbsp;&nbsp;}

    }'
  replies: []
- id: 7789
  author: tieTYT
  date: '2009-06-25T13:32:57'
  content: 'My 2 cents: Perhaps an assertAllTrue(boolean... all);

    It goes through every one and on failure reports something like, "Error: Parameter 1 and 2 was false"

    The limitation is there''s no convenient way to add custom error messages for each param you pass in.'
  replies: []
- id: 7790
  author: Brandon
  date: '2009-06-25T13:49:12'
  content: I worked with a proprietary testing system (developed before JUnit or TestNG existed) that had this concept.  What it did was define a set of check* methods that had the same signature as the assert* methods but didn't stop the test if a failure happened.  It also introduces a new assertion called assertChecks() which would stop the test if any checks had previously failed.  Calling assertChecks() was optional, the framework would do it for you at the end of your test.  This was very convenient and often used to provide tests that completely outlined their assertion errors without requiring lots of iterative runs.
  replies: []
- id: 7791
  author: Alex
  date: '2009-06-25T14:29:46'
  content: 'I don''t like the additional plumbing there - creating the StringBuilder at the beginning and calling assertOk() method at the end of the test method itself - those are things that should be handled by the framework.

    What about adding a flag to the @Test annotation?

    @Test (softAsserts = true)

    public void verifyUI () {

    ... assertions ...

    }

    and let the framework handle any setup/teardown work in methods that run just before the method under test.'
  replies: []
- id: 7792
  author: Michael
  date: '2009-06-25T19:28:22'
  content: 'What about using Hamcrest?

    assertThat(selenium, allOf(elementPresent("id=txtfiled"), elementPresent("id=submit"), ...))'
  replies: []
- id: 7793
  author: Wim Deblauwe
  date: '2009-06-25T23:13:54'
  content: Should this not already be possible by defining an aspect? You can create an around advice around each Assert statement that catches the assert exception and keeps it in a list or a StringBuilder. You also create an around advice around the actual test method to print out the list of assertions that have failed.
  replies: []
- id: 7794
  author: Dave Hunt
  date: '2009-06-26T05:14:59'
  content: I agree with Alex, creating the StringBuilder at the beginning and calling assertOk() should be handled by the framework. I'm very keen to see soft assertions in TestNG.
  replies: []
- id: 7795
  author: Dan Fabulich
  date: '2009-06-26T16:29:25'
  content: 'I actually coded up most of this feature a couple of years ago and included it as a patch, but it never landed.  It''s associated with TESTNG-177 (your blogging software isn''t letting me include the URL!)

    Note that the solution provided in the original post is flawed because it''s missing a key piece of functionality: you don''t know the stacktrace of your soft failures.'
  replies: []
- id: 7796
  author: Dan Fabulich
  date: '2009-06-26T16:34:09'
  content: '@Lowell, that would be a big mistake for this feature!  Failures in tearDown() cause the entire rest of the test class to be SKIPPED.  Any "soft" assertion failure would prevent later tests from running.

    What you want is a "verify" method instead, a la JIRA issue TESTNG-145.'
  replies: []
- id: 7797
  author: Rod
  date: '2009-06-27T01:18:12'
  content: 'I agree that this feature would be very usefull.

    If you include it in the framework, it could manage the StringBuffer (no need to declare it and provide to each asserSoft call) by itself. It would be initialized for each runtime test, filled at each asserSoft call and emptied at each assertEmpty call. No need to add any flag to the Test annotation; no artefact to make it work but only 2 new methods: asserSoft and assertEmpty.

    My 2 cents'
  replies: []
- id: 7798
  author: Rafael Naufal
  date: '2009-06-29T13:50:20'
  content: I agree with Alex also, the details of how it should be handled (printing, store in a StrinBuilder, list, etcetera) should be hidden by the framework. Creating an annotation @RunSoft or parametrizing the existing one (@Test) are the best alternatives for me.
  replies: []
- id: 7799
  author: bill k
  date: '2009-06-29T21:40:50'
  content: 'Personally I''d prefer to see the same syntax for the asserts with an annotation.  That way you could write the entire thing using hard asserts, realize you needed them to be soft and then change it with a single @UseSoftAsserts.

    That way you can also reuse the entire assert syntax rather than recreating each assert method with a "Soft" variant.'
  replies: []
- id: 7800
  author: Marvin Froeder
  date: '2009-06-30T09:59:57'
  content: Hamcrest++
  replies: []
- id: 7801
  author: Mike R
  date: '2009-07-30T07:49:11'
  content: 'This would be incredibly useful, and I agree with Alex on the

    "@Test (softAsserts = true)"

    notation. It would be relatively easy to implement, and it would be incredibly useful. A lot of simple iterative tests that might currently require factories to run correctly could be done very simply with soft Asserts.

    For EX: I am currently trying to test each object of an array of doubles against a converted array of doubles to be within a certain amount. It doesn''t really justify the extra work of a factory, but if one double is within .0000001 of the threshold, I don''t really care.

    I''d vote for it being in the @Test tag too, just because you wouldn''t have to rewrite each assert method, and it would be the easiest for people to implement.'
  replies: []
- id: 7802
  author: Dave Hunt
  date: '2009-08-26T03:47:01'
  content: The problem with changing all asserts to soft on a test by test basis is you wouldn't be able to mix hard and soft asserts. A lot of Selenium users do this. For example a title check would be a hard assert but certain page content checks might be soft.
  replies: []
- id: 7803
  author: Aaron Evans
  date: '2009-10-14T10:58:40'
  content: 'Why not use "verify" instead of "assertSoft"?  It is used in the default (junit3) SeleneseTestCase that comes with selenium, and the implementation is virtually identical.

    The only difference being that the verify (soft assert) method wraps an actual assert in a try/catch block.

    Hamcrest assertThat() doesn''t improve on your initial assertTrue(a && b && c) except perhaps slightly in syntax.'
  replies: []
- id: 7804
  author: Dave Hunt
  date: '2009-10-24T07:44:01'
  content: 'I''ve implemented a verify (soft assertion) solution using an afterInvocation listener, based on the patch by Dan Fabiluch. I wrote about it on my blog here: seleniumexamples.com/blog/guide/using-soft-assertions-in-testng/'
  replies: []
- id: 7805
  author: Subi
  date: '2011-08-23T09:32:38'
  content: Hamcrest++
  replies: []
- id: 7806
  author: http://www.geekersmagazine.com/youtube-to-mp3/
  date: '2011-08-23T09:39:23'
  content: I liked your article Cedric. Thank you.
  replies: []
- id: 7807
  author: Nawaz
  date: '2012-01-08T22:47:47'
  content: "Hi ,\n  I am facing a severe problem here.\n  I have four test, test1, test2 , test3 and test4\n  test2 is dependent on test1, test3 is dependent on test2 and test 4 on test3. I am running my test using ANT by adding testNG task in ANT File (build.xml).\nMy Problem If any failure occur in test1 i.e . in Soft Assertion Then Test2, Tes3 and Test4 gets skipped that it they are not executed. I want them to execute.\nMy Requirement is simple I want to execute the dependent methods if soft assertions occurs and does not want to execute dependent methods if failure occurs in hard Assertions.\nPlease help me"
  replies: []
---

A question that has come up a few times already on the TestNG list is how to use asserts that won't abort the entire test method. 

Here is [the latest example](http://groups.google.com/group/testng-users/browse_thread/thread/6f0bbab78616159e): 

```java
@Test
public void verifyUi() {
  selenium.open (/* url */);
  assertTrue(selenium.isElementPresent("id=txtfiled"));
  assertTrue(selenium.isElementPresent("id=submit"));
  assertTrue(selenium.isElementPresent("id=drpdwn1"));
  assertTrue(selenium.isElementPresent("id=radiobtn"));
}
```

The author would like each of these asserts to be run, even if one of them fails. 

A simple solution to this problem is to use boolean tests to gather the state of each test and then have a final assert that will test them all: 

```java
boolean el1 = selenium.isElementPresent("id=txtfiled");
boolean el2 = selenium.isElementPresent("id=submit");
boolean el3 = selenium.isElementPresent("id=drpdwn1");
boolean el3 = selenium.isElementPresent("id=radiobtn");
assertTrue(el1 && el2 && el3 && el4);
```

The downside of this approach is that if the test fails, you won't know exactly which element was not found on your web page, so we need to find a solution that will also provide a meaningful failure message. 

Here is a more flexible way to approach this problem. It introduces a method `assertSoft()` that doesn't throw any exception in the case of failure but that records the message if the test didn't succeed. Error messages are accumulated in this variable, so it can contain more than one failure report. 

Finally, a real `assert` method verifies that the error message is empty and throws an exception if it's not: 

```java
public void assertSoft(boolean success, String message, StringBuilder messages) {
  if (!success) messages.append(message);
}
public void assertEmpty(StringBuilder sb) {
  if (sb.length() > 0) {
    throw new AssertionException(sb.toString());
  }
}
@Test
public void elementShouldBePresent() {
  StringBuilder result = new StringBuilder();
  assertSoft(selenium.isElementPresent("id=txtfiled"), "Couldn't find txtfiled ", result);
  assertSoft(selenium.isElementPresent("id=txtfiled"), "Couldn't find submit ", result);
  assertSoft(selenium.isElementPresent("id=txtfiled"), "Couldn't find drpdwn1 ", result);
  assertSoft(selenium.isElementPresent("id=txtfiled"), "Couldn't find radiobtn ", result);
  assertEmpty(result);
}
```

Can you think of a better way to solve this problem?
