---
title: Announcing Doclipse
date: '2004-06-15T15:16:52'
slug: announcing-doclipse
categories:
- Java
comments:
- id: 1664
  author: Steve
  date: '2004-06-16T02:29:45'
  content: This seems like a great plug-in but I can't get it to work with external files. I'm using Eclipse 3.0-RC2. When I'm specifying a directory read from nothing happens. Any ideas?
  replies: []
- id: 1665
  author: loki
  date: '2004-06-16T06:47:22'
  content: 'Great stuff. Thanks Cedric. Simple but _very_ useful.

    Any chance of having it "full-featured" for Eclipse 2.1 ?

    I just gave it a try with 2.1.3 but it doesn''t show up the the Preferences - although it works properly in the Java Editor ;-)'
  replies: []
- id: 1666
  author: Cedric
  date: '2004-06-16T07:08:56'
  content: Steve, can you send me the XML file you are trying to use?  The XML parsing is very basic at this point so it might not validate and silently fail.
  replies: []
- id: 1673
  author: Euxx
  date: '2004-06-16T08:47:14'
  content: '<strong>Working with JavaDoc-driven class metadata in Eclipse.</strong>

    Cedric have implemented  Doclipse , an Eclipse plugin for JavaDoc tags. It have a nicely looking UI (especially preferences page), however it has very limited use, because right now it can only distinguish between class and method JavaDoc tags.

    Pret'
  replies: []
- id: 1667
  author: Thierry
  date: '2004-06-16T11:17:26'
  content: 'Thx Cedric.

    Very usefull indeed.

    http://jyperion.com/'
  replies: []
- id: 1668
  author: Frank Bolander
  date: '2004-06-16T13:38:44'
  content: What are the differences between Jboss-IDE and Doclipse?
  replies: []
- id: 1669
  author: sandeep
  date: '2004-07-16T11:37:33'
  content: 'Hi there

    I was trying to use the doclipse with wsad 5.1.1 but it is not showing up any workarounds or suggestions...

    Thaks

    Sandeep'
  replies: []
- id: 1670
  author: Esben
  date: '2005-08-06T08:39:00'
  content: 'Hi,

    I''ve installed Doclipse, but how do I get javadoc running within eclipse to recognize the new tags that I add? I get code-completion and the lot on the new tags but when running javadoc I get warnings that they are not recognized?

    - Esben'
  replies: []
- id: 1671
  author: Esben Toftdahl
  date: '2005-08-06T08:39:38'
  content: 'Hi,

    I''ve installed Doclipse, but how do I get javadoc running within eclipse to recognize the new tags that I add? I get code-completion and the lot on the new tags but when running javadoc I get warnings that they are not recognized?

    - Esben'
  replies: []
- id: 1672
  author: Luke
  date: '2006-08-02T02:56:17'
  content: I've installed Doclipse, but how do I get javadoc running within eclipse to recognize the new tags that I add? I get code-completion and the lot on the new tags but when running javadoc I get warnings that they are not recognized?
  replies: []
---

![](http://beust.com/weblog/doclipse/pictures/completion2.jpg)

I am happy to announce the first version of Doclipse, an Eclipse plug-in to help you write Java source files with Javadoc tags, either for documentation purposes or to be processed by a tool such as EJBGen or XDoclet.

Once you have installed Doclipse, you can add your own definition files for JavaDoc tags and they become available immediately in the editor.

Check out the [Doclipse home page](http://beust.com/weblog/doclipse) for more details.
