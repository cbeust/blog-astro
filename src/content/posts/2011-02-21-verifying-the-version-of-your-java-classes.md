---
title: Verifying the version of your Java classes
date: '2011-02-21T20:39:16'
slug: verifying-the-version-of-your-java-classes
categories:
- General
comments:
- id: 8765
  author: Andrew Binstock
  date: '2011-02-21T21:41:03'
  content: 'I have long held that there should be a full inventory check of the delivered product performed at the end of the CI cycle. This check should:

    1) make sure all files are present and no extra files have crept in

    2) verify the internal version number of the components

    3) verify the language level (your point)

    4) verify that all the files are virus-free

    ISVs are about the only development orgs that do this regularly. OSS projects and in-house app dev teams almost never do. IMO, this should be a standard best practice that''s a regular part of the the CI cycle.'
  replies: []
- id: 8766
  author: Tweets that mention Verifying the version of your Java classes ?? Otaku, Cedric's blog -- Topsy.com
  date: '2011-02-21T22:05:18'
  content: '[...] This post was mentioned on Twitter by Cedric Beust and Gabriel Kastenbaum, Coffee Guy. Coffee Guy said: Verifying the version of your Java classes http://goo.gl/fb/nmj1H [...]'
  replies: []
- id: 8767
  author: ipsi
  date: '2011-02-21T22:53:42'
  content: 'It''s worth noting that you could probably do the same thing with ''javap'', which is a disassembler for Java bytecode. Would it be easier or harder? Not sure. But it''s definitely another option if you''d prefer not to go reading bytes directly from the header of a class file.

    Of course, javap is also useful for a number of other things, but that''s outside the scope of this post.'
  replies: []
- id: 8768
  author: Robert Kovacevic
  date: '2011-02-22T02:01:37'
  content: Nice, could come in handy. We had the same problem a couple of times, but I was proposing that solution is to have a clean build environment, instead of doing builds on dev machines.
  replies: []
- id: 8769
  author: Justin Lee
  date: '2011-02-22T06:16:06'
  content: Using the unix file command also returns the bytecode version without so many hoops to jump through.
  replies: []
- id: 8770
  author: Ketan Padegaonkar
  date: '2011-02-22T06:27:50'
  content: 'It''s always a good idea to set the source and target versions on javac tasks. Also the following script is a oneliner for the script you mention:

    find . -name ''*.class'' | xargs file'
  replies: []
- id: 8771
  author: Martin
  date: '2011-02-22T07:41:33'
  content: 'To get this to work on linux (as well as OSX), use:

    od -t x2'
  replies: []
---

One of the constraints when you work on [fundamental software](http://beust.com/weblog/weblog/2010/12/17/developing-in-the-meta/) is that you need to be very careful about the classes that you ship. Not just the code itself, but also the version of the compiler that you used to compile these classes. 

Despite all my precautions, I have sometimes accidentally shipped classes that were using a compiler that's too recent. The latest occurrence of this incident was with TestNG's Eclipse plug-in. Despite all the settings specifying that the JDK should be 1.5, I ended up with 1.6 classes in the feature jar file. I eventually figured out that when you actually build the update site, Eclipse uses some ant tasks which seem to ignore the Eclipse preferences and which revert to the global environment's JAVA_HOME. 

So I ended up writing a quick script that makes one last check before actually uploading the files to the site, which I thought some people might find interesting: 
    
    
    for i in `find . -name \*class`
    do
      v=`od -h $i | head -1 | awk '{print $5}'`
      if [ $v != "3100" ]
      then
        echo "Class $i has version $v, expected 3100"
        exit -1
      fi
    done
