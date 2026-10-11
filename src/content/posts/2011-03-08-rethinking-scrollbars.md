---
title: Rethinking scrollbars
date: '2011-03-08T11:35:13'
slug: rethinking-scrollbars
categories:
- General
comments:
- id: 8860
  author: Robert Kova?evi?
  date: '2011-03-08T13:06:07'
  content: 'There are some people (like me), who JUST want to get some work done. They meddle with this stuff so much that moving windows was broken in the last LTS release (10.04). I''m not kidding, and last time I checked it''s still not resolved. Oh, but it only affected people with dual screens and they don''t really count, they''re those idiots trying to get some actual work done.

    Sorry for the rant, but Ubuntu really goes on my nerves lately. I wish they would just give me a giant button that says "Return everything to how I have 20 years of muscle memory of using. I have better things to do with my day than memorizing a new gimick to minimize and maximize a window."'
  replies: []
- id: 8861
  author: Matt King
  date: '2011-03-08T15:00:33'
  content: The 'bug' at 33 seconds is not a bug, he has the ubuntu.com web site open in the background, which has a banner at the top that scrolls to the left automatically every 30 seconds or so :-)
  replies: []
- id: 8862
  author: Olivier Croisier
  date: '2011-03-08T15:38:05'
  content: 'According to people around me that used it, "Innovative" UI - and weird scrollbars in particular - was one of the main reasons why Google Wave has not gained much adoption. Too different, too sluggish.

    As a professional developer, I want Gnome to be fast and productive above all. Period. I don''t care if it''s not ultra-beautiful with shiny gadgets. And for now I still fail to see how hiding scrollbars would enhance my user experience or productivity.

    On the video, it seems that you have to wait a coupe ms before the actual scrollers appear. Waste of time. And they seem to appear outside the window ; how will it work on fullscreen-ed windows ?

    At the very least, I hope that I''ll still be able to scroll a background window without giving it focus first - requiring to focus the window first drives me crazy when I work on Windows.

    I cross my fingers.'
  replies: []
- id: 8863
  author: Mohamed Mansour
  date: '2011-03-08T19:31:42'
  content: 'This scrollbar UI reminds of Google Wave. (Which I loved using BTW).

    In my honest opinion, Maximize/Restore/Minimize are useless buttons. It should be taken out. I believe it should depend on the hardware (touch screens, vs others)  On touch screen devices, it makes sense to remove such buttons and replace them with gestures (PlayBook as neat window gesture transitions of restore/maximize/close). Whereas the smart phone, you don''t see them.

    Windows 7 window snapping feature should be applied to all operating systems. You drag a window up and it snaps to maximize mode. You drag it to the side, it goes restore mode. They are just missing the minimize. With those window snapping, I rarely used maximize and restore.'
  replies: []
- id: 8864
  author: Handerson
  date: '2011-03-10T10:36:14'
  content: 'I believe most Ubuntu users use the mouse scroll wheel much more often than the window scroll bar.

    I like the idea of having a little more real estate.'
  replies: []
- id: 8865
  author: Morgan
  date: '2011-09-24T08:59:30'
  content: '" I also notice that the hit box for the scrollbar is bigger than the thumb, " -- finally! someone who understands my predicament as well. I do use the minimize button and scrollbars a lot though...But nevertheless, people adapt to change even if it''s against their will. I mean, look at what Facebook''s been doing lately. Jeez. The way subscribers (including me hehe) have been reacting makes you think we were paying for the service. Yet, accounts are still active. hehe Well anyway, let''s see how it goes for the scrollbars ;)'
  replies: []
- id: 8866
  author: Steven Taulks
  date: '2011-12-23T13:43:41'
  content: Maximise and Minimise functions maybe archaic in the current touch screen and iPad age, but technology changes so fast these days that you can't predict what's going to change in the future. You can't be sure how long "hand inputs" like the keyboard, mouse and even touch devices are going to last. But the problem is technology grows much faster than most people can keep up with it! And it takes a long time to adapt to a new technology. Imagine if tomorrow some smart alec wants to turn QWERTY keyboards into ABCDE Keyword, it makes sense but how will you upgrade so many people who have been using QWERTY for ages?
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/scrollbar-unity.png)

The next version of GNOME will be [removing the Minimize and Maximize buttons](http://goo.gl/Q6VZw) from their its window manager. Needless to say, this is a very controversial decision and the justifications for it look fairly weak to me. 

Digging a little bit into this curious decision, Mark Derricutt pointed me to another upcoming UI change in Unity: a brand new style of scrollbars. This is explained in more details in [this post on Mark Shuttleworth's blog](http://goo.gl/JSWvR). Take a look at the short video for a quick overview of how they work (I noticed a bug at around 33 seconds: when the cursor scrolls the front window horizontally, the window in the back scrolls horizontally as well. What I find really interesting about this bug is that I have noticed Mac OS showing the same behavior sporadically, especially when I use the double finger gesture on my trackpad). 

_Side note: scrolling on Mac OS is one of the two UI functions that violate the "no click through" behavior. Do you know the other one? It's the act of closing a window: you can close a background window by clicking on its red icon without needing to bring it to the front first._

Going back to the Unity video, I think this new design for scrollbars works well. I also notice that the hit box for the scrollbar is bigger than the thumb, which is a very good idea (one that I haven't seen in any other OS). After all, when you click in the vicinity of the thumb in a scrollbar, what are the odds that you are not trying to grab the scrollbar? 

The new design might be a bit confusing at first, but I think discoverability and learnability will be very good. Same observation for the arrows on each side of the thumb, which make more sense than having them at the ends of the container. 

So the new scrollbars look good, but I predict that the removal of the Minimize and Maximize buttons will be a disaster, and that they might reverse this decision before GNOME 3 comes out, or maybe make it configurable. 

And you know why I think that? Because the person doing the scrollbar video uses the Minimize widget all the time. 

Maybe the GNOME UI team should take that as a hint.
