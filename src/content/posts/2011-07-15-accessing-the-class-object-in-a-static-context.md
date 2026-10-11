---
title: Accessing the class object in a static context
date: '2011-07-15T08:13:35'
slug: accessing-the-class-object-in-a-static-context
categories:
- General
comments:
- id: 8990
  author: Jonathan Halterman
  date: '2011-07-15T08:36:37'
  content: 'Another option:

    return new Object() { }.getClass().getEnclosingClass();

    You can also grab a stacktrace, though this wouldn''t be my preferred approach:

    Thread.currentThread().getStackTrace()[1].getClassName();'
  replies: []
- id: 8991
  author: Cedric
  date: '2011-07-15T08:39:54'
  content: 'Jonathan: isn''t the first snippet of code exactly the same as the one I wrote above?'
  replies: []
- id: 8992
  author: Christian Schlichtherle
  date: '2011-07-15T08:40:27'
  content: I wouldn't mind writing Foo.class in your first example. Everything else appears overengineered to me.
  replies: []
- id: 8993
  author: Jonathan Halterman
  date: '2011-07-15T08:43:59'
  content: Cedric - it is. For some reason I didn't catch your last example.
  replies: []
- id: 8994
  author: Andrey
  date: '2011-07-15T09:07:07'
  content: 'I agree with Christian: for logging purposes that appears overengineered. I think it''s easier to use templates/shortcuts of your favourite IDE. You can construct them by hand using variables for class names.'
  replies: []
- id: 8995
  author: Tetsuo
  date: '2011-07-15T09:18:34'
  content: "The same, a little different :)\n    private enum _ {}\n    static Logger log = LoggerFactory.getLogger(_.class.getEnclosingClass());"
  replies: []
- id: 8996
  author: Sumit
  date: '2011-07-15T10:15:01'
  content: 'My submission:

    static Logger log = Logger.getLogger( new Object() {{}}.getClass().getEnclosingClass() );

    But I see this as a concern only if you insist on copy-paste-modify rather than IDE template.'
  replies: []
- id: 8997
  author: Bradley Schaefer
  date: '2011-07-15T10:36:01'
  content: 'I don''t consider the latter approach less hacky - it somewhat offends my sensibilities to pollute the classloader with unnecessary anonymous classes (in practice I doubt it matters, but even so). I prefer the ClassUtils approach - hell, LoggerFactory ought to have a getClassLogger() method that does just that.

    I will give you that it''s an interesting thought experiment, and I don''t have better suggestions.'
  replies: []
- id: 8998
  author: Ramesh Mandaleeka
  date: '2011-07-15T15:40:15'
  content: 'How about:

    new Exception().getStackTrace()[2].getClassName();'
  replies: []
- id: 8999
  author: Ramesh Mandaleeka
  date: '2011-07-15T16:01:37'
  content: "Yet another approach using Sub internal API.\nimport sun.reflect.Reflection;\npublic class ClassUtil  {\n      static Class getCurrentClass() {\n            return Reflection.getCallerClass(2);\n      }\n}"
  replies: []
- id: 9000
  author: Ben
  date: '2011-07-15T19:20:50'
  content: "Would this get the right class?\nclass LogUtil extends SecurityManager {\n    static Logger get() {\n        Class cls = Log().getClassContext()[1]\n        println cls\n        return Logger.getLogger(cls.name)\n    }\n}"
  replies: []
- id: 9001
  author: Daniel Zimmerman
  date: '2011-07-15T22:31:44'
  content: 'While it''s interesting to see all the different hoops one can jump through to accomplish this, I''m confused as to why would you want to make this particular bit of code more generic. Part of my difficulty arises from your initial statement: "I often need to access the current class, for example for logging purposes."

    When you''re doing this in a static context, you don''t want "the current class" in the sense of "the class in which this code is currently running"; instead, you want "the class this code was written in" (you called it Foo, above). getClass(), as in your original bit of code, is going to give you the Class object corresponding to the object that''s actually instantiated at runtime, not necessarily the Class object corresponding to Foo. If you want a logger for Foo, specifically (as opposed to child classes of Foo, etc.), you can''t use getClass() even in a non-static context (unless Foo is final).

    In a static context, you always know which Class object you want at the time you''re writing the code. The ".class" construct exists in Java precisely to allow you to statically obtain a reference to a Class object... using it not only avoids instantiating unnecessary objects (and creating unnecessary classes), but also seems, to me at least, to be much more readable and understandable (in terms of determining programmer intent) than the other options presented. It is almost certainly also faster, but that''s probably negligible.'
  replies: []
- id: 9002
  author: Stefan
  date: '2011-07-15T23:35:14'
  content: 'A good article on this issue can be found here: http://www.javaspecialists.co.za/archive/newsletter.do?issue=137'
  replies: []
- id: 9003
  author: Cosmin Marginean
  date: '2011-07-15T23:53:05'
  content: 'I personally don''t see a problem with the construct:

    private static Logger log = org.apache.log4j.Logger.getLogger(ThisClass.class);

    This is as refactoring-resistent as the other constructs as a rename on the class will take care of this too (if you are using a decent IDE that is, but even a blind replace would do it). I can hardly see the value in having a generic version of this.

    I personally use IntelliJ''s "Live templates" where something like this:

    private static Logger log = org.apache.log4j.Logger.getLogger($clsName$.class);

    Is easily expanded in:

    private static Logger log = org.apache.log4j.Logger.getLogger(TheCurrentClassIAmEditing.class);

    by typing log or whatever abreviation/shortcut you set for this. It handles the log4j package import too, and removes the fully qualified path in front of Logger.getLogger automatically. I am pretty  sure Eclipse should have this stuff too.'
  replies: []
- id: 9004
  author: Reinier Zwitserloot
  date: '2011-07-16T12:58:21'
  content: For logging specifically, you can use @Log / @Slf4j / @CommonsLog / @Log4j of projectlombok which does just that (creates a static final variable named 'log' using your own class as log bucket).
  replies: []
- id: 9005
  author: Prakash G.R.
  date: '2011-07-16T21:41:08'
  content: An Eclipse template is the simplest way. You can add a template and use ctrl+space to fill the whole line.
  replies: []
- id: 9006
  author: Hamlet D'Arcy
  date: '2011-07-17T21:51:39'
  content: 'Lombok _and_ Groovy both have the @Log, @Slf4j, @Commons, and @Log4j type annotations to clean this up. Also both Java and Groovy have static analysis tools that catch this sort of error for you where you have the wrong class name (FindBugs/PMD/CodeNarc).

    I know it doesn''t answer your orginal question though. There is a general problem here that LiveTemplates/annotations isn''t going to solve in a general way.'
  replies: []
- id: 9007
  author: Rafael Naufal
  date: '2011-07-18T11:04:28'
  content: 'If you use Eclipse as your IDE, you can define a code template to fill a Logger with the current class and use it with ctrl+space.

    Go to Window &gt; Preferences &gt; Java &gt; Editor &gt; Templates and create a new template, giving it a name which you want to code complete. Add the following code:

    private static final Logger logger = Logger.getLogger(${enclosing_type}.class);

    And you are ready to use it!'
  replies: []
- id: 9008
  author: Micha? Gruca
  date: '2011-07-18T21:48:34'
  content: 'First of all why the hell so many plp works with static context? I hope for you all that you just treat this as a challenge to come with something smarter than Cedric did

    Secondly it is easier to write myClass.class If you are not programming in notepad then it will resist any future changes and it simply just won''t compile if you are. Even netbeans should have refactoring for that.'
  replies: []
- id: 9009
  author: Thomas Mueller
  date: '2011-07-18T21:53:07'
  content: 'This is only a tiny bit shorter: LoggerFactory.getEnclosingLogger(new Object(){});

    This was also discussed at SLF4J: http://bugzilla.slf4j.org/show_bug.cgi?id=163

    Another interesting idea is using an annotation processor, see Project Lombok.'
  replies: []
- id: 9010
  author: Cedric
  date: '2011-07-18T21:56:21'
  content: Wow, Thomas, that's quite a discussion on this bug! Glad to see I'm not the only one who identified this need.
  replies: []
- id: 9011
  author: Thomas Mueller
  date: '2011-07-18T22:11:43'
  content: "There seems to be a typo in your SecurityManager example; getCurrentClass can't be static. What about:\npublic class Test {\n    private static Logger logger = LoggerFactory.getCallerLogger();\n    public static void main(String... args) {\n        logger.log(\"Hello\");\n    }\n}\npublic class LoggerFactory {\n    public static Logger getCallerLogger() {\n        return new Logger() {{\n            name = new SecurityManager() {\n                public Class getClass(int level) {\n                    return getClassContext()[level];\n                }\n            }.getClass(3).getName();\n        }};\n    }\n}\npublic class Logger {\n    String name;\n    public void log(String s) {\n        System.out.println(name + \": \" + s);\n    }\n}"
  replies: []
- id: 9012
  author: Thomas Mueller
  date: '2011-07-18T22:18:41'
  content: 'I have submitted my previous comment to SLF4J, where it''s readable: http://bugzilla.slf4j.org/show_bug.cgi?id=163#c40 - I hope you don''t mind stealing your idea...'
  replies: []
- id: 9013
  author: Thomas Mueller
  date: '2011-07-18T22:25:32'
  content: 'Well, it turns out this idea is relatively old: 2006: http://web.archiveorange.com/archive/v/NUYyjKKmz6YnLKAMeZDc - but it seems to have been ignored.'
  replies: []
- id: 9014
  author: Dave Shah
  date: '2011-07-19T03:50:10'
  content: "I haven't totally thought this one through, but this would be my quickest alternative ;)\npublic class ClassUtil{\n\tpublic static String getCurrentClass(){\n\t\tStackTraceElement[] elements = Thread.currentThread().getStackTrace();\n\t\treturn elements[2].getClassName();\n\t}\n}"
  replies: []
- id: 9015
  author: Jon H
  date: '2011-07-20T03:47:56'
  content: 'I''m intrigued by your statement that you often need to access the current class - what are the other use cases besides logging?

    I find it overkill to make a logger per class - surely the only reason to do this is so that you can adjust the logging level per class - but in real life how often do you do this? Outside of debugging it''s rare, and inside debugging it matters little if you raise the logging level of lots of classes at once - there are plenty of tools to help you filter the output. So I find this whole discussion a bit academic. (OK, I''m interested in academic issues!)

    Also, looking at the discussion, doesn''t anybody but me prefer to make their loggers final? Is there a use case when it might change after construction??'
  replies: []
- id: 9016
  author: Matt B
  date: '2011-07-20T06:15:03'
  content: 'Template for IDEA:

    private static final org.apache.log4j.Logger log = org.apache.log4j.Logger.getLogger($CLASS$.class);

    An interesting discussion, but anyone who actually used any of these solutions in real code to declare a logger should get smacked in the code review :)'
  replies: []
- id: 9017
  author: Ji??? Pejchal
  date: '2011-07-20T10:19:15'
  content: 'Template for netbeans:

    private static final ${LOG_TYPE type="org.slf4j.Logger" default="Logger" editable=false} logger = ${LOG_FACT type="org.slf4j.LoggerFactory" default="LoggerFactory" editable=false}.getLogger(${classVar editable="false" currClassName default="getClass()"}.class);

    I use abbreviation ''logs'' for this template.'
  replies: []
- id: 9018
  author: Thomas Mueller
  date: '2011-07-23T03:16:13'
  content: '&gt; anyone who actually used any of these solutions

    &gt; should get smacked in the code review

    Anyone who relies on the IDE to *generate* source code should get smacked in the code review hehe.'
  replies: []
---

I often need to access the current class, for example for logging purposes: 

```java
public class Foo {
  private Logger logger = LoggerFactory.getLogger(getClass());
}
```

However, this won't work in a static context, since you don't have any `this` object to call `getClass()` on: 

```java
public class Foo {
  static private Logger logger = LoggerFactory.getLogger(Foo.class);
}
```

It's always bothered me to have to copy/paste this line and then remember to replace the name of the class, so here is one way to make this snippet more generic: 

```java
public class ClassUtil extends SecurityManager {
  public static Class getCurrentClass() {
    return getClassContext()[1];
  }
}
```

Which you use as follows: 

```java
public class Foo {
  private static Logger logger = LoggerFactory.getLogger(
      new ClassUtil().getCurrentClass());
}
```

A somewhat less hacky and cheaper approach is to instantiate an anonymous class in order to materialize a `this` object: 

```java
  private static Class thisClass =
      new Object() { }.getClass().getEnclosingClass();
  private static Logger logger = LoggerFactory.getLogger(thisClass);
```

Can you think of any other way?
