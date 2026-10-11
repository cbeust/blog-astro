---
title: An XP interview
date: '2005-05-10T09:43:30'
slug: an-xp-interview
categories:
- Java
comments:
- id: 3598
  author: Ugo Cei
  date: '2005-05-10T10:08:24'
  content: 'I don''t know who Tom Di Marco is as well, but I''m sure you''ve heard about Tom DeMarco, the author of Peopleware, Waltzing with Bears and other books.

    As for "paraprogramming", I''m sure it''s a transcription error.

    Coming to the meat of the interview, I don''t think any XP theorist has ever advocated leaving software development to developers only. Quite the contrary: one of the XP tenets is that everyone (developers, architects, managers, customers, stakeholders) is part of the same team.'
  replies: []
- id: 3599
  author: Robert Watkins
  date: '2005-05-10T14:14:10'
  content: 'Cedric, the link is broken; it points to a page on your site. Maybe you forgot the http:// at the front?

    As Ugo said, deMarco is the author of Peopleware and other books; http://www.atlsysguild.com/GuildSite/TDM/Tom_DeMarco.html'
  replies: []
- id: 3600
  author: Robert Watkins
  date: '2005-05-10T14:19:14'
  content: 'Also, "coordinating work is pushed down the hierarchy" does not mean leaving developers alone. It means that management should let developers, testers, marketing, etc co-ordinate their own activites while management keeps a hands-off but watchful-eye approach.

    Management should _monitor_ the work being done, and step in when there are problems; they shouldn''t pre-emptively try to control everything according to  a mystical Gannt chart on the wall.'
  replies: []
- id: 3601
  author: Mike Spille
  date: '2005-05-11T07:10:30'
  content: 'All the XPers are still talking about baby-steps development, even Beck.  In those environments almost any process will succeed if you have halfway competent people.  A key example of this is in the interview when they talk about the "weekly cycle".  Beck says on the weekly cycle "Because you know every week you have commitments to your customers about what features they''re going to see at the end of the week".

    That right there tells me that Beck and company are consultants that work on very small systems.  Imagine a real application of any real complexity which released every freakin'' week - users would go insane and no meaningful features could possibly be created.

    I often wonder if any of the XP people have ever in their lives worked on an application with more than 30,000 lines of code.'
  replies: []
- id: 3602
  author: Emmanuel Pirsch
  date: '2005-05-11T13:03:47'
  content: 'It should be about time that people stop thinking that processes, on their own, will solve their problems.

    Any process is worthless if you do not have the right people for the task. In my experience, the more you concentrate on the process, the less you concentrate on the people (I''ve seen many managers thinking that once they have a process in place, the people are no longer important...) and on the skills that the people needs to complete the task.

    It''s better to have good people and good teamwork than to have a good process. When you have a skilled team and a good vision but no formal process, then a process with naturaly evolve.

    Sure, for very large project, having a more formal process helps, but it will NEVER be more important than skillful people!'
  replies: []
- id: 3603
  author: Robert Watkins
  date: '2005-05-11T14:28:21'
  content: 'Mike, like you usually do, you''ve mischaracterised the XP position.

    The XP position doesn''t say you have to release every week. It says that at the end of each iteration (which _may_ be a week long), you have release quality code, with provably working features you can get your Customer (or BA, or project manager) to agree represent progress. XP also recommends having a release cycle of several iterations.

    This approach builds a lot more than simple baby systems.'
  replies: []
- id: 3604
  author: Robert Watkins
  date: '2005-05-11T14:31:56'
  content: 'Mike, like you usually do, you''ve mischaracterised the XP position.

    The XP position doesn''t say you have to release every week. It says that at the end of each iteration (which _may_ be a week long), you have release quality code, with provably working features you can get your Customer (or BA, or project manager) to agree represent progress. XP also recommends having a release cycle of several iterations.

    This approach builds a lot more than simple baby systems.'
  replies: []
- id: 3605
  author: Jon Tirsen
  date: '2005-05-11T16:57:39'
  content: 'I''m surprised that you haven''t seen more XP, Cedric. Personally I haven''t worked on a project that has *not* been at least approximating XP the latest couple of years. As a consultant I visit many different companies and I would certainly concur that XP is approaching mainstream. I might go out on a limb here but apart from ad-hoc and plain old waterfall I would actually say it''s the most popular process out there.

    Mike, any large project is difficult regardless of what methodology you''re using. XP''s sweetspot is around 5-10 developers and codesizes smaller than what you''re referring to. So as you diverge from that sweetspot you need to make adapations. That said, I''ve worked on several projects of those sizes with processes resembling XP, with adaptations towards more formality. All of them surprisingly successful! (I say "surprisingly" because I''ve worked on large projects with both waterfall and RUP, none of them successful.)

    Yes, you are correct; with systems of those sizes it''s ridicilous to release all the way to the customer each week. Instead you may choose to do internal releases say every 2-4 weeks, with production releases every 2-3 months. I would say this practice becomes even more important with larger sized projects, as cost of integration failures grow with the code size. Developing for more than 4 weeks without doing a complete integration and internal release would be the equivalent of suicide with a large project.

    All in all, I think this may be the most important lesson from agile though; the team has to take ownership of the process and adapt as needed given the circumstances. Any process taken out-of-the-box and followed slavishly will most certainly fail.'
  replies: []
- id: 3606
  author: Mike Spille
  date: '2005-05-11T17:43:21'
  content: 'Robert, I did not mischaracterize anything.  I''ve referred directly to what the most vocal and well-known XP proponents say about their own projects.  Go to the big-name XP proponents and ask them the specifics of the projects they have worked on.  The response is _universal_: very small projects.

    Beck et al ask you to take their experience, their experience only with small systems, and extrapolate them to larger systems.  Back Fowler, Beck, Cunningham et al into a corner and ask them point black the largest system they''ve worked on and you''ll find it''s rather pathetically small.

    And these are the people leading the XP "revolution": people with experience only in very small projects trying to tell the world how to build meaningful projects.'
  replies: []
- id: 3607
  author: Mike Spille
  date: '2005-05-11T17:53:20'
  content: 'Jon, I hear what you''re saying and it makes sense.

    But realize that as you loosen definitions, you can very rapidly diverge from the gospel of XP according to Beck - and enter into the land of common sense instead.

    If you look at the _specifics_ claimed by XP hard-liners you see they have only made them work on small projects.  When you see attempts to extrapolate you no longer have "agile" or "XP" projects - you have nothing but common sense.  People like you talk about how they applied "agile" techniques to larger projects.  And what I find, universally, is that they end up saying "automate testing; integrate often; spread ownership around".

    I''m sorry, but Beck and the Chief Scientist and "Uncle Bob" can''t claim "automated testing" and "integrate often" and "spread ownership around" as being theirs, or being XP, or part of some agile manifesto.

    If you go beyond plain old common sense and try to apply specifics, you find that XP and the other agile techniques plain fall apart.  Not because "Any process taken out of the box and followed slavishly will most certainly fail".  No, sorry.  XP and the other consultancy-agile techniques fail in the large because none of the practitioners have any meaningful experience in the large.

    Jon, you want to go from apprentice to journeyman to master, don''t look to Beck or Fowler or Martin as your mentors.  Find a guy who''s poured his soul into a trading system for 4 years.  Or a gal whose life has been the insurance app.  Or the individual who''s gone from napkin to requirements to prototypes to a million lines of code to getting woken up at 3am to fix an emergency production problem.

    You want to really _learn_ the art of programming, Jon, don''t try to learn it from hack consultants whose best skill is parting money from the marks.  Learn it from people who live and breathe applications over the span of years (or even decades).'
  replies: []
- id: 3608
  author: Zsolt
  date: '2005-05-12T00:26:17'
  content: 'I have never heard anyone saying that XP is the most suitable for large software systems. The "weekly cycle" dilates according to the size of the software, but the granularity of releases should be small enough to give value to them. SCRUM, another agile process, defines a "sprint" as a "30-day cycle that results in a potentially shippable increment of the software product". Bashing the agile movement just because XP, one of the implementations, is not suitable for larger systems is not appropriate, IMHO.

    Smart developers and managers have enough common sense to distill the values they appreciate from any methodology. Personally, I like the developer oriented approach proposed by agile processes. Any process that focuses on the quality of the code has the upper hand in my book.'
  replies: []
- id: 3609
  author: Christian Murphy
  date: '2005-05-12T12:58:08'
  content: '... so what is suitable for the real world?  For large systems, FDD comes to mind.  Is that the best alternative to XP?  Or is some non-agile approach to be preferred?'
  replies: []
- id: 3610
  author: ''
  date: '2005-05-12T17:33:32'
  content: What about CMMI?
  replies: []
- id: 3611
  author: Angsuman Chakraborty
  date: '2005-05-13T23:44:34'
  content: 'To my knowledge the largest XP project was also the first one, the famed C3 project.

    Unfortunately it has been canned sometime back - http://www.google.com/url?sa=U&start=1&q=http://c2.com/cgi/wiki%3FCthreeProjectTerminated&e=10053

    Ron Jeffries has an interesting explanation.

    XP can be very effective in certain small to mid-size projects with customers who are not clear upfront what they want or the market dynamics changes rapidly.

    However it is not a same-size-fits all solution. Only consultants claim that.

    From the trenches it looks different :)

    XP has several types of evangelists. Some like Ron J are in the militant category. Kent Beck is a very reasonable man.

    It is the militant evangelists who give XP some bad name/karma like militant Christian evangelists give to Christianity :)'
  replies: []
- id: 3612
  author: Mike Spille
  date: '2005-05-15T14:12:06'
  content: 'Leaving religious and militant arguments aside for a moment, the big problem I have with XP is that it simply seems to apply to only a pretty narrow niche.  It literally cannot be applied to most projects I''ve seen without severe modifications to the process.

    Examples of such problems include pairing, the level of access required to a responsible end user, the very low amount of recommended documentation, the near obsession with refactoring, etc.

    Yes, you can fix and tweak and alter to fit your needs.  But in the end what you have does not resemble an XP project in the least.

    Perhaps I''m crazy, but in my mind a reasonable process should be one that works in industries that have been doing software development for decades e.g. software product companies, the financial services industry, etc.  XP in fact is a giant flop in those areas.

    In fact, if you read deeply into what Beck et al say, the message is usually "when you haven''t a clue and neither does your customer, use XP to feel your way through".

    But here''s the million dollar question: what if you DO have a clue and are advanced enough so that you''re somewhat beyond the "feel your way through" category?'
  replies: []
- id: 3613
  author: Christian Murphy
  date: '2005-05-16T13:18:46'
  content: Any references for those giant flops?  Seriously, I'm interested.  It's about time that this stuff went from being anecdotal to being published.
  replies: []
- id: 3614
  author: Mike Spille
  date: '2005-05-16T13:43:09'
  content: 'Sorry, no references.  But don''t expect financial services companies and software companies to fall over themselves publishing details of their failures :-)

    Using that evil word - anecdotally - financial companies and software companies don''t do XP.  They may be somewhat more "agile" than they were a decade ago, but this is largely due more to agile technologies than XP consultants.'
  replies: []
- id: 3615
  author: Laurent Bossavit
  date: '2005-05-18T10:12:03'
  content: '"I often hear developers described as ''someone who knows how to build a large system quickly.'' There is no trick in building large systems quickly; the quicker you build them, the larger they get!"

    -- David Parnas

    :-P'
  replies: []
- id: 3616
  author: Stu Charlton
  date: '2005-06-03T22:21:15'
  content: I've replid to this on my blog... http://www.stucharlton.com/blog/archives/000079.html
  replies: []
- id: 3617
  author: Bill de hOra
  date: '2005-06-17T13:40:48'
  content: 'Hi Mike, some pushback -

    "XP and the other consultancy-agile techniques fail in the large because none of the practitioners have any meaningful experience in the large."

    Large is the part of the problem. Equating large with meaningful/real systems is broken thinking. We could just as easily argue that building large systems is a high probability way to fail. The method won''t matter if the design approach is broken to begin with.

    "to go from apprentice to journeyman to master, don''t look to Beck or Fowler or Martin as your mentors. Find a guy who''s poured his soul into a trading system for 4 years. Or a gal whose life has been the insurance app. Or the individual who''s gone from napkin to requirements to prototypes to a million lines of code to getting woken up at 3am to fix an emergency production problem."

    The art or mastery of programming has very little to do with managing large running systems - maybe you have a definition of programming I don''t grasp. Anyway, how is this not circular - I worked on or built a big system thus I am a master programmer sounds suspect. Where''s the cause and effect in that? Put operationally - if I have to build a big system, I''d want to do that in the smallest possible way. Maybe small furry systems are the future Mike :)

    "But here''s the million dollar question: what if you DO have a clue and are advanced enough so that you''re somewhat beyond the "feel your way through" category?"

    Then surely you should have no problems and nothing to worry about. Who cares what the method is with the benefit of foresight?

    So, here''s a strawman - all large software systems can be made smaller.'
  replies: []
- id: 3618
  author: phentermine and zoloft together
  date: '2007-10-31T05:10:00'
  content: phentermine and zoloft together
  replies: []
- id: 3619
  author: phentermine and zoloft together
  date: '2007-10-31T05:17:19'
  content: phentermine and zoloft together
  replies: []
- id: 3620
  author: phentermine no rx required
  date: '2007-10-31T18:07:11'
  content: phentermine no rx required
  replies: []
- id: 3621
  author: phentermine no rx required
  date: '2007-10-31T18:13:40'
  content: phentermine no rx required
  replies: []
- id: 3622
  author: purchase phentermine no prescription
  date: '2007-11-02T13:51:57'
  content: purchase phentermine no prescription
  replies: []
- id: 3623
  author: facebook proxy
  date: '2007-11-10T06:14:56'
  content: facebook proxy
  replies: []
- id: 3624
  author: facebook proxy
  date: '2007-11-10T06:20:44'
  content: facebook proxy
  replies: []
- id: 3625
  author: jjbkjb
  date: '2008-08-14T11:09:49'
  content: ssdsdsd
  replies: []
---

An interesting interview of [ Kent Beck](http://www.itworld.com/AppDev/1246/transcript_kentbeck050506/) and Tom de Marco, the author of "Peopleware".  What strikes me the most is that while Kent seems to be fairly reasonable, it's clear to me that his buddy is not really in touch with reality when it comes to XP programming (or even programming in the industry, for that matter).  Here are a few selected quotes:

> _"In the subsequent five years, XP has become mainstream"_
> 
> _" So the parlance I think has become mainstream. Whether the practice has become mainstream, I think it depends on where you go. And a lot of places I go, it is."_
> 
> _" That everybody knows what paraprogramming is."_

Reading further down the interview, it looks like "paraprogramming" actually means "pair programming", so Tom is probably trying to coin his own term, a bit like some other people tried to create the term "AO" for "AOP".  Tom also still seems to believe the same old cliches about evil managers who get in the way of developers:

> _" I think managers in particular are saying, well what the hell am I here for if not to tell a given person when he ought to be testing and when he ought to be coding and when it's time for a build."_

and that developers are better left alone:

> _" And I think XP is a very natural kind of self-coordination where that work, that coordinating work is pushed down the hierarchy."_

...  which is totally nonsensical to me.  I am a firm believer that software created by developers only is worthless and that everybody (managers, marketing, UI designers, tech writers, product, etc...) has an important role.  Any activity or technique that isolates these layers from each other is a direct threat to the success of the project.

Fortunately, Kent is here to instill some realism:

> "_Kent: Well, some of it is. I think of managers as people with more experience, a broader perspective, perhaps more wisdom about what's going on and good people skills. "_

I credit XP for making developers more aware of testing in general, but from my experience, the few times I have seen some XP at work in companies were through consultants hired on a short term basis because using their full-time employees to do XP was considered a waste of money (and in some way, Kent and Tom seem to confirm this observation since all they do is consult and write books about XP).

An interesting overview overall (if you can set aside the various spelling mistakes), which comforts me in the idea that XP is more talked about than really applied in the real world.
