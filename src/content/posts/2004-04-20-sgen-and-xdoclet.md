---
title: SGen and XDoclet
date: '2004-04-20T13:06:54'
slug: sgen-and-xdoclet
categories:
- Java
comments:
- id: 1454
  author: Bob Lee
  date: '2004-04-20T16:07:51'
  content: XDoclet used to be called EJBDoclet.
  replies: []
- id: 1455
  author: Robert Watkins
  date: '2004-04-20T19:45:52'
  content: 'I wrote the presentation in a hurry, so I''m not surprised I got some details wrong. I''ll update it tonight when I get home.

    As for BEA using XDoclet, there''s articles on Dev2Dev about it, and it looked from _that_ that you guys use it for your own app development. I''ll correct that reference.'
  replies: []
- id: 1456
  author: ''
  date: '2004-04-20T19:57:07'
  content: 'I wrote the presentation in a hurry, so I''m not surprised I got some details wrong. I''ll update it tonight when I get home.

    As for BEA using XDoclet, there''s articles on Dev2Dev about it, and it looked from _that_ that you guys use it for your own app development. I''ll correct that reference.

    In terms of what I would like? A good set of command line examples, so I can run the tool over a group of files instead of one. Mind you, I can probably figure that out when source becomes available, anyway.

    This wasn''t a long play; it was more like the 10 minute test. I didn''t expect to solve all my problems with it.'
  replies: []
- id: 1457
  author: Mark Derricutt
  date: '2005-04-05T02:53:46'
  content: 'Whats the current status of s-gen?  I current available download from the middle of ''04 doesn''t compile out of the box ( wrong imports and two changed methods ) and doesn''t include the sgen-1.5.jar ( or source ).

    We''re looking to move to 1.5 finally and hitting the "xdoclet doesn''t understand generics or annotations" problem.  S-gen looks nice, and whilst it doesn''t (currently) appear to have any plugins for Spring, Hibernate, Struts etc. etc. etc. it doesn''t look like it would be terrible hard to start some....

    I note the mailing list link doesn''t work either anymore...

    Mark'
  replies: []
---

Robert posted an [interesting write-up comparing XDoclet and SGen](http://jroller.com/page/robertdw/20040420#xdoclet_1_2_vs_sgen).  I'd like to correct two errors he made (Robert, I tried to find an email address for you but couldn't...).

  1. XDoclet didn't start as EJBGen.  I don't remember what Rickard's original name was, but it wasn't EJBGen.  I came up with EJBGen on my own, and the two tools have absolutely nothing in common.  
 
  2. In his presentation, Robert writes about SGen:  


> Designed to replace XDoclet use within BEA  
> 

We don't use XDoclet at all inside BEA.  We have our own engine and parser (based on a Java compiler called Javelin), so SGen was certainly not created to replace XDoclet internally.



Finally, I haven't studied XDoclet 2 at all so I can't comment on the similarities that Robert sees between SGen and XDoclet 2.  SGen is simply what EJBGen has been using for a long time internally and recent requests from users to make EJBGen extensible prompted me to factor out the annotation part from EJBGen.  Thus SGen was born.

Robert, feel free to email me if you have specific questions or suggestions for SGen, I'll gladly help.
