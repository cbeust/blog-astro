---
title: Answer to the "School" challenge
date: '2013-02-16T15:44:08'
slug: answer-to-the-school-challenge
categories:
- General
comments:
- id: 9684
  author: Greg
  date: '2013-02-17T07:55:12'
  content: 'You may have noticed that there was a stackoverflow thread on this topic a month ago: http://stackoverflow.com/questions/479105/hashcode-method-when-equals-is-based-on-multiple-independent-fields

    I think you''re conclusion is correct, that any hashCode() based on the fields wouldn''t match the correct equals() implementation. In fact, this is a bit of an abuse of the equals() contract, as they discuss in detail on the stackoverflow thread.

    In my opinion, the best solution would be to stick with an equals and hashCode that require /both/ fields to be equal, as would be standard. To support finding schools with either the name /or/ the nickname being equal, I''d create two hashmaps, one keyed by the nickname and the other keyed by the name. To find an equivalent school, just check both maps and perhaps add the method isEquivalentTo(otherSchool) to the School interface.'
  replies: []
- id: 9685
  author: Mike
  date: '2013-02-18T00:01:59'
  content: Even if you perform a unifying pass on the list of School objects, you would have to repeat the process until no more matches were found in order to satisfy the transitivity requirement of equals. I'm sure there's a more efficient algorithm than that, but it's more expensive than a single pass I imagine (which in any case would probably require a sort on each of the fields).
  replies: []
- id: 9686
  author: Dave
  date: '2013-02-19T22:09:44'
  content: So the answer is that there is no valid answer to the question.
  replies: []
- id: 9687
  author: Henning
  date: '2013-02-19T22:57:23'
  content: 'Hmm.

    to me it seems you''re trying to solve a problem coming from the very specific domain task,

    which you do not give any further context

    about,

    with a purely technical solution.

    if theres a reason that there must be two objects representing the same school, then they must not

    be made technically equal by implementing this method.

    if not, merge them properly first(using gregs isequally approach), as soon as the data  enter sthe system  and not worry further about equals methods.'
  replies: []
- id: 9688
  author: Jim White
  date: '2013-03-02T15:16:14'
  content: 'You can unify under a single id, which is name.  The mistake in this API is trying to include the nick in the equality decision.  The right model is String which has equals and equalsIgnoreCase for this very reason.

    https://gist.github.com/jimwhite/5073867'
  replies: []
---

I'm happy to see mostly correct answers to the [School coding challenge](http://beust.com/weblog/weblog/2013/02/13/coding-challenge-light-edition/#comments). 

To make things more interesting, let's start by looking at a na??ve (and wrong) solution: 

```java
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    result = prime * result + ((nickname == null) ? 0 : nickname.hashCode());
    return result;
  }
  @Override
  public boolean equals(Object obj) {
    // ... details omitted
    return other.nickname.equals(nickname) || other.name.equals(name);
  }
```

Let's create two School objects, make sure they are equal, add them to a set and then display this set: 

```java
    School school1 = new School("University of Pennsylvania", "upenn");
    School school2 = new School("University of Pennsylvania", "Penn State");
    System.out.println("Equals: " + school1.equals(school2));
    Set<School> schools = Sets.newHashSet();
    schools.add(school1);
    schools.add(school2);
    System.out.println("Set: " + schools);
```

The output: 

```text
Equals: true
Set: [com.beust.School@d8e612c6, com.beust.School@7086780a]
```

This is obviously wrong and caused by the fact that this implementation breaks several laws, among which: "if two objects are equal, their hashcode should be equal as well". However, this is clearly not the case here since the two objects instantiated in the `main` method are equal but their hash code are different, since it's calculated from both the name and nickname. The consequences of such an implementation are disastrous in more ways than one, starting with the fact that your objects cannot reliably be stored in nor retrieved from identity-based collections (e.g. sets and maps). 

The only way out of this would be to return a variable hashcode, but this doesn't make sense since we wouldn't know what field to base that hash code on. 

Most commenters came up with the idea of always returning the same value for `hashCode()`, regardless of the `name` and `nickname` values. This approach is actually correct but it comes at the cost of losing all running time benefits offered by sets and maps, such as constant time retrievals. Instead, `Hashmap#get` and `Set#contains` are now linear operations. That's a pretty bad prank to pull on your coworkers when their collections can contain millions of objects. 

So, what's the best way to solve this problem? 

I'm not quite sure. There are several approaches, all with their pros and cons. 

The first idea would be to **not** override `equals` and `hashCode`, using their default implementation defined on `Object`. This implementation (simple reference equality test) is guaranteed to be wrong in most cases, but since you can't write a correct one, maybe the best approach is to do nothing. 

Another approach would be to throw an `OperationNotSupportedException` in `equals`/`hashCode`. The implementation is still wrong but at least, your program will crash loudly if someone attempts to put these objects in an identity-based collection. 

Ultimately, you really want to get rid of the fuzzy matching performed in the `equals` method, so the best approach is probably to perform a first pass on all your `School` objects and unify all those that are equal under the same id. After this, you can implement `equals`/hashCode` based on this `id` field.
