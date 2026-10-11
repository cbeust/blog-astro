---
title: Surveying the IDE landscape
date: '2006-02-10T08:55:25'
slug: surveying-the-ide-landscape
categories:
- Java
comments:
- id: 4835
  author: Sony Mathew
  date: '2006-02-10T11:11:23'
  content: I moved from Intelli-J to Eclipse about a year ago (more specifically WSAD/RAD only because it plays nice with Websphere).  It has not been the same. Eventhough it technically provides all the same features as Intelli-J - Eclipse just does everything in more a tedious, un-intuitive, and arrogant (Eclipse way only) fashion.  There is a reason why people are willing to pay money for Intelli-J.  if Eclipse were to cost even half as much as Intelli-J it would go the way of JBuilder.
  replies: []
- id: 4836
  author: ''
  date: '2006-02-10T11:41:09'
  content: F9... same key as JBuilder 3...
  replies: []
- id: 4837
  author: Anjan Bacchu
  date: '2006-02-10T13:11:16'
  content: 'hi cedric,

    Yeah :-( TurboPascal was my first IDE/dev environment.

    JBuilder was good upto say 1999 or early 2000. They did not innovate much -- when IDEA became popular in mid/late 2001, JBuilder compared badly against IDEA.

    JDeveloper (which has lineage with JBuilder) has  adopted a strategy of 3 different IDE

    a) base -- only java

    b) J2EE

    c) studio -- all the bells and whistles.

    JBuilder did not have a light enough IDE 5 years ago -- letting IDEA/Eclipse steal the market. I thought that acquiring Together/J would compensate for that -- but I guess it was overpriced for most developers/consultants.

    VA Software and others paid a good deal of money to MYSQL AB to opensource their software a while back. There still might be value to have their Together/J opensourced (what with opensource Eclipse/Netbeans and free JDeveloper).

    Anyone want to acquire these artifacts ? Since Oracle is on a buying spree -- why not acquire Together/J ? If Oracle does indeed buy JBoss, integrating Together/J with Seam would make for a good case.

    BR,

    ~A'
  replies: []
- id: 4838
  author: MS
  date: '2006-02-10T13:22:16'
  content: 'Eclipse is pretty much amatuer hour.  Anyone who cares about quality tools, and dare I say it...writing quality code productively, will have no problem shelling out a few bones for IDEA.  The personal license is now a permanent feature so anyone can pick it up for $250 now.  If that''s too much for spending on your chosen profession, then you need to seriously rethink what you do for a living.

    And the worst thing JetBrains could do is to move in any way towards the eclipse platform.  The eclipse platform is one of the main reasons that eclipse will never be as good as IDEA.'
  replies: []
- id: 4839
  author: Sony Mathew
  date: '2006-02-10T13:28:28'
  content: MS - Good points - especially the last one.  I hope they never adopt the Eclipse platform.
  replies: []
- id: 4840
  author: Jason Carreira
  date: '2006-02-10T13:33:52'
  content: Amen to MS's comments. Eclipse focuses on building a reusable platform to build any kind of tool... IDEA focuses on building a high quality tool for development. The different focuses become apparent to me when I try to use Eclipse and see how it's not really a seamless environment, it's a bunch of plugins welded together that don't quite fit nicely.
  replies: []
- id: 4841
  author: Dmitry Jemerov
  date: '2006-02-10T13:55:11'
  content: 'Cedric,

    Moving to the Eclipse platform would essentially mean for us dropping the entire product and rewriting it from scratch. We definitely do not have any plans to do so in the coming year, and I don''t think that it will ever happen at all.

    Also, a very significant part of the user experience is determined by the platform, so delivering a really great experience requires complete control over all levels of the environment.

    Dmitry (IntelliJ IDEA developer)'
  replies: []
- id: 4842
  author: Eric Burke
  date: '2006-02-10T15:00:35'
  content: 'Today I was coding, hit the code completion key sequence, and my IDE actually completed a text String. Not a variable or method name...it actually extracted a snippet of text from inside a SQL query a few lines earlier, and correctly inferred the text for my code completion. Simply amazing.

    Guess if this was Eclipse or IDEA. :-)'
  replies: []
- id: 4843
  author: Glen Stampoultzis
  date: '2006-02-10T15:22:44'
  content: Ahh turbo pascal.  I also used this at school and later dabbled a bit with Delphi.  Memories.  Borland you had something good going and screwed it all up.
  replies: []
- id: 4844
  author: Cedric
  date: '2006-02-10T15:44:39'
  content: 'Dmitry,

    Rewriting the IDE represents work, but it''s not unheard of.  BEA and Borland did it, I have no doubt that the talented JetBrains engineers could pull it off easily.

    And after that, it would make it so easy for you guys to plan the IDE of the future instead of being bogged down trying to match the low-level functionalities already offered by hundreds of Eclipse plug-ins (Java ME, Subversion, Perforce, etc...).

    Just a thought.'
  replies: []
- id: 4845
  author: Rob
  date: '2006-02-10T18:41:45'
  content: Cedric, have you ever compared the Idea subversion support to Subclipse? My personal feeling is that Idea's is pretty close to perfect. I certainly wouldn't be too happy to see it replaced with Subclipse!
  replies: []
- id: 4846
  author: Rob
  date: '2006-02-10T18:44:28'
  content: Cedric, have you ever compared the Idea subversion support to Subclipse? My personal feeling is that Idea's is pretty close to perfect. I certainly wouldn't be too happy to see it replaced with Subclipse!
  replies: []
- id: 4847
  author: t800t8
  date: '2006-02-10T21:33:40'
  content: 'Cedric,

    Borland ports JBuilder to Eclipse, now they want to sell it (as a part of IDE product lines) and focus on ALM product lines and middleware.

    JetBrains ports IDEA to Eclipse, and ..... what will they do without IDEA? ;-)'
  replies: []
- id: 4848
  author: eclipsero
  date: '2006-02-10T23:12:48'
  content: 'The Eclipse-framework is *the* industry-standard now. If you don''t use the Eclipse-framework you will die. Do you want to be death or alive? IDEA''s team is clever and intellijent enough to do the right thing: they won''t die!'
  replies: []
- id: 4849
  author: eclipsero
  date: '2006-02-10T23:37:44'
  content: 'Just one additional note:

    my company primarily uses Java and PHP. But some of our customers are using Microsoft''s .NET-framework. You may love it or hate it but with the backup of Microsoft  .NET is here  to stay and will play an important role now and in future. VS.NET  is rather expensive. Refactoring-tools for VS.NET demand the aquisition of a professionell or even enterprise-version of VS.NET.

    We would love to have a .NET-IDE based on Eclipse. IDEA produces some .NET-tools itself like ReSharpe. So IDEA has some knowledge about .NET-technology. IDEA please use your knowledge to make a decent C#-IDE! Build your next-generation Java-IDE on top of the Eclipse-framework and combine it with a decent C#/ASP.NET-IDE. That could be a great business opportunity for IDEA. There are a lots of companies using both Java and .NET. I hope that IDEA continues its business and does the Right Thing (TM).'
  replies: []
- id: 4850
  author: Mircea Crisan
  date: '2006-02-11T00:34:54'
  content: There is no point in debating which IDE is the best. This is a matter of personal taste and preferences. I use XDevelop (former Codeguide). I did not even bother looking at other IDEs (Eclipse, IDEA, Netbeans), although I know they have more features and nice things. Why? The IDE I use does it's job. Also I do not have time and I am not willing to learn another set of shortcuts for a different IDE.
  replies: []
- id: 4851
  author: Geert Bevin
  date: '2006-02-11T07:36:50'
  content: 'I''ve been using X-develop (http://www.omnicore.com) and previously CodeGuide for years. Initially I worked with Visual SlickEdit and IntelliJ IDEA. Only a couple of months ago I decided to take the time and evaluate Eclipse, IDEA and NetBeans again. I honestly took several weeks to force myself to use each IDE and learn how it should be used properly. After a number of weeks, I still felt that my productivity was a lot worse than before and that I spent a lot of time to try to make the IDE got out of my way. I decided to switch back to X-develop and now really know why I use it. It''s not the most wizzbang IDE in terms of feature count and support for XYZ. What is does extremely well is being an awesome catalyzer for writing code. It never gets in your way and its features like instant project-wide error analysis and inspections, back-in-time debugging, awesome debugging UI with expression evaluator and mouse-over value display, sensible visual refactoring, JUnit integration,
    subversion integration, .... etc cripple my coding productivity so much that any kind of plugin for the other IDEs doesn''t make up for it.

    Even though it''s a commercial product, I almost gain its price back in a couple of days of work, and then I''m not even talking about the frustration reduction.  Give it an honest try, you might be surprised at the direction it takes and how lean and mean it is.'
  replies: []
- id: 4852
  author: Geert Bevin
  date: '2006-02-11T08:10:05'
  content: I also forgot to mention that X-develop is fast ... and by that I really mean extremely fast. This is another 'hidden' feature, but once you start to really use the IDE you notice (or rather never notice) how fast it is and how good it stays out of your way so that you can concentrate on coding, not on what to do while the IDE is processing things.
  replies: []
- id: 4853
  author: Marcus Brito
  date: '2006-02-11T08:41:06'
  content: '> (imagine a world where IDEA would give you instant

    > feedback on compilation errors...  mmmh).

    Eh? IDEA does that for at least three years. All compilations errors are instantly marked red in your code. And, as magic as it may be, it does that without actually compiling your code.

    Now, if you''re talking about -project wide- errors, shown in a single panel (something like the "Problems" view in eclipse), that''s planned for the next version.'
  replies: []
- id: 4854
  author: Rob Harwood
  date: '2006-02-11T08:47:07'
  content: 'There is almost 0% chance that IDEA will ever become based on Eclipse. And you may be surprised to hear the actual reason: It would require that the IDEA developers give up their favourite tool. You simply *could not* reproduce IDEA on Eclipse. You would be forever frustrated that it didn''t do things the way you expect or are familiar with. You see, it is exactly those ''low level'' features that make IDEA so much more usable than Eclipse. Unless JetBrains had complete freedom to modify Eclipse''s IDE architecture, which will never happen, then there would be no motivation for them to move over to Eclipse. They would view the choice as: Continue working on our great tool while having the pleasure of using it to do the development; or, begin working on developing an inferior tool while experiencing constant frustration at using an inferior tool to do the development.

    The strategy that might work is to develop separate products for Eclipse or NetBeans while continuing development of IntelliJ IDEA. Instead of making one big leap, they could find one small niche after another and try to grow those niches over a couple of years. When finally IDEA reaches end of life, it can fade out gracefully and JetBrains will survive on these newly developed product lines.'
  replies: []
- id: 4855
  author: Frank Bolander
  date: '2006-02-11T09:14:41'
  content: 'The problem I see with having Eclipse as the main platform for all these vendors is that we will see "plugin hell". In order to use XYZ Corp''s Eclipse-based product, you have to install it this way. With ABC corp''s product, this way -- and so on and so forth. WTP has been an example of this plugin hell. Beehive is another.

    I think we''re all going to end up with multiple installs of Eclipse for every tool and I don''t see the advantage of that scenario. Maybe a common L&F but that''s it.'
  replies: []
- id: 4856
  author: Cedric
  date: '2006-02-11T12:03:33'
  content: 'Rob, can you be more specific?

    For all intents and purposes, an RCP application is a Java application.  You can configure it do whatever you please, so I really see no reason why it wouldn''t be possible to have an IDEA-looking IDE based on the RCP.

    You would lose the Swing Look and Feel, but that''s about it.'
  replies: []
- id: 4857
  author: Cedric
  date: '2006-02-11T12:05:58'
  content: 'Frank,

    So far, the "plug-in hell" you describe has not materialized, and considering the average number of plug-ins that each user has on their Eclipse installation *and* the number of Eclipse users, it looks like it never will.

    Personally, I have never had any failure of that type, and Eclipse''s plug-in architecture makes that very unlikely anyway.

    And by the way, this is thanks to OSGi, not really Eclipse per-se.'
  replies: []
- id: 4858
  author: Jon Tirsen
  date: '2006-02-11T20:46:08'
  content: 'I remember reading a Joel on Software essay on the Excel team and how they even had their own C compiler. They consistently delivered higher quality and on schedule compared to the rest of the Microsoft Office teams.

    Great developers require complete control of their environment. Although having your own C compiler is absurd these days, I still don''t think it''s a very good strategy for IDEA to outsource one of their most critical value propositions: That snappy, clean, intuitive GUI Eclipse probably never will be able to replicate.'
  replies: []
- id: 4859
  author: Cedric
  date: '2006-02-11T20:51:16'
  content: '> I still don''t think it''s a very good

    > strategy for IDEA to outsource one of

    > their most critical value propositions:

    > That snappy, clean, intuitive GUI

    > Eclipse probably never will be

    > able to replicate.

    I really don''t see why not.

    Like you say, the strength of IDEA is the way it interacts with the user (keybindings, concepts, window layout, etc...), not the implementation.  Implementing editors and views is a commodity these days, it''s the number one thing that you should outsource at the first opportunity you get so you can focus on what really matters.

    --

    Cedric'
  replies: []
- id: 4860
  author: KB
  date: '2006-02-11T22:19:25'
  content: 'Has it crossed anyone''s mind that when you build an IDE based on Eclipse and try to sell it, you''re putting yourself in competition with Eclipse?  Yet if you want to create a decent user experience, you''re going to need to do exactly that.  That''s not a winning strategy.

    JBuilder is a case study in what happens when you crawl into bed with Eclipse, and JetBrains would be well advised to stay very clear of it.'
  replies: []
- id: 4861
  author: Shai
  date: '2006-02-12T05:53:39'
  content: 'Eclipse reinvented the wheel in order to create a platform that in some aspects is years behind the standard. So yes RCP is not a part of Java, but there were other RCP like platforms (such as the netbeans platform).

    As evidence look at Netbeans. 3.5 was terrible, Eclipse was already gaining momentum with considerably more developers than Sun placed onto NB. Yet within 2 years Sun has caught up in almost every feature and exceeded Eclipse in other features. A good example would be the ages it took for Eclipse to fully support Tiger language features (NB supported it when the VM was released). Using Eclipse platform would mean doom for both Netbeans and IDEA they would get thrown back to the time when you had to reinvent things and work using low level API''s that don''t even garbage collect for you.

    Why look at Netbeans, look at IDEA... An IDE people are paying for when Eclipse is free despite all the "open source masses" that "contribute code" to Eclipse it still isn''t on par with IDEA and on some features with Netbeans. So please don''t let the facts confuse you ;)'
  replies: []
- id: 4862
  author: Mocky
  date: '2006-02-12T06:29:24'
  content: To think that IDEA would consider moving to the Eclipse platform is to misunderstand how IDEA diferentiates itself. If all you consider is feature count then you won't be able to explain the success of either Eclipse or IDEA. Eclipse isn't successful because it is a great IDE, the reason is because of the quality of the platform. And this is the front Eclispe is contantly pushing. IDEA does not retain market share because of it's feature list, or it's Swing look, or because of it's nice API. IDEA's success has always been based on having the best user experience or workflow for writing java code. Eclipse can put little lightbulbs next to things that can be automatically "fixed" and it's a really nice "feature" but where did they get the idea from? It (like so many others) came from the people who are 100% focused on java coding productivity. That focus shows itself in the IDEA product in ways that paying developers can see, but feature checklists don't do it justice.
  replies: []
- id: 4863
  author: Erik
  date: '2006-02-12T10:07:45'
  content: 'Though I''m using Eclipse for many years now and am quite happy with it (I tried NB 5.0 in the last few days and wasn''t convinced, even if it has nice features like the profiler; I didn''t really take time to evaluate IntelliJ - maybe I''ll have a look at it soon, that many enthusiasts can''t be wrong...), I wouldn''t like it to become the common base of "all" IDE''s.

    Why? I think diversity is good. I think competition is stimulating. Even if Cedric''s argument that reinventing the wheel ("low level layers") is a waste of time seems to make sense at first sight, I tend to think that you sometimes have to reinvent things from the very beginning in order to be able to explore new ways that you would never have thought of in the corset of a preexisting architecture.

    Maybe Eclipse''s architecture is indefinitively extendable, maybe it will collapse under its own weight sometimes (I have no reason to believe this or that - though I feel Eclipse to be quite "heavyweight" every now and then) but in any case I wouldn''t like it to become the MS Windows of the IDE world...

    Erik'
  replies: []
- id: 4864
  author: ''
  date: '2006-02-13T07:25:50'
  content: 'Hehe, really funny these IDE fights.

    Just use what you like.

    Borland was one of start members of Eclipse. Ok, they never really contributed stuff or stuff AFAIR.'
  replies: []
- id: 4865
  author: n
  date: '2006-02-13T07:34:13'
  content: I'm an Eclipse user and I love Eclipse, but even then, I wouldn't want IDEA to be based on Eclipse.  From what I know about IDEA (having used older versions and heard things recently), it just wouldn't be the same in Eclipse.  The developers may be brilliant, but making such a huge shift would reduce the quality as the developers had to adjust to a new environment.  Just the change from Swing to SWT would be enough of a pain.  I'd rather they stick with what they have and keep putting out a quality product.  Even though I use Eclipse and am happy with it (it meets my needs), I'm glad that Netbeans and IDEA exist and aren't just Eclipse plugins.  I may use IDEA (or Netbeans) someday...
  replies: []
- id: 4866
  author: Bill Kress
  date: '2006-02-13T12:00:15'
  content: 'This has got to be one of the oldest arguments in computer history.  I imagine there were similar arguments for tape vs those giant wired switchboard looking panels I used to play with at my mom''s office.

    I too am sad to see Borland go, even though it has never been a tool that gave you much over notepad/command line.

    I hope that IDEA keeps competing with Eclipse, it forces both products to improve.  I also really hope NetBeans can catch up--there are some great concepts behind NetBeans that you just can''t see through that slow, clunky interface (the GUI builder beats the others since it uses straight java--someone here used that horrid IDEA gui builder and it''s caused nothing but trouble).

    They all have interesting aspects and I''m glad they are different.  I''ve got all three installed.  I think it''s silly to use IDEA when Eclipse is thousands less for my company and only marginally better (we have a license for 5, but just hired 10 more people who aren''t experienced in IDEA--worse case for them).

    Anyway, interesting concept Cedric--keep ''em coming.'
  replies: []
- id: 4867
  author: Stephan Schmidt
  date: '2006-02-14T02:13:43'
  content: 'As consulting work, I''m forced to use Eclipse instead of IDEA with some customers. This IDE is so much less usable than IDEA which lowers drastically the productivity of all programmers involved.  Our internal work or my open source projects are done with IDEA and we''re much more productive.

    The only feature of Eclipse I miss in IDEA are the small warnings in the treeview that there are errors in some source files.

    "And the worst thing JetBrains could do is to move in any way towards the eclipse platform. The eclipse platform is one of the main reasons that eclipse will never be as good as IDEA."

    Totally ack.'
  replies: []
- id: 4868
  author: Bruno Patini Furtado
  date: '2006-02-14T07:49:02'
  content: Turbo Pascal was bought from Anders Hejlsberg by Borland who
  replies: []
- id: 4869
  author: ''
  date: '2006-02-16T00:44:58'
  content: 'As consulting work, I''m forced to use IntelliJ instead of Eclipse with some customers. This IDE is so much less usable than IDEA which lowers drastically the productivity of all programmers involved. Our internal work or my open source projects are done with Eclipse and we''re much more productive.

    The only feature of IntelliJ I miss in Eclipse are the well thought through keybindings.

    "And the worst thing Eclipse.org could do is to move in any way towards the IDEA platform. The IDEA platform is one of the main reasons that IntelliJ will never be as good as Eclipse."

    Totally ack.

    Sorry, Sorry, Sorry,

    but I _couldn''t_ resist

    :D'
  replies: []
- id: 4870
  author: Allen Halsey
  date: '2006-02-16T13:01:34'
  content: 'Cedric,

    Why are you always trying to stifle the growth of the last commercial IDE vendor by casting doom and gloom forecasts on them.

    You admit IDEA had been innovate and delivers a renowned user experience. You must realise that your beloved Eclipse would be worse off for lack of IDEA''s example. You should be thankful for and supportive of IDEA''s continued success -- its example will improve Eclipse.

    It seems to be more than just your loyality to the IDE that you have already invested the time in learning. You seem resentful of IDEA''s success and want it to die.

    What exactly is your motive?

    BTW, Eclipse''s plugin strategy, long thought to be its big advantage over IDEA, is now receiving a lot of criticism for resulting in a incoherent mishmash of a user experience. Eclipse seems to have forgotton that the ''I'' in IDE is for Integrated. See this recent discussion:

    http://weblogs.java.net/blog/flozano/archive/2006/02/what_happened_t.html

    Allen Halsey'
  replies: []
- id: 4871
  author: Infernoz
  date: '2006-02-18T07:18:45'
  content: 'I whole heartedly agree with you about "the ''I'' in IDE is for Integrated", I''ve tried many IDE (listed below) but found them all inferior, in some annoying way, to JBuilder, which makes most stuff fluid and easy to do, even some hard stuff, you really see the attention good GUI designers, despite some flaws in Swing.

    JDeveloper (has run profiles, but no IDE import filters, seems feature bare)

    IDEA 5 (lacks run profiles, build nodes (not ANT), it has JBuilder project import which annoyingly misses too much to be useful for my projects (support didn''t get it when contacted), seems less easy to use, not enough source control choice, but not as bad as other IDEs), I can see why it costs less than JBuilder, but only a little and too expensive for what you get.

    Java Beans 5 (lacks too much from JBuilder, not enough useful and free plugins, but looks better than eclipse and has some great sounding features, not as good as IDEA though).

    Eclipse (sorry, but it is an unintegrated mess, better than it was yes, but counter intuitive, too much need for plugins which should be intergrated functionality.  I also hate the idea of sub-standard Swing support and having to use SWT for extensions, IMHO SWT is just wrong.'
  replies: []
- id: 4872
  author: Infernoz
  date: '2006-02-18T08:57:07'
  content: 'Correction

    The JDeveloper comments refer to  X-develop by Omnicore.

    JDeveloper is an adaption of a cut-down old version of JBuilder by Oracle, with an alien menu interface, IMHO it is inferior to the original JBuilder it was based on.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/turbo-pascal.gif)

Like many others, I feel some sadness hearing that [Borland is getting out of the IDE business](http://blogs.borland.com/davidi/archive/2006/02/08/23013.aspx).

It doesn't come as a big surprise:  even though JBuilder took an early lead in the IDE space many years ago, it was never able to keep up with the crazy innovation pace that Eclipse and IDEA imposed.

After Basic and Assembly Language (6502 all the way, baby), Pascal was the first language I was exposed to in computer science classes, and sure enough, our tool of choice was Turbo Pascal (and also a compiler called "pc" on our UNIX systems).

Turbo Pascal was so amazingly fast that it baffled even our teachers.  One key press (what was it... F4?) and hundreds of line got crunched into tight 8086 code in seconds.  I also remember that the screen displayed how many lines of code per second it compiled -- a nice touch that added to the speed racing feeling of the experience.  They cut a lot of corners to have such a fast compiler (e.g. dying at the first error), but it worked beautifully and their tool was instrumental in bootstrapping the software revolution as we know it today.

A page is turned.

Fast forward to the present.

What does this mean to us today?

Well...  not much.  Borland's decision to move to Eclipse further validates the importance of the Eclipse platform, especially since even IDEA is making shy moves in this direction as well, as illustrated by their [recent support for the Eclipse compiler](http://www.jetbrains.net/jira/browse/IDEADEV-3373) (imagine a world where IDEA would give you instant feedback on compilation errors...  mmmh).

Despite being the only commercial IDE left, IDEA is showing more resilience than ever and JetBrains certainly deserves heaps of credit for being able to sell a product in the face of such high quality free competition. 

But I have to say I'm not optimistic on their ability (or anyone's ability) to maintain a business in these conditions.

I am betting that in the coming year, IDEA will move toward the Eclipse platform more aggressively and use it as the foundation of their new efforts.  This will have the benefit of allowing the brilliant JetBrains engineers to stop worrying about implementing the low-level layers of their platform, benefit from the fantastic Eclipse plug-in API and finally, let them focus on what we, developers, really care about:  a top-notch programming environment using the concepts, the look and feel and the user experience that have made IDEA the roaring success it is today.
