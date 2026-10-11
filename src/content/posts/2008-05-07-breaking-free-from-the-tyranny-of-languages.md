---
title: Breaking free from the tyranny of languages
date: '2008-05-07T08:58:29'
slug: breaking-free-from-the-tyranny-of-languages
categories:
- Java
comments:
- id: 7216
  author: Erik Engbrecht
  date: '2008-05-07T09:34:58'
  content: Can't you just use a TreeMap with a custom comparator?  I know technically that breaks the contract specified by the Map interface because it's inconsistent with equals, but that's what you want here...
  replies: []
- id: 7217
  author: Sam
  date: '2008-05-07T11:27:35'
  content: '"I know technically that breaks the contract specified by the Map interface because it''s inconsistent with equals, but that''s what you want here..."

    Not really.  They only thing required is that objects that are equal() must have the same hash code.  Therefore, if he overrides the hashcode method, he can make them the same by just lower or upper-casing everything.'
  replies: []
- id: 7218
  author: Marcus
  date: '2008-05-07T15:45:30'
  content: A simple(r) alternative could be to make a Map implementation that wraps another map, converting all key parameters to uppercase.
  replies: []
- id: 7219
  author: Ignacio Coloma
  date: '2008-05-08T07:05:05'
  content: If you convert your keys to lowercase/uppercase, the conversion will be done just once, at insertion, instead of once per key comparison.
  replies: []
- id: 7220
  author: Miroslav Pokorny
  date: '2008-05-09T17:33:37'
  content: '@Ignacio, but then if one wanted to iterate thru the keys of the map you would be getting all upper cased versions.'
  replies: []
- id: 7221
  author: Sony Mathew
  date: '2008-05-12T12:07:16'
  content: Guice is the most innovative framework u've seen in a long time?  Really?  You, Lee & Yegge must be at opposite corners at Google.
  replies: []
- id: 7222
  author: Dhanji R. Prasanna
  date: '2008-05-20T20:35:16'
  content: '"Can''t you just use a TreeMap with a custom comparator? I know technically that breaks the contract specified by the Map interface because it''s inconsistent with equals, but that''s what you want here..."

    TreeMap is a binary tree not a hashtable, which defeats the purpose. The wrapping map which uppers everything is a very elegant solution.

    But I think the greater point of cedric post was to do with the evolution of the language/platform rather than any Map api...'
  replies: []
- id: 7223
  author: Lee
  date: '2008-05-23T08:25:15'
  content: 'I remember reading some MS manuals for DOS for 68K back in 1983 or 84 that outlined MicroSofts future path for languages. It clearly described the virtual machine that each compiler would generate code for. At that time it was the C, BASIC and Fortran languages that would be rendered into a common "byte code". They described it as the path to processor independence at that time. The other, similar tool in that time frame was UCSD Pascal which ran on 8086, 68K, 6801, 6502, Z80, etc. processors back then.

    It''s interesting to see, 25 years later, the way all the .NET tools work this way but have incorporatated what we would have called OS level functions in the olden days.'
  replies: []
---

I recently came across this [documentation page from the .Net API](http://msdn.microsoft.com/en-us/library/ms132151.aspx). 

I was investigating the possibility of creating a `Map` that would allow `String` keys to be case insensitive in Java. Neither the language nor the standard libraries allow you to do this easily at this moment, because 1) `hashCode` and `equals` are methods that are defined on `Object` and 2) all the collection classes use these methods directly. Therefore, I was wondering how hard it would be to extract these two methods in an external class (you could use a Trait in Scala) and delegate these calls there instead of on the objects themselves. 

This idea is not exactly new and it would be pretty easy to implement, and as you can see from this page, it is already supported in .Net. 

But that's not what caught my eye. 

Do you notice anything special on this page? Look again. 

The key here is to realize that this is not a "C# page" or a "Visual Basic page". It's ".Net documentation page". And for this reason, it describes the functionality in general terms and then it gives specific examples in not one but **five** languages. 

Maybe I'm easily impressed, but I find this amazing. 

Here is the deal: I have always been a fan of COM. Since day one. Well, not exactly day one since the early days of COM in C and C++ were extremely painful, but I certainly saluted the ambition behind the idea: trying to make all Windows applications 1) accessible from the outside and 2) from any language. Until Microsoft created COM, this goal had never really been achieved by any technology. 

Fast forward thirteen years: COM has morphed into .Net, the complex COM binary interface is now hidden behind a neat virtual machine with a powerful bytecode set, and the dream of writing applications independently of languages is a reality on the Windows platform. Hats off to Microsoft. 

Now, where does that leave us, Java developers? 

Well, we have achieved an independence of sorts, although it happened much more by accident. 

Microsoft built its framework with a clear vision that was spelled out around 1995 and that took many years to carry out. Java, on the other hand, started with a clear focus on the language, with the JVM and the bytecode as a simple foundation to make it easier to run Java programs on several platforms (actually, event the intent for the JVM has changed over the years: it was first designed to run on embedded devices, then in web browsers as applets, and it finally found its true vocation on the server, something that Sun never saw coming). 

What's interesting in this story is that not only did Java emerge as a superstar of languages, but it slowly and surely dragged the JVM and its bytecode into the spotlight as well. The versatility of the original design should certainly be saluted, but it's eventually the formidable Java ecosystem and its users that took the JVM to heights never envisioned. 

It started innocently with a few experiments that generated bytecodes to alter existing classes or to create new ones on the fly, and it's now culminating with not only some of the [most innovative frameworks I've seen in years](http://code.google.com/p/google-guice/), but the JVM has also the foundation for a [multitude of new languages](http://www.robert-tolksdorf.de/vmlanguages.html) that not only run JVM bytecodes but that also interoperate seamlessly with the Java platform. 

In a way, Java has enabled language independence as well. It's not as extensive as .Net, but it certainly runs on many more platforms.
