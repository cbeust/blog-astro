---
title: XML is not human-editable
date: '2005-01-24T08:19:28'
slug: xml-is-not-human-editable
categories:
- Java
comments:
- id: 3024
  author: PA
  date: '2005-01-24T08:06:32'
  content: 'There is only One Right Way to do things. Always.

    http://www.eod.com/devil/archive/xml.html

    Then there are the heretics.

    http://yaml.org/

    http://alt.textdrive.com/pl/'
  replies: []
- id: 3025
  author: PA
  date: '2005-01-24T08:06:56'
  content: 'There is only One Right Way to do things. Always.

    http://www.eod.com/devil/archive/xml.html

    Then there are the heretics.

    http://yaml.org/

    http://alt.textdrive.com/pl/'
  replies: []
- id: 3026
  author: Klaus Meffert
  date: '2005-01-24T08:24:12'
  content: 'Nice to have an agreement on the degree of human-readability of XML. I understand your message about XML as a configuration entity. I could think of quite easy ways how to make JUnit just run the tests you like without having an XML file. A simple property-file could also do (although not that beautiful as XML but more practicable, IMO). There are test runners for JUnit available allowing for the selection of suites. Selecting a subset of tests out of a suite of tests could lead to the conclusion that the design of the suites should be reconsidered.

    Admitted: One good thing about XML is that it is a standardized data (or even information) container. I could remember the beginning of the XML era when you could read everywhere that with XML now there are no more interop or interface problems etc. This might not be the tonus of most people knowing IT a bit, but that''s what I wanted to reflect with my statement.'
  replies: []
- id: 3027
  author: conan dalton
  date: '2005-01-24T12:20:23'
  content: 'totally agree on the non-readability of xml, even if your doc isn''t polluted to death with those dreadful "namespaces" and entities and whatnot ... xml is nice though because you can write an editor that''s specific for your DTD, or you can use a generic xml editor on the same file, or if in the worst case none of the above are available, good old vi (or even notepad) can still come to the rescue. You wanna fair helping of patience though ...

    totally disagree on junit - first of all it''s really easy to run a subset of your tests (right click on a folder and choose "run tests" if you''re in intellij, for example); secondly as an aspiring extremo i prefer to run all of my tests, all of the time, anyway, so the issue doesn''t even arise.

    see also http://www.softify.com/softify-test-util/ for a really nice way to search for and filter tests (no recompilation required to run a different subset)

    great blog, don''t stop!'
  replies: []
- id: 3028
  author: sam newman
  date: '2005-01-25T01:36:36'
  content: 'Someone once said that all these configuration files we use soon become languages in their own right, and all too often XML is used as a lazy solution to provide a human editable configuration file. Writing an enterprise app? That EAR file of yours will need about 3 xml files, that you''ll have to edit, all for a different purpose. Let alone if you have WAR files in that thing, or if sub-systems have XML defined config.

    Configuration files are needed, but XML is a bad format for them. I said it''s the lazy choice, and it is - programmers do it because they know they can use the existing XML tool support out there to erad and manipulate them. Config files are a user interface, and should be approached as such. Make it easy for the user to use, then worry about how to load them. If you want to create more human readable config files but still use existing API''s for reading them, then you might want to consider using normal property files, or for more complex config I''d suggest YAML - although the more complex configuration that''s required, the more reason for bundling some kind of configuration tool with your app.'
  replies: []
- id: 3029
  author: Anders
  date: '2005-12-06T04:41:59'
  content: XML has its limitations for sure but it is better than the mess we had before it arrived or the alternatives out there. regards
  replies: []
- id: 3030
  author: dsf
  date: '2005-12-06T11:29:22'
  content: sdfd
  replies: []
---

[ This post](http://jroller.com/comments/acg6764/JavaASerenePerspective/junit_testng_why#comments) brings up a few interesting comments about XML:

> XML seems to me overhyped. it is *just* a container for data structuring it in most cases. 

Saying that XML is overhyped is a bit like saying that text files are overhyped.  The thing is, before XML became a standard, we had a flurry of text formats used to contain various external information that programs need (take a look at sendmail.cf or the hundreds of different configuration files used by any UNIX installation for example).  You never knew what to expect if you tried to read or edit one.

At least, XML gave us a suite of tools that make editing and reading such files easier.  It also gave us a wealth of API's in all languages to avoid reinventing your own parser, another Good Thing.

In that same comment, Klaus adds:

> Besides that it is in fact *not really* human-editable. 

... and this I fully agree with.  This is a message I have been pushing for years but I've had a very hard time convincing people.  My early dislike for XML as an editable format was what prompted me to create EJBGen in the first place, which was one of the very early tools that used annotations to replace XML (EJBGen started in [early 2001](http://groups.yahoo.com/group/ejbgen/), and its immediate success showed that I was not the only one having a problem with XML as an editable format).

It is pretty obvious to me now that as soon as you are creating more than just a toy program and that your code needs to store data outside the code, XML is the only sane way to go.

So the question is not really "Why is TestNG using XML?" but "Why is TestNG using an external file to configure its tests?", as opposed to JUnit where this is done in code.

The answer is that I make a clear distinction between the static (the business logic) and the dyamic (what tests are being run) part of your tests.  I believe JUnit makes the mistake of conflating the two, which forces you to recompile your code when you decide to run a different set of tests.

If you picture a team of ten programmers, each of them will want to run a different set of tests as part of their day, and all the time spent recompiling their test suites is a waste of time.  Not mentioning that they are modifying code that they need to remember not to submit to the source control system, since it only runs a subset of all the tests.
