---
title: 'SWT/JFace:  the story of a success'
date: '2005-05-25T21:56:15'
slug: swtjface-the-story-of-a-success
categories:
- Java
comments:
- id: 3671
  author: Stephan Schmidt
  date: '2005-05-26T00:36:06'
  content: 'Sorry that I have completly different experiences with SWT. Working on a Eclipse PDE/SWT project for some months, just some of my experiences with SWT (I use SWT short for SWT/JFace/RCP)

    - The quality for Macos X is still non-production. So SWT is definetly not cross plattform.

    - SWT is buggy (e.g. Table sorting doesn''t work on Macos X)

    - SWT  does not look native as often claimed. Just using Macos X buttons does not make an application look native. Some widgets are are non native but emulated for example the Combo box with an edit field. There is a bug which moves the text outside the widget to the left btw. which is hard to explain to a customer.

    - The SWT API is not intuitive. Button(SWT.PUSH) for Buttons and Button(SWT.CHECK) for CheckBoxes, a completly different widget, with getSelection() for SWT.PUSH(?). This is clearly driven not by API usability but forced by the "we do it native" approach.

    - Wizards do not have the event types for entering and leaving pages which makes it difficult to preserve state if a user uses next/back/next ...

    - SWT is not as customizable as Swing which makes it difficult if the customer has a clear GUI and usability vision

    - Eclipse is a usability nightmare ( Refactorings appear in the editor but not in the TreeView )

    - The documentation is sparse. Most examples just do the simple things. There is no documentation for more advanced things ( advanced Wizards ) using google, eclipse.org/articles and looking in 7 books on SWT. ( Java2s.com often saved the day with a good, but sparsly commented, example ). The API documentation is often bad ("SWT.DROP_DOWN - Style constant for drop down menu/list behavior" oh, who would have guessed, but what is the difference to SWT.READ_ONLY?)

    Oh, I''d rather use Swing again ( and hopefully parts of Swing RCP ) than Eclipse/PDE in my next project. I''d also suggest using JGoodies (FormLayout and Binding) and Glazed lists.

    - What Swing clearly misses are easy to use factory methods for tables, trees etc which generate 80% of the widgets with a default model to make Swing easier to learn and more productive.'
  replies: []
- id: 3672
  author: Koen
  date: '2005-05-26T00:58:25'
  content: Did you look at Spring-RCP already? There's not yet a release available but IMO it's definitely a timesaver even in it's current state.
  replies: []
- id: 3673
  author: Rich
  date: '2005-05-26T01:45:46'
  content: 'I''ve tried programming in Swing and SWT, and have been able to produce things in both, but it''s always been quite slow to achieve.

    And then I found Thinlets (www.thinlet.com) - most of the time it''s all you need for a rich-ish client-side app. The GUI layout is done in XML, and in my first evening I managed to produce a GUI that would have taken me a lot longer in either Swing or SWT, with or without a GUI designer. It seems pretty responsive too. But it''s not as capable as Swing/SWT (not much in the way of customisation).'
  replies: []
- id: 3674
  author: Stephan Schmidt
  date: '2005-05-26T01:51:38'
  content: '@Koen: I also think it''s not ready and rumored to be dead, but I also think it''s definetly a time saver even it''s curent state.

    I hope it''s not dead because it could be an alternative for frustrated SWT users.

    s/Swing RCP/Spring RCP/ of course in my last post.

    @Rich: Yes, it really depends on what a customer wants and needs.'
  replies: []
- id: 3675
  author: Marc Logemann
  date: '2005-05-26T02:04:25'
  content: 'I dont see SWT (i also mean everything inside it as JFace etc.) such a big success story. First of all, the coding feels like MFC coding. All this constants makes you feel programming C and not Java. Back when i tested SWT (2 years ago) it was simply a nightmare regarding tables and trees, Swing was far more capable in these areas. DOnt know if this improved in JFace by the time.

    I am using JGoodies for at least 1 1/2 years now and with the help of its very nice layout manager and sample skeleton apps, you can create quite nice looking GUIs in a human timerange. The binding is also very well thought out but can be quite complex. Dont know how SWT approaches the binding issue.

    But to be fair, plain Swing is indeed a little bit hard to use and a black hole regarding how long you need to do things. But i dont think SWT is much better there. If people would spend the same time in inventing usable RCPs (Spring RCP is not yet an alternative and i doubt it will finish anytime soon) instead of the 56th MVC web framework, the world look better today. Compared to C#, VB or Delphi, java is a little bit behind in the GUI topic.

    BTW, a uniform tray mechnasim is hard to imagine without breaking "write once run anywhere".'
  replies: []
- id: 3676
  author: Gabriel
  date: '2005-05-26T02:23:11'
  content: '(Just one thing: the JGoodies link is broken: it is www.jgoodies.com)'
  replies: []
- id: 3677
  author: Hani Suleiman
  date: '2005-05-26T02:50:37'
  content: 'I agree with the swt naysayers. I''ve yet to get a decent user experience with swt on OSX. It''s clunky, slow, and looks way less native than swing does.

    I''d also argue against the claim that it''s such a roaring success. Sure, some projects use it, but it''s mere drops in the ocean of swing apps. One could also argue that if you''re going to use it as a helper lib, why not be fair to swing and use some helper libs there too? You can combine the jgoodies binding framework and a dialog builder to write a preferences api view with nothing more than one line per pref and maybe 3 lines of boilerplate to declare the prefs adapter and set up the dialog.

    I''d even argue that eclipse is hampered by its choice of swt. Swing just seems to get better and better and has a lot of interest, whereas swt seems to cripple eclipse''s adoption at this point.'
  replies: []
- id: 3678
  author: Patrick Schriner
  date: '2005-05-26T03:03:06'
  content: '@Marc: That Sun is unable to make pragmatic decision such as: We need system tray support, no matter what... is quite decisive.

    If you want to be able to do any UI, you would choose Swing. If you want a (sanely) limited UI, you can choose SWT/JFace as well.

    I think Swing is similar to Flash in that every developer wants to do his own UI - which is in general not a good idea.'
  replies: []
- id: 3679
  author: Stephan Schmidt
  date: '2005-05-26T03:35:34'
  content: '@hani: Exactly, I think SWT limits Eclipse. There are a lot of bugs to fix in SWT which binds development resources. Just take a look at the thounds of open bugs concerning SWT in the Eclipse bugzilla.

    @Marc: "Dont know how SWT approaches the binding issue." SWT does not know that there is a binding issue, which nevertheless exists for SWT.'
  replies: []
- id: 3680
  author: Joseph Ottinger
  date: '2005-05-26T04:12:26'
  content: System tray support, huh? Where's the system tray? I have three systems here... ONE has a "system tray" to use in Swing. If Java is meant to be cross-platform, how is it going to support a system tray on an OS and rendering environment where such a construct doesn't exist?
  replies: []
- id: 3681
  author: Lars Neidhold
  date: '2005-05-26T05:45:23'
  content: '@Joseph: If theres no system tray to work with, Java just needs to implement one. No big deal.

    scnr'
  replies: []
- id: 3682
  author: Dion Almaer
  date: '2005-05-26T07:22:18'
  content: 'I think Swing has got a laboured bad rap.

    These days it is actually quite solid (and getting better all the time as Hani and others say).

    Swing needs a layer to take care of the MVC stuff, and importantly all of the threading for you. With a nice clean architecture layer on top, everyone doesn''t have to be a Swing guru to get their work done.

    There is a place for both Swing and SWT, but the FUD that SWT is the only choice is wrong.

    Dion'
  replies: []
- id: 3683
  author: Scott Delap
  date: '2005-05-26T08:18:13'
  content: In response to your first point about binding ... the Rich client community seems to finally be getting the idea of binding existing data to widgets instead of copying things around Spring Rich, JGoodies Binding, and JDNC all providing binding libraries to wire existing domain objects to Swing components.  There is also a port of the JGoodies Binding library to SWT.
  replies: []
- id: 3684
  author: Mark
  date: '2005-05-26T10:38:42'
  content: '@Marc:  Compared to C#, VB or Delphi, java is a little bit behind in the GUI topic.

    Swing is a joy to use compared to VB (Other than tossing a few controls on a form and clicking run).  I''ve not used Delphi, but it does use alot of the same things VB does.  And C# GUIs?  Not alot of difference.'
  replies: []
- id: 3685
  author: Sumit
  date: '2005-05-26T11:36:30'
  content: Man, Cedric, just one comment of support, that too a plug for an unfinished RCP? Where's the success?
  replies: []
- id: 3686
  author: Glen Smith
  date: '2005-05-26T14:43:13'
  content: 'Since I''m the guy linked at the start, I''ve gotta add my $0.02. I''ve never really understood the rabid support for Swing, but if that''s your bag, go on writing your Swing apps. Why would it even bug you if other people are doing different "non Swing" stuff? What''s with the insecurity?

    For me, claiming that Swing has *any* sort of platform fidelity on non-Mac platforms is, well, ridiculous. And then with each new OS version that problem is exacerbated. Who knows how bad Swing is going to look on Longhorn, and you''ll have to wait another 18 months to get a version that "sorta" looks a bit native - except that a lot of users will tell you that it looks a little funny. For mine, SWT is *the* only way to solve that problem. Don''t emulate components - use the ones provided! Swing was always a dead in the water for look and feel.

    As for the API, I absolutely love SWT and JFace. I''m the rabid fan over the fence. I find the API incredibly intuitive - but maybe that''s because I''ve worked with C apis for Win32, so some things just make sense. The big win for me, however, is consistent and sensibly method names. I can do most stuff from autocomplete - while in Swing I spend most of my time working out what kind of Model derivitive I need to wrap that data that I wanted to put in this Combo. As for the billions of bugs, well, I''ve hit a few minor cosmetic ones (that had workarounds), and the next version fixed them (which I didn''t have to wait 18 months for).

    If you''re into Swing, power to you. Get busy writing your next killer Swing app (I won''t stop you), and let the rest of the SWT/JFace world get busy writing theirs. And  while you''re at it stop crapping on about how native, fast, and superior all your Swing apps are "these days" compared to SWT and develop something that''ll actually make my jaw drop. Till then, I''ll keep hacking away on my little JFace app and I''ll be loving every second of it.'
  replies: []
- id: 3687
  author: Alexander Staubo
  date: '2005-05-26T17:12:17'
  content: 'SWT isn''t really ready for the Mac yet. One should not evaluate SWT on the basis of its Mac implementation. The GTK implementation is not up to scratch, either; it has long suffered due to GTK performance problems -- some profiling efforts show that certain graphics operations are many, many times slower than Win32 counterparts. Not necessarily GTK''s fault, but certainly proof that each porting target requires careful customization.

    There''s work being done, but there does not seem to be as much work as is needed; SWT is, as a cross-platform UI toolkit, still not in balance. But these shortcomings do in no way undermine the general concept of a cross-platform UI toolkit based on native widgets. It''s possible. It just takes a lot of effort.

    A lot of effort went into creating Swing, too. And Swing will require infinite additional maintenance effort in order to stay up to date with the look and feel of GUIs. Many people criticizing the effort needed to implement fully native widgets with SWT forgets that Swing constantly needs to play catch-up, and always will do. The current Windows L&F emulation is flawed and neither looks or feels anything like Windows; when Longhorn comes along, Swing must be updated. When GTK/GNOME changes, Swing must be updated. And so on. GUIs constantly evolve.

    SWT only needs to stay up to date with new APIs and native widgets; it will automatically assume the new features or look/feel of existing widgets. Let the GUI/OS developers concentrate on actually implementing the GUI, and leverage *their* effort.

    As Glen Smith points out, Swing users are incredibly touchy and defensive about SWT, which they seem to see as intruding on their territory. The Swing vs. SWT debate is a matter of personal philosophy: I won''t touch Swing with a ten-foot barge pole because it''s not native -- it doesn''t look, or feel, anything like a native app under Windows, which happens to be one of the most popular OSes around. Swing may work fine on OS X, but then I would exclude a huge number of users, including myself.

    In short, we choose SWT because we *demand* nativeness. And so, apparently, do a lot of other developers and end users. People *want* apps to integrate with their OS'' theme system. People *want* to run WindowBlinds. People want their OS''s screen reader support to work with their apps. People want tray icon support. People want native file and print dialogs!

    As for the SWT classes, I happen to like them a lot. They''re simple and pragmatic. Just because there''s a style bitmask instead of a dozen set/get() methods doesn''t mean it''s "C-like"; it''s just a more compact, pragmatic way of representing a bunch of getters and setters. Oh, and the MVC classes are beautiful.'
  replies: []
- id: 3688
  author: Stephan Schmidt
  date: '2005-05-27T01:08:37'
  content: '@Glen: "native, fast, and superior all your Swing apps are "these days" compared to SWT and develop" perhaps you we''re reading a different comment thread, because noone claimed this in this thread. Classical SWT strawman attack.

    @Alexander:

    " People *want* apps to integrate with their OS'' theme system. People *want* to run WindowBlinds."

    - 99.99% of users don''t even know what WindowBlinds are.

    - Well, Firefox is very native. Ahh. But that doesn''t prevent my mum, my sister and my girl friend to use them. Oh, and Amazon ist also not native. And millions of people use it without problems. There is no proof that that native means usability. And, well, the PDE doesn''t look a bit native, the rest of Eclipse doesn''t look native either.'
  replies: []
- id: 3689
  author: Romain Guy
  date: '2005-05-27T01:19:11'
  content: I truly never seen a user complaining about an app. not looking native. I only saw developers complaining about this. Seriously as Stephan says, native doesn't mean usable. A well designed UI, while not looking native, might perform much better than a native one.
  replies: []
- id: 3690
  author: Romain Guy
  date: '2005-05-27T01:59:17'
  content: 'Seriously guys, if you love SWT/JFace, that''s fine, just say it. But please stop serving us this @#! argument of "native look". See, I hate SWT API. I have nothing against the toolkit itself, it''s just I''m not at ease when programming with it. For instance I love QT and hate wxWidgets, just because of the API.

    So, if you prefer it over Swing, ok, say it. Say you get better performances without extra work, say you don''t need to struggle with the EDT or with a complex architecture. Say you prefer the default look.

    But don''t say the native look matters that much. Eclipse sure doesn''t look native if you don''t ask it to use the R21 theme. I have also yet to see an SWT application with native looking tabs.

    Come on, we all use non-native apps everyday. Photoshop? Non-native look. Office 2003? Non-native look. Almost every media player (Windows Media Player, PowerDVD, WinDVD, Winamp, iTunes...)? Non-native look. Acrobat Reader? Same thing. Visual Studio.NET? Same thing. MSN Messenger? You know the answer. Trillian or ICQ? Non-native look. Ad-aware? Same thing. ZoneAlarm (which is a simple firewall)? Non-native look. The applications shipped with my digital camera (Canon)? Non-native look. Any GNOME app on KDE? Non-native. Any KDE app on GNOME? Non-native. Firefox on OSX? Non-native. SAP R/3 client? Non-native look! Almost every single 3D modelling/rendering software? Sure not native. Creative sound boards applications? Non-native.

    Shall I go on? In this (short) list I even quoted tools that average users launch every day. It''s time we all get it: we are used to have different looking application and most of use don''t care as long as the application gets the job done efficiently.

    So give us clever comparisons why you prefer SWT over Swing. Enlighten us instead of using this silly argument @]#! Alexander got it right for instance when he said "People want their OS''s screen reader support to work with their apps". This is one of my woes with Swing: I cannot use Babylon Pro (a translator) with Swing apps because it cannot reads the text of the components.

    Neither Swing or SWT are miracle tools: you won''t get an effective UI for free.'
  replies: []
- id: 3691
  author: murphee
  date: '2005-05-27T06:25:46'
  content: '@Romain:

    I agree with you that a perfectly native-looking LnF isn''t important, every OS provider keeps on ignoring their own GUI LnF (MS with MS Office apps, Apple with their brushed metal fancy,...).

    One problem I have with the Swing LnF is the "F", the Feel; the FileOpen dialog, for instance, doesn''t have AutoComplete... it looks like the native one, but it doesn''t feel like it, and in the case of AutoComplete, it''s really annoying.

    I don''t particularly like SWTs use of constants for everything, but then I get lots of support for all kinds of things and high level widgets for free. With the RCP, I create a project, slap the GUI together with the VisualEditor (so I don''t have to look at too much SWT code), and export the app... and I''m done. The RCP gives me a model to hook in plugins, a model to easily organize menus,... and everything, and it has high level tools (in Eclipse) that allow me to use these so I don''t have to slog through documentation or read the source code (like with the Netbeans RCP). Hell... using gcj I can even compile the Eclipse RCP app to native code without problems and run the code on free JVMs (if I fancy doing that).

    Tools support, high level widgets (JFace), RCP, and free availability of the GUI toolkit are reasons for using SWT/JFace. That last item is actually quite nice; SWT opponents cite the "large quantity of bugs"... wherever they get that from; the upside of SWT is this: these bugs keep on getting fixed,  and I can get a new version of SWT and bundle it with an app much faster, than with Swing, where I have to conform to the 18+ month Java release cycle; just look at the "gray rect"-bug that was recently fixed in Mustang... when can I get a production JRE with that fix? In late 2006/early 2007... Great...

    OK... let''s just say: Swing has it''s uses,  SWT/JFace has it''s uses... everyone should decide on their own what to use. (The funniest arguments of this debate always come from SWT opponents, who keep claiming that they''re somehow forced by some obscure entity to use SWT... I don''t who says such a thing (except for marketers... but who listens to them anyway?), and I''m puzzled why anyone should even care about this...).

    Mind you: Sun hasn''t really been all to helpful in this case, especially with their recent Netbeans and Anti-SWT cruisade; I find this particularly disturbing as the providers of Eclipse and SWT *are on Suns side*, they''re using and promoting Java... constant sniping by Sun bloggers isn''t really professional and helpful.'
  replies: []
- id: 3692
  author: Alexander Staubo
  date: '2005-05-27T08:48:40'
  content: 'Romain, there are plenty of native apps (Photoshop, Office, etc.) that supply their own widgets. Some of those are patently crummy; Microsoft''s own HTML-like extensions to the Windows UI are a particularly egregious violation of good UI design. There''s a big difference between augmenting the existing widget set with your own, well-designed widgets that stick to native UI conventions, and going overboard with gaudy graphics, silly fonts and hypertext. Photoshop, for example, is quite conservative, even though many of its custom widgets (eg., dropdowns) clearly suck.

    You imply that the nativeness argument is a ruse, that I, and others, are really lying about our priorities. I have personally no reason to do this. Native look and feel is important to me as a user, and it has very little to do with what kinds of tabs you use -- SWT critics keep bringing up Eclipse''s tabs for some reason, but it''s missing the point.

    I insist that -- on Windows, at least -- Eclipse *does* look and feel native. It uses native fonts, native file dialogs, native spacing conventions, native menus, native dialog widgets, native drag and drop, native print dialogs, native mouse cursors, native carets, native file icons (in file-system browser views), native context menus (eg., edit fields) and so on. It feels distinctly native.

    The acid test would be to give Eclipse to someone who doesn''t know what it runs on. There are plenty of anecdotal evidence out there that people *have* been exposed to Eclipse and been surprised when told it''s Java. In fact, that probably the core component of people''s experience with RCP apps -- the "I can''t believe it''s Java!" effect.

    Let me boot up NetBeans. It uses non-native font rendering (no sub-pixel antialiasing on my LCD monitor -- it stands out like an eyesore with its pixelated fonts), non-native menus (which look and *feel* subtly different and alien, just like Mozilla used to do before Firefox went native), non-native file dialogs (try right-clicking on a file; where are the standard Windows selections? And it uses the "new" Windows XP browser, with the shortcut bar on the left, even though I have turned off this useless feature in Windows itself), non-native file icons, non-native dialog widgets (which ignore UI conventions -- try clicking on one of the ".." buttons next to a property -- why does it not depress like a button?), non-native mouse cursors (try dragging and dropping a file onto your desktop), non-native drag and drop (try dragging project files to the desktop, or from the desktop into a project -- doesn''t work! Why on earth not?), presumably non-native carets (hard to check) -- do I need
    to go on?

    In fact, about the only native thing in NetBeans is the print dialog. Kudos to Swing for actually using an OS service! The clipboard problem is particularly wild -- in Eclipse I can drag files from Explorer into Eclipse, and I can drag them out; and I can select and copy files and paste them anywhere in Windows.

    Swing has always used its own odd GUI rendering conventions, which look a little like ancient Unix GUIs. For example, in the project file list, the vertical spacing between files, the horizontal space between file names and icons, is like nothing else in Windows. Similarly, NetBeans uses its own tight little Windows 3.1-like tabs, which again looks like nothing else. Eclipse''s tabs don''t, either, but have the decency of mimicking Windows-standard spacing conventions. There are a host of tiny little subtleties that Eclipse gets right and Swing does not; Eclipse does it partly by using native widgets, partly by sticking to the conventions when they do emulate native widgets.

    Emulation is fine -- if it''s perfect. If Swing were a perfect emulation, then I wouldn''t mind using programs developed with it; but it certainly isn''t.'
  replies: []
- id: 3693
  author: Pavan Kumar Srinivasan
  date: '2005-05-27T09:18:50'
  content: 'I think the real power of Swing over SWT arises

    over flexibility and power that Swing provides

    in customizing components . This is obvious since

    most of the functionality is provided by the Swing Api whereas   the functionality in SWT is restricted by the Native Widget and hence cannot be customized completely.'
  replies: []
- id: 3694
  author: Romain Guy
  date: '2005-05-27T10:47:56'
  content: '@Alexander:

    "You imply that the nativeness argument is a ruse, that I, and others, are really lying about our priorities"

    I wouldn''t go as far as that :) I still think that native look is not the biggest priority. On the contrary, native feel is one. And you explain it very well when you talk about the completion in the file dialog for instance. It is very important we do not confuse the look and the feel.

    You used the example of NetBeans to prove Swing doesn''t look (nor feel for that matter :) native. But that''s my point: the look doesn''t really matter, the feel does. To be honest I never ever use Swing Windows look and feels in my application because they are so awkward. Thankfully, Joshua Marinacci seems pretty determined to change this and make these look and feels better than ever. Your criticism against the anti-aliased font is also one of my biggest woes against Swing. Thankfully, subpixel antialiasing is in Mustang.

    Now, I''m disappointed having to wait for 2006/2007 to get these improvements deployed.

    Despite Swing''s problems you can write well designed UIs with it. As I said before, SWT might be a better choice to get a decent UI without requiring too much effort but that doesn''t make it, to me, vastly superior to Swing. I agree that, for some applications, I''d be glad to get much better native-compliance feel but for some applications this just doesn''t matter. See this example: http://www.progx.org/users/Gfx/netvideo2.png (unfinished, hence the awkward details, like the scrollbar or the poor metaphors for the icons :) This is pure Swing and I don''t see any reason why I would have to bother with native compliance here.

    So really, before getting native look (and in some cases even before getting native feel), I''d prefer my applications to be let me perform my tasks efficiently. Take IntelliJ IDEA for instance. I''m using Eclipse as my primary IDE (for two reasons: subpixel antialiasing and Quick Fix :) and I decided to give IDEA a try. Well, I am angry because drag n'' drop works nowhere in the UI. I can''t move a file from one package to another with drag n'' drop. Eclipse can do this. And seriously, if you''d ask me to choose between a native looking/feeling file dialog and a UI providing drag n'' drop within itself, I''d go for the second option.

    And that is not a UI toolkit problem, it''s a designer/developer one.'
  replies: []
- id: 3695
  author: Dave
  date: '2005-05-27T13:34:33'
  content: Until Mustang is released, Swing can not be considered for serious desktop development.  Everybody has LCDs today and the fonts look like crap
  replies: []
- id: 3696
  author: Shawn
  date: '2005-05-30T23:04:59'
  content: SWING is tooooooooooooooooo slow
  replies: []
- id: 3697
  author: Thierry Janaudy
  date: '2005-05-31T06:12:42'
  content: 'Hello,

    If you are looking for a system tray, have a look at jdic.dev.java.net

    Specifically: https://jdic.dev.java.net/nonav/documentation/javadoc/0.9/org/jdesktop/jdic/tray/SystemTray.html

    You can also control browsers, use the default mailer, ... very nice stuff.

    I believe that this might be part of J2SE 6.0'
  replies: []
- id: 3698
  author: devantor
  date: '2006-05-06T10:02:22'
  content: Without Eclipse and SWT , I would have to drop Java. The only successful UI (appreciated by users) i`ve done, is using a WEB browser and a servlet app. Now, with SWT , I can write UI using a nice gridlayout. Looks at JOGL, same thing with SWT. Java should support great features like systemtray and drag*drop...The MAIN reason that Limewire is a nice java UI, isn't looks like an ugly/slow purple sWing app.
  replies: []
- id: 3699
  author: Ulrich Hobelmann
  date: '2007-01-12T05:01:44'
  content: '"Its non-Windows ports have been criticized for not being of the same quality as it is on Windows (this is something that has vastly improved these past months)."

    Let it be said, that even with Eclipse 3.2, SWT on the Mac still blows chunks (newest Eclipse release, newest Mac OS release to date).  Admittedly, even some Windows XP screenshots I''ve seen show me about five native widgets, and five non-native ones in the same picture (native ones being textfields, labels, scrollbars, and maybe tables to some degree (on the Mac they don''t work quite right)).

    And given that Eclipse is just as slow as NetBeans on my system, I don''t see why performance should be a point for SWT.  SWT is an extra download, we''ll have to see how well it''ll work with other platforms (WinFX, Mac/Intel), and most of the widgets I see in Eclispe don''t look native at all, on whatever platform I''ve seen.'
  replies: []
---

This [short post on the JPreference](http://blogs.bytecode.com.au/glen/2005/05/26/1117056271208.html) API of JFace sums up pretty well why SWT/JFace has been gaining so much momentum these past years to create Java user interfaces.

I have been using AWT (and later, Swing) since the very first days, and while I was fascinated by the idea of creating rich interfaces with my language of choice, it was hard to ignore their shortcoming.

First of all, performance took a long time to become acceptable, and even now when we have finally reached this point, the bottom line is still that it takes an awful lot of efforts and expertise to produce an interface in Swing that looks professional and feels native enough.

There are several reasons for this:

  * The MVC  model of Swing is a failure.  It's clever, reasonably-well designed, makes a few needed compromises with the original MVC idea, but it's simply not used.  Maybe it's a matter of education or lack of expertise from the developers, but I hardly see any code that actually adapts the widget models to their own domain objects.  Most of the code I have seen is a set of helper methods converting DAO's to the original models, defeating the separation of view and model.  
 
  * Swing is built on AWT, which was not designed to be extended.  Throughout the years, AWT has been retrofitted and patched to support various Swing requirements (does anyone remember the lightweight/heavyweight debate that took years to settle?) but at the end of the day, the pyramid feels cumbersome and shows very little advantages for developers.  
 
  * `GridBagLayout` is an absolute disaster and the perfect example of something that is completely flawed and violates with a stunning regularity the principle of least surprise.  Whatever layout you are trying to write, I am betting that you never reached it before a discouraging number of trials errors (I strongly recommend checking out [JGoodies](http://jgoodies.com) if you want some quality piece of Swing software, and I'll also take this advantage to give a quick shout out to Romain Guy, who has been proposing a lot of very creative Swing ideas on [his blog](http://www.jroller.com/page/gfx)).  
 
  * Despite its ambition and purpose, Swing is still lacking "real-world" widgets that would truly save developers valuable time.  The Preferences API above is just an example, but here is another:  wizards.  How come Swing doesn't have any?  I have written several Wizard classes already, and I'm sure I'm not the only one.  No wonder Swing applications still feel clunky and inconsistent.  Another example is the complete lack of integration with native operating systems (e.g. the system tray in Windows).  Sun is finally trying to fix this problem with JDIC, and it's about time.  And it's also way too late in my opinion (maybe we'll get it in Mustang).



[SWT/JFace](http://www.eclipse.org/swt/) addresses all of these concerns.

Granted, part of it comes from hindsight and learning from Swing's mistakes, but I have to admit my very profound respect for the OTI team, which created an amazing UI framework (of course, Eclipse and the RCP should be added to their credit as well).

SWT/JFace is really the API that doesn't get in the way of the developer and that lets you achieve amazing results in record time.

Are there any drawbacks to SWT/JFace?

A couple:

  * It is not part of the JDK, so you need an additional download.
  * Its non-Windows ports have been criticized for not being of the same quality as it is on Windows (this is something that has vastly improved these past months).



You basically have three options for your next GUI application:  SWT, SWT+JFace or RCP.  I have no doubt that at least one of these options will be the perfect match for your work, so be sure to evaluate each carefully before making a decision.
