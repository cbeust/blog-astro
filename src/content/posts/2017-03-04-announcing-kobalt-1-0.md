---
title: Announcing Kobalt 1.0
date: '2017-03-04T06:56:08'
slug: announcing-kobalt-1-0
categories:
- Kobalt
- Kotlin
---

I'm happy to announce the release of [Kobalt 1.0.](https://beust.com/weblog/kobalt) Kobalt has been stable for more than a year now but it's finally reached a point where all the features that I wanted to incorporate in a first release are now present. The most recent one is incremental Kotlin compilation from the Kotlin compiler itself. Kobalt already supports incremental builds at the task level (it can determine if a task needs to run and completely skip it if nothing needs to be done) but with Kotlin incremental compilation, build times are dramatically reduced for situations where you have only modified a few files: 

```kotlin
===== kobalt-plugin-api:compile
  Kotlin 1.1.0 compiling 163 files
  Actual files that needed to be compiled: 1
```

Here is a quick summary of Kobalt's features: 

  * A clean, minimal syntax for build files in Kotlin. Each project is clearly delineated along with plug-in configurations.
  * Full support for build files in IDEA since they are valid Kotlin class files.
  * Parallel builds. Projects that don't depend on each other get built in parallel. This is performed with the same [`DynamicGraph` algorithm](https://beust.com/weblog/weblog/2009/11/28/hard-core-multicore-with-testng/) that TestNG uses, which guarantees the optimal parallelism for your builds.
  * Sensible defaults to avoid boilerplate. Kobalt uses Maven Central and JCenter by default, ships with a Kotlin, Java and Groovy plug-ins, instant support for Bintray and Github uploads, etc...
  * Automatic detection of newer dependencies found in the repos.
  * Seamless self upgrades. Kobalt will let you know when newer versions are available and will let you upgrade with a simple command.
  * An intuitive and fully statically typed plug-in architecture, inspired from Eclipse and IDEA's.
  * ... and many more.

To get started, [download the distribution](https://github.com/cbeust/kobalt/releases/latest), go read [the documentation](https://beust.com/weblog/kobalt) and [join us on Slack](https://kotlinlang.slack.com/messages/kobalt/) to ask questions, report issues or suggest new features.
