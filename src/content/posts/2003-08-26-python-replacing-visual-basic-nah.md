---
title: Python replacing Visual Basic?  Nah.
date: '2003-08-26T12:05:14'
slug: python-replacing-visual-basic-nah
categories:
- Java
comments:
- id: 424
  author: zwergnase
  date: '2003-08-26T12:58:21'
  content: 'hmm, there is definitively a way to use COM with Python. Checkout http://www.python.org/windows/win32com/QuickStartClientCom.html

    and http://starship.python.net/crew/mhammond/

    It might not be as easy and straight forward as with

    VB and the docu is a bit old.

    Haven''t played around with it since ''98.'
  replies: []
- id: 425
  author: staffan
  date: '2003-08-26T13:35:08'
  content: 'Re: Python''s COM interface

    While it''s true that python (together with just about any scripting language well-supported on windows) can call COM objects, this does not neccesarily mean that it''s as useful as VB (or even VBscript) for COM programming. While the basis of COM is simple, there are a lot of additional stuff that a COM object can provide (events/callbacks, enums, early and/or late binding, foreach-style iteration through the IEnumerator interface, optional arguments...). Does python allow smooth, language-native access to these features? Can you create a python object that is accessible from COM with all these features? (I''m not saying it can''t, I''m genuinely curios, because if it does it means I can try to write future one-off scripts in python instead of vbscript)

    The two things that are a little tricky with COM programming in VB is remembering not to create circular references (as COM doesn''t do true garbage collection) and knowing when to use "set foo = x.bar" as opposed to "foo = x.bar". Oh yeah, and remembering the difference between IsNull(x), IsEmpty(x), IsMissing(x) and (x is nothing). :-)

    Regarding COM being a good framework for reusable components: This is all true, but COM is being phased out in favor of the component framework in .NET (which is very similar to COM, but a little better in almost all respects). If someone wants to make sure Python can remain a VB competitor, I think good .NET component support is essential (And I believe Activestate is working towards this).'
  replies: []
- id: 426
  author: Alan Green
  date: '2003-08-26T16:21:22'
  content: 'I have worked on two commercial Python Windows projects, both making extensive use of COM via win32all in the form of ActiveState''s ActivePython.

    The first (early 2001) had a VB GUI and a Python backend. We chose VB because the tools were simpler, more widely understood and easier to learn than wxPython. From VB we used COM to call Python, which handled the calculation, file read/write and network access.

    The second (2001-2002), used Python to implement a Visio plug in. The Python code used COM to call back to Visio to cause it to draw shapes.

    I''ve also had a hard look at wxPython (http://www.cardboard.nu/archives/000077.html). WxPython comes with sample code embedding both IE and Acrobat reader.

    My conclusions:

    a) wxPython/win32all is a powerful combination and can do just about anything that VB can.

    b) VB is not going away anytime soon. The learning curve is too steep, the tools are too patchy and there just aren''t enough marketing dollars behind it.'
  replies: []
- id: 427
  author: Babu
  date: '2003-08-27T04:32:12'
  content: 'While I doubt many VB programmers out there will use *anything* else, I chose Python to make an application that extensively used Visio''s and Excel''s COM objects. VBA or VB was the first choice (with these being _native_ to MS platform), but quite frankly I found that the collections handling in VB is, well, unpredictable and unnecessarily complex. After switching to Python, and its native lists, with native Collection objects from Visio, my code got down to around 150 lines of core logic as opposed to around 1500 lines of very unreliable and hard-to-read VB code.

    Initially, it was a command line program. Added a quick GUI using PythonCard that provides a GUI interface also. So, most of the time people use GUI, but it works right-out-of-the-box with command-line interface too, for automation and for web hosting.

    I would definitely go with Python and PythonCard for quick app development.'
  replies: []
- id: 428
  author: veena
  date: '2003-09-28T14:50:11'
  content: Class or Component Resue in Python -What facilities are provided for class or component reuse and to what degree is reuse part of this language?
  replies: []
- id: 429
  author: Sergey Ivanov
  date: '2004-07-01T05:56:41'
  content: '"Satisfied customers with the most professional and affordable offshore development solution"

    With this mission in mind our developers has one priority: The real needs of our customers.

    We do not sell workarounds.  We sell a clean and real service.

    Our experience said that the offshore customers know exactly what they want.

    Because of that, Soft-Industry has develop a simple development methodology

    which has been build with the experience of different consultants and partners which collaborate with us.'
  replies: []
---

In a [ recent entry](http://www.nelson.monkey.org/~nelson/weblog/tech/good/pythonWindows.html), Nelson argues that "Python is good enough on Windows to replace Visual Basic":

> Between wxPython, pyGame, and the win32all extensions you have all the doodads you need to build Windows apps. 

Then he illustrates his point by explaining a little application he wrote in Python for his own use.

Unfortunately, he's missing the point.  The strength of Visual Basic has not much to do with the language itself, nor with the tools.  The reason why Visual Basic is so popular is COM.

Visual Basic is rarely used to write standalone applications, but the fact that you can reuse all the Office application (and a lot of others) from "outside" is a Windows feature that Linux and all other Unixes have never been able to achieve, despite commendable efforts. You have to hand it off to Microsoft, who truly enabled "component-based computing" as soon as 1995, when the first usable versions of COM appeared.

Here we are in 2003, with some stellar Java applications that we use every day and love.  How many of them can be scripted from the outside?  Where do I turn to if I want to reuse, say, IDEA's code editor?  How about Rational Rose's UML designer?  Or even a simple HTML renderer?

Component reusability cannot be retrofitted.  It has to be built in, from the ground up.  When I am writing a Java application and I have identified a component that might be of interest to other users/developers, there should be a simple way for me to expose a simple API that can be looked up and invoked from any language.

Before everyone points me to Jython and similar initiatives, yes, they are a good start, but nowhere near a true reusable component model similar to COM.  Until we see such a model in the JDK, we will never have true component reuse in Java.
