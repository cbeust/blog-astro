---
title: Quick Fix for JUnit
date: '2005-08-15T08:44:34'
slug: quick-fix-for-junit
categories:
- Java
comments:
- id: 4144
  author: Robert Watkins
  date: '2005-08-15T14:17:38'
  content: 'Can you do it on a whole package tree? Might make it a bit easier to convert a thousand-odd test cases.

    Certainly, this sort of support would assist people looking to experiment with or migrate to TestNG. Quite a good idea.'
  replies: []
- id: 4145
  author: Cameron
  date: '2005-08-16T05:25:43'
  content: Make it an ANT task. :-)
  replies: []
- id: 4146
  author: Shitasam Suitam
  date: '2005-08-16T07:12:33'
  content: 'Sir Otaku,

    You give me Java project!'
  replies: []
- id: 4147
  author: Michael
  date: '2005-08-21T02:56:14'
  content: 'Still getting some of that "Sit Otaku" project request spam... good luck with that.

    TestNG looks great, I was moderately happy with JUnit for many years, but since you have been pimping TestNG, my subconcious has come up with all sorts of problems with my junit code, and am feeling the need to bite the bullet. Damn you !

    Things like this that ease the way are very very much appreciated.'
  replies: []
---

The [TestNG IDEA plug-in](http://testng.org/doc/idea.html) has an interesting feature that I just implemented in the [Eclipse plug-in](http://testng.org/doc/eclipse.html):  if you press Ctrl-1 (Quick Fix) on a JUnit test class, the plug-in will give you the option to convert it to TestNG, either with JDK5 annotations:

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/quickfix1.png)

or JavaDoc annotations:

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/quickfix2.png)

The operations performed by this extension are very simple:

  * Remove all the JUnit imports
  * Add TestNG imports (for JDK5 annotations only)
  * Import `AssertJUnit`
  * Remove `extends TestCase`
  * Add `@Test` annotations on top of any method that starts with "test"
  * Add `@Configuration(beforeTestMethod = true)` on top of `setUp()`
  * Add `@Configuration(afterestMethod = true)` on top of ` tearDown()`
  * Add `@Factory` on top of `suite()`



And that's it!  These are fairly simple changes and again, I am struck at how intuitive the Eclipse API is.  Manipulating the AST is a real pleasure and as you can see above, the `ASTRewriter` gives you a lot of goodies for free, among which unlimited undo and a nice preview window.
