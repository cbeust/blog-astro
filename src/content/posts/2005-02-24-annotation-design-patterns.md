---
title: Annotation design patterns
date: '2005-02-24T09:19:12'
slug: annotation-design-patterns
categories:
- Java
comments:
- id: 3188
  author: Noah Campbell
  date: '2005-02-24T10:22:24'
  content: 'Just to clarify...in your first example, your Test class has no annotations.  If I wanted all the defaults from the base class to be present, all I need to do is add

    @Author

    public class Test ...'
  replies: []
- id: 3189
  author: Cedric
  date: '2005-02-24T12:22:27'
  content: 'Sorry, no, Noah.  Try the following:

    import java.lang.annotation.*;

    @Retention(java.lang.annotation.RetentionPolicy.RUNTIME)

    public @interface Date {

    public String name() default "";

    public String date() default "";

    }

    import java.lang.annotation.*;

    @Date(name="Cedric", date="Today")

    class Base {

    }

    @Date

    public class A extends Base {

    public static void main(String[] argv) {

    Annotation[] annotations = A.class.getAnnotations();

    System.out.println("Annotations: " + annotations.length);

    Date d = (Date) annotations[0];

    System.out.println("Name:" + d.name());

    }

    }

    C:\t>javac -d . A.java Date.java && java -classpath . A

    Annotations: 1

    Name:'
  replies: []
- id: 3190
  author: Bruce Chapman
  date: '2005-02-24T14:46:47'
  content: 'A little simplistic Cedric but some interesting concepts.

    the first problem is that

    @Author(date = "February 26th, 2005")

    will generate a compiler error because the element lastName is not specified and it does not have a default clause in the definition of @Author, so you can''t actually omit it.

    If you solve that problem by specifying defaults in the declaration of Author, then you might still be stuck because you might not be able to determine whether an element (like lastName in your last example) was ommitted, or was actually explicitly set to its default value. It all depends on the API you are using. With com.sun.mirror and com.sun.javadoc you can make the distinction, with java.lang.reflect you cannot.

    To solve that you could look up the default value, and if the annotation''s value was the default you could ASSUME it was unspecified (and therefore should inherit the value declared in super), but that assumption might be wrong.

    You can make the assumption less likely to be wrong by making the default value something ridiculously meaningless, or something that is actually semantically invalid (to your application not to the compiler). All you have to do in the processing is to convert the declared default value, to the semantic default value when processing, (or cry foul if a value must be specified somewhere, that is if at the application level there is no default, even though at the implementation level there is).

    You could possibly write a general purpose method to do partial inheritance processing. Element declarations in an annotation type can themselves be annotated, so you could tell the processing algorithm what the application level default value was with an annotation.

    /**

    An annotation for annotation type members, specifying how the Partial Inheritance processor should process annotations of the target''s enclosing annotation type.

    */

    @Target(METHOD)

    @interface PartialInheritance {

    /**

    set to true if the processor needs to generate an error if no value for the target is specified in any of the declared or inherited annotations.

    */

    boolean noRealDefault() default false;

    /**

    The target element''s declared default value is used to detect whether the element value is being over-ridden or not and should not be a meaningful value. If a value is not specified in  any of the declared or inherited annotations, then the value of this element, not the target''s default will be taken as the value by the   Partial Inheritance mechanism.

    */

    String realDefaultString() default "";

    }

    @interface Author {

    /**

    The last name, if not specified, the value is inherited from superclass, if no inherited value is available either, the lastName is considered to be ""

    */

    @PartialInheritance(realDefaultString="")

    public String lastName() default "~@~";

    /**

    The date. if not specified, the value must be inherited from a superclass''s @Author.

    */

    @PartialInheritance(noRealDefault=true)

    public String date() default "~@~";

    }'
  replies: []
- id: 3191
  author: mac
  date: '2005-02-25T00:21:29'
  content: 'Applying " Inheritance" or "Partial Inheritance" mecanism to non Object Oriented concept

    can drive to confusing code and become really dangerous (especially for Java programming).

    Annotation enables object class improvement by attribute oriented programming concepts. That''s enough.'
  replies: []
- id: 3192
  author: Michal
  date: '2005-02-25T01:23:50'
  content: '>

    I fully agree mac.

    What''s funny for me is that "EJB3 guys" are heavily using annotations or at least they are trying to do this as this is still a work in progress. And in the same time even when they are not ready with that they are already claiming that normal object inheritance and "POJO" model finally will be supported and programming model will be simpler to understand.

    Taking into account two facts:

    a) Inheritance is not always the best programming technique - composition often works better.

    b) Inheritance of annotation or other metadata (e.g. specified or overridden  in XML files) is not natural and it requires quite precise description of what''s happening. This can lead to proliferation of rules which must be followed and instead of making things simpler it can make them harder as specs simply must be more complicated as they have to describe unnatural programming model.

    So at least it is surprising to see claims that "normal inherence" will be supported in any programming model which relays heavily on metaadat (including annotations). There is no such thing like "normal" inheritence of metadata. I just find it much safer and simpler not to try to apply concepts like inheritance to metadata as this can easily changed code into a mess.

    Michal'
  replies: []
- id: 3193
  author: Mocky Habeeb
  date: '2005-02-25T07:20:50'
  content: 'I''m not sure I agree with mac. Metadata may be a non object oriented concept, but in Java annotations are attached to object oriented constructs. They belong to the class (or feature) they are defined in. Fields and methods also belong to the class they are defined in and they can be inherited. Why shouldn''t annotations be inherited according to the same rules that are already well understood by Java developers? That is one of the first things that occured to me when I was first learning about Java annotations, "so I can attach one of these to one of my Classes and read it back at runtime, cool... but it won''t get inherited, hmmm.."

    And it doesn''t seem that confusing to me as far as using annotations that can be inherited. The only confusing part that I can see would be writing tool or framework that has to correctly infer inheritance where none ''really'' exists. I would have rather seen it as part of the official release because I''m not sure that widespread use of both inheritable and standard annotations would be a good thing. For instance what if a framework I use enables inheriting annotations that it processes. If I add my own annotations that the framwork knows nothing about then I have classes with both types in it. That sounds like trouble to me.

    But I don''t buy the "it''s not OO, leave it alone" argument: a big part of OO is rolling different language features into a Class and handling them in a consistent way. And as far as `Applying " Inheritance" or "Partial Inheritance" mecanism` : thats how everything else is done in Java so why not just phrase it `Applying the standard Java inheritance mecanism`'
  replies: []
- id: 3194
  author: Bruce Chapman
  date: '2005-02-25T15:45:22'
  content: 'Actually Annotations do support Inheritance of a kind.

    That kind though is that an annotation can be declared (using the meta-annotation @Inherited) to be inherited from classes to subclasses ONLY. Unfortunately (IMHO) many of the useful applications of inheritance would be inheriting from interfaces and JSR-175''s inheritance mechanism does not allow this.

    Also the inheritance is a full inheritance, not the partial inheritance that Cedric discusses, and this, combined with the fact that we cannot extend an annotation type (therefore making our own similar annotation, being a kind of the other) and define different default values, makes annotations considerably less useful than they might otherwise be.

    Given these limitations in JSR-175 The concept of partial inheritance has proven useful to Cedric, and I can understand why. Since my comment yesterday I have written a meta-annotation for member elements, and a java.lang.reflect processing engine that can (for the examples above) return an Author object that exhibits the sort of partial inheritance Cedric discussed. This engine is general purpose and not restricted to one particular annotation type.'
  replies: []
- id: 3195
  author: Ali Naqvi
  date: '2005-03-02T17:51:16'
  content: 'Annotations do support Inheritance

    through meta annotation (@Inherited).

    As can be seen from the listing below:

    import java.lang.annotation.*;

    @Inherited

    public @interface Author {

    public String lastName();

    public String date();

    }

    @Author(lastName = "Beust", date = "February 25th, 2005")

    class BaseTest {

    }

    class Test extends BaseTest {

    public static void main(String[] args){

    if(Test.class.isAnnotationPresent(Author.class)) {

    System.out.println("Annotation supports inheritance");

    System.out.println(Test.class.getAnnotation(Author.class));

    }

    else

    System.out.println("No Annotation Inheritance supported");

    }

    }

    When run it produces output like this

    Annotation supports inheritance

    @Author(lastName=Beust, date=February 25th, 2005)'
  replies: []
---

Throughout my work with EJBGen, EJB3 and TestNG, I have identified a couple of annotation-related patterns that have proven to be quite powerful.  They are called "Annotation inheritance" and "Class-scoped annotations".

**Annotation Inheritance**

The idea is simply to extend the familiar inheritance mechanisms to annotations.  Consider the following annotation:

> public @interface Author {  
>    public String lastName();  
>    public String date();  
>  }

And an example use:

> @Author(lastName = "Beust", date = "February 25th, 2005")  
>  public class BaseTest {  
>  // ...  
>  }  
>    
>  public class Test extends BaseTest {  
>  // ...  
>  }

If you try to look up annotations on the `Test` class using the standard reflection API, you will find none, since inheritance is not supported by JSR-175 (I submitted the idea but it was decided to keep the specification simple and leave this kind of behavior to tools, which is exactly what we are doing right now).

A tool using this pattern would therefore see an `@Author` annotation on both `BaseTest` and `Test`.

Since we follow the same overriding rules as Java, inheritance would also work on methods that have identical names and signatures.

Where things get interesting is when you start considering "partial inheritance" (or partial overriding).  Consider the following:

> @Author(lastName = "Beust", date = "February 25th, 2005")  
>  public class BaseTest {  
>  // ...  
>  }  
>    
>  @Author(date = "February 26th, 2005")  
>  public class Test extends BaseTest {  
>  // ...  
>  }

This time, the class `Test` is overriding the `@Author` annotation but only partially.  Obviously, the `date` attribute in the `@Author` annotation will return "February 26th, 2005", but what is the value of `name`?  Should it be `null` or `"Beust"`?

My experience seems to indicate that while not necessarily the most intuitive, the latter form (partial overriding) is the one that is the most powerful.  Partial overriding is a very effective way to implement "Programming by Defaults", which is a way of saying that you provide code with defaults that do the right thing for 80% of the cases. 

Basically, all you need to do to provide these defaults is to store these annotations on a base class and require client code to extend these base classes.  Clients are then free to either override already-defined attributes or add their own, and the tool will gather all the attributes by collecting them throughout the inheritance hierarchy, starting from the subclass and working its way up to the base classes.

In a next entry, I will describe the Class-Scoped Annotation pattern, and more importantly, how it can be combined with Annotation Inheritance to create some very elegant constructs.
