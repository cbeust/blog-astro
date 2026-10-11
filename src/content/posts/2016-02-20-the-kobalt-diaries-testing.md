---
title: 'The Kobalt diaries: testing'
date: '2016-02-20T10:35:25'
slug: the-kobalt-diaries-testing
categories:
- Kobalt
- Kotlin
---

[Kobalt](https://beust.com/weblog/kobalt) automatically detects how to run your tests based on the test dependencies that you declared: 
    
    
    dependenciesTest {
        compile("org.testng:testng:6.9.9")
    }

By default, Kobalt supports TestNG, JUnit and Spek. You can also configure how your tests run with the `test{}` directive: 
    
    
    test {
        args("-excludegroups", "broken", "src/test/resources/testng.xml")
    }

The full list of configuration parameters can be found in the [TestConfig](https://github.com/cbeust/kobalt/blob/master/modules/kobalt-plugin-api/src/main/kotlin/com/beust/kobalt/TestDirective.kt#L6) class. 

Additionally, you can define multiple test configurations, each with a different name. Each configuration will create an additional task named `"test"` followed by the name of that configuration. For example: 
    
    
    test {
        args("-excludegroups", "broken", "src/test/resources/testng.xml")
    }
    test {
        name = "All"
        args("src/test/resources/testng.xml")
    }

The first configuration has no name, so it will be launched with the task `"test"`, while the second one can be run with the task `"testAll"`. 

_The full series of articles on Kobalt can be found[here](https://beust.com/weblog/weblog/category/kobalt/)_.
