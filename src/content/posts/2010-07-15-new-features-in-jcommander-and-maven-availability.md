---
title: New features in JCommander and Maven availability
date: '2010-07-15T12:08:00'
slug: new-features-in-jcommander-and-maven-availability
categories:
- General
---

I received a good amount of feedback about JCommander, and I've been adding a few functionalities these past few days: 

  * Support for multiple definition classes. Christian Gruber pointed out that it might be nice to not be restricted to just one class when you declare all your `@Parameter` fields. For example: 

### ArgsMaster.java

```java
    public class ArgsMaster {
      @Parameter(names = "-master")
      public String master;
    }
```

### ArgsSlave.java

```java
    public class ArgsSlave {
      @Parameter(names = "-slave")
      public String slave;
    }
```

You then pass these objects when you create your JCommander instance, which will collect all the parameter definitions from both objects. 

```java
    ArgsMaster m = new ArgsMaster();
    ArgsSlave s = new ArgsSlave();
    String[] argv = { "-master", "master", "-slave", "slave" };
    new JCommander(new Object[] { m , s }, argv);
    Assert.assertEquals(m.master, "master");
    Assert.assertEquals(s.slave, "slave");
```

  * Support for `required`. For simple applications, you can just declare `@Parameter(required = true)` and JCommander will enforce that all such parameters are assigned a value ([example](http://beust.com/weblog/jcommander/#Required_and_optional)). 
  * Internationalization. You can now use the standard Java resource bundle mechanism to write the descriptions of your options and have JCommander automatically use the translated strings ([example](http://beust.com/weblog/jcommander/#Internationalization)). 
  * Parameters that take more than one value (arities). This functionality allows you to parse command lines such as: 

```text
    java Main -pairs slave master foo.xml
```

Here, the parameter `-pairs` needs the next two arguments ([example](http://beust.com/weblog/jcommander/#Arities)). 
All these features are now available in JCommander 1.0, which Maven users can download automatically with the following dependency: 

```text
  com.beust
  jcommander
  1.0
```
