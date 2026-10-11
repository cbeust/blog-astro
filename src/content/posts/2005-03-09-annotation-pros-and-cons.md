---
title: Annotation pros and cons
date: '2005-03-09T09:40:18'
slug: annotation-pros-and-cons
categories:
- Java
comments:
- id: 3255
  author: Tiago Silveira and the world
  date: '2005-03-10T09:44:38'
  content: '<strong>The annotation golden hammer</strong>

    I''ll start with this simple statement:  Annotations are nothing more than well-formed comments .

    If you didn''t read  this post  from Cedric Beust, you should start there. I agree with  Ted Neward  when he says:

    See, the idea of metadata was la'
  replies: []
---

[ Mike Keith](http://www.oracle.com/technology/pub/columns/annotations_opinion.html) posted a very good summary of annotations and also cover some limitations of the specification.  [ Ted commented](http://www.neward.net/ted/weblog/index.jsp?date=20050309#1110359972433) on some of them and I'd like to take this opportunity to share my viewpoint.

Mike deplores the absence of inheritance and the fact that you can't use ` null` as a default value.  I can sympathize with his disappointment since I was one of the strong advocates of these two features in the JSR-175 committee, both of which got eventually voted down.

Inheritance was deemed too hard to specify, which is a fair point since we are talking about entities which are "almost" interfaces but not quite.  There was also some concern about resolving annotations when multiple inheritance is involved and also what happens when overriding of annotation occurs and, worse, when the two overriding annotations are defining different attributes.

The impossibility of defining `null` as a default keyword still bothers me to no end as of today, but I have to confess that just like Ted, I don't recall the specifics of forbidding it.  I just remember that they sounded convincing :-)  (to be fair, Neal spent a great deal of time explaining on the alias why it was a big issue for the compiler and that it was close to impossible to achieve).

So if we want annotation inheritance, tools will have to define their own.

With my work on [EJBGen](http://beust.com/weblog/ejbgen) and [TestNG](http://beust.com/weblog/testng) these past years, I have been exposed to a lot of feedback on the use of inheritance in annotations and I believe the rules defined in TestNG have reached a reasonable semantics that seems to provide a great deal of flexibility of power.  I have covered these rules in some of [ my](http://beust.com/weblog/weblog/archives/000250.htmlhttp:/www.beust.com/weblog/archives/000170.html) [ past](http://beust.com/weblog/weblog/archives/000250.htmlhttp:/www.beust.com/weblog/archives/000170.html) [postings](http://www.beust.com/weblog/weblog/archives/000170.html) but I will probably post another entry describing how inheritance, overriding and partial overriding work in TestNG soon.
