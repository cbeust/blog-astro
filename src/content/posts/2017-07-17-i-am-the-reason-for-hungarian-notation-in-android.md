---
title: I am the reason for Hungarian notation in Android
date: '2017-07-17T08:52:05'
slug: i-am-the-reason-for-hungarian-notation-in-android
categories:
- Android
---

I am the reason for Hungarian notation in Android

You know, this: 
    
    
    private String mName;

That's because of me.

There, I said it. It's my fault.

This topic comes up on a regular basis and more recently, [this reddit discussion](https://www.reddit.com/r/androiddev/comments/6nq9xl/do_people_actually_use_this_naming_convention/) reminded me that I had never really explained how this notation came about and also, how much misunderstood Hungarian Notation is. So I'd like to take this opportunity to clarify a few things, and I'll do this in two parts:  
1\. How the `m` notation came about.  
2\. Why you probably don't understand what Hungarian Notation is.

## The m convention

I was one of the early engineers working on Android and within a few months of the project, I was tasked to come up with a coding convention style guide for Android API's (ourselves, the Android team) and user code. We still had very few Java developers on the team at the time, so addressing this problem while the amount of Java code in Android was still reasonably small was a top priority.

When it comes to identifying fields, I come with a bit of a bias myself. At the time, I had written a decent amount of Java, Windows and C++ code and I had found that using a specific syntax for fields was very useful. Microsoft uses `m_` to that effect, while it's common to use a leading underscore (e.g. `_name`) in C++. Ever since I started writing Java code, I had always been bothered by the fact that Java did away with this convention.

But my task was to write a Java style guide and one of our goals with Android since day one was to create a development platform where Java developers would feel extremely comfortable.

So I put my bias aside. I took some time reviewing both Sun's and Google's own internal Java coding style guides and I came up with our own Android style guide, which was pretty much 99% what these two style guides proposed but with a few very tiny changes.

One of the difference I remember clearly was regarding braces. While both style guides require to use braces for everything, I introduced an exception when the continuing statement can fit on the same line. The idea behind this exception was to accomodate for the prevalent logging idiom in Android:
    
    
    if (Log.DEBUG) Log.d(tag, "Logging");

Without this exception, log statements would take up a lot of vertical screen space, something we all agreed was not desirable.

So that was the first version of our style guide, and that guide did not contain any requirement to prefix fields with anything.

I sent the guide to the team and, to my surprise, everybody pushed back very hard on it, precisely because it didn't mandate any syntax for fields. Everybody felt that fields needed to be differentiated and they wouldn't accept a style guide that didn't have such a prescription.

So I went back to the drawing board and researched various ways to make this happen.

I considered `_name` and also `m_name`, as mentioned above, but rejected them because the underscore was too much of a detraction from Java's standard. I came across a few other, more exotic notations (such as using the "iv" prefix, for "instance variable") but ultimately, I rejected them all. No matter what I came across, the "m" prefix stuck with me as the most sensible and the least verbose.

So what was the obvious solution? Keep the "m", remove the underscore and use camel case. And thereby, `mName` was born.

This proposal was accepted by the team and we then made this notation official.

## You probably don't understand Hungarian Notation

Whenever a discussion comes up about Hungarian Notation (HN), I notice that most people seem to think that whenever you add some metadata to an identifier, then it's automatically HN. But this is ignoring the core concept behind HN and the very deliberate design that Simonyi put into it when he came up with this notation.

First of all, there are a lot of different kinds of metadata that you can add to identifier names, and they all belong to a different category. Here are the categories I have identified so far (there might be more):

  * Type information.
  * Scope information.
  * Semantic information.



Let's review these in turn.

### Type information

This is probably the most widespread use of identifier metadata: naming the identifier so that its type can be inferred. This is used everywhere in Win32/64 code, where you see names such as `lpsz_name` used to mean "Long Pointer to String with a Zero terminator". While this notation seems to be extremely verbose and reader hostile, it actually quickly becomes second nature for Windows programmers to parse it, and the added information is actually very useful to debug the many obscure bugs that can happen in the bowels of the Windows system, mostly due to the very heavily dynamic nature of a lot of its API and the heavy reliance on C and C++.

### Scope information

This is what's used in Android: using the metadata to indicate what kind of variable you are dealing with: field, local or function parameter. It was quickly apparent to me that fields were really the most important aspect of a variable, so I decided that we wouldn't need further conventions to discriminate local variables from function parameters. Again: note that this metadata has nothing to do with the type of the variable.

### Semantic information

This is actually the least used metadata information and yet, arguably the most useful. This kind of discrimination can apply to variables of identical or similar types, or identical or similar scopes, but of different semantics.

This convention can be used when you need to differentiate variables of similar types but of different purposes. Most of the time, a sensible name will get you there, but sometimes, metadata is the only way out of this. For example, if you are designing a GUI that lets the user enter a name, you might have several variations of widgets called `"name"`: an edit text called (`"textName"`), a text view (`"tvName"`), buttons to validate or cancel (`"okName"`, `"cancelName"`), etc...

In such examples, it's important to make it clear that these identifiers all relate to the same operation (editing a name) while differentiating their function (the metadata).

Hopefully, you should have a more nuanced view of Hungarian Notation now, and I strongly recommend to read Joel Spolsky's ["Making wrong code look wrong"](https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/) article on this topic, which should help drive all these points home.

## So, what do you really think about Hungarian Notation?

First of all, I think we need to stop using the umbrella name "Hungarian notation" because it's too vague. When asked this question, I usually ask the person to clarify which of the three options listed above they are talking about (and most of the time, they're not even sure and they need to think about it).

I'll just use the term "identifier metadata" to describe the general idea behind adding information to a simple identifier name. And overall, I think this approach can have merits on a case per case basis. I don't think it should be the default, but it's definitely useful, especially in the GUI example that I described above. I find this kind of occurrence on a regular basis and not using identifier metadata for this kind of code leads to code that's harder to read (both for the author and future readers) and to maintain.

I also don't accept the argument that "Today, our IDE's can distinguish all these identifiers with colors so we don't need any of this any more". This argument is flawed for two reasons:

  * Code is often read outside of IDE's (starting, ironically, with the screen shot of the reddit discussion, whic has no highlighting). I read code in browsers, window terminals, diff tools, git tools, etc... Most of them don't have the capacity for the kind of highlighting that would make parsing the code easier, so a light touch of identifier metadata can help a lot there.
  * IDE highlighting will still not help you make sense of ambiguous cases such as the GUI example described above. There are still cases where you, the developer, know more about your code than the IDE can ever know, and adding identifier metadata is then the only sensible choice you can make.



Don't listen to people who tell you identifier metadata should never be used, or that it should always be used. This kind of naming is just a tool in your developer toolbox and common sense should make it relatively easy for you to determine when it's the right time to add some metadata to your identifiers.

Finally, I often see very extreme reactions on this issue, and code conventions in general. Over the 30+ years that I've been writing code, I have noticed that it only takes a few days of working on code following a certain convention to completely accept it and stop noticing it altogether. There were times where I couldn't tolerate code that is not indented with two spaces, then a few months later of working on a project with four space indentations, I felt the opposite. Same goes with naming conventions. You will get used to anything as long as the conventions are being followed consistently across the code base you are working on.
