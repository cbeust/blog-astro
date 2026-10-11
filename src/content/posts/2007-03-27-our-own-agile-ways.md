---
title: Our own, agile ways
date: '2007-03-27T08:03:55'
slug: our-own-agile-ways
categories:
- General
comments:
- id: 6579
  author: Keith Sader
  date: '2007-03-27T08:51:45'
  content: 'Q: How long will it take you to build a google-like search engine?

    A: It''s very complicated.

    Do you want that person off of your team?

    The ability to estimate a task is directly related to the ambiguity of the question posed.

    Q: How long will it take you to change this font?

    A: It''s done.

    Q: How long will it take you to add this field to the screen and propagate its values downstream?

    A: About a day.

    Q: How long will it take you to rewrite this MDB legacy infrastructure into a REST-ful WS?

    A:...'
  replies: []
- id: 6580
  author: Greg Ostravich
  date: '2007-03-27T10:21:48'
  content: 'I don''t think I practice "Agile" but this article has things that I understand are incorrect about "Agile" development.  I agree it''s nebulous and I''ve heard people claim they''re doing Agile when they clearly are not.  They''ll say things like "I''m not using documentation so I''m agile." which is pretty ridiculous.

    I would argue for example with this quote:

    "It''s not important to deliver on time but to deliver something that works"

    I don''t think Agile Advocates would say it''s not important to deliver on time.  They might say it''s not important to deliver a hugely complex system at the git-go but to do development using the cards and having the user prioritize the pieces that they want first.  A short turn around regardless of your Agile methodology is important to deliver the requirements for that iteration.

    Regarding the prediction of software delivery I think Agile shops that are successful do have a velocity after a few iterations and can predict what is deliverable after each iteration.

    "It''s a bad idea to ask developers how long it''s going to take to do something because it always varies. Every project has different characteristics"

    I don''t believe Agile would claim that at all!

    I would argue the way you measure the length of time might be different, but you still need estimates.  You do estimates on each piece of work and then in an iteration the user prioritizes what they want for that iteration.  It''s not that you don''t estimate.  You probably don''t have one ''big'' estimate on the whole project, but I believe that can be determined by the team''s velocity after an iteration or two.  The strength of this is that you give an answer above about something being really complicated but with this methodology I believe you break down complicated tasks into more bite size pieces which I think would make the estimates more accurate.

    Regarding this one:

    "To determine the length of a project, the project manager gives the user stories to the developers to decide such things as the programming language that will be used, the architecture and the framework. After that, they sit with the business analyst and go over the story cards and rate their complexity on a scale of one to eight."

    If the business analyst is actually the representative for the customer I''d agree.  I''m not sure what I see is wrong with this.  The user decides the features they think are most important and add the most business value and those are completed first by their prioritization for each iteration.

    If your point is that there are snake oil salesmen that are misrepresenting Agile then yes - I agree.  But that doesn''t mean Agile is wrong or doesn''t have value.  Even though I don''t use all of the Agile practices where I work, I see that they have value and have heard from people who have been successful with it.  I also agree with your point that there are developers who are actually not doing "agile" but are doing mini Waterfall iterations.  Did JUnit grow out of Agile practices?  Do you think that the growth of testing driven design and testing tools (JUnit, your TestNG, Selenium, etc.) were fostered because of Agile practices that Waterfallers now use too?  I realize testing wasn''t created by Agile, but I didn''t know if it fostered growth in areas you wouldn''t have seen if everybody was still doing only Waterfall.

    OK - I guess I''ve rambled enough. :-)'
  replies: []
- id: 6581
  author: Stan
  date: '2007-03-27T10:27:35'
  content: 'I agree using "business analyst" in the article was a mistake. It''s not usually a role in agile literature. "Business" implies the customer side of the family, not AD. Let''s assume it''s a customer or user filling the role and go on.

    "We can ship on time, but then we''ll need to cut feature A. What would you like us to do?" What if leaving out feature A fails the "something that works" test? What if your customer chooses to change the date? Then the statement in the article is dead on. Our customers adjust dates some releases, features other times.

    "Do you know the difference between a good developer and a bad developer? A good developer can give you an estimate of the time needed to complete a task. And the better that developer is, the more accurate their estimate will be."  In recent years I worked on two projects with new customers (no domain expertise in AD), new teams (people did not know each other), new language, new operating system, new database, new architecture (client-server, then web) and a new management methodology. How accurately will anyone see the future in those jobs? We had "good developers" and we did better estimates than Microsoft when Win95 slipped a year in a year, but nobody forecasts with a crystal ball.

    The Agilist answer isn''t "it''s very complicated" but "we''ll know in two or four weeks". And then you can decide to run them off your team.

    "We don''t need agile consultants and book authors to sell us vague and unproven metrics along with rigid guidelines that your team must embrace without any questions." Who says "embrace without questions"? What metrics to you prefer to comparing your estimates to your results every iteration? Where would we learn but from these guys? Unpaid volunteers?

    I''m still trying to figure out what triggers you lower case agile guys to lash out at the upper case Agile crowd so.'
  replies: []
- id: 6582
  author: Stan
  date: '2007-03-27T10:27:59'
  content: 'I agree using "business analyst" in the article was a mistake. It''s not usually a role in agile literature. "Business" implies the customer side of the family, not AD. Let''s assume it''s a customer or user filling the role and go on.

    "We can ship on time, but then we''ll need to cut feature A. What would you like us to do?" What if leaving out feature A fails the "something that works" test? What if your customer chooses to change the date? Then the statement in the article is dead on. Our customers adjust dates some releases, features other times.

    "Do you know the difference between a good developer and a bad developer? A good developer can give you an estimate of the time needed to complete a task. And the better that developer is, the more accurate their estimate will be."  In recent years I worked on two projects with new customers (no domain expertise in AD), new teams (people did not know each other), new language, new operating system, new database, new architecture (client-server, then web) and a new management methodology. How accurately will anyone see the future in those jobs? We had "good developers" and we did better estimates than Microsoft when Win95 slipped a year in a year, but nobody forecasts with a crystal ball.

    The Agilist answer isn''t "it''s very complicated" but "we''ll know in two or four weeks". And then you can decide to run them off your team.

    "We don''t need agile consultants and book authors to sell us vague and unproven metrics along with rigid guidelines that your team must embrace without any questions." Who says "embrace without questions"? What metrics to you prefer to comparing your estimates to your results every iteration? Where would we learn but from these guys? Unpaid volunteers?

    I''m still trying to figure out what triggers you lower case agile guys to lash out at the upper case Agile crowd so.'
  replies: []
- id: 6583
  author: Neal Ford
  date: '2007-03-27T11:53:28'
  content: 'You can bet that I''m responding! Many of the arguments made here aren''t supported by what I actually said, partially because of nature of the summary article and partially in an attempt to create an agile straw man.

    My response is summarized at my blog (which your blogging service conveniently won''t allow me to create a link to).

    OK, I can''t let this pass.

    The ServerSide wrote an article, summarizing both mine and Venkat Subramaniam''s talks at The ServerSide Symposium last week. It''s a reasonable summary, with a few details left out (that''s why it''s a "summary").

    But then, Cedric Beust takes the summary and constructs a agile development straw man to beat up. And, like many straw man arguments, he takes lots of stuff out of context and makes his own conclusions not supported by the original talk.

    The first thing he gets wrong is the fault of the summary. Early in the talk, I clearly state that the best way to get good software is to interact directly with the users. And I give an example from my project history of the best project experience I every participated in, where the developers literally sat in the middle of the users. Every time we had a question, we just got up and resolved it directly with the users. It was project heaven.

    But most corporate environments won''t give you such direct access to the users, because the users are after all there to get work done. Thus, you must have user proxies. And that''s where the business analysts come it. Perhaps at ThoughtWorks, our business analysts are different from the "typical" ones (I know our project managers are). The best business analysts are direct proxies for the users. They understand the users concerns and a little about technology. During the talk I also made the point that good business analysts prevent "paving the cowpath", suggesting innovative business solutions to problems rather than "that''s the way we''ve always done it".

    When I say that business analysts participate in the estimation process, that''s because we can''t get the users directly.

    Do you know the difference between a good developer and a bad developer? A good developer can give you an estimate of the time needed to complete a task. And the better that developer is, the more accurate their estimate will be. If I ask a developer "How long is it going to take to do this?" and he answers with "It''s very complicated", I want him off my team.

    Another point I made in my talk is that, regardless of developer, you can''t ask developers "how long will this take". Every project is different: in a 2 man project with no meetings and direct access to users, each developer will get more done in less time. In a project with 16 developers and a 2-hour status meeting every day, each developer will be much less effective (this has been known since Brook''s The Mythical Man Month). But that is constant is the relative complexity of the story you are trying to complete. Relative to the other stories, not the entire universe. This allows developers to hone their estimation skills because it cuts down on the number of variables they have to hold in their head. This is the closet you can get to an objective measurement of the work required to complete a piece of software.

    We don''t need agile consultants and book authors to sell us vague and unproven metrics along with rigid guidelines that your team must embrace without any questions.

    Ironically enough, we agree wholeheartedly about this, but he doesn''t seem to know that this is exactly the point of my talk at The Serverside Symposium. The whole point of the talk was that we need real metrics like passed tests, real reconciliation between estimates and actuals, and binary completion criteria. The article makes that pretty clear, but that doesn''t contribute to the weak straw man, so Cedric conveniently left that out.

    What''s most frustrating about Cedric''s rant is the implicit assumption that "agile" is this vague concept that no one seems to be able to define. Yet, at ThoughtWorks, every single project is agile to some degree (and where we control everything (like fixed bid projects), it''s pretty close to Extreme Programming). And we have a really high success rate, way above the industry average. I''ve been around for a while (one of my colleagues once told me that I was old enough to "add diversity to the company"), and I''ve used a bunch of different methodologies. One of the reasons I''m at ThoughtWorks is because we use proven techniques for building software, and we''re damn good at it, making it a much less frustrating place to work.'
  replies: []
- id: 6584
  author: Venkat Subramaniam
  date: '2007-03-27T12:08:11'
  content: Cedric, I have never met you, but I assume you are a great developer who estimates accurately on all occasions and delivers always on time and you do it free of charge to make sure you have no vested financial interest. Someday I hope to quit my snake oil sales business (which you helped me start here) and be as wise as you are. Cheers.
  replies: []
- id: 6585
  author: Cobbie Behrend
  date: '2007-03-27T15:32:54'
  content: 'I''ve provided more detailed summaries of both talks that were the basis of the article you mentioned.  I think my notes may serve to put some things in better context?

    Neals talk: http://www.cobbie.com/blog/2007/03/22/tssjs2007-neal-ford-agile-metrics/

    Venkats talk: http://www.cobbie.com/blog/2007/03/22/tssjs2007-venkat-subramaniam-on-agile/

    I hope this may serve to clarify things and that I have not left too much out to further misrepresent Neal and Venkat.

    I have met Cedric in 2003 at TSSJS, and he is a great developer.  No sarcasm.   I think this might just be a misunderstanding as a result of things being removed from their original context: i.e. things being interpreted as absolute as opposed to perferable.

    Also I believe both Neal and Venkat have the slides from their talks posted if anyone is interested in digging deaper and getting an even better contextual understanding of what was presented.'
  replies: []
- id: 6586
  author: Cobbie Behrend
  date: '2007-03-27T15:33:30'
  content: 'I''ve provided more detailed summaries of both talks that were the basis of the article you mentioned.  I think my notes may serve to put some things in better context?

    Neals talk: http://www.cobbie.com/blog/2007/03/22/tssjs2007-neal-ford-agile-metrics/

    Venkats talk: http://www.cobbie.com/blog/2007/03/22/tssjs2007-venkat-subramaniam-on-agile/

    I hope this may serve to clarify things and that I have not left too much out to further misrepresent Neal and Venkat.

    I have met Cedric in 2003 at TSSJS, and he is a great developer.  No sarcasm.   I think this might just be a misunderstanding as a result of things being removed from their original context: i.e. things being interpreted as absolute as opposed to perferable.

    Also I believe both Neal and Venkat have the slides from their talks posted if anyone is interested in digging deaper and getting an even better contextual understanding of what was presented.'
  replies: []
- id: 6587
  author: Anonymous Coward
  date: '2007-03-27T23:00:29'
  content: 'I have recently started to look into Agile practices, in an effor to learn some new techniques, and the amount of noise and BS from so called practitioners is amazing.  It took ages to dig through all the trash to figure out what it _could_ be about .. and I am _still_ not sure.

    "What is Agile?" and "Are we Agile?" are so common questions that obviously it is not clear what it means to be Agile, yet so many seem to "know" what it means ... to themselves.

    The summary on TSS also made my blood boil as it basically tells me that everything I am doing is wrong and that I _MUST_ use Agile techniques to be successful.  What a load of rubbish!  It''s information like this that turns me off to Agile, as I am sure it does for many others as well. It''s information like this that runs prevalent in online material.

    Many of the analogies are flawed in my opinion and don''t really help clarify things at all.

    Stop saying that "This is THE way to do it" and start explaining what YOU get out of using these practices.  Every company is different, every customer is different, and every application is different and Agile is not the silver bullet to make it all work better than it has been.

    Personally, I have my own assumptions about what Agile means and I certainly intend to take some of the practices into use - mixed in with our RUP based process.  There are benefits to both at our workplace'
  replies: []
- id: 6588
  author: ''
  date: '2007-03-27T23:28:46'
  content: 'int main(int argc, char **argv) {

    printf("Hello World");

    }'
  replies: []
- id: 6589
  author: ''
  date: '2007-03-27T23:29:15'
  content: 'int main(int argc, char **argv) {

    printf("Hello World");

    }'
  replies: []
- id: 6590
  author: ''
  date: '2007-03-27T23:29:35'
  content: 'int main(int argc, char **argv) {

    printf("Hello World");

    }'
  replies: []
- id: 6591
  author: ''
  date: '2007-03-27T23:30:56'
  content: '#include

    int main(int argc, char **argv) {

    printf("Hello World");

    exit(0);

    }'
  replies: []
- id: 6592
  author: Anon
  date: '2007-03-28T06:14:51'
  content: Don't bite! He's set up yet *another* Strawman on this subject
  replies: []
- id: 6593
  author: Smurf Hunter
  date: '2007-03-28T07:59:21'
  content: 'People are getting soft and want a process or methodology to validate that.

    I work in an "Agile" environment where we rigidly practice "SCRUM" with daily standups and the rest.

    When projects are in jeopardy or politics come into play, the usual a$$hole egos inevitably bubble up.

    In reality my shop is "Agile" until upper management can longer tolerate it ;-)'
  replies: []
- id: 6594
  author: Aaron Erickson
  date: '2007-03-28T08:02:47'
  content: 'Good God - a little sensitive these -A-gile zealots are!

    Sorry - when you define your methodology as inherently good, you are going to get some flak.  It makes me want to write another screed on Agile, just to increase my blog''s pagerank - since every little criticism of Agile brings out the troops en masse.

    Science beats religion.  You want people to believe your Agile hype?  Back it with something empirical.  Oh yeah... I forgot, there is no actual scientific evidence that Agile works any better than non-Agile at all, outside of a couple studies where subjective questions were asked of agile practicioners to gauge whether it "felt more effective".

    -A-gile makes Scientology seem tame.'
  replies: []
- id: 6595
  author: ErikFK
  date: '2007-03-28T10:15:09'
  content: I wish I could find it funny to see how the same amount of stupidity pops up every time the subject of A/agile methods appears in C
  replies: []
- id: 6596
  author: ErikFK
  date: '2007-03-29T23:03:27'
  content: '@anonymous coward

    I definitely don''t think (and I wouldn''t think that my counter-rant implies it either) that we should accept what is given (whether in the A/agile world nor anywhere else).

    From my experience A/agile is primarily about feedback. Feedback from the customer, feedback from your code, your design, your pair, the previous iteration etc. This approach certainly has sometimes shortcomings - but I compare it (this is the IT-world I live in for many many years) with good ol'' waterfall, where most (or at least far too much) of the feedback comes from the QA test and from the customer at acceptance tests very (too) late in the projects. I probably tend to "believe" in the virtue of this feedback - but certainly not blindly.

    As far as snake oil salesmen and fluff talker, as C'
  replies: []
- id: 6597
  author: G Fernandes
  date: '2007-04-03T04:31:14'
  content: 'Everybody criticises waterfall without giving valid reasons. So we have this argument that we "know" that Waterfall doesn''t work.

    I ask you, do you really know that Waterfall doesn''t work?

    I say it is people who can not apply a process to their context and leverage it to benefit them who are to blame.

    For such people, no matter what they follow, they will always fail to leverage any benefit out of the process.

    Coming back to Waterfall, I do not agree that Waterfall is not iterative. I do not agree that Waterfall is not agile.

    The agility (and iterativity) of any process has exactly one aim - to shorten the feedback loop.

    I''ve yet to come across a Waterfall book that says "Thou shalt not have a short feedback loop".

    The Waterfall I''ve practiced was always highly iterative. We iterated over every phase of the Waterfall cycle - note the word cycle, which should imply iteration anyway. We had fixed numbers of iterations and reviews - which in my opinion comprise a feedback loop. And we delivered within acceptable limits of time variance.

    I personally abhor the word Agile when it comes to software development process. I choose not to use it at all to describe my process. Because, to me at least, the word Agile has become arguably the most misused word in the software development world.'
  replies: []
- id: 6598
  author: Rob
  date: '2007-04-03T08:11:22'
  content: 'Oh Jesus, this is proof positive that intelligent discourse has gone the way of the Dodo. First off, I violently agree with Cedric. The reason there are so many pedants here arguing with him is simple: the vast majority of programmers are the kind he describes: ones who cannot estimate anything and feel it their birthright to never even be asked. On every team I have ever been on, only the people who are money rise to the top. Most programmers still labor under the silly, egotistical belief that shining is about performing tricks.

    The Waterfall Apologia made me bust out laughing multiple times. The TW boosterism from the original author is just plain nauseating, ending with a ''and we''re damned good at it'' that just has to make anyone who is half serious (and not a tech version of a scientologist (in other words, does not work @ TW)), laugh hysterically. The other part of that testimony, where heaven was sitting amidst the users, is downright silly, but perfect for TW: dude, you want real metrics? Go read the recent study that said developers cannot get serious work done if they are in interrupt mode 100% of the time. But then, if you are doing little mickeymouse projects, that''s not a problem.

    I personally agree that Agile is becoming soapy dishwater. I think Cedric''s point is that everyone is making it into whatever they want, and each formulation differs from the next (and contradicts itself). Don''t see how you argue against that.'
  replies: []
- id: 6599
  author: ErikFK
  date: '2007-04-03T14:04:42'
  content: 'OK - as expected it gets nowhere and never will. And we all (I''m no exception) demontrate it.

    It''s obvious that A/agile is taken by some (supporters as well as adversaries) as a new religion, where one side is right and the other is wrong.

    A/agile will remain to fuzzy, unproven etc. to some and it will be too dogmatic to others. Whatever A/agile is and is not, some will like it, some will not (some will even abhor the simple word ) - because that''s the way humans are.

    For me A/agile is a state of mind, not a set of rules. And the name (A/agile) doesn''t count: it''s only for propangada - and I don''t care about propaganda, proofs, silver bullets or precise definitions. I care about the will to improve (this means for those who needs pictures: reuse the good things from the past and try new ways), the readiness to reinvent the rules of the game and have fun (don''t try to interpret what I mean - or do it if you can''t help) in IT projects (again). Laugh at me: for me A/agile is something about fresh air, about a certain sense of freedom and responsibility in IT-projects.

    If C'
  replies: []
- id: 6600
  author: ''
  date: '2007-04-26T09:41:53'
  content: '"To determine the length of a project, the project manager gives the user stories to the developers to decide such things as the programming language that will be used, the architecture and the framework. After that, they sit with the business analyst and go over the story cards and rate their complexity on a scale of one to eight."

    I agree -- this is ridiculous.  Anyone with half a brain knows you rate complexity on a scale of one to seven.'
  replies: []
---

[This article about agile development](http://searchsoftwarequality.techtarget.com/originalContent/0,289142,sid92_gci1248864,00.html) is filled with very revealing contradictions. 

The people quoted in this article, both with an obviously strong vested interest in agile techniques, are trying to convey the idea that agile practices give users the utmost priority, and that work will not stop until users are 100% happy: 

> Then the developers can go back and refine their work, repeating the process several times until the users are satisfied. 

However, the rest of the article shows that users are, in effect, given very little part in the overall process. Here are a few quotes that made me pause: 

> It's not important to deliver on time but to deliver something that works 

This is an observation that's hard to reconcile with the idea that you are working to make your users happy. In my experience, nothing makes users happier than delivering on time. And if development reaches a point where the initial deadlines are suddenly put in question, the best way to solve this problem is to ask the users: "We can ship on time, but then we'll need to cut feature A. What would you like us to do?". 

Another interesting quote is: 

> While Ford agreed that it's critical to deliver software that meets users' needs, he acknowledged that it's important to be able to predict when a project will be completed. But developers, business analysts and project managers need to work together on this. 

Do you notice anything in the last sentence above? The users are nowhere in the picture. They are not part of the loop. This leaves us with a disturbing impression that developers, business analysts and project managers know better what needs to be done and that they will let the users know once they've made a decision. This sounds dangerously like Waterfall, which is exactly what we were trying to avoid in the first place. 

The article continues with more startling claims, such as: 

> It's a bad idea to ask developers how long it's going to take to do something because it always varies. Every project has different characteristics 

Do you know the difference between a good developer and a bad developer? A good developer can give you an estimate of the time needed to complete a task. And the better that developer is, the more accurate their estimate will be. If I ask a developer "How long is it going to take to do this?" and he answers with "It's very complicated", I want him off my team. 

> To determine the length of a project, the project manager gives the user stories to the developers to decide such things as the programming language that will be used, the architecture and the framework. After that, they sit with the business analyst and go over the story cards and rate their complexity on a scale of one to eight. 

This part reminds me of a scene in Dead Poets Society, where Robin Williams asks his students to look at a page in their poetry book that is trying to rate poetry on X and Y axes. Williams then tells his students to rip that page because poetry is not about metrics or scales, it's about art and using one's expertise and talents to reach a goal. 

And the more I think about it, the more this process with cards and business analysts assessing the load of work reminds me of Waterfall. The developer's know-how and expertise accumulated over the years is thrown out of the window and replaced with vague numbers and concepts that not even the most hardcore agilists agree on. 

We don't need agile consultants and book authors to sell us vague and unproven metrics along with rigid guidelines that your team must embrace without any questions. We need to hear from people who defend agile practices and yet have no financial interest in them. We need good and experienced developers to be recognized as true experts about what constitues good software products and sound engineering practices. 

The world has already moved on to something called "agile". Very few people agree on what it is exactly, but they all accept the fact that it means "not Waterfall". We don't need to be convinced of the idea that Waterfall development does not work very well, and that it's much better to engage in a continuous dialogue with your users to make sure that the right tasks are being performed in timelines that everybody agrees on. 

A lot of people are snickering at the kind of agile rhetoric shown in the article I quoted, because while such logorrhea makes for an entertaining read, the last thing we need is being patronized by snake oil salesmen trying to sell us something we already know. 

Until agile evangelists catch up and become truly agile, we'll just keep developing our software with our own, agile ways.
