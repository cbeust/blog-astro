---
title: 140 characters should be enough for everybody
date: '2008-05-23T21:06:57'
slug: 140-characters-should-be-enough-for-everybody
categories:
- General
comments:
- id: 7269
  author: Koz
  date: '2008-05-23T22:16:24'
  content: 'There''s certainly been an enormous amount of vitriol and cluelessness on both sides of this ''debate''.  Sadly most of the commenters tend to be ambulance chasers promising that their framework will magically solve all twitter''s problems with a few hours work.  While I''m sure there are people within the rails community which have claimed that rails and ruby would be a good fit for twitter''s backend message routing code, I''m not one of them.  It''s all about the right tool for the right job.

    The problems of routing and delivering high volumes of messages isn''t exactly a problem that we try to solve with Rails, there are other tools and languages more suited to this.  Having twitter rewrite a portion of their backend code in some other language is no more a problem for rails than having most java apps persisted in relational databases is a problem for JavaEE.

    Finally, ev has already corrected that techcrunch article about them ''moving away from rails''.  They already have portions of their message handling code written in something else, and now they''re changing it further.  As far as anyone''s aware they intend to continue using rails as their frontend, at least for now.

    -- Koz - rails guy'
  replies: []
- id: 7270
  author: Jabber Dabber
  date: '2008-05-23T23:18:29'
  content: '> There are plenty of successful IM platforms in production

    > today that are tackling, and successfully solving, the exact

    > same problems that are stumping Twitter.

    Existing IM services do not have anything like the per user home pages in Twitter.'
  replies: []
- id: 7271
  author: markus
  date: '2008-05-24T04:33:12'
  content: 'A second, Twitter guys have NOT said that they move away. It is very unfair to claim they are lying.

    Either you trust them, or you need to accuse them of lying. But this dagger and dirt throwing is annoying.'
  replies: []
- id: 7272
  author: Muthu Ramadoss
  date: '2008-05-25T07:42:56'
  content: 'Given the constant Twitter downtime and their inability to fix scalability issues for whatever reasons, its only a matter of time a "better" Twitter comes and takes over the existing twitter users.

    There are some pretty indecisive people sitting on Twitter management. Twitter management, make a decision will ya?'
  replies: []
- id: 7273
  author: poko
  date: '2008-05-25T08:56:52'
  content: 'from this post dev.twitter.com/2008/05/twittering-about-architecture.html

    it''s clear that twitter tries to move away from the db backend (since their app is not a CMS as they realized now).

    what''s the point of using rails (or any web frameworks) without a database backend?

    personally i would be surprised if they used a generic web framework at all in the new version.'
  replies: []
- id: 7274
  author: Paul Beckford
  date: '2008-06-02T10:02:34'
  content: 'Hi Cedric,

    You are missing the point. Twitter has benefited HUGELY from Rails already. The reason: TIME TO MARKET!!!

    Whilst other whre still chrunching out code, Twitter was out there gaining brand recognition and market share. You see the consumer can only deal with one or two major brands in each market segment. It''s called brand recognition. So theres Amazon for Books, Face Book for social networking and now Twitter for instant messaging based networking.

    They have followed the Agile mantra of deliver early and frequently. Even if they choose tto refactor all the Ruby code to C over time :) then they would still be quids in.

    We need to be more responsive to business needs. Time to market and the response time to changes in the market is a key factor. Rails delivers on both of these.

    Lets assume that Ruby doesnt scale (although performance issues tend to be due to poor design, so I''m not convinced that Ruby or Rails are to blame), for lots of scenarios Rails is more than good enough to gain that initial market presence.

    Having more customers than you can deal with is the type of problem most businesses dream of.  LOL!!!

    Paul.'
  replies: []
- id: 7275
  author: lumpynose
  date: '2008-06-04T18:04:19'
  content: 'I still think the problem is because they used Rails, but in a somewhat indirect way.

    To me a web developer using Rails is like a cook baking cakes using a Duncan Hines or Betty Crocker cake mix in a box.  Sure, you can bake that cake in no time at all (great "time to market"), but you''re learning very little about baking.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/twitter-error.jpg)

> Rails would do itself no harm by conceding that it isn
