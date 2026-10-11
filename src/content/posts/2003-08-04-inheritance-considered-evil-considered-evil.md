---
title: '"Inheritance considered evil" considered evil'
date: '2003-08-04T12:02:59'
slug: inheritance-considered-evil-considered-evil
categories:
- Java
comments:
- id: 249
  author: ''
  date: '2003-08-04T16:10:52'
  content: 'Agreed -- you would hope that Holub''s example is a straw man, one that only a beginner would write.  But if you take a look at the actual JDK class java.util.Stack you''ll see it extends Vector ... apparently it''s not just beginners who overuse ''extends''?

    The biggest problem with this article is that it is five-ten years too late.'
  replies: []
- id: 250
  author: Jenny Schaffer
  date: '2003-08-04T18:05:19'
  content: The problem with inheritance is that if your parents are unattractive, the same thing happens to you.
  replies: []
- id: 251
  author: ''
  date: '2003-08-05T11:09:30'
  content: 'Cedric-,

    Impl. Inheritance is evil 95% of the time and I burned myself with it on several projects. Allen''s article is hardly a sensation - the case was made (ok, maybe they were not the first) by J. Gosling and J. Bloch and many others.

    The problem is (from an earlier reply) this observation is 5-10 years too late. Significant damage has been made in countless corporate projects due to indiscriminate use of impl. Inheritance. This code needs to be maintained for the years to come! In light of this, I justify the provocative style of Allen''s writings - it is just the extra-bitter pill the community needs.

    You can say I am biased, but I just got off my hands of some JSP tags, which ... deeply inherit from a base "convenience" class.

    A few months ago I took a look at LUCENE (a Jakarta project) - not a single interface, the "final" word was everywhere! Useless. And there is even an article in JavaWorld praising its design! You see the problem?

    Hristo'
  replies: []
- id: 252
  author: Dave
  date: '2003-08-06T07:18:38'
  content: Why do you even dignify such idiotic articles with a response?
  replies: []
- id: 253
  author: Carlos
  date: '2003-08-07T03:52:37'
  content: 'I''m surprised how violent the reactions are to Holub''s recommendations.

    Implementation inheritance has been known to be problematic, even back in pre-Java days (i.e. C++), good design was to avoid it.  In C++ the distinction wasn''t as obvious because there was no such things as interfaces.  By convention you just avoided it.

    Let''s just make it clear, implementation inheritance is convenient, the question be raised is it maintainable.  However, delegation would work just as well and in fact be more flexible (i.e. dynamic inheritance).

    Finally, Holub''s article is a preview of his book.  So its pedagogical nature should be expected.

    Carlos'
  replies: []
- id: 254
  author: emerson
  date: '2004-10-26T02:06:19'
  content: 'Ouch.  Sometimes it scares me how easily programmers can confuse common knowledge.  This is one of those times.

    The pattern goes like this. Someone takes a readily understood and accepted concept, removes it from its original context, confuses it thoroughly, gives different meaning to it, and then proceeded to extoll the virtues of the new found wisdom as though it were something other than misplaced enthusiasm.

    Every language deals with inheritance in a different way.  To examine the two mentioned above; Java uses single inheritance, public/private/protected access, abstract classes and interfaces as language constructs, but lacks a mechanism for composition via inheritance.  C++ provides multiple inheritance, public/private/protected access, abstract classes and interfaces (via pure virtual methods), but also provides for composition via inheritance and even virtual inheritance. C++ can also alter the access of a class at composition via inheritance using public/private/protected.

    In some cases these features are similar and in others they are vastly different.  The way C++ uses inheritance is not the same as the way Java uses inheritance.  In C++ it actually makes a lot more sense to do composition via inheritance, so inheriting implementation and behaviour is far more common.

    In fact, that is the essential point.  The issue at stake is not wether inheritance is good or bad, but wether you want to create a heirarchy of classes which share a common behaviour, or simply a common interface.

    The reason why most API''s implement a Stack as a subclass of List is becuase it makes perfect sense to share the behaviour.  To misunderstand this is to misunderstand object oriented programming.

    Clarifying what you want and understanding the concepts of type, composition, behaviour, interitance, polymorphism, and deligation are key to object oriented programming.  These constructs have not been arrived at without reason or purpose.

    Stating that implementation inheritance is bad and should be avioded altogether simly shows that you have not understood the issues at hand.  There is no one size fits all solution.'
  replies: []
- id: 255
  author: Tony Morris
  date: '2005-09-10T03:43:31'
  content: 'Hello Cedric,

    I agree with your point that ''x is evil'' is a cause for alarm. The most typical situation is where an axiom has been assumed, for example, that ''x implies invalid software requirement specifications. It''s important to state this axiom early on, but I''m guilty of not doing so at times (it''s so tiresome!). For example, one might assume an axiom of ''use concrete inheritance'' for whatever reason such as an academic experiment (unrelated to valid software requirements), in which case, it''s certainly not evil - quite the contrary!

    In any case, I am a fervent believer that concrete inheritance is in fact, an implicit software requirement defect. The digressive reasoning behind this is extremely verbose, so I won''t bore you today. Not to suggest that I refuse to use it, since for example, the Java language forces me to use it, but using this basis, I can make an informed decision and apply an optimal workaround.

    I''ve started work on a programming language that removes all the constructs of Java that imply requirement defect (admittedly, it''s stalled at the moment), implements a complete API Specification as an example, and compiles to any bytecode representation (since that is left unspecified). I hope this example will be enough to convince even the most ignorant developers.

    http://www.jtiger.org/articles/why-extends-is-not-evil.html'
  replies: []
- id: 256
  author: '&#31243;&#25511;&#20132;&#25442;&#26426;'
  date: '2006-12-21T00:56:34'
  content: '&#25105;&#20844;&#21496;&#26159;&#19968;&#23478;&#35013;&#19987;&#38376;&#25552;&#20379;&#38598;&#22242;&#30005;&#35805;&#25209;&#21457;&#12289;&#38646;&#21806;&#12289;&#23433;&#35013;&#12289;&#35843;&#35797;&#12289;&#32500;&#25252;&#12289;&#32500;&#20462;&#30340;&#19987;&#19994;&#35774;&#22791;&#20379;&#24212;&#21830;&#21644;&#26381;&#21153;&#21830;&#12290;http://oavip.net'
  replies: []
- id: 257
  author: ''
  date: '2007-07-16T20:35:17'
  content: Ok, so... can somebody please tell me when should I use and when should I not use inheritance?
  replies: []
- id: 258
  author: matthewinrandwick
  date: '2007-08-01T22:41:26'
  content: 'Like any other feature -- use inheritance when you cannot do it any other way without repeating yourself. It''s the principle of "least power". Combine that with solving problems by adding layers of indirection, and you end up with a reasonable balance.

    Don''t write a class if a function will do.

    Don''t write a function if a statement will do.

    Don''t use a variable if a constant will do.

    Don''t use inheritance if composition will do.

    And don''t write code if nothing will do (throw out useless code).

    The key question with inheritance is substitution: "can this thing X also be considered a Y?". Someone who makes a class for a man driving a car called man_car, inheriting from both, has not understood. There is no such thing that is simultaneously a man and a car. (ok, maybe a rickshaw).

    This doesn''t mean not to do abstraction. Abstraction is very important. But not everything is worthy of an abstraction. Pick the ones that matter and do them well. If you use complex technologies too soon, you''ll trip over things like diamond inheritance when it was avoidable.'
  replies: []
---

You should always be very leery of any article that contains the words "considered evil" in its title.  This [ article](http://www.javaworld.com/javaworld/jw-08-2003/jw-0801-toolbox.html?post=677&lastpage=1#talkback), where Allen Holub is unconvincingly trying to make a case that inheritance is evil, is no exception.

There is a well-known phenomenon in the publishing industry pertaining to sensationalism. Whenever you want to write something that will get the attention of your readers, a simple technique is to pick a popular opinion and explain why everyone is wrong about it.  
  
Holub has been using this trick in the past to get readership (like when he said that getters and setters were... uh, evil) but while it would be easy to attack this article on the form, let's take a look at what he is actually saying.  
  
Allen mentions the fragile base class problem as one of the reasons why you should avoid inheritance altogether. This is a very well-known problem in the OO circles and C++ programmers have been aware of it for more than ten years. The problem is... Allen doesn't understand it.  
  
To illustrate, Allen uses the example of a Stack class that uses a List as its underlying implementation and he notices that calling clear() on this object will clear only the base class and not the derived one. Fair enough, that's a good point. But this is *not* the fragile base class problem. What's interesting is that Allen does give the right description of this problem a few lines above:  


> Base classes are considered fragile because you can modify a base class in a seemingly safe way, but this new behavior, when inherited by the derived classes, might cause the derived classes to malfunction. 

and then he proceeds to demonstrate something totally different.  Ahem.

What's overall disturbing with this article, and with the way Holub approaches problems in general, is the tendency to make sweeping statements.  Allen demolishes inheritance by showing a very poor example of inheritance.  Someone who would implement a Stack by

  * Using a List as the underlying implementation
  * Inheriting List instead of delegating to it



is clearly a beginner in object-oriented programming.  Nothing that a good book won't fix.  But no, instead of just observing this fact, Allen is trying to make a case that inheritance should be banned altogether.  As I read through his articles, it's pretty clear to me that whatever he is trying to do, he is using the wrong language.  How about Lisp instead?

Some of his points are worth making, though, like the emphasis on interfaces.  Now, there is a valid fight and it is important to raise every programmer's awareness to the importance of interface programming.

We all know that inheritance can be abused, but isn't it so for every feature of every language on the planet?  Instead of giving in to simple sensationalism, how about studying the pros and cons of inheritance and trying to educate your readers objectively?

This kind of article would be understandable in a personal weblog, but I expect better from Javaworld.
