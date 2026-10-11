---
title: QuickSilver frustration
date: '2006-12-10T10:41:40'
slug: quicksilver-frustration
categories:
- General
comments:
- id: 6171
  author: Amit Patel
  date: '2006-12-10T13:06:35'
  content: QuickSilver has the weirdest UI. Everyone raves about it but I still can't quite understand it. As a result, I only use it as a launcher.
  replies: []
- id: 6172
  author: Romain GUY
  date: '2006-12-10T13:13:34'
  content: I use Spotlight to look for documents and QuickSilver for actions (launch apps, move files, write emails, etc.)
  replies: []
- id: 6173
  author: cooper
  date: '2006-12-10T15:16:02'
  content: 'I use Spotlight to look for documents and QuickSilver for actions (launch apps, move files, write emails, etc.)

    I think that is likely true of most people.'
  replies: []
- id: 6174
  author: Geoff Wozniak
  date: '2006-12-10T21:58:45'
  content: 'I don''t use Quicksilver for finding stuff either.  I''ve found it to be too inconsistent with respect to indexing.  I''ve always been confused by the preferences and total lack of documentation (although it''s gotten better).  Spotlight is better for finding stuff.

    Still, I''d really miss it if I didn''t have it.'
  replies: []
- id: 6175
  author: ''
  date: '2006-12-11T01:16:38'
  content: I've bought LaunchBar (http://www.obdev.at/products/launchbar/index.html) for all my needs, and I won't go back. Highly recommended. Much more user-friendly and effective than the rest of the crowed.
  replies: []
- id: 6176
  author: pcal
  date: '2006-12-12T00:27:42'
  content: 'I have a different take on it -  I generally use spotlight to find stuff and QS to do stuff.  :)

    Yeah, QS is great but the config is definitely a little wonky.'
  replies: []
- id: 6177
  author: leemic
  date: '2006-12-12T20:58:23'
  content: 'Am I the only one who is using spotlight to launch application????

    I tried to use QS but confusing.  I used to use Butler but I am happy with spotlight [ albeit it is slow to load for the first time ]'
  replies: []
- id: 6178
  author: AnonymousCoward
  date: '2006-12-13T07:18:17'
  content: '> ... reminds me too much of the pain to get

    > anything a bit exotic done on Linux.

    You criticize both OS X (OK, Quicksilver) and Linux here.

    Funny, to me it''s to get anything a bit exotic to get done under Windows that seems too painful.

    It probably all depends on your skills..  My Unix Kung-Fu is strong, my Windows Kung-Fu not so.

    YMMV.'
  replies: []
- id: 6179
  author: Paul Cantrell
  date: '2007-01-06T23:03:59'
  content: I second the vote for LaunchBar. Many nice little touches in it.
  replies: []
- id: 6180
  author: dan
  date: '2007-10-05T00:47:30'
  content: Thanks so much for this. I've been going crazy trying to figure this out.
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/quicksilver.gif)

I use QuickSilver all the time, which is probably the case of a lot of Mac OS users. It's a good product, but far from perfect, as the following anecdote shows. 

Recently, I realized that QuickSilver was able to locate a Word document A.doc but not B.doc in the very same directory (a few levels under ~/Documents). This was very frustrating, so I started looking in its Preference panel (probably one of the worst I've seen in a Mac OS application). After many unsuccessful clicks, I was eventually pointed to the User tab, which contains Documents. The rescan time at the bottom showing "10 minutes", it was obviously not a matter of an outdated database. 

My first two attempts (double clicking on "Documents" and then right-clicking on it) yielded nothing. Why is Mac so inconsistent with contextual menus? Not only are they rare, but when they are there, they break the UI (for example, you can't right click on a regular menu, which would pop up a secondary menu on Windows). 

Finally, I'm told that I need to click the little (i) icon at the bottom (how informative! How about a text label?). A window pops up, which shows a setting for "depth of search". Well, it's an improvement, and even though it still doesn't explain the bug (these two documents are in the same directory and were created several days ago), it makes me realize that QuickSilver only looks down two levels in a directory. 

Fine, I'll change that to 10, to be on the safe side, except that... this window is read-only. QuickSilver just won't let me change the properties for the Documents directory. My anonymous informant tells me to duplicate this entry, and then it will be editable. 

Lovely. 

Next problem: how do I do that? Remember: I can't right-click, so no "copy/paste" contextual menu. Have you guessed yet? I thought not. For that, I need to bring up the (i) window again, move to the third tab at the bottom ("Attributes") and there, click on "Create copy". Obvious, uh? 

Are the people who designed this UI from the same planet? 

Anyway, I follow the directions, I call the copy "Documents Deep", I'm taken back to the User tab, and... my entry is nowhere to be found. By now, I have learned to no longer trust anyone, so I click on a few tabs on the left hand, and finally, the one called "Custom" reveals the "Documents Deep" entry I just created. And I'm finally able to modify it. I increase the depth level, trigger a rescan, type the name of the document, and it's finally located. Phew. 

But it doesn't stop there. 

A few minutes later, I start typing the name of another document ("Concurrent.doc") but the first few letters are not enough to disambiguate it fully, so I keep typing until I hit the dot, and there... QuickSilver switches to Subject mode. It is now looking for a command called "Concurrent" and it will invoke it with the parameter "doc". Who's the genius who came up with the idea to use "." as a separator in QuickSilver? 

Anyway, I've finally reached a point where I'm functional again, but this whole ordeal reminds me too much of the pain it is to get anything a bit exotic done on Linux. Let's hope it won't happen too often.
