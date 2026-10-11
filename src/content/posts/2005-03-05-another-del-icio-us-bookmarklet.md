---
title: Another del.icio.us bookmarklet
date: '2005-03-05T14:50:04'
slug: another-del-icio-us-bookmarklet
categories:
- General
comments:
- id: 3253
  author: John Keyes
  date: '2005-03-07T14:22:50'
  content: 'Hi Cedric,

    I had a similar bookmarklet to your ReadLater one that used the del.ico.us REST API, I don''t see how you can do the redirect at the end.  Rather than leaving it as an exercise for the reader, can you let me know how to do it.

    I have to use some PHP to do this at the moment, but it would be much nicer to do it all with JavaScript.

    Thanks,

    -John'
  replies: []
- id: 3254
  author: brian
  date: '2005-03-08T06:15:29'
  content: fantastic.  I love it
  replies: []
---

Inspired by the success of my [`ReadLater` bookmarklet](http://beust.com/weblog/weblog/archives/000254.html) for [del.icio.us](http://del.icio.us), I created the [ DFR bookmarklet](javascript:location.href='http://del.icio.us/api/posts/delete?url='+escape\(location.href\)) (Delete From ReadLater, but since these bookmarklets go into my toolbar, I want to keep their names short).

When you have finished reading an article filed with this tag, just click on the bookmarklet and it will get automatically removed from your `read_later` category.  Note that you don't need to make any modification to this bookmarklet since it will use the cookie stored by del.icio.us to authenticate you (it might ask you for your password the first time you invoke it), so you can just drag it onto your toolbar and you're ready to go.

A potential improvement would be to add a JavaScript redirect at the end since right now, it will simply display the XML success packet, but I'll leave this as an exercise for the reader.
