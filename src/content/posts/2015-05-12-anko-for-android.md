---
title: Anko for Android
date: '2015-05-12T08:05:29'
slug: anko-for-android
categories:
- Android
- Kotlin
---

I'm really excited to see JetBrains continue to invest in Android. Not long ago, they release [Anko](https://github.com/JetBrains/anko), a library that uses Kotlin's DSL functionalities to offer a different way to define your layouts than XML: 
    
    
    verticalLayout {
        val name = editText()
        button("Say Hello") {
            onClick { toast("Hello, ${name.text}!") }
        }
    }
    

To be honest, I'm still a bit skeptical of the value that such a DSL provides for layout definitions (the XML file based layout that Android supports is extremely flexible to manage layouts for different displays) but JetBrains just released [a new version of Anko](http://blog.jetbrains.com/kotlin/2015/05/advanced-features-of-anko/) and the direction this library is taking is now becoming much more interesting to me. 

With the latest additions, Anko is widening its scope beyond layout definition and adding a set of helper functions that make Android development on Kotlin even cleaner and more concise. The combination of extension functions and the DSL notation really shine for Android development. Here are a few examples: 
    
    
    val flowers = listOf("Chrysanthemum", "Rose", "Hyacinth")
    selector("What is your favorite flower?", flowers) { i ->
        toast("So your favorite flower is ${flowers[i]}, right?")
    }
    

Doing away with the pesky `TAG` requirement for logging: 
    
    
    class SomeActivity : Activity(), AnkoLogger {
        fun someMethod() {
            info("Info message")
            debug(42) // .toString() method will be called automatically
        }
    }
    

Check out the [announcement](http://blog.jetbrains.com/kotlin/2015/05/advanced-features-of-anko/) for more snippets, or head directly to [Anko's project page](http://blog.jetbrains.com/kotlin/2015/05/advanced-features-of-anko/).
