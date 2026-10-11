---
title: '"New Comments": A Chrome extension for reddit and Hacker News'
date: '2014-12-19T17:59:39'
slug: new-comments-a-chrome-extension-for-reddit-and-hacker-news
categories:
- General
---

[ ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/new-comments.png) ](https://chrome.google.com/webstore/detail/new-comments/jldpfbgmbdnnjdgohphppjnpadogdime)

I recently became tired of how awkward following discussions on Hacker News and reddit is so I decided to write a Chrome extension to address the problem. The result is ["New Comments"](https://chrome.google.com/webstore/detail/new-comments/jldpfbgmbdnnjdgohphppjnpadogdime). 

This extension will trigger only on Hacker News and reddit. When you read a comment thread on either of these sites, the extension will compare the current time with the last time you refreshed it, locate all the new comments and highlight them. If you enabled Chrome sync, the extension will work across all your computers so that you can start reading a discussion on your laptop and keep reading it later on your desktop with only the correct new comments highlighted. 

Some of the lessons I learned in the process: 

  * Writing a Chrome extension is ridiculously easy and the debugger is top notch. 
  * Chrome's storage API makes it trivial to build on top of Chrome sync. 
  * Javascript is productive but still frustrating because of its lack of types. Even when the code was just a handful of functions, I was already beginning to hit bugs coming from the absence of the type system. I used the debugger as a substitute for types way too often. 
  * Following this, I realized that my inclination to refactor and polish the code was considerably lessened. The code is pretty ugly as it is, with string literals splattered a bit everywhere and a questionable module structure, but once it was working, I didn't feel the urge to make it perfect that I usually feel with a statically typed language and a powerful IDE under my fingers. 
If you read Hacker News or Reddit and you'd like to optimize your time spent on these sites, try New Comments and let me know what you think!
