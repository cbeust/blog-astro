---
title: 'New Eclipse 3.2M5:  yummy'
date: '2006-02-17T23:05:53'
slug: new-eclipse-3-2m5-yummy
categories:
- Java
comments:
- id: 4889
  author: Heiko W. Rupp
  date: '2006-02-18T04:50:23'
  content: 'Afaik Infer Generic Type was there in the first 3.1 incarnations - or do you mean something else?

    About the findbugs like features I don''t understand why the NIH-syndrome is reaching eclipse. Instead of reinventing the wheel, they could just help the findbugs guys to improve the plugin and supply this as deault.'
  replies: []
- id: 4890
  author: Dave Griffith
  date: '2006-02-18T06:43:37'
  content: 'FindBugs inspects bytecode, rather than source code.  For a tool like Eclipse that already keeps a parse tree in memory, that''s a rather silly technological inversion, like using a horse to pull a car.  You''ll just never get the responsiveness that you''ll need out of such a tool: ability to highlight errors in the editor, ability to work on non-compilable code, quick-fixes.

    I appreciate what the FindBugs people have done, but technologically it''s pretty much a dead end.  Eclipse is literally years behind the competition in terms of bug-finding technologies (they''re just adding switch-statement fall-through detection now!?!?).  It''s good for the industry that they are taking the first steps necessary to catch up.'
  replies: []
- id: 4891
  author: Anjan Bacchu
  date: '2006-02-18T08:14:11'
  content: 'hi cedric,

    your URL to "New and noteworthy" is "http://www.google.com/url?sa=D&q=http%3A%2F%2Fdownload.eclipse.org%2Feclipse%2Fdownloads%2Fdrops%2FS-3.2M5-200602171115%2Feclipse-news-M5.html"

    What does this do that a direct URL won''t do ?

    Thanks,

    BR,

    ~A'
  replies: []
- id: 4892
  author: George Petrov
  date: '2006-02-25T15:05:38'
  content: 'For the find-bugs business try JLint - it gives you a whole lot of warnings for everything, incl a quite sophist thread safety analyser. And it has a neat Eclipse plugin.

    http://artho.com/jlint/manual.html'
  replies: []
---

![](http://www.eclipse.org/eclipse.org-common/themes/Phoenix/images/header_logo.gif)

  
I am noticing quite a few interesting new features in the brand new [ Eclipse 3.2M5](http://www.google.com/url?sa=D&q=http://www.eclipse.org/downloads/download.php?file=/eclipse/downloads/drops/S-3.2M5-200602171115/eclipse-SDK-3.2M5-win32.zip):

  * Infer generic type.
  * Refactoring scripts .
  * New refactoring:  introduce indirection.
  * Multiple problems of the same category can be fixed at once.
  * The Eclipse formatter can be run without launching the Eclipse UI.
  * Eclipse is gaining more and more FindBugs-like functionalities (null reference analysis, assignment of parameters, etc...).
  * Quite a few sexy SWT improvements.

The full [ New and Noteworthy](http://download.eclipse.org/eclipse/downloads/drops/S-3.2M5-200602171115/eclipse-news-M5.html) has all the gory details.
