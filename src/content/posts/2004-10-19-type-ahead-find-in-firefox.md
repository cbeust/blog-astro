---
title: Type-ahead find in FireFox
date: '2004-10-19T14:42:42'
slug: type-ahead-find-in-firefox
categories:
- General
comments:
- id: 2599
  author: stephane
  date: '2004-10-19T23:45:38'
  content: 'Yes !

    In fact, the default is to search links only, but you can change that :

    Tools > Options > Advanced > Accessibility, and then uncheck the "to search links only" box.

    Steph'
  replies: []
- id: 2600
  author: stephane
  date: '2004-10-20T00:06:31'
  content: 'Sorry, I realize my previous comment does not answer your question.

    Steph'
  replies: []
- id: 2601
  author: the_mindstorm
  date: '2004-10-20T00:27:12'
  content: 'It would be an interesting feature. I have looked around but couldn''t find something like this.

    But... take a look at this: http://www.autohotkey.com/ (don''t be afraid: is free and open source). You should be able to add this functionality quite easy.

    I was impressed with it. I have changed on my laptop a win key to ctrl key with 2 lines :-).'
  replies: []
- id: 2602
  author: anjavishal
  date: '2005-04-21T02:45:22'
  content: Checking it out right now. Pretty sweet
  replies: []
- id: 2603
  author: Morley Zhi
  date: '2008-03-31T10:56:26'
  content: Do an about:config in Firefox, and search for "linksonly." Set it to "false." Then it'll search all text.
  replies: []
---

I wondered for a while why FireFox's "type-ahead find link" feature was not working for me (type ' and then the link you are looking for).  I finally figured out why:  this functionality looks for the text of the link, **not** the href.

Which is a bummer because looking for an href without having to open the source window would be quite convenient.

Does such a feature exist in FireFox?
