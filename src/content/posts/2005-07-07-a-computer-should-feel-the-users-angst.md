---
title: A computer should feel the user's angst
date: '2005-07-07T12:42:04'
slug: a-computer-should-feel-the-users-angst
categories:
- General
comments:
- id: 3827
  author: Eric Foster-Johnson
  date: '2005-07-07T09:58:16'
  content: 'I saw mouse gestures used in computer-aided manufacturing long, long ago. I think this predates the usage in games. For example, "Z" did a zoom (the interfaces showed manufactured parts in 3D). You could also use mouse gestures to pan and rotate.

    -Eric'
  replies: []
- id: 3828
  author: Anjan Bacchu
  date: '2005-07-07T10:38:00'
  content: 'Hi Cedric,

    The Brief Editor (a DOS/Windows based Editor(which had a very dedicated community where people would create custom commands/macros) , later brought by Borland and EOL''d) would scroll the screen faster if it noticed that you kept the ARROW/UP/DOWN keys pressed or were pressing it fast enough. This technology was available for developers in the early 90s.

    Other thing that BRIEF did WAS NOT to load the entire HUGE file -- only load segments of the file but make regexes work for the whole file. Having seen many colleagues open ORACLE log files ONLY to see their editors SUCK all CPU/MEMORY, this feature is one of the top for professional editors.

    Wish there were more (win32) editors that work on files as fast as BRIEF.

    Haven''t seen other editors do some of these user friendlyness(not even XEmacs that I use).

    BR,

    ~A'
  replies: []
- id: 3829
  author: drew
  date: '2005-07-11T09:05:58'
  content: 'no, but i sure wish that the caps lock was more like the ''italics'' and ''bold'' buttons in word than a analog-type toggle switch.

    thoughts?'
  replies: []
- id: 3830
  author: Rich
  date: '2005-07-18T01:38:18'
  content: 'Hi Cedric

    Do you have a link to the interview? I''d love to read it!

    Rich'
  replies: []
- id: 3831
  author: Bruno Patini Furtado
  date: '2005-07-22T14:26:56'
  content: 'The Opera browser had already mouse gestures since version 5.x I think, back in 2000 when I started using it. If not on version 5.x, since version 6.0 for sure.

    Since that I couldn'
  replies: []
- id: 3832
  author: Tennessee Leeuwenburg
  date: '2005-08-06T23:05:52'
  content: 'That is the greatest idea I have ever heard. Today anyway. There is nothing more frustrating than the impotence of being unable to "jump the queue" when your back is up against the wall, and all your base around about to get owned.

    p.s. WTF is with the tab order on this software? Why is the security code after the comments field? ARGH! I have to, like, use the actual mouse! So wrong!'
  replies: []
- id: 3833
  author: Tennessee Leeuwenburg
  date: '2005-08-06T23:08:54'
  content: 'Sorry, further comment (further mouse useage, some angst) -- I can''t agree on goal-oriented interfaces. At least, not the bad ones. Certainly not Microsoft ones.

    The worst thing is trying to hook up a new network connection, when it immediately asks you if you want to connect to an ISP, set up a corporate connection or a home LAN. Now, I don''t know which of those I want. All I want is for my computer to cast about for a DHCP-allocated address, unless I freakin tell it otherwise. I don''t want it to give me some wizard for opening an account at AOL, or whomever is ...  I''m ranting again.

    Cheers,

    -T'
  replies: []
- id: 3834
  author: Dison
  date: '2007-10-01T00:42:53'
  content: Do u like Computers!! Yes then visit Couponalbum.com as this is full of fresh and best coupons on computers and other offers, visit and enjoy....!!!!
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/ta.jpg)

I was just reading an interview of Chris Taylor, the creator of the mythic game [ Total Annihilation](http://www.planetannihilation.com/taucp/screenshots/index1.html), which is still considered as one of the best real-time strategy games of all time despite being released in 1998.  Taylor is working on a sequel to Total Annihilation and he is introducing a set of innovative user-interface features.  The article I read only disclosed one:  watching the frequency of your clicks.

In short, the game will monitor how fast you are clicking your mouse in order to detect the urgency of your commands.  If you want a certain unit destroyed as soon as possible, you are therefore encouraged to click on it multiple times, which will signal to the game engine that it should activate additional firepower and units to follow your command.  This is what Taylor means when he says "A game should understand the player's angst".

It is a very little known fact that games have pioneered a lot of innovations in the user interface area.  For some reason, their contribution has always been very much downplayed but I am a firm believer that a lot of the widgets we use on our desktops today (most of them being incremental improvements of the [WIMP](http://en.wikipedia.org/wiki/WIMP_\(computing\)) paradigm - Windows Icon Menu Pointer) appeared in games first.  You might not have realized it, but there are plenty of subtle improvements available to you on a daily basis, such as:

  * Flat toolbars.  There was a time when we were convinced that a button had to be 3D in order to express its [affordance](http://en.wikipedia.org/wiki/Affordance).  Nowadays, such interfaces look clunky and antiquated.  
 
  * Scrollbar thumbs giving hints as to where the document will reposition itself if you release it.  
 
  * Shortcut tree views.  Tree views have become a central part of any sophisticated user interface and they tend to become quite crowded.  Applications such as Outlook or Eclipse now let you specify shortcut views that only contain the nodes you are the most interested in.  
 
  * Goal-oriented interfaces ("I want to create a new document" as opposed to "Open / New document").  
 
  * etc...



Indeed, we are still using the old WIMP paradigm that was invented in Xerox PARC two decades ago, but all these incremental improvements have contributed greatly to making our desktops much easier to use.

Another example of a feature that was first implemented in games is [mouse gestures](http://en.wikipedia.org/wiki/Mouse_gesture):  keep your right button pressed, draw a "C" with the mouse and the current window will close.  What's fascinating with gestures is that not only can you recognize the geometry of the symbol the user is drawing, you can also analyze their motion to make a decision:  if they drag the mouse in a line from right to left, it means "Back", while dragging from left to right means "Forward".  Mozilla-based and other non-mainstream browsers support gestures, but overall, they are not being used very much.

Taylor's multi-click idea is new to me.  In general, modern user interfaces tend to move away from double clicks because it is difficult to explain to novices, and the confusion is even greater now that so many clicks happen on hyperlinks in HTML documents, which create an immediate response after one click (I set up all my desktops to respond to single clicks everywhere as soon as Windows 95 came out).

Another unfruitful attempt at using multi-clicks dates back as far as Windows 3 (and still supported to a certain extent in today's Windows) where a single click on the upper-left corner of the window shows up the Options menu but a double click closes the said window.

Overall, it appears that basing an interface on double clicks is a bad idea.

Interestingly, I believe that Taylor's idea has better odds of working, precisely because the specification is vague.  You don't need to "click twice within a few tenths of a second", all you need to do is "click several times", and the program will react accordingly.  The human parameter is what makes the difference.

Can you think of any other ways to improve the WIMP interface, either coming from games or other areas?
