---
title: 'ant, make and tests:  same fight'
date: '2004-09-28T06:58:39'
slug: ant-make-and-tests-same-fight
categories:
- Java
comments:
- id: 2535
  author: Ken Richard
  date: '2004-09-28T08:51:40'
  content: "Here is how to run an individual test case within a test class:\n1. Create a constructor in your test class that takes zero arguments.\n2. Create a second constructor that takes a single string argument and pass it on to the super constructor.\n3. Create a main for each test class as follows:\npublic static void main(String args[]) {\nif (args.length == 0) {\njunit.textui.TestRunner.run(Test_Class.class);\t\t} else {\njunit.textui.TestRunner.run(new Test_Class(args[0]));\n}}\nThen you can \"java com.whatever.Test_Class\" to run all test cases within the class.  Or you can \"java com.whatever.Test_Class testFunction\" to run an individual function."
  replies: []
- id: 2536
  author: Hani Suleiman
  date: '2004-09-28T17:23:11'
  content: 'IDEA allows you to run a specific test method, so that takes care of that!

    It''s depressing though how many people are desperate to define new design principles just to justify the shortcomings of JUnit.'
  replies: []
- id: 2537
  author: Ian
  date: '2004-09-29T00:37:44'
  content: 'Well said Hani. Surely there are only two cases of running tests:

    1. In your IDE when writing code - see Hani''s comment about IDEA''s JUnit support.

    2. As part of your continous integration build - where you will always run all the tests and the JUnit support in Ant is easily up to the task.

    I am failing to see why a new framework is required. Perhaps a small change in developer behaviour will suffice?'
  replies: []
- id: 2538
  author: Cedric
  date: '2004-09-29T09:10:07'
  content: 'The point of TestNG is certainly not to address this particular deficiency of JUnit, it''s just one of the added benefits.  I still think that having to recompile my code to run a different set of tests is a basic flaw, though.  Configuring in Java?  We can do better than that.

    Besides, you would be surprised by the number of Java developers who still don''t use an IDE.'
  replies: []
- id: 2539
  author: ''
  date: '2004-10-15T07:35:28'
  content: You DON'T need to recompile to run a single test method.  That's just the way that YOU write your JUnit tests.  Yes, that's a basic flaw, but it's YOUR flaw, not JUnit's.
  replies: []
- id: 2540
  author: Neeraj Kumar
  date: '2004-12-01T12:03:19'
  content: '<strong>Junit - how to run just one of the methods</strong>

    <p>The comment posted on cedric''s <a href="http://beust.com/weblog/weblog/archives/000189.html" rel="nofollow ugc">weblog</a>&nbsp;I find useful. Using the technique mentioned here one doesn''t have to change the ...</p>'
  replies: []
---

Groboclown and I have had an interesting exchange about suite() on [his](http://jroller.com/page/Groboclown/20040927#junit_s_testsuite) [weblog](http://jroller.com/page/Groboclown/20040928#more_on_junit_testsuite). 

The idea of using JUnit ant tasks to work around the limitations of JUnit is sadly very common, to the point that nobody notices even more that this is a fundamental flaw in JUnit. In this particular example, you can use <batchtest> to invoke explicitly several Test classes (something you can't even do with the basic TestRunner!) and also to use ant's powerful wildcard matching. 

This is useful, but it has two limitations: 

  * It requires ant. In heterogeneous environments that build more than just Java code, ant is not always an option. Besides, I really think that such features should be available at the simple Java level. 
  * Your level of granularity is still the class, not the method. 
This last point is important. I find myself very often needing to run an individual test method, either to track a test that fails or more simply while I am coding the said test. The only way you can achieve this with JUnit is by commenting out all the methods in your class that you want JUnit to ignore (actually, I was renaming them "_test"). And then of course, you need to recompile your test. 

That's a lot of work when all you need is to tell your test framework to run a specific test method. 

Groboclown quotes a book on this topic: 

> In Testing Objet-Oriented Software: Life Cycle Solutions, by Imran Bashir and Amrit L. Goel, they argue that the unit of test has moved from the function (in structured programming) to the class (in object-oriented programming). Using this argument, I'll claim that there's no need to get a lower granularity than at the test class level. 

I disagree. The class level still fails to capture three very important levels of granularity in testing: 

  * Individual methods. 
  * Groups of methods. 
  * Sequences of methods that depend on each other. 
These notions should look very familiar to you: they are at the very core of build tools such as ant or make. 

You declare dependencies between targets and you can group these dependencies together, creating an acyclic graph of clusters representing your run sequence where some processes are run sequentially while others can be run in parallel. 

Tests are no different, and whenever you use a framework that doesn't give you this flexibility, you are making your life unnecessarily hard.
