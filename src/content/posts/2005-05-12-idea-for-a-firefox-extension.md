---
title: Idea for a FireFox extension
date: '2005-05-12T09:26:45'
slug: idea-for-a-firefox-extension
categories:
- General
comments:
- id: 3637
  author: ''
  date: '2005-05-12T10:46:32'
  content: I had the same concern and realized I could solve part of it  by using RSS client instead ...for instance, Theserverside or any blogs doesn't need to be opened within a browser.
  replies: []
- id: 3638
  author: Ken Meltsner
  date: '2005-05-12T13:45:02'
  content: 'I wrote (for another purpose) a tabbed IFRAME set that could be adapted.  Essentially, you''d open a site with greasemonkey, I guess, and it would set targets for links such that the IFRAME "flipper" would get them.  You''d retain the correct title, but could stack up multiple tabbed IFRAMEs per browser tab.

    I should see whether I can make a derivative version of my code.  Tabs within tabs, and you thought AJAX was tricky....'
  replies: []
- id: 3639
  author: Mike Fleming
  date: '2005-05-12T18:11:17'
  content: 'I use something that seems like it might be similar to Ken''s approach. Check out http://home.comcast.net/~monduke/ConsolidatedBlogs.html.

    It''s a page of IFrames stacked vertically that refreshes at a set interval. I always "Open Link in New Tab" when clicking on links.

    If you save the source, you can just change the array to point to your sites of interest.

    I have this page of blogs and a separate page just like this one of links to web sites that I monitor. Each one gets a tab in the same instance of Firefox. It doesn''t exactly do what you require, I know, but I like it.'
  replies: []
- id: 3640
  author: Sencer
  date: '2005-05-13T00:02:06'
  content: 'Here is a userscript that removes "Weclome to" etc. from Titles. It should be trivial to make it so, that it puts part of the url at the front of the title:

    http://www.thebiermans.net/GreaseMonkey/Title%20Scrubber.user.js'
  replies: []
- id: 3641
  author: osbald
  date: '2005-05-13T04:05:07'
  content: 'How about URL2Title - https://addons.mozilla.org/extensions/moreinfo.php?id=703&vid=2614

    (not tried it myself)'
  replies: []
- id: 3642
  author: user
  date: '2006-05-10T03:32:47'
  content: 'Check this

    https://addons.mozilla.org/firefox/1298/'
  replies: []
- id: 3643
  author: african american skin care
  date: '2006-10-05T00:40:22'
  content: big thank
  replies: []
---

While tabbed browsing has considerably increased my comfort in web browsing, I still find that navigation could be made easier.

In a typical session, I have between five and ten different FireFox windows on my desktop, each of them containing one more more tabs.  Like most tab users, I try and keep all the related browsing in the same window.  For example, here are some of my typical main windows:

  * javablogs.com
  * theserverside.com
  * bloglines.com
  * My blog
  * Various JavaDocs
  * etc...



In turn, each of these windows contains tabs with links reached from these main windows.

The problem is that FireFox adjusts the title of the window based on what tab is being displayed, which makes it hard for me to find "the window where I open all my bloglines links".

I was wondering if an extension that lets me change the title of the FireFox window exists?

And if there is no such thing, how hard would it be to create a [GreaseMonkey](http://greasemonkey.mozdev.org/) script (or a real FireFox extension) that lets me tell FireFox things such as "If one of the tabs displayed is on *.bloglines.com, then name this window 'blogs'".

Any idea?
