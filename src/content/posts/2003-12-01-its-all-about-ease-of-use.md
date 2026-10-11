---
title: It's all about ease of use
date: '2003-12-01T12:04:49'
slug: its-all-about-ease-of-use
categories:
- Java
comments:
- id: 685
  author: Francois PLANQUE
  date: '2003-12-02T05:13:09'
  content: '"allowing an X server to display window on any client workstation": that''s my favorite part about X Window: not even the wording is consistent with common usage. As a matter of fact the correct "X" wording would be: "allowing an X client application to display windows on any workstation running an X server". Isn''t this fun? ;)'
  replies: []
- id: 686
  author: Thierry Kormann
  date: '2003-12-02T10:56:23'
  content: 'I agree that a consistent user interface experience is key to achieving market penetration but minds are changing today. With the web as it is today (html, dhtml, flash...), users are becoming more and more confortable with inconsistent user interfaces.

    Microsoft acknowledged that at the PDC 2003 and longhorn (with Avalon and WinFS) will provide a tremedous number of features to let developers fully customized Windows and its applications.

    I think it was just a matter of time. Being pragmatic is a key thing here. Code a feature when people need it and know how to use it.'
  replies: []
---

It seems hard to believe now, but some time in a distant past, Windows and X Window were very close competitors and proponents of both windowing systems would spend hours debating on the virtues of each.

Depending how old you are, you might never even have heard of X Window, so allow me a brief introduction to this technology.  X Window was developed at the MIT by Bob Scheifler.  The development pretty much started when bitmap screens were emerging and that a handful of developers decided that UNIX workstations should have a graphic user interface.

X Window is low-level and powerful at the same time.  It defines all the standard basic operations you would expect from a windowing API (drawing shapes, handling colors and fonts) but nothing else.  Concepts such as buttons, menus and other widgets had to be developed separately (this is what other toolkits such as Motif or Athena provided, but later). 

X Window also supported a very intriguing and quite innovative idea at the time:  remote displays.  In short, the whole API was basically "headless", to use the Java terminology.  The API assumed two very distinct parts:  client and server, allowing an X server to display window on any client workstation.

X Window's flexibility was also its downfall.  By virtually allowing any kind of window interface to be implemented, it created a market that started fragmented and never recovered.  Trust me when I say that it was almost impossible for even coworkers to use each other's workstation without being utterly confused by the various key remappings, window shapes and mouse button bindings that each user had configured.

[Dave](http://pragprog.com/pragdave/Practices/MechPolicy.rdoc,v) captured this phenomenon extremely well in his short review of Eric Raymond's book "The art of UNIX programming":

> So, by providing policy, the designers of Windows and Mac interfaces have provided their end-users with a consistent look and feel, and a base set of application behaviors. By instead focusing on mechanism and ignoring policy, the designers of X allowed developers to experiment, but gave the users of X applications a very inconsistent interface experience. Arguing one approach is better than the other is pretty pointless: they
