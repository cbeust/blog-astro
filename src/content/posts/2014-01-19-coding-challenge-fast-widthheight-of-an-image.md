---
title: 'Coding challenge: fast width/height of an image'
date: '2014-01-19T21:33:07'
slug: coding-challenge-fast-widthheight-of-an-image
categories:
- General
comments:
- id: 9773
  author: Frank De prins
  date: '2014-01-21T22:28:40'
  content: http://th-schwarz.github.io/JII/
  replies: []
- id: 9774
  author: PJ
  date: '2014-02-07T05:58:08'
  content: 'Off the cuff fast approach that (sadly) may not be supported by many web servers (though if you have control of the web server you can fix that, of course): use file extension to detect the image type then use the HTTP ''Content-Range'' request to pull just the bytes that encode the image size.'
  replies: []
---

I am trying to find out the width and height of an image (a URL) transferring as few bytes as possible. This coding challenge has two separate parts: 

  * Finding the cheapest way to retrieve width and height.
  * Verifying that the solution is indeed cheap.

The first part is not that interesting since it's a fairly well documented problem. A bit too documented, actually, since I found several solutions: 
  * [A naïve version using `ImageIO`](http://stackoverflow.com/a/9083914/162410).
  * [A more advanced solution using `ImageReaders`](http://stackoverflow.com/a/2911772/162410).
  * [A hand rolled solution written by Jaimon Matthew](http://blog.jaimon.co.uk/simpleimageinfo/SimpleImageInfo.java.html).

This last solution looks pretty efficient from a network perspective but I'm worried it might leave out a few corner cases in image handling. The first two solutions are probably battle tested and very robust but I have no idea how effective they are from a network standpoint (their Javadoc doesn't describe the specifics of how they operate). 

So... Do you have a better solution? And whether you do or don't, how would you assess how many bytes these implementations transfer?
