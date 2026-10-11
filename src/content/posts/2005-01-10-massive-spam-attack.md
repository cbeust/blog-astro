---
title: Massive spam attack
date: '2005-01-10T05:52:49'
slug: massive-spam-attack
categories:
- General
comments:
- id: 2960
  author: Justin
  date: '2005-01-10T10:36:05'
  content: 'I admin several of my own email domains and I had the same kind of thing happen to me all the time.  I used to get connections from all sorts of different ip addresses trying to send email to random names at my domains.  I don''t have a regex set up to forward email to any email at my domain to me so I didn''t receive the emails.

    I tried to track down where they were coming from, but it appears that the ip addresses were from all over the world.  I tried to write a script to automatically block the ip addresses of these mail servers, but my debian box started slowing  down after the first few thousand ip addresses were blocked.  My guess is that the emails are being sent by a huge botnet of compromised windows machines.

    I eventually ended up doing three things that worked and worked very well.  First, I upgraded to the latest version of postfix which doesn''t send bounces to unknown email addresses.  The second thing I did was implemented postgrey which functions by sending a "retry in 30 seconds message" to a connecting mail server the first time it tries to connect to a mailserver/to address/from address combination.  Most botnets and spam tools will not retry while I''ve never seen a normal mail server that would not retry.  The last thing I did was spamasassin which, with the latest version, is able to check databases of blacklisted mail servers in realtime and mark the messages as spam if they are in those databases.

    I get so little spam now that I don''t even worry about posting my email on a public message board.'
  replies: []
- id: 2961
  author: John
  date: '2005-01-11T22:44:39'
  content: 'I wonder if Spammers are slowly starving themselves to death.  With all the news about Phising scams going around I bet that fewer and fewer opeople are fooled and respond to Spammer''s ads.  Furthermore with so many offers that look plainly crooked I bet no mony will be made sending spam out.

    I predict that in the next few years they will just give up.  The problem is what are these crooks going to think of next ?'
  replies: []
- id: 2962
  author: silviu
  date: '2005-03-30T07:43:47'
  content: I am interested to receive spam in any form so if you have any ideea i am please to leasen to you.
  replies: []
- id: 2963
  author: Joe
  date: '2008-03-09T21:29:16'
  content: Get a life loser!
  replies: []
---

I have just been hit by the nastiest spam attack yet.  When I got up this morning, I found more than nine thousand (9000!) emails in my Inbox.  They all follow the same pattern:

  * They come from a different email address (different domain even).
  * The wording is slightly modified from one email to the other (they are selling medicines).
  * They are sent to a randomly-generated email address to my domain.
  * They only contain three lines, so my spam filter was unfortunately unable to flag them as spam.
  * The web site they point to seems to be randomly generated but it does indeed work and point to a Canadian drug firm:  _basdf kjlke.com_ (space inserted on purpose) which I hope will be shut down by the time you read this.



I am having a hard time believing this kind of flooding is even effective at all, but fortunately, it didn't take me more than ten minutes to clean up my Inbox.  What a waste of time.
