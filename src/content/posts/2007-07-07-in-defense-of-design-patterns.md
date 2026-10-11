---
title: In defense of Design Patterns
date: '2007-07-07T10:43:12'
slug: in-defense-of-design-patterns
categories:
- General
comments:
- id: 6788
  author: Aristotle Pagaltzis
  date: '2007-07-07T12:28:02'
  content: '> I highly respect the practice of criticism, but if is not followed by concrete proposals to remedy the problem, I find the attitude very questionable.

    I think you misunderstood something.

    Dominus says that design patterns are a sign of a deficiency of a language for the purpose that the design pattern addresses. In other words, the Visitor pattern used in Java points to the fact that Java is deficient in terms of list processing: the `map` and `filter` constructs need to be emulated with lengthy OO incantations.

    He is _not_ saying that the use of design patterns _as such_ is bad. He is saying they are a sign of a deficiency.

    If someone said that having to verbosely reimplement parameter pushing/stack unwinding to implement the Subroutine pattern in assembler, over and over, what "alternative" would you think it points to?

    Right. Choose a language that does not require you to write rote code to solve your problem.'
  replies: []
- id: 6789
  author: Jesse Kuhnert
  date: '2007-07-07T20:13:21'
  content: 'Aristotle:

    That is a thought I''ve never seen put in to words so clearly.'
  replies: []
- id: 6790
  author: Mark Dominus
  date: '2007-07-07T22:21:48'
  content: 'You said:

    > Criticizing Design Patterns is like saying that the nuts and bolts that keep a bridge together shouldn''t be designed with templates and cookie cutters found in factories, but instead, be more open to the creative thoughts of engineers.

    I don''t think that is an apt analogy; I don''t think software "design" is at all analogous to picking out  the basic nuts and bolts that keep a bridge together.

    A "design pattern" isn''t a simple, interchangable component like a nut or a bolt.  It isn''t going to appear duplicated identically in the design a million times.  A "design pattern" is an arrangement of objects and classes, complex components already, that solve a recurring design problem.

    But if that kind of trivial component is really what "design patterns" is all about, then "design patterns" have even less to do with real design than I said they do.  My main point in "Design Patterns Aren''t" was that "design patterns" are misnamed, because they have nothing at all to do with the thing that Alexander called "design patterns".

    If you really do think that that is what software design is principally concerned with, I think you have argued my own point much more convincingly than I did:  the name, and the attempt to link to Alexander''s work, is completely wrong, and we need to go back to Alexander''s books to see what his idea was, because it is something that could be very useful that we don''t have, although we think we do.

    And I would suggest that you should do that too, because it seems that me that your idea about the sort of architectural design issue that Alexander is concerned with, and why, does not have very much to do with what he actually talks about in his book.

    Thanks for your interest in my silly talk.'
  replies: []
- id: 6791
  author: Dan Creswell
  date: '2007-07-08T02:39:54'
  content: 'Aristotle,

    "Right. Choose a language that does not require you to write rote code to solve your problem."

    The thing is that we don''t solve everything via basic patterns/support in the _language_.  Design is way deeper than this.  Basically, I believe you are only partially correct in respect of the above.

    IMHO design patterns are about _design_ and go way beyond _language_ level issues.  The reason design exists is because you _can''t_ solve everything in the language - there''s always some confining assumption in it''s own design that prevents it.

    Once we get to distributed systems design, patterns at that level go well beyond individual language choice etc and have to factor in elements such as failure, latency, bandwidth etc.

    One can argue that the patterns presented in GoF are all about single-process concerns but there''s a pile of patterns that live outside that world.

    In summary, patterns aren''t about language they are about solving issues with system design.  And systems design is concerned with much more than just what is dealt with in the programming language.'
  replies: []
- id: 6792
  author: xhszthvq
  date: '2007-07-08T03:34:29'
  content: qceqoasa  prdtasxg http://ptmahrgu.com zbfceaqx mysdagyf  [URL=http://vahctuqy.com]rnvqnkqh[/URL]
  replies: []
- id: 6793
  author: zgncurtm
  date: '2007-07-08T03:36:26'
  content: sbyykmxt  [URL=http://ngvirlue.com]yowmasfr[/URL]  iupnwlvt http://nuefebdq.com abpbrnin tlxlyecz
  replies: []
- id: 6794
  author: hqmhfdpj
  date: '2007-07-08T03:38:08'
  content: vovpynrl  [URL=http://lzlbwwzl.com]fslgheur[/URL]  ybvgsonn http://csdnrpcr.com qzmflutt xtnvcubr
  replies: []
- id: 6795
  author: Bruce Snyder
  date: '2007-07-08T09:06:34'
  content: '> One can argue that the patterns presented in GoF

    > are all about single-process concerns but there''s

    > a pile of patterns that live outside that world.

    >

    > In summary, patterns aren''t about language they

    > are about solving issues with system design. And

    > systems design is concerned with much more than

    > just what is dealt with in the programming

    > language.

    I believe Dan has hit the nail on the head. For many years I''ve described the difference between solutions and patterns being that true patterns exist for solving system design problems, no matter what language being used to implement the given system. Whereas solutions, like EJB design patterns, are very specific to EJBs only. They do not exist in any other language because EJBs are specific to the Java language (and because the EJB specs at the time were woefully inefficient and riddled with issues). A pattern will probably be implemented a bit differently in each language where it is applied and that is fine. The point is that patterns are established to identify best practices at solving design issues.

    In the integration work I do, I utilize the EIP patterns (http://enterpriseintegrationpatterns.com/) quite a lot because they are established, well-known and provide a language to discuss the solution to integrating disparate systems. The simple fact of identifying the pattern and it''s application to the problem provides a set of terminology to discuss the system design which in itself can be very valuable. And, IMO, this is another great point of patterns. They help us identity and discuss well-known system design issues.'
  replies: []
- id: 6796
  author: Frank Bolander
  date: '2007-07-08T13:54:15'
  content: 'Isn''t the whole point of a language to BE deficient. As long as it provides a reasonable substrate of atomic elements(structures, controls,etc.), it''s up to the design/designer to composite a solution. With deficiencies, there are more degrees of freedom for the solution space and higher degrees for "artful" expression. With design patterns, at least there a semblance of a Lingua franca to communicate higher level design concepts independent of the implementation. (The jabs at java and C++ smacked of being a red herring in Mr. Dominus'' presentation).

    The problem with Design Patterns is that they have lost their utility as design pattern offshoots exploded and abuses increased. Occam''s "entities should not be multiplied beyond necessity" is applicable here I think. I''m not sure it''s appropriate to blame a language for complexity abuses of it''s users.

    As far as the construction analogies, there are definite design patterns in play in architectural design. OK nuts and bolts may not be the best examples, but there are recurring structures used in the "higher level" design such as beams, struts, door assemblies, electrical outlet locations,restrooms, etc. Would these be considered deficiencies in architecture?'
  replies: []
- id: 6797
  author: ''
  date: '2007-07-09T03:52:25'
  content: I also think Design Patterns are a sign of deficiency in the programming language, but I disagree with reamining with deficient languages. Taking that idea to an extreme, we would still be programming in Assembly and re-implementing the sub-routine "Design Pattern".
  replies: []
- id: 6798
  author: Gabriel Handford
  date: '2007-07-09T17:00:14'
  content: 'Using a design pattern, for example, to overcome lack of support for closures in a language is pointing out a deficiency.

    But some patterns are language agnostic and are common ways of separating concerns (or dealing with cross-cutting concerns) like MVC, Inverson of Control, or some EIPs.

    Unless the NBL is SQL on Rails (taking the VC out of MVC), I am keeping my design patterns book :)'
  replies: []
- id: 6799
  author: Jesse Kuhnert
  date: '2007-07-09T17:47:42'
  content: 'Heh...Damn you rails developers ;)

    In the instance of "Inversion of Control" I think one could easily argue that that feature could find more usefulness if it were in the language proper.  The Guice way of static typing via annotations seems to be a natural fit for that sort of thing...

    Upon further reflection I think the secret key point everyone was trying to point out is that these different meaning software "patterns" are  created to solve common __problems__.  That is where the deficiency lies.

    It''s also possible that every language for the next 100 years will always be imperfect in some way and require these damned patterns, but it makes them no less a sign of deficiency because of it..

    (not even getting in to the idea of dynamically attaching functionality to things as being more of the true meaning behind this "original" book they reference than the one after it that helps guide people through OOP warts)'
  replies: []
- id: 6800
  author: Jesse Kuhnert
  date: '2007-07-09T18:54:45'
  content: 'Correction: Most of what I''ve said here has been totally pulled out of my a-- but it is fun to talk about and I''m glad the post was made....with that said I guess maybe Gabe does have a point about MVC in particular.  I''m sure someone smarter than me could point out the flaw and solution to that problem but until then I''ve always hated html related things that mixed up server side/html code together.  ...I think....not as much on the client side maybe. whatever....'
  replies: []
- id: 6801
  author: Aristotle Pagaltzis
  date: '2007-07-15T14:36:05'
  content: It should be noted that I got confused about what Cedric and Jeff Atwood were talking about. They are referring to MJD
  replies: []
- id: 6802
  author: Sony Mathew
  date: '2007-07-16T13:54:48'
  content: 'I think you have mixed several concepts.

    Patterns, Principles, and Components.  I think of these - Patterns can be more readily replaced from project to project but Principles and Components less so.'
  replies: []
- id: 6803
  author: Charlie Hubbard
  date: '2007-07-31T13:35:49'
  content: 'But, visitor pattern allows you to alter what behavior is applied to an object based on a set of known types.  The map and filter "primitives" visit all the items of a list.  The same function gets called regardless of type.  In order to alter behavior you''d have to make a calls to both filter and map for each type you want to visit.

    That might work, but it doesn''t setup a way to repeat the process for differing behavior.  Using map and filter don''t setup a reusuable architecture by themselves.

    On the flip side of this there isn''t anything holding us back from making map(), filter() and reduce() in Java.  It''s really pretty easy.'
  replies: []
- id: 6804
  author: Asd
  date: '2007-09-19T03:38:30'
  content: 'I think the dynamic language fans are missing the point of design patterns. The intent is what is important, not the implementation. A function passed to map is still a visitor. An object in scala is still a singleton.

    The Strategy and State patterns in Java are the same class structures, but the intent is different. In Ruby, Python etc. the implementation of both will usually just be functions, but that doesn''t mean you aren''t using the patterns.'
  replies: []
- id: 6805
  author: Alex Miller
  date: '2007-09-19T15:08:00'
  content: As a writer of some blogs critical on design patterns, I felt I needed to post  and agree with Cedric's basic ideas.  I think design patterns are important as a way for us to talk about real things we see in code all the time.
  replies: []
- id: 6806
  author: Howard Lovatt
  date: '2007-09-19T18:14:47'
  content: 'I think that deign patterns have come in for to much criticism of late, they are a very useful tool for documenting the programmers intent and to enable a discussion of design trade offs. Sure you can over use them, but that is like anything. At least with a design pattern you are able to say something like "the use a singleton in this instance makes testing difficult". The design pattern has provided a language by which we can all discuss the problem.

    I like design patterns so much my own pet project:

    http://pec.dev.java.net/nonav/compile/index.html

    is an extended Java compiler that allows explicit marking of the role a class plays in a design pattern, consider it an extension of type checking.'
  replies: []
- id: 6807
  author: Carlos
  date: '2009-04-20T00:25:13'
  content: '> software engineering is nowhere near as advanced as building engineering is

    Problem is building engineering is based on physic''s laws that, although, not perfect, workeable.

    Software construction is governed by logic and ultimately Turing''s incompletness result: an unbreakable barrier... it will never be like building.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/design-patterns.jpg)

It's interesting to see that the [Design Patterns book](http://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional/dp/0201633612/ref=pd_bbs_sr_1/104-0955641-4420745?ie=UTF8&s=books&qid=1183829777&sr=8-1) has been coming under mild fire lately. I say "mild" because what I have seen so far is more of a criticism than an all-out attack. 

Over the past year, I have been giving a presentation called "Designing for Testability" in which I offer a few recommendations and observations on what a developer needs to do to make their code more testable. 

When I started thinking about this topic, I was surprised to realize that some of the guidelines that one needs to follow in order to make one's code more testable are directly at odds with some principles that we have taken for granted for such a long time. The principles under attack come from various areas, such as object-oriented programming and, not surprisingly, Design Patterns such as those described in the book. I'll list two of these ideas below just to give you an idea, but I'll save a deeper discussion of what I mean for a future post, since I'd like to make a different point in this article. 

Here are some of the principles you need to question if you want to make your code more testable: 

  * Extreme encapsulation. It's a good OO principle, but it can make testability challenging. 
  * The Singleton pattern. While Singletons themselves are not necessarily harmful, their recommended implementation so far -- using static methods and variables -- usually leads to code that's hard to test. 


Having said that, I think the characterization that "Design Patterns aren't", [from a presentation given by M. Dominus in 2002](http://perl.plover.com/yak/design/samples/slide001.html), is wrong on many points, as is the more recent [follow-up by Jeff Atwood on the same topic](http://www.codinghorror.com/blog/archives/000899.html). 

In this article, I find that the author is doing two questionable things: 

  * Criticizing Design Patterns without offering an alternative. 
  * Making a parallel between Alexander's construction Design Patterns and software ones. 
The first point is probable more of a personal one: I highly respect the practice of criticism, but if is not followed by concrete proposals to remedy the problem, I find the attitude very questionable. Like we say, _"La critique est facile, l'art est difficile"_. 

The second point deserves a more lengthy response. 

Alexander's book leaves a lot of room for art and personal creation, which shouldn't come as a surprise: building is indeed an art, and the final work needs to be both safe and functional **and** pleasant to the eyes of onlookers, residents and occasional visitors alike. 

The part of art in software engineering is, in my opinion, much more restricted. There is only so much beautiful code or harmonious class hierarchies that you can create. Conversely, the foundation of a software architecture must obey a lot of fairly strict rules in order to be solid, maintainable and evolvable. 

Criticizing Design Patterns is like saying that the nuts and bolts that keep a bridge together shouldn't be designed with templates and cookie cutters found in factories, but instead, be more open to the creative thoughts of engineers. 

There is a reason why it's important to establish a clear separation between Alexander's Design Patterns and the GOF's Design Patterns: software engineering is nowhere near as advanced as building engineering is. We are still working on these nuts and bolts, and whenever a new software project starts, we still can't be sure it won't collapse under its own weight after just a year. To make a parallel: imagine a world where every time a new construction takes place (say, a bridge), the future of that bridge depends on the team of engineers and workers you choose to build it... 

Scary thought. It's a relief to think that while we might still be building ugly buildings and towers, we can be reasonably sure that the engineering principles that underlie these constructions are scientifically sound and empirically proven, and that these building won't collapse into a pile of twisted metal for no reason. 

The reality is that we are still struggling in software to reach this kind of certainty. We haven't quite invented software nuts and bolts yet, but the GOF's Design Patterns book is a very good start that no software engineer should ignore. Yes, there is a good amount of cookie cutter recipes in this book, but I see this as a good thing. The more templates we come up with to lay out software foundations, the more software developers will be allowed to focus on aesthetic considerations. 

Our software needs to be solid before it can be beautiful.
