---
title: 'Coding challenge: partial results semantics'
date: '2014-05-24T06:48:53'
slug: coding-challenge-partial-results-semantics
categories:
- General
---

Consider the simple following signature: 

```java
  List<Person> searchPeople(String query);
```

This method takes a search string (e.g. "Bill") and returns a list of `Person` that match this search string. This includes people with "Bill" as their first name, or as their last name, or maybe even using nicknames (someone whose name is "William" would match). 

However, you have millions of people in your database, which means that this function call can potentially return tens of thousands of people, and it can also be quite time consuming. But your caller cannot wait forever and they want to cap the amount of time you spend doing the search, e.g. five seconds. 

The function itself doesn't know about this limit, it just does as much as it can and then it gets interrupted by its caller after the time has run out. You can imagine that the caller invokes this function in a separate thread and then calls `get` on the `Future` with a time out of five seconds. 

The nice thing about the signature above is that it's referentially transparent, which offers a lot of nice properties. However, it's also binary: either it returns everything that matches the search or it gets interrupted before it can finish and the caller gets zero results. 

The challenge is to write this function so that when it gets interrupted by the time out, it still returns whatever it has found so far. 

The solution is trivial using mutable structures so bonus points if you can implement this solution with immutable data. Any language welcome, and I suggest you use [pastebin](http://pastebin.com) or a similar service to share your code, since the comment system is not very good at formatting code.
