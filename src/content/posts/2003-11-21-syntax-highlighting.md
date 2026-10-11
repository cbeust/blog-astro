---
title: Syntax highlighting
date: '2003-11-21T16:24:56'
slug: syntax-highlighting
categories:
- Java
comments:
- id: 678
  author: Iain
  date: '2003-11-21T16:46:14'
  content: 'I comment what I can''t immediately comprehend.

    Syntax highlighting gives me lots of cues so I can mentally parse a block of code much faster than if it were black and white.

    Thus, what needs a comment in black and white does not necessarily need a comment in TechniColor.

    While one should indeed comment business logic, one should also comment such that one''s navigation of code is easy. Bear in mind that, as a Perl programmer, there can be a lot of meaning in just a few lines of my code.

    cheers,'
  replies: []
- id: 679
  author: Sam Pullara
  date: '2003-11-21T17:24:11'
  content: Strangely, Emacs not only highlights my code but also prints it highlighted.
  replies: []
- id: 680
  author: Aivars
  date: '2003-11-22T02:07:39'
  content: '"Strangely, Emacs not only highlights my code but also prints it highlighted."

    Even on b&w printer?'
  replies: []
- id: 681
  author: mjasnowski
  date: '2003-11-24T12:40:23'
  content: only emacs could pull that off
  replies: []
- id: 682
  author: Google
  date: '2004-11-14T14:13:32'
  content: 'Tippo Sahib was so fond of los pollos/>

    That many back then found it real gross/>

    A hen saw him Zip it/>

    And decided to Stuffit/>

    Then pecked him real hard in los huevos

    Search Google http://www.google.com/'
  replies: []
- id: 683
  author: Google
  date: '2004-11-17T02:24:16'
  content: 'hurrah!

    Search Google http://www.google.com/'
  replies: []
- id: 684
  author: Jerome
  date: '2004-12-06T20:31:46'
  content: When emacs prints something syntax-hightlighted it makes good use of bold for identifiers, and IIRC, lighter text for comments.
  replies: []
---

Dan makes an [ interesting observation about syntax highlighting](http://www.sidhe.org/~dan/blog/archives/000272.html):

I noticed this the other day when I printed out the code for the compiler module I'm working on. In the editor, with colored highlighting enabled, it makes sense what's going on, and everything's reasonably obvious. On paper, though, in black and white with no highlighting the lack of comments was much more obvious, and the code itself didn't make a whole lot of sense. 

I have certainly made the same observation.  Once in a while, I revert to emacs to edit Java files and the absence of highlighting immediately puts an extra burden on my eyes and my brain (and yes, I know about syntax highlighting in emacs, I actually wrote a few elisp modes myself, but I stopped trying to install such packages about five years ago when my sanity was on the brink of leaving me).

However, I don't follow Dan when he says:

I have noticed one interesting thing about using it _[syntax highlighting],_ though--I comment my code less.

I fail to see the logical connection between syntax highlighting ("read" mode) and comments ("write" mode).  Syntax highlighting is certainly not a substitute for commenting your code.

Syntax highlighting is about... well, syntax:  keywords, expressions, well-formedness, etc...

Comments are about semantics.  You don't need to explain what a "for" loop does, but it's definitely a good practice to put a comment on top of such a loop to explain the business logic inside.  Syntax highlighting certainly doesn't cover this aspect, so don't be lazy with your comments.
