---
title: Two things I learned today
date: '2006-11-18T22:51:36'
slug: two-things-i-learned-today
categories:
- Java
comments:
- id: 6131
  author: Cedric
  date: '2006-11-19T10:49:27'
  content: Test
  replies: []
- id: 6132
  author: Brian Slesinsky
  date: '2006-11-19T10:55:49'
  content: 'There was a tech talk about Mercurial:

    http://video.google.com/videoplay?docid=-7724296011317502612

    I don''t know their reasoning, but it seems pretty obvious that Perforce doesn''t scale past a certain point and I expect Subversion doesn''t either.    Maybe it''s a bit early to adopt Mercurial, but this will encourage the tool vendors to add support.'
  replies: []
- id: 6133
  author: RichB
  date: '2006-11-19T12:10:19'
  content: 'Sounds like Mercurial is a distributed version control system, so can''t be directly compared to Subversion, Perforce or anything of that ilk. You should be looking at comparisons to bazaar-ng and to git.

    Read this email for Mark Shuttleworth''s view on the benefits of distributed version control:

    http://mail.python.org/pipermail/python-dev/2005-August/055372.html'
  replies: []
- id: 6134
  author: RichB
  date: '2006-11-19T12:10:38'
  content: 'Sounds like Mercurial is a distributed version control system, so can''t be directly compared to Subversion, Perforce or anything of that ilk. You should be looking at comparisons to bazaar-ng and to git.

    Read this email for Mark Shuttleworth''s view on the benefits of distributed version control:

    http://mail.python.org/pipermail/python-dev/2005-August/055372.html'
  replies: []
- id: 6135
  author: anjan bacchu
  date: '2006-11-19T12:45:12'
  content: 'Hi Cedric,

    I asked the same question of Sun''s Stephen Lau (who''s working with the OpenSolaris project)  and here''s his reply.

    "Yes, if you look at the Tools community, we had a fairly extensive

    evaluation process where we evaluated a bunch of source control

    management systems:

    http://www.opensolaris.org/os/community/tools/scm/history/

    "

    I went through that link and found that it gave a

    decent understanding of the process that they used.

    BR,

    ~A'
  replies: []
- id: 6136
  author: Infernoz
  date: '2006-11-22T06:49:41'
  content: Mercurial looks pants, it has no GUI, IDE plugins or a usable wire protocol description, so is not usable IMHO.
  replies: []
- id: 6137
  author: Robert
  date: '2006-11-22T14:38:34'
  content: 'Things I learned today  tooo

    thanks for the  JAR file indexing...i ''ve maked a some examples..it looks  very good.

    Greetings by a javadeveloper

    from Costa Rica

    Check out http://rocasaca.blogspot.com'
  replies: []
- id: 6138
  author: Robert
  date: '2006-11-22T14:39:51'
  content: 'Things I learned today  tooo

    thanks for the  JAR file indexing...i ''ve maked a some examples..it looks  very good.

    Greetings by a javadeveloper

    from Costa Rica

    Check out http://rocasaca.blogspot.com'
  replies: []
- id: 6139
  author: Kieron
  date: '2006-11-27T04:50:43'
  content: '"Mercurial looks pants, it has no GUI, IDE plugins or a usable wire protocol description, so is not usable IMHO."

    That extremely short-sighted IMO. These things will come with time, especially from Sun themselves I bet.'
  replies: []
- id: 6140
  author: Eric Bodden
  date: '2006-11-27T19:32:30'
  content: 'Hi, Cedric.

    From my point of view I cannot say much about Mercurial because I have never used it but from the video it sounds very similar to Darcs and this I know is 100 times better than Subversion, especially for distributed development. Subversion to me seems as a "CVS without the bugs". It overcomes a lot of shortcomings of CVS but still has the same old philosophy that you have one large centralized repository and merging happens always in a linear fashion.

    The notion of change sets (or patches) as it is put forward by Darcs makes in my opinion much more sense in distributed development team. Everybody can apply everybody else''s changes any time without having to worry about conflicts whatsoever. What else does one want?

    The only problem I see with Darcs is still the lack of good tooling, especially for Eclipse (there is a plugin but it''s not too useful right now).

    Eric'
  replies: []
- id: 6141
  author: Olivier
  date: '2006-11-28T16:48:32'
  content: You must not have been reading very closely... He explained quite clearly that Sun was wedded from time immemorial to a distributed home-grown SCS and did not wish to change. That automatically ruled out SVN. Following that, their evaluation of the various distributed OS SCS available was very thorough and can be found somewhere on the OpenSolaris web site.
  replies: []
- id: 6142
  author: Anonymous Coward
  date: '2006-11-30T04:11:53'
  content: Mercurial is used with great success by many projects.  "Xen" being one of them (I'm currently running Windows *and* Linux on Xen/Linux using hardware virtualization... Something developer, IMHO, should be interested in).  Whining about lack of point-and-click tools at that moment for accessing the repository is, from a developer standpoint, quite scary.  Do you guys realize you're fscking slower when you move your hands away from the keyboard?   Oh, your IDE is cute, but it looks like you need to use the mouse... And, yes, I'm an IntelliJ user (on Unix of course) and, yes, I can switch in no-time to command line to checkout/commit whatever...  I'm sure a "point-and-click" Mercurial plugin will appear soon though, for those allergic with the keyboard/command-line.  Mercurial simply isn't disappearing anytime soon, so you better learn it (and I recommand trying the command line, it's not that hard to grasp for a developer).
  replies: []
- id: 6143
  author: Rob
  date: '2006-11-30T19:42:02'
  content: I knew this but thank you anyway for this information)
  replies: []
---

* [JAR file indexing](http://java.sun.com/j2se/1.3/docs/guide/jar/jar.html#JAR%20Index). If you ask it, `jar` will examine your jar files and create a text file called INDEX.LIST, which contains a list of all the classes and the jar file where they can be found, which can speed up class loading. This feature has been in Java since... the JDK 1.3! 

  * [Mercurial](http://www.selenic.com/mercurial/wiki/index.cgi), a GPL source-control system, which I wouldn't care much for if I didn't just learn that [it will probably be used to open source the JDK.](http://blogs.sun.com/mr/entry/openjdk_scm). 
In the blog entry linked above, Mark Reinhold spends a great deal of time discussing source control systems, but he fails to really explain why they picked this odd choice. And just to make things clear: the assumption that there will soon be 10,000+ developers checking in code into the JDK is ludicrous, if the Netscape story taught us anything. 

Personally, I'd like to read a good reason why they ruled out Subversion, which has the merit to be widely known and supported by most developer tools out there. 

Anyway, I feel less stupid after learning these two things, so I thought I'd share.
