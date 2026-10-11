---
title: Why code reviews are good for you
date: '2006-06-22T01:57:32'
slug: why-code-reviews-are-good-for-you
categories:
- General
comments:
- id: 5589
  author: Tony P
  date: '2006-06-22T05:07:16'
  content: 'Nice entry, Cedric!

    I''ve worked at a company with non-blocking code review process, and another one with completely no code review.

    Obviously the first one was a much better experience, everything was rosey in that company. Developers were comfortable to do constructive criticisms of each other''s code and everyone was open for discussion. Not everyone agrees all the time, at the same time no one behaved like an arrogant jerk, so teamwork was top notch. Having code review process in place was definitely a blessing for code quality and long term code maintenance.

    The one without any code review was a nightmare for me. Some modules developed by some colleagues ended up being rebuilt, after the original coders left the company, and then the others found out that their code was a mess plus the end product failed  performance testing.

    The excuses for not having code review were time constraint and the company was under resource (though we had about 2000 employees).

    However, at the end of the day, both companies made a lot of money regardless. Would the second company have made more money if they had better software development practices such as placing code review process in place? I don''t know, perhaps not.

    Cedric, how about writing an entry about a typical day for you at work? Without revealing any company secret of course. I wonder how you guys organise meeting time, code review time, testing effort, mentoring(?), issue management.

    Do you push back release dates before everything is ready? Or do you prefer to cut corners?

    Google has been known to release great products. Isn''t it time to produce Google Best Practices, the _real_ agile.'
  replies: []
- id: 5590
  author: Bernd Eckenfels
  date: '2006-06-22T05:30:20'
  content: 'While Code Reviews might not reveal Deadlocks they do show race conditions or missing error handling in my experience quite often.

    This however depends on the "rules" for review. Some reviews do not allow to look at the context of a function, this is IMHO bad.'
  replies: []
- id: 5591
  author: Jason Marshall
  date: '2006-06-22T07:36:23'
  content: 'The one thing code ownership (but not necessarily shared code ownership) gets you is conceptual integrity.  This is something I''ve found to be dreadfully lacking in many open source projects.

    I have, over the years, spent an inordinate amount of time consulting the Ant or Struts documentation to find the correct attribute name for a task or tag   due to inconsistent naming conventions.  It''s very obvious on these and other projects that they were designed by a group of 4-5 people, instead of by one mind.

    When you have no code ownership on a popular class, pretty soon you see the same sort of drama playing out at the class level.  From one method to another, the calling conventions change.   Arguments appear in different order, or with different types (sometimes String, sometimes a domain object, sometimes array, sometimes List).'
  replies: []
- id: 5592
  author: Jason Cohen
  date: '2006-06-22T08:24:49'
  content: 'Nice article!

    We just completed the largest-ever case study on lightweight code review at Cisco.  ("Lightweight" meaning the type of review you talk about, not meetings-based formal inspections.)  Our findings agree with your assessment; we also have some specific data.

    For example, it turns out that if the author prepares for the review by running through his own changes and annotates what he did, this greatly reduces the number of defects in the code and makes the review go faster.  In close inspection of those reviews, we found that in having to describe the changes the author would realize that certain things weren''t right and would fix it before the review started.

    In other words, self-review is already a big improvement over no-review and can even speed up real review.

    We found another interesting effect we dubbed the "Ego Effect."  Just the fact that your code is going to be reviewed critically by a co-worker or boss makes you think twice while you''re writing the code.  No one wants to be known as the guy who never checks for NULL or can''t write decent doc.  So even before review begins everyone becomes better at writing code.

    Also the "Ego Effect" works even with "random drug test" process where you review check-ins at random.  Saves time if you want to try code review but not fully commit just yet.

    [Start Blatent Product Pitch]

    We just wrote a book (http://codereviewbook.com) on peer code review that includes this case study and lots of other info.  We''re giving them away free on that web site.

    We (Smart Bear, http://codecollab.com) make a tool that assists with these types of reviews by integrating with version control and showing side-by-side views of changes that everyone can comment on and open defect for.  It''s easy to upload files because of the integration, and it''s easy to track reviews and conversations.  Plus it lets reviews verify that fixes really are fixes before or after code is checked into version control.

    [End Blatent Product Pitch]

    Thanks for a great article!'
  replies: []
- id: 5593
  author: Jason Cohen
  date: '2006-06-22T08:25:13'
  content: 'Nice article!

    We just completed the largest-ever case study on lightweight code review at Cisco.  ("Lightweight" meaning the type of review you talk about, not meetings-based formal inspections.)  Our findings agree with your assessment; we also have some specific data.

    For example, it turns out that if the author prepares for the review by running through his own changes and annotates what he did, this greatly reduces the number of defects in the code and makes the review go faster.  In close inspection of those reviews, we found that in having to describe the changes the author would realize that certain things weren''t right and would fix it before the review started.

    In other words, self-review is already a big improvement over no-review and can even speed up real review.

    We found another interesting effect we dubbed the "Ego Effect."  Just the fact that your code is going to be reviewed critically by a co-worker or boss makes you think twice while you''re writing the code.  No one wants to be known as the guy who never checks for NULL or can''t write decent doc.  So even before review begins everyone becomes better at writing code.

    Also the "Ego Effect" works even with "random drug test" process where you review check-ins at random.  Saves time if you want to try code review but not fully commit just yet.

    [Start Blatent Product Pitch]

    We just wrote a book (http://codereviewbook.com) on peer code review that includes this case study and lots of other info.  We''re giving them away free on that web site.

    We (Smart Bear, http://codecollab.com) make a tool that assists with these types of reviews by integrating with version control and showing side-by-side views of changes that everyone can comment on and open defect for.  It''s easy to upload files because of the integration, and it''s easy to track reviews and conversations.  Plus it lets reviews verify that fixes really are fixes before or after code is checked into version control.

    [End Blatent Product Pitch]

    Thanks for a great article!'
  replies: []
- id: 5594
  author: Aaron Erickson
  date: '2006-06-22T08:49:03'
  content: 'Blocking code reviews...  just who is proposing that.  Seems like a terrible idea to me.  Not sure how you accomplish a daily build, or get to any kind of reasonable amount of velocity, by having a situation where developers have to wait around for their boss to inspect their code before they can write more.

    I have never worked in such a shop.  That said, I did work in a shop where you had to have DBA approval before you could enter a configuration string in the development version (!) of the configuration database (said company insisted that web.config was not sufficient... ''nother story for another day).

    What appears, universally, in said kind of system is that a.) people create a shadow structure that is more flexible and/or b.) people start hardcoding stuff because dealing with the "configuration bereau" is too cumbersome.

    With blocking code reviews, I imagine what starts to appear something similar.  Shadow structures for the people that want to succeed in spite of the barriers put before them, people who simply check out entire modules so they can put in one massive change, or, in environments with lazier people, lots of internet surfing while devs wait for the "code review team" to bless the commit.

    Ugh.  Sounds like another case of purity gone awry!'
  replies: []
- id: 5595
  author: Sam
  date: '2006-06-22T09:55:49'
  content: Wow, all that yammering on about code reviews and not a single comment about tools like PMD or intelligent IDEs like IntelliJ that help you find bugs before someone else does?  It's especially amusing since you assert that code reviews don't find critical flaws.  Given that premise (which is flat out wrong, by the way) I would expect someone like you to strongly promote a tool like PMD.
  replies: []
- id: 5596
  author: anjan bacchu
  date: '2006-06-22T10:39:42'
  content: 'hi there,

    We use non-blocking. Anyone can work on any code. Some people get exclusive rights to review certain modules -- in such cases, the developer usually conults the REVIEWER beforehand.

    I''ve previously worked in BLOCKING mode too -- but that was when we used SEI CMM LEVEL 5 practices to review fairly large blocks of code (after high level design and low level design were reviewed and approved).

    No reviewing -- yeah, this does NOT keep most developers honest. Your ego/pride prevents you from checking in mediocre code when you know someone might review it OR worse, quote you for BAD CODE :-)

    BTW, what reviewing happens for TestNG ?

    BR,

    ~A'
  replies: []
- id: 5597
  author: Alexandru Popescu
  date: '2006-06-22T14:28:25'
  content: 'I have posted about some Eclipse plugins that may help with code reviews: http://themindstorms.blogspot.com/2006/06/code-reviews-and-tools-plugins-that.html.

    ./alex

    --

    .w( the_mindstorm )p.

    ---

    (http://themindstorms.blogspot.com)'
  replies: []
- id: 5598
  author: Rob
  date: '2006-06-22T14:32:45'
  content: 'Personally, I just finished doing some code reviews, so this was a timely entry to find. I think your approach here, though, of considering a couple approaches, while interesting, is a case of perhaps limiting your outcome by first limiting your choices. Have you looked at review tools? Jupiter, the plugin for eclipse is actually pretty nice. You add issues, and they appear only to the person whose code is being reviewed, in a list, like compiler errors, and when they click, it takes them to the place in the code.

    Another problem w/reviews that you don''t mention, is that they tend to suffer from the following problem: Joe writes piece of code X, Jim goes to review X. Right away there are issues like variable names, Strings that should be classes, etc. The surface of the code is never really penetrated. Furthermore, the programmer who is being reviewed comes away thinking ''wow, that''s all you found?'' When in reality, it''s more a case of the fact that you couldn''t really get down into a serious review because the other issues got in the way. You schedule another review. By that time, though, the bus has left the station. Even if you are going to hold things for changes, and then try and jump right back on it, there are other things that need reviewing that have been done in the meantime.

    Finally, code reviews tend to be taken very literally. If I see someone write a bunch of code, and then in the course of reviewing it, find that a disturbing amount of what was done are ''utility'' methods, I comment on that, what I am saying is not move these methods into domain classes, it''s don''t write so many utility methods. In other words, reviews can actually mask mentoring problems (something pairing addresses that you don''t mention). Actually, when I say mentoring, I don''t even mean one person telling someone who is more junior, but the basic idea that someone who is focussed on one thing is neglecting another, and that thing can come into someone else''s purview.

    Another good post though.'
  replies: []
- id: 5599
  author: Kevin Klinemeier
  date: '2006-06-22T16:07:09'
  content: 'I developed an approach that seems to combine the aspects of code reviews with pair programming.  Here it is in a nutshell:

    Do little (or no) preparation.  Show up at the code review meeting and read the code.  If it doesn''t make sense, ask questions and document the answers.

    Do the modifications during the code review, not afterwards.  In my experience, the reason that code review gets dropped is that it''s perceived as a drain on development resources.  If you don''t have time to do the modifications, either drop them altogether, or get them prioritized in your current project schedule.

    We review code in groups of no more than 5, and we do it in a room with a projector, running eclipse.  If/when we find an issue, we fix it.  As soon as code review time is up, we run the tests and check it in.  The atmosphere is often light and congenial.

    We have about thirteen developers, who are split into several overlapping groups of code reviewers.    This process helps us all keep on the same track in terms of standards and approaches, and doesn''t get cancelled at crunchtime.

    -Kevin'
  replies: []
- id: 5600
  author: Kevin Klinemeier
  date: '2006-06-22T16:07:37'
  content: 'I developed an approach that seems to combine the aspects of code reviews with pair programming.  Here it is in a nutshell:

    Do little (or no) preparation.  Show up at the code review meeting and read the code.  If it doesn''t make sense, ask questions and document the answers.

    Do the modifications during the code review, not afterwards.  In my experience, the reason that code review gets dropped is that it''s perceived as a drain on development resources.  If you don''t have time to do the modifications, either drop them altogether, or get them prioritized in your current project schedule.

    We review code in groups of no more than 5, and we do it in a room with a projector, running eclipse.  If/when we find an issue, we fix it.  As soon as code review time is up, we run the tests and check it in.  The atmosphere is often light and congenial.

    We have about thirteen developers, who are split into several overlapping groups of code reviewers.    This process helps us all keep on the same track in terms of standards and approaches, and doesn''t get cancelled at crunchtime.

    -Kevin

    http://zipwow.blogspot.com/2005/05/combining-code-review-with-paired.html'
  replies: []
- id: 5601
  author: Dirk van Rensburg
  date: '2006-06-22T22:00:49'
  content: 'I spent some time at a company getting a peer review sytem in place. The project was mainly in a maintenance/new features phase, which in my opinion, is the perfect place for lightweight peer reviews.

    The problem at this company was that the code base was a huge monster that no one could really read let alone understand. The first thing that comes to mind is refactoring, but the team consists mainly of juniorish developers who where too scared to seriously rework the code. So we introduced code reviews as way of controlling refactoring by providing a type of "safety net" because you knew someone else will double check you.

    We took a combination of the blocking and non blocking approach by reviewing code developed during the last cycle before deploying it on to the QA environment. The reviewer decides whether the code is fit to go to QA and the developer might have to do some rework even if the code goes to QA. The whole process was controlled by the teamlead who assigned reviews and only included reviewed code into the next QA release.

    I found the learning aspect of reviews very interesting. Doing reviews of other people''s code encouraged developers to start thinking of other ways of solving a problem. This had the effect that they starting thinking about their own code, instead of doing the first thing that comes to mind.

    The system worked using a feedback loop where the developer updates the review saying whether he accepts or rejects the comment and if rejected why.

    I was faced with the problem of documenting the reviews for feedback so I developed a small little system specifically for the process described above.

    Peer CRS(http://sourceforge.net/projects/peer-crs)

    This provided us with a history of reviews and you could easily look up a review for a specific defect in a specific cycle.'
  replies: []
- id: 5602
  author: Michael Slattery
  date: '2006-06-23T09:57:33'
  content: 'I disagree with the statement: "Code reviews don''t reveal critical flaws in your code."  I''ve found that they do.  But you have to be smart about how you do a review.  At the very least, they *prevent* flaws.

    I think it''s most important to thoroughly review test code.  It''s also important to use tools like PMD, FindBugs, and JDepend to reduce time spent pointing out stylistic issues (and some design issues identifiable by metrics).

    We''ve successfully done peer reviews.  Before a commit, another programmer walks over and looks at just the visual diffs.  One of our goals is to make it unnecessary for the author to need to explain his/her work.  We see that as an indicator of too few comments, poorly named identifiers, poor original specs, and/or code that''s not simple enough.

    When we do projects involving pair programming we still do a light peer review before checking in by another programmer.  That''s to deal with the "single mind" mentality of the pair.  We typically  only pair during times of heavy lifting.'
  replies: []
- id: 5603
  author: David Gageot
  date: '2006-06-24T01:44:15'
  content: I've heard that at Google, you have a referrer for every class, every module, every feature. Is it true and how does this impact code review ?
  replies: []
- id: 5604
  author: Gordon J Milne
  date: '2006-06-25T18:37:57'
  content: 'Is it difficult to argue whether the benfits of shared code ownership are over-hyped since so much depends on one''s view of what is, and is not, hype. Suffice to say, I think that there are many benefits to shared code ownership.

    One of the key benefits of shared code ownership is that it reduces the risk of key individuals holding the company to ransom, or risk disaster when someone gets sick or leaves.

    Everyone on a team should, I think, feel free to inspect and, if necessary modify, the work of others. More importantly, a developer should be able to "fix" the code of others when it becomes clear that the code contains a hitherto undiscovered defect.

    Now, this nonsense about shared code ownership being a Pair Programming thing.

    What absolute tosh!

    Most of the work environments that I experienced over the last decade have encourgaed a high degree of code owenership. I have been involved in support side of the business as well as the development side. There is nothing quite like an irate customer for generating the motivatation to inspect the work of colleagues and fix their mistakes.

    It seems to me that some developers like to think they live in a Never Never Land where the consequences of their actions are so remote that then never have to grow up.

    In the real world, the company owns the code and you, as an employee, have every right to modify that code if it contains mistakes.

    Less of this nonsense of individual ownership.  If anyone, other than the company, owns the code, it is the team that develops it. The team needs to get things done. Shared ownership is the way forward.

    An example of the opposite behaviour was the way that the first software team leader at my current employer worked. Everyone was (effectively) allocated an area of work. Everyone owned their own area. You needed to negotiate with the owner to get things changed. That may sound like "team work" to you but it sounds like "fortress development" to me.

    It didn''t work and slowed us down a lot. In the end, after the TL left, we were able to take a really good at some of his code. It was full of good ideas but an awful implementation. Methods had awful names; one class, in particular, had grown out of control. He resisted renaming it for fear that something would break. As soon as he left we renamed it after its purpose. Over time it has been refactored on a release-by-release basis so that we, the code owners, can understand its operation and rationale.

    Shared code ownership is what teams need to work well. Silo development may sound more "efficient" or "effective" but it rarely is.

    It is the group dynamic that matters. Shared code ownership is a way to get people to collaborate. Personal ownership does not.'
  replies: []
- id: 5605
  author: Julian
  date: '2006-06-25T19:42:46'
  content: 'For blocking code reviews to work, everyone needs to treat code reviews as their highest priority. My current team follows that philosophy, while my previous team, to my immense frustration, didn''t.

    There''s another way to classify code reviews. Individual code reviews, in which the reviewer studies the code at their desk and sends out an email with their comments, are quite productive. However, code review meetings with multiple participants are a waste of time.'
  replies: []
- id: 5606
  author: Aaron Erickson
  date: '2006-06-26T07:22:20'
  content: 'Julian: "everyone needs to treat code reviews as their highest priority"

    I suspect that we can''t make everything our highest priority.  Code reviews probably rank somewhere below writing good code in the first place (though perhaps not by much).  Also, I thought writing good tests was a pretty high priority also.  It aggrivates me when someone takes a perfectly good tactic and elevates it to the "highest priority" status... leads to lots of tails wagging dogs.

    The problem is *blocking* code reviews - not code reviews.  If reviews are a high priority (somewhere in the top 5), you will have no need for blocking in the first place.'
  replies: []
- id: 5607
  author: bobazon
  date: '2006-06-26T08:19:43'
  content: 'Blocking code reviews are used at a big online retailer once known for selling books. It was mainly a turf war with massive egos. Changes were nitpicky but mandatory- you might write code in 4 hours but spend 10 days making various teams happy with your decision to use certain variable names, methods, etc.

    At one time they had a system that sent email when code was checked in. That was essentially a nonblocking code review- and if poeple paid attention to the files coming in, you might get an email for the right reasons: not commenting the code, forgetting a case that would break the code, etc. Eventually that became unweildy- too much mail, people were pressured to work harder, which meant reviewing others'' code became a lower priority.

    Knowing that email would be sent to interested parties worked well- even if nobody looked at the code, you knew someone else would see it, so you acted like a good citizen.'
  replies: []
- id: 5608
  author: Guy Davis
  date: '2006-06-26T11:36:50'
  content: 'Good points.  I introduced lightweight reviews at my last two positions and have been very pleased with the results.

    I always felt guilty though that we weren''t pair programming all the time since that''s what the cool kids (XP) were doing.  It''s nice to know we''re alone in taking a pragmatic approach.

    The rest of my comments are at:

    http://www.guydavis.ca/log/comments.jsp?id=926'
  replies: []
- id: 5609
  author: Rafael Naufal
  date: '2006-06-26T19:53:29'
  content: 'In my company, I try to do code reviews all the time. I think it''s an important task. Most of all because you can check if your code is readable and it''s an oportunity to validate if good principles have been applied. From others code I try to put comments if my understanding isn''t clear enough after two times reading the code. It helps to keep code with worse quality more manutenable, giving a point of view which it''s intended to do. I think it''s important to share with the co-workers this kind of code reviews, mainly to disseminate knowledge and to achieve best practices.

    Rafael Naufal

    http://rnaufal.livejournal.com'
  replies: []
- id: 5610
  author: '&#21537;&#21679;&#28919;&#37230;'
  date: '2006-07-05T23:18:04'
  content: '&#20840;&#28909;&#20132;&#25442;&#22120;

    &#21537;&#21679;&#28919;&#37230;

    &#30002;&#22522;&#21537;&#21679;&#28919;&#37230;'
  replies: []
- id: 5611
  author: anonymous
  date: '2006-07-12T15:37:57'
  content: '> In my experience, the only system that works

    > is non-blocking code reviews,

    I''m jealous. I''d love to be so confident to know that my system is the only one that works. Or maybe I should just wish for having a lot less experience.

    I''ve used both other review forms and found them usually to be more effective than "non-blocking code reviews."'
  replies: []
- id: 5612
  author: anonymous
  date: '2006-07-12T15:38:35'
  content: '> In my experience, the only system that works

    > is non-blocking code reviews,

    I''m jealous. I''d love to be so confident to know that my system is the only one that works. Or maybe I should just wish for having a lot less experience.

    I''ve used both other review forms and found them usually to be more effective than "non-blocking code reviews."'
  replies: []
- id: 5613
  author: '&#29359;&#24471;&#19978;'
  date: '2006-09-29T17:58:55'
  content: '[URL=http://u.7town.com/Pub/mms/3/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/3/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/8/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#22270;&#38083;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/2/index.html?uid=16766]&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;[/url] [URL=ttp://u.7town.com/Pub/mms/3/index.html?uid=16766]mp3&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/8/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#22270;&#38083;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/10/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;[/url] [URL=ttp://u.7town.com/Pub/mms/3/index.html?uid=16766]mp3&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/8/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#22270;&#38083;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/13/index.html?uid=16766]&#19979;&#36733;&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/3/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/8/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#22270;&#38083;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/9/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/3/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/14/index.html?uid=16766]&#25163;&#26426;&#22270;&#38083;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/5/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/6/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/14/index.html?uid=16766]&#25163;&#26426;&#22270;&#38083;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/9/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/2/index.html?uid=16766]&#20813;&#36153;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/8/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#22270;&#38083;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/3/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/12/index.html?uid=16766]&#20813;&#36153;&#38083;&#22768;[/url] [URL=ttp://u.7town.com/Pub/mms/12/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/11/index.html?uid=16766]mp3&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/6/index.html?uid=16766]&#20813;&#36153;&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/10/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/1186/index.html?uid=16766]&#20813;&#36153;mp3&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url][URL=http://u.7town.com/Pub/mms/14/index.html?uid=16766]&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/14/index.html?uid=16766]&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/8/index.html?uid=16766]&#25163;&#26426;mp3&#38083;&#22768;&#19979;&#36733;[/url][URL=http://u.7town.com/Pub/mms/3/index.html?uid=16766]&#20813;&#36153;&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://u.7town.com/Pub/mms/13/index.html?uid=16766]mp3&#38083;&#22768;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/7/index.html?uid=16766]&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;[/url] [URL=http://u.7town.com/Pub/mms/10/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mms/10/index.html?uid=16766]mp3&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;[/url] [URL=http://u.7town.com/Pub/mms/14/index.html?uid=16766]&#19979;&#36733;&#38083;&#22768;[/url]  [URL=http://u.7town.com/Pub/mms/10/index.html?uid=16766]&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://u.7town.com/Pub/mgame/371/index.html?uid=16766]&#25163;&#26426;&#28216;&#25103;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mgame/353/index.html?uid=16766]&#19979;&#36733;&#25163;&#26426;&#28216;&#25103;[/url]

    [URL=http://u.7town.com/Pub/mgame/352/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#28216;&#25103;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mgame/373/index.html?uid=16766]&#19979;&#36733;&#20813;&#36153;&#25163;&#26426;&#28216;&#25103;[/url]

    [URL=http://u.7town.com/Pub/mgame/390/index.html?uid=16766]&#25163;&#26426;&#28216;&#25103;&#20813;&#36153;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/Pub/mgame/1143/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#28216;&#25103;[/url]

    [URL=http://u.7town.com/Pub/mgame/334/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#28216;&#25103;[/url]

    [URL=http://u.7town.com/Pub/mmv/1190/index.html?uid=16766]&#25163;&#26426;&#35270;&#39057;[/url]

    [URL=http://u.7town.com/Pub/mmv/181/index.html?uid=16766]&#25163;&#26426;&#35270;&#39057;[/url]

    [URL=http://u.7town.com/Pub/mmv/1190/index.html?uid=16766]&#25163;&#26426;&#35270;&#39057;[/url]

    [URL=http://u.7town.com/Pub/mmv/180/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#35270;&#39057;[/url]

    [URL=http://u.7town.com/Pub/mmv/181/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#35270;&#39057;[/url]

    [URL=http://u.7town.com/Pub/sms/17/index.html?uid=16766]&#25163;&#26426;&#30701;&#20449;[/url]

    [URL=http://u.7town.com/Pub/ivr/176/index.html?uid=16766]&#20813;&#36153;&#28857;&#27468;[/url]

    [URL=http://u.7town.com/Pub/ivr/809/index.html?uid=16766]&#20813;&#36153;&#28857;&#27468;[/url]

    [URL=http://u.7town.com/Pub/ivr/1173/index.html?uid=16766]&#20813;&#36153;&#28857;&#27468;[/url]

    [URL=http://u.7town.com/Pub/ivr/844/index.html?uid=16766]&#20813;&#36153;&#28857;&#27468;[/url]

    [URL=http://u.7town.com/Pub/ivr/185/index.html?uid=16766]&#20813;&#36153;&#28857;&#27468;[/url]

    [URL=http://u.7town.com/Pub/ivr/193/index.html?uid=16766]&#20813;&#36153;&#28857;&#27468;[/url]

    [URL=http://u.7town.com/Pub/mag/1225/index.html?uid=16766]&#25163;&#26426;&#26434;&#24535;[/url]

    [URL=htp://u.7town.com/Pub/mag/1224/index.html?uid=16766]&#25163;&#26426;&#26434;&#24535;[/url]

    [URL=http://u.7town.com/Pub/mag/1222/index.html?uid=16766]&#25163;&#26426;&#26434;&#24535;[/url]

    [URL=hhttp://u.7town.com/Pub/mag/1220/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#26434;&#24535;[/url]

    [URL=http://u.7town.com/Pub/mag/1228/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#26434;&#24535;[/url]

    [URL=http://u.7town.com/Pub/mag/1227/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#26434;&#24535;&#19979;&#36733;[/url]

    [URL=http://www.u8u.com/search/1.html?c=230&a=21712&b=0&d=0&e=&keywords]&#22812;&#26354;&#12289;&#32422;&#23450;&#31561;&#26356;&#22810;&#31934;&#24425;&#20813;&#36153;&#38083;&#22768;[/url]

    [URL=http://pub.lele.com/lib/780.html?a=21712]&#20813;&#36153;&#28857;&#27468;&#20840;&#39057;&#36947;[/url]

    [URL=http://pub.lele.com/lib/867.html?a=21712]&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://pub.lele.com/lib/850.html?a=21712]&#20196;&#20320;&#28385;&#24847;&#30340;&#38083;&#22768;&#22270;&#29255;&#21644;&#31069;&#31119;[/url]

    [URL=http://u2.caiku.com/new21/new21.htm?uid=22481]&#25163;&#26426;&#38083;&#19979;&#36733;&#20813;&#36153;&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://u2.caiku.com/new20/new20.htm?uid=22481]&#25163;&#26426;&#38083;&#22768;&#25163;&#26426;&#22270;&#29255;[/url]

    [URL=http://u2.caiku.com/new25/new25.htm?uid=22481]&#26368;&#26032;&#20813;&#36153;&#24425;&#20449;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://u2.caiku.com/new12/new12.htm?uid=22481]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#24453;&#26426;&#22270;&#29255;[/url]

    [URL=http://www.caiku.com/subject//zhoujielun/?style=1&uid=22481]&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;&#21608;&#26480;&#20262;&#19987;&#39064;[/url]

    [URL=http://ivr1.caiku.com//i4/?uid=22481]&#20813;&#36153;&#28857;&#27468;&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://u.caiku.com/?style=1&uid=22481]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://code1.caiku.com/800x600.htm?uid=22481]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u2.caiku.com/new23dj/dj.htm?uid=22481]&#20813;&#36153;DJ&#33310;&#26354;&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u2.caiku.com/new23dj/dj.htm?uid=22481]&#20813;&#36153;DJ&#33310;&#26354;&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://love1.caiku.com/love2/?style=1&uid=22481]&#20132;&#21451;&#32852;&#30431;[/url]

    [URL=http://love1.caiku.com//758x100.asp?style=1&uid=22481]&#20132;&#21451;&#20840;&#39057;&#36947;[/url]

    [URL=http://www.caiku.com/subject/815/?style=1&uid=22481]&#20013;&#31179;&#20813;&#36153;&#28857;&#27468;&#19987;&#39064;[/url]

    [URL=http://love1.caiku.com/love2/?style=1&amp;uid=22481]&#26080;&#38480;&#37327;&#30005;&#24433;&#20813;&#36153;&#19979;&#36733;[/url]

    [URL=http://code4.1000vod.com//m20/?uid=22481]&#20813;&#36153;&#30005;&#24433;&#20840;&#39057;&#36947;[/url]

    [URL=http://u2.caiku.com/new10/new10.htm?uid=22481]&#25163;&#26426;&#38083;&#22768;mp3&#38083;&#22768;&#25163;&#26426;&#22270;&#29255;[/url]

    [URL=http://pub.lele.com/lib/782.html?a=21712]&#25163;&#26426;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;&#20840;&#39057;&#36947;[/url]

    [URL=http://www.caiku.com/subject/2006WORLDCUP/?style=1&uid=22481]&#25163;&#26426;&#22270;&#29255;&#25163;&#26426;&#38083;&#22768;&#19990;&#30028;&#26479;&#19987;&#39064;[/url]

    [URL=http://www.caiku.com/subject//love/?style=1&uid=22481]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#31934;&#24425;&#22270;&#29255;&#28010;&#28459;&#29233;&#24773;[/url]

    [URL=http://www.caiku.com/subject//MakeLauth/?style=1&uid=22481]&#25630;&#31505;&#38083;&#22768;&#22270;&#29255;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://u.7town.com/html/970_2215/jgl1/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#29305;&#25928;&#38083;&#22768;&#25163;&#26426;&#22270;&#29255;MP3&#38083;&#22768;[/url]

    [URL=http://u.7town.com/html/2/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://u.7town.com/html/760_1405/jgl1/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;MP3&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/ivr/776_1762/jgl1/index.html?uid=16766]&#20813;&#36153;&#28857;&#27468;&#25163;&#26426;&#38083;&#22768;&#21644;&#24358;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/mgame/780_2517/dy1/index.html?uid=16766]&#25163;&#26426;&#28216;&#25103;&#25163;&#26426;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/sms/760_2040/yy1/index.html?uid=16766]&#25163;&#26426;&#30701;&#20449;&#25163;&#26426;&#38083;&#22768;&#25163;&#26426;&#22270;&#29255;&#20813;&#36153;&#19979;&#36733;[/url]

    [URL=http://7town.mag.zcom.com/mag/760_2595/jgl1/index.html?uid=16766]&#25163;&#26426;&#26434;&#24535;&#20813;&#36153;&#19979;&#36733;&#25163;&#26426;&#20813;&#36153;&#38083;&#22768;&#29305;&#25928;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;&#32654;&#22899;&#22270;[/url]

    [URL=http://free.163x.net/guestbook/view.asp?id=088]&#20813;&#36153;&#38083;&#22768;[/url]

    [URL=http://www.cbde.biz/blog/user1/hanyanhu123/archives/2006/639.html]&#20813;&#36153;&#38083;&#22768;[/url]

    [URL=http://www.cbde.biz/blog/user1/hanyanhu123/archives/2006/638.html]&#20813;&#36153;&#38083;&#22768;[/url]

    [URL=http://pub.lele.com/lib/782.html?a=21712]&#25163;&#26426;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;&#20840;&#39057;&#36947;[/url]

    [URL=http://u2.caiku.com/new25/new25.htm?uid=22481]&#26368;&#26032;&#20813;&#36153;&#24425;&#20449;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://pub.lele.com/lib/782.html?a=21712]&#25163;&#26426;&#38083;&#22768;&#20813;&#36153;&#19979;&#36733;&#20840;&#39057;&#36947;[/url]

    [URL=http://u.7town.com/mgame/780_2517/dy1/index.html?uid=16766]&#25163;&#26426;&#28216;&#25103;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/mgame/760_2280/dy1/index.html?uid=16766]&#25163;&#26426;&#28216;&#25103;&#19979;&#36733;&#22823;&#20840;[/url]

    [URL=http://u.7town.com/mgame/780_2455/ly1/index.html?uid=16766]&#35834;&#22522;&#20122; &#19977;&#26143;&#31561;&#21508;&#31867;&#25163;&#26426;&#28216;&#25103;[/url]

    [URL=http://u.7town.com/MMV/780_2152/ly1/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#35270;&#39057; &#21345;&#36890;&#21160;&#28459; &#24433;&#35270;&#22823;&#29255;&#31561;&#26356;&#22810;&#31934;&#24425;...[/url]

    [URL=http://u.7town.com/html/780_2140/Daywang1/index.html?uid=16766]&#28909;&#38376;&#20813;&#36153;&#25163;&#26426;&#38083;&#22768; &#22270;&#29255;&#19979;&#36733;[/url]

    [URL=http://7town.mag.zcom.com/mag/1000_1810/ly1/index.html?uid=16766]&#25163;&#26426;&#26434;&#24535; &#26102;&#23578;&#28526;&#27969; &#23478;&#23621;&#25151;&#20135; &#30005;&#24433; &#27773;&#36710;&#26053;&#28216;&#31561;&#26356;&#22810;[/url]

    [URL=http://u.7town.com/mgame/750_120/dy1/index.html?uid=16766]&#26368;&#26032;&#25163;&#26426;&#28216;&#25103;&#19979;&#36733;mp3&#38083;&#22768; &#20813;&#36153;&#25163;&#26426;&#22270;&#29255;[/url]

    [URL=http://u.7town.com/html/778_1740/ly1/index.html?uid=16766]MP3&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/html/780_2140/Daywang1/index.html?uid=16766]&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/html/760_1830/ly1/index.html?uid=16766]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#19979;&#36733;[/url]

    [URL=http://u.7town.com/ivr/776_1762/jgl1/index.html?uid=16766]&#25163;&#26426;&#20813;&#36153;&#28857;&#27468;&#20840;&#39057;&#36947; &#24110;&#20320;&#36865;&#31069;&#31119;[/url]

    &#21508;&#31181;&#22411;&#21495;&#28508;&#27700;&#27893;&#27700;&#32593;&#20026;&#20320;&#37327;&#20307;&#23450;&#20570;&#32852;&#31995;&#30005;&#35805;0319-7908077

    &#21508;&#31181;&#22411;&#21495;&#28508;&#27700;&#27893;&#27700;&#32593;&#20026;&#20320;&#37327;&#20307;&#23450;&#20570;&#32852;&#31995;&#30005;&#35805;0319-7908077

    &#21508;&#31181;&#22411;&#21495;&#28508;&#27700;&#27893;&#27700;&#32593;&#20026;&#20320;&#37327;&#20307;&#23450;&#20570;&#32852;&#31995;&#30005;&#35805;0319-7908077

    [URL=http://077.any2000.com]&#27426;&#36814;&#30331;&#20837; &#33719;&#24471;&#26356;&#22810;&#31934;&#24425;[/url]

    [URL=http://077.any2000.com]&#27426;&#36814;&#30331;&#20837; &#33719;&#24471;&#26356;&#22810;&#31934;&#24425;[/url]

    [URL=http://www.caiku.com/subject//LiuDeHua/?style=1&uid=22481]&#21016;&#24503;&#21326;[/url]

    [URL=http://www.caiku.com/subject//SunYanZi/?style=1&uid=22481]&#23385;&#29141;&#23039;[/url]

    [URL=http://www.caiku.com/subject//twins/?style=1&uid=22481]twins[/url]

    [URL=http://www.caiku.com/subject//wanglihong/?style=1&uid=22481]&#29579;&#21147;&#23439;[/url]

    [URL=http://www.caiku.com/subject//S.H.E/?style=1&uid=22481]S.H.E[/url]

    [URL=http://www.caiku.com/subject//ZhangGuoRong/?style=1&uid=22481]&#24352;&#22269;&#33635;[/url]

    [URL=http://img.zhangxiu.com/2/236.html?f=7309]&#25163;&#26426;&#22270;&#29255;&#38083;&#22768;[/url]

    [URL=http://img.zhangxiu.com/13/262.html?f=7309]&#26368;&#26032;&#25163;&#26426;&#28216;&#25103;&#19979;&#36733;[/url]

    [URL=http://img.zhangxiu.com/2/235.html?f=7309]&#25163;&#26426;&#38083;&#22768;&#22823;&#20840;[/url]

    [URL=http://u.5ku.com/pub5/default.html?a=201757&b=002001018&c=1]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;&#22270;&#29255;[/url]

    [URL=http://u.5ku.com/default.aspx?a=201757&b=002001&c=1]&#28909;&#38376;&#25163;&#26426;&#38083;&#22768;&#19971;&#24425;&#25163;&#26426;&#22270;&#29255;[/url]

    [URL=http://www.blogcn.com/u2/84/31/7758505/blog/40875070.html]&#20813;&#36153;&#25163;&#26426;&#38083;&#22768;[/url]

    [URL=http://blog.sina.com.cn/u/1252530120]&#32654;&#22270;[/url]

    [URL=http://blog.91d.cn/blog.asp?name=077]&#38083;&#22768;&#22270;&#29255;[/url]

    [URL=http://free.163x.net/guestbook/view.asp?id=088]&#38083;&#22768;&#22270;&#29255;[/url]

    [URL=http://www.safree.net/free/gb/usbook.asp?id=&#25163;&#26426;&#38083;&#22768;]&#38083;&#22768;&#22270;&#29255;[/url]'
  replies: []
- id: 5614
  author: carrie
  date: '2006-12-05T23:12:15'
  content: 'Dear sirs,

    We obtained your name and address form the internet. It could be possible that you need optical components, so please allow me introduce our company, Boxin photoelectric co., Ltd.

    We are located in China and manufacture products according to your design and can provide lens, prism, windows, mirrors, reflectors, filter, wave'
  replies: []
- id: 5615
  author: hjgj
  date: '2006-12-16T14:38:58'
  content: '&#20225;&#19994;&#30005;&#23376;&#21830;&#21153;&#25351;&#21335;

    &#25968;&#23383;&#23551;&#24030;&#23551;&#21439;&#38376;&#25143;

    &#25299;&#37326;&#27969;&#27700;&#32447;

    &#27969;&#27700;&#32447;&#34892;&#19994;&#32593;

    &#37329;&#20449;&#36755;&#36865;&#35774;&#22791;&#36755;&#36865;&#26426;

    &#37329;&#20449;&#24037;&#19994;&#27969;&#27700;&#32447; &#33258;&#21160;&#21270;&#27969;&#27700;&#32447; &#12289;&#30005;&#21160;&#36710;&#27969;&#27700;&#32447;

    &#37329;&#20449;&#36755;&#36865;&#32447;&#12289;&#36755;&#36865;&#27969;&#27700;&#32447;

    &#37329;&#20449;&#35013;&#37197;&#32447;&#12289;&#35013;&#37197;&#27969;&#27700;&#32447;

    &#37329;&#20449;&#29983;&#20135;&#32447;&#29983;&#20135;&#27969;&#27700;&#32447;

    &#37329;&#20449;&#27969;&#27700;&#32447;

    &#38597;&#40857;&#27969;&#27700;&#32447;

    &#38597;&#40857;&#29983;&#20135;&#32447;

    &#38597;&#40857;&#36755;&#36865;&#35774;&#22791;,

    &#38597;&#40857;&#29983;&#20135;&#27969;&#27700;&#32447;,

    &#38597;&#40857;&#36755;&#36865;&#26426;,

    &#38597;&#40857;&#36755;&#36865;&#32447;

    &#22958;&#22958;&#23398;&#30005;&#33041;

    &#38597;&#40857;&#24037;&#19994;&#27969;&#27700;&#32447;

    &#38597;&#40857;&#35013;&#37197;&#32447;

    &#22958;&#22958;&#23398;&#30005;&#33041;

    &#23433;&#24509;&#21830;&#21153;

    &#25299;&#37326;&#29983;&#20135;&#32447;'
  replies: []
- id: 5616
  author: dfg
  date: '2007-03-22T00:43:10'
  content: '[url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302044]&#19977;&#32423;&#29255;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302043]&#40644;&#33394;&#30005;&#24433;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302041]&#40644;&#29255;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302040]a&#29255;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302039]&#25104;&#20154;&#30005;&#24433;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302037]&#28608;&#24773;&#30005;&#24433;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302036]&#28608;&#24773;&#23567;&#30005;&#24433;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302035]&#28608;&#24773;&#22270;&#29255;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302034]&#28608;&#24773;&#35270;&#39057;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302033]&#22823;&#20247;&#25104;&#20154;&#32593;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302032]&#35064;&#20307;&#20889;&#30495;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302031]&#35064;&#29031;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302028]&#20813;&#36153;&#28139;&#30005;&#24433;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302026]&#32654;&#22899;&#24615;&#20132;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302025]&#24615;&#20132;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302024]&#24378;&#22904;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302023]&#20599;&#25293;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302022]&#24615;&#29233;&#30005;&#24433;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302021]&#24615;&#31119;&#32852;&#30431;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302017]&#20570;&#29233;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302015]&#20570;&#29233;&#30005;&#24433;[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302013]7sese[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302011]18dy[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302010]98bb[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302007]99bb[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302005]863863[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302004]aisex[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302003]dianying[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=302000]happysea[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=301998]happysky[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=301997]tw18[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=301993]kiss88[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=301991]wanmm[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=301989]x365x[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=301987]xiao77[/url]

    [url=http://www.bbmao.com/collection/view_fav_link.jsp?viewid=301978]seqing[/url]'
  replies: []
- id: 5617
  author: viccol
  date: '2007-08-16T01:44:10'
  content: 'www.viccol.com

    runescape money

    runescape gold

    runescape mil

    runescape GP

    rs money'
  replies: []
- id: 5618
  author: toprs
  date: '2008-01-25T16:44:38'
  content: '444'
  replies: []
- id: 5619
  author: toprs
  date: '2008-01-25T16:47:41'
  content: runescape gold
  replies: []
- id: 5620
  author: Rsgoldseller
  date: '2008-09-25T03:35:33'
  content: www.runescape2gold.net is a professional Runescape gold provider. Fast deliver, 24 hours 7 days service. You can find your best feelings here.
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/magnifying-glass.gif)

Over the years, I have had the opportunity to work with various code review systems, and I have come to believe that one particular approach works better than the other.  Here is what I've learned.

There are basically three ways to approach code reviews:

  * **No code review.**   Everybody checks in code liberally, and while everyone is welcome to examine change lists as they please, there is no incentive and no obligations to do so.  
 
  * **Non-blocking code reviews.**   When code is submitted, a reviewer is associated to the change list and they are expected to review the changes at some point, but this review does not block the submission of the code, which gets incorporated in the depot right away.  
 
  * **Blocking code reviews.**   In this scenario, submitters associate a reviewer to their change list but that change list does not get submitted until the reviewer gives their approval.



Let's get rid of the first case quickly:  I strongly believe that projects that work without any peer review will end up with code of significantly worse quality, regardless of how talented or experienced the developers are.  It doesn't matter how good you are, you can't produce top quality code all the time.  We all get sloppy at time, and code reviews are here to address these times.

When the code reviews are blocking, the committer is not allowed to check in their code until the reviewer has responded with a positive comment.

When they are not blocking, the code gets checked in right away but the reviewer still receives an email giving all the details about the code so that it can be reviewed later (I suggest setting up a nag system that will remind lazy reviewers to do their reviews at least once a week).

In my experience, the only system that works is non-blocking code reviews, but before I go into details, let's examine exactly what code reviews do, because I found that very often, the perceived benefits are different from the real benefits.

Here are a few facts about code reviews:

  * Code reviews **don't** reveal critical flaws in your code.  
  
This is disappointing, but it's the sad truth.  As the system becomes complex, so do the change lists, and you won't often hear a reviewer say "If the servlet receives more than twenty connections, you will have a deadlock between A.java:723 and B.java:1410".   
  
More likely, reviewers comments will be cosmetic ("Please rename mI to midIndex, it makes the intent clearer") or they will request more comments.  
 
  * Code reviews **do** keep you honest.  They force you to take some extra time to make your code more readable, because you know for sure that someone will be reading it with a critical eye very soon.



I found that proponents of blocking code reviews usually feel very strongly that anything more liberal is bound to be the cause for a significant drop in quality as well.  The argument often goes like "If reviewers do not feel a strong obligation to review the code, they will slack and the review won't be done".

First of all, my experience tells me that this is incorrect.  I found that even in the most liberal non-blocking code review systems, reviewers were very diligent with their reviews and they usually got done in a fairly short amount of time (less than a week, and usually within a couple of days).

But what's inherently flawed with this assumption is that it fails to recognize that both blocking and non-blocking code reviews rely on the honor system, so saying that one will work while the other won't doesn't make sense.

In the blocking code review scenario, when you submit your code, you rely on the reviewer realizing that you are now unable to perform any additional work (or at a considerable price, see below) until the review comes in.  Despite this pressure, it's not uncommon to see reviewers take several days before reviewing code, because they are just swamped and they also know that the committer is taking measures in order not to stay inactive while she's waiting on the review.

**Problems with blocking code reviews**

I haven't had good experiences in environments that mandate blocking code reviews.  Here are the main drawbacks to such a system:

  * While they wait for the review, developers are stuck and have to work on something else or put in place a system of patching, which they will have to resolve next time they do a sync and try to commit their approved code changes.  
 
  * Developers know that they will be stuck as soon as they commit, so they accumulate huge change lists in order to keep working and "stay in the zone".  
 
  * These huge changes lists become problematic for reviewers who decide to not take a look at the change list until they can carve out a significant portion of time, which delays the review even further, therefore creating a vicious cycle.



**While non-blocking code reviews work better**

I strongly believe that non-blocking code reviews address all the problems listed above and come with their own set of good properties.  Here are some of them:

  * Being a reviewer when the review is not blocking works well, because a conscientious developer will be aware that reviewing the code as soon as possible is part of their job, just like writing tests or comments.  
 
  * I am much more likely to take an extra ten seconds to write a comment if I know for sure that somebody will be reading my code, and possibly comment on it (which is why I said above that "code reviews keep you honest").  Conversely, I have very often noticed that code that was never reviewed by a peer is usually harder to follow because it is more sloppy and less commented.  
 
  * Reviewing code written by colleagues forces me to a daily and healthy exercise.  I have to change my mindset and get familiar with idioms and styles that are not mine.



**What about pair programming?**

Pair programming is definitely one way to do code review, but it suffers from a few limitations that, in my opinion, make it a less desirable option than non-blocking code reviews:

  * Pair programming only catches micro-errors.  Contrast this with non-blocking code reviews that expose your reviewer to an entire change list, which will force them to see a bigger picture than they would have if they were pair programming with you.  
 
  * Pair programming naturally forces the two participants to converge toward the same thinking.  Once you both decide that you need a class A, you will naturally agree that it implies the creation of classes B, C and D, and after a while, you have a "design of a single mind".  
 
  * Pair programming can also take longer.  The usual argument to defend pair programming is to say that programmer A can do task X in three minutes and task Y in twenty-five minutes, while the times will be reversed for programmer B.  Put these two programmers together and they'll be able to complete tasks X and tasks Y in three + three minutes.  
  
This is nice, but quite idealistic.  In reality, the outcome of pairing A and B can have vastly varying results, such as a task that would take three minutes by programmer A alone suddenly takes thirty minutes to accomplish with B in the picture.  Or A and B spending a lot of time arguing about the "right" way to solve the problem, while ultimately, there are more than one right way and A would have solved the problem much faster on their own.



Anyway, the point of this post is not to criticize Pair Programming but simply to make it obvious to everyone that the full impact of Pair Programming hasn't been studied very well so far, and that it's not a very good substitute to simple peer code reviews.

Finally, Brian Slesinsky wrote an [interesting entry](http://slesinsky.org/brian/code/pair_versus_review.html) praising Pair Programming and criticizing code reviews.  Take a look if you want to get a counter-opinion to mine, but in general, I find that Brian's arguments are a demonstration that blocking code reviews are not optimal much more than he demonstrates that pair programming is the right solution.  I think that non-blocking code reviews have all the characteristics of a happy medium between these two radical approaches.

**What about code ownership?**

Shared code ownership is vastly over hyped.

Shared code ownership is presented as a desirable consequence of Pair Programming and it simply means that since at all times, there has always been at least two people working on the same region of code, the entire team has a much better knowledge of the code base and that everyone can therefore step in at any time to fix a problem even in the absence of a key member.

First of all, reasonable shared code ownership can be reached with peer reviews.  It's pretty easy to see why:  when you spend some time reviewing a teammate's code, you gain a very familiar knowledge of it, and it won't take you long to dive back in if you need to.

But more generally, shared code ownership is simply unnecessary if the code has been written by competent developers under careful code reviews.  It is very common for me (at least once a week) to stumble upon an area of code that I've never seen before, and I usually have no problem finding my way around it if the developer has followed some simple rules (commenting, naming the classes, methods and variables appropriately, using design patterns, etc...).  Code reviews will buy you a micro-knowledge of the code, but I find that I usually don't need to know the code in so much details most of the time.

Finally, if you need a proof that code ownership is vastly over hyped, look no further than open source projects.  In typical open source projects, reviews are not mandatory and everyone can check in code at their will.  New developers come and go and they don't seem to have much problem learning the new code base, assuming that's it's been commented and written with good design principles.

**Conclusion**

If your organization is not mandating code reviews, you should reconsider this decision and, ideally, opt for non-blocking code reviews.  There are various other ways to implement code reviews that I did not cover in this document, but whatever you choose, make sure that members on your team regularly get exposed to code coming from other members, even if superficially.

How about yourself?  Are you doing code reviews in your company?
