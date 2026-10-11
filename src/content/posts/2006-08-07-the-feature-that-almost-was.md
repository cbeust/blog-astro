---
title: The feature that almost was
date: '2006-08-07T08:44:14'
slug: the-feature-that-almost-was
categories:
- Java
comments:
- id: 5855
  author: earl
  date: '2006-08-07T10:04:49'
  content: 'I think you made a good choice.

    My tests are the one place where I break form and add a "throws Exception" clause if any type of exception can occur.  I don''t even bother to list the specific types of exceptions, since they''ll all result in an "error" result anyway.'
  replies: []
- id: 5856
  author: Miles Barr
  date: '2006-08-07T14:59:58'
  content: 'If I''m testing an error case I just do an assert (I use JUnit, I''m not that familiar with TestNG) to make sure the exception happened, e.g.

    try {

    // Something that throws an exception

    fail("Exception not thrown");

    }

    catch (Exception e) {

    // Do nothing

    }

    or

    Exception ex = null;

    try {

    // Something that throws an exception

    }

    catch (Exception e) {

    ex = e;

    }

    assertNotNull(ex);

    I don''t think it''s necessary to add another feature to check an exception is thrown when it''s quite simple to do already.'
  replies: []
- id: 5857
  author: Miles Barr
  date: '2006-08-07T15:00:36'
  content: 'If I''m testing an error case I just do an assert (I use JUnit, I''m not that familiar with TestNG) to make sure the exception happened, e.g.

    try {

    // Something that throws an exception

    fail("Exception not thrown");

    }

    catch (Exception e) {

    // Do nothing

    }

    or

    Exception ex = null;

    try {

    // Something that throws an exception

    }

    catch (Exception e) {

    ex = e;

    }

    assertNotNull(ex);

    I don''t think it''s necessary to add another feature to check an exception is thrown when it''s quite simple to do already.'
  replies: []
- id: 5858
  author: Ruslan Zenin
  date: '2006-08-07T15:17:11'
  content: 'Have you tried this way:

    @Test (checkExceptions=true)

    public void shouldThrow() throws NumberFormatException { ... }

    So by default @Test will have (checkExceptions=false) in case it is not specified...

    So, this way your existing code would still work:

    @Test

    public void verifyFile() throws IOException {

    // test that uses File and can throw IOException

    }

    and new code will work too...

    What do you think?'
  replies: []
- id: 5859
  author: Cedric
  date: '2006-08-07T15:18:56'
  content: 'Hi Ruslan,

    Yes, it would work, but now you need to specify things in two different places, so not really an improvement IMO...'
  replies: []
- id: 5860
  author: Muthu Ramadoss
  date: '2006-08-08T01:05:20'
  content: 'How about an

    @Test-Exception annotation?'
  replies: []
- id: 5861
  author: Keith
  date: '2006-08-08T02:07:18'
  content: 'Cedric,

    I think you made the right decision too. Consider the method

    @Test

    public void shouldThrow() throws AnException, AnotherException { ... }

    Typically if you write a test that will throw an exception it should only pass if it throws the specific exception that you expect. e.g.

    try {

    // Something that throws an exception

    fail("Exception not thrown");

    } catch (AnException e) {

    // Pass

    }

    With the test config above you couldn''t achieve this level of detail...'
  replies: []
- id: 5862
  author: Mike Bosch
  date: '2006-08-08T02:53:33'
  content: You definitely made the right choice as well.  I use the expects exception mechanism a lot and many times my methods declare checked exceptions just so I don't have to handle them in my code.  It keeps my tests much simpler in these scenarios.
  replies: []
- id: 5863
  author: Sony Mathew
  date: '2006-08-08T11:25:42'
  content: I've seen method parameters being annotated individually - can one annotate each exception being declared as well?
  replies: []
- id: 5864
  author: '&#24322;&#22411;&#38050;&#31649;'
  date: '2006-08-09T23:31:29'
  content: '&#24322;&#22411;&#38050;&#31649;

    &#29305;&#24322;&#38050;&#31649;'
  replies: []
- id: 5865
  author: '&#38500;&#23576;&#22120;'
  date: '2006-08-10T22:12:50'
  content: '&#38500;&#23576;&#22120;'
  replies: []
- id: 5866
  author: ''
  date: '2006-08-11T03:13:13'
  content: 'Is it possible to annotate an Exception? So you can do something like:

    @Test

    public void testMethod throws ShouldNotBeThrown, @Expected ShouldBeThrown, ThisShouldAlsoNotBeThrown'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/light-bulb.jpg)

It started as a simple TestNG idea I had while riding my bicycle on my way to playing tennis.

TestNG allows you to specify that a certain test method is expected to throw an exception.  If the test does, then TestNG marks it as a success.  If it fails to throw or throws a different exception than the one expected, then TestNG will record the test as a failure.

The current syntax uses an attribute of the `@Test` annotation:

> @Test(expectedExceptions = NumberFormatException.class)  
>  public void shouldThrow() { ... } 

But now, I was wondering if I couldn't replace this with:

> @Test  
>  public void shouldThrow() throws NumberFormatException { ... } 

The idea is that whenever TestNG encounters a test method that declares a ` throws` clause, it will expect that test method to throw that exception, exactly as if the developer had specified `expectedExceptions`.

I ran the idea by a couple of people who didn't see anything wrong with it, so I went ahead and implemented it. The fix took two minutes and ten lines of code. 

An idea that everybody likes and that takes ten lines of code... sounds like a winner, right? 

Well, it was... until I ran the TestNG regression tests and noticed that a few of them failed. I investigated and found a test like this: 

> @Test  
>  public void verifyFile() throws IOException {  
>   // test that uses File and can throw IOException   
>  } 

Unsurprisingly, the new TestNG expected this method to throw an IOException while the throws clause is just saying that this code **could** throw. Since there is no reason to declare this, I decide that I can get rid of the `throws` clause as follows:

> @Test   
>  public void verifyFile() {  
>    try {  
>      // test that uses File and can throw IOException  
>    }  
>    catch(IOException ex) { ...   
>    }   
>  }

It works, but... is it wise? 

First of all, the regression tests failed. This is always a red flag: if they failed, it means you just introduced a change that could break existing code.

But more importantly, it looks like I now need to handle exceptions in all my future test methods myself. Come to think of it, it's pretty nice to be able to ignore all the possible exceptions that your test code can throw and know that TestNG will notice this and automatically fail the test, regardless of what went wrong.

When I write a test to verify that something works well, that's exactly what I want to focus on: everything must go as planned. If the slightest thing goes wrong, such as an unexpected exception, I want the testing framework to take care of it. 

In the face of this mounting evidence, I decided that the change was not worth it and reverted my code. 

Moral of the story: tests that break are trying to tell you something.  Listen to them.
