---
title: Rerunning failed tests
date: '2005-03-04T12:33:31'
slug: rerunning-failed-tests
categories:
- Java
comments:
- id: 3240
  author: Bob McWhirter
  date: '2005-03-04T09:48:43'
  content: 'Check out SysUnit for one take on doing multi-threaded (and even distributed) tests.

    Currently, it''s built upon JUnit 3.8.x, but the ideas could be applied to yours.'
  replies: []
- id: 3241
  author: Bob McWhirter
  date: '2005-03-04T09:49:18'
  content: 'I forgot the URL...

    http://www.sysunit.org/'
  replies: []
- id: 3242
  author: Anjan Bacchu
  date: '2005-03-04T12:51:58'
  content: 'Hi There,

    sysunit -- the download is available at

    http://cvs.sysunit.codehaus.org/root.tar.gz?view=tar .

    BR,

    ~A'
  replies: []
- id: 3243
  author: Robert Watkins
  date: '2005-03-04T14:18:02'
  content: 'For a similar idea, you can look at the Continuous Testing plugin for Eclipse; it has options to run:

    * failing tests first

    * most recent tests first (good for TDD)

    * slowest tests first'
  replies: []
- id: 3244
  author: Alex Popescu (the_mindstorm)
  date: '2005-03-04T14:20:42'
  content: 'The failed-rerun scenario is not new, this feature being in Eclipse for quite a while. However TestNG implementation looks more appealing to me as the suite will be persistent between different sessions.

    cheers,

    --

    :alex |.::the_mindstorm::.|'
  replies: []
- id: 3245
  author: Trond Andersen
  date: '2005-03-05T04:10:31'
  content: 'What do you think about tool adoption of TestNG? Have the IDE developers invested too much efforts in working around JUnit''s weakness to convert to TestNG?

    The question about running the previously failed tests are on the todo list to Jetbrains on the next version of IDEA:

    http://www.intellij.net/eap/products/idea/irida.jsp'
  replies: []
- id: 3246
  author: Zsolt
  date: '2005-03-05T07:13:55'
  content: I prefer running the full test suite every time... If I fix a failing test and I only rerun the previously failing tests how would I know that I broke another test that ran perfectly before??
  replies: []
- id: 3247
  author: Angsuman Chakraborty
  date: '2005-03-06T22:43:34'
  content: 'We do concurrent tests routinely, using JUnit, for server side components. They are an absolute must.

    As to Zsolt I think the only value of running failed tests is to quickly test the fix, specially where a full run is very time consuming.'
  replies: []
- id: 3248
  author: Angsuman Chakraborty
  date: '2005-03-06T22:44:57'
  content: 'Cedric,

    Please remove my email address from my previous comment. I didn''t realize your blog displays the actual email :(

    Take care,

    Angsuman'
  replies: []
- id: 3249
  author: Mike
  date: '2005-03-10T19:57:58'
  content: '...Repeating failed tests...

    ...

    Yah, maybe the gnomes in India will fix the code while you''re sleeping (seriously, one of the benefits of outsourcing that managers like is you find a bug at 4:00, it''s fixed next morning due to the time difference)

    :)

    But doesn''t cruise control do that already?  I haven''t looked at the scheduler options, but surely that shouldn''t be too hard to implement...Just went to the No Fluff No Stuff Symposium, where Bruce Tate recommended Cruise Control.  Cool stuff.

    http://www.pragmaticprogrammer.com/starter_kit/au/scheduled.pdf

    ...

    ...Concurrent testing....

    ...

    How about a Multi Threaded Test Case?

    http://www.pragmaticprogrammer.com/starter_kit/au/scheduled.pdf'
  replies: []
- id: 3250
  author: Mike
  date: '2005-03-10T20:00:13'
  content: 'Apparently your blog software doesn''t understand hrefs, here''s the actual link for the Multi Threaded Test Case:

    http://today.java.net/pub/a/today/2003/08/06/multithreadedTests.html'
  replies: []
- id: 3251
  author: Jeremy Lemaire
  date: '2005-03-11T23:02:18'
  content: 'You can also take a look at:

    http://www.clarkware.com/software/JUnitPerf.html

    It''s used by Lucene'
  replies: []
- id: 3252
  author: mitchum deodorant
  date: '2006-09-28T13:14:58'
  content: big thank
  replies: []
---

I was chatting with Hani last night and two interesting ideas came up:

  * **Repeating failed tests.  
  
**When a test run shows several failed tests, the first thing that developers want to do is rerun only those tests that failed, and not the entire suite.  An easy way to implement this with TestNG is to generate a `testng-failed.xml` file that contains all the methods that failed.  If you need to rerun these failed tests, just invoke TestNG with this XML file and you are done.  
  
The only challenge here is that this file also needs to include all the methods that the failed tests depend upon, but that's pretty easy since TestNG already supports this.  
  
This feature also illustrates the importance of separating your test static model (business logic) from the runtime model (which tests are run).  If you wanted to provide a similar feature with JUnit, you would need to generate some Java code creating a TestSuite containing all the failed tests (making sure you get the imports right, etc...) and compile this suite, or by generating an ant file with the correct decorator.  
 
  * **Concurrent testing.**  
  
The original idea was to be have the testing framework invoke a test method several times with concurrent threads, but I'm thinking that this should be extended to entire groups. You put all your methods in a certain group and you specify that this group should be run by a thread pool a certain number of times.

I think the methods being invoked concurrently would not necessary contain the asserts and that the real testing would be done by a method later (which, obviously, will depend on that group).  
  
Another thing is that this specification is a runtime concern, so I think it belongs in `testng.xml`, not in the annotations.



Any thoughts?
