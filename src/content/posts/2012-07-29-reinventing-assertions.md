---
title: Reinventing assertions
date: '2012-07-29T20:16:13'
slug: reinventing-assertions
categories:
- General
comments:
- id: 9517
  author: Oleg
  date: '2012-07-29T21:31:36'
  content: Between Hamcrest and Fest Assertions (https://github.com/alexruiz/fest-assert-2.x/wiki), there is really not much space for assertions on the form of "assertEquals(result, expected)", be it in the form of static or instance methods.
  replies: []
- id: 9518
  author: Moandji Ezana
  date: '2012-07-29T22:00:38'
  content: Would this work only inside TestNG, or be usable outside of it?
  replies: []
- id: 9519
  author: Cedric
  date: '2012-07-29T22:03:35'
  content: 'Moandji: these classes are not tied to TestNG in any way.'
  replies: []
- id: 9520
  author: Henry
  date: '2012-07-30T00:20:52'
  content: Should you be instantiating a SoftAssert rather than a LoggingAssert in the last 'How to use it' example?
  replies: []
- id: 9521
  author: Guillaume Laforge
  date: '2012-07-30T00:31:03'
  content: 'What would be nice to consider also, is the output of failed assertions.

    Have you looked at Groovy''s "power asserts"? (created in the Spock framework initially)

    http://dontmindthelanguage.wordpress.com/2009/12/11/groovy-1-7-power-assert/'
  replies:
  - id: 9532
    author: Cedric
    date: '2012-07-31T03:22:39'
    content: '@Guillaume:

      PowerAsserts are nice. Since all they do is show a nicer error message, I don''t see any reason why this couldn''t be added on top of this new assert implementation, I''ll think about it, but as you know, Java has a lot less visibility into the expression than Groovy does, so I''m not sure we can reach the same result.

      Thanks!'
    replies: []
- id: 9522
  author: David Biesack
  date: '2012-07-30T04:05:33'
  content: 'Since you asked, I prefer the name Assertion over InstanceAssert (and LoggingAssertion). Simpler and more natural feeling to me.

    Does this class make a new instance of IAssert for every assertEquals and other such calls? I.e. assertEquals(Object a, Object b, String message) makes an IAssert instance? It''s not clear but that seems to fall out of the APi.

    I suggest that IAssert extend Runnable and just use run() instead of doAssert() (that''s personal preference, I never liked method name doSomething but prefer to reuse commonly understood interfaces.)'
  replies: []
- id: 9523
  author: Travis Gockel
  date: '2012-07-30T05:58:13'
  content: 'So what does using assertion instances give you over the static version or versus the Java keyword version? The assert keyword has a couple of advantages over both:

    1. Expression is not evaluated at runtime (if you don''t say -ea)

    2. Lazy evaluation of the message (it is only created if the assertion fails)

    Problem #2 is easy to fix by having your methods take formatting strings and arguments and calling the String.format internally. Problem #1 isn''t really solvable in Java right now due to the lack of convenient lazy evaluation; however, you can make sure it isn''t a big deal by providing enough .assert_____ methods.

    As far as making this *better* than the Assert class or assert keyword, I would recommend following the log4j route:

    final InstanceAssert m_assert = AssertFactory.get(MyClass.class);

    This would allow you to enable/disable assertions on a package or class basis, just as people currently do with logging. I''m not sure how *useful* that use case it, but I''m sure you could find a decent amount of people that would like that functionality.'
  replies: []
- id: 9524
  author: Cedric
  date: '2012-07-30T06:24:03'
  content: '@Henry: Oops, you''re right. I just updated the post.'
  replies: []
- id: 9525
  author: Cedric
  date: '2012-07-30T06:24:38'
  content: '@David: Good point, I like Assertion more than InstanceAssert as well, thanks for the suggestion! And yes, each assert creates a new IAssert object, it''s necessary so that subclasses are able to run the assert code themselves (or choose not to run it if that''s what they want to do).'
  replies: []
- id: 9526
  author: Cedric
  date: '2012-07-30T06:29:53'
  content: '@Travis: extensibility is the main advantage over the assert keyword (whose behavior you can''t change). For example, how would you implement soft asserts with the keyword?'
  replies: []
- id: 9527
  author: MarekDec
  date: '2012-07-30T22:51:26'
  content: 'TestNG is my favourite test framework for quite long time now. I have big doubts on this one, though.

    In terms of readability and consiceness, Fest assertions (already mentioned earlier) seem to be a couple of light years in front of your proposal. Also Fest assertion error tend to be more self-explanatory than the ones in your examples.

    Anyhow, I can see a lot space for improvements in your version. I guess the API is still under discussion.

    If so, don''t you think the methods of any Assert (e.g. InstanceAssert) should not repeat the ''assert'' word.

    Don''t you think that:

    assert.true(condition, "test1()");

    sounds just better than,

    m_assert.assertTrue(true, "test1()"); ?

    Then, I guess I''d call IAssert just Assert (following the List vs IList convention in Java) - there may be some clash with the JUnit like Assert - in any case IAssert feels like a wrong name.

    The very last word on the static methods. With Java 5, so many of them are designed (or maybe named) to be imported statically. I guess that was intention of the authors of Guava you use in the example.

    Compare my version:

    private List messages = newArrayList();

    vs yours:

    private List m_messages = Lists.newArrayList();

    The same applies to Assert.assertEquals of course.

    Regards,

    Marek'
  replies:
  - id: 9528
    author: Cedric
    date: '2012-07-30T23:05:16'
    content: '@marekdec:

      true is a reserved keyword, you can''t call a method that name.

      The problem with static is not verbosity (I actually prefer to type Assert.assertTrue() over assertTrue()) but the fact that they make testability much harder, expose global variables to the entire JVM and make multithreading more difficult. I have discussed the problems with static many times over the years, the latest post is http://beust.com/weblog/weblog/2011/03/10/rehabilitating-the-singleton-pattern/'
    replies: []
- id: 9529
  author: MarekDec
  date: '2012-07-30T23:58:43'
  content: '@Cedric,

    what about isTrue() ?'
  replies: []
- id: 9530
  author: Steve Klouvi
  date: '2012-07-31T01:30:04'
  content: 'Hello Cedric,

    I know it sounds picky but some runners consider java.lang.AssertionError as an error not a failure (e.g. Android). Do you intend to add helper methods in InstanceAssert/Assertion to build AssertionError ?

    The end game would be to override those methods to instantiate a AssertionError subclass like AssertionFailedError.

    I realize thinking about porting a library that is not even out yet is not the top priority ;)'
  replies: []
- id: 9531
  author: Cedric
  date: '2012-07-31T03:19:42'
  content: '@MarekDec:

    Both TestNG and JUnit have been using assertTrue() for a decade, I see little point in changing this name at this point...'
  replies: []
- id: 9533
  author: MarekDec
  date: '2012-07-31T23:06:58'
  content: 'Cedric,

    Indeed, so many years of their existence of those functions and probably a huge numbers of coders who are used to them is a very strong reason - too strong to beat I guess :)

    Anyhow, I think there is something more to the change you are proposing than just providing a way to override the default behaviour of the assert* functions.

    So far the Assert class was a pure utility class that served as a namespace for a set of functions - static methods of a non-instantiable class in Java are nothing more than functions grouped within a namespace provided by a kind exploit of a Java  ''class'' construct (with a private constructor or so I guess).

    And along with the change you are describing here, comes something more, namely the ability to bind the assert* family of functions to a possibly stateful context (i.e. an object of a class).

    As ''Assert'' (a verb in the English language) is a good name for a namespace for the assert* family of functions, InstanceAssert feels wrong for a name of a class that is designed to be instantiated.

    I know that assert in the java world was repeated so many times that it lost its original meaning, though I''d  give InstanceAssert a noun-based name - something like Asserter of AssertExecutor. And then, i.e. when you consider the Asserter to be a fully functional java class,  there would a place to rethink the method names as well.

    Of course, if your only aim is to provide a way to override the behavior of the assert* functions then what you propose is perfectly fine.'
  replies: []
- id: 9534
  author: Cedric
  date: '2012-08-01T05:57:43'
  content: '@Marek:

    I changed the name to "Assertion", which somebody suggested to me.'
  replies: []
- id: 9535
  author: Magnus
  date: '2012-08-20T22:31:46'
  content: In what version is the Assertion class available? It will be very useful for us when running tests with Selenium :)
  replies:
  - id: 9536
    author: Cedric
    date: '2012-08-21T00:48:16'
    content: In the version following 6.7.
    replies: []
- id: 9537
  author: Mark
  date: '2012-08-21T11:28:13'
  content: 'Cedric,

    Is there a snapshot repo we can use to test this when it''s available?

    Thanks.'
  replies:
  - id: 9538
    author: Cedric
    date: '2012-08-21T11:29:16'
    content: Not really, the easiest way is to clone the github repo, create the jar file and reference it in your pom.xml with &lt;systemPath&gt;
    replies: []
---

If you have ever written a test in Java, you are undoubtedly familiar with the `Assert` class: 
    
    
      Assert.assertEquals(result, expected);
    

Java 5 introduced the `assert` keyword, but because it wasn't enabled by default, the world of testing has continued to use the `Assert` class. 

I've always been bothered by the fact that the methods on this class are static, which shouldn't come as a surprise since getting rid of statics in my test code base was one of the motivating factors I had for creating TestNG. 

Over the past years, I have received an increasing number of requests to make assertions more flexible in order to support various scenarios: 

  * Logging all the assertions as they are happening, even if they succeed. 
  * Accumulating the results of multiple assertions inside a test method but not failing until the end of the method. 
  * Performing a certain operation whenever an assertion fails (for example, taking a screen shot of the browser, as is often required in Selenium). 

I decided that the time had come to revisit assertions in order to make it more flexible so it can accomodate all these real world scenarios. 

The first step is to create a new assertion class that supports exactly the same methods as `Assert` but without these methods being static. Here is a test that uses this new assertion class: 
    
    
    import org.testng.asserts.Assertion;
    @Test
    public class A {
      private Assertion m_assert = new Assertion();
      public void test1() {
        m_assert.assertTrue(true, "test1()");
      }
    }

On top of having all its assertion methods being instance methods and not static ones, the class `Assertion` defines several life cycle methods that subclasses can override. Here is the list as it stands today: 

  * `onBeforeAssert()`
  * `executeAssert()`
  * `onAssertSuccess()`
  * `onAssertFailure()`
  * `onAfterAssert()` 
I'm not going to go into details right now, these names should be self-explanatory. All these methods receive an instance of `IAssert` in parameter which captures the assert that's about to be run: 
    
    
    public interface IAssert {
      public String getMessage();
      public void doAssert();
    }
    

For example, here is what a class that logs each assert would look like: 
    
    
    public class LoggingAssert extends Assertion {
      private List<String> m_messages = Lists.newArrayList();
      @Override
      public void onBeforeAssert(IAssert a) {
        m_messages.add("Test:" + a.getMessage());
      }
      public List<String> getMessages() {
        return m_messages;
      }
    }
    

Here's how to use this class in your test: 
    
    
    @Test
    public class A {
      private LoggingAssert m_assert = new LoggingAssert();
      public void test1() {
        m_assert.assertTrue(true, "test1()");
      }
      public void test2() {
        m_assert.assertTrue(true, "test2()");
      }
      @AfterClass
      public void ac() {
        System.out.println("Tests run in this class:" + m_assert.getMessages());
      }
    }
    

Now let's take a look at the implementation of a "soft assert" class: we want each assert to just run but not throw an exception if it fails. Instead, we just want to record it and once we've reached the end of the class (or the suite), assert the whole result. 

Here a simple implementation of such a class. The idea is simply to override the `executeAssert()` and if an exception occurs, catch it, store it and carry on: 
    
    
    public class SoftAssert extends Assertion {
      private Map<AssertionError, IAssert> m_errors = Maps.newHashMap();
      @Override
      public void executeAssert(IAssert a) {
        try {
          a.doAssert();
        } catch(AssertionError ex) {
          m_errors.put(ex, a);
        }
      }
      public void assertAll() {
        if (! m_errors.isEmpty()) {
          StringBuilder sb =
          		new StringBuilder("The following asserts failed:\n");
          boolean first = true;
          for (Map.Entry<AssertionError, IAssert> ae : m_errors.entrySet()) {
            if (first) {
              first = false;
            } else {
              sb.append(", ");
            }
            sb.append(ae.getValue().getMessage());
          }
          throw new AssertionError(sb.toString());
        }
      }
    }
    

How to use it: 
    
    
    @Test
    public class A {
      private SoftAssert m_assert = new SoftAssert();
      public void multiple() {
        m_assert.assertTrue(true, "Success 1");
        m_assert.assertTrue(true, "Success 2");
        m_assert.assertTrue(false, "Failure 1");
        m_assert.assertTrue(true, "Success 3");
        m_assert.assertTrue(false, "Failure 2");
        m_assert.assertAll();
      }
    }
    

The result: 
    
    
    FAILED: multiple
    java.lang.AssertionError: The following asserts failed:
    Failure 2, Failure 1
    	at org.testng.SoftAssert.assertAll(SoftAssert.java:32)
    

On top of the default new assertion classes that TestNG will ship with, I expect the following techniques to become fairly common: 

  * Using different assertion instance fields to mix and match the type of assertions depending on which one you need 
  * Extending the assertion classes to add new methods or override specific ones. 

Of course, the older (static) `Assert` class will continue to work in TestNG, but starting with the next TestNG version, consider using `Assertion` in your test code to gain some additional flexibility. And as always, feel free to send me your feedback, especially now that this implementation hasn't officially shipped yet.
