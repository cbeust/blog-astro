---
title: Inversion of Control containers...  still not getting it
date: '2005-03-30T13:21:42'
slug: inversion-of-control-containers-still-not-getting-it
categories:
- Java
comments:
- id: 3312
  author: Geir Magnusson Jr
  date: '2005-03-30T07:19:48'
  content: I thought *I* was the last guy on the planet with doubts and questions, but didn't have the courage to say so. :)
  replies: []
- id: 3313
  author: Chakra Yadavalli
  date: '2005-03-30T07:22:41'
  content: 'I understand you pain, Cedric.

    "Tell me again: why am I writing this in XML instead of Java?"

    Yes, thats the quote from your post. But no. I am not jut quoting it. Thats my question to you with regards to TestNG''s Sweet XML I mean Suite XML. Why am I coding my test Suites in XML rather than in Java? Okay lets not get started on the Static suite methods of JUnit. We all understand we need something better than that. :-)'
  replies: []
- id: 3314
  author: Zsolt
  date: '2005-03-30T07:23:35'
  content: 'One of the reasons I use IoC containers (mainly Spring) is to be able to switch among different service implementations  and/or data sources just by editing the applicationContext.xml and reloading the webapp... No need to recompile and redeploy.

    By the way, Eclipse has been supporting Java class renaming across non java files for quite some time.'
  replies: []
- id: 3315
  author: aitor
  date: '2005-03-30T07:33:26'
  content: 'I don''t *totally* get it either. I''ve been reading some articles on the subject (Rod Johnson''s books as well) but I have to admit that other than in very silly examples I haven''t used any IoC container. I should be saying Spring really, I don''t know much about PicoContainer.

    I see how Spring can be useful to avoid factories and configure components declaratively, but my concern is that I feel it must be hard to debug applications that use XML files as code glue, at least reasonably complex applications. For instance, as far as I know, there is no such thing as a "Spring compiler that" will warn that the classname you just typed doesn''t exist. So you have to go check "manually" the XML config files and look for mistyped package/class names, etc. (I might be wrong, please someone correct me). Of course, this also happens with other frameworks that make use of XML config files, but they usually don''t glue whole applications.

    By the way, if I''m not wrong one could use a programatical approach and not use XML (it''s just a type of BeanFactory), but how would that be different from doing it without an IoC container?

    I do appreciate how well coded Spring seems to be, and all the template classes that it provides to access other frameworks like iBATIS, Hibernate, Quartz, etc. They definitely seem useful, and they make a good reason for trying Spring. But that''s not what an IoC framework is about, is it?'
  replies: []
- id: 3316
  author: Mike Spille
  date: '2005-03-30T07:50:18'
  content: 'Cedric, probably most of your confusion stems from the fact that the vast majority of documentation and tutorials on IoC that are available on the web use awful examples that do nothing to illustrate IoC''s advantages.  The referenced tutorial from your blog entry is an excellent case in point - it''s a rather poor example of IoC.

    I myself use a home-grown IoC container at work, which is used mostly to auto-wire services together.  In that vein IoC is merely convenient, not revolutionary or anything.  In a nutshell, you don''t want to care where services come from or how they get instantiated, or even whether they''re singletons or not.  On some level of course you do have to know this - but you _don''t_ want to know this inside your dependent class.  You also don''t want to have to know which factory to use.  In fact, when you''re using IoC for the most part when you''re developing you don''t know and don''t care where a given component comes from.

    So on one level it''s like the difference between push and pull.  You can write code to "pull" service references, by having them instantiate those objects, use a factory to get them, or use a lookup mechanism to find them.  Or you can use an IoC container and have those self-same references pushed to you when you need them.

    You don''t really feel the IoC difference looking at small examples, because they''re too small to matter either way.  Where you feel it is in larger software projects.  The vast majority of times you''re writing new code or maintaining old code, and you''ll need to get a reference to "some service".  And, most of the time, when using an IoC container this means you have to do nothing more than add it to your constructor or add a setter for it - and you''re done.  The rest happens automatically via auto-wiring.

    This is true at least for the simple cases where you''re referring to a class which is a singleton (and the only implementation of that type).  In more complex cases you may have to do slightly more - such as adding in an ID in an XML config or some Java code to distinguish which service you want.  But even in those cases the fundamental point remains - you indicate declaratively what you want, and the correct instance gets pushed to you.  Ultimately, that''s what IoC is all about.'
  replies: []
- id: 3317
  author: Pascal Bleser
  date: '2005-03-30T07:52:07'
  content: 'It isn''t all that complex to debug as Spring is merely passing objects it creates as a factory to the setter methods of the beans you grab through the BeanFactory. (after rereading, that''s a pretty unreadable phrase)

    Sure, you could do the same without an IoC framework, but Spring/Pico/XWork/... already do it for you, so why reinvent the wheel.

    Furthermore, you''re not limited to XML files, you can also implement your own bean referencing source.

    As on error checking:

    - the Spring Eclipse plugin will give you errors when you reference classes (in the XML file) that don''t exist in your project

    - Spring''s BeanFactory will throw an exception when the object''s class could not be found or when it doesn''t match the interface/class (when you pass the Class as the 2nd parameter to BeanFactory.getBean())

    http://www.springframework.org/docs/api/org/springframework/beans/factory/BeanFactory.html#getBean(java.lang.String,%20java.lang.Class)'
  replies: []
- id: 3318
  author: Pascal Bleser
  date: '2005-03-30T08:08:57'
  content: 'To me, IoC is pretty the much the missing link when applying "advanced" OO concepts and patterns, especially "code against interfaces".

    So, we basically all agree that it''s important to use interfaces and when you write a class that has a dependency towards another one (= you''re using another object), it''s much better in terms of maintainability and design to only code against an interface. Like that, your class only depends on the interface and not one of the specific implementations of that interface.

    That also makes the concrete implementations of the interface interchangeable, e.g. with Mock objects for unit testing, with a DataSource from the EJB Container or a Connection from an Apache Commons DB pool or a plain stupid JDBC Connection.

    But, at some point, you obviously need to create an object of a class that implements that interface, and then pass it to your own class.

    Usually, such things get encapsulated inside factories, to avoid having the instanciation of the concrete class spread all over your code or project.

    In it''s most simplistic form, that''s what an IoC container is: a configurable factory. Spring is configurable by, amongst others, XML files, whereas e.g. Pico is configurable by (Java) code.

    But the idea of IoC is much more than that.

    As with all the good patterns, it''s actually very simple, but I agree that the various explanations found on the web aren''t that simple to understand. I myself had to read several of them and try out Spring with some coding, for real, to understand what''s behind it.

    To make it simple and reduce it to its 2 most important characteristics (IMHO):

    1) you''re moving the instanciation of the concrete classes (that implement interfaces you''ve coded against) out of your code and into Spring''s XML file, which has to be seen as a "POJO deployment configuration"; that''s where you configure what concrete classes are to be used and how to wire all those POJOs (or EJBs, or...) together

    2) you don''t retrieve the dependencies, you just get them - let me explain this:

    Without applying IoC, when you write your code, you first have to fetch the objects you depend on (= use), e.g. retrieve the JNDI, then the EJB stub, or the DataSource, or the JDBC Connection, etc... That''s usually done through Service Locators, Factories, ...

    When you''ve successfully retrieved those dependencies, you can start to implement the actual "logic", the real stuff, e.g. execute SQL statements on the JDBC Connection, call some EJBs, etc...

    Now, with IoC, you don''t retrieve those dependencies yourself. They are configured in Spring''s XML file and you "just get them".

    In your code, you don''t need to do all the boring stuff to fetch the dependencies, you just code the logic.'
  replies: []
- id: 3319
  author: Venkat
  date: '2005-03-30T08:40:25'
  content: 'In regards to one of you several problems:

    >>If you rename one of your classes, you need to remember to update the XML file as well (as far as I know, no IDE will refactor across non-Java files as of today).

    IntelliJ IDEA does change the class names in the xml files.

    Please start using IDEA (a little selfish, so that we may get a TestNG plugin for IDEA).

    Thanks,

    --Venkat.'
  replies: []
- id: 3320
  author: Dhananjay Nene
  date: '2005-03-30T09:04:27'
  content: Am a new blogger so haven't quite figured out how to make trackback work. However I did a post a response  to some of the issues you raised at http://dnene.com/archives/4
  replies: []
- id: 3321
  author: Marc Logemann
  date: '2005-03-30T09:30:44'
  content: 'I am doing refactorings across XML files without problems in IDEA as Venkat said before. So renaming classes is no problem, applicationContext.xml gets updated as well.

    Good time for changing IDE, IDEA ships in personal edition for incredible 249$ (its easter time) ;)

    marc'
  replies: []
- id: 3322
  author: John Adams
  date: '2005-03-30T09:36:42'
  content: 'The IoC approach has also seemed to simplify our unit testing.   Most of the time if I''m writing a test and I can declare an anonymous class in a few lines or less to test an object, I will.  (currently using junit ... we''re not quite ready for testng yet :) )  This seems quite a bit easier when the ''singletons'' are injected, vs. obtaining them from a getInstance somewhere.

    Like Mike S, we''re using a simple homegrown variety to feel out if this is something we want to extend everywhere.  fwiw Mike, we did so after reading your blog.  :)'
  replies: []
- id: 3323
  author: Perryn Fowler
  date: '2005-03-30T10:20:39'
  content: 'Hi Cedric,

    You seem to be getting wound up by the various IOC containers methods of configuration. I too often get

    frustrated with the tendency these days to "code in XML", however the fact that Spring by default uses an XML configuration file is orthoganal to IOC.

    The important thing is that the configuration and the execution are seperate. It is instructive to note that you can do IOC without any container at all. (I use this approach quite often for smaller programs.)

    Simply instantiate and ''wire up'' all the services you are going to need in your mainline code ( the configuration) and then call one ''go'' method on the result (the execution)'
  replies: []
- id: 3324
  author: Sumit
  date: '2005-03-30T10:24:55'
  content: People who're gung-ho about the refactoring capabilities of modern IDEs extending to non-Java files miss a point - that may be fine and dandy when refactoring, but when you're creating the class, you still have to put it into the XML properly manually. With the use of frameworks in modern projects, your java class might be referenced in more than one XML file, all of which you have to remember to update, and for all of which you have little to no compilation support. XML configuration, especially when it proliferates, is still a bad idea. If you've never had a bug because of mismatched classes and resource files, your project is probably small.
  replies: []
- id: 3325
  author: Rickard
  date: '2005-03-30T10:27:37'
  content: 'I''m basically using IoC for the same reasons Mike outlined. I don''t want my components to care about where or how services are looked up. A constructor parameter is pretty much failsafe when it comes to the service resolution part.

    By contrast, bonus points to the one who can say in how many ways the line ''new InitialContext().lookup("foo");'' can go wrong...'
  replies: []
- id: 3326
  author: Venkat
  date: '2005-03-30T10:58:28'
  content: 'Sumit,

    Don''t use so many frameworks, then you don''t have update so many XML files...:-) Probably using Spindle, Spring-IDE etc... can help you create a basic XML configuration file.

    Some of us referring to Cedric''s point about IDE''s not updating XML files when you re-factor...

    Thanks,

    --Venkat.'
  replies: []
- id: 3327
  author: ''
  date: '2005-03-30T12:02:36'
  content: 'Cedric, I think the problem is that people are introduced to IoC / DI through the containers and not through the concept.  The key to DI is really that it is a design principle to reduce (or maybe manage) coupling between components by moving configuration and dependency declaration outside the component itself.  Following this principle makes your components easier to reuse, test, and assemble in new ways into an application.

    If you use this principle throughout your code, you may not even need a container as long as you have some controller or assembly class at the top that can configure your components.  You can do that with XML and auto-wiring or a beanshell script or simply code.  Or more than one of these!  These choices vary in how late the decisions are made (compile-time vs runtime) and in ease of reconfiguration.  In my experience, it is not only not useful but even confusing to be able to dynamically configure your application to that extent at run-time.  Generally, I find it is better to bind the basic structure of your application relatively statically but defer certain decisions to runtime on an as-needed basis.

    I did a presentation at the St. Louis JUG a couple months ago that may be interesting to you.  If you  look at the PPT or Keynote version, the notes have a lot of info beyond the slides, which are pretty terse.  The focus of this talk is on how DI affects design (and not on containers or how to use them).  Presentation:

    http://www.ociweb.com/javasig/knowledgebase/2005-02/index.html

    My blog has some additional entries regarding DI if you''re interested:  http://www.jroller.com/page/metalex'
  replies: []
- id: 3328
  author: Frank Bolander
  date: '2005-03-30T12:04:30'
  content: 'The main point to IOC is not just push versus pull but transparent Object Factories. The way IOC is implemented doesn''t have a clear separation of configuration interfaces versus operational interfaces.

    People have posted in this thread that "I just create a set method and I''m done" or as Rickard put it "By contrast, bonus points to the one who can say in how many ways the line ''new InitialContext().lookup("foo");'' can go wrong..." yet this is exactly what is going on behind the scenes when JNDI locators are used for the BeanFactories. Yes, the constructor may be cleaner visually but it is only acting as a middle man to the Object Factory implementation.

    Plus in most examples, good or bad, there is always some "getXXX(BeanName)" smattered through the code to get references to instances so there are still "pull" components of most of these IOC implementations and not ideally "lightweight" and orthogonal as advertised.

    IOC has some nice features but I think we''re deferring too much to the concept -- or maybe just too much to the zealotry of the camps promoting it. The whole push with IOC was because of deficiencies in J2EE roundtripping and containers in general and yet we are just substituting one evil for another. You''re still dependent on how the IOC container handles the factories.

    The big joke is that even Martin Fowler, after extolling the virtues of DI and IOC states this in his conclusion of his paper

    http://martinfowler.com/articles/injection.html

    even admits that a Service Locator Pattern "has a slight edge due to its more straightforward behavior. However if you are building classes to used in multiple applications then Dependency Injection is a better choice."'
  replies: []
- id: 3329
  author: Keith Donald
  date: '2005-03-30T12:06:07'
  content: 'A good IoC container is a sophisticated object factory capable of the following:

    - Selecting an object implementation to be used as a ''service'' or ''component'' of your application

    - Managing the lifecycle of that implementation (when will it be created? when will it be destroyed?)

    - Assigning that implementation an identity (how can it be retrieved for use by pre-existing clients not managed by the factory?)

    - Configuring that implementation (what properties can it be parmeterized with? What collaboratoring implementations must it be wired with, and through what interfaces?)

    - *Decorate* that implementation as necessary with behaivior.  (What environments should this object be adapted to? What aspects should it leverage?)  In combination with a AOP, this can be done in a dynamic fashion.

    Key points:

    - The managed object is decoupled from any hard-coded dependencies on its collaborators, including any expensive initialization logic that may be present in a collaborator implementation.  This makes it much easier to test the object in isolation, and vary the object''s behavior..

    - The managed object is decoupled from any collaborator (service) lookup responsibility. The object no longer has to worry about where a reference to a collaborator comes from (JNDI? local? custom singleton?).

    - Implementation of the managed object stays focused on solving its core problem.  Object configuration is treated as a separate concern. Objects are handed "what they need to work" by the factory.  They are told what the need, they don''t ask for it.  They interact with collaborators through interfaces, so collaborator implementation details stay hidden.

    - Configuration is separate from use - configuration happens once, typically at startup.  Objects are then wired in and optimized for use.

    - Base managed objects can be scaled up *transparently* (e.g made transactional, for example) or adapted for use in other environments by leveraging the factory (the IoC container.), all in a fully declarative fashion.

    Other notes:

    - The IoC declarative metadata format/medium (xml, java, etc.) is completely orthognal to what IoC is all about.

    - Most Spring users use its XML-based format because they find it simple/easy-to-use yet flexible, not because its external to Java code.  Externalizing dependency wiring from Java code is not the point, it''s certainly not why I leverage the Spring XML format.

    - Spring is a application framework that leverages IoC to provide a consistent approach to application configuration and layering.  It is NOT just a IoC container.'
  replies: []
- id: 3330
  author: Robert Watkins
  date: '2005-03-30T12:55:10'
  content: 'Hi, Cedric.

    IoC is a design/coding philosophy that''s seperate from the frameworks that implement them. I don''t use the frameworks, so I can''t talk about them.

    Typically, I hand code factories. I start by having the factory simply return a new instance, and over time I find I need to get the factory to configure the instance in some way. That''s where IoC comes in. It works pretty well for me, and of course as the factories are hand coded, there''s no refactoring problems.

    One point I would stress is that you really want to use interfaces when using IoC. This way, only the factory needs to know about the IoC hooks.

    Finally, both Eclipse and IntelliJ offer the option of searching non-Java files when renaming. I''d advise always previewing what it''s doing when doing this though.'
  replies: []
- id: 3331
  author: Hristo
  date: '2005-03-30T14:19:08'
  content: 'Same here, Cedric - I do not get the excitment of IoC (especially the XML extended ones) either.

    Time for some good examples:

    http://www.artima.com/spontaneous/jiniconfig.html'
  replies: []
- id: 3332
  author: Erik
  date: '2005-03-30T21:45:15'
  content: 'Hi Cedric,

    Previous posters have more or less said everything smart I could have said (or not) about IOC. So I will only shortly describe my recent experience with using Spring IOC in an industrial project: I used it primarily to configure services that different components of our application are using.

    The main gain was certainly the separation of concerns between main applications, components and services (I started from a version of the service configurator where everything was more or less hard-wired: it was quite a testing and maintenance nightmare). Components and services got more loosely coupled which, beyond making the code more maintainable, make them also far easier to unit test.

    I certainly had my share of problems with misspellings in XML configuration files and interpreting Spring error messages (which are quite detailled and accurate yet not always as helpful as you would wish), but all in all I think it was worth the effort. The Java code I would have had to write to offer a similar functionality, would either have been very specific to our application or would have been something like a new IOC implementation - so using a framework like Spring was from my point of view a gain in reusability and maintainability.

    To sum it up from my experience: IOC is certainly not a silver bullet (who''s dreaming of one will always end up being terribly disappointed) but it''s a technique you should be aware of and able to use - knowing when it makes sense.'
  replies: []
- id: 3333
  author: Erik
  date: '2005-03-30T21:47:28'
  content: 'Hi Cedric,

    Previous posters have more or less said everything smart I could have said (or not) about IOC. So I will only shortly describe my recent experience with using Spring IOC in an industrial project: I used it primarily to configure services that different components of our application are using.

    The main gain was certainly the separation of concerns between main applications, components and services (I started from a version of the service configurator where everything was more or less hard-wired: it was quite a testing and maintenance nightmare). Components and services got more loosely coupled which, beyond making the code more maintainable, make them also far easier to unit test.

    I certainly had my share of problems with misspellings in XML configuration files and interpreting Spring error messages (which are quite detailled and accurate yet not always as helpful as you would wish), but all in all I think it was worth the effort. The Java code I would have had to write to offer a similar functionality, would either have been very specific to our application or would have been something like a new IOC implementation - so using a framework like Spring was from my point of view a gain in reusability and maintainability.

    To sum it up from my experience: IOC is certainly not a silver bullet (who''s dreaming of one will always end up being terribly disappointed) but it''s a technique you should be aware of and able to use - knowing when it makes sense.'
  replies: []
- id: 3334
  author: ''
  date: '2005-03-31T01:18:13'
  content: 'Hi,

    What IDE are you using? Notepad? Eclipse changes the class name in any file.'
  replies: []
- id: 3335
  author: Lyndon
  date: '2005-03-31T05:27:01'
  content: 'Alot of this effort would be obviated buy the ability to add application specific processing to new statement calls.

    Ruby syntax takes away the new keyword/special case an makes it a method that is redefinable.'
  replies: []
- id: 3336
  author: Ron
  date: '2005-03-31T09:32:20'
  content: All this hand waving hurts my brain.  I also can't find a good concrete example.  Picocontainer seems to me to be a dain bramaged rules engine.  It feels like it wants to be like Prolog to me.
  replies: []
- id: 3337
  author: Aslak Hellesoy
  date: '2005-03-31T19:40:06'
  content: 'Cedric,

    Your claim that it took PicoContainer years to implement setter injection is incorrect. Setter injection was supported in PicoContainer only a couple of months after its inception in 2003.

    Aslak'
  replies: []
- id: 3338
  author: toto
  date: '2005-04-01T06:55:29'
  content: I still do not get IoC either. Your reasons sound plain to me. I am an experienced Java developper. Cheers.
  replies: []
- id: 3339
  author: ''
  date: '2005-04-01T07:05:16'
  content: '> refactor across non-Java files

    IntelliJ Idea does do that.'
  replies: []
- id: 3340
  author: Erik
  date: '2005-04-01T08:59:32'
  content: 'Hi Cedric,

    Just a short complement to my previous mail.

    I would like to mention one danger to IOC I was confronted with: when you start to understand how it works, you tend to feel pretty smart and begin to use it "for the pleasure" of it - which inevitably leads to unnecessary complexity. This happened to me and, when I realized it, I had to refactor and simplify (this remembers me that a few years ago I read in a forum about a guy who was proud to have applied each and every pattern he found in the GoF book in one project - I thought: this must be a pretty mess...).

    But this is simply the usual learning curve and the reason why I said that one should understand it, be able to use it but know when it makes sense to actually use it (or not). So my advice: don''t resist it, try it out - it is worth it.

    Erik'
  replies: []
- id: 3341
  author: David Bernard
  date: '2005-04-01T10:30:35'
  content: 'Hi Cedric,

    I''m the author of a little IoC implementation. I would to expose my usage of xml to define components configuration and assemblage.

    Notes :

    * I create application with various deployement context (dev, uat, and n instances in production)

    * the xml needs by the IoC assembler is specific to the assembler (Spring, Hivemind, Yaca,...) and not very ''user'' friendly.

    So I define a **simple** xml file (system.xconf) :

    * with only context informations

    * user friendly (comments, complementaries data)

    * assembler independants format

    And I define XSL(s) to convert the system.xconf to the targets xml or no xml file(s) like :

    * xml for Assembler (Spring, Yaca,...)

    * log4j.xml (if I need info to connect log to SMTP,...)

    * JVM security definition

    * ...

    My 2 cents'
  replies: []
- id: 3342
  author: Eric Burke
  date: '2005-04-02T21:17:29'
  content: '"ioc" is just a new name for age-old patterns like Factory and Strategy. Having said that, something like Spring may impose a kind of discipline on a development team when designing new code. I''ve fallen into the trap of using too many singletons in the past. Perhaps people using Spring are less likely to do this because they''ll be forced to make their code Spring-friendly, such as coding to interfaces, avoiding references to singleton factories, etc.'
  replies: []
- id: 3343
  author: ''
  date: '2005-05-04T01:32:49'
  content: 'Hi Cedric,

    When you said

    "why am I writing this in XML instead of Java"

    i believe you missed the all point IoC. IoC isn''t going make developer''s life easy, but it''s going create application that are "configurable" without any modifications of the code. That''s the idea.

    "If i rename a class": Well you don''t. :)

    You don''t use IoC inside your own POJOs or in your own package. You use IoC on more "component" scale.

    I tried to make a concrete example :

    Your application used a DAO pattern, and your implementation used an Oracle DB. You have a new client but he wish that you use is db : MySQL.

    Using IoC garantee you that once you have develop this new implementation, and test it as a standalone (this is another very important aspect of IoC), you application will be easily swithc to this new implementation.

    Finally, don''t forget that IoC comes with Micro kernel, wich means that your gain the advantage of a reconfigurable application without the "heavyness" of EJB for instance...

    To conclude:

    *IoC between component not classes !

    *Easy deploy and easy changing of configuration

    *Test Units

    *lightness of microkernel

    I believe i didn''t miss a major feature...

    Final note : IoC is an architectural pattern not a design pattern, IoC describes how to built a apps not a class...'
  replies: []
- id: 3344
  author: Berlin Brown
  date: '2005-05-04T04:00:51'
  content: 'Hi Cedric:

    I don''t get it either.  I guess I have too much fun floating between too many different languages including C#/Python/Java/Jython/Lisp.  I can''t keep up with the frameworks.

    Maybe, that is why I don''t make much money I guess.'
  replies: []
- id: 3345
  author: Andre Ranvik
  date: '2005-05-21T12:13:00'
  content: 'Here is a reiteration of what really makes Dependency Injection (DI) worthwhile. First of all - IoC and DI is not the same thing. DI is one type of IoC (read ch. 4 of "Pro Spring").

    Example:

    You have component CC, which needs to use a service of type SS. Of course, CC should ideally not need knowledge about any implementations of SS. One implementation of SS is called SImp. SImp can of course not have knowledge about where it should be used, so no references to CC within SImp.

    Now:  How can we make CC use SImp?  Well, in my opinion DI handles this very elegantly:

    It stands outside of both CC and SImp and creates (injects) the link (dependency) between the two.'
  replies: []
- id: 3346
  author: Manish Mishra
  date: '2005-08-30T02:07:15'
  content: 'Hi Cedric

    Would like to propose a perspective that is little different from concentrating on the nut and bolts (and features) of IOC containers:

    What is the difference between object-based and object-oriented?

    What is polymorphism? How is it related to lambda calculus?

    Is inheritance bad?

    Why do we need design patterns? What is design by contract?

    What is the ideal degree of separation between algos , types and containers without shooting the development cost thru the roof and isn''t inheriatnce an anti-pattern to achieve this? (Consider design of STL .. please note that this might conflict with what Martin Fowler has to say about anemic models).

    I guess a different perspective might help but I am not too sure. Following is a good read anytime:

    "The Cruelty of Really Teaching Computer Science -  Edsger Dijkstra"

    regards'
  replies: []
- id: 3347
  author: Paul Lee
  date: '2006-01-06T12:04:19'
  content: After reading all these comments, the advantages of IoC and the mere definition of IoC are as clear as mud. The problem of class dependency many describe seem like it can be solved by using a simple Abstract Factory. If you have a system dependency, sure use a property file (e.g. JNDI datasource), but that should be the exception not the rule (i.e. the basis for a development framework). The defenders of IoC sound suspiciously similar to the defenders of Struts and EJB in their inability to succinctly answer simple and fundamental questions, and I suspect it will see a similar backlash as those tools had within the next two years.
  replies: []
- id: 3348
  author: Steven
  date: '2006-01-31T15:24:12'
  content: 'IntelliJ''s IDEA IDE does refactor java and non-java files in one go.  If you rename a class, it will find all other classes and non-java files (.properties, .xml, etc.) in your project and refactor them.

    It''s really useful!'
  replies: []
- id: 3349
  author: Steven
  date: '2006-01-31T15:28:10'
  content: '"PicoContainer does away with XML and writes everything in Java, which makes more sense to me, and except for the incomprehensible requirement that all your dependencies need to be declared in the constructor (a constraint the creators eventually relaxed after years of pressure coming from the community), it seems to be doing a reasonable job.  It''s amazing that it took so long for the creators to understand that this inane and bigoted requirement made PicoContainer inapplicable for any kind of pooling"

    I''ve been doing this (dependencies in constructors) for 2 years without any problems.  I don''t understand why this is a problem.  And I''ve done this with JDBC connection pools, messaging queues, and various other Java nasties.  I just don''t get what the problem is.

    I''ve also performed added dependencies in methods too, I just choose the right metaphor when I''m coding.'
  replies: []
- id: 3350
  author: Steven
  date: '2006-01-31T15:37:11'
  content: 'The other problem with Spring and other IoC thingies is, if they use XML, then that is too much XML for me.  I can''t stand the gobs of XML that lies around in applications these days.  If you''re debugging in your software, and you step into a method, viola! you get lost in debugger land because shite is being read in from XML files and you completely lose track of your position, where you are in the code, etc.

    I like to step through every executable statement and know what is happening, I do NOT LIKE magic in code.  Especially if it comes from XML.'
  replies: []
- id: 3351
  author: ''
  date: '2006-11-13T02:52:54'
  content: 'The core reason for IOC is decoupling for modularly assembling code and for testing. That''s all.

    KAC'
  replies: []
- id: 3352
  author: Thomas W
  date: '2007-05-08T23:53:01'
  content: 'Spring & XML are for Configuration.

    If you hard-code configuration, you''re an idiot. This principle is well- understood, and has been known for most of 20 years.

    Unfortunately XML and Dependency Injection (IoC is poor terminology, in this sense), being the only means to provide a general solution for the above problem, were only invented in the last 5 years.

    Objects finding services or references to config objects, in particular, almost always had to break principles of either encapsulation or reusability..

    All solved now,

    But luckily Cedric''s still spreading FUD to obstruct the uptake.

    Use it configure your tax rates, company address details, database location or whatever, you f** nana.

    Once you use a real config format, you can configure eg. Link objects;  with Label, URL and Icon, for your webpage...

    Objects not dumbjects, people.

    Are you still hard-coding this crap or what, anyway?

    For the first time in your life it''s worth it, as you can achieve code reusability;

    So get on with it, go write some clean code as a change from your usual rubbish, do it good for a change and stop being such a worthless pack of useless f**ks!'
  replies: []
- id: 3353
  author: Ken J
  date: '2008-02-25T08:45:18'
  content: 'Wow Tom,

    Thats a lot of anger at ''Cedric''s still spreading FUD''.

    First, "still spreading" is quite a reach since his blog post is from 2005 (2 years before your bile-filled comment).

    Second, "FUD" ? Fear, uncertainy, doubt?  Reasonable doubt, based on Cedrics technical concerns does NOT constitute FUD.

    You need to settle down a bit and stick to discussing the technical merits of your view in the future - not berating people who don''t necessarily agree with you.

    K'
  replies: []
- id: 3354
  author: Paulur
  date: '2008-05-14T00:15:11'
  content: I thought I was the only jerk who didn't understand IoC on this planet until reading this...
  replies: []
- id: 3355
  author: Paulur
  date: '2008-05-14T00:37:46'
  content: 'Basically, XML is to store data but not to store business logic. Data is completely irrelevant to the business logic. Say, the java code may disappear one day, but the data handled by the code will still be there. So, it doesn''t make much sense to combine xml and java code to implement business logic.

    To be an extremist, I don''t store the business logic in the database to define the way java objects work.

    It''s true that xml files in spring is supposed to be configurations. However, xml files are actually more than configurations because they defines run-time interactions of java objects. (IMHO, a configuration file defines the initial settings for a program.)

    I might be wrong, but please save those F words because they don''t help debate...'
  replies: []
- id: 3356
  author: PJG
  date: '2008-09-24T02:46:29'
  content: 'Why aren''t you talking about Guice too?

    It also does away with XML and mentioning it would be a bigger challenge for Bob Lee to get into this discussion.

    =;o)'
  replies: []
- id: 3357
  author: Rima
  date: '2009-02-23T01:17:38'
  content: 'I really enjoyed it. You have done a great job.

    I am from England and also am speaking English, give please true I wrote the following sentence: "Sometimes guys are too shy to express their interest in you, so they will go about it in a roundabout way."

    With love :-), Rima.'
  replies: []
---

I must be one of the last developers on this planet not to understand Inversion of Control.  Every once in a while, a new tutorial appears, I think to myself "ok, this is it, this time, I'm really going to understand how I can use it in all my projects", but every time, I finish the article shaking my head in utter confusion.

This time, I am looking at [this high-level overview](http://dnene.com/archives/3) of several IoC containers.  It is pretty well written and relatively neutral, which is quite refreshing in this [religiously-infected field](http://www.jroller.com/page/fate/20050328).

But I still don't get it.

In this article, the author is using the example of a flight/cab reservation, which seems reasonable to me.  He contrasts the traditional Java approach to the one used in, say, Spring, where the classes to instantiate are declared in an XML file.

I have several problems with this approach:

  * If you rename one of your classes, you need to remember to update the XML file as well (as far as I know, no IDE will refactor across non-Java files as of today).  
 
  * If you used interfaces to start with, the odds that you will have to rename signatures in your API are minimal, so you are better off using straight Java for this in the first place.  
 
  * What is the big gain in Spring invoking my setters instead of me doing it in plain Java?  
 
  * If several instances of the same class need to exist at runtime, I need to add some sort of XML primary key to my object declarations so that the container know exactly which instance I need.  Tell me again: why am I writing this in XML instead of Java?



Basically, what you are doing here is spreading your business logic into both Java and XML for no apparent reason and some quite obvious drawbacks.

Having said that, while I obviously dislike the "setter injection" part of IoC containers, I do see some value in the factory aspect.

I have found myself reinventing abstract factories way too often and, I bet, writing bogus implementations many times.  It's not always easy to create a clean and thread-safe abstract factory implementation, so I definitely see the point in a framework helping me to specify these in a declarative way and that would take care of managing the pool of objects, their cardinalities, etc...

PicoContainer does away with XML and writes everything in Java, which makes more sense to me, and except for the incomprehensible requirement that all your dependencies need to be declared in the constructor (a constraint the creators eventually relaxed after years of pressure coming from the community), it seems to be doing a reasonable job.  It's amazing that it took so long for the creators to understand that this inane and bigoted requirement made PicoContainer inapplicable for any kind of pooling

For a more critical and colorful take on PicoContainer, see [ Hani's recent post](http://www.jroller.com/page/fate/20050328#picocontainer_tagnuts_from_a_thousand).

I won't discuss the XWork section of that article since it seems to me XWork is much more than just an IoC container so using it for just this purpose would be very overkill.

Overall, I am still baffled about the excitement around these containers, and I'm beginning to think that they are actually only used by a small minority of very, very vocal people...
