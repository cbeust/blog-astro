---
title: Hippie Completion in Eclipse
date: '2005-03-11T11:16:05'
slug: hippie-completion-in-eclipse
categories:
- Java
comments:
- id: 3256
  author: Sumit
  date: '2005-03-11T11:44:36'
  content: Netbeans does it, and it had been a favorite feature of mine. I didn't know IDEA did it. Would you or anyone know how to use hippie completion in IDEA?
  replies: []
- id: 3257
  author: Jim Clark
  date: '2005-03-11T14:06:21'
  content: 'In IDEA this sounds like SmartType code completion: ctrl-shift-space.  Try something like:

    StringBuffer buffer = new [ctrl][shift][space]'
  replies: []
- id: 3258
  author: Sumit
  date: '2005-03-11T14:18:23'
  content: SmartType is not quite it. SmartType still looks for  a Java code element. The advantage of a surrounding context buffer based approach is that it works within comments, it will look up comments when filling Java statements, it will work irrespective of being on the right side of an "=" sign or the left. I don't know much about Eclipse's implementation. Netbeans' hippie word completion worked the way I described, and it was the single biggest regret I had in moving over to IDEA. It was big-time addictive.
  replies: []
- id: 3259
  author: ''
  date: '2005-03-12T07:22:22'
  content: 'Sumit,

    NetBeans does not add the import statement automatically.'
  replies: []
- id: 3260
  author: Rafael Alvarez
  date: '2005-03-12T09:03:09'
  content: 'In IDEA it sounds more like [CTRL]-[space] . Try:

    Colletion [CTRL][space] = new Co[CTRL][shift][space]()

    Each completition has it''s purpose. :)'
  replies: []
- id: 3261
  author: Rafael Alvarez
  date: '2005-03-12T09:05:31'
  content: The mistyped "Colletion" was on purpose, just to show that IDEA don't look at the "Java Clases" for that completition.
  replies: []
- id: 3262
  author: Davide Baroncelli
  date: '2005-03-13T06:35:01'
  content: I am not sure about what this feature really is, but if you're talking about the old "ctrl-k/ctrl-y" feature in NetBeans editor, it has just been implemented in the last idea EAP version.
  replies: []
- id: 3263
  author: Matt Cornell
  date: '2005-03-13T08:10:52'
  content: IDEA added this in the EAP, but I don't think it's in a release yet. I discovered it by accident - IIRC it's bound to the same keystroke as in emacs. It's very cool.
  replies: []
- id: 3264
  author: Mocky Habeeb
  date: '2005-03-14T05:42:45'
  content: I this something new in Eclipse? I'm running 3.1M4 and it doesn't show up on my ctrl-shift-l list when I'm in a Java file, and alt-/ doesn't do it either.
  replies: []
- id: 3265
  author: Anders
  date: '2005-03-14T06:12:33'
  content: Doesn't work for me either...? (ctrl+shift+l) Do you have emacs bindings?
  replies: []
- id: 3266
  author: Dave Landers
  date: '2005-03-14T13:18:12'
  content: 'Hippie completion is in 3.1M5a.

    On Mac OS X, Hippie complete is Option+/ and the key binding popup is Command-Shift-L'
  replies: []
- id: 3274
  author: The Room
  date: '2005-03-16T08:23:01'
  content: '<strong>links for 2005-03-16</strong>

    1. Introducing Quixote: A Simple Link Display A web platform in python (categories: python web programming) XML development with...'
  replies: []
- id: 3267
  author: Sumit
  date: '2005-03-17T12:23:05'
  content: Matt, which EAP of IDEA was it?
  replies: []
- id: 3268
  author: Ryan Platte
  date: '2005-04-04T07:17:57'
  content: 'Vim has this feature, too: type the first few letters of a word that exists elsewhere in the file, or in another file you have open, and press ^N or ^P -- it will be completed with the next or previous word (respectively) that starts with the same letters. I lean on this feature pretty hard.'
  replies: []
- id: 3269
  author: ''
  date: '2005-04-06T07:01:28'
  content: 'Um, emacs has had this for over a decade.

    Thank''s for catching up to 1992, Eclipse!'
  replies: []
- id: 3270
  author: Greg
  date: '2005-05-24T08:47:09'
  content: 'For the sake of folks who google here...

    what we''re talking about is dabbrev-expand for eclipse (in emacs-speak)...'
  replies: []
- id: 3271
  author: ''
  date: '2005-05-30T15:26:08'
  content: 'As the "contributor" of this eclipse feature, I''d love to hear any suggestions or cases when it does not work as expected. Please open a bug report and add me "eclipse@genady.org" as a CC.

    Too late to have it in 3.1 though

    Genady'
  replies: []
- id: 3272
  author: Michel
  date: '2005-06-06T11:41:51'
  content: Curious; it works on Eclipse 3.1RC1/Mac, but some reason Shift+Cmd+l does not list it among the available key bindings.
  replies: []
- id: 3273
  author: Eric
  date: '2007-06-21T13:16:46'
  content: This is called "Word Completion" in Eclipse 3.2.2
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/hippie.png)

I have just discovered that Eclipse supports Hippie Completion.  It's a strange name that dates back to emacs (where it first appeared) and it's also supported in IDEA.  The default key binding in Eclipse is `ALT-/` and it's become my new best friend.

Hippie Completion tries to complete immediately (as opposed to offering you suggestions, which is what happens when you type `Ctrl-Space`) based on what you typed recently and the surrounding context.  It's a bit hard to describe and actually, there doesn't seem to be any documentation about it except for the initial [request for enhancement](https://bugs.eclipse.org/bugs/show_bug.cgi?id=11668), which was implemented by an external contributor and promptly integrated into Eclipse.

What matters to me is that 90% of the time, it inserts the right symbol.

Try it, you'll get hooked.

_Update:   Alexandru asked me how I found out, it's simple: `Ctrl-Shift-l` (that's an "l" as in "little"), which displays the little window you can see at the top of this article, and which lists all the key bindings available in the current context.  Great way to make discoveries._
