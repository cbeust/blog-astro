---
title: Accessors and DTO's
date: '2004-02-27T08:18:15'
slug: accessors-and-dtos
categories:
- Java
comments:
- id: 1193
  author: bangroot
  date: '2004-02-27T09:03:29'
  content: 'i agree whole-heartedly that uniformity is key. but i can''t believe that you are agreeing on the seperation of Objects and Data Structures. Not to get wrapped up in practical versus theory, shouldn''t we start every Class with the intent to make it a first-class Class and not relegated to being dumb?? Isn''t that a critical difference between OO and procedural blocks of code?

    I know that many Class don''t end up growing up this way, and yes, my applications have dumb classes as well. But, I also believe that if I took the time to do some good refactoring, they would own behaviour as well.

    Thanks for  a great blog.'
  replies: []
- id: 1194
  author: Anthony Eden
  date: '2004-02-27T09:39:05'
  content: Yet another fine example of where a decent properties syntax would be helpful.
  replies: []
- id: 1195
  author: Frank Bolander
  date: '2004-02-27T09:53:06'
  content: 'Accessors also represent a conversational contract with the Object itself. You may get a DTO from a Service component but the internal representation of that DTO/VO may have orthogonal aspects triggered by the getter and setters ala PropertyChangeListener or internal setDirty() type of semantics. Public field assignment locks you into the dumb objects "bangroot" mentioned above.

    I''m not sure how you would handle delegation with public field assignment only. Direct field assignment of composite objects that have internal delegates would be just as hairy as providing accessors to do the same task.

    I remember this same argument back in the day when everyone was going from C to C++ and there was the problem of defining what was a Data Structure and what was an Object.'
  replies: []
- id: 1196
  author: Dan Moore
  date: '2004-02-27T10:03:40'
  content: 'You make a good point about objects evolving, but this comes down to how far in the future you want to design for.  And the uniformity problem you mention can be mitigated if you have hard and fast naming convention (''oh, this is FooDTO, I use FooDTO.name'').

    I''ve found this link which splits objects into three types: DTOs, Service Oriented Objects, and Flyweights.  From Bill Venner''s unfinished book (http://www.artima.com/interfacedesign/ServiceOriented.html): "...there''s really a spectrum between state and behavior, and that every object design lands somewhere on the state-behavior spectrum."  I think this is a useful distinction for this discussion.'
  replies: []
- id: 1197
  author: Ben Eng
  date: '2004-02-27T18:14:50'
  content: 'The motivation for DTOs using getters and setters instead of allowing public access to fields, is the encapsulation of the data structure using an interface. This in itself is not very valuable.

    The value lies in refactoring the DTO interface(s), as you refactor your algorithms to become more generic (!). Algorithms should be refactored to access what I normally call "capabilities" of of DTOs; for example, a reserve() algorithm should depend only on a Reservable capability of a DTO (such as Channel or Port).'
  replies: []
- id: 1198
  author: Jamie
  date: '2004-11-04T13:13:39'
  content: Salut
  replies: []
- id: 1199
  author: free big boob pix
  date: '2004-11-12T12:05:17'
  content: Found your site from another blog and wanted to see where I could find more info
  replies: []
---

Rob Martin [ wonders](http://www.artima.com/weblogs/viewpost.jsp?thread=36312) whether Data Transfer Objects (DTO, also known as value objects) should have accessors or not:

> The programmer was _aghast_. "DTOs are _always_ made with private variables and getters and setters!" he said. "Why?" I asked. 

Rob argues that DTO's should not have accessors but only public fields, which should be the only way to access them:

> In my view OO programs contain two kinds of entities: Objects and Data Structures [...] On the other hand there is no good reason to use getters and setters in a data structure. A data structure is simply a packet of data, nothing more. 

While I agree with him about the distinction between Objects and Data Structures, the point that Rob is missing is that it is quite common to start with a Data Structure and have it evolve toward an Object as your code changes over time.  This has happened to me countless times and the few times where I gave in to the simplicity of declaring my Data Structures with public fields cost me some time when I had to change not only the said structure but all the calling code to use accessors and constructors instead of direct access.

Another reason why you should always use accessors for your DTO's is that of uniformity.

When I am trying to get a value from an object, I don't want to have to think "mmmh... is Employee a DTO or an Object?  I think it's a DTO so I'll just write employee.firstName...  oops, no, I forgot it's an Object now, so I have to use employee.getFirstName()".

Uniformity is crucial. 

I already have enough to think when I write my code, I don't want to spend extra time second guessing myself or having to browse the class I want to use before I can do something as simple as getting a value.
