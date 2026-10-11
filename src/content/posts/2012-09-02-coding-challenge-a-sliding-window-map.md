---
title: 'Coding challenge: a sliding window map'
date: '2012-09-02T16:12:58'
slug: coding-challenge-a-sliding-window-map
categories:
- General
comments:
- id: 9579
  author: Nwanda
  date: '2012-09-02T18:34:53'
  content: http://pastebin.com/9WP4cdch
  replies: []
- id: 9580
  author: Rogach
  date: '2012-09-02T18:56:40'
  content: 'Quick and not-very-efficient solution in Scala:

    https://gist.github.com/3606621'
  replies: []
- id: 9581
  author: Jim White
  date: '2012-09-02T20:54:54'
  content: 'Untested Groovy version:

    https://gist.github.com/3607071'
  replies: []
- id: 9582
  author: Rogach
  date: '2012-09-02T21:38:25'
  content: '@Jim White:

    Consider the following scenario: you have only one key ("a"), and the limit is 10. It seems that after the system would request 10 keys, your implementation will stop returning the key, despite the time limit could be already exceeded. Am I correct?'
  replies: []
- id: 9583
  author: Jim White
  date: '2012-09-02T21:42:01'
  content: Yeah, I realized I totally misunderstood the task.  What I think is a correct version is there now (it uses both a PriorityQueue and an ArrayQueue).
  replies: []
- id: 9584
  author: Dimitar Dimitrov
  date: '2012-09-03T01:39:52'
  content: 'Not quite sure I got the requirement (i.e. in what order shall we return the key less than N times?, when is a key released?)

    Anyway, here is an attempt in Groovy - no idioms have been used, so Java translation should e straightforward https://gist.github.com/3608443'
  replies: []
- id: 9585
  author: Weeble
  date: '2012-09-03T05:20:08'
  content: 'Hmmm. Two observations:

    1. It doesn''t seem like it matters which order we dole the keys out. Suppose there are four keys, [A, B, C, D]. You could give out A 500 times, then B 500 times, etc. Or you could give out A, B, C, D, A, B, C, D... cycling through them all 500 times. Either way you do it, you can dole out 2000 keys, and from then on you repeat from the start, and can only dole out a key 2000*(k+1)+n if 10 minutes have passed since you doled out key 2000*k+n. I think the pool of keys is just a distraction - solving the problem for one key with maxCount=2000 is equivalent to solving for four keys with maxCount=500 or 2000 keys with maxCount=1.

    2. If you want 100% precision, it does not seem like you can get around storing the timestamp of when you fulfilled all of the last 2000 (=keys * limit) requests. You could reconstruct this information just by polling getNextKey fast enough, so it must be held in there. However, it seems possible there may be a trade off, allowing occasional false negatives (returning null when technically there is a free key) in return for reduced storage.'
  replies: []
- id: 9586
  author: pseudon mousie
  date: '2012-09-03T07:37:50'
  content: 'http://pastebin.com/iiAjfC3V

    ruby. ignores such petty concerns as "input validation" and "efficiency"!'
  replies: []
- id: 9587
  author: pseudon mousie
  date: '2012-09-03T07:52:10'
  content: 'oh hey, discussion showed up when I submitted my comment! Cool.

    @weeble : " I think the pool of keys is just a distraction ?? solving the problem for one key with maxCount=2000 is equivalent to solving for four keys with maxCount=500 or 2000 keys with maxCount=1."

    That''s how I treated it; didn''t worry about preserving order on the keys when I retrieved them for checking.'
  replies: []
- id: 9588
  author: Jim White
  date: '2012-09-03T11:42:45'
  content: 'Thanks to Dimitar''s solution I realized that this is actually super simple.  Just duplicate each key maxCount times and use the oldest one if its earliest usage is out of the window.

    https://gist.github.com/3613264'
  replies: []
- id: 9589
  author: Jim White
  date: '2012-09-03T11:52:56'
  content: That also makes randomizing the order of the keys trivial.  Just use a random number for the initial timestamp value.
  replies: []
- id: 9590
  author: Sony Mathew
  date: '2012-09-04T18:04:24'
  content: Please delete the previous comment (and this comment) as it has corporate information.
  replies: []
- id: 9591
  author: Sony Mathew
  date: '2012-09-04T18:05:18'
  content: http://pastebin.com/n75TcNJX
  replies: []
- id: 9592
  author: Martin
  date: '2012-09-04T18:38:11'
  content: "Why all the randomness? I must be missing something. Here's a python attempt\n https://gist.github.com/3629939"
  replies: []
- id: 9593
  author: J??r??me
  date: '2012-09-04T19:23:44'
  content: 'A attempt with old style java using a round robin array as a window. Simple and should be efficient.

    https://gist.github.com/3630300'
  replies: []
- id: 9594
  author: Matthew
  date: '2012-09-05T01:55:15'
  content: Throttled and non-throttled simple approaches in Java -  http://pastebin.com/YHnGFymP
  replies: []
- id: 9595
  author: Sony Mathew
  date: '2012-09-06T17:48:37'
  content: 'Fixed an un-optimized loop (with an early break).

    http://pastebin.com/328R0sq9'
  replies: []
- id: 9596
  author: Hermann
  date: '2012-09-07T08:02:54'
  content: 'My previous post was not saved. Here it is again

    http://pastebin.com/W66PMzYz

    http://pastebin.com/fxZ72TGb'
  replies: []
- id: 9597
  author: Weeble
  date: '2012-09-09T14:05:59'
  content: 'I''ve looked at the space/precision trade-off I posited above, and written up my solution here:

    http://clockworkcodex.blogspot.co.uk/2012/09/key-usage-coding-challenge.html'
  replies: []
- id: 9598
  author: Rafael Naufal
  date: '2012-09-16T10:51:16'
  content: 'Cedric, my latest comment was wrong. Can you delete it, pls? This is the new one:

    New Java version: https://gist.github.com/3733384

    ??????-

    http://rafaelnaufal.com'
  replies: []
- id: 9599
  author: Adrian Smith
  date: '2012-09-23T01:47:47'
  content: http://pastebin.com/D4hdHZcy
  replies: []
- id: 9600
  author: Thierry Kormann
  date: '2012-10-04T04:57:28'
  content: '@cedric: please delete #24. It sucks. I resign and think my attempt in #23 is the right one. I have added two comments to explain the idea. Sorry for the poor naming and flood...

    http://pastebin.com/Aifx4nzJ'
  replies: []
- id: 9601
  author: Stanislav Kurilin
  date: '2012-11-07T01:21:40'
  content: Like this https://gist.github.com/4030723 ?
  replies: []
---

A lot of sites offer programmatic access to their content via API's. The main advantage for the producer of this content is to be able to control finely what they export and how they export it (and also avoid being scraped) while clients receive the data they need in a structured and documented way. These API's are usually strictly monitored to make sure that clients can't abuse them. For example, the producer will typically limit how often clients can call a certain API, how much data they can transfer every minute, etc... 

Today's coding challenge is based on these requirements. 

We want to make multiple calls to a site that only allows to use a key 500 times every 10mn. You are given a collection of keys (strings), a max count (e.g. 500) and a time period (e.g. 10mn) and your task is to implement `getNextKey()` as follows: 
    
    
    public class SlidingWindowMap {
      public SlidingWindowMap(Set<String> keys, int maxCount, long periodMs) {
        // ...
      }
      /**
       * @return a key that has been used less than `maxCount` times during the
       * past `periodMs` milliseconds or null if no such key exists.
       */
      public String getNextKey() {
        // Your brilliant solution goes here
      }
    }
    

I'm keeping the statement of the problem as open as possible to encourage exploration, but feel free to ask for clarifications if something is not clear. Please post your solution on a pastebin/gist like site (or wherever your code will be easy to read) and link to it in your comment. All languages are welcome.
