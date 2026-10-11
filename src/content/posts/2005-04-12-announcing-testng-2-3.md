---
title: Announcing TestNG 2.3
date: '2005-04-12T09:55:17'
slug: announcing-testng-2-3
categories:
- Java
comments:
- id: 3373
  author: Damien B
  date: '2005-04-12T19:00:48'
  content: 'Great ! Just one thing I stumbled upon, but I don''t know if it''s worth fixing.

    I can''t remember the exacts steps, but it involves a combination of JDK 1.4 and 1.5 in the same Eclipse config. The rough scenario is: create class, annotate code (tiger way), create TestNG running configuration with the wizard, launch... nothing happens. The xml file was created with annotations="false" (which was perhaps correct at the time where the configuration was created), and thus it wasn''t looking the config in the right place.

    Perhaps it could issue a warning or an info message if annotates is false and tiger annotations are found?'
  replies: []
- id: 3374
  author: Ruslan Zenin
  date: '2005-04-13T02:34:26'
  content: 'This is great that you are progressing (especially with the plugin).

    It will make testNG more popular.

    I just noticed in the plugin that right click menu on the existing test has strange text labels (looks like it is missing recources)

    !ExpandAllAction.text!

    or !OpenEditorAction.label.text!

    Is it a bug?'
  replies: []
- id: 3375
  author: 'Confluence: Gonzo'
  date: '2005-04-14T09:28:01'
  content: '<strong>TestNG joins OpenSymphony</strong>

    Cedric''s testing framework has joined the OpenSymphony ranks. See the news here'
  replies: []
---

The TestNG team is happy to announce the availability of TestNG 2.3.

The version is available at [ http://beust.com/weblog/testng](http://beust.com/weblog/testng) as well as the new documentation, which has been considerably improved (highlighted code snippets, [detailed DTD](http://beust.com/weblog/testng/testng-1.0.dtd.html), ant task and description of all the new features).

What's new:

  * `beforeSuite`, `afterSuite`, `beforeTest`, ` afterTest`
  * Revamped ant task with haltonfailure and other helpful flags
  * Better stack traces and improved level control for verbosity
  * Better syntax for including and excluding methods in `testng.xml`
  * Test classes can be invoked on the command line
  * ... and many bug fixes.



For Eclipse users, a new version (1.1.1) of the Eclipse plug-in that includes this new TestNG version is available on the [ remote update site](http://beust.com/weblog/eclipse) or for [direct download](http://beust.com/weblog/testng/testng-eclipse.zip).

Also, TestNG has joined [ OpenSymphony](http://opensymphony.com) (big thanks to Patrick and Hani for setting this up).  As a consequence of this move, there is now a [TestNG users forum](http://forums.opensymphony.com/forum.jspa?forumID=14) as well as a Wiki and JIRA for issue tracking.

The [users mailing-list](http://groups-beta.google.com/group/testng-users/) has been moved to [Google Groups](http://groups-beta.google.com) and is connected to the forum, so you only need to subscribe to one.

Try it and let us know what you think!
