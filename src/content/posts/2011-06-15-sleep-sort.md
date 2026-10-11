---
title: Sleep sort
date: '2011-06-15T09:57:05'
slug: sleep-sort
categories:
- General
comments:
- id: 8974
  author: Julien Ponge
  date: '2011-06-15T10:49:19'
  content: Awesome... and it works :-)
  replies: []
- id: 8975
  author: Cedric
  date: '2011-06-15T10:50:16'
  content: Well... kind of. There are a lot of situations in which it won't work, enumerating these might be fun.
  replies: []
- id: 8976
  author: Justin Lee
  date: '2011-06-15T11:03:36'
  content: Like sorting negative numbers and floating points.  :)
  replies: []
- id: 8977
  author: Dave
  date: '2011-06-15T11:03:39'
  content: It's very slow for large values, so I suggest dividing your array by a huge value before sorting....or not.  &gt;:)
  replies: []
- id: 8978
  author: Daniel Spiewak
  date: '2011-06-15T11:42:34'
  content: 'From a theoretical standpoint, this isn''t actually a new sort.  It''s a disguised version of bucket sort, albeit a *very* clever encoding.  It certainly made me smile.

    The answer to the reader exercise is that the complexity of this algorithm is O(m+n), where m is the largest numeric value in the sequence.  This is reflective of the fact that it is just bucket sort with a very clever skin.'
  replies: []
- id: 8979
  author: Sanjar Akhmedov
  date: '2011-06-15T20:04:52'
  content: This sort delegates actual sorting to the scheduler. I think average complexity is heap alike.
  replies: []
- id: 8980
  author: daehbe
  date: '2011-06-15T21:14:15'
  content: 'it looks hahaha, but ...

    ./sleepSort 0.001 0.0011 0.00011 0.0001

    0.001

    0.00011

    0.0001

    0.0011

    ./sleepSort 0.001 0.0011 0.00011 0.0001

    0.001

    0.0011

    0.00011

    0.0001'
  replies: []
- id: 8981
  author: Jewel
  date: '2011-06-15T21:16:49'
  content: Awesome!
  replies: []
- id: 8982
  author: Blusky
  date: '2011-06-16T02:55:23'
  content: But it you try to order a huge amount of small number, it won't work
  replies: []
- id: 8983
  author: Bob Lee
  date: '2011-06-16T17:00:59'
  content: http://gafter.blogspot.com/2006/11/linear-time-sort-puzzler.html :-)
  replies: []
- id: 8984
  author: Wotan
  date: '2011-06-17T01:41:22'
  content: I guess complexity in this case is O(n^2). The key point is the call to sleep, whose complexity I don't know, but I guess it's O(n) (perhaps the same as the scheduler of the operating system?).
  replies: []
- id: 8985
  author: Craig Tataryn
  date: '2011-06-17T08:21:27'
  content: 'It reminds me of a sorting exercise (can''t remember which book it was) where you put numbers on the sides of identical cars, and then fill their gas tank proportional to the number written on the side of the car.  Then you get up on a tall building and tell the drivers to start driving.  At the end of it all, the cars should all be sorted by their number (lower numbered cars ran out of gas first).  That actually has a complexity of O(1) :)

    The funny thing is, sleep sort still has a complexity proportional to input size of O(n) (or big-theta(n)) because you only iterate through the input once.

    One of the situations where this would fail is when the number of input values is really big and small numbers appear at the end of the input:

    1,2,3,4,.............,1

    So executing sleep sort on a computer might take longer than 2 units of time to "get to" the last 1 in the list, at which point it already has displayed the number 2.  Of course, this is machine dependent and probably wouldn''t even factor into a "proper" complexity analysis :)'
  replies: []
- id: 8986
  author: Jens
  date: '2011-06-18T08:44:04'
  content: Ever heard of deletion sort? Delete all elements except two. The remaining list is sorted, but you don't now if ascending or descending. Delete all elements except one and the list is sorted in both directions.
  replies: []
- id: 8987
  author: Xamuel
  date: '2011-06-18T15:00:56'
  content: This should be renamed "Apache Sort", as I'm sure it'll be what the Apache dev team uses to sort everything as soon as they become aware of the algorithm.
  replies: []
- id: 8988
  author: Anon
  date: '2011-06-19T06:14:33'
  content: You got this from dis.4chan.org
  replies: []
---

It's not very often that someone invents a new sort, but I have certainly never seen [that one](http://dis.4chan.org/read/prog/1295544154) before: 

```java
#!/bin/bash
function f() {
    sleep "$1"
    echo "$1"
}
while [ -n "$1" ]
do
    f "$1" &
    shift
done
wait
```

The idea is simple: you take the first element of the array, say n, you fork a new process which sleeps n seconds then displays that number. Repeat for the next element. 

Calculation of the average complexity of this algorithm left as an exercise to the reader. 

Related: [Quantum bogosort](http://en.wikipedia.org/wiki/Bogosort#Quantum_bogosort). 

For some reason, I feel like taking a nap.
