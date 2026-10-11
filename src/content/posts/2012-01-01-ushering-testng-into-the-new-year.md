---
title: Ushering TestNG into the new year
date: '2012-01-01T19:35:48'
slug: ushering-testng-into-the-new-year
categories:
- Java
- TestNG
comments:
- id: 9407
  author: Jeevan
  date: '2012-01-02T06:12:13'
  content: Awesome....Wishing you Happy New Year
  replies: []
- id: 9408
  author: sabf
  date: '2012-01-03T23:04:28'
  content: 'Great job.

    When can we use the new report?'
  replies: []
- id: 9409
  author: scott
  date: '2012-01-10T18:02:10'
  content: Good work. When can we use this new report?  could it work together with TestNG 6.3 or lower version?
  replies:
  - id: 9410
    author: Cedric
    date: '2012-01-10T18:12:11'
    content: It will be in the next release, and no, it can't be used with older versions.
    replies: []
- id: 9411
  author: scott
  date: '2012-01-17T00:45:04'
  content: "look forward to this latest version report....\nBTW: when I'm using TestNG 6.3 to run our tests, it works well without issues. However, if I have TestNG 6.3.1 instead of 6.3 in my pom.xml file, I get the following errors. Any ideas or suggestions?\n-------------------------------------------------------\n T E S T S\n-------------------------------------------------------\nRunning TestSuite\norg.apache.maven.surefire.util.SurefireReflectionException: java.lang.reflect.InvocationTargetException; nested exception is java.lang.reflect.InvocationTargetException: null\njava.lang.reflect.InvocationTargetException\n        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n        at java.lang.reflect.Method.invoke(Method.java:597)\n        at org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\n\
    \        at org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\n        at org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:172)\n        at org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:104)\n        at org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:70)\nCaused by: java.lang.NoClassDefFoundError: com/beust/jcommander/ParameterException\n        at org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:61)\n        at org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:157)\n        at org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:97)\n        at org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\n        ... 9 more\nCaused by: java.lang.ClassNotFoundException: com.beust.jcommander.ParameterException\n\
    \        at java.net.URLClassLoader$1.run(URLClassLoader.java:202)\n        at java.security.AccessController.doPrivileged(Native Method)\n        at java.net.URLClassLoader.findClass(URLClassLoader.java:190)\n        at java.lang.ClassLoader.loadClass(ClassLoader.java:307)\n        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)\n        at java.lang.ClassLoader.loadClass(ClassLoader.java:248)\n        ... 13 more\nResults :\nTests run: 0, Failures: 0, Errors: 0, Skipped: 0"
  replies: []
- id: 9412
  author: RobertT
  date: '2012-01-17T12:32:22'
  content: I just downloaded and tried with TestNG 6.3.2beta, but I did not see this nice HTML report generated after running a test suite. Is this feature included in this beta version? If yes, is there any further configuration I should do?
  replies: []
- id: 9413
  author: Henrique Dias
  date: '2012-03-01T07:43:22'
  content: 'Great job C??dric.

    Despite without creating new tests in the last months neither played with the new report, I''m preparing a training on TestNG and I cannot find its logo. There is any?

    Happy 2012 ;-)'
  replies: []
- id: 9414
  author: Chip Atkinson
  date: '2012-03-14T09:55:01'
  content: "I'm running 6.4.  The reports look good, but I get file not found errors when I look at the screen shots.  It appears that the png files of the screen shots end up in a  directory under the surefire-reports directory but the links reference the files as if they were in the surefire-reports directory.\nFor example,\n                <a href=\"TEST-iconInjectorTests9014120989635519980.png\" rel=\"nofollow ugc\">screenshot</a>\nI modified it to be                 <a href=\"poctests/TEST-iconInjectorTests9014120989635519980.png\" rel=\"nofollow ugc\">screenshot</a>\nand the web page works now.  Of course that's not terribly great because I'd have to modify index.html each time.\nDid I mis-configure something?\nThanks in advance.\nChip"
  replies: []
- id: 9415
  author: Chip Atkinson
  date: '2012-03-14T09:56:18'
  content: 'Bleh.  The paste-in turned into a useless link.

    Sorry about that.'
  replies: []
- id: 9416
  author: Rob
  date: '2012-03-27T18:25:15'
  content: 'Would be super cool if Java let you overload conversion, then you could provide a conversion to Boolean that did whatever you wanted and your if (v) construct would work. Everything in language design should be geared toward readability.

    As to not being sure about the scalability of JS to hundreds of thousands of lines of code, thanks, that was a good one. Metrics studies have settled that question. If you uncover something new anecdotally, let us all know!'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/reports-header.png)

I took advantage of the holiday break to completely revamp TestNG's HTML reports, something I've been meaning to do for a very long time but never found the time to put at the top of my TODO list. I wrote the original reports pretty much with the very first version of TestNG, around 2004, and I hardly touched them since then. My intention with this rewrite was not just to revamp them visually but also technically, so that I could give myself as much freedom as possible to improve them from this point on. 

Here are some notes I took during this process. 

### Content and appearance

First of all, here are the [new reports](http://testng.org/new). They show all the suites on the same page with a banner at the top, a navigator pane on the left hand side (which always stays visible) and a main panel on the right hand side, which shows all the information you requested depending on which item you clicked in the navigator. Pretty straightforward. 

If you take a look at the source, you will see that it hardly contains any HTML: it's mostly made of `<div>` and `<span>`. I didn't really set out to do this initially, it's just that whenever I used HTML elements, I inherited undesirable CSS attributes (margins, paddings, etc...) which I ended up resetting manually, so after a while, it just seemed much easier to use `divs` and `spans` knowing that they start with a clean CSS slate. 

Since there is so much generated text, I pondered using a templating library to make my life easier. The first question to settle was: client side or server side templates? In this case, there is not really a "server" side, so the question is more "Java" or "Javascript" templates. I quickly rejected the client side approach which, while well adapted to serve pages over a network, doesn't seem to have much benefit in this particular case since the page is generated locally. As for the Java side, the two standard options for templates (Freemarker and Velocity) seemed quite overkill for what I was trying to do, so I ended up writing my own tiny implementation of [mustache.js](https://github.com/janl/mustache.js/) (which I've used in the past and liked quite a bit).. 

Once I had the templating code working, I started converting the Java code over to it but... something felt wrong. I quickly gained the impression that this was actually a step backward compared to doing the generation 100% from Java, and the reason quickly became apparent to me: the Java compiler. 

The problem with using templates is that you get very little help from the tools. Some template libraries allow you to include other templates, which can reduce the repetition, but it's still very easy to make simple typos or being forced to copy/paste a lot. In contrast, my Java hierarchies makes it quite trivial to, say, add a new panel on the right hand side with a link to the left. Implement the right class, declare it and it will automatically work, with the right defaults (CSS selectors) and a lot of the logic validated by the compiler. 

This comfort was too good to pass up so I scrapped my template idea (my mustache.js implementation is still around, though, and I might use it some time in the future) and I stuck to 100% Java generation. 

### Javascript and development tools

Picking [jQuery](http://jquery.com/) was a no-brainer, it's hard for me to imagine doing anything in Javascript that manipulates the DOM without using JQuery. The logic in the new reports is fairly simple and is just above one hundred lines of Javascript. 

Chrome's development environment is also quite superb (I'm sure other browsers' is just as good). In a nutshell, you have access to pretty much the same range of support that Eclipse or IDEA provides in Java: breakpoints, inspection and modification of variables, and even CSS debugging, which I've found invaluable to track down unexpected CSS behaviors (I came across quite a few). 

If you haven't kept up with what you can do with Chrome/Javascript/JQuery these days, try the following: 

  * Open <http://testng.org/new> in Chrome. 
  * Right click anywhere on the page and select `"Inspect element"`. This will open the document explorer at the bottom. 
  * With the focus in the document explorer, type `ESC`, which will open the REPL. 
  * Type `$('.navigator-suite-content').hide()`. 
  * This will collapse the content under both suites. 
You can see how easy it is to debug this kind of code. 

### Other libraries

If you select the `"Times"` link of the first test suite in the Navigator pane, you will see the following table: 

[ ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/times-reports.png) ](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/times-reports.png) **Click to enlarge**

I am using [Google's Chart Tools](http://code.google.com/apis/chart/) to display this table and it was quite straightforward to add. The only tricky part was how to generate the data in Javascript form and make sure that the table gets drawn only after this data has been initialized, which required using a few Javascript tricks to make sure the initialization order is correct. The Google Chart Tools are very powerful and I will probably use more of their API to display additional graphs in the TestNG reports (pie charts, etc...). 

### Conclusions

Here are my main take away points: 

  * CSS still feels like black magic to me. The theory is trivial on paper but in reality, I often come across results that just don't make sense. With the help of modern CSS debuggers, it's a little bit easier to find out what is happening and why (I especially like Chrome's "Computed style" which gives you a list of all the attributes that were derived from `.css` files), but there are still times where I feel completely helpless trying to find out why something is not how it should be. 
  * I'm a bit concerned with the size of the reports: I was quite surprised to find out that the reports you're looking at is one meg in size. Admittedly, it shows over five hundred test methods, but the fact that it contains all the panels, even those the user might not be interested in, is a potential place for improvement. I might decide to put each individual pane in its own file. 
  * Javascript's rubbery type system is handy for this kind of task, but I'm still a bit unsure how well it scales to hundreds of thousands of lines of code. For example, I really enjoy being able to say `if (v)` regardless of what type `v` is and have Javascript's truthiness values do the right thing. Similarly, it's nice to be able to add a parameter to a function and not having to update one single call site (if you call a Javascript method with less parameters than it expects, the extra parameters simply receive the `Undefined` value. Obviously you need to test for this in said function). 
  * JQuery is great and it's probably making Javascript even more popular than it already is. I'm hoping the Dart team is taking notes and making sure that a similarly powerful and elegant framework will be available in Dart. 


Finally, a call for help: I welcome any feedback on how to improve the CSS of these new reports, so if you are so inclined, feel free to improve the look of these new reports and share your improvements with me. I will be very grateful. 

Happy new year!
