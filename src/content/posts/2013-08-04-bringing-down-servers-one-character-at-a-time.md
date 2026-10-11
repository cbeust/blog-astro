---
title: Bringing down servers, one character at a time
date: '2013-08-04T13:46:09'
slug: bringing-down-servers-one-character-at-a-time
categories:
- General
comments:
- id: 9738
  author: Daniel Zimmerman
  date: '2013-08-04T14:56:44'
  content: A static analysis tool (more specifically, an extended static checker) could actually have been of considerable help here, by verifying (or, in this case, failing to verify) the correctness of the loop against a specified loop invariant and variant function...
  replies: []
- id: 9739
  author: John
  date: '2013-08-04T21:22:47'
  content: 'I use Intellij (switched from Eclipse a few months back) and that allows you to format code, optimize imports and analyze code before checkin.

    Eclipse can reformat code on save.

    Both of these will allow you to force the use of brackets, clean imports, add final to declarations etc etc.

    They won''t catch all errors but they do reduce the chances of getting the "slaps forehead" errors.'
  replies: []
- id: 9740
  author: Cedric
  date: '2013-08-04T22:49:27'
  content: '@Daniel: a tool verifying an invariant would, by definition, not be a static one since it needs to understand (and possibly run) the code in order to emit diagnoses.

    As for the general idea of design by contract, I''ve found that it sits in a very uncomfortable spot between simple assertions and actual tests, so I don''t find it very valuable.'
  replies: []
- id: 9741
  author: Rob Freundlich
  date: '2013-08-05T04:18:11'
  content: "I don't know about tools to catch this, but in the last several years I've gotten a lot of mileage out of two rules for conditional expressions:\n1. Always use parens whether they're needed or not\n2. Format complex conditions in a way that highlights phrases, especially when combining AND and OR\nFor example, instead of this:\nwhile (maxDays &lt; 7 &amp;&amp; (eventCount &lt; 20) || attendeeCount &lt; 40)\nwrite this:\nwhile ((maxDays &lt; 7)\n          &amp;&amp; (eventCount &lt; 20)\n          || (attendeeCount &lt; 40))\nInstead of this:\nwhile (maxDays &lt; 7 &amp;&amp; ((eventCount &lt; 20) || (attendeeCount &lt; 40)))\nwrite this:\nwhile ((maxDays &lt; 7)\n          &amp;&amp; ((eventCount &lt; 20) || (attendeeCount &lt; 40)))\nIt takes a bit more effort up front, but the improved readability and (more importantly) decipherability has saved my butt countless times."
  replies: []
- id: 9742
  author: Rob Freundlich
  date: '2013-08-05T04:21:36'
  content: 'Ugh.  Lost formatting.  Is there a way to retain spacing in these comments?

    In the "write this" statements in my prior comment, the &amp;&amp; and || that are flush-left should be lined up beneath the (( of the ((maxDays'
  replies: []
- id: 9743
  author: Daniel Zimmerman
  date: '2013-08-06T21:40:34'
  content: '"A tool verifying an invariant would, by definition, not be a static one since it needs to understand (and possibly run) the code in order to emit diagnoses."

    It seems that you assign a different meaning to the phrase "by definition" than I do. Multiple tools exist that statically verify loop invariants and variant functions in Java (as well as other types of specification). Understanding the semantics of a piece of code does not require running the code.

    In this particular case, it''s unclear whether the loop invariant would have been easy or difficult to devise because the comments you included don''t make it obvious exactly what the loop is trying to accomplish. However, the variant function would have been the helpful thing here, even if the invariant was something relatively trivial. An extended static checker could demonstrate the existence of an execution path where the loop does not terminate and give example values for the state variables entering the loop that produce that outcome. Even "regular" static checkers like FindBugs and PMD, which don''t require any additional annotations in the code, can detect certain kinds of infinite loops; actually, one of those might have also helped in this situation by flagging the odd use of parentheses in the faulty loop guard, even if it didn''t actually recognize the possible infinite loop.'
  replies: []
- id: 9744
  author: Mark Fulton
  date: '2013-10-07T12:19:49'
  content: A static analysis tool could have alerted you that you had an unnecessary parenthesis. Before deploying new code someone should understand each warning from the static analysis tool and perform a usually quick analysis on the risk. If it is team policy to keep your code dry and not have unnecessary imports, brackets, etc. then seeing a warning of such would have triggered investigation into this block of code and probably lead to catching the issue before being deployed.
  replies:
  - id: 9746
    author: Cedric
    date: '2013-10-07T13:18:48'
    content: No, a static analysis tool couldn't have helped because the code is 100% valid, it just doesn't reflect what was supposed to be there.
    replies: []
- id: 9745
  author: Mark Fulton
  date: '2013-10-07T12:22:26'
  content: By "dry" I really meant to refer to simple and not redundant (I did not intend to refer to not repeating oneself (http://en.wikipedia.org/wiki/Don't_repeat_yourself).
  replies: []
- id: 9747
  author: Mark Fulton
  date: '2013-10-07T13:47:03'
  content: 'I believe that a static analysis tool can help but perhaps I am missing something else. Please consider the following definition of unnecessary parentheses taken from http://www.jetbrains.com/idea/documentation/inspections.jsp:

    This inspection reports on any instance of unnecessary parentheses. Parentheses are considered unnecessary if the evaluation order of an expression remains unchanged if the parentheses are removed.

    In your code block the parentheses around "eventCount &lt; 20&quot; are, according to the above definition and static code analysis engine provided by IntelliJ, unnecessary. As you stated, the code is 100% valid but this is according to the compiler. My suggestion is that you make such code invalid according to your code style guidelines. I image that other tools in addition to IntelliJ can do this same analysis of the source code (e.g. lint) and report these as warnings or even errors if you want.'
  replies: []
- id: 9748
  author: Rob Freundlich
  date: '2013-10-25T09:48:17'
  content: 'I think it all depends on what you''re going for with static analysis.  What''s unnecessary from the compiler''s perspective may be useful or necessary from a readability perspective.

    Back in the Stone Age when I started coding, and every byte and cycle counted, compiler efficiency was probably more important, with disk space a close second.  But nowadays, I aim for readability - lots of whitespace, and enoug parens to make groupings clear to my aging eyes.'
  replies: []
- id: 9749
  author: Michael
  date: '2014-03-18T14:39:44'
  content: "Your Code runs forever if eventCount or attendeeCount will not hit the borders.\nparenthesis combined with operator precedence\n1. () from left to right\n2 &lt; from left to rigth\n3 &amp;&amp; from left to right\n4 || from left to right\nwhile ( ( maxDays &lt; 7 ) &amp;&amp;\n// maxDays shall hit in all cases\n  ( ( eventCount &lt; 20 ) ||  ( attendeeCount &lt; 40 ) )\n// so this  ^^^^ part has to be one part of the expression of the &amp;&amp; at all.\n )\n{\n // i would check also for integer overflow\n// if the variables can get outside of this wile\n// it is possible that they do overflow and this loop doesn&#039;t know about.\n}"
  replies: []
- id: 9750
  author: anon
  date: '2014-05-05T04:28:32'
  content: Maybe don't use a while loop, instead opt to use an if to start the block and a 'for each' to iterate within it?  Seems like the 'while' is overkill here
  replies: []
---

Last week, I mentioned a bug that I caused and a few people asked me details about it, so here is what happened. 

The code in question is parsing a calendar and processing meetings. Before showing the buggy code, here is what a shortened version of the fix ended up looking like: 
    
    
    while (maxDays < 7 && (eventCount < 20) || attendeeCount < 40) {
        // process meetings
        // increment maxDays whenever we cross a day boundary
        // possibly increment eventCount or attendeeCount based on the meeting
    }
    

The bug went unnoticed in production for a few days until suddenly, the servers started pinning all their CPU's and shortly thereafter, depleting the memory of each instance. A restart was the only remedy. 

This code runs a loop through someone's calendar and stops until we've gathered enough information. The `maxDays` variable is what I call a "safety valve", a condition used to guarantees that the code doesn't run amok in case its normal processing flow never finishes. And yet, the crash seems to indicate that the code was doing exactly that. 

With this introduction out of the way, here is now the line that caused the bug: 

Actually... you've already seen it, it's the code I pasted above. Did you spot the problem? 

That's right, a simple set of parentheses in the wrong place. Because they are surrounding the wrong expression, they completely defeat the purpose of the safety valve, which only triggers for people with empty calendars (explaining why it took some time to trigger that bug). 

Two characters to bring down an entire server... 

Can we learn anything about this bug, besides the fact that testing needs to cover edge cases? A static analysis tool can't be of much help here since we're completely in the realm of runtime behavior, but is there some way that an automated tool could have warned me about the flaw of this termination expression?
