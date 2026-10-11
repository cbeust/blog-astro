---
title: Google's puzzling algorithms
date: '2003-08-17T12:05:03'
slug: googles-puzzling-algorithms
categories:
- General
comments:
- id: 406
  author: archibald
  date: '2003-08-17T16:11:50'
  content: You beat Cedric the entertainer!
  replies: []
- id: 407
  author: Vladimir
  date: '2003-08-17T16:56:19'
  content: You have done nothing until a google search for "france + san francisco" or "frenchman + san francisco" ranks you first instead of the French consulate :)
  replies: []
- id: 408
  author: Jason Marshall
  date: '2003-08-19T12:47:10'
  content: I'm noticing similar weirdness myself.  Before I started blogging, the first page on a vanity search that turned up anything about me was somewhere around 50th in the ranking.  My blog is currently ranked third by Google, despite the fact that I share my name with a member of the NHL, who, from a brief perusal of the links, seems to be forever surrounded by controversy, no less.  Then there's the Other Jason Marshall, the OSS/Unix/perl programmer, who for the last three years at least has been far mor prolific than I have.  All of that changed dramatically about three weeks ago, when Google started noticing my blog.
  replies: []
- id: 409
  author: Frank Paierl
  date: '2004-07-01T00:57:49'
  content: 'And this is my homepage.

    Frank Paierl o'
  replies: []
---

I was investigating what looked like an Apache bug (I'll have to blog separately about that one, quite an interesting story) when I noticed in my logs a hit on my private Web site.  As the "private" part indicates, I don't expect to get many hits on that site except from friends, but this IP was definitely not familiar to me.  A quick "dig -x" revealed that the IP was a googlebot.  Somehow, google must have found a link to my private Web site and I am now being harvested.  
  
Okay, fine, it's not like there is anything secret there anyway.

My curiosity was piqued, though:  how did Google find out about the site and this particular URL, which is a report on my heliskiing trip in Whistler.  Out of curiosity, I ran a [ google search on "Whistler heliski".](http://www.google.com/search?hl=en&lr=&ie=UTF-8&oe=utf-8&q=whistler+heliski&btnG=Google+Search)  
  
Yup, that's me in first place.  Before even the main heliskiing web site.  How is that possible?  
  
So I went to my [ own heliski page](http://home.beust.com/cedric/priv/heliski-whistler-0103/00mosaic.html) and looked for [ backward links](http://www.google.com/search?sourceid=navclient-menuext&ie=UTF-8&oe=UTF-8&q=link:http%3A%2F%2Fhome%2Ebeust%2Ecom%2Fcedric%2Fpriv%2Fheliski%2Dwhistler%2D0103%2F).  As you can see, it's pretty bare there.  Just my private web site, again, and...  my weblog.  I had totally forgotten about that.  So mystery #1 is explained:  Google harvested my weblog and got the URL from there.

Something is still mysterious, though:  how can these simple four links explain that I am mentioned even before the main heliskiing site?  
  
Could it have something to do with the fact that...  [ I own my first name in Google](http://www.google.com/search?hl=en&lr=&ie=UTF-8&oe=utf-8&q=cedric&btnG=Google+Search)?  (roar)  
  
Yup, even the Entertainer is behind me.

This amusing incident makes me really wonder about Google's algorithms.  Not mentioning the fact that I thought Google did not show weblogs in its results. 

Another interesting thing is that Google has already registered my new weblog location (which is barely two weeks old), and that they are now respectively #1 and #2.  
  
Fascinating.
