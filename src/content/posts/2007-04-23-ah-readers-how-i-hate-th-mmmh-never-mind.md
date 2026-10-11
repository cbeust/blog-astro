---
title: Ah, readers...  How I hate th... mmmh, never mind
date: '2007-04-23T09:28:13'
slug: ah-readers-how-i-hate-th-mmmh-never-mind
categories:
- General
comments:
- id: 6662
  author: Arnon Rotem-Gal-Oz
  date: '2007-04-23T10:05:54'
  content: I guess that's what the guy who invented Foo Bar had in mind :)
  replies: []
- id: 6663
  author: Sony Mathew
  date: '2007-04-23T11:06:25'
  content: Writing for public consumption is a tough gig.  Should've had filterMorons() as first call.
  replies: []
- id: 6664
  author: ''
  date: '2007-04-23T12:18:41'
  content: It wasn't a mistake.  I can't stand seeing example code that is nothing but foo/bar/baz.  All the methods and fields become a jumble and it's often hard to keep track of the point being made.  It's way easier to get over someone saying "ignore exceptions for now."
  replies: []
- id: 6665
  author: Ajai
  date: '2007-04-23T13:38:06'
  content: 'I felt unfortunately the names you chose had an implied dependency.

    Had you changed the signatures to:

    &nbsp;&nbsp;File openFile()

    &nbsp;&nbsp;void filterFile(File f)

    Then those readers whom you hate (just kidding :-) such as myself would be less confused.'
  replies: []
- id: 6666
  author: Guido Marongiu
  date: '2007-04-23T15:09:02'
  content: 'Dear Cedric,

    a humble question: could all temporal dependencies be expressed as Eiffel-style pre/post-conditions? Would that be a complete solution?'
  replies: []
- id: 6667
  author: Brian Slesinsky
  date: '2007-04-23T19:44:07'
  content: 'On reading that blog entry, I understood what you meant but only after re-reading it.  What really stands out is that openFile() and filterFile() take no arguments, return nothing and have no dependencies.  I found it unclear because the whole point was that they should be called in the right order, but there was nothing actually in the example to indicate that, other than the method names.  And in your original code, there wasn''t even that.

    It''s more of a sketch of an example than an actual example, which is fine for a note to yourself or a whiteboard diagram, but maybe not a finished piece of writing.'
  replies: []
- id: 6668
  author: Robert Konigsberg
  date: '2007-04-23T23:16:14'
  content: And while we're at it, how can main call f and g if they're not also static? I'm so confused by your example! *grin*
  replies: []
- id: 6669
  author: Robert Konigsberg
  date: '2007-04-23T23:16:47'
  content: And while we're at it, how can main call f and g if they're not also static? I'm so confused by your example! *grin*
  replies: []
- id: 6670
  author: Sylvain
  date: '2007-04-23T23:22:32'
  content: Sorry couldn't focus on the article, I got thrown off by the weird horse with the grillz and all the bling.
  replies: []
- id: 6671
  author: G.
  date: '2007-04-24T00:10:18'
  content: 'I started readings this article. Can I now read the previous one? Or shall I be thrown as an exception?

    ;-)

    Thanks C'
  replies: []
- id: 6672
  author: Romain Guy
  date: '2007-04-24T15:31:39'
  content: That reminds me of everytime I post a demo on my own blog, and specifically tell people not to focus on a broken/missing features. 90% of the replies are about the broken/missing feature I don't want to hear about :)
  replies: []
- id: 6673
  author: Renata
  date: '2007-04-25T06:27:47'
  content: 'Hi,

    we are a portuguese group of students and we''re doing a project in human resources management about Google. Since you work (worked) there, we wonder if you could answer a set of 6 quick-aswer questions and maybe 2 or 3 fellow workers of yours too. It won''t take long. If you''re available, our email is renata.carneira@gmail.com.

    Thank You!

    Renata Carneira'
  replies: []
- id: 6674
  author: Renata
  date: '2007-04-25T06:29:37'
  content: 'Hi,

    we are a portuguese group of students and we''re doing a project in human resources management about Google. Since you work (worked) there, we wonder if you could answer a set of 6 quick-aswer questions and maybe 2 or 3 fellow workers of yours too. It won''t take long. If you''re available, our email is renata.carneira@gmail.com.

    Thank You!

    Renata Carneira'
  replies: []
- id: 6675
  author: BlogReader
  date: '2007-04-27T22:44:46'
  content: '[ but about the simple fact that by nature, functions and methods *must* be called in a certain order, or your programs break  ]

    If you design them improperly, yes they do.  As a previous poster pointed out your dependence on f() being called before g() isn''t something that you should encourage when designing your program.  To put it another way: you can''t do g() w/o doing f() first so why do you allow g() to be called in a vacuum?

    The proper way to design this is to, again like the previous poster said, is something like f().g()  Or g(f()) if you''re into functional programming.

    The example given is very fortran like, and no amount of unit + use case testing can put lipstick on it.  It is broken at the core.

    And please use real world examples in your book, or else you''ll end up with stuff like "f() needs to be called before g(), trust me there''s no design flaw here"'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/horse.gif)

Writing technical articles is really an art. 

It's not enough to start writing with a very clear goal in mind: you actually need to find a way to take your readers there in a gentle and intuitive way. 

The main problem with readers is that they get so easily distracted, so writing your article really boils down to making sure that nothing in the various examples, text or code snippets that you are showing will make them react in a direction that is not the one you are trying to pursue. 

Take my previous article called [Unit or functional tests?](http://beust.com/weblog/weblog/archives/000444.html). 

In that post, I decided to show the importance of functional tests, and in order to make that point, I made up a code snippet where the ordering of method invocation (which is usually not captured by unit tests) is significant. I initially used the following code: 

```java
public class Main {
public void g() {}
public void f() {}
public static void main(String[] argv) {
f();
g();
}
}
```

Once I was satisfied with the article, I reread it one last time before posting it and I wondered if the use of anonymous method names such as `f()` and `g()` were not going to weaken my arguments. I wanted to make sure that anyone reading my code would immediately see that these methods must be run in a certain order, so that I wouldn't even need to remind it throughout the article. 

So I decided to replace `f()/g()` with names that would be a little more explicit. I picked `openFile()/filterFile()`. These names are generic enough, and it's pretty obvious to anyone who can read English that you should open a file before you can filter it. 

All the while, I was convinced that I was overthinking the entire problem. Surely, the readers would see that the code is just an example, that the point is not about what this code does, but about the simple fact that by nature, functions and methods *must* be called in a certain order, or your programs break (if you're not convinced, just go back to whatever code you were working on yesterday and swap two method invocations. Your application will break). 

Armed with the conviction that the world needs more explicit and realistic code snippets (`boy.kissGirl()` anyone?), I went through my draft and replaced `f()/g()` with `openFile()/filterFile()`. 

And sure enough, it was a mistake. Next thing I know, readers start posting comments on how `filterFile()` should throw an exception, or that it should invoke `openFile()` internally, and so on... Some readers are so obsessed with the tree that they are completely missing the forest. 

It's very humbling, in a sense, and as the author of this blog, the fault is entirely mine. If I can't find the right phrasing and interesting examples that will make my readers think, I am not doing my job correctly. 

Hopefully, [the book that Hani and I are now done writing](http://beust.com/weblog/weblog/archives/000438.html) will not suffer from this problem, but you, dear readers, will be the judges. 

And by the way, I was just kidding. I don't really hate you, I'm sorry I said that.
