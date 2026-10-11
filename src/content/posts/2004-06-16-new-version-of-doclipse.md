---
title: New version of Doclipse
date: '2004-06-16T16:10:47'
slug: new-version-of-doclipse
categories:
- Java
comments:
- id: 1674
  author: eu
  date: '2004-06-17T15:59:53'
  content: It will be easier to track new versions if your archive had version in name as well as in the plugin directory. Most of the Eclipse plugins follow this convention. Thanks.
  replies: []
- id: 1675
  author: hh
  date: '2004-06-22T05:58:59'
  content: 'Does doclipse 0.4.0 run on Eclipse 3.0 RC 2? My installation seems to have problems opening the preferences page. Error message is:

    "Unable to create the selected preference page. Reason: Plug-in com.beust.doclipse was unable to load class com.beust.doclipse.DoclipsePreferencePage.'
  replies: []
- id: 1676
  author: news-
  date: '2004-08-05T08:33:36'
  content: news
  replies: []
---

I just uploaded a new version of [Doclipse](http://beust.com/weblog/doclipse), which now contains a definition file for Hibernate tags (thanks Ryan!) and also an improved preference page that allows you deselect files individually:

![](http://beust.com/weblog/doclipse/pictures/preference2.jpg)

You should delete the previous directory of the plug-in before installing this one (the directory inside the zip no longer contains the version number, which makes things simpler for now).
