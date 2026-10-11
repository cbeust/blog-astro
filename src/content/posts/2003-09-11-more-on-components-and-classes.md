---
title: More on components and classes
date: '2003-09-11T11:08:32'
slug: more-on-components-and-classes
categories:
- Java
comments:
- id: 508
  author: jennifer aniston zone diet
  date: '2004-11-04T13:11:35'
  content: 'Hi - I was looking for some political sites with articles on the recent US election and found your nice site. The comments from others on here are pretty good so I just thought I''d add my thoughts also!

    Elaine Cooper'
  replies: []
---

Anthony offered some [interesting thoughts](http://weblog.anthonyeden.com/archives/000016.html) on classes and components, but I believe he is not pushing the idea far enough, which leads to some very unpractical considerations, such as:

> Thus methods should not return values because it is the events which are used to determine the results 

This is clearly at odds with the way we program today, and probably will be for many years to come.

The solution out of this dilemma is to think of classes and components as orthogonal features.  You don't need to compromise one to get the other.  They complement each other very nicely.  I believe Anthony's misdirected view comes from the fact that he makes a one-to-one relationship between a class and a component (and even a one-to-one relationship between a method and an event).  Things do not need to be coupled that finely, although it can occasionally happen.

Just like a component can span over several classes, an event doesn't necessarily map to one single method.

The way I see it, which is very reminiscent of the way COM developers have been programming these past years, you can start by writing your application the normal way, and then identify components and events as you go by.  Of course, you can also identify these components and events in the design phase, as long as you don't make the mistake of tying them tightly to the way you are going to design your classes.

Once you have your application, you can start sprinkling event firings wherever you see fit.  You can also notice that a set of classes taken together can form a component, hence mimicking the metaphor of the integrated circuit.  Then you can choose to formalize this component using your favorite component model (whether it already exists or will be invented one of these days).

When you look at your application from "above", it doesn't matter if a component uses one or several classes or if methods return values.  These are implementation details that are inside your integrated circuit.  You need to understand them if you want to modify the behavior of your component, but they are of no use to you if all you need is the component itself, with its attributes and its events.

This vision is relatively simple and it's too bad that the only component model that might come close to allowing us to achieve it is JavaBeans, because this specification is very primitive and encourages bad component programming practices, such as implying an isomorphism between classes and components.

I have very high hopes that a better component model leveraging JSR 175 will emerge and will allow us to achieve a similar degree of component reuse as the one we see in COM today.
