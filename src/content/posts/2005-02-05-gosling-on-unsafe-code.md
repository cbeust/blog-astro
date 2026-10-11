---
title: Gosling on unsafe code
date: '2005-02-05T07:22:02'
slug: gosling-on-unsafe-code
categories:
- Java
comments:
- id: 3082
  author: Jonathan Ellis
  date: '2005-02-05T08:16:44'
  content: I think you're being a little disingenuous...  nobody is going to run Word or other large C++ applications under .NET; millions of windows users don't really care if .NET can't run unsafe code.
  replies: []
- id: 3083
  author: aaa
  date: '2005-02-05T09:52:19'
  content: i thing Gosling's comments are very exaggerated by the IT media, and blogs. The truth is, C and C++ are not suited for managed code, and in the article it says nobody actually uses managed C++ in real life applications. you must make a reality check over the issue that winows is re-written using managed code.. yes programmers write good code, but they need something better than C++ for that.
  replies: []
- id: 3084
  author: Jason Barker
  date: '2005-02-05T10:00:36'
  content: 'Hmm, the way I see it. James is not really attacking C/C++, he''s only pointing out that Microsoft''s decision to support those in CLR in .NET .

    Providing Microsoft''s track record in security, supporting C/C++ will open another can of worm.

    > good code comes from programmers, not languages.

    Exactly. That''s why I think it''s sad you misunderstood James'' comment. Are you going to say that everyone doing .NET is good programmer?'
  replies: []
- id: 3085
  author: Nelson
  date: '2005-02-05T15:21:53'
  content: 'This ".NET is insecure because of unmanaged code" thing is really old, I was surprised to see it resurrected. The situation in .NET is very similar to the ''native'' keyword in Java that allows arbitrary machine code to be linked in, making Java insecure. In both .NET and Java you have the choice to go fully VM, but you also have the option to open your vein to machine code if you really want. It''s disingenous for Sun to blame Microsoft for this.

    The difference between Java''s ''native'' and .NET''s unmanaged code, btw, is that .NET works a whole lot better. It''s a very clever system that allows you to subclass code in different languages.

    I''m a big Java fan, but that doesn''t mean I need to pretend .NET is evil.'
  replies: []
- id: 3086
  author: rogerv
  date: '2005-02-06T23:21:00'
  content: I was actually on a .NET dev team that used managed C++ back in 1998-99 time frame. What is now referred to as the C# language was a work in progress at the time. The core development of .NET was being written in a Java compiler that was modifed to emit IL for the CLR. The team I was on was writing an ORM (which got canned in favor of not muddying the waters for ADO.NET). We opted to use managed C++ because it was stable and what we all knew because we were all C++ Windows developers. At the time it was interesting and novel to write C++ for a garbage collected memory management system.
  replies: []
- id: 3087
  author: ''
  date: '2005-02-17T23:01:32'
  content: Uh, Solaris is not written in C++. Try C. And assembler, forth, perl and probably others. But the kernel is mostly in C. You just don't do system work in C++.
  replies: []
---

![](http://images.google.com/images?q=tbn:KjQgZJKZpgwJ:www.erx.de/leistungen/java/java_logo.gif) ![](http://www.microsoft.com/net/directory/graphics/img-premlogo.jpg)

In a [recent talk](http://www.zdnet.com.au/news/security/0,2000061744,39179932,00.htm) about .Net, James Gosling made the following comment:

> Microsoft
