---
title: We are all Hungarian Notation users.  Yes, even you!
date: '2005-05-11T10:12:41'
slug: we-are-all-hungarian-notation-users-yes-even-you
categories:
- Java
comments:
- id: 3626
  author: Pierre Carion
  date: '2005-05-11T12:09:21'
  content: 'According to:

    http://perso.wanadoo.fr/yoda.guillaume/Vocabula/GlosP/Preuve.htm

    "preuve par neuf" could be translated as "Casting out the nines"'
  replies: []
- id: 3636
  author: Agylen
  date: '2005-05-11T13:40:55'
  content: '<strong>Grokking Hungarian Notation</strong>

    Thanks to Joel, now I grok Hungarian Notation and see that it''s a Good Thing&#8482;

    Joel on Software - Making Wrong Code Look Wrong: "This was a subtle but complete misunderstanding of Simonyi&rsquo;s intention and practice, and it just goes to show ...'
  replies: []
- id: 3627
  author: Stefan
  date: '2005-05-11T13:42:51'
  content: BTW, growable languages is all Software Factories and Domain Specific Languages are about, it is just a different notation...
  replies: []
- id: 3628
  author: Jonathan Aquino
  date: '2005-05-11T19:08:43'
  content: 'Hi Cedric - Actually I''m a big fan of spelling things out in full.

    So in your example, itPerson and itAccount become PersonIterator and AccountIterator.

    "the widget", "the label of the widget", "the callback for this widget" become Widget, WidgetLabel, and WidgetCallback.

    Rather than btnYes, btnNo, btnCancel, I prefer yesButton, noButton, cancelButton.

    Spelling things out -- why not?

    Since the repetition happens at the end, I suppose you could call this style ... post-Hungarian?'
  replies: []
- id: 3629
  author: Patrick Schriner
  date: '2005-05-12T01:40:09'
  content: I
  replies: []
- id: 3630
  author: Kim Pepper
  date: '2005-05-12T15:57:27'
  content: 'Can you take the ''spelling things out'' too far? Try this class in the spring framework for example:

    SimpleRemoteStatelessSessionProxyFactoryBean'
  replies: []
- id: 3631
  author: Kim Pepper
  date: '2005-05-12T15:58:40'
  content: Thats 44 characters...
  replies: []
- id: 3632
  author: Rob Meyer
  date: '2005-05-19T14:13:01'
  content: Isn't this the ultimate extension of a type system? Shouldn't you have a user defined type called "index" that always represents an index and can only be added or substracted with other indexes? That way the compiler can flag it automatically...if the rule is simple enough to understand and remember while writing it, it should be easy enough to encode into the program. In a practical sense, trying to do this always seems like it generates an explosion of types, and the syntax is sometimes awful funny looking. Which is where operator overloading would seem to be useful...are languages just not flexible enough to drill the types down this far?
  replies: []
- id: 3633
  author: Jan Moons
  date: '2005-05-25T14:24:12'
  content: Well C
  replies: []
- id: 3634
  author: Nebu Pookins
  date: '2005-07-12T19:07:05'
  content: 'To me, the whole argument on hungarian notation is like the following short story:

    A: Your code is awful!

    B: What?! How dare you!

    A: No, I meant that as a compliment! You see, awful means "causes awe", and I think your code is so great as to cause awe in me. Therefore, I say it''s awful. People have misunderstood the word awful for years.

    Some of the posts I read on hungarian notation can be simplified to "Hungarian notation is the act of giving your variables good names. Who is against giving your variables good names? No one? See, you are all hungarian notation users!"

    Why bother labelling people this way? If you want people to use a certain naming scheme for variables, just tell them to use that naming scheme. If people don''t like being called hungarian notation users because of some emotional responce to the term "hungarian notation", don''t call them hungarian notation users. As long as we use a good naming scheme, who cares what that naming scheme is called?

    BTW, as a French speaker, "Preuve par Neuf" can be literally translated as "Proof by nine".'
  replies: []
- id: 3635
  author: ramtin
  date: '2008-09-01T07:34:21'
  content: is was good
  replies: []
---

I bet that most of your `for` loops on integers use `i` as a variable.

And that nested loops use `j` and `k`.

When you iterate over a collection, you probably use `it`, and if you have nested iterator loops, you might consider renaming your iterators to make the intent clearer (`itPerson`, `itAccount`).

If you are writing GUI code, you have probably noticed that you need to decline the same word several times to mean "the widget", "the label of the widget", "the callback for this widget", etc...  And you probably came up with your own personal convention to keep your code readable.

Maybe without realizing it, you are using Hungarian Notation. Well, at least, the original Hungarian Notation, the way it was supposed to be used.  Not the newer one that imposed mangling the type of variables into their names.

In a [very thoughtful entry](http://www.joelonsoftware.com/articles/Wrong.html), Joel Spolsky explains in details what the original Hungarian Notation was about, and why you should care.

Joel gets it.

He doesn't get _everything_ , though (see below), but he understands the importance of conventions and how appearance of code is more important than it looks.  No pun intended.

A long time ago in a physics class,  a teacher gave me a tip that I never forgot and that I kept using for years on.

It was about making a sanity check on a result.  Physics problems usually require you to manipulate not only a lot of variables, but also a lot of very different concepts.  The solution to a problem is usually a combination of several "dimensions", such as "meter per square second" or "electron volt per square inches".  My teacher suggested that I should always calculate the dimensions of the results on both sides of the equal signs, and that they had to match.  If they didn't, then I was sure I made a mistake somewhere.  If they did match, then...  well, the solution _might_ be correct.

If you did some basic arithmetic in school, you might remember a similar sanity check called "_preuve par neuf_ " in French (interestingly, I have no idea how it translates into English and I'll welcome anyone who can tell me).  The idea was simply to verify that both sides of the equal signs have the same nine modulo.  Why nine?  Because you can calculate it by adding the digits of the numbers involved.  If the sums don't match, you are sure you made a mistake.  If they do...  your solution might be correct.

Similarly, network layers have been using parity checks to quickly verify if a packet was corrupted during a transfer.  There are various ways to do this, but they boil down to a similar idea:  use an inexpensive algorithm to make a quick sanity check on a result.

The original Hungarian Notation aimed to provide a similar hint to programmers:  point out obvious mistakes.

Code that equates a loop index to the height of a window is spelled out in the open for you to see.  No compilers or IDE will catch these errors, but a human might if you used some some convention consistently (come to think of it, it should be possible to teach an IDE what kind of Hungarian Notation you are using so they would flag the errors that Joel describes in his entry...  intriguing idea...  will have to think more about that).

Read Joel's essay on this notation, it will enlighten you.  At least the part on Hungarian notation.

Joel's later points on operator overloading and the evilness of exceptions are definitely more questionable.  And he is so well aware of it that his article include a rebuttal to his own claims.  Now that's intellectual honesty if I've ever seen it.

But still, his points don't make much sense to me and he actually contradicts himself in a few places, such as:

> What all these rules have in common is that they are trying to get the relevant information about what a line of code really does physically as close together as possible 

Joel fails to see that exceptions actually work toward that goal:  they keep the pieces of code that do the same thing close to each other.  They concentrate the business logic in one place and the error-treating logic somewhere else (which is usually where you want it).

To vilify operator overloading and exceptions, Joel uses the old age argument:

> In general, I have to admit that I
