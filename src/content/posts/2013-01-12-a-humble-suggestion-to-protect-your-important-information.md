---
title: A humble suggestion to protect your important information
date: '2013-01-12T14:48:26'
slug: a-humble-suggestion-to-protect-your-important-information
categories:
- General
comments:
- id: 9657
  author: Brian Slesinsky
  date: '2013-01-12T15:16:46'
  content: 'Hmm, you could probably set up something similar by using a separate email account for logins and setting up forwarding rules to send everything other than password resets to your regular account.

    That''s not quite as secure since there''s evidence in your regular account that the other one exists, but at least it would have two-step auth.

    (I just use two-step auth all the time.)'
  replies: []
- id: 9658
  author: Cedric
  date: '2013-01-12T15:32:06'
  content: 'Brian: yes, that was actually my initial thought, which quickly led to "I shouldn''t have to do that, the web site I''m signing up with ought to".'
  replies: []
- id: 9659
  author: Josh Berry
  date: '2013-01-12T18:59:20'
  content: Pretty sure that attacking your email address is common, but not as common as just attacking your computer.  That is, getting a trojan on a computer is the most reliable way to get someone's account credentials.
  replies: []
- id: 9660
  author: Gerald
  date: '2013-01-12T19:00:41'
  content: If you can afford it, consider getting a domain name and using one email address per site. This way you have even more security, and can see when sites have sold your address or have been hacked (you start receiving spam at that address), then it's easy to filter that one address out.
  replies:
  - id: 9661
    author: Cedric
    date: '2013-01-12T19:07:36'
    content: '@Gerald: I used to do that until I realized it was absolutely pointless. I couldn''t care less to identify which domain sells my email address or not, the only endeavor I''m willing to spend some time on is to maximize my security while minimizing the hassle.'
    replies: []
- id: 9662
  author: Peter
  date: '2013-01-13T00:49:05'
  content: Maybe becasue that more websites has marketing target that needs to be reached. Imagine, that only couple of % of users has more than one email account, when user simply reach the step with second email, he will simply drop the registration process. This is just so bad for UX...
  replies:
  - id: 9663
    author: Cedric
    date: '2013-01-13T07:24:42'
    content: Just make the safe email address optional, I don't see what makes it a bad UX.
    replies: []
- id: 9664
  author: Asgeir Storesund Nilsen
  date: '2013-01-14T03:46:24'
  content: 'Many people do not have more than one email address -- at most.  Many share email addresses with their spouse or other family members.

    An email account you almost never use means you probably won''t remember the password for that email account either.

    I''d rather see password recovery using other means than email -- mobile phone, telephone calls or similar.'
  replies: []
- id: 9665
  author: Greg Patnude
  date: '2013-01-14T09:14:52'
  content: 'Personally: I sort of like getting an SMS for re-auth ... you can hijaack any or all 5 or 6 of my E-Mail addresses to your heart''s content... try getting your hands on my cell phone and retrieving a 7 digit confirmation number that you need to enter into a confirmation box ...

    Kind of hard to do without the cell phone ... Verizon has a great working  mechanism that does exactly this ...'
  replies:
  - id: 9666
    author: Cedric
    date: '2013-01-14T09:20:25'
    content: Yes, two-step authentication is very strong but a lot of people choose not to use it because it's a hassle to do that on your main inbox. Separate your regular inbox from your password reset one and you'll probably find that a lot more people will start using two-step authentication.
    replies: []
---

When you create a new account on a web site, it's pretty much the norm to be asked to enter an email address. Why aren't there more (any?) web sites that ask me for an additional email address that will be used exclusively to send me password resets? 

With such a simple extra step, my account has become impossibly hard to crack. Not just because my "safe email address" will, obviously, be protected by two-step authentication or other similar mechanism, but more importantly because the hackers have no idea what that email address is: it's not used to send any email, it only receives emails sporadically, and the only way to find out what it is is to hack into the bank's servers (I'm pretty sure that hackers able to do that will find far more interesting accounts to empty than mine). 

Another benefit is that I don't need to burden my regular email address with two-step authentication, which would be a hassle since I log into that account so often from so different places. 

So... What am I missing? Why isn't this practice more widespread?
