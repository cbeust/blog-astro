---
title: Structural typing vs. Duck typing
date: '2008-02-11T23:21:10'
slug: structural-typing-vs-duck-typing
categories:
- General
comments:
- id: 7112
  author: Brian Slesinsky
  date: '2008-02-12T00:18:28'
  content: What about recursion?  Things will get tricky for structural typing whenever there's a method that returns an object of the same type.
  replies: []
- id: 7113
  author: Stephan Schmidt
  date: '2008-02-12T00:39:36'
  content: 'I''d like to have structural typing for interfaces. So I can pass a Person object to printName(HasName name) when Person implements a getName() method. Along the lines of traits, but distinct because I don''t want to mix mixins (puh!) and interfaces. Structural typing with traits does mix the mixing concept (code) with the interface concept (contract)

    Peace

    -stephan'
  replies: []
- id: 7114
  author: Deron Meranda
  date: '2008-02-12T01:14:09'
  content: 'It is probably just a difference in definitions being used, but duck typing can be and often is *type safe*; it just may not be known if the method calls will succeed until run time.  But I think I know what you intended.

    Structural typing is of course nothing new, although its introduction in Scala means it may get some renewed attention, which is a good thing.  I does seem to deliver a potentially happy middle ground, as you''ve observed, between full out strict static typing and no guardrails duck typing.

    However there is a trade off you''ve not mentioned; structural typing doesn''t just add improved type safety to duck typing, it also reduces some of the power and flexibility.  Risking a contrived example, consider where you want to accept any object which has either a walk() or a slither() method (but not necessarily both), and you determine which to call by invoking the number_of_legs() method on it first.  The set of signatures of valid objects is now no longer a simple enumeration of must-have methods, but a more complex functional description.  It may be possible to define a static structural type signature (Haskell?), but not with the simplistic signature system you''re describing, or without getting into mixins or interfaces or all that other static type system cruft that you''re trying to avoid.  That loss of flexibility may be acceptable, but it is there.

    The other thing to note is that structural type "safety", as you''re describing as being static (compile time), could also be used dynamically as well.  In many dynamic languages this could take on some form of introspection, occurring at the time of the function invocation but before the body of the function is executed.  In Python for example, you could easily define a similar HasName decorator, and define your function such:

    @HasName

    def test(f) { log(f.getName()) }

    It might not be quite as "safe" because it would be a run-time type check and not compile-time, but it could still reduce the number of test paths needed before discovering the type inconsistency, and it would provide the code documentation that I think you''re really trying to achieve.  You may also want to look at Python''s proposed optional type system called "functional annotations" as another related solution - see PEP 3107.

    [BTW, your comment submission form will not accept a valid URL in the URL field]'
  replies: []
- id: 7115
  author: Henrik
  date: '2008-02-12T01:53:01'
  content: 'I would do this:

    trait Fun{

    type getName = {def getName: String}

    }

    // by extending fun, needed has the getName type available

    object Needed extends Fun{

    def log(f: getName) = Console.println("umm")

    def test(f: getName) = log(f)

    class A{ def getName = "umm" }

    test(new A)

    }'
  replies: []
- id: 7116
  author: Cedric
  date: '2008-02-12T04:35:35'
  content: 'Hi Deron,

    It seems to me your walk()/slither() example would be better captured by simple polymorphism:  make the contract move() and have this method invoke internally either walk() or slither() depending on the object...

    And you are right:  I disabled the submission of http address in comments for spam reasons...

    Thanks for the comment!'
  replies: []
- id: 7117
  author: Alex Blewitt
  date: '2008-02-12T05:22:46'
  content: You don't even need to Extends Fun; you can import the type alias from the trait (or object) to be in scope.
  replies: []
- id: 7118
  author: Erkki Lindpere
  date: '2008-02-12T05:50:16'
  content: 'As Hendrik said already, Scala allows structural typing to respect the DRY principle as well, by letting you define a type alias for the structural type:

    type HasName = { def getName : String }

    def test(f: HasName) = {

    log(f.getName)

    }

    def toXml(f: HasName) = {

    log("" + f.getName + "");

    }

    ... or, you could define a trait, as you did, and an implicit conversion from a structural type to the trait:

    trait HasName { def getName : String }

    implicit def named2hasName(named: {def getName: String}) = new HasName { def getName = named.getName }

    Deron, implicits combined with traits would solve your problem as well:

    trait Mover { def move }

    implicit def walking2moving(walker: {def walk}) = new Mover { def move = walker.walk }

    implicit def slithering2moving(slitherer: {def slither}) = new Mover { def move = slitherer.slither }

    def acceptMover(m: Mover) = { ... }

    Sure, this requires some extra typing (pun intended), but if you''re writing a reusable component, the couple of extra lines of code for this are probably entirely justified.

    PS. I don''t think there''s any reason to mix a leg count into this any more, but I guess you could do that if you expected a class that has both ''slither'' and ''walk'' methods.

    implicit def slithering2moving(slitherer: {def slither; def walk; def legCount: Int}) = new Mover { def move = ... /* based on leg count */ }'
  replies: []
- id: 7119
  author: Paul Barry
  date: '2008-02-12T06:15:47'
  content: Type safety is a false sense of security for people who don't know how to write unit tests.
  replies: []
- id: 7120
  author: Joshua
  date: '2008-02-12T06:28:30'
  content: Paul, your comment sounds silly when its about an article by someone who authored a very popular unit testing framework. I think the point is that if you have type safety, it removes the need for some of the tests.
  replies: []
- id: 7121
  author: Paul Barry
  date: '2008-02-12T08:54:05'
  content: 'Joshua,

    First, I never said the author of this blog doesn''t know how to write unit tests.  Second, I don''t think you need to write additional unit tests to do type-checking stuff.  Those kinds of errors get tested in the process of testing the behavior of the application.  Basically, I disagree with the theory that you have to write more tests when using a dynamically typed language, which is based on the idea that the compiler is giving you some testing for free.'
  replies: []
- id: 7122
  author: rreed
  date: '2008-02-13T01:38:54'
  content: Hi Cedric, any possibility of a "throw-down" of sorts between you and fellow googler Alex Martelli? You would argue against Python and Alex would argue for it.
  replies: []
- id: 7123
  author: ''
  date: '2008-02-13T02:29:52'
  content: 'Refreshing to see that the new fangled languages are catching up with C++ template facilities.

    I must be getting old, but maybe there''s a place for us dinosours in this new era too.'
  replies: []
- id: 7124
  author: Henrik
  date: '2008-02-13T03:57:30'
  content: 'Alex, you made a good point. Importing is a lot more sane way to do that; trait extending was just what first came to my mind.

    Torbj'
  replies: []
- id: 7125
  author: Nat
  date: '2008-02-13T04:11:30'
  content: 'Structural/nominative typing is orthogonal to dynamic/static typing.

    A language can have dynamic, structural types (e.g. Smalltalk); static, structural types (e.g. Modula, OCaml); dynamic, nominative types (e.g. CLOS); or static, nominative types (e.g. Java, Haskell).'
  replies: []
- id: 7126
  author: Moh
  date: '2008-02-14T13:41:36'
  content: 'But doesn''t Structural typing suffer from the same malady as Duck typing for the worst possible scenario: just because two objects have the same method, it doesn''t mean the *contract* for the method is the same. Would you blindly call the "shoot()" method on an object, regardless of if it''s a camera or a gun?'
  replies: []
- id: 7127
  author: ''
  date: '2008-02-15T00:34:31'
  content: Isn't structural typing perfectly supported in the concept oriented programming (a new but very promising term for me)?
  replies: []
- id: 7128
  author: Paul
  date: '2008-02-27T23:41:57'
  content: 'Hi Cedric,

    I''ve looked at Scala, and in general I think it tries to solve the wrong problem. By the time you''ve extended the expressiveness of your type system to make things fully OO you end up with a bunch of meta-data that obfuscates your original code.

    Some posters have spoken about enforcing contracts. Contracts have both syntax and semantics. Semantics are runtime behaviour which you will never be able to enforce via a static check. This is why Eiffel has all those runtime asserts. Betrand Meyer got this right.

    My view is that you are better off removing all this meta-data from your code and placing it within dedicated contract specifications. This is what TDD/BDD does. A far more expressive type system then Scalas is available for Strongtalk:

    http//www.strongtalk.org/

    I like Strongtalk and the fact that the type annotations are optional. But comparing Strongtalks type annotations with well written BDD  specifications, I would say that the BDD specs are a lot more readable and much better at expressing intent and enforcing contracts.

    Trying to force all this on to the compiler in a manifest way is barking up the wrong tree IMO. A compiler will never be able to fully address runtime semantics.

    Paul.'
  replies: []
- id: 7129
  author: Daniel Furrer
  date: '2008-08-13T05:45:37'
  content: I think structural typing doesn't necessarily mean that you have to specify what functions you need a passed object to have. This could be (and is, see OCaml) done automatically using type inference.
  replies: []
- id: 7130
  author: Ricky Clarkson
  date: '2009-07-06T05:47:51'
  content: 'I don''t think any Scala user actually uses structural types throughout their programs.  For example, FileOutputStream and Socket in Java have no common type that contains close(), so if you wanted to write a ''using'' method, mimicking C#''s feature, you could either write two methods, or use structural typing.

    You use it where the other options are horrible.'
  replies: []
- id: 7131
  author: Background Checks
  date: '2011-05-24T21:55:23'
  content: I guess structural typing is much better than  the duck typing, and it is easier to use.
  replies: []
- id: 7132
  author: Ana
  date: '2011-05-30T03:33:47'
  content: In my case, structural typing works for me better than duck typing.
  replies: []
- id: 7133
  author: qwerty
  date: '2011-06-04T08:37:21'
  content: '"Would you blindly call the ??shoot()?? method on an object, regardless of if it??s a camera or a gun?"

    No but you don''t need a compiler to tell you that you are sending the shoot message on the wrong object. If you need a compiler for that sort of thing, please leave the industry.

    Duck typing gives a huge advantage:  Easy decoupling abilities. AKA "You often don''t need to write new code to meet new specifications". That is huge.'
  replies: []
- id: 7134
  author: Dave
  date: '2011-06-08T15:32:07'
  content: Sometimes it is appropriate to give up the safety net provided by static typing. Maybe you just want to explore an API without worrying too much about method signatures or maybe you're creating code that talks to external components such as COM objects.
  replies: []
- id: 7135
  author: juries
  date: '2011-06-19T18:32:30'
  content: Why make typing tough . I'm not impressed using duck typing cause for me its complicated unlike structural typing. Well, I guess it all depends on the individual which he prefers.
  replies: []
- id: 7136
  author: Patricia
  date: '2011-08-25T21:00:57'
  content: Cool. I just tried it out and structural typing is indeed a lot better than duck typing.
  replies: []
- id: 7137
  author: Tashia M. Burton
  date: '2012-04-01T16:06:05'
  content: Structural typing is more effective than duck typing even though they are similar, I prefer structural typing.
  replies: []
---

A while ago, I explained [why I thought that Duck Typing was dangerous](http://beust.com/weblog/weblog/archives/000269.html). More recently, Scala popularized a different type of typing called Structural Typing, which is often described as being "type safe Duck Typing". Let's take a closer look at Structural Typing and see if it delivers on this promise.

With Duck Typing, you send a message to an object in absolute darkness. You don't know whether this object knows this message and you just trust the caller to have passed you an object that does:

```ruby
def test(o)
  log o.getName   # Let's hope this will work
end
```

The code above might be broken, but you will only find out at runtime.

Structural typing allows you to be a bit more explicit about your expectations on this object. In the following Scala example, I declare that the object passed in parameter should have at least one method, called `getName`, that should return a `String`:

```java
def test(f: { def getName(): String }) {
  log(f.getName)
}
```

This doesn't seem like much, but it does buy us a lot of type safety. For example, if I try to pass an object that doesn't define a `getName` method, the Scala compiler complains:

```java
type mismatch;
found   : Test
required: AnyRef{def getName(): String}
```

I get the same error message if I try to pass an object that has a `getName` method that returns an `int` instead of a `String`.

From that standpoint, Structural Typing is indeed superior to Duck Typing and one of my major objections to Duck Typing ("it's not type safe") goes away. Structural Typing doesn't solve everything, though. Here is a quick side by side comparison of the main techniques available:

 | Duck Typing| Structural Typing| Class/Interface/Trait (1)  
---|---|---|---  
Type safe| No| Yes| Yes  
Can be automatically refactored| No (2)| Yes (3)| Yes  
Respects "Don't Repeat Yourself"| Yes (4)| No (5)| Yes (6)  
  
  1. I'm conflating classes, interfaces and traits. They have different semantic, but mean the same in the context of typing.
  2. More details on the impossibility to refactor Duck Typed code can be found in [the blog entry linked above](http://beust.com/weblog/weblog/archives/000269.html).
  3. Any attempt to rename the `getName` method in either of the three locations (inside the class for the instance passed in parameter, in the method signature or inside the method body) will cause all the other locations to be properly renamed as well.
  4. Since you declare no types at all with duck typing, there is no repetition.
  5. If you need to declare more than one method that accepts a parameter with a `getName` method on it, you will have to repeat the entire `(f: { def getName(): String }` statement for each one. 

 

  6. Since you declare exactly one type with a Class, there is no repetition.



As you can see, Structural Typing is doing pretty well and the only problem is with the violation of the DRY principle that it requires as soon as you need to use it more than once for a signature. This can be easily avoided if you simply avoid using Structural Typing in this case and instead, encapsulate the method in a Class/Interface/Trait.

Bad:

```java
def test(f: { def getName(): String }) {
  log(f.getName)
}
def toXml(f: { def getName(): String }) {
  log("" + f.getName + "");
}
```

The repetition notwithstanding, the problem with the code above is that renaming one of the `getName` methods will not cause the other one to be automatically renamed as well since the compiler has no way of knowing that these methods are identical. In some way, it's ironic that the so-called Structural Typing doesn't preserve... the structure of the type we're actually passing.

Better:

```scala
trait HasName {
  def getName : String = { ... }
}
def test(HasName f) = {
  log(f.getName)
}
def toXml(HasName f) = {
  log("<log>" + f.getName + "</log>");
}
```

So, Structural Typing... good or bad?

I have mixed feelings.

Structural typings can be handy for occasional pieces of code that might not be worth creating a Class/Trait/Interface for, but as soon as you want to reuse the signature more than once or if that signature contains more than one method, you are better off creating a carefully named type that captures that signature and use it instead.

What do you think?
