---
title: EJB 3 callbacks
date: '2004-08-09T10:19:19'
slug: ejb-3-callbacks
categories:
- Java
comments:
- id: 1921
  author: Bob Lee
  date: '2004-08-09T11:21:52'
  content: 'Please go with 2 and 3, an interface and default implementation. Users can reuse the default implementation through inheritance or AOP introduction.

    The small benefits of the other options don''t outweigh the familiarity and intuitiveness of the interface approach.

    However, the 2.x interfaces could use some serious restructuring to alleviate unnecessary methods, dual purposed or ambiguous methods, etc.'
  replies: []
- id: 1922
  author: Doug
  date: '2004-08-09T13:04:48'
  content: 'It seems to me that (3) is just as breakable as (1) is. If I misspell "ejbPassivate" I get no diagnostics, just a new method that will probably never be called.

    You didn''t list a negative for Annotations (4). An obvious limitation is that EJB3 would require Java 1.5 or later. That''s a big limitation for me, at least.

    Option (5) is ugly. Isn''t EJB code already ugly enough? :-)

    I''m with Crazy Bob. Interfaces (2) are the way to go. But break them up, make them independent. Let each EJB explicitly implement the callback interface(s) that it needs and ignore the rest. The container certainly should be able to do an instanceOf to see if the bean code wants a callback.'
  replies: []
- id: 1923
  author: Thierry
  date: '2004-08-09T14:04:42'
  content: 'Hi,

    I would go with (2). Easier, simple, instanceof-able.

    The reason I do not favour (4) is that you can pick up any method name, and I do not think this is a good idea.

    Cheers,

    Thierry'
  replies: []
- id: 1924
  author: Hernan
  date: '2004-08-09T15:14:01'
  content: I go with option 2. Break the actual interface in many. Using well know names for methods is easy to maintain than looking for different tag names.
  replies: []
- id: 1925
  author: Sumit
  date: '2004-08-09T15:59:23'
  content: 'All of these suggestions seem to gel with rearchitecting the interfaces part of Ganesh Prasad

    /Rajat Taneja''s proposal (http://today.java.net/pub/a/today/2004/08/05/ejbnewlife.html).

    That could be a starting point for redefining interfaces along the lines of

    - EJBNess

    - creational

    - creation lifecycle

    - entity lifecycle

    - session lifecycle

    - transaction lifecycle

    etc.'
  replies: []
- id: 1926
  author: Dan Countryman
  date: '2004-08-09T16:13:17'
  content: Option 2 (interfaces) seems to give the most flexability.  If you go with option 2, then you can provide base classes (3) if people want to use them or you can pull it off with mix-ins.
  replies: []
- id: 1927
  author: Brian Goetz
  date: '2004-08-09T20:57:03'
  content: 'It seems that the responders above have a different idea of (2) than Cedric suggested.  My reading of what Cedric suggested is that they be defined in the SessionBean interface, requiring all implementations to provide them whether they do anything or not.

    The other responders seem to be thinking of using interfaces in a different way; having a EjbPassivatible interface that defines ejbPassivate, so if you don''t want to supply a passivate method, don''t implement EjbPassivatable.  This seems different from any of the five choice enumerated.'
  replies: []
- id: 1940
  author: J Yu's Weblog
  date: '2004-08-09T23:44:31'
  content: '<strong>Re: EJB 3 callbacks</strong>

    In Cedric''s blog  EJB 3 CALLBACKS , he asks for opinions on 5 ways of specifying callbacks. I''m not very interested in EJB, but since POJO is mentioned,&nbsp;it makes me wonder&nbsp;what is a POJO anyway?

    Among the options,&nbsp;#3 (Base Class) is app'
  replies: []
- id: 1928
  author: benb
  date: '2004-08-10T00:28:21'
  content: 'What about making the bean abstract AND using interface ?

    I tried to elaborate about that in my weblog : see http://jroller.com/page/benb/20040601'
  replies: []
- id: 1929
  author: Radu
  date: '2004-08-10T02:20:02'
  content: 'I thought of using Magic callbacks (1) with interfaces (2)...in modern IDEs, just write implements interface, choose methods to implement, then remove the interface from the implements list (if you still have some methods not implemented). This way you are sure not to mistype it.

    In other words, the interfaces approach plus the magic help.'
  replies: []
- id: 1930
  author: Dmitriy Kiriy
  date: '2004-08-10T09:39:24'
  content: 'I think, it should be 2 and 4.

    Why not

    1. Yes, easy breakable

    3. Yes, single inheritance

    5. Enougth this crap!

    Why

    2. The guys that want work tradional way, allow to do that.

    4. Annotations can''be misspelling. Also, it general way in EJB 3.0

    So, generally, for all EJB 3.0 techniques, I want have 2 + 4.'
  replies: []
- id: 1931
  author: Daniel Gredler
  date: '2004-08-10T09:50:27'
  content: 'A couple of comments:

    - All the whining about having empty implementations of methods because there is only one interface (i.e. SessionBean), rather than an interface per method (i.e. ejbRemovable, ejbActivatable, ejbPassivatable, etc.) is a little bit ludicrous. The people that actually make use of most of the defined methods could just as easily argue that they shouldn''t have to implement three interfaces, rather than just one.

    - Options 2 and 3 are more complementary than exclusive. It is very easy to provide an interface, as well as a default empty implementation for those who want it, a la MouseListener / MouseAdapter.

    - The serious contenders seem to me to be 1, (2 + 3) and 4. Magic callbacks are only a serious contender in my mind because that''s what was in the draft spec. Otherwise, I don''t know why you would pick it. Magic callbacks are something of a midpoint between interfaces / base classes and annotations. The draft spec says they want to move away from explicit dependencies on the container (interfaces / base classes) and torward POJOs with annotations that have meaning only within the context of the container. That being the direction, my money is on annotations.'
  replies: []
- id: 1932
  author: Aramis
  date: '2004-08-10T09:52:15'
  content: My vote would be for annotations, they are not breakable and they allow you to specify only the callbacks you need without having to implement dummy methods, or get default implementations through inheritance (option 3), implement several interfaces or resort to AOP which is non-standard.
  replies: []
- id: 1933
  author: Jason Carreira
  date: '2004-08-10T10:53:19'
  content: 'I''d say interfaces, but differently from what you seem to mean, Cedric. In Xwork, we have many optional interfaces which an Action can implement. If it implements these interfaces, it gets those extra callbacks and extra services, if not that part is skipped. We also have a default implementation which implements most of the optional interfaces and has default behavior for them, which makes it easy for a user to just extend that class and get the default behavior for those interfaces.

    So, I guess I''d say have different interfaces for the different lifecycle scopes (i.e. not one per method, but one per lifecycle), and make them optional, with the container providing those callbacks for classes which implement them and just skipping those which don''t.'
  replies: []
- id: 1934
  author: Jay Howell
  date: '2004-08-10T12:42:59'
  content: 'To me number 5 seems to be the best. It gives the flexibility to use another class to listen for events, but It allows a developer to say that the EJB itself is going to be the listener. So developers that like to address cross cutting concerns in a few utility classes can put their callback logic in the utility classes and register them as listeners. While developers that like to have their call back logic in their beans can make the beans listeners. The cool thing about this is that developers would be able to add listeners for only the callbacks they were interested in. This would mean that an inheritance structure of listener interfaces would need to be developed, that would contain different types of listeners, similar to the swing callback mechanism for events.

    We could have an interface for a certain callback that is implemented by an abstract adapter. Developers could either extend the adapter for that event interface (so they wouldn''t have to implement all of the methods) or they could implement the interface(if they wanted to extend something else).

    We would be able to achieve all of the positive aspects of 2, 3, and 5.

    I agree with annotations, I think that after developers get their head wrapped around annotations, they will be everywhere. I think there should be support for them, but maybe only in the EJB, not in a pojo. I can'
  replies: []
- id: 1935
  author: Rasmus Lund
  date: '2004-08-10T15:46:08'
  content: I vote for (2) where you may implement the interface, and only do if you want the notifications - exactly the same thing as with the EJB 2.x-interface SessionSychronization.
  replies: []
- id: 1936
  author: Geir Magnusson Jr
  date: '2004-08-11T02:49:27'
  content: 'If you want to continue with the idea that this is persisting POJOs, the only option is 5.

    1 is just braindead - you''ll have no idea until runtime if it''s even vaguely correct.

    3 pushes into the object model in a very intrusive way.

    4 is like 2, except it''s using brand new technology for which there is no understanding of good practice and patterns in the Java community and further allows awful things like annotating the wrong or a misleading method, like indicating you want init() called on removal.

    5, IMO, is the only one that''s consistent with the idea that you are persisting PLAIN OLD Java objects, because you don''t need to modify the POJO source to use or reuse in the persistence framework.  Every other option is just a different way of creating a component, and not a POJO.  I also think that the concern that "it''s not OO" doesn''t stand up, because you aren''t violating the encapsulation of the object, and the notion of lifecycle is outside of the POJO (because it''s a POJO!).

    My $0.02

    -geir'
  replies: []
- id: 1937
  author: Fernando Racca
  date: '2004-08-11T11:21:12'
  content: 'Clean, well separated interfaces, like Spring, XWork, new life for EJB, and many others have shown, is to me, the best solution.

    #1: is a flawed contract. would you trust in developers? I won''t. In some hidden place of our pride, we are still humans.

    #3: Single Inheritance is not an option. Come on, you can do better than this.

    #4: I find annotations a mischievous trick from the JCP to ease the coding of EJB. I won''t introduce a new technology to fix a problem just because i wan''t able to figure it out how to solve it with all the tools i have in hand. That''s an easy way out, and to me, a bad solution that breaks ups compatibility with not a single benefit. XDoclet is by far a better solution. Just because EJB is the star of the J2EE fleet is not an excuse to come up with this kind of "solutions", which, at the end, give nothing new, and introduce complexity.

    Keep it simple.

    #5: i don''t know why you are so harsh against this solution. Lifecycle for a EJB is a different concern, it could be clearly separated into an event listener approach. The document Ne Life for EJB have some interesting insights on this.

    Fernando'
  replies: []
- id: 1938
  author: Nick
  date: '2004-08-26T05:20:52'
  content: 'I prefer 5 because its familiar and POJO-friendly. But as it stands now, the listener registers for all events on all entities of the specified class. So if an entity itself registered it would hear call-backs from all the other instances of the class!

    Secondly, EntityManager is currently an interface, so before registering you need to get an EntityManager instance. I dont like the sound of an entity bean having access to its em - far too self-referential (can it detach itself? remove itself?).

    I think this is similar to the problem for SessionBeans. I guess the issue is that callbacks to a bean instance have to be treated differently to callbacks to something else.

    One solution: have a LifeCycleListener interface as proposed, with a single method. If the bean implements the interface, all events on the instance are delivered through that method. It could be fairly trivial for the bean to filter out uninteresting events.

    This seems to be very flexible. For example the bean could delegate the event handling to a helper (or superclass) that then called the appropriate methods in the bean. And if you really want to, you can define these latter bean methods in an interface - or use the ejb2 interfaces.

    Nick'
  replies: []
- id: 1939
  author: Jonathan
  date: '2004-11-04T19:51:20'
  content: Where can I find someone to email?
  replies: []
---

We are currently trying to figure out how callbacks should be implemented with EJB 3.  So far, we have identified five different techniques and I'd like to get some feedback from readers about them.  Here is a quick rundown, edited from messages sent by Marc Fleury and Craig Russell, along with their respective pros and cons:

  1. **Magic callbacks**.  Method signature is the same as a container defined one. Eg public void ejbPassivate();  
**+**     Very lightweight, no template code, no base class, no interface dependency.   
**-**      Easily breakable (developers will mistype), doesn't express container dependency.  
 
  2. **Interface**. Current state in 2.x spec.  
+   Clear dependency expression, not breakable.  
**-**     Lot of template code (today's code is cluttered with many lines of callback template code that does nothing).  
 
  3. **Base class**. Provide template code in base class, have developers extend from it.   
+   No template code, not breakable.  
**-**     Single inheritance in java makes this base class a no-no.  
 
  4. **Annotations**. Annotate any method as callback (as the example of "@remove" that Linda already showed)**  
+**     No template code, not breakable (annotations can be supported in IDE/compile), any name.  
**-**     ?  
 
  5. **EntityManager callbacks** as opposed to POJO callbacks. e.g.

> EntityManager.registerLifeCycleCallbackListener  
>    (LifeCycleListener listener, Class classOfInterest, long lifeCycleEventsOfInterest); 

**+**     No interference with POJO class.  
**+**     Exploits well-known event listener paradigm.  
**+**     Very lightweight, only called if specific class/life cycle event happens.  
**+/-    **"aspect oriented".  
**-**     Not object-oriented (code outside POJO affects POJO).  
**-**     How can we extend this to Session beans?



Can you think of other options?  Which one would you favor?
