---
title: 'The Kobalt diaries: it''s the little things'
date: '2015-11-23T15:58:11'
slug: the-kobalt-diaries-its-the-little-things
categories:
- Kobalt
- Kotlin
---

When I embarked on the ridiculously ambitious goal of [writing a build tool](http://beust.com/weblog/kobalt), I had plans to tackle both big problems and small problems. My previous (and probably future) blog post cover the big problems such as performance, plug-in architecture and DSL syntax, but in this post, I'm going to cover a few little things that I was quite happy to finally be able to get from my build tool. 

I've always found it a hassle to keep up with the latest versions of the dependencies of my build, especially since it's its job to tell me. Therefore, Kobalt has a handy `--checkVersions` parameter that will check to see if it can find any new version of your dependencies: 
    
    
    $ ./kobaltw --checkVersions
    New versions found:
            org.jetbrains.kotlin:kotlin-compiler-embeddable:1.0.0-beta-2423
            org.jetbrains.kotlin:kotlin-stdlib:1.0.0-beta-2423
            com.squareup.okhttp:okhttp:2.6.0
            com.squareup.retrofit:retrofit:2.0.0-beta2
    

Another convenient switch is `--resolve`, which looks up a dependency and gives you some information about it, such as which Maven repo it is found in and its own dependency tree. You can also use an id without a version (e.g. `org.testng:testng:`) to ask Kobalt to find the most recent version of that artifact: 
    
    
    $ ./kobaltw --resolve org.testng:testng:
    ????????????????????????????????????????????????????????????????????????????????????
    ?                                     org.testng:testng:                           ?
    ?           http://repo1.maven.org/maven2/org/testng/testng/6.9.9/testng-6.9.9.jar ?
    ????????????????????????????????????????????????????????????????????????????????????
    ? junit:junit:4.10
    ?      ? org.hamcrest:hamcrest-core:1.1
    ? com.beust:jcommander:1.48
    ? org.apache.ant:ant:1.7.0
    ?      ? org.apache.ant:ant-launcher:1.7.0
    ? org.yaml:snakeyaml:1.15
    ? org.beanshell:bsh:2.0b4
    

Finally, I've always been bugged by what I consider a glaring omission of the Gradle Android plug-in: not being able to run my applications. The plug-in generates tasks for the various variants of your application (`assembleDevDebug, assembleDevRelease, installDevDebug`, etc...) but strikingly, no `"run"` task. I'm happy to report that Kobalt's Android plug-in supports exactly that. To see it in action, clone the [Kobalt example](https://github.com/cbeust/kobalt-examples) and follow the instructions at the bottom of the README: 
    
    
    $ ./kobaltw runFreeDebug // build, install and launch that variant
    $ ./kobaltw runFreeRelease // build, install and launch that variant
    

I've made a lot of improvements to the Android plug-in lately, but that will be the topic for another post. 

_The full series of articles on Kobalt can be found[here](http://beust.com/weblog/weblog/category/kobalt/)_.
