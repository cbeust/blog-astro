---
title: Quantum Software Design
date: '2005-08-09T11:23:25'
slug: quantum-software-design
categories:
- Java
comments:
- id: 4122
  author: Martin Fowlbot
  date: '2005-08-09T12:23:51'
  content: '"Quantum Software Design" for an idea that''s completely unrelated to quantum computing or quantum physics ?

    Sorry, I just can''t resist a bogus analogy... you make me do it... I claim the idea as MINE!'
  replies: []
- id: 4123
  author: Cedric
  date: '2005-08-09T12:26:40'
  content: 'It''s related to quanta...  The smallest unit that your code can be broken into.

    Maybe we should call then "swanta"...  Software Quanta :-)

    --

    Cedric'
  replies: []
- id: 4124
  author: Kai Virkki
  date: '2005-08-09T12:32:26'
  content: Oh, it warms my physicist's heart to see the term Quantum in use here! :) The mix-ins in Java would really help ensuring the Single Responsibility Principle.
  replies: []
- id: 4125
  author: Olivier Gutknecht
  date: '2005-08-09T12:57:18'
  content: 'Another interesting, albeit slightly different, approach is the "category" concept in Objective-C.

    With categories, you don''t explicitely import a mixin into a class,  but define a category on an existing class, and implement new methods (but no new ivars). Not unlike partial classes in C#, but you can apply that on any class without restriction. Of course, it''s quite easy to do in Objective-C as the runtime is very Smalltalkish.

    An interesting use is often to add new methods to existing classes from a standard libraries, for adhoc methods adding new behavior to a string class (i.e. ''getMD5Hash'') and subclasses. Non-verbose and quite elegant when using it as a regular method. The drawback is of course that the added behavior is not explicit on the extended class.

    In actual code, it''s more often fine-grain extension than fine-grain decomposition for an new implementation, but it could probably related to the ''quantum software design school of thought'' :)'
  replies: []
- id: 4126
  author: ''
  date: '2005-08-09T13:28:08'
  content: 'I''m not sure I understand all this, but how is this better then multiple inheritance? Python has multiple inheritance so you can mix via that. Ex.: are there name clashes in mixins?

    And I would say this is still is-a so you can''t stop someone from using parent class methods not nedded wile with delegation you can.'
  replies: []
- id: 4127
  author: Frank Bolander
  date: '2005-08-09T14:01:21'
  content: 'I like the idea of adding the mixin at the target class instead of in a separate aspect class definition.

    I agree, I think this compositional style of OO programming is very powerful and may be a selling point for AOP -- for java at least -- instead of just "cross cutting of concerns" decomposition.'
  replies: []
- id: 4128
  author: Peter McK
  date: '2005-08-09T14:12:47'
  content: 'The feature described by Cedric seems to be equivalent to multiple inheritence and quite different to mixins as implemented in Ruby.

    I think that language support for delegation in  Java might be worth considering.

    Something like:

    public class Employee {

    com.beust.Nameable name;

    expose name.setShortname, name.setLongName;

    // ...

    }

    This would be equivalent to defining setShortname and setLongName in Employee to delegate to the name instance variable.'
  replies: []
- id: 4129
  author: Sony Mathew
  date: '2005-08-09T15:14:19'
  content: 'maybe :)

    public class Employee imports Nameable, Payable {

    }

    Smells of multiple inheritence - even if you boil it down to just an under the hood copy/paste.

    The 1st & 3rd benefits are available with mulitple inheritence.  The 2nd benefit - is that really a benefit ?  If you have imported the whole implementation - haven''t you got an is-a relationship ?

    I miss Multiple Inheritence...as well.  Complexity and misuse are no excuse to exclude it.'
  replies: []
- id: 4130
  author: Robert Watkins
  date: '2005-08-09T15:59:45'
  content: 'Peter, I was think it was multiple inheritence as well... but it''s not.

    Why? Because Employee is _not_ a Nameable.

    Inheritence is the inheritance of _type_, with the optional inheritance of _behaviour_. Mixins is the "inheritance" of behaviour, without type. This is the second benefit pointed out by Cedric. Largely because they _don''t_ bring in type, mixins avoid a number of problems associated with multiple inheritance. For one thing, mixins have a clear order of import. The "last" method definition always wins (with class-level methods coming "last") in most mixin-based languages.

    However, I thought mixins didn''t bring in attributes... the m_shortName and m_longName attributes should actually be on the Employee class, I think.

    Also, Python already has a well-known mixin technique: http://c2.com/cgi/wiki?MixinsForPython

    Mixins would be a good addition to Java. Oh, and mixins are more like the atomic building blocks; the quanta of programming would really be the method. :)'
  replies: []
- id: 4131
  author: Henning Koch
  date: '2005-08-09T17:14:52'
  content: Mixins would be a blessing for any language. I also like how many Rubyians use mixins to organize more complex classes into shorter parts.
  replies: []
- id: 4132
  author: Sam Pullara
  date: '2005-08-09T20:44:56'
  content: I've thought about this before.  Basically I want an alternative to cut/paste and inheritance just as you described.
  replies: []
- id: 4133
  author: Eric M. Burke
  date: '2005-08-10T04:26:27'
  content: This sounds similar to BUG ID 4191243 on the Java Bug Parade. I think this would be a valuable addition to Java.
  replies: []
- id: 4134
  author: Gerald
  date: '2005-08-10T06:29:57'
  content: Delphi has had this capability for quite a long time now using the 'implements' keyword. This and a few other features like properties and pascal style enumerators are things I really miss from Object Pascal when working in Java.
  replies: []
- id: 4135
  author: Ruslan Zenin
  date: '2005-08-10T06:52:07'
  content: I don't think it is a good idea. This would pollute Java. Your idea is some sort of MACRO function. The compiler does not enforce the code checks of
  replies: []
- id: 4136
  author: ''
  date: '2005-08-10T09:50:29'
  content: If you are too retarded to handle multiple-inheritance than you surely won't be able to handle mixins. That is why Java will never include mixins. I mean, duh!
  replies: []
- id: 4137
  author: sidereal
  date: '2005-08-10T15:15:31'
  content: 'Mixins make me uncomfortable.  I think they''re a bludgeon to solve for repetitive boilerplate, when a little more analysis of the code duplication and of the reason it exists are in order.

    For example, I''d rather solve your problem with a ''has-a''.  I think ''Nameable'' is confusing the discussion since ''able'' screams interface/mix-in.

    How about:

    public class Name() {

    private String shortName;

    private String longName;

    }

    public class Employee {

    private Name name;

    public Name getName() { return name; }

    }

    public class Pet {

    private Name name;

    public Name getName() { return name; }

    }

    .....

    return employee().getName().getLongName();

    Yes?  No?

    Here''s where I know my model is weak.  Suppose I want to customize the name behavior just for a particular type.  Since I''ve explicitly delegated the name behavior to the Name type in my contract for the Employee class, I''ve lost some control of it.  I have to honor the existence of the Name type and still get my custom functionality in there.  For example:

    public class Employee {

    public Employee(Name name) {

    this.name = new EmployeeName(name);

    }

    ...

    private boolean isContractor;

    ...

    class EmployeeName extends Name() {

    public String getLongName() {

    if (isContractor) {

    return super.getLongName() + " - CON";

    } else {

    return super.getLongName();

    }

    }

    }

    How would this be accomplished with mixins?  Any better?'
  replies: []
- id: 4138
  author: Cedric
  date: '2005-08-10T15:28:32'
  content: 'This approach has a critical weakness in my opinion:  Obfuscation.

    I much prefer to write employee.getShortName() then employee.getName().getShortName()

    Delegation has its uses, but keep in mind what I''m trying to do:  reuse an existing implementation made of a few classes so I can expose it *directly* on my class and which I won''t have to maintain (if new methods are added, my class will automatically expose these methods as well).

    --

    Cedric'
  replies: []
- id: 4139
  author: sidereal
  date: '2005-08-10T16:37:38'
  content: 'You''re right.  The more I thought about it after commenting the more glaring the problem became.  And in fact got me started on a whole chain of thinking about the weakness of types that delegate portions of their contracts to code outside of their control.  Of course, the quick solution is just to wrap the calls to Name, which is back to your 3rd existing Java solution.

    I think mixins are a heavy solution for that particular problem, since they cut through so many aspects of Java type interaction.  For example, what if the mixin and the importing class have member variables of the same name?  What if one is static and one not?  One final and one not?  Etc.

    As long as you''re changing the language, how about a system to essentially promote the methods of member variables?  Something like this:

    private Name name;

    promote Name.setLongName();

    promote Name.getLongName();

    promote Name.setShortName();

    promote Name.getShortName();

    Obviously a compile-time rather than run-time directive.  It would push those methods up to be available from the promoting type, though the internal Name would be the object the method is actually called on.'
  replies: []
- id: 4140
  author: Peter McK
  date: '2005-08-10T21:02:12'
  content: 'Dude, that is exacty what I suggested with my ''export'' keyword in an earlier comment.  Btw, I think you actually want to say:

    promote name.setLongName()

    because you might have more than one instance variable of type Name.  As long as we''re off in language feature creation land, maybe the feature could be extended to handle multiple instance variables of the same type?  I.e.

    private Person mother;

    private Person father;

    promote mother.getName() as getMothersName;

    promote father.getName() as getFathersName;

    Its all just syntactic sugar of course.  But then so is ++ and who''d be without that?'
  replies: []
- id: 4141
  author: Ruslan Zenin
  date: '2005-08-11T06:59:53'
  content: 'Then it is not Java anymore...

    Why not to build a new language and fight the world with its adoption!'
  replies: []
- id: 4142
  author: anon
  date: '2005-08-12T05:03:57'
  content: 'You could go off and invent cool new ways to hack mix-ins into a language with single inheritance. Or you could go and read about traits: http://www.iam.unibe.ch/~scg/Research/Traits/

    If you examine the paper where they refactor the smalltalk collections API: http://www.iam.unibe.ch/~scg/cgi-bin/oobib.cgi?query=nathanael+applying+traits+to+the+collection+hierarchy+oopsla you''ll see that they''ve given this idea rather a lot of thought.'
  replies: []
- id: 4143
  author: Bruce Chapman
  date: '2005-08-23T18:21:26'
  content: 'for Mixins in Java using Annotations

    See https://rapt.dev.java.net/nonav/docs/api/index.html?net/java/dev/rapt/exploratory/mixin/package-summary.html'
  replies: []
---

Guido von Rossum is considering adding interfaces to Python.  In [this article](http://www.artima.com/weblogs/viewpost.jsp?thread=92662), he explains that the power of interfaces has forced a few major Python projects to implement their own version of interfaces, which is probably a sign that such a feature is needed in Python itself.

[Mix-ins](http://en.wikipedia.org/wiki/Mix_in) are strikingly absent from Guido's discussion and I really wonder why.  Mix-ins don't exactly address the same need as interfaces but they are a better fit for scripting languages where concrete and granular software contracts are more important then schemas.

I actually happen to think that mix-ins would be a very welcome addition to Java as well and I can think of many times when I have needed the functionality provided by a set of methods and I was forced to use one of the following three workarounds:

  * Move these methods in a separate class and make them static.
  * Extend the class they belong to (an approach that is wrong on many counts).
  * Use delegation.



Here is a concrete example of this problem.

Imagine that some of your classes need to expose the properties "`shortName`" and "`longName`" with getters and setters.  While interfaces let you specify this contract easily (an interface with four methods), you still need to find a way to capture this implementation in a separate class.

Let's start with the obvious:

```java
public class Nameable {  

  private String m_shortName;  

  private String m_longName;  

  

  public String getShortName() {  

    return m_shortName;  

  }  

  

  public void setShortName(String s) {  

    m_shortName = s;  

  }




  public String getLongName() {  

    return m_longName;  

  }  

  

  public void setLongName(String s) {  

    m_longName = s;  

  }  

}
```

At this point, Java forces you to use one of the three techniques described above, but imagine we could do the following:

```java
public class Employee {  
  import com.beust.Nameable;  // illegal Java  
  // ...  
}
```

Importing the class inside your own class is equivalent to doing a copy/paste of the content of the imported class, so that the following becomes valid:

```java
Employee e = new Employee();  
e.setShortName("Cedric");  
e.setLongName("Cedric Beust");
```

There are a lot of things to like about this approach:

  * **Your Employee class is much less verbose.**   Getters and setters are notoriously verbose in Java and while the Ruby equivalent of Nameable would fit on one line, reading through the Java code adds a lot of noise around what should be a simple concept.  
 
  * You are **not perverting your type system** by extending a class you have no clear "_is-a_ " relationship with.  
 
  * **Changes to the imported class are automatically imported into your class** , so you don't need to keep up with them (as you would with delegation since need to implement new forwarding methods if new methods are added to the delegate).



One might argue that the methods imported are not obvious in your class, but this is no different from regular inheritance, and IDE's can show the imported methods just as easily.

Once the concept of mix-ins is made available to you, you start looking at your code in very different ways and just when you thought you had done a pretty good job at creating small modular classes that interact nicely with each other and isolate the responsibilities in clear ways, you start realizing that you could decompose your architecture much further.  Interfaces allowed you to create a nice abstract schema of your code and mix-ins give you the power to create a nice **concrete** decomposition as well.  It's code reuse at its best.

If you take this concept far enough, you end up with "Quantum Software Design", software that is made of a lot of very tiny pieces that you can mix and match at your leisure without compromising your architecture.

I already used the term "Quantum AOP" a [couple of years ago](http://www.jroller.com/page/cbeust/20030625) to describe software made of tiny aspects that get woven together to create the final product.  This is a very similar concept except that instead of using AOP as the glue, we use a simple, albeit hypothetical as of today, feature of the Java language:  internal class imports.

Interestingly, Quantum Software Design is also a technique that I started identifying recently in my Java code, but this time tied to a totally different framework.  I'll keep the name of this framework secret for now so I can dedicate an entire entry to it very soon.
