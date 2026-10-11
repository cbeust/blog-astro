---
title: Annotation design patterns (part 2)
date: '2005-02-27T09:47:28'
slug: annotation-design-patterns-part-2
categories:
- Uncategorized
comments:
- id: 3196
  author: Dion
  date: '2005-02-27T18:37:26'
  content: 'Hi -

    I am totally thinking outloud here. Could you write some Decorator annotations which could wrap the ''real'' annotations... and they have the semantics of how to apply that annotations?

    @RegexApply(regex=appliesToRegExp = "test.*", tag=@Test)

    @PublicApplicator @Test

    Or something. :)

    D'
  replies: []
- id: 3197
  author: eu
  date: '2005-02-27T20:38:13'
  content: Here is an useles but somehow fancy idea. Use interface to declare set of methods you want to annotate and pass that interface to class-level annotation. :-)
  replies: []
- id: 3198
  author: Mocky Habeeb
  date: '2005-02-28T06:22:38'
  content: 'You could use the standard Java access modifiers to scope the class annotations.

    @Test(scope = public)

    public class DataBaseTest {

    public void verifyConnection() { ... }

    protected void insertOneRecord() { ... }

    }

    where all methods in the class with an access modifier equal-to or less-restrictive-than the given scope have the annotation applied. In the case above: insertOneRecord() would not have the annotation since ''protected'' is more restrictive than the give ''public'' scope. Make the default behavior when no scope is specified to be public access, or if you want to align with the language access modifiers, make the default `package` access.'
  replies: []
- id: 3199
  author: Patrick Calahan
  date: '2005-02-28T08:25:33'
  content: 'I''m going to have to cite you for terminology abuse, Cedric;  I don''t think anything here properly qualifies as a "design pattern."

    This isn''t to say that they necessarily aren''t useful ideas.  However, I''m also not sure I agree with your premise:

    "Adding these annotations to all your methods is not only tedious, it decreases the readability of your code and it''s also quite error prone (it''s very easy to create a new method and forget to add the annotation)."

    It''s also easy to add a new method and forget whether or not it''s going to match your regexp - which is error prone and indiciative of poor readability.

    I dunno, is it really that bad to just declare each method to be @testMethod?  This is what we do in JSR181, for example, and it so far has not been a burensome to use at all.  If you like, it seems perfectly reasonable to have a convenience rule like "if no @testMethod annotations appear, all public methods are test methods."'
  replies: []
- id: 3200
  author: Achim
  date: '2005-02-28T08:31:00'
  content: 'I agree:

    The classical regex way is unsafe towards refactoring. The naming convention and type safeness problems all reason in the fact that there is an external configuration related to the assignment of the annotations. Refactoring is just like fixing an ant script when sth. has changed. Except that the poor build admin (or lets say the developer because its about class-level changes) has to change the source file.

    A further important question is: How generic is "the tool"? Don''t read further if no spare time or interest exists because cannons at mice follow.

    If I imagine the tool to be just the handler for @Test - one annotation type - the semantics of that annotation are hardwired and even may cover the binding to certain methods if it does not cover a crosscutting concern (aspect).

    But wait: Who would do the coding for the semantics of a certain annotation (tool) that only covers method test*(SpecialType type, String s,..) which relies on the arguments and/or special interfaces?

    => Annotations are about crosscutting concers, their underlying semantics are aspects.

    So lets take a look on how the implementations of aspects (interceptors, advices,...) are bound to code. I only know jboss-aop, so I cannot tell to which degree this is general.

    The problem is, how to specify certain locations in code, pointcuts. BTW this has been done for other domains as well: E.g. shrinking & obfuscation of proguard. It ships with a complete language that allows to select pointcuts. Just as an example (I do not want to advertise here) Jboss-aop allows selection by

    -regular expressions for

    - return types

    - method names

    - argument types

    - extends / implements types

    - throws clauses

    -Inheritance ($instanceof)

    -Annotations

    -Logical operations

    - exclusion (NOT)

    - incision (AND)

    - union (OR)

    And all these in combination with each other.

    The difference towards the annotation-assignment question is that aop assigns semantics (aspects) to code and here we want to assign annotations to code. The way aop selects the code by pointcut expressions may be of interest.

    At class level one could use the additional features. It''s a quick thought and broken down to method selection.

    @Test(

    apply =

    @pointcut(

    regName="test*",

    regReturn="java.lang.String*",

    regArgs="{org.acme.foo.*,String}",

    regThrows=""

    )

    )

    This for example would assign @Test to all methods that start with "test" AND return a StringBuffer, StringBuilder or String AND take some instance of the org.acme.foo package and a String as argument and don''t declare to throw an exception.

    Ugly isn''t it? The nested pointcut would be a way of allowing this to be applied for any class-level annotation. But it is still very limited: The attributes are implicitly related by AND (OR would be desireable too). What about choosing to select a type (return, arg) not by regular expression but inheritance? We could want to use instanceofReturn="java.util.List". Exclusion would be nice too. And all the pain when parsing the argument list with possible wildkarts (the c word is questionable content?). What about unqualified types? Like chef said: "I am not touching that with a 40ft pole.".

    Sum up:

    Annotation assignment (at class level) hardwired to access modifiers is the easiest way, even if the modifiers weren''t designed for that purpose. The problem is that some methods will be annotated because they have to be public even if it is the intention not to do so.

    The configuration approach imposes refactoring problems. It may be broken down to the question: How to select methods? Full control with all features as known from AOP is killer.

    The semantics of annotations "tool" are crosscutting concerns that will be bound to code.

    AOP already solves binding crosscutting concerns (interceptors, advices) to code. So doing this by configuration just for the assignment of annotations at class level would be double work. If it is done only a subset of the more general problem to bind aspects to code is covered: bind annotations to methods where the annotations are hardwired to aspects ("tool"). In an aop setup this would be like: bind annotations to methods and then bind aspects to annotations which results in transitive links from aspect to methods.

    I hate long and overcomplicated blog comments. Sorry,

    Achim'
  replies: []
- id: 3201
  author: Jason Carreira
  date: '2005-02-28T11:08:26'
  content: Jakarta commons-attributes provides class-level attributes AND works with Java 1.4.
  replies: []
- id: 3202
  author: B. K. Oxley (binkley)
  date: '2005-02-28T16:05:50'
  content: 'It''s clumsy, but this works:

    @Retention(RetentionPolicy.RUNTIME)

    @Target(ElementType.TYPE)

    public @interface DotDotDot {

    Class[] value();

    }

    As indicated by the name, I wanted to be able to use varargs notation somehow so that I could say:

    @DotDotDot(SomeReturnType.class, ParameterType1.class, ParameterType2.class)

    public class Bob {

    // ...

    }

    Which would match the methods with the same signature.  Instead, I had to write this:

    @DotDotDot({SomeReturnType.class, ParameterType1.class, ParameterType2.class})

    public class Bob {

    // ...

    }

    Alas.'
  replies: []
- id: 3203
  author: Michael Kovacs
  date: '2005-02-28T17:49:13'
  content: I agree with pcal in that it's not a huge burden to annotate the methods explicitly, especially compared the lack of cleanliness with a regexp based solution for applying annotation values.  Write an eclipse or intellij plugin for TestNG where it allows you to bulk add/remove the annotations from your test methods.
  replies: []
- id: 3204
  author: chakra
  date: '2005-02-28T23:19:57'
  content: 'okay. I might be only one here but for whatever it''s worth, here is my simple critique of TestNG in general:

    * There are too many options/choices (esp with annotations in TestNG). This is a classic example of Featuritis. Developers need to rethink and eliminate those features that do not add much value.

    * TestNG team seems to forget the "goal" of the project. One might argue that the "goal" scope has  grown to accomodate more features. If that is the case see the above point.

    My honest suggestion is to treat TestNG as a good prototype and redesign it starting with proper use cases.

    Peace

    Chaka (http://jroller.com/page/cyblogue)'
  replies: []
- id: 3205
  author: chakra
  date: '2005-02-28T23:23:25'
  content: oops my name in the above comment is misspelled. it should be CHAKRA. :-)
  replies: []
- id: 3206
  author: Michal
  date: '2005-03-01T03:25:39'
  content: 'I just feel that strategy proposed by JUnit for

    marking which class or method is a test class/method

    is just far more elegant, easier to read, requires less writing and is just simpler.

    I see abolutly no profit from using annotation for that.

    Michal'
  replies: []
- id: 3207
  author: Andrew Fung
  date: '2005-03-28T00:34:40'
  content: 'Perhaps the class-annotation can point to a type that implements a particular interface that describes a condition testing method (that accepts a MethodInfo as an argument).

    It''s just offloading the problem, but implementations of this interface would be free to employ whatever heuristics makes sense for the conventions of the project.

    e.g. test that the Method is public, no arguments, exists in a class with a suffix named Test, in a package ending with a "test" namespace, etc.'
  replies: []
---

In a [previous entry](http://beust.com/weblog/weblog/archives/000250.html), I discussed an annotation design pattern called "Annotation Inheritance".  Here is another annotation design pattern that I have found quite useful.

**Class-Scoped Annotations**

This design pattern is very interesting because it doesn't have any equivalent in the Java World.

Imagine that you are creating a class that contains a lot of methods with a similar annotation.  It could be `@Test` with [TestNG](http://beust.com/weblog/testng), `@Remote` if you are using some kind of RMI tool, etc...

Adding these annotations to all your methods is not only tedious, it decreases the readability of your code and it's also quite error prone (it's very easy to create a new method and forget to add the annotation).

The idea is therefore to declare this annotation at the class level:

> @Test  
>  public class DataBaseTest {  
>    public void verifyConnection() { ... }  
>    public void insertOneRecord() { ... }  
>  }

In this example, the tool will first look on each individual method if they have an `@Test` annotation and if they don't, look up the same annotation on the declaring class.  In the end, it will act as if `@Test` was found on both on `verifyConnection()` and `insertOneRecord()`.

The question now is:  how will the tool determine which methods the class annotation should apply to?

There are three strategies we can consider:

  1. **Apply the annotations on all the methods (private, protected, public).  
**Probably not the most intuitive way.  
 
  2. **Apply the annotations only on the public methods.  
**This seems fairly intuitive to me, you just need to be careful what methods you declare public.  
 
  3. **Apply the annotations on a set of methods picked differently.  
**An interesting approach discussed further below.



Of course, we should also add another dimension to this matrix:  should the methods under consideration be only on the current class or also inherited from superclasses?  To keep things simple, I'll assume the former for now, but the latter brings some interesting possibilities as well, at the price of complexity.

Using visibility as a means to select the methods might be seen as a hack, a way to hijack a Java feature for a purpose different than what it was designed for.  Fair enough.  Then how could we tell the tool which methods the class-level annotation should apply to?

An antiquated way of doing it is using syntactical means:  a regular expression in the class-level annotation that identifies the names of the methods it should apply to:

> @Test(appliesToRegExp = "test.*")  
>  public class DataBaseTest {  
>    public void testConnection() { ... } // will receive the @Test annotation  
>    public void testInsert() { ... } // ditto  
>    public void delete() { ... } // but not this one  
>  }

The reason why I call this method "antiquated" is because that's how we used to do it in Java pre-JDK5.  This approach has a few significant flaws:

  * It forces you to obey a naming convention.
  * It makes refactoring difficult (the IDE's don't know much about the meaning of the string `"test.*"`).
  * It is not type safe (if the regular expression changes, you need to remember to rename your methods).



A cleaner, more modern way to do this is to use annotations:

> @Test(appliesToMethodsTaggedWith = Tagged.class)  
>  public class DataBaseTest {  
>    @Tagged  
>    public void verifyConnection() { ... }  
>    
>    @Tagged  
>    public void insertOneRecord() { ... }  
>  }

Of course, this solution is precisely what we wanted to avoid in the first place:  having to annotate each method separately, so it's not buying us much (it's actually more convoluted than the very first approach we started with).

So it looks like we're back to square one:  class-level annotations applying to public methods seems to be the most useful and the most intuitive to apply this pattern, and as a matter of fact, TestNG users have taken quite a liking to it.

Can you think of a better way?
