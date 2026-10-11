---
title: JAM documentation
date: '2004-03-10T16:54:33'
slug: jam-documentation
categories:
- Java
comments:
- id: 1303
  author: Hani Suleiman
  date: '2004-03-10T22:02:37'
  content: Any chance of an update to SGen with the JAM stuff updated to the latest version?
  replies: []
- id: 1304
  author: Jason
  date: '2004-03-11T11:28:19'
  content: 'It doesn''t appear that XMLBeans is shipped at all.

    I can''t find a download anywhere.'
  replies: []
- id: 1305
  author: Patrick Calahan
  date: '2004-03-11T11:43:50'
  content: 'Hi.  Some clarifications:

    XBeans is still in the Apache incubator:

    http://xml.apache.org/xmlbeans/sourceAndBinaries/index.html#XMLBeans%20Version%201%20Binary%20and%20Development%20Kit

    You can access either of two versions there:

    - You can download binaries for Version1.  V1 has been stable for quite some time now and is the one I would suggest using unless you''re feeling adventurous.

    - V2 offers a lot of new features, but is still under development.

    JAM evolved in Version 2 and is now being spun out from it now as a separate project.  Again, the temporary home for that effort is

    http://www.pcal.net/jam

    -p'
  replies: []
- id: 1306
  author: Jason
  date: '2004-03-11T16:29:13'
  content: 'All I see on the XMLBeans page is:

    "Link to the Incubated XMLBeans binary and development kit will go here as soon as we figure out how to get it on the mirrors."

    No binaries for V1 that I can see. What am I missing?'
  replies: []
- id: 1307
  author: Patrick Calahan
  date: '2004-03-12T10:01:10'
  content: 'Doh, quite right.  I don''t know why the binaries are not there for v1.    You can only download the kit to build it yourself.

    Sorry for the confusion.  I only work on v2 so I don''t pay too much attention to v1.  I''ll look into it.'
  replies: []
- id: 1308
  author: Edwin Buck
  date: '2005-08-04T17:08:01'
  content: 'http://www.pcal.net/jam is no more.

    Did it''s contents land in a greener gentler pasture?'
  replies: []
---

Patrick just posted some [documentation on JAM](http://www.pcal.net/jam), the type abstraction API used in EJBGen and SGen.

The idea behind JAM is to offer a uniform access to the way the Java type system (and more particularly, annotations) are collected.  Right now, JDK 1.4 is supported, 1.5 will be available very soon (source or .class form) and in the future, you can expect more metadata providers to become available.

JAM is shipped as part of the Open Source [Apache XMLBeans project](http://xml.apache.org/xmlbeans/) but we are considering making it a standalone product (which for now is available directly from Patrick's Web site).

There is a lot of design work currently happening around JAM so now is the time to provide feedback!
