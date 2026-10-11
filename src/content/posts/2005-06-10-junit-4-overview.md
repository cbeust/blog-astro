---
title: JUnit 4 overview
date: '2005-06-10T14:31:33'
slug: junit-4-overview
categories:
- Java
comments:
- id: 3770
  author: Dion Almaer
  date: '2005-06-10T20:15:24'
  content: 'Good eye in seeing this Ced.

    Would be cool to have the Ruby feature of ''test recent'', which works out tests that have been changed, and even maybe code changes that could affect tests and run them first (to complement the test failures).

    D'
  replies: []
- id: 3771
  author: Thierry Janaudy
  date: '2005-06-11T04:11:42'
  content: Would this announce the end of TestNG?
  replies: []
- id: 3772
  author: Erich Gamma
  date: '2005-06-11T09:02:58'
  content: 'Hi Cederic,

    some replies to your questions/comments:

    "I didn''t notice any new tests..." where did you look? org.junit.tests it is. We didn''t write these tests while you were not looking . If you do some test archeology you will see how we bootstrapped from old style tests to new style ones. We were always consuming our own dog food. These tests are also a good source to find out what is already in JUnit4.

    "There will be a converter (I invite the JUnit team..." nope, we have changed our mind on this item. We rather have good backward compatibility support (actually we also have forward compatibility).

    "...work behind closed doors"

    I do not like asking for feedback when you have no code in your hands. We now have something and we are getting closer to ask a larger audience for feedback.

    "Suites are being deprecated and they are looking for a way to describe collections of tests" we will not deprecate suites, but we want to make it simpler for both the user and junit tool providers to support suites.

    "...I''m not quite sure what is the driving vision behind JUnit 4 (besides TestNG :-))"

    I''m glad that there is TestNG, but there are also other interesting testing framework efforts. In particular there is NUnit. NUnit has introduced using annotations in testing frameworks a while ago. Most of the requests for annotation based tests came from the dual NUnit/JUnit users. So we are listening to the community.'
  replies: []
- id: 3773
  author: stas kubasek
  date: '2005-06-11T10:18:32'
  content: 'Very good points by Erich Gamma. I agree with the strategy to code first, and then get feedback. If you get feedback first, it''s hard to put all of the ideas together.

    Cedric, you make it seem like TestNG is the greatest thing. Let''s be real, JUnit is the standard and it has gotten that way because it is easy to use. Lose that, and things get messy. That''s why I don''t like the idea of creating seperate xml files. That makes things a little bit more complicated than it needs to.

    Good post Cedric, but a little more faith in JUnit would help.'
  replies: []
- id: 3774
  author: Steve Loughran
  date: '2005-06-13T06:45:52'
  content: 'Is java1.4 really over?

    Over in ant-land, we are just debating when to EOL win9x and java1.2 support, and here junit, our universal counterpoint, is embracing annotations so happily that java1.5 is mandatory? I know it can improve things, but that is a brutal one way migration.

    We are going to have some fun getting this all to integrate into  propertly, I can see. Somehow support 3.8.1 on pre-1.5 systems, yet enable junit4 features on newer releases. Hmmm.'
  replies: []
- id: 3778
  author: 'Confluence: 6. Gonzo'
  date: '2005-06-13T07:51:02'
  content: '<strong>JUnit 4 will be interesting</strong>

    See:'
  replies: []
- id: 3775
  author: Thierry Janaudy
  date: '2005-06-13T08:24:52'
  content: Personally, I really do not care if TestNG supports J2SE 1.4- applications. I use it for J2SE 5.0. That
  replies: []
- id: 3776
  author: Damien B
  date: '2005-06-14T09:54:34'
  content: 'Regarding stas kubasek comment, I''ve used JUnit first because it was the standard (that is, it had a book) like I used Struts because they were books. Does it prove something ?

    And now I prefer to use TestNG, not because of the poor advertisement speech, but because it is easier to use, and easier to manage. Now, if the Eclipse plugin could recognize groups declared only on Configuration annotations...'
  replies: []
- id: 3779
  author: 'Confluence: 0. Gonzo'
  date: '2005-06-17T06:54:03'
  content: '<strong>JUnit 4 will be interesting</strong>

    See:'
  replies: []
- id: 3777
  author: abyx
  date: '2007-07-20T05:06:47'
  content: 'Hey,

    After searching for something to convert my work place''s old test cases from junit3 to 4 I''ve listened to your advice and used TestNG''s junit converter.

    The project can be found here: junit-converter.sf.net'
  replies: []
---

It appears that Kent Beck has been working in stealth mode on JUnit 4, and if it wasn't for a small slip in an interview a couple of months ago, nobody would know.  It turns out that there already is some new code checked into their CVS depot and Alexandru and I took a quick look there.

Here is what we found so far:

  * Annotations.  As we observed with [ TestNG](http://beust.com/weblog/testng), annotations let you do away with inheritance of a base class and make more sense than trying to cram test information into method names.  
 
  * The `@Test` annotation has an `expected` attribute (probably similar to `@ExpectedExceptions`, but it's hard to tell at this point)=.  I also note they only allow one class to be expected while TestNG lets you specify more than one).  
 
  * There is a new `@Ignore` annotations, which we decided to specify as an attribute of `@Test` in TestNG (e.g. `@Test(enabled = false)`).  
 
  * TestNG's `timeout` and `invocationCount` also seem to be planned for JUnit.  
 
  * Finer grained configuration access.  JUnit only allowed to ` setUp/tearDown` around test methods, you can now do this at the suite level (TestNG offers even greater flexibility: around classes and around groups).  
 
  * Suites are being deprecated and they are looking for a way to describe collections of tests (quite a surprising decision, but may I suggest a file called...  I don't know, `junit.xml`?).  
 
  * There will be a converter (I invite the JUnit team to start off with ` com.beust.testng.JUnitConverter` and tweak the imports it generates :-)).  
 
  * Run failures first (TestNG generates a `testng-failures.xml` for this).  
 
  * Quoted from the todo file:  "_be able to specify the order of tests (ewwww....)_ ".  Now that is very interesting...  They are just falling short of specifying test dependencies but as much as I find this feature crucial for non-unit testing, I question its use for unit testing.  
 
  * Groups!  Yes, that's right.  A lot of people criticized the need for groups when they were introduced in TestNG a year ago, but we have definitely seen users like this feature and use it a lot.  It's good to see JUnit follow the same path.



For more information, Alexandru posted a [more detailed list](http://themindstorms.blogspot.com/2005/06/junit-40.html) of the various features offered by JUnit 4 with his own comments.

A few comments now...

  * This is a pretty good start, and I am not surprised to see that dependent test methods are not planned for JUnit (this feature probably doesn't belong to a unit-testing framework anyway).  
 
  * I didn't notice any new tests, so they are not using Test-Driven Development...  makes you wonder, uh?  
 
  * There is still no separation of static and dynamic models.  
  
Having test groups is not very useful you can't specify which groups to execute at runtime.  I hope JUnit will provide a less awkward way to invoke tests than putting them in a `suite()` method.  As you probably know by now if you are a regular reader of this blog, I still firmly believe that I shouldn't have to recompile Java code if I want to run a different set of tests, which is the reason behind the existence of the `testng.xml` file in TestNG.



All in all, this is very exciting but I feel disappointed that no email was sent to the JUnit mailing-list nor request for feedback posted on any blog:  the JUnit team seems to have decided to work behind closed doors on this.

The JUnit mailing-list itself has 5800 subscribers (!) and would probably be an invaluable way for them to get feedback.  I'm not quite sure what is the driving vision behind JUnit 4 (besides TestNG :-)), but I certainly hope they will be coming out of stealth mode and discuss it publicly soon.

At any rate, I am quite happy to see that things are finally moving in the testing area!
