---
title: The less tests, the better
date: '2007-09-26T10:02:53'
slug: the-less-tests-the-better
categories:
- Java
comments:
- id: 6927
  author: Sony Mathew
  date: '2007-09-27T11:31:40'
  content: 'I think good arguments for static typing like  context-sensitive help, readability and reliability can all be considered a wash for various reasons.  But Refactoring is just unbeatable - a huge win for static typed languages.

    Context-sensitive in dynamic lang IDEs could just provide a larger set to choose from and as methods are chosen object contexts get even narrower.

    Readability and Reliability have so many more factors than just "typing" and cannot really be used as arguments. Proper designs, documentation and unit-tests play much bigger roles in this.

    It really, really comes down to Refactoring - the biggest productive gain in programming within the last decade - (i believe we can thank IntelliJ for this).  I rely on it constantly - across large project sets on a daily basis.  I cannot imagine how the dynamic folks can maintain medium to large projects without refactoring over several iterations over several years of requirement additions and changes.'
  replies: []
- id: 6928
  author: Ricky Clarkson
  date: '2007-09-27T12:53:14'
  content: '"I cannot imagine how the dynamic folks can maintain medium to large projects without refactoring over several iterations over several years of requirement additions and changes."

    Perhaps they compose larger software from smaller independent parts, rather than composing large software from large interdependent parts.'
  replies: []
- id: 6929
  author: Sony Mathew
  date: '2007-09-27T13:36:25'
  content: 'Ricky, most folks design the best separation of concerns they can see at the time and into the near future.  Refactoring plagues every application as it ages - no one is immune - great books have been written on the topic.

    As Jeff Foxworhty would put it  - "You maybe a consultant" if...(place what u said here)..or "You maybe inexperienced (aka consultant)" if.. place what u said here) hahaha...just kiddin ...'
  replies: []
- id: 6930
  author: Andres Almiray
  date: '2007-09-27T15:07:45'
  content: 'I think Ricky stroke a rather important nerve when saying "[dynamic folks] compose larger software from smaller independent parts, rather than composing large software from large interdependent parts" and that is that "usually" when working with dynamic languages your code is not that complicated and tends to be smaller. There are plenty of examples in Java land alone where you can see larger & complex components for even larger and complex projects.

    Refactoring is king, and although in dynamic languages you don''t need it as much I very much like to apply some refactoring techniques when doing Groovy code. That would be a task for tool developers, at least on the Groovy side both IDEA and Eclipse teams are working hard on cooking basic refactoring capabilities.

    Remember that Java tools have many years of advantage over the dynamic languages, it may take at least a year for them to catch up (but I''d like to be wrong and hope it takes less time :-))

    Peace.'
  replies: []
- id: 6931
  author: Paul Barry
  date: '2007-09-27T15:20:05'
  content: '"Tests to verify type consistency."

    Could you give a concrete example to help me understand what this means?  How would this not be covered by a unit and/or functional test?'
  replies: []
- id: 6932
  author: Petrik de Heus
  date: '2007-10-01T02:41:47'
  content: 'Why would you want to write tests to verify type consistency when you already check types in tests?

    def test_url_for

    assert_equal "http://www.example.com?a=b&amp;c=d", url_for(:a => ''b'', :c => ''d'')

    end'
  replies: []
- id: 6933
  author: Tom Shackell
  date: '2009-06-12T02:00:48'
  content: 'In my experience you do not need to write tests to check types in a dynamically typed language. If you have good functional and unit tests then they will pick up all the type errors as well. Indeed I have generally found the unit tests find type errors before any other kind of error. This is not surprising, type errors are one of the simplest kinds of errors, which is why they can be checked at compile time (and most other errors cannot be).

    Static languages such as Java does give you free  tests performed by the compiler. But those tests come at quite a price, static languages such as Java are much less concise and much less productive than dynamic languages such as Python. This means Java programs are larger, and larger programs means more bugs and more testing burden.

    The other price of the static typing is that because you have to appease the compiler some things are impossible in a statically typed language, or if they are possible they are very clumbsy.

    Reflection is a classic example, Python''s reflective capabilities are a lot more powerful than Java''s. Using this reflection you can factor out common idioms in your program, using techniques such as domain specific embedded languages. The reflexive code can be tricky to get right, but also the pay off can be immense. This especially comes into play as projects get larger and factoring out common parts becomes increasingly important.

    Ultimately I think a lot of the choice between dynamic and static typing is a question of taste. Some people really find dynamic languages a lot more elegant and productive, whereas others like the additional security of static typing.

    None the less, purely in terms of writing correct programs I would argue it is not as clear cut as "static typing gives you more tests so they produce better programs". Those "free" tests can easily turn out to be quite expensive.'
  replies: []
- id: 6934
  author: Tom Shackell
  date: '2009-06-12T02:12:05'
  content: 'Hi can you remove my email address from the previous post, I hadn''t realised that it would be publicly visible (perhaps a note telling you such would be helpful).

    Thanks

    Tom'
  replies: []
---

Brian Doll posted a few interesting questions as a comment on my ["Continuous tax" entry](http://beust.com/weblog/weblog/archives/000462.html), which I'll try to address in turn: 

> Oddly enough, some people see the act of writing tests as "continuous tax" in that it's something else you have to write that does not go toward the "bottom line" of the features you're implementing. 

Actually, I don't see writing tests as part of this continuous tax that I was describing earlier. While I agree that you usually write less tests in a statically typed language than a dynamically typed one, I think the difference in lines of code or number of tests is not significant enough to meaningfully impact the engineering cycle. 

The continuous tax is triggered by the loss in explicitness that dynamic code usually suffers from. While it looks innocuous, the loss of typing actually has dire consequences on the maintainability and readability of your code by not giving you any hint on what type an object passed to a method really is and, worse, by making it impossible to apply even the simplest automatic refactorings such as renaming public functions (see [this post](http://beust.com/weblog/weblog/archives/000414.html) for more details). 

> I'm interested to get your thoughts, as an author of a testing tool, on how you see the overall reliability of testing in dynamic and strongly typed languages. 

As shocking as it may seem from the creator of a testing framework and the [author of a book on testing](http://beust.com/weblog/weblog/archives/000459.html), I actually always try to write as few tests as possible. The secret is to find the smallest subset of tests possible for a given functionality. 

The way I see it, dynamically typed languages usually make me write the following tests: 

  * Tests to verify type consistency. 
  * Unit tests. 
  * Functional tests. 
Statically typed languages usually let me get away with writing: 
  * Unit tests. 
  * Functional tests. 
To make matter worse, changing a type in my dynamic code forces me to update my tests manually, while the same operation in a statically typed language will not only be performed automatically by my IDE, it will also automatically update my business code *and* my test code (note that I haven't mentioned TDD a single time because I believe that the practice of TDD is orthogonal to whether the language you are using is dynamically or statically typed). 

In the past couple of days, a few people have chimed in with their private experiences of the continuous tax, among which [Mark Derricutt](http://www.talios.com/continuous_tax.htm) and [Eric Burke](http://stuffthathappens.com/blog/2007/09/25/paying-my-taxes). 

What's interesting about a continuous tax is that you keep paying it all the time to the point that you might even forget about it. From that respect, I wouldn't be surprised to see that developers who work with dynamic languages on a daily basis encounter the problems described by Eric and Mark regularly, but they just don't notice any more: it's just part of their routine. Java (and other statically typed languages) developers simply don't ever pay this particular tax, so having to face these problems feels like a step backward in productivity (obviously, Java programmers pay different continuous taxes in other areas, but let's save this topic for another day). 

In a comment on Eric's post, Weiqi wrote: 

> In that regard, the static typing works just like unit tests - it prevents you from breaking your code. 

... which summarizes this issue pretty well: static typing gives you tests for free, and who would turn down free tests?
