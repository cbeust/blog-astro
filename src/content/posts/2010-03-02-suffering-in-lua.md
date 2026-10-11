---
title: Suffering in Lua
date: '2010-03-02T11:38:24'
slug: suffering-in-lua
categories:
- General
comments:
- id: 8012
  author: Ignacio Burgue??o
  date: '2010-03-02T13:26:42'
  content: "Mmm, there's no such thing as function signatures in Lua. Your first example is actually doing this:\nf = function ()\n  print(\"f()\")\nend\nf(2)\nf = function (n)\n  print(\"f(n):\" .. n)\nend\nThat is, a function is assigned to variable 'f', then it is called, then a different function is bound to 'f'. I suppose you were expecting a behaviour similar to Javascript, but that's not the case here."
  replies: []
- id: 8013
  author: Cedric
  date: '2010-03-02T13:39:16'
  content: 'Then how do you explain that once both functions are defined, if I invoke:

    f()

    f(2)

    I get:

    f(nil)

    f(n):2

    ?

    Based on your explanation, there is only ever one function called "f", and it''s the last one that was defined.  But the output above shows that there is overloading at work...

    I''m confused.'
  replies: []
- id: 8014
  author: Ignacio Burgue??o
  date: '2010-03-02T13:52:45'
  content: "I'm guessing what the code you're running could be upon the output you posted.\nI think it is something like this, right?\nfunction f()\n  print(\"f()\")\nend\nfunction f(n)\n  if n then print(\"f(n):\" .. n)\n  else print(\"f(nil)\")\n  end\nend\nf()\nf(2)\nThe last function bound to variable 'f' is the only one that gets called. The first time is called with no arguments:\nf() -- so that will print \"f(nil)\"\nThe second time, with 2:\nf(2)  -- so the argument 'n' in your function is not nil, it is '2'\nBut in both cases, the function that is being called is always the second one. If that's not clear, delete the first definition of f() and run the script again. You'll have the same output."
  replies: []
- id: 8015
  author: Cedric
  date: '2010-03-02T13:59:59'
  content: 'You are correct, Ignacio, there is no overloading at all.

    Again, it would be nice if LUA told me that one of my two functions is being ignored.  It would be such a more friendly language to work with if they increased the syntactic and semantic checking...'
  replies: []
- id: 8016
  author: Ignacio Burgue??o
  date: '2010-03-02T14:00:06'
  content: 'BTW, I''ve posted the example code here:

    http://ideone.com/buZOsGJb'
  replies: []
- id: 8017
  author: Ignacio Burgue??o
  date: '2010-03-02T14:18:57'
  content: "Well, I don't have much exposure to other scripting languages but it seems that this behaviour is the common one. Python does not warn about it either:\ndef f():\n  print \"first definition\"\ndef f():\n  print \"second definition\"\nf()\nJavascript does the same thing. Don't know about Ruby.\nAnyway, you can make Lua warn you about that, with the help of metatables. See this example:\nhttp://ideone.com/fOjRSFvL\nSome of these issues are covered in the (non official) Lua Faq:\nhttp://batbytes.com/luafaq/"
  replies: []
- id: 8018
  author: Cedric
  date: '2010-03-02T14:28:38'
  content: Ignacio, I'm both impressed and scared by the fact that it's possible to do that :-)
  replies: []
- id: 8019
  author: Anonymous
  date: '2010-03-02T16:02:24'
  content: 'Ignacio already covered your actual problems, but if you don''t like the "silent" overriding globals you should look at strict.lua in the distribution.

    Also, it is Lua (note the case) :)'
  replies: []
- id: 8020
  author: Cedric
  date: '2010-03-02T16:10:06'
  content: 'Oops, I corrected to "Lua". Thanks.

    I''m not sure I have the options to change these defaults since I''ve been writing this Lua code to run it as a World of Warcraft add-on...'
  replies: []
- id: 8021
  author: Lua and World of Warcraft &laquo; Otaku, Cedric&#039;s weblog
  date: '2010-03-03T12:32:12'
  content: '[...] About                   &laquo; Suffering in Lua [...]'
  replies: []
- id: 8022
  author: Bill K
  date: '2010-03-03T12:58:36'
  content: 'I''m not really comfortable at all with the idea of:

    define function/method

    code that executes

    define function/method

    This just seems really really wrong to me.  I would think that to do anything where the code that executes wasn''t at the end would be really irritating no matter how you slice it.

    In fact, I''d be a proponent of writing everything in functions and having a small launcher (like a java/c main) that kicked stuff off.

    In general I guess I''d say If you are forced into using a language without structure or with too many ways to do something, the best you can do is rewrite the code to impose some structure/patterns that make it more predictable &amp; readable and eliminate all the smart tricks that save a few keystrokes but do something that you have to think about when you first see it.'
  replies: []
- id: 8023
  author: Gunjan Mukherjee
  date: '2010-05-16T10:21:05'
  content: "Hi,\n     i want to do programming in LUA for android phone.i know LUA but how i will start work on android.it will be good if u will send me the list of function and their use or if u have any URL where i can study this .\nThanks\nGunjan Mukherjee"
  replies: []
- id: 8024
  author: air bear
  date: '2010-10-01T04:32:58'
  content: 'Its very odd that Lua is a language that came out of Brazil (lua = moon in portuguese). I''ve had my share of Lua suffering in doing scripts for this program Ecotect, which models building performance criteria.

    did i stumble on a support group?

    -bear jaw'
  replies: []
- id: 8025
  author: skolkovo
  date: '2010-10-28T03:28:52'
  content: Getting this far with Lua has been a real struggle. I know no C, C++, Cocoa etc, so I don??t know if Lua is easy for people with such a background (though it heartened me when he described Lua as ??horrid??). But I do have a lot of experience of the various flavours of Microsoft VB and VBA, and of JavaScript, PHP, AppleScript, ActionScript 2 and 3, and other useful technologies like XML, SQL etc, all self taught. That brings a confidence that things should be possible, but it barely overcomes the why the bloody hell should I add features that should have been there in the first place?
  replies: []
- id: 8026
  author: Anonymous Bryan
  date: '2010-11-06T08:10:09'
  content: Hey, I get an error that says brush:python not found. I think that this is the code formatter for python code that you are using for your lua examples? I also think that it is server side.
  replies: []
---

I have been writing a lot of Lua recently, and it hasn't been a very pleasant experience. 

The first thing that took a little while to get used to is the fact that table indices start at 1, not 0. Admittedly, it is possible to configure this, but the default is certainly confusing and I have been battling `nil` errors in tables that I knew couldn't be empty. 

But the worst was the following: 

```javascript
function f()
  print("f()")
end
f(2)
function f(n)
  print("f(n):" .. n)
end
```

This snippet will print **`"f()"`** , indicating that when the interpreter read `f(2)` and couldn't find a matching function (since it wasn't defined yet), it decided to get rid of my parameter and call `f()` instead. And all this without any error or warning. 

It doesn't stop here: 

```javascript
function f(n)
  if n then print("f(n):" .. n)
  else print("f(nil)")
  end
end
f()
```

This will print... `f(nil)`. 

Here again, the interpreter couldn't find a signature matching `f()` so it decided to pick `f(n)` and simply pass `nil` as parameter. 

I am willing to suffer some discomfort when using a dynamically typed language, but this is really terrible and I dread the fact that it's inevitably going to cause more bug hunting in the future.... 

A couple more things of interest: 

  * Writing in Lua has confirmed me in my conviction that using `end` as a closing statement is really painful. Not only is it noise when I read a source but it just makes it impossible to match a closing end to its opening statement (you will also notice that there is not always such a thing: `if` requires a `then` but the declaration of functions doesn't require anything). If you're going to create a language, do me a favor and pick symmetric opening/closing tokens (or significant spacing, like Python). 
  * Lua is doing something clever with its comment syntax, which I haven't seen in any other languages: comment blocks are defined by `--[[` and `--]]` but if you add a third hyphen on the opening part, then the commenting is disabled again: 

```text
    --[[
      This is commented out
      --]]
      ---[[
      ... but this is not
      --]]
```

I like the practicality of this idea. 
What I find disappointing is that Lua is a language that's more recent than Python, so it's hard to understand why it's being so lackdaisical about signaling errors. Having said that, there is no question that Lua is alive and well and used increasingly more often as an embedded languages, especially in video games, so it's most likely here to stay...
