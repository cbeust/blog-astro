---
title: Duct tape and the brittleness of agility
date: '2009-09-27T18:20:50'
slug: duct-tape-and-the-brittleness-of-agility
categories:
- Uncategorized
comments:
- id: 7854
  author: Josh Cough
  date: '2009-09-27T21:11:28'
  content: Can you please point me to where Rob, or anyone else said, ""Agile means this and no variation is allowed" ? I've heard this before, but I haven't seen it. I'm not suggesting that no one has said it, I'd really just like to see it. Similar quotes will do just fine.
  replies: []
- id: 7855
  author: Dorel
  date: '2009-09-27T22:05:39'
  content: No pair programming ? It means you don't pair program with Josh Bloch ? ;-)
  replies: []
- id: 7856
  author: Mats Henricson
  date: '2009-09-27T22:09:04'
  content: 'Cederic, we agilistas are much less dogmatic than you think. And your arguments against agile are just silly. Why would we emphasize unit tests if we truly didn''t believe that it was beneficial for the end user?

    And "Agile programming emphasizes coding" really means getting features out, not coding unit tests. That statement is directly taken from the agile manifesto, and was a direct reaction to the waterfall idea of writing long meaningless specs for months before you start coding.

    I often call you one of my favourite bloggers, with Hani, Oscar Swartz, Brendan Eich and a select few more, but this knocked you off that select list. Sorry. Clueless.'
  replies: []
- id: 7857
  author: Roland
  date: '2009-09-27T22:17:01'
  content: 'Agile tries to find a way around all failed projects. Ducktape to me sounds that we are happy with the current rate of failure.

    To me agile is not rigid rules. They are flexible and should be adapted to the situation and should be questioned  and modified (as opposed to befing followed more strikly) on regular basis.

    To me aglie is to start think instead of following unproductive rules, like RUP.

    I''d probably would not dare to touch Joels code since there are no way for me to find out if I introduced bugs. Tests give me courage and not being a rockstar programmer that is very important.'
  replies: []
- id: 7858
  author: Ian Nowland
  date: '2009-09-27T22:30:49'
  content: 'Josh - Not 100% what you requested, but Shore and Warden''s "The Art of Agile Development" contains this quote (pg 51):

    "XP will work much better if you give all the practices a fair chance rather than picking and choosing the ones you like".

    This tone pervades the book.'
  replies: []
- id: 7859
  author: David Eriksson
  date: '2009-09-28T00:18:35'
  content: If I have understood it correctly, the point in following any agile process by the book at first is to establish a baseline to measure against later, when you attempt to improve the process.
  replies: []
- id: 7860
  author: Unflexible Agilist
  date: '2009-09-28T05:05:09'
  content: 'Kedrik,

    He calls himself ''Bob''.'
  replies: []
- id: 7861
  author: Jason
  date: '2009-09-28T06:03:33'
  content: '"Unit tests are tools for the programmers. They are a convenience, one of the many ingredients that you use in the kitchen but that your customers really don''t care much about."

    I suppose IDE''s would fall into the category of ''covneniences'' as well? Do you recommend that all developers use notepad for their development because the end user doesn''t see the benefit in Visual Studio or Eclipse? Unit testing and TDD are tools that make development *faster* and *easier*, not just cleaner and less buggy. Yes, it takes time to get accustomed to the tools, but it also takes time for a beginner to get accustomed to IDEs and other tools like source control. Unless you advocate ZIP archives as source control.'
  replies: []
- id: 7862
  author: Matt
  date: '2009-09-28T06:21:10'
  content: 'I couldn''t help but think of your obliviousness of Joel''s product''s core function: bug tracking.  Now, I''m not saying Joel is anti-unit tests to promote buggy code which would promote bug tracking software, but certainly if you *don''t have tests* you will have a greater need for bug tracking software.'
  replies: []
- id: 7863
  author: Remy
  date: '2009-09-28T06:47:16'
  content: '"Well, man is indeed incapable of flying, which is why we need to use devices to achieve that goal."

    Buy using devices, the man now flies. Man was hence meant to fly.

    He was not _designed_ for it for sure. But meant does not mean designed.

    Anyway. Joking on the meaning of mean is mean. :p'
  replies: []
- id: 7864
  author: Bob
  date: '2009-09-28T07:38:32'
  content: Your comparisons of linux and agile are ridiculous.
  replies: []
- id: 7865
  author: Dale
  date: '2009-09-28T08:29:35'
  content: 'I''m not an orthodox Agilist.  As such, I don''t speak for the Agile community.  In fact, I am sure that I have never been involved in a project that was done start to finish using a complete set of accepted Agile/XP practices.

    However, I was involved with projects that used automated tests, mostly unit tests, but some functional tests as well, before any of the Agile/XP books were published.  Automated testing is a good thing for two reasons.  The first is that testing itself is a good thing.  The second is that making tests quick and repeatable is a good thing.

    Cedric, I share your preference for functional tests, although I frequently call them unit tests.  As a coder, I deliberately try to make the boundaries of my unit testing overlap with functional testing.  With a couple of well-written use cases and some mock objects, you are essentially executing whatever portion of those use cases is executed by your own code.  For sane testing, you need some guidelines to determine what tests to perform.  One of the simplest for me to work with is to ask myself anything I am thinking of not doing a particular test how I would answer the question "Why didn''t you test that?" if it later turns out it doesn''t work.  At least once, the answer to that question became found its way into the requirements as a statement of how far the software had to go in handling errors encounter while attempting to log errors.

    Michael Feathers presents a good case in Working Effectively With Legacy Code that "legacy code" can be defined in a useful way as code without tests.  His point is that from the point of view of the person maintaining it, it is more brittle than the same code with tests.  That''s because with tests, you have a way to determine that you haven''t broken features you didn''t intend to change.

    No, code that doesn''t have 100% TDD test coverage is not necessarily buggy or bad.  Nor is code that has complete coverage necessarily good.  It''s a balance.  I would much rather have code that ships and is supported by reasonable test coverage for the features and bug fixes that were actually done.  Perhaps in a meaningful sense, the absence of a test for a particular behavior of the code is an indication that that behavior is merely coincidental and is unimportant to the overall behavior of the system, if other tests are present.'
  replies: []
- id: 7866
  author: Seth
  date: '2009-09-28T11:25:41'
  content: I believe it's 'Spolsky', not 'Spolski.'
  replies: []
- id: 7867
  author: ''
  date: '2009-09-28T23:47:31'
  content: 'Agile/XP doesn''t really have any track record of success to show.

    How about Thoughtworks ?'
  replies: []
- id: 7868
  author: ErikFK
  date: '2009-09-29T20:37:05'
  content: Frankly C
  replies: []
- id: 7869
  author: Cedric
  date: '2009-09-29T21:39:50'
  content: 'Funny, literally just a few minutes after I read Erik''s comment, I came across the following:'
  replies: []
- id: 7870
  author: Mike Brunt
  date: '2009-09-30T07:18:48'
  content: I don't think the comparison of Linux and Agile is ridiculous. Cedric is soaring to a very high view and transcending what each does to make the point that if there are so many moving parts, so many rules it is easy not to get something right enough.  The difference of course is that Linux is a well used mechanism that is doing things that produce immediate output of data whereas Agile is a mechanism to organize things that will eventually produce data.
  replies: []
- id: 7871
  author: ErikFK
  date: '2009-09-30T12:36:37'
  content: Hi C
  replies: []
- id: 7872
  author: Ross Johnson
  date: '2009-10-01T07:15:41'
  content: 'Cedric -

    As others have noted, I think your post comes off as more zealous than Bob Martin''s by a mile.  Sure, there are whackjobs on either side of the spectrum but Bob was only putting a slight spin on Joel''s sentiment, while you have turned it into an out-and-out attack on shipping software.

    We practice (or try to practice) Agile where I work.  We have a large team, broken into many sub-teams.  Each of them practice Agile differently.  We''re not religious about it.  Generally speaking, it works for us.  I think that if you take the time to look, you''ll find that our story is not atypical for Agile adopters.

    Furthermore, your post is chock-full of straw men:

    1) "For Rob Martin, "shit" is software that wasn''t designed with TDD and that doesn''t have 100% test coverage." - The strict adherence to TDD of course will vary so I won''t dispute that, but I don''t know anyone who claims you need 100% test coverage.  You''re just trying to make Agile practioners look crazy by saying this.

    2) I know you were only quoting someone else, but saying that Agile emphasizes coding is misleading.  From my perspective, Agile emphasizes shipping working software.  Period.  It has several techniques, many or most of which are indeed coding techniques that help achieve this end, but at the end of the day the focus is on delivering something usable at the end of every iteration.  Does XP alone focus too much on the programming side?  I''d say probably so, which is why it makes sense to incorporate other Agile flavors such as Scrum into your own mix.

    3) Not everyone says "if it didn''t work for you, you''re not doing it right".  Again, this is just to paint Agile practioners as zealots.  To be fair, you said "most", not "all" commenters said this, but in my experience even this is unfair.  Can Agile consultants overstate its power? Sure.  Does Agile scale to all cultures, projects, and team sizes?  Not necessarily.  But is it also possible, even likely, that misapplication of Agile practices on a project didn''t help, or even hurt the project?  Absolutely.

    4) Agilists not being agile because they mandate that you must follow the manifesto to the letter - I wonder if you''ve read the manifesto (such an unfortunate term)?  It doesn''t say you have to do X, Y, and Z.  It says there is a preference of valuing certain things over others - I should note not at the complete *expense* of the other, which is a mistake that many people seem to make.  By the way, "working software" is one of the things valued, while "processes and tools" (ie, tests as you said) are one of the things that are afforded less value than "individuals and interactions".  So again, I think you''re grossly mischaracterizing the typical Agile position.

    Please don''t take my reply as one more zealot attacking you for attacking Agile.  I have no skin in this game other than finding out something that helps my teams deliver software more quickly and with less bugs.  So far, Agile has done that for us.'
  replies: []
- id: 7873
  author: bill
  date: '2009-10-08T07:20:47'
  content: Hi C
  replies: []
- id: 7874
  author: Stephen
  date: '2009-10-10T17:03:55'
  content: 'From what I''ve been seeing, I think there are a handful of issues:

    - organisations claiming to be agile when they''re not

    - a proliferation of "certification" for scrum etc.

    - division within the industry as to the benefits and suitability of practices such as Test Driven Development.

    It was interesting to see that your book shows up alongside "Test Driven: TDD and Acceptance TDD for Java Developers" on the "frequently bought together" section on Amazon.'
  replies: []
- id: 7875
  author: andy567
  date: '2009-10-23T12:01:26'
  content: Thanks for your view. It was refreshing to see someone take a stand against these guys who think there is only one way to do things. I saw the head of Hashrocket talk about how his company is doing things the "Right Way." He wanted to set up a site promoting companies like his that do things the right way. (A guy from Engine Yard thought Hashrocket'ers where a bunch of self centered weenies.) Then he went on to bash all the people who program in Java because Ruby people are so much better. Give me a break. Any great company will constantly develop better processes to develop better products. It's never ending. Soon Ruby will be another has-been language and Hashrocket will another has-been company if they stick to the same process and same language without any improvement.  And WTF, there are a lot of people who program in Java (and other languages)-- they have created some incredible stuff; and, they are smarter than the guys at Hashrocket and fluent in many languages. They pick
    the language that best fits the situation. nuff said.
  replies: []
- id: 7876
  author: Anonymous Coward
  date: '2009-11-03T16:16:53'
  content: 'So all Android phones are based on a brittle codebase, that''s waiting to explode soon?

    I''m not talking about the Google stack but the Linux OS underneath ;)      [this post brought to you from my Linux workstation]'
  replies: []
- id: 7877
  author: Cedric
  date: '2009-11-03T16:23:00'
  content: Because Linux is the perfect example of a bug-free product, am I right?
  replies: []
- id: 7878
  author: Chiara
  date: '2009-11-17T15:26:06'
  content: ObjectMentor is still around. Good grief, when is that bs company going to close down. Agile is the stupidest crap i have ever had to work with. It suckssssssssssssssssssss.
  replies: []
- id: 7879
  author: An-Old-CIO
  date: '2009-12-02T16:08:44'
  content: First, I would like to thank cedric for the original post.  I have spent 20+ years adjusting management and development methods to fit customers, developer skill sets, company cultures etc. to try to make the best applications we could.  Most of the time, we won, but sometimes we lost.  Your post did not overly influence me but the responses I read to your post make me very uncomfortable with Agile. Many of the responses make me think that the writers are trying to convince themselves that Agile is the only answer to success.  I have seen this before with other new methods in IT, Psychology and Medical areas and it usually spells trouble in the worst way.  I have an Agile expert meeting with me in a couple days, maybe he can convince me otherwise. Thanks again for the post.
  replies: []
- id: 7880
  author: Taylor
  date: '2009-12-05T07:13:01'
  content: 'Cedric, notice, one comment first says:

    "agilistas are much less dogmatic than you think."

    then further down

    "but this knocked you off that select list"

    unless that commented was intended as slightly humorous sarcasm it''s telling.  This is the dogmatic reaction to criticism.'
  replies: []
- id: 7881
  author: Domingos Neto
  date: '2010-01-19T21:58:42'
  content: 'Found this only recently and I wish I had found earlier!

    Funny how some people simply don''t get your message!  Agile practices are tools!  Use the tools to make your life easier, but remember that they are means and not an end by themselves.

    Or, in other words, use the tool that fits your problem, and don''t try to fit you problem to the tool.'
  replies: []
- id: 7882
  author: Gabriel C.
  date: '2010-05-13T09:10:25'
  content: What the heck, the "waterfall methodology" works fine if you "just" do it by the letter. XP is the same... any slight deviation and explodes in your face.
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/handle-with-care.gif)

## Duct tape, reloaded

In a [recent article](http://www.joelonsoftware.com/), Joel Spolsky discusses the concept of the "duct tape programmer". According to Joel, a duct tape programmer is a developer that "gets things done". They don't spend too much time over designing, discussing or writing tests: they just sit down at their desk and code until the feature is ready to be used by customers. 

Joel uses Jamie Zawinski (jwz) as the perfect example of a duct tape programmer. For people who don't know jwz, he was made famous during the Lucid/XEmacs/Netscape era. He was known for never sleeping and tirelessly being busy coding. His contributions include vast portions of XEmacs (in C and Lisp) and countless features in Netscape. He retired from coding a few years back, bought a club in San Francisco which he uses to organize events. His [web site](http://jwz.org) still shows his undying geekdom and if you've never had a chance to read about them, check out [some of the pranks](http://www.jwz.org/tent-of-doom/) he came up with during his tenure at Netscape. 

jwz is the perfect example of a duct tape programmer and the kind of developer that Joel would want on his team, as opposed to "software astronauts" that spend more time discussing problems than implementing solutions. 

## Clean Code is code that hasn't been run enough times

Not surprisingly, [Rob Martin didn't like Joel's article](http://blog.objectmentor.com/articles/2009/09/24/the-duct-tape-programmer). Although he tries to be civil and compromising, Rob is pretty much at the other end of the spectrum when it comes to software development. In particular, Joel's emphasis that testing should come second since it doesn't directly impact customer satisfaction rings a sour note with the entire Agile community. 

The funniest part in Rob's rebuttal article was: 

> Programmers who say they don't have time to write tests are living in the stone age. They might as well be saying that man wasn't meant to fly. 

Well, man is indeed incapable of flying, which is why we need to use devices to achieve that goal. 

Joking aside, Rob's assertion that a software product that is not tested is necessarily buggy is pure fantasy. There are thousands of software products that we use regularly that are probably very poorly tested (or poorly automatically tested), and yet, they work and they are fairly usable. 

The crux of the disagreement can probably be found in Rob's following statement: 

> I want you to ship, but I don't want you to ship shit. 

Nobody can disagree with this, but I bet you that Joel and Rob have very different ways of defining "shit" in the software world. For Joel Spolsky and Jamie Zawinski, "shit" is a product that is buggy or unusable. For Rob Martin, "shit" is software that wasn't designed with TDD and that doesn't have 100% test coverage. 

In order to understand their standpoint, it's important to keep in mind who these two people are and what they do. Joel is the founder of a fairly successful software company and their flagship product, Fogbugz, a bug tracker, seems to be quite liked by its users. Rob Martin is employed by Object Mentor, a methodology consultant company. 

They both have something to sell, although it seems to me that Joel probably doesn't expect that this kind of article will help boost the sales of Fogbugz. On the other hand, it's important for Object Mentor to make sure that Agile, XP and the other methodologies that their business is based on, keep being discussed and cited as positive technologies that help deliver products faster. 

## Is Agile on the way out?

Joel's article is just the most recent example of a growing backlash that is slowly building against Agile and XP. Here is [another testimony](http://www.cfwhisperer.com/post.cfm/thinking-of-agile-xp-please-read-this-first) from Mike Brunt, someone who has had a terrible experience with the practice. 

Even though it's unlikely that Joel and Mike know each other or read each other's article before writing their own, some of Mike's points are very close to what Joel is saying. For example: 

> Agile programming emphasizes coding. 

This may sound like a good thing but it really is not, especially when you emphasize coding over feature #1 (shipping). Unit tests fall into that category. Unit tests are tools for the programmers. They are a convenience, one of the many ingredients that you use in the kitchen but that your customers really don't care much about. 

The extreme emphasis on developer comfort (unit tests, code coverage, TDD, etc...) over the satisfaction of your customers is something that has always deeply disturbed me in the Agile/XP movement. I have expanded in more details on this topic in [my book](http://www.amazon.com/Next-Generation-Java-Testing-Advanced/dp/0321503104), so I won't repeat everything here, but there is another point that I feel strongly about: if I have time to write either a unit test or a functional test, I will always pick the latter, because such a test will exercise a feature of the product that my users will be seeing, as opposed to a unit test, which is only destined to make **my** life easier (i.e. find bugs faster). 

## Agile is fragile

The comments on Mike's articles were not very friendly. It doesn't take much to get Agilists riled up, and this post was no exception. However, most of these comments are all using the same old tired argument: "if you use Agile and it didn't work for you, you were not doing Agile properly". 

This argument is very similar to the one you read whenever somebody dares to post that Linux is not working out for them: "Oh you're using Fedora (1)? No wonder you're having these problems, you should be using Ubuntu (2)". Replace (1) and (2) with [any of the Linux distributions](http://en.wikipedia.org/wiki/List_of_Linux_distributions) and you basically have the template of the response you will see on any post that dares to criticize Linux. 

This sort of answer is very similar to "Oh Agile didn't work for you because you were doing Agile wrong", and both these statements come from delusional people who just don't understand that if their technology is so hard to use "right", then it's useless. 

## Brittleness in software

Linux and Agile/XP are both technologies that I call "brittle". Brittle because you need to manipulate them very carefully or they will just explode in your hands. Brittle because you need to follow extremely precise guidelines to use them, and failure to do so dooms you to failure. 

Finally, they are brittle because the amount of expertise necessary to use these technologies is simply too high. 

However, Agile/XP is in much worse shape than Linux, which has quite a few success stories. Put in the right hands and used in the right conditions, Linux can do wonders, and hundreds of companies (including [my employer](http://google.com)) can attest to that. But Agile/XP doesn't really have any track record of success to show despite many, many years of trying to become mainstream. 

Ironically, the few times where I have seen a few Agile practices being successful was when the teams using them were cherry-picking from the Agile manifesto. They read all the points in the Agile manifesto, chose the practices that made sense to them and disregarded the rest. And it worked. 

## Agilists are not very agile

There are two paradoxes here: 

  * Teams that "don't do Agile" (i.e. they don't follow the manifesto to the letter) can be successful. 
  * The very same people who advocate Agile are actually far from being agile and open-minded. "Agile means this and no variation is allowed" never sounded very agile to me. 


I know Rob Martin really believes in all these principles he advocates, but it's really hard for me to forget the fact that he's making a living out of them. If software methodologies become easy to apply and they no longer require a five day course to learn, his employer will go out of business. 

On the other hand, while Joel Spolsky never misses an opportunity to mention Fogbugz (and I can't really blame him, it's what his company does), I don't think he has much to gain from a commercial standpoint with this kind of article. I do think that he's exaggerating his points a little bit in order to be provocative and generate indirect publicity and I'm pretty sure that Fogbugz is a lot more tested than he wants us to think. 

But overall, I'm happy to see the pendulum beginning to swing the other way. Instead of advocating religious methodologies, I want to see thought leaders suggest common sense and judgment and show flexibility when it comes to recommending technologies. I think we will have reached this point when an Agile advocate comes to see me, takes a look at my team, chats with them a little bit and then tells me "I think stand-up meetings will be useful to your team but you should probably not use pair programming". 

Now, **this** is true agility.
