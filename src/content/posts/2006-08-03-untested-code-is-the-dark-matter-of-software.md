---
title: Untested code is the dark matter of software
date: '2006-08-03T09:19:20'
slug: untested-code-is-the-dark-matter-of-software
categories:
- Java
comments:
- id: 5814
  author: Tim
  date: '2006-08-03T10:42:13'
  content: 'Having 100 percent coverage is certainly debatable as a worthwile use of time.  We often joke that we should only test the code that has bugs, with the joke being obviously, that you don''t know where the bugs are without writing the tests.

    That said, we''re on a large software project and we''re managing about 70 percent coverage through around 1700 tests.  I tend to think that this is pretty good.

    We tend to advise folks to be smart about what to test and not waste a lot of time testing accessor/mutators, but to spend additional time on real business logic making sure to test as many scenarios as possible.

    It''s also important not to lose site that coverage alone doesn''t mean that the code works.  It is not difficult to achieve coverage without actually finding bugs.  In particular, I find it amusing that many open source projects have the escape syntax in their source that tells Clover to ignore sections.  This form of vanity to achieve coverage is particularly silly.

    What is more important is to actually write good tests that test the variety of conditions.  In the end, coverage is just one metric, but shouldn''t be the only one.'
  replies: []
- id: 5815
  author: Frank Bolander
  date: '2006-08-03T10:49:02'
  content: 'Part of the problem with all the TDD zealots is that they do mouth off about Testing and chastise other people. However, when you review their tests, the test suites are so facile, quality is so low and underrepresent the domain they are testing, you have to wonder about the time wasted on the test suites and what value they brought to the table in the first place.

    As far as my "My code is 100% tested" -- that''s just bullsh*t. There is no and never will be any code that is 100% tested. The time and effort to provide 100% testing would require infinite resources and time and these statements are pure academic mental masterbation. We always seem to forget about weighing opportunity costs in the discipline of engineering design in these discussions.'
  replies: []
- id: 5816
  author: Jevgeni Kabanov
  date: '2006-08-03T12:37:58'
  content: 'What makes it funny for me is that Java Community missed a great instrument that came out of the scientific background -- random testing. I know that most of the time model checking and other formal methods would take too much time and effort, but random testing crucial peaces of your application (read algorithms and complex logic) would benefit many a customer greatly.

    Somebody should really take up the task of finding an alternative to QuickCheck (http://www.cs.chalmers.se/~rjmh/QuickCheck/) for Java (perhaps it exists already, and I''m just unaware of it?).'
  replies: []
- id: 5817
  author: Howard Lewis Ship
  date: '2006-08-03T12:53:50'
  content: 'I almost always find bugs when I test. I like to think I''m a careful coder, but I''m always saying "== null" when I mean "!= null" or something similar. I catch those with unit tests.  Maybe it''s something about building frameworks vs. applications ... it''s much harder to track down the cause of a problem if there''s a lot of layers. That is, the bug doesn''t manifest immediately, but often in what appears to be unrelated code. This is a problem for J2EE as well, but that''s another (old) story.

    I don''t feel "safe" until I hit 85% code coverage. About the only area I just often find bugs when I push above that figure. Call it superstition. The only area I skimp on is getter/setter methods. I just leave those for integration tests.'
  replies: []
- id: 5818
  author: Alex Blewitt
  date: '2006-08-03T15:05:24'
  content: 'Good piece. I agree; tests are good, but not necessarily to the detriment of anything else. What isn''t good is a suite of tests where there''s so much rot that some tests are failing all the time and others are failing randomly.

    In any case, the myth of 100% coverage is just that -- a myth. On the whole, each test only goes through one possible path in a system, and there may always be special cases/edge conditions that haven''t been found. What you can say is that on probability, this covers some amount of normal cases ... and that if you find bugs at a later stage, you can encapsulate them in a test to prevent reoccurrence.'
  replies: []
- id: 5819
  author: Alan Green
  date: '2006-08-03T15:42:22'
  content: 'Even if you hit the magical "100%", with every code path covered in some unit test or other, you still can''t be sure your system is correct. You haven''t tested all possible combinations of input data, and all the possible ways they can interact, you haven''t tested the underlying library code, you haven''t tested your tests and you haven''t tested the requirements.

    Clearly you need to be smarter about your testing than that.

    This paper looks interesting: http://menzies.us/pdf/99waaai.pdf'
  replies: []
- id: 5820
  author: rober
  date: '2006-08-03T16:25:56'
  content: 'Just happend to us, what is Cedric mentioning:

    we had extrem deadline, so we programmed it, shipped and then tested.

    there were lot of bugs. But having tight deadline that was our only alternative -- and we succeded. By the way, that software is for military logicstics use, and is installed in several countries:-) And yes, around 80% of code is NOT TESTED and it works without critical bugs. Ha!'
  replies: []
- id: 5821
  author: Brittain
  date: '2006-08-03T18:38:11'
  content: 'Nice article. I too chuckle at those folks who equate coverage with quality. There''s much more to it, as previous commenters have noted.

    My favorite recent example of the syndrome occurred just recently when I reported a bug to an open source author. His response, "the tests all pass". My response, "you failed to test this case". An assertion I backed up with the clearly faulty output.

    Testing is ALSO garbage in, garbage out.'
  replies: []
- id: 5822
  author: Laurent
  date: '2006-08-04T01:10:05'
  content: 'This reminds me of the requirements for the civil aviation software.  It is called DO178B and it does not only require 100% code coverage, it also requires MC/DC.  For instance, if you have a test a && b there are three cases to test:

    1. it fails because a fails

    2. it fails because b fails

    3. it passes.

    I think it makes sense in aircraft.  But now start thinking about dynamic dispatch and how to be sure all such control paths are taken...  This is one of the reason that precludes the use of OO languages in aircraft SW (though this is slowly changing).

    But this is highly insufficient:  as already mentionned, one should also check *sequences* of runtime decisions.

    About random testing, I don''t trust pure random testing, this has to be constrained and directed.

    And how do you check your tests, be they random or not, produce the correct output?

    I still think testing is only part of what should be done, the other is formal verification, which of course is almost impossible on most of the languages we use, and would be impossible on most of the big software anyway.

    Taking all of that into consideration, one should be pragmatic :)'
  replies: []
- id: 5823
  author: Mats Henricson
  date: '2006-08-04T01:14:56'
  content: 'What do you mean with "Untested code is the dark matter of software"? That we believe the untested code exists, but don''t know what it is?

    Mats'
  replies: []
- id: 5824
  author: Mike Bosch
  date: '2006-08-04T01:54:48'
  content: 'I agree that 100% code coverage is BS.  This doesn''t mean anything other than you''ve managed to make sure every line of code in your codebase is actually executed during unit tests.  But guess what?  That doesn''t mean anything.

    So you have a method called pow and it takes a int for the base and a int for the power it will be raised to.  You pass in 10 for the base and 10 for the power.  It returns as expected.  Then, you test for how it handles nulls and stuff.  But, you forget to test for what happens in an overflow condition if the base and power are too large.  You''ve got 100% coverage but obviously have faulty code.

    Now multiply this by how much more complex code is than that simple example.  While code coverage metrics alert you when something isn''t covered they don''t actually tell you how well something is covered.

    I don''t see a tool showing up anytime soon that can help you determine the quality of your code coverage (vs. just the amount).  Agitar has a product that tries to do this with random inputs but it can only really do that with simple inputs.  You have to write factories that create your random objects for more complex items (at least the last time I looked at it almost 2 years ago) and so at that point I don''t know much it really does for you towards random input testing.  Plus, each method has its own sets of truly bad inputs and without understanding the method it''s hard to write adequate tests in an automated fashion.

    In the end, you just have to push the concept of quality tests (I''ll leave that for another discussion) and do random reviews to see if your developers are holding themselves to the standard you set.'
  replies: []
- id: 5825
  author: Neil Bartlett
  date: '2006-08-04T02:13:30'
  content: Half of the time I spend writing JUnit tests is wasted. Unfortunately I don't know which half.
  replies: []
- id: 5826
  author: Michael O'Keefe
  date: '2006-08-04T06:55:06'
  content: 'Good post.  The inevitable backlash.  There is a saying that goes along the lines of "test enough, but not too much".  Also reminds of anti-patterns, and how one consulting company was pleased to have used 20 of the 23 GOF patterns, and wanted to go back, refactor the code to use all 23.  Cringely sums it up well:

    http://www.pbs.org/cringely/pulpit/pulpit20030508.html'
  replies: []
- id: 5827
  author: Jesse Kuhnert
  date: '2006-08-04T07:04:38'
  content: 'Very well put Cedric.

    This is why overzealous consultants who have never worked on a product with multiple releases and stiff competition have no business advising others what they "should" be doing. It''s almost downright reckless.

    Whether we like or not our field forces us to where many hats, software engineering being just one of them. Worrying about the needs of your users/clients/employer are just as important as the needs of your system.

    f-#$-ing consultants.....'
  replies: []
- id: 5828
  author: Cedric
  date: '2006-08-04T07:08:22'
  content: 'Mats,

    Sorry for the obscure cosmological reference.  It is believed that 90% of the mass of the universe hasn''t been found, and this unseen matter has been coined "dark matter".  What I mean to say with the title of this post is that I believe that 90% of the software that''s out there have been very poorly (if not at all) automatically tested.'
  replies: []
- id: 5829
  author: John Casey
  date: '2006-08-04T08:46:13'
  content: It's worth mentioning that a project I'm working on currently has pretty high marks in terms of coverage, but I'm still finding bugs in those areas which the highest coverage. In other words, it's not as simple as saying, "My code has 100% test coverage" if those tests don't abuse the code or cover exotic conditions like plugging in nulls at random places.
  replies: []
- id: 5830
  author: Sam
  date: '2006-08-04T09:12:34'
  content: 'There is no correlation whatsoever between unit test code coverage and quality (from the perspective of a user).  Anyone who thinks unit tests exist for functional quality purposes is dellusional.  Functional quality is assured through extensive functional testing (manual or automated).  The purpose of unit tests is to ensure that changes made to code, don''t break code.  Put another way, they exist to enable prolific refactoring and make the code more maintainable.

    On a side note...

    Cedric, now that Google has joined the Agile Alliance, when are you gonna get a new job?  We know from a previous blog entry that you think Agile is a bunch of bullshit, so I''m excited to hear who you''re going to be working for now that Google will be using said bullshit practices.'
  replies: []
- id: 5831
  author: Gavin
  date: '2006-08-04T09:58:18'
  content: The idea is that unit testing gives you the freedom to refactor without breaking everything. This is incredibly liberating in my experience. I also found that I have very low defect reports from my users. YMHV (YM *has* varied) - I wonder if it is because I am building out an SDK/framework as opposed to an application?
  replies: []
- id: 5832
  author: Jesse Kuhnert
  date: '2006-08-04T10:12:42'
  content: 'Sam:

    I certainly hope google hasn''t deteriorated to the point where they would make someone like Cedric feel the need to leave. Sounds like a silly thing to say.

    More likely than not he''s already doing all of the things in the (puke/cough/moan) "manifesto", only he probably doesn''t feel the need to join a special club or create secret handshakes to use them.'
  replies: []
- id: 5833
  author: Sam
  date: '2006-08-04T11:01:30'
  content: '"More likely than not he''s already doing all of the things in the (puke/cough/moan) "manifesto", only he probably doesn''t feel the need to join a special club or create secret handshakes to use them."

    Yeah, well his company feels the need.  So like I say...when''s he gonna quit?'
  replies: []
- id: 5834
  author: Mike Bosch
  date: '2006-08-04T14:34:49'
  content: Why the hostility towards Cedric, Sam?  Do you agree with everything your employer does?
  replies: []
- id: 5835
  author: Aaron Erickson
  date: '2006-08-04T15:19:08'
  content: Sam, again demonstrating the attitude well TDD zealots when you disagree with the Spoken Dogma.
  replies: []
- id: 5836
  author: Aaron Erickson
  date: '2006-08-04T15:19:20'
  content: Sam, again demonstrating the attitude well TDD zealots when you disagree with the Spoken Dogma.
  replies: []
- id: 5837
  author: Rob Meyer
  date: '2006-08-04T21:34:25'
  content: 'Mike Bosch:

    Couldn''t agree more. I''d rather see 80% coverage where someone clearly thought about the cases and tested from multiple points of view rather than 100% coverage just for the sake of having 100% coverage.

    Have you seen "Jester"? It mutates your code and runs your tests again, and keeps track of the failures and successes between both runs. Logic being that if it flips a condition around in the code, the tests had better fail or they are not really testing anything. I haven''t used it yet since I''m all C# these days (and the jester inspired "nester" is pre-alpha at best), but it sounds like a great idea.

    There is a large part in deciding what to test that probabilistic. If something is unlikely to have bugs, it may (I stress may) not be worth testing. If someone does find a bug, then write that bug out as a test for sure.

    If there were simple, rote rules to follow about what to test, then programming would be easy. :-)'
  replies: []
- id: 5838
  author: Zalle Cool
  date: '2006-08-05T03:55:27'
  content: 'Frankly, unit testing and code coverage provide a given developer (who is creating an otherwise intangible product in a small cubicle...) with a quantifiable level of confidence in his/her code that is easy to demonstrate.

    As far as semantics and implications are concerned; Management and Business folks can''t tell their front from their rear anyways...furthermore, this is a metric that this clueless tribe has taken the time to memorize and partially understand...so wtf, it a good metric to beat them up with.  After all such moments are rare ;)

    ZC'
  replies: []
- id: 5839
  author: Colbert Philippe
  date: '2006-08-05T20:00:08'
  content: 'Possible avenues of solutions: Use some AI methods like Genetic Algorithms to automate unit-testing and some integration testing.

    The pressure to deliver code often compromises testing, particularly unit testing.  One can'
  replies: []
- id: 5840
  author: Chui
  date: '2006-08-06T18:50:57'
  content: Unit testing is not the only way to test for code coverage. Steve McConnell's advice, which I found useful, is to make sure you have stepped over any code you modified, no matter how trivial. It's saved me a lot of times.
  replies: []
- id: 5841
  author: Chui
  date: '2006-08-06T18:53:35'
  content: Unit testing is not the only way to test for code coverage. Steve McConnell's advice, which I found useful, is to make sure you have stepped over any code you modified, no matter how trivial. It's saved me a lot of times.
  replies: []
- id: 5842
  author: Hasko
  date: '2006-08-07T02:37:24'
  content: 'Automated unit testing is certainly only one kind of tests one can perform. There are others, such as the manual tests everybody has been doing all the time. There''s also code inspection and reviews. The reason why I personally like automated unit tests is, they save a lot of time when I''m changing code. I change code a lot since the projects I''m working on are all in maintenance mode with only gradual modifications and extensions. So it just works out fine in my situation.

    That said, I am well aware that the systems I care for contain a lot of code that could be considered "untested" in the context of this thread. (Much this code has gone through other QA measures, though.) I like to think of such "untested" code as a l0an I took. There''s nothing wrong about l0ans. A lot of the economy wouldn''t work as well as it does without l0ans. They give you added flexibility. However, you need to know what you''re doing, and be prepared to pay interest. If you''re overdoing it, you''ll go broke on pay-day or even from the interest payments alone.

    Now, this is only an analogy, so I won''t draw dubious conclusions from it. It just happens to illustrate how I feel about "untested" code. I use the analogy to convince people to invest some time and money into quality assurance, preferably automated test suites. But I''m prepared to take the l0an in order to be able to deliver on time, in budget, etc. I like to keep "untested" code under control, and within boundaries.

    A previous commenter, Mats, pointed out that we don''t know what dark matter really is. I don''t want to stretch the analogy. You''ve already explained what you meant. But for the sake of the argument I''ll use it once more: Opposed to "dark matter", I really like to know which parts of the code are assets, and which are liablities.'
  replies: []
- id: 5843
  author: Aaron Erickson
  date: '2006-08-07T07:51:11'
  content: '"I like to think of such "untested" code as a l0an I took."

    I like to call that a "technical mortgage" - good analogy with techinical debt.  The only question is at what interest rate do you take out the mortgage.  That rate probably is dependent on the level of risk in the stuff you choose not to unit test (ala, rates are lower with getters/setters, higher with things that are, well, complex).

    Saying you need 100% unit tests, 100% of the time, would be like going into finance and saying you can never, ever use debt as a tool.  You might think you are right, but you would be laughed out of the building.'
  replies: []
- id: 5844
  author: Anonymous Coward
  date: '2006-08-07T15:06:24'
  content: 'I agree with you Cedric...  I''m *very* concerned about unit testing: when from JUnit to JTiger (underrated in my opinion) to TestNG and will probably focus on JUnit 4 at work now (not my call).

    That said, the person who thinks that 100% code coverage / unit testing shows that a program work has misunderstood something fundamental: successful unit tests don''t prove a program is working.

    However:

    failed unit test proves it''s broken

    That is so fundamental I''m surprised some person so keen on unit testing are missing that.

    Talk to you soon, interesting post :)'
  replies: []
- id: 5845
  author: Bruce Tate
  date: '2006-08-07T15:13:19'
  content: Nice post, Cedric.
  replies: []
- id: 5846
  author: Sebastian
  date: '2006-08-08T01:07:09'
  content: Unfortunately many projects that claim that 100% code coverage is bs don't know their own coverage. If you check it, it's in most cases 0% ("no we haven't run our tests for 3 years") and in others &lt;30% ("yes we have tons of tests and very high coverage")
  replies: []
- id: 5847
  author: Hasko
  date: '2006-08-08T02:27:01'
  content: Aaron, "technical mortgage" is a good term, espcially as Cedric's spam filter doesn't choke on "mortgage" like it does on "l0an". (Hence the funny spelling.) :-)
  replies: []
- id: 5848
  author: Sven Heyll
  date: '2006-08-08T06:24:00'
  content: '_unit_ test != integration test

    so even 100% coverage by unit tests does not imply a well-tested app.

    Unit tests are good for...

    1. detailed design of interfaces and programm-flow

    2. speeding up debugging of multi-tier apps

    3. Bugfixing

    Unit tests are not a useful indicator that an application that behaves like the customers expects it(At least not those that I write).

    I would rather spend more time writing a handful

    of well selected integration and acceptance tests

    than to try to achieve more than 90% unit test coverage.

    My unit tests often tend towards integration tests as the project evolves,

    especially when done for bug-fixing purposes. I alway try to be carefull when deciding wheter it is worth investing time in writing certain tests. I.e. I almost never write tests for

    setters/getters and utility classes with only static methods and no other static fields.

    I try to find the set of most important tests that

    prove that the application is still in a stable state after i.e. a refactoring.'
  replies: []
- id: 5849
  author: BK
  date: '2006-08-08T11:01:47'
  content: 'Great provocating post, Cederic.

    My 2 cents.

    Unit testing(UT) is like doing quality control on the bricks used to construct a palatial structure. Most UT, like JUnit defined their boundary of operation at class level. This is not surprising, because it is at the granularity most familiar and easily accessible to developers.

    But even with perfect bricks, it still going to depends alot on the bricks masons and others with artistic touch to "glue" (i.e integrate) them into a cohesive strong building.

    The key is to understand where are the "test regimes" where it makes sense to have UT and what it does or does not do and how much to invest in it?. 100% UT may not be the best investment; unless it is a public API to be consumed by external customers or inter-team use (aka "common components"). UT is just one part of the equation to build a palace. It is naive to over rely on them or push its use to the extend that the statistics that it presents are no longer relevant or worst, misleading.

    This is to prevent us from getting into a false sense of security with a suite of UT, like the proverbial "Emperor with no(little) clothes...".

    It is an easy trap to fall into.

    Which manager or developer wouldn''t be tempted by  the push of button automation UT suite that tells just tell them the "GO-NO-GO" decision with fancy Green-Red charts/bars?.

    UT is expensive and it is important to establish its most effective regimes. Perhaps instead of using fine tooth comb granularity at class-level, it might be better to write coarse, high-level "UT" at business logic level.

    It is probably most effective during maintenence phase and service releases when bulk of developers have moved on to other new exciting projects like any "software mercenary" would;  with just a small team left to munch on existing code base(read "legacy", isn''t it true it happens to new code?).

    So UT has its place but use it with eyes open and know it limitations.'
  replies: []
- id: 5850
  author: '&#22280;&#22280;&#32433;'
  date: '2006-08-09T23:50:15'
  content: '&#32442;&#32455;&#21697;

    &#22280;&#22280;&#32433;

    &#39532;&#28023;&#27611;

    &#20912;&#23707;&#27611;

    TT&#32433;

    &#22823;&#32922;&#32433;

    &#32701;&#27611;&#32433;

    &#26708;&#23376;&#32433;

    &#21322;&#36793;&#32466;

    &#27874;&#32441;&#32433;

    &#33457;&#33394;&#32433;

    &#27611;&#32442;&#32455;

    &#22260;&#24062;

    &#24125;&#23376;'
  replies: []
- id: 5851
  author: jacson
  date: '2006-08-21T14:28:08'
  content: Hello...i will like to be a hacker too so i want to know and have the softwear please how can i get it OK..
  replies: []
- id: 5852
  author: Robert C. Martin
  date: '2006-09-01T21:09:15'
  content: 'The posting that Cedric quoted was mine.  You can see my response in: http://butunclebob.com/ArticleS.UncleBob.UntestedCodeDarkMatter'
  replies: []
- id: 5853
  author: Rafael Naufal
  date: '2006-09-03T20:00:53'
  content: 'What do you think about TDD? Don''t you think TDD can solve a lot of these kind of problems? I think this way because when you develop software applying TDD, you have a lot of tests all the time and according to TDD rules, you are not allowed to write any production code unless to pass your failing tests. So, you end up writing a test which conforms to every functionality you are intended to have in your system. What do you think about that practice?

    my blog: http://rnaufal.livejournal.com'
  replies: []
- id: 5854
  author: Paul Dietz
  date: '2007-07-09T08:58:27'
  content: 'About random testing, I don''t trust pure random testing,

    What random testing does is find many kinds of bugs with very little effort.  It doesn''t find all bugs, but then neither does any other kind of testing.

    Frankly, I wouldn''t trust any complex piece of software that hadn''t been subjected to some level of random testing.  In my experience most such software will rapidly fail when first exposed to randomized inputs.'
  replies: []
---

Recently, somebody posted an innocent-looking question on the JUnit mailing-list, basically saying that he finds unit testing hard, confessing he doesn't always do it and asking for opinions about whether his situation is normal and if everybody else manages to do testing 100% of the time. 

I have to say, even I underestimated the virulence of the responses that followed. I'll skip the messages along the line of "I test 100% of the time, something is wrong with you" to focus on another response from Robert Martin that crystallizes an extreme attitude that is so detrimental to Java software in general. Here are a few relevant excerpts... 

> Code coverage for these tests should be very close to 100% (i.e. high 90s). If you don't have this, then you don't KNOW that your code actually works. And shipping code that you aren't as certain as possible about is unprofessional. 

That's a bit extreme, but not entirely untrue. What this statement fails to distinguish is that there are several levels of "unprofessionalism". I can think of a few that are way more critical than "shipping code that it not covered by tests": 

  * Missing the deadline. 
  * Shipping code that doesn't implement everything that was asked of you. 
  * Not shipping. 
I don't know about you, but if I have to choose between shipping code that is not covered or even not automatically tested and one of the three options above, I will pick one of the three options. And I would consider anyone else not doing this to be extremely unprofessional. 

> If you don't have this _[code coverage]_ , then you don't KNOW that your code actually works. 

There are plenty of ways to know that your code works. Testing it is one. Having thousands of customers over several years, consecutive successful releases and very few bug reports on your core functionality is another. 

Claiming that only testing or code coverage will tell you for sure that your code works is preposterous. 

> The argument about "TIME" is laughable. It is like saying that we don't have time to test, but we DO have time to debug. That's an unprofessional attitude. 

This seems to imply that there are only two kinds of code: 

  * Code that is tested and works. 
  * Code that is not tested and doesn't work. 
There is actually something in the middle: it's called "Code that is not tested but that works". 

This kind of code is very common, in my experience. Almost prevalent. And this is also why I am convinced that if other circumstances warrant it, it's okay to write the code, ship it and write the tests later. 

It's simple common sense, really: when faced with tough decisions, use your judgment. Your boss is paying you to decide the best course of action with your brain, not to base the company's future on one-liners pulled from a book.
