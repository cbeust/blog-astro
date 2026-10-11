---
title: Test method priorities in TestNG
date: '2008-03-29T11:05:21'
slug: test-method-priorities-in-testng
categories:
- Java
tags:
- testng
comments:
- id: 7185
  author: Rafael Naufal
  date: '2008-04-02T10:48:43'
  content: Why didn't you do Collections.sort(methods, comparator), as it already dumps the list to an array and sort it?
  replies: []
- id: 7186
  author: Sunitha Velpula
  date: '2009-02-09T15:20:36'
  content: 'Hi Cedric,

    I have tried using this.

    Although I pass the listener the order is still random.

    I am using latest version of testng (5.8) but the execution order is still random.'
  replies: []
- id: 7187
  author: bruce
  date: '2009-12-14T23:12:49'
  content: 'The class level priority only work within an xmltest

    For example,

    two class T1, T2

    if i define the suite.xml as

    --------------------------------------

    &lt;suite name="test"&gt;

    &lt;test  name="tests"  annotations="JDK"&gt;

    &lt;classes&gt;

    &lt;class name="T1"/&gt;

    &lt;class name="T2"/&gt;

    &lt;/classes&gt;

    &lt;/test&gt;

    &lt;/suite&gt;

    in this situation the class level priority works well.

    --------------------------------------

    BUT, when i defined the suite as:

    --------------------------------------

    &lt;suite name="test"&gt;

    &lt;test  name="t1"  annotations="JDK"&gt;

    &lt;classes&gt;

    &lt;class name="T1"/&gt;

    &lt;/classes&gt;

    &lt;/test&gt;

    &lt;test  name="t2"  annotations="JDK"&gt;

    &lt;classes&gt;

    &lt;class name="T2"/&gt;

    &lt;/classes&gt;

    &lt;/test&gt;

    &lt;/suite&gt;

    --------------------------------------

    The class level priority would not work.

    Any solution for this? Thanks'
  replies: []
- id: 7188
  author: bruce
  date: '2009-12-14T23:17:06'
  content: post failed?
  replies: []
- id: 7189
  author: Jinesh
  date: '2010-05-05T04:04:40'
  content: 'Hi  Cedric,

    i want to sort my tests in class level based on the prority i have given. Since the return type of intercept is IMethodInstance List I am not able to do this.

    Does TestNG has a way to sort the test classes?

    Is there any way to get the IMethodInstance from a ITestNGMethod?

    Thanks,

    Jinesh'
  replies: []
- id: 7190
  author: Denali Lumma
  date: '2010-07-19T11:30:26'
  content: 'I have the exact same issue a Jinesh.  There is no way to use this feature if you tag your tests on the class level.

    Ideas?'
  replies: []
---

A TestNG user recently requested an interesting feature: method priorities. 

The idea is to be able to assign a priority to a test method (or an entire class) to guarantee that it will be run before other methods with a higher priority. Note that this is slightly different from dependent methods, since it's just about ordering: if a method with a priority 2 fails, methods with higher priorities will still be run. 

As it turns out, this is very easy to implement with one of [TestNG 5.8](http://testng.org) newest features: [method interceptors](http://testng.org/doc/documentation-main.html#methodinterceptors). 

TestNG lets you declare a class implementing the interface `IMethodInterceptor`, whose signature is: 

```java
public interface IMethodInterceptor extends ITestNGListener {
  List<IMethodInstance> intercept(List<IMethodInstance> methods, ITestContext context);
}
```

TestNG passes the list of methods it's about to run so you get a chance to reorder them. Implementing method priorities with this interface is very simple. 

Let's start with what we want this feature to look like. In the following example, I declare three kinds of priorities: 

  * Priorities at the method level. 
  * A priority at the class level. 
  * No priority. When no priority is defined on a method, we want to look for a priority on the class first, and if none can be found, the priority will receive a default value of 0. 
Here is our test: 

```java
@Priority(10)
public class PriorityTest {
  @Test
  public void b1() { System.out.println("Default priority");}
  @Priority(-3)
  @Test
  public void a1()  { System.out.println("Priority -3");}
  @Priority(-3)
  @Test
  public void a2()  { System.out.println("Priority -3");}
  @Priority(3)
  @Test
  public void c1()  { System.out.println("Priority 3");}
  @Priority(3)
  @Test
  public void c2()  { System.out.println("Priority 3");}
  @Priority(4)
  @Test
  public void d1()  { System.out.println("Priority 4");}
}
```

Next, we implement the `@Priority` annotation: 

```java
@Retention(java.lang.annotation.RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
public @interface Priority {
  int value() default 0;
}
```

Fairly straightforward: we make the annotation valid on methods and types only, and we use the shortcut `value()` annotation so we can specify `@Priority(1)`. 

Now comes the implementation of the `IMethodInterceptor`: 

```java
public class PriorityInterceptor implements IMethodInterceptor {
  public List<IMethodInstance> intercept(List<IMethodInstance> methods, ITestContext context) {
    Comparator<IMethodInstance> comparator = new Comparator<IMethodInstance>() {
      private int getPriority(IMethodInstance mi) {
      int result = 0;
      Method method = mi.getMethod().getMethod();
      Priority a1 = method.getAnnotation(Priority.class);
      if (a1 != null) {
        result = a1.value();
      } else {
        Class cls = method.getDeclaringClass();
        Priority classPriority = cls.getAnnotation(Priority.class);
        if (classPriority != null) {
          result = classPriority.value();
        }
      }
      return result;
    }
    public int compare(IMethodInstance m1, IMethodInstance m2) {
      return getPriority(m1) - getPriority(m2);
    }
  };
  IMethodInstance[] array = methods.toArray(new IMethodInstance[methods.size()]);
  Arrays.sort(array, comparator);
  return Arrays.asList(array);
}
```

The heart of this implementation is our `Comparator`, which tries to find a `@Priority` annotation the method it receives in parameter. If it can't find any, it looks on the declaring class, and failing to find one there as well, assigns it a default value. The `intercept()` method simply sorts the methods with this comparator and returns it. 

Now, let's run our test without using that interceptor: 

```xml
<suite name="Example">
  <test name="Method interceptor example" >
    <classes>
      <class name="priority.PriorityTest" />
    </classes>
  </test>
</suite>
```

As expected, the output is fairly random: 

```text
Priority 3
Default priority
Priority 3
Priority -3
Priority -3
Priority 4
```

Now we declare our interceptor in the `testng.xml` file: 

```xml
<suite name="Example">
  <listeners>
    <listener class-name="priority.PriorityInterceptor" />
  </listeners>
  <test name="Method interceptor example" >
    <classes>
      <class name="priority.PriorityTest" />
    </classes>
  </test>
</suite>
```

And we get the expected outcome, with our method without any `@Priority` receiving the class priority (10) since it didn't define any itself: 

```text
Priority -3
Priority -3
Priority 3
Priority 3
Priority 4
Default priority
```

To verify that our class priority implementation works, we can remove the `@Priority` class annotation. In this case, our method without any `@Priority` should receive a priority of 0: 

```text
Priority -3
Priority -3
Default priority
Priority 3
Priority 3
Priority 4
```

As you can see, Method Interceptors allow you to replace TestNG's ordering of test methods with your own. It's particularly powerful if used in conjunction with annotations, as shown in this example, but it's also possible to imagine other external configuration factors to customize TestNG's running engine to your liking.
