---
title: 'TestNG and Guice: a marriage made in heaven'
date: '2010-12-10T19:20:30'
slug: testng-and-guice-a-marriage-made-in-heaven
categories:
- General
comments:
- id: 8555
  author: Georg
  date: '2010-12-11T01:40:50'
  content: Great. Simple and very usable - but I guess it should be guicemodules instead of guiceModule, because sometimes you have more than one configuration modules.
  replies: []
- id: 8556
  author: Gunnar
  date: '2010-12-11T14:20:32'
  content: 'Hi Cedric,

    I like the itention behind the change - making Guice easier to use in tests. But I see some issues with its current implementation:

    * You are introducing one special concept/technology - Guice - into the otherwise very generically usable TestNG. I think these things shouldn''t be mixed up, in especially this adds conceptual complexity for all those people using TestNG but not Guice.

    * Currently any classes are allowed as annotation value for "guiceModule", but actually only classes implementing Module make sense here. So one rather should have something like

    Class[] guiceModules() default {};

    Obviously this can''t be done in @Test itself. Therefore I think it would be better to have a separate annotation such @GuiceModules which can be specified next to @Test to define the modules to use.

    Alternatively one could think of an annotation @GuiceTest which resembles @Test but adds the new module attribute.

    Both ways any non-Guice users could work with @Test as before without stumbling upon a new annotation attribute which doesn''t make sense to them and any Guice users could specify modules for their tests in a safe way.

    Gunnar'
  replies: []
- id: 8557
  author: Gunnar
  date: '2010-12-11T14:29:26'
  content: 'Just saw some characters from my comment were swallowed. It should say

    Class&lt;? extends Module&gt;[] guiceModules() default {};

    (So in case this doesn''t work again, what I mean is to restrict the allowed classes to sub-types of Module ("? extends Module")).'
  replies: []
- id: 8558
  author: Ruslan Zenin
  date: '2010-12-12T05:30:15'
  content: 'Cedric,

    Great addition to TestNG! I happen to use Guice extensively and TestNG as well... this will definitely help simplify things!

    Having said that, I agree with Gunnar''s point on having "guiceModules" moving out of @Test annotation into a separate Guice specific annotation like @GuiceModules. This will make it cleaner.

    Please give it a thought!

    regards,

    Ruslan'
  replies: []
- id: 8559
  author: Cedric
  date: '2010-12-12T08:07:13'
  content: 'Gunnar: I agree, the final version will do what you suggest. Stay tuned!'
  replies: []
- id: 8560
  author: Gunnar
  date: '2010-12-12T14:17:18'
  content: That's great news, I'm looking forward to the new draft.
  replies: []
- id: 8561
  author: Frederic Fortin
  date: '2010-12-21T06:37:42'
  content: 'Hi,

    I''m fairly new to both TestNG and Guice but from my understanding of DI, the test classes should''nt contain any annotation binding them to the module.  To me this would be like creating a dependency on a factory.  I might be missing something here but how would a test class be reusable in multiple Guice modules?

    Perhaps you could make a module referencable from the xml files just like the object factory is so that a single test class can be used in multiple modules without having to change annotations with classes themselves.

    Please let me know if this does not make any sense.  I''m on a learning road :-)'
  replies: []
- id: 8562
  author: Announcing TestNG 6.0 &laquo; Otaku, Cedric&#039;s blog
  date: '2011-03-15T14:56:54'
  content: '[...] TestNG which Guice module(s) should be used to create the instance of a given test. Here is the original blog post that started the discussion (note that the syntax changed slightly since then) and the direct link to the [...]'
  replies: []
- id: 8563
  author: Logan
  date: '2011-08-01T06:54:24'
  content: 'I''ve been using this IObjectFactory for years and indeed, it is very useful to TestNG until now.

    I''ve also used guiceModule attribute of the @Test annotation in order to modify my build files.

    Thanks for Sharing'
  replies: []
- id: 8564
  author: Luicer@Nikenya.com
  date: '2011-10-13T21:08:28'
  content: Hello! I like this informative ideas about TestNG since we are also looking forward to have our 'roll  in your own' dependency framework for test classes using Weld, but this is really cool as well. Thanks for your frame work!
  replies: []
- id: 8565
  author: Lynkez@Nikenya Domain Names
  date: '2011-11-07T20:52:28'
  content: I am a fan of IObjectFactory on Test NG and glad to recieve the good news about GuicerModule. Thumbs up!
  replies: []
---

TestNG has allowed users to control the instantation of their objects for a while now (around 2007). 

This is enabled by the `IObjectFactory` interface: 
    
    
    public interface IObjectFactory extends Serializable {
      Object newInstance(Constructor constructor, Object... params);
    }
    

Implement this interface, let TestNG know about your implementation and whenever TestNG needs to instantiate a test class, it will call the `newInstance` method of your object factory. This allows for a lot of flexibility, and interestingly, this interface appeared in the TestNG distribution long before Dependency Injection became as popular as it is today. 

[`IObjectFactory`](http://testng.org/javadocs/org/testng/IObjectFactory.html) has been very useful to TestNG users throughout the years, but the emergence of Dependency Injection has made its existence even more important. More and more TestNG users want to inject their test classes with DI frameworks, and over the past few months, I have noticed a sharp increase in [Guice](http://code.google.com/p/google-guice/) users. 

`IObjectFactory` obviously works great with Guice (and Hani and I documented this extensively in [our book](http://www.amazon.com/Next-Generation-Java-Testing-ebook/dp/B0013TOXIW)) but the increased number of questions on the [mailing-list](http://groups.google.com/group/testng-users) prompted me to wonder if I couldn't make this easier on Guice users. 

As it turns out, the answer is yes. 

Meet my little new friend, the `guiceModule` attribute: 
    
    
    @Test(guiceModule = GuiceExampleModule.class)
    public class GuiceTest {
      @Inject
      ISingleton m_singleton;
      @Test
      public void singletonShouldWork() {
        m_singleton.doSomething();
      }
    }
    

And that's it! No need for `IObjectFactory` or modifying your build files, everything you need is contained in this new `guiceModule` attribute of the `@Test` annotation. 

Obviously, this module needs to create the necessary bindings for the `@Inject` annotation to work properly, for example: 
    
    
    public class GuiceExampleModule implements Module {
      @Override
      public void configure(Binder binder) {
        binder.bind(ISingleton.class).to(ExampleSingleton.class)
            .in(Singleton.class);
      }
    }
    

With this new attribute, using TestNG with Guice has never been easier. Try it for yourself, [download the beta](http://testng.org/beta) and [tell us what you think!](http://groups.google.com/group/testng-users)
