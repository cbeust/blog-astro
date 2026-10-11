---
title: The ultimate weapon against spam?
date: '2004-07-12T06:45:15'
slug: the-ultimate-weapon-against-spam
categories:
- General
comments:
- id: 1768
  author: Tim Haley
  date: '2004-07-12T07:48:27'
  content: 'Please make this a plugin for Mozilla Thunderbird.

    It seems like it could easily be implemented by adding a couple of new actions to the list available for a message filter: Challenge Sender, and Add to Collected Addresses.

    If the sender is not in the ''Personal'' or ''Collected Addresses'' Address Book and the Challenge Reply header IS NOT set properly then Challenge the sender.

    If the sender is not in the ''Personal'' or ''Collected Addresses'' Address Book and the Challenge Reply header IS set properly then add the sender to the ''Collected Addresses'' Address Book.

    You could also add an action to ''Black List'' any addresses that are challenged but not authenticated within a certain period of time.

    For the optional ''Black List'' add a rule that simulates a Mailer-Daemon response if the sender is in the ''Black List'' Address book.

    btw, excellent article.'
  replies: []
- id: 1769
  author: Christian Murphy
  date: '2004-07-12T07:49:24'
  content: 'Recently read about a similar idea, but fully automated.  The receiving MTA rejects e-mail from "new sources" with a 4xx error.  As this is defined in SMTP to mean "temporary problem, please try again later", any legitimate MTA will retry again later.  Spammers almost always use fire-and-forget MTAs that dispense with the niceties of SMTP including retries.

    I''ve simplified the idea somewhat.  They call the approach "greylisting" and there''s a paper out on it at:

    http://projects.puremagic.com/greylisting/whitepaper.html

    I found out about it through Ted Leung''s weblog:

    http://www.sauria.com/blog/2004/07/05#1004'
  replies: []
- id: 1770
  author: Nicolas Cornaglia
  date: '2004-07-12T12:12:27'
  content: Great idea, but what about the Internet SMTP traffic incresed by 2 by "bots" that responds to the Challenge automatically. If they manipulate the "Reply-to:" or "Return-Path:" header, and the software doesn't care, it could happen.
  replies: []
- id: 1771
  author: jomustaj
  date: '2004-07-12T12:36:52'
  content: 'Hmm, this might actually really work some time in the near future. Comparing your article with some of the earlier musings/suggestions/articles about CRS shows some real progress. But a few questions popped up during a quick read though:

    1. The already mentioned bot-automated responses

    2. If you have to whitelist all mailing lists you''ll still need a filter for messages sent to those mailing lists (appr. half of the spam in my Inbox/Junk folder is sent to mailing lists, half directly to my address).

    3. If you don''t have your own server changing your ISP/equivalent can become a pain (This currently applies to filters as well).

    But please do keep thinking and experimenting.'
  replies: []
- id: 1772
  author: Glen Stampoultzis
  date: '2004-07-12T17:13:02'
  content: Except there's still a big problem.  Many times I get emails with forged from addresses.  What this means is that I would be sending spam back out to the poor bastard that has had their reply-to address forged.
  replies: []
- id: 1773
  author: Andreas Brenk
  date: '2004-07-13T23:16:09'
  content: Has anyone of you looked at TMDA (http://www.tmda.net)? It does whitelists, blacklists, challenge/response and so called tagged addresses.
  replies: []
- id: 1774
  author: Chris
  date: '2004-07-15T01:04:12'
  content: What about registering with web sites? Typically they send an authorization email (sometimes with your password in). You won't know what to add to your white list.
  replies: []
- id: 1775
  author: Renaud Waldura
  date: '2004-07-15T17:45:26'
  content: 'As noted by many other spam researchers, this C/R technique:

    1- doubles the amount of spam mail (since for every spam you respond with a challenge)

    2- assumes the first email isn''t spoofed -- it''s unreliable

    3- only works if the person doesn''t use a C/R system of their own -- it doesn''t scale.

    Three fatal flaws IMHO.

    http://kmself.home.netcom.com/Rants/challenge-response.html

    http://www.politechbot.com/p-04746.html

    I like the greylisting idea a whole lot better.

    "Challenge systems have effects a lot like spam.  In both cases, if only a

    few people use them they''re annoying because they unfairly offload the

    perpetrator''s costs on other people, but in small quantities it''s not a

    big hassle to deal with.  As the amount of each goes up, the hassle factor

    rapidly escalates and it becomes harder and harder for everyone else to

    use e-mail at all."'
  replies: []
- id: 1776
  author: Dan Countryman
  date: '2004-07-17T07:57:01'
  content: 'An interesting take could be using the spammer technique of placing an html link to a picture with a unique id the would send back a ping identifying the user just by the recipient opening the email.  This would take more responsibility away from the recipient.

    It is true that everybody doesn''t have HTML email, so that you would have to still allow replies to validate email.  The possibility of the emailer using someone else''s email address would have a more drastic effect with this idea also, being the email would just have to be opened, a positive response would be given even if the person really wasn''t the sender of the email.

    But it is still an interesting twist on the idea.'
  replies: []
- id: 1777
  author: Simon Gibbs
  date: '2004-07-19T12:38:09'
  content: What stops a spammer from automatically responding with an empty reply and being validated?
  replies: []
- id: 1778
  author: cybertag
  date: '2004-08-02T10:00:44'
  content: I noticed that some spams now use my own email address as the sender, which makes the implementation of the CRS more complicated...
  replies: []
- id: 1779
  author: hiddenfish
  date: '2005-03-16T05:25:22'
  content: There is something in the water. It makes the natives radiate with an odd glow. Why do we systematically ignore and deny these signs of the apocolypse? Why do we sit idly by and try to seek normalcy when it is merely an opiate of the mind. Why do we permit the madness? Take action now! Join the growing movement that strives to uncloak the mysteries that plague the global psyche!!! Show your support by encircling your wrists with orange marker to gain awareness. We will be heard and the world will know our cause!
  replies: []
- id: 1780
  author: HeavyCode
  date: '2005-04-07T22:34:55'
  content: To get rid of cancer you nearly have to kill the patient.  Maybe with spam the same is true.  Clog the web pipes with more C/R messages.  Bring it to its knees.  If sender/return addresses are different then it is likely spam or a friend on vacation.  Known baddies are purged but review new messages daily.  Black lists could get *very* long but after a while entries are probably discontinued and could be dropped for others.  Remember private/public encryption?  Could that approach work here?
  replies: []
- id: 1781
  author: Todd Cary
  date: '2006-07-22T10:11:19'
  content: Are there any programs available for Windows that intercept the email (LSP) before it gets to the email client?  Email client independent?
  replies: []
- id: 1782
  author: Denis
  date: '2006-08-22T13:54:32'
  content: 'Todd: I am no geek am not sure I really understand you!!  But please take a look at www.choicemail.com.  This has done a good job for me on one account.  I dont want to pay for the full edition to cover my others.  I can still take a quick check on spam, but it doesnt ever reach my PC unless I give it the okay.  Spammers never respond to a challenge - at least mine dont!

    KR Denis'
  replies: []
- id: 1783
  author: Denis
  date: '2006-08-22T13:56:34'
  content: 'Todd: I am no geek am not sure I really understand you!!  But please take a look at www.choicemail.com.  This has done a good job for me on one account.  I dont want to pay for the full edition to cover my others.  I can still take a quick check on spam, but it doesnt ever reach my PC unless I give it the okay.  Spammers never respond to a challenge - at least mine dont!

    KR Denis'
  replies: []
- id: 1784
  author: Denis
  date: '2006-08-22T14:01:12'
  content: 'Todd: I am no geek am not sure I really understand you!!  But please take a look at www.choicemail.com.  This has done a good job for me on one account.  I dont want to pay for the full edition to cover my others.  I can still take a quick check on spam, but it doesnt ever reach my PC unless I give it the okay.  Spammers never respond to a challenge - at least mine dont!

    KR Denis'
  replies: []
- id: 1785
  author: Michael
  date: '2006-11-02T02:19:35'
  content: 'I have been also been using a challenge response system ( http://www.ixxorealmail.de ) which effectively stopped all the spam coming to my inbox.

    I beleive that challenge response systems are much better than any filtering system, at least for me.'
  replies: []
- id: 1786
  author: sjiokxts
  date: '2007-02-06T17:35:08'
  content: svdyibts http://mtrumbsl.com nxacksjp uoqkdzwb  xfaphdrm  [URL=http://kloryvkg.com]mzlohvwa[/URL]
  replies: []
- id: 1787
  author: smneoaau
  date: '2007-02-06T17:35:45'
  content: gzzuhfpy  woftkvte http://lviorysr.com taxlcypm rupnfzyv  [URL=http://yupeaync.com]hzmfjkzy[/URL]
  replies: []
- id: 1788
  author: Bryan
  date: '2009-06-03T03:43:05'
  content: Thanks, nice article. Like you, I'm a big fan. Check out EmailSaviour.com
  replies: []
---

[This article](http://beust.com/weblog/challenge-response.html) describes a simple system that has good chances to become a very effective protection against spam.

Comments welcome (except for the Slashdot spam form).
