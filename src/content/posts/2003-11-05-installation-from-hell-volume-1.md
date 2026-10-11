---
title: Installation from hell (volume 1)
date: '2003-11-05T10:34:04'
slug: installation-from-hell-volume-1
categories:
- General
comments:
- id: 655
  author: Cameron
  date: '2003-11-05T10:59:40'
  content: Hey, don't you have an app server to write or something?
  replies: []
- id: 656
  author: eu
  date: '2003-11-05T17:38:22'
  content: 'In terms of simplified installation, friend of mine using his own home grown gallery app, running on Resin.

    http://photo.platonoff.com/technology.xtp'
  replies: []
- id: 657
  author: Vladimir
  date: '2003-11-06T07:07:57'
  content: Try JAlbum.
  replies: []
- id: 658
  author: Patrick Chanezon
  date: '2003-11-06T07:48:34'
  content: 'It''s been 6 years that I''ve been playing with different packages, commercial offers, and reading docs in order to find a satisfactory package to manage my images and publish them online.

    I haven''t found the right solution for me yet.

    6 years ago I started with Fujifilmnet, who digitized the pics taken with my regular camera, when developped at FNAC, in France, then sent me a CD, and pushed the images to their web site, where I could create password protected albums to share with family and friends.

    Their app was in server side javascript on netscape servers and since I was working for netscape I proposed them to fix some annoying bugs that precented me from doing what i wanted. They refused :-)

    Then I have installed slooze on my server, on iplanet web server on windows 2k, with a fixed ip, that was running on a machine with a fixed ip in my living room, when I was in the US.

    Slooze is yet another php based solution, and I created a few albums, but it is too limited: my homegrown process to create albums involves some perl script on the client side that call imagemagick, before I ftp the images to my site, then use slooze to create the album. Not good. I want some client side app to manage my albums.

    Then I came back to France and moved my web site to a cheap hoster. I installed slooze there as well.

    I''ve looked at Gallery but did not install it: you need to install too many things, and my server is hosted on win NT/IIS at my hosting provider: it was difficult enough to get basic slooze and MT working there :-)

    If you have problems with Gallery, try asking Pierre-Luc Paour: he''s a french ex-Netscape guy who''s passionate about Gallery and participates in its development.

    My Sun friend Alejandro Abdelnur has used JAlbum to generate static albums, and he''s pretty happy with it.

    I tried iPhoto on the mac, but it still has some limitations. I like the fact that they''re using an xml format for album meta data though. This could enable some fun extension.

    Look at the w3C''s proof of concept embedding RDF in the jpeg file''s header: not very usable but an interesting concept.

    For windows I also tried ACDSee a few years ago: generates static sites OK.

    Basically I did not find any package that suits my needs.

    Could be a fun open source project to start, but I have no time to do that.

    Good luck in your endeavour: with 4 years of digitized regular pics, and 2 years of pure digital pics, I now have 12000 pics lying on my hard drive, with very little organization :-)

    And I guess with the current success of digital cams, we''re not alone in this case.

    P@'
  replies: []
- id: 659
  author: tom
  date: '2003-11-06T20:50:37'
  content: 'Never seen a piece of software that did a better job than Alex King''s Photos.

    http://www.alexking.org/index.php?content=software/photos/content.php

    Good luck,

    -tom'
  replies: []
- id: 660
  author: homegrown
  date: '2004-11-10T13:40:23'
  content: Hello
  replies: []
---

I have a love-hate relationship with [ Gallery](http://gallery.sourceforge.net), a software to publish your photos online.

I love it because it is simple and powerful.  You can create trees of albums, upload pictures from anywhere (even directly from your Windows XP desktop), have your guests add comments, etc...

I hate it because it is an unbelievable nightmare to install on anything other than Linux and Apache.

Actually, I take that back.  It is a nightmare to install on Apache as well.

My previous installation on my home machine should have been a warning:  I was encountering random corruption of the pictures and I was never able to explain it.  I tested with PHP 3, PHP4, Apache 1, Apache 2, IIS, CGI and ISAPI.  And all combinations thereof.  I finally managed to find a winning combination (PHP4 + Apache 1 + CGI mode) which still failed sporadically on IE only (always worked fine on Mozilla).

I recently revamped my home machine and installed a brand new XP on a new 120gb hard drive.  Trust me when I say I was not looking forward to reinstalling Gallery.  I braced myself, but it went just as bad as I expected.  Actually, it went worse, because a new version of Gallery has come up since I last installed it and the newer version came with a host of new problems I hadn't encountered before.

First of all, being a PHP application, Gallery has a lot of dependencies on external packages, starting with PHP itself, of course, and also ImageMagick and/or NetPBM (one of them required) and a bunch of other optional packages that I strongly recommend **not** to install in your first pass.

NetPBM on Windows is, simply put, impossible to find reliably on the net.  Links are broken all over the place, starting with Gallery's own Web site.  Second, when you finally manage to find them, you will find nothing less than three or four different binary distributions, all of them with their own strings attached (some were compiled with djgpp, others with cygwin, etc...).

So I went with ImageMagick, which is a better-behaved citizen (even more so since Gallery only depends on three executables in the ImageMagick distribution).

Coming up in volume 2:  choosing a Web server...
