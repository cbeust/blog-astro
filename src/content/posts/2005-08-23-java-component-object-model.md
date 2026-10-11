---
title: Java Component Object Model
date: '2005-08-23T06:00:16'
slug: java-component-object-model
categories:
- Java
comments:
- id: 4148
  author: ''
  date: '2005-08-23T09:30:31'
  content: http://jcp.org/en/jsr/detail?id=277
  replies: []
- id: 4149
  author: Cedric
  date: '2005-08-23T09:34:02'
  content: 'JSR 277 doesn''t even come close to addressing these issues.  All it does is solve the easy problems, and only their static part.

    What we really need is a way to make Java components available at runtime desktop-wise (e.g. IDL) and a way to invoke said components safely.'
  replies: []
- id: 4150
  author: Cedric M.
  date: '2005-08-23T10:50:24'
  content: 'You should have a look to OSGi if you haven''t yet. Eclipse 3 plugins'' architecture is based on it.

    http://www.osgi.org

    http://oscar.objectweb.org

    http://eclipse.org/osgi'
  replies: []
- id: 4151
  author: Robin
  date: '2005-08-24T01:16:19'
  content: 'Eclipse RCP might be prefect but is limited today to desktop based applications. What is missing today is the same kind of framework at the Enterprise level.

    If I look at SOAs, I see the same problems of versioning and dependencies without a clear, obvious and generally accepted solution.

    http://blogs.ittoolbox.com/eai/applications/'
  replies: []
- id: 4152
  author: Robin
  date: '2005-08-24T01:16:44'
  content: 'Eclipse RCP might be prefect but is limited today to desktop based applications. What is missing today is the same kind of framework at the Enterprise level.

    If I look at SOAs, I see the same problems of versioning and dependencies without a clear, obvious and generally accepted solution.

    http://blogs.ittoolbox.com/eai/applications/'
  replies: []
- id: 4153
  author: ''
  date: '2005-08-24T04:02:26'
  content: '> JSR 277 doesn''t even come close

    But you''ve got to start somewhere...'
  replies: []
- id: 4154
  author: Shitasam Suitam
  date: '2005-08-25T10:09:42'
  content: 'Otaku,

    U a genius! Send me some java componets!'
  replies: []
- id: 4155
  author: Frank Bolander
  date: '2005-08-25T14:36:46'
  content: 'I think the Corba Component Model(CCM) spec addresses a lot of the issues you present here:

    http://www.omg.org/docs/formal/02-06-69.pdf

    Unfortunately, the spec is sort of fugly and is DOA after waiting so long.

    The ideas are good though :)'
  replies: []
- id: 4156
  author: kapil
  date: '2005-10-02T06:07:15'
  content: Is there any component framework available for java (like COM) ? It should be as simple as possible to implement and as properly defined and structured so that can be extended in future, something like that. so that one can ask any team doing any project to just follow these specifications and at the end of the project PM can pick reusable components and put it into its code reuse library etc. I searched all the internet but could not find something like that for reference except one at "http://www.onjava.com/pub/a/onjava/2005/03/23/components.html" please help me if you have some more information regarding this. If you can send me some links or example software component architecture then that will be very greatful to you ! Thanks.
  replies: []
- id: 4157
  author: Itu Ranjan Behera
  date: '2008-01-02T05:02:18'
  content: I need java component plz help i know u can help me urgent
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/lego.jpg)

In a [previous entry](http://beust.com/weblog/weblog/archives/000312.html), I discussed how using mix-ins lets you compose your code to a finer level and allows you to create smaller bundles of functionalities that you can import and use on demand.

Of course, it is quite possible to take this practice too far and end up with code that is not only broken down too much but also spends most of its time exchanging messages between its various components using more complex communication ways than it should.  Sometimes, it just makes sense to group certain methods and fields in the same class.

Formalizing the communication between units of code is a subject that has received very little exposure until recently, and when you are trying to pass information between different classes (A to B) or different packages, you typically use one of the following techniques:

  * Have A create an instance of B with the right parameters and invoke a method on it.
  * Have A create an empty instance of B, call a few setters then invoke a method on it.
  * A receives an instance of B that has been created somewhere else and invokes a method on it.



The hard coupling of A and B is a topic that has already been covered many times and can be improved by either using interfaces or dependency injection.  However, there is a third way to accomplish this that I am hoping will be used more and more:  use a plug-in architecture.

I have written quite a few Eclipse plug-ins these past years (and more recently, RCP applications) and I started noticing two very interesting trends in the code that this environment made me produce:

  1. Resuming development on a plug-in I hadn't worked on for a while was very easy, because the various parts of the plug-ins were so clearly isolated from each other that I only needed to brush up on a very small portion of my code to be able to modify it.  
 
  2. Adding features to an existing plug-in didn't require understanding the existing code base:  all you need to do is read some documentation about the area that your plug-in will depend on and focus on that part only.



 In case you were wondering about the reasons behind the explosion of Eclipse plug-ins, look no further:  the reasons are outlined above, and the bottom line is that the learning curve to add to existing code with the Eclipse model is extremely small (and can actually go down over time).  When new developers join your project, they don't need to learn a new architecture because that architecture has been formalized by Eclipse and everybody now agrees on how the plug-ins are declared and how they interact with each other.  The rest is, literally, implementation details.

The net result of this new paradigm is that all Eclipse plug-ins and RCP applications are nothing more than a set of isolated modules that gravitate around the Eclipse core. 

Another interesting thing about this architecture is that even the communication between these plug-ins is formalized.  Not only does the plug-in model offer all the benefits of dependency injection, it also formalizes how you can receive notifications from other plug-ins, how you can emit notifications yourself and more importantly, hides all the details pertaining to upgrades, classloading, and, of course, provides an impressive set of functionalities that cover everything you will ever need for a client-side application, including integration with the host operating system (Windows, MacOS and GTK/Gnome).

Thanks to Eclipse and the RCP, Java is finally on its way toward having a true component model.  Still not as powerful as COM (only in-process mode is supported), but definitely one step closer.
