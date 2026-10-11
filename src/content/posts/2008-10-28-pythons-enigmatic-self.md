---
title: Python's enigmatic self
date: '2008-10-28T10:27:22'
slug: pythons-enigmatic-self
categories:
- General
comments:
- id: 7607
  author: xsonymathew
  date: '2008-10-28T12:05:51'
  content: arrrggghh...python is a terrible language - only perl sucks worse.  I wrote enough python (actually jython) scripting servers to call myself an expert.  Did it all OO and clean.  Several months later i've already forgotten the language & its funky api. Its painful revisiting the code.  JavaScript rocks compared to that mess - though Scala is appealing to me more and more.
  replies: []
- id: 7608
  author: Yann Schwartz
  date: '2008-10-28T12:22:38'
  content: 'Well, with C#3 extensions methods you have frequently methods that take more parameters in the declaration than in their call.

    public string FirstLetter(this string theString)

    {

    return s[0];

    }

    could be called like this

    string s = "toto";

    string res = s.FirstLetter();

    Actually, the "this" modifier acts a lot like the self parameter in Python (a language I love BTW).'
  replies: []
- id: 7609
  author: Yann Schwartz
  date: '2008-10-28T12:24:33'
  content: 'In previous sample, replace with

    public string FirstLetter(this string theString)

    {

    return theString[0];

    }

    don''t try this particular method at home, it doesn''t check for nulls and it is totally useless too.'
  replies: []
- id: 7610
  author: Yann Schwartz
  date: '2008-10-28T12:26:47'
  content: Sorry for spamming, but the method SHOULD be static too. And it's syntaxic sugar to avoid calling the method from a static utility class. Very handy and general and a life saver when chaining calls.
  replies: []
- id: 7611
  author: Nimpy
  date: '2008-10-28T16:01:23'
  content: 'It''s simply a by product of the evolution of python.  OOP was tacked on plain and simple.  Period.  It''s not the end of the world.  Look at GObject and other examples of this.   No language is perfect.  There are warts in Java, Python, C#, etc.  The issue is, that python zealots don''t ever acknowledge that fact.  Not much different from republicans.

    As others mentioned, javascript, ruby, boo, groovy, and numerous other scripting-friendly languages have first class OOP support.'
  replies: []
- id: 7612
  author: Daniel Serodio
  date: '2008-10-29T05:34:22'
  content: 'I share your opinion: "explicit self" is redundant, not explicit, and not "pythonic" at all. But what makes me angry about it is trying to disguise implementation limitations as "by design".'
  replies: []
- id: 7613
  author: Tom
  date: '2008-10-29T07:40:55'
  content: Once upon a time I was a Python fan. Various pros and cons exist to the language, but I'd have to say that explicit 'self' is definitely one of the worst parts.
  replies: []
- id: 7614
  author: Weeble
  date: '2008-10-29T09:41:12'
  content: 'I do like the syntactic sugar suggested in a comment on Eckel''s blog and mentioned again by Guido that:

    class Example(object):

    &nbsp; &nbsp; def self.foobar():

    &nbsp; &nbsp; &nbsp; &nbsp; pass

    should behave just like:

    class Example(object):

    &nbsp; &nbsp; def foobar(self):

    &nbsp; &nbsp; &nbsp; &nbsp; pass

    That would indeed make the call and the definition look the same. Would that be less warty?

    The problem I have with Eckel''s proposal as it stands is that "def" would do different things in different circumstances. Right now it does the same thing wherever you use it, whether in a class, in another function or at global scope: it creates a new function and gives it a name in the local scope. It''s the *class* that then creates bound methods when you access it. I fear you would be fixing a superficial inconsistency only to introduce a serious but non-obvious one.'
  replies: []
- id: 7615
  author: Philip Jenvey
  date: '2008-10-29T12:18:35'
  content: 'Nimpy, I think you''re thinking of Perl with your "OOP being tacked on, plain and simple" comment. Python was OOP (though multi paradigm) from the start.

    Explicit self was a conscious decision, it was actually borrowed from Modula-3'
  replies: []
- id: 7616
  author: Brian
  date: '2008-11-02T19:10:05'
  content: 'I''m constantly amazed by your ability to pontificate on languages with which you don''t appear to have much real world experience.

    >>This problem goes beyond Python and OO >>philosophies: it''s the violation of a >>fundamental concept that has been the >>foundation of programming languages going >>decades back: when you declare a function with >>n parameters, you should invoke it with n >>parameters (slight exception if some of these >>parameters are optional, but this aspect is not >>germane to the discussion).

    This "fundamental concept" you''re discussing, for instance...aside from your "slight" exception (which isn''t really slight, and in fact is completely germane to the discussion), is also broken by varargs, is it not?

    Maybe you should bring back those old nonsensical "dynamic languages can''t be refactored" posts.'
  replies: []
- id: 7617
  author: Aaron
  date: '2008-11-10T09:52:03'
  content: While we're at it, why don't we just fix the whitespace bug in Python, and the truncation bug on function definitions, and the other whitespace bug that uses ascii char 95 instead of 40 for some names?
  replies: []
- id: 7618
  author: Rafael Naufal
  date: '2008-11-10T11:24:57'
  content: I totally agree with you, it's an unnecessary syntactic sugar, it's the same as passing the this reference to every Java method declaration. I think it causes more damages than benefits, mainly because of the confusion on the arguments' call.
  replies: []
- id: 7619
  author: Chui Tey
  date: '2008-11-11T04:42:53'
  content: '@Rafael,

    self is not passed explicitly into a function call.

    my_object.my_method()

    calls

    def my_method(self):

    ...

    In this sense, it is closer to C-Struct style of OOP.

    I use Python daily, and self can be very helpful in a dynamic language like Python, since the absence of variable declarations means that scope has to be explicitly specified.'
  replies: []
- id: 7620
  author: Rafael Naufal
  date: '2008-11-11T13:23:42'
  content: '@Chui Tey

    I''ve understood your point of view, but I was talking about the possible misunderstanding quoted by James Watson. Btw, if you omit the self on the method declaration, Python considers it as a being static?'
  replies: []
- id: 7621
  author: frasier
  date: '2008-11-19T07:55:33'
  content: 'I shared the author''s view and wish the following syntax sugar be implemented in next release 2.x or 3.1.

    def self.foobar():

    as an alternative of current:

    def foobar(self):'
  replies: []
- id: 7622
  author: blob
  date: '2008-11-23T15:18:02'
  content: 'it just makes explicit that a method is nothing more than a fonction with a parameter referencing the object it''s acting on

    foo.baz(x,y) is similar to

    baz foo x y

    what is so mind bending ?'
  replies: []
- id: 7623
  author: frasier
  date: '2008-12-07T08:33:53'
  content: 'Many people new to Python may be told that python is Objected-Oriented as others:C++, Java, C#, etc.

    But quite part of them may not be accustomed to  fact of:

    foo.baz(x,y) is translated to: baz(foo, x,y)

    For those who insist baz(foo, x, y) is good, think about the string functions before python 2.0, when at that time string functions are global functions:

    now: "a String".replace("a", "b")  //python 2.0

    before: replace("a String", "a","b) //before 2.0

    Think about why python made the above change?  Isn''t that to make python more Object-Oriented?

    If so, then isn''t that the above change removed the first argument as a reference of object? like "self"? If python removed first object reference in functions, then why not try to remove the "self", in the first argument in class method?

    I bet there''s some way to do that, such as compiler could automatically insert a self reference in class method''s argument list under cover.   But it''s a pity that python 3000 did not even think about it at the beginning when Guido designed the 3000.'
  replies: []
- id: 7624
  author: JB
  date: '2008-12-21T13:38:57'
  content: As mentioned above this is similar to Modula-3 and Oberon; Oberon-2 added syntactic sugar for proper methods. It
  replies: []
- id: 7625
  author: Preston L. Bannister
  date: '2009-02-17T02:29:23'
  content: 'I know this is far past the original posting, but:

    "when you declare a function with n parameters, you should invoke it with n parameters"

    This irregularity has been around a long time. (Whether it counts as a *good* idea is debatable - but dates as least into the 1980''s.)

    Yes, it was a hack then - and not one I would promote - but strictly speaking this has been around a long time.'
  replies: []
- id: 7626
  author: StuMan
  date: '2011-09-17T21:30:41'
  content: 'It is pretty clear that the scoping issue can be solve more than one way.  In TCL there is a "global" key word.

    In looking at how Guido talks about this topic, it is clear that the structure of the class reference internally is what supports this "self" reference.  That combined with the avoidance of clear block demarcation for a class starts to force the "self" reference.

    The fact is that a price has to be paid for "open" scoping and indent only block syntax.  That price appears to be "self" in the declarations.

    While the "self" word in class declarations is very similar to passing pointers in C programming it is not the same since it is not required for the call of the function.

    I agree with those that accept the language with it''s warts and move on.  Otherwise please do not invent another language that we have to learn!!!'
  replies: []
---

The old 'self' controversy is making another appearance, stirred up by [Bruce Eckel's proposal](http://www.artima.com/forums/flat.jsp?forum=106&thread=239003) to remove the requirement. 

Let's start with a quick summary of the controversy. 

In Python, you have to declare "self" as a first parameter of all your methods: ` [python] class Foo(): def baz(self, x): pass [/python] ` This is just a convention. The name "self" is not enforced by the compiler but it's necessary to declare it as the first parameter of your method or Python will consider your method to be a function. 

Python programmers feel strangely strongly about this convention and most of them don't see this requirement as a problem (which is the reason why there is so much misunderstanding between both camps). 

Interestingly, both sides often seem to miss the main reason why this controversy exists in the first place. It is *not* about typing less characters, it is *not* about having to prefix fields with that name (most people are fine with typing "self.f = 42"). 

This is strictly about consistency, and James Watson summarized the problem very cleanly in [his comment on Bruce Eckel's proposal](http://www.artima.com/forums/flat.jsp?forum=106&thread=239003&start=30&msRange=15): 

> I think a lot of people are bothered by this because there is a disconnect between the number of arguments in the declaration and the number of arguments in the call. 

In short: the method 'baz' above is declared with two parameters in the class but you invoke it with only one. 

This problem goes beyond Python and OO philosophies: it's the violation of a fundamental concept that has been the foundation of programming languages going decades back: when you declare a function with n parameters, you should invoke it with n parameters (slight exception if some of these parameters are optional, but this aspect is not germane to the discussion). 

[Guido took some time to explain why Bruce's proposal cannot work](http://neopythonic.blogspot.com/2008/10/why-explicit-self-has-to-stay.html). This is not the first time that _explicit self_ has been under attack, and Guido has defended his design many times over the years. 

I went over Guido's explanation several times and to be honest, my eyes glazed over. My take away is that the reasons for the current design seem to be pretty serious and they dive deep into Python's implementation. 

And that's mostly why I keep being bothered by _explicit self_ : it seems to me it's a design that is dictated more by the implementation than by the will to make this part of the language intuitive and in line with the estalbished science of computer languages. 

C++, Java, C# and many other object-oriented languages support the concept of a _self_ object available within the scope of the current method, and none of them require you to declare that parameter explicitly, so it can obviously be done. Arguing that it's cleaner to require that parameter for the sake of readability when the real reason seems to be a limitation in the implementation strikes me as a bit dishonest. 

To make matter worse (or better, if you're into that sort of thing), Python has been adding dynamic features over these past years (such as adding a method inside a class outside the declaration of that class) that pretty much mean that the _explicit self_ will never go away. I'm not convinced that these dynamic features were worth closing the door on the possibility of ever resolving the _explicit self_ controversy, but the damage is done, and at this point, it's pretty clear that Python will never lose its _explicit self_.
