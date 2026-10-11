---
title: Mike on Groovy
date: '2004-03-29T05:15:34'
slug: mike-on-groovy
categories:
- Java
comments:
- id: 1387
  author: James Strachan
  date: '2004-03-29T05:49:05'
  content: 'Agreed Cedric.

    Incidentally one of Mike''s main issues, the use of newlines with closures, has been resolved for now (though the JSR may wish to re-address this) - a fix should be in CVS in the next few days as part of the new parser.

    We definitely need to come up with a definative answer on optional semicolons, parenthesis & return keyword through the JSR.

    I confess to liking the lack of semicolons unless absolutely necessary (e.g. multiple statements on one line). I sit on the fence a little with optional parenthesis and return statement. e.g.  I quite like that we can syntactically differentiate between ''property access'' and ''methods''.'
  replies: []
- id: 1388
  author: Hani Suleiman
  date: '2004-03-29T07:09:32'
  content: 'You have a lot more fair in the expert group title than I do!

    This particular EG would, as currently proposed, just be the people writing groovy. Not a bunch of people significantly smarter, more mature, or more user-friendly.

    There are plenty of examples of expert groups out there that consist of a bunch of dummies, at least, the vocal ones who persist with their dummy ideas and make sure the clueful people just get bored of arguing. JSTL and the servlet spec are perfect examples.'
  replies: []
- id: 1389
  author: Mike Spille
  date: '2004-03-29T09:55:55'
  content: 'The number of "real" languages where whitespace of any kind is considered significant is, I believe, pretty small.  What comes to mind is of course Python, and some things like ancient Fortran (comment indicator in, what was it, column 7?  :-).  Groovy seems to pretty firmly fall into the majority "white space is not significant" family, at least in concept.  The problem with the current Groovy appears to be that using white space was the easiest way to support some of the short cuts.  I''m glad to hear that they''re eliminating some of this with some new parser work, but from descriptions I''m worried that it''s not enough.

    On closures - Cedric, I think you''re being a bit too glib when you say:

    "[...] it would be better to simply fix the parser so that closures can remain as they are and be absolutely space/newline/tab neutral.  The resulting grammar will most likely not be LALR(1), but that''s a problem for James and his fellow developers, not users."

    I don''t see it as soley a technical issue for the parser team to solve.  It''s more fundamental than that: is overloading ''{'' really a good idea, and is it the best way to do it?  I''m not completely enamored of a "closure" keyword either, but it seems like the least evil of the choices out there.  As an exercise I''ve converted a whole boatload of code from existing Syntax to a closure-keyword syntax, and hacked VIM to include it in syntax highlighting, and it''s freaking _slick_ for readability.  And it collapses a number of cases in the parser from special cases and special analysis into easy to recognize and process chunks, with alot of potential for sharing of code between closures and methods (particularly in relation to parameter lists).  Get rid of optional parens/semis/returns, and it becomes effortlessly parsable to someone who is Java minded.

    On parens or no parens - it''s an arbitrary change from Java who''s main feature is to confuse people not famililiar with Groovy.  It''s yet another hurdle to overcome which doesn''t give you anything extra.  It needlessly alienates Java developers.

    My own viewpoint here is that many Groovy scripts look extremely foreign to Java developers _for no good reason_.  Take away the arbitrary differences and you''d see an order of magnitude more adoption of the language.  Then you have a convincing story for users - we use Java where it makes sense, and add clear value on top of it - first class closures, lists, maps, dynamic typing, etc.  Where Java doesn''t have a new feature, it''s like Java.  Where it has a new non-Java feature, well, then you have something new to learn.  The trouble is,in Groovy new users have to learn basic statement syntax all over again _and it gives them no value_.

    I see Groovy, in potential at least, as based on Java with new stuff added on top of it.  Your view, and apparently James'' to some extent, is that Groovy is a new language that will borrow semi-equally from a number of languages, where Java is just another language to borrow from.  This is to me a huge mistake, and it''s throwing away a majority of potential users.  A whole new language requires too much up-front learning time. By contrast, the more compatible you are with Java, the more people can learn by incrementally getting into it.  There is no big-bang learning time in the beginning.'
  replies: []
- id: 1390
  author: Ross Judson
  date: '2004-03-30T22:37:21'
  content: 'Seems like a bit of "what''s old is new again"...

    (define (inject seed lst func)(cond ((pair? lst)(inject (func seed (car lst))(cdr lst) func))(else seed)))

    (inject 5 ''(1 2 3) (lambda (a b)(+ a b)))

    Oops.  Might not get the tail-recursion with that inject.'
  replies: []
---

* Mike just posted a [very thorough analysis](http://jroller.com/page/pyrasun/20040328#groovy_ambiguities_optional_elements_and) of Groovy's syntactic flaws.  Here are a few comments on some of the points he made:

> In general, now that I've looked into the Parser code in depth, I am deeply distressed by how often the parser looks at newlines as being semantically meaningful. To put this in the strongest possible terms, **WHITESPACE SENSITIVITY IS JUST PLAIN WRONG IN A LANGUAGE LIKE GROOVY**. 

I think the problem is not exactly there.  The rule of thumb is:  if spaces are not semantically meaningful, then neither tabs nor newlines should be.  Groovy is clearly violating this principle, and this needs to be fixed, but I think that instead of replacing the existing closure syntax with the one Mike's proposing (sorry Mike, I'm still not crazy about the "closure" keyword), it would be better to simply fix the parser so that closures can remain as they are and be absolutely space/newline/tab neutral.  The resulting grammar will most likely not be LALR(1), but that's a problem for James and his fellow developers, not users...  
 

  * I like the way Python makes spaces meaningful, but I am afraid that in the presence of closures, such indentation is doomed to fail.  
 
  * I also like the idea of doing away with parentheses altogether.  It looks quite alien the first time you do it, but it grows on you very fast.  After all, who cares if "person.firstName" refers to a field or to a method call, all you know is that it returns a string representing the first name.  
  
That being said, if you go that way, the syntax for invoking methods with parameters become harder to parse when you read the code, especially in the presence of named parameters, although once again, this is something you might eventually get used to as well.



My overall feeling on all these issues is that when it comes to writing code, the developer's options should be limited to spaces, newlines and tabs.  In other words, the language should let me format my code that way I want it, but there should be just one way to write syntactically correct statements.  Therefore, Groovy should:

  * Impose semi-colons everywhere or not impose them at all.
  * Require parentheses for method calls everywhere or never require them.



Most of the flaws depicted in Mike's posting are nothing more than signs of a very young language.  James and his team are experimenting with various ideas but haven't had the time to really consider all the syntactic and semantic implications of their ideas, which further obviates the necessity of a JSR to fix these problems.

It will be the Experts Group responsibility to keep the language in check, both syntactically and semantically, and make sure that Java developers can adjust to it very quickly while still retaining the power that Ruby and its siblings offer to its community.
