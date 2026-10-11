---
title: A Chip-8 emulator written in Kotlin
date: '2020-08-22T20:15:25'
slug: a-chip-8-emulator-written-in-kotlin
categories:
- Uncategorized
---

![](https://github.com/cbeust/chip-8/blob/master/pics/space-invaders-2.gif?raw=true)

I've always wanted to write an emulator. First because I have a lot of interest in retrocomputing, and more particularly, in [cracking old school Apple ][ games](https://beust.com/weblog/weblog/2016/02/12/old-school-apple-cracking/), but mostly because an emulator has always seemed to me to be a great mix of technical challenge with a very rewarding feeling as you make progress. So I made it my week end project to write a Chip-8 emulator. 

Chip-8 is a very popular CPU to emulate and usually the first project people who are new to this exercise undertake, so it was an easy choice. [](http://www.cs.columbia.edu/~sedwards/classes/2016/4840-spring/designs/Chip8.pdf)The spec is short and except for a few tiny details, very clear on how to implement this CPU. It's graphical too, which is important from a reward standpoint. I was absolutely thrilled when I saw the beginning of the welcome screen of Space Invaders appear on my screen after I had implemented just a few opcodes. 

You can find the emulator [on Github](https://github.com/cbeust/chip-8) with all the technical details. 

I am very tempted to work on a harder emulator now, from a real console. I am fluent in 6502 so maybe SNES, or even an Apple ][...
