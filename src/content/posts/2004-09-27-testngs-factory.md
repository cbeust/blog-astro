---
title: TestNG's @Factory
date: '2004-09-27T13:32:16'
slug: testngs-factory
categories:
- Java
comments:
- id: 2532
  author: rob
  date: '2004-10-06T13:11:00'
  content: 'What is the point of using generics in the following? Are you just being a geek?

    List vResult = new ArrayList();'
  replies: []
- id: 2533
  author: ''
  date: '2004-10-06T13:12:19'
  content: 'Great the less than and greater than signs got ommitted or rendered..

    List&lt;Object&gt; vResult = new ArrayList&lt;File&gt;();'
  replies: []
- id: 2534
  author: ''
  date: '2004-10-15T09:46:10'
  content: Also, it is not correctly typed (although probably allowed by Java's braindead generics system).  A list of Files is not type compatible with a list of objects.  Assigning List to List opens a hole in the type system that must be caught at runtime (and probably isn't).
  replies: []
---

I have extolled the virtue of external runtime configuration for testing with TestNG for a while now. More simply put: when you decide to run a different set of tests, you shouldn't have to recompile any Java code. This kind of information is dynamic and Java is therefore not the best way to express it. 

Having said that, there is some undeniable power in the ability to express this configuration from a programming language. JUnit offers this with the concept of Test Suites (and the method suite()), and for this, TestNG has the @Factory annotation. 

Imagine the following situation: you have a class that validates an XML file and you want to run this class on several files. The problem is: you don't know in advance what these XML files are (they might be "all the XML files in this directory"). Obviously, a programmatic approach is needed for this. 

Enter @Factory. 

```java
public class XMLFilesTest {
@Factory
public Object[] factory() {
List<Object> vResult = new ArrayList<File>();
File[] files = // read files from the directory
for (File f : files) {
vResult.add(new XMLValidatorTest(f));
}
return vResult.toArray(new Object[vResult.size()]);
}
}
```

Once you have a test class that has a @Factory method, all you need to do is specify this method in your testng.xml: 

```xml
<suite>
<test name="XML" >
<classes>
<class name="test.sample.XMLFilesTest" />
</classes>
</test>
</suite>
```

TestNG will pick you your @Factory method, invoke it, retrieve all the objects you returned and consider each of them as a separate TestNG test class. 

Interestingly, I initially added this feature to allow tests to provide multiple instances of themselves. This is handy when you are testing something like the reentrancy of your class, or when you want to stress-test a server (write a simple test, create one thousand instances of that class and run TestNG on it). As it turns out, this feature can be used to return any kind of instances, not just instances of class the factory belongs to. 

Can you think of other potential uses for @Factory?
