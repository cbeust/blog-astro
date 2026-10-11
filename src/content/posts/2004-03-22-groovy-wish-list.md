---
title: Groovy wish list
date: '2004-03-22T07:59:35'
slug: groovy-wish-list
categories:
- Java
comments:
- id: 1363
  author: Mike Spille
  date: '2004-03-22T09:39:46'
  content: 'I had the same thoughts on "." vs. "->" back in my early C days, and couldn''t think of a valid reason for having both.  The usage of the two seems to be stylistic, not technical, because the compiler can always determine whether or not you have a pointer.  It may also be a hold over from really, really early C, where maybe they didn''t have enough typing information (like back in the 70''s early).

    C++ is a whole ''nuther can of worms for the reasons you cite.

    I don''t have an opinion yet on Groovy''s ''->'' - the only purpose is to avoid NPEs, nothing else.  I don''t know if it''s good or bad yet.  I can see the motivation behind it, but whether it''s a good motivation remains to be seen.....

    On Groovy property semantics & syntax - I''m working on it between long compiles today....'
  replies: []
- id: 1364
  author: Jon Tirsen
  date: '2004-03-22T10:29:40'
  content: 'I''m not sure this is very related to the unboxing ''null'' discussion. When unboxing you are actually mapping from a source type where the value set is larger than the target set. I think it is in the spirit of Java to throw a NullPointerException when that mapping actually looses information. What value would unboxing an Integer assume? ''-1'', ''0''? I think it makes sense to throw an NPE in that case (and .NET does the same thing).

    As a side not .NET also has an interesting feature were it throws an exception if a value type over or underflows. This is extremely important in financial applications and if I recall correctly a feature like this could have hindered the Challenger accident.

    ''->'' is not really related to any of these things though. ''foo->bar()'' is a syntactic sugar for: ''(foo == null) ? null : foo.bar()''. It really does make sense when you chain things deeply, for example ''foo->bar()->baz()'' is short-hand for:

    ''Bar tmpBar = (foo == null) ? null : foo->bar();

    (tmpBar == null) ? null : tmpBar.bar()''. And so on.

    So it is about avoiding to write a lot of code not about avoid throwing a NullPointerException. As such it is actually completely safe, because a user chooses to use ''->'' when he is certain he wants to avoid write all that code, in the case of unboxing there is no way of indicating that the unboxing operation in fact lost some information (a ''null'' was converted into the default value).

    The only argument I have against ''->'' would rather be to avoid chaining calls that deeply (ie the Law of Demeter), but designing languages like that is a Directing Attitude and not an Enabling Attitue. Groovy (along with for example Ruby, Common Lisp and Smalltalk) is designed with an Enabling Attitude while Java is designed with a Directing Attitude. If you assume a directing attitude while designing Groovy then there''s really no point in a different language, you could just as well evolve Java further. (See http://martinfowler.com/bliki/SoftwareDevelopmentAttitude.html for a further discussion on enabling vs directing.)'
  replies: []
---

Mike describes his [experience with Groovy](http://jroller.com/page/pyrasun), and he makes a lot of good points.  The comments that followed brushed on some other aspects of Groovy, such as the operators "." and "->".

Mike's understanding is:

> Oh, and '.' vs. ->: I believe '->' guarantees that you don't get nullpointer references, so you can say foo.stuff()->bar.hincky()->bat.fly(), and if foo, bar, or bat are null it's a NOP. 

which is also what I inferred from the documentation I read (which I can't find any more, go try to Google for something like "." or "->"...).  This is also my understanding, but this behavior scares me.

We were confronted to the same problem in JSR 201 when trying to define the behavior of unboxing in the presence of a null pointer.  The initial draft specified that the default value for the unboxed type should be returned, but after careful examination (read:  dozens of emails), we decided that hiding a NullPointerException was a far worse offense.  We decided overwhelmingly in favor of throwing a NullPointerException, a decision which even now is still controversial with the community (to the extent that we might actually decide to do away with automatic unboxing altogether).

Groovy's "." and "->" operators suffer from the same problem.  I really can't think of a compelling reason to have both, but maybe someone will prove me wrong.

As a side note, I do have some history with these two operators, and it dates way back.  When I received my first CS classes, I remember asking the following question to my compilation teacher:  "Why does the developer have to remember which one of . or -> she should use?  Can't the compiler infer it based on the type of the lvalue?".  I don't remember ever receiving a satisfying answer to that question, even when C++ appeared and admittedly muddied the water with its feature of operator overloading (note that you can redefine "->" but not "."...).

In summary, here is what I'd like to see modified in Groovy:

  * Get rid of ->, keep "." and throw an NPE if necessary
  * Either require parentheses for method invocations or not, but don't allow both



I am not quite sure I care as much about semicolons (or lack thereof) as Mike does, nor do I see a compelling reason to modify the way accessors are defined, but I challenged him to come up with a proposal so let's see what he has in mind.

Show us the money, Mike!
