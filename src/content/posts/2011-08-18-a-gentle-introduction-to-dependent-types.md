---
title: A gentle introduction to dependent types
date: '2011-08-18T11:41:06'
slug: a-gentle-introduction-to-dependent-types
categories:
- General
comments:
- id: 9190
  author: Brian Slesinsky
  date: '2011-08-18T14:23:55'
  content: 'I could see this working well with runtime checks in the constructor of an immutable object. You build an object, assert that it has a certain property in its constructor, and then the type system remembers that you did that assertion, so a runtime check doesn''t have to be done again later.

    As an example, if we know we''re constructing a pair of numbers, we could assert that the list has length 2 in the constructor by doing a runtime check. Then a single datatype (list) can be used to construct pairs, triples, and so on, which are commonly used by some algorithms.

    Similarly, maps could be used as structs by asserting the set of keys that exist. Then the compiler could represent them as structs behind the scenes and convert constant key lookups to field accesses. Also, errors for invalid key names can be reported at compile time.

    This isn''t going to be a dramatic change in functionality, since any value you use in the dependent type could be saved to a field instead, and we could do runtime checks on that field later. The dependent type''s value is essentially a zero-cost constant field that the runtime doesn''t even have to store.'
  replies: []
- id: 9191
  author: Ruslan Zenin
  date: '2011-08-18T14:32:24'
  content: 'Nice writeup Cedric! So, mutable types are no good for that. Its sort of constructor based dependency injection. So things like java array would work for that...since they have defined state boundaries at the construction time.

    What you are describing slowly flows into declarative programming where you have expressions/pragmas for the compiler how to handle constructed objects...the hard question how do we use all this...or will it help developers or stand in their way?'
  replies: []
- id: 9192
  author: Dan Fabulich
  date: '2011-08-18T15:24:31'
  content: 'You could certainly have a mutable implementation of a dependent type, as long as you''re willing to cast. (And why wouldn''t you?)

    List<Integer> = new ArrayList<Integer>();

    l.add(2);

    List<Integer><2> l2 = (List<Integer><2>) l;

    In fact, I bet you could implement anything you wanted to do with dependent types today using the JSR 308 pluggable checker framework in Java 7. Slap a @ListSum(2) annotation on your list and write a pluggable checker to verify it at compile time.'
  replies: []
- id: 9193
  author: Gavin King
  date: '2011-08-18T16:32:55'
  content: '"you pretty much never use lists that are initialized with constants at declaration time, except maybe in tests"

    I think that''s true in business computing, but much less so in scientific computing, where it seems to me that dependent types would be really useful. Unfortunately relatively few languages are really designed with scientific computing in mind.

    I think a potentially great way to provide this feature would be to encode the natural numbers into the type system as Zero, Succ, Succ&lt;Succ&gt;, etc, and then provide a syntax sugar over the top of that. So at some level, the 2 in List is just an ordinary type argument. And a type like List&lt;String, ? would be a kind of wildcard type, and then you could do wildcard capture and all that. You would certainly still need some special purpose stuff at the compiler level, and at the language syntax level, but it some deeper conceptual level it would just be an extension of ordinary-old generics.'
  replies: []
- id: 9194
  author: Gavin King
  date: '2011-08-18T16:35:30'
  content: 'Ugh. I tried to type:

    "Zero, Succ&lt;Zero&gt;, Succ&lt;Succ&lt;Zero&gt;&gt;"

    "The 2 in in List&lt;String,2&gt; is just an ordinary type argument."

    "And a type like List&lt;String, ? &amp;lt=3&gt; would be a kind of wildcard type."'
  replies: []
- id: 9195
  author: Gabriel C.
  date: '2011-08-19T06:01:46'
  content: 'The issue of buidling the arrays is not big deal:

    To have the flexibility of having lists  of any size without casting you just need:

    List add(List list, T elem)

    List   emptyList()

    With the same kind of dependent types you can have a safe "concatenate":

    List concat (List l1, List l2) ...

    I agree that more research is needed to make dependent types more usable but they''re really powerful and I think they should be the future.

    Adam Chlipala has a very interesting book "Certified Programming with Dependent Types" http://adam.chlipala.net/cpdt/ (he uses Coq).'
  replies: []
- id: 9196
  author: Gabriel C.
  date: '2011-08-19T06:04:44'
  content: 'Dang, forgot the HTML filtering... let me try again

    To build the list:

    List&lt;T,n+1&gt; add(List&lt;T,n&gt; list, T elem) ...

    List&lt;T,0&gt;   emptyList() ...

    The safe append:

    List&lt;T,n+m&gt; append (List&lt;T,l1&gt; l1, List&lt;T,m&gt; l2) ...'
  replies: []
- id: 9197
  author: Runar
  date: '2011-08-19T06:26:06'
  content: 'I''m detecting a trend in your posts. You take some technology that you do not understand and then provide an argument that''s vaguely against it from a position of ignorance. Call it "argument from lack of imagination".

    So I''d like to plant the seed in your mind that maybe there is a prerequisite idea that you need to understand before you can speak intelligently about dependent types.

    "...and if it''s mutable..."

    Bingo. The secret is that you cannot have types and side-effects at the same time. To the extent that you have side-effects, you will be forced to lie about your types.

    "And now you have to determine how a List and a List can interact and how compatible they are."

    You have the same problem with the numbers 1 and 2. If you wish to add those two numbers to make 3, you have to determine how the number 1 and the number 2 interact and "how compatible they are". What information might you need to determine that? Could you take that information as an argument to your addition function?'
  replies: []
- id: 9198
  author: Cedric
  date: '2011-08-19T06:33:00'
  content: 'Runar: you can easily prove my "argument out of ignorance" wrong by providing a concrete example of the usefulness of dependent types, and I even invited readers to do so at the conclusion of my post.

    Instead, you confirm my findings by paraphrasing the very same conclusion I came to.

    So tell me again, why did you find it necessary to insert a personal attack in your comment if it''s to end up agreeing with me?

    And actually, even if you disagreed with me, it would <b>still</b> not be okay to make personal attacks a part of your answer. Come on, you''re better than that.'
  replies: []
- id: 9199
  author: Bill Kress
  date: '2011-08-19T06:48:35'
  content: 'I''m still not convinced generics was a good idea (seriously).  I understand that it looks better, but I have a serious problem with passing ANY raw collection around--When our code is at it''s best we are passing around things that mean something and a collection doesn''t mean anything--it leaves too many questions about the contract and forces utility patterns to access it throughout your code.

    I''m of the opinion that collections only mean something inside a class, and when you write small, maintainable classes then a little casting isn''t harmful or even annoying.

    On the other hand, there are a whole spectrum of problems that I''m coming to realize that Java just isn''t the answer to.  Generics seems to be a poor attempt to force Java to better solve these problems when honestly you''d often be better off with a layered solution like groovy/java or going with something designed to solve more interesting problems (Scala).

    Why can''t we have a simple, straight-forward inelegant easily-understood and maintainable language with limited features without people trying to force it to be something else?  Couldn''t we just use a kitchen-sink language like Scala to deal with problems like this?'
  replies: []
- id: 9200
  author: Runar
  date: '2011-08-19T07:51:38'
  content: 'Cedric, there is no personal attack anywhere here. I am criticizing your technique, and whether you take that personally is entirely up to you. And I am not agreeing with you. What I intended to do was to use your same argument to ask a simpler question with a (hopefully) more obvious answer.

    The utility of dependent types is that you can prove more programs correct. It''s important to understand that in such a system, there is very little difference between a value and a type. So you cannot have mutable values for the same reason that you cannot have mutable types. Lists of different lengths have different types, and numbers of different sizes have different types. How are they reconciled? The answer is: polymorphism.

    So consider this. A program is a proof, and the hypothesis that it proves is a type for that program. Now, given the hypothesis that 1 + 2 = 3, how would you go about proving that? In a dependently typed context, "1 + 2 = 3" is a type. What does a program of that type look like? This is not a rhetorical question. It translates to the question "how do you prove it?" Hint: the proof is recursive.

    As for showing the usefulness of dependent types, it''s up to you to determine that for yourself. Useful for what purpose? There are people I respect very much that have looked at dependent types and determined for themselves that their price is currently too high, and others I respect equally as much who have taken the opposite stand. The question is what you want from a type system, and whether you want it badly enough to pursue types that are so strong that you cannot write incorrect programs.'
  replies: []
- id: 9201
  author: Gavin King
  date: '2011-08-19T09:19:26'
  content: FTR, when I read Cedric's post, I didn't read him as arguing anything in particular, nor did I get the impression that he was presenting himself as an expert on subject. I just thought he was trying to introduce the notion of a dependent type to folks who might not have heard of it before, or might not have understood quite what it was meant to be used for, with some easy-to-relate-to examples, and then asking some rhetorical questions with the purpose of pointing out the some of issues/questions that a language which supported dependent typing would have to solve/answer. I think it's quite likely that at least a few people came away from this post knowing a little more than they did before about dependent types, and perhaps with the curiosity to learn more (which really requires digging into the academic literature). So I guess I'm inclined to think this blog post left the world just ever so slightly richer than it was before...
  replies: []
- id: 9202
  author: Jake Mitchell
  date: '2011-08-19T10:44:13'
  content: You might appreciate what I wrote about implementing a dependent type in D.  Check it out at http://blog.sensitivecircuit.com/post/7062591903/type-safe-mathematical-vectors
  replies: []
- id: 9203
  author: Daniel Peebles
  date: '2011-08-19T10:54:38'
  content: 'I don''t think dependent types and mutability are fundamentally incompatible, but you''d need some sort of substructural types that prevent you from reusing an old value (pre-mutation) after mutating it.

    For example, you might have, in a pseudo-language:

    List&lt;Integer&gt;&lt;0&gt; l = new ArrayList&lt;Integer&gt;(); // has to be of length 0

    (unit, l) = l.add(1); // Now l is of type List&lt;Integer&gt;&lt;1&gt;: the language would desugar the in-place mutation of l to a rebinding of the l name, along with the return value, which in this case is just unit.

    (unit, l) = l.add(2); // Now l is of type List&lt;Integer&gt;&lt;2&gt;.

    // Now, we can call a function that expects a List&lt;Integer&gt;&lt;2&gt; and pass it l.

    So with some simple shadowing of the name, and explicit state passing (this is all the state monad does, by the way, except here the type is changing so we''d need indexed state) we can prevent people from accessing the old version, while ensuring that the l value has the correct type. However, if someone else also held a reference to the old value, things would be bad. So you''d want some sort of type-level guarantees that nobody else is holding onto the intermediate values of l. This is where substructural types usually come into play.

    I''m not really sure I follow the premise of this example, though. What do you mean you can only initialize your list-of-length-2 with constants? You just need to provide constructors that do the right thing:

    List&lt;Something&gt;&lt;2&gt;  = new ArrayList&lt;Something&gt;&lt;2&gt;(MyGUI.getInputFromUser(), File.read("ohai"));

    The length is constant, but the contents are not. And if the whole list is input from the user, we''re still not screwed. This is where the idea of a decidable predicate enters, which in some ways is quite similar to a fancier Boolean type or a Maybe (Option) type. Say you have an algorithm that requires a list of length 5, and declares so in its type. You also need to ask the user for the list. You have no control over the user''s behavior, so you need to acknowledge that the user might give you a list of length 3 or 100. Presumably, you want to chastise the user for bad input, but basically your input type will produce a value of Option&lt;List&lt;Integer&gt;&lt;5&gt;&gt;. If the user gave you bad input, the return value will be None, and otherwise you''ll get Some with a valid list of length 5 in it. You then feed this value to your algorithm and all is well.

    About the broader subject of dependent types, "I don''t think the fun ends here" at all. I do think it''s hard to talk about the real benefits of dependent types before introducing the curry-howard correspondence and covering why programmers should care about (or at least, not be afraid of) proofs. The usual solution in dependent type land is not to relax typechecking for issues like the one C??dric presented, but to provide proofs (which happen to just be values of your programming language, by the C-H correspondence) that your types are respected.

    As for "practical" applications, we aren''t really there yet. Agda is my language of choice here, but most people joke about not ever compiling Agda code. We''re still trying to work out a good, flexible-yet-not-too-painful-yet-tractable type system, and there are many options, but sadly comparatively few people working in the area. I don''t think a DT language will ever be as straightforward to program in as, say, Ruby, or Java. But with greater compile-time guarantees, comes greater programming burden :) It doesn''t have to be extremely painful though, at all. Tools like inductive families in Agda (or GADTs in Haskell) already make it quite easy to encode sophisticated invariants into your types that rule out all sorts of bad runtime behavior statically.

    But if you want a lameish example of where we might end up, check out my project https://github.com/copumpkin/derpa. It''s an Agda "reinterpretation" of REPA, a Haskell library for doing fast, implicitly parallel computations on arrays of arbitrary dimensions. My version supports a similar API but by construction eliminates the need for any runtime bounds checking on array accesses at all. Eventually I could FFI out to all the unsafe REPA functions and we could write trustworthy number-crunching code that needed no bounds checks. And in addition to that, we could write arbitrary proofs of its correctness, based on some model of the underlying Haskell code (and the assumption that it is correct, but you have to build on something eventually :)).

    I was planning on providing 2 cents and I think I accidentally lost a quarter. Damn!

    tl;dr: everyone should take the time to learn dependent types. They''re mind-opening'
  replies: []
- id: 9204
  author: missingfaktor
  date: '2011-08-29T05:02:04'
  content: 'You are not really doing a justice to dependent types by only showing only the example of dimensionally checked sequence operations, which most developers are not likely to find very interesting. Dependent types can do a lot more than that. For example, take a look at these slides: http://www.cs.st-andrews.ac.uk/~eb/writings/dtp11.pdf. The author showcases a systems programming DSL written on top of Idris programming language. In this DSL, operations such as attempting to read from a file opened for writing, trying to read from a closed file are reported as errors at compile time itself. The possibilities are endless. And as slides #8 and #33 explain, many of these use cases have real world applications too.'
  replies: []
- id: 9205
  author: Cedric
  date: '2011-08-29T07:31:17'
  content: 'FYI, the following claim:

    "operations such as attempting to read from a file opened for writing, trying to read from a closed file are reported as errors at compile time itself."

    makes no sense at all.'
  replies: []
- id: 9206
  author: dgoff
  date: '2011-08-29T23:22:01'
  content: 'Is it the same as Existential Types or Phantom Types, what is described here

    http://www.typesandotherdistractions.com/2010/12/existential-types-in-c.html

    http://blog.matthewdoig.com/?p=134'
  replies: []
---

Most of you are certainly familiar with this piece of code: 
    
    
    List<Integer>
    

This is the syntax for generic (parameterized) types, which has been available in Java since 2004. And of course, you know what you're supposed to put between the brackets: a type (class or interface). But have you ever wondered what else we could use there, besides types? 

For example, how about: 
    
    
    List<Integer><2> // not legal Java
    

Instead of a type, I'm now using a value of a certain type (an integer) as a type parameter. 

What could this possibly mean? Well, since I'm making up the syntax (and I'll use that liberty a bit more in the rest of this post), I might as well make up what it means as well. How about we say that the integer here represents the size of the list? 

In other words: 
    
    
    List<Integer><2> l = List(1, 2);  // compiles
    List<Integer><2> l = List(1);  // does not compile
    

Or we could decide that if the type that we are indexing (`Integer`) supports the `+` operator, then that value is the sum of all its elements: 
    
    
    List<Integer><2> l = List(2); // compiles
    List<Integer><2> l = List(0, 1, 1);  // compiles
    List<Integer><2> l = List(0, 1);  // does not compile
    

You probably guessed it by now: `List<Integer><2>` is a dependent type. A type parameterized not just by other types but by values of other types. The correct terminology here is that the type is "indexed" by the value (not to be confused with the meaning of "index" in the context of a list). 

Different values specify different types, and of course, we don't have to stop there: the value could be of a different type than `Integer`, e.g `String` (`List<Integer><"abc">>`, etc... Obviously, you're not limited to `List` either, you can imagine having maps, trees or any other parameterized type. 

Unfortunately, the fun stops there. While the appeal of dependent types looks strong, it's actually very hard to cross over in the realm of concrete code. 

Let's get back to our list: how do we manipulate a dependent list with a fixed size, so that the compiler will flag any attempt to violate this constraint by refusing to type check our program? 

I used the easy situation in the code snippets above by initializing my lists with constants, but obviously, this is not very useful: you pretty much never use lists that are initialized with constants at declaration time, except maybe in tests. Very often, we create a list, we populate it at runtime with some algorithm and if it's mutable, we alter it in various ways. 

First, we need to create our list without putting any elements in it, but doesn't this violate the constraint? 
    
    
    List<Integer><2> l = new ArrayList<Integer><2>(); // should not compile
    

If we can't even compile this, then we'll never be able to use anything but lists initialized with constants, so let's imagine that the compiler will let us get away with it. How do we populate our list now? As it turns out, we haven't made much progress: 
    
    
    List<Integer><2> l = new ArrayList<Integer><2>(); // assume this compiles
    l.add(1);    // will not compile
    l.add(2);   // would compile if the previous line compiled
    

Having a list with one element would be a type error, so the second line in the snippet above should not compile. You could work around this limitation by having `add()` return a different list **of a different type**. It will still be a `List`, but indexed by the value `+1` of the original one. And now you have to determine how a `List<Integer><1>` and a `List<Integer><2>` can interact and how compatible they are.. 

We are at an impasse, and if we want to make progress, we have to configure the compiler to increasingly release the dependent typing condition. For example, maybe it would only apply the type checker on operations that access the content of the list (read) but it wouldn't perform any checking for operations that alter it (write). Kind of a builder pattern waiver, where the object is allowed to be in an illegal state within well delineated boundaries. 

Even so, the burden of type checking will become quite big and will require the compiler to not just generate code but actually perform branch analysis to make sure that the number of elements of the list always satisfies the dependency at certain given points. 

Note also that I glossed over another non-trivial aspect: how can we teach the compiler what the syntax above means? Should it be configurable or part of the language definition? What types are allowed to be indexed? What types are allowed as indices? How do types of the same family but with different indices interoperate? 

By now, it should be increasingly clear that mutable types can't realistically be dependent, which confines dependent types to immutable ones. How useful is this, really? Still working on that. 

If the subject interests you, the best paper I have found so far is [Dependent types at work (PDF)](http://www.cse.chalmers.se/~peterd/papers/DependentTypesAtWork.pdf), which is a short introduction of dependent types through Agda. Agda is probably the first language you should look at since it's much more recent than Coq (which I was already studying as part of my PhD fifteen years ago, since I was working for my PhD at the same research institute that created Coq). This paper (and most of the literature on the subject) doesn't touch any of the topics I described in this short introduction, they are more focused on describing how you can use Agda to formalize the proofs of your type system, which in turn will give you guidance on how your type checker should be implemented. 

And if you have some interesting practical examples of dependent types, comment away! 

_Update: discussion on[reddit](http://www.reddit.com/r/programming/comments/jnkbw/a_gentle_introduction_to_dependent_types/)._
