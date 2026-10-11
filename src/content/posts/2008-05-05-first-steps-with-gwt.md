---
title: First steps with GWT
date: '2008-05-05T00:07:20'
slug: first-steps-with-gwt
categories:
- Java
comments:
- id: 7201
  author: Prakash
  date: '2008-05-05T01:13:20'
  content: May be I'm advertising here. But in case you are using GWT with Eclipse, try Cypal Studio for GWT and let me know of any suggestions/improvements.
  replies: []
- id: 7202
  author: Sam
  date: '2008-05-05T08:53:38'
  content: 're: Javascript "Don''t get me wrong: I know it''s a great language"

    Really?  I hear this from time to time but nobody ever justifies the statement.  Meanwhile, everyone I''ve ever worked with says they hate it (I hate it too).  I''d love to hear what''s so great about this non-OO language.'
  replies: []
- id: 7203
  author: Bob Lee
  date: '2008-05-05T09:00:25'
  content: I would say Javascript is an "interesting" language, fun to write but not very readable.
  replies: []
- id: 7204
  author: ''
  date: '2008-05-05T09:45:48'
  content: '"what''s so great about this non-OO language"

    For me is that you can easily build an OO framework using your own perspective of how OO should be for example or even learn or experiment on how to improve on a possible Java like OO implementation.'
  replies: []
- id: 7205
  author: ''
  date: '2008-05-05T17:09:40'
  content: Javascript can be very OO. Even to the point of being Java-like, but you do have to implement it yourself. Honestly though, you don't always need to be completely OO. I much prefer Python, and Javascript to Java, because I feel more productive in general. I don't need to write an excessive amount of text to do the exact same things, and I can have unit testing and all of that great stuff the same. Even Sun is adding dynamic concepts to Java with closures, and by bringing dynamic languages to the JVM. Rhino, Jython, JRuby, they are all officially supported and being developed by Sun in some way.
  replies: []
- id: 7206
  author: Adalbert
  date: '2008-05-05T21:39:18'
  content: '"what''s so great about this non-OO language"

    well, it is.'
  replies: []
- id: 7207
  author: Cosmin Marginean
  date: '2008-05-06T02:51:28'
  content: I myself, don't believe in JavaScript as a language. But I prefer it towards "Swing for web" or "compile Java to JavaScript". All these are only "workarounds" for the missing parts of the web standards.
  replies: []
- id: 7208
  author: Vicky
  date: '2008-05-06T07:44:33'
  content: Great to hear that you have ported SWT app to GWT. One thing you won't find much in all tutorials and books is about large table (it can be million rows, but let's stick to even 2000 rows!) handling with GWT. Can you provide your experience on large table handling??
  replies: []
- id: 7209
  author: Ash
  date: '2008-05-06T13:02:34'
  content: Did you have a look at Echo2/3 as well?
  replies: []
- id: 7210
  author: Deva
  date: '2008-05-06T17:04:35'
  content: 'Cedric - Glad to see you in GWT arena. I have been working in GWT for the last 3 months and I love it. (Specifically mobile apps ;-)

    You have to check out this demo - its a GWT wrapper against the popular EXT javascript framework - its awesome.

    www.gwt-ext.com/demo/

    There is also a GWT conference in San Francisco by the google folks May 28,29. Hope you can make it - Would love to meet you there.

    code.google.com/events/io/

    Instantiations has also a WYSIWIG designer tool called GWT designer an Eclipse plugin which lets you do some VBish interface design.'
  replies: []
- id: 7211
  author: AC
  date: '2008-05-07T10:45:41'
  content: '@vicky: take a look at this 1 million-row paging table provided by the very useful gwtlib project:

    www.zwitserloot.com/tipit-gwtlib/example/

    hope that helps'
  replies: []
- id: 7212
  author: Sony Mathew
  date: '2008-05-12T12:12:51'
  content: GWT was indeed created for the likes of us higher order programmers.. though some folks at Google might say higher abstractions and programming are inversely proportional..
  replies: []
- id: 7213
  author: Justin
  date: '2008-05-12T16:44:11'
  content: GWT is only necessary because the only executable runtime environment that Microsoft has ever distributed that did not run solely on Windows and did not require proprietary windows only tools to develop for is Javascript in the browser.
  replies: []
- id: 7214
  author: Jason Chambers
  date: '2008-05-29T07:35:08'
  content: 'Cedric

    I too am also taking my first steps with GWT. I am sharing my experiences and why I think GWT matters in my blog at jasondchambers-dot-blog spot-dot-com

    Jason'
  replies: []
- id: 7215
  author: Solo
  date: '2009-01-25T06:52:30'
  content: 'I think example from this blog: extjs-gwt.blogspot.com

    easy to start GWT with eclipse'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/gwt.png)

I recently spent some time porting a SWT application to GWT, and it's been a real pleasure. Ever since I heard about GWT, I have been very eager to put my hands on it and try it for real. Pity it took so long. 

First of all, why all this interest on my part? It's simple really, and I can summarize it in one sentence: I love the idea behind AJAX and dynamic web pages but I don't like Javascript. 

Don't get me wrong: I know it's a great language and I've always had good success and rewarding results whenever I have taken the time to write a few lines of code to solve a few minor problems on my web sites, but the perspective of writing entire applications in this language has been a very big turn off for me, so I've been avoiding it. Anyway, I'm not going to go into details since it's not the topic of this post. Let's get back to GWT. 

Ever since AJAX became popular, I have waited for the second generation to emerge. By "second generation", I mean whatever tools or languages that would save me the trouble of having to 1) program in Javascript and 2) deal with browser compatibility hell. In other words, to me, Javascript and XmlHttpRequest is assembly language, and I draw a lot more satisfaction writing code at a higher level. 

Enters GWT, which promises to let me use my favorite development tools (Java and Eclipse) to the fullest (well, almost) while leveraging AJAX without any restrictions. Sign me up! 

In the coming days, I'm planning on posting in more details about my experience with GWT, both philosophically and technically. GWT has been out for quite a while now, and there are plenty of tutorials, books and articles describing all its features, so in an attempt not to repeat all of this material, I'll try to stick to a few original details and tidbits that I came across.
