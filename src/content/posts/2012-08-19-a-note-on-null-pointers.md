---
title: A note on null pointers
date: '2012-08-19T11:54:09'
slug: a-note-on-null-pointers
categories:
- General
- Kotlin
comments:
- id: 9539
  author: Takeshi
  date: '2012-08-19T13:13:12'
  content: 'I guess what i find the best about Option[T] is that it is clear when a method may receive a null (or None in this case) right in the method signature. In a way, it''s like in java world, (almost) every parameter and return value is an Option[T] until you read the javadoc (and only when it is synched with the code) or the code. I guess that is why people say that they never see NullPointerException anymore: when something can be null, you must deal with it right there before you can use its value and you can never forget because you dont have a reference to a T, but to an Option[T].

    At least that is what i think - but im nobody (just a regular java programmer that wishes were working in sacala), so take my word with a grain of salt.'
  replies: []
- id: 9540
  author: Erik Engbrecht
  date: '2012-08-19T13:39:33'
  content: 'I believe the point of using a language with an expressive type system is to try to converge the range of values that the type system allows a function to return with the range of values that are valid outputs of the function.  So in type safety nirvana the types and the valid values are the sames.

    Ironically Option, it you look at it precisely, moves away from this goal.  If we have a function D =&gt; R defined in Scala (or Java) then the possible return values are: R | null

    But if you change the signature to D =&gt; Option[R] then you can return:

    Some(R) | Some(null) | None | null

    In most cases Scala developers (including myself) just assume that anyone that returns Some(null) or null rather than None or Some(R) is either evil or stupid, and because neither evil nor stupid people write programs in Scala, it is a valid assumption.  :-)'
  replies: []
- id: 9541
  author: Mark C. Chu-Carroll
  date: '2012-08-19T14:09:24'
  content: 'I don''t want to get into a flame war, so I''m going to keep my comments as restrained as I can.

    The reason that I think it''s so great that I don''t get NPEs when I use an option with something like Option isn''t because it makes me a super-programmer who''s better than anyone else. It''s because it helps me to avoid making the kind of mistake that it''s easy to make, because I''m a fallible idiot of a human.

    The point of the difference between null and Option is that it''s converting a very hard-to-find, pervasive error into a very specific error. In Java, when you have a null pointer exception, *every* assignment to a variable of the object type, *every* function that returns an object, has to be considered suspect as a possible source of the error. Option types - whether the way they''re presented in Scala, as a parametric monad type, or Kotlin as a type annotation, or whatever else, they provide a way of limiting the source of the error. In the Scala code that I work with, I don''t worry about unexpected nulls, because everywhere that could have an Option is clearly marked as taking an Option. If it''s *not* an option, it *won''t* be null. That is *immensely* valuable.

    Likewise, the point of a monadic operation over option isn''t that it does something fundamentally different; it''s that it makes the code easier to read by abstracting a common pattern.

    I can''t count how many times I''ve had to type out variants of "if (x != null) { doSomethingToX(x) }" in Java or C++ code. Retyping the same boilerplate thing over and over again is a waste of time, and worse, it''s a source of stupid errors, because when you''re retyping the same thing a hundred times, you don''t pay as much attention, and you make mistakes.

    x.flatMap(_.foo).flatMap(bar).flatMap(_ * 2)

    is a whole lot clearer than writing out a control structure for three sequential null tests.'
  replies: []
- id: 9542
  author: Daniel Spiewak
  date: '2012-08-19T14:28:29'
  content: 'You''re missing the endpoint of your Option chain: getOrElse.  This is something I have yet to see an analog to in Groovy.  Not because it''s not possible, but it''s just not there.

    Part of the *reason* it''s not there is null doesn''t force you to consider the None case.  It just??happens.  Here''s the thing: Scala''s type system does *not* allow me to get a None where I am making a hard assumption about having a Some.  The only way to get that is to use functions which are known to be unsafe (e.g. get).  As long as I stay out of those functions (which are never needed anyway), I can have a guarantee that I will never see a value I don''t expect.  Why?  Because the API forces me to deal with the case where the value is None or pass it along (in which case the next guy is forced to deal with it).  Either way, the language has forced me to think about what I want to do in that case.  This is a far cry from null, which can (and does) silently sneak into totally unsuspecting computations.

    I hate to say it, Cedric, but your post really smacks of someone who hasn''t actually used Option/Maybe in a serious way.  While your broad point (that null is a manifestation of an unexpected value) is spot on, your specific inference about Option is simply unfounded.  In practice, it doesn''t work that way, because the API forces you to deal with those cases and gives you the tools to handle them in a graceful and composable fashion.  I can count on one hand the number of times I have had trouble "tracing through the chain of options" to find the source of a None.  It''s usually very, very apparent.

    My point is this: while you are correct that Option doesn''t magically make all your problems go away, it does a good job of making you think about your problems before they happen and additionally giving you the tools to deal with those problems as they arise.  This is why Scala programmers crow about "never seeing NPEs".  They never see "None.get errors" either.  It''s just a non-issue in well-written Scala code.'
  replies: []
- id: 9543
  author: Guy Incognito
  date: '2012-08-19T20:58:59'
  content: 'Well, I for one thank you very much for writing this post. I appreciate this viewpoint.

    Sure, other commenters may refute your points, and their refutation may in turn be refuted (as internet debates often go), but I''m glad you took a look at things from this viewpoint. Multiple paradigms exist simply because multiple [seemingly conflicting] viewpoints can simultaneously be valid.

    Cheers.'
  replies: []
- id: 9544
  author: Brian
  date: '2012-08-19T21:24:36'
  content: "Groovy with nulls:\n  bob?.department?.head?.name\nScala with type-safe Options:\n  bob.flatMap(department).flatMap(head).flatMap(name)\nBut we can even get close to \"... the standard composition operator you are familiar with if you are using a C family language\":\n  implicit def option2Question[A](a: Option[A]) = new {\n    def ?[B](b: A =&gt; Option[B]) = a.flatMap(b)\n  }\n  bob.?department.?head.?name\nBest part? The compiler will tell us when we do something silly like:\n  name(bob.?department.?head)\nYes, it's safer than null."
  replies: []
- id: 9545
  author: Simon Farnsworth
  date: '2012-08-19T22:59:06'
  content: 'Thinking about your post in a different way, why do we have separate types in Java for functions, objects and integers? They''re all just memory underneath, so why do I have to track the differences? After all, if I get it wrong, it won''t work - that''s a programming error.

    Indeed, if you''re working in raw machine code, you do work with blocks of memory, and have to track whether it''s code or data, and if data, which operations make sense. Get it wrong in a corner case, and your program will appear to work most of the time, except when you get an inexplicable failure (as you try to execute a string, or treat a float as an integer).

    Given that there exists a large class of bugs where the programmer makes a mistake and executes the wrong block of memory, or has it operating on the wrong block of memory, why do we bother with functions, objects etc, whose major goal is to convert such mistakes from silent failures to noisy errors? I would argue that Option/Maybe is in the same category - at some point, you need to examine the box, and find out if you have a Some thing or a Nothing. Just as ''string.trim()'' has fewer runtime failure cases due to programmer error than ''MOV R0, 0x12348; CALL 0xaf08'', so ''println(name.getOrElse("Anonymous"))'' has fewer runtime failure cases due to programmer error than ''if(name == null) name = "Anonymous"; println(name)'''
  replies: []
- id: 9546
  author: Germ??n
  date: '2012-08-20T02:38:24'
  content: 'If an api state that some parameter is of type Option[T] or that it returns Option[T], then, almost by definition, None is *not* an unexpected value.

    If you are dealing with values of type Option[T], for example, in a method which returns T because you don''t want to state that None is an expectable return value, then, you use getOrElse to indicate what would the default value in case of None, which in turn, maybe to your surprise, can be something that throws an exception like sys.error("here should not be a none").'
  replies: []
- id: 9547
  author: Alexandre Bertails
  date: '2012-08-20T02:41:45'
  content: '"The answer is easy: receiving a None when you expected a Some." So easy that you didn''t even try to understand how this whole thing works...'
  replies: []
- id: 9548
  author: Brian Smith
  date: '2012-08-20T03:07:10'
  content: 'The whole point of an API using an optional type is that there is no unexpected value.  You can''t be caught by surprise at runtime.  The out of band signalling that null is often used for in Java land is now in band, you are forced to handle it by the type system.  There is also elegant machinery for doing so.  Rockstar programmers?  No, quite the reverse: programmers who recognise their own ability to make mistakes and prefer to make them at compile time.'
  replies: []
- id: 9549
  author: Nulls | Good Math, Bad Math
  date: '2012-08-20T05:14:37'
  content: '[...] over my comments about avoiding null pointer exceptions. To show you what I mean, here&#039;s a link to one of the more polite and reasonable [...]'
  replies: []
- id: 9550
  author: Praveen
  date: '2012-08-20T08:10:20'
  content: 'I believe any language that forces you to handle alternate flows, that''s win a win situation for all the stake holders (QA &amp; Developers) and the quality of the software.

    Cedric -Being proponent of unit testing I guess you are underestimating this point.'
  replies: []
- id: 9551
  author: Sony Mathew
  date: '2012-08-20T08:17:09'
  content: 'Java is clean and clear.

    assert a != null;'
  replies: []
- id: 9552
  author: clay
  date: '2012-08-20T11:55:59'
  content: '@Daniel Spiewak, isn''t the elvis operator the Groovy analog to getOrElse?

    @OP, sure, often NPE''s have underlying logic errors that Option/Maybe don''t address. I never get NPE''s in my Java code, honestly. I''d still argue that flatMap and for-loop-iteration syntax is more concise, cleaner, and idiot proof than the traditional approach with if null checks.'
  replies: []
- id: 9553
  author: Eric P
  date: '2012-08-20T17:23:41'
  content: 'The groovy ?. and ?: operators are nice, but those are just two things that can be done with flatMap/getOrElse.  I''d rather have the full functional power of Option (see http://dibblego.wordpress.com/2008/01/16/scalaoption-cheat-sheet/).'
  replies: []
- id: 9554
  author: Eric P
  date: '2012-08-20T17:42:22'
  content: 'Also - a None will short circuit a chain of flatMaps just as a null will short circuit a chain of ?.  The None doesn''t make its way through the whole chain.  For example:

    scala&gt; None.flatMap(_ =&gt; {println("hey"); Some(1)}).flatMap(_ =&gt; Some(2))

    res4: Option[Int] = None

    As you see "hey" was not printed.'
  replies: []
- id: 9555
  author: Eric P
  date: '2012-08-20T17:48:12'
  content: "Here is the definition of Option.flatMap:\n@inline final def flatMap[B](f: A =&gt; Option[B]): Option[B] =\n    if (isEmpty) None else f(this.get)\nThat is how the short-circuiting / chaining works."
  replies: []
- id: 9556
  author: Alain O'Dea
  date: '2012-08-21T15:53:07'
  content: '@Cedric, you are certainly correct in identifying the myth that Option solves all null problems.

    Scala''s Option[T] moves visibility of the problem to compile time.  This seems like an improvement to me.

    @Erik Engbrecht, you have hit on a gap in the system.  While providing null in place of Option[T] is fairly obviously misuse, it is not a compile time error. Some(null) is not only valid, but absolutely necessary since nulls are perfectly valid expected values in coexistence with Java:

    http://stackoverflow.com/questions/5796616/why-somenull-isnt-considered-none

    The essence of Cedrik''s point here is that Option doesn''t eliminate unexpected values and he is correct in that.  I think Option is a value-add since it helps clarify intent and provides access to machinery for consistently handling possibly absent values.'
  replies: []
- id: 9557
  author: oxbow_lakes
  date: '2012-08-22T01:40:39'
  content: 'This line in my colleague''s Java code:

    assert trade.getMarket().getExchange().getCountry().getRegion().getName() == "EU";

    threw a NullPointerException (sadface). Now, I''m not too familiar with this program and I have no idea whether it is legitimate for a trade to be marketless, a market to be exchange-less, an exchange to be country-less etc etc. I also do not know what was actually null. This is a bug, clearly, but where is it? Is it in the domain model? Is it in the business logic that has allowed such a trade to get here? Or is it in this line of code where I should be doing null-checking?

    null indicates a bug, to be sure, but not where that bug actually resides.

    *Note: This does not happen when you let the type system correctly model your domain*'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/wonka-npe.jpg)

It's the [second time](http://scientopia.org/blogs/goodmath/2012/08/19/monads-and-programming/) in a few weeks that I have read something along the lines of: 

> In a year at foursquare, I've seen exactly one null pointer exception. 

To me, this kind of statement is similar to 

> Ever since I switched to BASIC, I haven't seen a single stack trace. 

and it shows a fundamental misunderstanding of what a programming error is. Similarly, hearing Tony Hoare say that introducing null was a "one billion dollar mistake" makes me really question if he understands the fundamental idea behind crashes. 

Null pointer exceptions, stack traces, core dumps, guru meditations, etc... are usually all the manifestation of a simple phenomenon: unexpected values. Somehow, your code expected a value but received another one. This is a programming error, also known as a bug. 

If you are using a language that supports monadic `Option/Maybe` types, by definition, you will not be seeing any null pointer exceptions, but this doesn't mean that you have solved the "unexpected value" problem. 

In languages such as Java or C, null pointers translate into crashes that are hard to miss and usually easy to diagnose. What would be the equivalent of this in Scala? 

The answer is easy: receiving a `None` when you expected a `Some`. Because of the way you thread monads through your functions, such a bug will not trigger any exceptions nor any crash: your `None` value will happily make its way through monadic transforms and will simply result in a no-op every time it's being mapped. Of course, your program will yield an unexpected value that you will take notice of at some point, and then you will have to go through the painful process of retracing all the `Options` that your transformations have gone through to find out which one returned `None` when it should have returned a `Some`. 

At this point, you should probably ask yourself: if this piece of code should never return a `None`, why return an `Option` at all? In such cases, you are better off unboxing your `Option` and returning its raw value. Of course, the downside of this is that you might have to lift your value again if the following computations happen in the `Option` monad as well. 

As you can see, `Options` come with their own trade offs and hard design decisions as well. No such thing as a free lunch. 

Which leads us to the next big misconception about this class: `Option` doesn't solve null pointer exceptions nor unexpected values, it just saves you from having to test against null. And actually, doing so (e.g. pattern matching your option against `Some`/`None`) is usually considered bad practice, even though it's sometimes necessary for Java interoperability reasons. 

Personally, I favor the way Groovy, Fantom and Kotlin address the problem over having to lift all my values into `Option`. For example, here is how Kotlin lets you ignore `null` values encountered along a chain of invocations: 
    
    
    bob?.department?.head?.name
    

If either of these accesses returns `null`, the result of this expression will be `null`. No need to put your values into monadic boxes nor mapping through them, just use the standard composition operator you are familiar with if you are using a C family language. 

By all means, do use `Option` whenever you can if you are programming in Scala (and you will probably realize that you can't use it as much as you would like because Java libraries, and some Scala ones, are just not implemented to take `Option` parameters), but don't listen to people who tell you that because you are no longer seeing any null pointer exceptions, your code is safer. It's not. You still have to fix your bugs.
