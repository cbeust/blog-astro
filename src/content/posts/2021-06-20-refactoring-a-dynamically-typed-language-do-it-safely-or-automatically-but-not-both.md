---
title: 'Refactoring a dynamically typed language: do it safely or automatically, but not both'
date: '2021-06-20T20:17:24'
slug: refactoring-a-dynamically-typed-language-do-it-safely-or-automatically-but-not-both
categories:
- Uncategorized
comments:
- id: 10807
  author: matklad
  date: '2021-06-21T05:40:38'
  content: "This misses a \"what about smalltalk?\" footnote. Let me try to provide it.\r\n\r\nWhat about smalltalk? They pioneered refactoring, and smalltalk was a dynamic language, so automated refactoring should be possible in dynamic languages, right?\r\n\r\nThe Refactoring Browser is described in A Refactoring Tool for Smalltalk\r\npaper. Crucially, it depends on *runtime* facilities. From section 6.3:\r\n\r\n&gt;To perform the rename method refactoring dynamically, the Refactoring Browser renames the initial method and then puts a method wrapper on the original method. As the program runs, the wrapper detects sites that call the original method. Whenever a call to the old method is detected, the method wrapper suspends execution of the program, goes up the call stack to the sender and changes the source code to refer to the new, renamed method. Therefore, as the program is exercised, it converges towards a correctly refactored program.\r\n\r\nThat is, refactoring dynamic languages\
    \ correctly is possible if you have a test suite with good coverage, and refactoring performance I depends on the time required to run this suite.\r\n\r\nAdditionally, smalltalk family of languages is interesting in that parameter names are essentially a part of method's name, so a simple \"name matching\" works reasonably well, as there are far fewer conflicts with such long names."
  replies: []
- id: 10812
  author: Tom Ritchford
  date: '2021-06-21T12:58:34'
  content: Python has rather nice type annotations - they're simply optional, and not checked at runtime.
  replies: []
- id: 10815
  author: z
  date: '2021-06-21T14:22:32'
  content: I'm sorry, but that's a terrible code example, and PyCharm's failure to rename both f() does not mean anything. If code is written like this, no refactoring tool would be able to save you. In this example, A and B are really just irrelevant classes with no relation whatsoever. If instead you make A and B both inherit from another base class i.e. the interface, like what any professional programmer are supposed to do, the PyCharm refactoring tool will work perfectly fine.
  replies: []
- id: 10829
  author: noah
  date: '2021-06-22T22:13:03'
  content: "Kind of proving the point there z. Can you guarantee that every developer that ever touched the code is using the correct interface and not duck typing? \r\n\r\nPython does have nice annotations that are inconsistently used, so tools will still easily miss things. I try PyCharm refactoring once a week or so and after it stops spinning, it generally tries to rename too much which is its own kind of unsafe.\r\n\r\nJava and any language with reflection does have its own loopholes you can use to break things. e.g., Class.forName(\"B\").getMethod(\"f\").invoke(). IntelliJ *might* catch the trivial cases, but it can never be 100% safe."
  replies: []
- id: 10835
  author: Laurent Simon
  date: '2021-06-23T11:42:17'
  content: "@z \r\n\r\n&gt; If instead you make A and B both inherit from another base class i.e. the interface, like what any professional programmer are supposed to do, the PyCharm refactoring tool will work perfectly fine.\r\n\r\nYou are right, the problem of dynamically language is there. \"Programmer are supposed to do\", but it still works if they don't do it, so..."
  replies: []
---

I was recently having a discussion about refactoring dynamically typed languages and I was struck by the amount of misconceptions that a lot of developers still have on this topic.

I expressed [my point in this article from fifteen years ago(!)](http://www.beust.com/weblog/dynamic-language-refactoring-ide-pick-one/), not much has changed, but the idea that it it impossible to safely and automatically refactor a language that doesn't have type annotations is still something that is not widely accepted, so I thought I would revisit my point and modernize the code a bit.

First of all, my claim:

> In languages that do not have type annotations (e.g. Python, Ruby, Javascript, Smalltalk), it is impossible to perform automatic refactorings that are safe, i.e., that are guaranteed to not break the code. Such refactorings require the supervision of the developer to make sure that the new code still runs.

First of all, I decided to adapt the snippet of code I used in my previous article and write it in Python. Here is a small example I came up with:

```python
class A:
    def f(self):
        print("A.f")

class B:
    def f(self):
        print("B.f")

if __name__ == '__main__':
    if random() > 0.5:
        x = A()
    else:
        x = B()
    x.f()
```

Pretty straightforward: this code will call the function `f()` on either an instance of class `A` or `B`.

What happens when you ask your IDE to rename `f()` to `f2()`? Well, this is undecidable. You might think it's obvious that you need to rename both `A.f()` and `B.f()`, but that's just because this snippet is trivial. In a code base containing hundreds of thousands of lines, it's plain impossible for any IDE to decide what functions to rename with the guarantee of not breaking the code.

This time, I decided to go one step further and to actually prove this point, since so many people are still refusing to accept it. So I launched PyCharm, typed this code, put the cursor on the line `x.f()` and asked the IDE to rename `f()` to `f2()`. And here is what happened:

```python
class A:
    def f2(self):
        print("A.f")

class B:
    def f(self):
        print("B.f")

if __name__ == '__main__':
    if random() > 0.5:
        x = A()
    else
        x = B()
    x.f2()
```

PyCharm renamed the first `f()` but not the second one! I'm not quite sure what the logic is here, but well, the point is that this code is now broken, and you will only find out at runtime.

This observation has dire consequences on the adequacy of dynamically typed languages for large code bases. Because you can no longer safely refactor such code bases, developers will be a lot more hesitant about performing these refactorings because they can never be sure how exhaustive the tests are, and in doubt, they will decide not to refactor and let the code rot.

_Update:[Discussion on reddit](https://www.reddit.com/r/programming/comments/o4lcvy/why_you_cant_safely_and_automatically_refactor/)._
