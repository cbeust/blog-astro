---
title: Elevating the spam alert level
date: '2005-02-03T09:36:09'
slug: elevating-the-spam-alert-level
categories:
- General
comments:
- id: 3078
  author: Mark IJbema
  date: '2005-02-03T10:21:20'
  content: I was gonna post why this is a bad idea, but after tree tries, you're annoying filter still won't let me post, nvm then. Check Matt McMay's essay for more info.
  replies: []
- id: 3079
  author: Anthony Eden
  date: '2005-02-03T12:30:25'
  content: 'I suppose this is the essay: http://www.w3.org/TR/turingtest/'
  replies: []
- id: 3080
  author: Noah Campbell
  date: '2005-02-03T13:01:40'
  content: 'You''ve saved me an extra 15 mintues when I try to post to your site.

    DVD

    M ortgage

    Prescription

    Pharma

    Disfunction

    C asino

    I see that you still have the old filter on as well...no fair :('
  replies: []
- id: 3081
  author: Leandro Rodrigo Saad Cruz
  date: '2005-02-04T19:47:26'
  content: 'I have implemented a solution in Java for CAPTCHA, but it doesn''t work for server side machines with no X server. My solution for server side apps relies on imagemagick to generate random images with text/numbers. Let me know if you interested.

    This is part of Xingu (http://xingu.sf.net)'
  replies: []
---

![](http://beust.com/weblog/weblog/mt-scode.cgi?code=1)

As some of you may have noticed, I have now installed [CAPTCHA](http://www.captcha.net/) protection for comments on my weblog.  It was made necessary by the most recent of onslaught link spam that I just received.  MT-BlackList has worked really well for me ever since I installed it and until yesterday, the [previous massive spam attack](http://www.beust.com/weblog/weblog/archives/000226.html) I received happened a month ago.

For some reason, MT-BlackList didn't stop yesterday's attack, which resulted in one hundred (yes, exactly one hundred) link spam comments to be posted across thirty blog entries.

What's comforting is that despite the sophistication of spammers, they still tend to always include some common pattern in their spam entries (IP, email address, top-level domain, etc...)  which makes it easy for me to obliterate their entire deed of evil in less than a minute.  Still, this creates a certain amount of stress on my servers and, as a matter of principle, I want to make their life as hard as possible.

So I installed a package called [SCode](http://james.seng.cc/archives/000145.html), which is a CAPTCHA plug-in for Movable Type.  It's quite simple and uses a Perl library to display numbers in a picture.  There are much more complicated solutions (involving not only digits but letters of various fonts warped by random transforms while still identifiable by humans), but for now, I'd like to see if this simple system will be sufficient to foil comment link spam on my blog.

The installation was pretty easy but it still required me to edit Movable Type's source code directly, which is certainly a very unfriendly way to provide a plug-in.  I don't know if it's due to the its implementation or Perl, but the concept of plug-in in Movable Type is laughably primitive.  We are definitely spoiled in Java land.
