---
title: More on super and inheritance
date: '2004-01-29T10:15:30'
slug: more-on-super-and-inheritance
categories:
- Java
comments:
- id: 1080
  author: pinocio
  date: '2004-01-29T12:21:44'
  content: 'I avoid this kind of problems by adding a protected method for overriding in subclasses, if needed. This protected method is invoked in the public (main) one.

    Something like

    public vois setUp()

    {

    // code which must be executed even in subclasses

    // ...and

    setUpProtected();

    }

    Now, a subclass can override setUpProtected() which is empty here.

    Analogous mechanism used in Swing for paintComponent() calls'
  replies: []
- id: 1081
  author: Hristo
  date: '2004-01-29T12:49:03'
  content: 'Sorry Cedric-,

    You twisted the words of James Gosling. Here are the appropriate extracts from the interview - read for yourself:

    -----------------------------

    "

    A delegation-only language

    Venners: When asked what you might do differently if you could recreate Java, you''ve said you''ve wondered what it would be like to have a language that just does delegation.

    Gosling: Yes.

    Venners: And we think you mean maybe throwing out class inheritance, just having interface inheritance and composition. Is that what you mean?

    Gosling: In some sense I don''t know what I mean because if I knew what I meant, I would do it. There are various places where people have completed delegation-like things. Plenty of books talk about style and say delegation can be a much healthier way to do things. But specific mechanisms for how you would implement that tend to be problematic. Maybe if I was in the right mood, I''d blow away a year and just try to figure out the answer.

    Venners: But by delegation, you do mean this object delegating to that object without it being a subclass?

    Gosling: Yes -- without an inheritance hierarchy. Rather than subclassing, just use pure interfaces. It''s not so much that class inheritance is particularly bad. It just has problems.

    ...

    Venners: Inheritance meaning class extension?

    Gosling: Class extension. I tend to use classes a lot more than interfaces, and I''m not sure why..."'
  replies: []
- id: 1082
  author: Nat Pryce
  date: '2004-01-29T13:06:43'
  content: 'I''ve also encountered the problem with forgetting to call the setUp method in derived TestCases.  But it''s a very small problem: my tests fail, usually with a NullPointerException, I realise I forgot to call super.setUp(), I fix it, my tests pass.  That''s what tests are for.'
  replies: []
- id: 1083
  author: Nick Chalko
  date: '2004-01-29T13:44:00'
  content: 'You need to declase setUp as final like.

    public final void setUp()

    {

    // code which must be executed even in subclasses

    // ...and

    setUpProtected();

    // More code if needed

    }

    public abstract setUpProtected();'
  replies: []
- id: 1084
  author: Cameron
  date: '2004-01-29T16:20:39'
  content: 'Final? Are you kidding me? Every time I run into a "final" method, I curse the author to a life of barren seed, because that is what final does to their code. Final is yet another example of one developer choosing to believe that they are wiser than all those who follow them.

    Design well. Document well. Implement well. Those who choose to extend blindly, let them twist on their own rope.'
  replies: []
- id: 1085
  author: Brian Slesinsky
  date: '2004-01-29T20:24:51'
  content: 'When I run into a method that''s final and I need to override it, I delete the "final" keyword and keep going.  What do you do?

    Oh, wait, you don''t have the source?  Then how do you know it''s safe to override?'
  replies: []
- id: 1086
  author: Cameron
  date: '2004-01-30T05:13:29'
  content: 'What do you mean, safe to override? Do you think the base class uses reflection to make sure that someone hasn''t extended a particular method, then throws an exception?

    Inheritance is natural, and it is powerful. Like many other things in programming, it requires some intelligence and good practices to use effectively.

    If people can''t even understand and master inheritance, then I''m really worried about them digging into the whole new AOP can of worms.'
  replies: []
- id: 1087
  author: Slava Imeshev
  date: '2004-01-30T13:08:49'
  content: 'Cameron,

    I totally agree. Can''t be said better.'
  replies: []
- id: 1088
  author: Ben Eng
  date: '2004-01-31T22:14:59'
  content: 'Interface (type) inheritance and implementation inheritance are two completely different things. The downside of implementation inheritance is obviously the very tight coupling between superclass and subclass. Delegation/composition allows the classes to remain loosely coupled via an interface, so that the implementations can evolve independently without breakage, as long as the software contract remains stable. Implementation inheritance does not allow for such a well-defined software contract to exist between the classes, so this coupling leads to fragility.

    I would still use implementation inheritance opportunistically. As a rule of thumb, I''d probably restrict its use between classes in the same package, since they generally represent units, which are inseparable, so the higher coupling isn''t such a big deal. It''s probably even ok across packages that always live together in the same jar, because the jar is always used as a module. The wider the network of tightly coupled classes, the more spaghetti-like the code, and the more difficult it is to evolve (e.g., replace a superclass with a better one).

    I would probably avoid implementation inheritance across classes in different jars. In fact, I would try to keep the classes from different jars completely isolated by interfaces. Being unable to evolve an implementation for fear of massive and subtle (not explicitly defined by contract) breakage is one of the biggest nightmares, as software grows larger with age.'
  replies: []
- id: 1089
  author: Hristo
  date: '2004-02-01T23:23:54'
  content: 'Ben Eng-,

    You are 100% correct! I just do not understand the others, which allow liberal use of (implementational)inheritance in their exported APIs. I guess, old C++ habits :-)

    Peace,

    Hristo'
  replies: []
- id: 1090
  author: kdonald
  date: '2004-02-02T13:20:38'
  content: 'I agree as much initialization logic as possible should be in constructors.  I thought it was worth mentioning when I discussed such with a collegue of mine, who programs largely in embedded systems using c++, he quickly stated he does *does not* want complex initialization logic happening at construction time, because if something bad happens (exception, whatever) you could end up with a partially allocated object, which could cause problems when the object''s destructor is called.

    Luckily in java we don''t have to worry so much about that :)'
  replies: []
- id: 1091
  author: art7
  date: '2006-04-11T04:18:18'
  content: jft
  replies: []
---

There were quite a few interesting comments on my previous entry, both on my weblog and on [ TheServerSide thread](http://theserverside.com/news/thread.jsp?thread_id=23598).  I will address them in turn and I'll take this opportunity to clarify my position on inheritance.

Howard writes:

> I tend to make as many of my methods private as possible. I occasionally even use final on non-private methods (but rarely). 

This is a very good practice.  Interestingly, it's a lesson that we learned from C++, where the community actually took it one step further.  Back then, I remember reading an article by a C++ guru actually recommending to maximize the number of **static** methods in your code.  This article caused quite a stir as you can guess since a lot of developers equate static methods to global variables.  Nevertheless, the author mentioned that static methods are the most decoupled methods you can have in your code. Something to think about.

Vincent says:

> I personnally try not to extend specialized TestCase. I prefer to work with Suites. I think this is the "official" way to extend JUnit 

I don't know how official it is, but point taken, Vincent.  I think I'll head this way as well, maybe it will decrease the amount of frustration I have with JUnit :-)

Hristo is more radical:

> Yes inheritance IS EVIL and should almost always be replaced with compositions (or AOP introductions). 

I disagree with this, which is too radical in my taste.  Neither inheritance nor delegation/composition/introduction are silver bullets.  I am not going to run an exhaustive list of their pros and cons, but I think one of the salient points that should make you choose one over the other is that of Typing.  When you extend, your subclass can be substituted for its parent class (also referred to as the [Liskov Substitution Principle](http://en2.wikipedia.org/wiki/Liskov_substitution_principle)).  There are quite a few cases when such a property is not only convenient:  it is the only sound design choice.  On the other hand, delegation is more flexible and more dynamic.  This is also something that can be a requirement.

Hristo also uses [this interview of James Gosling](http://www.javaworld.com/javaone01/j1-01-gosling_p.html) to bash inheritance, whereas Gosling seems actually to be quite fond of inheritance:

> I personally tend to use inheritance more often than anything else. 

Then Hani sets the debate back on track with his usual lucid observation:

> Inheritance isn't evil, people who don't understand it or design for it are. 

Which is pretty much what I said in the paragraph above, although in different terms since I couldn't dream of ever reaching Hani's mastery of concision and punch-packing.

Bo notices:

> Um, as far as I can tell, you haven't made a case against not calling super you've made a case about why you should put initialization logic in constructors. (Hint: base class constructors **always** get called). 

Right, constructors are always called and the invocation of super in their code is enforced by the compiler, which is why I made them an exception in my original article (_" whenever you feel the need to call super inside a method that is not a constructor, it's a code smell"_).   And I agree that initialization logic **should** be in constructors, but it's not always achievable.  Sometimes, extra initialization has to happen after the object is created. 

> It's too bad that java doesn't have an overrides keyword yet (1.5 will introduce @Overrides) 

This keyword won't change anything to the problem at hand, except that the compiler might be able to notice a typo.  But there will certainly be no implicit call to super.

> IMO calling super should be the first thing you do when you override a method 

In my experience, close to none of the code I work with or read ever does that.  Most of the methods that override a parent method simply replace the logic of the overridden method.  You might call that misuse of inheritance, and I won't necessarily disagree with you, but this is a different topic.
