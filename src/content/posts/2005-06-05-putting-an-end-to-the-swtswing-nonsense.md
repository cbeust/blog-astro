---
title: Putting an end to the SWT/Swing nonsense
date: '2005-06-05T10:08:35'
slug: putting-an-end-to-the-swtswing-nonsense
categories:
- Java
comments:
- id: 3708
  author: Erik
  date: '2005-06-05T19:37:55'
  content: Seconded!
  replies: []
- id: 3709
  author: Robert Watkins
  date: '2005-06-05T20:25:38'
  content: 'Not that I disagree with the spirit of this post, but...

    NetBeans 4.1 gets you to download a platform-specific _installer_. The resulting installed application isn''t platform specific, except for a few script files used to launch external apps. There isn''t any platform-dependant code outside of the IDE.'
  replies: []
- id: 3710
  author: Romain Guy
  date: '2005-06-05T22:59:22'
  content: 'If we were spending as much time coding as talking about Swing/SWT or Eclipse/NetBeans I''m sure we''d already have an HAL- or Skynet-like IA by now ^^

    That said, and even if I agree with you on some points, you''re not being totally fair with NetBeans guys. Have you taken a look at Project Matisse for instance? That is for sure a heck good reason to use NetBeans. And regarding your two bullets about SWT being more user friendly, well we can''t say we already all read that arguments over the past too many years. Speaking of user-friendliness one could say that offering NetBeans as an OS specific package is to be sure you''ll be able to start it easily. Oh and I may be wrong but Eclipse downloads page looks the same (http://eclipse.org/downloads/index.php :) Maybe you were just talking about the fact Eclipse.org can detect your OS for the download. In this case I have to say that you must be short of arguments to compare websites :)

    Really you don''t help closing the debate here. NetBeans/Swing guys offer lousy arguments but so do SWT/Eclipse proponents. For code''s sake, everytime a Swing proponent stands up against the SWT fans we end up reading such a blog entry. Nobody picked the perfect solution, but everyone picked the one they preferred and this is what matters.

    I recently tried to switch to IntelliJ IDEA because I was so sick about all those rants. I finally got back to Eclipse because I just cannot live without the Quick Fix feature anymore. IntelliJ IDEA is very interesting for a heck lot of reasons (namely the numerous refactoring and code analysis features as well as out-of-the-box XML and J2EE support) but the workflow is not as smooth as in Eclipse (too many dialogs for me, and often way too simple or simply useless).

    So well I''m happy to crak out Swing code with an SWT application. Long live both of them. Maybe this "war" is simply due to the fact both are very good toolkits. I never saw such debates with MFC and QT for instance. Or wxWidgets and QT.

    ^^'
  replies: []
- id: 3711
  author: Charles Ditzel
  date: '2005-06-06T01:46:34'
  content: 'Other people have shown the error of the "couple of facts".  Let me point out for starters - NetBeans runs on platforms without installers...so it is possible to install NetBeans on a shared servers and run it on OS/2, VMS and other platforms where no installers are offered.  Installers are simply convenience utilities.  Works is still ongoing to get Eclispe/SWT on OS/2.  I am unaware of Eclipse/SWT being available on VMS.  I should also point out that there is gaping compatiblity hole in SWT on MacOS - the SWT-AWT bridge is broken and Eclipse has problems with Swing/AWT apps on MacOS X.  See :

    https://bugs.eclipse.org/bugs/long_list.cgi?buglist=67384

    Lots of Swing things on and off Eclipse don''t work properly (jigloo, instantians swing designer, etc)...read the bug report.

    I don''t know why NetBeans should be embarrassed about tripling(and that is conservative) NetBeans'' active user base in the past 6 months and this calculation is based on the number of users connected to the NetBeans autoupdate center on the web.   There are alot of Eclipse users that have switched or use both - there is no shame in pointing out the obvious.  Some people may not like that - but its happening. Get used to it. :)

    Finally - Matisse is serious threat to SWT and will give Swing developers on Eclipse pause and a reason to use NetBeans -

    http://www.netbeans.org/kb/articles/matisse.html

    Take care,

    Charles'
  replies: []
- id: 3712
  author: martin moebius
  date: '2005-06-06T02:23:26'
  content: 'Than the Netbeans girls&boys should concentrate on matisse and spread the word about it. Its better looking than n the past, great tell about it. The stone old boring argument about swt vs swing is just meaningless.

    Giving relative number in increasment is always a c_h_e_a_p trick. Same as the download numbers of eclipse.

    Seems every few months a new developer generation is born to repeat the discussions.

    Lets talk about the right coding style or spaces vs. tabs, thats were the problems are ;)

    SCNR

    @cedric

    Your comment could not be submitted due to questionable content: c_h_e_a_p

    (remove the underscores)

    what is wrong with that?'
  replies: []
- id: 3713
  author: Stephan Schmidt
  date: '2005-06-06T02:36:27'
  content: '@Romain: What QuickFixes do you miss from Eclipse? I don''t miss any, but I only use  create class, create field and such stuff.'
  replies: []
- id: 3714
  author: ''
  date: '2005-06-06T07:11:36'
  content: 'And here we go again...  Mattisse is a threat to SWT, Eclipse doesn''t run on VMS, NetBeans tripled its user base in the past few months and Eclipse users are switching to NetBeans in droves because a few blogs say so.

    Charles, do you actually realize how silly all these arguments are and how you are actually achieving the opposite effect of what you are trying to do?

    You are not helping the NetBeans cause with this kind of statements, just ask around (and not your fellow Sun employees).

    --

    Cedric'
  replies: []
- id: 3715
  author: Charles Ditzel
  date: '2005-06-06T08:16:18'
  content: 'Whatever, Cedric, I actually was giving you some links to look at thinking you might be interested in.  Given that I''ve had some fairly normal conversations with developers that have moved or have been looking at NetBeans or simply had questions - the answer is yes - I have been having all types of conversations of the type you talked about.  You fall in the catagory of being very defensive.  :)   By the way, do you know how silly it is to give "a couple of facts" and be wrong ?  ''nuff said.

    Cheers.

    Charles'
  replies: []
- id: 3716
  author: Anonymous
  date: '2005-06-06T08:52:58'
  content: 'The amount of native code used to implement the portion of AWT that Swing uses is very small.  SWT requires much more native code.  So, I agree with Timothy Cramer''s comments.

    BTW, I''m a Chevy man myself.'
  replies: []
- id: 3717
  author: Ryan Sonnek
  date: '2005-06-06T08:55:40'
  content: 'Swing is based on AWT, which is not native, and as a matter of fact, there is a different AWT for every operating system.

    This is true, but AWT is distributed with every version of the jdk.  It''s heavily tested and reliable for every platform, and this is where SWT falls short.'
  replies: []
- id: 3718
  author: Romain Guy
  date: '2005-06-06T09:10:38'
  content: '@Stephan: Simple things like being able to quickly create an inner class, change the called method signature, promote a local variable to the instance level... I know you can do these things in IntelliJ, but they are just, IMHO, faster and easier to perform in Eclipse. Mostly because you always use the same keyboard shortcut. Also Eclipse''s auto completion is smarter, mainly because of the way it sorts the results.

    @C'
  replies: []
- id: 3719
  author: ''
  date: '2005-06-06T09:10:39'
  content: 'Charles,

    Since I work for neither Sun nor Eclipse, I hardly see how I could come out as defensive.  It''s not like my job is at stake or something.

    As for the couple of facts, I did overlook the fact that NetBeans runs on VMS, so I stand corrected there.  The rest of my points still stand, and I don''t believe they make me look silly but I''ll just do something you should try one day:  let the readers judge.

    --

    Cedric'
  replies: []
- id: 3720
  author: Romain Guy
  date: '2005-06-06T09:13:36'
  content: 'Speaking of Quick Fixes, I found this:

    http://blogs.sun.com/roller/page/roumen/20050603#editor_hints_on_update_center

    Well, NetBeans don''t seem to be that lazy after all :) This is not yet as powerful as Eclipse but it''s very good news!'
  replies: []
- id: 3721
  author: Andy Roberts
  date: '2005-06-06T09:40:57'
  content: 'OMG - Java has more than one GUI toolkit availble - this is so terrible - devs have choices now based on which toolkit they prefer for a particular job. How did it come to this? Will someone please think of the children?!

    Why is it that so many adults are arguing over this?  I have no idea why it polarises the community so much. I really wish you had put an end to this, but unfortunately you made a hash of it. Oh well, time to put your resources elsewhere, methinks.'
  replies: []
- id: 3722
  author: Rich Unger
  date: '2005-06-06T11:57:50'
  content: 'I think it''s just because the swing folks were so bruised by being bashed for so long by the swt folks (and rightfully so), that when they finally addressed a lot of swing''s weak points, they want to shout from the hilltops to kill the old canards.

    For the most part, no one''s arguing for swt based on performance anymore, so I think, to a certain extent, they''ve succeeded.'
  replies: []
- id: 3723
  author: karl
  date: '2005-06-06T15:37:20'
  content: Nobody from Eclipse.org or SWT has ever bashed Swing.  Go search the web.  The bashing is all coming from the Sun side.
  replies: []
- id: 3724
  author: pmorelli
  date: '2005-06-06T20:06:26'
  content: 'Romain,

    Quick fixes are called Intention Actions in Intellij. Similar lightbulbs will appear, or you can fire them off with Alt-Enter.

    If you''re using 4.5, be sure to install the Intentions Power Pack plugin (they''re installed by default for 5.0 EAP builds).

    --pete'
  replies: []
- id: 3725
  author: ian pojman
  date: '2005-06-07T10:24:24'
  content: 'since when does the amount of native integration have anything to do with what makes the best toolkit? SWT is reinventing the AWT, trying to add on that ''native'' look and feel... oh wait. eclipse 3 went away from that, as it''s a bad idea in the first place. SWT is great if you want to take a step backwards API wise, and not rely on all the work being done in AWT and in the java platform itself.

    side note, who says eclipses workflow is better than IDEAs, let alone anything? come on, man, I save a file and my workspace hangs while (a) the UI wakes back up and (b) other stuff , UI BLOCKING, decides to happen, like automatic complication. sigh.... more reasons I run IDEA in tandem with eclipse and only switch over to eclipse when the big bosses are watching.

    ;)'
  replies: []
- id: 3726
  author: ian pojman
  date: '2005-06-07T10:25:19'
  content: oops, apt typo. compilation complication  ;)
  replies: []
- id: 3727
  author: pappaj
  date: '2005-06-07T16:37:28'
  content: I wish people would stop blaming the toolkit. IDEA isn
  replies: []
- id: 3728
  author: Graham Lea
  date: '2005-06-07T20:49:28'
  content: 'Who cares if widgets look native!?

    UIManager.setLookAndFeel(PlasticLookAndFeel.class.getName());'
  replies: []
- id: 3729
  author: BA
  date: '2005-06-07T21:16:52'
  content: 'Past history of Swing might be a reason for Sun to defend it over SWT, no?  Wasn''t it IBM who was big on Swing since it wasn''t native and then they develop SWT?

    And the not so subtle "Eclipse" name as in ''Eclipse the Sun".  Add to that IBM''s constant complaining about Java not being Open like all of IBM''s software.  Just leads to bad blood.

    In any case I agree with the person who pointed out it''s NOT the toolkits that make an application fast, it''s the code.  That''s why IntelliJ just plain rocks because their small team of developers know how to write great code.

    Too bad there weren''t more Java GUI developers like the IntelliJ staff developers!'
  replies: []
- id: 3730
  author: ''
  date: '2005-06-08T02:39:56'
  content: 'It takes a long time for Swing to adjust to the latest user interface of its hos ting operating system because every single new widget needs to be reimplemented from scratch in Java by Sun.

    Ignorance or deliberate misinformation?

    1) Swing widgets are a very stable family that grows (e.g. JSpinner) in its own directions, adopting some platform''s novelty widgets is not an objective.

    Only the appearance of a desktop environment is reproduced, and it changes very slowly (e.g. Windows XP vs Windows 2000)

    2) Swing widgets are pure java, they have one implementation for all platforms.

    Their AWT foundation (windows, drawing primitives, mouse and keyboard events) is extremely stable.

    3)Some look and feel engines are not portable because of their platform integration features (e.g. using GTK themes from files or Windows color schemes from the registry), but this is a deliberate choice; other engines like Metal are portable.'
  replies: []
- id: 3731
  author: Arjun Mukherjee
  date: '2005-06-12T12:01:21'
  content: 'Just look at the following URL:

    http://www.netbeans.info/downloads/download.php?type=4.1&p=1&a=bsd&os=5&lang=1&rv=4.1&b_bt=2

    (You get to it by choosing a platform and in the subsequent page, at the bottom you get the aforesaid link )-

    There you get the bz archiove which works  on all platforms - Common Cedric you could figure this out)'
  replies: []
- id: 3732
  author: ''
  date: '2005-06-22T02:43:20'
  content: 'As an exercise and to have a feel of how swt works, I''ve recently tried to port a Swing app I''ve been working on lately (allowing to view -potentiallybig, >100Mb- log files in a tabular format).

    I finally gave up for at least 2 reasons :

    - the swt approach is very different from swing''s one : the former is controller driven, and the latter is model driven, which suits me better.

    - for this kind of app swt approach consumes approximately twice as much memory as swing ...

    Explanation : I''m visualizing LogEvent objects in a JTable in the swing version. So at any time i only need to have in memory the LogEvent, and whenever a redraw happens, TableCellRenderers create temporary strings to display the visualized part of the table.

    Whereas in the swt approach, I need to create a Table with all the strings. Thus the events are instanciated twice : once in my model , and once in the Table.

    In conclusion, and for this app, the swing approach needs about twice as much memory as the log i''m visualizing, and the swt approach is more like 4 times the size, which is way too much'
  replies: []
- id: 3733
  author: Patrick Schriner
  date: '2005-06-28T06:31:10'
  content: ^^ SWT supports virtual Tables some months by now.  You could have figured that out??
  replies: []
- id: 3734
  author: ''
  date: '2005-10-03T21:36:02'
  content: 'Here are a couple of facts:

    "NetBeans still requires you to download a different executable depending on your operating system."

    -- This is really NONSENSE. If you think Netbeans depends on OS, you are compleletly wrong. May be you have ever use NetBeans? (for me I use Elcipse and Netbeans both, since NetBeans 4.1, I like NetBeans better). I think why NetBeans offers OS dependent installer is for easy install, but NOT netbeans depends on OS. They also offer an OS dependent zip release(zip, tar.gz, tar.bz2), why not you down load that one? I always download the zip one - it can install anywhere Java runs. But for elipses, I have to download serveral ~100M files(I like collect opensource softwares), at least Win32, Linux GTK and Linux Motif.

    Swing and SWT, which one is better?'
  replies: []
- id: 3735
  author: Wayne Zhang
  date: '2005-10-03T21:36:22'
  content: 'Here are a couple of facts:

    "NetBeans still requires you to download a different executable depending on your operating system."

    -- This is really NONSENSE. If you think Netbeans depends on OS, you are compleletly wrong. May be you have ever use NetBeans? (for me I use Elcipse and Netbeans both, since NetBeans 4.1, I like NetBeans better). I think why NetBeans offers OS dependent installer is for easy install, but NOT netbeans depends on OS. They also offer an OS dependent zip release(zip, tar.gz, tar.bz2), why not you down load that one? I always download the zip one - it can install anywhere Java runs. But for elipses, I have to download serveral ~100M files(I like collect opensource softwares), at least Win32, Linux GTK and Linux Motif.

    Swing and SWT, which one is better?'
  replies: []
- id: 3736
  author: Vijay
  date: '2005-12-30T11:46:54'
  content: 'Swing violates the DRY principle. SWT is like future proofing your application.

    I rest my case.'
  replies: []
- id: 3737
  author: Madana Gopal
  date: '2006-10-09T09:35:52'
  content: 'Even though swing is easy to use its so useless on linux.........seriously you dont feel like using netbeans on linux......the interface sucks so much, the menu items are not anti-aliased , neither is the font good........and second netbeans has so many bugs that i hate netbeans.........most of the times you either get an null pointer exception or an IO error.......seriously i agree that visual interface matissa or what ever you call it is very good!!!

    but i end up most of the times reporting null pointer exceptions to the net beans website......

    Those of you who support net beans tell me can you point out any bugs in eclipse ??? i am not greeted by exceptions when developing my applications on eclipse .... A developer wants stability and needs to believe in his development platform....and netbeans as far as i know is not mature yet neither does it inspire confidence in me....... As the autor pointed out better concentrate on making your product better...

    remember this friends

    "when you point your finger at some one else......your last 3 fingers point towards you!!!"'
  replies: []
- id: 3738
  author: Madana Gopal
  date: '2006-10-09T09:36:34'
  content: 'Even though swing is easy to use its so useless on linux.........seriously you dont feel like using netbeans on linux......the interface sucks so much, the menu items are not anti-aliased , neither is the font good........and second netbeans has so many bugs that i hate netbeans.........most of the times you either get an null pointer exception or an IO error.......seriously i agree that visual interface matissa or what ever you call it is very good!!!

    but i end up most of the times reporting null pointer exceptions to the net beans website......

    Those of you who support net beans tell me can you point out any bugs in eclipse ??? i am not greeted by exceptions when developing my applications on eclipse .... A developer wants stability and needs to believe in his development platform....and netbeans as far as i know is not mature yet neither does it inspire confidence in me....... As the autor pointed out better concentrate on making your product better...

    remember this friends

    "when you point your finger at some one else......your last 3 fingers point towards you!!!"'
  replies: []
- id: 3739
  author: Madana Gopal
  date: '2006-10-09T09:39:39'
  content: 'Even though swing is easy to use its so useless on linux.........seriously you dont feel like using netbeans on linux......the interface sucks so much, the menu items are not anti-aliased , neither is the font good........and second netbeans has so many bugs that i hate netbeans.........most of the times you either get an null pointer exception or an IO error.......seriously i agree that visual interface matissa or what ever you call it is very good!!!

    but i end up most of the times reporting null pointer exceptions to the net beans website......

    Those of you who support net beans tell me can you point out any bugs in eclipse ??? i am not greeted by exceptions when developing my applications on eclipse .... A developer wants stability and needs to believe in his development platform....and netbeans as far as i know is not mature yet neither does it inspire confidence in me....... As the autor pointed out better concentrate on making your product better...

    remember this friends

    "when you point your finger at some one else......your last 3 fingers point towards you!!!"'
  replies: []
- id: 3740
  author: Kurt Risser
  date: '2007-03-30T11:16:44'
  content: 'NetBeans works perfectly on Fedora LINUX, and so do its Swing based applications.  NetBeans+Java+LINUX is a great combination.

    You should ensure that you are using the latest stable NetBeans release, which as of this writing is 5.5.  It doesn''t crash or throw exceptions.

    I do hope you have installed real Java on the LINUX box, and are not using gcj.'
  replies: []
- id: 3741
  author: Andy Pavlin
  date: '2007-06-10T10:57:03'
  content: As someone that has developed in both SWT and Swing, I can tell you that SWT is inferior to Swing in every respect.  MOST of the classes in SWT do not let you extend from them and if you do, you get a runtime exception.  This violates the intent of Object Oriented Programming.  If you're not suppose to extend from a class, the class should be final.  Sometimes you can add functionality to a component by wrapping it and providing a proxy to the wrapped component but this has limitations.  SWT is basically a hack- a hack that is no longer required because Swing has the same performance as SWT (if not better).
  replies: []
- id: 3742
  author: Francesco
  date: '2007-09-17T11:12:36'
  content: 'I use Linux with real Java, and fonts in Swing *are* antialiased, and Swing does feel faster than SWT, and on top of all, Swing now seems to support native look, it even resembles the decorations the window manager puts around windows in Swing "Internal Frames", so for me Swing is better.

    But I still use Eclipse. The reality is that often a developer works in more than one language, or has to work with uncommon version control systems, etc, the developer has unique needs no IDE could possibly foresee and for that reason extensibility and a large set of already available plugins is more important than anything. And when it comes to 3rd party extensions Eclipse (or Visual Studio on Windows) are the only choices.

    So I prefer Eclipse but Swing not SWT. And lo and behold, i found an Eclipse-on-Swing plugin on the net, try it out if you use Linux it makes Eclipse almost as fast as NetBeans (sorry, it looks like it''s really the GUI that matters for performance).'
  replies: []
---

The [ interview of the director of engineering for NetBeans](http://www.theserverside.com/tss?service=direct/0/PostNewsReply/postReply&sp=l34315&sp=F&sp=l173153) has generated a pretty lengthy discussion.  There is a particular argument used by Sun employees to bash SWT that I am getting a bit tired of:

> Swing, the NetBeans Platform and the NetBeans IDE are 100% pure Java - you are not being locked in to someone else's proprietary implementation. 

This is nonsense.

Swing is based on AWT, which is not native, and as a matter of fact, there is a different AWT for every operating system.

What you can say is that SWT relies on more native code than Swing, but frankly, who cares?

Here are a couple of facts:

  * The platforms supported are the same (both Swing and SWT run on Windows, various Linux window managers and MacOS, which covers probably close to 100% of the desktops out there).  
 
  * NetBeans still requires you to download a different executable depending on your operating system.



And in case you have any doubts, just go to the [NetBeans Download page](http://www.netbeans.info/downloads/download.php?type=4.1) and you will see that you are asked which operating system you use before you can start the download (which is an executable).

On a more personal basis, I think the SWT/JFace approach is not only more powerful than AWT/Swing, it is also more user-friendly:

  * It takes a long time for Swing to adjust to the latest user interface of its hosting operating system because every single new widget needs to be reimplemented from scratch in Java by Sun.  
 
  * The support for native integration in Swing is still very primitive.  For example, I configured my Windows desktop to support single-click operations (I never double click).  When I open a NetBeans file dialog, I still find myself having to double click, which is a horrible user experience and contributes greatly to making Swing applications feel so different from everything else.



And finally, a quick advice to the NetBeans team:  please stop blogging about SWT or Eclipse.  Refocus on writing good Java code and only post about what makes NetBeans different from Eclipse as opposed to "better". 

But most of all, stop publishing stories of users who switched from Eclipse to NetBeans, it is embarrassing.

Just let your users and readers judge, they will respect you more for it.
