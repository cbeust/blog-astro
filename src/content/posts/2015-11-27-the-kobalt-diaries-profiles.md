---
title: 'The  Kobalt diaries: profiles'
date: '2015-11-27T06:41:56'
slug: the-kobalt-diaries-profiles
categories:
- Kobalt
- Kotlin
---

When I started thinking about how profiles should work in Kobalt, I realized that the simplest approach I'd like to see in a build tool is defining a boolean variable and having `if` statements in my build file. So that's exactly how Kobalt's profiles are implemented. 

You start by defining boolean values initialized to `false` in your build file: 

```kotlin
  val experimental = false
  val premium = false
```

Then you use this variable wherever you need it in your build file: 

```kotlin
  val p = javaProject {
      name = if (experimental) "project-exp" else "project"
      version = "1.3"
      ...
```

Finally, you invoke `./kobaltw` with the `--profiles` parameter followed by the profiles you want to activate, separated by a comma: 

```bash
  ./kobaltw -profiles experimental,premium assemble
```

Keep in mind that since your build file is a real Kotlin source file, you can use these profile variables pretty much anywhere, e.g.: 

```kotlin
dependencies {
    if (experimental)
        "com.squareup.okhttp:okhttp:2.4.0"
    else
        "com.squareup.okhttp:okhttp:2.5.0",
```

And that's it. 

_The full series of articles on Kobalt can be found[here](http://beust.com/weblog/weblog/category/kobalt/)_.
