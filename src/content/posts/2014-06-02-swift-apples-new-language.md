---
title: Swift, Apple's new language
date: '2014-06-02T11:13:39'
slug: swift-apples-new-language
categories:
- General
- Kotlin
---

Apple just announced a new language called Swift. I took a look at the language manual, here is a quick overview: 

  * Statically typed with type inference. 
  * Generics. 
  * Closures. 
  * No exceptions. 
  * Extension methods. 
  * Properties (syntax similar to C#), including lazy properties with the `"@lazy"` annotation. 
  * Functions, methods and type (static) methods. 
  * Support for observers (with `"willSet"` and `"didSet"`). Interesting to see the observer pattern baked in a language although I'm more partial to event buses for this kind of thing. 
  * Enums. 
  * Classes and structures (structures have restrictions regarding inheritance and other things). 
  * For and while loops (statements, not expressions). 
  * `"mutating"` keyword. 
  * Named parameters. 
  * Deinitializers (finalizers). 
  * Protocols (interfaces). 
  * Optional chaining with `"a?.b?.c"` and forced dereference with `"!."`". 
  * Convenient "assign and test": `"if let person = findPerson() ..."`. 
  * Type casting with `"is"`, down casting with `"as?"` (combines nicely with the `"let"` syntax. Ceylon does it right too). 
Very interesting overall, and a clear step up from Objective C. From the feature set, I would say the language that Swift has the most overlap with is Kotlin, which is great news for Apple developers. 

_Update:[discussion on reddit](http://www.reddit.com/r/programming/comments/274t5s/apple_swift_programming_language_unveiled/chxgtfh)_.
