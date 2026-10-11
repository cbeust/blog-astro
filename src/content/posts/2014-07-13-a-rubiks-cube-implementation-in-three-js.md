---
title: A Rubik's cube implementation in Three.js
date: '2014-07-13T19:25:08'
slug: a-rubiks-cube-implementation-in-three-js
categories:
- General
---

[ ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/rubik.png) ](http://beust.com/weblog/rubik)

In 2003, I took the time to put together a page that explains how to solve the Rubik's cube with a set of formulas that are easy to memorize. The idea was not necessarily to solve the cube quickly (it takes about 50-60 seconds to solve the cube with this approach) but to make it easy for anyone to beat the cube with little effort, as opposed to the hundreds of formulas that speed cubists have to memorize to remain competitive. 

Back then, I used a Java applet that represents a cube with formulas and then playing these formulas to explain to the reader how exactly they work. As everybody knows, Java applets have fallen out of favor even more today than they already were ten years ago, so I've been wanting to update my page with more modern technologies for a while, especially if these technologies don't show a scary warning to everyone who reaches my web site. 

I finally took the time to update my page and I reimplemented the entire cube animation in Javascript with Three.js. [Here is how it looks like today](http://beust.com/weblog/rubik). 

While it's easy to find rapidly implemented Rubik's cubes in [Three.js](http://threejs.org/), I couldn't find anything that came remotely close to what I needed, namely, being able to configure a cube directly from the HTML page along with the formula, and playing this formula at the click of a button. Three.js turned out to be a great match for this, with the perfect amount of abstraction and power. And with Three.js came a few free bonus tools, such as being able to move the cube around and also effortlessly zooming in and out. Of course, it's equally trivial to modify the size of the cube, the position of the camera, the field of view, and just as easy to add more fancy stuff such as lighting, shadows and fancy materials. 

The implementation is open source but I want to write some proper documentation before publishing it. 

Overall, the experience was fairly pleasant. My relationship with Javascript is stormy at times (I'm planning to rewrite this in Dart at some point to compare) but in the end, using both IDEA and Eclipse to write the code (switching between both to compare) and with the Chrome debugger in a separate window, the productivity level is pretty high. 

Implementing the cube itself was the most interesting part: there are so many ways you can model a Rubik's cube that such a problem is a software designer's dream. I must have had three different iterations of the data model before I settled on the version you see now (and I'm already thinking of ways I could improve it). 

Three.js has come a long way since I gave it a try two years ago. The web is still filled with incorrect information referencing an old API that has since then changed, but it's very intuitive and, most importantly, it allowed me to completely avoid having to deal with the WebGL madness. I don't know if it's my brain that's just not wired for this, but I have tried to read countless OpenGL tutorials over the past years and every time, I give up after an hour, my eyes glazing over the intricate, effect-littered, abstraction empty details of OpenGL. The API is probably too low level for someone like me with just a passing interest for gory graphical details. 

My knowledge of computer graphics and animation is abysmal overall, so this was a great opportunity to move myself out of my comfort zone and force myself to confront problems that I usually never encounter, such as finding tricks to counter floating point rounding errors and revising matrix multiplications and other miscellaneous linear algebra and 3D geometry concepts such as [quaternions](http://en.wikipedia.org/wiki/Quaternion) and [gimbal locks](http://en.wikipedia.org/wiki/Gimbal_lock).
