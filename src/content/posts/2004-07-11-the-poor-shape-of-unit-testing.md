---
title: The poor shape of Unit Testing
date: '2004-07-11T08:19:00'
slug: the-poor-shape-of-unit-testing
categories:
- Java
comments:
- id: 1760
  author: Jason Carreira
  date: '2004-07-11T10:26:04'
  content: I for one am happy to see some new ideas being explored for unit testing... However, I don't have time to add the stuff missing from TestNG that I need from JUnit and its surrounding tools (tool plugins, nice output, nice report generation, Clover integration, etc)... So, build it, and I will use it, but until then it's just nice ideas.
  replies: []
- id: 1761
  author: Mike Spille
  date: '2004-07-11T10:37:50'
  content: 'I really don''t understand the arguments about problems with multiple frameworks.  Unit testing is not rocket science, and just about any unit testing framework is not going to require any sort of massive investment to learn.  I learned 95% of JUnit in a grand total of 15 minutes, mainly because it is so simplistic.  A comprehensive unit testing framework might require a whole hour to learn :-)

    I can understand worries about a multitude of frameworks if you''re talking something complex - messaging, persistence, web stuff, etc.  It can take weeks, months, even years to master frameworks of this time.  Unit testing just does not fall into that category.  If it takes you weeks or months to learn JUnit something is very, very wrong.

    The implication in many web logs on JUnit I''ve seen is that they have some sort of intellectual investment in JUnit that they don''t want to throw away.  It''s not said, but implied that they spent some time learning it and don''t want to reinvest that time in something new.  I say - how long did it take you to grok JUnit?  For most uses you''re dealing with TestCase, TestSuite, and Assert.  What kind of "investment" was involved in learning these things?

    From a pragmatic perspective, the sucky thing about moving away from JUnit is that of course people are extending concrete JUnit classes like TestCase and TestSuite.  To get away from JUnit you''d have to re-write a ton and a half of unit testing code (particularly if you work for an XP company :-), or come up with a framework that hijacks the junit.framework package name space.   Hmmm, I think I''ll have to see what Cedric''s compatability mode is all about :-)'
  replies: []
- id: 1762
  author: Curt Cox
  date: '2004-07-11T10:43:52'
  content: 'For whatever its worth, here are my problems with JUnit.  I''ve largely developed work-arounds.

    1. Interface-based testing is awkward.

    2. Only fast-fail tests are supported.

    3. The design is brittle, poorly documented, and thus hard to extend.

    How should interface-based testing be handled in TestNG?  A nice feature would be bundled tests for interfaces in the java* namespace that are automatically applied.  In other words:

    - all classes will fail a (supressible) test if they violate the contract for equals() and hashCode()

    - classes that implement Comparable will fail a test if they fail to implement Comparable

    - and likewise for java.io.Serializable, java.util.Map, java.util.List, etc...

    When I say all tests are fast-fail in JUnit, what I mean is that the first failed assertion in a method causes the test to exit.  While this is usually desirable, a more conversational style of tests can sometimes be much easier to read and write.  Such a conversational test doesn''t generate a simple failure, but rather a score.  The score could be either x of y passed or x percent passed.  The important part is that the first failure doesn''t terminate the test.

    As I said, I''ve largely developed work-arounds for doing these in JUnit, but developing tools for conversational tests that play nice with the various JUnit runners was a real challenge.  The exact contract that Eclipse expects of JUnit tests turns out to be different than what either of the bundled runners or the Ant task expect.  Anyone who considers either the JUnit code or interfaces well-documented has a much different concept of well-documented than I do.'
  replies: []
- id: 1766
  author: Furious Purpose
  date: '2004-07-12T11:37:20'
  content: '<strong>JUnit 2 / TestNG / Unit Testing</strong>

    The continued discussion around JUnit and TestNG seems to imply

    that this is an issue that has struck home for a number of people.

    Some are convinced that leaving JUnit behind is throwing the baby

    out with the bathwater, others seem to believe it'
  replies: []
- id: 1767
  author: The Occasional Blogger
  date: '2004-07-12T19:43:49'
  content: '<strong>Re:  The poor shape of unit testing</strong>

    At the risk of sounding like I care more about JUnit than I do I through I had to reply to  :

    Firstly I&#8216;d just like to point out that my name is Glen not Greg. :-)

    There&#8216;s a lot of context here (in the article and in the comments) so s'
  replies: []
- id: 1763
  author: ''
  date: '2004-07-12T22:29:26'
  content: 'I liked your glib one liner about Struts.

    However!  I *DO* in fact, wish there were Servlets and only Servlets.*

    And, as it turns out, I wish they''d never added regex**, and I think the new features being added in 1.5 are an abomination.***

    *JSP and other similar technologies which work off the premise "oh, Java is too hard, lets come up with a ''dumbed down'' version for ''the designers''" are so totally wrong.  What they ignore is that for them to be ''useful'' they''re going to have to come up with something Turing complete, and also similar to Java - unfortunately they will fail in their stated goal, since any Turing Complete language is going to allow for the possibility of really ugly code, and then ''the designers'' are going to have to become developers anyway, and the pre-existing developers are going to get tripped up by the subtle differences, and waste lots of time and get really frustrated.

    **even the guy who wrote the Sun info page on the new regex features couldn''t read his own regex several weeks later when I emailed him a bug fix for it!!!

    ***All sorts of subtle bugs are introduced, anything more than a really basic use of the features leads to the wheels falling off in ways that cannot be debugged (see also: ''reflection'').  As a general rule, blackbox stuff should be behind the scenes, not in the limelight!  Also anyone who doesn''t understand casting is going to have bigger problems than just saving a couple of keystrokes!!'
  replies: []
- id: 1764
  author: Robert Watkins
  date: '2004-07-13T04:53:13'
  content: 'I don''t care too much about multiple test frameworks, either way. I would, however, be pissed off if:

    * I couldn''t run _all_ my tests easily, with the click of one button (or one step in an Ant build, or whatever)

    * In order to use the features of another test framework, I need to ditch my old one.

    There are a few test frameworks out there (of which TestNG is nearly another contender, if you get that bug fixed. ;) that can run JUnit tests in addition to its own tests. Artima TestRunner is an example.

    As far as web frameworks go: if I can use Struts and another web framework side by side, that''s good. But I don''t want to use a web framework which would prevent me using Struts on the same project; that would be bad.

    Maybe we need a new JSR for defining unit test interfaces for test runner providers? :)'
  replies: []
- id: 1765
  author: Anton Tagunov
  date: '2004-07-13T06:09:24'
  content: BTW, what happened to JUnit authors after they issued 3.8.1? Has anybody shot them down?
  replies: []
---

Greg explains [why he likes JUnit](http://freeroller.net/page/gstamp):

> there are two things that make JUnit great: 
> 
>   1. what they left out and
>   2. the fact that it's pretty much THE standard for writing unit tests
> 


I certainly acknowledge point 2 since I provide a JUnit mode in [TestNG](http://beust.com/weblog/testng) (read:  I emulate JUnit's bugs :-)).  But you can't possibly be serious about point 1, Greg, can you?  What is good about JUnit is _what they left out_?!?

Here is what happens when a framework is not only simple but simplistic:  people start fixing its deficiencies on their own and you end up with an explosion of customized tools built on top of it.

Witness the following email, that was posted on the Groovy mailing-list just yesterday where Guillaume Laforge explains what they have added to JUnit to make testing easier:

> Moreover, there are some other convenient assert* methods:  
>    
>  \- assertArrayEquals(Object[] expected, Object[] value)  
>  \- assertLength(int length, char[] array)  
>  \- assertLength(int length, int[] array)  
>  \- assertLength(int length, Object[] array)  
>  \- assertContains(char expected, char[] array)  
>  \- assertContains(int expected, int[] array)  
>  \- assertToString(Object value, String expected)  
>  ... 

(by the way, the Groovy dudes have added some pretty cool JUnit stuff to their shell, you should check it out)

Greg adds:

> I for one am glad not to have to deal with multiple frameworks. 

That's an interesting thought too.  I tend to favor the other approach, though:  encourage people to be creative and come up with all sorts of crazy ideas and frameworks, and let the market pick a winner.  I mean...  are you really saying you wish there was Struts and only Struts?

> Every new project you start on you'd be learning yet another testing framework. 

No, you are mixing up "concepts" and "implementations".  The concepts of unit testing are fairly basic and well-known, and even though TestNG and JUnit offer two radically different approaches to this problem, they implement the same idea and I'm pretty sure that a developer familiar with one will have no problem switching to the other.

At any rate, my goal was to get people to rethink unit testing and question what they consider for granted, so at least, TestNG was successful in that.  Finally, be sure to read [ Mike's recent blog entry](http://www.pyrasun.com/mike/mt/archives/2004/07/10/18.43.16/index.html), where he summarizes the main issues with unit testing quite eloquently.
