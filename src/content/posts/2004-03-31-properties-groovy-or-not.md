---
title: 'Properties:  Groovy or not?'
date: '2004-03-31T14:50:26'
slug: properties-groovy-or-not
categories:
- Java
comments:
- id: 1391
  author: Mike Spille
  date: '2004-03-31T15:08:50'
  content: 'Cedric, sorry if I implied there were 21 flaws - there aren''t (praise your personal deity here).  The original purpose was to try out Properties in a number of contexts and see what fell out, and in the end it seemed worthwhile to post all of the various tests.

    I don''t think my rather strange :rw syntax is really a proposed fix, it''s more of a starting point for discussion.  I do know that I''m pretty unhappy with the current state of affairs.  I''ll read up on C# properties again and see if there''s something there I missed.

    On the accessor thing - they seem to breed conflicts no matter what you do, unless you go the old Java route or invent some protection and bytecodes (or some form of instrumentation) at the JVM level.  In total I don''t see a clear win from properties at this point in time, but maybe re-reading C# stuff on this will change my mind.'
  replies: []
- id: 1392
  author: Merrick
  date: '2004-03-31T15:54:55'
  content: 'Every Microsoft language since VB 6 has had at least the concept of properties, so kudos to Microsoft on that one.

    C# certainly has a flexible property solution, but there is something that bugs me about the syntax. I''m not sure if it''s the code block after the variable declaration or what, but it still strikes me as alien when I look at it.

    Mind you, with metadata in hand, we can just add @Property(READONLY) to our private fields for runtime magic, right? :-)'
  replies: []
- id: 1393
  author: Michal
  date: '2004-03-31T21:11:06'
  content: 'As for C# properties, I am not an expert, but I remember reading some complaints on them in Martin Fowler''s bliki (see URL). He found some problems with the fact that they''re treated differently than public fields by reflection.

    Of course, in the dream world the solution would be simple - get rid of public fields completely from the language, and leave only properties. I''m surprised why MS did not go that way, it''s more OO and more flexible.'
  replies: []
- id: 1394
  author: James Strachan
  date: '2004-04-01T06:32:17'
  content: 'Michal - thats what we tried to do in Groovy - to disallow public fields so that all public things are Java Beans properties.

    This has the added benefit that things in reflection/introspection look identical, the code looks similar and we''ve got binary compatibility.

    Though some would argue the need for public fields; I''m not yet sure if we need them but I guess we should have some way to do it.

    Incidentally the current Groovy properties model is still up for debate - we could have some C#-like syntax still....

    http://jira.codehaus.org/secure/ViewIssue.jspa?key=GROOVY-301

    The main use case was to be able to define beans very easily...

    class Customer {

    String name

    Date dob

    Integer id

    Address address

    }

    without all that extra typing, but still have all the flexibility of the Java Beans programming model so you can write getters/setters and so forth. We could add something vaguely C#-like if we thought it''d help'
  replies: []
- id: 1395
  author: Amiture
  date: '2004-12-08T17:22:16'
  content: Hello
  replies: []
---

[ Mike is at it again](http://jroller.com/page/pyrasun/20040331#exploring_the_mysteries_of_groovy) and this time, Groovy Properties are taking a beating...

I can only admire Mike's thoroughness, he certainly researches his subjects before posting about them, and everybody ends up more enlightened after reading his posts.  However, his conclusions are sometimes...  questionable :-)

First of all, I notice that of the twenty-one listings in his entry, only few of them actually expose a flaw that deserves to be studied.  More precisely:

  * Listings 1-6, 8, 10, 12, 13, 14, 15, 20, 21 are working as expected.
  * Listings 7, 9 show bugs in the parser (which shouldn't be newline-sensitive).
  * Listings 16, 17 work as expected but admittedly with a gotcha (you need to keep your types consistent, more on this below).
  * Listings 18, 19 show some behavior that will look odd unwil we come up with clear specification of the unboxing behavior (not an easy topic, even for JDK 1.5 which still hasn't come out with a final word on it).



Listing 11 is the one that really got my attention, until I realized that the rules to get it right are simple and they already exist:  JavaBeans.  As long as you follow the JavaBeans rules, everything makes sense.

Anyway.  I think we could dissect Mike's examples one by one and argue over them for days, but it's way too early to do that.  Instead, I'd like to take a step back and discuss Groovy Properties in general.

At this early stage of Groovy's existence, there are three possible scenarios for Properties:

  1. Keep the current design and write a thorough specification to disambiguate all the corner cases that Mike uncovered.  
  
I agree with Mike:  Groovy Properties need to be improved, so I won't spend too much on this option.  
 
  2. Modify the current design.  
  
As part of the improvements, Mike and [ Merrick](http://jroller.com/comment.do?method=edit&entryid=c076b0b5fb9cf99900fb9e476ebf0816) suggested adding one ore more new keywords: "property", "rw", etc...  I have to say I find Mike's fix quite curious, since he complains about the magic of the current design (declaring a public field will cause the generation of the proper accessors, which can then be used in your code) and then proposes to fix it with a keyword "rw" which also magically generates accessors (even worse:  you are forced to use this accessor to read or write the field!).  
 
  3. Come up with a brand new design.  
  
Since the JSR just started, I think we should explore this option seriously.



After reading Mike's detailed analysis, I was struck by a very simple realization:  C# got it right.

[ The way C# implements properties](http://www.cfdev.com/code_samples/code.cfm/CodeID/39/c/C__Properties_Example) addresses pretty much all the concerns that Mike voices, including that of redundancy (if you spelled out the property once, you shouldn't have to declare it a second time), and arbitrary complexity (declaring a simple property is very terse, but you can insert more logic in the accessors at any time without breaking anything).

Whatever ends up in Groovy, I think the most crucial point is that of uniform access.  If my property is called "firstName", I should be able to refer to it as "person.firstName".  I don't care if it's going to be a direct field access or if more complex logic is going to happen undercover.

After all, why would I care, as long as it returns the right value?
