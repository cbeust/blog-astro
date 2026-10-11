---
title: NetBeans Day
date: '2005-06-27T09:16:31'
slug: netbeans-day
categories:
- Java
comments:
- id: 3808
  author: Romain Guy
  date: '2005-06-27T09:53:51'
  content: 'Wow, it''s very rare to see so biased posts on blogs. Just dismissing every feature just because it''s NetBeans is not being honest. Take for instance what you say about the profiler. Sure OptimizeIt and JProfiler do the same... oh but wait! NetBeans'' profiler is free and open source. As for Matisse I guess you missed my demo during the ending keynote where I showed the build of a real working application. As for code binding there was no point in showing it since it''s just a new layout manager. This means the code binding works as it always worked in NetBeans.

    Anyway, no need to argue here, you made your mind already and I''m sure I cannot convince you anyway just because I''m Sun (hint: I use Eclipse everyday but I loved the new fatures of NetBeans presented yesterday).'
  replies: []
- id: 3809
  author: Marc Logemann
  date: '2005-06-27T10:24:31'
  content: 'have to agree with Romain Guy regarding the profiler. I would love to have a profiler integrated into IntelliJ. Of course it wont be as good as JProfiler, but it would be better than nothing and it would be free of charge.

    regarding layout manager. I would like to see one included in the J2SE which feels like TableLayout from JGoodies. I dont think anyone on this planet uses GridbagLayout these days, just too horrable.

    BTW, why cant i use the word "c_h_e_a_p" in the comment. Got: "Your comment could not be submitted due to questionable content: xxxx". This is really a lousy implementation of a trashtalk filter.'
  replies: []
- id: 3810
  author: Dr. X
  date: '2005-06-27T10:30:58'
  content: 'Small note: the global Java searches you are missing ("all places where this method is overridden", etc.) can be done through the NetBeans "Find usages" functionality.'
  replies: []
- id: 3811
  author: Sumit
  date: '2005-06-27T10:55:20'
  content: First time I have seen someone prepared to question Matisse. Everyone else just seems to be picking up the hype and passing it along. More frustratingly, all mention of it seems to be along the lines of "It's so cool". No discussion of how exactly it is cool. I am not quite an expert in Swing. I occasionally develop Swing GUIs, always by hand because they're not maintainable otherwise. Yes, I've seen the demo, but I can't put my finger on why it's cool. It seems evolutionary rather than revolutionary. Maybe it helps get GUIs right the first time, but how readable or maintainable is it outside of the GUI builder?
  replies: []
- id: 3812
  author: Stephane
  date: '2005-06-27T13:30:53'
  content: 'Very good points, Cedric.

    I''d like indeed people blogging about NetBeans to show where it shines rather than to make noise all over the place telling us it support splitted windows...  (oh, and if they could avoid bashing IBM people, that would add credibility)

    Romain..about Netbeans Profiler, you''re going a bit too far into the ''opensource'' thing. To quote the website: "Currently, the profiler.netbeans.org website only contains web content for the project,licensed under Sun Public License (SPL). The profiler module, visualgc module, as well as the JFluid engine, the modified JVM and jvmstat libraries are only available in binary form under Sun Binary Code License (BCL)."

    This is not exactly ''opensource'' to me...and it has a major platform flaw..it is made to work for NetBeans only AFAIK.'
  replies: []
- id: 3813
  author: vbb
  date: '2005-06-27T14:37:44'
  content: 'Stephane is right. NetBeans Profiler is not (yet ??)available in open source as the J2ME module and the visualgc module.

    But Stephan is wrong when he said the modified JVM is only available as BCL.

    Because you can profile your application running on a unmodified JRE 5.0_4 and Mustang JRE. And sourcecode of Tiger and Mustang are available, and not only under BCL Licence.'
  replies: []
- id: 3814
  author: eu
  date: '2005-06-27T17:36:58'
  content: 'Right, license for VisualGC and JFluid is explicitly prohibit to integrate those tools with 3rd party apps. That was the reason why I didn''t publish VisualGC plugin for Eclipse.

    By the way, Cedric, did you just disabled talkbacks?'
  replies: []
- id: 3815
  author: Roman Strobl
  date: '2005-06-27T19:19:33'
  content: Cedric, I'd like to thank you for your comments on the NetBeans day. I'm the guy who was doing the terrible editor demo. I believe the demo was useful for some of the people who didn't know the features I was talking about, at least that what some people told me. Again, thank you your for negative feedback, I know what things to do better if I'll do a demo next time. Roman
  replies: []
- id: 3816
  author: arogy
  date: '2005-06-27T20:07:33'
  content: Never been to that demo but for cryin out loud could you please at least mention the names of the netbeans presenter of the demo! you were able to remember(? maybe prepared) and discuss the loooong laundry list of negative things at length but never able to at least research or remember their names! Hmmmm... something smells here you know... and could you please come down to your high horse a little bit.
  replies: []
- id: 3817
  author: ''
  date: '2005-06-28T01:27:59'
  content: 'Concerning subversion you can find the profile there : http://vcsgeneric.netbeans.org/profiles/index.html

    "Find usages" command is quite new but very usefull.

    Finally, junit is also supported .'
  replies: []
- id: 3818
  author: FxK (Xcalia)
  date: '2005-06-28T05:22:41'
  content: 'FYI, concerning collaboration on Intellij IDEA i usually use IDE Talk plugin(http://www.idetalk.com/).

    It allows you to :

    .send messages

    .view opened files

    .share stacktrace

    .send code pointer'
  replies: []
---

I attended NetBeans Day yesterday, which started with a presentation on Looking Glass. Of course, Looking Glass has nothing to do with NetBeans and it was merely a way for Sun to showcase their technology, even though Hideya did mention NetBeans for twenty seconds at the beginning of his presentation ("we use NetBeans for development"). 

Looking Glass looks as good now as it did one year ago, and just as useless. I thought by now we had established that 3D desktops are very hard to use on a 2D screen, but it's a lesson Sun just doesn't seem to want to learn. What really worries me is that I didn't even see anything new compared to last year, but the most troubling part was that even the demo person was sometimes confused during the show, picking the wrong titlebar or looking for his own windows. 

Don't get me wrong: Looking Glass is a good technology and I hope Sun keeps working on it, but please don't try to sell it as the Next Big Thing in desktops and usability, because it's neither of these. 

Rick Ross was next, and after his usual diatribe on how big JavaLobby (the name, not just the Web site) is, he proceeded on giving his usual presentation on communities and how important IDE's are. 

Next came Jonathan Schwartz, unshaved and unprepared, but winging it with ease. I am a bit tired of his propaganda spiel but I have to give him credit: he always looks and sounds good on stage, so it's always entertaining to listen to him as long as you can wade through the Sun party line hammering. 

And finally, the NetBeans demo started. 

The first twenty minutes were spent demonstrating the editor, with features such as "turning all words to uppercase and back to lower case with just three keys" and "extracting a method" or "splitting an editor". The entire demo was just a painful rehash of every single feature that every IDE (or even text editors) on the planet already has. 

If you are trying to win over an entire crowd devoted to Eclipse and IDEA (which was pretty much the case based on the various questions and conversations around me as the NetBeans demo was unfolding), you need to do better than "we do the same as the competition". You need to show what you do different and what you do better. And of course, emphasize what you do that nobody else does (more on this below). 

You also need to show how using the IDE on a daily basis feels: how do you navigate through your sources? Through your projects? How do you locate a class? How fast do you solve compilation errors? How the windows and the GUI fits together, etc... 

The staging of the demo was also horrible: one person was manipulating and another one was talking. "So now we are going to talk about... _[look at the big screen]_ ... _[look at coworker, exchange a few hushed words]_ ah right! Code completion!". Do you really need to have two people on stage telling each other what to do? And I'll gloss over the fact that the speaker started the demo by asking how many people read his blog... Seriously. You can't find a better way to embarrass yourself in public (and a hint to the speaker: check your logs). 

Throughout the demo, the presenter was asked quite a few questions by the audience, and most of the time, he would just dismiss them and say "I don't know, I'm just the presenter, I didn't develop this thing". Well, if you can't answer the questions, you shouldn't be on stage in the first place and you are guaranteed that it's a frustrated crowed that will walk out of your presentation, not a wowed one. 

Next came a profiler demo (a lot of graphics but no real demonstration of solving a hard problem, and not much that I haven't seen in OptimizeIt or JProfiler). Followed by... a JXTA demo. Yes, seriously. JXTA. Now there's a differentiating factor, alright. You can be sure that nobody besides Sun will ever show this. 

But the real reason why I was there was for Matisse. 

I have worked with GUI builders since the early 90's (yes, you read that right, circa 1990) and by now, I have a pretty good idea on what makes a good builder. 

The demo was unfortunately very mundane: creation of a search dialog in a few clicks and drag and drops. The automatic line up and visual cues are nice, but the demo failed to address the real hard questions, which are: 

  * **What does the generated code look like?**. The audience asked several times for this and eventually, the demo person relented. The code looks pretty big but doesn't seem too bad.
  * **How tweakable is it?** Not surprisingly, the code has big warning comments saying "you shouldn't modify this or that portion". There is a very elegant way to generate code and still make it easy for users to add their own logic that won't be erased by reverse engineering: ask user to instantiate subclasses of the code you generate.
  * **What is the layout manager? Can it be changed?** It's called `NaturalLayoutManager`. It's not part of Swing, it's a brand new one, and they are talking to the Swing team to have it part of the JDK, which should happen in late 2006.
  * **Can you reuse your GUI's ?** This is by far the most ignored feature in GUI builders of all times, and the reason why they are so little used in general. Here is the deal: creating a nice GUI is just the beginning. Very often, I create windows with abstract methods and even abstract widgets in them. Then I want to be able to subclass them and alter them slightly ("I want the exact same UI but with a checkbox instead of a text field here"). Sometimes, I also want to build part of my GUI dynamically, and I can't do that in the builder because I don't know yet what widgets will be in this area. No builder has ever understood this problem and as a result, I have always ended up writing all my UI's by hand. You just can't take OO practices away from developers, they will hate you for that.
  * **How does code binding and reverse engineering work?** No idea on how Matisse works there, there was no demo on callbacks or code insertion.

There are also very important features that still don't seem to be implemented yet: JUnit plug-in, Subvsersion support and, more importantly, global search. This is a feature I couldn't do without, and I'm not just talking about text searches through a project, but also Java searches ("all places where this method is overridden", etc...). 

Now I have to say there is at least one thing that I liked in this entire presentation: the collaboration plug-in. With this, you can have one of your coworkers see what you are seeing and even take over your editing or compiling. This is very neat and I hope that Eclipse and IntelliJ will follow suit and implement it as well. 

But for all the rest, the demo was a very poor illustration of all the hard work the NetBeans team has been putting into their product this past year. They deserve much better.
