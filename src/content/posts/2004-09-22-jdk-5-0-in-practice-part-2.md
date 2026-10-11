---
title: JDK 5.0 in practice, part 2
date: '2004-09-22T07:05:38'
slug: jdk-5-0-in-practice-part-2
categories:
- Java
comments:
- id: 2399
  author: Zohar
  date: '2004-09-22T04:40:26'
  content: 'Cedric,

    The first non generic version has a Map of Account with a String key.

    The generics version has a Map of List of Account with a String key.'
  replies: []
- id: 2400
  author: dave
  date: '2004-09-22T04:53:52'
  content: FYI, IDEA already ships with the ability to flag auto-boxing and auto-unboxing.
  replies: []
- id: 2401
  author: Frank Bolander
  date: '2004-09-22T09:24:00'
  content: Since we're talking radical evolutions, I wish Sun would step up the numerics of the JDK 5.0(ie extended precisions, more performant numerical libraries,etc.) Marshalling BigDecimals around is a PITA.
  replies: []
- id: 2402
  author: Shai Almog
  date: '2004-09-22T10:04:54'
  content: 'Cedric: Well, first of all, nobody can dispute that Generics are a solid concept that tends to improve the robustness of your code.

    Well, I disagree. Generics are a redundant feature and Java has been easier and just as useful as C++/C# without them so I think this is proof enough.

    Generics skyrocket the complexity when dealing with polymorphism and various other complex use cases. Not to mention code readability, how even the JavaDoc isn''t as readable as it used to be etc...

    The Java implementation of generics is so bad... I think this is the main reason Joshua Bloch ran away from Sun, he knew people will start throwing rotten fruit on him in conventions when they start running into the "issues" with this implementation.

    People always say "casting is evil", this is true for C++ where your application can crash and burn with no explanation... This is not as accurate in a dynamic runtime typesafe language such as Java. It should be modified to: "There are worse things than casting... Such as a crappy implementation of generics, or added complexity..."

    Cedric: why can''t I just write:

    Account a = m.get("Cedric");

    You are afraid of auto boxing and not of automatic casting???

    I would rather have a verbose language, its easier to read and grep. The fewer constructs we have in the language the better. Sure its a matter of opinion but it seems to me like inconsistency?'
  replies: []
- id: 2403
  author: Jonathan Aquino
  date: '2004-09-22T13:27:28'
  content: '[ why can''t I just write: ... Account a = m.get("Cedric"); ]

    Groovy to the rescue! (or JRuby or Jython or BeanShell ...)'
  replies: []
- id: 2404
  author: Kirk
  date: '2004-09-23T01:34:14'
  content: 'Hey Cedric,

    Interesting blogging software. It tagged my response as containing questionable content. Are you trying to censor those that are speaking out against generics?  ;)

    I'
  replies: []
- id: 2405
  author: Calum
  date: '2004-09-27T04:48:31'
  content: '"why can''t I just write:

    Map m = new HashMap();  // no generics

    ...

    Account a = m.get("Cedric");"

    I thought that was the main point of generics - that you could get type-safe access without casting.

    In this scenario, what''s to stop me doing:

    Bank b = m.get("Cedric");

    (introducing a silent cast to Bank) and getting a ClassCastException at runtime, as the object is actually an Account?

    If the compiler''s going to allow you to remove casts, it needs to know what''s allowed and what''s not allowed, and basing it on one particular call to the map doesn''t seem too robust IMO.'
  replies: []
- id: 2406
  author: Infernoz
  date: '2004-09-29T12:14:09'
  content: I think typedefs is definitely the answer for generics collections and the typed defs should be exposed by the .class file too, so that the compiler _knows_ what kind of composite collection is being passed into/out-of an object/class, otherwise the whole charade falls flat on it face for compiled library code!  A bonus of the .class approach maybe that _proper_ generics would be possible, not the current half-arsed solution.
  replies: []
- id: 2407
  author: Sam Pullara
  date: '2004-10-04T11:53:08'
  content: 'I''m glad Cedric has come around to my way of thinking :) Must be the Google juice:

    http://www.javarants.com/C1464297901/E1994239229/index.html

    Sam'
  replies: []
- id: 2408
  author: Isaac Gouy
  date: '2004-11-15T07:45:04'
  content: '"there is no nice way to avoid this syntax"

    Sure there is!

    HashMap&#60;String, List&#60;Account&#62;&#62; accounts = new HashMap();

    let L1 = accounts.get("Cedric");

    ?List&#60;Account&#62; L2 = accounts.get("Cedric");

    Nice is statically type-checked with local-type-inference, and compiles to standard JVM bytecode.

    http://nice.sourceforge.net/'
  replies: []
- id: 2409
  author: anr
  date: '2004-12-08T21:32:22'
  content: sdfgg
  replies: []
- id: 2410
  author: blacxcom
  date: '2010-01-07T07:00:47'
  content: Very nice article about JDK 5.0
  replies: []
- id: 2411
  author: ''
  date: '2010-01-07T07:02:06'
  content: 'Nice article about JDK 5.0 in practice

    http://blackbookcarvaluesx.com/tags/auto'
  replies: []
---

**Autoboxing**

I have stayed away from autoboxing so far, probably because I have a vague feeling of losing control of the performance of my code. I don't think it is justified, though, so autoboxing can come in handy and make your code a little bit more readable. I think I would encourage developers to flag their code when such autoboxing is happening, and I am pretty sure that IDE's will soon be able to do the same. 

**Generics**

Where to start? 

Well, first of all, nobody can dispute that Generics are a solid concept that tends to improve the robustness of your code. The reason why they are so usually controversial regardless of the language is because of their implementation. And for having been a member of the C++ committee for many years , I can definitely vouch for the difficulty of getting them right. 

In a nutshell, I have this to say about Java generics: my code feels more robust, but it's harder to read. 

So what's the problem? 

Redundancy. 

First of all, I have always had a hard time with the redundancy introduced by the necessity of casting in general. For example, instead of writing: 

```java
Map accounts = new HashMap();  // no generics
...
Account a = (Account) accounts.get("Cedric");
```

why can't I just write: 

```java
Map m = new HashMap();  // no generics
...
**Account a = m.get("Cedric");**
```

and let the compiler introduce a silent cast, since obviously, it's an object of type Account that I am trying to retrieve from the Map? 

Obviously, Generics don't solve this problem entirely but they make a decent job at alleviating it somewhat. But they also make it worse in some other ways: 

```java
Map<String, List<Account>> accounts =
new HashMap<String, List<Account>>();
```

Ouch. 

Not only is the code significantly harder to read, but it fails to obey the DRY principle ("Don't repeat yourself"). What if I need to change the value type of this map from List<Account> Collection<Account>? I need to replace all these statements everywhere in my code. While IDE refactoring will help, it's still an awful lot of code for a modification of this kind that hardly impacts the semantics of this code. 

Admittedly, there is no nice way to avoid this syntax when you are creating a new object, but what I am driving at is that I think Generics would have been better off if typedefs had been introduced with them. 

Or so I thought at first. 

But after thinking about it more, I realized that typedefs were the wrong solution to the problem, because simply put, they don't add anything to the use of a separate class to define your complex Generic type. 

```java
class AccountMap extends HashMap<String, List<Account>> {
...
}
```

Except for the fact that you need to extend an implementation (HashMap, and not Map, obviously), this solution is probably better than introducing typedef, which has its own quirks. 

I haven't gone to this trouble so far, but my recommendation would be: do it if you write the type more than three times (twice in the initialization and you use it more than once in your code). 

Except for this little annoyance, I am quite happy with Generics overall and I particulary enjoy reading the [TestNG Javadocs](http://beust.com/weblog/testng/javadocs/com/beust/testng/SuiteRunner.html) so nicely typed. 

**Conclusion**

I am very happy with the new features of JDK 5.0 and I am quite proud to have had a chance to influence it with my participation in JSR 175 and JSR 201. Like all radical evolutions, not all of the new features will be popular with everyone, but as long as most developers find some of these features useful and that backward compatibility is preserved, I think JDK 5.0 is a very solid step toward more solid Java code.
