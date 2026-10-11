---
title: Automatic filing with del.icio.us
date: '2005-03-03T12:21:02'
slug: automatic-filing-with-del-icio-us
categories:
- General
comments:
- id: 3223
  author: Jonathan Aquino
  date: '2005-03-03T20:24:38'
  content: If you've got a PDA, then you can write a script to download your del.icio.us read_later pages to your PDA each night. That's what I do - works great.
  replies: []
- id: 3224
  author: Filippo
  date: '2005-03-03T23:00:18'
  content: 'Good hint, Cedric.

    Now we have a global and interesting ''to-read list''

    http://del.icio.us/tag/read_later'
  replies: []
- id: 3225
  author: Filippo
  date: '2005-03-04T02:15:26'
  content: 'I''ve published a php server script that automatically forwards to the next read_later page....

    http://www.diotalevi.com/weblog/?p=22'
  replies: []
- id: 3226
  author: Chris
  date: '2005-03-04T08:15:48'
  content: Thanks, Cedric! Make it as a pop up would be even better, as u don't have to wait for it to connect and save.
  replies: []
- id: 3238
  author: The Room
  date: '2005-03-04T08:20:48'
  content: '<strong>links for 2005-03-04</strong>

    Gui Avoider (categories: mac interface usability readings tips) Seebis Blog - SPARQL Query Tool (categories: php rdf sparql) XUI...'
  replies: []
- id: 3227
  author: Phil! Gregory
  date: '2005-03-04T10:10:23'
  content: 'Nice idea, and one that I think I''ll steal for my browser.  I''ve a couple comments, though:

    From my experience, the most common tag for indicating that you want to read something later is ''toread''.  Not that it really matters, since it''s a tag that''s pretty much exclusively for your personal use, but it makes for a more common glocal to-read list.

    I like the script to go to the top item from the list.  I do a similar thing with firefox''s live bookmarks.  I have a live bookmark subscribed to the RSS feed for my toread tag, so I get an up-to-date list of reading material straight from my browser UI.'
  replies: []
- id: 3228
  author: B. Rintoul
  date: '2005-03-04T13:48:15'
  content: 'That is a great idea indeed.  I might implement something like it in a context menu in my HuntAndGather extension for Firefox...

    (you can get the 0.4 version from http://huntandgather.mozdev.org/installation.html )'
  replies: []
- id: 3229
  author: Joseph
  date: '2005-03-04T14:35:09'
  content: Sidenote, I've seen "revisit" and "system:unfiled" used as tags for this as well.
  replies: []
- id: 3230
  author: Peter Parkes
  date: '2005-03-05T09:44:06'
  content: If you find that extra click to save the bookmark too much, check out this (http://www.hiddenchemistry.com/2005/03/05/delicious-read-later/), a PHP-javascript combo which cuts out the extra effort!
  replies: []
- id: 3231
  author: Peter Parkes
  date: '2005-03-09T06:11:27'
  content: It seems like I went to a whole lot of unnecessary effort - see my latest post (http://hiddenchemistry.com/2005/03/09/one-delicious-click/) for a much simpler 'one click' solution.
  replies: []
- id: 3239
  author: Neeraj Kumar's drive by thougths on ....well whatever he drives by
  date: '2005-03-12T15:15:45'
  content: <strong>Read later bookmarklet by Cedric</strong>
  replies: []
- id: 3232
  author: Sirius Kase
  date: '2005-03-30T14:05:33'
  content: I just borrowed your bookmarklet and tried it out.  Works great! Thanks.  Now I just need that download to PDA script that Jonathan mentions.
  replies: []
- id: 3233
  author: piyo
  date: '2005-04-01T08:15:44'
  content: 'You need to replace the "escape" function with "encodeURIComponent" so that it works in foreign languages, like Japanese.

    Like this:

    "javascript:location.href=''http://del.icio.us/new/YOURUSERNAME?url=''+encodeURIComponent(location.href)+''&amp;title=''+encodeURIComponent(document.title)+''&amp;tags=read_later"'
  replies: []
- id: 3234
  author: mardoen
  date: '2005-04-09T07:37:54'
  content: 'I use the experimental del.icio.us bookmarklets to add links. this is your bookmarklet experimental-style:

    javascript:location.href=''http://del.icio.us/new/YOURUSERNAME?v=2&url=''+encodeURIComponent(location.href)+''&title=''+encodeURIComponent(document.title)+''&tags=read_later'''
  replies: []
- id: 3235
  author: PC
  date: '2005-05-09T08:50:41'
  content: 'You are now listed in the Absolutely Del.icio.us - Complete Tool Collection

    http://pchere.blogspot.com/2005/02/absolutely-delicious-complete-tool.html'
  replies: []
- id: 3236
  author: Joe Becher
  date: '2005-09-20T04:55:53'
  content: Very helpful. Thank you.
  replies: []
- id: 3237
  author: epila laser hair removal
  date: '2006-09-28T10:23:41'
  content: thank
  replies: []
---

Very often, I find an interesting article that I don't have the time to read just now and I want to make sure I won't forget to read it some time later.  To achieve this, I have created a tag `read_later` in my [del.icio.us](http://del.icio.us) bookmarks.  Whenever I find such an article, I now file with this tag in my bookmarks and when I find myself with a few minutes on my hand, I can just click on my `read_later` tag and pick an article I haven't read yet (and remove it from there when I'm done).

To speed up this process, I have created [ this bookmarklet](javascript:location.href='http://del.icio.us/YOUR_LOGIN_HERE?url='+escape\(location.href\)+'&title='+escape\(document.title\)+'&tags=read_later') which allows me to file the current Web page in the ` read_later` category in one click (well, two, you still need to save it, but I like this because it gives me a chance to add tags before I file the page).

Just drag and drop the link in your toolbar, edit it to replace ` YOUR_LOGIN_HERE` with your `del.icio.us` login and you're ready to go.
