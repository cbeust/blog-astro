---
title: TestNG and Scala
date: '2008-01-31T09:44:42'
slug: testng-and-scala
categories:
- Java
comments:
- id: 7110
  author: Andres Almiray
  date: '2008-01-31T16:40:14'
  content: Cedric, don't forget that the Groovy Eclipse plugin now has a wizard for creating TestNG classes as well as being able to run them.
  replies: []
- id: 7111
  author: Muthu Ramadoss
  date: '2008-01-31T23:46:07'
  content: Good news on the Surefire - Maven support. I'm changing the version number right now.. Thanks.
  replies: []
---

![](https://reportng.dev.java.net/detail.gif)

There's been a lot of activity in the TestNG world lately... Here are some highlights. 

## TestNG in Scala

  
Josh Cough has been busy working with [TestNG and Scala](http://jackcoughonsoftware.blogspot.com/2008/01/scala-and-testng-in-far-greater-detail.html). As a credit to Scala's great integration with the JVM, it looks like the task was rather easy and Josh is showing a few examples in this blog post. 

I notice two interesting pieces. First, a Data Provider: 

```kotlin
@DataProvider{val name="generators"}
def createGenerators = {
val gens = Array(off, on)
for( x <- gens; y <- gens ) yield Array(x,y)
}
```

Notice how the same array is used to generate the two dimensions of the boolean matrix... This data provider will simply return the four possible combinations of "on" and "off" pairs. 

The test making use of that Data Provider is fairly straightforward: 

```kotlin
@Test{ val dataProvider="generators" }
def testAndGateStates(genA: Generator, genB: Generator){
val and: AndGate = new AndGate(genA, genB);
val whatItShouldBe = genA.on && genB.on
assertThat( and.on, is(whatItShouldBe) );
println( and.on + "==" + genA.on + "&&" + genB.on )
}
```

Notice also the appearance of HamCrest (`assertThat`). 

## ScalaTest

  
Bill Venners, from Artima, has also been busy cranking Scala code, and he came up with this nifty test framework called [ScalaTest](http://www.artima.com/scalatest/). His 0.9 release made the rounds and [the discussion on Artima](http://www.artima.com/forums/flat.jsp?forum=106&thread=222678) is now up to 58 replies(!). 

Not surprisingly, Josh chimed in on the thread about the [0.9.1 release](http://www.artima.com/forums/flat.jsp?forum=106&thread=223156) and TestNG support in ScalaTest was achieved in less time it took to write these words (I'm a slow typist). Talk about a match in heaven! 

## ReportNG

  
On a different front, the efforts to replace the default TestNG reports have not abated. First, there were Cosmin Marginean's [XSL based reports](http://test.cosminaru.ro/testng-xslt/html/TestNG%20JDK%201.4%20\(v4\).html), and now we have [ReportNG](https://reportng.dev.java.net/), by Daniel Dyer, who uses Velocity to achieve grace and aesthetics in testing reports (who would have thought?). 

## Surefire 2.4 release

  
TestNG users who use Maven to build their code have been having a very hard time these past months. Because of various incompatibilities in the ways that TestNG and Surefire have evolved, TestNG users have been forced to use Surefire snapshots, which are notoriously unstable, and all kinds of mayhems and cryptic errors ensued. 

These dark days are now over: [Surefire 2.4 is out](http://maven.apache.org/plugins/maven-surefire-plugin/) and [it fully supports the latest TestNG releases](http://maven.apache.org/plugins/maven-surefire-plugin/examples/testng.html). 

Deleting SNAPSHOT files has never felt so good. 

## Book review

  
Finally, Masood Mortazavi likes [our book](http://www.amazon.com/Next-Generation-Java-Testing-Advanced/dp/0321503104) so much that he decided to write [a review](http://weblogs.java.net/blog/mortazavi/archive/2008/01/next_generation_1.html). And we didn't even have to pay him! 

And that's all for today...
