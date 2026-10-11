---
title: Should programming languages support unit testing natively?
date: '2009-11-07T13:41:10'
slug: should-programming-languages-support-unit-testing-natively
categories:
- Java
comments:
- id: 7934
  author: Michael
  date: '2009-11-07T14:31:10'
  content: 'Interesting.

    If you''re going to go down that route, why not keep test cases with the methods? For example, something like an (extended) annotation:

    @Tests({

    @Test(3, 4: 7),

    @Test(-2, 0: -2)

    })

    public int add(int x, int y) { return x + y; }

    Which can then be included in generated docs. Creating a new object of the class under test seems like it should really be implicit, as long as there''s a no-args constructor.

    This could almost be done now, but it would be quite a bit more verbose and not worth it:

    @Tests({

    @Test({@Param(3), @Param(4), @Return(7)}),

    @Test({@Param(-2), @Param(0), @Return(-2)}),

    })

    public int add(int x, int y) { return x + y; }'
  replies: []
- id: 7935
  author: Dan Fabulich
  date: '2009-11-07T14:39:16'
  content: 'Nah, your/Google''s position is right.  What about test-only dependencies?  Your production code would depend on mock libraries, Hamcrest expressions, etc.

    Look at this another way.  In Java, you know where to put your API documentation: you put it in JavaDoc.  It''s not really part of the language (they''re comments; the compiler strips them out) but it''s a standard, so everybody does it.

    That''s all we need for unit tests, IMO.

    The unit test frameworks are already pretty well standardized in all major languages; the main gotcha is standardizing on how to run unit tests (or, indeed, anything at all, even JavaDoc!) as part of a CI system.

    Everybody hates everybody else''s build engine, so everybody writes their own; THAT''s what you always have to look it up in the company wiki.

    If only everybody used Maven.  And if only Maven were perfect. ;-)'
  replies: []
- id: 7936
  author: Martin Ellis
  date: '2009-11-07T14:43:54'
  content: '"I typically find myself having to change or update my environment, invoke different tools, pull out various wiki/HTML pages to brush up on what''s required to integrate my tests to the big picture."

    I find this is one of the places where Maven really helps.

    I can''t remember the attributes I need to configure the Ant junit or testng tasks off the top of my head.  I''d need to do a bit of rummaging around to find out how to set up an Ant build to run the tests.

    But I know that with Maven, I just need to put the tests in the ''right'' place, and they''ll ''just run'' when doing a build.  And that convention is something that doesn''t vary much between Maven-built projects, which can help when switching jobs/projects.

    Yes, it''s a bit more complicated than that if it''s not just unit testing, and you need to set up some environment.  But I think your point is mostly about ''testing in the small'' anyway(?)

    That said, I think I see your point.  Not everyone uses Maven, after all - see Google, for example. :)  And using TestNG means we have to go rummaging around for the update site URL when setting up a dev environment.

    I would vote against native support.  Suppose JUnit3 had been included with Java...  how much more reluctant would people be to use TestNG?  That''d be a pretty sad situation.'
  replies: []
- id: 7937
  author: Kartik Krishnanand
  date: '2009-11-07T15:45:31'
  content: 'As an avid user of TestNG, I would like to add my two cents to this discussion. Is the example that you provided with D follow the OO paradigm? It looks like a static block in a class with a label. Not a big fan of the static blocks, I would like to see an inner test class instead. It would look like

    public class Sum {

    int add(int x, int y) { return x+y; }

    public class SumTest {

    public void addPositiveNumbers() {

    Assert.assertEquals(7, add(4, 3));

    }

    }

    }'
  replies: []
- id: 7938
  author: R usty Wright
  date: '2009-11-07T17:00:19'
  content: 'Another vote here for Maven.

    With that out of the way, this topic reminds me of an argument I was making with a coworker who''s a big fan of Rails which is that you can think of Java''s compile time type checking as a form of unit tests; micro unit tests as it were.  (I''ve always suspected that a lot of unit tests written for Rails are to catch type errors and syntax errors; run time type checking languages are making humans do what the computer/compiler should be doing for them.)

    Anyhow, what I''m thinking is that in a general sense, what is wanted is some way to embed more assertions in the language, ones that can be checked during compilation.  When you have to run code to execute your tests then it starts to get messy.'
  replies: []
- id: 7939
  author: Mikew
  date: '2009-11-07T17:46:36'
  content: '2 more cents.

    Working at a large company with folks on the development team spanning 12 time zones is a pain. *Anything* to tedious just doesn''t get done, and there isn''t enough blood left in my body to attempt to compel folks to comply. At the same time dates must be met. Of course I suppose we could fire the whole development team, but those pesky dates and customer commitments are still looming. So we decided to throw out what the community at large says about unit testing and this is what we did. We decided to lower the barrier to unit testing as low as possible.

    We had been using junit historically so we just kept on using it.

    We put the test code *in* the regular code file. (I know heresy...) However there are some advantages to this madness. There is no searching around to fuss with separate files or configuration settings. One can test private methods. (I know more heresy...) Lastly the unit test is some of the best documentation for developers doing maintenance and fixes later. We simply create an inner class named TestFixture. It is the same for every class. We created a custom annotation @WasatchTest(skiptest=false) this annotation goes on the class definition.

    We then created a small test wrapper that sorts through all of the classes looking for the WasatchTest annotation if !skiptest then add the test to the suite. At the end run the test suite. (This works because we know the name of the annotation and the name of the class is always TestFixture.) This wrapper class is perhaps 100 lines of code or something and is the only custom thing we did. We didn''t modify the testing framework in any way. A developer in India doesn''t even need to know or understand how the test gets executed as part of build.

    This system showed a couple of other benefits developers can easily run tests they are working on without the need of any part of the build environment. The build environment can run all of the tests without the need to know anything about what any particular developer is working on at the moment. The two parties are completely oblivious of one another. Our one custom class is short and only a couple of people ever even need to look at it or fiddle with. The barrier to writing tests is as low as we have so far figured out how to make it. Many more developers are now writing tests.

    The build environment simply removes the classes named $TestFixture.class for production releases. No special code needed here just a filter in our Ant script.

    So we didn''t actually build it into the language but instead took advantage of the language to make it appear a little like it was built in. The developer needs to add the annotation and write the test that''s it.'
  replies: []
- id: 7940
  author: Barnaby
  date: '2009-11-07T19:21:37'
  content: 'Python already sort of handles unit tests as part of the language in what are called "doctests". You can put unit tests right in the comments of your code above the method by typing shell commands and listing their expected results.

    Pretty nifty.'
  replies: []
- id: 7941
  author: David Vydra
  date: '2009-11-07T23:08:21'
  content: You have a good point. I vaguely remember that Google Collections were initially open sourced without unit tests due to internal dependencies.
  replies: []
- id: 7942
  author: Paul King
  date: '2009-11-08T00:41:58'
  content: 'That''s one of the things I like about Groovy: its built-in testing (via assert calls) and mocking. It doesn''t have the unittest keyword as per D but it supports Java annotations, so JUnit and TestNG are only a @Grab call away - without requiring users to have to worry about plugins or dependency acquisition.'
  replies: []
- id: 7943
  author: Jeff
  date: '2009-11-08T01:36:39'
  content: Ditto about Python's doctest feature. You can also use the nose module to help you find your tests, whereever you've placed them.
  replies: []
- id: 7944
  author: Jeff
  date: '2009-11-08T01:37:11'
  content: Ditto about Python's doctest feature. You can also use the nose module to help you find your tests, whereever you've placed them.
  replies: []
- id: 7945
  author: ''
  date: '2009-11-08T02:01:33'
  content: 'Unit test included in the language is a really nice feature. It allows basic testing without the burden of choosing/learning/deploying a test framework.

    If it is kept simple (as in D), there is no risk of getting it wrong. As Cedric said, this is for unit test, not functional ones.

    I don''t have really a preference between Cedric and D implementation. Cedric implementation has more features but it is more complex. Maybe such functionnality should be managed by language users, instead of language developpers.'
  replies: []
- id: 7946
  author: Michael Mosmann
  date: '2009-11-08T02:15:30'
  content: 'I do not think, that language support will help much.. i think we should work more in a direction, where unit test are a standard.. so it''s easy to switch to the bunch of test for a method/class and it''s clear and easy, how you can write your own.

    but as long as many people reinvent the wheel and stick with some quirky tools there is no hope.. :)

    .. and i don''t like testcode mixed with real code.. it''s hard to read.'
  replies: []
- id: 7947
  author: Phil Goodwin
  date: '2009-11-08T08:47:45'
  content: 'We should not forget Eiffel and Design by Contract. This was an assertion framework, and so did not quite support the whole testing story. Nevertheless, it provides a substantial foundation for embedding test code into source.

    Eiffel starts with command/query separation, which provides non-mutating "query" methods that can safely be used within assertions. There are three types of assertions: invariants, which must be true after initialization and after every public method call; preconditions, which apply to an individual method and its parameters, must be true when the method is called; and postconditions, which must be true after a particular method is called. These assertions were inherited. Subclasses were allowed to remove preconditions, and to add invariants and postconditions, thus strengthening the runtime type system.

    I think that if we want to move toward embedding tests directly into our source code we would benefit significantly by borrowing heavily from these ideas.'
  replies: []
- id: 7948
  author: afsina
  date: '2009-11-09T00:20:04'
  content: Fortress ( www.projectfortress.sun.com/Projects/Community ) has both in language testing and design by contract facilities ( Requires, ensures ..)
  replies: []
- id: 7949
  author: Alex
  date: '2009-11-09T11:23:37'
  content: ''
  replies: []
- id: 7950
  author: Bill K
  date: '2009-11-10T14:21:48'
  content: 'I would really enjoy a slight widening of this scope--I''ve wanted "Compile targets" for a while.  In Java''s terms, consider something as simple as an @test annotation on a second class in the same file.

    You could tell it to compile with or without the @test methods.  If they were compiled in, it would be trivial to have a system that new to run them all.

    The other part I''d really like about this is being able to share the same class data with different methods between VMs.  For instance, a client might have a ".paint()" method where the server would not, but could have a ".save()" method.

    Both methods would be visible in the class definition (for an easy overall understanding of the class functionality), but the two targets would have different dependencies.  The server one would require database connectors but not awt support, the client would be the opposite.

    I''ve tried to do this using annotations but can''t figure it out (perhaps if I tweaked the class loader, but that''s not really practical).

    It just seems to make sense to have all the functionality in one place--testing, saving, GUI, whatever.  This is what classes are for.'
  replies: []
- id: 7951
  author: Lee
  date: '2009-12-15T08:16:36'
  content: 'One problem I can see with your idea where a unittest class-like thingy has methods that are tests. Maybe its just the way I do things sometimes but I write a generic test method and then the real test methods call the generic one and pass it some useful values. The example in the above message is similar;

    class Add {

    int add(int one, int theOther)

    { return one + theOther; }

    }

    testPlus() { doTest(5,5,10); }

    testMinus() { doTest(-5,-5,-10); }

    doTest(int one, int theOther, int expected)

    { assert(expected, add(one, theOther);}

    Though its not as interesting when the method only adds things and there are only plus and minus, if your test sets up some sort of mocking and you want to test multiple combinations of inputs easily, it works.

    The problem is that there isn''t any place to put the method that isn''t a test, but does testing. It''s easy to solve with some sort of annotation, though.'
  replies: []
---

I used to be strongly opposed to this idea but I started changing my mind recently. Here is what happened. 

### The bad

Production and test code can be integrated at various levels: 

  1. Supported by the language. 
  2. Not supported by the language but mixing production and test code in the same classes. 
  3. Production and test code live in different classes but in the same directory. 
  4. Production and test code live in different directories. 
I have always thought that options 2) and 3) are a bad idea because they make it hard to read and review the code, they contribute to the creation of huge classes and they negatively impact your build infrastructure (which must now be able to strip out the test code when you want to create a shippable binary). We (Google) feel strongly about these points, so we are strictly enforcing option 4) (although we often put our tests in the same package as the production code). 

I think this practice is the most common out there and it works very well. 

With that in mind, wouldn't a language that natively supports unit testing be the worst case scenario? 

### The epiphany

Not long ago, I reflected on my testing habits for the past ten years, and I made a couple of interesting observations: 

  * I feel the need to write tests for the code that I write very often. 
  * Just as often, that need is thwarted by environmental constraints, so I end up not writing these tests. 
My experience is with large software, large teams and huge code bases. When you work in this kind of environment, it's very common for the company to have developed its own testing infrastructure. Sure, the code remains code, but how you run it and how you deploy it will vary greatly from company to company (and sometimes even from project to project). 

Typically, I code a feature, iterate over it a few times and I reach a point when I'm pretty happy with its shape: it's looking decent, it gets the job done and while there is obviously more work to be done on it, it's mature enough that writing tests for it at this point will not be a waste. 

The code to write these tests is usually pretty obvious, so I can form it in my head pretty quickly and materialize it in code not long after that. Now I need to find a way to actually run this test and make it part of our bigger testing infrastructure, and this is where things usually get ugly. I typically find myself having to change or update my environment, invoke different tools, pull out various wiki/HTML pages to brush up on what's required to integrate my tests to the big picture. 

The worst part is that I will probably have to relearn everything from scratch when I switch to the next project or the next job. Again, I will write the test (which is pretty easy since it's the same language I used to write the production code) and I will find myself having to learn a brand new environment to run that test. 

The environmental hurdle is not easy to address, but if the language that I am coding in supported unit tests natively, I would probably be much more tempted to write these tests since 1) there is now an obvious location where they should go and 2) it's very likely that the test infrastructure in place knows how to run these tests that I will be writing. 

The main gain here is that the developer and the testing infrastructure now share a common knowledge: the developer knows how to write tests and the infrastructure knows how to access these tests. And since this mechanism is part of the language, it will remain the same regardless of the project or the company. 

### How do we do it?

So what would a language that natively supports unit tests look like? 

I know [first hand](http://testng.org) that writing a test framework is not easy, so it's important to make sure that the test feature remains reasonably scoped and that it doesn't impact the language complexity too much. You will notice that throughout this entire article, I make a point of saying "unit test" and not just "test". As much as TestNG is focused on enabling the entire spectrum of testing, I think it's important for a language to only support unit testing, or more precisely, to only make it easy to test the compilation unit that the test is found in. 

Interestingly, very few modern languages support unit testing, and the only one that I found among the "recent" ones is [D](http://www.digitalmars.com/d/2.0/class.html#unittest) (I'm sure commenters will be happy to point me to more languages). 

D's approach is pretty minimal: you can declare a `unittest` section in your class. This keyword acts as a method and you simply write your tests inside: 

```java
//
// D
//
class Sum
{
int add(int x, int y) { return x + y; }
unittest
{
Sum sum = new Sum;
assert(sum.add(3,4) == 7);
assert(sum.add(-2,0) == -2);
}
}
```

This is as barebones as it can get. The advantage is that the impact on the language itself is minimal, but I'm wondering if I might want to be able to write different unit test methods instead of having just one that contains all my tests. And if we're going down that path, why not make the `unittest` keyword be the equivalent of a class instead of just a method? 

```java
//
// Pseudo-Java
//
public class Sum {
public int add(int x, int y) { return x + y; }
}
unittest {
public void positiveNumbers() {
Sum sum = new Sum();
assert(sum.add(3,4) == 7);
}
public void negativeNumbers() {
Sum sum = new Sum();
assert(sum.add(-2,0) == -2);
}
}
```

As I said earlier, I think it's very important for this feature to remain as simple as possible, so what features from sophisticated testing frameworks should we remove and which ones should we keep? 

If we stick with D's approach, there is probably little we can add, but if we go toward a class keyword, then there are probably two features that I think would be useful: 

  * Method setUp/tearDown (which would already be useful in the example above, where we create a new `Sum` object in both test methods. 
  * Exception testing. 
At this point, I'm already feeling a bit uncomfortable with the extra complexity, so maybe D's simplistic approach is where we should draw the line. 

What do you think about native support for unit testing in programming languages? And what features would you like to see?
