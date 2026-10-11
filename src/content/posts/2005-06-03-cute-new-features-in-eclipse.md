---
title: Cute new features in Eclipse
date: '2005-06-03T15:19:43'
slug: cute-new-features-in-eclipse
categories:
- Java
comments:
- id: 3700
  author: Sumit
  date: '2005-06-03T17:05:19'
  content: Another word I could think for them is "copied" (from IDEA).
  replies: []
- id: 3701
  author: Romain Guy
  date: '2005-06-03T18:08:22'
  content: I second that comment :)
  replies: []
- id: 3702
  author: Vincent Mallet
  date: '2005-06-03T18:15:56'
  content: 'Cedric,

    I think it''s about time you gave IDEA another _serious_ try. You might never look back.

    (Upcoming 5.0 looks really good)

    Vince.'
  replies: []
- id: 3703
  author: Matt Raible
  date: '2005-06-03T18:33:24'
  content: What's wrong with using both Eclipse and IDEA?  I use IDEA on OS X and Eclipse on Windows.  But maybe I'm a freak for using two different OS's. ;-)
  replies: []
- id: 3704
  author: Sumit
  date: '2005-06-04T11:50:38'
  content: What's wrong is that it's pointless. Different sets of keyboard mnemonics, different project structures, missing functionalities. If you've already got over the biggest barrier - cost - what's te point?
  replies: []
- id: 3705
  author: Stephan Schmidt
  date: '2005-06-06T02:26:15'
  content: 'Cool, another two features "copied"  from IDEA.

    I suggest the next feature to "copy" from IDEA: Different visual markup for different errors. IDEA uses underline, red text and waved underlines for missing imports, not  existing methods and syntax errors. Eclipse only uses underlined text for all errors.

    And then the next innovation to "copy": Reformat code and work as usual, even if there are syntax errors! Do not force your users to fix the errors first.'
  replies: []
- id: 3706
  author: ''
  date: '2005-06-06T10:02:03'
  content: What's the problem with using Eclipse? It's not like IDEA invended strikeout. It they copy from one another more power to them.
  replies: []
- id: 3707
  author: pkmk
  date: '2005-06-06T11:17:47'
  content: 'comic sans serif

    wtf?'
  replies: []
---

I noticed two interesting features in the latest 3.1-RC1 Eclipse build:

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/partial-completion.png)   
 

  * This is partial completion of types.  Notice that I typed "PT" (uppercase) and that `ParameterTest` came up as a potential match.  Very useful (and this functionality replaces a plug-in I mentioned in an [earlier blog](http://www.beust.com/weblog/weblog/archives/000193.html)).  
 



![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/deprecated1.png)   
 

  * I was quite puzzled at first about the overstrike on the `parameters` keyword until I ran my mouse cursor over it...  This is Eclipse's new way of saying that you are using a deprecated API:



![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/deprecated2.png)

Cute.
