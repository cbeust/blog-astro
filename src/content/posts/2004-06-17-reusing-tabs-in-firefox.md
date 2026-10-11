---
title: Reusing tabs in FireFox
date: '2004-06-17T08:20:39'
slug: reusing-tabs-in-firefox
categories:
- General
comments:
- id: 1677
  author: jeff
  date: '2004-06-17T08:29:29'
  content: 'cedric, you can also set the prefs of Firefox by going to the url about:config directly.

    jeff'
  replies: []
- id: 1678
  author: ''
  date: '2004-06-17T09:39:18'
  content: 'If you want only to open external URLs in the same browser window and a new tab you can install Single Window 1.0 http://update.mozilla.org/extensions/moreinfo.php?id=50&vid=53&category=Tabbed%20Browsing

    It will do.

    Rergards,

    Horia'
  replies: []
- id: 1679
  author: Michael
  date: '2004-06-28T23:07:28'
  content: 'Tried all this out on the new firefox build of OS X. Just keeps crashing - so I unloaded the extension and things are good. Bummer - since this extention for Tabs was quite nice.

    smitty'
  replies: []
---

I just installed the new FireFox and by doing so, I lost a little trick that I have been enjoying greatly so far:  whenever I click on a link from outside FireFox, I want it to be loaded in a separate tab in an existing window and not in a new browser.

The instructions to enable this feature are in the FAQ but a bit scattered, so here they are in a more concise fashion:

  * Add the following to your user.js:  

```java
    // Stop reusing active windows:
    user_pref("advanced.system.supportDDEExec", false);
```

  * This file doesn't exist by default, so you must create it.  On Windows XP, it can be found at:  

```text
    c:/Documents and Settings/[user name]/ApplicationData/
    Mozilla/Profiles/default/[random chars].slt/user.js
```

  * Download and install [ TabBrowser extensions](http://white.sakura.ne.jp/~piro/xul/xpi/tabextensions_en.xpi)   
 
  * Select Tools > Extensions, select Tabbrowser Extensions and click the small Options icon.  
 
  * Expand the General node.  
 
  * In the Window Mode panel, select Use multiple browsers only for my request.



Note that the "small Option icon" in the Extensions window is not only minuscule but doesn't look like a button at all (no push affordance).  It's the label with a check mark on it.  I find this inconsistency in the FireFox GUI annoying:  why should options for extensions be in a different menu than the regular preferences?

Anyway, FireFox is a cool browser, and even if the progress in terms of features is pretty slow, it is still light-years ahead of Internet Explorer, which has been stagnating for years now.

_Update, 2004/08/23: I updated these instructions for the latest Firebox build since the path of user.js and the Settings option panel of the TabbedBrowsing extensions have slightly changed_
