---
title: SGen clarifications
date: '2004-03-04T08:12:25'
slug: sgen-clarifications
categories:
- Java
comments:
- id: 1255
  author: ''
  date: '2004-03-04T10:10:22'
  content: ^Hibernate-based^Velocity-based
  replies: []
- id: 1256
  author: Andrew Stevens
  date: '2004-03-04T12:20:52'
  content: '>I received an interesting comment mentioning two features of XDoclet 2 :'
  replies: []
- id: 1257
  author: Hani Suleiman
  date: '2004-03-04T13:48:26'
  content: 'Andrew, no offence (especially since you''re the only xdoclet1 guy with any sense of responsibility remaining!) but you''re just....wrong.

    The wiki does indeed mention a 16k jar. It doesn''t mention that it needs qdox, generama (which in turn needs pico, which in turn needs...etc etc). it''s lightweight only because for some reason pico guys like to call anything and everything to do with pico ''lightweight''. Sure, it''s very cleverly designed, but it''s a victim of its own cleverness. The same mentality that produced a horrifically complicated i18n subsystem in xdoclet1 to show build time messages in brazilian portugese is now ensuring that xdoclet2 can ''read in database metada obtained via jdbc and generally entity ejbs''. As great it is that xdoclet2 is so brilliant designed to do this....isn''t this need already fulfilled fairly comprehensively by middlegen?'
  replies: []
- id: 1258
  author: Jon Tirsen
  date: '2004-03-04T14:35:55'
  content: 'Hani, you are right that xdoclet 2 depends on qdox (if you use javadoc-tags) and generama which in turn depends on pico. But pico have been carefully designed to depend on nothing else but jdk 1.3.

    Is xdoclet 2 lightweight? Depends on definition but I''d say no, it does have three dependencies. Generama would be the lightweight one with only one (tiny) dependency. Does xdoclet 2 need to be lightweight? Probably not, as long as it works and does it job.

    That''s what it comes down to in the end, right, Hani? ;-)'
  replies: []
- id: 1259
  author: Jon Tirsen
  date: '2004-03-04T14:36:47'
  content: Btw, Hani, will we *ever* see a Pico-bile? ;-)
  replies: []
- id: 1260
  author: Hani Suleiman
  date: '2004-03-04T16:48:21'
  content: Jon, I'll do a pico bile whenever I actually have time to look at it in detail!
  replies: []
- id: 1261
  author: Slava Imeshev
  date: '2004-03-10T15:36:30'
  content: 'Cedric,

    As for XDoclet - with all my respect, measuring quality of a product based on mailing list activity is mmm... not very smart of you. You said yourself that it''s used 99% in production environment - what do you need else? It took me twenty minutes to get XDoclet stuff working, compared to EJBGen which I spent a half of a day on and finally gave up to make its ant task working. To my disappointment, EJBGen usability was poor. If I had not wanted 8.1 tags madly, I would have dropped EJBGen at instant. Very sad. Be careful making anyhing''s killer of it.'
  replies: []
- id: 1262
  author: popupblocker
  date: '2004-06-25T00:14:13'
  content: Just reading up on some of this lately, was interesting.
  replies: []
- id: 1263
  author: Tracy
  date: '2004-08-08T15:48:33'
  content: Was browsing through blogspot when I stumbled here
  replies: []
---

[ SGen](http://beust.com/weblog/sgen) has caused [ quite a stir](http://theserverside.com/news/thread.jsp?thread_id=24320), so I thought a few clarifications were in order.

**JAM**

There is quite a bit of interest about JAM, and rightfully so, so I'll start with this.

JAM is shipped with [ XMLBeans](http://xml.apache.org/xmlbeans/), so it's an Apache product.  I didn't include it in SGen (although I did include the JAM javadocs), but if you want the whole JAM distribution, just download XMLBeans.  What you won't find in that distribution is the JSR 175 code, though, which I just recently wrote.  I will ship this as part of SGen for now, though, but eventually, it will make it in XMLBeans as well.

The only reason why the SGen distribution is a bit messy right now is that I need to figure out a way to package it with two different jar files (1.4 and 1.5), and I just haven't had the time to do that so far.  Please bear with me.

**SGen**

Over the past months, I have received increasing requests to make EJBGen extensible.  Since EJBGen is not open source, the only way I could do this was provide an extension API in the same spirit as Eclipse or COM.  As I started factoring this code out of EJBGen, it occurred to me that the framework was actually turning into something fairly generic.  EJBGen was already using JAM back then and it became quite obvious that SGen could become not only a generator framework, but that it would be annotation-neutral on top of that.

From this point on, the other ideas fell in place very naturally.  The concept of separate jars for modules became central to the design of SGen.  Ideally, I want people to download a minimal SGen runtime and then shop around for various jar files (in source form or not) for the various modules they need.  This way, they create their own generator "a la carte" and one single invocation of the generic SGenRunner is all that's needed in their build to generate all the files they need. 

**XDoclet**

Here is my perception of the XDoclet landscape right now.  Please note that as opposed to the other sections, what follows is admittedly very subjective and I have no doubts that a lot of people will disagree with me.

There is an impressive number of XDoclet plug-ins used in production, and I think it's fair to say that 99% of them are based on XDoclet 1 (since XDoclet 2 is not even alpha, as far as I know).  Of course, anybody who has written a module for XDoclet 1 is very interested in porting their code to XDoclet 2, which offers a very compelling Velocity-based template model, as opposed to the version 1 and its XML language.

XDoclet 2 has been brewing for quite a while, now, but hasn't seen much activity in the CVS depot or the mailing-lists.  This standstill has had a disastrous effect on the landscape:  module authors are hesitant starting working on a pre-alpha version while reluctant to add more code in their v1 plug-in which is going to be obsoleted
