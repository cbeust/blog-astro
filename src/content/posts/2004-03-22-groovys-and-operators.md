---
title: Groovy's -> and . operators
date: '2004-03-22T09:48:58'
slug: groovys-and-operators
categories:
- Java
comments:
- id: 1365
  author: tjansen
  date: '2004-03-22T11:12:55'
  content: 'IMHO a better solution is to forbid null in  variables (local vars, arguments, return values etc). Usually you need null only in a few rare cases, an most of the time to flag a "not a value here". Those few variables that allow null need to be flagged with a question flag, like "TypeName varName?".

    This solves several problems. One of them is that if you forbid nulls you can really have a simple "everything is an object" model without dealing with nulls in ints or those annoying autoboxing kludges. Another problem is that you do not need to check every method argument for null in clean APIs. You can also remove all "this argument must not be null" or "throws a NPE if the argument is null" sentences from the documentation.'
  replies: []
- id: 1366
  author: Cedric
  date: '2004-03-22T11:25:48'
  content: 'The problem with this approach is that it only works for variables.  How about

    getCompany().getCeo().geFirstName()

    ?'
  replies: []
- id: 1367
  author: Eugene
  date: '2004-03-22T11:59:56'
  content: 'I think that having two different ways to do references is strange. If you force the developer to make the explicit choice anyway, why the special syntax? Seems like the following would work just as well...

    String name = NPE(getCompany().getCeo().getFirstName())'
  replies: []
- id: 1368
  author: Eugene
  date: '2004-03-22T12:00:02'
  content: 'I think that having two different ways to do references is strange. If you force the developer to make the explicit choice anyway, why the special syntax? Seems like the following would work just as well...

    String name = NPE(getCompany().getCeo().getFirstName())'
  replies: []
- id: 1369
  author: Julian
  date: '2004-03-24T05:17:02'
  content: 'In Java, I''ve always wanted the ability to define a static method that applies when the object is null.

    public null int size    {return 0;}

    Then you could always say foo.size(), whether or not foo is null.

    This change is backwards compatible, since methods will continue to throw NullPointerExceptions if you don''t define a null method. You simply provide explicit null behavior for particular methods.'
  replies: []
- id: 1370
  author: Rob
  date: '2004-03-31T10:51:40'
  content: 'There is a difference between "." and "->" in C++: "->" can be overloaded. This ends up meaning that the compiler _cannot_ always determine which one is appropriate

    Given that one is coding in C++, being able to overload "->" is very useful. Why? It allows one to write "smart pointer" classes that can be used semantically just like regular pointers. These can provide exception-safe heap management, or could also, for example, do automatic reference counting.

    So say I have a smart-pointer template class Pointer that overloads "->", and some other class Obj, both of which have a method called Release():

    Pointer &lt Obj &gt objPtr = Obj::Create();

    // This calls Obj::Release()

    objPtr->Release();

    // This calls Pointer::Release()

    objPtr.Release();

    If C++ only had "." or "->", this would not be possible. Please note that I''m not trying to start a debate on the merits of operator overloading or C++ here. I''m sure that the above problem could be solved other ways, such as adding some automatic heap management to C++ so that the smart-pointers are not necessary. I''m just trying to clarify how "." and "->" are _currently_ different, and why.'
  replies: []
---

I need to take back a few things that I said in my previous entry.  I have been thinking a bit more about Groovy's "." and "->" operators and I am realizing that not only is my comparison with C/C++ and automatic unboxing unfair, but that these operators can actually be quite useful.  Allow me to expand.

The problem I have with the C/C++ version of these operators is that they give you the illusion of choice.  The reality is different:  at any time, there is only one operator that is valid, and using the wrong one will result in a compilation error.  Therefore, I find it stupid to put the burden of getting it right on the developer when the compiler could infer the right operator itself.

Similarly, my comparison with auto unboxing is unfair in the sense that automatic unboxing happens behind the scenes.  There is no obvious pointer being dereferenced and receiving a NullPointerException will undoubtedly confuse developers for quite a while.

Things are very different with Groovy's operators and they are actually the manifestation of a fundamental design decision when you write your code:  is it okay to have a null pointer here or not?

In Java, you make this decision by using the code

> String name = null;  
>  if (null != customer) {  
>    name = customer.getName();  
>  } 

or

> assert null != customer : "Customer shouldn't null"  
>  String name = customer.getName(); 

I don't know about you, but I make these design decisions all the time in my code, and nested null tests can indeed become very confusing and hard to read.  And this is the part I was not getting:  Groovy's operators are simply syntactic sugar on top of a design decision.  You remain in control and once you've made your choice, you are pretty much guaranteed to write your code in the most concise way possible.

I guess it means I like it after all.
