---
title: Checked exceptions and virtuality
date: '2003-09-22T14:53:15'
slug: checked-exceptions-and-virtuality
categories:
- Java
comments:
- id: 542
  author: Nikita
  date: '2003-09-22T16:33:36'
  content: 'When we were doing our CLRxLint (adding checked exceptions to .NET via attributes) we''ve done some extensive research on why it was ommitted in the 1st place. Via many newsgroup, forums and conversations it become almost 100% clear that there were two main reasons:

    1) It should be cross-language,

    2) and as a consequence checked exceptions should be used for VB.NET API (the still major language) which it turn will almost kill any migration from VB6 to VB.NET - a must have for .NET success - b/c of a steep learning curve and major design changes in VB APIs..'
  replies: []
- id: 543
  author: Sam Pullara
  date: '2003-09-22T17:18:05'
  content: '+1'
  replies: []
- id: 544
  author: Jed Wesley-Smith
  date: '2003-09-22T18:15:36'
  content: 'the biggest problem I have with checked exceptions is that they really should only be added to your method signature with great care, but too many people add them willy nilly. The number of times I have seen EJBs that throw CreateException, NamingException, FinderException, RemoveException & RemoteException, is enough to make one cry. People just rethrow their checked exceptions without real thought of what they are doing (and in the EJB case mostly NOT rolling back the transaction).

    When used well, checked exceptions are great, when used badly they are a nightmare, but the same can be said of String!'
  replies: []
- id: 545
  author: Jed Wesley-Smith
  date: '2003-09-22T18:18:24'
  content: one thing that's always bothered be btw. is, is there any runtime difference between checked and unchecked? as far as I am aware it is purely a compile time construct. why would VB (or any API client for that matter) care if it doesn't handle checked exceptions formally, it doesn't handle unchecked ones anyway, so why not just pretend they are unchecked and carry on?
  replies: []
- id: 546
  author: Ian Fairman
  date: '2003-09-23T01:20:24'
  content: 'I''ve generally favoured the idea of checked exceptions and now I''m even more convinced they are the right way to go.

    I think, as Gosling says, "It really is a culture thing". The collective view of developers seems to be that it is good to be more rigorous: write unit tests, add assertions, do peer review - what we would call "defensive programming". Given this, it seems to go against the flow to argue that exceptions should be, by default, unchecked (what the Pragmatic Programmers call "programming by coincidence").

    If you don''t check for exceptions in some code, shouldn''t you have unit tests in place that demonstrate that you don''t need the checks? And also, isn''t the work involved in writing the exception handling code small when compared to the code you''ll need anyway for doing the tests? I''d rather write the error handling code in the first place -I''ll sleep better.

    Ian.'
  replies: []
---

I was reading the ongoing interviews of [Anders Hejlsberg](http://www.artima.com/intv/handcuffs.html) and [James Gosling](http://www.artima.com/intv/solid.html) over the weekend and I had several thoughts.

If you are a regular reader of this weblog, you know that I have a high respect for Anders Hejlsberg and his work (current and past).  Overall, his stance on various issues is very pragmatic and fairly well articulated.  However, I find myself disagreeing on two of the issues discussed in the latest parts of these interviews, namely:

  * Why C# methods are not virtual by default.  
 
  * Why C# doesn't support checked exceptions.



What strikes me in Anders' interviews is that while he gives numerous technical reasons for these choices, he omits to mention what I think is the principal motivation:  the necessity for cross-language compatibility.

C# runs on the CLR and has therefore to obey constraints that are sometimes non negotiable.  The CLR was built to be cross-language, and as such, it also has to support C++ and Visual Basic, none of which support checked exceptions and I don't really understand why Anders never even mentioned that these requirements weighed heavily on the design decisions involving these two choices.

As for the age-old debate "checked exceptions versus runtime exceptions", I refer you to the [current TheServerSide thread](http://www.theserverside.com/home/thread.jsp?thread_id=21538&article_count=20#96357) which contains a lot of interesting articles (especially Mike Spille's).

As for the question "should methods be virtual by default?", it's close to a religious issue but I'll share a few thoughts.

The way I see it, code can be extensible in two ways:  "by design" and "technically".

Being "technically extensible" means that the language and tools you are using give you the power to extend the code without any workaround.  Languages that are on the "virtual by default" side tend to produce code that is more technically extensible than others.

If the code is extensible "by design", the extension points and their contracts have been thoroughly tested and documented.

It's very rare to find code that is extensible both technically **and** by design, but in my experience, at least if it is technically extensible, I can find ways to work around the absence of design.  If you mark your method private or final, I am left with no options at all.

As for James Gosling's interview, I highly recommend it, it's filled with very sensible advice about why checked exceptions are a good thing.  My favorite part is:

> It really is a culture thing. When you go through college and you're doing assignments, they just ask you to code up the one true path. I certainly never experienced a college course where error handling was at all discussed. 

James talks about the "creepy feeling" you should have when you write code that downplays the importance of errors and argues that with checked exceptions, you can't escape that feeling:  you have to face it.

And I think it's a good thing.
