---
title: 'Firefox''s "Tab Candy": pretty, but...'
date: '2010-07-24T06:56:01'
slug: firefoxs-tab-candy-pretty-but
categories:
- General
comments:
- id: 8305
  author: Dan
  date: '2010-07-24T07:46:54'
  content: I'm pretty sure that you can type a tabs title into any location bar in firefox 4 and it will take you to that tab.
  replies: []
- id: 8306
  author: guest
  date: '2010-07-24T09:39:24'
  content: 'vimperator

    :b sometitle'
  replies: []
- id: 8307
  author: yash
  date: '2010-07-25T03:01:45'
  content: have tried Search Tab  1.8 - https://addons.mozilla.org/en-US/firefox/addon/10164/
  replies: []
- id: 8308
  author: Cedric
  date: '2010-07-25T05:12:47'
  content: Thanks for the suggestion, but this add on only searches tabs in the current window, which is pretty useless...
  replies: []
- id: 8309
  author: Alex
  date: '2010-07-27T07:27:30'
  content: Are you aware of "Ctrl-Tab"? It has the search feature you are looking for (across all tabs in all windows) https://addons.mozilla.org/en-US/firefox/addon/5244/
  replies: []
- id: 8310
  author: Aza Raskin
  date: '2010-07-27T22:47:10'
  content: 'Cedric, I hear you. In the current version of Tab Candy our keyboard shortcuts are indeed broken (in earlier builds you could use the arrow keys). But more importantly, we will be adding find-as-you-type search to Tab Candy. Sometimes you know exactly the name of the tab for which you are looking; we shouldn''t require you to visually search for it. Just type.

    I briefly mentioned this in the video. More coming soon.'
  replies: []
- id: 8311
  author: Sohail Mirza
  date: '2010-08-05T10:17:13'
  content: 'Cedric, as was mentioned above, Firefox 4 will let you switch to another tab by typing its title into the awesomebar.

    Also, Tab Candy isn''t mutually exclusive to standard window management behaviour on your desktop o/s of choice.  You can still open new windows and each will maintain it''s own tab space, independently managed via Tab Candy.  As it stands, Tab Candy offers an excellent solution to the problem of having simply far too many open tabs with different contextual purposes.  Tab Candy is less a window management alternative, and more a tab workspace tool.

    This said, perhaps there can be a way of exposing tab management to the desktop environment.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/candy-tabs.png)

I'm not a big fan of [](http://www.azarask.in/blog/post/tabcandy/)Firefox's latest experimental feature "Tab Candy" for a couple of reasons. 

First, I don't think that having an application reinvent its own window management system is a step in the direction of better usability. Whatever operating system you are using, it's already difficult to navigate through windows efficiently as it is, but after some time, you become reasonably proficient with it. And now, you find yourself having to learn yet another window management paradigm, with shortcuts that are by definition different from the ones you are used on the desktop, and a space and interaction logic that is going to be subtly different from the OS. 

Second, I tend to use the keyboard to select my windows a lot more than the mouse, so functionalites like Exposé are of no use to me. Tab Candy seems to be no different. 

What I really need is an extension that lets me switch to a tab by typing a few letters from either its title or its content. Just now, as I was starting to write this entry, I found myself having to find the article I linked above. I have currently about ten Firefox windows open and each of them has anywhere between one and ten tabs. Finding the correct window required a few `Alt-Tab` and quite a few `Alt-~`. And even then, the correct window popped up on my screen several times but I missed it because the tab I was looking for was the fourth in in a group of ten. 

What would have been ideal: a text box where I can type "candy" and a drop down containing all the tabs that match the string I just type. 

I'm aware of a few Chrome extensions that do this but all of them open a new window when you select the tab, instead of just taking you to the existing one, which defeats the purpose of the idea since it loads the page again and loses the position you were last reading. 

Please let me know if you know of any extension that accomplishes what I'm looking for (ideally on Firefox).
