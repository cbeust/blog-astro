---
title: Tim Bray at JavaPolis
date: '2004-12-15T02:33:38'
slug: tim-bray-at-javapolis
categories:
- Java
comments:
- id: 2905
  author: Carsten Ringe
  date: '2004-12-15T03:14:41'
  content: 'I''ve heard a lot about Python, but I never thought that it is _that_ old. Well, old is not the right term for this... maybe the word I am looking for is ''aged''.

    Anyway, I can''t get a reason why people are talking about some languages they don''t program in. It''s hard to understand the language you are programming every day and talking about something completely different is always a hard way to do.'
  replies: []
- id: 2906
  author: Juha
  date: '2004-12-15T04:24:50'
  content: 'Well, actually you can pass messages to strings, numbers and to practically anything. Just type dir("foo") to see what messages you can send to string. A good example is "foo".upper(). Hey, if you feel like it, you can even subclass ''int'' in Python!

    Python also has meta-classes and practically everything is first-class citizen in the language. I code most of the time in Java, but I''d agree with Bray that Python feels more object-oriented (whatever that means). The only annoying thing is that explicit self-parameter -- but that''s just lack of sugar. The semantics underneath the syntax are very much to my taste.'
  replies: []
- id: 2907
  author: Michael Mahemoff
  date: '2004-12-15T04:48:38'
  content: Yes, there are lots of methods on strings, but there's also methods that should be but aren't, which is why it can feel like a mix. Isn't it a bit weird that you query a string's length by calling len("abc"), but query its upperness by calling "abc".isupper(). Likewise for lists.
  replies: []
- id: 2908
  author: Kent Sibilev
  date: '2004-12-15T05:41:30'
  content: And this is the main reason Python feels unnatural to me. That's why I prefer Ruby.
  replies: []
- id: 2909
  author: Erik
  date: '2004-12-15T11:36:13'
  content: '"You can''t pass messages to, say, strings, as you can in Java, Ruby or Groovy...

    [...]

    "Python is a fine language but overall, I am quite surprised by the amount of misconceptions that people have about it..."

    Your first statement above looks like a pretty big misconception to me.  You definitely can call methods on string literals.

    One of the big differences between Python and Ruby is backward compatibility.  Ruby developers are more willing to say "this was a dumb idea, let''s fix it now and change the language".  Python developers are more willing to say "it''s unfortunate that we chose to do it this way, but there are too many programs already dependent on things working this way, so to change it now would require a lot of consideration".  I''m not saying one language is better than the other, just that they each have different values.  However, it is one reason why despite the fact that both languages are roughly the same age, there are far more programs written in Python and libraries available for Python than Ruby.  This is why somewhat inconsistent idioms persist, such as requiring "self" as an argument to method declarations, and len() built-in function is the preferred mechanism for obtaining counts of things rather than adding a method to the object base class.

    (You get used to both of those things once you''ve written a couple hundred lines of Python code.  They''re purely aesthetic issues.  Neither of them hinder OO development; the "self" parameter is hardly different from gratuitous use of the "this" keyword in accessing all of your Java instance members, and the dynamic binding of Python variables lets you call the len() function polymorphically on any object just like you would invoke a method on any object.  For that matter, at least it''s consistent about using len() -- Java has a read-only field called "length" for arrays, a method called "length()" on Strings, and a "size()" method on Collections such as Lists and Sets.  To add insult to injury, the "size()" method cannot be called from JSTL because it doesn''t use the JavaBeans getter/setter naming conventions.)

    I think that when Bray says that Python is *too* object-oriented, he''s saying that it can be hard to adjust to the fact that everything is truly an object.  Operators are just methods of objects, and methods and functions are themselves objects.  Modules are objects.

    Python is truly a dynamic language compared with Java and C, but not always will this dynamism make your programs any better.'
  replies: []
- id: 2910
  author: Alexis MP
  date: '2004-12-17T10:37:18'
  content: 'I think Tim''s goal was not to compare languages, but rather to wake up Java bigots to scripting.

    -Alexis'
  replies: []
- id: 2911
  author: Patrick Chanezon
  date: '2004-12-20T09:06:04'
  content: My comment on http://blogs.sun.com/roller/page/pat/20041220#re_cedric_about_tim_bray
  replies: []
- id: 2912
  author: Kinsley Burton
  date: '2004-12-20T13:08:43'
  content: 'Not sure which is worse, folks who comment on a language they don''t know a lot about, or people who just accept their statements as fact.

    Don''t be such an elitist. Try things out before you make such statements. And that last comment about Tim was just completely snide and unnecessary.

    Try it--maybe there is a reason so many people fall under Python''s ''spell'' :)'
  replies: []
- id: 2913
  author: Alexander Staubo
  date: '2005-01-11T17:08:35'
  content: 'The "can''t pass messages to, say, strings" argument was refuted above, so the remaining argument against Python being object-oriented is that it requires an explicit "self" argument?

    The "self" argument is *not* passed explicitly to methods. It''s *received* explicitly. That''s a huge difference, and important because Python obviously relies on a traditional OO virtual dispatch mechanism for method calls. (Well, fairly traditional; one crucial difference between Python and, say, C++ is that the method itself is resolved dynamically at runtime).

    The explicit "self" has nothing to do with object-orientation and everything to do with namespaces. For a long time, Python did not have lexical scoping, and even today its scoping is weak. But even if it had lexical scoping, you have the problem of how to reference the "self"; if it were implicit, what would "a = 1" mean inside a method? A local variable or an instance variable? "self.a = 1", however, is obvious and unambiguous.

    Notice how many, or perhaps most, programmers invent some kind of prefix for instance variables, to avoid confusion with local variables. In Java you will often see:

    private int m_foo;

    or

    private int _foo;

    or other variations; and in C++:

    private:

    int _foo;

    Rather than going in this direction, which adds unnecessary noise and typing, or the Ruby route, which is to encode scoping at the syntax level (@foo is an instance variable, foo is a local variable or a parameter), Python simply requires explicit qualification. It does this for imports, too.

    The Python FAQ''s section 6.9 contains the official word on the matter.

    Python may have been created 15 years ago, but as a language it did not really reach maturity until 1.5 in 1998 or so. What''s age got to do with anything, anyway? Simula, the first OO language, was created in the late 1960s, and C++ is the 80s; when did "old" imply "not OO"?

    Python has always had a slightly schizophrenic division between methods and functions; but this division has nothing to do with a lack of object-orientation and more to do with what Python calls protocols; you''re free to do "foo".__len__() if you like -- the method is there.

    Erik, while your point about backwards compatibility is good, len() isn''t a dumb artifact of early development that the developers now consider too late to remove. New built-in methods that act as interfaces to Python protocols appear all the type: consider the relatively recent addition of iter(), for example.

    I agree with Tim, who seems to have a better grasp of Python than you do, Cedric. Python is sometimes too object-oriented; but only sometimes.'
  replies: []
- id: 2914
  author: Alexander Staubo
  date: '2005-01-11T17:16:36'
  content: Oh, and Python has been object-oriented since its first public version (0.9.0) in 1991. I have no idea what Python looked like before that, but then Guido is probably the only person who knows.
  replies: []
---

I am currently listening to Tim Bray's keynote, opening the JavaPolis conference.  His presentation is called "When not to program in Java" and is a comparison of C, Java and Python (with a short mention of C++, although he admits having never programmed in it).

The presentation is overall interesting but not very innovative.  Tim compares the number of lines and characters used to solve a simple problem and draws a number of conclusions.  The one I disagree the most with is his assertion that Python is more object-oriented than Java.  "Almost irritatingly so", he says, arguing that sometimes, Python is "too" object-oriented for his taste.

I am still scratching my head at this, and it's hard for me to understand how you can tell that Python is very object oriented when:

  * You need to pass "self" as a parameter to all your methods...  Does this remind you anything?  Right, that's how we "simulated" object-orientation in C, by passing the address of the current object in first parameter.  If anything, this shows that Python is **not** object-oriented, and this flaw is a simple illustration of Python's old age (it was not object-oriented when it was created, more than fifteen years ago).  
 
  * You can't pass messages to, say, strings, as you can in Java, Ruby or Groovy ("foo".size()).  Writing code in Python usually ends up being a mix of imperative and object-oriented calls that doesn't always follow any logic.



Python is a fine language but overall, I am quite surprised by the amount of misconceptions that people have about it, and Tim is certainly not the first one falling under Python's spell.  I chatted with Tim after his talk and he admitted not being a very proficient Python programmer...  Mmmh.
