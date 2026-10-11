---
title: Extensibility the interface way
date: '2005-06-08T23:50:55'
slug: extensibility-the-interface-way
categories:
- Java
comments:
- id: 3743
  author: Jem
  date: '2005-06-09T00:29:06'
  content: 'It would be possible to avoid the instanceof in your example using method overloading:

    public void makeCoffee(ICoffeeMaker coffeeMaker) {

    coffeeMaker.pourBeans();

    coffeeMaker.makeCoffee();

    }

    public void makeCoffee(IMilkCoffeeMaker coffeeMaker) {

    coffeeMaker.pourMilk();

    this.makeCoffee((ICoffeeMaker) coffeeMaker)

    }'
  replies: []
- id: 3744
  author: Marc Logemann
  date: '2005-06-09T01:08:33'
  content: 'I wouldnt use this approach of defining I*2 Interfaces for inhouse development. Of course you break clients of the interface but sometimes or better said, for most of the time, its not that of a problem.

    Take plugin architecture interfaces, this is a very good example of better not to touch the original interface because most likely you will break plugins of developers you dont even know. But on the other side, take application developed by a team of 5-10 people, all sitting in the same building and without the need to deploy that app to 10000 developers. Here its not that bad in breaking the API and communicating that change throughout the team, because using the I*2 approach, your code gets less readable because how will that end? I assume in something like CoffeeMaker8.class or just with a big interface graph hhmmmm, not too convicing.

    Marc'
  replies: []
- id: 3745
  author: /\/\orten
  date: '2005-06-09T01:09:24'
  content: Actually the Component Object Model with "IUnknown" etc. was presented as early as 1993 as part of OLE 2.0.
  replies: []
- id: 3746
  author: Michael
  date: '2005-06-09T02:27:33'
  content: 'Small correction: Decaf is not coffee.

    And HEAR HEAR on the "I" prefix ! Bring it back bring it back !

    (ducks to dodge the tomatoes).'
  replies: []
- id: 3747
  author: Carlos Perez
  date: '2005-06-09T04:05:17'
  content: 'More comments on the Dynamic Adaptor pattern:

    http://www.manageability.org/blog/stuff/adaptor-oriented-programming/view'
  replies: []
- id: 3748
  author: Robert Watkins
  date: '2005-06-09T04:06:28'
  content: 'Jem, in your example, you''d only be able to use that if you _knew_ it was an IMilkCoffeeMaker at compile time, not run time. In other words, you don''t have true polymorphic behaviour.

    (I''ve got more to say; I think I''ll write my own post. :)'
  replies: []
- id: 3749
  author: Hani Suleiman
  date: '2005-06-09T04:35:50'
  content: 'To use your own words, like any rules, there are exceptions!

    So if one were to follow your example to its natural conclusion, then it wouldn''t be a surprise to end up, after a few years, with I*7 and I*8 (using the horrific I prefix under protest)

    So where does that leave you? You have a whole bunch of interfaces, if you use numbers then it''s not clear what the differences are, if you use names then you have to stop and think which one you actually need. At the number grows, so does the pressure to shed the weight and do with something cleaner that''s a fresh start. There''s no hard and fast rules for when that is, it''s certainly easier for internal apps, but even with external ones, it''s not unreasonable to publish a new interface and put big fat stickers on some of the very very old ones saying that they''ll be gone in 2-3 major version.'
  replies: []
- id: 3750
  author: Keith Donald
  date: '2005-06-09T05:45:48'
  content: I'm not a big fan of I prefix interface notation.  A interface captures a role/contract, and a implementation captures a concrete realization of that role.  So to me, the interface should clearly define the role name -- e.g CoffeeMaker -- and implementations should differentiate their names to indicate how they differ -- e.g LatteCoffeeMaker.
  replies: []
- id: 3751
  author: Dave
  date: '2005-06-09T05:50:12'
  content: If I want to model a problem, I start from the point that *everything* important is an interface, and have logical names that describe their purpose, such as CoffeeMaker. That way, when I need to, I use a CoffeeMaker. Prefixing it with "I" interferes with the metaphor I use to understand the system, which is why I don't use it. And frankly, if everything is an interface anyway, it ends up just being noise. I can understand the benefit of being able to see a variable and know it's an interface, the same way I can see why some people like Hungarian notation. But for me, the metaphor is crucial, and naming schemes that disrupt my ability to understand a a problem and its solution are a no-no.
  replies: []
- id: 3752
  author: Emmanuel Pirsch
  date: '2005-06-09T06:04:54'
  content: 'I prefer to rely on API versionning than to have I*2 for additional methods in an interface.

    I concur that API stability is a good thing but having to care about multiple meaningless interfaces names is not a good thing. And breaking API compatibility is not necessarely wrong if it''s justified and it keeps the API clean. Justification must be balanced with impact on existing code base. So I understand that for product like Eclipse, the arguments to break compatibility must be strong and the I*2 path can ease migration for a while.

    This kind of pattern can be used to facilitate the migration path... But at some point, the methods in the I*2 interface should migrate to the super interface. Used otherwise, it''s just a lazy way to evolve an API. If the code implementing the interface is not modified to support additional methods then it just has to depends on a compatible API version.

    However, when someone want to add a new method to an interface, he has to really think if the method belongs there or in a new interface with a meaningfull name.'
  replies: []
- id: 3753
  author: Emmanuel Pirsch
  date: '2005-06-09T06:13:00'
  content: 'On the I prefix... Did anyone remember that in early 90 every one was prefixing class names with T. We hardly see that practice anymore... Let''s just hope that the I prefix will suffer the same fate.

    As Dave said, this does not add any meaning to the name. It''s just noise.

    Anyway as a client to something (not an implementor) I don''t really care if CoffeyMaker is a class or an interface... In fact, if it''s a class today and tomorrow it has been refactored as an interface, code calling CoffeyMaker will continue to work.

    In fact it''s the implementation who will give additional meaning to the interface so it''s the implementation who should have something more in it''s name.'
  replies: []
- id: 3754
  author: Robert Watkins
  date: '2005-06-09T06:15:49'
  content: 'Meta question, Cedric: Is there a reason why you don''t list trackbacks inline in the page? I nearly pinged the page a second time because I didn''t see my response post. (Trackbacks are only listed if you click on the link above)'
  replies: []
- id: 3755
  author: Jason Carreira
  date: '2005-06-09T06:17:19'
  content: 'First of all, notice that they are prefixing interfaces with "I" which, if you are a regular reader of this blog, is a convention that I like a lot and use everywhere.  Once you start realizing the importance of interfaces, you want to find a way to read a piece of code and immediately spot whenever a concrete class is being used instead of an interface.  This convention goes a long way toward this goal and in my eyes, a piece of code is completely "pure" if all the type names it uses start with I.

    See, you should switch to IDEA where you can have the IDE understand what''s an interface and you can have its analysis package highlight code constructs you don''t like. It would save you from having to drop crappy "I"s in front of everything.

    I also agree with Hani that there''s room for both evolution and stability in a system''s interfaces, and it''s not as simple as "interfaces are immutable for all time".'
  replies: []
- id: 3756
  author: Neeraj Kumar
  date: '2005-06-09T06:50:39'
  content: 'What I do like is to have is ''Impl" suffix for concrete implementation.I consider appfuse not only a learning tool but also a collection of good practices and I''ll use the naming convention used in appfuse for discussion here.

    In service layer, appfuse uses ''UserManager.java'' for interface and ''UserManagerImpl.java'' for implementation. I like this.

    For DAO layer ''UserDAO'' for interface and ''UserDAOHibernate'' for implementation. I prefer to change the implementation name to ''UserDAOHibernateImpl''.

    One of the strong arguments in favor of using ''interface'' is to easily spot the usage of interface in the client code. Using the ''Impl'' suffix serves the same purpose. In fact it''s much easier to enforce this rule by just searching for the word "Impl". The search result should be empty.

    Some argued that using ''I'' adds noise. Usage of ''Impl'' suffix takes care of this problem too.'
  replies: []
- id: 3757
  author: Bo
  date: '2005-06-09T07:55:27'
  content: 'Adding numbers to an existing interface is a sure sign of bad design. Like Hani suggested, it just doesn''t scale. What happens when you get to I*4 or I*5? Who the hell even knows?

    If you want to break the contract of an interface you need to give it a whole new name. If you want to save yourself the trouble of having to think up new names then be very careful to design coarse-grained interfaces (unlike above, in the example).'
  replies: []
- id: 3758
  author: Mike Spille
  date: '2005-06-09T09:21:57'
  content: 'Nice post Cedric, and I''m sure many people appreciate you showing the "how" to Gamma''s "what" :-)

    I think it''s clear that the XP philosophy pretty much automatically assumes that you have total control over everything.  As such you don''t have to worry about things like backwards compatibility, external systems, etc.  When you have to consider those aspects XP starts to break down very rapidly indeed.

    Some ThoughtWorkers right now are considering in their blogs how to allow multiple versions of an application to run against a single database schema.  There are several well-known techniques in how to do this, but they seem to baffle the ThoughtWorkers (''cuz they''re not "agile"). When you have to consider something like that simplistic rules like XP''s start to show their naivette.  Just as you and Gamma show that API stability can throw a monkey wrench into the agile core.'
  replies: []
- id: 3759
  author: Rafael Alvarez
  date: '2005-06-09T10:31:19'
  content: 'What Erich Gamma is saying is totally compatible with Xp. The mistake in your argument is that you''re only using one if the "rules": "Do the simplest thing". But this one can lead to a messy code if is not complemented with the rule "refactor mercilessly".

    That is, you don''t start programming to an interface unless you''re totally sure that the interface is needed. You''re sure your interface is needed (or even what your interface should be) when you have more than one implementation for it. Until that point you''re only guessing.

    Of course, you can use the other approach: Create an interface as soon as a class is needed. In my experience, the end result is that you''ll never use more than 20% of those interfaces.'
  replies: []
- id: 3769
  author: Euxx
  date: '2005-06-09T10:39:33'
  content: '<strong>Abstract classes to resque.</strong>

    Many places in the standard Java libraries are using abstract classes (security, crypto, NIO, etc) and not interfaces. The major reason for this is to allow extensibility. Basically you can add new methods to an abstract class and keep it compatible with'
  replies: []
- id: 3760
  author: Emmanuel Pirsch
  date: '2005-06-09T10:54:46'
  content: 'I believe many people missed part of what Gamma said...

    Here is the quote : "Since changing interfaces breaks clients you should consider them as immutable once you''ve published them."

    And the missed part of the quote : "once you''ve published them".

    This does not prevent one to modify an interface before it''s published. Now the definition of "published" may vary, in Eclipse talk, published mean production releases.

    And (just to show my view on XP but should NOT be taken too seriously) in XP world... They never have a production releases anyway ;)'
  replies: []
- id: 3761
  author: Alexander Staubo
  date: '2005-06-09T12:06:10'
  content: 'DirectX has numerous interfaces that have been extended throughout the years by following numbering convention. There''s IDirectDraw7, IDirectMusicTrack8, IDirect3DDevice7, and so on. The numbering, while intrusive and aesthetically unappealing, certainly helps making the APIs robust with regard to binding.

    Often interfaces (especially in the DirectX case) are contracts that aren''t meant to be implemented by the developer. But often interfaces exist precisely to be implemented, callback-style, and in this case just numbering the interfaces won''t always help; if the app extends or replaces IFoo with IFoo2, then it must also determine whether the client implementation provides the right interface implementation. If the client only provides IFoo, the best solution is to gracefully fall back to IFoo -- and for that we have the adapter pattern.

    Interface breakage is a big and very real concern with plugin hosts such as Eclipse and Firefox, which tends to evolve (through the use of nightly builds or milestone releases -- I always run these unofficial builds, and I believe many others do, too) faster than the plugins themselves.'
  replies: []
- id: 3762
  author: oz
  date: '2005-06-09T13:19:45'
  content: Cedric, can you offer your opinion on this w/ regard to Generics?
  replies: []
- id: 3763
  author: Raja
  date: '2005-06-09T15:34:15'
  content: The numbering scheme need not proliferate as badly as one might think, because the contract is really "broken" when semantics of existing functions are changed or removed. Adding optional functions need not break the EXPOSED interface which is different from REQUIRED interfaces.
  replies: []
- id: 3764
  author: Robert Watkins
  date: '2005-06-09T23:24:45'
  content: Raja, adding functions break _implementors_ of the interface. This is better than the situation in COM, but still a problem for particular types of applications (like, oh, Eclipse)
  replies: []
- id: 3765
  author: Pascal Bleser
  date: '2005-06-10T03:19:35'
  content: 'I often use the view in which an Interface is a "micro service", with one or more implementations (which are the classes that implement that Interface).

    When applying IoC throughout your design, that''s pretty much the orientation you get (IMVHO), most specifically with Spring as you configure what implementation of those "services" (read: Interfaces) are actually to be used at runtime.

    So, you may say: "use Interfaces everywhere" or "only depend on Interfaces", or even "every class implements an Interface" and you''ll sound "academic" (meant with a negative bias).

    What I usually do is to explain that every class has collaborators/dependencies/micro-services it uses. Those "micro-services" are represented by Interfaces because of three reasons:

    1. by abstracting it that way, you may choose which implementation to use (especially easy and well modelled with IoC and Spring)

    2. it''s a contract between the class, its dependency and the implementations thereof

    3. it''s easier to unit test, most specifically to write mocks of those Interfaces

    One can never stress enough what Erich said in that interview. Interfaces really are the key element in OOD.

    Furthermore: spend some time on the Javadocs of those Interfaces to describe with precision what they do and how implementations of each Interface must behave (parameter may not be null, or may be null and then ...). Then, write unit tests that verify what''s described in the Interface''s Javadocs (= the contract).

    Some more details about that here on my blog:

    http://dev-loki.blogspot.com/2005/06/writing-good-javadocs.html'
  replies: []
- id: 3766
  author: ''
  date: '2005-06-12T01:18:32'
  content: '> First of all, notice that they are prefixing

    > interfaces with "I" which, ... is a convention

    > that I like a lot and use everywhere.

    Contrast this with http://jasigch.princeton.edu:9000/display/CAS/CAS3+Design+and+Development:

    Interface Names

    Interface names should correspond to the natural name of the concept being modeled. For instance, the proper name for an interface that represents a ticket is Ticket. ... It ensures the code easy to read, understand and discuss. It reinforces the best practice of programming to interfaces and our use of Ubiquitous Language to craft a proper Domain Model.

    Sounds more convincing to me. Implementation classes are the ones to carry the awkward

    tag: "Impl", "Base", "Default", ...'
  replies: []
- id: 3767
  author: Rosh
  date: '2005-06-14T11:01:33'
  content: 'IMO the "I" prefix helps when you are looking at a directory listing of java files and trying to make sense of it quickly. Other than that, it''s just another character added to the name.

    What is more important is being consistent across a project/projects/teams/company.'
  replies: []
- id: 3768
  author: Colin Jack
  date: '2007-06-03T12:00:05'
  content: 'I am very late to this but in the example above surely the coffee maker should know how to make coffee, if so you can just call ICoffeeMaker.MakeCoffee(). That way your existing "makeCoffee(ICofeeMaker)" does not need to get involved in the details of how the coffee maker does its stuff and the cast is avoided. Maybe I''m being dim.

    Also I agree with Rafael Alvarez, interfaces need to be thought through carefully from the clients perspective. In my experience they''re also most useful when communicating between layers of the application, but I guess this is obvious.

    Colin Jack'
  replies: []
---

Artima just published an [excellent interview with Erich Gamma](http://www.artima.com/lejava/articles/designprinciples.html) which I strongly recommend to anyone interested in writing software for the long run.  Erich makes a great job at explaining the power of interfaces while reminding that abstract classes can sometimes be useful as well.

There are a few points I'd like to emphasize in this interview:

> Since changing interfaces breaks clients you should consider them as immutable once you've published them. As a consequence when adding a new method to an interface you have to do so in a separate interface. In Eclipse we take API stability seriously and for this reason you will find so called I*2 interfaces like `IMarkerResolution2` or `IWorkbenchPart2` in our APIs.

First of all, notice that they are prefixing interfaces with "I" which, if you are a regular reader of this blog, is a convention that I like a lot and use everywhere.  Once you start realizing the importance of interfaces, you want to find a way to read a piece of code and immediately spot whenever a concrete class is being used instead of an interface.  This convention goes a long way toward this goal and in my eyes, a piece of code is completely "pure" if all the type names it uses start with I.

More generally, this technique is a lesson that Java programmers have been very reluctant to learn.  I am not sure where this resistance comes from but it might have something to do with the fact that this conventionn was popularized by Microsoft in the Component Object Model way back in 1995.

With the incredible success of .dll and reusable VB and OCX components, Microsoft quickly learned the importance of making published interfaces immutable, so they enforced this by providing tools to generate unique ID's (across the planet) for every new COM interface that you define.  Interestingly, Sun started introducing this convention recently, albeit sparingly:  `org.xml.sax.ext.EntityResolver` and `EntityResolver2`, `java.awt.LayoutManager` and `LayoutManager2`, etc...

What the article doesn't say is how exactly you can leverage this pattern to actually write reusable code.

It's actually pretty easy.

Imagine that you wrote a program to make coffee:

```java
public void dispense(ICoffeeMaker coffeeMaker) {  
  coffeeMaker.pourBeans();  
  coffeeMaker.makeCoffee();  
}
```

At some point, your coffee maker starts supporting pouring milk and since ` ICoffeeMaker` is now immutable, you need to create another immutable interface.  We could call it `ICoffeeMaker2` if there was no other suitable name, but `IMilkCoffeeMaker` is probably better in this case:

```java
public interface IMilkCoffeeMaker extends ICoffeeMaker {  
  public void pourMilk();  
}
```

_Note:   I initially used the example of decaf coffee for this but it occurred to me that this would be an implementation change, and not an interface modification.  Milk makes more sense because we are adding a functionality that hadn't been anticipated by the first version of this interface._

Your code now becomes:

```java
public void makeCoffee(ICoffeeMaker coffeeMaker) {  
  if (coffeeMaker instanceof IMilkCoffeeMaker) {  
    ((IMilkCoffeeMaker) coffeeMaker).pourMilk();  
  }  
  coffeeMaker.pourBeans();  
  coffeeMaker.makeCoffee();  
}
```

As you can see, this is quite straightforward.  And it probably makes you cringe a little...  After all, weren't you warned over and over again to avoid `instanceof` as much as possible, and more generally, that your code should not rely on the existence or implementation of subclasses?

This advice still stands, but like all advice, it has exceptions.  And future evolution as illustrated in the snippet above is a high enough reward that you should consider this approach when writing Truly Reusable Code.

This technique is being used in many places in Eclipse, and it's actually so common that the Eclipse team generalized this principle by creating the ` IAdaptable` class.  It is extremely simple:

```java
public interface IAdaptable {  
  /**  
  * Returns an object which is an instance of the given class  
  * associated with this object. Returns <code>null</code> if  
  * no such object can be found.  
  *  
  * @param adapter the adapter class to look up  
  * @return a object castable to the given class,   
  * or <code>null</code> if this object does not  
  * have an adapter for the given class  
  */  
  public Object getAdapter(Class adapter);  
}
```

There is a lot more to say about this interview and I don't want this post to become too lengthy, so I'll just wrap up for now by observing that this philosophy is quite at odds with what XP is trying to achieve, which is a nutshell is "Do the simplest thing that can possibly work". 

The XP philosophy is way too extreme for me (hence its name, I suppose) and I have always stayed clear of it as an absolute rule.  The approach explained above gives you a good counterpoint to this philosophy, and armed with these two tools, you will be able to make the right decision on how extensible you want your code to be.
