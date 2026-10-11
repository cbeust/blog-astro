---
title: You've been implementing main() wrong all this time
date: '2012-03-25T16:36:45'
slug: dependency-injection
categories:
- Java
comments:
- id: 9422
  author: Dmitriy
  date: '2012-03-25T18:04:58'
  content: 'A good basic introduction to Dependency Injection.

    And the reason to use Guice vs. Spring is?'
  replies: []
- id: 9423
  author: Hani Suleiman
  date: '2012-03-25T18:08:10'
  content: If you're a civilized human being and don't hate yourself, you can use Spring's AnnotationConfigApplicationContext and avoid all xml, in which case this post is equally applicable except for different class names. In that case there's no reason to use Guice at all.
  replies: []
- id: 9424
  author: RichB
  date: '2012-03-26T00:36:52'
  content: And I thought you were going to say that main() should always return a return code. Guess not.
  replies: []
- id: 9425
  author: Pat
  date: '2012-03-26T05:28:08'
  content: Not using IoC does not mean you've been implementing main() wrong. You can also use a good old Factory to give access to configuation information while being able to switch implementation if needed ;-)
  replies: []
- id: 9426
  author: Parwinder Sekhon
  date: '2012-03-26T09:51:20'
  content: I got to say I much prefer instantiating classes and passing them in via the constructors rather than auto-magical injection.  Built quite a few complex systems this way, I've never really got to the point where I think the api is compromised.  Perhaps if it does compromise the api, its an indication that the abstractions are wrong?
  replies: []
- id: 9427
  author: Loshmi
  date: '2012-03-26T21:49:04'
  content: '"Similarly, you will want to inject objects that can??t necessarily be instantiated so early in the lifecycle of your application...".

    If you use dynamic proxies that is not the problem. If you look at CDI (jsr299). You will see that this is solved in an elegant manner.'
  replies: []
- id: 9428
  author: sake
  date: '2012-03-27T17:03:32'
  content: There is only *ONE* main mehod in a program.  I don't see why any software engineer kung fu should make any drastic difference.
  replies: []
- id: 9429
  author: Julien Ponge
  date: '2012-03-27T21:36:28'
  content: 'The good old main() method is not necessarily bad, it all depends the size of your application :-)

    IMHO you should always prefer constructor-injection over field-injection, be it for object references and providers. Field-injection means magical things happen for you, tying you to a DI container for your class to work. This can be problematic, especially when writing tests, as with field injection you need to introduce extra-constructors or setter methods if you want to be able to put your object in a consistent state.

    Constructor-injection doesn''t have such problems: your objects get in a coherent state from the get-go, and this loosens the coupling with a DI container. It also forces you to think right about your class dependencies.

    I agree with Parwinder: if you end up having too much parameters in your constructors then it''s more likely to be a sign that your API design needs some second thinking than a sign that you should switch to field injection because you have too much fields to worry about.

    Finally on final fields: it indeed rarely happened to me that a field was being reassigned. Nevertheless final fields mix well with constructor-injection as the compiler won''t let you miss their initialization.'
  replies: []
- id: 9430
  author: Cedric
  date: '2012-03-27T21:42:34'
  content: 'Julien: I don''t see why there is any more magic in field injection than in constructor injection. And since you say that, just like me, you were never bitten by a bug that final fields protect you from, the case for final fields is weak at best...'
  replies: []
- id: 9431
  author: Julien Ponge
  date: '2012-03-27T21:49:19'
  content: 'Well my point was that if you have a private field and rely on field-injection, then you have to introduce back-doors for non DI settings, most likely to write tests. Or you need to load and configure a DI container in your tests, which probably defeats the benefits of DI (less coupling, etc).

    That''s why I personally prefer constructor-injection as it makes class dependencies explict via the constructor(s) parameters, but I understand that not everybody will necessarily share this view ;-)'
  replies: []
- id: 9432
  author: Martin
  date: '2012-03-28T00:43:08'
  content: '"Making the Config object static would make your instance visible to your entire code base."

    I''m not sure you''ve explained how using DI has made the instance ''less visible''. Sure, we can no longer write Config.getInstance() anywhere in the code, but we can still write @Inject Config config in any Guice-managed object.

    If we actually wanted to make it less visible, we could make it package private, but we could do that without Guice.

    I''m not saying that DI doesn''t have benefits, just that I don''t find your argument very convincing.'
  replies: []
- id: 9433
  author: Joonas Javanainen
  date: '2012-03-28T02:48:06'
  content: '"In that case there??s no reason to use Guice at all."

    I''m going to have to strongly disagree. I''ve used Spring in most of my projects, and it definitely has many good parts. However, if we only look at DI, there''s one major difference: Spring is internally based on String names, Guice is internally based on Class objects (= "types").

    Even if you use only Java-based configuration with Spring, you are actually dealing with configuration that is based on bean names, not bean types. In a large application there is a fair chance of having name conflicts. It''s of course a developer error, but the bad thing is that you might not get any errors. Guice is very strict about configuration, and will most likely fail early with an error. Spring is very relaxed and will happily let you shoot yourself in the foot.

    I''ve blogged about this difference here:

    http://jawsy.fi/blog/2011/11/29/spring-vs-guice-the-one-critical-difference-that-matters/

    Nowadays I tend to go with Guice unless I need all the extra non-DI stuff from Spring. Also, to be fair, Guice has one huge wart too: implicit bindings. That''s IMHO the worst feature ever in a DI-framework, but at least it can be disabled.'
  replies: []
- id: 9434
  author: Josh Berry
  date: '2012-03-28T04:56:38'
  content: I don't think I can downvote this enough.  The comment of there only being one main method pretty much sums it up.  I would vote that the larger mistake most people make is that they don't run the applications they are making.  This makes it so that the problem most programmers solve is "how to write a program" not "whatever the program was made to do."  Is it any wonder we have so many inventive ways of writing programs, with so many lousy programs that solve problems?
  replies: []
- id: 9435
  author: Colm
  date: '2012-03-28T12:05:11'
  content: 'On a slight tangent. Maybe a dumb question, not up on Guice: If instead of injecting some global state into Deep you wished to inject per request state, is there an idiom for doing that? For example if you wanted to inject the authenticated principal for a request into Deep, or the client''s locale preferences or whatever, basically some piece of data you don''t want to have to clutter all your argument lists with (because most methods in the call stack don''t care about it), but at the same time isn''t global state either. Seems like DI should be able to help here, but also seems to have a large knock on effect in terms of how many instances of Deep the DI container needs to create etc, should it assume one per thread etc etc.'
  replies: []
- id: 9436
  author: Moandji Ezana
  date: '2012-03-29T02:52:29'
  content: '@Colm

    "inject per request state, is there an idiom for doing that?"

    Yes, you can do that quite easily in Guice, even if Deep is a singleton. If Deep is itself created for every request, then you can inject normally. If Deep has a longer lifecycle than what''s being injected, you''d use a Provider.'
  replies: []
- id: 9437
  author: Victor
  date: '2012-07-16T09:53:45'
  content: '@Cedric Did you really mean "Injector.getInstance()" or Guice.createInjector(new ...Module...()).getInstance()" ? I think the issue for most Guice beginners is the lack of deeper recipes for getting started.'
  replies: []
- id: 9438
  author: Philip Schwarz
  date: '2012-08-26T02:57:37'
  content: 'The following patterns in "Dependency Injection in .NET" (don''t be put off if you are a Java developer) address the question of when to use different types of injection:

    <b>Constructor Injection</b>

    How do we guarantee that a necessary Dependency is always available to the class we??re currently developing?

    BY REQUIRING ALL CALLERS TO SUPPLY THE DEPENDENCY

    <b>Property Injection</b>

    How do we enable DI as an option in a class when we have a good Local Default?

    BY EXPOSING A WRITABLE PROPERTY THAT LETS CALLERS SUPPLY A DEPENDENCY IF THEY WISH TO OVERRIDE THE DEFAULT BEHAVIOR.

    <b>Method Injection</b>

    How can we inject a Dependency into a class when it??s different for each operation?

    BY SUPPLYING IT AS A METHOD PARAMETER.

    <b>Ambient Context</b>

    How can we make a Dependency available to every module without polluting every API with Cross-Cutting Concerns?

    BY MAKING IT AVAILABLE VIA A STATIC ACCESSOR.'
  replies:
  - id: 9439
    author: Cedric
    date: '2012-08-26T06:02:59'
    content: 'Philip:

      I have nothing against .Net and actually, I''m always interested in learning more about it, but in this case, I really don''t see how what you''re saying adds anything without code examples and how it is different from what Guice provides.

      Also, the recommendation to use statics to perform injection is wrong, wrong, wrong. We are using dependency injection to get rid of statics.'
    replies: []
- id: 9440
  author: Philip Schwarz
  date: '2012-08-26T07:36:50'
  content: 'Hi Cedric,

    &gt;I have nothing against .Net

    sure, exhortation "don??t be put off if you are a Java developer" was not aimed at you, rather at any reader of your post who may be inclined to dismiss the book just because it is in part aimed at a different platform than the one they are currently specialising in. It is a great book.

    &gt; I??m always interested in learning more

    Me too, that''s why I read your blog posts

    &gt; I really don??t see how what you??re saying adds anything without code examples and how it is different from what Guice provides.

    Yes code examples would probably help.  What led me to comment was your favouring of field injection over constructor injection: there are arguments that the opposite approach is preferable. One place where I came across such view is in the book I mentioned. I only had a modicum of time to invest in writing a comment, so in the hope of enticing people into reading the book I thought I''d whet their appetite by  listing the high-level details of the book''s four injection style patterns. I should have explained that the patterns are listed in order of applicability: more often applicable patterns first.

    Another book in which I have seen contructor injection favoured over setter injection is "Growing Object-Oriented Software Guided by Tests" http://www.growing-object-oriented-software.com/

    See Nat Pryce''s "Dependency Injection Considered Harmful" for a taste of that book''s argument: http://www.natpryce.com/articles/000783.html

    Also related: http://blog.schauderhaft.de/2012/01/01/the-one-correct-way-to-do-dependency-injection/

    &gt; I really don??t see how... it is different from what Guice provides.

    The injection patterns are not ''DI framework''-specific. The whole book is one big argument against four common misconceptions about DI:

    * DI is only relevant for late binding.

    * DI is only relevant for unit testing.

    * DI is a sort of Abstract Factory on steroids.

    * DI requires a DI CONTAINER.

    Much of the book''s content, is about DI, not about DI containers.

    &gt; the recommendation to use statics to perform injection is wrong, wrong, wrong. We are using dependency injection to get rid of statics.

    yes, ''Ambient Context'' is the least applicable pattern. In the author''s words: "AMBIENT CONTEXT should only be used in the rarest of cases. In most cases, CONSTRUCTOR INJECTION or PROPERTY INJECTION is far more suitable, but you may have a true CROSSCUTTING CONCERN that would pollute every API in your application if you had to pass it along to all services. WARNING: AMBIENT CONTEXT is similar in structure to the SERVICE LOCATOR antipattern.... The difference is that an AMBIENT CONTEXT only provides an instance of a single, strongly-typed DEPENDENCY, whereas a SERVICE LOCATOR is supposed to provide instances for every DEPENDENCY you might request. The differences are subtle, so be sure to fully understand when to apply AMBIENT CONTEXT before you do so. When in doubt, pick one of the other DI patterns."

    Philip'
  replies: []
---

Since the very early days of Java (and C-like languages overall), the canonical way to start your program has been something like this: 

```java
public class A {
  public static void main(String[] args) {
    new A().run(args);
  }
  public void run(String[] args) {
    // Your application starts here
  }
}
```

If you are still doing this, I'm here to tell you it's time to stop. 

### Letting go of 'new'

First, install Guice in your project: 

```xml
        <dependency>
          <groupId>com.google.inject</groupId>
           <artifactId>guice</artifactId>
           <version>3.0</version>
        </dependency>
```

and then, modify your `main` method as follows: 

```java
public class A {
  public static void main(String[] args) {
    Injector.getInstance(A.class).run(args);
  }
}
```

So, what does this buy you exactly? 

You will find a lot of articles explaining the various benefits of Guice, such as being able to substitute different environments on the fly, but I'm going to use a different angle in this article. 

Let's start by assuming the existence of a `Config` class that contains various configuration parameters. I'll just hardcode them for now and use fields to make the class smaller: 

```java
public class Config {
  String host = "com.example.com";
  int port = 1234;
}
```

This class is a singleton, it is instantiated somewhere in your main class and not used anywhere else at the moment. One day, you realize you need this instance in another class which happens to be deep in your runtime hierarchy, which we will call `Deep`. For example, if you put a break point in the method where you need this config object, your debugger would show you stack frames similar to this: 

```java
com.example.A.main()
com.example.B.f(int, String)
com.example.C.g(String)
com.example.Deep.h(Foo, int)
```

The easy and wrong way to solve this problem is to make the `Config` instance static on some class (probably `A`) and access it directly from `Deep`. I'm hoping I don't need to explain why this is a bad idea: not only do you want to avoid using statics, but you also want to make sure that each object is exposed only to objects that need them, and making the `Config` object static would make your instance visible to your entire code base. Not a good thing. 

The second thought is to pass the object down the stack, so you modify all the signatures as follows: 

```java
com.example.A.main()
com.example.B.f(int, String, Config)
com.example.C.g(String, Config)
com.example.Deep.h(Foo, int, Config)
```

This is a bit better since you have severely restricted the exposure of the `Config` object, but note that you are still making it available to more methods than really need to: `B#f` and `C#g` have really nothing to do with this object, and a little sting of discomfort hits you when you start writing the Javadoc: 

```java
public class C {
  ...
  /**
   * @param config This method doesn't really use this parameter,
   * it just passes it down so Deep#h can use it.
   */
  public void g(String s, Config config) {
```

Unnecessary exposure is actually not the worst part of this approach, the problem is that it changes all these signatures along the way, which is certainly undesirable in a private API and absolutely devastating in a public API. And of course, it's absolutely not scalable: if you keep adding a parameter to your method whenever you need access to a certain object, you will soon be dealing with methods that take ten parameters, most of which they just pass down the chain. 

Here is how we solve this problem with dependency injection (performed by Guice in this example, but this is applicable to any library that implements [JSR 330](http://www.jcp.org/en/jsr/detail?id=330), obviously): 

```java
public class Deep {
  @Inject
  private Config config;
```

and we're done. That's it. You don't need to modify the `Config` class in any way, nor do you need to make any change in any of the classes that separate `Deep` from your main class. With this, you have also minimized the exposure of the `Config` object to just the class that needs it. 

### Injecting right

There are various ways you can inject object into your class but I'll just mention the two that, I think, are the most important. I just showed "field injection" in the previous paragraph, but be aware that you can also prefer to use "constructor injection": 

```java
public class Deep {
  private final Config config;
  @Inject
  public Deep(Config config) {
    this.config = config;
  }
```

This time, you are adding a parameter to the constructor of your `Deep` class (which shouldn't worry you too much since you will never invoke it directly, Guice will) and you assign the parameter to the field in the constructor. The benefit is that you can declare your field `final`. The downside, obviously, is that this approach is much more verbose. 

Personally, I see little point in `final` fields since I have hardly ever encountered a bug that was due to accidentally reassigning a field, so I tend to use field injection whenever I can. 

### Taking it to the next level

Obviously, the kind of configuration object I used as an example if not very realistic. Typically, a configuration will not hardcode values like I did and will, instead, read them from some external source. Similarly, you will want to inject objects that can't necessarily be instantiated so early in the lifecycle of your application, such as servlet contexts, database connections, or implementations of your own interfaces. 

This topic itself would probably cover several chapters of a book dedicated to dependency injection, so I'll just summarize it: not all objects can be injected this way, and one benefit of using a dependency injection framework in your code is that it will force you to think about what life cycle category your objects belong to. Having said that, if you want to find out how Guice can inject objects that get created at a later time in your application life cycle, look up the Javadoc for the [`Provider`](http://google-guice.googlecode.com/git/javadoc/com/google/inject/Provider.html) class. 

### Wrapping up

I hope this quick introduction to dependency injection piqued your interest and that you will consider using it in your project since it has so much more to offer than what I described in this post. If you want to learn more, I suggest starting with the excellent [Guice documentation](http://code.google.com/p/google-guice/wiki/Motivation).
