---
title: Android Translate
date: '2008-10-25T11:38:59'
slug: android-translate
categories:
- Java
comments:
- id: 7602
  author: Robert
  date: '2008-11-05T12:20:34'
  content: 'I''ve been hearing about Android for well over a year now, as I keep up on my geek news. I never really considered doing any ''mobile phone'' applications though before, especially not for a platform that seemed at the time to be just a little experiment by Google.

    However after seeing the popularity of the iPhone, the first android phone actually releasing and the support Motorola and others are putting behind Google and MOST IMPORTANTLY learning that 30% of app revenue goes to the CARRIERS (making them really want people to use Android phones) it seems like the platform really could take off.

    Combine that viewpoint with the fact that you have available motion/tilt sensing, GPS, camera, microphone, speakers, touch screen and a nice development environment in Eclipse with an emulator and you have yourself a really attractive platform for developers.

    I already thought of an idea or two and I''ve downloaded the SDK. Gonna check it :)

    Oh, by the way, thanks for the post. I found your blog from another blog I read. I''ve just subscribed to your blog :)

    One little note, I''m a little disappointed that your RSS feed doesn''t have the full article, only a snippet. Is this just because of a limitation in the system your using or did you turn full content RSS off on purpose in order to protect your posts or for some other reason? Just curious :)'
  replies: []
- id: 7603
  author: Alex
  date: '2008-11-17T12:59:37'
  content: 'Hello Cedric,

    I was wondering why "Translate" in its manifest claims to have access to the contact data.  Could you comment on what you might be using contacts for?  Other than that, simple, but very useful app.  Thanks.'
  replies: []
- id: 7604
  author: Cedric
  date: '2008-11-17T13:04:52'
  content: 'I actually clarified this in the description, but here it is again:  it''s necessary to be able to send your translations in SMS or Email.  However, I thought of a better way to do that, so I''ll probably remove this permission in the next version.

    Glad you like the app.'
  replies: []
- id: 7605
  author: Jeff
  date: '2009-02-11T21:49:31'
  content: I love your program, I receive many sms from spanish speaking friends.  This makes it very easy.  How do I translate from their responses back to english without memorizing every word in spanish and attempting to type it into the translator.  Because SMS on the G1 will not allow you to copy cut or paste form it
  replies: []
- id: 7606
  author: frank
  date: '2009-06-29T08:12:31'
  content: nice app. I can not go back to the translate button when I copy / paste a big text into the "enter text to translate form"
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/translate.png)

My modest contribution to the ever-growing [Android Market](http://android-developers.blogspot.com/2008/10/android-market-now-available-for-users.html) is Translate, an application that uses Google's back-end to translate over 150 language pairs. I wrote it pretty quickly, just as a proof of concept and also to see how it feels to use the "real" (public) SDK, as opposed to the internal builds that I've been using these past two years. 

Considering the simple scope of this application, slapping a simple UI on top of some HTTP exchanges with the Google Translate API was fairly trivial. Translate was downloaded more than 10,000 times so far and the comments are very positive ([and sometimes downright hilarious](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/translate-comment.png)). 

The most surprising part to me is how few users seem to realize that Translate actually uses Google Services to do its job, and then it occurred to me that it's one of the first times where the code that I write actually gets used by non-technical people (with the exception of [Gmail for Java ME](http://googleblog.blogspot.com/2006/11/gmail-mobile-client-is-live.html) and [Gmail for Android](http://googlemobile.blogspot.com/2008/10/google-on-android-gmail-and-contacts.html), which also taught me a lot about our audience). 

Before I uploaded the application to Android Market, I also decided to make it easy for users to reach me, so not only did I leave my email address in clear text, but I made it possible to send me an email pretty much with just one button. I thought it was a bit risky since I could find myself flooded with emails, but I decided that Gmail would make it easy for me to filter out such emails anyway. 

I have received over fifty emails so far, and most of them are to say how much they like the application and are also asking for additional features, such as: 

  * More languages. 
  * Make it possible to send the translation by email or SMS. 
  * Allow the history to be cleared. 
  * Hook it up to other applications so that users can, for example, translate emails they receive. 
I'll be addressing most of these requests in the next version, but in the meantime, I'm learning a lot from this little social experiment. Oh, and if you are curious or you wish to contribute to this application (and a bunch of others), you can [find its source on Google Code](http://code.google.com/p/apps-for-android/).
