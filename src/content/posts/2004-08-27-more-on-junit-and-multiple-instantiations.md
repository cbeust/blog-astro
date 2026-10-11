---
title: More on JUnit and multiple instantiations
date: '2004-08-27T13:46:19'
slug: more-on-junit-and-multiple-instantiations
categories:
- Java
comments:
- id: 2285
  author: Roger Rustin
  date: '2004-08-29T22:05:10'
  content: Since I read  Martin Fowler's article I was waiting to hear your rebuttal. I personally believe that the test chosen was simply to show how Junit would behave while others would misbehave at the cost of omitting other more substantial differences b/w the these testing frameworks.
  replies: []
- id: 2286
  author: Roger Rustin
  date: '2004-08-29T22:30:05'
  content: 'This comment is not necessarily pertinent to the above discussion.

    At work I need to write junit test cases for any code I write. Since it''s a complex project I don''t test the code from GUI. I got a defect by the testing team and now I had to recreate the data before I could test from the GUI.

    I need to run the junit again except that I don''t want any test to be done and no tear down; in simple words : I just want setup to be run.

    It would be nice if there is some way I could tell junit not to run teardown and not to run any of the tests. In this way I won''t have to comment the stuff out. Is there any way to pass some parameters telling junit just to run setup? I haven''t read all the specs of TestNG; does it help in this case?

    thanks.'
  replies: []
- id: 2287
  author: Cedric
  date: '2004-08-29T23:03:12'
  content: 'Hi Roger,

    Yes, I believe TestNG would help you in this case.

    The main problem with JUnit is that both the static information (the logic of your tests) and the dynamic information (which tests to run) are coded in Java.  Whenever you want to change which suites, classes or methods need to run, you need to recompile your code.

    With TestNG, every method can be tagged as belonging to a certain group and it''s only before the invocation that you specify which groups should be run.

    In your particular case, I would tag the configuration methods that sometimes need to be run and sometimes not as part of a group, say "variable-configuration".

    In your normal test run, you include this group but when you don''t want these methods to be run, you exclude it from your run.

    Of course, both @Configuration and @Test methods can belong to this group, so you have all the flexibility you want without every having to recompile anything.

    Does that make sense?

    More details can be found at http://beust.com/weblog/testng but let me know if you have questions.

    --

    Cedric'
  replies: []
- id: 2288
  author: Rob
  date: '2004-08-30T08:07:07'
  content: Cedric you need to remove the javascript reference from `document.comments_form.url.value = getCookie("mtcmthome");' your comment template. It is causing javascript errors.
  replies: []
- id: 2289
  author: Cedric
  date: '2004-08-30T09:29:19'
  content: Rob, can you be more specific?  I don't feel comfortable removing this without knowing what it actually does...
  replies: []
- id: 2290
  author: jolly
  date: '2004-08-31T08:20:11'
  content: 'The following quote from Fowler is especially relevant:

    "(All of this may make you wonder why each test method isn''t in its own class. Indeed the earliest forms of JUnit did do that, using an inner class that subclassed the test case with the fixture. While this was a more obvious design, it made it harder to write the tests. So they went for the more obscure use of the pluggable selector pattern.)"

    If JUnit had made the one-test-per-class stipulation, its semantics would be a lot clearer. Of course, people may then think it would be cumbersome to have thousands of classes in a test suite, and JUnit may not have its current popularity.   But the current state of affairs where test cases are implemented as test methods that are really isolated and are instantiated individually is, as Cedric pointed out, very unnatural to the normal way of OO thinking in Java.

    A class to not a place to "collect" a bunch of related but independent tests!   Although the JUnit folks try to call it a "fixture", most beginners starting out with JUnit think of a class  with testXXX methods more as a logical test.'
  replies: []
- id: 2291
  author: ivan
  date: '2007-10-22T02:48:55'
  content: 'HI,

    Ive arrived here throw the title: "multiple instantiations"

    Im making some test with TestNG and Im checking the possibilities of their parallel calling parameters.

    Ive seen that you can specify the numer of threads for a suite, the number of threads for a method, the  invocationCount for a method.... but I havent found the way to call a number of times to a test, I mean a invocationCount for a test, not for a method.

    Does exist this possibility with TestNG????'
  replies: []
---

In a [recent entry](http://martinfowler.com/bliki/JunitNewInstance.html), Martin Fowler explains the reason behind JUnit reinstantiating your JUnit class before invoking each test method. He concludes by showing the following example: 

```java
[TestFixture]
public class ServerTester
{
private IList list = new ArrayList();
[Test]
public void first() {
list.Add(1);
Assert.AreEqual(1, list.Count);
}
[Test]
public void second() {
Assert.AreEqual(0, list.Count);
}
}
```

and pointing out that this example passes with JUnit but fails with [NUnit](http://www.google.com/url?sa=X&start=1&q=http://www.nunit.org/) and [TestNG](http://beust.com/weblog/testng). 

Here is why. 

Remove mentally the annotations from the code above ([TestFixture], [Test]) and read the code just like if it were standard Java/C# code. And now, predict its output, knowing that first() is invoked first and then second(). 

It seems pretty obvious this code will fail in Java and in C#. 

So why should your test framework behave differently? 

By the way, here is the correct way to write this test with TestNG: 

```java
@Test
public class ServerTester
{
private IList list = null;
@Configuration(beforeTestMethod = true)
public void init() {
list = new ArrayList();
}
public void first() {
list.Add(1);
Assert.AreEqual(1, list.Count);
}
public void second() {
Assert.AreEqual(0, list.Count);
}
}
```

Quick explanation: 

  * The @Test annotation at the class level indicates that all the public methods in this class are test methods, so there is no need to add individual annotations @Test on each method. 
  * The @Configuration annotation indicates that the method init() should be invoked every time before a test method is invoked. 
How would you feel if Java invoked your constructor every time before invoking your methods?
