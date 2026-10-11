---
title: Next Generation Java is not very different from today's Java
date: '2009-08-11T08:36:48'
slug: next-generation-java-is-not-very-different-from-todays-java
categories:
- Java
comments:
- id: 7831
  author: David Gageot
  date: '2009-08-11T08:51:53'
  content: I don't understand why one would ban final keyword. Are we talking about local variables or class variables or both? For local variables, using final do hurts readability for no real gain. For class variables, it a good thing to enforce immutability.
  replies: []
- id: 7832
  author: Cedric
  date: '2009-08-11T08:54:27'
  content: 'You''re right, David: final is only banned on parameters and local variables. I updated the post.

    Thanks.'
  replies: []
- id: 7833
  author: David Gageot
  date: '2009-08-11T09:08:09'
  content: 'I fully agree on setters and public fields. If you don''t need a getter, don''t write it. If you need a public field, write a getter...

    Too many interfaces is just a nightmare. So is too many abstract classes. Java developers need to remember that interfaces are not needed anymore for mocking, so an interface with only one implementation in production code is often a bad smell.

    Loops are something I would agree with Stephan Schmidt. I tend to like the Predicate/Function syntax to create Lists or Maps (give values and a toKey Function and get a map). I agree however that it is not a native idiom in Java and people can get very uncomfortable with it.'
  replies: []
- id: 7834
  author: James Strachan
  date: '2009-08-11T09:41:05'
  content: Maybe the simpler solution is just use Scala instead :) - where the use of immutable state, the universal access principle (making fields & properties/methods look the same), one liners & monads/functions instead of loops are all elegantly designed and the normal coding style in scala
  replies: []
- id: 7835
  author: Osvaldo Pinali Doederlein
  date: '2009-08-11T09:49:28'
  content: 'I have been promoting and using the final rule for several years now, and my experience was very good, with a few serious apps written 100% in that style. You quickly learn to look at "final" as some "var" declaration, and it becomes as invisible as many other second-class tokens like public, private, static etc. Then I use Checkstyle rules to enforce final parameters (at least).

    In this respect JavaFX is a great step forward:

    1) "def" subsumes final, it''s the preferred declaration style and no more verbose than "var";

    2) Parameters and induced variables (e.g. in "for") are all final;

    3) Other facilities generally induce usage of immutable objects with only "def" fields, like the properties (public-init + public-read + triggers = goodbye setter/getter crap with no risks).'
  replies: []
- id: 7836
  author: Bill K
  date: '2009-08-11T10:13:23'
  content: 'Actually I''ve come to think that public final fields are pretty much the same as getters.  If your field can''t be final though, public is out.  I don''t think I''ve ever overridden a getter even when experementing or debugging.

    Final block variables aren''t a bad idea because "final" gives you some hints when you are reading the code and I''ll take any help I can get; but I agree with your clutter point and wish java just defaulted to final and private for pretty much everything and instead offered a "malleable" keyword or something like that.

    I sort of like his "Never use an unwrapped string or int".  I''ve often wished my ints had type i.nformation with them, but implementing all that is a little bit overkill.  Perhaps there should be a lightweight way to override string that JUST adds type i.nformation..

    More importantly, it should be expanded to cover collections as well--I''ve finally concluded that I''ll just never pass another List, ArrayList or HashMap... I always regret it--there is always code associated with whatever is in the collection, but with a built-in collection you have no place to put the code!

    (Can your comment form REALLY  not handle the word i.nformation????)'
  replies: []
- id: 7837
  author: Itay Maman
  date: '2009-08-11T11:12:51'
  content: 'I believe Stephan tried to encourage programmers to use this style of code (actually ten independent) when it makes sense. He didn''t try to ban non-final fields, setters, or the like.

    twitter.com/pembleton'
  replies: []
- id: 7838
  author: nuttycom
  date: '2009-08-11T11:18:26'
  content: With respect to fluent interfaces, there's no reason that setters or mutable state need to be involved whatsoever. Each call of the fluent interface returns a new object appropriately configured to perform it's task; where's the setter in that?
  replies: []
- id: 7839
  author: Rick B
  date: '2009-08-11T11:43:55'
  content: 'I have to say that I''ve caught the final bug.  I can understand how it may hurt readability when your eye isn''t expecting it to be there on local variables and parameters, and I can''t recall ever being bitten by re-assignment when they aren''t labeled final.

    However, I''ve found that it documents and improves my understanding of the code as I read it.  If I don''t see final, I now expect that there is going to be a re-assignment that I need to look for.  And if I do see a variable declared final that is assigned later, I can *know* it''s not going to be re-assigned (this is nice in routines with a lot of ifs or a switch statement).'
  replies: []
- id: 7840
  author: Cedric
  date: '2009-08-11T13:03:38'
  content: 'Nuttycom: No, fluent interfaces typically return a pointer to this, not to a new object.'
  replies: []
- id: 7841
  author: Ophir Radnitz
  date: '2009-08-11T13:32:23'
  content: 'cedric: "this" being a mutable builder object in many fluent APIs, not the resulting object.'
  replies: []
- id: 7842
  author: anonofreak
  date: '2009-08-11T15:40:15'
  content: Why is it unfortunate that you disagree with Stephan?
  replies: []
- id: 7843
  author: Paulo Gaspar
  date: '2009-08-11T16:31:58'
  content: 'I agree with Osvaldo on the use of final.

    Public fields sometimes make sense (a bag of values with restrcited use) and make the code simpler / more readable.

    And as usual, "best pratices" do not replace using your brain.

    I sure agree with the other points! Glad someone said it!'
  replies: []
- id: 7844
  author: Gordon J Milne
  date: '2009-08-11T17:11:06'
  content: 'I like using final in method bodies. For me it means that I am declaring a variable that should be assigned only once.

    I use this style quite a lot and do not find it intrusive. I often look at code that does not use this approach and wonder what hidden bug will come to life when the code is _enhanced_.

    Using final inside method bodies has helped me catch/prevent faults a few times.

    Just because Google avoids this approach does not mean that it does not have value.

    Hey, how many columns are you guys allowed to use these days? We let people use up to 120. Please don''t tell me you are stuck at 80?'
  replies: []
- id: 7845
  author: Gordon J Milne
  date: '2009-08-11T17:16:41'
  content: 'I agree on the interfaces point.

    We have a dev here who loves the little things. The trouble is, I have a hard time reading these interfaces if every single one has its own public static final NULL implementations in the SAME DAMN file.

    No matter how often I create a Separate NullInterface class in the same package and delete the NULL in the interface definition, it keeps coming back.

    In any event interface aren''t all that useful if every single one implements the same damn boilerplate code before it does its own work.'
  replies: []
- id: 7846
  author: Leon Stein
  date: '2009-08-11T21:20:19'
  content: 'I''ll have to agree with Stephan and Osvaldo''s comment that benefits of using final overwhelm the drawbacks of clutter/additional typing.

    I started using final for all immutable instance/local variables (including method parameters) about a year ago, and I am finding that my code, and code written by a couple of my collegues who also adopted this habit, became more readable/maintainable. In no particular order:

    1. It''s easier to follow the logic when you can immediately see variables that change during execution (which are very few in well written code).

    2. You immediately see immutable objects (helps tracking invariants and working with concurrency).

    3. Synchronization logic/issues are easier to understand/troubleshoot.

    4. IDE is your friend: automatic generation of all accessors would only generate getters for final fields.

    5. Compiler is your friend: it ensures that final variable is assigned only once in conditional statements.

    6. Most (typically) local variables are ready for use in inner classes.'
  replies: []
- id: 7847
  author: Ignacio Coloma
  date: '2009-08-11T21:57:30'
  content: 'Ophir:

    > "this" being a mutable builder object in many fluent APIs, not the resulting object.

    Which are setters (of the builder instance) nonetheless.'
  replies: []
- id: 7848
  author: Stephan Schmidt
  date: '2009-08-11T23:10:50'
  content: 'As the author of the post, your thoughts are appreciated, some of mine:

    "Besides, it''s convenient to be able to mutate object if you want to use pools."

    No setters doesn''t mean you can''t mutate objects, it''s just that plain setters are not object oriented thinking. How about stop() vs. setStop(true);

    "o I think the first example is more readable than the second one that uses Predicates."

    I think your assumptions are wrong. Loops are *procedural* code, while Predicates are, encapsulated, reusable, understandable *objects*. Nothing to do with functional programming, plain OO

    Cheers

    Stephan

    "No. Just, no. You will never regret adding accessors to your classes if you need the data, but I can promise you that you will rue the day where you decided to be lazy and to make a field public."

    As said, if you do not control all of the usage, be careful (See the excellent "Practical API Design" book). But IF you do control the whole usage of the code, I never say a public field as a problem, as it''s only a refactoring away. What I did see very often are classes that are confusing developers, because they are several pages and do nothing. Instead of just having some public fields - easy to read, easy to understand what the class does.'
  replies: []
- id: 7849
  author: erich
  date: '2009-08-14T21:29:55'
  content: 'I actually hate #4. Pick a convention and stick with it. The number of characters in a method should not determine how it is formatted.

    I like fluent interfaces, though. I kinda wish Java supported a syntax that did this without the extra line of returning the current object... something like :

    public this foo(int x) {

    this.x = x;

    }

    would be equivalent to:

    public FooClass foo(int x) {

    this.x = x;

    return this;

    }

    I''m sure some would argue that it dirties up the syntax, but no more so in my opinion than an empty return in a void method.'
  replies: []
- id: 7850
  author: Julian
  date: '2009-08-27T03:41:53'
  content: 'Unlike Osvaldo, I prefer

    Employee lookupByPhone (String phone) {

    phone = normalize(phone);

    ...

    to

    Employee lookupByPhone (final String phone) {

    final String phoneNorm = normalize(phone);

    ...

    The second case may lead to a bug that doesn''t occur in the first: having subsequent code refer to phone instead of phoneNorm. It''s too error-prone for two variables to refer to different variants of the same quantity. After making that mistake a couple of times, I switched to variable reassignment and stuck with it.

    Other good programming practices mitigate the main concerns about variable reassignment. As long as the method is short, it''s easy to understand and analyze.'
  replies: []
- id: 7851
  author: Anonymous Coward
  date: '2009-09-18T08:31:57'
  content: 'A genius wrote: "an interface with only one implementation in production code is often a bad smell"

    What about OO languages where the entire OO inheritance hierarchy is modelled using the equivalent of Java interfaces?

    Ever heard of OOA / OOD ?

    Free your mind from "implementation".

    Implementation is a detail, get over it.

    PS: as a bonus, by using interfaces you''re not cornering yourself and the user of your API into single inheritance.'
  replies: []
- id: 7852
  author: Curt Sampson cjs@cynic.net
  date: '2009-09-20T21:20:54'
  content: 'Regarding "final" being too verbose: that strikes me as an odd complaint coming from a Java programmer. Java is already so incredibly verbose that I think the  extra "final"s scattered about make little difference.

    The ''no setters'' comment is all about immutability, which is a very, very good  thing. I got rid of a lot of bugs in a large Ruby library by starting to use    immutable objects extensively (returning changed copies of objects rather than  mutating them). However, while you''re right with the implication that one may   want to consider how this style is going to affect the GC, I think you''re dead  wrong in implying that Java''s current generational garbage collectors are still so bad that one would consider object pooling. Can you point to any evidence at all that it makes a performance difference in the late 2000s (as opposed to the late 1990s, where it did)?

    "No loops" is quite a misinterpretation of "when working with collections,      apply functions to the entire collection rather than working on each element    individually." This is not just a functional style, either; Smalltalk and Ruby  both use this style extensively.

    Regarding public fields versus getters and setters, what''s the big deal? Java   has had good automated refactoring tools for years; do they not let you         trivially convert one to the other? If so, use whatever makes for less code and push the appropriate refactoring button when you need to switch.

    My overall thought on Stephan Schmidt''s post is that he''s probably on the right track, if you''re stuck with Java. Most of what he is talking about is exactly   how one programs in Haskell, where I find myself considerably more productive   than I ever was in Java, even while writing a quarter to a tenth the code for   the same functionality.'
  replies: []
---

In a [recent post](http://codemonkeyism.com/generation-java-programming-style/), Stephan Schmidt makes several suggestions in order to write "Next Generation Java". Unfortunately, I disagree with most of them... Let's take them in turn: 

**final everywhere**   
This is guaranteed to make your code littered with `final` keywords and therefore, impair readability significantly (same problem as Python's `self` pollution). And it really doesn't buy you that much, I can't even remember last time I was bitten by a bug involving the reassignment of a variable to a different value within a code block. For what it's worth, `final` on non fields is banned from Google's style guide (except where it's unavoidable, such as when you need to pass variables to inner classes). 

**No Setters**   
It would be nice, but it's just not realistic. Sometimes, you really don't want to put that many parameters in a constructor (and the Builder pattern doesn't solve this problem either). Besides, it's convenient to be able to mutate object if you want to use pools. As for not using accessors overall, Stephan is not the first one to argue that they should be removed from OO programming overall, but this claim is [easily debunked](http://beust.com/weblog/weblog/archives/000022.html). 

**No loops**   
Java is not very well suited to a functional style, so I think the first example is more readable than the second one that uses Predicates. I'm guessing most Java programmers would agree, even those that are comfortable with comprehensions and closures and especially those that aren't. 

**Use one liners**   
Depends. Sometimes, breaking down the expression and introducing variables clarifies the intent of the code and it also makes it easier to use break points. 

**Use objects with interfaces**   
A good advice overall, but don't go overboard. I have argued something similar in the past under the name [Quantum Software Design](http://beust.com/weblog/weblog/archives/000312.html) but introducing too many interfaces can result in an explosion of little classes that cloud the intent of your high level classes. 

**Erlang concurrency**   
Again, it's dangerous to use a programming style that Java was not designed for. `java.util.concurrent` is a treasure trove of very useful constructs and I'd rather see a set of well architected Java abstractions built on top of it than an emulation of Erlang's actor architecture. 

**Fluent interfaces**   
Now that's an interesting recommendation since it contradicts directly Stephan's suggestion of not using setters, because make no mistakes: fluent interfaces are setters in disguise. So, Stephan, which one is it? :-) 

**Use public fields**   
No. Just, no. You will never regret adding accessors to your classes if you need the data, but I can promise you that you **will** rue the day where you decided to be lazy and to make a field public.
