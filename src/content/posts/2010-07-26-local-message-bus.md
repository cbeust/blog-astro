---
title: Local message bus
date: '2010-07-26T09:09:59'
slug: local-message-bus
categories:
- General
comments:
- id: 8322
  author: Igor
  date: '2010-07-26T11:04:00'
  content: 'Google Web Toolkit  has an implementation of Event Bus. Not quite sure if it is what you are looking for (since it is targeted for JavaScript and doesn''t have annotation support or fancy dispatching) but it is type-safe and easy to use. Just thought you might be interested to take a look at it.

    Regards,

    Igor.'
  replies: []
- id: 8323
  author: Guillaume
  date: '2010-07-26T11:39:44'
  content: 'CDI in Java EE 6 has something very similar.

    Publisher and subscribers are completely decoupled.

    In the publisher, you simply ask to be injected with an Event (T being the event type).

    In the subscriber(s), you have an @Observer annotation that you place on a method parameter.

    http://www.adam-bien.com/roller/abien/entry/java_ee_6_observer_with

    BTW, it is not tied to Java EE 6 and can be used standalone (see the Weld implementation reference).'
  replies: []
- id: 8324
  author: nullin
  date: '2010-07-26T14:45:40'
  content: 'Sounds like a good idea but I don''t think it can replace the existing listener support. Even though the interfaces are still all called listeners thats not exactly how they are being used.

    This is because the code calls the methods on these interfaces synchronously. So, it quite easy for many folks to have started depending on the fact that once a method in a listener is invoked, they can do an operation without being worried about the test execution continuing.'
  replies: []
- id: 8325
  author: Adam
  date: '2010-07-26T20:58:18'
  content: 'HornetQ can be embedded:

    http://hornetq.blogspot.com/2009/09/hornetq-simple-example-using-maven.html'
  replies: []
- id: 8326
  author: Cedric
  date: '2010-07-26T22:20:30'
  content: 'Nalin:

    The message bus system would still be synchronous, so that wouldn''t be a problem. As an option, it could offer to run publishers and subscribers on different threads down the road, but that''s not a requirement for v1.'
  replies: []
- id: 8327
  author: Mohan Radhakrishnan
  date: '2010-07-26T23:17:54'
  content: Dojox wires had support for publish/subscribe. Don't know if it is possible to use it with the Javascript engine in Java ?
  replies: []
- id: 8328
  author: Josh Long
  date: '2010-07-26T23:30:49'
  content: Very good post! Note that RabbitMQ does not - in fact - implement JMS, but AMQP. (which I'm sure you knew...)
  replies: []
- id: 8329
  author: Tim
  date: '2010-07-27T05:24:07'
  content: 'Very interesting! I''m a huge proponent of the message bus system and would love to see a good clean implementation.

    But regarding your JMS and RabbitMQ comment, I''m not sure that I understand that one. Aside from a hacked OpenAMQ JMS client, I don''t know how you can talk to RabbitMQ using JMS since JMS != AMQP. Am I missing something here? Would be great if I could use JMS interfaces with RabbitMQ without a hacky solution.'
  replies: []
- id: 8330
  author: Derek Young
  date: '2010-07-27T06:26:53'
  content: Spring provides some services like you describe, for example with the ApplicationListener interface.  There's also the Spring Integration project that does messaging both within and between applications.
  replies: []
- id: 8331
  author: vinays
  date: '2010-07-27T23:20:06'
  content: I think Spring Integration is very nice framework and you can have channels working as listenres subscribers and easy to use.
  replies: []
- id: 8332
  author: David Bernard
  date: '2010-07-28T22:51:01'
  content: 'I thinks mycila-events should match your need (lighter than EventBus, annotation support but use of annotation is not mandatory, ...). The authors did the same analyze as yours.

    http://code.google.com/p/mycila/wiki/MycilaEvent

    /davidB'
  replies: []
- id: 8333
  author: Ramesh
  date: '2010-07-30T08:59:12'
  content: How about http://www.hammurapi.com/dokuwiki/doku.php/products:event_bus:start
  replies: []
- id: 8334
  author: wanderer99
  date: '2010-08-19T03:13:32'
  content: Check out the OSGi whiteboard pattern. I've found that this is really the most flexible mechanism for implementing the listeners and subscribers. In this model, listeners simply place themselves in a known location and it's up to publishers to decide who gets each events.
  replies: []
- id: 8335
  author: Mike Rettig
  date: '2010-08-22T08:29:56'
  content: 'http://www.jetlang.org

    Jetlang only requires the JDK.  The simple clean api can be used for basic messaging scenarios as well as highly concurrent performance critical messaging platforms.

    Mike Rettig

    Jetlang Developer'
  replies: []
- id: 8336
  author: Ken
  date: '2010-09-27T08:26:01'
  content: Mule esb has a local bus built in called the vm transport that does exactly what you describe.
  replies: []
- id: 8337
  author: Bruno Ranschaert
  date: '2011-06-03T12:18:21'
  content: I created an implementation following Cedrics ideas which is available on GitHub https://github.com/branscha/lib-messagebus.
  replies: []
- id: 8338
  author: myles
  date: '2011-10-04T01:22:43'
  content: 'the newly released version of Guava seems to contain an implementation:

    http://docs.guava-libraries.googlecode.com/git-history/v10.0/javadoc/com/google/common/eventbus/package-summary.html'
  replies: []
---

Recently, I started wondering how I could improve the TestNG listener architecture. 

TestNG exposes a lot of different listeners, which users can specify before starting a test run (using either of the command line, ant, Maven, testng.xml or programmatically). 

These listeners tell you whenever: 

  * A test succeeds, fails or is skipped. 
  * A test method is about to be called and when it returns. 
  * A configuration method starts or finishes (there are five types of each: suite, test, class, method and group, and you have a before and an after event for each). 
  * A reporter should be notified to update its results (either at the end of the suite run or after each test methd). 
All these listeners are captured [by](http://testng.org/javadocs/org/testng/IInvokedMethod.html) [different](http://testng.org/javadocs/org/testng/IReporter.html) [interfaces](http://testng.org/javadocs/org/testng/ISuiteListener.html) and they have evolved somewhat organically over these past six years as the needs and requests emerged, showing some overlap in functionalities and also requiring the awkward interface evolution that Java imposes ([exhibit A](http://testng.org/javadocs/org/testng/IAnnotationTransformer.html) and [exhibit B](http://testng.org/javadocs/org/testng/IAnnotationTransformer2.html)). 

One possible solution to such a problem is a message (or event) bus. 

Message buses have been around for a very long time and most of [my PhD thesis](http://picasaweb.google.com/lh/photo/wTJOoGA-teAcWiq0fgWLW5W9A4YlyCGvBl_1gZdsJDM?feat=directlink) revolved around their usage and their impact on distributed applications. I even wrote one for my PhD called [Koala Talk](http://old.koalateam.com/ftp/pub/KoalaTalk/koalatalk.html). This was around 1993, almost twenty years ago. 

The _de facto_ standard in the Java world is the JMS specification, which has been implemented in many products such as ActiveMQ or RabbitMQ. Both the specification and implementations have been battle tested and proven to be of great usefulness for today's software. 

However, JMS is overkill for what I need to do. First of all in terms of functionalities, but also more simply because I need a local software bus, one that will always be passing messages within the same JVM. No network is necessary. 

The message bus model brings a lot of simplification to a listener heavy framework such as TestNG. Instead of having to decide which interface and which method are applicable when, all TestNG needs to do is publish events as a test run is progressing. Where these events get handled and who they eventually reach is resolved outside of the TestNG engine. 

Another benefit is that looking at the system in terms of events will allow to remove quite a bit of overlap. For example, in TestNG, you can be notified both when a suite finishes and when your reporter should start doing its work (generating reports). Most of the time, these events coincide. 

I started sketching out what such an API could look like and I came up with the following very early draft: 

```java
public class App {
  @Subscriber
  public void event1(NotifyEvent ne) {
    System.out.println("event1: " + ne);
  }
}



MessageBus mb = new MessageBus();
mb.register(new App());
mb.post(new NotifyEvent("notify"));
```

Receivers describe the kind of events they are interested in and publishers simply post these events. With these ideas in mind, I started looking around to see if anything like this exists and I quickly came across [EventBus](http://eventbus.org/), by Michael Bushe. 

EventBus turns out to be remarkably close to what I had in mind, including annotation support and type based dispatching. EventBus also supports all kinds of other mechanisms, some I had in mind (string based publishing with regexp matching, event inheritance) and a few others I didn't think of (vetos). 

EventBus seems to be very extensive, very well designed and tested (nice job, Michael!), but probably too big for what I need. It also contains quite a few ties to Swing because it apparently started as a support library for Swing applications that publish events (something that Swing developers have to deal with all the time). Admittedly, there is a portion of EventBus that seems to be graphic independent, but I haven't been able to really understand its full extent and whether it's possible to carve it out at all (I have no interest in dragging in Swing dependencies). 

Interestingly, it's the only library of that type that I was able to find, so before I dig further, has anyone heard of a framework allowing the kind of simple intra JVM publish/subscribe functionality I'm looking for?
