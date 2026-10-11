---
title: One click test conversions
date: '2011-01-04T10:17:20'
slug: one-click-test-conversions
categories:
- Java
- TestNG
comments:
- id: 8705
  author: Frank Bolander
  date: '2011-01-04T14:46:30'
  content: Very nice.
  replies: []
- id: 8706
  author: Converting JUnit Tests to TestNG | Software Testing Magazine
  date: '2011-01-20T03:38:09'
  content: '[...] In this blog post, C??dric Beust describes the new TestNG features that allows to convert Java unit tests from JUnit 3 and JUnit 4 to TestNG. [...]'
  replies: []
- id: 8707
  author: Converting JUnit Tests to TestNG | Software Testing Magazine
  date: '2011-01-20T03:38:09'
  content: '[...] In this blog post, C??dric Beust describes the new TestNG features that allows to convert Java unit tests from JUnit 3 and JUnit 4 to TestNG. [...]'
  replies: []
- id: 8708
  author: Nirmala
  date: '2011-01-20T14:20:59'
  content: Nice Cedric. I just sent you an email - please update the exlipse plugin download links.
  replies: []
- id: 8709
  author: Valdemar
  date: '2011-02-25T05:51:21'
  content: Awesome post and plugin. I'll convert all my Junit Tests to TestNG. Thanks!
  replies: []
---

If converting your tests to TestNG is one of your new year's resolution, you are in luck. 

Introducing the improved JUnit to TestNG converter. 

A couple of months ago, I gave a preview of the [new features in the TestNG Eclipse plug-in](http://beust.com/weblog/weblog/2010/11/02/eclipse-and-testng-the-next-next-generation/) and I observed that more and more people were converting their tests from JUnit 3 **and** JUnit 4 to TestNG. This latter was a surprise to me since I never really expected anyone would want to move away from JUnit 4 once they have migrated to it. 

TestNG has long supported individual class conversions in the form of Quick Fixes: 

![](http://testng.org/pictures/convert1.png)

I recently expanded this support and turned it into a full refactoring, which means that you can now apply it to entire packages, source folders or even projects. 

To use it, [install the latest TestNG Eclipse plug-in](http://testng.org/doc/download.html), open your _Package Explorer_ and right click on either a package, a source folder or a project: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/menu-convert1.png)

The refactoring wizard contains two pages. 

The first one lets you customize the `testng.xml` that's about to be generated (you can also choose not to generate one): 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/menu-convert2.png)

The next page shows you a view with all the changes that are about to be made to your source files. These changes are similar to the ones made with the Quick Fix except that they now apply to multiple files: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/menu-convert3.png)

On this page, you can exclude certain files from being converted, and when you're happy, press the Finish button. 

Like all refactorings in Eclipse, you can undo your changes in one click if you change your mind: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/menu-convert4.png)

In a next post, I'll show how you can use this new functionality to help you check that your unit tests are as isolated as you think they are. 

Now go ahead and convert your tests, that's one less new year's resolution you have to worry about!
