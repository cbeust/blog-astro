---
title: Getter-based injection
date: '2004-06-03T08:49:19'
slug: getter-based-injection
categories:
- Uncategorized
comments:
- id: 1641
  author: Frank Bolander
  date: '2004-06-03T10:33:42'
  content: 'We keep on hearing KISS and DRY bandied about. What is Dependency Injection getting us that factories don''t provide?

    All this talk about lightweight and "you don''t need a container" when there are all these restrictions/prerequisites on class definitions to hook into whatever IOC container is being used(Constructor,setter, getter or container classes) just to placate TDD garbage seems pretty "heavyweight". We''re just trading one pattern for another.'
  replies: []
- id: 1642
  author: Bob Lee
  date: '2004-06-03T11:15:08'
  content: 'What is Dependency Injection getting us that factories don''t provide?

    IoC/Dependency Injection is simply a slightly cleaner approach than factories. You don''t repeat the same lookup and cast code over and over. You don''t have a dependency on the factory API; another developer can take my component and reuse it sans coding changes and not have to also take my factory and configuration method. With a factory, the dependency lookups are part of the implementation. With IoC, they become part of the interface, so others can see exactly what services my component depend on by simply looking at the Javadocs.'
  replies: []
- id: 1643
  author: David L Kinney
  date: '2004-06-03T17:59:39'
  content: 'It is not the best of both worlds.  You skim over the most important detail for testing: "All you need to do is provide a default implementation for your getter..."  That default implementation will be performed by either #1 (in the constructor) or #2 (in setters).  So now you have re-implemented the exact environment you were trying to avoid plus you have ensured that your tests don''t accurately reflect how the classes will behave in their container.  I would have to say that it is the worst of both worlds.'
  replies: []
- id: 1644
  author: benb
  date: '2004-06-03T22:47:56'
  content: 'The getter should remain abstract since it''s cleaner. I don''t think that providing an implementation for a method whereas you perfectly know that method has to be overriden is a good design.

    But even though the getter is abstract, nothing prevents you from writing a test class that extends your class and that provides an implementation for the getter.'
  replies: []
- id: 1645
  author: Dorel
  date: '2004-06-04T00:18:15'
  content: 'To Bob: Amen. Three times. Since using IOC I have cleaner code, I forgot about all those factory.createThing() and Singletons. My code looks cleaner and did I mention thac code metrics get close to perfection ? :-)'
  replies: []
- id: 1646
  author: Harish Krishnaswamy
  date: '2004-06-04T06:31:36'
  content: I don't think its best of both worlds either. While unit testing my component I typically use mocks for dependencies and with this approach that seems quite ugly. A subclass that implements the abstract getter seems like a better alternative.
  replies: []
- id: 1647
  author: Frank Bolander
  date: '2004-06-04T11:41:20'
  content: 'Dorel,

    You are still dependent on a container unless you provide implementations or mocks. How is Girl.getKissable() not a factory method from a factory object(Girl). I like the cleaner semantics Bob mentions but it''s still a Factory Object. It''s doing a createThing().

    Yes, the inclusion of a container makes code metrics cleaner because it abstracts a lot of coding redundancies but now I have a runtime framework dependency to deal with(and sell to operational support) and I''m moving code from one place to another either in a config file or a bootstrap class.'
  replies: []
---

Alright, I'm just back from vacation (report will be posted soon) and I have been following the reactions to my classification of getter injections with a lot of interest.  Just for memory, here it is again:

  1. Force the dependency to be passed to the constructor (not always possible and very invasive).
  2. Have the container invoke a setter, or set a field on your class (mildly intrusive since it forces you to specify a setter or a field you will never use yourself).
  3. Have the container provide the getter (not intrusive at all, except that now, you need the container for your application, which makes out-of-container testing problematic).



It looked like we had reached a stalemate:  option 3 looks like the best of both worlds except that it mandates the presence of the container, which is bad news for testability and brings us back to square one.

And then, Bob Lee came up to me and said "Why does the getter need to be abstract again?".  And he proceeded to put together a [quick proof of concept](http://weblogs.java.net/pub/wlg/1333), which has been [ discussed on TheServerSide](http://theserverside.com/news/thread.tss?thread_id=26205) since then.

It was one of these "doh!" moments.  Of course, the getter doesn't need to be abstract, but I guess my EJB bias made me overlook this fact.  Bob is right, there is absolutely no need for this getter to be abstract, and now we have an answer for all these Test-Driven Development weeni^H^H^H^H^H (sorry, had a Hani moment) advocates:  not only does getter injection work well with TDD, it makes TDD a first class citizen.

In the absence of a container, your class is testable right out of the box.  All you need to do is provide a default implementation for your getter that will work in your testing environment.  And if you run your code in a container, the getter will be overridden with a different value for production or staging.

How is that for the best of both worlds?
