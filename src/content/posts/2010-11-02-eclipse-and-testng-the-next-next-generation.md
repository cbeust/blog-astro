---
title: 'Eclipse and TestNG: the Next Next Generation'
date: '2010-11-02T18:39:10'
slug: eclipse-and-testng-the-next-next-generation
categories:
- General
comments:
- id: 8489
  author: Mohamed Mansour
  date: '2010-11-02T19:34:17'
  content: 'droools (cleanly)! Awesome work Cedric :D

    Je suis tr??s content!'
  replies: []
- id: 8490
  author: Jonathan O'Connor
  date: '2010-11-02T23:18:48'
  content: Wow. Your UI is easily the best I've seen for testing. I hope JetBrains steals your idea for RubyMine, which is now my everyday dev tool.
  replies: []
- id: 8491
  author: Jo??o Assun????o
  date: '2010-11-02T23:47:45'
  content: 'Very cool!!!

    Thank you Cedric'
  replies: []
- id: 8492
  author: Micha? Gruca
  date: '2010-11-03T00:58:59'
  content: 'Hi Cedirc.

    Great that plugin is developed and getting better :)

    Taking occasion, I''ll request small feature. Is it possible to turn off pop-up console view after running tests? I''m preferring just your ng view for summary which test passed and which haven''t

    Thanks for plugin

    Micha?'
  replies: []
- id: 8493
  author: Ruslan Zenin
  date: '2010-11-03T04:46:28'
  content: 'Cedric,

    Great news. Another reason to use TestNG...its always cutting edge and innovative!

    Would be nice to place in the top of Summary tab some useful statistics like this example:

    Tests: 26,  Failures: 9,  Errors: 13,  Success rate: 15.38%  Time: 16.422

    Looking forward for this update!

    regards,

    Ruslan'
  replies: []
- id: 8494
  author: Eugene Kuleshov
  date: '2010-11-03T07:40:12'
  content: 'Nice quick fixes.

    But I think those tabs are using too much space. I think I''d still prefer JUnit''s "Show Failures Only" toolbar button. As for Summary tab, I''d say it belong to its own view, which could be linked to selection in the test tree.

    And above all, the biggest improvement would be show  the stack trace into the Console view instead of showing it in the split panel. That would allow to use screen real estate more efficiently.

    Finally, we really need a generic view for various test runners. For instance there is already plugins that shows Hudson test results in regular JUnit view. So, why can''t we have the view extended with those nice TestNG features and have one thing to rule them all?'
  replies: []
- id: 8495
  author: Jos??
  date: '2010-11-03T11:11:43'
  content: 'Everything just looks great ! I''ve been using TestNG for several years now, and all those improvments in the Eclipse plugin look very nice.

    I''m also using Netbeans more and more, mainly because of the great JEE6 built in support, but the TestNG plugin for Netbeans is not really on par with the Eclipse one, do you know of any plan to improve it also ?

    Anyway, many thanks to you for this amazing tool !

    J.'
  replies: []
- id: 8496
  author: Frankie
  date: '2010-11-04T21:23:42'
  content: 'That''s great! Thanks for bringing it to us.

    However, one question: are there any ways to show all ignored test cases? The reason is that sometime we want to take a look at all ignored test cases and to see why they are ignored and try to fix them. But it seems that it was very hard.

    Frankie'
  replies: []
- id: 8497
  author: raszi
  date: '2010-11-05T03:37:41'
  content: 'unfortunately the new version could not work with a vertical pane. the failure exception is overlapping with the test tree. :(

    and I could not downgrade to the previous version because it was deleted from the site'
  replies: []
- id: 8498
  author: Developing in the meta &laquo; Otaku, Cedric&#039;s blog
  date: '2010-12-17T12:24:21'
  content: '[...] you probably know, the TestNG Eclipse plug-in is a mug of awesomeness topped with creamy magnificence. You would think that I use it day in and day out to work on TestNG, yet I [...]'
  replies: []
- id: 8499
  author: One click test conversions &laquo; Otaku, Cedric&#039;s blog
  date: '2011-01-04T10:17:24'
  content: '[...] couple of months ago, I gave a preview of the new features in the TestNG Eclipse plug-in and I observed that more and more people were converting their tests from JUnit 3 and JUnit 4 to [...]'
  replies: []
- id: 8500
  author: Announcing TestNG 6.0 &laquo; Otaku, Cedric&#039;s blog
  date: '2011-03-15T16:55:57'
  content: '[...] is a quick rundown of the latest features and the full [...]'
  replies: []
- id: 8501
  author: Chris J.
  date: '2011-04-17T17:06:48'
  content: I'm somewhat disappointed with V6 of the plugin compared with v5.4 with the biggest issue for me being the fact that I can no longer see the test suite progress on a method by method basis. The only progress indicator is the single bar that applies to all tests globally at the top. The earlier plugin version allowed you to see the test results dynamically as they proceeded. Maybe I'm missing a button or a switch to turn that on? If not, please point me to the prior version download link so I can reinstall that. Thanks.
  replies: []
- id: 8502
  author: Cedric
  date: '2011-04-18T13:42:42'
  content: 'Hi Chris,

    This is a compromise I had to make in order to improve the performance the plug-in. Until I figure out exactly how to update the tree live without impacting the overall performance, I just pushed a fix that only updates the tree with the failures. The passed tests will be added in bulk at the end of the run.'
  replies: []
- id: 8503
  author: Chris J.
  date: '2011-04-18T14:32:49'
  content: I really appreciate your quick response and action, Cedric. That update works just fine for me. Thanks!
  replies: []
- id: 8504
  author: Patricio
  date: '2012-07-19T00:43:55'
  content: 'Hi Cedric, great plugin. I''m using TestNG for the first time (instead of JUnit) for a ATDD Project (using Selenium). The plugin is great! I have seen that @Test annotation (in the scope of a method or the test class) has a testName parameter. I wonder if this attribute may be used instead of the full package or the test method name, in order to present the tests in a colloquial way. Is this logical? We think that is important that every person (technical or not) can see the results and understand.

    Thanks a lot!'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng.png)

I have been adding a steady amount of improvements to the TestNG Eclipse plug-ins over the past weeks, so I thought I'd stop for a minute and put together a quick summary of the upcoming features. 

### Better tree

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng-tree.png)

The first improvement is the appearance of the tree. You will notice that it now mirrors faithfully the hierarchy that is found in testng.xml: Suites, Tests, Classes and then Methods. Failures are captured in the "Failed Tests" tab for easier look up: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng-failure.png)

This tab allows you to focus on the tests that fail and ignore all those that passed. 

### Search

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng-search.png)

Another new feature is the Search box. When you have hundreds of tests running, finding a specific one is not always easy, so you can now type a few letters of the test method or its parameters and the content of the tree will automatically narrow down to methods matching your search. Note in the screen shot above that the search also works on parameters provided by `@DataProvider`. 

### Summary tab

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng-summary.png)

There is now a new tab called "Summary". This tab gives you statistics on your test run, such as the timings, the test names, the number of methods and classes, etc... Since the results are shown in a table, you can also sort on any criterion you like for easier parsing. This is especially handy when you are trying to determine what tests take the longest time. Of course, the search box works in this view as well, and note that in the screen shot below, the Time column is sorted in decreasing order: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng-search-summary.png)

This view is still a work in the progress and I'm planning to add more information there in the future, such as statistics on individual classes, time line, etc... Let me know if you have suggestions. 

### Better conversions from JUnit 3

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng-convert1.png)

I also improved the automatic conversion of JUnit tests and added support for JUnit 4 conversions. The screen shot above shows how deep the JUnit 3 quick fix now goes. Notice that your code is now correctly updated so that the converted file will compile without additional changes on your part. 

### ... and JUnit 4

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/eclipse-testng-convert2.png)

When I started writing the conversion fixes, I made support JUnit 4 a non-goal since I was under the impression that developers would be converting from JUnit 3 but that JUnit 4 users would probably not see the need to convert to TestNG. 

Well, I was wrong, and since I started receiving requests from JUnit 4 users to help them convert over to TestNG, I went ahead and added quick fixes for JUnit 4 classes. The screen shot above illustrates this. 

There are also a lot of other more subtle changes, but I'll stop here. With these improvements, I'm hoping that the TestNG Eclipse plug-in will become even more appealing as the central hub for all your testing needs. 

I will be pushing these new features to the update site very soon.
