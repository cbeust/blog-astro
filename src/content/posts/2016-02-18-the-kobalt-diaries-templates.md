---
title: 'The Kobalt diaries: templates'
date: '2016-02-18T20:51:27'
slug: the-kobalt-diaries-templates
categories:
- Kobalt
- Kotlin
---

The latest addition to [Kobalt](https://beust.com/weblog/kobalt) is [templates](https://beust.com/weblog/kobalt/documentation/index.html#templates), also known as "archetypes" in Maven.

Templates are actions performed by plug-ins that create a set of files in your project. They are typically used when uou are beginning a brand new project and you want some default files to be created. Of course, nothing stops you from invoking templates even if you already have an existing project since templates can generate pretty much any kind of files. Here is how they work in Kobalt.

You can get a list of available templates with the `--listTemplates` parameter:
    
    
    $ kobaltw --listTemplates
    Available templates
      Plug-in: Kobalt
        "java"              Generate a simple Java project
        "kotlin"            Generate a simple Kotlin project
        "kobalt-plugin"     Generate a sample Kobalt plug-in project

You invoke a template with the `--init` parameter. Let's call the `"kobalt-plugin"` template:
    
    
    $ ./kobaltw --init kobalt-plugin
    Template "kobalt-plugin" installed
    Build this project with `./kobaltw assemble`
    $ ./kobaltw assemble
              ------------------------------
              | Building kobalt-line-count |
              ------------------------------
    ----- kobalt-line-count:compile
    ----- kobalt-line-count:assemble
      Created .\kobaltBuild\libs\kobalt-line-count-0.18.jar
      Created .\kobaltBuild\libs\kobalt-line-count-0.18-sources.jar
      Wrote .\kobaltBuild\libs\kobalt-line-count-0.18.pom
    BUILD SUCCESSFUL (3 seconds)

The template was correctly installed, then it provided instructions on what to do next, which we followed, and now we have a fully working project. This one is particular since it's a Kobalt plug-in and I'll get back to it shortly. But before that, let's drill a bit deeper into templates.

Templates would be pretty useless if they were limited to the default Kobalt distribution, so of course, you can invoke templates on plug-ins. Even plug-ins that you haven't downloaded yet! Kobalt can download plug-ins from any Maven repository and run them.

To illustrate this, let's see what templates the Kobalt Android plug-in offers:
    
    
    $ kobaltw --listTemplates --plugins com.beust:kobalt-android:
      Downloaded https://jcenter.bintray.com/com/beust/kobalt-android/0.40/kobalt-android-0.40.pom
      Downloaded https://jcenter.bintray.com/com/beust/kobalt-android/0.40/kobalt-android-0.40.jar
    Available templates
      Plug-in: Kobalt
        "java"              Generate a simple Java project
        "kotlin"            Generate a simple Kotlin project
        "kobaltPlugin"      Generate a sample Kobalt plug-in project
      Plug-in: Android
        "androidJava"       Generate a simple Android Java project
        "androidKotlin"     Generate a simple Kotlin Java project

Several things happened here. First of all, we are invoking the same `--listTemplates` command as earlier but this time, there is a new `--plugins` parameter. You pass this parameter a list of Maven id's representing the Kobalt plug-ins you want Kobalt to install. This is similar to declaring these plug-ins in your build file, except that typically, when you run a template, you don't have a build file yet. So this is an easy way to install plug-ins without requiring a build file.

Finally, notice that the Maven id used above, `"com.beust:kobalt-android:"` doesn't have a version number and instead, ends with a colon. This is how you ask Kobalt to locate the latest version of the plug-in for you.

Kobalt responded by determining that the latest version of the Kobalt Android plug-in is 0.40, downloading it, installing it and then asking it what templates it provides. The Kobalt Android plug-in provides two templates, both of them creating a full-blown Android application, one written in Kotlin and one in Java. Let's install the Kotlin one:
    
    
    $ kobaltw --plugins com.beust:kobalt-android: --init androidKotlin
    Template "androidKotlin" installed
    Build this project with `./kobaltw assemble`
    $ find .
    ./kobalt/src/Build.kt
    ./src/main/AndroidManifest.xml
    ./src/main/kotlin/com/example/MainActivity.kt
    ./src/main/res/drawable-hdpi/ic_launcher.png
    ./src/main/res/drawable-ldpi/ic_launcher.png
    ./src/main/res/drawable-mdpi/ic_launcher.png
    ./src/main/res/drawable-xhdpi/ic_launcher.png
    ./src/main/res/values/strings.xml
    ./src/main/res/values/styles.xml
    $ ./kobaltw assemble
              ????????????????????????
              ? Building kobalt-demo ?
              ????????????????????????
    ----- kobalt-demo:generateR
    ----- kobalt-demo:compile
    ----- kobalt-demo:proguard
    ----- kobalt-demo:generateDex
    ----- kobalt-demo:signApk
    Created kobaltBuild\outputs\apk\kobalt-demo.apk
    ----- kobalt-demo:assemble
    BUILD SUCCESSFUL (9 seconds)

We now have a complete Android application written in Kotlin.

Let's go back to the template we built at the beginning of this article: the Kobalt plug-in called `"kobalt-line-count-0.18.jar"`. It's a valid Kobalt plug-in so how do we test it? We could upload it to JCenter and then invoke it with the `--plugins` parameter, but Kobalt provides another handy command line parameter to test such plug-ins locally: `--pluginJarFiles`. This parameter is similar to `--plugins` in that it installs a plug-in, except that it does so from a local jar file and not a remote Maven id.

Let's install this plug-in and see which tasks are then available to us:
    
    
    $ ./kobaltw --pluginJarFiles kobaltBuild/libs/kobalt-line-count-0.18.jar --tasks
    List of tasks
    ...
      ----- kobalt-line-count -----
        dynamicTask         Dynamic task
        lineCount           Count the lines
    ...
    

As you can see, Kobalt has installed the `kobalt-line-count` plug-in, which then added its own tasks to Kobalt's default ones. The Kobalt plug-in template appears to work fine. From this point on, you can edit it and create your own Kobalt plug-in.

Speaking of plug-in development, how hard is it to add templates to your Kobalt plug-in? Not hard at all! All you need to do is to implement the `[ITemplateContributor](https://github.com/cbeust/kobalt/blob/master/modules/kobalt-plugin-api/src/main/kotlin/com/beust/kobalt/api/ITemplateContributor.kt)` interface:
    
    
    interface ITemplateContributor {
        val templates: List<ITemplate>
    }

Each template provides a name, a description and a function that actually generates the files for the current project. Feel free to browse how [Kobalt's Android plug-in implements its templates.](https://github.com/cbeust/kobalt-android/blob/master/src/main/kotlin/com/beust/kobalt/plugin/android/Templates.kt)

_The full series of articles on Kobalt can be found[here](https://beust.com/weblog/weblog/category/kobalt/)_.
