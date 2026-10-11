---
title: YAML, the forgotten victim of the format wars
date: '2010-08-15T19:29:10'
slug: yaml-the-forgotten-victim-of-the-format-wars
categories:
- General
comments:
- id: 8378
  author: Herv??
  date: '2010-08-16T02:20:23'
  content: 'The wikipedia pages are very interesting about Yaml format : YAML, of course, at http://en.wikipedia.org/wiki/YAML#Comparison_to_other_data_structure_format_languages and "Comparison of data serialization formats" at http://en.wikipedia.org/wiki/Comparison_of_data_serialization_formats

    French at http://fr.wikipedia.org/wiki/YAML

    So yes, go Yaml !'
  replies: []
- id: 8379
  author: Andrey Somov
  date: '2010-08-16T04:51:31'
  content: 'Hi C??dric,

    thank you for using SnakeYAML.

    I am a developer of SnakeYAML and I am glad you find it useful :)

    SnakeYAML is under active development (source is changed every week http://code.google.com/p/snakeyaml/source/list) and last week a new release has been delivered.

    Some code you use is redundant and I can try to help you to be up-to-date with the current release.

    I have found the source at http://github.com/cbeust/testng.

    With the latest release (1.7) the code in TestingNG can be significantly shorter.

    Check this wiki page: http://code.google.com/p/snakeyaml/wiki/TestingNG_YAML

    You have to use the TypeDescription class when the runtime information is not complete. Since XmlSuite is a standard JavaBean no more additional configuration should be required.

    Feel free to ask questions or propose an improvement (http://code.google.com/p/snakeyaml/issues/list)

    Any feedback is welcome!

    -

    Andrey'
  replies: []
- id: 8380
  author: PJ
  date: '2010-08-16T05:45:36'
  content: I think I'd got with JSON instead of YAML if you're going to add another format; the tooling is everywhere (which you note is a downside to YAML).
  replies: []
- id: 8381
  author: Manfred Moser
  date: '2010-08-16T07:55:47'
  content: Interesting side note regarding YAML. Maven 3 in the form of polyglot maven supports pom files in yaml theformat and it does indeed make the files pleasant to work with staying expressive yet tight. A nice ddition to TestNG.
  replies: []
- id: 8382
  author: David Andrianavalontsalama
  date: '2010-08-16T11:35:12'
  content: "I've been using YAML along with Java for years, for configuration files of course, but above all for description files. Expressivity is key.\nWhen you write this:\nname: SingleSuite\nthreadCount: 4\nparameters: { n: 42 }\ntests:\n  - name: Regression2\n    parameters: { count: 10 }\n    excludedGroups: [ broken ]\n    classes:\n      - test.listeners.ResultEndMillisTest\nConsider you could write this:\nSingleSuite:\n  threadCount: 4\n  parameters:\n    n: 42 # or: parameters: n=42. Consider the user, not the format.\n  tests:\n    - Regression2: # use a list if tests must be ordered\n        parameters:\n          count: 10 # or, etc.\n        excludedGroups: broken\n        classes: test.listeners.ResultEndMillisTest\nAbout YAML I once wrote that: http://jefute.blogspot.com/2008/03/yaml-est-au-dessus-de-xml.html (in French)"
  replies: []
- id: 8383
  author: Bill K
  date: '2010-08-18T17:00:54'
  content: 'I don''t really understand why yaml isn''t just an alternate way to specify XML--meaning that both should be parsed by a parser--perhaps with a #! YAML or #!XML at the top (Well, actually it''s really easy to tell the difference just by the angle brackets, if you don''t see them then try YAML).  I believe there is nearly a 1-1 correspondence in functionality.'
  replies: []
- id: 8384
  author: David Garcia
  date: '2010-09-23T17:48:37'
  content: 'There is a tool called kwalify to validate yaml schemas, unfortunately it doesn''t seem to be very active indevelopment

    http://www.kuwata-lab.com/kwalify/'
  replies: []
- id: 8385
  author: Announcing TestNG 6.0 &laquo; Otaku, Cedric&#039;s blog
  date: '2011-03-15T14:12:32'
  content: '[...] discussed my choice of YAML in this blog entry, and here is the official TestNG [...]'
  replies: []
- id: 8386
  author: Chris Aniszczyk
  date: '2011-03-15T14:22:02'
  content: You can probably use Xtext from Eclipse (http://www.eclipse.org/Xtext/) to create a grammar and get good tooling out of the box. Sure it will be a bit of work, but shouldn't be that bad.
  replies: []
- id: 8387
  author: sam
  date: '2011-05-11T21:51:45'
  content: 'Hi cool stuff!

    can you please give an example of  how  this XML  YAML converter will look like. thanx in advance'
  replies: []
---

I have been thinking about providing an additional way of specifying test suites for TestNG for a while. The current format is XML, which has quite a few benefits, but no matter how hard you try to specify an XML file to make it as concise as possible, the end result will always end up being more verbose than you'd really like, especially if that format grows organically throughout the years and ends up having to cover cases that you didn't envision initially. I designed the TestNG DTD in 2004, and while I think it's evolved reasonably well, I'm looking for a format that might be easier to work with. 

[YAML](http://www.yaml.org/) attracted my attention when I started playing with Ruby on Rails a few years ago. It's fairly expressive and concise, but for some reason, it never really took off in the Java world. These past few days, I started experimenting with YAML and TestNG, and I have to say that the initial results are pretty promising. 

Here is a simple testng.xml: 

```xml
  <parameter name="n" value="42" />
    
        <exclude name="broken" />
    
      <class name="test.listeners.ResultEndMillisTest" />
```

and here is its YAML version: 

```java
name: SingleSuite
threadCount: 4
parameters: { n: 42 }
tests:
  - name: Regression2
    parameters: { count: 10 }
    excludedGroups: [ broken ]
    classes:
      - test.listeners.ResultEndMillisTest
```

The result is even more telling on bigger files: 

```text
-rw-r--r--  1 cbeust  502  17638 Aug  6 11:07 src/test/resources/testng.xml
-rw-r--r--  1 cbeust  502  10732 Aug 12 16:03 src/test/resources/testng.yaml
```

That's almost a 40% reduction in size. And the gain in readability is also pretty obvious: here is [testng.xml](http://github.com/cbeust/testng/blob/yaml/src/test/resources/testng.xml) and [testng.yaml](http://github.com/cbeust/testng/blob/yaml/src/test/resources/testng.yaml). By the way, this is the main file that describes all the TestNG tests and the YAML file is completely equivalent to its XML version. 

Adding a YAML front-end to TestNG turned out to be pretty easy. I found several libraries and I ended up picking [SnakeYAML](http://code.google.com/p/snakeyaml/) because it still seemed relatively active (the last activity dates from January) and also because it's available in Maven. 

TestNG's XML front-end is entirely captured in the [org.testng.xml](http://www.testng.org/javadocs/org/testng/xml/package-frame.html) package, which only contains six classes. Each of these classes maps exactly to a TestNG tag (`<suite>` to `XmlSuite`, `<test>` to `XmlTest`, etc...). As long as you can hand an `XmlSuite` object that defines the root of your suite to TestNG, the engine doesn't care what file was used to produce it. 

The only task was therefore to parse the YAML file and create all the XML objects that TestNG expects. YAML makes this pretty easy since it lets you map keywords to classes. 

The entire effort is contained in these few lines: 

```java
Constructor constructor = new Constructor(XmlSuite.class);
TypeDescription suiteDescription = new TypeDescription(XmlSuite.class);
suiteDescription.putListPropertyType("packages", XmlPackage.class);
suiteDescription.putListPropertyType("listeners", String.class);
suiteDescription.putListPropertyType("tests", XmlTest.class);
suiteDescription.putListPropertyType("method-selectors",
    XmlMethodSelector.class);
constructor.addTypeDescription(suiteDescription);
TypeDescription testDescription = new TypeDescription(XmlTest.class);
testDescription.putListPropertyType("classes", XmlClass.class);
testDescription.putMapPropertyType("metaGroups", String.class, List.class);
testDescription.putListPropertyType("method-selectors",
    XmlMethodSelector.class);
constructor.addTypeDescription(testDescription);
Loader loader = new Loader(constructor);
org.yaml.snakeyaml.Yaml y = new org.yaml.snakeyaml.Yaml(loader);
FileInputStream is = new FileInputStream(new File(filePath));
XmlSuite result = (XmlSuite) y.load(is);
```

This part was really easy. I had to make a few additional adjustments that I'll gloss over, but overall, the process was very smooth. 

Additionally, since XML objects can dump themselves in XML, adding the similar functionality for YAML gave me an XML <-> YAML converter for free, which will come in handy for users who want to convert their files or just see for themselves how their XML files will look once converted to YAML. 

As for YAML itself, the specification makes it look harder than it really is, so here are a few simple rules: 

  * You can define key-value pairs, lists and maps. 
  * Lists and maps can be specified either on one line or on several lines. 
  * Single line list: [ a, b, c ] 
  * Single line map: { a:1, b:2, c:3 } 
  * Multi line list: 

```text
    - a
        - b
        - c
```

  * Multi line map: 

```yaml
    a: 1
        b: 2
        c: 3
```

There are a couple of downsides to YAML: there are not a lot of tools available for it and it's also not very easy to validate (I am not aware of anything similar to a DTD or a schema). Despite these limitations, I'm still very tempted to officially add support for YAML in TestNG because of the convenience it brings. 

If you have any experience to share about YAML, please feel free to comment.
