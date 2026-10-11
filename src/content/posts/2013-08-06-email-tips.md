---
title: Email tips
date: '2013-08-06T17:36:29'
slug: email-tips
categories:
- General
comments:
- id: 9770
  author: LAFK
  date: '2013-08-28T02:07:20'
  content: 'Markdown... gosh, that''s such a simple and lovely idea. Thanks Cedric. I''m using it in a number of places and yet thought hadn''t occurred to me earlier.

    Pair-review the emails

    ================

    I get someone I trust or someone who will be most affected by email to review it prior to ''real'' send.

    Short email

    ========

    Best emails are those that have one to two lines and clearly state what needs to be done.

    Presentation credo

    ==============

    Tell them what you''ll tell them, tell them, tell them what you just told them.

    That credo should be used for most presentations... and, coincidentally, most emails where you write anything long / descriptive.

    Check keyboard shortcuts in your tool

    ============================

    Different mail clients come with different shortcuts. If you don''t know them, sooner or later you''ll hit one - hopefully not the most damaging ATM (like, reply to all, instead of forward). It may be worthy trying them out, because they are done so for a reason, but if they are completely alien, just disable them or overwrite them.'
  replies: []
- id: 9771
  author: Mike He
  date: '2013-09-02T14:11:50'
  content: Markdown email, it's awesome!
  replies: []
- id: 9772
  author: Kroltan
  date: '2013-12-03T01:22:36'
  content: 'Markdown Here is also available to Firefox directly on AMO:

    https://addons.mozilla.org/pt-br/firefox/addon/markdown-here/

    Also, in Gmail you can have infinite subemails for different matters, it''s great for those of you registering at thousands of sites. Just postfix your email with +something and it gets redirected to you, and you can create specific filters to that email. Example: john.smith+gaming@gmail.com, john.smith+shops@gmail.com'
  replies: []
---

Email tips which I thought were common knowledge. 

### Avoiding embarrassing forwards

_Problem_ : You receive an email (say from a customer), you pass it along internally with a few comments and... you accidentally copy the author of the email with details they were not meant to read. 

_Solution_ : Instead of "Reply to all", adding your team in Cc and removing the customer (the part a lot of people forget), forward the whole email and then add your comments. It's much easier to avoid mistakes when you have to populate an empty `To:` box than when you have to edit an existing list of `To's`, `Cc's` and `Bcc's`. 

### Don't send too soon

_Problem_ : writing an email that's not ready to be sent yet. 

You need to write a detailed email which is not supposed to be sent just yet (for example because you are describing something you're still working on). How do you make sure that you don't send the email until the time is right? 

_Solution_ : Write it and save it as a draft but don't enter anything in the `To:` box. Do this last. 

### Say no to ugly emails

_Problem_ : You want your emails to look nice. 

My emails routinely contain code or shell output, and as much I love Gmail, its abilities to format are pathetic, both from a user interaction standpoint (why do I need three clicks to indent text to the right?) and from a theme standpoint. For example: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/code1.png)

In order to get this ugly rendition of code, I had to indent the snippet manually and then change its font. And it still looks terrible. 

_Solution_ : Use [Markdown Here](https://chrome.google.com/webstore/detail/markdown-here/elifhakcjgalahccnjkneoccemfahfoa?hl=en), a Chrome extension which not only allows you to format your code in Markdown but also uses some pretty nice CSS. 

You only need a few backticks and, optionally, specify the language: 

````java
```java
public class SlidingWindowMap {
  public SlidingWindowMap(Set keys, int maxCount, long periodMs) {
    // ...
  }
  /**
   * @return a key that has been used less than `maxCount` times during the
   * past `periodMs` milliseconds or null if no such key exists.
   */
  public String getNextKey() {
    // Your brilliant _Solution_ goes here
  }
}
```
````

Click the Markdown button and voil??: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/code2.png)

Your turn now, what email tricks do you use which you think very few people know?
