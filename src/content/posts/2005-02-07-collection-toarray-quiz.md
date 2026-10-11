---
title: Collection.toArray() quiz
date: '2005-02-07T22:27:37'
slug: collection-toarray-quiz
categories:
- Java
comments:
- id: 3091
  author: Reader
  date: '2005-02-08T02:50:05'
  content: Cedric, URL in post has "mailto:" protocol
  replies: []
- id: 3092
  author: Valery Silaev
  date: '2005-02-08T02:52:12'
  content: More on this and many other issues with generics http://www-106.ibm.com/developerworks/java/library/j-jtp01255.html
  replies: []
- id: 3098
  author: Euxx
  date: '2005-02-08T22:48:47'
  content: '<strong>Bytecode tales. Erasure of Collection.toArray() method.</strong>

    Cedric  is objecting on  Martin''s comments  on generics in Collection interface. Cedric is saying that

    Existing 1.4 code would break with this definition.

    Try to implement this method for all Collections.

    Probably ''m missing something. L'
  replies: []
- id: 3099
  author: Euxx
  date: '2005-02-08T22:49:03'
  content: '<strong>A non-intrusive way to keep type information after erasure.</strong>

    Major problem with erasure-based generic implementation is that instance is not receiving information on generic type upon creation. Reason is the  NEW  bytecode instruction that has a single parameter, which is pointer to a  CONSTANT_Class  entry in a co'
  replies: []
- id: 3093
  author: toku
  date: '2005-02-09T00:02:24'
  content: 'Sorry for offtopic...

    Why you have a name OTAKU? Do u have jap. origins?'
  replies: []
- id: 3094
  author: thefrog
  date: '2005-02-09T02:44:33'
  content: I believe it just doesn't matter what type you use on the 'remove' signature. It's valid to try to remove objects that are not in the collection, so what additional safety do you gain from restricting the type of the remove parameter?
  replies: []
- id: 3095
  author: Kyle Lahnakoski
  date: '2005-02-09T05:36:01'
  content: '> so what additional safety do you gain from

    > restricting the type of the remove parameter?

    To catch brain-farts.  I could easily imagine typos (or copied code) that removes the wrong object from a Collection.  The static checks could catch most of those problems.'
  replies: []
- id: 3096
  author: Tom Hawtin
  date: '2005-02-09T13:05:32'
  content: 'Kyle: It''d restrict the use of wildc?rds in collection generic parameters. I ought to be able to remove an object from a collection, even if the exact type parameter type is unknown.

    Something does irritates me, however. Although there is a common idiom that a key that maps to null in a Map is the same as checking if the map contains the key, I can still place null values in a Map if I so wish (given a suitable implementation). But try putting nulls in a Queue. What''s the difference?'
  replies: []
- id: 3097
  author: fungus toenail treatment
  date: '2006-09-28T08:18:46'
  content: big thank
  replies: []
---

Martin spotted a [ few inconsistencies in the new Generic Collections](http://split-s.blogspot.com/2005/02/java-5-collections-inconsistencies.html) and wonders why...

> But a couple of aspects of the new generics-enabled collections framework annoy me. For example, the Collections interface is declared as Collection<E> and the add method, for example, is correctly declared as:  
>      boolean add(E object)  
>  So I cannot help but wonder why, then, is remove declared as:  
>      boolean remove(Object object) 

and

> Similarly, the toArray() method should be declared as follows:  
>      E[] toArray()  
>  Instead of:  
>      Object[] toArray() 

Rest assured, this is not an oversight, these methods were designed this way for two very good reasons.

Can you see why?

Here are hints if you get stumped (in white):

  1. Existing 1.4 code would break with this definition.
  2. Try to implement this method for all Collections.
