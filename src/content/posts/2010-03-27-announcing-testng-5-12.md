---
title: Announcing TestNG 5.12
date: '2010-03-27T12:54:13'
slug: announcing-testng-5-12
categories:
- General
comments:
- id: 8093
  author: Mohamed Mansour
  date: '2010-03-27T14:56:27'
  content: Awesome work Cedric! Looking forward to using @Listeners :)
  replies: []
- id: 8094
  author: Sascha Schwarze
  date: '2010-03-28T08:41:54'
  content: Hi C??dric, I think the ZIP file is missing the testng-5.12.jar file.
  replies: []
- id: 8095
  author: TestNG 5.12 | Edit - Il blog di HTML.it
  date: '2010-04-07T00:56:39'
  content: '[...] chi volesse saperne di pi&ugrave;, il sito ufficiale e l&#8217;annuncio sul blog personale di Cedric Beust, lead developer di [...]'
  replies: []
- id: 8096
  author: Pedro Newsletter 25-31.03.2010 &laquo; Pragmatic Programmer Issues &#8211; pietrowski.info
  date: '2010-04-11T09:13:42'
  content: '[...] TestNG 5.12 released, watch out: version increased by 0.01 but they drop java 1.4 support [...]'
  replies: []
- id: 8097
  author: Tom
  date: '2010-04-14T10:22:25'
  content: Cedric, I think the priority parameter of @Test is not working. Is any additional configuration required with this?
  replies: []
- id: 8098
  author: TestNG 5.12 Available for Maven Users &laquo; Brett Porter
  date: '2010-04-28T11:00:52'
  content: '[...] you&#8217;ve been using TestNG with Maven, or are familiar with the changes in TestNG 5.12, you&#8217;ll notice there is a difference in this version to previous releases. There is no longer [...]'
  replies: []
- id: 8099
  author: Elisha Ebenezer
  date: '2010-05-06T11:35:45'
  content: 'Hi Cedric,

    I was trying to push for using TestNG in our project. And my company as for SHA-1 or MD5 checksums or a certificate to verify the integrity of the files downloaded. Can you please update the checksum information on your site. This will help me to pursuade my company for using testng in our project. Also, it helps to cross-check the integrity of downloaded file.

    Thanks,

    Elisha Ebenezer'
  replies: []
- id: 8100
  author: Scott Yancey
  date: '2010-07-11T21:17:04'
  content: 'I''m using Eclipse plugin version 5.12.06 and I still can''t resolve the issue you list here as being resolved:

    "Fixed: @Test(groups = [constant]) was taking name of the constant instead of its value. "

    When I select my group name(s) in the launch config, no tests end up being run.  Is there something else that needs to be done here?  Here''s my class annotation:

    @Test(groups={TestGroups.ALL, TestGroups.CUSTOMER})'
  replies: []
- id: 8101
  author: Scott Yancey
  date: '2010-07-12T16:12:49'
  content: 'I should have clarified in my post above that when I use the following syntax:

    @Test(groups={"All", "Customer"})

    Then the tests are recognized and executed properly.'
  replies: []
- id: 8102
  author: suar
  date: '2010-11-23T08:06:45'
  content: 'Hi Cedric,

    I''m using data providers(10 inputs), when I run the tests, report is having duplicate results

    10 test are pass is appearing ten times'
  replies: []
- id: 8103
  author: Peg Rhodes
  date: '2011-04-21T10:51:33'
  content: I really like the new file wizard makes adding classes with annotation so much easier and works pretty slick thanks
  replies: []
---

I'm happy to announce the release of [TestNG 5.12](https://testng.org). 

The most important change is that JDK 1.4 and Javadoc annotations are no longer supported. If you are still using JDK 1.4, you will have to stick with TestNG 5.11. 

The most notable new feature in this new release is the annotation [`@Listeners`](https://testng.org/javadocs/index.html), which lets you add listeners directly in Java (no need for XML). Any TestNG listener (i.e. any class that extends [`ITestNGListener`](https://testng.org/javadocs/org/testng/ITestNGListener.html)) can be used as a value for this annotation, except [`IAnnotationTransformer`](https://testng.org/javadocs/org/testng/IAnnotationTransformer.html) which needs to be known before TestNG starts parsing your annotations. 

For example, suppose that one test class is failing and you want to share the full report with a coworker, you can use the `EmailableReporter` to generate a single HTML file that you can then email. All you need to do is add the following `@Listeners` annotation: 

```java
@Listeners(EmailableReporter.class)
public class VerifySampleTest {
  // ...
}
```

and then run the class with TestNG, which will generate the following report: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/emailable-reporter.png)

I also made a few improvements to the Eclipse plug-in, such as a New File wizard: 

![](https://testng.org/pictures/new-2.png)

You can download [TestNG](https://testng.org/doc/download.html) and the [TestNG Eclipse plug-in](https://beust.com/weblog/eclipse) at the usual places, and the new version will be available in the main Maven repository shortly. Here is the full change log for 5.12: 

**Core**

  * Removed: JDK 1.4 and Javadoc annotation support 
  * Added: `@Listeners`
  * Added: `IAttributes#getAttributeNames` and `IAttributes#removeAttribute`
  * Added: testng-results.xml now includes test duration in the <suite> tag (Cosmin Marginean) 
  * Added: Injection now works for data providers 
  * Added: `TestNG#setObjectFactory(IObjectFactory)`
  * Added: `Priorities: @Test(priority = -1)`
  * Added: New attribute invocation-numbers in <include>
  * Added: testng-failed.xml only contains the data provider invocations that failed 
  * Added: `IInvokedMethodListener2` to have access to `ITestContext` in listeners (Karthik Krishnan) 
  * Fixed: `@Before*` methods run from factories were not properly interleaved 
  * Fixed: The TextReporter reports skipped tests as PASSED (Ankur Agrawal) 
**Eclipse**

  * Added: New file wizard: can now create a class with annotations, including `@DataProvider`
  * Added: You can now select multiple XML suites to be run in the launch dialog 
  * Fixed: `@Test(groups = [constant])` was taking name of the constant instead of its value. 
  * Fixed: The custom XML file is now created in the temp directory instead of inside the project 
  * Fixed: In the launch dialog, now display an error if trying to pick groups when no project is selected 
  * Fixed: Was not setting the parallel attribute correctly on the temporary XML file
