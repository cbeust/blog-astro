---
title: ANTLR vs. JavaCC
date: '2004-06-27T11:46:46'
slug: antlr-vs-javacc
categories:
- Java
comments:
- id: 1696
  author: Thomas Heller
  date: '2004-06-28T06:02:06'
  content: 'Hi,

    I recently wrote a compiler for a Template Engine myself and went through the same process you did. I however decided to use JavaCC after a while mainly because I didn''t want to have an antlr.jar in my classpath, cause unfortunatly antlr requires it at runtime. The grammar syntax is almost the same, JavaCC just needs better docs.

    There might be a way arround the runtime dependency but I didn''t look any further into that, JavaCC is also more "java-like" if you ask me, and JJTree makes a nice extension too.'
  replies: []
- id: 1697
  author: Jonathan Ellis
  date: '2004-06-28T09:10:10'
  content: you might want to also consider SableCC.
  replies: []
- id: 1698
  author: Andreas Mueller
  date: '2004-06-28T12:29:10'
  content: +1 SableCC.
  replies: []
- id: 1699
  author: Thomas Dudziak
  date: '2004-07-01T06:55:32'
  content: I write all grammars that I need (which are quite a few) with ANTLR, and I'm quite satisfied with it. The grammar syntax is closer to EBNF than JavaCC, the mailing list is quite helpful, and I can write a single grammar for multiple target languages. It's also reasonably fast, and Ter is actively working on it - in fact Antlr 3 will probably become the best parser generator ever from what I know of the planned features. Also I don't mind the runtime dependency (I can include all necessary classes in my own project as Antlr is Public Domain).
  replies: []
- id: 1700
  author: morten wilken
  date: '2004-07-08T01:53:00'
  content: 'i too like antlr, and dislike the runtime dependency.

    how come they have no antlr-client.jar? this seems to be the obvious way to do it.

    sincerely

    morten wilken'
  replies: []
- id: 1701
  author: Richard Thomas
  date: '2004-07-09T01:45:04'
  content: Robert Watkins (scroll down to the very bottom of his website) :)
  replies: []
- id: 1702
  author: Andy Streich
  date: '2004-07-10T11:24:10'
  content: 'Cedric, you are right on the money.  I''ve just gone through the same process you have.

    JavaCC is a great tool with terrible docs.  Sun ought to do better.  I''m guessing they took over management of JavaCC as a "favor" to the community and have no one working on it hoping that somebody from outside the company will help out.'
  replies: []
- id: 1703
  author: ''
  date: '2004-07-10T19:54:32'
  content: You guys use antlr for your JMS selectors don't you?
  replies: []
- id: 1704
  author: Elizeus
  date: '2004-07-27T12:15:18'
  content: fdeitau yoowiwcara.
  replies: []
- id: 1705
  author: priyatam
  date: '2004-11-26T01:15:08'
  content: I agree with cedric' views in the top., whats ironic is inspite of using javacc for over a month now & I still struggle for docs & finding out simple tweaks in the Tool.
  replies: []
- id: 1706
  author: Jonathan Nicholson
  date: '2005-01-04T03:36:34'
  content: I am doing my final year project on refactoring and I've looked at both JavaCC and ANTLR. I have no knowledge of programs like Lisp or Yacc (where most documentation assumes some knowledge of these), and I dont have the time to spend learning any program fully as well as writing a grammar. ANTLR is easy to pick up and has much better documentation than JavaCC, much better for us students
  replies: []
- id: 1707
  author: Jonathan Nicholson
  date: '2005-01-04T03:40:54'
  content: btw, that post was going to be much more complete, but the system used to post here is ... well not perfect, it was telling me i had questionable content... and eventually figured out after removing most of my msg that it didnt like my uni email address
  replies: []
- id: 1708
  author: Evans Zhagn
  date: '2006-03-23T02:07:13'
  content: I ever had used both javaCC and Antlr. I like javaCC, it is pure java style, and the lexer of antlr is not based on DFA but LL, so it is more easy to write lexer description in javaCC.
  replies: []
- id: 1709
  author: Evans Zhang
  date: '2006-03-23T02:07:46'
  content: I ever had used both javaCC and Antlr. I like javaCC, it is pure java style, and the lexer of antlr is not based on DFA but LL, so it is more easy to write lexer description in javaCC.
  replies: []
- id: 1710
  author: Immo
  date: '2006-03-29T05:53:48'
  content: 'If you want an introduction for javaCC, you might want to have a look at:

    http://www.javaworld.com/javaworld/jw-12-1996/jw-12-jack.html

    It''s about jack, the former name of javaCC. The Syntax has slightly changed so the examples won''t compile in javaCC without minor adjustments, but nevertheless it helped me getting started with JavaCC.'
  replies: []
- id: 1711
  author: justine
  date: '2006-04-21T08:40:55'
  content: I have been using javacc, and while the documentation needs significant improvement, I find that the jjtree extension makes walking the parse tree quite easy. Does antlr have a similar parse tree generator? Has anyone any thoughts on how tools like antlr and javacc stack up against JFlex and CUPs?
  replies: []
- id: 1712
  author: Dmitri
  date: '2006-07-08T07:35:03'
  content: '2 Immo

    I have had some good expirience with javaCC, and now I''m having quite bad expirience with antlr. And the problem is exactly in walking trees: antlr does not provide an inreface to the parent of the AST node, while javaCC does. And for my application this is a crucial point. The only reason why I turned to antlr is that it generetes C++ code. If javaCC could produce c++ code I would not have bouthored with antlr.

    BTW, in my opinion, antlr docs are even less clear and understandable then javaCC docs.'
  replies: []
- id: 1713
  author: Dmitri
  date: '2006-07-08T07:35:37'
  content: '2 Immo

    I have had some good expirience with javaCC, and now I''m having quite bad expirience with antlr. And the problem is exactly in walking trees: antlr does not provide an inreface to the parent of the AST node, while javaCC does. And for my application this is a crucial point. The only reason why I turned to antlr is that it generetes C++ code. If javaCC could produce c++ code I would not have bouthored with antlr.

    BTW, in my opinion, antlr docs are even less clear and understandable then javaCC docs.'
  replies: []
- id: 1714
  author: Swati Tiwari
  date: '2007-07-02T04:38:43'
  content: 'ANTLR documentation is definitely more helpful than JavaCC, it is extremely easy to understand as a student with sufficient examples :)

    cheers to Terr'
  replies: []
- id: 1715
  author: Kamel
  date: '2008-04-17T08:22:40'
  content: 'Same for me. Used Javacc for a while then needed antlr because it generates c# code.

    I really prefer the JavaCC lexer.'
  replies: []
- id: 1716
  author: SL
  date: '2008-08-07T03:23:41'
  content: I have been using both JavaCC and ANTLR for some time now. ANTLR is much easier to pick up and supports many languages. Once you mastered JavaCC and you are only dealing with Java, JavaCC is much better choice than ANTLR. Recently, I needed to create a parser to support TSQL, PLSQL and ISQLPLUS scripts, I could not do it in ANTLR without messy twist. I turned to JavaCC in the end. JavaCC's Lexer is much more powerful than ANTLR's.
  replies: []
- id: 1717
  author: Missthom
  date: '2008-12-11T00:01:06'
  content: I am just interested in ANTLR. I study about ANTLR in the homepage. My purpose is building one language translator. I hope you can help me.
  replies: []
- id: 1718
  author: Tim
  date: '2009-09-09T07:53:05'
  content: 'At my master thesis I was working on a task to create a new compiler for my tutor''s new theoretic programing language. So, I am student, but I still managed to get started with JavaCC (so the statement, JavaCC is to hard for students is wrong). I had a look into ANTLR as well, documentation is awesome, but ANTLR didnt fit my needs.

    JavaCC and especially JJTree were what I was looking for. After some research I was able to find some good documentation for JavaCC and JJTree. Of course, I had good experience due to my study, only the syntax of JavaCC grammars were different. The rules were kinda same then i learnt in CoCo-2. Also a good tip for getting started with JavaCC is the book from Tom Copeland. But with some experience the documentation is kinda enough.'
  replies: []
- id: 1719
  author: Ken
  date: '2009-11-09T09:50:34'
  content: '@ Immo:

    Thanks for the link.

    Nice tutorial.

    Before I have only known about the tutorial at

    www.engr.mun.ca/~theo/JavaCC-Tutorial/javacc-tutorial.pdf

    But the Jack-tutorial is nice, too.'
  replies: []
---

I have recently had the need for a parser.  The grammar I have to parse is reasonably simple but I have studied and written enough compilers in these past fifteen years to know better than hand-coding a parser myself (actually, the lexer is usually what turns out to be the trickiest part).  I used to use lex, yacc, bison, etc...  in the past so it was only natural to take a look at ANTLR and JavaCC.

Since I am fairly familiar with this family of tools, what I am looking for is pretty simple:  a tutorial that will quickly fill me in on the syntax used to describe the lexer and the parser and how to invoke the tool.

ANTLR provided me just that.  The [home page](http://www.antlr.org/) leads you to a Getting Started guide that tells me [exactly what I want to know](http://www.antlr.org/article/firstgr/index.html).  After ten minutes of research and reading, I feel qualified to start writing my first ANTLR grammar.

The experience with JavaCC was...  quite different.

First of all, [JavaCC's home page](https://javacc.dev.java.net/) doesn't make the documentation link very obvious. Scroll to the bottom to find a few links, but even this doesn't turn out very useful pointers:  FAQ, repository of grammars, installation and getting started (which actually only tells you how to install the software but not how to use it) and finally the complete documentation.

I am not looking for the complete documentation but I am running out of options, so that's what I end up clicking.  The page itself is still not the "complete documentation" but yet another collection of links that I have to wade through in order to find what I am looking for.  Needless to say my patience is running thin at this point and I am about to give up, especially when I see that the only tutorials on this page are about how the "lookahead processing" is performed and how the token manager works.

At this point, I just give up and I know I'll be using ANTLR.

Here is a quick advice to everyone who wants to make their software appealing:  I know how tempting it is to expose the technical brilliance of the internals of your software, but just don't give in to it.  Think carefully about your users, ask yourself why they would want to use your software and make sure that you design your documentation and your Web site with that in mind.
