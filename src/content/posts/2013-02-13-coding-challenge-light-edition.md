---
title: Coding challenge ("light" edition)
date: '2013-02-13T22:19:35'
slug: coding-challenge-light-edition
categories:
- General
comments:
- id: 9667
  author: kasper
  date: '2013-02-14T00:16:16'
  content: "public boolean equals(Object o) {\n  return o instanceof School &amp;&amp; equals((School) o);\n}\npublic boolean equals(School s) { //assuming name, nickname !=null\n  return name.equals(s.name)  || nickname.equals(s.nickname);\n}\npublic int hashCode() {\n  return 0;\n}\nYou cannot return anything but a constant from hashCode.\nGiven the rules we have.\nhash(somename, nickname) == hash(somename, anynickname) -&gt;\nthe hash function is independent of nickname.\nand\nhash(name, somenickname) == hash(anyname, somenickname) -&gt;\nthe hash function is independent of name.\n-&gt; which leeds us to conclude that the hash function must be independent of both name and nickname.\nHence we need to return a constant."
  replies: []
- id: 9668
  author: Xav
  date: '2013-02-14T00:40:25'
  content: "Simple implementation, but has very bad performance if you use as a key in a HashMap...\n    public boolean equals(Object o) {\n        if (this == o) {\n            return true;\n        }\n        if (o == null || getClass() != o.getClass()) {\n            return false;\n        }\n        School school = (School) o;\n        return (name == null ? school.name == null : name.equals(school.name))  // same name\n                || (nickname == null ? school.nickname == null : nickname.equals(school.nickname)); // or same nickname\n    }\n    public int hashCode() {\n        return 0;\n    }"
  replies: []
- id: 9669
  author: Michael Snell
  date: '2013-02-14T01:04:58'
  content: 'Technically correct, horribly inefficient: https://gist.github.com/snellm/4951711

    (null and type checking omitted for clarity)'
  replies: []
- id: 9670
  author: Andrea
  date: '2013-02-14T01:37:51'
  content: "The relation implemented by the equals() method should be an equality relation, but your requirement violates the transitivity rule so cannot be correctly implemented.\nConsider these instances of School:\nA = (Name1,Nick1)\nB = (Name2,Nick1)\nC = (Name2,Nick2)\nWith the required rule we will have:\nA.equals(B)\nB.equals(C)\n!A.equals(C)\nIf we want to implement the two methods we will be forced to do the following:\nclass School {\n   String name;\n   String nick;\n   public boolean equals(Object o) {\n      if(o==null) return false;\n      if(!o instanceof School) return false;\n      School os = (School)o;\n      return (this.name !=null &amp;&amp; this.name.equals(os.name))\n           || (this.nick != null &amp;&amp; this.nick.equals(os.nick));\n   }\n   public int hashcode() {\n      return 0;\n   }\n}\nSince given any couple of Schools it's possible to find a third one equals to both of them, all the instances need to have the same hashcode."
  replies: []
- id: 9671
  author: Jan Ouwens
  date: '2013-02-14T03:47:28'
  content: 'Here''s my answer: https://gist.github.com/jqno/4952526'
  replies: []
- id: 9672
  author: Rob Oxspring
  date: '2013-02-14T05:17:34'
  content: "To mix up the hashCode() results a little you could replace Michael's hashCode() implementation with the following.\nprivate static Random random = new Random();\nprivate static HashMap hashes = new HashMap();\n@Override\npublic int hashCode() {\n\tfinal Integer nameHash = hashes.get(name);\n\tfinal Integer nickHash = hashes.get(nickname);\n\tfinal int result;\n\tif(nameHash==null &amp;&amp; nickHash==null) {\n\t\tresult = random.nextInt();\n\t\thashes.put(name, result);\n\t\thashes.put(nickname, result);\n\t}\n\telse if(nameHash!=null &amp;&amp; nickHash==null) {\n\t\tresult = nameHash;\n\t\thashes.put(nickname,nameHash);\n\t}\n\telse if(nameHash==null &amp;&amp; nickHash!=null) {\n\t\tresult = nickHash;\n\t\thashes.put(name,nickHash);\n\t}\n\telse if(nameHash.equals(nickHash)) {\n\t\tresult = nameHash;\n\t}\n\telse {\n\t\tthrow new IllegalStateException(\"Both name and nick already have different hashes!\");\n\t}\n\treturn result;\n}\nObviously we could move the logic into\
    \ the constructor for speed, if we're allowed to assume School is immutable.  I don't see how to avoid the IllegalStateException without making hashCode() results inconsistent over time.  Also it'll obviously chew up memory as more and more Schools are compared."
  replies: []
- id: 9673
  author: Patrick
  date: '2013-02-14T05:55:47'
  content: 'https://gist.github.com/peakpg/4953299

    Here''s my stab at this in Ruby, using the equivalent methods (eql? and hash). Two comments:

    1. eql? will work with any other object that with methods nickname and name.

    2. I''m not doing null or type checking.'
  replies: []
- id: 9674
  author: Tom Hawtin
  date: '2013-02-14T06:36:56'
  content: "Given that equals is required to be transitive and you don't have an \"and only if\" clause:\n    @Override public boolean equals(Object obj) {\n        return obj instanceof School;\n    }\n    @Override public int hashCode() {\n         return 0;\n    }"
  replies: []
- id: 9675
  author: Andrea
  date: '2013-02-14T06:42:44'
  content: 'About the argument on performances if School is used as key in an hashmap, the problem isn''t about the performance, it''s about random behavior.

    Consider this thre elements:

    A = (Name1, Nick1)

    B = (Name1, Nick2)

    C = (Name2, Nick2)

    If I do:

    1: m = new HashMap();

    2: m.put(A, V1)

    3: m.put(B, V2)

    4: m.put(C, V3)

    how many entries will have the map?

    Since after line 3 the only entry in the will be (A, V2) and is not equals to C the answer is 2 ((A, V2), (C, V3)).

    But what if I do:

    1: m = new HashMap();

    2: m.put(B, V2)

    3: m.put(A, V1)

    4: m.put(C, V3)

    In this case the map will have only one entry: (B, V3).

    Moreover I think that this behavior is a consequence of implementation details and is not required from specification.

    Implementing the equal method this way is a violation of the equals contract (the transitivity is mandatory), so we cannot expect that the library will work very well with this class.'
  replies: []
- id: 9676
  author: Jan Ouwens
  date: '2013-02-15T00:40:13'
  content: 'I agree with Andrea. There''s no way to make this work correctly w.r.t. transitivity. It breaks the contract, and this will lead to subtle bugs that are hard to find.

    And as long as equals is incorrect, any concerns about its performance are irrelevant.

    Implementing equals is harder than it looks. I wrote a little tool that can help test equals and hashCode: http://code.google.com/p/equalsverifier/   :)'
  replies: []
- id: 9677
  author: Adam Batkin
  date: '2013-02-15T04:21:38'
  content: 'Seems reasonable to me. Of course the problem left some wiggle room, so I documented my assumptions at the top:

    https://gist.github.com/abatkin/4960322'
  replies: []
- id: 9678
  author: Answer to the &#8220;School&#8221; challenge &laquo; Otaku, Cedric&#039;s blog
  date: '2013-02-16T15:44:17'
  content: '[...] I&#8217;m happy to see mostly correct answers to the School coding challenge. [...]'
  replies: []
- id: 9679
  author: Daniel Spiewak
  date: '2013-02-19T15:10:14'
  content: 'case class School(name: Option[String], nick: Option[String])

    The problem is ambiguous in that no equality value is specified in the case that the names match but the nicknames conflict.  Absence of a nickname/name is treated as an independent value to avoid incoherent properties like what is mentioned in previous comments.'
  replies:
  - id: 9681
    author: Cedric
    date: '2013-02-19T15:13:00'
    content: '@Dan: Really? I thought this was pretty clear:

      "two Schools are identical if they either have the same name or the same nickname"'
    replies: []
- id: 9680
  author: Daniel Spiewak
  date: '2013-02-19T15:11:19'
  content: 'Another option, btw, would be to do something like the following:

    case class School(names: Either[String, String])

    This makes it very clear that we are *only* considering either the nickname or the name, but not both.  It also enforces that at least one of them is specified.'
  replies: []
- id: 9682
  author: Jim White
  date: '2013-03-08T22:51:24'
  content: 'So more than one school will never use the same nickname?  What about all those "Aggies"?  What is a real application of this problem where name is not unique?

    Okay, challenge on.  Here''s my second and final answer.  hashCode and equals are both correct and School equality is that they match in either name or nickname.

    https://gist.github.com/jimwhite/5123370'
  replies: []
- id: 9683
  author: Jim White
  date: '2013-03-09T22:05:00'
  content: As I was coding that good answer to the challenge I realized that it was indeed a legitimately good pattern and have added a more general solution to that gist.  The essence of the challenge is an object with more than one, all equally good and transitively closed, identifying key.  The confusing thing (to me anyway) in this was the way the problem was posed.  It is very simple when designing in terms of graphs but I'm still uncertain of why/when I would think of this when doing object-oriented design.
  replies: []
---

This coding challenge is a bit different from the previous one ([[1]](http://beust.com/weblog/weblog/2008/08/28/coding-challenge-wrap-up/) [[2]](http://beust.com/weblog/weblog/2008/06/27/)) because it is shorter and also a bit more closely tied to Java. 

A `School` has either a `name` ("Stanford") or a `nickname` ("UCSD") or both. 

Your task is to write `equals()` and `hashCode()` methods for the `School` class that satisfy the following requirement: two Schools are identical if they either have the same name or the same nickname.
