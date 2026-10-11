---
title: Announcing TestNG 2.4
date: '2005-07-05T11:19:35'
slug: announcing-testng-2-4
categories:
- Java
comments:
- id: 3822
  author: Wim
  date: '2005-07-05T23:43:48'
  content: 'I can''t see the changelog, because you need to make yourself a member of the google discussion group which I really don''t want to do, just to see the changelog.

    BTW: Do you have plans to build testng (and it''s website) using Maven? I think it really helps people to find their way on the website.'
  replies: []
- id: 3823
  author: Sysiphus
  date: '2005-07-07T12:57:37'
  content: Please, do we really have to register to Google Groups only to read the changelog?
  replies: []
- id: 3824
  author: ''
  date: '2005-07-07T13:00:45'
  content: 'The only reason why I didn''t post it is because honestly, it''s quite boring for non TestNG users...  but here goes.

    2.4

    Changed: New package:  testng.org

    Fixed: Bug with @ExpectedException occuring the parallel mode

    Fixed: Bug with parameters and beforeTest

    Added: IInstanceInfo support

    Fixed: methods were not excluded when included by groups

    Fixed: testng-failures.xml is now including also the beforeSuite/afterSuite methods

    Fixed: generating the testng-failures.xml is now working as expected

    Fixed: Factories call all the tests even if some of them fail along the way

    Fixed: Better JUnit support (wasn''t creating individual instances)

    Fixed: dependsOnGroups didn''t work across different classes

    Added: command line (and Ant) -groups option

    Added: @Parameters (and made parameters attribute deprecated)

    Added: Parameters for constructors

    Fixed: Better interleaving of before/afterTestMethods

    Fixed: Ant task

    Fixed: TestNGException thrown when TestNG conditions are not fulfilled

    Documentation:

    - New assert classes

    - New ways to launch

    - JUnitConverter documentation

    - new beforeSuite/afterSuite'
  replies: []
- id: 3825
  author: Sisyphus
  date: '2005-07-07T13:06:47'
  content: Thanks!
  replies: []
- id: 3826
  author: ''
  date: '2005-07-13T03:23:16'
  content: Where's Andrew Glover making use of the TestNG Eclipse plug-in in his Flash demo? =)
  replies: []
---

The TestNG team is happy to announce the release of [TestNG 2.4](http://testng.org).

A lot of fixes and improvements have gone into this release (see the [ complete list](http://groups-beta.google.com/group/testng-users/browse_thread/thread/241a9436e912c899/beab04a45efa14de#beab04a45efa14de)) but the most important feature is the new Web site (<http://testng.org>) and the new packaging (`org.testng.*`).

There are also a couple of items I want to mention briefly:

  * A [ Flash demo of the Eclipse plug-in](http://www.vanwardtechnologies.com/articles/testng/demo01/TestNGv2_viewlet_swf.html), created by Andrew Glover (who also set up a [ TestNG site with articles and resources](http://www.vanwardtechnologies.com/articles/testng/demo01/TestNGv2_viewlet_swf.html)).
  * A [ TestNG Maven plug-in](http://www.vanwardtechnologies.com/startingwithtestng.php).  I couldn't include it in this release, but it is now part of our CVS depot and will be included in 2.4.1.



Big thanks go to Alexandru Popescu, Andrew Glover, Thierry Janaudy and Russel Winder for their participation to this new release!

You can [download TestNG 2.4 here](http://beust.com/weblog/testng/testng-2.4.zip).  The Eclipse plug-in has also been updated to this new version and can be obtained from the update site (<http://beust.com/weblog/eclipse>).
