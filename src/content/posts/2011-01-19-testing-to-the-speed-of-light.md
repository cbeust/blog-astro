---
title: Testing to the speed of light
date: '2011-01-19T10:19:22'
slug: testing-to-the-speed-of-light
categories:
- General
comments:
- id: 8757
  author: Elliotte Rusty Harold
  date: '2011-01-19T07:21:32'
  content: So you're generating the tests from the code? That's backwards. Tests should be written before the model code, and as a nice side benefit Eclipse will then autocorrect the model code to match the tests, no plugin needed.
  replies: []
- id: 8758
  author: Cedric
  date: '2011-01-19T07:27:32'
  content: 'Elliotte:

    "Backwards"?

    Now, that''s harsh. Not everyone uses TDD, and actually, I''ll argue that very few people use TDD. At any rate, suggesting that TDD is the only way to write tests is quite a strong statement that I don''t think is supported by facts nor practicality.

    I find that most developers like to iterate over their code at first in order to get to a point where the code is not a total mess, and only then, they decide to write their first test. Before reaching that point, you''re just writing tests for throwaway code, which is a waste.

    I find this approach quite reasonable and it doesn''t suffer from all the problems that plague TDD.'
  replies: []
- id: 8754
  author: Jo??o
  date: '2011-01-19T11:12:04'
  content: 'Hi.

    Thank you a lot for the new features. Unfortunately they don''t seem to work that well with me.

    The methods page only works if the editor has "focus". For example, if by any chance the package view has focus, and then I invoke the wizard, the methods page will be empty.

    When it works, the methods list is filled with the public methods of all the editors.

    An alternative to this, that I think would be more intuitive, would be adding a new option, to the TestNG context menu, to generate a test to from the selected java file.

    Not sure if it''s because I''m in Linux, but the directory src/test/java isn''t detected in a maven project.

    Sorry for the crappy bug report and thank you for the new features.'
  replies: []
- id: 8755
  author: Tomek Kaczanowski
  date: '2011-01-19T11:40:42'
  content: 'Hi Cedric,

    first I have to admit, I never use TestNG plugin to generate test class. So I my comment is a little bit out of topic, sorry :)

    My question is of more general nature. Don''t you think that such feature promotes "test per method" style, instead of (IMHO better) "test behaviour" style?

    --

    Cheers,

    Tomek Kaczanowski'
  replies: []
- id: 8756
  author: Cedric
  date: '2011-01-19T12:57:32'
  content: 'Joao:

    I just sent you an email to investigate the issues you are having.

    Tomek:

    This feature is definitely more for unit testing, but if you are writing a functional test, you can just ignore the method page, press "Finish" right away and you''ll still get a skeleton of a TestNG class.'
  replies: []
- id: 8759
  author: Ricky Clarkson
  date: '2011-01-19T22:21:56'
  content: Incidentally, IDEA has had this at least for JUnit for some time.  Ctrl-alt-A, type Test, press return and it generates a test class allowing you to select methods to generate empty test methods for.  It places the class in the right directory, though it would be pleasant if it would create src/test/java if it didn't exist instead of dumping the file into src/main/java.
  replies: []
- id: 8760
  author: Ricky Clarkson
  date: '2011-01-19T22:22:56'
  content: Ctrl-shift-A, sorry.
  replies: []
- id: 8761
  author: Wim Deblauwe
  date: '2011-01-19T22:31:01'
  content: '@Ricky: You need to use CTRL-SHIFT-T to generate a test. The same shortcut allows you to jump between your class and the unit test for it, I use that all of the time.'
  replies: []
- id: 8762
  author: Daniel Zimmerman
  date: '2011-01-19T23:52:22'
  content: Eclipse has also had it for JUnit for quite some time; but it's nice to see it for TestNG as well.
  replies: []
- id: 8763
  author: Tony Bussi??res
  date: '2011-01-30T06:45:51'
  content: 'Hi Cedric,

    I also do think that behavioural testing is more interesting and expressive than using method level testing.

    Without removing the need of proper documentation, it quickly provides a good impression on what the class should do.

    Anyway, it''s great to see tools emerge to help speeding up unit testing with the IDE.'
  replies: []
---

When you are under pressure to ship a feature, every little detail that makes your coding process faster counts. Especially when it's about writing tests. For example, if you are one of the many people who don't use TDD, you first write a class, iterate a few times over the initial implementation and when you've reached a point where you are satisfied, you are ready to write a test for it. 

With TestNG and Eclipse, writing tests just became easier. 

The "New TestNG class" wizard has just received a new page that looks at the Java file that's currently in your editor and then allows you to select public methods in it. Methods selected in this page will be automatically included in the generated test class, with a default implementation that throws an exception, so you don't forget to implement it: 

![](http://testng.org/pictures/new-2.png)

The wizard is also pretty clever in trying to stay as much out of the way as possible. For example, it will automatically detect the package, come up with a test class name and, more importantly, it will guess what is the most appropriate directory for your test class. For example, if you are using Maven, this directory will be `src/test/java`: 

![](http://testng.org/pictures/new-3.png)

[Happy testing!](http://testng.org/doc/eclipse.html)
