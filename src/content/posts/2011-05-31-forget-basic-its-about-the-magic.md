---
title: Forget BASIC, it's about the magic
date: '2011-05-31T10:57:55'
slug: forget-basic-its-about-the-magic
categories:
- General
comments:
- id: 8947
  author: Alan Green
  date: '2011-05-31T12:48:12'
  content: Aww. Memories.
  replies: []
- id: 8948
  author: toutizes
  date: '2011-05-31T18:05:19'
  content: 'Ha!  call -151!  I had forgotten that one.   Nice.

    I loved 6502 assembly, PLA, PHA!  Wrote a mini Lisp interpreter with it.  I should have kept a copy.'
  replies: []
- id: 8949
  author: Cedric
  date: '2011-05-31T18:20:39'
  content: 'PLA, PHA? That''s for 65C02 weenies.

    On the 6502, you could only push X and Y AND YOU LIKED IT.'
  replies: []
- id: 8950
  author: Russel Winder
  date: '2011-06-02T03:44:16'
  content: From what I can tell, the "magic", i.e. people being interested in things and taking them apart to find out how they work, and what you can do with them, is being removed from society at large, to be replaced by everyone being trained to be good consumers who purchase the product as offered to them and used exactly as they are told to use them.  The personal gadget space is an exemplar.
  replies: []
- id: 8951
  author: Jean-Baptiste BRIAUD
  date: '2011-06-06T04:10:14'
  content: 'Exactly the same happen to me, CALL, PEEK, POKE, ... and the passion.

    It was on ZX81 then Amstrad.

    Now I''m on a software innovation, 25-30 years after and nothing had changed :

    "It was the realization that despite all the apparent magic, everything was logical and no mystery could resist meticulous investigations and logical thinking. I still felt like a complete beginner but at that moment, I knew that given enough time and effort, I should be able to puzzle it all out"'
  replies: []
- id: 8952
  author: Rob Kedoin
  date: '2011-06-06T11:04:02'
  content: In some ways it seems like the Old Days were easier. We had very few choices to learn how to program. Now with my own kids, I have no idea what language/platform to use to get them interested in programming. Do you have any recommendations for first languages for this generation?
  replies: []
- id: 8953
  author: mjb
  date: '2011-06-09T20:05:19'
  content: 'Me too! Listing through the monitor and seeing things like

    LDA $8000                   A9 00 80

    And realizing: Hey, the first byte is the opcode/instruction, and the next two are the address in funny reverse order.

    For some reason, that just clicked for me...'
  replies: []
- id: 8954
  author: Craig Tataryn
  date: '2011-06-10T15:29:15'
  content: Great post. It reminds me of anytime I hear of people hacking something and am amazed at how they could figure out how to crack such a seemingly complex system.  It all boils down to the fact that the system was put in place my a human which had to follow rules to make everything all tick.
  replies: []
- id: 8955
  author: ??amonn McManus
  date: '2011-06-17T12:36:21'
  content: 'Think you might be reversing the pushable registers, C??dric. The 6502 had PHA and PHP, and the 65C02 added PHX and PHY. The thing you could only do with X and Y was increment or decrement. (Plus those wacky index modes, of course.)

    I was more of a Z80 weenie myself. Tons more registers and tons more instructions, which meant tons more scope for gratuitous inconsistency, a promise that the Z80 did not fail to keep.'
  replies: []
- id: 8956
  author: Cedric
  date: '2011-06-17T12:38:35'
  content: '??amonn: You are absolutely correct, I stand corrected.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/magic.jpg)

> It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration. 

This quote is from Edsger Dijkstra in a short article he wrote in 1975 called ["How do we tell truths that might hurt?"](http://www.cs.virginia.edu/~evans/cs655-S00/readings/ewd498.html). 

Dijkstra had the reputation of being facetious and it's hard to tell whether he really meant this or if he was just poking some harmless fun at the various technologies in vogue in 1975 (a practice I can certainly relate to). Whatever the case may be, his quote has been picked up and reproduced literally quite a bit, often by people trying to engage in some language snubiness warfare. 

Personally, I think this quote is completely and unequivocably wrong. 

Most of the developers that I know or that I have interacted with and who are in their thirties or above have, obviously, started with BASIC. A lot of them are very good engineers, and not just at one language in particular, but also very knowledgeable about the technology. They routinely write code in several languages and they are also very comfortable with peripheral notions such as databases, clustering, parallelism, etc... You name it. All of them would agree that while BASIC was quite primitive, it was also a great enabler. It allowed you to get things running on the screen very quickly and there is no doubt that it created an entire generation of people who became absolutely passionate about the field of software engineering. 

BASIC should receive praises for this fact alone. But let's not stop there. 

Was BASIC really that primitive? Looking back in the days, I would say "far from it". Granted, at the time, some languages were beginning to push structured and OO programming into the industry, but for a mainstream language that was available on every single computer that was sold at the time, I am tempted to say... "Loops, variables, rudimentary math and graphical functions... not bad!". 

I would also argue that every argument that you can make against BASIC can be made against assembly language, and in worse ways. 

Is there anyone who thinks that assembly language corrupts the mind of programmers beyond redemption? Certainly not me. Most developers who learn assembly language will quickly move on to higher level languages while retaining a very accurate mental model of what's going on under thehood, which is a win-win situation in my opinion. Just because you know the difference between stack and heap and you still remember a few hexadecimal opcodes from your favorite microprocessor doesn't mean you won't be able to understand classes, polymorphism or closures. 

I certainly loved my time writing BASIC, and while it ignited my passion for this industry, the epiphany for me came in a slightly different form. 

Story time. 

In the first year with my ever beloved Apple ][, I was writing a lot of Applesoft BASIC but probably reading even more of it. Back then, there was no Internet and magazines were few and far between, so I took any opportunity I could to read code. 

At some point, I came across a mysterious instruction called "CALL 768". I had read the documentation for this CALL instruction but I still didn't understand what it did. Puzzled, I typed "CALL 768" at the prompt and something magical happened: the computer played a short tune. 

Obviously, I knew the Apple ][ could play music but I was startled to discover that you could do so with such a simple command. I quickly added it to my own program and I was delighted to find out that it worked. A few days later, I resumed working on my program but as soon as I launched it, it froze. I quickly identified "CALL 768" as the source of the problem. I started suspecting that the previous program I was investigating had put something in memory, which was wiped when I turned the computer off. To verify this hypothesis, I launched this other program, then launched mine again and this time, it worked. 

Mystery solved. 

Well, partially. My curiosity was piqued and now, I just had to figure out what was going on. I started wondering where in the memory this code could be. It obviously wasn't in BASIC since a LIST didn't show anything. My (still quite nascent) hexadecimal knowledge kicked in and I realized that 768 was $300 in hexadecimal. I had some rudimentary knowledge of something called the "Monitor", which allowed you to read machine language. I was, however, unable to really understand it, a bit like knowing the Hiragana alphabet, being able to pronouce the words that Hiragana symbols form but being unable to understand them. 

The instruction to start the monitor was "CALL -151" (mmmh... there's this CALL instruction again). Once there, you can see the content of the memory by typing the address followed by "L". Feverishly, I typed "300L" and sure enough, an assembly listing was there. I rebooted, checked the location again, the assembly was gone. I ran the other program and the assembly returned. I didn't know how the assembly went there (I would investigate this later) but I knew I was well on my way to figuring this puzzle out. 

It took me several days of painful trials and errors, but this little investigation led me to take my first steps in 6502 programming and more importantly, to understand how BASIC and assembly language could interact with each other. The realization that BASIC could read and write memory with PEEK and POKE was the last missing piece, and this understanding blew whatever was left of my mind at the time. I was just amazed at how beautiful this orchestration was, and how all the pieces fitted so neatly together. 

That was it. This is what started the passion in me. It wasn't a language, it wasn't a specific hardware or a concept. It was the realization that despite all the apparent magic, everything was logical and no mystery could resist meticulous investigations and logical thinking. I still felt like a complete beginner but at that moment, I knew that given enough time and effort, I should be able to puzzle it all out. And maybe be able to create all these wonderful programs that I had been using so far without understanding much of how they worked. 

BASIC had very little to do with it. It was never about BASIC, it was always about the magic.
