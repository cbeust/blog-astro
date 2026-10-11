---
title: Fantom and user defined generics
date: '2011-03-01T14:23:26'
slug: fantom-and-user-defined-generics
categories:
- General
comments:
- id: 8852
  author: Jeremy Norris
  date: '2011-03-01T15:28:41'
  content: 'I would drop .net support and Javascript generation since these seem orthogonal to language design and could be added later.  Actors could also be dropped if I was moving to a language that could implement them in a "native" way in a library (eg: Scala).

    I would have a hard time giving up Scala''s "scalable language construct" philosophy.  I find this "feature" extremely compelling.

    In your opinion, what do you "give up" when you choose Scala?'
  replies: []
- id: 8853
  author: Casper
  date: '2011-03-01T22:27:19'
  content: User defined generics, due to the 80/20 rule and KISS.
  replies: []
- id: 8854
  author: Wouter Lievens
  date: '2011-03-01T23:42:33'
  content: I would build a language/compiler-environment that would make it easy to plug all this in as features. Why is nobody doing that?
  replies: []
- id: 8855
  author: Paul
  date: '2011-03-02T01:52:47'
  content: .NET first, it's useless to me specifically (so selfish reasons there) and then Javascript generation. As Jeremy says, that's not essential to the language itself.
  replies: []
- id: 8856
  author: Adam Fitzpatrick
  date: '2011-03-02T04:15:07'
  content: 'Focusing on features of the language itself (ignoring the .NET and Javascript support, for the reasons already mentioned, and Actors, which are, or ought to be, largely a library thing), out of your list of language features I would choose properties. They''re neat syntactic sugar, but that''s way easier to give up than any of the other features.

    But if it had occurred to you to include inheritance on the list, I would''ve chosen that without a second thought.

    It might seem like having generic list and map types is enough at first. But what if you want a queue or a stack? Shouldn''t they be just as type-safe and self-documenting as List?

    I don''t really understand why you assert that implicit casts are a good thing. As it says right at the start of Fantom''s type system documentation, the type system is primarily about contracts. Implicit casts undermine that by silently neglecting to enforce the contract. In particular, the type system documentation says that "A coercion from a nullable type to a non-nullable is implicitly allowed, but is checked at runtime". What is the point of supporting non-nullable types if the compiler silently accepts possibly null values? Or if you want to be free to sling objects around without these potentially unnecessary constraints being enforced, why implement a static type system at all?

    Honestly, if Fantom appeals to you, look to Go instead. It''s similar except where it''s superior.

    ----

    Wouter Lievens: that sounds like Lisp. Not everybody''s cup of tea, but it works exactly as you describe, so people really are doing that.'
  replies: []
- id: 8857
  author: Stephen Haberman
  date: '2011-03-02T13:25:49'
  content: 'Your list of features is pretty much already in order-of-importance for me.

    Also, I missed that fantom has user defined generics on the roadmap--that''s good to hear. I thought I''d read (maybe awhile ago) that the authors were rather dogmatically opposed to them beyond the built-in Map/List types.

    Only because I take every opportunity to mention them, I pine for boo macros, such as defining you own "class" keyword:

    https://github.com/bamboo/boo/blob/master/tests/testcases/macros/custom-class-macro-with-method-override.boo'
  replies: []
- id: 8858
  author: Cedric
  date: '2011-03-02T13:32:31'
  content: 'Stephen:

    Not only are user defined generics on Fantom''s road map but they might actually come earlier than I predicted:

    http://twitter.com/#!/briansfrank/status/42743095456051200'
  replies: []
- id: 8859
  author: Eelco Hillenius
  date: '2011-04-15T21:40:26'
  content: Absolutely dotNet generation first. Still in doubt about JS generation.
  replies: []
---

My [post from last week](http://beust.com/weblog/weblog/2011/02/23/from-scala-back-to-java/) generated some interesting discussions and reactions, but one in particularly grabbed my attention. 

Both Stephen Haberman and Tom Davies made the following observation: 

> As far as Fantom is concerned, I doubt the successor of Java will lack user defined generics. That??s like going back to Java 1.4. 

This got me to think. If I were to pick a different language than Java, would I be willing to give up user defined generics? Here is my answer: 

> That??s a fair point. Personally, I wouldn??t mind trading user defined generics if I get in return type inference, closures, traits, properties, actors, .net support and Javascript generation. And user defined generics are on Fantom??s road map, but I wouldn??t expect them for at least one or two years. 

Switching to a new language always comes with compromises, no matter how superior you think that new language is. Even if it beats your current language on every point, you should expect to lose some productivity because of lacks in other areas, such as tools, support, documentation, community, compiler bugs, etc... 

Fantom is no exception, and actually, due to the very design goals and Andy and Brian set for themselves when they created it, Fantom made some tough compromises in order to keep the language manageable. And user defined generics are one of the casualties. 

Note that Fantom supports [implicit casting](http://fantom.org/doc/docLang/TypeSystem.html#implicitCasts), which contributes to cutting down the verbosity of the code when you are dealing with raw user types, but obviously, this doesn't buy you any safety compared to user defined generics. 

By the way, as the name implies, "user defined generics" means that Fantom does support some [limited form of genericity](http://fantom.org/doc/docIntro/WhyFantom.html#generic): only `List`, `Map` and `Func` are generic. Therefore, your collections remain typed but you no longer have the option to create your own class `Node<T>`. 

Is it a big deal? 

I would miss them, because I do use them. A quick look at the TestNG code base shows about twenty generic classes out of nine hundred. That's less than 2%, and TestNG is a framework that exposes a substantial API. But there is no question that these classes increase the robustness of the API and of the client code that uses it. 

However, I feel that I would use the other features that I would gain from Fantom a lot more, especially properties and closures. I wouldn't be surprised to find out that I could use at least one of these features in all the nine hundred classes. That's a lot of benefit right there. 

How about you? If you had to drop one feature from the following list: 

  * User defined generics 
  * Type inference 
  * Closures 
  * Traits 
  * Properties 
  * Actors 
  * .net support 
  * Javascript generation. 
Which one would you do without?
