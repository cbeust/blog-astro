---
title: Mysterious operator
date: '2005-12-26T07:02:51'
slug: mysterious-operator
categories:
- Java
comments:
- id: 4631
  author: Damien B
  date: '2005-12-27T08:19:24'
  content: I use them when I have to reproduce in code the result of an analysis made from a Karnaugh map, and I use them only with previously calculated boolean variables. The final expression is very compact and not easy to read, but it's not meant to be read without the map. The use of '&' or '|' in that case is still more readable than using '&&' or '||', because the boolean variable are named with a single character, and it's not good when the operator is longer than the variable. Plus, it acts as a strong signal for the reader that the complexity of the expression lies more in boolean algebra than from the methods called.
  replies: []
- id: 4632
  author: Tom Hawtin
  date: '2005-12-27T10:15:30'
  content: '&= and |= are probably used more often than & and |.

    In certain simple contexts, & and | may run faster than && and ||.'
  replies: []
- id: 4633
  author: Alex Blewitt
  date: '2005-12-27T10:27:59'
  content: 'You can also have:

    boolean test = (a ? b : false);

    if you want to be really vague for your ''and'' operators. In this case, the second argument (b) is only evaluated once if the first test (a) is true. A similar expression holds for ''or''.'
  replies: []
- id: 4634
  author: ''
  date: '2005-12-27T16:07:27'
  content: 'I used this construct for the semantic document validation.  Assume there are 3 independent checks to be made.  If the first validation fails and the failure is not fatal, you want to continue with the validation and to send a reply enumerating ALL errors at once.  The validation check should be: isValid = checkA() & checkB & checkC().  Short-circuiting is not appropriate.  Or, you can use a loop if the number od checks is not fixed.'
  replies: []
- id: 4635
  author: Rodrigo Kumpera
  date: '2005-12-28T08:47:00'
  content: 'The bitwise operators should be a lot faster than the logical ones when the left side expression is very simple.

    This is true today, but not a decade ago, and it''s a matter of knowing how a CPU works. Modern CPUs have very deep pipelines, so branches have a very hight cost, this was not the case for the 80386.

    Given "a() && b()" x "a() & b()" the result should be something like:

    "a() && b()"

    invoke a()

    if false branch to "else clause"

    invoke b()

    if false branch to "else clause"

    "a() & b()"

    a = invoke a()

    b = invoke b()

    test a b

    if false branch to "else clause"

    The generated code will be about the same size, and given that the code for b() is short any branch misprediction of the first test will cause enouth stall to make the bitwise version to perform better.

    As this is a peephole optimization I must say that  it doesn''t justify it''s use enouth and likely others have said, the &=, |= forms are more frequent and userfull.'
  replies: []
- id: 4636
  author: Ron
  date: '2005-12-30T10:04:32'
  content: 'findbugs flags uses of &

    it''s neat, but I sure don''t have a use for it.'
  replies: []
- id: 4637
  author: Ajith Kallambella
  date: '2006-01-04T12:02:15'
  content: 'I believe the third & operator is a serendipity. It is an interesting side effect of how Java language treats boolean types. The language lacks a true boolean type, and most compilers encode them as ints( or short, byte in some cases, but all upcastable to an int). As a result, the bitwise & and | works with boolean operands.

    The JVM spec says that "There are no Java virtual machine instructions solely dedicated to operations on boolean values.".'
  replies: []
- id: 4638
  author: Cameron
  date: '2006-01-09T19:28:27'
  content: '> The language lacks a true boolean type

    Incorrect. The Java language _does_ have a boolean type, but the JVM specification does not go out of its way to provide special support for it.

    Peace.'
  replies: []
- id: 4639
  author: Cameron
  date: '2006-01-09T19:29:11'
  content: '-- "The language lacks a true boolean type"

    The Java language _does_ have a boolean type, but the JVM specification does not go out of its way to provide special support for it.

    Peace.'
  replies: []
- id: 4640
  author: Porek
  date: '2006-11-19T11:54:45'
  content: taste of home modular home home appraisal dealer home mobile rental home electronics home buying home care foreclosure home home shopping home theater better home and garden home builder adult novelties google home diabetic Handbags home improvement new apartment home home renovation home depot canada
  replies: []
- id: 4641
  author: footmania
  date: '2007-01-06T19:06:59'
  content: The bewildered scientist struck the match in a narrow tunnel to discover the dark secret.
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/and.jpg)

Did you know that Java has three `"and"` operators?

First, there is the very common `logical and`:  `&&:`

> if (x >= min && x <= max) { ... }

Then, there is the `bitwise and` operator, which very few programmers will probably ever use:

> if (x & 1 != 0) { ... }

And finally, there is...

> public static boolean isBetween(int x, int min, int max) {  
>    boolean result = (x >= min) & (x <= max);  
>    return result;  
>  }

Take a close look at this code.  The expression calculated for ` result` uses what looks like the `bitwise and` operator, and yet it seems to operate on boolean values (respectively `x >= min` and `x <= max`) and not scalar ones. 

There are actually two startling things in this code:

  1. `&` operating on booleans.
  2. The result of `&` being a boolean, and not a scalar.



The solution to the puzzle is given in the Java Language Specification, chapter 15.22.2:

> #### 15.22.2 Boolean Logical Operators &, ^, and |
> 
> When both operands of a `&`, `^`, or `|` operator are of type `boolean`, then the type of the bitwise operator expression is `boolean`.  
>  For `&`, the result value is `true` if both operand values are `true`; otherwise, the result is `false`.  
>  For `^`, the result value is `true` if the operand values are different; otherwise, the result is `false`.  
>  For `|`, the result value is `false` if both operand values are `false`; otherwise, the result is `true`.

For all intents and purposes, it looks like the `boolean logical &` operator is exactly similar to the `logical &&` operator.  Is that so?  Not really.  If you run the following program:

> public static boolean f() {  
>    System.out.println("false");  
>    return false;  
>  }  
>    
>  public static void main(String[] args) {  
>    System.out.println("&&");  
>    boolean a = f() && f();  
>    System.out.println("&");  
>    boolean b = f() & f();  
>  }

You will get the following result:

> &&  
>  false  
>  &  
>  false  
>  false

As you can see, `&&` will skip the second expression if the first expression is false (because at this point, it knows that the overall result will be false, so there is no point in evaluating the remainder of the expression) while `&` will always evaluate all its operands.  Similarly, `||` will stop evaluating its operands as soon as one is found to be true while `|` will always evaluate all of them.

Not surprisingly, logical operators are the most useful because not only do they typically run faster than their boolean counterparts, they also allow to write convenient expressions:

> if (p != null && p.hasChildren()) { ... }

With that in mind, when would you want to use a boolean logical `&` or `|` operator?

The theoretical answer is:  whenever your code depends on side effects performed by the operators involved in the expression and you want to make sure that all of them are invoked, regardless of the final result of the expression.

Why do I say "theoretical"?  Such code would probably qualify as a design smell because having methods that return a value **and** perform side effects are usually frowned upon.  Having said that, it is not an absolute rule and I have found myself having to do this a few times, so I would rather discourage the use of boolean logical operators for a totally different reason:  don't use them because they will confuse readers of your code.

Can someone come up with a convincing use for a boolean logical operator?
