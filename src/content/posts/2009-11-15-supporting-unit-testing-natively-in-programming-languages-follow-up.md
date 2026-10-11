---
title: 'Supporting unit testing natively in programming languages: follow-up'
date: '2009-11-15T13:33:27'
slug: supporting-unit-testing-natively-in-programming-languages-follow-up
categories:
- General
comments:
- id: 7952
  author: Sakuraba
  date: '2009-11-16T00:17:31'
  content: 'Have a look at Noop:

    code.google.com/p/noop/wiki/ProposalForTestingApi

    They have a unittest keyword like you propose ;)'
  replies: []
- id: 7953
  author: Adrian
  date: '2009-11-16T02:46:50'
  content: 'Language need unit testing support, yes yes yes!

    And if we are going to make unit testing a first-class citizen of language design, there is no reason why tests must be structured in classes and methods. IMHO tests have a fundamentally different structure than classes and objects. See the Noop link by Sakuraba above, or also how tests are structures in RSpec. Also tools such as Lint should treat test code different! What is a code smell in production might be great test code and vice versa. See the work of Stefan Reichhart from our lab ("Rule-based Assessment of Test Quality", TOOLS 2007) for a test-lint for Smalltalk.'
  replies: []
- id: 7954
  author: Daniel Serodio
  date: '2009-11-17T05:32:51'
  content: 'Sakuraba, since Cedric works at Google, I think the reason for these posts is exactly a justification for the noop language :-)

    I''d rather see they invest their energy in Scala thou.'
  replies: []
- id: 7955
  author: Dan Fabulich
  date: '2009-11-17T08:54:46'
  content: 'The reason not everybody uses the same build tool that everybody''s build needs are slightly different, so everybody hates everybody else''s build system.

    I''m afraid that if you got what you wanted, some language designer would bake an entire build system into the language.  The result would be something that everybody hates, but hey, at least it''s standard!

    This could be way worse than baking an MVC framework or logging framework into the language, IMO.'
  replies: []
- id: 7956
  author: Rafael Naufal
  date: '2009-11-17T17:34:46'
  content: 'Another possibility could be add an annotation on the declaration of the class with the test class name:

    @TestClass(SumTest.class)

    class Sum

    {

    int add(int x, int y) {

    return x + y;

    }

    }

    This way test code isn''t so mixed with production code and it gives a chance to initialize the objects properly and writing test methods with boundary conditions (testing exceptions, specific inputs) in another class.'
  replies: []
- id: 7957
  author: Jamin
  date: '2009-11-20T07:59:46'
  content: 'Hi Cedric

    Let me start by saying thank you for all your articles I have come across directly and indirectly on the web. I am a java/selenium/testng/eclipse newbie. I need a better reporting tool for my automation tests. I have decided to use reportng but i have no clue how to go ahead it with. Could you help me out?

    thanks Jamin'
  replies: []
- id: 7958
  author: Jussi Santti
  date: '2009-12-03T01:40:35'
  content: 'In Design by Contract, if one has difficulty in writing the full semantics:

    class SUM

    feature

    add(x,y:INTEGER):INTEGER do Result = x+y end

    ensure Result = x+y

    end

    One can replace the contract

    ensure Result = x+y

    with some unit tests only:

    ensure x=3 and y=4 implies Result=7

    ensure x=-2 and y=0 implies Result=-2

    Furthermore Eiffel''s language support opens the additional choice of putting the contract (or unit tests) into abstract class declaration.'
  replies: []
---

There were quite a few interesting comments on [my previous entry](http://beust.com/weblog/weblog/archives/000522.html) about supporting unit tests directly inside a language, so I thought I'd address some of these observations. 

Michael suggests to keep the unit tests near the method they test: 

```java
@Tests({
@Test(3, 4: 7),
@Test(-2, 0: -2)
})
public int add(int x, int y) { return x + y; }
```

My main hesitation about this approach is that the production code is now littered with test code, and even if you use an IDE that conveniently lets you fold these tests away, it's still painful to read such code in non-IDE environments, such as web browsing, code reviews, terminal diff, etc... This is one of the reasons why I suggested to have the unit test section in one place. 

There is also the problem that unit tests usually require more than just "parameters in, result out": very often, you will need to initialize your objects or perform some arbitrary code to set things up. 

Dan is worried about pulling test dependencies in your production code: 

> What about test-only dependencies? Your production code would depend on mock libraries, Hamcrest expressions, etc. 

Yes, this is used to be my strongest argument when I was against the idea of mixing unit tests with code, but this objection disappears if you actually embed this functionality in the language. I argued in my post for a new keyword called `unittest` that would define a brand new section, so I don't see why this section couldn't include its own imports as well: 

```java
unittest {
import org.testng.Assert;
public void positiveNumbers() {
Sum sum = new Sum();
Assert.assertTrue(sum.add(3,4) == 7);
}
}
```

This code will only be compiled if the compiler is invoked with the option `-unittest`, and otherwise, it will be simply ignored. 

Dan adds: 

> the main gotcha is standardizing on how to run unit tests 

Exactly, and that's my point: this aspect is very underestimated and it's the reason why so much code is written every day without accompanying unit tests. If you move this functionality inside the language, you create a universal framework across all companies and all projects that make testing a very natural part of the coding process in that particular language. 

When you receive a piece of code for review, you now expect the accompanying unit test to be part of that file. 

A few people chimed in to advocate Maven, but regardless of my feelings toward this tool, Maven doesn't solve the problem I'm trying to address here since it's yet another tool that's external to the language, which means that it won't always be available wherever that language is used. 

A reader called Mikew is using something similar to my suggestion in Java at his workplace. He and his teammates are using inner classes to put test code inside their production code, and it seems to be working for them, despite the downsides of such an approach. As I pointed out, a lot of these downsides would disappear if such a functionality was supported natively. 

Python's Doctest doesn't seem very scalable to me, especially because it makes you write code in comments and that the scope of the tests that you can write is extremely limited, but I agree with the underlying intention. 

Phil Goodwin brought Eiffel into this discussion: 

> This was an assertion framework, and so did not quite support the whole testing story. Nevertheless, it provides a substantial foundation for embedding test code into source. 

Eiffel's support for testing, and the whole idea of Design by Contract in general, has always struck me as a toy that only works in trivial cases. Eiffel supports preconditions, postconditions and invariants, but in my experience, these concepts only work for foundation and library classes (e.g. containers) but scale very poorly in the real world (good luck coming up with an invariant for a class that's manipulating database records while managing transactions). 

I wrote a lot of code in Eiffel a long time ago and I distinctly remember that writing either of these contracts became plain impossible very quickly. 

Having said that, Eiffel is the only language (besides D) that I can think of that supports arbitrary blocks of code to be included in classes while having a special status attached to them ("this is test code"). 

Overall, the concept of something similar to a `unittest` section in a programming language continues to be very appealing to me and I am betting that if a language supporting this feature emerges in the next few years, the overall quality of code written in that language will be significantly higher than what we are used to.
