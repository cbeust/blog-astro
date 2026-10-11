---
title: Testing private methods?  You bet.
date: '2005-07-18T07:01:03'
slug: testing-private-methods-you-bet
categories:
- Java
comments:
- id: 3840
  author: Andrew Fung
  date: '2005-07-18T07:43:39'
  content: 'Doesn''t testing a private method increase the maintenance burden when refactoring implementation details?  Would we be obtaining increased failure data at the potential cost of extra code to change when refactoring?

    In the examples you give, it seems to me that there is no convenient way to test the results from the public level.  Certainly, it''s a lot of work to have an automated test that verifies the GUI renders properly after the fact.  In such a case, testing a slightly deeper method that is more "testable", yet still has high correlation to the observable results, makes sense.  Or as you say, if it''s really important that you know it works, test it.

    However, rather than make a blanket statement that we should test all private methods, I would observe that there are cases where it''s necessary.

    Personally, I would only conservatively test private methods, as practicing the idea of relentless/ruthless refactoring would incur the costs of redoing private tests quite frequently (at least initially, until the churn settled down).'
  replies: []
- id: 3841
  author: eu
  date: '2005-07-18T08:20:01'
  content: Cedric, testing private methods had been a topic of the long flame war. But anyway, doesn't they being called from a public methods? So you should be able to test those methods indirectly trough the public api.
  replies: []
- id: 3842
  author: Rob Meyer
  date: '2005-07-18T08:32:24'
  content: What about refactoring for better testability? Your sort or partial ordering algorithms sound like they could be extracted into their own class, and tested normally. My gut feeling is that this is an eaiser, better in the long-term method than worrying about testing private methods (although I'm sure there are some cases where it's not appropriate).
  replies: []
- id: 3843
  author: ''
  date: '2005-07-18T09:19:23'
  content: 'When it comes down to testing, I follow a very simple rule:

    "If it is public and if it can break, test it. If it is not public and if making it public would worsen the design, test it indirectly by testing the public method which calls it." ;-)

    Maybe we can agree on this.'
  replies: []
- id: 3844
  author: cooper
  date: '2005-07-18T10:07:26'
  content: 'Imagine that you are writing a Swing table widget that lets you order your columns in several different ways. Your sorting algorithm is private and one day, you introduce a bug in it. If all you do is test the public methods, the widget will simply start showing wrong results and your tests won''t tell you anything more.

    Hmm... I guess I can''t help but wonder why the sorting is in the class rather than another class to handle it. I will admit, however, that I tend to write very few explict tests for private methods, but I do rely on coverage tools (emma) to make sure that they are tested through their calls from the public methods. Yes, I suppose this can lead to occasional debug problems, however, this would seem to me to be the actual function of a debugger and not so much a test case to see if the external exposure is behaving as expected.'
  replies: []
- id: 3845
  author: Me
  date: '2005-07-18T10:23:21'
  content: OK, how do you test private methods using Junit?  I can't use your tool because we are still on 1.4.
  replies: []
- id: 3846
  author: cooper
  date: '2005-07-18T10:31:39'
  content: Take a look at the junitx.util.PrivateAccessor (http://junit-addons.sourceforge.net/junitx/util/PrivateAccessor.html) stuff. You can do it though reflection in your test cases.
  replies: []
- id: 3847
  author: Marc
  date: '2005-07-18T13:21:30'
  content: 'I agree with Hans that ideally you should be able to test for these bugs via the publicly available methods.  Of course, reality is rarely this kind.

    My problem is that 1) I don''t like changing visiblity just for doing unit testing, 2) I don''t like hacks like PrivateAccessor that allow me to bypass visibility restrictions, which leads me to 3)  I don''t think our current ideas about unit testing are sufficiently evolved to properly address this issue.  It seems almost like a mechanism should be added to the language itself to enable this type of testing (but something that would only work in testing not like the "friend" concept in C++). The form of the mechanism I''m still debating in my head.'
  replies: []
- id: 3848
  author: anon
  date: '2005-07-18T14:16:59'
  content: 'Have you people never heard of the strategy pattern?

    Cedric''s partial algorithm sounds like an ideal candidate for a SortingStrategy. All at once you can test your sorting algorithm simply and easily in _isolation_ without needing all the surrounding infrastructure.

    I sometimes read Cedric''s stuff and I wonder how he can arrive at these marvellously complicated (but clever) solutions rather than reaching for well-known and simpler solutions. What''s more worrying is the way this penchant for clever solutions leads to the formulation of dubious heuristics. Oh well, maybe I just don''t understand and one day I will be enlightened.

    Cedric, do you test your private methods by using reflection or do you follow the smalltalk school and just make them all public/protected? How does affect future maintainers of your code when they find that your tests have not only defined the interface but specified the implementation as well? Do they delete your tests when they''re changing the implementation?'
  replies: []
- id: 3849
  author: Marc
  date: '2005-07-18T15:07:05'
  content: '"I sometimes read Cedric''s stuff and I wonder how he can arrive at these marvellously complicated (but clever) solutions rather than reaching for well-known and simpler solutions."

    What is it that you find so "marvellously complicated"?'
  replies: []
- id: 3850
  author: Brian Slesinsky
  date: '2005-07-18T20:09:28'
  content: 'Worrying about these things unnecessarily complicates your design.  It''s premature optimization.

    If you want to call a non-public method from a unit test, just make it package-protected.  (Tests should be in the same package as the methods they test.)  This is better documentation.  When I see "private" I assume I can refactor at will.  If a test calls the method, it''s not private.

    Second, there is no point in obsessing too much over the order in which the tests run, or in conditional testing.  Instead, worry about making the entire test suite run as fast as possible.  The normal case is that all tests pass, so you''re running them all anyway.'
  replies: []
- id: 3851
  author: Sam Newman
  date: '2005-07-19T02:09:01'
  content: '+100 on what Brian said.

    I think the phrase "marvellously complicated" was being by parts polite and sarcastic. Perhaps "complicated" would be better. One wonders if perhaps TestNG uses Maven as a build tool too...

    For my own part, when I''ve found private methods that I really want to test, I''ve found something that shouldn''t be private, or can easily be broken out into something else (ala strategy pattern), and have ended up with a better code base.

    It''s also important to note that by making private methods easy to test, you''ll increase the chance of people making larger, less cohesive more tightly coupled code - if in the past you had to break up code to make private code testable, and now don''t, chances are you''ll get bigger code with more painful testing requirements.'
  replies: []
- id: 3852
  author: jed
  date: '2005-07-19T23:20:16'
  content: 'I would generally agree with the idea that if you need to test something, you design it for testability - this is a general benefit that Test-Driven design brings. If you have a unit that relies on a sorting algorithm, make that algorithm a first-class member so it can be tested. You then have a cleaner separation of concerns (the do whatever with this list concern and the sort this list concern in the example) as well as well tested code.

    So, I would argue that private method testing actually against the aims of TD design - which admittedly is not what everyone sees as the main purpose of unit tests.'
  replies: []
- id: 3853
  author: sid
  date: '2005-07-20T05:42:54'
  content: I don't understand. How do I test private methods using TestNG without polluting production code?
  replies: []
- id: 3854
  author: dan
  date: '2005-07-20T09:57:48'
  content: Perhaps you can give us a more compelling example of the need for private method testing?  I agree with the comments above supporting the "design for testability" approach.  That tends to produce a more cohesive/loosely coupled design.  I also agree that it hinders the ability to refactor if you expose private methods to your tests.
  replies: []
- id: 3855
  author: sander
  date: '2005-07-25T03:24:05'
  content: 'Yeah, the example unfortunately sucks - your swing widget class is attempting to do too much - why should it take care of rendering *and* sorting? I would want to decouple my sorting logic from my swing widget - I certainly consider it to be important enough to warrant its own class, and its own tests.

    If you''re doing something important in your private methods, and you feel that whatever you''re doing there needs to be tested, then that''s a smell - pull out whatever you have there into a class if applicable, or alternatively, use package level access to allow testing.'
  replies: []
- id: 3856
  author: Elliotte Rusty Harold
  date: '2005-07-30T10:55:19'
  content: If I'm writing a Swing table widget that does sorting, then  I will test it through its public interface. That is, I will put some data in the widget, tell it to sort itself, and then get the data out of the widget and check that it's sorted. I will not expose private methods to do this. If necessary I will drive the user interface from my code using the various Swing methods, the accesibility API, and/or java.awt.Robot. (However, in this case it's probably not necessary to do that.) I see no need to test private methods to satsify this use case.
  replies: []
- id: 3857
  author: Michael Slattery
  date: '2005-08-19T07:27:50'
  content: I, also, feel that private methods should not be tested directly, but indirectly through the public methods.  I also feel that it is important to use a code coverage analyzer to make sure that all lines of code in ALL methods have been executed (with the exception of silly getters/setters/catch-throw).
  replies: []
- id: 3858
  author: Michael Slattery
  date: '2005-08-19T07:28:23'
  content: I, also, feel that private methods should not be tested directly, but indirectly through the public methods.  I also feel that it is important to use a code coverage analyzer to make sure that all lines of code in ALL methods have been executed (with the exception of silly getters/setters/catch-throw).
  replies: []
- id: 3859
  author: movk
  date: '2006-05-17T05:58:36'
  content: 'Testing private methods with reflection, example:

    http://erik.thauvin.net/blog/news.jsp?date=2006-01-29'
  replies: []
- id: 3860
  author: Tom
  date: '2009-08-02T01:43:33'
  content: 'A private method call generator: code.google.com/p/hexacta-booster/

    Enjoy!'
  replies: []
- id: 3861
  author: OMDS
  date: '2011-05-15T21:31:38'
  content: A private method is a function which cannot be called from outside the module.  Some time it may not be a great idea to test these methods publicly.
  replies: []
- id: 3862
  author: Gabriele
  date: '2011-11-17T11:59:08'
  content: If you add dp4j to your classpath then every access a private field/method in your @Test annotated method it will be replaced with the equivalent Reflection API. See http://www.junit.org/node/591 (works the same way with TestNG).
  replies: []
---

My answer to the question "Should you test private methods" is a resounding YES! 

Let me start by giving you two examples. 

Imagine that you are writing a Swing table widget that lets you order your columns in several different ways. Your sorting algorithm is private and one day, you introduce a bug in it. If all you do is test the public methods, the widget will simply start showing wrong results and your tests won't tell you anything more. For all you know, there might be a bug in your Swing code. If you unit test your (private) sorting algorithm, you will catch the error right away instead of wasting time "higher up the stack". 

While this first example is fictitious, this second one is from TestNG itself. 

TestNG uses a partial ordering algorithm to determine in what order methods should be invoked. Methods that have no dependent can be invoked at any time but methods that depend on others (or that are depended upon) need to be invoked in a certain order. This requirement creates a "partially ordered set" of methods, which means that some of its elements are ordered but not all. 

This algorithm is completely private, but if it goes wrong, TestNG will start failing in very mysterious ways, indicating dependency failures and other strange error messages. It was pretty obvious to me that I needed a separate test for this section of the code. 

I am sure that anyone can relate to a similar situation where their code was so dependent on a private section of code that it was vital to make sure that you would know right away if this part should break. 

When it comes down to testing, I follow a very simple rule: **"if it can break, test it"**. 

Now that we have determined that there are actually two kinds of testing (private and public), I would actually go one step further and argue the following points: 

  * **Private tests should run before public tests.** I don't think there is much point in running your public tests if some of your private tests are failing. When private tests fail, the entirety of your code might be jeopardized and will probably fail in random places or maybe even pass in places where it should fail. This situation is a little bit like using a compiler that generates invalid code: wouldn't you try to fix the compiler before you try to compile any program with it?

  * **Private tests should prevent public tests from running if they fail.** This is a consequence of the first point. If your private tests fail, you might as well save yourself the trouble of spending time running your public tests since they will be meaningless.

  * **Private tests should be listed first in the reports.** If some of your private tests fail, they should be the first thing you investigate since fixing them might actually fix the potential failures in your public tests.


Since TestNG supports dependent testing ("don't bother running test method `b()` if test method `a()` didn't succeed"), it might actually be interesting to add a way to specify that a certain test is testing your private API. This way, TestNG would run it first and make all other non-private tests depend on it... 

What do you think?
