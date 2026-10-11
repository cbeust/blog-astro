---
title: JSR 175 war stories
date: '2004-04-22T14:45:08'
slug: jsr-175-war-stories
categories:
- Java
comments:
- id: 1458
  author: ''
  date: '2004-04-24T03:30:25'
  content: 'I finally answered you and add my own tips :-)

    http://blog.hibernate.org/cgi-bin/blosxom.cgi/2004/04/'
  replies: []
- id: 1460
  author: Southern Fried Java
  date: '2004-05-20T07:49:41'
  content: '<strong>Metadata for Struts & Hibernate</strong>

    Recent entries from  Emmanuel  and  Cedric  have me seriously thinking about the long term impact of JSR 175, the standard metadata interface for Java.  I don''t think the average user will have much use for defining their own metadata interfaces, but I do'
  replies: []
- id: 1461
  author: Southern Fried Java
  date: '2004-05-20T07:49:55'
  content: '<strong>Hibernate Metadata Explored</strong>

    JSR-175, standardized metadata, may have more potential to simplify configuration of Hibernate than of Struts.  Why do I say this?

    Hibernate has a one-to-one relationship between mapped objects and mapping files.

    Shortcomings in XDoclet make it im'
  replies: []
- id: 1459
  author: Robin
  date: '2005-05-19T23:12:48'
  content: 'Hey,

    Thanx a lot. I actually got what I needed. ur article has cleared out a few things for me.Thanx'
  replies: []
---

After making [such a comment](http://theserverside.com/news/thread.tss?thread_id=25448#119192), and [being called on it](http://theserverside.com/news/thread.tss?thread_id=25448#119211), I had to step up to the plate.

I have been working with JSR 175 quite a lot these past months and I have identified the following points of interest:

  * Shortcut notation.
  * Defaults.
  * Multiple annotations.



Let me go through this list in order.

**Shortcut notation**

If the annotation type you are defining only needs one value (or none at all), the syntax can be simplified by using a shortcut notation.  You define that your annotation type supports this notation by providing only one annotation called "value()":

public @interface Algorithm {  
  String value();    
} 

Then you can use any of the following constructions:

@Algorithm(value = "RoundRobin")  
public class MyRobin { 

or more simply:

@Algorithm("RoundRobin")  
public class MyRobin { 

Note that the following is incorrect:

@Algorithm  
public class MyRobin { 

because value() doesn't have a default value (i.e. it is required).  In order to make this syntax valid, you would need to define your annotation type as follows:

public @interface Algorithm {  
  String value() default "LastInFirstOut";  
} 

Which brings me to...

**Defaults**

JSR 175 distinguishes a mandatory annotation from an optional one with the "default" keyword.  For example:

> public @interface Person {  
>    // name is required  
>    String name();  
>    
>    // but the date of birth is optional  
>    String dateOfBirth() default "";  
>  } 

With this type, I can now annotate my code like this:

> @Person(name = "Cedric")  
>  public class Employee {  
>  } 

or

> @Person(name = "Cedric", dateOfBirth = "January 2nd, 1969")  
>  public class Employee {  
>  } 

but not like this: 

> // error, missing required annotation "name"  
>  @Person(dateOfBirth = "January 2nd, 1969")   
>  public class Employee {  
>  } 

It sounds all good and well until you realize that "null" is not a valid defaut value.  The problem with that is that tools using metadata often need to know whether the value they are receiving is the default value (meaning:  the user didn't specify anything and the tool needs to provide its own) or not (in which case, they need to retain that value).

As you probably all know, none of the java.lang types have an official default value, so you will have to come up with one.  It can be pretty easy for strings (how about "Unspecified"?), a bit more dangerous for numerics ("new Integer(57381234123)") but where it gets ugly is for booleans.

The problem with booleans is that they only have two values, true and false, so using one as a default is not enough for the tool to be able to tell whether the value it received is a default or if it was specified by the user.

The trick I have been using for now is creating my own enum "Bool":

> enum Bool { UNSPECIFIED, TRUE, FALSE } 

There are a few things ugly about this solution:

  * I have to come up with my own (and probably incompatible with everybody else) type name.
  * I can't use "true" nor "false" since they are reserved keywords.
  * Standard conventions dictate that the enum values should be all caps.



Unfortunately, it's the only way I have found to circumvent this problem.

Now, all this is not so bad because what is being surfaced to the user is fairly minimal.  Basically, except for the fact that they need to know about the "Bool" type and TRUE and FALSE, all the rest is fairly transparent.  All this dirty business with singular values representing the defaults is strictly between the annotation author and the code that will consume these annotations.

For example, let's add a boolean field to our Person annotation above:

> import Bool;  
>    
>  public @interface Person {  
>    // name is required  
>    String name();  
>    
>    // but the date of birth is optional  
>    String dateOfBirth() default "";  
>    
>    // optional boolean  
>    Bool isRegistered() default Bool.UNSPECIFIED;  
>  }

Granted, it doesn't look that good, but your users only need to write the following:

> import Bool;  
>  import Person;  
>    
>  @Person(name = "Cedric", isRegistered = Bool.TRUE)  
> public class Employee {  
> }

Note that static imports can make things a little bit more legible:

> import static Bool.TRUE;  
>  import Person;  
>    
>  @Person(name = "Cedric", isRegistered = TRUE)  
> public class Employee {  
> }

at the risk of possible name conflicts.

**Multiple annotations**

A common misconception from people who read the JSR 175 specification a little too fast is the idea that it is impossible to have an annotation appear several times.

Strictly speaking, this is true, but it's pretty easy to circumvent:  use arrays.

For example, consider the following annotation:

> public @interface EnvEntry {  
>    String name();  
>    String value();  
>  }

And we want this annotation to be allowed to appear several times in a class file.  A simple way to achieve this is by introducing a holder type:

> public @interface EnvEntries {  
>    EnvEntry[] value();  
>  }

Note that the holder uses the shortcut notation, which makes the final result quite readable:

@EnvEntries({  
  @EnvEntry(name = "height", value = "1m80"),  
  @EnvEntry(name = "weight", value = "75kg")  
})

**Conclusion**

After describing all these little annoying sides of JSR 175, I don't want to leave readers with the impression that the specification is flawed or unusable.  Quite the contrary.

I believe JSR 175 is going to change radically the way we program and I am betting that in a couple of years from now, all the Java source code we read and write on a daily basis will contain annotations.

The syntax will undoubtedly look foreign to you at first sight, but I am confident that it will grow on you as you use it.  It sure had this effect on me.  Also, wait until we get some decent support for annotations in IDE's (code folding, coloring, etc...) and you won't even notice it's there any more.
