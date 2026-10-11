---
title: TDD leads to an architectural meltdown around iteration three
date: '2008-03-03T08:45:19'
slug: tdd-leads-to-an-architectural-meltdown-around-iteration-three
categories:
- General
comments:
- id: 7138
  author: Deepak
  date: '2008-03-03T09:57:41'
  content: '"Keep in mind that functional tests are the only tests that really matter to your users"

    Yay! Someone thinks like I do!

    Great book by the way. Any chance there will be an updated version covering more aspects of Enterprise Testing?'
  replies: []
- id: 7139
  author: Teemu A-P
  date: '2008-03-03T10:37:45'
  content: 'I attended an agile architecture by Jim O''Coplien last year and he brought this anti-TDD argument up on the course.

    I was not convinced. The whole argument was a bit of a straw-man. According to the argument TDD is mostly about getting the failing test to pass, and the rest (refactoring) is not included. I guess if one considers design and conscious architectural choices to be forbidden by TDD, then the practice fails..

    I agree on the point that TDD alone does not guarantee quality.'
  replies: []
- id: 7140
  author: orangepips
  date: '2008-03-03T10:56:01'
  content: 'Glad to see that someone who has really done some heavy lifting in the unit testing community call out the zealotry that surrounds TDD. To wit my own experience with TDD:

    orangepips.instantspot.com/blog/2008/03/03/TDD-Backlash'
  replies: []
- id: 7141
  author: Brian Slesinsky
  date: '2008-03-03T12:29:03'
  content: 'Hmm... I do test-first, mostly, but it can just as easily be *functional* test first.  Not everything needs to be unit-tested, but there should be a test somewhere that exercises the code you''re about to write.

    Also, while I don''t think developers should feel bad about not doing TDD, maybe they should feel bad about not *trying* it, because not trying a technique that has worked so well for others shows a basic lack of curiosity and rather complacent attitude about your own performance as a software developer.'
  replies: []
- id: 7142
  author: Scott Hickey
  date: '2008-03-03T14:30:25'
  content: 'My experience with TDD has been positive - over two years on complicated financial calculation engine. It is definitely not a toy. I don''t have a book to hawk or lecture circuit to sell. What I have seen is that, more often than not, when a test was hard to write, it was an indicator of "ugly" coupling in the design. There are no absolutes but having taken this component thru system integration testing, customer acceptance test and then into production, all of the extra effort developing unit and component level tests was well worth the effort.

    This was probably the most complicated component I''ve developed in 20+ years and it resulted in the lowest stress levels I''ve experience in during CAT and production rollout.

    From my point of view, I think your underestimating the value of the "luxury" for the developers. I have experienced and witnessed the infamous coding with fear. Six months into a project, something isn''t right and no one wants to change it because they don''t know what else might break. With new developers, its more like 6 weeks. Being able run test suites, at the unit test level, removes much of the fear and stress that developers feel with making changes in a code base that is bigger than what you can get your head completely around.

    Personally, I love working without all of this stress. Does TDD remove all stress? No. Does it make a real quality of job / life difference? For me and my team on this project, yes, it did.

    Just my 2 cents.'
  replies: []
- id: 7143
  author: ''
  date: '2008-03-03T17:50:07'
  content: 'Iam very happy to see some one stand up against the

    TDD Extremism, From my experience TDD has ruined Design aspect of software development,(esp when it is taken to the other extreme), and when you have already developed complex systems, it is useless , besides, fitting the design to accommodate a test does not look/seem right, people should not follow blindly, they should decide as to appropriate when to use unit test, the only case where i would use TDD are when you have some formula in your code, or some thing simple like calling a webservice...

    for complex system involving many systems no chance...

    i just read article about TestNG , this comes to close as to what iam looking....

    i would love to read your book and use Test NG...

    Keep up the pragamatism.... and the good work related to Test NG.

    Good Luck'
  replies: []
- id: 7144
  author: Dhanji R. Prasanna
  date: '2008-03-03T18:45:33'
  content: 'I have been doing TDD for awhile now, and am beginning to question it seriously. I find myself worrying more about the coverage metric while doing TDD, and less about functional paths through the code. Or specific use cases.

    I am still debating TDD''s merits but I really appreciate your post. It is thoughtful and well written as always. I agree with Brian that people should try (and understand) TDD seriously, before dismissing it.

    But I like to think of unit tests as part of code unlike your statement about them being a luxury, though I take the intended point.'
  replies: []
- id: 7145
  author: Romain Guy
  date: '2008-03-03T23:30:35'
  content: Nice piece C
  replies: []
- id: 7146
  author: Sebastian Jancke
  date: '2008-03-04T00:25:38'
  content: 'Quote:

    >> When it comes to testing, I live by the following rules of thumb:

    * "Tests first" or "tests last" is unimportant as long as there are tests." &lt;&lt;

    Sorry, but you missed the point of TDD. TDD is not about testing, but about specifying verificable behavior! The tool used there - unittesting - is of course not applicable to all situations, and fails, when you cannot isolate your unit under test. Unittesting works with isolatation. UIs not written in the style of MVC (or better: PassiveView or SupervisingController) lack this requirement. Hardware interactions also lack this requirement. Unittesting works for rich domain models, it works for all sort or oo-units, when isolatable.

    -Sebastian'
  replies: []
- id: 7147
  author: alexguev
  date: '2008-03-04T07:00:20'
  content: 'Who''s the extremist ?

    I fail to see Robert C  Martin "extremism" in his writings, whereas I clearly see a very extreme position stated in this blog entry.

    Dumbs up for Sebastian''s comment!

    alex6

    PS: nobody said doing TDD was easy. And yes, TDD is not a Silver Bullet.'
  replies: []
- id: 7148
  author: Cedric
  date: '2008-03-04T08:01:47'
  content: 'Hi Sebastian,

    You''re not the first one to say "TDD is not about testing, it''s about XXX", where XXX can be either of "designing", "process", "quality", etc...  It''s the first time I read "verifiable behavior", though, and I''m still unconvinced.

    Most of the code that I see and work with has verifiable behavior, but this term is so vague that I''m not sure that it means anything anyway...'
  replies: []
- id: 7149
  author: Gabriel C.
  date: '2008-03-04T09:21:23'
  content: 'I noticed the same issue when listening to the refactoring episode of se-radio.net.

    The meltdown is caused by naive use of YAGNI and "do the simplest thing that could possible work", leading to major and expensive refactorings later (and since refactoring focus on code dependency, is even harder to "evolve" it to a good conceptual design). Writing the "test" first is to write an executable specification for the object/component, and that''s very low level design. The test should be the output of the design and not the driver.

    BTW Cedric, I really enjoy your kind of "anti-hype" posts. Your defense of design patterns prompted me to write my own :)'
  replies: []
- id: 7150
  author: Mr:E
  date: '2008-03-04T23:43:55'
  content: 'If you follow TDD naively and think that "do the simplest thing that could possibly work" means taking shortcuts, then of course it will fail. TDD and YAGNI does not tell you that design is unnecessary. Rather it tells you to continously reflect on and improve your architecture. The rythm is "Test, implement, REFACTOR", not "Test, implement, done".

    I completely agree that TDD does not fit everywhere, but I would certainly say if fits in most.

    "...TDD has ruined Design aspect of software development...". Ok, sure. If your big design up front always works, then that''s true...

    Please remember that most agile/XP methods in your toolbox are not processes to follow blindly, but tools to help you improve your software development process. The most important thing is to reflect on what you are doing and why you are doing it.

    Test first and test last makes a difference in my opninon. Why? If I test first, I specify the behaviour of my class/component, and I create code that is loosely coupled and easy to test. If I write the test afterwards, I often find myself refactoring a huge part of the code to allow it to be tested. So I don''t see that this is always a benefit.

    TDD is no silver bullet. You can use it without ignoring the design of your application, as long as you reflect on what you are doing'
  replies: []
- id: 7151
  author: Elizabeth Keogh
  date: '2008-03-05T05:15:05'
  content: '''"Tests first" or "tests last" is unimportant as long as there are tests.''

    I agree.

    How about design first? Is that important? Cos you know, in TDD, tests aren''t really tests...'
  replies: []
- id: 7152
  author: Kelly Anderson
  date: '2008-03-05T09:59:09'
  content: 'TDD is not a silver bullet. It does not excuse you from thinking. Bad programmers are going to write bad code with or without TDD. Good programmers are going to write good code with or without TDD.

    Good programmers who use TDD to the extent that it makes sense are benefited. Lower stress and fear are typically experienced side effects. Perhaps it''s not for everyone, or every situation. I think it''s currently particularly ill suited to multi-threaded programming. Currently, there aren''t super good tools, techniques and teachers for doing TDD towards the GUI. Database programming with TDD requires a lot of work, and may or may not be worth it depending on your situation.

    For most core code, I would argue that it''s net beneficial.

    As you shorten the time between when a bug is created, and when a bug is fixed, the quality of your program improves. TDD is an effective tool in most instances for shortening feedback loops. It also makes your progress more predictable.

    If TDD doesn''t work for you, then you won''t work for me.

    -Kelly'
  replies: []
- id: 7153
  author: Keith Salisbury
  date: '2008-03-05T12:06:44'
  content: 'Great post Micheal!!

    i''m always please to hear someone going against the grain and thinking for themselves as it definitely encourages some good discussions. I have to say that in my experience, i must wholehearted agree with Scott Hickey''s comment:

    "...more often than not, when a test was hard to write, it was an indicator of "ugly" coupling in the design."

    TDD is a tool, as you quite rightly pointed out, but what it really forces is the thought. 99% of coding happens inside your head, and TDD really forces you to consider the interface of your code.

    I agree that it doesnt suit all situations, and being made to feel like a second class coder for not doing it is particularly harsh, but on any code that is likely to be around for more than a couple of months, it will undoubtedly prove invaluable to have a test suite to run when coming back to the code.

    Imaging the rails codebase without it!! Euurgh!!'
  replies: []
- id: 7154
  author: Scott Ambler
  date: '2008-03-05T14:37:57'
  content: 'Sigh.  Sounds like a lot of people are suffering from the dreaded disease "versusitis" (see www.ambysoft.com/essays/versusitis.html ) which limits their effectiveness as professionals.

    Be that as it may, here are some thoughts:

    1. It''s Bob Martin, not Rob Martin.

    2. You can, and should, combine modeling and TDD.  Agile Model Driven Development (AMDD), see  www.agilemodeling.com/essays/amdd.htm , combines the best of both techniques.

    3. AMDD helps to scale the specification aspect of TDD.  See www.ddj.com/architect/205207998?cid=Ambysoft .  Continuous investigative testing scales the validation aspects of TDD.

    - Scott'
  replies: []
- id: 7155
  author: Erik Engbrecht
  date: '2008-03-06T05:05:14'
  content: '> "Tests first" or "tests last" is unimportant as long as there are tests.

    I think a better version would be:  "test first" or "test X" is unimportant as long as they are done in reasonably tight cycles.

    You don''t want to write too much application code without writing associated tests, and you wouldn''t want to write too much test code without writing the associated application code.

    After all, you''re going to spend a lot more time iterating between the two than you are on the initial construction.'
  replies: []
- id: 7156
  author: ''
  date: '2008-03-06T09:13:50'
  content: 'Hi Cedric, a few thoughts;

    -"Tests first" or "tests last" is unimportant as long as there are tests."-

    Timing of testing changes the resulting system surprisingly. Therefore the choice is important. Which choice is better depends on the programmers skill-set, experience, interests and point of view. But it is important.

    -Try to think about testing as early as possible in your development process.-

    Testing is too important to do in a possibility. It should be done early (weather "test first" or "test last").

    -Don''t let one liners contradict your experience. For example, don''t listen to people who tell you to write "the simplest possible thing that could possibly work", also known as YAGNI. If your experience tells you you''re going to need this extra class in the future even if it''s not needed right now, follow your judgment and add it now.-

    Your experience still be there in the future when you need that class. Whether your system is open to a new class or not is absolutely depends on your design quality.

    -Keep in mind that functional tests are the only tests that really matter to your users. Unit tests are just a convenience for you, the developer. A luxury. If you have time to write unit tests, great: they will save you time down the road when you need to track bugs. But if you don''t, make sure that your functional tests cover what your users expect from your product.-

    I agree about functional tests. But unit tests are not only for bug tracking. We have great debuggers for that right? The main purpose of unit tests (for me) is fast feedback. You changed something and not sure system still works. Functional tests take a couple of hours to run, and you don''t want to argue with QA again. What will you do? Well..don''t change anything? :)))

    -Don''t feel bad if you are not doing Test-Driven Development. There are a lot of factors that make this practice a bad fit for a lot of projects and developer personalities-

    I do agree. I''ve worked with many software organisations and programmers which are not fit for TDD. Also I''ve worked with many software organisations and programmers which are not fit for software development at all. I do not mean if one can''t handle TDD he/she can''t handle Software Development. But if something does not fit to someone, this does not mean that thing is not excellent for someone else.

    One important point. If TDD did not gone well for a project this does not mean TDD does not fit that project. It actually mean TDD does not fit to the project team, their style, their point of view, their experience and so. Another agile shop can handle the same project pretty smoothly, there are countless examples around me from all size.'
  replies: []
- id: 7157
  author: Frode
  date: '2008-03-06T13:38:13'
  content: 'Good points Cedric,

    *rant follows*

    Why is there such a strong tendency in this industry to take every useful tool, technique or idea to extremes and turn them into religious mantras? It''s like large swaths of the community suffer from an unethical obsession seeking the "Golden Hammer" to end all discussion about what works in delivering good software.

    On the one hand, the extreme converts are useful to truly explore a given technique and better improve our understanding of far something can be taken, but too often normally bright people get caught up in the times and end up abandoning Common Sense** to follow the latest fad with someone else''s best practices and principles:   Perhaps gaining some experience, adding a valuable tool to their arsenal, but frequently just out of a combination of boredom and rebellion.

    ** oh, lest I forget, I shall make my mark advocating the new Common Sense Driven Development (tm) methodology, and write a trilogy starting with  "Extreme Common Sense Development", follow up with the "Pragmatic Common Sense Developer''s Guide", before I repent with "Common Sense Refactored".'
  replies: []
- id: 7158
  author: Alan Keefer
  date: '2008-03-06T15:47:28'
  content: Good post . . . I largely agree with the general sentiment.  I work at a place (Guidewire Software) that has over 36,000 unit tests running continuously, and we
  replies: []
- id: 7159
  author: Max Guernsey, III
  date: '2008-03-06T17:03:59'
  content: Cedric, are you on the Kansas State Board of Education?
  replies: []
- id: 7160
  author: Scott Bain
  date: '2008-03-06T18:09:12'
  content: 'I think it''s been said well here, but I''ll just add my voice.  Anything that claims to be the magic bullet solution isn''t.  Software is hard, and it requires smart, dedicated people, thinking clearly, communicating with one another, with enthusiasm and creativity.

    I think TDD is a *great* tool, especially if one expects it to deliver in terms of analysis more than QA.  I think all devs should know how to do it, and should know good techniques (mocks, shunts, dependency injection, endo-testing, all that) but it''s not enough by itself.

    -S-'
  replies: []
- id: 7161
  author: MED
  date: '2008-03-06T23:15:46'
  content: 'Mr. Ambler,

    At some point we''ll look back at these all the terms, methodologies, processes et. al. and have a good laugh...I mean AMDD?

    "AMDD helps to scale the specification aspect of TDD"  (uhhh... what?)

    Heck, I''m still wondering whether the acronym TDD stands for "test driven development" or "test driven design"?'
  replies: []
- id: 7162
  author: Muthu Ramadoss
  date: '2008-03-07T23:52:33'
  content: 'At the end of the day, the software must work for the end user. He doesn''t care you did TDD, AMDD, FUD or BAD!

    For the thought leaders of the world:

    Please share your experience with us. But don''t expect us to follow them exactly the way you want us to.'
  replies: []
- id: 7163
  author: Lance Kind
  date: '2008-03-10T19:32:05'
  content: 'I don''t know Jim Coplien.  He sounds like a smart guy since it says "software guru", so that means I''m inclined to listen to him.  For C++ books, I''m more of a Scott Meyers fan myself.  The problem is that I must be doing YAGNI/TDD incorrectly because none of my projects have melted down in iteration three.  What I''m most disappointed in is that Jim says it will be an architectural "melt down".  In my experience, the worst cases have been that I have to do some refactoring and that is nothing on par with "melt down" which brings to mind Chernobyl or the China Syndrome.  If I had a melt down then I''d have a good story to post about, like how the whole architecture melted into a hole and was now at that moment, moving to the center of the Earth.

    That would be cool!

    I''m surprised to see this talk about fanaticism or extremism entering the realm of software development.  Especially Bob Martin, who your are saying, is the "most notorious TDD extremist".  I''m getting the picture of someone with a black bag on his head and waving a machete.  If Bob is going around and chopping off the heads of developers for not doing TDD then that''s too bad.  There was once a project where the entire team was doing TDD except for one guy.  People were getting fed up with him but all we did is ask that he be removed from the project.  I didn''t know there were people running around with machetes.

    And Bob is the most notorious?  Does the FBI have him on a list?  Here I thought he was just a software developer who was trying to get people in alignment on good engineering practices.  I didn''t know he was a ring leader of people who strap bombs to their chests and blow up cafes.  Are you really sure about this?

    I''m glad I''m not a TDD extremist since you say that their job description is for writing stack classes and going to conferences.  That''s way less interesting than writing multi-tiered enterprise applications.  Also I don''t have any of the right equipment like a machete or a black bag that fits my head.  (Unless having a snowboard and a helmet counts.)

    I like bullet 2 in the "rules of thumb".  If followed correctly, that means you are doing TDD.

    Here are comments on the other bullets:

    ******

    I don''t agree with bullet 1 because you will develop more tests if you write them first.  Perform some TDD by pairing with a good practitioner and I know you will agree.  I recommend Bob Martin, but be sure to have Homeland security around in case he gets all extremist.

    Bullet 3 -- YAGNI is a very useful tool for preventing people from spiraling to complexity.  People who don''t like YAGNI probably don''t like working with someone who says they''re design is more complex than necessary.  If you work with others and can''t justify the strange, super-fly architecture you want to build, then you won''t like YAGNI.

    Bullet 4 isn''t on the mark.  The only thing that matters to your users is that the application is useful.  This also implies that the application is of sufficient quality so you aren''t wasting their time.  Unit testing as well as functional testing are ways to achieve this quality.  Unit testing will scale to far more code coverage than functional testing.  So unit testing is very important too.

    Bullet 5 -- You should feel bad if you are developing low quality code.  Don''t worry, you''ll still find places that figure if you can write code, you can make quality someone else''s problem.  If you practice TDD, you are addressing quality as soon as possible.  You are also doing testing as soon as possible (bullet 2, remember).  As far as the comment about where TDD is a bad fit, there aren''t many....  TDD is harder to do in some circumstances than others.  The biggest circumstance is where an architect/developer is trying to make something more complicated than it has to be, or they are mixing concerns by writing super big methods, or they are coupling their code to other classes instead of writing nicely decoupled code.  Yes, TDD forces you to architect better and some people don''t like to do that.  They''d rather do it their way and throw the code over the wall to make it someone else''s problem.

    Another common misconception (I''m not sure if you share this one) is that TDD means writing a slew of tests first.  This is a violation of YAGNI.  You write the simplest test first, then write the simplest piece of code to make it pass, then start back writing a new simplest test.  About three tests in, you have some pretty sophisticated code.  You keep at it, and after a while, you are done.  :-)

    I look forward to your future posting on Pair Programming Conspirators.

    Lance Kind

    Practicing TDD since 1999

    Extremist free since 1970

    Spin Free since ????'
  replies: []
- id: 7164
  author: Lance Kind
  date: '2008-03-10T19:35:30'
  content: 'I don''t know Jim Coplien.  He sounds like a smart guy since it says "software guru", so that means I''m inclined to listen to him.  For C++ books, I''m more of a Scott Meyers fan myself.  The problem is that I must be doing YAGNI/TDD incorrectly because none of my projects have melted down in iteration three.  What I''m most disappointed in is that Jim says it will be an architectural "melt down".  In my experience, the worst cases have been that I have to do some refactoring and that is nothing on par with "melt down" which brings to mind Chernobyl or the China Syndrome.  If I had a melt down then I''d have a good story to post about, like how the whole architecture melted into a hole and was now at that moment, moving to the center of the Earth.

    That would be cool!

    I''m surprised to see this talk about fanaticism or extremism entering the realm of software development.  Especially Bob Martin, who your are saying, is the "most notorious TDD extremist".  I''m getting the picture of someone with a black bag on his head and waving a machete.  If Bob is going around and chopping off the heads of developers for not doing TDD then that''s too bad.  There was once a project where the entire team was doing TDD except for one guy.  People were getting fed up with him but all we did is ask that he be removed from the project.  I didn''t know there were people running around with machetes.

    And Bob is the most notorious?  Does the FBI have him on a list?  Here I thought he was just a software developer who was trying to get people in alignment on good engineering practices.  I didn''t know he was a ring leader of people who strap bombs to their chests and blow up cafes.  Are you really sure about this?

    I''m glad I''m not a TDD extremist since you say that their job description is for writing stack classes and going to conferences.  That''s way less interesting than writing multi-tiered enterprise applications.  Also I don''t have any of the right equipment like a machete or a black bag that fits my head.  (Unless having a snowboard and a helmet counts.)

    I like bullet 2 in the "rules of thumb".  If followed correctly, that means you are doing TDD.

    Here are comments on the other bullets:

    ******

    I don''t agree with bullet 1 because you will develop more tests if you write them first.  Perform some TDD by pairing with a good practitioner and I know you will agree.  I recommend Bob Martin, but be sure to have Homeland security around in case he gets all extremist.

    Bullet 3 -- YAGNI is a very useful tool for preventing people from spiraling to complexity.  People who don''t like YAGNI probably don''t like working with someone who says they''re design is more complex than necessary.  If you work with others and can''t justify the strange, super-fly architecture you want to build, then you won''t like YAGNI.

    Bullet 4 isn''t on the mark.  The only thing that matters to your users is that the application is useful.  This also implies that the application is of sufficient quality so you aren''t wasting their time.  Unit testing as well as functional testing are ways to achieve this quality.  Unit testing will scale to far more code coverage than functional testing.  So unit testing is very important too.

    Bullet 5 -- You should feel bad if you are developing low quality code.  Don''t worry, you''ll still find places that figure if you can write code, you can make quality someone else''s problem.  If you practice TDD, you are addressing quality as soon as possible.  You are also doing testing as soon as possible (bullet 2, remember).  As far as the comment about where TDD is a bad fit, there aren''t many....  TDD is harder to do in some circumstances than others.  The biggest circumstance is where an architect/developer is trying to make something more complicated than it has to be, or they are mixing concerns by writing super big methods, or they are coupling their code to other classes instead of writing nicely decoupled code.  Yes, TDD forces you to architect better and some people don''t like to do that.  They''d rather do it their way and throw the code over the wall to make it someone else''s problem.

    Another common misconception (I''m not sure if you share this one) is that TDD means writing a slew of tests first.  This is a violation of YAGNI.  You write the simplest test first, then write the simplest piece of code to make it pass, then start back writing a new simplest test.  About three tests in, you have some pretty sophisticated code.  You keep at it, and after a while, you are done.  :-)

    I look forward to your future posting on Pair Programming Conspirators.

    Lance Kind

    Practicing TDD since 1999

    Extremist free since 1970

    Spin Free since ????'
  replies: []
- id: 7165
  author: Wilfred Springer
  date: '2008-03-12T01:04:55'
  content: 'Somebody commented that TDD is not a silver bullet. That may be true, but it''s interesting to note that during OOPSLA last year, there seemed to be general agreement that it is probably the best approximation of a silver bullet, compared to all of the other tools and mechanisms that claimed that title over the course of the last 50 years.

    Check out Brian Foot''s talk on Big Balls of Mud (www.laputan.org/) and some footage of the panel discussion at Youtub (www.youtube.com/watch?v=Z-1X3duvryA)'
  replies: []
- id: 7166
  author: Robert Matthews
  date: '2008-03-14T15:29:17'
  content: 'I believe that what was said at OOPSLA was that good OO design/practice/code, not TDD, was closer to a silver bullet than all other things that have made a claim on the title.

    I''m a believer in TDD because I think that it helps drive better OO designs & code.

    -Robert'
  replies: []
- id: 7167
  author: William Martinez Pomares
  date: '2008-03-23T17:53:23'
  content: 'TDD as micro-design Driver.

    Hi Cedric.

    I saw this post and your presentation at QCon.

    I guess there is not discussion about to use or not to use TDD, but there is one about TDD being a required solution to all projects, or if it is a silver bullet or not.

    Frankly, I rather take a good idea and analyze it for great and weak points. TDD, as you mention, may be not that bad after all if used in the correct place, at the correct time, and those are not everywhere, everytime.

    I see three actual momentums of development, that generate three designs (each one in its own level): Strategic (Architectural) design, Tactical Design and Operational Design (Design at development). In one of my posts (acoscomp.com/wblog//index.php/a/2008/03/23/tdd_or_not_tdd) I expose the use of TDD as a good methodology for the last one, but not actually for Tactical nor strategic design.

    That is, we shouldn''t buy TDD or discard it, I guess we can incorporate it to our development cycle, if used correctly and at the correct level, in a way it wont melt anything important.

    William.'
  replies: []
- id: 7168
  author: Scott C Reynolds
  date: '2008-06-19T13:47:12'
  content: 'My team uses TDD to create life-critical medical applications. Either you have offended me by implying that this is a "toy application" or you are grossly misunderstanding, unimaginative, and/or unpracticed in the real concerns and practice of TDD.

    Telling people to focus on the release and that they don''t have to feel bad for not worrying about quality up front (which is, in fact, what you have done) is akin to spreading malpractice.

    ps your comment submission form could have used some testing of any kind, as I have had to significantly edit relevant words.'
  replies: []
- id: 7169
  author: Marco Rentier
  date: '2009-07-20T13:34:26'
  content: 'Test driven design does not replace specifications or architecture. On many projects I have saved the project by looking ahead and developing what''s needed from an architecture standpoint rather than what was strictly needed from an end-user standpoint. When you are building a house, do you only build what the owner asks for (if they forgot to ask for a foundation, you don''t provide one) or do you provide what they requested plus everything else that you know is needed for building a solid house that follows building codes? problem for most software development projects is that there are no building codes.

    Testing is nothing more than taking a sample. It does not prove that your code is working correctly. It actually doesn''t even proof that the particular scenario you tested works correctly. It just shows that at the time you executed the test you observed the described results. With a black box there is always the possibility of non-deterministic behavior, and thus your test outcomes are not guaranteed to be repeatable.

    So, TDD has it''s place. But TDD is not an excuse for developers not to learn more than just coding. I have seen way too many developers who can write code (as in that they know a programming language), but that''s about where it stops. Just view sofwtare development as an engineering discipline and pick the tools and methodologies appropriate for the job. If TDD fits that, great, if not, also great.'
  replies: []
- id: 7170
  author: Nick
  date: '2009-11-04T15:10:01'
  content: 'Just sounds like people are trying to be argumentative.

    Tests are not test, but more of a design document. Their purpose is not only to demonstrate to "debuggers" the purpose of the code, but to also document behaviors. Developer''s should not be writing for every caveat, but more of general behaviors.

    With that in mind 80% of this article''s and comments arguments don''t apply.

    I don''t feel the author and many of the people commenting have taken a real look at what TDD''s original intent was.

    Although it could also be the speakers are taking it in a direction, it wasn''t intended in the first place.

    We use TDD is a global engineering application and it fits great. I''d like to hear what real world applications it would not fit into.

    Typically we develop the Use Case and Sequence Diagrams and develop Test''s from them. And it works very well.

    My thoughts,

    Nick'
  replies: []
- id: 7171
  author: Peter Bell
  date: '2011-06-15T13:49:00'
  content: 'I''ve been thinking a lot about TDD and ATDD recently. Just started as CTO of a startup and I''m using Rails for the project. We have tight deadlines, right now I *am* the coding team, and I''m still getting my TDD chops using Ruby and Rails (I have more experience doing it in other languages).

    First I started rigid ATDD. We had a big pivot at the end of the first week of serious coding (week 2). Pretty much all of the tests and the code were irrelevant and I decided to try to follow Obie''s approach and to treat it like a spike. Hack for a couple of weeks and then add tests for the stuff the business team really wanted. I couldn''t do it.

    I got about 4 days in before I started finding the complexity in my object model and validation and other rules just made me completely uncomfortable, so I started back filling specs - first for the model, then I dropped in some routing tests just for an easy win. Still not got my controller or cucumber tests in as I need to figure out how to mock out my auth provider. It''s only a couple of hours, but I''m trying to focus on stories, but I''ve brought in a friend to help out and I''d expect to have full acceptance and unit tests by early next week.

    And I find myself just naturally flowing into writing the spec first, writing the simplest thing that will pass, refactoring and then adding the next spec. I can''t imagine any quicker way to get well designed code that happens to be well tested ("correctness is a side effect :) ).

    This doesn''t mean I bury my head in the sand. We have a graph shaped problem and I wasn''t ready to build everything using neo4j, so I did some upfront modeling about how best to handle 2 level deep graph queries (ended up with an event sourcing/CQRS influenced approach) and I absolutely kick back for half an hour or an hour here and there to chat about data models and to white board stuff. But then I go back to the stories, the specs and the simplest code - within the architectural direction I''m using - that will solve the problem, and I just can''t imagine how I could handle the complexity I''m working with effectively without a primarily test first approach.

    Sometimes if I''m learning about testing a particular thing and that gets in the way of my weekly deliverable, I''ll allow myself to get a few hours of coding ahead of my specs by writing the specs but not implementing them, but in general I''m writing the specs first and it''s just an awesome flow.

    Just to ask the OP, how many hundreds of hours have you logged doing TDD? What languages and tools were you using?'
  replies: []
- id: 7172
  author: jrochkind
  date: '2011-06-15T16:48:26'
  content: '@Gabriel "Writing the ??test?? first is to write an executable specification for the object/component, and that??s very low level design. The test should be the output of the design and not the driver."

    This makes a lot of sense to me, but my problem in following it is that I can''t come up with a good design without writing some code first and seeing how it works out. I can''t come up with a good design just pie in the sky abstract in my head (that starts to remind me of ''waterfall'') too, I have to write some code and see what the implications are on perfect, then completely (or just slightly) refactor and change the design, etc.

    I mean, the test-write-refactor order assumes SOME changing of the design after testing -- that''s what refactoring is to some extent. But it assumes you won''t change the parts of the design that that the tests touch. And that seems unrealistic to me.

    So I end up writing some stuff, refactoring it, refactoring it some more --- then when I''m happy with the design, writing tests, THEN fleshing out all the edge cases and bells and whistles (that I can write tests first for).

    If the design is already fundamentally in place, and you''re just taking care of edge cases, or fixing bugs, or adding some bells and whistles, then TDD works great. But when you''re starting from a blank slate (or at least a slate blank in the part you''re adding significant new architecture to), or majorly re-factoring/re-architecting to deal with new paths, TDD doesn''t work for me.'
  replies: []
- id: 7173
  author: Peter Bell
  date: '2011-06-16T03:37:51'
  content: '@jrochkind well, TDD doesn''t have to work for every problem or every person, but just to ask, how did you go about getting test infected? How long did you pair with an experienced TDD developer who knew the tools and techniques in your domain, language and framework of choice?

    For web apps, I find that I *always* did something like ATDD. The difference is that now I use automated tests and save a lot of clicking. First story is registration. First step is go to reg page. Low level implementation of the first assertion is that there is a div with an id of registration_welcome_message.

    But I have no route, controller or view. So I write a unit test for each (sometimes I skip views depending), then I''m passing the first step of my first scenario. Now I uncomment the next step (register and get "thanks for reg" screen) and write the tests and code to make that work. Then I add more scenarios for duplicate emails and the like - most of which I deal with at a unit level, some of which I deal with at a higher level.

    As for the model, you can infer what model info you need by the info you need to display, filter on or order by in the views. Of course, every so often you have to take a little "design break" to think a bit ahead (or to be fair I don''t know that you have to do it, but I find it useful once in a while). But generally the code is driven by the requirements of the tests. It also makes sure you don''t have code that doesn''t need to be there and that out of the box your code is designed to be easy to test.

    I personally got the most value from pairing with various people who were better than me at TDD in a given language/framework. If you haven''t done that for at least 10-20 hours just to get a feel, it might be worth considering . . .'
  replies: []
- id: 7174
  author: Andy
  date: '2011-06-16T22:04:58'
  content: Very interesting article and associated comments. I've been a developer for over 30 years, way before unit tests, agile, patterns, tdd etc became mainstream. I have always considered these to be aids to producing or communicating good software not the answer. Recent experiences with developers strictly following tdd has lead to a tripling of the development time for features because they were unable to work with existing frameworks and libraries that had been built using the tdd principles. I havent used tdd, I am not a bad person or unprofessional. All the software I have produced has had very few issues, has coped well with extending functionality, is easy to work with and maintainable. Surely these processes are just a way of communicating good ideas around how to solve common problems and a not supposed to become a religion.
  replies: []
- id: 7175
  author: Eyal
  date: '2011-06-17T10:21:51'
  content: 'On the lighter side of this discussion -

    If Test Driven Development were Applied in Other Areas of Engineering:

    http://theleek.net/software-humor-blog/agile/test-driven-development/'
  replies: []
- id: 7176
  author: Toni
  date: '2011-06-18T23:49:03'
  content: 'I''m currently writing more integration or behavioral tests. With integration test I test the end to end functionality from the moment the message is received to the action that touches the database (in memory db in tests) and I can verify that the end result (e.g. row in a database) is correct.

    With behavioral tests I''m just checking that something happens (email sending service is called etc.) instead of checking every parameter and specific detail.

    For algorithms, complex regexps etc. I can write simple unit tests which are fast and to the point.'
  replies: []
- id: 7177
  author: John
  date: '2011-11-04T16:01:07'
  content: Fanatics, how about zealots. I mean I think TDD and incremental design is good but if you have conversations about TDD zealots will make it seem as if there is some divine meaning to the whole thing. TDD and Agile are good techniques but why does it have to be a religion. There are people who don't fully agree with TDD and are still good developers (Rick Hickey for instance). I see danger here.
  replies: []
- id: 7178
  author: Gustav
  date: '2012-03-26T20:12:47'
  content: 'I tend to attribute extremist mindsets to lack of knowledge. For example, one of my co-workers is a hard-core nhibernate supporter. He would use it everywhere in his development, even where it seems to complicate things rather than solving them. I later found out that he is not capable of writing even simple SQL.

    Back to the TDD topic, there is a similar issue here. Some developers with little experience (or I should say, little diversity of tools in their experience) tend to read new trends and adopt them as if they were the unveiled truth. On the contrary, people with more experience will see TDD as what it is, an option, that may be useful to a certain degree, and that one should not base his development on it.'
  replies: []
---

These are the words from software guru Jim Coplien, who penned some of the most influential C++ books in the 90's. The [exact quote](http://www.infoq.com/interviews/coplien-martin-tdd) is: 

> TDD done strictly from the YAGNI principle leads to an architectural meltdown around iteration three. 

It's very refreshing to see the anti-TDD movement gather up some momentum, and I particularly enjoyed [the discussion between Jim and Bob Martin](http://www.infoq.com/interviews/coplien-martin-tdd), the notorious TDD extremist who thinks that every software developer who doesn't TDD every single line of code she writes is unprofessional. 

Jim and Bob had an interesting debate recently, which you can find transcribed at [InfoQ](http://www.infoq.com/interviews/coplien-martin-tdd). I have to give credit to Jim for his civility as he faces Bob, whose arguments never suffered much tolerance for people who don't agree with his views. 

I have been bothered by TDD for a long time now, and my skepticism and even opposition to some of its effects can be found either in the presentation I made with Alexandru at InfoQ called [Designing for Testability](http://www.infoq.com/presentations/beust-popescu-designing-for-testability) or more recently, in the [book I co-authored with Hani Suleiman](http://www.amazon.com/Next-Generation-Java-Testing-Advanced/dp/0321503104/ref=pd_bbs_sr_1?ie=UTF8&s=books&qid=1204561793&sr=8-1). 

Having said that, don't expect me to become Bob Martin's counterpart. I certainly don't believe you should never use TDD, but I do believe that the benefits associated to TDD are vastly exaggerated and that the software community needs to keep in mind that TDD is just a tool, and that as a tool, it's not adapted to all situations. I especially dislike the efforts of TDD extremists who are trying to make developers feel bad whenever they don't use TDD, or lead them to think that something is wrong with the way they write their software. 

If anything, it seems to me that most of these TDD extremists have been talking to conferences for too long and have become way too comfortable writing Stack classes or code that calculates the score of a bowling game. These toy applications are easy and they make TDD shine, but don't be surprised if your audience leaves the room scratching their heads and wondering how they can apply it to their real job. Good luck using TDD to write a mobile application or to interface with a mainframe that needs to handle hundreds of thousands of two-phase commit transactions spreading over three continents while thread contention remains to a minimum. 

I don't know about you, but I'm getting a bit tired of fear mongering in the software community, whether it comes from TDD fanatics or from [people who claim they wouldn't hire someone who doesn't use a Mac for development](http://www.loudthinking.com/arc/000433.html). 

When it comes to testing, I live by the following rules of thumb: 

  * "Tests first" or "tests last" is unimportant as long as there are tests. 

  * Try to think about testing as early as possible in your development process. 

  * Don't let one liners contradict your experience. For example, don't listen to people who tell you to write "the simplest possible thing that could possibly work", also known as YAGNI. If your experience tells you you're going to need this extra class in the future even if it's not needed right now, follow your judgment and add it now. 

  * Keep in mind that functional tests are the only tests that really matter to your users. Unit tests are just a convenience for you, the developer. A luxury. If you have time to write unit tests, great: they will save you time down the road when you need to track bugs. But if you don't, make sure that your functional tests cover what your users expect from your product. 

  * Don't feel bad if you are not doing Test-Driven Development. There are a lot of factors that make this practice a bad fit for a lot of projects and developer personalities (aspects which are very often never mentioned by TDD extremists). 


Don't let extremists make testing a chore, because it can truly be one of the most rewarding aspects of our profession if you exercise it with judgment.
