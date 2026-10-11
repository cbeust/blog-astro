---
title: 'SGen:  an XDoclet killer'
date: '2004-03-03T13:11:38'
slug: sgen-an-xdoclet-killer
categories:
- Java
comments:
- id: 1236
  author: Dion
  date: '2004-03-03T14:54:54'
  content: What license is this under? I noticed that the dist contains src/ but I didn't see a copyright...
  replies: []
- id: 1237
  author: Cedric
  date: '2004-03-03T15:01:09'
  content: I plan to license it Apache and maybe fold it into XMLBeans at some point.
  replies: []
- id: 1238
  author: Congratulations
  date: '2004-03-03T15:40:00'
  content: Congratulations.  You just invented XDoclet 2, only without the plugable input source and plugable metadata processor.
  replies: []
- id: 1239
  author: Congratulations
  date: '2004-03-03T15:42:27'
  content: Actually, rereading it, this sounds exactly like XDoclet 2.  I wonder if you care to differentiate between the projects?
  replies: []
- id: 1240
  author: Hani Suleiman
  date: '2004-03-03T16:21:15'
  content: Woo, I'll definitely have a look, would be kinda neat to have the same xdoclet tags in source and having a decent processor instead of xdoclet at the back generating all the descriptors.
  replies: []
- id: 1241
  author: diprey
  date: '2004-03-03T16:29:46'
  content: 'Poor Cedric?  Maybe, you meant, Poor Yorick ?

    But that''s on some other RSS...

    Ced, really, care to explain how your stuff is different form XDoclet 2 ?'
  replies: []
- id: 1242
  author: Cedric
  date: '2004-03-03T16:34:42'
  content: 'Well, you tell me, where is XDoclet 2?

    I''ve been waiting for months and I got tired.  Is there some official release that I missed?  Documentation?  An API?'
  replies: []
- id: 1243
  author: Jason
  date: '2004-03-03T16:46:15'
  content: 'I''ve been hearing about the revolutionary XDoclet 2 for longer than I care to remember (years), and I''ve seen exactly jack squat. Not even an alpha quality release. Meanwhile XDoclet number one has become a bloated piece of shite.

    I for one am thrilled that someone like Cedric would take on such a project. At least now I know I can count on a useful tool that gets regular updates and improvements, ala EJBGen, and doesn''t get kicked to the curb in favor of the ''technology du jour''. Yes, I mean PicoContainer.'
  replies: []
- id: 1244
  author: Robert Watkins
  date: '2004-03-03T17:19:36'
  content: Where can I find out more about JAM?
  replies: []
- id: 1245
  author: Anjan Bacchu
  date: '2004-03-03T20:01:49'
  content: '>>Where can I find out more about JAM?

    JAM : If you''re meaning the build tool from perforce , here''s a good link

    http://freetype.sourceforge.net/jam/'
  replies: []
- id: 1251
  author: techno.blog("Dion")
  date: '2004-03-03T20:11:33'
  content: '<strong>Cedric has been busy: SGen</strong>

    Cedric has been a busy guy :) He just launched SGen, which looks like a next generation of his EJBGen.... well a super-set for sure. The cool part of it is that it works on both JavaDoc tags, and the...'
  replies: []
- id: 1252
  author: techno.blog("Dion")
  date: '2004-03-03T20:12:46'
  content: '<strong>Cedric has been busy: SGen</strong>

    Cedric has been a busy guy :) He just launched SGen, which looks like a next generation of his EJBGen.... well a super-set for sure. The cool part of it is that it works on both JavaDoc tags, and the...'
  replies: []
- id: 1246
  author: Ara
  date: '2004-03-04T01:27:53'
  content: 'Cedric, I''m sure Aslak knows much better than me about xdoclet2 and could eleborate more (I''m not involved with xdoclet for at least a year now). But anyway, let''s do a google for xdoclet2 and see what comes up: http://xdoclet.codehaus.org/. Now click on the links on top of the page. Generama, plugins project and so on. Yes, there''s no release yet, but as far as I know it''s maturer and more functional and feature rich than SGen even in this stage. Actually people hesitate to work on it, because xdoclet1 apparently works fine and they don''t neccessarily find the jsr175 syntax a big deal and also they can already do velocity based template in xdoclet1 and ....

    Ara.'
  replies: []
- id: 1247
  author: Barre Dijkstra
  date: '2004-03-04T02:13:14'
  content: 'Certainly sounds interesting, I''ll have a look when I make my deadline.

    Though I got 1 question:

    To quote the description:

    "SGen is XML-free.  That''s right, baby, you won''t have to write a single line of XML to use it."

    But to quote the TODO list:

    "Other means to configure the modules (XML maybe?)."

    Isn''t that silverbullet named xml great? You can run, but you can''t hide. ;-)'
  replies: []
- id: 1248
  author: Gerry
  date: '2004-03-04T08:19:23'
  content: 'Barre, I think he meant XML-free as in it''s not a requirement, not that it won''t even support it.  Yeah, it seems like XML is everywhere.  Maybe I''ll use it sometime (outside of web.xml, that is). :-)  But seriously, I think too many projects are making XML the requirement when it''s not necessary.  XML is verbose and sometimes a small properties file or the like is much easier to use.

    I much prefer using tools to generate configuration files, as long as the files are human readable and changable.  If XML is there in the background, fine, but don''t make me write a big XML file and decode a DTD or schema just to make something work.  Give me a tool!  At least the Linux guys finally figured that out....'
  replies: []
- id: 1249
  author: Gerry
  date: '2004-03-04T08:22:04'
  content: Cedric, your naming scheme makes me want to cry.  IBooHoo
  replies: []
- id: 1253
  author: Show me the code 2.0
  date: '2004-03-04T10:47:40'
  content: '<strong>No ejbgen example''s for SGen</strong>

    It sounds interesting. But there is no examples of using it with ebjgen.'
  replies: []
- id: 1254
  author: Robert's House of Cards
  date: '2004-04-20T05:33:43'
  content: '<strong>XDoclet 1.2 vs SGen</strong>

    I gave a talk at  AJUG-QLD  last night, on using XDoclet for code generation. Went down pretty well, I think, though that could be just my flattered ego talking.

    One of the focus points of my talk was on extending XDoclet and writing your own modul'
  replies: []
- id: 1250
  author: free big boob pix
  date: '2004-11-12T12:05:21'
  content: Hello
  replies: []
---

Now that I have your attention :-)

I am happy to announce the initial release of [ SGen](http://beust.com/weblog/sgen), a framework that makes it easy to create tools that parse annotations and generate files.  Some of the goals for SGen are:

  * Modules can be developed separately and shipped in individual jar files.  All they need to do is contain at least one SGen module (which is achieved by implementing a certain interface).  For example, you can download ejbgen.jar, drop it in your "modules" directory, point SGenRunner to it and voila, you have added a new generator to your arsenal.  
 
  * SGen is annotation-neutral.  It supports both Javadoc and JSR 175 style annotations.  The way the annotations are collected is made transparent to your module through an open-source abstraction layer called JAM.  
 
  * SGen doesn't mandate any template technology.  You are free to use Velocity or println if that's what you want.  
 
  * SGen is XML-free.  That's right, baby, you won't have to write a single line of XML to use it.



Since the question is most likely going to come up, I don't see SGen as a direct competitor to XDoclet, although they achieve similar goals.  The idea is that if you wrote an XDoclet module, you should be able to factor out all the "business logic" of your generators and make an SGen module out of it.  Then your module can be downloaded by your users and mixed with the other SGen modules they use.

For more details, examples, architecture overview and JavaDoc, please take a look at the [SGen home page](http://beust.com/weblog/sgen).

SGen is certainly in alpha stage at this point and as you can see at the bottom of the documentation, more features are coming up, but since the current version works fine for the very demanding EJBGen (which is now an SGen module), I think it is in a good-enough shape for early adopters.

All questions about SGen should go to the [SGen mailing-list](http://groups.yahoo.com/group/s-gen/).
