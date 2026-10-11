---
title: Unit or functional?
date: '2007-04-20T10:39:29'
slug: unit-or-functional
categories:
- Java
comments:
- id: 6639
  author: Phil
  date: '2007-04-20T13:00:04'
  content: I've recently been working on code coverage towards an upcoming release.  Target numbers were handed down from above, and I thought this was ridiculous.  However, we've found quite a few bugs by looking at the coverage numbers and seeing what wasn't beeing called.  (For example, methods in subclasses that were supposed to override superclass methods but were misspelled or had a different signature, or methods that should have been called as part of some process but never were)  I've come to think of the code coverage numbers as having the same role as the syntax checker in the compiler.  High code coverage numbers, as you point out, don't ensure correctness, but they do give you some assurance that the code isn't completely broken, just as the compiler gives you certain assurance that the code is syntactically valid.  Code that never gets called during a test can never be assured correct, but code that does at least has a chance to be.
  replies: []
- id: 6640
  author: Phil
  date: '2007-04-20T13:00:31'
  content: I've recently been working on code coverage towards an upcoming release.  Target numbers were handed down from above, and I thought this was ridiculous.  However, we've found quite a few bugs by looking at the coverage numbers and seeing what wasn't beeing called.  (For example, methods in subclasses that were supposed to override superclass methods but were misspelled or had a different signature, or methods that should have been called as part of some process but never were)  I've come to think of the code coverage numbers as having the same role as the syntax checker in the compiler.  High code coverage numbers, as you point out, don't ensure correctness, but they do give you some assurance that the code isn't completely broken, just as the compiler gives you certain assurance that the code is syntactically valid.  Code that never gets called during a test can never be assured correct, but code that does at least has a chance to be.
  replies: []
- id: 6641
  author: Andrew Binstock
  date: '2007-04-20T13:21:56'
  content: 'You wrote: "if you are pressed for time and you need to choose between implementing a unit test or a functional test, I therefore recommend going for the latter (because it serves your users) and then down the road, implement more unit tests as you see fit (for your own comfort)."

    And what do you if you use TDD and are pressed for time? ;-) Your point is well taken though: in a pinch do the tests that most immediately reflect the user''s experience.'
  replies: []
- id: 6642
  author: Cedric
  date: '2007-04-20T13:44:11'
  content: 'Andrew,

    Easy:  don''t do TDD if you''re pressed for time :-)'
  replies: []
- id: 6643
  author: Daniel Serodio
  date: '2007-04-20T15:01:21'
  content: '"Every time you yield to the temptation to trade quality for speed, you slow down. Every time." - Robert C. Martin'
  replies: []
- id: 6644
  author: Anonymous
  date: '2007-04-20T15:06:23'
  content: 'Interesting how all the absolute claims that come from Robert Martin never seem to pay attention to users.  Ever.

    Yes, this might slow down the developer, but the user might get a working software faster.

    Time and again, I''ve noticed that taking the opposite advice than what Martin says tends to work very well for myself and my users.'
  replies: []
- id: 6645
  author: Andy Stopford
  date: '2007-04-20T15:59:42'
  content: I disagree Cedric. What happens if you functional test with input serving as output into the calls your routines back. Sure a functional will test it but only against the use cases or stories that you have defined. It's not intended to run every iteration over each method but map business functions across that code. Sure all your angles may be covered against the defined business rules but fringe areas around the rules or for that matter new rules may run into untested areas and defects for your users. Unit testing is in TDD is a design tool and is intended to cover every angle that you can throw against a unit of code with out any concern of other code around it (which is the job of functional). Functional and unit testing are designed to go hand in hand. Strapped for time or not, if you skip you risk shipping buggy software to your customers and no short cut is worth it.
  replies: []
- id: 6646
  author: Binil
  date: '2007-04-21T00:18:55'
  content: 'This post looks like a "teaser" for your book - I hope enough TDD zealots jump in with comments :)

    Having said that, I am really keen to read this book - when can we expect this on the market?'
  replies: []
- id: 6647
  author: Frank Bolander
  date: '2007-04-21T09:41:40'
  content: Interesting post. I've had discussions as to what level of granularity provides the minimal opportunity cost for a development lifecycle which right now is the argument presented- unit vs functional. You've mentioned before Behaviour Driven Development(BDD) which I guess would be the next level of testing granularity which would group functional tests. Have you given any consideration to this type of argument that BDD would be better overall than either unit or functional testing. TestNG's groups of groups concept may fit, but I'm not sure if I'm interpreting the implementation correctly.
  replies: []
- id: 6648
  author: Brian Duff
  date: '2007-04-22T20:14:37'
  content: 'The perception seems to generally be that unit tests are harder to write than functional tests.

    Unfortunately, in my experience, this means that a lot of the time, developers latch on to the perceived difficulty of writing unit tests as an excuse not to write them at all. And then they eventually punt on the functional tests too, since they also turn out to be quite hard, are sometimes considered to be the job of QA, test the wrong things (like the UI toolkit you''re using instead of your application) or use robotic frameworks that tend to degrade badly when UI changes are made to an application.

    I strongly agree with the statement, "Ideally, you want your application to be covered by both unit and functional tests", but I disagree that unit tests are purely for developer ease of mind. I think unit tests absolutely serve your users too - the emphasis and focus is just slightly different.'
  replies: []
- id: 6649
  author: BlogReader
  date: '2007-04-22T23:19:41'
  content: 'Why is one method dependent on the state set by another method?  I would look into that before you start writing any more unit tests.  This makes me believe the entire way this is done should be looked at first before trying to patch it.

    Also your unit tests should of caught that openFile() sets some sort of state that filterFile() depends on.  Does filterFile() look to see if there''s a File set?  I''m guessing that your unit test setup that condition, correct?

    Granted this is only an example, but the solution given isn''t optimal.'
  replies: []
- id: 6650
  author: Alex Fabijanic
  date: '2007-04-23T06:47:24'
  content: I agree with the last comment. The example is ill-chosen. Your filterFile() should throw if file is not opened. Or, even better, it could call openFile(). A half-decent programmer will know that depending on the user of code to ensure the proper order of execution is not a good idea. And even if he doesn't, a half-decent unit test will catch the problem.
  replies: []
- id: 6651
  author: Ravi
  date: '2007-04-23T08:11:02'
  content: 'Anonymous @3:06 p.m.

    I agree with you that Robert Martin''s advice is better not followed. I find him, at best, an average programmer and his recommendations are sometimes unsound.'
  replies: []
- id: 6652
  author: Peter Booth
  date: '2007-04-23T12:16:32'
  content: 'It''s amazing how a well-reasoned introduction of an interesting discussion veers off track so quickly into a "I don''t agree with Bob Martin" track.

    My two cents: I have never worked on a project that did sufficient functional or unit testing. Questioning the relative value of functional and units testing is a pragmatic act. Bob Martin''s comment about trading quality for speed has nothing to with this question. I think that a lot of Bob Martins advice is credible, relevant and influential, particularly the papers about class and interface design, dependency inversion etc.

    I suspect that the arguments in the influential "End to end arguments in system design" paper can also be applied to this question and they support Cedric''s assertion.

    My experience isn''t enough for em to have a strong evidence based view on this. My instinct is that Cedric is correct and that unit tests are currently over-emphasized compared to functional tests'
  replies: []
- id: 6653
  author: Robert Greathouse
  date: '2007-04-23T12:40:10'
  content: I would agree. Unit tests can be very brittle. I would much rather have functional tests against known use cases. If a bug appears, find out what data (use case) caused the bug, replicate the use case as a functional test.
  replies: []
- id: 6654
  author: BlogReader
  date: '2007-04-23T13:14:11'
  content: '[ unit tests can be very brittle ]

    And that''s a good thing!  You should make one change in your code and see your junit test break.  Then fix it / make another testcase and continue on.  This prevents you from making huge changes in the expected outcome of a method, and that''s a what junit tests are for.

    I also agree that there should be more ''use case testing''  I believe http://storytestiq.sourceforge.net/ does something like that but I''ve never tried it.'
  replies: []
- id: 6655
  author: Brendan Humphreys
  date: '2007-04-23T18:50:48'
  content: 'Hi Cedric,

    I think from your description what you really need is 100% functional test coverage and 100% unit test coverage. In your coverage report you really want to know more than "was it covered" - you want to know "what covered what". Clover 2 takes some steps in this direction by showing which tests covered each statement, and which statements were covered with each test. Further to this, Clover 2 grades coverage on various criteria:

    - coverage that occurred incidentally is highlighted differently to coverage contributed by a test execution. This coverage is suspect because it didn''t result from the direct execution of a test.

    - coverage that is unique to a single test is highlighted differently. This coverage is deemed "important" because without the single test contributing it, the code would be untested.

    - coverage resulting only from a failed unit test is highlighted orange. This coverage is suspect because the test failed.

    These indications, shown inline in the coverage report, help sort out situations like the one you described in your post.

    Cheers,

    -Brendan'
  replies: []
- id: 6656
  author: Jon Tirsen
  date: '2007-04-29T21:25:19'
  content: 'This must be the first time I whole-heartedly agree with you Cedric. :-)

    While functional tests are more important than unit tests I would still stress the importance in finding a good a balance between them. Functional tests are usually slow, hard to get robust, hard to maintain, where as good unit tests are fast, easy to make robust and so forth. Unit tests are really good for pre-commit builds but the functional tests prove the app actually works.

    I tend to write broad sweeping tests in functional tests and the detailed minutiae in unit tests. Every functional test I see failing I find the root cause of the failure and add a unit test for that particular failure.

    Finding the right balance is critical to having a cost-efficient test suite.'
  replies: []
- id: 6657
  author: BlogReader
  date: '2007-05-15T06:42:02'
  content: '[So, assuming I''m on dry land, then I need to ask, "What value does this unit test give me?" Apart from boosting my code coverage figures, what does this buy me?]

    Let''s say you''re working on a large project where you are not the sole owner of that file.  Based on the hundreds of updates a day you can''t possibily keep track of your baby.

    Someone looks at your code and realizes that they need an "a.delete(foo)" in there to clean up some temporary object.  It works for his use case so he leaves it in there.  Except that in the way you''re using it (which is a very rare case) you absolutely don''t want to delete anything.

    A unit test catches this as the call to .delete isn''t explicitly known when you setup your unit test.  So your test fails, telling you (and hopefully the other guy) that something''s amiss.

    I say "in a rare case" as maybe the reason why .delete wasn''t in there was due to a particular bug that showed up in 1 out of a million transactions.  Do you have time (or the knowledge) to try and setup those exact same conditions with a regression test?

    To sum up: junit tests are really helpful when you''re the only guy on a project.  They become essential when there''s dozens and you can''t keep up with all of the changes.'
  replies: []
- id: 6658
  author: Andy
  date: '2007-05-15T07:05:26'
  content: 'Hm. That''s interesting - thanks for presenting the scenario.

    But would the other developer really twig onto the unit test failure as "something amiss"? Or would they just think, "of course there''s no expectation of a delete() call, it wasn''t in the original implementation."

    And the most likely course of action would be to update the mock to expect a delete call. I don''t know if a unit test written in the mockist fashion would really trigger the type of thought process necessary to determine whether a code change is correct or not. I would imagine that process occurring while actually analyzing and implementing the change in the first place.

    (And if the developer doesn''t do that type of thinking up front, then all the unit tests in the world won''t be enough.....)

    In your example, I would suggest that the 1 in a million glitch would be documented heavily in the code as a conscious design decision. And if that behaviour is *not* known up front, then a mock wouldn''t highlight it anyways.

    So, I''m still stuck on the notion that the only way of detecting whether something is truly amiss, is through an objective, functional test. Something is amiss because something *works* incorrectly; it breaks a contract. This is different from a unit test not mirroring a sequence of calls in the system exactly.'
  replies: []
- id: 6659
  author: BlogReader
  date: '2007-05-16T06:11:23'
  content: '[ But would the other developer really twig onto the unit test failure as "something amiss"? Or would they just think, "of course there''s no expectation of a delete() call, it wasn''t in the original implementation." ]

    That is very possible, but at least there was a flashing red light that said "warning, this isn''t working as I thought it should when I was written"  If that wasn''t there the 2nd developer wouldn''t really have an idea that someone expected a process to work in a certain way.

    If they went ahead and updated the unit test w/o talking to their fellow coworker then there''s a problem with communication.   No amount of technology can solve that.

    [ And if that behaviour is *not* known up front, then a mock wouldn''t highlight it anyways. ]

    Whenver I get a bug report I try and write a unit test to mimick its behavior.  That way I can fix the problem and I have a working example / documentation of what the fix was about.

    Also with all the other existing unit tests I have a safety net to fall back on.  Maybe I took out that .delete statement, well another unit test should break because of that.  And I should then talk with other people about it.'
  replies: []
- id: 6660
  author: Credit card
  date: '2008-06-28T16:21:43'
  content: Great article, i completely agree with you Cedric. You've mentioned before Behaviour Driven Development(BDD) which I guess would be the next level of testing granularity which would group functional tests. The numbers are there and i totally have to give you credit for that.
  replies: []
- id: 6661
  author: Emil Schnabel
  date: '2009-02-18T00:56:42'
  content: 'Hi Cedric

    You have mentioned your upcoming book in April 2007... Are we there yet? :) Looking forward to it.'
  replies: []
---

Is it possible to have 100% unit test coverage and yet have an application that fails? 

Absolutely. 

Consider the following code: 

```java
public class Main {
public void openFile() {}
public void filterFile() {}
public static void main(String[] argv) {
filterFile();
openFile();
}
}
```

We have tests for `openFile()` and `filterFile()` and they all pass, however, since the `main` method should be calling `openFile()` first, our application is broken. 

The problem here is that we only have unit tests but no functional (or "end-to-end") tests. In this case, only one functional tests would suffice (it would invoke `main()` and make sure that the application does what it's expected to do). Note also that just like testing `openFile()` and `filterFile()`, having one test that invokes `main()` will result in 100% coverage as well, but it should be clear to everyone now that 100% coverage doesn't always mean that the code you are testing actually works. 

Does this mean that unit tests are useless and that we should only write functional tests? 

Not exactly, but I definitely want to make something very clear: while unit tests have been receiving a lot of exposure these past years, functional tests are ultimately the only way to guarantee that your application works the way your customers expect. 

Let's write a few tests for the code above to make things clearer: 

```java
public class MainTest {
@Test(groups = { "unit", "fast" })
public void openFileShouldWork() { ... }
@Test(groups = { "unit", "slow" })
public void filterFileShouldWork() { ... }
@Test(groups = { "functional", "slow"})
public void mainShouldWork() { ... }
}
```

For illustration purposes, I'm assuming that `filterFile()` is slower to run than `openFile()`, so I put this method in the "slow" group. This test class if fairly extensive: it covers unit and functional tests, and achieves more than 100% coverage. 

More than 100% coverage? Is this even possible? I know it sounds a bit strange, but it simply means that running all the tests in this class will result in certain portions of our main application to be run several times, which is not always a bad thing. Another way to look at it is that running only the group "functional" will result in 100% coverage (as will running only the group "unit"). 

Assume that we only run the group "functional" and the test fails. We now know that our application is broken, but we don't know exactly where: `main()` invokes `openFile()` and `filterFile()`, and either could be broken. We won't find out until we start testing them individually. 

If we run the entire class, not only will the functional test fail, but at least one of the unit tests will break, therefore pointing us directly to what's wrong in our application. The virtue of unit tests is therefore to help us, the programmers, pinpoint errors when they occur. But keep in mind that traditionally, unit tests are of no interest to users: they are just here to help developers. 

Ideally, you want your application to be covered by both unit and functional tests, but if you are pressed for time and you need to choose between implementing a unit test or a functional test, I therefore recommend going for the latter (because it serves your users) and then down the road, implement more unit tests as you see fit (for your own comfort). 

Note: this topic (and many others) is covered in greater details in [our upcoming book](http://beust.com/weblog/weblog/archives/000438.html).
