---
title: The pitfalls of Test-Driven Development
date: '2014-05-11T07:42:15'
slug: the-pitfalls-of-test-driven-development
categories:
- General
comments:
- id: 9796
  author: Guillaume Laurent
  date: '2014-05-11T09:24:14'
  content: 'I agree with pretty much everything here. While TDD is supposed to be a staple of agile development, I understand that it lets you validate your changes quickly by giving you a coherent test suite (in theory), but in practice it makes code way more complicated to design and write, as you point out.

    Also, testing UIs still being a huge PITA, I''ve never seen (or even heard of) UI-related code being developed in this manner.'
  replies: []
- id: 9797
  author: Emanuele
  date: '2014-05-11T10:04:04'
  content: 'I read dhh''s article last week and I had the chance to see the hangout between Martin, Fowler and dhh himself.

    dhh was more about the way he programs. He prefers pen and paper and probably wants to explore deeper the requirements and this pretty complies with your vision of why a library (let''s call RoR a library for the sake of the argument) is not the right candidate for TDD.

    I have to say though that TDD really fits when you are working with Scrum in a "standard" company. Usually our priorities change at each sprint so the YAGNI applies quite well in our situation and even they don''t change we create stories (for new feature) that you could do in less the three working days so it''s pretty impossible to have the need to refactor everything at once.

    That said TDD does not fit everything. If I''m developing a sorting algorithm for a tree, I won''t use TDD because probably I need to implement a well known algorithm so I''ll use tests just for acceptance.

    What I''m trying to say is that we are engineers and we are professionals, so, as long as you can ship what you are asked, you can use alternatives to TDD.

    I will stick with TDD because I found it to be really functional for the type of programming I do.'
  replies: []
- id: 9798
  author: TDD is not the Failure, our Culture of Development Is | Marc Clifton
  date: '2014-05-11T13:20:38'
  content: '[&#8230;] this article TDD is dead. ??Long live testing. ??and a subsequent response The pitfalls of Test-Driven Development, both authors are??missing the mark by a mile, IMO. In the real world, walking into an existing [&#8230;]'
  replies: []
- id: 9799
  author: Eric James Michael Ritz
  date: '2014-05-11T20:07:54'
  content: '&gt; Test-Driven Development cripples library development because its principles are at odds with the very concept of designing libraries: think of things that users are going to need.

    As a developer I vehemently disagree with the idea that TDD "cripples" libraries.  The more tested a library, the more confidence I have in it to do what it claims to do.'
  replies: []
- id: 9800
  author: Articles for 2014-May-12 | Readings for a day
  date: '2014-05-11T20:47:03'
  content: '[&#8230;] The pitfalls of TDD [&#8230;]'
  replies: []
- id: 9801
  author: Aivars
  date: '2014-05-11T21:36:42'
  content: Your first point reminds me of Sudoku solvers (http://ravimohan.blogspot.com/2007/04/learning-from-sudoku-solvers.html)
  replies:
  - id: 9802
    author: Cedric
    date: '2014-05-11T21:41:06'
    content: Yes, the Sudoku debacle was pretty embarrassing for TDD.
    replies: []
- id: 9803
  author: Dimitrios Kalemis
  date: '2014-05-11T21:56:10'
  content: I agree with everything the author writes.
  replies: []
- id: 9804
  author: Sharath Shetty
  date: '2014-05-11T22:09:23'
  content: 'It is a tool for a specific purpose. But then people end up falling in love with the tool. For a guy carrying a hammer, everything looks like a nail. It becomes a religion instead of a tool. That is how it goes wrong.

    In the early 90s, there were 3 stars in the horizon, Grady Booch, Ivar Jacobson &amp; Jim Rumbaugh. These were considered the gurus of Object Orient Methodology. Each was peddling his own brand of symbols, path, DOs and DONTs, etc. The old waterfall based SDLC was under attack by these luminaries. There were some lesser known ones like Shlaer Mellor and Fusion methodology too.

    In the first few years of my career, I bounced through all these competing schools of thought. Then I got really tired, and started using common sense. Somewhere in late 90s, the 3 musketeers decided to settle their differences and came together to create the next great methodology religion. The UML! By then I had become quite suspicious of such dogmatic approaches, and decided not to join anymore methodology religions and cults.

    When a methodology makes people think "following process" is the actual output [irrespective of the real output], it has crossed over to the cult zone. [play the twilight zone theme here]

    The Agile, Scrum, TDD &amp; XP came much later. But I have become agnostic, so I keep away and, stay happy and content using common sense.'
  replies: []
- id: 9805
  author: Theo
  date: '2014-05-11T22:17:29'
  content: 'Firstly, I agree with the article. TDD can overcomplicate things, especially when working on large projects.

    Some people miss the point when defending TDD. We''re not saying testing is a bad idea. Code should be tested somehow - it''s how you choose your test approach and TDD is horrible.'
  replies: []
- id: 9806
  author: Werner de Jong
  date: '2014-05-11T23:18:14'
  content: 'Although I agree with some of the examples I also think that TDD is a very useful tool while developing. The same with riding a bike. If you never learn how to ride a bike, you will never be able to ride it. You may have strong opinions about other people riding a bike. Its dangerous and a menace to traffic etc. etc. but you wont ever grasp why people want to ride a bike.

    The same is applicable to TDD. If you have never done it in fully, you wont ever be able to do it.

    Secondly,m in my opinion, development and design are two fundamentally different things. You can design small parts of code based upon your own experience and what you can influence but not the full system.

    The example of the building is a poor one. It advocates that a construction worker should design a bridge. In my opinion the two do not mix and are not what TDD is about. You have the design of the entire bridge but while building you come across a problem, the river bank is not able to support the projected weight. How we know this? We have tried it out and studied the result of the trial. We need to adapt a small part and invent a solution on the spot.

    Morale of the example. TDD is a tool any developer should be able to wield and not the solution to all problems known to mankind.'
  replies: []
- id: 9807
  author: Salman
  date: '2014-05-11T23:34:35'
  content: 'I somehow completely agree with the article even though i favoured TDD over anything since i started agile development, so it means we are better off with simpler extensible design of our software without focusing too much on TDD.

    one of my colleague missed his deadline because he was too much in love with TDD and ultimately he visited every piece of code to furnish his test cases over and over again, although his code was good but the software was missing key components that should have been part of it. just because he spent too much time on TDD.'
  replies: []
- id: 9808
  author: Celinio Fernandes
  date: '2014-05-11T23:47:34'
  content: 'I completely agree with you : the benefits of TDD are very debatable and i thank you for writing about it, like others have done before.

    A few years ago, during an interview for a project, someone asked me if i knew what TDD is and what i thought of it. I answered that I knew what it is and that I did not think much of it. The guy was very much into TDD so the rest of the interview was about coding together a solution for a small problem in Eclipse using a TDD approach.

    At the end of the interview, i was still not convinced by TDD and I had to pretend that i liked the TDD approach because he was very much into it and because at that time almost everybody was talking about it in a very positive way.

    But these days people are expressing their dislike of the TDD approach and I am quite happy about it. I do not need to hide anymore.

    Spending time trying to first find a test case in order to come with a robust solution in the end is a waste of time in my opinion.'
  replies: []
- id: 9809
  author: Tahir Khalid
  date: '2014-05-11T23:49:09'
  content: 'I agree with both posts only because I have experienced that over engineering and complexity...it keeps people in a job at the end of the day.

    The problem is that many enterprise development scenarios use TDD, almost religiously and will crucify you if you dare to speak up against their mantra - that''s good but it doesn''t fit every model and I can''t help but think that it keeps people in their positions and jobs because the whole package is so complicated (SCRUM, TDD etc).

    I much prefer the Agile approach of a smaller team where we don''t have the luxury of time hence not enough time to scaffold up the various tests first or during development time so we either test last or in some cases throw it into an accepted Alpha stage for the customer to feedback on.

    Agile here means being adaptive and using what works, not repeating verbatim some mantra because its what everyone else is doing.

    However that is not to say that we shouldn''t be coding efficiently.  Our code should be engineered in such a way that it lends towards TDD and the first actual testing and developer does is in the head as we bring to life an often evolving vision in our minds (well most of us, the rest are just automatons who are perfect for the whole SCRUM Master, Slave Coder mentality haha).

    This feels all too Orwellian'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/nuclear-mushroom.jpg)

A few days ago, David Heinemeier Hansson posted [a very negative article on Test-Driven Development](http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html) (TDD) which generated quite a bit of noise. This prompted Kent Beck [to respond](https://www.facebook.com/notes/kent-beck/rip-tdd/750840194948847) with a Facebook post which I found fairly weak because it failed to address most of the points that David made in his blog post. 

I have never been convinced by TDD myself and I have expressed my opinions on the subject repeatedly in the past ([here](http://beust.com/weblog/weblog/2008/03/03/tdd-leads-to-an-architectural-meltdown-around-iteration-three/) and [here](http://beust.com/weblog/weblog/2006/06/07/agile-people-still-dont-get-it/) for example) so I can't say I'm unhappy to see this false idol finally being questioned seriously. 

I actually started voicing my opinion on the subject in [my book](http://www.amazon.com/Next-Generation-Java-Testing-Advanced/dp/0321503104/ref=pd_bbs_sr_1/104-7105897-1187923?ie=UTF8&s=books&qid=1193417110&sr=8-1) in 2007, so I thought I'd reproduce the text from this book here for context (with a few changes). 

###  The Pitfalls of Test-Driven Development 

I basically have two objections to Test-Driven Development (TDD). 

  1. It promotes microdesign over macrodesign. 
  2. It's hard to apply in practice. 
Let's go over these points one by one. 

####  TDD Promotes Microdesign over Macrodesign 

Imagine that you ask a famous builder and architect to construct a sky scraper. After a month, that person comes back to you and says 

> "The first floor is done. It looks gorgeous; all the apartments are in perfect, livable condition. The bathrooms have marble floors and beautiful mirrors, the hallways are carpeted and decorated with the best art." 
> 
> "However," the builder adds, "I just realized that the walls I built won't be able to support a second floor, so I need to take everything down and rebuild with stronger walls. Once I'm done, I guarantee that the first two floors will look great." 

This is what some premises of Test-Driven Development encourage, especially aggravated by the mantra "Do the simplest thing that could possibly work," which I often hear from Extreme Programming proponents. It's a nice thought but one that tends to lead to very myopic designs and, worst of all, to a lot of churn as you constantly revisit and refactor the choices you made initially so they can encompass the next milestone that you purposefully ignored because you were too busy applying another widespread principle known as "You aren't going to need it" (YAGNI). 

Focusing exclusively on Test-Driven Development tends to make programmers disregard the practice of large or medium scale design, just because it no is longer "the simplest thing that could possibly work". Sometimes it does pay off to start including provisions in your code for future work and extensions, such as empty or lightweight classes, listeners, hooks, or factories, even though at the moment you are, for example, using only one implementation of a certain interface. 

Another factor to take into consideration is whether the code you are writing is for a closed application (a client or a Web application) or a library (to be used by developers or included in a framework). Obviously, developers of the latter type of software have a much higher incentive to empower their users as much as possible, or their library will probably never gain any acceptance because it doesn't give users enough extensibility. Test-Driven Development cripples library development because its principles are at odds with the very concept of designing libraries: think of things that users are going to need. 

Software is a very iterative process, and throwing away entire portions of code is not only common but encouraged. When I start working on an idea from scratch, I fully expect to throw out and completely rewrite the first if not the first two versions of my code. With that in mind, why bother writing tests for this temporary code? I much prefer writing the code without any tests while my understanding of the problem evolves and matures, and only when I reach what I consider the first decent implementation of the idea is it time to write tests. 

At any rate, test-driven developers and pragmatist testers are trying to achieve the same goal: write the best tests possible. Ideally, whenever you write tests, you want to make sure that these tests will remain valid no matter how the code underneath changes. Identifying such tests is difficult, though, and the ability to do so probably comes only with experience, so consider this a warning against testing silver bullets. 

Yes, Test-Driven Development can lead to more robust software, but it can also lead to needless churn and a tendency to over-refactor that can negatively impact your software, your design, and your deadlines. 

####  TDD Is Hard to Apply 

Test-Driven Development reading material that I have seen over the years tends to focus on very simple problems: 

  * A scorecard for bowling 
  * A simple container (`Stack` or `List`) 
  * A Money class 
  * A templating system 
TDD works wonders on these examples, and the articles describing this practice usually do a good job of showing why and how. 

What these articles don't do, though, is help programmers dealing with very complex code bases perform Test-Driven Development. In the real world, programmers deal with code bases comprised of millions of lines of code. They also have to work with source code that not only was never designed to be tested in the first place but also interacts with legacy systems (often not written in Java), user interfaces, graphics, or code that outputs on all kinds of hardware devices, processes running under very stringent real time, memory, network or performance constraints, faulty hardware, and so on. 

Notice that none of the examples from the TDD reading materials fall in any of this category, and because I have yet to see a concrete illustration of how to use Test-Driven Development to test a back-end system interacting with a 20-year-old mainframe validating credit card transactions, I certainly share the perplexity of developers who like the idea of Test-Driven Development but can't find any reasonable way to apply it to their day jobs. 

TestNG itself is a very good candidate for Test-Driven Development: It doesn't have any graphics, it provides a rich programmatic API that makes it easy to probe in various ways, and its output is highly deterministic and very easy to query. On top of that, it's an open source project that is not subject to any deadlines except for the whims of its developers. 

Despite all these qualities, I estimate that less than 5% of the tests validating TestNG have been written in a TDD fashion for the simple reason than code written with TDD was not necessarily of higher quality than if it had been delivered "tests last." It was also not clear at all that code produced with TDD ended up being better designed. 

No matter what TDD advocates keep saying, code produced this way is not intrinsically better than traditionally tested code. And looking back, it actually was a little harder to produce, if only because of the friction created by dealing with code that didn't compile and tests that didn't pass for quite a while. 

####  Extracting the Good from Test-Driven Development 

The goal of any testing practice is to produce tests. Even though I am firmly convinced that code produced with TDD is not necessarily better than code produced the traditional way, it is still much better than code produced without any tests. And this is the number one lesson I'd like everybody to keep in mind: how you create your tests is much less important than writing tests in the first place. 

Another good quality of Test-Driven Development is that it forces you to think of the exit criteria that your code has to meet before you even start coding. I certainly applaud this focus on concrete results, and I encourage any professional developer to do the same. I simply argue that there are other ways to phrase these criteria than writing tests first, and sometimes even a simple text file with a list of goals is a very decent way to get started. Just make sure that, by the time you are done with an initial version, you have written tests for every single item on your list. 

Don't test first, test smart. 

_Update:[Discussion on reddit](http://www.reddit.com/r/programming/comments/25ah6y/the_pitfalls_of_testdriven_development/) _
