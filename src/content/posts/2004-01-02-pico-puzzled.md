---
title: Pico-puzzled
date: '2004-01-02T05:09:25'
slug: pico-puzzled
categories:
- Java
comments:
- id: 729
  author: Brian McCallister
  date: '2004-01-02T05:32:51'
  content: 'Is it Pico specifically you don''t get, or light IoC in general? The major benefits comes during development, unit testing, and maintenance (flexibility) in general. Using such a container doesn''t really add any features. It is like using IDEA for Java instead of vi -- vi is great, but you are just more productive in IDEA despite knowing all of the vi commands.

    -Brian'
  replies: []
- id: 730
  author: Hani Suleiman
  date: '2004-01-02T07:26:24'
  content: 'I''m baffled by why people like pico so much too. While I understand the general principle, it seems pretty fragile in practice. The constructor usage is  an abuse, especially when you consider that it''s pretty hard to evolve your classes to add new dependencies. You''d have to change the ctor which would make it non-backward compatible...or am I missing something?

    Pico also doesn''t allow for multiple dependencies of the same type (eg, let''s say you want to use two DataStore objects, configured with different backend db''s...that''s not possible with pico).

    It''s a neat hack, but that''s about it. I''ll try to find the motivation to give it a proper biling though, one day!'
  replies: []
- id: 731
  author: Cedric
  date: '2004-01-02T09:43:34'
  content: 'I think I "get" IoC, although I prefer to refer to it as "abstract method".  Less sexy and not as hype-laden, but more realistic.

    I also understand why the practice of limiting the number of getters and setters in your classes is a Good Thing.

    With that in mind, I still don''t see why I should "pico" my existing code since most of it already obeys these principles.

    So what is Pico''s added value?  Cleaner singleton and/or factory support?  Dependency management?  Something else?'
  replies: []
- id: 732
  author: Jon Tirsen
  date: '2004-01-02T10:33:08'
  content: 'It is a well-hidden secret that Pico actually supports JavaBean setters.

    Pico has a very extensible mechanism for adding support for virtually any type of component, all mixed in the same container. You could have EJBs, constructor-style IoC components, web services, scripted components, all in the same container. The default component style is just one implementation of this mechanism (the ComponentAdapter) and there''s several provided in Pico, and a lot more in Pico Extras and NanoContainer. For example, it''s possible to write some components directly in Groovy in your XML configuration file. How cool is that?!

    I think this is the reason why so many people like Pico. ;-) Maybe our marketing isn''t right. Personally I don''t care that much about constructor-based IoC.

    We have quite good contact with Rod Johnsson here in London. He''s very sensible. I suspect the Pico and Spring component models will merge, making it possible to move components between containers. This will benefit the whole community.

    Hani: "Pico also doesn''t allow for multiple dependencies of the same type (eg, let''s say you want to use two DataStore objects, configured with different backend db''s...that''s not possible with pico)."

    Jeez, Hani you should check your facts. In the first month or so Pico didn''t support multiple components of the same type, but it''s been supporting that very well for quite some time now.'
  replies: []
- id: 737
  author: That's sooo '82!
  date: '2004-01-02T11:11:29'
  content: '<strong>Pico-challenged</strong>

    I''m constantly amazed by  Cedric ''s hability to " get it ", and  this time  it wasn''t any different. He even managed to translate  my half-a-page of blabbering  into a single, nice, concise paragraph:

    (...) What you are telling me is that PicoConta'
  replies: []
- id: 733
  author: Charlie Morss
  date: '2004-01-02T11:21:26'
  content: 'I think that some of the confusion about how good Pico is or is not may have come from, what I would call, Carlos'' overuse of Pico.  In my last project we used it only for "service level" items and not to remove the normal setters and getters.  By service level I''m referring to DAO''s, Notification engine, pluggable validators, etc.  Basically the service level items are objects that are either factories or singletons (which we avoid direct use of by using factories).   Using Pico in this more restrictive manner worked very well, particularly since we did TTD.  We were able to use mock services at any level.  Without Pico our lives would have been very difficult, particularly when trying mock out something like a notification service or the persistence layer.

    I''m really still confused about how I would use it eliminate setters because when creating a new instance of an Account you would most likely have a specific owner for that account, not a generic owner that Pico would supply. Perhaps there is some other API''s in Pico that I''m not aware of.'
  replies: []
- id: 734
  author: Jon Tirsen
  date: '2004-01-02T14:17:53'
  content: Charlie, that would be the best way to use PicoContainer, yes. Not for your domain model, only for your services.
  replies: []
- id: 738
  author: That's sooo '82!
  date: '2004-01-04T09:05:38'
  content: '<strong>PicoChickens</strong>

    Me and Cedric discussing  PicoContainer , yet again:

    Cedric Beust:  alright don''t chicken out this time, blog with some code

    Ooooh  McFly , you better get serious this time. Ok, I will, Ced, honest.

    Cedric Beust:  A has a non-trivi'
  replies: []
- id: 739
  author: De tout et de rien
  date: '2004-01-15T02:23:23'
  content: '<strong>Container for Chicks</strong>

    I was very amused to read the "chicken" blog fight between  C??dric Beust  and  Carlos Villela  about  PicoContainer . If you have followed the discussion, it appears that Carlos has not convinced C??dric that PicoContainer was THE container to use, an...'
  replies: []
- id: 740
  author: 'Confluence: PicoContainer'
  date: '2004-02-24T15:18:20'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 741
  author: 'Confluence: PicoContainer'
  date: '2004-02-24T15:18:31'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 742
  author: 'Confluence: PicoContainer'
  date: '2004-04-22T02:51:02'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 743
  author: 'Confluence: PicoContainer'
  date: '2004-04-22T02:51:17'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 744
  author: 'Confluence: PicoContainer'
  date: '2004-04-22T02:51:28'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 745
  author: 'Confluence: PicoContainer'
  date: '2004-04-22T03:06:18'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 746
  author: 'Confluence: PicoContainer'
  date: '2004-05-16T13:06:24'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 747
  author: 'Confluence: PicoContainer'
  date: '2004-05-16T13:30:18'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 748
  author: 'Confluence: PicoContainer'
  date: '2004-06-10T03:27:14'
  content: '<strong>Blog entries</strong>

    (In chronological order)  PicoContainer / NanoContainer|http://roller.anthonyeden.com/page/tirsen/20030620#picocontainernanocontainer  Jon Tirs'
  replies: []
- id: 735
  author: chandra prakash
  date: '2006-04-04T01:22:57'
  content: can u explain , how i can make use of picocontainer framework in practice. if i get required .jar, then how i run my code plz explain step by step way. how i can inject other dependencies.
  replies: []
- id: 736
  author: chandra prakash
  date: '2006-04-04T01:28:38'
  content: currently i'm working on a project which uses more than 1000 java classes. this project are using PicoContainer frame work. i'm using IntelliJ IDEA as IDE can you tell me a method by which i can detect in which classes use of this framework explained. and which classes are interdependent to each other. can i get a hirearche of classes which are dependent. plz explain any way.
  replies: []
---

Okay Carlos, thanks for [the attempt to explain why you like PicoContainer](http://jroller.com/page/cv/20031228), but I'm still not convinced. 

You are saying that Pico forces you to structure your classes better by avoiding getters and setters. First of all, I don't believe in this kind of generalization and while I do agree that the practice you recommend improves your code quite a bit, I argue that in real life, things are not so easy. Even your simple BankAccount example would become much more complicated in the real world and I challenge you to stick to the rule "no setters/getters" then. 

But for the sake of argument, let's assume you can indeed "normalize" any Java class by removing all setters and getters and by initializing your object only with constructors. Well, in that case, what you are telling me is that PicoContainer has made you think differently. It's changed the way you program and has made you a better programmer, but it still doesn't make the use of PicoContainer mandatory. It's a bit like learning about Aspect-Oriented Programming and realizing the importance of separation of concerns. But you can apply such technique without any AOP framework. 

I really want to like PicoContainer, but so far, I am still unconvinced why I should adopt it. I went through the source code of the ten-or-so projects that use it and I haven't found one very obvious usage which would be hard to achieve without it. 

Carlos, can you try again?
