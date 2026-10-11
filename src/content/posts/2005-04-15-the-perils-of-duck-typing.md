---
title: The Perils of Duck Typing
date: '2005-04-15T10:03:56'
slug: the-perils-of-duck-typing
categories:
- Java
comments:
- id: 3376
  author: Eric M. Burke
  date: '2005-04-15T11:25:37'
  content: I'm curious to see how tools evolve in the Ruby space. Right now IDE support is seriously lacking in basic areas like code completion, much less "find usages" and refactoring. Will Duck typing make these features harder to implement? Only time will tell.
  replies: []
- id: 3377
  author: Bob Lee
  date: '2005-04-15T11:40:31'
  content: 'Eric, not just hard to implement, impossible.

    But, I think the testing argument goes deeper. Comparing writing tests for "duck typed" code to Java code is not fair. Mocking up and testing code is a lot easier without type checking getting in the way. I should think getting 100% coverage would be easier in a more dynamic language.'
  replies: []
- id: 3378
  author: Ray Ryan
  date: '2005-04-15T11:42:11'
  content: 'I was going to post asking where the name came from, but looked it up instead:

    http://www.google.com/search?q=define:+duck+typing'
  replies: []
- id: 3379
  author: Cedric
  date: '2005-04-15T12:07:30'
  content: 'Sorry, Ray, I didn''t include an explanation of where the name came from because that''s what all the other articles do :-)

    Bob:  why impossible?

    SmallTalk showed it was quite possible to create a decent IDE (although it would be interesting to measure it by today''s standards).  Of course, the IDE would be much more dependent on how strongly-typed your style of programming is, but that''s one more reason to use strong typing in your code :-)

    --

    Ced'
  replies: []
- id: 3380
  author: Bob Lee
  date: '2005-04-15T12:12:45'
  content: I only mean impossible in the case of duck typed code. If you use typing, it's as possible as the amount of typing you use.
  replies: []
- id: 3381
  author: Gary Blomqust
  date: '2005-04-15T12:49:23'
  content: What does the above code look like with an interface based approach in Ruby?  I tried to specify a type for a method and it did not compile - though I'm a Ruby novice.
  replies: []
- id: 3382
  author: Patrick Calahan
  date: '2005-04-15T13:24:15'
  content: 'public interface JarFile {

    void explode();

    }

    public interface NuclearBomb {

    void explode();

    }'
  replies: []
- id: 3383
  author: Cedric
  date: '2005-04-15T13:25:56'
  content: That's exactly why the Java license clearly states that Java should not be used to run nuclear plants.
  replies: []
- id: 3384
  author: Sam Pullara
  date: '2005-04-15T13:42:02'
  content: 'I think the meaning of pcal''s comment was somewhat different.  In so much as I accid-entally pass a NuclearBombImpl to a method expecting a JarFileImpl and getting an unexpected kaboom with duck-typing, I get a compile error with static typing.

    Note: Cedrics comment system stopped me from publishing this comment with den*tal in the middle of that word.'
  replies: []
- id: 3385
  author: Tom
  date: '2005-04-15T14:25:22'
  content: 'Um. I''ve done (a little) Ruby programming, and I''ve read more than I''ve written. It''s a great language, but I''ve never seen static typing in Ruby. Maybe you should give an example of what you mean. Also the output from your test run of it.

    Other than that, I think you''ve made a great analysis. By the way, try looking at the Boo language over at Codehaus. While the ideas aren''t new, Boo sure makes such features very approachable (as compared to the more-alien-to-most-folks OCaml).'
  replies: []
- id: 3386
  author: Cedric
  date: '2005-04-15T14:31:50'
  content: 'Mmmh, you are right Tom, you can''t declare types for method parameters, nor for variables.  I got completely mixed up with Groovy on that one.

    Doh :-('
  replies: []
- id: 3387
  author: Tom
  date: '2005-04-15T15:59:38'
  content: 'Right. I guess I should have thought you meant Groovy. For some reason it didn''t even come to mind. If Groovy gets stable and fast, it should definitely be an interesting option for the JVM. My main concern is that when it''s easier to leave out the type info, how many people will just code sloppy? That''s where type inference (such as in Boo) gets interesting.

    On a side note, I wonder if GPath uses static type info if present? I''ve only played with Groovy a tiny, tiny bit. (And Boo not at all, to be truthful.)'
  replies: []
- id: 3388
  author: Bill de hOra
  date: '2005-04-15T17:47:21'
  content: '"Eric, not just hard to implement, impossible."

    PyDev. Komodo. Refactoring - started in Smalltalk.

    This is does not have to be a type inference problem. If you think of it terms of type inference, then maybe it is impossible for some languages.  If you think of it terms of search and indexing it''s solvable problem.

    [Free text search to the level we see it today was supposed to be impossible; content had to marked up and typed before it could be found.]'
  replies: []
- id: 3389
  author: Jon Tirsen
  date: '2005-04-15T17:59:33'
  content: 'Bob,

    It is actually possible to do refactoring and find usages in "duck typed" languages. Smalltalk implemented all these features using runtime statistics gathering, so as you ran the program it collected information about how methods were used and were and so on. This information was then used for the same things IDEs like IntelliJ use static typing for.

    It might be possible to implement something similar in Ruby but harder; the elegant thing with Smalltalk (and Common Lisp) was that the IDE and the system you were building were the same thing. When you shipped the product you just cut out the IDE portions of your system! In this respect these development environments are better than IntelliJ, but they are really lacking in most other respects (usability comes to mind).

    I''ve actually built a very large system in Common Lisp (also "duck typed") and the problems Cedric outline above is actually not that common. It takes a bit of a leap of faith though. :-)

    Cheers,

    Jon'
  replies: []
- id: 3390
  author: Jeff Moore
  date: '2005-04-15T18:34:23'
  content: 'The idea that duck typing might result in a JarFile and NuclearBomb mixup is a fallacy.  It is a problem that occurs in the imagination people who favor static typing, but generally not in practice.

    On the other hand, I can think of many many times where one variable was disastrously typecast to another in a statically typed language.  Static typing sounds nice in theory, but the natural consequence, type casting, can be a problem in practice.  (see Ariane 5 rocket.)

    The real practical problem with duck typing is the contract obfuscation issue.  Without explicit interface declarations, it can be harder to understand the relationships between objects. However, with practice, one learns ways of mitigating this issue.'
  replies: []
- id: 3391
  author: Bob Lee
  date: '2005-04-15T20:46:31'
  content: 'The fact is, I can trust a Java refactoring tool to work accurately without too much intervention on my part. I''m not entirely sure how I''d rename the archive explode() methods and not the bomb explode() methods without stepping through each occurence.

    I could see using a duck typed language on a personal or small project with a few developers I can trust to write tests, but on a big code base with more than 50 devleopers? I don''t think so.'
  replies: []
- id: 3392
  author: Stefan Tilkov
  date: '2005-04-16T02:05:31'
  content: The question, of course, is whether anyone should be doing a project with more than 50 developers anyway.
  replies: []
- id: 3393
  author: Lyndon
  date: '2005-04-16T04:13:41'
  content: 'It''s still a runtime check, but as ruby is fully OO you can do the following

    def DoIt(doggy)

    if doggy.kind_of?(DogInterface)

    end

    end'
  replies: []
- id: 3421
  author: Todd Huss
  date: '2005-04-16T09:44:31'
  content: '<strong>Static typing increases productivity and reduces errors</strong>

    I''m going to come right out and say that I have a strong preference for static typing in a programming language, especially as it applies to medium and large sized applications with multiple developers. Here''s why:

    1. Refactoring: IDE''s make huge refa'
  replies: []
- id: 3422
  author: 'Confluence: Gonzo'
  date: '2005-04-16T19:46:01'
  content: '<strong>The Perils of Duck Typing</strong>

    An interesting blog'
  replies: []
- id: 3394
  author: simon
  date: '2005-04-18T07:15:41'
  content: 'There was a very interesting paper by Bracha at OOPSLA''04 (workshop on dynamic language), entitled "Pluggable Type Systems")

    http://bracha.org/selected-pubs.html

    He argues that the point is not "static vs dynamic type systems" but more of "mandatory vs optional type systems". He points out how harmful a mandatory (typically static) type system can be. In essence the language semantics should not be based on the type system but rather the other way around (which is not the case).

    So his idea is that you could switch between different type systems according to what you do ("classic" types, typestates, type inference....) or even switch them off when you want to do some prototyping.

    Pluggable Type Systems (including type inference "on demand"), that''s all what I ask :)

    I first thought of talking about types in traits and signatures in C++, but this seems much more interesting.'
  replies: []
- id: 3395
  author: Norberto Ortigoza
  date: '2005-04-18T09:21:57'
  content: '"First of all, let''s get a frequently asked question out of the way:  if two interfaces have the same methods, are they semantically equivalent?  Isn''t there a risk to pass an object that is totally wrong for this method, yet will work because it responds to the right methods? "

    I think the main problem isn''t two interfaces having the same semantics. If you are using interfaces you still could have the following problem:

    public interface IHello {

    void hello();

    }

    public class Hello implements IHello{

    void hello(){

    //says hello

    }

    }

    public class Evil implements IHello{

    void hello(){

    //destroys all :)

    }

    }

    The compiler doesn''t complain. When you are using interfaces you don''t know for sure what is the TYPE the code is using. You need to do a "detailed read of the code of these methods." in order to know that.'
  replies: []
- id: 3396
  author: Rob
  date: '2005-04-19T07:31:26'
  content: '"I''m curious to see how tools evolve in the Ruby space. Right now IDE support is seriously lacking in basic areas like code completion, much less "find usages" and refactoring. Will Duck typing make these features harder to implement?"

    Code-completion of the Ruby core types should be available in the next release of the Ruby Editor Plugin for jEdit. Features like "find usages" and "goto declaration" won''t be far behind:

    http://www.jedit.org/ruby/

    I infer a variable''s type based on the methods that have been called on it - if it already "quacks" like a duck, it''ll probably "waddle" like one too. The implementation problems to be solved aren''t too hard, just time-consuming.

    Some refactorings are quite simple to implement like "extract variable" and "extract method". Other refactorings like "change method signature" will probably require the user to confirm each change, since before runtime humans are the ultimate arbiter of variable type.'
  replies: []
- id: 3397
  author: Francis Hwang
  date: '2005-04-19T08:07:15'
  content: 'Not that I''ve used Smalltalk, but my understanding is that the Smalltalk IDE was enabled because the language is (along with Lisp) among the most reflective ever invented. In particular, it gives you runtime access to a low-level VM that lets you see pretty much everything that''s been parsed. Avi Bryant wrote about this here:

    http://www.cincomsmalltalk.com/userblogs/avi/blogView?showComments=true&entry=3284695382

    Ruby isn''t that reflective yet, though perhaps the development of the new VM will be a step in that direction.

    I''ll concur with Bob Lee''s point about testing in a dynamic language vs. a static language: As somebody who used to do a lot of Java, then moved to Ruby, I noticed that I wrote a lot more tests, and they involved a lot less keyboard-typing than in Java. In particular I like using Ruby for not just writing tests of existing code, but doing test-driven development: When there''s no static compilation to get in your way, nudging your way towards the right solution is a lot easier. But then, that''s just my hippy-dippy side talking; this approach might not appeal to all programmers.

    Java programmers should note, though, that duck typing allows you do things that are so cumbersome in a statically typed language that you don''t consider them plausible in the first place, so you don''t consider them when you''re doing a language comparison. In particular, I found Java reflection to be extremely painful; a side-by-side comparison of the guts of Ruby object-relational libraries, for example, with Java object-relational libraries, might show you how much good reflection can simplify complex code. Also worth noting is that I don''t know of anybody who does code generation for Ruby, though people do use Ruby to write C++ or Java.

    (It''s been a while since I seriously used Java, so some of my comments might be out-of-date. No disrespect.)'
  replies: []
- id: 3398
  author: John Urberg
  date: '2005-04-20T13:22:20'
  content: 'Have you had experience on a large project using a dynamically typed language that led you to this conclusion?

    I follow the Smalltalk groups and they all say they have not found this to be an issue in their development work.  Smalltalk has been around for more than 20 years and these folks have built many productions systems in areas such as finance and medical systems.'
  replies: []
- id: 3399
  author: ''
  date: '2005-04-21T16:22:26'
  content: 'Please do have a look at ruby-contract whose Wiki is at http://ruby-contract.rubyforge.org/

    While I''m still not sure whether this is necessary it is IMHO at least a better way of doing it than the regular old static typing.'
  replies: []
- id: 3400
  author: verbat
  date: '2005-04-24T13:16:31'
  content: 'I second mr. Urberg''s feeling.

    People always have this kind of fear that you''d pass a NuclearBomb object in place of something else with dynamic languages, but the truth is that this does not happen.

    Also, Bertrand Meyer had been saying for a decade that you can''t build a reliable system withouth design by contract, and the ariane 5 disaster is there to show you that you can''t rely on just type checking (and ADA had much stronger checks than java).

    But the most important point is: since you have to write tests (you are writing tests, right?), and since when you have tests in place you know that the typing is right, why do you need a statically explicitly typed language?'
  replies: []
- id: 3401
  author: Robb Shecter
  date: '2005-04-27T16:43:35'
  content: 'I''m porting a complex server application from Python to Java 5 right now.

    I''m very competent in both languages, so maybe I can offer a bit of insight.

    The program contains a lot of parsing, type conversions, model classes, and algorithms.

    I''m already noticing several improvements:

    * Reduced need for documentation.  The Java code is more self-documenting, especially when methods return complex structures, ie: (substituting parenthesis for angle brackets)

    Map( String, List( String ) )

    ...I formerly had to document, "returns a dict mapping from..."

    * Better ease of refactoring.  Using latest Eclipse releases, this is amazing.  This is very important, because this project is relatively new, and refactoring is a constant activity.

    * Better ease of writing tests.  If I change a class''s API, I''m given a lot of clues as to how the test code must change.

    There are many other advantages, but these are the ones relating to typing.'
  replies: []
- id: 3402
  author: Berin Loritsch
  date: '2005-11-01T17:59:45'
  content: 'There are some disagreements I have here.  Many view points I have are shared by many thought leaders such as Martin Fowler and Bruce Eckel (in fact they have several articles on the matter).  In order to perform the IDE integration, you need strong reflection support--duck typing has nothing to do with it.

    The important distinction here is that duck typing does not mean no typing, it means latent typing.  The types are still there, and they are still enforced.  It''s not so hard to write tests that cover 100% of the code--I''ve done it.  All you need is a good code coverage tool.'
  replies: []
- id: 3403
  author: Craig Hubley
  date: '2005-11-24T10:33:02'
  content: 'This is an ancient debate.  There is some evidence that it was discussed fully in hieroglyphs on tomb walls in ancient Egypt, regarding whether it was better to have explicit moral codes to guarantee good behaviour, or, to simply choose good people to do difficult and sensitive tasks.  The same is true of programs, no doubt.

    A fairly obvious reconciliation of the two views on duck typing was the attitude of those of us who put forth the (short-lived) "Smalltalk protocol" idea: explicit abstract data types to hold the interface actually used/expected by real callers.

    One proposal I made to Trygve Reenskaug for this: a tool would actually determine, for any given compiled-and-linked module, which interfaces were actually being used, and would document them as an abstract type called a protocol.  This would be based on actual usage, not on any intent or guess.

    If there were too many protocols then they would be easy to simplify into a set of abstract types.  Shipped code could carry protocol information so as to allow any module loaded to flag exceptions, that is, cases where a protocol was violated (even if the actual call ran).

    That way, the "potential problem" of violations of protocol would be separated from "actual problem", in time to notice and modify the code.  As more and more code was running on the Internet, it would be easier and easier to discover potential problems in actual usage of the modules involved, if a culture of trust (leaving the protocol test and notification to the library''s authors) could be created.'
  replies: []
- id: 3404
  author: RMX
  date: '2005-11-30T01:20:38'
  content: 'An even bigger typing risk:  If you have a method

    calculate_area( x,  y)

    it matters a *lot* if x and y are in units of inches, meters, or worse, seconds or gallons.

    People who think just specifying the number of bits used to represent the values (essentially what C/Java/C#, etc do) are just fooling themselves if they think they''re gaining any benefit from their type system.   I really think those languages should be called "goose" typing; because they look a little like duck typing but not quite.

    OCaml''s "structural subtyping" seems to be the approach that gives both most of the flexibility (if all the methods exist, it''s OK) while it addresses your objection (yes, the missing onPause is detected at compile time, through the type-inferance system).'
  replies: []
- id: 3405
  author: Axel Guerrero
  date: '2005-12-20T16:06:50'
  content: 'I have done some dev work using Smalltalk and one of the things I remember about it is the naming conventions for parameters. e.g. consider these two method signatures:

    1.- calculateArea: x with: y

    2.- calculateArea: aNumber with: aNumber

    It is clear that sig #2 tells you something about the parameters (you are supposed to pass two instances of the class Number). In sig #1, what is X? what is Y? (as RMX points out)'
  replies: []
- id: 3406
  author: foobar
  date: '2005-12-27T22:13:20'
  content: LOL.  Sean Corfield can't give you a retort to your article's points, so he personally attacks you.  Typical of him.
  replies: []
- id: 3407
  author: James Watson
  date: '2006-01-09T06:05:49'
  content: '"An even bigger typing risk: If you have a method

    calculate_area( x, y)

    it matters a *lot* if x and y are in units of inches, meters, or worse, seconds or gallons.

    People who think just specifying the number of bits used to represent the values (essentially what C/Java/C#, etc do) are just fooling themselves if they think they''re gaining any benefit from their type system."

    This is a strawman argument.  This is no the kind of typing being referred to.  In Java you would do this properly with a Length, Volume, Time or Currency type.  These types generally contain the unit of measure.'
  replies: []
- id: 3408
  author: James Watson
  date: '2006-01-09T13:15:40'
  content: '"People who think just specifying the number of bits used to represent the values (essentially what C/Java/C#, etc do)"

    More on this.  The above is really really wrong.  This is one of the things that makes this kind of discussion annoying.  The lack of understanding on both sides makes it a pointless discussion.'
  replies: []
- id: 3409
  author: ''
  date: '2006-01-27T15:12:25'
  content: '... implements JarFile {

    void explode() {this.nuclearCore.explode()}

    }'
  replies: []
- id: 3410
  author: Ricky Clarkson
  date: '2006-07-18T06:40:47'
  content: 'public void runObject("any object that responds to the methods onStart and onStop" object)

    can be written in Java as:

    public &lt;StartStop extends OnStart & OnStop&gt; void runObject(StartStop object)

    Slightly more on using generics for duck typing:

    http://rickyclarkson.blogspot.com/2006/07/duck-typing-in-java-and-no-reflection.html'
  replies: []
- id: 3411
  author: Tim van der Leeuw
  date: '2006-10-11T07:26:38'
  content: 'Another one which can bite you in Java''s static typing is ''OperationNotSupportedException'' ...

    A number of the classes in the Java Collections suite can throw an ''OperationNotSupportedException'', for instance. It exists in other places as well.

    There goes your contract right out of the window...

    It''s looks like a duck, it quacks like a duck, it walks like a duck, hey it''s even CALLED a duck, but it doesn''t lay eggs -- it''s not really a duck after all. It just called itself that way, for matter of convenience.

    I see good points in both Java and Python (the two languages I currently use most, for work and for fun). I like the good code-completion and refactoring support that good Java IDE''s give me, and which is much weaker in existing Python IDE''s.

    However, I really like Duck Typing in Python, and many of the other dynamic features of Python, and get a real productivity boost from it.

    I don''t mean to slash on either (type of) language.

    But as the example of ''OperationNotSupportedException'' shows, static typing is not the cure to all possible ailments of duck typing, and having this sort of thing in core Java libraries makes it an endorsement of partially-implemented-interfaces ...

    Cheers,

    --Tim'
  replies: []
- id: 3412
  author: apoc
  date: '2006-10-13T07:35:41'
  content: '"Have you had experience on a large project using a dynamically typed language that led you to this conclusion?

    I follow the Smalltalk groups and they all say they have not found this to be an issue in their development work. Smalltalk has been around for more than 20 years and these folks have built many productions systems in areas such as finance and medical systems."

    I second that.'
  replies: []
- id: 3413
  author: apoc
  date: '2006-10-13T07:37:22'
  content: '"Have you had experience on a large project using a dynamically typed language that led you to this conclusion?

    ...

    Smalltalk has been around for more than 20 years and these folks have built many productions systems in areas such as finance and medical systems."

    My words are the same.'
  replies: []
- id: 3414
  author: ''
  date: '2006-10-25T22:31:50'
  content: 'I''ve used both strongly typed and untyped languages, and about everything in between (yes, I''m that old.)

    Strong typing exists for legitimate reasons, although subsequent advances in technology can reduce or eliminate some of those reasons. I definitely would not want to use a radiation therapy unit or a chemo pump written in Ruby, python, or even C, truth be told!

    I actually *like* Pascal because I can trust the data typing system to catch certain classes of mistakes at compile time. At the same time it''s nice to be able to relax that, although it opens you up to the same problems as forced typecasting does. At least with forced typecasting you have to intentionally do it, and I can go back through the changelogs in my VCS, find out who you were, fire your ass and litigate negligence.

    I spent 15 years writing embedded control systems for semiconductor manufacturing equipment. Many of the processes involved use pyrophoric gasses, incredibly toxic gasses (if-you-could-smell-it-you''re-dead-already type of stuff), and lethal energy levels.

    I''ve seen some very bad accidents caused by honest software errors that would not have happened with a strongly-typed compiler like Pascal, that''s why the old joke about "You can''t shoot yourself in the foot, the compiler won''t let you!"

    Unit tests have an important place in the scheme of things, but having them is not an excuse to turn the human into a pre-processor. Let the compiler do its work and the programmer do theirs.'
  replies: []
- id: 3415
  author: Dave / Eymiha
  date: '2006-11-02T07:35:17'
  content: 'Of course, the real fun in Ruby starts when on_start doesn''t exist in the object, but is created by the method_missing method when sent. In this sense, the introspection part of duck-typing can break down.

    Look here: in Ruby if I have an object without an on_start method, but a method_missing that will create it and add it to the object when needed, then a call to

    object.respond_to? :on_start

    doesn''t return true if it''s called before method_missing has done its work.

    So what you really have is a sort of lame-duck typing (TM) that may not be effective all of the time.

    Granted, this is a bit contrived, but in such scenarios testing has to be equally contrived. What it amounts to is a logical race condition. In systems that can create code at run time, introspection can be questionable.

    Be careful!'
  replies: []
- id: 3416
  author: Dave / Eymiha
  date: '2006-11-02T07:36:55'
  content: 'Of course, the real fun in Ruby starts when on_start doesn''t exist in the object, but is created by the method_missing method when sent. In this sense, the introspection part of duck-typing can break down.

    Look here: in Ruby if I have an object without an on_start method, but a method_missing that will create it and add it to the object when needed, then a call to

    object.respond_to? :on_start

    doesn''t return true if it''s called before method_missing has done its work.

    So what you really have is a sort of lame-duck typing (TM) that may not be effective all of the time.

    Granted, this is a bit contrived, but in such scenarios testing has to be equally contrived. What it amounts to is a logical race condition. In systems that can create code at run time, introspection can be questionable.

    Be careful!'
  replies: []
- id: 3417
  author: simon
  date: '2006-11-02T11:48:11'
  content: I would think that ducktyping is fine in a single develper environment. What happens when you have 20 people developing multiple libraries. Interfaces exist for a reason.
  replies: []
- id: 3418
  author: Nathanael
  date: '2007-02-22T19:23:08'
  content: I was interested with Simon's comment above about mandatory vs optional typing systems.  I'm not an expert, but this is how Objective-C works, because you can either force static typing (e.g. NSString*) or allow dynamic typing (the id type).  When using static (or semi-static), the compiler will let you know that a particular object "may not respond to" a given message, but will still allow it because due to Obj-C's dynamic typing, at runtime it *may* respond to that object.  But if you want the flexibility, there's always the id type.
  replies: []
- id: 3419
  author: ppibburr
  date: '2008-01-02T19:27:32'
  content: 'class Key

    ...

    def turn(instance)

    instance.unlock

    end

    end

    class Lock

    ...

    def unlock

    someThingToCall

    end

    end

    class Bomb &lt; Lock

    def unlock key_type

    someThingToCall if key_type == Bomb

    end

    end

    class BombKey &lt; Key

    def turn(instance)

    instance.unlock self.class

    end

    end

    aBomb = Bomb::new

    aCarDoor = Lock::new

    aCarTrunk = Lock::new

    aWoodDoor = Lock::new

    aWoodenTrunk = Lock::new

    car_key = Key::new

    car_key.turn aCarDoor # would do it

    car_key.turn aWoodDoor # would do it

    car_key.turn aWoodTrunk # would do it

    car_key.turn aCarTrunk # would do it

    car_key.turn aNonVehicleObject # would do it

    car_key.turn aBomb # would not

    since the worry is "Oh no! If this Then that would be bad"

    Then would you not make sure it cant. Perhaps even that you made sure is better

    then assumed it cant

    this shows the flexability of Duck typing but allows me to know it wont, not assume then later ''oh crap'''
  replies: []
- id: 3420
  author: Jonathan Rochkind
  date: '2008-11-25T16:33:21'
  content: '"Look here: in Ruby if I have an object without an on_start method, but a method_missing that will create it and add it to the object when needed, then a call to

    object.respond_to? :on_start

    doesn''t return true if it''s called before method_missing has done its work."

    You _can_ fix your object to respond correctly to respond_to? :on_start in ruby, so long it''s possible for the object to know it''s going to do that. Most developers just don''t.  There are even standard library functions like Delegator and Forwardable that demonstrate doing this in a proxy/delegate pattern, and let the developer do it very easily with little overhead. There could and should be more ''helpers'' like this for dynamically implemented methods.

    I share some dis-like of duck-typing, but I think most of the typical concerns, some here in these comments, are entirely mis-placed. I''m not worried about an ''evil'' class, or the ''explode'' example. But duck-typing does seem to discourage ''design by contract''. Which I think is problematic for constantly evolving code, especially when there are dependencies between different libraries, decentralized code collaboration, as ruby with it''s gem system encourages--when I want to change something, how the heck do I know who was depending on it? When I want to use something, how do I know which things it contracts not to change, and which things could change at any time as the code evolves?

    The standard ruby answer is ''testing'', which is certainly part of it, but in my experience usually not enough. In part because, as Cedrik writes, it''s hard to _read_ a test suite to see what it _says_.

    I think the solution is not static/fixed typing, but putting the _type_ back in duck-typing, something along the lines of what Craig Hubley writes about above. Some way of not requiring, but allowing, an actual contract of what a type IS, in a low-overhead way for developers.'
  replies: []
---

The idea behind "Duck Typing", which has recently be made popular again by Ruby and other script languages, is to make the concept of types less restrictive.

Consider the following:
    
    
    public interface ILifeCycle {
    public void onStart();
    public void onStop();
    public void onPause();
    }
    // ...
    public void runObject(ILifeCycle object) {
    object.onStart();
    // ...
    object.onStop();
    }

Faced with this kind of construct, some languages decide that the existence and even the name of the interface `ILifeCycle` is unimportant.  The only thing that really matters is the fact that `runObject()` needs the methods `onStart()` and `onStop()` to exist on the parameter, and that's all.

In short, it boils down to:
    
    
    public void runObject("any object that responds to the methods onStart and onStop" object) {
    // ...
    }

Late-binding languages are actually even less restrictive than that, since the verification that the object does respond to such methods is not made when the object is passed as a parameter to the method, but on the invocation of the said methods, which explains why parameters to methods are usually not typed all.

In a way that's typical for dynamically typed language, the error will therefore only appear at runtime and only if such code gets run.

First of all, let's get a frequently asked question out of the way:  if two interfaces have the same methods, are they semantically equivalent?  Isn't there a risk to pass an object that is totally wrong for this method, yet will work because it responds to the right methods?

I don't have a clear answer to that, but my experience is that such a thing is very unlikely.  This kind of argument is a bit similar to the fear we all felt in the beginning of Java when we realized that containers are not typed:  `ClassCastExceptions `end up being much more rare than we all thought.

Duck Typing is a big time saver when you write code, but is it worth it?  Don't you pay this ease of development much later in the development cycle?  Isn't there a risk that you might be shipping code that is broken?

The answer is obviously yes.

The proponents of Duck Typing are usually quick to point out that it should never happen if you write your tests correctly.  This is a fair point, but we all know how hard it is to guarantee that your tests cover 100% of the functional aspects of your application.

Another danger in the Duck Typing approach is that it makes it really hard to see what the contract is between callers and callees.

As you can see in the code above, you need to actually understand the entirety of the method to realize that the parameter passed to the method needs to respond to `onStart()` and `onStop()`.  But the worst part is:  the code is lying to you!

The method is also relying on `onPause()`, except that this method is not used in this particular `runObject()`.  But it is used in ` execute() `in a different class.  How would you realize that ` runObject()` and `execute()` work on objects of the same type?  With Duck Typing, it's extremely hard to tell and it requires a detailed read of the code of these methods.

If you wanted to use `runObject()` from your own code, you would make the flawed assumption that all your object needs to do is respond to `onStart()` and `onStop()`, and chaos will ensue if/when the implementation is upgraded to invoke `onPause()` as well.  At least, with the typed approach, the contract is obvious and you are guaranteed that it can't be changed from under you (the provider of this interface can't add a method to ` ILifeCycle `without breaking everything, so they will probably provide an `ILifeCycle2` interface or something similar to guarantee backward compatibility).

I am all in favor of anything that makes the development process more agile, but if I can ship code that contains errors when these errors could have been caught by the compiler before my code even gets a chance to run, I will seriously consider leveraging this support as much as I can.

Duck Typing is dangerous and should only be used for quick prototyping.  Once you switch to production coding, I strongly encourage everyone to make their code as statically typed as possible.

This is one of the great things in Ruby:   it is late-bound but still statically (strongly) typed.  Not only is the interface approach shown in the first code snippet above fully supported in Ruby, it is actually quite encouraged and it doesn't make your code any less Ruby-ic.

Use Duck Typing for prototyping, but program to interfaces for anything else.
