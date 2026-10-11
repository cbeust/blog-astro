---
title: Fantom and Haskell
date: '2010-08-04T07:43:03'
slug: fantom-and-haskell
categories:
- General
comments:
- id: 8348
  author: Daniel Spiewak
  date: '2010-08-04T08:17:53'
  content: 'http://stackoverflow.com/questions/1538964/code-golf-reverse-polish-notation-postfix-evaluator

    Not all of the solutions using the functional technique (as would be expected, since most of the languages are not functional), but it''s still an interesting menagerie.'
  replies: []
- id: 8349
  author: Dan
  date: '2010-08-04T08:30:08'
  content: "def solveRPN(s:String) = {\n  s.split(\"\\\\s+\").toList.foldLeft[List[String]](Nil){\n    case (x :: y :: ys, \"*\") =&gt; (x.toInt * y.toInt).toString :: ys\n    case (x :: y :: ys, \"+\") =&gt; (x.toInt + y.toInt).toString :: ys\n    case (x :: y :: ys, \"-\") =&gt; (x.toInt - y.toInt).toString :: ys\n    case (xs, numberString) =&gt; numberString :: xs\n  }\n}\nsolveRPN(\"8 1 2 + 5 * + *\") //isn't the * on the end extra...?"
  replies: []
- id: 8350
  author: Cedric
  date: '2010-08-04T08:32:02'
  content: 'Dan(#2): indeed there was an extra ''*'', thanks.'
  replies: []
- id: 8351
  author: ScalaNoob
  date: '2010-08-04T08:33:08'
  content: http://ideone.com/VXR8f
  replies: []
- id: 8352
  author: ScalaNoob
  date: '2010-08-04T08:40:07'
  content: 'Sorry maahn, herez another try:

    http://ideone.com/TcxEF'
  replies: []
- id: 8353
  author: David Gageot
  date: '2010-08-04T09:17:56'
  content: "I tried with Ioke:\nfoldingFunction=method(sum, x,\n\tcase(x,\n\t\t\"+\", [sum pop! + sum pop!],\n\t\t\"*\", [sum pop! * sum pop!],\n\t\t\"-\", [sum pop! - sum pop!],\n\t\t\"/\", [sum pop! / sum pop!],\n\t\t[x toRational]\n\t) + sum\n)\n\"8 1 2 + 5 * +\" split fold([], sum, x, foldingFunction(sum, x)) println"
  replies: []
- id: 8354
  author: David Gageot
  date: '2010-08-04T09:18:34'
  content: 'With proper format: http://gist.github.com/508548'
  replies: []
- id: 8355
  author: Keith Gaughan
  date: '2010-08-05T03:29:50'
  content: '<blockquote>I would be curious to investigate the performance implications of this behavior because no matter how aggressive Haskell''s garbage collector is, it feels like this approach will never be able to compete with a program that modifies the same variable.</blockquote>

    Pure conjecture here, but given Haskell''s lazy nature, it''s likely the list gets optimised out of existence. I haven''t tested that hypothesis, mind.'
  replies: []
- id: 8356
  author: Java Bien! &raquo; Fun with the RPN calcultor in Ioke
  date: '2010-08-06T11:20:02'
  content: '[...] this article, C??dric Beust explains how to port a RPN calculator from Haskell to Fantom. It could have made me [...]'
  replies: []
- id: 8357
  author: Mila
  date: '2012-02-26T03:03:59'
  content: I tried with Ioke:fidolngFunction=method(sum, x,case(x, + , [sum pop! + sum pop!], * , [sum pop! * sum pop!], - , [sum pop! - sum pop!], / , [sum pop! / sum pop!],[x toRational]) + sum) 8 1 2 + 5 * +  split fold([], sum, x, fidolngFunction(sum, x)) println
  replies: []
---

I recently decided to go over some of the Haskell examples from the ["Learn you a Haskell" web site](http://learnyouahaskell.com/) and port them to [Fantom](http://fantom.org). 

The first one I worked on is the [RPN calculator](http://learnyouahaskell.com/functionally-solving-problems). Here is the Haskell version: 
    
    
    solveRPN :: (Num a, Read a) => String -> a
    solveRPN = head . foldl foldingFunction [] . words
        where   foldingFunction (x:y:ys) "*" = (x * y):ys
                foldingFunction (x:y:ys) "+" = (x + y):ys
                foldingFunction (x:y:ys) "-" = (y - x):ys
                foldingFunction xs numberString = read numberString:xs
    

There is a lot going on in this small snippet, so if you're not familiar with Haskell, here is a brief explanation. 

The signature of this function is `String -> a`, which means that it takes takes a string and it returns a parameter of a generic type called `a`. This generic type is constrained by the clause that precedes the signature, `(Num a, Read a)`, which basically says that `a` has to be a number. 

The implementation of the function is on the next line and it starts by composing (the dot operator) several operations: `head`, `foldl` and `words`. The important part is `foldl`, which I'll get back to in a second.  `foldingFunction` is a function that is also the first parameter passed to the mysterious function `foldl`. `foldingFunction` is defined by pattern matching. The type of this function is not clearly specified in this code because Haskell can infer it based on that definition. The four lines that make this specification tell us that this function takes a list and a string (which only contains one character, the operator) and that it returns a list. 

The short version of it is that if the list is made of "x", "y" and "the rest" and that the operator is "*", then the function will return a list made of the product of x and y followed by "the rest". In effect, this is the operation of "folding", although I find this name misleading since this operation can actually return a list that's longer than the one we started with. 

The heart of this implementation is the `foldl` function, which is short for "fold left". I don't think I could explain this better than the Haskell Wiki so I'll just [refer you there](http://www.haskell.org/haskellwiki/Fold). It's a quick read and I suggest you take a few minutes to click that link before reading further. 

The trick that is important to understand before trying to port this function in Fantom was to understand exactly how `foldl` was being used. The folding operation acts on a list and it takes an initial value and a closure. `fold` takes each element of the list in turn, passes it to the closure along with the initial value, takes the return value and makes *that* the new initial value. 

The code snippets that you will see in manuals will often use a simple type for the initial value, such as integer, which is used to accumulate values as the calculations go through the list: 
    
    
    foldl (+) 0 [1,2,3] => 6
    

The important part here is to realize that the folding function is polymorphic and that the type of this accumulator can be anything. The only constraint is that the closure's return type needs to be similar to that of the accumulator. This may seem obvious since that return value will be passed to the next closure call, but keep this in mind as we move forward. 

For example, the simplest closure signature would be `(int, int) -> int` (using a pseudo notation for a method signature). But nothing stops you from having `(char, int) -> char` or `(Person, int) -> Person`. Again, the only constraint is that the accumulator (first parameter) and the return types need to be similar (or compatible, but let's keep things simple). 

Revisiting the `foldingFunction` above, you will realize that the accumulator type is an entire list. And the return type is, of course, a list as well. This list will sometimes grow and sometimes shrink. If the next symbol encountered in the input is a number, then that number will be added to the list. But if that symbol is an operator, then that operator will be applied to the first two elements of the list, which will be replaced by the result: 
    
    
    foldingFunction([3, 5], "2")    -> [2 3 5]
    foldingFunction([2, 3, 5], "*") -> [6, 5]
    

As it turns out, Fantom's `List` class has a folding function, and it's called `reduce`, so here is the Fantom version: 
    
    
    foldingFunction := | Int[] n, Str p -> Int[] | {
      echo("n:" + n)
      switch(p) {
        case "*" : return n.push(n.pop * n.pop)
        case "+" : return n.push(n.pop + n.pop)
        case "-" : return n.push(n.pop - n.pop)
        case "/" : return n.push(n.pop / n.pop)
        default: return n.push(p.toInt)
      }
    };
    "8 1 2 + 5 * +".split.reduce([,], foldingFunction)
    

Here is the output: 
    
    
    n:[,]
    n:[8]
    n:[8, 1]
    n:[8, 1, 2]
    n:[8, 3]
    n:[8, 3, 5]
    n:[8, 15]
    

Let's start with the last line of the code, which splits the input into a list containing each individual symbol and then invokes the `reduce` method with an empty list as the initial value for the accumulator and the folding function defined above. 

Fantom's type inference is not as sophisticated as Haskell's so we find ourselves having to specify the type of the closure before we define it. This type is between the vertical bars and it should come as no surprise that the closure takes a list and a string and that it returns a list. This is really the only hard part of that example, the rest is a simple switch/case that modifies the list passed in parameter according to the same algorithm described above. 

The two versions of this code look reasonably similar but their semantics differ in very significant ways. I'll just discuss two of these differences. 

First of all, Haskell always returns a new list while Fantom mutates the same accumulator over and over. I would be curious to investigate the performance implications of this behavior because no matter how aggressive Haskell's garbage collector is, it feels like this approach will never be able to compete with a program that modifies the same variable. Of course, the downside of Fantom's approach is that parallelizing this algorithm in Fantom would require some locking. 

Another difference is in the way the two languages perform their branching. Fantom is using a classical switch/case (note: on a string, a comfort that future JDK7 users will soon be able to enjoy) while Haskell is using pattern matching and leveraging its built-in list support to represent both the selection and the action. Obviously, this example is a particularly good fit for Haskell since both the input and the output of the problem are a list. 

Feel free to implement this problem with your own favorite language and post or link your code in the comments, it would be interesting to see various versions of this simple list quiz.
