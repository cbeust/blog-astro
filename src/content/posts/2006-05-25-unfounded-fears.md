---
title: Unfounded fears
date: '2006-05-25T13:30:36'
slug: unfounded-fears
categories:
- Java
comments:
- id: 5372
  author: eu
  date: '2006-05-25T15:19:30'
  content: 'I think that crowd does adopt and learn to unconsciously avoid those errors and traps.

    From other hand those errors are good for Joshua Bloch and Neal Gafter who would be able to make 2nd edition of "Java Puzzlers" out of it. They already show few puzzlers related to autoboxing at the JavaOne. :-)'
  replies: []
- id: 5373
  author: Tim Fennell
  date: '2006-05-25T17:37:39'
  content: 'Though it doesn''t catch me out very often any more, the whole NullPointerException on unboxing nulls can be very confusing.  For me this is primarily because my mind is trained to look for dots/periods when looking for the source of NPEs.

    I wish that Java 1.5 had introduced a new subclass of NPE for when it occurs during unboxing - it would have saved me hours over the last couple of years.'
  replies: []
- id: 5374
  author: Dan Campagnoli
  date: '2006-05-25T17:53:50'
  content: I always set Eclipse's syntax colouring to have any autoboxing expressions shown in red. Handy when you are tracking down the odd unboxing NPE.
  replies: []
- id: 5375
  author: Tom Hawtin
  date: '2006-05-26T03:54:42'
  content: An amusing thing about autounboxing and Java Puzzlers, is that one of the solutions in the book has itself an autounboxing related error.
  replies: []
- id: 5376
  author: Anonymous Coward
  date: '2006-05-26T06:01:47'
  content: 'Hi Cedric and all...

    But isn''t the real issue here the half-OO language that Java is, supporting both primitives and objects and the fact that null as a whole is completely overused in Java?

    It only happens because some programmer think that "null" is a perfectly legal return value in this case.  But is this really that evident?  What about an hashmap with a different contract, specifically stating that it will *never* return null (eg using JetBrains''s very nice @NotNull annotations [and possible violations are spotted and indicated in real time in the IDE, very nice]) and specifically stating that trying to get an element with a non-existent key throws an exception?  Then you''d be *forced* to check for "containsKey()" (notice that here you''ll *have* to check anyway), which I think is just good practice.

    What can be said of all these programmers chasing NPEs because they''re using such bad APIs, while others are using APIs returning way less "null" (there even are APIs *never* returning null) making that point moot?

    In my case I think that the "crowd" blindly accepts that it is "normal" for an OO language to support both primitives and objects and that the overuse of "null" everywhere is normal ("let''s chase those NPEs, let''s chase null, it''s normal for OO programming to deal with so many nulls").  And then that crowd goes on discussing naughty side-effects of these two braindead, hardly ever criticized, decisions.

    A little like whining about List[] problems without ever debating about the non-OO conformance of arrays (hint: arrays are breaking encapsulation, for a start).

    My 0.02 Euros'
  replies: []
- id: 5377
  author: ''
  date: '2006-05-26T06:33:49'
  content: Dear other Anonymous Coward. You do realise that doing a containsKey() and then a get() will result in two lookups in your collection. a get() followed by a null check will be quicker in most situations. BTW, what happens if you do a get() without doing a containsKey() in your scenario? NPE, perhaps? methinks you have not thought this one through, young jedi.
  replies: []
- id: 5378
  author: ''
  date: '2006-05-26T07:00:45'
  content: What a weird way to call yourself the crowd.
  replies: []
- id: 5379
  author: Bill Kress
  date: '2006-05-26T10:43:08'
  content: 'In general, I don''t agree with AC''s feeling about Nulls being overused, they are an extremely important part of the language.  And the "Everything must be an object" is simply another way of showing how his favorite "Pure" OO language is "better".

    That said, I wonder if Java is at the point where the compiler could help us a bit more...

    It seems like it would be fairly trivial to add a "nonull" keyword that prevented a variable from ever containing a null value--it would throw an exception if you attempted to read it before it was assigned or assign a null.

    It''s not that the checks are that great a help, but the keyword would tell you that you could be a little less careful when handling that variable.  Mostly it seems like it would be a good keyword to use on a parameter--that way it would show up in the javadocs (I do tend to add "Nulls Okay" or "No Nulls" to javadoc parameters already, but it''s not enforced that way).

    Secondly, with autoboxing we are half way towards becoming pure-OO.  If the compiler is doing this already, why not just treat all primitives like objects.  In other words, "Autobox" 1.toString() type calls.

    Not that I like that format, I think ruby''s 5.loop is annoying as hell--I''m still a little annoyed with "String".compareTo(x) to avoid NPEs, but the consistency might be nice and there''s no reason the compiler couldn''t optimize away the classes and use primitives for 90% of the cases anyway.

    And I might be able to get used to that 5.loop crap if I really tried...'
  replies: []
- id: 5380
  author: Daniel Serodio
  date: '2006-05-26T14:56:11'
  content: 'The Nice language (http://nice.sf.net) does it right. It has the concept of "optional types", which have a "?" prefix. Quoting from "Type safety in nice":

    "One documents whether a type can hold the null value by simply prefixing it with the ? symbol. Thus: ?String name; is the declaration of String variable that might be null. To get its length, one must write int len = (name == null) ? 0 : name.length();. Calling name.length() directly is a type error. It would only be possible if name was defined as String name = "Some non-null string";."'
  replies: []
- id: 5381
  author: leeseng
  date: '2006-05-28T13:07:16'
  content: 'Map lookupTable = new HashMap();

    int value = lookupTable.get("foo"); //throws NPE.

    this makes me feel how alpha the jdk5 jvm is. it just make me feels that auto unboxing logic never check Null and that''s why it can''t throw another better Exception that explains things clearer.?

    Another better solution would really be throwing away primitives. If encapsulation is the reason for OO, then OO it entirely. Primitive is just a workaround for then performance but unfounded fear  now?'
  replies: []
- id: 5382
  author: ''
  date: '2006-06-23T16:17:17'
  content: 'Use PCJ and get on with your lives...

    http://pcj.sourceforge.net'
  replies: []
- id: 5383
  author: george
  date: '2006-06-25T17:00:37'
  content: 'All arguments aside, should the best practice be that one should only get Object types out of a Collection?

    In your example value should be an Integer not an int?

    This will avoid the unboxing issue on that line.  The Integer could still be null but that is just a regular Java problem - nothing new.

    Does performance even matter with unboxing?  For most code I''ve written line level Java performance has been a small concern over better design and maintainability.  Usually those concerns lead to good performance but if not I don''t worry too much.  The performance issues I deal with most are database or network communication-related.

    ______________

    George Coller

    DevilElephant'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/manhole.gif)

I remember that when I discovered Java and realized that objects retrieved from collections needed to be downcast to the proper type, a painful decade of hard-learned C++ pitfalls immediately caused me to be worried about the potential unsafe aspect of this feature.  I was pretty sure that I would soon be spending a lot of time debugging reams of `ClassCastExceptions` because of this "oversight".  I wasn't alone.

But we were all wrong.

We know now that such errors are very rare and nobody would think of criticizing Java on this criterion any more.

A recent discussion about unboxing made me wonder if we were not making the same mistake again.

It started with this innocent-looking piece of code:

> Map<String, Integer> lookupTable = new HashMap<String, Integer>();  
>  int value = lookupTable.get("foo");

which, as of JDK 5, will throw a `NullPointerException `(a behavior which, in my opinion, is a Good Thing, and was almost unanimously passed by the JSR 201 Experts Group with a vote count of 19-1).

Do you remember the reaction of the community when the early proposals for boxing and unboxing were unveiled?  If I recall correctly, everybody was afraid of one very simple thing:  performance.

We all thought that all this hidden boxing/unboxing that silently translates simple pieces of code into expensive conversions would take a heavy toll on the performances of our applications, and so we all prudently stayed away from it "just in case".  I'm still wary of boxing overall, but I have to say the performance concern has all but faded from my mind.  However, I do occasionally find myself tripping on some unplanned side effect of the specification, such as the one mentioned above.

It's not very often, but once in a while, [ the crowd is not that wise](http://www.amazon.com/gp/product/0385721706/sr=8-1/qid=1148588509/ref=pd_bbs_1/103-1239121-2863854?_encoding=UTF8).
