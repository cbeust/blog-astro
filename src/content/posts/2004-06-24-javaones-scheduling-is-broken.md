---
title: JavaOne's scheduling is broken
date: '2004-06-24T18:05:45'
slug: javaones-scheduling-is-broken
categories:
- Java
comments:
- id: 1687
  author: Hani Suleiman
  date: '2004-06-25T10:07:40'
  content: Well I for one am glad you did it, since it saved me the hassle of attempting to do it myself and wasting all that time!
  replies: []
- id: 1688
  author: spemin
  date: '2004-06-25T10:43:52'
  content: i too was unable to use this year's scheduler effectively. last year's was much better.
  replies: []
- id: 1689
  author: Ben Geyer
  date: '2004-06-25T11:14:59'
  content: I went through the same steps. Nice to know I wasn't the only one :)
  replies: []
- id: 1690
  author: Luke Hutteman
  date: '2004-06-25T20:00:39'
  content: 'Yeah that was about my experience with it too, only I had close to a hundred session that I had initially expressed an interest it (thinking to myself "I can always delete them later if there are conflicts")

    I wasn''t about to go hacking in my "prefered sessions", so instead just skipped the auto-scheduler and picked stuff by timeslot. Unfortunately, when you pick a timeslot, there is NO INDICATION of what I expressed an interest in before, let alone what priority I had assigned to it... and on top of that, for some timeslots it indicated a conflict with session XYZ, but with no indication or hyperlink on what exactly XYZ is!

    what a waste of time...'
  replies: []
- id: 1695
  author: Stray Blog
  date: '2004-06-25T20:27:24'
  content: <strong>JavaOne - Scheduling Sessions in 4 Easy Steps</strong>
  replies: []
- id: 1691
  author: Mikael
  date: '2004-06-26T11:35:08'
  content: 'Shouldn''t this scheduler really be a JWS application or an applet? Roundtripping HTML for this kind of planning is never goint to be any good.

    And for JavaOne 2005... There might just be such an app...'
  replies: []
- id: 1692
  author: Christophe
  date: '2004-06-29T07:30:11'
  content: 'I finally managed to print a version with the technical of the sessions not just its ID (there are two printing options).

    However I agree the scheduler is more than useless!'
  replies: []
- id: 1693
  author: Rob
  date: '2004-07-04T09:18:22'
  content: Well, in addition to all the valid points made here, one of the most absurd failures in the existing app is that the session details screen that you drill down to for a session does not include the location! So if you end up deciding to go to another session at the last minute, you are in trouble because it won't allow you to add it to your schedule anymore and there is no room listing. Bizarre.
  replies: []
- id: 1694
  author: Navel
  date: '2004-07-12T22:02:28'
  content: 'Sorry that i am a bit of topic here.

    I am looking for technical writer who is compute savvy.

    I like how you put your words together. If you are interested could you email me your rates.'
  replies: []
---

There is a lot going on at JavaOne this year.  A LOT.  So I was quite happy to see that Sun's web site was going to help me with my planning.  Hopefully, better than last year.

So I log in and start reading the abstracts of the sessions.  There are two hundred technical sessions and two hundred BOF'a.  That's a lot of information.  And since the web site only display ten of them each time, that's a lot of useless clicks.  So here is a first lesson in web usability:  let users configure how many items they want displayed per page.  I know for sure I would have picked "200".

Anyway.  Clickety-click, here I go, painfully adding some sessions while ignoring others.  Finally, I'm done, so I go to the "My Schedule" page and I only find one session, the AOP panel I am attending.  I panic for a few seconds until I realize that when I clicked on all these sessions, I wasn't saying I was going to attend them, I was simply registering my interest in them.  Grrr...  Okay, fine.

So I go to the Interest List page, where I find all my sessions.  Good.  I can also set the importance of each (High, Medium, Low) which, I read, helps the auto-scheduler do its job.  Whatever.  I just click on the auto-scheduler, I need to print it and leave soon.

Error message:  "You have 53 sessions on your interest list.  You can only have 30 maximum and the scheduler will only let you plan 24 of them.  Please remove sessions from your Interest List and try again".

What?!?

What's the point of a scheduler if it won't let me plan sessions that conflict?

So I have gone through all this pain to carefully select what sessions I am interested in, and now I must delete most of them?!?  What are they **thinking**?!?

Here is what a "real" auto-scheduler would let me do:  select all the sessions I am interested in, all 400 of them if I so desire.  Then print my schedule with their description, ignoring all the potential conflicts.  You know what?  I am a big boy and I can resolve conflicts myself as they occur.  Besides, I might want to actually attend several sessions in a particular time slot.  How?  Well, simply by going to a session, finding it boring and then deciding to go to a different one at the same time.

Here is another good one:  once you print your schedule, it will only show the technical name of the session (e.g. TS-1988, BUS-2042).  How useful is that, seriously?

Bottom line:  I'll schedule my conference all by myself this year.

Like all previous years.

And somebody at Sun:  please hire a usability expert.  Hell, even a usability novice will probably do better than what they have now.
