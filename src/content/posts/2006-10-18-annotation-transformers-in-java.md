---
title: Annotation transformers in Java
date: '2006-10-18T11:03:17'
slug: annotation-transformers-in-java
categories:
- Java
comments:
- id: 6082
  author: Kasper Nielsen
  date: '2006-10-18T11:27:13'
  content: 'public interface IAnnotationTransformer {

    public void transform(ITest annotation, Class testClass,

    Constructor testConstructor, Method testMethod);

    }

    why not

    public interface IAnnotationTransformer {

    void transform(ITest annotation, Class testClass);

    void transform(ITest annotation, Constructor testConstructor);

    void transform(ITest annotation, Method testMethod);

    }

    and then have a

    public abstract class AbstractAnnotationTransformer implements IAnnotationTransformer {

    public void transform(ITest annotation, Class testClass){}

    public void transform(ITest annotation, Constructor testConstructor){}

    public void transform(ITest annotation, Method testMethod){}

    }

    that "lazy" users can override. Parsing null values is just ugly and leads to stupid errors. Also, you need to test an extra conditional (if (testClass!=null)) if you want those 100 %..'
  replies: []
- id: 6083
  author: Emmanuel Pirsch
  date: '2006-10-18T12:12:19'
  content: 'If one could bring the Open Class concept of ruby to Java, that would do it... All one would need would be to declare the method again in a new Java class of the same qualified name and override the annotation there.

    Maybe this can be done in Groovy or with the help of a special class loader that would modify existing class based on new class definitions.

    BTW, your XML example is probably more complicated than necessary. You could have this instead :

    Granted, this will not solve refactoring, but this will be short.'
  replies: []
- id: 6084
  author: Emmanuel Pirsch
  date: '2006-10-18T12:15:07'
  content: 'grrr... XML gone... Should''ve previewed...

    &lt;override-annotation for="org.foo.tests.MyClass.verify" name="org.testng.Test.invocationCount" value="15"/&gt;'
  replies: []
- id: 6085
  author: Emmanuel Bernard
  date: '2006-10-18T13:26:58'
  content: 'Since an annotation is an interface, we use dynamic proxies to implement an annotation when we need to alter them in Hibernate Annotations. You have to create one from scratch though, no way to change an existing annotation.

    A more challenging work is to "resolve" generics ;-)'
  replies: []
- id: 6086
  author: Emmanuel Bernard
  date: '2006-10-18T13:27:30'
  content: 'Since an annotation is an interface, we use dynamic proxies to implement an annotation when we need to alter them in Hibernate Annotations. You have to create one from scratch though, no way to change an existing annotation.

    A more challenging work is to "resolve" generics ;-)'
  replies: []
- id: 6087
  author: Frank Bolander
  date: '2006-10-18T15:46:44'
  content: 'Seems like a good use case for AOP. AspectJ has pointcuts for annotations:

    http://www.eclipse.org/aspectj/doc/released/adk15notebook/annotations-pointcuts-and-advice.html'
  replies: []
- id: 6088
  author: Robert
  date: '2006-10-19T00:09:58'
  content: 'The question of where configuration should live misses the point. What you should worry about is: is there a clean API for programatic configuration? If there is, then the end-user can ultimately make whatever configuration solution they need.

    My preference here would be for a chain of configurers... rather than have an explicit "oh, I''m overriding an annotation", simply write the XML file as if the annotation option didn''t exist, but you were happy with the defaults for everything but what you are overriding. That way, the XML config file will be clean. Trying to convey the fact you use annotations into the XML file misses the point that what you are actually trying to do is configuration.'
  replies: []
- id: 6089
  author: Deepak Shetty
  date: '2006-10-19T01:19:42'
  content: 'One of the things missed out is the operational aspect where you have different support and test teams. For e.g. if you are writing tests and want to run the tests in parallel, do you really want a compile cycle to change 10 threads to 20  threads ?

    The rule of thumb for me , property files/xml files/-D properties etc. for anything that can potentially change between environments. Usually that means most of it.'
  replies: []
- id: 6090
  author: Roger
  date: '2006-10-19T22:22:48'
  content: 'Cedric,

    When we were first doing annotations at our mutual former employer, this exact debate came up internally.  I suggested something similar to what you have here.  My thoughts were based on a pattern that is used extensively on AS/400.  When a program is compiled it is associated with a specific database table name, and then at execution if you want to select a table with the same layout, but a different name, you can override it with a configuration file.

    My comments never gathered much traction at the time and apparently died out.  I'
  replies: []
- id: 6091
  author: Sony Mathew
  date: '2006-10-20T16:00:10'
  content: 'Override an Annotation ... hmmm..

    why not override the Java way ?

    class MyTestBigger extends MyTest {

    @Test(invocationCount=15)

    public void verify() {

    super.verify();

    }

    }

    Now run MyTestBigger (insteadof or also).'
  replies: []
- id: 6092
  author: David Bullock
  date: '2006-10-22T08:31:02'
  content: 'What Robert said.

    I was originally going to say, before reading Robert''s comment, that there isn''t any compelling reason to use XML for overriding annotations - a properties format will do just as nicely, where the key identifies the Java language element the annotation applies to, and the value specifies the comma-separated arguments of the annotation.

    So maybe you were using XML as a straw man to knock down?  No, I believe you that there are people out there who answer ''XML'' to almost any question.  :-)'
  replies: []
- id: 6093
  author: Tiago Silveira
  date: '2006-10-23T04:01:05'
  content: Funny. You just broke your own API. The example code accesses a null pointer. And that happens everytime, since I always have the call with the class argument first.
  replies: []
- id: 6094
  author: Grumpy
  date: '2006-11-01T11:19:16'
  content: Using annotations for configuration is, IMO, an abhorant misuse. Annotations should be used for, gasp, annotating code, not for runtime behavior.
  replies: []
- id: 6095
  author: James Carman
  date: '2006-11-03T07:51:24'
  content: 'Cedric,

    I came up with an idea a while back that would allow there to be different "providers" for class (methods, constructors, etc.) metadata.  I was going to put it into Jakarta Commons and I was going to call it Commons Metadata.  So, you would have one API to access the metadata, but different providers which contribute to it (such as annotation, xml, .properties, etc.).  I wanted to create something like this for the Trails project where we want to override annotation stuff using XML files (just as you''re talking about).  The order of the "providers" would dictate how the overriding works (maybe the first wins or the last, whatever makes more sense).

    James'
  replies: []
---

Ever since annotations officially made it officially in the Java language, the debate has been raging about where configuration should go:  in annotations or XML files.  
  
The pros and cons of each approach are easy to summarize:  annotations allow you to put your configuration system close to the Java source it applies to, but changing it requires Java knowledge and a recompilation.  On the other hand, XML files are usually easy to modify and they can be reread at runtime (sometimes even without relaunching your application), but they are very verbose and the edition can be error prone.  
  
As usual in such situations, the correct course of action is to use a mix of these approaches.  For example, a rule of thumb that I have been following is that "any configuration parameter that refers to a Java element (package, class, method) should be specified in an annotation" (e.g. `@Test` or `@Transaction`) and "any configuration parameter that applies to your application as a whole probably belongs to an XML file" (e.g the name of an output log file or a target web server).  
  
Another approach that blends these two techniques has also been under scrutiny recently:  being able to override Java annotations with XML files.  I haven't come across an implementation of this idea that can claim it's the defacto standard, and at this point, I suspect that this approach is unlikely to take off because it suffers from the "worst of both worlds" syndrome.  
  
Here is why.  
  
Consider the simple following code: 

```java
public class Mytest {  
  @Test(invocationCount = 10)  
    public void verify() {  
    // ...  
  }}  
```

This instructs TestNG to invoke the `verify()` test method ten times.  
  
If I want to override this value at runtime, I find myself having to write a fairly complex piece of XML code in order to pinpoint the exact annotation I'm trying to override.  It would probably look like this:  

```xml
<override-annotation>
  <package name="org.foo.tests">
    <class name="MyClass">
      <method name="verify">
        <annotation name="org.testng.Test">
          <attribute name="invocationCount" value="15" />
        </annotation>
      </method>
    </class>
  </package>
</override-annotation>
```

Of course, you might want to come up with a way to capture the override (the annotation/attribute part) so you can reuse it somewhere else in your XML file, in case you want this override to apply to more than just one method.  This would probably be achieved with the definition of an "override-ref" that you would define at the top of your XML file and that you would repeatedly use throughout your XML file (exactly like ant's classpath-ref, for example).  
  
That's already a lot of work (and it's quite hard to read), but it's also extremely fragile since it will most likely break if you decide to rename your class or your method name (IDE's are beginning to extend refactorings to non-Java files, but we're not quite there yet).  
  
Because of these shortcomings, I have been working on a slightly different approach with TestNG that lets you specify this runtime override in Java.  Again, it's not a silver bullet and suffers from some of the compromises expressed above, but if you can live with the idea that you have to recompile your override if you modify it (but not the annotated code you are trying to override, so it's already a progress), it's actually fairly simple to achieve.  
  
TestNG introduces the following interface:  

```java
public interface IAnnotationTransformer {  
  public void transform(ITest annotation, Class testClass,   
                        Constructor testConstructor, Method testMethod);  
}
```

and you use it as follows:  

```java
public class MyTransformer implements IAnnotationTransformer {  
  public void transform(ITest annotation, Class testClass,  
                        Constructor testConstructor, Method testMethod)  
  {  
    if ("verify".equals(testMethod.getName())) {  
      annotation.setInvocationCount(15);  
    }  
  }  
}  
```

Here are a few observations about this technique:  


  * The idea is that whenever TestNG parses a `@Test` annotation, it will run it through the annotation transformer before using it.  
  

  * The three extra parameters of the method let you know where this annotation was found (on a class, a constructor or a method).  Only one of these three parameters will be non-null.  
  

  * Notice that the parameter to the `transform()` method is an `ITest`.  This is because TestNG supports both standard and JavaDoc annotations, so `ITest` is a simple façade object that represents the `@Test` (JDK) or `@testng.test` (JavaDoc) annotation.  In a more general framework, the parameter would probably directly be the type of the annotation, although there are still a few problems to solve with this (see the next point).  
  

  * This approach requires write access to the annotation, which is not possible with the current JDK implementation.  You can work around this limitation by using a façade, which could possibly be generated as a dynamic proxy.

The advantage of annotation transformers is that they can be very powerful:  it's very easy to apply them to several methods, several classes, all methods of a class or of a package, etc...  
  
Annotation Transformers are alreay implemented in the [TestNG Subversion depot](http://testng.org), and they will be available publicly when TestNG 5.3 comes out (very soon).
