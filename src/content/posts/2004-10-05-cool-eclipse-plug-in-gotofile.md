---
title: 'Cool Eclipse plug-in:  GotoFile'
date: '2004-10-05T11:47:27'
slug: cool-eclipse-plug-in-gotofile
categories:
- Java
comments:
- id: 2551
  author: Suraj
  date: '2004-10-05T12:28:13'
  content: 'Emacs *used to* have a similar package ?

    It still does, it''s called ido and it works with buffer names as well as file names.

    http://www.cua.dk/ido.html'
  replies: []
- id: 2552
  author: Eric Burke
  date: '2004-10-05T12:42:20'
  content: Idea 4.0 does this also. Not a new idea, but a *fantastic* feature. I use it all the time in IDEA. You can type things like "cc" to find "CustomerCollection".
  replies: []
- id: 2553
  author: the_mindstorm
  date: '2004-10-05T15:12:51'
  content: 'I hope you''ve noticed that both open type and open resource already have this feature.

    ./the_mindstorm'
  replies: []
- id: 2554
  author: the_mindstorm
  date: '2004-10-05T15:26:59'
  content: 'Please ignore the above (I''ve missed the fuzzy naming part). sorry.

    ./the_mindstorm'
  replies: []
- id: 2555
  author: R.J.
  date: '2004-10-05T15:33:14'
  content: So... the main difference between Open Type (Ctrl-Shift-T) and Open Resource (Ctrl-Shift-R) and this is you don't have to type the * between characters (e.g. g*f)?
  replies: []
- id: 2556
  author: Jonathan Feinberg
  date: '2004-10-06T05:01:12'
  content: This "fuzzy naming' scheme is also to be found in LaunchBar and Quicksilver.
  replies: []
- id: 2557
  author: Colin Sampaleanu
  date: '2004-10-06T06:58:26'
  content: 'Actually, you couldn''t do just

    g*f

    with Open Resource (Ctrl-Shift-R). You''d have to do

    *g*f*'
  replies: []
- id: 2558
  author: R.J.
  date: '2004-10-06T07:06:51'
  content: Well, actually I was able to use g*f* ;) - but you are right, I made a typo.
  replies: []
- id: 2559
  author: R.J.
  date: '2004-10-06T07:07:36'
  content: Oh, but your point was to meet his example I would need those 3 stars. My bad.
  replies: []
- id: 2560
  author: na
  date: '2004-10-09T11:02:41'
  content: IntelliJ Idea 2.6 had this
  replies: []
- id: 2561
  author: bap
  date: '2009-10-05T12:39:43'
  content: 'I am not impressed with GotoFile plugin. It is slower than Eclipse inbuilt "Open Resource" plugin. I wonder if anyone have ever built a good file search plugin for eclipse.

    I started writing one. Finally, it ended up with same problem (not faster than "Open Resource" ). It looks like the results are cached in "Open Resource" plugin. I wonder how to achieve that for my own plugin.'
  replies: []
---

![](http://www.muermann.org/gotofile/screenshot.jpg)

[GotoFile](http://www.muermann.org/gotofile/) is an Eclipse plug-in that lets you find a file in your workspace based on fuzzy naming.  This is different from Ctrl-Shift-R ("Find resource", which is useful when you are trying to find a file that is not a Java source).  The key here is that the file search only needs to have the letters you type appear in the same order you type them.

For example, TestNG contains dozens of files starting with Test:  TestException, TestClass, TestMethod, Test1, etc...  Even the super-fast Ctrl-E shortcut sometimes requires a few extra keys to reach the correct buffer.  With this plug-in, I can just type "tc" and TestClass is automatically selected.

Interestingly, emacs used to have a similar package to locate Emacs-Lisp files, so it's good to see that good ideas never really die.

At any rate, congratulations to Max Muermann for his idea!
