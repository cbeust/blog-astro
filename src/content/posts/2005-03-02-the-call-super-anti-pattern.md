---
title: The "call super" anti-pattern
date: '2005-03-02T10:04:37'
slug: the-call-super-anti-pattern
categories:
- Java
comments:
- id: 3208
  author: Eric M. Burke
  date: '2005-03-02T07:10:31'
  content: I agree with most of what you say here. In particular the annotation approach seems like a great fit here. However you are not "breaking everything" if you forget to call super. In JUnit, setUp() and tearDown() are both empty methods in TestCase so you do not have to call super. In cases where I override setUp() and tearDown() and I anticipate people extending my own test, I often make the methods final then I call yet another method like doSetUp() or doTearDown(), which are empty methods the subclass can override. Not elegant, but it does avoid the issue of people forgetting to call super().
  replies: []
- id: 3209
  author: Kernevez
  date: '2005-03-02T07:14:37'
  content: 'Hi,

    This ''antipattern'' isn''t limited to JUnit, you have to take care of this every time you develop child class Java code.

    You suggestion about the setUpXXX methods don'
  replies: []
- id: 3210
  author: Saint Peter
  date: '2005-03-02T07:28:56'
  content: '--- This ''antipattern'' isn''t limited to JUnit, you have to take care of this every time you develop child class Java code. ---

    No I don''t think so. You have to deal with it only with writing childs to malformed and bad written Java parents. I mean, that''s what inheritance is NOT FOR.

    Inheritance is for inheriting behavior for example. Now if when writing a parent you want to let the child write his own init code that should execute after yours, than Template Method is the perfect fit for it. Force the child to write the afterSetUp() and just call it in the parent at the end of the parent''s setUp method which you don''t have access to, it''s controlling the flow.

    I am not bashing JUnit, it is fine, it served and still serves it''s purpose but defending it''s weaknesses is just not alrright.'
  replies: []
- id: 3211
  author: Dion Almaer
  date: '2005-03-02T08:25:38'
  content: 'A lot of frameworks try to help out and enforce items via:

    - the developer actually overrides onSetup() so the framework makes sure that it does its work.

    I hate super ;)

    Dion'
  replies: []
- id: 3212
  author: Kernevez
  date: '2005-03-02T08:27:00'
  content: '--- Force the child to write the afterSetUp() and just call it in ...

    I agree with you, but it''s already done in JUnit, because there isn''t any code in the TestCase setUp/tearDown method, so you don''t need to call the super method.

    JUnit may define abstract method, but in this case you always have to define empty methods, even if in 90% of times you never need to override this method.'
  replies: []
- id: 3213
  author: dave
  date: '2005-03-02T09:40:05'
  content: IntelliJ IDEA includes a code inspection and automatic fix for setUp() and tearDown() implementations that do not call super.setUp() or super.tearDown().  It's saved my butt any number of times.
  replies: []
- id: 3214
  author: Brian
  date: '2005-03-02T10:29:02'
  content: 'From my perspective it seems like the conversation during the JUnit design process could have gone like this.

    "Let''s stub a pair of methods for setup and teardown so developers can use them but don''t have to implement them if they don''t want them.  They''ll be subclassing TestCase so it''ll work perfectly."

    Then the response was, "OK."  When it should have been, "How will this hold up through a few more levels of inheritance?"

    Possibly, the reason this wasn''t considered is that many people use JUnit tests sort of like a scripting language, so in the begining you don''t really take advantage of inheritance.  When you start using inheritance things start to break down.

    I guess this is a lot of speculation without any answers, but for my $.02, it''s a small problem in an otherwise excellent system.'
  replies: []
- id: 3215
  author: eu
  date: '2005-03-02T15:08:59'
  content: Cedric, haven't you complained about the same thing about a year ago? It seems something seasonal... :-)
  replies: []
- id: 3216
  author: Robert Watkins
  date: '2005-03-02T16:18:06'
  content: It's certainly a problem, but the anti-pattern here is "people who don't use the extension mechanisms built into the framework correctly". See the TB for more. :)
  replies: []
- id: 3217
  author: Michael Mahemoff
  date: '2005-03-02T18:32:15'
  content: 'I can''t get trackback working, so here''s a link to something I wrote about this entry: http://www.softwareas.com/index.php?p=68.

    Summary:

    - Use template method (as someone alluded to above)

    - If you must call super, there are some ways to ease the pain, like asserting it was called in a base class test method.'
  replies: []
- id: 3218
  author: Kirk
  date: '2005-03-03T01:19:33'
  content: Calling super is not an anti-pattern. Not learning how to use a framework is.
  replies: []
- id: 3219
  author: Achim
  date: '2005-03-03T04:55:41'
  content: '--Wouldn''t it be nice if I could have any arbitrary number of setUp() methods and all they need to do is start with the name "setUp"?--

    This introduces more problems. Simplified example:

    public class ATest extends TestCase{

    public void setUpDB(){...}

    }

    public class BTest extends ATest{

    public void setUpDB(){...}

    }

    The programmer possibly did not look at the superclass and the signature of it''s setup method. Accidentially he has chosen the same signature and overrides ATest.setUpDB(). JUnit walks down the inheritance tree on an instance of BTest. It invokes setupDB() for the declared method in ATest. And then setupDB for the declared method in BTest. But what happens is that the code of BTest.setUpDB() is executed twice.

    This may be avoided by using final on every "setUp" method. Similar problem to the "super.setUp()" problem. Perhaps a signature test that permits overriding "setUp*" and "tearDown*" within the testing framework would be the best solution.'
  replies: []
- id: 3220
  author: Vincent Massol
  date: '2005-03-05T08:13:23'
  content: 'Hi Cedric,

    I had already commented on this on one of your other posts on JUnit. The answer is that people who write extension this way are not using JUnit correctly...

    The right way, as encouraged by JUnit, is to write extensions using Decorators and not by inheritance (but I agree that few people realize this - I made the same error when I initially wrote Cactus).

    As a user you would need to tell JUnit you wish to use the decorator and this is done when you define a Test Suite:

    public static Test suite()

    {

    TestSuite suite = new TestSuite(...);

    return MyExtensionDecorator(suite);

    }

    I believe this suite() method is the Java equivalent of the TestNG''s XML config file.'
  replies: []
- id: 3221
  author: Saint Peter
  date: '2005-03-07T07:55:02'
  content: '--The right way, as encouraged by JUnit, is to write extensions using Decorators and not by inheritance (but I agree that few people realize this - I made the same error when I initially wrote Cactus).--

    Well obviously JUnit doesn''t encourage you enough, since almost all devs do that mistake over again. Some say that the power of a framework stays in what it DOESN''T allow you to do. So they might have designed the framework acording to that rule :-)'
  replies: []
- id: 3222
  author: Paul Murray
  date: '2007-01-10T16:57:03'
  content: 'This can be "fixed" like so:

    abstract class BaseFooTest extends junit.TestCase {

    public final setUp() throws Exception {

    // do some Foo setup code here

    setUpFoo();

    }

    /** Override this */

    protected void setUpFoo() throws Exception {}

    }'
  replies: []
---

I was chatting to a coworker recently who was complaining about the way ` setUp` works in JUnit, and more specifically, how fragile the "call super" pattern is.

A lot of frameworks based on JUnit add their own initialization code, and not only do they need to remember to invoke their parent's `setUp` method, you, as a user, need to remember to invoke theirs after you wrote your initialization code:

Third party:

> public class DBUnitTestCase extends TestCase {  
>    public void setUp() {  
>      super.setUp();  
>      // do my own initialization  
>    }

Client code:

> public class DBTestCase extends DBUnitTestCase {  
>    public void setUp() {  
>      super.setUp();  // initialize DBUnit, which will initialize JUnit  
>      // my own initialization  
>    }  
>  }

Of course, you need to remember to apply this pattern with `tearDown()` as well, except...  in the reverse order.

There are a few problems with this approach, but two of them really strike me as potentially very dangerous:

  * If you forget to call `super`, you are breaking everything (and in obscure ways).  Of course, IDE's can help you with that by providing templates for these methods, but there's no standard way of doing this and no enforcement from the JVM.  
 
  * In the chain of command, what happens if a call to `setUp()` fails or throws an exception?  And is the corresponding `tearDown()` method invoked?  Even partially?



These are two very difficult problems, and actually, I don't really have a solution for the latter one.  However, the `super` anti-pattern can be remedied quite easily.

I am actually shocked that JUnit forces you to use this anti-pattern, while it would have been so easy to avoid it **and** be more symmetric in its usage.  Basically, here is what I don't like:

> How come your test methods need to follow a certain naming pattern in order to be picked up by JUnit, but the rule is different for `setUp/tearDown`?

Wouldn't it be nice if I could have any arbitrary number of `setUp()` methods and all they need to do is start with the name `"setUp"`?

Suddenly, all the problems mentioned above disappear:

  * No need to call super.  JUnit walks through all the test classes, consider any method that starts with `"setUp"` as a per-method initialization method, and then moves on to the next test class (and/or parent class).  
 
  * Now I can have several `setUp()` methods (not the most useful thing, but why the silly restriction to one method anyway?).



Basically, instead of reusing and hijacking a fundamental mechanism of Java (inheritance), just give freedom to users and implement your own mechanism.

Of course, an even cleaner way to do this (which you can find in [TestNG](http://beust.com/weblog/testng) :-)) is to go one step further:  relax the naming restriction on your methods and use annotations to tag them.
