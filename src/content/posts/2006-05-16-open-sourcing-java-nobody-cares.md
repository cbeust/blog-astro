---
title: 'Open sourcing Java:  nobody cares'
date: '2006-05-16T09:49:59'
slug: open-sourcing-java-nobody-cares
categories:
- Java
comments:
- id: 5351
  author: OJ
  date: '2006-05-16T11:11:23'
  content: '"Glove in hand"? That sounds like an OJ Simpson quote.'
  replies: []
- id: 5352
  author: Andrew GJ Fung
  date: '2006-05-16T11:25:49'
  content: 'Not that it necessarily has to be Java to an open source model, but at least freed up in some way so that the platform can be driven forward faster by people who have a large stake (i.e. revenue) in Java''s success.  e.g. BEA, IBM.

    No hard facts to quote, but I sometimes feel like the canon Java platform (JRE only) is moving so much slower than the .NET platform, featurewise.

    Proper properties (sugar tastes good!), LINQ, etc.

    The Java community does an awesome job for 3rd party libs, though.'
  replies: []
- id: 5353
  author: Bill Kress
  date: '2006-05-16T13:37:45'
  content: 'Andrew,

    I would not be terribly surprised to find my self severely corrected by this particularly knowledgeable crowd, but one of the things I like the most about Java is its stability and simple syntax.

    It is flexible enough to do nearly anything you want it to do in a very succinct, elegant language--so any additions have to be carefully considered.

    For instance, The for each and enum concepts were excellent little steps that are immediately readable and usable with virtually no training.

    On the other hand, I could absolutely do without templates.  I feel like they were added simply to quiet the hecklers saying "C++ and C# have something Java doesn''t"--and when you first look at templates, they don''t look too bad, simply add the correct class when you instantiate a collection and away you go.

    The problem is that Java''s natural beauty is that creating a class is as simple as using one.  This leads to MUCH MORE oo programming (by volume) than you will get in C++, simply because in C++ starting a new class is a bit of a pain in the ass.

    Creating a class using Java Templates, however, is like creating a C++ class--just a little too tough to be worth while.  Not only that, but what an unreadable mess--So I guess even Sun may be moving a little too quickly.

    I think a language should target readability only, and I really think Sun understands that and is doing a good job of controlling the language features.

    Some seem to think that saving a few keystrokes here or there is really helpful, that it makes them a better coder.  For you I suggest you learn keyboard macros.  Personally I think anyone who thinks faster than they type isn''t thinking enough.

    If you must have more "Gadgets" in the language, why aren''t you using a near-java language like aspectJ?  Must you modify the base Java language definition to get what you want?  Why?

    Thank you for an excellent post, Cedric.'
  replies: []
- id: 5354
  author: Nicolas Toper
  date: '2006-05-16T14:09:07'
  content: 'I just wanted to point out other JVM than the Sun''s one exist. Some are open source or with friendlier licenses.

    Sun opened from the start the specification of Java and the JVM. Anyone can create his JVM if he wants/needs to.

    Several open source and research projects have been launched since and some with success actually.

    Thanks for your excellent post Cedric

    Nicolas

    my blog -> http://www.deviant-abstraction.net'
  replies: []
- id: 5355
  author: Robert
  date: '2006-05-16T14:25:41'
  content: 'The news from JavaOne that Sun _will_ opensource Java is rather yawn-making material (despite the fact it hit the headlines at Slashdot). Jonathon Schwartz has been saying for ages that every piece of code Sun works on will eventually be open-sourced in some form.

    The JCP process allows for lots of contribution to the evolution of Java. Both IBM and BEA, for example, contribute towards the evolution of the JVM. Private individuals sit on JSRs for the language and the standard libraries. This process could be a little more transparent, perhaps, but it certainly isn''t closed.

    Personally, I think that OS fanatics just like picking on Sun. :)'
  replies: []
- id: 5356
  author: Andrew GJ Fung
  date: '2006-05-16T15:10:43'
  content: 'Apparently I hold a minority view here.  :)

    Bill: sorry to mislead you with the flippant sugar remark.  It isn''t about keystrokes.  My reasoning is that if everyone understands getX/setX to be a property, why can''t it be a first class notion like interfaces vs. pure virtual C++ classes?  Free up the mental energy.  I share your ambivalence about whether generics are worth the mental effort; I also feel the same about AspectJ.

    Perhaps not clear is that my concern is tangential from Cedric''s initial post.  I don''t really care about the implementation; it''s the Java spec.  I see many characteristics in the core .NET framework that aren''t in the core JRE that I get value from; existing and upcoming.  Vice-versa not as much.  Stuff like the usefulness of properties during reflection, or side-by-side execution, not IDE addressable issues.

    I can''t speak much of the JCP, how fast/well it works.  All I can do is observe that design by committee often moves slower and with more average results than more individualistic styles.

    Maybe it won''t be .NET, maybe it''ll be Python or Ruby.  I just wonder sometimes whether Sun, a company that doesn''t derive much revenue if Java is a great platform or not, is really the best company to be the ultimate determinant of Java''s direction and growth.  My notion was that an open source model would allow someone else with a greater incentive to drive Java even harder, although I assumed that "open source Java" meant the whole kit and caboodle, not just the implementation.'
  replies: []
- id: 5357
  author: Ray
  date: '2006-05-16T23:34:34'
  content: 'Maybe I''m missing something here, but excerpted from Java license:

    B. (blah blah blah) Sun grants you a

    non-exclusive, non-transferable, limited license without fees to reproduce and distribute the Software, (blah blah blah)

    So yes, we can bundle the JDK with our software. What''s the problem?'
  replies: []
- id: 5358
  author: Pascal Bleser
  date: '2006-05-17T00:18:31'
  content: 'Cedric, "opensourcing" Java is actually about licensing. And, as you point out, Sun''s license is awful. (Ray, have a good read at it)

    I really don''t think many people want the source code of Java to be able to modify it, it''s more about the freedom to built and possibly port it to platforms that are currently not supported by Sun and most of all: licensing. "Opensourcing" is more of a generic term in this context, i.e. to release it under a license that grants freedom of use and distribution as opensource projects do.

    That "zealotry" jab is pretty offending. Note that most Java developers don''t care about it because they don''t know what it involves, most are using Windows because it''s "free" (they didn''t pay for it, so it''s free, right ?), they never read Sun''s license and are just not aware of the whole point of opensource and Free software. And I''m not even sure most know what "vendor lock-in" means.

    Personally, I don''t care much whether the source code of the JVM is going to be opensourced or not, but I do care about the license.

    It is not very satisfactory to have huge opensource stacks (jboss, hibernate, spring, apache, mysql, postgresql, objectweb, ... ... ...) but relying on a JVM that''s neither opensource nor under a very friendly license.

    Sad to see you spit on a part of the opensource community like that.'
  replies: []
- id: 5359
  author: Dalibor Topic
  date: '2006-05-17T00:33:08'
  content: 'Neither the JVM nor the class library of the RI are open source. Yawn.

    cheers,

    dalibor topic'
  replies: []
- id: 5360
  author: Patrick Calahan
  date: '2006-05-17T01:03:31'
  content: 'In the keynote today, it was stated several times that open sourcing java is no longer a matter of "whether, but how."

    But when people scream for "open source", what I think they really want in most cases is transparent, viral deployment (per your point, Cedric, which is right on) and better process (JCP).

    Open source alone is not likely to fix that, and in fact it could make things worse (e.g., forking).'
  replies: []
- id: 5361
  author: Patrick Calahan
  date: '2006-05-17T01:04:04'
  content: 'In the keynote today, it was stated several times that open sourcing java is no longer a matter of "whether, but how."

    But when people scream for "open source", what I think they really want in most cases is transparent, viral deployment (per your point, Cedric, which is right on) and better process (JCP).

    Open source alone is not likely to fix that, and in fact it could make things worse (e.g., forking).'
  replies: []
- id: 5362
  author: Patrick Calahan
  date: '2006-05-17T01:04:30'
  content: 'In the keynote today, it was stated several times that open sourcing java is no longer a matter of "whether, but how."

    But when people scream for "open source", what I think they really want in most cases is transparent, viral deployment (per your point, Cedric, which is right on) and better process (JCP).

    Open source alone is not likely to fix that, and in fact it could make things worse (e.g., forking).'
  replies: []
- id: 5363
  author: Pascal Bleser
  date: '2006-05-17T01:45:05'
  content: 'I just don''t understand the fear of forking, it''s either a straw man argument or Sun just doesn''t get it (at least, until now) - I suppose it''s the latter.

    If some project wants to fork the JVM codebase, fine, why not ? It will *NOT* be a JVM unless it passes the TCK.

    Either it passes the TCK, then what''s the problem with it ? It''s a compliant JVM implementation. Whether you want to use it or prefer to stick with Sun''s, that''s your very own choice.

    If it doesn''t pass the TCK, I don''t see the problem either: it''s not a compliant JVM implementation and, hence, it''s not a JVM.

    That already works right now: BEA and IBM have their own JVM implementations and they are only JVM implementations because they pass the TCK.

    Same already works for JEE containers.

    Really, what''s the issue ? :)

    (Dalibor, should we invite Jonathan for your devroom at FOSDEM 2007 ? ;))'
  replies: []
- id: 5364
  author: Shai
  date: '2006-05-17T05:32:40'
  content: I care, I don't want Java to be open source... Most open source products are overhyped and under deliver (and I'm saying this as a Linux user). Java is still relatively clean elegant and simple, which reminds me of the recent Slashdot poster who claimed that if Java was open sourced it would be as good as Perl! Shudder!
  replies: []
- id: 5365
  author: Frank Wilhoit
  date: '2006-05-17T07:59:07'
  content: '"...more along the lines of improving or fixing bugs in the existing platform than about open sourcing Java...."

    Unless the source is open, the bugs won''t be fixed.'
  replies: []
- id: 5366
  author: slackerdave
  date: '2006-05-17T08:32:46'
  content: '> I would not be terribly surprised to find my self severely corrected by this particularly knowledgeable crowd, but one of the things I like the most about Java is its stability and simple syntax.

    Exactly... the problem isn''t that java is moving to slow.  The issue is that it''s not bundled on all the linux distros.  Open sourcing the java >platform&lt; will hopefully remove the last barrier to that.

    I''ve found that most people who whine about the language being behind .net (or python, or ruby for that matter) are either:

    1. Confusing the language with the platform.  And don''t know much about java as a platform.

    or

    2. Don''t really have any deep experience with the java language, or  have had to do any long term application maintenance.

    WRT #2 quickly morphing languages are a horrible thing.  I''ll happily live without typesafe enums and nifty for loops just to avoid the nightmare that is ill advised templating code.

    Sometimes it''s better to know your tools deeply than to be constantly chasing the next new shiny thing.

    yes... rails is still cool so lay off.'
  replies: []
- id: 5367
  author: n
  date: '2006-05-17T09:17:23'
  content: 'It''s the license stupid.  Java''s terrible licensing is exactly the reason why people want it to be open source.  I mean, until recently, Linux distros could''t even distribute the JRE/JDK.  How stupid is that?  As much as I love Java and use it for most of my programming tasks, the fact that there is no open source implementation of the class library bothers me.  Sun being in control here is a major problem, because they can change the licensing to something even worse if they wanted to.  And if you trust Sun to not do something like this (as if their current crappy licensing was not bad enough), think about the possibility of someone buying them out.

    You don''t care that there is no complete open source implementation?  Well you should.'
  replies: []
- id: 5368
  author: Dalibor Topic
  date: '2006-05-22T13:27:01'
  content: 'Patrick: definitely! He''s fun to talk to, met him in Luxembourg a while ago.'
  replies: []
- id: 5369
  author: ''
  date: '2006-05-23T21:05:21'
  content: '> One word:  zealotry.

    One word: stupidity. If you were using GNU/Linux and had a clue about package management and security updates you would quickly understand the value of open sourcing Java.

    And no, the latest Sun''s gimmicks in making distribution of Java easier do not help. Read the discussion on Debian lists, for example.'
  replies: []
- id: 5370
  author: ''
  date: '2006-05-28T02:11:35'
  content: 'I completely disagree, open sourcing Java and the JVM would be a fantastic gift benefiting the whole Java community it would at the very least do the following:

    1) Foster a larger around the Java platform (not just the language).

    2) See increased innovation in the Java space, both within the JVM and outside of it.

    3) See Java ported to more architectures.  Java is by no means ubiquitous.  We moved an old Sparc box from Solaris to Linux and found that Sun did not ship a VM for Linux on Sparc!

    4) See new innovative tools developed quicker.  Arguably we would see more projects like Googles GWT, as the compiler,parser tool chain would be more open.'
  replies: []
- id: 5371
  author: Geir Magnusson Jr
  date: '2006-06-03T07:14:20'
  content: 'http://incubator.apache.org/harmony

    There are a whole bunch of reasons besides "zealotry" why an open source implementation of Java SE is important, many of them mentioned above.

    Being able to easily port and easily distribute complete, compatible Java is one of our major goals in Harmony.

    Another rarely mentioned reason is that it can serve as a vehicle for people interested in improving Java technology through reasearch in JIT, garbage collection, distributed VM, ''process partitioning'' etc by working with a complete platform that lets them run real-world workloads.  None of this implies twisting, bending or breaking Java, just making it better.

    We''re also interested in being a collaboration point for people interested in this area.

    No one is interested in forked Java or broken Java.

    Come visit and see how we''re doing, and join us :)

    geir'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/clam.jpg)

As JavaOne 2006 opens its doors today, the age-old question is bound to be asked again and again:  will Sun open source Java?

I have a fairly straightforward answer:  I don't care.

And I suppose that most of the Java developers out there don't care either.

What exactly is not open source in the Java we use today?  I had to think hard to answer this question because, frankly, everything I need on a daily basis is already available in source form, with one exception:  the Java Virtual Machine.

Sun's JVM (and others) is admittedly very good and I'm sure a lot of developers would be interested in knowing how it works, but let's face it:  the inner workings of a Java Virtual Machine are completely irrelevant to most Java developers and not having access to this resource will probably never get in the way of writing Java code.

With that in mind, why is the question of open sourcing coming back so often?

One word:  zealotry.

I find that most of the time, people asking this question are not so much Java developers than they are rabid open source fanatics who just want to make a point.  In their eyes, not having access to the source of any software product is a personal insult that they want to see remedied regardless of the consequences or the price to pay.  It's time to ignore these people and ask the people who really care:  the Java developers.  And I am pretty sure that if Sun asks them what they want, their answers will be much more along the lines of improving or fixing bugs in the existing platform than about open sourcing Java.

Having said that, there is one thing that Sun needs to fix about Java, and urgently:  licensing.

For as long as I can remember (1996 I guess), distributing Java has been an incredible legal nightmare that has turned off a lot of companies and organizations that were extremely friendly to Java.  I've worked at some of these companies and talked to many opeople working at these companies, and the message is uniformly the same:  "We tried to work out a deal with Sun in order to include the JDK or the JRE, the talks took months, never went anywhere and we just gave up".

If Sun is lucky, these companies decided to ship their Java product anyway and recommended to download the JDK separately (clearly not a user-friendly way of proceeding), but in the worst cases, the companies simply decided to move away from Java and to turn to platforms that offer more friendly licenses such as...  Windows.

Seriously.

Come on, Sun (and Jonathan):   this is what we want to hear at the keynote, not some fluff, hardware sales numbers or how Java and XML go "glove in hand" (remember that one?).

Make it incredibly easy for individuals and companies to redistribute Java and you will see what "viral" really means.

As for myself, I'm too busy scuba diving in Grand Cayman to attend the keynote personally for the first time in ten years, but make no mistake:  I'll be watching.

 

O
