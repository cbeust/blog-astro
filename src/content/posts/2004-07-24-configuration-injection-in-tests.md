---
title: Configuration injection in tests
date: '2004-07-24T18:10:54'
slug: configuration-injection-in-tests
categories:
- Java
comments:
- id: 1868
  author: ''
  date: '2004-07-23T01:50:06'
  content: Yuck!  Now someone has to look in multiple files to understand what your test does.  The fact that JUnit setUp and test functions take no parameters is a GOOD thing. It forces the programmer to explicitly define a unit's dependencies, which makes it easier for somebody else to understand the test, and thereby understand the class under test. It also makes it hard to test a unit that requires a lot of dependencies and external configuration, which gives valuable feedback about the quality of the design of the class under test.
  replies: []
- id: 1869
  author: Thomas Dudziak
  date: '2004-07-23T03:35:58'
  content: 'It would certainly be useful to have parameterized test methods, but passing string properties to the test is not really it as there is no real benefit over acquiring the values at the beginning of the test.

    IMO it would provide much more value (and is still understandable) if a test framework would support something like:

    public void testSomeDBStuff(DataSource ds) {

    // check something against the database

    ...

    }

    and the framework supplies the datasource from somewhere. The point here is that to understand the test it is not important how and where the datasource is acquired, but only what the test does with it. And IMO there is no need for annotations here, plain IoC usage or similar would probably suffice.'
  replies: []
- id: 1870
  author: Jonathan Ellis
  date: '2004-07-23T05:50:42'
  content: why not just use a variable-length argument list?
  replies: []
- id: 1871
  author: Sumit
  date: '2004-07-23T10:52:04'
  content: Exactly my thought (Jonathan's).
  replies: []
---

Why does JUnit force you to have test() and setUp() methods that don't have any parameters?

Because there is no easy way in Java 1.4 and under to specify the values for these parameters.

As a consequence to this shortcoming, various JUnit add-ons have added the possibility to look up property files in your setUp() method which are then initialized inside your test method (and incidentally, will be initialized over and over again for each invocation of the test method, as I reported in an [earlier JUnit bug report](http://beust.com/weblog/weblog/archives/000082.html)).

A better way to address this problem is to use annotations as a bridge between your Java code and a property file.  I just added support for this in TestNG, and here is how it works (excerpt from the new TestNG documentation).

#### Parameters

Test methods don't have to be parameterless.  You can use an arbitrary number of parameters on each of your test method, and you instruct TestNG to pass you the correct parameters with the _parameters_ method on the @Test annotation.  For example:
    
    
    @Test(parameters = { "first-name" })
    public void testSingleString(String firstName) {
    System.out.println("Invoked testString " + firstName);
    assert "Cedric".equals(firstName);
    }
    

In this code, we specify that the Java parameter "firstName" of your Java method should receive the value of the property called _first-name._   This property is defined in the testng.properties that you used to invoke this test:
    
    
    #testng.properties
    first-name = Cedric
    

#### The same technique can be used for the @Configuration annotations:
    
    
    @Configuration(beforeTestMethod = true,
    parameters = {"datasource", "jdbc-driver")
    public void beforeTest(String ds, String jdbcDriver) {
    m_dataSource = ...;  // look up the value of datasource
    }
    

This time, the two Java parameter _ds_ and _driver_ will receive the value given to the properties _datasource_ and _jdbc-driver_ respectively.  Note that the properties are mapped to the Java parameters in the same order as they are found in the annotation, and TestNG will issue an error if the numbers don't match. 

This system allows for a flexible configuration of the runtime configuration of your tests and allow you to arbitrarily define how granular this configuration will be (configuration method or test method).
