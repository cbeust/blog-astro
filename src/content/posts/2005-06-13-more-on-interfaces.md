---
title: More on interfaces
date: '2005-06-13T09:51:32'
slug: more-on-interfaces
categories:
- Java
comments:
- id: 3780
  author: Ryan Breidenbach
  date: '2005-06-13T11:03:56'
  content: 'Regarding the comments about adding "I" to interface names creating noise...I agree with this.

    In applications that follow this naming convention, all of the interfaces are mushed together in the Javadocs, while their (default) implementations are scattered elsewhere. Naming interfaces without the "I" prepended and then naming the default implementation by appending "Impl" to the end of the interface name at least puts them next to each other in the Javadocs.

    Also, since you will most likely be referring to instances of this type in code by the interface name, you won''t need to see a whole bunch of types in your code that all start with "I". For me, it is a lot harder to distinguish names from one another if the all start with the same letter. Maybe that is just me.'
  replies: []
- id: 3781
  author: Jesus
  date: '2005-06-13T11:48:01'
  content: 'Yes, a visual peace of mind that everyone is programming to Interfaces (like using I for Interface) - but why adopt a Microsoft convention ? - its just a convention after all (I still hate MS for using \ rather than /).

    Come up with a better convention - something that goes completely against but still gives the desired effect - how about using I for all Implementation classes - afterall Implementation also starts with I ? - really confuse those MS Java wannabees..'
  replies: []
- id: 3782
  author: Neeraj Kumar
  date: '2005-06-13T12:24:42'
  content: 'Here we are dealing with two entities: an interface and an object. We have only two choices

    1) Prefix all interfaces with "I".

    2) Suffix all implementation classes with "Impl".

    I prefer the latter one.

    No matter which one you choose there is going to be noise. Having a prefix of ''I'' is a noise and so is having a

    suffix of "Impl". Now the question is which one is  less evil.

    If I publish a list of interfaces for the world and all 50 of my interfaces start with ''I" that''s an irritating noise to me. For all the 50 interfaces published I would prefer to have the implementing classes to have "Impl" suffix. In this way it''s a noise which only the developers working on the implementing classes need to deal with. I would rather let the developers developing the implementing classes deal with noise than asking all the client using the interface to deal with the noise of ''I''.'
  replies: []
- id: 3794
  author: ''
  date: '2005-06-13T13:56:56'
  content: <strong>http://soronthar.blog-city.com/xp_and_programming_to_interfaces.htm</strong>
  replies: []
- id: 3783
  author: Alex Blewitt
  date: '2005-06-13T14:38:16'
  content: 'From what I''ve seen, people who prefer/suggest the Impl suffix come from a C++/CORBA background where this is the norm. If you''re going to go with a new naming convention, why not try something new? I mean, why isn''t "-Implementation" any better than "-Impl"? It seems to me that there''s a lot of choice as to what suffix -- or prefix -- to use.

    Arguing that choice X is the ''right'' way of doing it, because you''ve always been used to choice X, isn''t necessarily a great argument. Even if you''re swayed by the fact that you prefer it -- much like indentation conventions, there''s always several preferences that are opposite to one another.

    One advantage that a prefix has over a suffix is nothing to do with JavaDoc; it allows you to get a list of all interfaces by typing I+ctrl+space (or whatever your favourite IDE uses). In fact, IDEs that support code-completion almost always work better with prefixes rather than suffixes; which is why I use _ as a prefix on instance variables. That way,  _+ctrl+space brings me just the list of instance variables, and avoids mistaking it for a local variable. (It''s bascially a short-cut to using ''this.'')

    Personally, I think the I*2 interfaces are a bit ugly; but to be honest, you don''t tend to see I*3 and I''ve never seen I*4. In any case, it was something that Sun came up with for the LayoutManager2 interface in what, Java 1.2? Maybe it would have been better to have LayoutManagerExtended (or even ExtendedLayoutManager), but neither of those scale well.

    In any case, as with coding, design is something that you can appreciate far easier after the fact than before; it takes a focussed mind to tread the right path ahead of time. Maybe the LayoutManager2 approach was the first, and we''re all starting to follow it now?

    http://alblue.blogspot.com'
  replies: []
- id: 3784
  author: Robert Watkins
  date: '2005-06-13T16:08:49'
  content: 'Cedric, you said you wanted to distinguish between needing to use ''new'' vs a factory. Why bother? Simply use a factory _all the time_ for your own objects.

    BTW, I said that adding numbers to an interface was an admission you made a mistake - namely, that you forgot something. I didn''t say it was a bad design, per se. When _publishing_ an interface, it is important to realise that it is a "big deal" and put the appropriate amount of forethought into it.'
  replies: []
- id: 3795
  author: Software As She's Developed
  date: '2005-06-13T16:35:10'
  content: '<strong>Naming of Interfaces and Impl''s</strong>

    Cedric on Interface naming convention:

    > >     Some argued that using ''I'' adds noise. Usage of ''Impl'' suffix takes care of this problem too.

    > I wonder if the author of this remark noticed the irony of this comment :-)

    Neeraj Kumar left a good...'
  replies: []
- id: 3785
  author: ''
  date: '2005-06-13T18:58:48'
  content: 'Not so sure about C++: I come from VW/Smalltalk.

    IMHO, both approaches are kludges, but somehow it''s easier for me to read something that ends up in "...Impl".  I don''t personally see a benefit of "I...", but then again, I''m used to IntelliJ.

    What are you gotta do?  A published interface is a commitment you must respect.  Assuming you have to re-negotiate a contract, you gotta have the whole agreement revised.'
  replies: []
- id: 3786
  author: Kirk
  date: '2005-06-14T00:17:14'
  content: 'Adding I to interfaces does add noise and it''s very unimaginative. You don''t see I showing up in the JDK classes do you? You see List and ArrayList, a specific implementation. I just wrote a piece of code where I had a NewsItemRepository (an interface) and NewsItemDiskRepository (concrete implementation) and a NewItemRDBRepository (yet another concrete implementation). It should not be surprising to here that the code only refers to NewsItemRepository. The concrete class comes from resource bundle and the factory is hidden behind a class (NewsItems) which acts as the interface to this component.

    So I don''t know how many of your rules I''ve just violated with this design but...... ;)'
  replies: []
- id: 3787
  author: Behrang Saeedzadeh
  date: '2005-06-14T00:35:48'
  content: 'I guess you''re not using notepad for Java development ;-)

    In an IDE, it''s very easy to distinguish an interface from a concrete or abstract class... Just press the keystroke that takes you to the source code (or compiled source code) of the type you want to know if it''s an interface or not... Eclipse, IDEA, JBuilder, NetBeans, and a bunch of other IDEs do have this functionality.'
  replies: []
- id: 3788
  author: Mocky
  date: '2005-06-14T05:10:50'
  content: 'I don''t prefix my interfaces with ''I'', but if I were to work on a project where that was called for by the coding standard, I would do it without any heartburn. So many of the "it looks good to me" ,"it looks noisy to me" arguments sound so much like curly brace at the end of the line, beginning of the line arguments. And in my experience developers can easily get used to what they initially didn''t like, if they are willing, and it doesn''t bother them anymore.

    Postfixing ''impl'' seemes to have some practical problems from my point of view. As in Kirk''s example above when you have multiple implementations, (which is why you have an interface, so you can vary the implementation independently) you can''t name them all NewsItemRepositoryImpl, and if you name one NewsItemDiskRepositoryImpl that makes it sound like there is an interface called NewsItemDiskRepository that is being implemented, which there isn''t. I think it also breaks down when you have single classes that implement multiple interfaces, it''s a convention that scales very poorly in the ''good naming'' department.

    But I totally understand why people would use the convention of prefixing member variables with ''_''. I don''t do it myself, but I do have my editor color local variables in red.

    > It seems to me that programming to interfaces

    > makes testing easier, and making testing easy is

    > one of the main goals of XP, therefore, you

    > should use interfaces as much as possible.

    I''m not defending XP nor am I an expert, although I have used it in the past. But I think this argument is flawed. It''s not about making testing easy, it''s about making *unit* tests ubiquitous (and easy is better). Interfaces don''t make unit testing easier. Interfaces make system and integration testing easier. So I don''t see this as a contradiction.'
  replies: []
- id: 3789
  author: Rob Harwood
  date: '2005-06-14T05:47:35'
  content: Regarding I/Impl and IDEs. If all you are worried about is visual clutter, you can modify your IDE's colour/font-style of interface names so that they appear visually distinct (I've used a medium green before, and it fits nicely with IntelliJ IDEA's colour scheme).
  replies: []
- id: 3790
  author: Bo
  date: '2005-06-14T09:00:37'
  content: 'Cedric''s reason--wanting to know if he can use ''new'' --is just stupid. Modern IDEs make this information only a mouse click away. If you''re using a real IDE there''s absolutely no reason to include type information in the name of an object. And there are all sorts of the reason starting with the simple fact that one never encounters an ''IPerson'' in real life.

    Second, yes, numbering interfaces is still a very bad idea. You''re better off attempting to define a different, more stable abstraction. And no, Microsoft has not used this strategy to good effect. Anybody who first sits down with various COM apis and encounters all the different numbered interfaces and has no idea what the difference is between them can attest to this. Again, if there''s any way you can avoid numbering interfaces than do it. If you have to, come up with a new name that actually describes the difference instead of a number.'
  replies: []
- id: 3796
  author: Todd Huss
  date: '2005-06-14T09:03:52'
  content: '<strong>Use and overuse of interfaces</strong>

    Cedric''s blog  entry on  Extensibility the interface way  and his followup  More on interfaces  got me thinking more about how often to use interfaces, prefixing them with I, adding an Impl to the end, etc... so for my own benefit I wanted to break it dow'
  replies: []
- id: 3791
  author: Brian Yamabe
  date: '2005-06-14T12:51:51'
  content: Your "realization" that interfaces and XP are contradictory is not correct.  You are correct in saying that interfaces are not the "simplest thing that could possibly work."  However, XP/TDD, advocate merciless refactoring.  It is refactoring that leads to the use of interfaces.
  replies: []
- id: 3792
  author: Bob
  date: '2005-06-15T11:28:23'
  content: 'Regarding the simplest thing that can possibly work and using interfaces. I think it is only contradictory if you think that class-based is the simplest thing that could possibly work when you still want to do testing :-)

    We agree about interfaces, but the call that XP is contradictory because of it is not accurate IMHO.'
  replies: []
- id: 3793
  author: Bruno Patini Furtado
  date: '2005-06-15T11:43:33'
  content: 'I personally think that the ''I'' prefix clutters more your code because it would be more used, we write more the name of interfaces than the name of our concrete classes.

    We create identifiers more often than we instatiate objects. Attributes, local variables and methods arguments list all have identifiers which would all have the ''I'' prefix. Only instantiations would have the ''Impl'' prefix.

    So ''Impl'' would be much less used, would clutter your code much less. That'
  replies: []
---

My [previous post on interfaces](http://beust.com/weblog/weblog/archives/000291.html) has generated quite a few comments:

> I prefer to rely on API versionning than to have I*2 for additional methods in an interface.

This is the sure way to DLL hell...  Not sure I want to go there.

> Anyway as a client to something (not an implementor) I don't really care if CoffeyMaker is a class or an interface... 

I still find it important to know whether I can "new" a type or if I should look up a factory to create it.

> Some argued that using 'I' adds noise. Usage of 'Impl' suffix takes care of this problem too.

I wonder if the author of this remark noticed the irony of this comment :-)

> Adding numbers to an existing interface is a sure sign of bad design. 

It's a bad design that sure seems to work fine for Microsoft and Eclipse, who have a pretty good track record of producing excellent backward compatibility.  Maybe there's something to learn from that?

> What happens when you get to I*4 or I*5? Who the hell even knows?

You answered your own question::  you name them 4, 5, etc...

More seriously, I have to say I have rarely seen any interface past the number 3, which makes me think that the I*2 convention is a stopgap measure for the first or second generation of your interface, but that after this, the interface is usually stable enough to be left alone (or new functionalities are added in interfaces that receive a brand new name).

> That is, you don't start programming to an interface unless you're totally sure that the interface is needed.

You know, this made me realize that it's a pretty good example why the XP principles are contradictory.  It seems to me that programming to interfaces makes testing easier, and making testing easy is one of the main goals of XP, therefore, you should use interfaces as much as possible.  But then, you are no longer doing the "simplest thing that could possibly work".

> Cedric, can you offer your opinion on this w/ regard to Generics?

I would love to but I don't have one yet :-)  I need to think about it more.  But you make a good point: none of these techniques take Generics into account and I am curious to see how much of what we know on this topic will have to be revisited.
