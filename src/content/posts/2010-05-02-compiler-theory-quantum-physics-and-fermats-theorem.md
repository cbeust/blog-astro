---
title: Compiler theory, quantum physics and Fermat's theorem
date: '2010-05-02T15:42:34'
slug: compiler-theory-quantum-physics-and-fermats-theorem
categories:
- General
comments:
- id: 8161
  author: 'Links #4 &laquo; Otaku, Cedric&#039;s weblog'
  date: '2010-05-03T00:20:18'
  content: '[...] About                   &laquo; Compiler theory, quantum physics and Fermat&#8217;s theorem [...]'
  replies: []
- id: 8162
  author: 'Links #4 &laquo; Otaku, Cedric&#039;s weblog'
  date: '2010-05-04T00:20:14'
  content: '[...] Compiler theory, quantum physics and Fermat&#8217;s theoremYup, all of the above in one, convenient place. [...]'
  replies: []
---

It's not very often I come across a post that talks about math and programming that is both clever and fun to read. Well, [here is one](http://blog.regehr.org/archives/140), which attempts to use a compiler optimizer to disprove Fermat's theorem. 

I know, awesome, right? 

Go ahead and read the post, which explains both the initial endeavor of the author and also why it could not possibly work. There is also a [whole discussion on reddit](http://www.reddit.com/r/programming/comments/byilp/c_compilers_disprove_fermats_last_theorem/), if you really want to dig in. 

I just wanted to add one more comment to this discussion because I don't think I've seen this mentioned so far. 

My observation is that this whole experiment ties into two additional concepts: 

  * The idea of "observable behavior" in compilers. A lot of languages are very serious about specifying this concept very precisely in their specification because it enables compilers to generate even more optimized code. In a nutshell, the idea is that no matter how complicated your code is, if you don't try to show its result at the end, the compiler will not generate code for it. It sounds obvious in theory but it's actually very tricky to 1) specify and 2) implement. 

  * Another connection that immediately struck me is related to quantum physics and wave collapsing. The idea is very similar to the one above: in short, an atom is known to be in several states simultaneously as long as you don't observe it. As soon as you do, the atom "chooses" one state and that's how it will appear to you. This is the concept that lies behind the paradox of Schroedinger's cat, which is known to be both dead and alive as long as you don't try to figure out which one it is. 
There are so many commonnalities between these seemingly unrelated topics that one can't help but wonder if there is not a bigger, broader truth that covers them all. 

Either that or I shouldn't have been drinking that second mimosa.
