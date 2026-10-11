---
title: Lua and World of Warcraft
date: '2010-03-03T12:32:00'
slug: lua-and-world-of-warcraft
categories:
- General
comments:
- id: 8027
  author: Lua and World of Warcraft ?? Otaku, Cedric&#039;s weblog | World of Warcraft Private Servers (WoWps)
  date: '2010-03-03T18:08:22'
  content: '[...] Lua and World of Warcraft . Ultimate Craft Queue add-on. A few people asked me what I was doing with Lua, so here it is: http://beust.com/weblog/ucq   Read more: Lua and World of Warcraft ?? Otaku, Cedric&#39;s weblog [...]'
  replies: []
- id: 8028
  author: Katherine
  date: '2010-03-03T22:26:36'
  content: Hi, I just tried your addon, and I don't think it is pulling info from the proper places. For example, according to my guild bank I have 8 copies of Glyph of Anti-Magic Shell. However, the addon keeps insisting that I have none despite the fact that I tell it I only want 4. Other than that it seems to be doing the job very well. Love the fact that it's a gui. Keep up the good work!
  replies: []
- id: 8029
  author: Katherine
  date: '2010-03-03T22:31:04'
  content: Just an addition... I was fiddling around w/ my gbank tabs trying to get my glyphs semi-organized, gave-up, and went back to crafting. For some reason the queue figured out what I had now.
  replies: []
- id: 8030
  author: Cedric
  date: '2010-03-03T23:16:10'
  content: I'm guessing you hadn't opened your guild bank since you installed Altoholic, so it had no way of knowing what's in there.  Opening the bank fixed that.  Make sure you open the bags of all the other alts that might have glyphs on them as well...
  replies: []
- id: 8031
  author: Scheinheilig
  date: '2010-03-05T10:21:40'
  content: 'hi there

    ucq has exactly the functions i have been looking for :-)

    but its ignoring the theshold even though auctioneer is up and running (ver. 5.7) - in the log i get "Auctioneer not detected, disabling threshold".

    Altoholic, Skillet und LilSparky''s Workshop are running smoothly too.

    do you have any idea?

    scheinheilig'
  replies: []
- id: 8032
  author: Eric
  date: '2010-03-06T15:11:04'
  content: 'I''m having the same problem Sheinheilig is having - I have auctioneer 5.7, but it doesn''t seem to be pulling data from there. If that feature worked properly, my life would be much simpler, as I love this addon.

    The only other request I''d have would be to distinguish the 1-ink from the 2-ink glyphs, as the profit requirements are different (although that''s changing in 3.3.3)'
  replies: []
- id: 8033
  author: Crayzen
  date: '2010-03-20T21:03:10'
  content: great addon, i really fucked up my server already but with this, my work becomes like a factory
  replies: []
- id: 8034
  author: AJ
  date: '2010-03-23T18:02:02'
  content: Is there anyway to pull the "threshold" from Lilsparky's?  I don't use auctioneer, and don't plan on ever using auctioneer, so would be an awesome feature.  ( i do however use auctionator).
  replies: []
- id: 8035
  author: Snydley
  date: '2010-03-26T16:56:44'
  content: I've been using this for a bit and it was amazing, but of late it's been refusing to que anything but death knight glyphs.  Annoying to say the least.
  replies: []
- id: 8036
  author: Eric
  date: '2010-04-01T20:24:00'
  content: Yeah, I noticed the same thing. I think there's a new bug in LSW somewhere where one of the glyphs is bugging out. I get up to Innervate in druid glyphs and then die.
  replies: []
- id: 8037
  author: Eric
  date: '2010-04-01T20:38:39'
  content: Deleting my auction-related savedvariables did the trick fixing it, however. Just had to re-scan the AH for new glyph values.
  replies: []
- id: 8038
  author: Bob
  date: '2010-04-03T00:07:14'
  content: While this is an improvement over KTQ, it's not the functionality I'm looking for which is glyph-specific, rather than class-specific queueing.
  replies: []
- id: 8039
  author: inslain
  date: '2010-04-11T06:41:14'
  content: "...ace\\AddOns\\UltimateCraftQueue\\UltimateCraftQueue.lua line 159:\n   attempt to compare number with nil\nPlz help for this error"
  replies: []
- id: 8040
  author: Zygor Guide
  date: '2010-05-19T04:52:53'
  content: I would really like to use the "Ultimate Craft Queue" But, I keep getting the same message -??Auctioneer not detected, disabling threshold??.
  replies: []
- id: 8041
  author: Ger
  date: '2010-05-26T08:06:22'
  content: 'Ok, I have a fix for those that get the Auctioneer not detected error. its a quick and dirty hack and I apologise to the author for digging into his lovely addon.

    open file ultimatecraftqueue.lua in notepad, (found in interface\addons directory)

    now completely delete these lines in this order

    line 270

    line 269

    line 268

    line 266

    line 265

    line 243

    line 242

    then save the file and exit.

    Disclaimer - this works for me on my system, if it screws up yours then it aint my fault. I''m just trying to help you all out

    Cheers

    Ger'
  replies: []
- id: 8042
  author: Dugis Guide
  date: '2010-07-21T07:57:45'
  content: 'I must say that I like to browse the net in search of some usefull WoW addons - most of them are of poor quality.

    But I found Lua to be actually quite helpfull. I had similiar problem as user above "??Auctioneer not detected, disabling threshold??,

    but my Auctioneer installation was messed up. After resolving it, Lua works like a charm. Thanks'
  replies: []
- id: 8043
  author: Mentor
  date: '2010-08-18T03:14:05'
  content: 'I''m on my usual summer break from WOW at the moment but I shall be definitely trying this addon out.

    Hats off mate.

    Just want to share some information with you all for those that use the WOWHead tooltips in your websites. With WOWHead updating their item database with Cataclysm they have been lagging a bit slowing personal websites that use the WOWHead script down. So for all you folks who write your own sites I have done some digging and found the best way to put WOWhead tooltips on to your website. Since it??s a little long i??ve written the article and placed it here: http://wowmentor.com/wordpress-tips/install-wowhead-tooltips/ Since doing this my site loading problems caused by WOWhead have gone. Good luck hope this helps.'
  replies: []
- id: 8044
  author: wow schools
  date: '2010-08-23T12:06:31'
  content: This is a useful and helpfull little addon saves me tons of time. It can become chaotic when creating a huge amount of items. Im very glad there are people out there creating addons to make our live easier :P
  replies: []
---

![Ultimate Craft Queue add-on](http://beust.com/weblog/ucq/ucq1.png)

A few people asked me what I was doing with Lua, so here it is: <http://beust.com/weblog/ucq>. It's a simple add-on called "Ultimate Craft Queue" that I wrote to help me craft glyphs. This will probably only mean something to WoW players, but in short, with some discipline, it's possible to make a lot of money with this profession in WoW, but there are a lot of repeated operations involved in this process, so any automation you can come up with helps. This add-on is simply helping me streamline my process. Back to Lua, I have to admit that the problems I described in [my previous entry](http://beust.com/weblog/weblog/2010/03/02/suffering-in-lua/) were pretty minor overall, and the hardest part of writing this add-on was the WoW Lua API itself, not the language. It is extremely powerful, if the number of add-ons in existence is any indication, but it takes quite a bit of effort to navigate through the scarce and sometimes nonexistent docs. The usage of extra libraries (such as AceGUI) is pretty much mandatory and there are quite a few holes (such as the tooltip API) that make a WoW add-on developer's life absolutely miserable. But once it works, it's really rewarding...
