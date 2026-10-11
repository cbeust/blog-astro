---
title: Why Java doesn't need operator overloading (and very few languages do, really)
date: '2009-04-12T07:43:55'
slug: why-java-doesnt-need-operator-overloading-and-very-few-languages-do-really
categories:
- Java
comments:
- id: 7751
  author: Jonathan Rascher
  date: '2009-04-12T08:57:01'
  content: 'I agree that code like { ageMap += new Map.Entry("Bill", 42); } could be confusing, but I think { ageMap["Bill"] = 42; } is perfectly reasonable, and much nicer than { ageMap.put("Bill", 42); }. The indexer and equal sign make it clear that the code assigns a value to some slot in the map, instead of just feeding it to an arbitrary map method. There''s also an existing precedent for syntax like this. Maps already support assignment via indexing in C++, Python, PHP, and many other languages, and I don''t think your average Java programmer would have any problem understanding code like this.

    Also, "zero in the sense of a collection" is just the additive identity: an empty collection. In other words, { list + Collections.emptyList() } should be equal to { list }.

    PS: It would be really nice if the comment system supported &lt;code> tags.'
  replies: []
- id: 7752
  author: Sammy Larbi
  date: '2009-04-12T09:16:12'
  content: 'The biggest ones for me are ones when you want to implement arbitrarily large numbers. I''d really love to not do mathematical operations on them with

    number.add(another).subtract(yetAnother)...'
  replies: []
- id: 7753
  author: RichB
  date: '2009-04-12T09:21:02'
  content: 'Great use of operator overloading:

    system.out.println("hello " + "world");

    Bad use of operator overloading (multicast delegate):

    textbox.OnClick += Click_Handler;

    textbox.OnClick -= Click_Handler;

    But I like the homogeneity of Scala''s ''operator overloading''.'
  replies: []
- id: 7754
  author: Weeble
  date: '2009-04-12T09:37:26'
  content: 'I think more types have reasonable meanings for comparison operators than for arithmetic operators.

    I can''t quite tell what your stance is on operator overloading for mathematical types, e.g. Decimal, Vector, Matrix. Are you saying it''s useful but not useful enough to justify the feature?

    When writing numeric code in C# with operator overloading, I find a problem is the way that operators use static dispatch: operators aren''t part of any interface so you can''t use them in generics. (E.g. you might have wanted to write Matrix where T is numeric and might be float, double, Rational, Decimal, etc.) Of course, there are good reasons they use static dispatch, and I''m not really sure how you could make it all work nicely: [Link to Eric Lippert''s blog removed because the comment system doesn''t like it.]'
  replies: []
- id: 7755
  author: Sumit Kishore
  date: '2009-04-12T09:53:02'
  content: I'm not a proponent of adding user-defined operator overloading to the language, but can't understand why, as with String concatenation, some specific cases could not be added to language. Cases in point BigNumber/BigInteger arithmetic, StringBuffer/Builder concatenation. You've made me think about simple collection operations.
  replies: []
- id: 7756
  author: ''
  date: '2009-04-12T10:04:56'
  content: Operation Research and finding constraints.
  replies: []
- id: 7757
  author: unacoder
  date: '2009-04-12T10:22:27'
  content: 'i agree that most operator overloading is ridiculous, but there are cases where it improves code readability. in such cases, the *concept* encoded in the operator is a natural use, e.g. TimeSpan:

    4.Hours() + 55.Minutes()

    although, i could just as easily write

    4.Hours().And(55.Minutes())

    however, i don''t see an improvement in readability by introducing the And method. i would also posit that

    new TimeSpan(0, 4, 55)

    is crap in terms of readability, because, at a glance, i don''t know what unit each number represents. as with any language feature, overloading can be abused (see ''static''); however, having more options at my disposal can never be a bad thing.

    the += for multicast delegates gave us a way around the fact that the declaration of the delegate does not create an instance, so it serves a purpose. in this case, the operator is not a natural concept, so the only entity satisfied with the operator is the compiler.'
  replies: []
- id: 7758
  author: nadavwr
  date: '2009-04-12T11:16:54'
  content: 'Operator overloading is more difficult to justify on its own, on a closed set of operators (e.g. c++).

    However, once you introduce infix notation into the equation, the balance tips (IMHO) towards not treating operators in any special way -- similar to Scala''s approach to operators.

    As a recap (simplified, limited to binary operators for brevity):

    1. operators are declared as plain methods

    2. any method may be invoked using either prefix notation (normal method invocation) or infix notation (operator style invocation)

    3. no special identifiers -- any valid method name can be an operator name (and vice-versa)

    This does leave operator presedence as an open question. I suppose it can be hard-coded into predefined operators, but a more powerful solution would be nice.'
  replies: []
- id: 7759
  author: rek
  date: '2009-04-12T16:42:28'
  content: 'I don''t understand why I can use + for int nut not for BigDecimal? And why not for Point or Dimension? Why not on Calendar (or something which will replace it)?

    I think it is absurd limitation, and JDK languages like Scala or Groovy just proved what this is some religious or political limitation, not technical...'
  replies: []
- id: 7760
  author: Nikita Ivanov
  date: '2009-04-13T00:05:51'
  content: 'Voice of sanity and practical engineering in the ocean of yahoos...

    Totally agree with Cedric.'
  replies: []
- id: 7761
  author: foo
  date: '2009-04-13T01:13:26'
  content: 'BigDecimal, BigInteger, etc...

    Comparable with , >=, etc'
  replies: []
- id: 7762
  author: Bill
  date: '2009-04-13T01:20:00'
  content: 'My opinion about languages is that every exception--every different way to do something, is a complexity that must be balanced with some serious syntactical benefit.

    For instance, exceptions use a slightly different syntax than anything else, the cost of learning them is outweighed by the benefit though, they can be really useful.

    I can''t see the benefit of operator overloading being that big a deal.  If you use serious mathematical manipulation, enough that Bigint is used enough to justify overloading operators, then the math is your data itself and probably shouldn''t be part of your program, you should probably be writing a math-based language instead.

    Another example--since I don''t really believe in EVER passing collections around outside the protection of a containing class, I''m not completely convinced that the benefit of generics outweighs the enormous cost imposed by its huge syntax addition.

    I''m not talking about just wrapping any collection in an arbitrary class with a bunch of setters and getters, I''m talking about including all the additional data and business logic needed to manipulate that collection''s data.

    After that, I rarely need more than one or two casts, and to replace those two casts with the mess that is generics just doesn''t seem to add up (at least with the way I code)'
  replies: []
- id: 7763
  author: Yardena
  date: '2009-04-13T02:16:40'
  content: If the language has built-in operators, then why not let programmers create/override them too? Same good/bad arguments can be applied to built-in operators, in fact the only time I was really puzzled by an operator in Scala was when I learned that @ means assignment inside patterns. I think that stuff like operators and keywords restrictions makes it harder to create internal DSLs and domain models.
  replies: []
- id: 7764
  author: domainspecific
  date: '2009-04-13T03:37:00'
  content: 'Cedric said:

    "Would you rather have an interface that contains add() and addAll() or +() and addAll()?"

    Neither. I would use +() for both ...'
  replies: []
- id: 7765
  author: SNR
  date: '2009-04-13T04:46:34'
  content: 'I also agree that just because you are overloading operators doesn''t mean you can''t treat them as overloaded methods too, e.g.  Collection + Object = add(Object) and Collection + Collection = addAll(Collection).

    I feel you''re also overlooking the other most common to overload ''[]'' which allows people to develop their own array like data structures, for example you could implement a PHP-like associate array backed by a Java Map. However most of these uses IMO are people who wish to devise their own DSL rather than API.

    I think if done right this would be a great feature to the language (all features are open to abuse, that''s the coder''s fault not the language) but Sun don''t seem to do that too often (*cough* generics)...'
  replies: []
- id: 7766
  author: Cay Horstmann
  date: '2009-04-13T08:31:08'
  content: 'In Scala, the set of operators to be overloaded is not fixed. A great example of a library that benefits from the use of operators is the combinator parser library. Of course, you could express parsing rules with the method call syntax, but it would be rather unwieldy.

    Maybe a better title would be "Why Java cannot have good operator overloading".'
  replies: []
- id: 7767
  author: rssh
  date: '2009-04-14T10:14:56'
  content: ') I would love to see some good examples of operator overloading, if you have any to share...

    BigDecimal, Matrices, Measurements, Money

    I can''t understand why you speak about Collections. Of course arithmetic operator overloading in Collections is not good idea ;)

    But having some analog of operator []= for user-defined classes can be useful.

    (And as I understand from project coin, java 7 will have overloaded array index access for collections)'
  replies: []
- id: 7768
  author: Sony Mathew
  date: '2009-04-14T13:26:54'
  content: As one that may have abused operator overloading in my past C++ days (never been accused) - I find them very handy.  To me they are no worse than a badly documented method - meaning operator+(Object obj) is no different than add(Object obj) method - its all in the consistent contract it defines and enforces.
  replies: []
- id: 7769
  author: Paul Beckford
  date: '2009-04-19T21:51:38'
  content: 'Quickly flicked through this, and absolutely no one has offered any of the numerous elegant uses in Smalltalk:

    Off the top of my head how about these for starters:

    "Yes fractions, making irrational numbers possible"

    3/7  + 5/6.

    "How about complex numbers anyone?"

    (2 +3i)

    "Ever wanted to send several messages to the same object?"

    receiver doThis, andThis, andAlsoThis.

    Thats before we get to advance uses like this  BNF expressed in Newspeak:

    id = letter, (letter | digit) star.

    I just don''t understand how people adopt such strong views, based on such limited experience. Yes I do. We all love the comfort you get from saying "I Know It Already", even when we possibly don''t.

    Ah, well such is human nature :)'
  replies: []
- id: 7770
  author: Isabelle Hawthorne
  date: '2009-05-18T20:36:33'
  content: 'The operators that I often want to overload and for which overloading allows the code to be very clear and readable are: ==, != and =. (i.e. equality, inequality and assignment). These three operators can be meaningfully, intuitively and usefully applied to any kind of object.'
  replies: []
- id: 7771
  author: Daniel
  date: '2009-05-23T17:45:11'
  content: 'Paul:

    """

    ... elegant uses in Smalltalk:...

    "Yes fractions, making irrational numbers possible"

    3/7 + 5/6.

    ...

    """

    But doesn''t 3/7 + 5/6 in fact mean the same as (((3/7)+5)/6) in Smalltalk (left-to-right evaluation)? I think it does, and I think this an insane design decision - screwing up one of the two most useful applications of binary operators (the other one being comparison operators).

    I think Scala does much better; precedence when using methods as binary operators is worked out from their names, in a way consistent with standard arithmetic.'
  replies: []
- id: 7772
  author: Bert
  date: '2009-06-02T11:16:27'
  content: 'Operator overloading might not seem to be a good idea outside arithmetics as a lot of people pointed out here. And C++ showed in a very bad way how this can be abused a lot (for a simple example just think about cout &lt;&lt; ... &lt;- now what this supposed to do ?)

    But if you have to write software in the domain of arithmetics, for example 3D applications, cryptographic software, financial software or any kind of scientific software you are really missing operator overloading in Java a lot.

    Just think about something like rendering algorithms (like raytracing, pathtracing, ambient occlusion and such stuff) where you have to compute the orthonormal base.

    In a language with operator overloading you can write something like:

    Vector3 d = (u * Math.Cos(r1) * r2s + v * Math.Sin(r1) * r2s + w * Math.Sqrt(1.0 - r2)).normalize();

    in Java you would have to write something like

    Vector3 d = ((u.vecsmul(Math.cos(r1) * r2s)).vecadd(v.vecmul(Math.sin(r1) * r2s)).vecadd(w.smul(Math.sqrt(1.0 - r2)))).normalize();

    or when using static methods:

    Vector3 d = (Vector3.vecadd(Vector3.vecadd(Vector3.vecsmul(u, Math.cos(r1) * r2s), Vector3.vecsmul(v, Math.sin(r1) * r2s)), Vector3.vecsmul(w, Math.sqrt(1.0 - f2)))).normalize();

    or doing it the simple way:

    Vector3 d = new Vector3();

    d.x = (u.x * Math.Cos(r1) * r2s + v.x * Math.Sin(r1) * r2s + w.x * Math.Sqrt(1.0 - r2));

    d.y = (u.y * Math.Cos(r1) * r2s + v.y * Math.Sin(r1) * r2s + w.y * Math.Sqrt(1.0 - r2));

    d.z = (u.z * Math.Cos(r1) * r2s + v.z * Math.Sin(r1) * r2s + w.z * Math.Sqrt(1.0 - r2));

    d.normalize();

    This is just a tiny example. There are much more complicated formulas and things can really get nearly unreadable when it gets more complicated.

    It can also be a source of errors when translating formulas from paper in your programming language since it is not easy to see on first sight if the translated formula is the same as on paper.

    Another bad things when not having operator overloading in the language is that you have to memorize the function names for doing arithmetics.

    So for arithmetic stuff like arbitrary-sized large integers (Bignum in java), Fractional (int/int) number representations, Base-10 floats for rounding issues (financial software), Arbitrary-precision floating-point numbers, complex numbers, quaternions, vectors, matrices and defining your own arithmetic for cryptography (like elliptic curves) i really miss operator overloading a lot in java. And for me it is really a reason not to use it for that kind of software.'
  replies: []
- id: 7773
  author: Kengkaj
  date: '2009-06-03T02:50:35'
  content: 'I think the problem is not operator overloading per se, but abusing it can cause problem.

    There is no different from normal Java method.

    Like if we have method add, but when call it, it will read data from database and display it (not add anything), is Java method a problem?'
  replies: []
- id: 7774
  author: Mitko
  date: '2009-07-08T04:37:40'
  content: 'Take examples from the natural origin of computer science: mathematics. Let''s consider the multiplication operator. The operator has meaning for numbers, matrices, vectors with a number etc. In this case it is overloaded. What does it mean? This means that operator overloading makes sense in some cases. In Mathematics it is also strictly defined how the operators work, so that everyone knows what they mean and everyone is happy with them. In the world of programming languages overloading the operators makes sense when you design a DSL (Domain specific language). In the context of this language the operators will do what they are intended to do and what they are documented to do (hopefully). Java is not designed to be platform for DSLs, that could simplify the syntax of the code. Java is platform, not only a language, and it does a great job. Who will be the successor of Java is not so clear at the moment.'
  replies: []
- id: 7775
  author: kishore
  date: '2009-07-19T20:26:19'
  content: In true object oriented sense i would expect to see state, behavior and i can't see that with operator overloading(it does kind of support polymorphism in some sense). I'm not saying that overloading is not needed in java but may be the designers intention is to avoid confusion by keeping it close to object world. Over loading kind of breaks the abstraction.
  replies: []
- id: 7776
  author: Neil Harding
  date: '2009-11-06T01:28:55'
  content: I wrote a flight simulator for the Gameboy Advance, I used floats to test the math implementation (I declared all the variables as Fixed I typedef'd it to be float during development). I could then use Fixed x = 0.1; x += velocityX * sin(angle) + velocityY * cos(angle), and I had sped up the game to 60 frames a second. I seriously abused C++ on game, it was converted from assembly language to C++ and there were byte ordering issues (big endian to little endian), so I defined unions .l .w .b and it would swap the bytes round on reading .l and writing it (using assembly language instruction to swap the order, so there was not too much penalty).
  replies: []
---

Operator overloading is a topic that never fails to generate very passionate responses, and [this monster thread on Artima](http://www.artima.com/forums/flat.jsp?forum=106&thread=252441&msRange=15) is no exception. 

First of all, I'd like to address a common complaint heard from people who dislike operator overloading, and which usually goes along the lines of: 

> In Java, when I see `a + b`, I know exactly what is going on. If Java supported operator overloading, I would have no idea what `+` means. 

I have very little sympathy for this argument because this example is hardly different from a method call such as `o.init()`. When you read such code in Java, you don't necessarily assume that it's the method `init` on `o`'s class that is being invoked. You know that you will have to look at how this object is created in order to determine its effective type before you can find out which method `init` is being invoked. 

Operator overloading is no different, and if you knew that the language that you are reading supports it, you are just going to extend this mental path to operations that involve overridable operators. 

Very often, I find that operator overloading is being demonized because its uses in other languages has led to excesses. I have found that many people who dislike operator overloading can trace it back to some personal experiences where they once had to deal with code that was clearly abusing this feature. This is unfortunate, but I still think that Java is doing fine without it and that overall, it only leads to clearer code in very few and uncommon cases. 

Here are a couple of objections I have with operator overloading: 

  * The number of operators that you can overload is very small and each of them is attached to very specific semantics that makes little sense outside the realm of scalars and of a few other specialized mathematical concepts (e.g. matrices). 

  * In exchange for infix notation, operator overloading severely restricts my freedom to name my methods in a meaningful way. 


The most common operators that people want to overload are `+` and `-`, and they are also the operators that probably make the most sense outside simple arithmetics. I can see these two operators make sense for types that represent a collection of elements (`java.util.Collection` obviously, but also strings or streams). However, even in this ideal case in favor of operator overloading, the metaphor quickly breaks down when you realize that you need to supplement these two methods with ones that have slightly different meanings, such as `addAll()`. Would you rather have an interface that contains `add()` and `addAll()` or `+()` and `addAll()`? 

Of course, there are more operators that can be overloaded, such as `*` or `/`, but I find that even strong advocates of operator overloading quickly run short of arguments when trying to justify why one would even want to overload them outside of specific algebras. 

I am a big fan of clear names, and I dislike the name `+` for the simple reason that it doesn't carry enough meaning to explain to me what is going on. This operator is very clearly defined when it is used in a mathmatical sense but it becomes very vague when you start to extend it to concepts that supports the idea of addition in a more vague sense. For example, adding to a `List` is very different from adding to a `Map` since the latter can produce an object that's equal to the one you started with, even though the object you added is not zero. And what is zero in the sense of a collection, anyway? Doesn't it make much more sense to use `add()` for a `List` and `put()` for a `Map`? 

Overall, I find that code that makes heavy use of operator overloading is harder to read and harder to maintain because it is severely restricted syntactically (forced to use specific names taken from a very small pool) and semantically (since you are using symbols that have very precise mathematical definitions, it is very unlikely that your usage will match the mental model that people who read your code have of their meaning). 

I would love to see some good examples of operator overloading, if you have any to share...
