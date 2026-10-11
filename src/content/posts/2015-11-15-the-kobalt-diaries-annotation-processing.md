---
title: 'The Kobalt diaries: annotation processing'
date: '2015-11-15T07:25:53'
slug: the-kobalt-diaries-annotation-processing
categories:
- General
- Kobalt
- Kotlin
---

I recently added [`apt` support](http://beust.com/weblog/kobalt/plug-ins/index.html#apt) to [Kobalt](http://beust.com/weblog/kobalt), which is a requirement for a build system these days, and something interesting happened. 

First of all, the feature itself in Kobalt: pretty straightforward. The `apt` plug-in adds a new dependency directive similar to `compile`: 
    
    
    dependencies {
        apt("com.google.dagger:dagger:2.0.2")
    }
    

The processing tool can be further configured (output directory, arguments, etc...) with a separate `apt` directive: 
    
    
    apt {
        outputDir = "generated/sources/apt"
    }
    

In order to test this new feature, I decided to implement a simple annotation processor project and I went for a `Version` class generator. As I wrote this processor, I realized that it was actually something I could definitely use in my other projects. 

Of course, you can always simply hard code the version number of your application in a source file but that version number is typically something that's useful outside of your code: you might need it in your build file, or when you generate your artifacts, or maybe other projects need to refer to it. Therefore, it often makes sense to isolate that version number in a property file and have every entity that needs it read it from that property file. 

This is how [version-processor](https://github.com/cbeust/version-processor) was born. It's pretty simple really: all you need to do is annotate one of your classes with `@Version` and a `GeneratedVersion.java` file is created, which you can then refer to. That version number can either be hardcoded or specified in a properties file. Head over to the [project's main page](https://github.com/cbeust/version-processor) for the details. 

And of course, it's built with [Kobalt](http://beust.com/weblog/kobalt) and if you are curious, [here is the processor's build file](https://github.com/cbeust/version-processor/blob/master/Build.kt#L11-L25): 
    
    
    val processor = javaProject {
        name = "version-processor"
        group = "com.beust"
        artifactId = name
        version = "0.2"
        directory = "processor"
        assemble {
            mavenJars {}
        }
        jcenter {
            publish = true
        }
    }
    

Happy version generating! 

_The full series of articles on Kobalt can be found[here](http://beust.com/weblog/weblog/category/kobalt/)_.
