---
title: What Rust could learn from Kotlin
date: '2021-10-20T21:33:26'
slug: what-rust-could-learn-from-kotlin
categories:
- Uncategorized
tags:
- Rust
- Kotlin
- Java
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/rust-kotlin.png)

_[Update:[Part Two ](https://www.beust.com/weblog/2021/11/09/what-kotlin-could-learn-from-rust/)is up]_

When I started studying Rust, I didn't expect to like it.

Ever since I heard about it, many years ago, I've always had a tremendous amount of respect for the design philosophy and the goal that Rust was trying to achieve, all the while thinking this is not the language for me. When I switched from ten years of gruesome C++ to Java back in 1996, I realized that I was no longer interested in low level languages, especially languages that force me to care about memory. My brain is wired a certain way, and that way makes low level considerations, especially memory management, the kind of problem that I derive little pleasure working on.

Ironically, despite my heavy focus on high level languages, I still maintain a healthy fascination for very low level problems, such as emulators (I wrote three so far: [CHIP-8](https://github.com/cbeust/chip-8), [8080 Space Invaders](https://github.com/cbeust/space-invade.rs), and [Apple ][](https://github.com/cbeust/sixty), all of which required me to become completely fluent in various assembly languages), but for some reason, languages that force me to care about memory management have always left me in a state of absolute dismissal. I just don't want to deal with memory, ok?

But... I felt bad about it. Not just because the little Rust I knew piqued my curiosity, but also because I thought it would be a learning exercise to embrace its design goal and face memory management heads on. So I eventually decided to learn Rust, more out of curiosity and to expand my horizons than to actually use it. And what I found surprised me.

I ended up liking writing code in it quite a bit. For a so-called "system language", its design was a breath of fresh air and proof that its creators had not only a vision but also a healthy knowledge of programming language theory, which was refreshing after seeing some... other languages that have appeared in the past fifteen years. I will resist giving names, but I'm sure you know what I'm talking about.

This article is not intended to start a language war. I love both Kotlin and Rust. They are both great languages, both with some flaws, and I am extremely happy to be able to claim a decent understanding of both of them, and to feel equally comfortable to start new projects in either, whichever is the best language for the job.

But these languages have followed different paths and ended up making different compromises, which makes their simultaneous study and comparison extremely interesting to me.

It took me a while to select which features I wanted to include in this list but eventually, I narrowed my selection criterion to a very simple one: it has to be a feature that will not get in the way of Rust's main value propositions (close to optimal memory management, zero cost abstractions). That's it.

I think all the features that I describe in this article are of the cosmetic, but crucial, variety. They will enhance the readability and writability of the language without compromising Rust's relentless pursuit of zero cost memory management. However, since I'm obviously not familiar with the internals of the Rust compiler, some of these might indeed compromise Rust's laser focus on optimal memory management, in which case I'd love to be corrected.

Enough preamble, let's dig in. To give you an idea of what lies ahead, here are the Kotlin features that I'll be discussing below:

  * Short constructor syntax
  * Overloading
  * Default parameters
  * Named parameters
  * Enums
  * Properties



## Constructors and default parameters

Let's say we want to create a Window with coordinates and a `boolean `visibility attribute, which defaults to `false`. Here is what it looks like in Rust:

```rust
struct Window {  x: u16,
  y: u16,
  visible: bool,
}

impl Window {
  fn new_with_visibility(x: u16, y: u16, visible: bool) -> Self {
    Window {
      x, y, visible
    }
  }

  fn new(x: u16, y: u16) -> Self {
    Window::new_with_visibility(x, y, false)
  }
}
```

And now in Kotlin:

```kotlin
class Window(x: Int, y: Int, visible: Boolean = false)
```

That's a huge difference. Not just in line count, but in cognitive overload. There is a lot to parse in Rust before you conceptually understand what this class is and does, whereas reading one line in Kotlin immediately gives you this information.

Admittedly, this is a pathological case for Rust since this simple example contains all the convenient syntactic sugaring that it's lacking, namely:

  * A compact constructor syntax
  * Overloading
  * Default parameters



Even Java scores better than Rust here, since it supports at least overloading (but fails on the other two features).

Even to this day, I whine whenever I have to write all this boilerplate in Rust, because you write this kind of code all the time. After a while, it becomes a second nature to parse it, a bit like when you see getters and setters in Java, but it's still unnecessary cognitive overload, which Kotlin has solved elegantly.

The lack of overloading is the most baffling to me. First, this forces me to come up with unique names, but mostly because it's a compiler feature that's pretty trivial to implement in general, which is why most (all?) mainstream languages created these past twenty years support it. Why force the developer to come up with new names while the compiler can do it automatically, and by doing so, reduce the cognitive load on developers and make the code easier to read?

The common counter argument to overloading is about interoperability: once the compiler generates mangled function names, it can become tricky to call these functions from other processes or from other languages. But this objection is trivially resolved by allowing the developer to disable name mangling for specific cases (which is exactly what Kotlin does, and its interoperability with Java is outstanding). Since Rust already relies heavily on attributes, a #[no_mangle] attribute would fit right in (and guess what, [it's already been discussed](https://internals.rust-lang.org/t/no-no-mangle/3973)).

## Named Parameters

This is a feature that I consider more "nice to have" than really essential, but optionally named parameters can contribute to reducing a lot of boilerplate as well. They are especially effective at reducing the need for builder patterns, since you can now limit the use of this design pattern to parameter validation, instead of needing it as soon as you need to build complex structures.

Here again, Kotlin hits a sweet spot by allowing to name parameters but not requiring you to use these names all the time (a mistake that both Smalltalk and Objective C made). Therefore, you get the best of both worlds: most of the time, invoking a function is intuitive enough without naming the parameters, but now and then, they come in very handy to disambiguate complex signatures.

For example, imagine we add a boolean to the Window structure above to denote whether our window is black and white: 

```diff
class Window(x: Int, y: Int, visible: Boolean = false, blackAndWhite: Boolean = false)  
---  
```

Without named parameters, calls to the constructor can be ambiguous to a reader:

```kotlin
val w = Window(0, 0, false, true) // mmmh, which boolean means what?
```

Kotlin lets you mix unnamed and named parameters to disambiguate the call:

```kotlin
val w = Window(0, 0, visible = false, blackAndWhite = true)
```

Note that in this code, `x` and `y` are not explicitly named (because their meaning is implied to be obvious), but the boolean parameters are.

As an added bonus, named parameters can be used in any order, which reduces the cognitive load on the developer since you no longer need to remember in which order these parameters are defined. Note also that this feature combines harmoniously with default parameters:

```kotlin
// skip 'visible', use its default value
val w = Window(0, 0, blackAndWhite = true)
```

In the absence of this feature, you will have to define an additional constructor in your Rust structure, one for each combination of parameters that you want to support. If you are keeping count, you now need four constructors:

  * x, y
  * x, y, visible
  * x, y, black_and_white
  * x, y, visible, black_and_white



You can see how this quickly leads to a combinatorial explosion of functions for something which should realistically only take one line of code, as Kotlin demonstrates.

## Enums

For all the (mostly justified) criticism that Java receives because of its design, there are a few features that it supports that are arguably best in class, and in my opinion, Java enums (and by extension, Kotlin's as well) are the best designed enums that I have ever used.

And the reason is simple: Java/Kotlin enums are very close to being regular classes, with all the advantages that these classes bring, with Kotlin's enums being a superset of Java's, so even more powerful and flexible.

Rust's enums are almost as good, but they omit one critical component that makes them not as practical as Java's: they don't support values in their constructor.

I'll give a quick example. One of my recent projects was to write an Apple][ emulator, which includes a 6502 processor emulator. Processor emulation is a pretty easy problem to solve: you define opcodes with their hexadecimal value, string representation, and size, and you implement a giant switch to match the bytes that you read from the file against these opcodes.

In Kotlin, you could define these opcodes as enums as follows:

```kotlin
enum class Opcode(val opcode: Int, val opName: String, val size: Int) {
  BRK(0x00, "BRK", 1),
  JSR(0x20, "JSR", 3)
  //...
}
```

While Rust's enums are pretty powerful overall (especially when coupled with Rust's destructuring match syntax), they only allow you to define signatures for each of your enum instances (which Kotlin supports too) but you can't define parameters at your enum level, so the code above is just impossible to replicate in a Rust enum.

My solution to this specific problem was to first define all the opcodes as constants and put them in a vector as tuples:

```kotlin
pub const BRK: u8 = 0x00;
pub const JSR: u8 = 0x20;
// ...

// opcode hex, opcode name, instruction size
let ops: Vec<(u8, &str, usize)> = vec![
  (BRK, "BRK", 1),
  (JSR, "JSR", 3),
  // ...
];
| | | | | | | | 
```

And then enumerate this vector to create instances of an Opcode structure, and put these in a HashMap, indexed by their opcode value:

```rust
struct Opcode {
  opcode: u8,
  name: &'static str,
  size: usize,
}

let mut result: HashMap<u8, Opcode> = HashMap::new();
for op in ops {
  result.insert(op.0, Opcode::new(op.0, op.1, op.2));
}
```

I'm sure there are various ways to reach the same result, but they all end up with a significant amount of boilerplate, and since it's not really possible to use Rust's enums here, we lose the benefits that they have to offer. Allowing Rust enums to be instantiated with constant values would significantly decrease the amount of boilerplate and make it a lot more readable as a result.

## Properties

This was another unpleasant step back, and I still find it routinely painful in Rust to have to write getters and setters for all the fields that I want to expose from a structure. We learned this lesson the hard way with Java, and even today in 2021, getters and setters are still alive and well in this language. Thankfully, Kotlin does it right (it's not the only one, C#, Scala, Groovy, ... get it right too). We know that having properties and universal access is of great value, it's disappointing that we don't have this feature in Rust. As a consequence, whenever you release code that is going to be used by third parties, you need to be very careful if you make a field public, because once clients start referencing that field directly (read or write), you no longer have the luxury of ever putting it behind a getter or a setter, or you will break your callers. And as a result, you are probably going to err on the side of caution and manually write getters and setters. We know better today, and I hope Rust will adopt properties at some point in the future.

## Conclusion

So this is my list. None of these missing features have been an obstacle to Rust's meteoritic rise, so they are obviously not critical, but I think they would contribute to making Rust a lot more comfortable and more pleasant to use than it is today.It should come as no surprise that Kotlin could also learn a few things from Rust, so I'm planning on following up with a reverse post which will analyze some features from Rust that I wish Kotlin had. _Special thanks to  Adam Gordon Bell for reviewing this post._ _Update:_ _Discussions on reddit:_

  * _[/r/rust](https://www.reddit.com/r/rust/comments/q2oe5c/what_rust_could_learn_from_kotlin/?)_
  *  _[/r/programming](https://www.reddit.com/r/programming/comments/q29bjv/what_rust_could_learn_from_kotlin/?)_
