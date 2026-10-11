---
title: 'A date in heaven:  TestNG and BeanShell'
date: '2005-09-30T13:32:41'
slug: a-date-in-heaven-testng-and-beanshell
categories:
- Java
comments:
- id: 4274
  author: Jim White
  date: '2005-10-17T07:35:49'
  content: Why didn't you integrate using BSF (Bean Scripting Framework)?  That way folks can use any language they want (like Ant).  It's even becoming de jure as well as de facto as JSR-223.
  replies: []
- id: 4275
  author: Aleksandr
  date: '2009-07-25T09:56:32'
  content: Good work! You right, Beanshell is nice choice for java people.
  replies: []
---

![](http://www.beanshell.org/images/bshsplash3.gif)

Recently, several [TestNG](http://testng.org) users started asking for more control in the way test methods are selected.  For example, here is one way you specify which groups to run:

```xml
<groups>
  <run>
  <include name="nopackage"/>
  <exclude name="broken" />
  </run>
</groups>
```

The include/exclude syntax is fairly flexible, but it doesn't help when you want to perform more complex expressions, such as _'run the test methods that belong to the group "g1" and "g2" but not "g3"'_.

There are many ways to solve this problem, and the most obvious one to me is to support a scripting language inside TestNG.

After thinking about it for a while, I decided to go for [BeanShell](http://www.beanshell.org/) for two reasons:

  * It's Java.
  * It's small (the core interpreter is 140k).



I was tempted to pick Groovy for a short while but I decided that the learning curve and the sheer size of its jar file made it a non-starter.  BeanShell is cleary designed to be embedded and has a solid reputation, so it was an easy choice.

  And so far, I don't regret my choice:  integrating BeanShell in TestNG took less than one hour, and you can now specify things such as:

```xml
<test>
 <eval><![**CDATA**[
       groups.containKey("group1") &&
     method.getName().equals("test1")
     ]]
 </eval>
 ...
</test>
```

Since I never miss an opportunity to do something silly, I tried the following expression:

```java
0 == JOptionPane.showConfirmDialog(  
  new JFrame(),  
  "Run this method?\n" + method,  
  "TestNG",  
  JOptionPane.YES_NO_OPTION);
```

which promptly displayed the following dialog for every single test method:

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/beanshell-testng.png)

This way, I can hand pick the test methods one by one for every run.  Not exactly practical, but you get the idea.

The possibilities offered by embedding a scripting language inside TestNG are quite exciting and I'm looking forward to more twisted ways to abuse this feature :-)
