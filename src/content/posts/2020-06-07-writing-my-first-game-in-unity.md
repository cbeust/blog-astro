---
title: Writing my first game in Unity
date: '2020-06-07T18:30:07'
slug: writing-my-first-game-in-unity
categories:
- Uncategorized
---

#### _??? and how I eagerly embraced my repressed hunger for writing ugly code_

I have been wanting to write a game for a very long time, probably forty years or so. I even dabbled into it when I was a teenager and took my first steps in BASIC and 6502 on my Apple ][, but I never went really far. This prolonged shelter in place that we are currently going through was the perfect opportunity for me to make the resolution to write a game in Unity and see how far I can go. The result can be found [here](https://github.com/cbeust/dodger) and it looks like this: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/dodger-1.png)

It???s been a very interesting experience and I learned tons of things. 

## C#

I could have written this game in a few hundreds of lines in any language really (I would probably have picked Typescript), but where is the fun in that? The point is to learn about game development, and these days, there are really only two players in that Arena: Unity and Unreal Engine. I ultimately ended up going with Unity because Unreal Engine???s support for C# appears to be more recent and also because Unity seems to be the standard in the industry. Having said that, a large amount of the games I???ve played these past few years have been created with Unreal Engine, so there is no doubt that both of them are extremely powerful game engines. I have been keeping track of C# loosely since its inception, almost twenty years ago. It???s always been an appealing language to me and the only reason I only ever wrote toy programs in it is that both my work and personal interests have never been completely focused on the Windows ecosystem. Overall, it was very easy to dive into the language and .net is replete with expressive standard libraries that make everything easy. Having said that, C# feels a little bit antiquated after almost ten years of Kotlin. Nothing wrong with that, Kotlin benefited a lot from the hindsight of C# and other languages, but once in a while, the constructor syntax or the limitations of C#??? enum construct got mildly annoying. Nowhere near a deal breaker, though, but I thought it was interesting how two languages that are ten years apart are a testimony of where the state of the art in programming language theory has been moving. Also, C# evolves very quickly and the latest announced version, 9, will be including some of the niceties that I???ve become spoiled with in Kotlin. Visual Studio is a very competent IDE and I suspect that the few occasional friction points I have encountered have more to do with the long time habits I have developed with IDEA than shortcomings of Visual Studio itself. The integration between Unity and Visual Studio has been working seamlessly for me: I have both tools open all the time and I can easily break into my code whenever I feel like it and inspect everything. There are still a few areas that I haven???t quite managed to make work (such as being able to enter manual expressions of C# in the context of my break point), but this is more due to my lack of familiarity with Visual Studio than anything else. 

## Game writing

Writing a game has always been intimidating to me because I???ve always felt that my brain is not wired for it. I have a default habit of not thinking too much about performance, or at least not until it really starts to matter, and to follow well documented and established design patterns in software engineering. These two focuses are a bit at odds with game development since performance is always a huge factor in game writing, and this strong focus often impacts the code and forces the developer to break good practices in order to reach the necessary speed. Obviously, performance is not really a factor for the toy game I set out to write for this exercise, and I have to say that I felt it quite liberating to not have to overthink the architecture of my code either. I have felt little shame in exposing fields publicly and tightly coupling classes and objects in ways they really don???t need to be. But I felt okay with this because I decided that finishing the game was priority #1, and everything else is secondary. Another lesson that became quite clear to me is that a game is never finished. As someone who???s been playing games for about forty years, this is not exactly a revelation, but looking at this from the author of the game???s perspective instead of the player, I was quite surprised to realize that as soon as I reached what I had arbitrarily decided what version 1.0 was going to be, I already had a dozen items in my mind of how I could improve and expand this very simple game. 

### State machine

Games are operating on a different life cycle than regular applications. Well, not *too* different, since they run inside a container with life cycle functions, just like a web server, a mobile app, or an application server, but the emphasis is different. There is what is called the ???game loop???, which, depending on the engine you are using, might take various forms, but fundamentally, they all share the same characteristics: one function in your code is going to be called extremely often. This function is where you get a chance to update the state of your world: move animation one frame forward, calculate collisions, update the world, etc??? If you want the player to have a smooth experience, you want this function to be called at least sixty times a second, which means the code inside it needs to complete within 17ms. Entire books have been written on the topic of how to optimize your game loop, so I???m not going to get into this, but this is yet another fascinating new perspective for someone like myself who???s just used to write mobile apps or back end apps. The simple pattern I ended up converging toward was that any event happening in my game (e.g. a collision) makes a change in the world as fast as possible (e.g. transitioning to a state), but that change is actually processed in the update function. For this to work efficiently, you quickly reach the conclusion that your code is slowly going to turn into a giant state machine. My mind immediately started racing once that realization dawned on me, and I started imagining all kinds of ways in which I could rearchitect my code to accommodate both a state machine and being easy to maintain and refactor. 

## Unity

It???s always seemed counter intuitive to me to write a game while being so tightly entangled with an entire studio. The source of your game is literally the combination of C# source code and also entire panels and screens specified in Unity. This looked deeply unsettling to me until I realized that I already depend heavily on an IDE to write my open source and work projects (IDEA), it???s just that Unity is pushing this concept one step further. I used to write Windows COM code in the early days of that technology and for those of you who remember, the IDE was generating thousands of lines of boiler plate code in an attempt to hide the inherent complexity of developing a COM application in C or C++. I was concerned Unity was going to steer me down this path again, but that fear turned out to be unfounded. I have gotten accustomed to the idea of tying up my game tightly to Unity and trying to embrace it. And once you get over the business logic aspect of it, there is no denying that being able to manipulate scenes and objects with a real graphical editor is invaluable. 

### Dependency injection

Objects are organized in graphs in Unity, pretty much like any regular application, except that this graph is prominently and constantly displayed for you, which is very convenient. You are free to organize in any way you want, and that hierarchy can make sense from either a graphical or business logic standpoint. What was new to me is how objects can refer to each other. Unity???s solution to this is interesting. You can either look up objects dynamically (e.g. `GetComponentOfType()`), or statically. When that connection is statically, you simply declare a public property in your script: 

```java
public GameObject TopWall;
```

When you return to the Unity window, your new code is automatically compiled and a new field has appeared in your UI, under that script: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/dodger-2.png)

That new field is empty, so all you need to do now is select that object from the graph and drag and drop it into that slot. Pretty effective way to bind your objects together. 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/dodger-3.png)

You can also select that object from a list of the objects you have created. 

### The old way and the new way

The standard way to build games in Unity is making heavy use of inheritance and polymorphism. All your objects inherit a standard base class `MonoBehaviour` and you will typically override methods such as `Start()` or `Update()`. This allows you to get up to speed very quickly. These past years, a different pattern has emerged in game programming called the [Entity Component System](???https://en.wikipedia.org/wiki/Entity_component_system???). In this model, you replace inheritance with composition and decouple the data from its behavior. I???m not going to go too deep into this since there is a voluminous amount of documentation available, but in a nutshell, in this model, decoupling the data from the behavior of your objects produces entities that have the ability to visit a subset of your game objects by defining a filter and then apply behavior to them. This approach allows the system to heavily parallelize your game updates, including on your GPU, which allows you to create and animate tens of thousands of objects with little effort. Unity supports ECS but there is some legacy baggage that makes this approach a bit awkward from what I???ve seen. 

### Friction points

Needless to say I encountered quite a few hurdles on my beginner journey. I am pretty sure these are all my fault and not Unity???s, but here are a few: 

  * The web is filled with Unity tutorials and most of them are outdated. They show older UI???s or make recommendations that are no longer the correct way to develop games.
  * The 2D kit that I tried to use, and which allows you to add bone and skin animations to sprites, was pretty buggy to me, with weird behaviors and undocumented steps that I had to puzzle out by myself. Considering how central 2D physics are to Unity, I was quite a bit surprised by how fragile that whole system appears to be.



### Size

I was very curious to find out how big my game would end up being once built for the web. The amount of packages and assets that are included by default in my project was quite daunting, so I was wondering if I wasn???t going to end up with some copy of the entire .net runtime on my website. 

```bash
~/dodger$ ls -l Build
total 8016
-rw-r--r-- 1 ubuntu ubuntu  159307 Jun  3 15:04 UnityLoader.js
-rw-r--r-- 1 ubuntu ubuntu 2168234 Jun  3 15:04 html.data.unityweb
-rw-r--r-- 1 ubuntu ubuntu     500 Jun  3 15:04 html.json
-rw-r--r-- 1 ubuntu ubuntu 5779835 Jun  3 15:04 html.wasm.code.unityweb
-rw-r--r-- 1 ubuntu ubuntu   87452 Jun  3 15:04 html.wasm.framework.unityweb
~/dodger$ du -sh .
8.0M    .
```

The entire WebGL application adds up to 8 MB. Not great. Not terrible. Probably a little on the heavy side from a purist standpoint, but considering all the support that I got from free, including the freedom of not having written a single line of Javascript, I feel pretty content with the trade off. 

## Take aways

This little project has opened my mind to a lot of possibilities, starting with the fact that I feel very comfortable writing games now. Not AAA 3D games, mind you, but whenever I see or play a game now, my mind immediately starts breaking it down in ways I???d design it in Unity, and suddenly, it all seems a lot less daunting. This experiment was also a good opportunity for me to learn some basic Photoshop skills, something I???ve always wanted to do but never got around to doing. If, like me, you???ve always been curious about game programming but you???ve never gathered the time or the courage to jump in, I can strongly recommend taking that step, especially since Unity turned out to be a lot less intimidating than I initially thought.
