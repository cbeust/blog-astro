---
title: Can Eclipse do that?
date: '2005-08-26T13:02:36'
slug: can-eclipse-do-that
categories:
- Java
comments:
- id: 4158
  author: ''
  date: '2005-08-26T14:07:16'
  content: Stop writing code with so many problems and you won't need this at all!  ;)
  replies: []
- id: 4159
  author: Chris Beams
  date: '2005-08-26T14:22:28'
  content: 'It doesn''t look like this is possible (though I can see how useful it would be!)...  When in the editor, press ctrl-shift-L (this gives you a context-sensitive menu of all keyboard shortcuts available) and you''ll notice that the label for CTRL-. simply reads "Next".  It seems to me that if the Eclipse folks had drawn a distinction between "next error" and "next warning", this label would have expressed it.

    I think you (and we) are out of luck on this one... for now.

    Ooh..  I can just *feel* that look that says "I''m just so disappointed in you" now.  ;-)'
  replies: []
- id: 4160
  author: baconserker
  date: '2005-08-26T14:31:46'
  content: Sounds like you don't use the warnings - you can turn them off under compiler settings.  then next would only go to errors right?
  replies: []
- id: 4161
  author: eu
  date: '2005-08-26T15:01:34'
  content: 'Cedric, don''t listen to those previous comments. This is of course very simple to do in Eclipse. :-)

    So, here is the answer. http://jroller.com/page/eu?entry=eclipse_trick_that_google_doesn'
  replies: []
- id: 4162
  author: Prashant Rane
  date: '2005-08-26T15:04:23'
  content: 'Muhhhhaaaaa.

    I figured it out. At least I think I did. You tell me if this works for you.

    In the toolbar there are two buttons "Next Annotation" and "Previous Annotation". Notice the small dropdown arrow? Pull that thing down, uncheck errors. Now keep hitting "CTRL+.", stops only on errors. WooWhooo.

    Do I get some bragging rights for helping Cedric?'
  replies: []
- id: 4163
  author: Prashant Rane
  date: '2005-08-26T15:05:25'
  content: I meant to say uncheck warnings in the post above. But, you get the point.
  replies: []
- id: 4164
  author: Robert Watkins
  date: '2005-08-26T15:19:49'
  content: 'I was going to give Euxx''s answer, but I think I''ll give baconserker''s answer... turn the warnings off.

    You can turn warnings off in two ways: you can change the compiler settings, so the warnings don''t appear in the first place, OR you can use the @SuppressWarnings annotation. (Mind you, if you compile outside of Eclipse, there''s only a subset of warnings you can supress with this)

    Personally, I turn warnings I don''t care about off; I don''t need the noise level. The only reason I don''t make the warnings I _do_ care about errors is because I don''t want to have to fix them before running tests.'
  replies: []
- id: 4165
  author: amou
  date: '2005-08-27T07:21:43'
  content: With eclipse 3.1 plus Myeclipse, I didn't find the problem. I wrote a class with errors and wornings, when I pressed ctrl+. it never stopped at wornings , and when I clear the errors, it just stopped at the wornings.
  replies: []
- id: 4166
  author: eu
  date: '2005-08-27T08:50:56'
  content: Thanks Cedric. I'm touched. :)
  replies: []
- id: 4167
  author: Sony Mathew
  date: '2005-08-29T11:15:04'
  content: The fact that something like this was not intuitive to do - let alone find and do - sums up Eclipse's usability.
  replies: []
- id: 4168
  author: eu
  date: '2005-08-29T13:54:57'
  content: Sony, it has very little todo with the usability, but just with user's learning curve and some UI defaults that could be inherited from ancient versions of Eclipse UI.
  replies: []
- id: 4169
  author: Chris Beams
  date: '2005-09-08T22:36:51'
  content: 'don''t listen to those previous comments. This is of course very simple to do in Eclipse.

    eu - thanks so much.  Mine was one of those previous comments, and after trying out your solution, I''ve realized it''s one of the most useful features in Eclipse I''ve seen in a long time.  Thanks so much...  I''m glad to say I was dead wrong about this!

    - Chris'
  replies: []
- id: 4170
  author: Anatoli Sakhnik
  date: '2008-11-12T08:08:22'
  content: While I
  replies: []
---

Okay, I give up.  Until today, I didn't think there was any question I couldn't answer with Google (and for the problem at hand, with the Eclipse help or the various forums), but all my attempts have completely failed so far, so I'm hoping asking the question on my blog will work.

In Eclipse, `Ctrl-.` (control-dot) will take you to the "Next Problem".  The problem I have with this behavior is that it also stops at warnings, and most of the time, this is not what I want (I actually filter the Problems view not to display warnings, so it would make sense for Eclipse to recognize I have no desire to navigate to these warnings either).

Does anyone know a way to change the "Next Problem" to jump to problems only?  Or better:  to jump to whatever next item is listed in my Problems window, which is probably the most flexible way of providing this functionality...

If I get an answer in the comments, my next blog entry will give a few Eclipse tips.

And if I don't get any answer...  well, I'll post the tips anyway but I will be very disappointed in you all.

_Update:   Eugene gave me [the answer](http://jroller.com/page/eu?entry=eclipse_trick_that_google_doesn), shortly followed by Rane Prashant and then Robert.  Thanks a lot, guys, you rock!  And I learned something in the process!  Eugene, my next Eclipse tips are dedicated for you (even though you probably already know them)._
