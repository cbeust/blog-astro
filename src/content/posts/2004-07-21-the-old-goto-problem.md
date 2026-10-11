---
title: The old goto problem
date: '2004-07-21T11:45:16'
slug: the-old-goto-problem
categories:
- Java
comments:
- id: 1817
  author: Robert Watkins
  date: '2004-07-21T17:33:40'
  content: 'The primary problem with ''goto'' is that it can take you _anywhere_; by contrast, more controlled jump mechanisms (such as ''continue'', ''break'', ''return'' and exceptions) can only take you to defined places, and it''s not hard to work out where they can be.

    If you don''t have the controlled jump mechanisms, then ''goto'' can (and should) be used instead, _as long as you do it in the same spirit_.'
  replies: []
- id: 1818
  author: Jonathan Ellis
  date: '2004-07-21T18:47:38'
  content: 'The designers of Java went to some length to make gotos unnecessary, not only with exceptions but with the ability to break or continue to a label.  They succeeded well; I''ve never felt the urge to use goto in a Java program.

    Where its loss is felt, though, is when you want to write a program that outputs Java.  A non-hypothetical example is jythonc, which emits java source: jythonc cannot handle generators because of the lack of goto.  Workarounds exist -- see http://www.cs.utk.edu/f2j/f2jreport/node11.html for instance -- but the fact the some smart people had to add what is a pretty ugly hack to their code is a strong argument that Java should have included a goto statement.'
  replies: []
- id: 1819
  author: Ted Russo
  date: '2004-07-22T08:28:26'
  content: 'Jonathan, your example shows how they had to use bytecode manipulation to translate pre-existing Fortran code into new Java code -- hardly a strong argument for including a goto statement in Java IMO.

    You probably have to resort to other ugly hacks if you want to translate C or C++ that makes heavy use of pointers, function pointers, etc. -- again, not a case to include pointers into Java.'
  replies: []
- id: 1820
  author: Tony Edgecombe
  date: '2004-07-26T11:16:25'
  content: 'Raymonds post just shows why RAII is so powerful a concept, particularly while you are programming Windows. Each of those pointers needs to be wrapped up in a smart pointer which releases the interface in the destructor. He can then just drop out of the function either by return or throwing an exception, both of which would be much cleaner than using goto.

    The fact that he didn''t want to use a library such as ATL seems a bit wet to me. A simple wrapper for those pointers needn''t have been more than a few lines and it would have tidied the whole thing up.'
  replies: []
- id: 1821
  author: Wilf Middleton
  date: '2007-07-04T21:12:35'
  content: 'In response to Java and Gotos,

    It would be nice, especially for those who have the enviable task of porting code from other languages.  Try...rewriting the structure of a commercial Fortran application in Java without using gotos - The necessary quanitiy of Aspirin can only be supplied by your big-box retailer.

    If it''s working, then I would rather just put it into Java in the way it was found in the donor language.

    Note 1:

    Java is great, but c# has goto and Microsoft is not stupid.

    Note 2: To help, I created a module that allows me to use gotos and labels via bytecode modification.  It saves time and money...

    Wilf'
  replies: []
- id: 1822
  author: Wilf Middleton
  date: '2007-07-10T07:00:11'
  content: 'Actually, gotos is only half the problem with Java.  Java also lacks operator overloading.

    This also makes it difficult to port other languages......

    I have created a neat framework for using gotos.

    It is NOT free software: http://wildfiresoftware.googlepages.com

    This solves the goto problem and offers some handy debugging features.

    Wilf'
  replies: []
---

I was once again reminded of the constant controversy that surrounds the use of goto by the two following posts:

  * [ Raymond Chen's article](http://weblogs.asp.net/oldnewthing/archive/2004/07/20/188696.aspx) on a COM trick to track the Explorer folder.
  * [ Rich Burridge's thoughts](http://blogs.sun.com/roller/comments/richb/Weblog/writing_good_code) on current programming style.



I enjoy reading Raymond's blog immensely.  Raymond is a consummate Windows programmer and his blog contains a wealth of tips and tricks and explanations of the Windows API that will make you see things in different ways. 

This particular entry involves a long snippet of COM code that is, frankly speaking, quite scary.  Raymond made a point in this entry of not using any external library (such as ATL, which cuts down the number of COM coding needed for this kind of trick) in order to show exactly what is happening behind the scenes.  This is a laudable intent but I couldn't resist adding the following comment on his blog:

> I believe the only point you've made is that only VB or C# should ever be used to access COM :-) 

Raymond also made a point of not using goto in his code snippet and COM being what it is, you need to constantly check for return codes and branch your code appropriately, which results in the frightening code you can see in his column.

In the same spirit, Rich wonders if his coding style is not obsolete.  He observes that the various seminal papers and books, such as "_goto considered harmful_ " and "_The elements of programming style_ ", are over ten years old and wonders if they are still relevant.

I can only salute Rich's willingness to question his habits.  Very few programmers ever do that and once they have settled in a comfortable programming style and set of tools, they hardly ever move away from it.  It is a very healthy attitude that I strongly encourage around me.  And in case you are wondering, an easy way to see if you are flexible is to stop using your current source editor and try another one (i.e. try an IDE if you are using emacs or try Eclipse if you are using IDEA).

Back to the goto problem, I believe Raymond's code is the perfect illustration of the few cases where goto actually improves the readability of your code, and somebody was quick to point that out in the comments.  Cascading error cases is a good illustration of the power of goto's, but you need to remember that languages that support exceptions are slowly making this kind of programming obsolete.  There is no excuse to use return codes to signal errors in Java, C++ or C#.

In the meantime, use goto sparingly and make sure you explain why you do so in a comment.
