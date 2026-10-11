---
title: Refactoring inner glow
date: '2003-12-19T09:33:11'
slug: refactoring-inner-glow
categories:
- Java
comments:
- id: 715
  author: eu
  date: '2003-12-20T22:16:55'
  content: Don't you think that it would be better to merge EJBgen with the XDoclet, so users can take an advantage from shared expertise?
  replies: []
- id: 716
  author: Lasse Koskela
  date: '2003-12-21T06:58:40'
  content: I know the feeling. Furthermore, the feeling is even more strong when you encounter a new piece of information that completely changes the XML  messaging interface you had already implemented :)
  replies: []
- id: 717
  author: Slava Imeshev
  date: '2004-01-14T14:55:08'
  content: 'Cedric,

    It doesn''t look like refactoring. "Refactoring is a technique to restructure code in a disciplined way." (c) Fowler. As such, it''s a permanent, ongoing process. To me "intense" refactoring that happens to an application once in a while is not refactoring but a rewrite [employing refactoring techniques]. Just my 2c.'
  replies: []
---

I just went through an intense refactoring session for [EJBGen](http://beust.com/weblog/ejbgen).  There is more to come, but I have basically turned around the entire implementation in prevision of incoming features and new integrations.  The interesting thing about this is:  users will never notice.

Some users are already using the improved version but of course, they have no idea how much it is different from the previous drop.  To them, it's the same tool as the previous version, hopefully without any regression introduced.

There is something strangely satisfying about this but it's not about the intensity of the session, nor about the size of the changes.  Sure, adding features that users are eagerly expecting is also a fulfilling experience, but not as much as rewriting a complex piece of software from the ground up all the while knowing that you are covered by your regression tests.

Am I the only one feeling like this?
