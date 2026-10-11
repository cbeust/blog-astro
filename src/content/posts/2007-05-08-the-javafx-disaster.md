---
title: The JavaFX disaster
date: '2007-05-08T09:58:33'
slug: the-javafx-disaster
categories:
- Java
comments:
- id: 6676
  author: Vladimir Sizikov
  date: '2007-05-08T10:36:43'
  content: Eclipse plugin is provided as well, right there, on the download page...
  replies: []
- id: 6677
  author: Roman Strobl
  date: '2007-05-08T10:40:15'
  content: 'FYI - there is also an Eclipse plug-in available for JavaFX from https://openjfx.dev.java.net.

    P.S. Sun still cares about Java :)'
  replies: []
- id: 6678
  author: Sam
  date: '2007-05-08T10:43:06'
  content: 'Yeah, this is pretty pathetic.  Evidently these assholes have never seen Groovy''s SwingBuilder (which provides the same capability and more since you have all of Groovy available to you).  At least Groovy is getting IDE support (although those are still works in progress at least they exist).

    Personally, I think Sun hates Groovy.  They are balls to the wall supporters of Ruby (and more specifically, JRuby) but Groovy bugs the shit out of them.  Why?  They don''t control it and they''re worried that it might actually get popular (now that it doesn''t suck anymore).  So, they come up with this JavaFX crap.  My guess is they offered to buy out the Groovy dev team (just like they did the JRuby team) and they said no.'
  replies: []
- id: 6679
  author: John Wilson
  date: '2007-05-08T11:15:56'
  content: 'This is F3 rebranded isn''t it?

    It looks to use pretty much the Groovy Builder syntax (modulo a redundant colon).

    You could certainly come up with convincing reasons not to use Groovy for this (J2ME support, for example). However their reasons are, as you rightly point out, ignorant nonsense.

    Tim Bray has had to fly all the way to London (http://www.tbray.org/ongoing/When/200x/2007/05/04/London) to find out that Groovy is in pretty heavy use in the financial sector - shouldn''t Sun know that already?

    I really think Sun''s NIH attitude will do for them in the end.'
  replies: []
- id: 6680
  author: Michael
  date: '2007-05-08T13:00:31'
  content: John -- I'm wondering the same thing. Is this just a new name for F3? I was just commenting to somebody at JavaOne yesterday that the open nature of Java with its JSRs and JCP make it hard for there to be too many surprises at JavaOne.
  replies: []
- id: 6681
  author: RichB
  date: '2007-05-08T13:34:08'
  content: Sun have just reinvented JSON. What's wrong with Rhino?
  replies: []
- id: 6682
  author: fletch
  date: '2007-05-08T14:36:57'
  content: 'Funny, that was the first thing I thought when I saw JavaFX... that they should have just used Groovy. It''s not even really declarative, it''s just simple syntax for lambda''s, hash''s, lists and hang on... some other crazy stuff (bind foreach?) that would be interesting to see in a general purpose way.

    From a declarative point of view, it''s crying out for some AOP that behaves like CSS.'
  replies: []
- id: 6683
  author: incze
  date: '2007-05-08T16:25:05'
  content: The target was (with java) an is (with fx) the mass programmer. Groovy is too intricate and rich. You can't be put that into the faq. Sun goes to mobile and wants to lure the mobile mass programmers, and wants to lure the mass programmers to work for the mobile - and this platform will serve them for some years. And that can be enough.
  replies: []
- id: 6684
  author: Eric Burke
  date: '2007-05-08T19:40:09'
  content: 'Sun is solving the wrong problem. The whole issue with rich client Java is deployment difficulties. Java Web Start and Applets both suck, particularly when compared with Flash and now Silverlight.

    Inventing yet another scripting language does nothing to solve the deployment problem. As the demos show, JavaFX still relies on Web Start for deployment. So users must install JREs, suffer through countless dialog boxes during the download process, and deal with inevitable errors once the Java Web Start cache becomes corrupt or some JRE-related registry key gets hosed.

    On top of that, JavaFX does not add any new multimedia capabilities. Nobody in their right mind would try to develop, say, a YouTube competitor using JavaFX. Flash remains the only viable option. Which is sad, because Java really is a better language than JavaScript.'
  replies: []
- id: 6685
  author: afsina
  date: '2007-05-08T21:01:39'
  content: 'Well, you got it wrong on some parts...

    - JavaFX is mostly a simple language for Java 2D, swing is not the target. Although it can use swing. So swing related things are a little unrelated.

    - Groovy is a java wannabe, dreaming to replace it without much hope.  groovy only simplifies ''some'' swing developement, it does not really do much on java2d. JavaFX is more like a minion, has no intention to replace Java :). IMHO,  it''s syntax should be revised tough..

    - The real problem is still the runtime startup time, deployment problems, resource usage, lack of well defined animation - multimedia libraries and a designer GUI designer for java 2D stuff.. JRE size is not a big deal. But JavaFX does not deserve this bashing.'
  replies: []
- id: 6686
  author: Richard
  date: '2007-05-08T21:11:21'
  content: 'Cedric,

    I would really recommend that you look through the docs more fully before taking such a cynical view of JavaFX. You seem rather hasty to find some conspiracy as to why it exists (to promote NetBeans obviously - except for the fact there is an Ecplise plugin...). In addition, it has some interesting features. Try out the tutorial. The bind feature is useful (and not in Java or Groovy). As the docs say, "Incremental evaluation is one of JavaFX''s main distinguishing features that makes it possible to define complex dynamic GUI''s declaratively. The lazy evaluation feature is needed to handle recursive data structures like trees and graphs.". It''s quite a groovy feature ;) I assume it''s this sort of stuff that the FAQ is alluding to when it compares a generic language like Groovy to JavaFX which it squarely aimed at making UIs.'
  replies: []
- id: 6687
  author: Nick
  date: '2007-05-09T02:46:48'
  content: Also, I don't think you need to install Netbeans to run JavaFX itself - although you'd probably need to install it to follow the Netbeans JavaFX tutorial which you link to...
  replies: []
- id: 6688
  author: BoD
  date: '2007-05-09T03:15:42'
  content: '> For example, the symbol for inequality is... &lt;>.

    > That''s right, &lt;>! I''m guessing the creator of

    > JavaFX likes Eiffel. Too bad the rest of the world

    > hates it.

    You forgot about BASIC, one of the most used scripting languages... Maybe they took it from there since JFX is claimed to be simple.'
  replies: []
- id: 6689
  author: Alexis MP
  date: '2007-05-09T03:54:26'
  content: Sorry Cedric, you're losing your common sense when it comes to Sun and NetBeans it seems. JavaFX is obviously "just" a jar file...
  replies: []
- id: 6690
  author: Ed Burnette
  date: '2007-05-09T04:57:34'
  content: Hey Cedric, I'm not a NetBeans apologist by any stretch of the imagination, but I've come to believe that Sun's not doing technologies to promote NetBeans, it's the other way around - they're doing NetBeans to demonstrate and promote their technologies and make them easier and more attractive to developers. Look at what I wrote near the bottom of http://blogs.zdnet.com/Burnette/?p=301 for a more long winded explanation. Also I have a lot more on JFX at http://blogs.zdnet.com/Burnette/?p=306 .
  replies: []
- id: 6691
  author: Doug
  date: '2007-05-09T05:54:12'
  content: 'JavaFX is also statically typed, unlike Groovy.

    The real competitor in my mind is Scala.  But Scala only has a half-done Eclipse plugin, so you are tied mostly to SWT.

    Other issues: Neither Scala nor JavaFX support generics yet.

    Both Scala and JavaFX I believe have a runtime library that you need to include with your apps.  Say for example you want to create a library (jar) for others to use.  I guess you have to bundle it with the scala or javafx runtime jar too?

    Also in JavaFX you have to declare all a class''s attributes first (like in C or C++).  I can''t see any reason why they would do that except to make it easier for the compiler (vs. the developer).'
  replies: []
- id: 6692
  author: Guido Marongiu
  date: '2007-05-09T06:12:50'
  content: 'A small point about notation: "&lt;>" is the symbol for inequality in pascal-derived languages; the equivalent symbol in Eiffel is "/=".

    And you really seem to hate Eiffel :)'
  replies: []
- id: 6693
  author: Bob Foster
  date: '2007-05-09T10:40:18'
  content: 'No, you don''t need NetBeans to run JavaFX. You just need it to do the stupid tutorial. If you must use an IDE, there''s a plugin for Eclipse 3.2, as well. Or use a text editor.

    Cancel your rant, say "Never mind" and next time, try reading before you go off.'
  replies: []
- id: 6694
  author: Ilya Sterin
  date: '2007-05-09T15:49:56'
  content: 'As Eric pointed out, it''s all about deployment.  The reason Flash now owns a monopoly in this field is the ease of deployment.  It''s rather transparent.  Go to a flash site that requires some version of flash, you get a popup asking to install the plugin, &lt; 1 minute and you''re done (unless you''re on dialup:-).

    I also agree with Cedric.  Java is perfectly OK for rich gui environment creation (groovy is probably fine too, never tried it).  Not sure why create another scripting language, other than to compete with AS3.  Either way, good luck to sun, but it''s doomed to fail before even the first release.'
  replies: []
- id: 6695
  author: aa
  date: '2007-05-09T17:23:28'
  content: Cedric jumped the shark loong ago...
  replies: []
- id: 6696
  author: Adi
  date: '2007-05-10T09:51:24'
  content: 'I don''t buy your particular comment on Netbeans, that Sun invented another language to spread its adoption. I don''t think Netbeans is that poor,in fact it is good, did you check Netbeans 6.

    Whats wrong in coming up with a free IDE when introducing a technology?. Do expect Sun should have come up with whole new IDE?. Apart from that, they do have Eclipse Plug-in. No need to tell you, that,in order run the Eclipse plug-in, first you need Eclipse platform.I see the same case in Sun asking you to download Netbeans. If you want to run ''Hello World'' stuff, use JavaFXPad or as someone suggested, a text pad.

    By the way, I am not Netbeans fan boy, I am an Eclipse plug-in developer.'
  replies: []
- id: 6697
  author: lumpynose
  date: '2007-05-10T22:11:08'
  content: Speaking of Netbeans, this is my first JavaOne and I noticed that all of the presentations that use an IDE use Netbeans.  Does Sun have some rule where if you use an IDE in your presentation you're not allowed to use a non-Sun IDE?
  replies: []
- id: 6698
  author: Andres Almiray
  date: '2007-05-11T20:12:53'
  content: '> Doug: "JavaFX is also statically typed, unlike Groovy."

    say what? Groovy works with static types too, it just doesn''t force you to choose sides, you can do both dynamic and static typing in the same method/class/script.'
  replies: []
- id: 6699
  author: Anonymous Coward
  date: '2007-05-12T09:36:35'
  content: '..we, Java developers, ... : we hate proprietary lock-in.

    Says the Windows fanboy.  Oh the irony.'
  replies: []
- id: 6700
  author: ''
  date: '2007-05-13T20:14:03'
  content: 'Yes yes - everyone is quick to attack Sun on the whole JavaFX thing.

    I for one think it''s cool and pretty great.  Here''s why:

    - Unlike Flex or Laszlo, it''s not XML.  This means that the language is descriptive and concise.  Chris Oliver specifically mentioned in his talk at JavaOne that this was a careful selection and he feels the language choice will be more maintainable and scalable long term.  I think he''s right.

    - The actual JAR is only 700 K, not 10 MB.  The facts are from Chris himself - he said "you''ll need a 700 kb jar".

    - In the modern world, how does it matter that there is even a 15 MB download?  Isn''t Flash, Flex or RCP all even this big, and with RCP you still need the JRE?

    - Anything the JAVA world you need is available.  JavaFX can be a panel in a Swing application.

    - Chris Oliver is a brilliant guy, hands down.  He can easily defend himself and his choices.

    - Open source!  What about Adobe and Microsoft?  Sure Flex is open source but what about Flash itself?  No Chance.

    - JFX is not just for the web, but also the desktop.  This is a huge plus to people writing Swing desktop apps.  JFX is part of the Java Platform, not just applets.

    What''s not to like:

    - The language is very early, there will be some bumps.

    - The name is a shock and is not very good.

    - The interpreter is slow.  Chris mentioned that the next gen interpreter will be 10-20 times faster and compile to byte code.

    - Swing, SWT, AWT, RCP, SAF, Java2D and now JavaFX - I would like to see Sun come up with some guides and a unification plan.

    I believe JavaFX is needed and very cool.  Just wait to see what people do with it.'
  replies: []
- id: 6701
  author: Stephan Schmidt
  date: '2007-05-15T07:46:38'
  content: 'As people pointed out: The problem with Java in the Browser is not Swing but "Deployment, Deployment, Deployment". Should I throw a chair now?

    Write a plugin for Java, which downloads &lt; 1 min. Slim the JRE down (using a semantic packer, removing stuff etc.). Put it into Firefox and make it easy for IE users to install. Have some nice demos with effects. Make a very simple and nice download/install page, which is not distorted by marketing.

    Why oh why haven''t you done that for years Sun?

    ps: Tried to download a JCP this morning. Didn''t work with the Sun download manager and Webstart, failed on certificates, took too long etc. With the direct download link it took &lt; 5 seconds. Q.E.D.'
  replies: []
- id: 6702
  author: Chui
  date: '2007-05-16T01:55:08'
  content: 'I wished F3 was conceived firstly as a Simula-like language, not as a GUI layout language. It would have made animation a first class construct, instead of just being part of the asynchronous framework.

    I''ve added more on my blog.'
  replies: []
- id: 6703
  author: witches_hammer
  date: '2007-05-20T12:54:05'
  content: 'don''t like it?

    don''t use it.

    ''nuff said.'
  replies: []
- id: 6704
  author: li mika
  date: '2007-05-23T18:23:42'
  content: 'Guys,

    I''m keen to know does JavaFX only runs on JavaME CDC profile for now? What about CLDC? Anyone has done in-depth evaluation to enlighten me?

    Many thanks

    mika li

    http://mobiko.blogs.com'
  replies: []
- id: 6705
  author: Michael Bushe
  date: '2007-05-26T07:25:06'
  content: 'Groovy stinks!  It''s the most awful thing ever invented!  I read th FAQ on Groovy and I didn''t understand something!  How does it relate to SWT?  There''s no plan for it, it''s useless!  I didn''t even bother looking through the reference docs, tutorials, wicked cool demos because I could tell at a glance that it''s not FooGooLoo.  There must be a Groovy conspiracy - they CLAIM they give it away, but there''s no free lunch.

    JavaFX is very, very cool.  Swing is hard, JavaFX makes Swing easier.  Sun is whole-hog on the deployment end, it''s far better than it used to be  (I must run at least  WebStart demo a day and NEVER have a problem).  JavaFX has it''s place - it''s not meant to be the next general purpose scripting language, so don''t bother wishing that it was.  It''s for pumping out GUIs.  Swing is in nearly every browser, just like Flash, and it autoupdates, just like Flash, so when the quicker starting applet stuff comes out, it will come out fast, just like Flex did, and we will see a resurgence of applets on web pages.  JavaFX will be a super-nice way of making those applets.

    There is no free lunch - but there''s free software, how about that!'
  replies: []
- id: 6706
  author: Michael Bushe
  date: '2007-05-26T07:58:27'
  content: 'Wow.  You are really off base:

    "But breaking the year long no-Java-mention embargo on his blog by introducing JavaFX is a sad reminder that Sun does, indeed, care very little about Java."

    Jonathan Schwartz mentioned Java 76 times in 54 blog posts over the past 12 months:

    May 27th - 2 times

    May 31st - 7 times

    Jul 25 - 3 times

    Aug 17 - 3 times

    Oct 4 - once

    Oct 23  - once

    Nov  8 - 8 times

    Nov 13 - 12 times

    Nov 28  - once

    Dec 9  - once

    Jan 14 - 4 times, Intel partnership optimizing Java on intel

    May 4 - twice

    May 8 - 30+ times

    May 15 - 3 times

    Yes, there was a 3 month quiet period before JavaOne, which is to be expected, you save up your good stuff for when it''s most relevant.

    Coming from the position of "Leader of the Java World" to CEO, I''m surprised he didn''t try to shed the "I''m really a nerdy developer" image that one COULD put on him (no one does).

    How important is Java to Sun?  Read the posts.  For example, on May 4th, when Jonathon was discussing the most recent revenue numbers, he mentioned a new large OEM Java Licensee and 200,000 more uses added to the Java Enterprise System.'
  replies: []
- id: 6707
  author: Rick O'Shay
  date: '2007-08-25T10:35:20'
  content: 'I found the FAQ clear and concise and the rationale for not using Groovy was particularly well communicated. JavaFX Script is an effective, efficient presentation generator. JavaFX Mobile (Linux with integrated Java mobile plus JavaFX Script) has amazing potential. I din''t see anything useful in criticism, rather that you''re confused.

    As others pointed out, it''s the deployment issues and the smooth integration with web browsers that present the real problem. That''s a JVM and Swing configuration and integration issue. If they fix that, JavaFX will really take off.'
  replies: []
- id: 6708
  author: Emmanuel
  date: '2007-10-11T06:44:30'
  content: I think that the number one issue with JavaFX is that you have to learn yet another language, and with little gain. There's a number of existing languages out there that can do what JavaFX does, why having to learn something else? This new language is ugly (you can get lost in the brackets a la LISP) and the metaphor is quite different from Java, which means a big learning curve for Java programmers. I wish I could be more constructive in my comments. But the more I think about it the less I see how this can be good for Sun.
  replies: []
- id: 6709
  author: Rintoul
  date: '2007-10-12T16:03:00'
  content: Don't care about Java...?  Very strange thought considering that they just changed their ticker symbol... Those FOOLS!
  replies: []
- id: 6710
  author: jianwu
  date: '2007-10-23T20:39:12'
  content: Bad decision to create another language. Groovy is attractive to Java developers. Sun should do good support of groovy in their IDE. But it's very sad, Sun did very good support for that instead it did good support for ruby which i don't think most of Java develop will like as it's too different from java.
  replies: []
- id: 6711
  author: David Lloyd
  date: '2007-12-26T18:53:27'
  content: 'I''ve been an Eclipse and Netbeans user for a number of years; initially it appeared that Eclipse was the better platform - for speed, features and stability - however Netbeans 5.0 and greater address stabilit, Netbeans 6.0 addresses features and my Intel Quad Core E6600 addresses speed...

    Whilst I like Eclipse, I find Netbeans has been the better of the development environments for Java (even though Netbeans is still measurably slower than Eclipse). Eclipse used to be, for me and my conditions, the best PHP development environment but now Netbeans 6.0''s PHP environment rivals that of Eclipse and has certain advantages for people who don''t use Linux, Windows or OS X [Solaris is my desktop].

    Just about the only language that I use Eclipse for now is Perl and LISP.

    In addition, on my platform of choice, Eclipse is just wonky and liable to collapse; very configurable, very good and horrendously unstable. Netbeans has, from version 4.0 for me, always just worked.

    So, for me, Netbeans is the better development environment and I just wished they''d support Perl more.

    As for JavaFX being difficult for Java users to understand, it could be that I am a linguist at heart (I studied German, French, Italian and study Hebrew, Middle Egyptian and Old English) and that I am fluent in numerous programming languages, including LISP, Pascal, C, C++, Java, Groovy and Scala. The only type I''m missing is the PROLOG type languages (I still can''t quite get my head around them).

    That said, I really can''t see how JavaFX is so different from Java that a fluent Java coder couldn''t understand it. It''s true it can have a maze of opening and ending brackets but I''d prefer that to Python''s confounded blocks by indentation paradigm. Besides, one has an IDE, or emacs or vi.

    If your coding environment doesn''t support your coding in basic ways, maybe you should think about finding one that does rather than attempting to make the language take the blame?

    As for static typing, I''m used to both worlds. I''m happy as mud with Perl and understand the dangers of dynamic typing and I''m happy as mud with Java which has to be one of the most statically typed language I''ve come across.

    They both have advantages and disadvantages, but wouldn''t a classical Java programmer be more used to static typing?

    Now, as for the comments about Ruby, JRuby and such...Sun state that the Ruby community has been more approachable and responsive than the Groovy community. Let''s assume that this is true: there''s two groups, one responsive and the other at best disinterested, who you say, "Let''s spend some time integrating this stuff together.". It''s only logical that the responsive group gets in first...

    So let''s think a little on this:

    JavaFX isn''t difficult to understand, it''s not difficult to program if you''re a Java programmer, and given that it compiles to the JVM it can probably work with Groovy classes as well...

    Heh!'
  replies: []
- id: 6712
  author: Exil
  date: '2008-01-09T13:57:11'
  content: Microsoft created a whole new language for it's .NET  platform in C# as a reaction to Java.  Perhaps Sun is taking a note from this marketing decision to create hype around JavaFX as a RIA.  Will it work?  Probably not.  There really is no need for another language here as there was in MS land. Groovy or waterd down Java could have done the trick. JavaFX is ugly and hard to read....has nothing to do with  java other than being a wrapper around Swing.  They'll pull this product before the next Java One.  It was a "Trial balloon"...hence the meager investment in its development.
  replies: []
- id: 6713
  author: ionee
  date: '2008-02-08T00:25:11'
  content: 'Want to share first community portal for people who are interested on JavaFX technologies. (www.javafxworld.net)

    Here you can Post your own blog , video or tutorial and rate others post.

    This can make a good community of contributers on JavaFX technologies.

    It offers following features.

    * Share, Discuss, Rate, Tell to friend, Comment any JavaFX post

    * Add any article related to JavaFX on  del.icio.us,,digg, reddit,,facebook, yahoo  bookmarks.

    * Subscribe to Latest news on JavaFX - Delivered daily .

    * You can make a group of friends who are working on JavaFX

    * Get the Latest Books on JavaFX

    * JavaFX Demos, tutorials, books, JavaFX articles, video blogs, JavaFX news and More ..'
  replies: []
- id: 6714
  author: mishela
  date: '2008-03-12T07:43:27'
  content: no, you don't need Netbeans IDE to run JavaFX.. there is JavaFXPad available and I can say it is very important to make programs in it :)
  replies: []
- id: 6715
  author: mishelka
  date: '2008-03-12T07:50:11'
  content: no, you really don't need Netbeans IDE to run JavaFX. JavaFXPad is sufficient for programming.. And I can say that it is very interesting :)
  replies: []
- id: 6716
  author: wellofsouls
  date: '2008-04-18T05:34:47'
  content: huh? what does &lt;> have anything to do with Eiffel? okay we know you hate Eiffel, but at least say something relevant to Eiffel if you want to bash it out of nowhere. &lt;> is the inequality sign in BASIC. And BASIC rocks. lol.
  replies: []
- id: 6717
  author: jim
  date: '2008-05-01T13:51:53'
  content: '"""as nothing to do with java other than being a wrapper around Swing"""

    no...

    JavaFX is a wrapper around the java platform.

    """ There really is no need for another language here as there was in MS land."""

    no...

    Do you want learn and use SilverLight? "I don''t"'
  replies: []
- id: 6718
  author: Fernando Cassia
  date: '2008-05-11T21:32:49'
  content: '" it''s yet another language with its new syntax and rules. For example, the symbol for inequality is... &lt;>. That''s right, &lt;>! I''m guessing the creator of JavaFX likes Eiffel. Too bad the rest of the world hates it."

    Well, gee, I learned to program with BASIC as a kid, and you know what? the symbol for inequality in BASIC is... &lt;>

    IF STRING$ &lt;> "Whatever" THEN PRINT "BLEAH!"

    I can see how that appeal to most of the people who learned to program with Basic.'
  replies: []
- id: 6719
  author: reeb
  date: '2008-06-12T03:43:54'
  content: 'JavaFX ? it''s shit !

    Tutorials : null

    Docs : null

    Components : null

    Graphics : null

    Sun : Older men using pc in their garage

    Marketing : null

    JavaFX = nullPointerException

    Flex/Flash Adobe ... beautiful :) good :) marvellous :) .. I like it :)'
  replies: []
- id: 6720
  author: bruce
  date: '2008-07-16T17:25:55'
  content: Perhaps one of the best things JavaFX has going for it is a lack of marketing hype.  After all that's what really killed applets.
  replies: []
- id: 6721
  author: mschouten
  date: '2008-09-02T10:22:11'
  content: 'I had an attempt starting with JavaFX it looked very promising. The functionality of it is what I''m seeking. But....the documentation I was able to find was only about showing off the graphical features. Which is good but ventually I want to build a user interface with it. Didnt'' see those tutorials. So, at the moment to me it sucks and I refuse to be a guinea pig eeh I mean early adaptor. However I won''t disgard it. Maybe it needs a couple of versions before it matures to what I need.

    But ultimately I don''t have the desire to learn yet another language. I need a declarative solution like XAML/WPF. (Contruct once, render everywhere)'
  replies: []
- id: 6722
  author: ''
  date: '2008-09-02T10:22:25'
  content: 'I had an attempt starting with JavaFX it looked very promising. The functionality of it is what I''m seeking. But....the documentation I was able to find was only about showing off the graphical features. Which is good but ventually I want to build a user interface with it. Didnt'' see those tutorials. So, at the moment to me it sucks and I refuse to be a guinea pig eeh I mean early adaptor. However I won''t disgard it. Maybe it needs a couple of versions before it matures to what I need.

    But ultimately I don''t have the desire to learn yet another language. I need a declarative solution like XAML/WPF. (Contruct once, render everywhere)  I'
  replies: []
- id: 6723
  author: commenter
  date: '2009-05-13T09:28:06'
  content: 'As both Eric and Ilya Sterin have pointed out, Sun is putting the cart before the horse.  It''s all about deployment, deployment, DEPLOYMENT!

    Even if the technology is in the beta stages at the very least make the deployment as seamless or transparent to the user as possible.  This is something that both Adobe and Microsoft have figured out early and quickly.  But for some reason Sun seems to have it''s head so far up it''s butt it doesn''t seem to realize it will not succeed on the desktop market if it''s deployment is anything but straightforward. Security prompt dialogs?  5-10 minute downloads for a 800kb webstart demo? 5 years ago this would have been acceptable but come on Sun you keep hyping up these technologies yet you consistently fail to deliver.

    Is it incompetence?  Arrogance?  Lack of Vision? Or maybe it''s just lack of good leadership where sun has now inevitably slid into the abyss?  It''s 2009 now and Sun has been bought out by Oracle.  I would of prefered IBM but something tells me that at the very least Oracle won''t hype but actually implement technologies they are committed too whatever they may be.'
  replies: []
- id: 6724
  author: Commenter
  date: '2009-09-18T09:49:57'
  content: 'You guys need to stop smoking that crack pipe.  I''d like to quote bruce:

    "Perhaps one of the best things JavaFX has going for it is a lack of marketing hype. After all that''s what really killed applets."

    Ironicly that may actually end up helping JavaFX from repeating the Hyped up Applet disappointment.  But seriously Everyone is comparing JavaFX in terms of "Oh it has awesome graphics." or "Yeah that WebStart Demo could only do 33 FPS.".  Lets Tread back a bit and do a breather.  Ask yourself a honest question, really ask yourself "How smooth and easy was it to actually start the Java Web Start Demos?".  Now Java Web Start may start seamlessly on your ultra GigaBit lan with High Capacity Cisco Switches. But on someones 1.5 mbps connection "broad band" don''t be surprised if there JavaFX web start experience is laughably bad.  Again it all starts with Deployment issues and the browser plugin.  Don''t just make it work, make the damn thing EXCEL!  If you wanna compete against the big boys like Adobe or even Silver Light make your plugin so easy to install, so smooth, so fast that you''ll have some startup seriously consider using JavaFX as the next YouTube.  Until Then I see no chance
    of JavaFX having any noticable impact in the RIA market.  If the guys at Sun were truly strategic they would of bought out the guys who created CURL.  Curl in my opinion actually trumps Flash in terms of blinding raw speed and power.  Demos start up in less than a 1 second.  And I''m talking about highly complex, graphically rich, multi-threaded applications.  Take a look at www.curl.com and judge for yourself.  NO DAMN FLUFF, JUST STUFF.'
  replies: []
- id: 6725
  author: Commenter
  date: '2009-09-18T11:17:40'
  content: '"*their JavaFX web start experience is laughably bad". Apologies for misplaced words in the wrong context and irregular captalization.  But I''m so angry with JavaFX being the misfocus of whats wrong with Java on the desktop, it''s affecting my typing skills.'
  replies: []
- id: 6726
  author: olle
  date: '2009-11-25T13:24:09'
  content: javafx is a joke .. how can Sun do mistakes like this??  ..I wish springsource owned Java ..
  replies: []
- id: 6727
  author: ''
  date: '2009-12-24T06:24:37'
  content: Eclipse plugin is not enought to develop javaFX easyly :(
  replies: []
---

I'm trying to understand what [JavaFX](https://openjfx.dev.java.net/), which Sun just announced at JavaOne, is about. So far as I understand, it's a scripting language designed to make it easier to create user interfaces. Okay, fine, but it's still a bit vague, so I turned to the FAQ, and in particular, to two questions that were the most relevant to me: 

> **Why do I need the JavaFX Script? Isn't Swing good enough?**   
>    
>  There's nothing wrong with Swing. Swing is one of the best GUI development toolkits of its kind. Swing makes it very easy to create standard GUI components, buttons, listboxes, trees, and tables. Together with Java 2D, Swing makes it easy to customize existing components or to create new custom components to achieve virtually any desired visual effect. Sun is not replacing Swing with JavaFX; instead, JavaFX Script makes Swing much easier to use. With the new JavaFX Script language, the structure of the programmer's code closely matches the actual layout of the GUI, making it tangibly easier to understand and maintain. 

Ugh... Well, can I have a real answer now? Isn't Swing good enough? There is absolutely no explanation why they are inventing another layer (or is it a new UI? I still don't know at this point, despite reading the FAQ twice now). 

No answer? 

Alright then, let's turn to the second question that's burning in my mind: 

> **Why isn't Groovy enough?**   
>    
>  Groovy and other languages have two specific traits which don't precisely meet these needs, namely that they are generic in nature and don't provide the appropriate abstractions necessary to optimize the UI design process and similarly are designed specifically for programmers other than content authors. 

Are you kidding me? "Generic in nature"? What does this even mean? Do these people even know about Groovy? Or about the SwingBuilder and other MOP-inspired constructs that you can use in Groovy to make the declarative/imperative impedance mismatch all but disappear? 

If you're going to explain why you didn't pick Groovy in an FAQ, there are plenty of reasonable justifications you can come up with (memory footprint, dependencies, etc...). But... *that*?!? Come on. 

Looking at the [examples](https://openjfx.dev.java.net/Getting_Started_With_JavaFX.html) further, I see code snippets that are actually a severely crippled version of what Groovy can do. JavaFX appears to have some scripting abilities but it's yet another language with its new syntax and rules. For example, the symbol for inequality is... `<>`. That's right, `<>`! I'm guessing the creator of JavaFX likes Eiffel. Too bad the rest of the world hates it. 

By the way, can we have full code completion, code browsing and folding in our IDE for this new language? 

More than frustrated by the FAQ, I turn my attention to the [demos and tutorials](https://openjfx.dev.java.net/Getting_Started_With_JavaFX.html) and I start to read. And here is the kicker: 

> Before you begin, you must install the following software on your computer:   
>  * NetBeans IDE 5.5 (download)   
>  * JavaFX Script plugin for the NetBeans IDE 5.5 (download instructions) 

That's right: you need NetBeans to run JavaFX. 

And suddenly, it all makes sense. 

Desperate to get developers to adopt NetBeans, Sun has found another way to try and lure them: invent another framework, come up with a few reasons to justify its existence and in the tutorial, mention in passing that you have to download NetBeans to even write a Hello World example. 

Look, Sun: JavaFX is a simple library. A jar file. A bunch of class files. I'll be happy to add `javafx.jar` on my class path and import `javafx.ui.*` (although... it's a highly non-standard import name. Did you forget the convention that you helped define?... How about `org.javafx`?). 

But tell me again: why are you forcing me to use NetBeans? 

Sun needs to understand that we, Java developers, are not satisfied with just using an open source version of Java: we hate proprietary lock-in. We want choice. And we want Sun to respect the choices that we made to write our Java code and acknowledge that not everyone (actually, very few of us) are using NetBeans. 

The timing of this announcement is quite interesting actually, since I was telling a friend just this morning that I was sad to see that despite his active blogging, Jonathan Schwartz never *ever* says anything about Java. Most of his blog posts are about Sun strategy and marketing material, and it's been obvious to me that Java stopped being Sun's priority a long time ago. This morning, I fire up my trusted Google Reader and I see that Jonathan is talking about Java! Not that this comes as a surprise: this is, after all, JavaOne week. 

But breaking the year long no-Java-mention embargo on his blog by [introducing JavaFX](http://blogs.sun.com/jonathan/entry/when_not_where) is a sad reminder that Sun does, indeed, care very little about Java.
