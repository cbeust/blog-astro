---
title: Advanced dependency injection with Guice
date: '2012-08-21T01:30:05'
slug: advanced-dependency-injection-with-guice
categories:
- General
comments:
- id: 9558
  author: Toran Billups
  date: '2012-08-21T04:37:16'
  content: 'You made some excellent points here. Another I usually mention is that doing injection like this frees up the Person from having a 2nd responsibility - instead of doing person stuff AND knowing how to construct itself with the needed dependencies it can just focus on the SRP of person things.

    Any chance you have a full Android app on github that shows this post in action? Trying to get started on a new Android app and I plan to improve on my previous poor mans DI'
  replies:
  - id: 9559
    author: Cedric
    date: '2012-08-21T04:40:08'
    content: 'Toran,

      I haven''t tried this on Android but I have used Guice on Android in the past so I see no reason why this wouldn''t work. If you want the full code for what I wrote, you can find it <a href="https://github.com/cbeust/personal/blob/master/src/main/java/com/beust/Person.java" title="here" rel="nofollow ugc">here</a>'
    replies: []
- id: 9560
  author: Christian Schlichtherle
  date: '2012-08-21T05:45:19'
  content: 'I''m sorry, but this is plain terrible!

    It seems by 2012, even competent programmers believe you would need a framework to do proper dependency injection, but this is not true at all.

    In your example, you are making things only worse: Your second Person class is still having a constructor with a GeoService dependency injected, but now it also depends on annotations and ultimately on a framework which understands these annotations, which happens to be Guice. And what makes things really horrible is that you''ve introduced another interface for an all but useless factory.

    The truth is that nobody needs a framework to do depency injection! The value-add of frameworks such as Spring or Guice is that they are IoC containers, that is they manage the scope and life cycle of dependencies. However, your example does not use this feature, and so adding a framework is of no value-add.

    The real problem with this code is that computing the distance of two addresses is a separate concern which simply does not belong in a Person class at all. So you should refactor the code to get rid of this dependency rather than applying a framework to conceil this code smell.'
  replies: []
- id: 9561
  author: Cedric
  date: '2012-08-21T05:58:10'
  content: 'Christian: forget about the details, replace GeoService with a Facebook call, a JSON packet send or whatever. You are missing the big picture.'
  replies: []
- id: 9562
  author: P??r Eklund
  date: '2012-08-21T10:49:57'
  content: 'Another option would be for "runtime objects" to have objects from the object graph injected statically (makes sense, since the injected instances are often singletons and not specific to any runtime object instance) and let the runtime object constructors only have "object identity" parameters.

    This idiom/strategy arguably also clarifies the distinction between framework/service variables (static) and identity/business variables (instance) in an object.

    Then again, having written both "static" and "singleton" in one post, I have probably already disqualified myself from having an opinion. ;-)

    /P??r Eklund'
  replies: []
- id: 9563
  author: Sony Mathew
  date: '2012-08-21T12:19:43'
  content: +1 Christian Schlichtherle
  replies: []
- id: 9564
  author: Sony Mathew
  date: '2012-08-21T12:21:02'
  content: A facebook call or JSON packet send just like a GeoService call does not belong in the Person class to begin with.
  replies: []
- id: 9565
  author: Attila
  date: '2012-08-21T17:44:51'
  content: Guice is magic...  Magic that turns compile-time errors into runtime errors at extra cost, making source more difficult to read in the process.  Pass.
  replies:
  - id: 9566
    author: Cedric
    date: '2012-08-21T18:01:04'
    content: Er... that didn't make much sense, Attila, care to expand?
    replies: []
- id: 9567
  author: Attila
  date: '2012-08-21T18:16:57'
  content: 'Even with proper tooling, I find Guice-y code much harder to follow, because of the injection "magic."  In your example above, if I were to try to read and understand the code that instantiates a Person object, I''d inevitably reach a point where I''d have to stop and think "where the heck does that GeoService instance come from?" It''s not an insurmountable problem, more like a speed bump, but the extra cognitive load adds up.  Or maybe I''m just not smart enough.

    I understand that Guice and other "magic" DI frameworks help remove boilerplate and make it easier to write unit tests, but I am not convinced that those benefits are worth the cost in ease-of-readability.'
  replies: []
- id: 9568
  author: Seth Tisue
  date: '2012-08-21T18:17:21'
  content: Christian, you're hired. When can you start?
  replies: []
- id: 9569
  author: Attila
  date: '2012-08-21T18:18:37'
  content: Oh, and about compile-time vs. runtime errors, I'm talking about mis-configured modules where problems don't become apparent until runtime.
  replies: []
- id: 9570
  author: Cedric
  date: '2012-08-21T18:19:19'
  content: 'Attila: well, what''s your alternative for this kind of problem?'
  replies: []
- id: 9571
  author: Ben Manes
  date: '2012-08-21T21:06:55'
  content: The runtime vs compile time concern is a language issue, not an argument against DI. For example, Subcut provides Guice-like bindings with compile time type-safety (via a Scala compiler plugin to remains non-invasive). Guice is pretty awesome, as is DI in general.
  replies: []
- id: 9572
  author: Danil
  date: '2012-08-22T07:28:30'
  content: '"Something odd should jump at you right away with this class: while name and address are part of the identity of a Person object, the presence of the GeoService instance in it feels wrong."

    I was badly mislead by this sentence, especially as nothing in the subsequent discussion addresses either the feeling or the arguments in the constructor.

    It seems to me that you were really trying to write that "it feels wrong that the consumers, which care about the identify of Person, also need to worry about the dependency graph of Person", which is why we use the idiom of putting a factory between the consumer and the constructor.

    Less confusing, to my mind, would have been first to establish what the DI driven design should look like, and then to separately demonstrate how Guice plus annotations on the Person object can replace the need to write an implementation of PersonFactory by hand.'
  replies: []
- id: 9573
  author: Sony Mathew
  date: '2012-08-22T08:41:46'
  content: '+1 Attila

    Cedric, this problem was solved a long time ago.

    http://sonymathew.blogspot.com/2009/11/context-ioc-revisited-i-wrote-about.html

    I''m trying out Spring these days - besides DI they do provide additional container functionality that is actually useful.  However, I have to publish to my server numerous times to discover most of my broken DI bindings which are then painful to pin down to its origin.  It is most especially excruciating cause Tomcat crashes after several republishes!).

    Context IoC still has an advantage over Guice (which provides compile safety to an extent) - any addition of a dependency with Context IoC will create a compile error in all bindings that use that object.

    I have found a way to combine Context IoC with Spring''s JavaConfig giving me all the usefulness of Spring''s container resource management but the correctness of Context IoC based DI.  Its fantastic.'
  replies: []
- id: 9574
  author: Nicolas Frankel
  date: '2012-08-23T02:51:56'
  content: 'Hi Cedric,

    I fully agree with Christian, despite being a fervent TestNG evangelist.

    The problem is not in the constructor per se, the problem is that you couple your domain object to a service. It would make sense that the service be coupled to the domain object, with a method signature like:

    void boolean isNear(Person person, Person otherPerson, int miiles)

    A sure sign of that is that the "nearness" quality, expressed in the number of miles being 2 or less, is declared in the Person domain object whereas it should be a configurable business rule.

    Beyond that, it''s nice to know about this particulare Guice mechanism.'
  replies: []
- id: 9575
  author: Balint Persics
  date: '2012-08-23T07:41:35'
  content: 'I do not really see any good use of Assisted injections as such. See my comments at the JavaLobby under the exact same post: http://java.dzone.com/articles/advanced-dependency-injection'
  replies: []
- id: 9576
  author: jmarranz
  date: '2012-08-26T06:50:19'
  content: 'I must recognize I''m not a fan of current state of "automatic" IoC practices (I do tons of "manually" IoC everyday), my main concern is VIRALITY of current IoC approaches, this virality makes IoC benefits near to none, virality means you have manage a non-singleton class like Person just to get injected a simple-stupid singleton object like GeoService, your Person object needs a convoluted factory process just to get injected our simple-stupid singleton. Because most of people are not very comfortable with these factories and because automatic IoC is easy to apply to singleton, this virality invites to convert any object into a singleton, the result is terrible because classes just coded to hold singletons are not different to classes with all methods static.

    In summary most of the time "automatic" IoC invites you to "singleton programming" a sort of C-like programming far away of good OOP approaches.

    Yes, I know that factories for non-singleton make things better but I think is not worth, this is why in Android development "automatic" IoC is almost missing in "mainstream" and has almost nothing to offer, because Android is NOT singleton programming.

    Doing Android development, sometimes I take a look to Android''s Java source code usually because some things are not very well documented and sometimes just curiosity.

    Cedric, try to ask to your Android colleagues at Google about introducing some Guice into Android source code, I would answer something like: "in Android state management is by far much more complicated than singleton programming the kind of problem automatic IoC tries to easily simplify and this kind of stuff introduces more noise, rigidity and lost of performance than benefits just to reduce a bit the amount of code"

    To be positive: we need built-in bytecode weaving into our tools, bytecode weaving is the only approach able to make healthy use of automatic IoC (in this case really automatic) without all of noise and virality of conventional semi-automatic IoC.

    Just an Android example, I want something like:

    class MyClassWithAnyKindOfLifeCycle { @Inject Application app; }

    without the burden of trying to manually manage the lifecycle of MyClassWithAnyKindOfLifeCycle objects into the IoC framework just to get injected a simple Application object, I prefer manual IoC.

    I think we are far away of this.

    Finally: ignore complaints about bad OOP practices, I agree with you, is just an example to show IoC instead of showing how much you''re good doing OOP (and I''m know you''re very good).'
  replies: []
- id: 9577
  author: Mohmmed
  date: '2012-08-29T06:34:05'
  content: For simplicity's sake, I'll do it indoce.   If you  do it in code , then there's no interesting differencebetween the  setter  and  interface  patterns, and so the entire pointis lost.  The real question is whether the framework that uses interface injection  (Avalon or whatever) was told something specialabout the InjectFinder interface, and, if so, what.In fact, the only reason that the whole topic is interesting enough towrite about is because of the way these component frameworkarchitectures work.  However, having never seen any of theseframeworks, it's hard to compare and contrast the approaches; Fowler'sbrief introduction to the frameworks is too brief, especially in thecase of Avalon.His example of a Spring XML file is confusing because at first glanceit appears that the value of an  id  attribute of a  bean  element isthe name of a Java interface.  Only when you notice the lack of thepackage prefix do you realize that this is really a misleadingcoincidence (I think!);
    he should have given them different names.In the PicoContainer case, what am I supposed to assume that thefollowing line of code means:pico.registerComponentImplementation(MovieFinder.class, ColonMovieFinder.class, finderParams);Does this mean that whenever anybody asks for an instance ofMovieFinder interface, the framework will always use theColonMovieFinder implementation and always pass in  movies.txt  to theconstructor?  Or does it mean that whenever anybody asks for aninstance of the ColonMovieFinder class, the framework will always passin  movies.txt  to the constructor?  Or something else?When he starts talking about  service locators  he completely losesme.  Why would a class with a broadly generic name like ServiceLocatorjust happen to have a method specifically about movies?  IfServiceLocator is part of the movie world rather than part of theframework, it should have some better name.  And from then on he makesthe same  I'll do it in code  mistake.
  replies: []
- id: 9578
  author: Dependency Injection Options for Java | Keyhole Software
  date: '2014-02-17T07:58:13'
  content: '[&#8230;] Advanced dependency injection with Guice [&#8230;]'
  replies: []
---

The more I use dependency injection (DI) in my code, the more it alters the way I see both my design and implementation. Injection is so convenient and powerful that you end up wanting to make sure you use it as often as you can. And as it turns out, you can use it in many, many places.

Let's cover briefly the most obvious scenarios where DI, and more specifically, Guice, are a good fit: objects created either at class loading time or very early in your application. These two aspects are covered by either direct injection or by providers, which allow you to start building some of your object graph before you can inject more objects. I won't go too much in details about these two use cases since they are explained in pretty much [any Guice tutorial you can find on the net](http://code.google.com/p/google-guice/wiki/TableOfContents).

Once the injector has created your graph of objects, you are pretty much back to normal and instantiating your "runtime objects" (the objects you create during the life time of your application) the normal way, most likely with "new" or factories. However, you will quickly start noticing that you need some runtime information to create these objects, other parts of them could be injected.

Let's take the following example: we have a `GeoService` interface that provides various geolocation functions, such as telling you if two addresses are close to each other:
    
    
    public interface GeoService {
    /**
    * @return true if the two addresses are within @param{miles}
    * miles of each other.
    */
        boolean isNear(Address address1, Address address2, int miles);
    }

Then you have a `Person` class which uses this service and also needs a name and an address to be instantiated:
    
    
      public class Person {    // Fields omitted
        public Person(String name, Address address, GeoService gs) {
          this.name = name;
          this.address = address;
          this.geoService = gs;
        }
        public boolean livesNear(Person otherPerson) {
          return geoService.isNear(address, otherPerson.getAddress(), 2 /* miles */);
        }
      }


Something odd should jump at you right away with this class: while `name` and `address` are part of the identity of a `Person` object, the presence of the `GeoService` instance in it feels wrong. The service is a singleton that is created on start up, so a perfect candidate to be injected, but how can I achieve the creation of a `Person` object when some of its information is supplied by Guice and the other part by myself?

Guice gives you a very elegant and flexible way to implement this scenario with "assisted injection".

The first step is to define a factory for our objects that represents exactly how we want to create them:
    
    
    public interface PersonFactory {
      Person create(String name, Address address);
    }

Since only `name` and `address` participate in the identity of our `Person` objects, these are the only parameters we need to construct our objects. The other parameters should be supplied by Guice so we modify our `Person` constructor to let Guice know:
    
    
      @Inject
      private Person(@Assisted String name, @Assisted Address address,
          GeoService geoService) {
        this.name = name;
        this.address = address;
        this.geoService = geoService;
      }
    

In this code, I have added an ``@Inject`` annotation on the constructor and an ``@Assisted`` annotation on each parameter that I will be providing. Guice will take care of injecting the rest. Note that I also made this constructor private, so that nobody (except Guice) will ever be able to call it. This is what we want, since this constructor contains private information that callers should never know about.

Finally, we connect the factory to its objects when creating the module:
    
    
        Module module1 = new FactoryModuleBuilder()
            .build(PersonFactory.class);

The important part here is to realize that we will never instantiate `PersonFactory`: Guice will. From now on, all we need to do whenever we want to instantiate a `Person` object is to ask Guice to hand us a factory:
    
    
    @Inject
    private PersonFactory personFactory;
    // ...
    Person p = personFactory.create("Bob", new Address("1 Ocean st"));
    

If you want to find out more, take a look at the [main documentation for assisted injection](http://code.google.com/p/google-guice/wiki/AssistedInject), which explains how to support overloaded constructors and also how to create different kinds of objects within the same factory.

## Wrapping up

Let's take a look at what we did. First, we started with a suspicious looking constructor:
    
    
    public Person(String name, Address address, GeoService s) {
    

This constructor is suspicious because it accepts parameters that do not participate in the identity of the object (you won't use the `GeoService` parameter when calculating the hash code of a `Person` object). Instead, we replaced this constructor with a factory that only accepts identity fields:
    
    
    public interface PersonFactory {
      Person create(String name, Address address);
    }

and we let Guice's assisted injection take care of creating a fully formed object for us. By doing so, we have also maximized encapsulation by making sure that private implementation details of the class are never leaked outside of that class.

This observation leads us to the **Identity Constructor rule** :

> If a constructor accepts parameters that are not used to define the identity of the objects, consider injecting these parameters.

Once you start looking at your objects with this rule in mind, you will be surprised to find out how many of them can benefit from assisted injection.
