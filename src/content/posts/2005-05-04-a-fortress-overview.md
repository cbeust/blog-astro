---
title: A Fortress overview
date: '2005-05-04T08:12:41'
slug: a-fortress-overview
categories:
- General
comments:
- id: 3588
  author: Stefan Tilkov
  date: '2005-05-04T11:23:53'
  content: You mean it differentiates between "=" and "=="? Hm ...
  replies: []
- id: 3589
  author: Angsuman Chakraborty
  date: '2005-05-05T03:47:00'
  content: 'Reminds me of the Fortran days with f77 compiler and WordStar in some strange mode as code editor and a pi-ssed off lab instructor @ IIT.

    I think current languages (except VB & Cobol) are mature enough and with some minor modifications could last for sometime, at least before "thought languages" takes over. I just "thought" it, will elaborate on a post soon :)

    BTW: The - after pi is to fool your comment moderator :('
  replies: []
- id: 3597
  author: screaming penguin
  date: '2005-05-05T07:05:58'
  content: '<strong>Cedric Beust has a look</strong>

    Cedric Beust has a look at Fortress, arguably a fourth generation language targeted squarely at the . . .'
  replies: []
- id: 3590
  author: Freddie Posey
  date: '2005-05-05T11:05:52'
  content: 'Where can I get a copy from?

    Is there a GNU version?'
  replies: []
- id: 3591
  author: Henri Yandell
  date: '2005-05-05T18:41:14'
  content: The = and := bit might be an attempt to be more usable for users of the competition, aka Mathematica/Maple/Matlab. I think at least one of these uses the assignment/equality difference.
  replies: []
- id: 3592
  author: wellsed
  date: '2005-05-06T12:41:53'
  content: The "not equals" operator in Fortran is "/=" or ".NE.", so its hardly fair to criticize Fortress for that notation if its goals are to evolve or replace Fortran.  Also, Fortran has assignment "=" and equality "==" or ".EQ.", which seems to be rather common in other languages.  Perhaps your point is different?
  replies: []
- id: 3593
  author: Nicolas Delsaux
  date: '2005-05-09T00:28:20'
  content: Is there any kind of compiler/interpreter/anything available to test it ?
  replies: []
- id: 3594
  author: Laurent
  date: '2005-05-10T05:34:55'
  content: 'From the TR:

    "No attempt has been made to support backward compatibility with existing versions of Fortran"

    That alone will kill this language, at least if it is marketed as a Fortran replacement.

    Hardware designers love their "high-level" Verilog or (read as "exclusive or") VHDL;  and scientists love their Fortran''s.

    Convincing them to change would be really funny...'
  replies: []
- id: 3595
  author: JV
  date: '2005-06-27T14:28:07'
  content: '"Eiffel was notoriously famous for this (e.g. using /= instead of the more familiar != or even &lt;>), and unfortunately, Fortress suffers from some of these vanity problems as well.  It''s not as bad as Haskell, though."

    Wrong.

    Do you read OOSC2?

    Do you understand mathematical simbol?

    Do you programming in Eiffel?

    I think, that you don''t.

    Eiffel is better Java,C,C#.'
  replies: []
- id: 3596
  author: assia
  date: '2006-12-04T08:02:38'
  content: what do you think obout th hierarechy of object in fortress???
  replies: []
---

I was quite excited to learn about the announcement of [Fortress](http://research.sun.com/projects/plrg/fortress0618.pdf), a new language from a team that includes Guy Steele, Common Lisp guru and famous author of the [Growing a Language](http://homepages.inf.ed.ac.uk/wadler/steele-oopsla98.pdf) paper.  It's not very often that a new language comes out with a PDF documentation of more than a hundred pages describing both the intent, philosophy and gritty details of the various features.

I was also curious to see how many of the ideas that Steele put forth in his seminal paper he was able to apply to this new language. 

Quite a few, it turns out.

If you are a Java / C# / C / C++ developer, here is what you might want to know about Fortress.

  * Fortress is an attempt to replace Fortran.  I know, it doesn't sound very good, but it's not too bad, really.  While Fortress has an undeniable bias toward a few mathematical constructs (such matrices and the fact that `*` is optional) and its documentation contains some scary looking words such as "Abelian group", the end result is actually quite pleasing to the eye and features a few pioneering language constructs that are worth a closer look.  
 
  * Fortress uses the full extended Unicode character sets, which means you can use all kind of strange characters such as Θ, ←  or ∈.  It's quite surprising at first but you get used to it really quick and I have no doubt that's what all languages of the future will look like.  
 
  * Fortress is strongly typed but uses type inference a lot, like Haskell and a few other functional languages.  In other words, you never need to specify a type when the compiler can guess it for you.  
 
  * Fortress doesn't have classes, it has `object` and `trait`, which is an interesting mix of of the traditional and prototype approaches.  Traits are like Java interfaces except that you can also specify concrete methods in them (a similar concept as the one found in Objective C).  Fortress also has an hybrid keyword called `api` which is like a trait except that it can only contain abstract methods.  I have to say this throws me off a bit.  
 
  * You can use named parameters to invoke methods.  
 
  * It supports design by contract with `ensures`, `requires` and `invariant `(I'm [not a big fan of DBC](http://www.jroller.com/page/cbeust/20021213) myself).  
 
  * There is a mysterious `dispatch` keyword that allows you to select on object types.  Not quite sure what this does exactly, I'll have to get back to it.  
 
  * You can mark methods with `test`.  Again, I'm not quite convinced this kind of thing should be part of a language, but well, I am promoting the [use of annotations](http://beust.com/weblog/testng) to do that myself, so I guess it's a small leap of faith.  
 
  * Fortress has support for automatic forwarding.  This is very interesting because the way this is implemented is almost identical to the way I suggested doing it a [long time ago](http://www.beust.com/weblog/java-delegation.html) (in 1998!) in Java.  
 
  * Fortress has extensive support for futures and asynchronism.  It goes much further than Java and its thread support, even with the ` java.util.concurrent` package.  Fortress is clearly geared toward making heavy computations, so this makes perfect sense, but the documentation gets a little bit abstract in this area, using sentences such as "asymptotic behavior of parallel code space".  Don't let yourself impressed, there are some truly interesting ideas.  
 
  * Finally, Fortress delivers on the promise of making the language "growable", a page from Guy Steele's own book.  The way this is accomplished is by allowing developers to specify entire abstract and concrete syntaxes in Fortress itself, which is quite a _tour de force_ (and as a matter of fact, the documentations shows the Fortress grammar in both EBNF and concrete syntax Fortress notation).  
  
Even though I have a lot of sympathy for the concerns expressed in Guy Steele's paper about letting the door open to evolve the syntax of a language, I am still skeptical that this is what will make your language stand the test of time.  Historically, languages have come and gone not because of their syntax but because they were no longer semantically adequate to address modern problems.  The only way you could actually make a language that flexible would be by fitting it with a meta-object protocol, but that's a path the Fortress team decided not to take, although their concrete syntax extension might possibly be used to that effect.



Obviously, I don't think Fortress is perfect, and there are a few things I dislike about it.

While I respect immensely the freedom of language authors to experiment and pioneer new concepts or introduce marginal ones, I still think there are a few compromises that should be made.  Some languages sometimes exhibit keywords or constructs that are clearly meant to do exactly the same thing as their predecessors, except with a different name.  Eiffel was notoriously famous for this (e.g. using `/=` instead of the more familiar `!=` or even `<>`), and unfortunately, Fortress suffers from some of these vanity problems as well.  It's not as bad as Haskell, though.

For example, Fortress uses the mysterious `bounds` instead of the more familiar `enum`, and it differentiates assignment from equality (like Pascal's `=` and `:=`).  It also uses `do` and `end` to surround blocks (I happen to think that these words clutter the code and that symbols should be used instead, or space-significant indentation, but that's just a personal preference).  Fortress also decided to declare the type after the variable (`x : Int`), which takes some time to get used to after all these years in C, C++, Java and C#.

Overall, Fortress is a very interesting language that has great potential to succeed to Fortran.  I have a couple of concerns regarding its acceptance as a general purpose language such as Java or C#, though:

  * It only has weak object-oriented support and lacks a few important features (no property support, for example, although this would be trivial to add with the concrete syntax extension).  
 
  * Its native support for numeric calculation might turn off the more general developer crowd and make it look marginal.



At any rate, Fortress is an impressive achievement, both in terms of breadth and documentation (Groovy people, please learn from this!).

I'll be keeping an eye on Fortress and I am wishing the team the best luck, they deserve it.
