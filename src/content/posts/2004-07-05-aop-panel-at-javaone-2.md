---
title: AOP panel at JavaOne
date: '2004-07-05T18:48:04'
slug: aop-panel-at-javaone-2
categories:
- Java
comments:
- id: 1720
  author: ''
  date: '2004-07-05T21:43:09'
  content: so what did you learn from what Gregor told you?
  replies: []
- id: 1721
  author: Mat
  date: '2004-07-06T03:01:09'
  content: Hope you will find time to expand on this entry and cover the panel discussion in greater detail. Will be waiting for the more meaty entry. :)
  replies: []
- id: 1722
  author: Taylor Cowan
  date: '2004-07-06T13:46:05'
  content: 'I was lucky enough to attend this talk and found myself strongly in agreement with Graham Hamilton who finally correctly pointed out that it''s just compiler tooling under a new name.  Kiczales gave a wonderful 5 minute intro to AOP and framed the topic very nicely. He was one of the best presenters I saw during the conference, and I enjoyed listening to him.  What I saw missing is a truly motivating example of what AOP could do for us.  I''m not even sure that AOP deserves the "O" or the "P".  The example was the Observer/Observable pattern and how AOP could send the events for you.  That''s a new one for me, but not any more revolutionary than logging and security.

    Someone in the audience asked a very good question, by pointing out that dynamic proxies can simulate many of the features we talk about with AOP.  The Spring framework takes advantage of this JDK feature to implement AOP.  We see applications of AOP, but they are normally aspects of a container...abstracted from the developer, and available to us without AOP (logging, security, etc).  Servlet filters are another example I like of a type of aspect, implemented without AOP, but rather the forsight to see a place where you may want to insert cross cutting issues.  Isn''t J2EE security supposedly "declarative" anyway?  If we are spreading security concerns to all our methods, we''re doing something else wrong.

    None of the panelists pointed out the weaknesses of the regular expression style application of point cuts.  It''s all too easy to introduce a new method that mistakenly finds itself bound to a point cut based on a regexp match.  Developers will need to be aware of all pointcuts being applied and constantly monitor the XML config file for more.

    Clearly, AOP is giving app servers benefits, but I still don''t see a new programming orientation comming from this.  We need better examples of exactly how one''s "programming orientation" changes given the existence of aspects.  So you should be conflicted, until the proponents give us something better to think about.

    Taylor'
  replies: []
- id: 1723
  author: Robert L. Read
  date: '2004-09-19T20:38:57'
  content: 'Personally, I am trying to figure out how this relates to CLOS and the MOP.  The idea of byte-code level weavers seems pretty scary compared to LISP.

    Thanks for the report, though.'
  replies: []
---

The AOP panel at JavaOne was a big success.  Maybe it was because of the provocative title ("AOP : The next big thing or giant leap backward"), which was concocted by the mischievous Graham.  Maybe it was because James draws a lot of attendance.  Or maybe, just maybe, it's that more and more people are getting extremely curious about AOP.

The panel was moderated by Simon Phipps and featured:

  * Gregor Kiczales, as the "father of AOP".
  * Graham Hamilton, as "the skeptic".
  * Myself, as the "Conflicted AOP advocate"
  * James Gosling, as... well, himself.



Somebody told me after the panel that not only was the main room full, but the overflow room was standing room only, which probably adds up to an audience of 2000-2500 people.

Simon opened the debate by asking a quick show of hands asking how many people had already heard of AOP, and I estimate that 90% of the hands came up.  When the question was refined to "Who has used AOP?", a great deal of hands went down but quite a few remained up.

Gregor opened the debate by a ten-minute introduction on AOP, which is quite a _tour de force_.  Using a simple application drawing shapes, Gregor quickly showed how concerns get scattered into your code, what aspects and pointcuts are and how they can help you write cleaner code.

Graham raised concerns about the loss of simplicity seen in the approach offered by AOP.  He said that throughout the years, Sun has gone to great lengths to keep the language simple, but with AOP, a simple Java line such as "a = b * foo()" no longer means what you think it means.

When my turn came, I explained the reason for my internal conflict.  In short, I see a lot of potential in AOP but I still perceive it as extremely complicated and representing a steeper learning curve than most Java developers are willing to climb.  I will expand on these ideas in a separate blog entry.

Finally, James offered his ideas on AOP, starting by his very simple opening:  "I like AOP a lot".  His concerns are a bit different from Graham's, though:  James is more afraid of the paradigm shift represented by AOP while we are just barely getting used to OOP.

The panel went by really quick and unfortunately, I don't remember most of the questions we were asked (except one likening AOP to Lisp, which offered many features similar to AOP, especially Lisp dialects that offered a Meta-Object Protocol).

I have the feeling we achieved something important last week.  There was no bickering about technical details on AOP frameworks nor any personal agendas pushed in outrageous ways.  It was a simple exchange of views from people genuinely interested in helping developers write better code,

If anything, we showed the audience that AOP was taken very seriously and considered in very pragmatic terms by a lot of people these days.  Whether you think you will be using AOP in your work or not, I strongly recommend you take some time to study its major concepts.  I guarantee that even if you day job is to write C code, you will end up reusing these concepts in your own way and your code will greatly benefit from it.
