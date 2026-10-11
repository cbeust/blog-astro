---
title: Java and .Net
date: '2004-04-12T09:09:47'
slug: java-and-net
categories:
- Java
comments:
- id: 1415
  author: Andrew Shuttlewood
  date: '2004-04-12T11:53:10'
  content: Have you looked at ikvm? It allows you to run Java using .NET. Have a peeky at www.ikvm.net
  replies: []
- id: 1416
  author: Gabriel Mihalache
  date: '2004-04-12T12:19:43'
  content: 'So, basically you want an updated version of J++ which supports Java 1.5, right?

    The whole issue is if you''d like to have the Java package structure (java.*, javax.*) or the one from .NET

    Maybe we could have WinForm-backed Swing just like we have Carbon-backed String in OSX?!'
  replies: []
- id: 1417
  author: Andrew Shuttlewood
  date: '2004-04-12T12:46:03'
  content: 'Just another handy URL - this is an example of actually using Java to use .NET (under Mono, but as far as I understand it, IKVM works under ''proper'' .NET as well)

    http://primates.ximian.com/~miguel/archive/2004/Mar-18.html'
  replies: []
- id: 1418
  author: Richard Nixon
  date: '2004-04-13T17:19:17'
  content: Dude, I am surprised that you have soooo much time to blog. Don't you have a day job to do at BEA (?)
  replies: []
- id: 1419
  author: Cedric
  date: '2004-04-13T17:56:42'
  content: 'Hi Dick, I''m a big fan of your work.

    I do have a day job at BEA but that''s not a problem for me since I blog at night instead of sleeping (which is such a waste of time anyway).'
  replies: []
- id: 1420
  author: Kofi
  date: '2004-04-14T02:35:35'
  content: 'Hi Cedric.

    You write:

    Don''t get me wrong:  Visual Studio remains an outstanding IDE and if anything, it is more powerful now than it was five years ago.  It''s just that today, modern Java IDE''s blow it out of the water...

    Just out of interest, which modern Java IDE''s blow Visual Studio out of the water?'
  replies: []
- id: 1421
  author: Kaj
  date: '2004-04-14T06:26:59'
  content: 'Hi Cedric,

    I take write once - run anywhere over write Java for each platform specifically. Java with "native" .Net is no platform, it is just a language. Why don''t you ask for C# on Linux, Mac OS, Palm OS and Nokia Cell Phones?

    Just a thought

    K&lt;o&gt;'
  replies: []
- id: 1422
  author: Thierry Kormann
  date: '2004-04-14T13:09:22'
  content: 'If this is just a matter of syntax, why don''t you use J# ? You will have full JDK1.1 + Collections and a few other packages. You can even have Swing with few hacks.

    FYI: Java will be a first class citizen programming language in Visual Studio 2005. Furthermore, VS2005 will provide all the cool refactoring features you have in modern Java IDEs.'
  replies: []
- id: 1423
  author: bioye
  date: '2004-04-15T06:02:20'
  content: 'I second kofi.  which particular ides blow vs out of the water? and can you list enough specific features they have over vs?  i come from the perspective that vs is the best ide in the world and though eclipse and idea try, they are limited and not fast enough..

    and for thierry, where can i find info on the java and vs2005 plan?'
  replies: []
- id: 1424
  author: QuaintRcky
  date: '2004-04-15T15:55:58'
  content: 'IDEs that blow Visual Studio out of the water:

    Top of my list is eclipse, which blows every other IDE I have used out of the water. The refactoring, second chance debugging and staggering number of plugins rate very highly with me.

    Also, I use JDeveloper pretty heavily, not quite as nice an environment as eclipse but better integration with Oracle database which is important at work.

    Netbeans, IntelliJ IDEA and Sun ONE (basically commercial netbeans) are all pretty outstanding too.

    Visual Studio vanquished all of it''s competitors in the windows space a good while ago, and when it did it started stagnating. MS ran out of ideas for it and had no one to copy. Internet Explorer is the same story right now, just look at where Mozilla/Firefox are in comparison to realize just how little distance has been covered in IE since it achieved it''s 90% share. MS is a masterful impressionist but no visionary.'
  replies: []
- id: 1425
  author: bithead
  date: '2004-04-15T18:35:30'
  content: 'I second that opinion, QuaintRcky. I see lots of people complaining about Java stagnating, but I''m looking at Eclipse right now and I am very pleased with what I see. I have customised it to be an immensely powerful environment for me. I''m also looking at the Spring framework and I''d like to show it to those people and ask "Do you *still* think Java is stagnating?".

    Looking around at Eclipse, Spring, Hibernate, AOP, Tapestry, SWT etc. etc. I see huge activity. I''m starting to believe that Java is morphing into something different, especially with AOP.  I also have to perform C++ programming as part of my work and it is such an eye opener - the level of choice and sophistication we have now is huge compared to back in the 90''s. C++ has not changed while Java is not only keeping up, I feel it is now setting the pace! Watch for the AOP scramble in the .NET space - watching how MS will bolt *that* on will be interesting. I suspect that some of the C# language constructs may make that task v. difficult to appear seamless to programmers...'
  replies: []
- id: 1426
  author: Steve Gebert
  date: '2004-04-16T09:11:25'
  content: 'HI - I apologize if this is a rude question.  First, some background.

    The State of Alaska government is attempting to force standardization to all of its IT structure.  Noble idea but reality is lacking.  Part of this is that they are telling each Department to standardize its development to one platform, Java or .Net.  Of course we chose Java, in part because it was not Microsoft and we are a Oracle shop.  I have been trying to accept this gracefully and learn Java.  First class next week :-)

    Now my question - is it possible to "referece" the Office object model, like in VB, and drive applications like Excel?  Any pointers to information on this would be greatly appreciated.  A language is a language is a language but I will miss getting into the Office/Windows architecture and driving applications.  Hope you can help.  I have been looking around and this is a subject not talked about very much.'
  replies: []
- id: 1427
  author: Anthony Berglas
  date: '2004-04-17T03:37:30'
  content: 'Recently someone ported my SimpleORM object relational mapping system to J#.  It was relatively painless.  I changed a few lines of code, added my own ArrayList, and we have common source for Java and .Net.

    One could build up libraries.  The big issue is that I do not think that J# can access new .Net constructs such as Structs, which makes it very limited, eg. Point is a heavily used struct.

    Anthony'
  replies: []
- id: 1428
  author: ''
  date: '2004-04-20T04:27:42'
  content: 'You were promised "Java everywhere", and now want

    to access the native .Net API''s from Java?

    You can have it just as soon as .Net API''s

    are available everywhere!'
  replies: []
- id: 1429
  author: ''
  date: '2004-04-20T07:02:42'
  content: Writing to Windows APIs would not be "run anywhere", it would be "run on windows". Perhaps you should spend a little more time sleeping.
  replies: []
- id: 1430
  author: Wayne Citrin
  date: '2004-04-20T09:34:08'
  content: 'Hi Cedric --

    You want to call .NET APIs from Java?  Check out our product at www.jnbridge.com.  Contact us if you have any questions.  We''ve got a couple of things on the way in upcoming versions that''ll make it even better.

    Wayne'
  replies: []
- id: 1431
  author: Scott Ellsworth
  date: '2004-04-20T12:30:34'
  content: 'To write Windows programs, you need to use Windows APIs in many cases.  Thus, to really be able to propose Java as a solution for all substantial Windows development tasks, you need to have some easy way to access them from Java.

    In addition, were a set of stub .NET libraries provided in jar form from Microsoft, then we could use them in popular Java IDEs, use them as part of nightly builds, and otherwise make .NET part of our tool chain, just like Java is.  Even if MS does not want to put .NET on Linux or MacOS X, they have customers who need to work with it in a limited way from those platforms, and appropriate Java bindings would go a long way towards making that possible.

    Scott'
  replies: []
- id: 1432
  author: Purpleman
  date: '2004-04-22T11:56:05'
  content: 'Write once - run anywhere? No longer important in the Java world for the enterprise. They all mostly picking one of the application server providers and sticking with them, using the proprietary stuff and not worrying about it.

    Want to communicate with things written in any other language than the one you are using? Can you say service-oriented architecture? Of course, both sides have to participate.'
  replies: []
- id: 1433
  author: J-Integra
  date: '2006-02-15T15:31:01'
  content: 'Visual Studio IDE is coming a long way but still has a long way to go when compared to modern java IDE''s such as Eclipse or IntelliJ (light years ahead of eveything)

    On a side note, if you are looking for Java .NET Integration don''t forget to take a look at our interoperability tools: J-Integra Interoperability suites.

    Check out our website at: j-integra.intrinsyc.com and feel free contact us if you have any questions.'
  replies: []
- id: 1434
  author: black window
  date: '2006-04-27T22:17:21'
  content: 'MorphBuster - Animation Design Tool

    http://www.yaodownload.com/video-design/animationdesigntools/morphbuster_animationdesigntools.htm'
  replies: []
- id: 1435
  author: plavix drug
  date: '2006-08-17T08:57:20'
  content: thank
  replies: []
---

The Sun-Microsoft settlement seems to mean a lot of different things to a lot of different people, but I realize that my needs are very simple:  I want to be able to write Java code for the .Net platform.

I don't mean writing Java on a Windows platform (I do that every day and it's working very well), but being able to access the native Win32/.Net API's from Java.  Right now, if I want to write an add-in for Outlook, I need to switch to C#.  Not a huge deal in itself, and it's actually a fairly pleasant experience, but I was promised "Java everywhere" and I'm still waiting.

Hopefully, the Sun-Microsoft settlement will make this possible.

On a related note, it's interesting to see how things change.  A few years ago, writing native code for Windows meant:  switching back to C++ (bad) and Visual Studio (good).  Now, it means switching to C# (good) and Visual Studio (bad).

Don't get me wrong:  Visual Studio remains an outstanding IDE and if anything, it is more powerful now than it was five years ago.  It's just that today, modern Java IDE's blow it out of the water...

Hopefully, in a couple of years from now, deciding to write native code for Windows (or for any platform for that matter) will mean switching to both languages and tools that are equally pleasant to use as those I am using today.
