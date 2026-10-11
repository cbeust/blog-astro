---
title: A better data binding model
date: '2010-09-26T21:07:36'
slug: a-better-data-binding-model
categories:
- General
comments:
- id: 8467
  author: Jo??o Assun????o
  date: '2010-09-27T00:32:20'
  content: Have you checked OSGI EventAdmin? It also provides a publish/subscribe model and since Eclipse uses OSGI it already comes bundled with Equinox. Anyway it probably wouldn't beat the simplicity of use that you show with JBus.
  replies: []
- id: 8468
  author: Stephen Coleboune
  date: '2010-09-27T06:30:15'
  content: Take a look at the Joda-Beans projects, where I'm building some property-support code. Maybe your work could build on that?
  replies: []
- id: 8469
  author: Christian Gruber
  date: '2010-09-27T08:05:10'
  content: 'This was the model that NeXTSTEP (and modern-day Cocoa) uses with NSNotificationCenter, etc.  A global message bus (which can be distributed for fun and profit.

    I''ve long loved this model - pub/sub across a stnadard part of the stack - register to listen for some combination of message types, senders, expected receivers, etc., and ignore the rest.  More or less app-level ethernet.  I''ve not seen JBus, I''ll take a look.

    c'
  replies: []
- id: 8470
  author: Christian Gruber
  date: '2010-09-27T08:08:56'
  content: 'Actually, the distributed message bus in NeXTSTEP made great use of Mach Messaging which was lightning fast on-machine, since it was a copy-on-write memory reference overlay - thanks Avie Tevanian.  Off-machine, it made use of a distributed object system which simply propagated the notifications nicely.

    This actually can scale, if you start using decent infrastructure to carry the messages.  Several enterprise-class message bus systems could easily be the underlying inter-computer transport system for this.

    c.'
  replies: []
- id: 8471
  author: Cedric
  date: '2010-09-27T08:12:37'
  content: I'm not convinced that high performance is even a requirement for a local bus since GUI actions will probably dwarf whatever time it takes to deliver messages locally.
  replies: []
- id: 8472
  author: Christian Gruber
  date: '2010-09-27T08:14:14'
  content: 'Oh local bus, absolutely.  It only becomes an issue with remoting.  And you can do switch-like behaviour to ensure that local messages work fast even if there''s remote notification propagation.

    BTW, here''s the modern doc on NSNotifiationCenter

    http://developer.apple.com/library/ios/#documentation/cocoa/reference/foundation/Classes/NSNotificationCenter_Class/Reference/Reference.html'
  replies: []
- id: 8473
  author: Bradley Schaefer
  date: '2010-09-27T09:01:27'
  content: 'This strongly reminds me of a project I dabbled with around 2002 called Werx. It looks pretty abandoned, and your solution is clearly more lightweight/generic, but still you may want to take a look at what they were doing with it.

    http://sourceforge.net/projects/werx/'
  replies: []
- id: 8474
  author: Paulo Gaspar
  date: '2010-09-27T09:42:37'
  content: 'Qi4J follows a similar approach:

    http://www.qi4j.org/qi4j/174.html'
  replies: []
- id: 8475
  author: Neil Bartlett
  date: '2010-09-27T15:18:09'
  content: 'You say you invented this approach while working on an Eclipse plug-in.

    Did you take a look at JFace Data Binding (http://wiki.eclipse.org/index.php/JFace_Data_Binding)? Or even EMF (http://www.eclipse.org/modeling/emf/)?'
  replies: []
- id: 8476
  author: Cedric
  date: '2010-09-27T18:11:23'
  content: 'Neil,

    Yes, I started with JFace Data Binding. I had two problems with it:

    1) It''s a bit buggy. It worked fine for edit texts and check boxes but as soon as I started using more complex widgets such as editable Combos, the bindings stopped working.

    2) It still doesn''t address the coupling problem (you are tying your views directly to your model, and in an n*m fashion instead of n+m).'
  replies: []
- id: 8477
  author: Mohamed Mansour
  date: '2010-09-27T18:38:38'
  content: Thanks for the nice explanation. You write beautifully! I like this approach, very simple and produces clean and elegant code. I have used a similar approach (non generics)  for  a different concept, EJB/Client notifications.
  replies: []
- id: 8478
  author: rod
  date: '2010-09-28T01:33:02'
  content: Cedric, do you plan to share your JBus implementation somehow (as you usally do :o) ) ?
  replies: []
- id: 8479
  author: Nicolas Delsaux
  date: '2010-09-28T05:54:41'
  content: 'Seems like more or less half of the Java developpers, one day or another, decided it was time for them to fight the dragon of PropertyChangeListener ...

    Like all others, I did my try (very similar to Joda-beans) : http://code.google.com/p/majick-properties/

    Unfortunatly, we are not alone.

    Sun/Oracle also tried to cope with that issue in JavaFX (through the excellent binding concept). And hopefully, this part will survive the JavaFX 2.0 generation, and as a consequence become available (before the end of 2011) for the whole Java world. Cedric, do you think your JBus will have more power inside than JavaFX inspired binding promise to ?'
  replies: []
- id: 8480
  author: Frank Bolander
  date: '2010-09-28T07:10:54'
  content: 'Have you thought about using JMX as your message bus?

    It might address your "ubiquitous" concern since there are already standard JVM hooks and you can tear off a reference to the MBean.'
  replies: []
- id: 8481
  author: Erkki Lindpere
  date: '2010-09-28T09:39:04'
  content: 'I have used JFace Data Binding in the past for pretty complex stuff, it worked well for me, even before the first version was officially released.

    Haven''t used it in a while though, and I think your approach might be better. This should actually even work in the web (with Comet)!'
  replies: []
- id: 8482
  author: Erkki Lindpere
  date: '2010-09-28T09:44:08'
  content: 'Another thought: in case of Scala, a compiler plug-in could easily generate properties that have lesser overhead than using an object for each property.

    How would this work with collection changes, though? As I remember, with JFace Data Binding, it was possible to bind a whole table to a collection and individual cells to properties of the row models.'
  replies: []
- id: 8483
  author: Sony Mathew
  date: '2010-09-28T10:12:33'
  content: 'Good stuff..

    We have been using the concept of Event Bus for a while now.  We just call it the EventManager - a reference to which can be obtained via IoC anywhere within our code base to fire &amp; listen to Events including anywhere on the client or server-side.  We even have an underlying framework to remote explicitly marked Events to all interested remote Listeners.  Makes a single concept of Event Bus available everywhere in all layers reliably &amp; consistently.  It also incorporates the concept of listening to a Category of Events.

    Full description of EventManager available here:

    http://sonymathew.blogspot.com/2010/01/gwt-jee-blueprint.html

    The EventManager class is Simple &amp; Lite &amp; completely independent of 3rd party libraries of any kind including devoid of any GWT (our client layer) and also devoid of any java reflection as it needs to compile in GWT and run on the Browser along with its use in other layers of the application.

    We need to adopt your ideas around Property and PropertyChangeEvent riding a-top our EventManager.  Very useful approach to reducing the boiler plate of property firing and listening.  We currently create explicit Events for each interesting change (property or otherwise).'
  replies: []
- id: 8484
  author: sumit
  date: '2010-09-28T11:26:02'
  content: 'Did you try:

    http://www.eventbus.org/'
  replies: []
- id: 8485
  author: Rickard ??berg
  date: '2010-09-28T19:33:20'
  content: "As Paulo said, Qi4j implemented properties as Property pretty much from the start, and since it does mixins rather than traits there's no problem with keeping state. Another point is that we allow for generic mixin implementations (i.e. use Dynamic Proxy invoke() style for the mixin), which allows state in models to be declared as interfaces which then get backed by a generic property-mixin. Example:\ninterface MyModelState\n{\n   Property someState();\n}\nwhich the model can then get injected and backed by a generic property-mixin that does the state management and event-firing.\nAs for the actual event stuff I concluded the same (=no need to have views register on specific models), but instead of registering every view (or model actually, since our models are backed by a REST API, and that is what creates the events), we instead register the \"top node\" in the event mechanism and then that has to propagate events to subnodes. The point of that is that otherwise each part has\
    \ to know when it is removed and properly unregister itself. By getting the parent to propagate the event that problem goes away.\nWe also send all events to everyone instead of doing the filtering in the bus. The point of that is we can then use the Specification pattern in the listener, which can filter on type, source, value, or any other part of the event. Since this is UI code the amount of active event consumers at any given time is pretty low (10-20, max).\nBecause the property is declared in an interface the listener can reuse that (=removes use of strings) as its specification, like so:\nclass MyModelStateListener\n  implements MyModelState\n{\n  Property someState()\n  {\n  }\n}\nPut a wrapper around this that takes an event and check if the given class is interested, and if so reflectively call someState().set(...)\nWorks pretty well."
  replies: []
- id: 8486
  author: Rickard ??berg
  date: '2010-09-28T20:22:14'
  content: The previous comment looks a bit screwed up because of lack of &lt; &gt; encoding. Property syntax should be as Cedric outlined.
  replies: []
- id: 8487
  author: Ross Judson
  date: '2010-12-15T11:58:04'
  content: 'Have a look at

    http://wiki.java.net/bin/view/Javadesktop/AutoBuild

    I did that a few years back as an exploration of the same sorts of ideas. Bottom line is that you can infer a heck of a lot from signatures and names, if you want to.'
  replies: []
- id: 8488
  author: SlowStrider
  date: '2011-06-06T04:56:24'
  content: "The approach I took was to extend all my objects that need property change support from an AbstractJavaBean super classwhich has the required add* and fire* methods together with a set(String propertyAndFieldName, Object value,\n\t\t\tString... computedProperties) method that uses reflection to determine the value of the property and any dependent properties before and after the change. Works fine in practice!"
  replies: []
---

If you have ever implemented a user interface, you have more likely been confronted with the problem of data binding and notification: whenever a value in your model changes, how do you update your user interface to reflect the new values? 

In Java, the standard solution is to use `PropertyChangeSupport` and `PropertyChangeListener`, but I have always found this approach very cumbersome and hard to scale. In this post, I will explain why and I'll offer what I think is a superior solution. 

### The problem with PropertyChangeSupport

Here are the main issues with `PropertyChangeSupport`: 

#### Extreme boilerplate

Any bean or model class that wants to notify the rest of the world that its value changed needs to include the following: 

```java
public class SomeBean {
 private PropertyChangeSupport changeSupport = new PropertyChangeSupport(this);
 public void setProperty(String newValue) {
  String oldValue = property;
  property = newValue;
  changeSupport.firePropertyChange("propertyName", oldValue, newValue);
 }
 public void addPropertyChangeListener(PropertyChangeListener l) {
  changeSupport.add(l);
 }
 public void removePropertyChangeListener(PropertyChangeListener l) {
  changeSupport.remove(l);
 }
}
```

That's a lot of code for something that should be very simple. 

Note that this code looks like it might be a candidate for a trait (the kind you find in Fantom or Scala). A trait (or mix-in) is a class with several restrictions that other classes can "import" directly as part of their implementation. If we defined a `PropertyChangeSupport` trait, any class importing this trait would automatically expose the three methods defined above. 

The problem is that most trait implementations impose certain restrictions on how you can specify your trait, and one of them is that they can usually not carry state (no fields). Since a property change support will usually carry at least one if not two pieces of state (the change support object and maybe the name of the property), I'm not convinced that traits would be useful here. If anything, only languages that support multiple inheritance of implementations would allow some of this boiler plate to be reduced (e.g. C++). 

#### Extreme coupling

In order for a GUI element to update itself when a value on the model changes, it needs to add itself as a listener on that model. For example, you can imagine that if a name changes in the mode, the user interface will want to update a label and a window title. If you do the math, you will see that "n" user interface elements that need to monitor "m" model objects will result in n*m couplings. And of course, your model and your view are now very tightly coupled, which adds even more problems. 

#### Extreme data exposure

Because Java doesn't natively support properties, not only do you find yourself having to specify your setters manually, you also need to remember to fire the appropriate `PropertyChangeEvent` whenever a value changes. This is not only error prone, it also exposes you to the dilemma of deciding whether you want to fire such events for model objects that don't directly impact the GUI at the moment (what if they do at some point in the future?). 

### Epiphany

All these considerations started bugging me quite a bit recently as I was busy working on an Eclipse plug-in. I was multiplying the number of `PropertyChangeSupport` objects throughout my models and mostly extending the same class over and over (if I was lucky) or just copy/pasting the code above (most of the time). I strongly disliked the amount of pollution that was beginning to invade my code and I started considering alternatives. 

And then, I remembered [a post that I wrote a few months ago](http://beust.com/weblog/weblog/2010/07/26/local-message-bus/) about "local buses". It occurred to me that if I could insert a message bus between the model and its listeners, then the two worlds would become completely decoupled. On top of that, I might be able to add some kind of property support that would hide most of the complexity. 

### JBus and properties

My implementation of the local bus is very small and very simple and is similar to what I described in the blog post linked above: listeners are methods and they declare themselves with a `@Subscriber` annotation. These methods are expected to accept one parameter which represents the class of the event they are interested in. 

Here is a quick example: 

```java
public class App {
  @Subscriber
  public void event1(NotifyEvent ne) {
    System.out.println("event1: " + ne);
  }
}



JBus mb = new JBus();
jb.register(new App());
jb.post(new NotifyEvent("notify"));
```

This is the first part of the plumbing. GUI elements that want to receive updates will simply declare themselves as subscribers for certain types of events (typically, `PropertyChangeEvent`, but it doesn't have to be restricted to that). 

The second part is to automate the publication of events as much as possible, and I ended up creating a class `Property` for this. Here is an example of how to use it: 

```java
public class Person {
  // A property that the GUI is interested in
  private Property<String> name;
  // A field that the GUI is not interested in
  private int age;
  public void setName(String n) {
    name.set(n);
  }
}
```

The first thing you notice is that because they are of type `Property`, properties that publish events are easy to identify in the code. Additionally, properties will automatically publish events whenever their setter is invoked, which imply that 1) they need to have an instance of the message bus and 2) they need to know the name of the property that changes will be published under. 

Therefore, the `Property` constructor looks like this: 

```java
public class Property<T> {
  public Property(JBus bus, String propertyName, Object source) { ... }
}
```

The source is optional but if you specify it, it will make it possible for events to be discriminated based on where they came from, which has several practical uses. 

### Benefits

As soon as I converted my code to using `JBus` and `Property`, I noticed a radical decrease in boiler plate code and a dramatic increase in flexibility. Whenever a new model appears, making it publish events is trivial. Whenever I introduce a new graphic element that needs to update itself, I no longer need to find a way to locate the model object(s) it's interested in and add itself as a listener: all I need is the name of the property. 

### Limitations

Here are a few downsides to the `JBus` approach: 

#### Bus ubiquity

In order for this approach to work, model objects and graphic user interface elements must have a pointer on the message bus used to exchange events. In effet, I am transforming an "m * n* dependency graph into an "m + n" one, with all m and n depending on the message bus. The bus is becoming the central piece on which all event entities depend. 

Is this a bad thing? I'm not sure. From a design perspective, I still think that the general decoupling that results from the introduction of the bus is too flexible to ignore. From an implementation standpoing, having this kind of uber object present everywhere can be a concern but dependency injection frameworks make this a non-issue. 

Another potentially interesting aspect that I haven't explored is that you don't need to restrict yourself to having just one instance of a bus. If certain parts of your applications are completely isolated from the others, you might want to create a specific bus just for them since this will speed up the look up and delivery of events. I'm not sure that the performance improvement would be noticeable in general, though. 

#### The property name

While we have almost entirely decoupled models and GUI elements completely, they are still connected by two tiny pieces of information: the bus and the name of the property. The downside of this approach is that the coupling is no longer statically typed and if you ever change the name of a property, you need to make sure that all the subscribers get updated as well. I haven't seen this as a big issue so far and you can always increase your comfort level by having these classes reference to the same string constant (thereby re-introducing a little bit of coupling). 

If this is still too loosely coupled to your taste, you can always decide to have your GUI element bind itself to the Property directly. In this case, the GUI element no longer even needs to have an instance of the bus, but you are also getting dangerously close to the problem you were trying to solve in the first place. 

#### Performance

JBus uses reflection to calculate recipients of event messages, which is probably slower than when your GUI objects add themselves as listeners of your model objects. I am planning to improve the performance of JBus in that respect (with a lot of caching since the reflection information will not change once an instance of the bus has been created) but you are also not limited to JBus. You can always implement your own concept of a software bus and make it work without any reflection at all. 

In practice, my gut feeling is that the overhead caused by reflection will probably be dwarfed by the delays found in the GUI anyway, so I'm not too worried about that. 

### Potential improvements

While I started implementing JBus as a generic local bus framework, the fact that it's so useful as a property change publication mechanism made me wonder if I shouldn't provide some specialization for specific use cases, namely making special cases for `PropertyChangeEvent`, which is likely to be the even that is the most used. 

For example, JBus allows you to publish events in certain "categories" (strings) and allowing listeners to only receive events if they have declared an interest in the type of that event *and* the fact that it was published in the same category. I noticed that it's often convenient to publish property change events automatically assigned to the category that matches the property's name. 

### Interfaces vs method listeners

The way JBus matches events to listeners is not very different than the way you do it with listeners, except that listeners defined in interfaces force you to implement the entire interface, even when you are not interested in all the lifecycle methods. The `@Subscriber` annotation allows you to only receive notifications for the events you are interested in. 

In conclusion, data binding user interfaces to models with a message bus provides more flexibility and allows you to decouple your domain objects completely. I'm hoping that this approach will help me build user interfaces that are able to manage their consistency without as much work as the `PropertyChangeSupport` approach requires.
