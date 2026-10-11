---
title: Holub is at it again
date: '2003-09-08T15:45:14'
slug: holub-is-at-it-again
categories:
- Java
comments:
- id: 475
  author: Paul Watson
  date: '2003-09-09T09:44:20'
  content: I had some doubts about that article when I started reading it. Those doubts really crystallized when I came to that whole "UI code in business logic" section.
  replies: []
- id: 476
  author: Hristo Stoyanov
  date: '2003-09-09T10:23:33'
  content: 'Cedric-,

    Why do you think, that the idea of implementing UI code into the biz object itself is non-OOP?

    So, biz objects can exchange collections, but can not be "poluted" with Swing code - but the Swing API is core Java as much as the collection API and any other one, included in J2SE!

    May be the way to implement UI code is thru AOP introductions, but I do not see anything wrong the "draw itself" principle.

    You may also want to take a serious look at www.nakedobjects.org

    Regards,

    Hristo'
  replies: []
- id: 477
  author: Cedric
  date: '2003-09-09T11:27:04'
  content: 'Hristo,

    I never said that implementing UI code in the business object was non-OO, just that it was a sign of poor design.  There are well-known techniques to achieve the same effect while allowing you isolate your business logic from your presentation layer.

    --

    Cedric

    http://beust.com/weblog/weblog'
  replies: []
- id: 478
  author: Ross Judson
  date: '2003-09-09T11:30:33'
  content: One of the main reasons you WANT accessors is for debugging.  Very nice.  Delphi had the syntax sugar for morphing back and forth between functional accessors and direct field access.
  replies: []
- id: 479
  author: Paul Watson
  date: '2003-09-09T12:29:12'
  content: 'To understand why one would want to keep business and presentation separate, try this experiment. Implement a non-trivial project with some non-trivial business logic and UI. Freely mingle both. Now, pretend your manager just came to you and told you the client has changed their requirements. They''re in love with SWT, and want your project to utilize that instead of Swing. Or perhaps JavaGoodies. Or perhaps they need to run it on a GUI-less Linux box. Or perhaps they want to extract some of the business logic and use it in a J2ME environment. Or ... well, you get the idea.

    One of the principles of good OO design is separating the things that change from the things that stay the same. Mingling two things together that can easily change independently doesn''t strike me as good design.'
  replies: []
- id: 480
  author: M DeFazio
  date: '2003-09-09T13:00:33'
  content: 'Arrg, gimme my money back... I can''t believe I spent the time reading Holubs article.  Lets get down to earth and discuss Java implementations... I''d like to see Holubs J2EE application code which integrates multiple systems Databases/Reporting Systems/Mainframes/ etc. by passing in a 100 line parameter listing... (now that is unmaintainable....)

    Based on my experience, Java and J2EE is becoming more about integrating systems than about purist OO which exists in the same JVM/environment.

    Ever heard of SOA and Component Based Architecture?  Maybe we should pass the component configuration for every method call... that makes sense.'
  replies: []
- id: 481
  author: Sam Newman
  date: '2003-09-09T15:13:13'
  content: I thought this would be a problem when I read Allen's article. The lack of concrete examples has meant Allen's quite reasonable assertion that needless breaking of data encapsulation is a bad thing has been misunderstood. For me the point of the article is that providing accessor methods for internal data is almost the same thing as making the internal data of that class public. People need to seriously think before adding a getter and/or setter. Too often I've seen programmers automatically generate getters and setters without actually thinking about why they are needed. Do I agree with everything Allen Holub states? Not at all, but he raises enough valid points that its worthy of discussion.
  replies: []
- id: 482
  author: flefloch
  date: '2003-09-10T05:44:17'
  content: 'Personally I think Holub makes a good point by warning us about abusive uses of accessors. I see too many times developers using accessors and having a data only object when they could build a useful, reusable object that actually do something.

    However you are right when you say that to choose  accessors or not, what is important to consider is code coupling and not an ideology that would say accessors are evil.

    Another reader pointed out a good question. You seem to be very afraid of the Holub Component getComponent(), but not of a String getField(). I think that''s contradictory. Both can be evil, it depends how flexible you want to be and where you want to put that flexibility.'
  replies: []
- id: 483
  author: Stan
  date: '2003-12-15T11:55:43'
  content: 'Sorry, gang, but I vote with Holub ... mostly. My takeaway from the article was: every time you start to write a get/set pair, see if there isn''t a way to move the responsibility and avoid them. I recently coded:

    if (lineInfo.getStatus() == X)

    lineInfo.setStatus(Y);

    and then immediately realized lineInfo should be doing this job in a method that tells lineInfo what event just happened, not what to do with its status. Now the rules about changing status are with the status. I managed to get rid of getStatus() and setStatus() before I was done.

    Re the UI logic ... agree Holub lost his mind for a while there. Swing is not an abstraction, it''s a concrete implementation. Send him a book on MVC.

    Re the Kent Beck quote. Twisted to fit? No. Note it ends with "inappropriate reliance on the implementation of other objects." That''s exactly where getters take you. If you know of no evidence to link data exposure to maintainability you''ve missed 30 years worth of information hiding theory &  practice.

    Objects = data + behavior fer sure. But that doesn''t mean an object has to share ANY of its data with you. The less it shares, the better!

    Cheers!'
  replies: []
- id: 484
  author: Chris Smith
  date: '2004-07-01T05:06:27'
  content: 'And this is my homepage.

    Chris Smith o'
  replies: []
- id: 485
  author: Sergey Ivanov
  date: '2004-07-01T05:56:52'
  content: '"Satisfied customers with the most professional and affordable offshore development solution"

    With this mission in mind our developers has one priority: The real needs of our customers.

    We do not sell workarounds.  We sell a clean and real service.

    Our experience said that the offshore customers know exactly what they want.

    Because of that, Soft-Industry has develop a simple development methodology

    which has been build with the experience of different consultants and partners which collaborate with us.'
  replies: []
- id: 486
  author: christine smith
  date: '2004-11-01T14:05:19'
  content: Was browsing through blogspot when I stumbled here
  replies: []
- id: 487
  author: BD
  date: '2005-02-03T08:30:15'
  content: I stumbled across your website. You won't like this, but I will say that I agree with Holub 100%. I have 11 years in software development, with the last 5 in Java, both Swing and J2EE. About 8 months ago, my company started a new Swing product. We just put this product into beta this week. We used Holub's iedas and methods fully - implementing his Visual Proxy and all. When my team leader announced to me that we were going to use Holub's ideas to build the product, I was dumbfounded. I disagreed with my team leader for a week. We discussed it for a week. I lost. Well, after 8 months of development, and after a huge feast of humble pie, I can honestly say that my team leader was correct, and so is Holub. I won't get into a technical discussion, because a lot has already been discussed on your page here, but just allow me to say that eliminating as many get/set methods as possible and using Holub's Visual Proxy for UI really has improved our architecture and our product. I fully
    understand and sympathise with anybody who is deeply skeptical of this. I was before we started our project. It took actual experience to convince me otherwise. I won't argue with anybody who disagrees because this is one thing that you just have to experience in order to understand it fully. What about J2EE? I haven't tried it yet, so we'll see.
  replies: []
- id: 488
  author: Sherlock
  date: '2005-03-22T22:42:43'
  content: I think BD is actually Holub trying to get some votes. Nice one ...
  replies: []
- id: 489
  author: Sands
  date: '2005-03-23T08:18:03'
  content: I come from a procedural background and had major issues trying to adjust to OOP principles. For some reason, Allen Holub's original article struck a cord with me. After much reading and thought, I think that the main idea to come away with (and this has been mentioned in Stan's comment) is that we need to put emphasis on an object's behaviour rather than its attributes. I believe that the getter/setter mentality sort of glosses over an object's behaviour (its easy for folks like me who come from database background) and tends to concentrate on an object's properties. In may cases (data transfer objects) we do require getters/setters, but in most other cases, trying to eliminate them makes for more OOP based objects. Just my 2c.
  replies: []
- id: 490
  author: Dave
  date: '2005-03-24T12:39:22'
  content: Your jobs as programmers are not to create beautiful OO-compliant pieces of art, but to deliver software that is maintainable, correct, complete, on time and on budget.  OO is a tool, not an end unto itself.  Anyone who makes a design decision because "it's the OO Way" is an idiot.
  replies: []
- id: 491
  author: G. E. Sutton
  date: '2005-09-04T13:19:24'
  content: 'I find the amount of discussion around this topic heartening. It shows that the core issue is one on which developers feel a need to have an opinion.

    I must first disclose that Mr. Holub'
  replies: []
- id: 492
  author: BD
  date: '2005-09-15T10:37:26'
  content: 'To G.E. Sutton, re: "I don'
  replies: []
- id: 493
  author: Bjorn Goransson
  date: '2006-03-12T05:40:39'
  content: '"Can you make massive changes to a class definition'
  replies: []
- id: 494
  author: Morgan Conrad
  date: '2006-05-02T18:57:52'
  content: 'I agree about 98% with Mr. Holub.  I''ve seen far too much FORTRAN code written in Java.

    There are additional problems with setters that he doesn''t go into in his article.  Anytime you have a bunch of setFoo(), setBar(), etc.,  a programmer trying to use that class has to ask:

    What happens if I never call any of them?

    What happens if I call only some of them?

    Does the order I call them matter?  (For some forms of validation, it may)

    What happens if I call one multiple times?

    What happens if the object is in the middle of a long calculation and some other bozo thread calls setFoo()?

    With a "good" OO design that minimizes setters the answers are usually simpler and clearer.'
  replies: []
- id: 495
  author: Marius
  date: '2006-08-13T10:08:40'
  content: '"What happens if the object is in the middle of a long calculation and some other bozo thread calls setFoo()?"

    Dude accessors do not define a thread safe context for your. Design for multithreading and not blame accessors for non-deterministic behavior.

    IMHO getting rid completly of accessors really can cause problems of maintenance and poor OO design. Aggree 100% with Cedric !!! ... of course like any other thing accessors are not to be abused ... think twice if you really need mutable objects.'
  replies: []
- id: 496
  author: Greg
  date: '2007-05-08T03:30:07'
  content: 'I find it hard to believe the last statement.

    "IMHO getting rid completly of accessors really can cause problems of maintenance and poor OO design".

    I have never read this statement in any of Holub''s books or articles.  Seriously, if you are going to attempt to argue from a solid footing, read the material, and truly UNDERSTAND what is being said.  He never stated to remove them all completely, he said to be aware of what you are doing; to open your eyes while coding.  And be especially alert when adding accessors to primitive data (int''s, double, etc).

    I disagree with Cedric, and feel that he has yet to fully understand the ramifications of accessors.  I have been working on a project that has been in production for 3 years, developed with OO in mind but simply not done correctly.  On numerous occasions I have refactored the code to fit more harmoniously with what Holub has proposed.  All I can say is, much easier to use, much more maintainable code base.

    We are gearing up to use a more object oriented solution to bridging UI with the business logic, and the first thing to come to mind was the draw yourself solution.  Currently we have 50 methods (and growing) that support a remote connection, and requires numerous changes to class files across 3 assemblies (yes, i''m using .Net).  Thus, a new feature requires a mimimum of 8 files to be modified.  Quite honestly, most of them are getters/setters, which would go away as soon as we start asking the object to manage itself.  50 methods have been earmarked for reduction down to 10 using an observer pattern and the display proxy holub discuss''s.  From this, our usual adding a simple feature causing a minimum of 8 files to be modified, will be reduced as well.  To 2 files only.

    You could argue, that the first development team was simply uneducated (2 Ph.D''s with over 10 years experience, 1 Masters with 2 years, and another with 3 years experience and a trade certification), but I would say that is only partially the problem.  It was mainly a misunderstanding of what OOD is, and how to implement it properly.

    Good luck on your arguments, I can only imagine the nightmare of administration and maintenance ahead of you.'
  replies: []
- id: 497
  author: Jeff
  date: '2007-05-31T11:59:45'
  content: '"These data objects can persist themselves into XML rather than "expose their internal data". An external module can request a data object to persist itself into an XML element (or XML file) rather than the external module calling getters in the data object and using the data (usually primitive strings) to persist the data. In other words, the data object persists itself, not the external module."

    This is fine if you''re creating your class after XML became commonly used, but what if you followed

    Holub''s approach a few years ago but needed your class''s data to be rendered in XML? You''d have to modify your class to support it. If you have a lot of classes, that could be considerable work.

    What about other ways your objects'' data might be used in the future that you don''t know about yet?'
  replies: []
- id: 498
  author: Rich
  date: '2007-12-12T09:00:36'
  content: 'Ok, I have read the articles and found them to be somewhat confusing at best... but I also agree with the principle of getters/setters being something to avoid... I find it interesting that he gets around that by using getter/setter''s based on an object''s "attributes" which don''t have to map to a "field" of the object. Can''t one do something similarly by having a getter/setter that accepts an attribute string that accepts/returns a String value?

    or instead just use the JComponent that would be returned from the "attribute getter" and pass that component back into the object through an "attribute setter" to set field values? all you would have to do is set the name field of the JComponent so that the object would recognize the attribute being set or to send an attribute string with the component...

    example:

    JComponent[] j = new JComponent[5];

    j[i] = object.getAttribute("name");

    j[i].getName() would return "name";

    when name gets set through the gui,

    call the following method:

    object.setAttribute(j[i]);

    I think that Holubs presentation is more complex than necessary... also I like to use Sun''s layout managers for setting up a display.'
  replies: []
- id: 499
  author: Anonymous Coward
  date: '2009-09-18T08:27:07'
  content: 'But you all simply don''t get it.

    What is the problem with the usual Circle/Ellipse example that anti-OO advocates loves to show?

    Setters break the invariants in this example at one point or another.

    So clearly OO is broken right?

    Well...  Actually no.  OO is fine and well, thank you.  The problem is mutability.

    If you''re doing what is referred to as "OO over immutable objects" then the Circle/Ellipse problem is void, null and non-existent (and anti-OO advocates can got STFU :)

    I''m working as of now on a huge OO codebase.  No SQL DB (I just say ''no'' to the ORM/Vietnam war of software development).  An amazing piece of code is allowing the user to do very complex (and unlimited) undo/redo on a complex graph of objects .

    Using ''setters'' and "OO-the-Java-way" it would have been a mess to develop.

    Using "OO over immutable objects", everything was easy and straightforward.  Most importantly, the code is beautiful, elegant, easy to read, easy to maintain, easy to test, easy to work with in highly multi-threaded applications, etc.

    What''s not to like here and when will I fail?

    "OO over immutable objects".

    Better get used to it.  Because one day people will see the light and start to do OO Analysis and OO Design before jumping right into the code and do "OOP".  Once people will start to do that, they''ll realize the messages that have to be passed around don''t have much to do with ''setting'' and ''getting'' variables.

    See you in 20 years, once the cluestick will have hit...'
  replies: []
---

Allen Holub is [ at it again](http://www.javaworld.com/javaworld/jw-09-2003/jw-0905-toolbox.html). I [already commented](http://beust.com/weblog/weblog/2003/08/04/inheritance-considered-evil-considered-evil/) on his previous column about inheritance and I pointed out his usual habit of coming up with a provocative title to get readership and then try to turn his ideas into an article, usually very unconvincing.

This one is no exception. Worse, it is actually a rehash of an article he wrote a few years ago. 

This (in)famous article is an unconvincing attempt at proving that getters and setters are evil.

> Can you make massive changes to a class definition??even throw out the whole thing and replace it with a completely different implementation??without impacting any of the code that uses that class's objects? 

And what does this have to do with accessors? Besides, getters and setters are part of the contract of the class, they are no different than business methods. If you modify anything that's part of the public interface of the class, you are going to break existing code.

Holub's thought is basically "A program is made of code only", which is a terrible simplification. Programs are made of code and data and refusing to acknowledge this is the sure way to catastrophic designs.

> Don't ask for the information you need to do the work; ask the object that has the information to do the work for you 

What if this work absolutely doesn't belong in the object in the first place? What if you need to gather data from different objects and then process it in a way that clearly doesn't belong anywhere else than in your object? Of course, you can create an intermediary object to do that, but wait... you already did this on your current object! Following Holub's advice in this particular case basically means turning everything into an object, even when this is not really needed. This screams "over design" to me.

> Though `getIdentity` starts with "get," it's not an accessor because it doesn't just return a field. It returns a complex object that has reasonable behavior. 

Oh but wait... then it's okay to use accessors as long as you return objects instead of primitive types? Now that's a different story, but it's just as dumb to me. Sometimes you need an object, sometimes you need a primitive type.

Also, I notice that Allen has radically softened his position since his previous column on the same topic, where the mantra "Never use accessors" didn't suffer one single exception. Maybe he realized after a few year that accessors do serve a purpose after all...

> Bear in mind that I haven't actually put any UI code into the business logic. I've written the UI layer in terms of AWT (Abstract Window Toolkit) or Swing, which are both abstraction layers. 

Good one. What if you are writing your application on SWT? How "abstract" is really AWT in that case? Just face it: this advice simply leads you to write UI code in your business logic. What a great principle. After all, it's only been like at least ten years since we've identified this practice as one of the worst design decisions you can make in a project.

> In 1989, Kent Beck and Ward Cunningham taught classes on OO design, and they had problems getting people to abandon the get/set mentality. They characterized the problem as follows: 
>
>> The most difficult problem in teaching object-oriented programming is getting the learner to give up the global knowledge of control that is possible with procedural programs, and rely on the local knowledge of objects to accomplish their tasks. Novice designs are littered with regressions to global thinking: gratuitous global variables, unnecessary pointers, and inappropriate reliance on the implementation of other objects. 

Ah, what a subtle way to twist a message to make it match your own. Back then, the concern was not about accessors. OO advocates were simply trying to change the minds of procedural developers who were used to consider everything in terms of method calls. The idea was to introduce the concept of an object, which encapsulates both behavior and data.

If there is one thing that survived the switch from procedural to OO techniques, it's the fact that data is central to programming. The paradigm shift comes from the fact that we access this data differently, not that we stop accessing it altogether.

Allen keeps repeating that "Calling accessors to get your data makes your code less maintainable" but I don't see an ounce of proof in this article. Tying maintainability to accessors is a very naive and simplifying assumption. It's even misleading in the sense that developers might now be tempted to write code without accessors and assume that it will automatically be more maintainable.

Maintainability of code is connected to several factors, and one of them is coupling. Coupling can happen in a variety of ways and accessors are just a very tiny fraction of them. Ignore the bigger picture at your own risk.
