---
title: A close look at Kotlin's "let"
date: '2016-01-14T17:31:33'
slug: a-close-look-at-kotlins-let
categories:
- Kotlin
---

`let` is a pretty useful function from the Kotlin standard library [defined as follows](https://github.com/JetBrains/kotlin/blob/master/libraries/stdlib/src/kotlin/util/Standard.kt#L47): 
    
    
    fun <T, R> T.let(f: (T) -> R): R = f(this)
    

You can refer to [a previous article I wrote](http://beust.com/weblog/weblog/2015/10/30/exploring-the-kotlin-standard-library/) if you want to understand how this function works, but in this post, I'd like to take a look at the pros and cons of using `let`. 

`let` is basically a scoping function that lets you declare a variable for a given scope: 
    
    
    File("a.txt").let {
        // the file is now in the variable "it"
    }
    

There is another subtle use of `let` when applied to a nullable reference. The `?.` operator lets you make sure that the code in scope is only run if the expression is not null: 
    
    
    findUser(id)?.let {
        // only run if findUser() returned a non null value
    }
    

After going back and forth about whether this idiom is superior to a simple `null` test, I am slowly leaning to abandoning it in favor of an `if` for the following reasons: 

  * This idiom is only useful if you want to do an `if` that doesn't have an `else` branch. I tend to view such constructs as suspicious since `if` without an `else` can be a source of bugs.   

  * This idiom introduces a renaming. Either you use the default lambda syntax, in which case the renamed variable is implicitly called `it`, or you explicitly name the argument: 
        
        val user = findUser(id)
        user?.let { foundUser ->
            // ...
        }
        

This can occasionally be useful but sometimes, I just don't feel like being forced to rename my variable.   

  * Following the previous point, `if` doesn't impose a renaming but Kotlin's smart casting guarantees that you won't have any surprise: 
        
        val user = findUser(id)
        if (user != null) {
            // user is now a non null reference
        }
        

Also, the fact that no new name was introduced and the variable keeps its name `user` the entire time improves readability in my opinion.   




So for these reasons, I tend to default to a good old `if` these days. None of these arguments are deal breakers, it's mostly a stylistic preference at this point. Let's see if I'll change my mind over the next few months.
