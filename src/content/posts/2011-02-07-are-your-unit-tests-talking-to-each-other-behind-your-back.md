---
title: Are your unit tests talking to each other behind your back?
date: '2011-02-07T12:11:57'
slug: are-your-unit-tests-talking-to-each-other-behind-your-back
categories:
- General
comments:
- id: 8764
  author: Tweets that mention Are your unit tests talking to each other behind your back? ?? Otaku, Cedric's blog -- Topsy.com
  date: '2011-02-07T13:02:55'
  content: '[...] This post was mentioned on Twitter by Cedric Beust, Felipe Knorr Kuhn, Manfred Rosenboom, Coffee Guy, Sebastian Benz and others. Sebastian Benz said: Sounds like an interesting experiment: ??@cbeust: Are your unit tests conspiring against you? http://t.co/cBkt829?? [...]'
  replies: []
---

As you have heard and read many times, unit tests should be isolated from each other. In other words, each test method should be self contained and not rely on any state other than the one it created and initialized (typically with an `@BeforeMethod` method). 

While this constraint can impose a lot of complexity on your test methods (they sometimes need to create a lot of state before they are able to perform their testing), the general idea behind test isolation seems pretty easy to enforce. But is it? 

How confident are you that your unit tests are isolated from each other? Wouldn't you like to know for sure? 

Here is how you can use TestNG's JUnit conversion tool to verify the isolation of your unit tests in just a few clicks (this works especially well for JUnit 3 tests, JUnit 4 tests might not convert fully without some manual work). 

The first step is to install the TestNG Eclipse plug-in [as explained here](http://testng.org/doc/download.html). If you are not an Eclipse user, consider doing this anyway since it takes just a few clicks and you never have to launch Eclipse ever again after that. 

Once the plug-in is installed, open the Java Explorer and right click on the package or source folder that contains your unit tests: 

![](http://testng.org/pictures/refactoring1.png)

The first page of the wizard lets you create a `testng.xml` file. You only need to modify two things on this page: the type of parallelism ("methods") and the number of threads you want to use (start with 15). 

![](http://testng.org/pictures/refactoring10.png)

Press Next and then Finish. Once the wizard completes it will have converted all your JUnit tests to TestNG. Don't panic, you can revert this either by undoing the Eclipse refactoring or simply by reverting the files with your source control tool (e.g. ``git checkout``). 

Now, launch your newly converted tests: right click on the `testng.xml` file that was generated and select "Run as TestNG suite": 

![](http://testng.org/pictures/refactoring11.png)

TestNG is now running all your test methods in parallel, with a thread pool of the size that you specified above. If your test methods are properly isolated from each other, you should see a 100% success. If not... what went wrong? 

After converting hundreds of tests like this, I have made some interesting observations on what isolation errors developers can make, but I'll save this for another post. For now, I'd love to hear how the conversion process went for you, whether it was a complete success but especially if some tests failed. In this case, feel free to share the reason for the failures.
