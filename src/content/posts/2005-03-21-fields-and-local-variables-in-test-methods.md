---
title: Fields and local variables in test methods
date: '2005-03-21T08:55:31'
slug: fields-and-local-variables-in-test-methods
categories:
- Java
comments:
- id: 3292
  author: eu
  date: '2005-03-21T09:53:12'
  content: That is a pointless way to put it. Cedric, you know that instance variables in JUnit are used to put a common setup part for all test methods in given class that that would change entire picture. Basically without creating a new instance you cannot guarantee for sure that all these instances are reset to an original state.
  replies: []
- id: 3293
  author: Cedric
  date: '2005-03-21T09:57:49'
  content: 'That''s the point!

    Why is there a "Java version" and a "JUnit version" of fields?

    In JUnit, they are reset between each invocation but not in regular Java (and not in any OO language that I know of).

    I have yet to see JUnit code that doesn''t use statics to maintain some kind of state between invocation, isn''t that a clear indication that such a thing is needed?'
  replies: []
- id: 3294
  author: eu
  date: '2005-03-21T10:17:28'
  content: 'Reset is needed because test case has its own life cycle and that life cycle _has_ to be enforced by framework. E.g. you are not questioning why ejbCreate() method is being called for each instance of given bean in a pool...

    To maintain state (usually it is about external resources or some static heavy data like xml parsing or Spring context initialization) you can  use decorators.

    BTW, it seems that you are forgetting that JUnit is not a tool. It is extendable framework. :-)'
  replies: []
- id: 3295
  author: Patrick Calahan
  date: '2005-03-21T11:54:06'
  content: '"...test case has its own life cycle and that life cycle _has_ to be enforced by framework."

    I guess this really is the rub:  I don''t see why it _has_ to be enforced by the framework.

    I know how to design a stateless class in Java if that''s what I want.   Why is it so critical that the test framework force me to do so?'
  replies: []
- id: 3296
  author: eu
  date: '2005-03-21T12:38:52'
  content: Patrick, it does not force you. It just does it transparently. And tre reson for this is that you can make mistakes. Bottom line is that nobody is going to write tests for tests and this approach allows to detect stupid mistakes earlier. Again, if you don't like this it is up to you to use different testing framework or even write your own one, lice Cedric did...
  replies: []
- id: 3297
  author: Mocky Habeeb
  date: '2005-03-22T08:28:16'
  content: 'Writing a test class that has instance variables but being *always prohibited* from accessing those values across method invocations by the testing framework has always been the most awkward thing for me, and for the JUnit users I know. And for anyone who started using JUnit before fully reading the docs, I''m willing to bet it took you by surprise.

    And then on top of that to be told that the reason it''s like that is because you might make mistakes that lead to inconsistent failures. Well... unit testing isn''t rocket science and if I introduce a bug that causes tests to fail then I just go fix the bug.

    I try to design my classes to have high cohesion so when I write a test why would I want zero-cohesion forced on me. And it baffles me to think that people who write software for complex and intricate domains couldn''t master the use of instance and local variables to manage the lifecycle of their own unit tests.'
  replies: []
- id: 3298
  author: Robert
  date: '2005-03-22T09:25:31'
  content: Refactor JUnit to create a new classloader instance for loading the test class for each test method so that you can't access static variables across test methods either. Developers need guaranteed test independence and all those tests that use static variables to store state rely on arbitrary test execution order and need to be fixed.
  replies: []
- id: 3299
  author: Cedric
  date: '2005-03-22T09:34:12'
  content: Great idea, Robert, this way, JUnit would be truly unusable and everybody would finally look for a better solution :-)
  replies: []
- id: 3300
  author: Patrick Calahan
  date: '2005-03-22T10:15:39'
  content: Mmmm, I don't think Robert is being serious here, right?  It's pretty funny, actually.  :)
  replies: []
- id: 3301
  author: Robert
  date: '2005-03-22T11:11:14'
  content: 'Patrick is correct. I was just trying to illustrate absurdity with the absurd. How many test-independence folks would support true test independendence? My guess would be very few.

    It just seems absurd to me to hold the position, "I can figure out when it is ok to use static variables to preserve state and all is well, but if I had that option with instance variables all would be lost"'
  replies: []
---

Patrick has posted an [interesting and novel way](http://pcal.net/blog/archives/2005/03/a_great_new_ide.html) to look at this "dependent test methods" problem...
