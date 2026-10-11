---
title: Document-splitting in Web browsers
date: '2004-07-16T08:10:11'
slug: document-splitting-in-web-browsers
categories:
- General
comments:
- id: 1803
  author: Tim Haley
  date: '2004-07-16T08:28:01'
  content: 'I don''t know of a FireFox extension, but for Java, or any other type of Source Files, IntelliJ IDEA has it.

    I would like to see it in FireFox as well.  So please file an RFE.'
  replies: []
- id: 1804
  author: Jeff Mesnil
  date: '2004-07-16T08:46:17'
  content: 'Konqueror has had that feature for a long time. You can split your window horizontally or vertically and recursively.

    But it''d be great to have it in Mozilla products too.'
  replies: []
- id: 1805
  author: Doug
  date: '2004-07-16T09:19:58'
  content: 'You can get half-way there: the FireFox all-in-one gestures extension has "down-up" to open the current document in a new window, thus saving the trouble of copying and pasting the URL.

    Or if you prefer a new tab, down-up-down.

    But AFAIK, Moz/FireFox doesn''t have the ability to tile two document windows. Opera does, and it also has the down-up "duplicate" gesture, so maybe that''s the place to look.'
  replies: []
- id: 1806
  author: B. Rintoul
  date: '2004-07-16T09:48:52'
  content: Would implementation of this yield "a web-browsing experience that is radically different from the way we were surfing five years ago"?  I don't see it...
  replies: []
- id: 1807
  author: mjasnows
  date: '2004-07-16T10:15:44'
  content: right-click, open in new window, no cut-n-paste needed
  replies: []
- id: 1808
  author: Richard Osbaldeston
  date: '2004-07-16T11:12:33'
  content: You could use Mozie http://www.zeit.ca/mozie/ to emulate the effect, then you can see how much of a productivity boost you really do get.. I don't see it myself, the only times I've ever used split views was purely by accident when trying to resize windows, it reduces the size of each window to such a degree both become rather useless IMHO.
  replies: []
- id: 1809
  author: Jeff Mesnil
  date: '2004-07-16T11:49:56'
  content: 'I''ve had a simple idea to solve your problem without modification to the browser by using HTML frameset and JavaScript. It shouldn''t be too difficult to write a JavaScript which takes an URL as a parameter and creates a HTML frameset composed of two resizable frames which load that same URL. You then create a bookmarklet which takes the URL of the window document et voila!

    What do you think about it?'
  replies: []
- id: 1810
  author: Jeff Mesnil
  date: '2004-07-16T13:24:15'
  content: I've published the bookmarklet on my weblog (http://www.jmesnil.net/weblog/) if you're interested (I can't manage to paste it in this comment...)
  replies: []
- id: 1812
  author: redemption in a blog
  date: '2004-07-17T08:41:27'
  content: '<strong>Split a webpage into 2 with this bookmarklet</strong>

    Cedric asked for Document-splitting in Web browsers and promptly got it (read the comment by Jeff Mesnil in Cedric''s blog entry). Jeff Mesnil whipped up 2 bookmarklets in the space of less than one and a half hours that allows...'
  replies: []
- id: 1813
  author: Euxx
  date: '2004-07-18T10:58:21'
  content: '<strong>Document splitting on widget level.</strong>

    Cedric cares about  Document-splitting in Web browsers  and got a  nice solution  from Jeff Mesnil. Back in 2000, I''ve been dealing with 3000+ classes codebase using Together and because its Navigator is quite useless for such volumes I had to implement a'
  replies: []
- id: 1811
  author: pearl scanning
  date: '2010-01-15T06:39:31'
  content: 'It looks like the sharepoint thing is taking off as well.

    It seems to work well as a document management system and can include tasks, calendars, notes and distribution of files etc.

    Theyre especially good for accountants.

    We are actually developing our own customised versions for each client now:

    http://www.pearl-scan.co.uk

    http://www.pearl-repro.co.uk'
  replies: []
---

It's not very easy to innovate in the Web browser business.  Except for tab browsing and pop-up blocking, we haven't seen a lot of innovations these past years (and certainly not from IE, which has been stagnant for more than five years now, although there seems to be some change on the horizon). 

Netscape/Mozilla/Firefox can certainly be commended for trying to innovate constantly, but it's quite interesting to see that even their valiant efforts haven't yielded a web-browsing experience that is radically different from the way we were surfing five years ago.  I started thinking about this and I couldn't come up with any big hole in usability or functionality that I would really like to see in my Web browser.

Except for...  document splitting.

This is a feature that has been present in Microsoft software for years now, and it allows you to split the current document in two different parts that can be scrolled independently.  This is a very useful feature for all kinds of documents :  Word, spreadsheets, even Java source files (still waiting on this feature to make it into Eclipse), etc...

And of course, Web browsers.

Just recently, I was reading an article that showed a figure at the top and which constantly referred to this figure in the rest of the article.  Right now, the only thing I can do is:  open a new window, paste the current URL, move that window side-by-side with my current document and resume reading in the original window.

All of this would be so much easier if I could split the original document horizontally or vertically with just one click and drag...

Does anyone know of such an extension for FireFox, or should I file an RFE?
