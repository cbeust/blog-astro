---
title: Spam software review, part 1
date: '2004-08-04T07:50:01'
slug: spam-software-review-part-1
categories:
- General
comments:
- id: 1909
  author: John Flinchbaugh
  date: '2004-08-04T08:58:40'
  content: 'is it possible to use an outlook rule to have an address not subjected to the filter (so whitelisted)?

    that''s all i do with procmail and bogofilter on the unix side of life.'
  replies: []
- id: 1910
  author: Cedric
  date: '2004-08-04T09:05:45'
  content: Unfortunately, no.  Outlook has a lot of rules but not "If the sender is in your address book", which is really lame.  Also, it doesn't look like it's possible to add rules via COM :-(
  replies: []
- id: 1911
  author: Cedric
  date: '2004-08-04T09:38:30'
  content: I've heard good things about K9 but it only does POP, which is really dumb IMO.  Besides, I am only interested in Outlook add-ins.
  replies: []
- id: 1912
  author: ''
  date: '2004-08-04T10:50:00'
  content: 'You can use POPFile as a spam filter:

    http://popfile.sourceforge.net/

    It has a "magnets" feature that you can use to create a white list.

    There''s also an Outlook plugin for POPFile that handles whitelisting at the touch of a button:

    http://www.vargonsoft.com/Outclass/'
  replies: []
- id: 1913
  author: James A. Hillyerd
  date: '2004-08-04T11:04:03'
  content: I don't know your reasons for only wanting an Outlook plugin...  I'd much rather my spam filtering take place on the server, so that I don't have to download it - and I can check email from work, home or my mobile phone and still enjoy spam filtering.  I started using aliencamel.com, and it's great.  They use a mix of white lists, black lists, spamassasin, bayes filtering and two virus scanners.  It works extremely well!  Cost is $32/year for 50MB of storage.  (I'm not associated with aliencamel.com in any way, just a happy customer)
  replies: []
- id: 1914
  author: Cedric
  date: '2004-08-04T11:18:49'
  content: 'Simple:  I don''t have access to the server at work.  And regardless of whether your company is using sendmail, Exchange or another MTA, I think it''s a pretty common situation, so client processing is my only option.

    As for my personal email, I use IMAP on my server so POPFile and K9 are out as well.'
  replies: []
- id: 1915
  author: Dion Almaer
  date: '2004-08-04T11:45:51'
  content: 'I use Spam Bully, which is an Outlook plugin too.

    My experience has been great. It just works.

    D'
  replies: []
- id: 1916
  author: Al
  date: '2004-08-04T12:35:06'
  content: Actually beggining with Outlook XP a "If the sender is in your address book" filter is available.
  replies: []
- id: 1917
  author: Glen Stampoultzis
  date: '2004-08-04T18:01:21'
  content: 'Interesting.  I''ve been using spam bayes and haven''t got nearly the number of problems you seem to have gotten.  Most of my spam gets classified correctly.  I do get a few unsures but I''ve got my system set to just send those through to the inbox anyway.  After classifying them it usually stops anything similar from getting through.  It might be worth tweaking the cutoff levels.

    White lists would be useful.

    One thing it is worth doing is keeping all your junk (in a different folder) so that you can use it to retrain.'
  replies: []
- id: 1918
  author: Brian Goetz
  date: '2004-08-09T20:59:11'
  content: I'm a big fan of SpamAssassin if server-side implementation is practical (such as via procmail), but if not, the Bayesian module in Mozilla Thunderbird (and probably regular Mozilla too) seems to learn surprisingly quickly and make surprisingly few false positives compared to other implementations I've used.
  replies: []
- id: 1919
  author: Brian Goetz
  date: '2004-08-09T20:59:19'
  content: I'm a big fan of SpamAssassin if server-side implementation is practical (such as via procmail), but if not, the Bayesian module in Mozilla Thunderbird (and probably regular Mozilla too) seems to learn surprisingly quickly and make surprisingly few false positives compared to other implementations I've used.
  replies: []
- id: 1920
  author: zpbrtaok
  date: '2007-05-19T16:20:52'
  content: txlbdxkd http://ihprzmxv.com mebrgite bnoprgjn  loblmuwe  [URL=http://grxrzdby.com]braimyvu[/URL]
  replies: []
---

I have tried several anti-spam clients for Outlook recently, here are a few reviews.

I'll start with [SpamBayes](http://spambayes.sourceforge.net/), the open-source Python add-in for Outlook.

First of all, I have to say I like the idea of an Outlook add-in written in Python.  I am not a big fan of Python myself (here [is](http://www.freeroller.net/page/cbeust/20030504)  [why](http://www.freeroller.net/page/cbeust/20030608)), preferring Groovy and Ruby, but this is a testament to the goodness of COM/.Net which gives you a lot of flexibility on your language of choice.

My initial contact with SpamBayes was pretty good but unfortunately, the honeymoon didn't last long.  After a few weeks, I became annoyed by the following shortcomings:

  * SpamBayes is slow.  I don't know if it's due to Python (or its executable compiler) or the code itself, but you can clearly see it processing a message.  While it's usually not an issue for individual messages, you will feel your pain when you haven't launched Outlook in several days and that SpamBayes suddenly finds itself in front of over one hundred messages to filter.  
 
  * Even after a few weeks of training, a high number of emails (about twenty per day) still ended up in the "Junk suspects" folder while they are obviously spam that should have been detected by the Bayesian algorithm (meaning:  they are of reasonable size, in plain English text and contain quite a few keywords that should have made the filter take immediate notice).  
 
  * But the number one reason that made me decide to give up is:  SpamBayes doesn't have a white list.



First of all, I was quite put off by the attitude of the developers when I asked for that feature.  The responses were typically along the lines "SpamBayes doesn't need a white list, it's doing a great job already", "I've never needed it" and "Why don't you add the feature yourself?".

This is not the kind of response you get from commercial vendors typically, but well, the software is free so there is not much I can do.

But the worst part of this shortage is that it shows that the Spambayes authors don't understand that a spam filter is simply useless without a white list.

It took just a few days for me to realize that when I started exchanging important emails with someone who tends to write very short, poorly-formatted emails that the filter was absolutely incapable of training against.  Despite all my efforts, this person's emails regularly ended up in the "Junk suspects" folder or, worse, in "Junk".

Another example a few days later: emails from a member of my family who are tagged with several lines of self promotion / advertising at the bottom, which the filter systematically interpreted as spam.

After a few weeks of use, I realized that I just didn't trust my spam filter.  I kept dreading that I would miss an important email and therefore, applied extra caution when perusing my "Junk suspects" folder, which completely defeats the purpose of such a tool.  Added to the fact that SpamBayes doesn't offer extra goodies such as statistics or challenge/response, it became clear to me it was time to look for another option.

Next:  MailFrontier's Matador (and after that, IHateSpam).
