---
title: What Kotlin could learn from Rust
date: '2021-11-09T03:58:22'
slug: what-kotlin-could-learn-from-rust
categories:
- Uncategorized
comments:
- id: 10838
  author: Solomon Ucko
  date: '2021-11-10T12:00:03'
  content: Nice article! In terms of native executables, what about [Kotlin Native](https://kotlinlang.org/docs/native-command-line-compiler.html) and [Kotlin Multiplatform](https://kotlinlang.org/docs/mpp-intro.html)?
  replies: []
- id: 10839
  author: Jakub Ber??nek
  date: '2021-11-10T16:06:22'
  content: "I suppose that you can emulate extension traits in Kotlin by creating an extension method on a trait? Something like this:\r\nhttps://pl.kotl.in/JhPFjH6hL"
  replies: []
- id: 10840
  author: Cedric
  date: '2021-11-10T16:16:01'
  content: 'Jakub: you still can''t make a class conform to an interface this way.'
  replies: []
- id: 10841
  author: Daniil
  date: '2021-11-10T17:19:15'
  content: "In the \"Extension traits\" this is how the similar code will look in Kotlin:\r\n\r\nfun Int.lastDigit(): Int = this % 10\r\n\r\nfun main() {\r\n    println(\"Last digit for 123: ${123.lastDigit()}\")\r\n}\r\n\r\nCan you please show which part of the rust example is \"elegant and minimalistic\" ?"
  replies: []
- id: 10842
  author: Cedric
  date: '2021-11-10T17:27:41'
  content: "Daniil:\r\n\r\nThis example demonstrates extension traits, which Kotlin doesn't support (you are only showing an extension method in your code).\r\n\r\nI was comparing the way Rust does it with, for example, Haskell, whose syntax for type classes is more verbose and not as elegant, in my opinion."
  replies: []
- id: 10843
  author: John
  date: '2021-11-10T22:36:58'
  content: "Great fun reading these two articles.\r\nHope you continue writing!\r\n\r\nThank you!"
  replies: []
- id: 10844
  author: pj
  date: '2021-11-11T02:17:32'
  content: 'For yet another take, have a look at zig (https://ziglang.org).  Hilights are: C-like, full C ABI compatibility, no C preprocessor (replaced by a ''comptime'' keyword to specify what gets done at comptime), and an attempt to minimize UB.  It''s "safe" in a different direction than Rust.  Stage 1 compiler also backed by LLVM (the self-hosted compiler is in the works currently, but an LLVM backend will be kept for speed) and what seems to be a pretty reasonable build system also available... in zig.'
  replies: []
---

This is a follow up to [my previous article](http://www.beust.com/weblog/2021/10/20/what-rust-could-learn-from-kotlin/), in which I explored a few aspects of Kotlin that Rust could learn from. This time, I am going to look at some features that I really enjoy in Rust and which I wish that Kotlin adopted.

Before we begin, I???d like to reiterate that my point is not to start a language war between the two languages, nor am I trying to turn one language into the other. I spent careful time analyzing which features I want to discuss and automatically excluded features that make perfect sense for one language and would be absurd in the other. For example, it would be silly to ask for garbage collection in Rust (since its main proposition is a very tight control on memory allocation) and reciprocally, it would make no sense for Kotlin to adopt a borrow checker, since the fact that Kotlin is garbage collected is one of its main appeals.

The features I covered in my first article and in this one are functionalities which I think could be adopted by either language without jeopardizing their main design philosophies, although since I don???t know the internals of either languages, I might be off on some of these, and I welcome feedback and corrections.

Let???s dig in.

## Macros

I have always had a love hate relationship with macros in languages, especially non hygienic ones. At the very least, macros should be fully integrated in the language, which requires two conditions:

  * The compiler needs to be aware of macros (unlike for example, the preprocessor in C and C++).
  * Macros need to have full access to a statically typed AST and be able to safely modify this AST.



Rust macros meet these two requirements and as a result, unlock a set of very interesting capabilities, which I???m pretty sure we???ve only started exploring.

For example, the `dbg!()` macro:
    
    
    let a = 2;
    let b = 3;
    dbg!(a + b);

Will print
    
    
    [src\main.rs:158] a + b = 5

Note: not just the source file and line number but the full expression that???s being displayed (???`a + b`???).

Another great example of the power of macros can be seen in the `[debug_plotter](https://crates.io/crates/debug_plotter)` crate, which allows you to plot variables:
    
    
    fn main() {
        for a in 0..10 {
            let b = (a as f32 / 2.0).sin() * 10.0;
            let c = 5 - (a as i32);
    
            debug_plotter::plot!(a, b, c; caption = "My Plot");
        }
    }

![](https://github.com/fabianboesiger/debug-plotter/raw/HEAD/plots/My_Plot.png)

How beautiful and geeky is that?

Kotlin is not completely unarmed in this department since the mix of annotations and annotation processors provide a set of functionality that is not very far from what you can do in Rust with macros and attributes. The main difference is that while Kotlin???s approach only allows for legal Kotlin code to ever be present in a Kotlin source file, Rust allows for any arbitrary syntax to appear as a macro argument, and it???s up to the macro to generate correct Rust that the compiler will accept.

I have to admit that my mind is not fully made on this particular aspect.

On one hand, it???s nice to be able to write any kind of code in a Rust source file (this is what React does with JSX), on the other hand, the potential for abuse is high and one can rightfully fear a day when a Rust source file would look nothing like Rust code. However, so far, my fear has never materialized and most macros that I have encountered use custom syntaxes very parsimoniously.

Another very important aspect of macros is that Rust IDE???s understand them (well, at least, CLion does, and potentially, all IDE???s can, and will) and they will immediately show you errors when something is going wrong.

Macros are used in a very large array of scenarios and provide Rust with some really neat DSL capabilities (e.g. for libraries supporting SQL, Web, graphics, etc???).

Also, macros integrate very neatly with???

## Attributes for preprocessing

Attributes are Rust???s version of annotations and they start either with `#` or `#!`:
    
    
    #![crate_type = "lib"]
    
    #[test]
    fn test_foo() {}

Nothing groundbreaking here, but what I want to discuss is the [conditional compilation](https://doc.rust-lang.org/reference/conditional-compilation.html) aspect.

Conditional compilation is achieved in Rust by combining attributes and macros with `cfg`, which is available as both an attribute and a macro.

The macro version allows you to compile conditionally a statement or an expression:
    
    
    #[cfg(target_os = "macos")]
    fn macos_only() {}

In the code above, the function `macos_only()` will only be compiled if the operating system is macOS.

The macro version of `cfg()` allows you to add more logic to the condition:
    
    
    let machine_kind = if cfg!(unix) {
        "unix"
    } else { ??? }

At the risk of repeating myself: the above code is a macro, which means it's evaluated at compile time. Any part of the condition that is not meant will be completely ignored by the compiler.

You might rightfully wonder if such a feature is necessary in Kotlin, and I asked myself the same question.

Rust compiles to native executables, on multiple operating systems, which makes this kind of conditional compilation pretty much a requirement if you want to publish artifacts on multiple targets. Kotlin doesn???t have this problem since it produces OS neutral executables that are run on the JVM.

Even though Java and Kotlin developers have learned to do without a preprocessor since the C preprocessor left such a bad impression on pretty much everyone who has used it, there have been situations in my career where being able to have conditional compilation that includes or excludes source files, or even just statements, expressions, or functions, would have come in handy.

Regardless of where you stand in this debate, I have to say I really enjoy how two very different features in the Rust ecosystem, macros and attributes, are able to work together to produce such a useful and versatile feature.

## Extension traits

Extension traits allow you to make a structure conform to a trait ???after the fact???, even if you don???t own either of these. This last point bears repeating: it doesn???t matter if the structure or the trait belong to libraries that you didn???t write. You will still be able to make that structure conform to that trait.

For example, if we want to implement a `last_digit()` function on the type `u8`:
    
    
    trait LastDigit {
        fn last_digit(&self) -> u8;
    }
    
    impl LastDigit for u8 {
        fn last_digit(&self) -> u8 {
            self % 10
        }
    }
    
    fn main() {
        println!("Last digit for 123: {}", 123.last_digit());
        // prints ???3???
    }

I might be biased about this feature because unless I am mistaken, I was the first person to suggest a similar functionality for Kotlin back in 2016 ([link to the discussion](https://discuss.kotlinlang.org/t/extension-types-for-kotlin/1390)).

First of all, I find the Rust syntax elegant and minimalistic (even better than Haskell???s and arguably, better than the one I proposed for Kotlin). Second, being able to extend traits this way unlocks a lot of extensibility and power in how you can model problems, but I???m not going to dive too deep into this topic since it would take too long (look up ???type classes??? to get a sense of what you can achieve).

This approach also allows Rust to mimic Kotlin???s extension functions while providing a more general mechanism to extend not just functions but types as well, at the expense of a slightly more verbose syntax.

In a nutshell, you have the following matrix: 

| **Kotlin**| **Rust**  
---|---|---  
Extension function| `fun Type.function() {...}`| Extension trait  
Extension trait| N/A| Extension trait  
  
## cargo

This probably comes off as a surprise since with Gradle, Kotlin has a very strong build and package manager. The two tools certainly have the same functional surface area, allowing to build complex projects while also managing library downloading and dependency resolution.

The reason why I think `cargo` is a superior alternative to Gradle is because of its clean separation between the declarative syntax and its imperative side. In a nutshell, standard, common build directives are specified in the declarative `cargo.toml` file while ad hoc, more programmatic build steps are written directly in Rust in a file called `build.rs`, using Rust code calling into a fairly lightweight build API.

In contrast, Gradle is a mess. First because it started being specified in Groovy and it now supports Kotlin as the build language (and this transition is still ongoing, years after it started), but also because the documentation of both of those is still incredibly bad

By ???bad???, I don???t mean ???lacking???: there is a lot of documentation, it???s just??? bad, overwhelming, most of it outdated, or deprecated, etc???, requiring hundreds of lines of copy/paste from StackOverflow as soon as you need something out of the beaten path. The plug-in system is very loosely defined and basically lets all plug-ins access whatever they feel like inside Gradle's internal structures.

Obviously, I am pretty opinionated on this topic since I created a build tool inspired by Gradle but using more modern approaches to syntax and plug-in resolution ([it???s called Kobalt](https://beust.com/kobalt/home/index.html)), but independently of this, I think `cargo` manages to strike a very fine balance between a flexible build+dependency manager tool that covers all the default configuration adequately without being overwhelmingly complex as soon as your project grows.

## u8, u16, ???

In Rust, number types are pretty straightforward: `u8` is an 8 bit unsigned integer, `i16` is a 16 bit signed integer, `f32` is a 32 bit float, etc???

This is such a breath of fresh air to me. Until I started using these types, I had never completely identified how uncomfortable I had always been with the way C, C++, Java, etc??? define these types. Whenever I needed a number, I would use `int` or `Long` as default. In C, I sometimes went as far as `long long` without really understanding the implications.

Rust forces me to pay very close attention to all these types and then, the compiler will relentlessly keep me honest whenever I try to perform casts that can lead to bugs. I really think that all modern languages should follow this convention. 

## Compiler error messages

Not to say that Kotlin???s error messages are bad, but Rust certainly set a new standard here, in multiple dimensions.

![](https://pbs.twimg.com/media/DT6W2IZW4AAyofx.jpg)

In a nutshell, here is what you can expect from the Rust compiler:

  * ASCII graphics with arrows, colors, clear delineations of problematic sections.
  * Plain English and detailed error messages.
  * Suggestions on how you could fix the problem.
  * Links to relevant documentation where you can find out more about the problem.



I certainly hope that future languages will take inspiration. 

## Portability

About twenty-five years ago, when Java came out, the JVM made a promise: ???Write once, run anywhere??? (???WORA???).

While this promise stood on shaky grounds in the early years, there is no denying that WORA is a reality today, and has been for a couple of decades. Not only can JVM code be written once and run everywhere, such code can also be written anywhere, which represents an important productivity boost for developers. You can write your code on any of Windows, macOS, Linux, and deploy on any of Windows, macOS, and Linux.

Surprisingly, Rust is also capable of such versatility, even though it produces native executables. Regardless of the operating system you are writing your code on, producing executables for a multitude is trivial, with the added benefit that these executables are native and, thanks to the incredible technical achievement that the LLVM is, very performant too.

Before Rust, I had resigned myself to the fact that if I wanted to run on multiple operating systems, I had to pay the price of running on a virtual machine, but Rust is now showing that you can have your cake and eat it too.

Kotlin (and the JVM in general) is beginning to learn this lesson too, with initiatives such as GraalVM, but producing executables for JVM code is still fraught with restrictions and limitations. 

## Wrapping up

I have a lot more to say about all of this.

And by "all of this", I mean "Rust and Kotlin".

They are both such interesting languages. I like them both, but for different reasons. I hope I was able to convey some of my fondness in these two posts. Even though these articles might appear critical, they are really love letters. I am a very demanding developer, someone who's been writing code for forty years and who plans to keep doing so for as long as his mental abilities allow him. I feel unreasonably passionate about programming languages, and I hope that my passion shone through these two articles.

[TestNG ](https://testng.org)is a project I started around 2004 with the only intent to mix things up. I wanted to show the Java world that we could do better than JUnit. I had no intentions for anyone to like and adopt TestNG: it was a project lab. An experiment. All I wanted to do was to show that we could do better. I was genuinely hoping that the JUnit team (or whatever was left of it) would take a look at TestNG and think "Wow, never thought of that! We can incorporate these ideas in JUnit and make it even better!".

This is my goal with these couple of posts. I would be ecstatic if these two very, very different worlds (the Rust and Kotlin communities) would pause for a second from their breakneck development pace, take a quick look at each other, even though they really had no interest in doing so, and realize "well... that's interesting... I wonder if we could do this?".

_Discussions on reddit:_

  * _[/r/rust](https://www.reddit.com/r/rust/comments/qqljbe/what_kotlin_could_learn_from_rust/)_
  * [ _/r/Kotlin_](https://www.reddit.com/r/Kotlin/comments/qqljuc/what_kotlin_could_learn_from_rust/)
