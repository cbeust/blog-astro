---
title: AOP refactoring
date: '2003-12-18T14:50:12'
slug: aop-refactoring
categories:
- Java
comments:
- id: 714
  author: Ramnivas Laddad
  date: '2003-12-18T17:38:00'
  content: 'I agree.

    When JSR-175 becomes a part of Java, AspectJ should (and all indications suggest, it will) support capturing join points based on metadata annotations. When that happens, the getBalance() method will look like:

    @ReadOnly

    public float getBalance() {

    // ...

    }

    And the readOperations() pointcut would be written as (the syntax is speculative):

    pointcut readOperations() : execution(* *.*(..)) && annotation(ReadOnly);

    On a related note, I prefer naming the annotation as ReadOnly (that describes a characteristic of the method) instead of ReadLock (that suggests what implementation should do with it). This way the implementation (aspects, in this case) can make an appropriate choice, such as taking no lock in a single threaded application.'
  replies: []
---

Ramnivas just published the [second part of his AOP refactoring series](http://www.theserverside.com/home/thread.jsp?thread_id=22904) and I have a quick remark on the second second example (listings 3 and 4) where he abstracts the concurrency mechanism in an aspect.

I agree that the business logic that takes care of the concurrency belongs in a separate aspect, but not the pointcut definition. I think this is a very good example where the pointcut definition should be specified inside the code, not separately.

Determining if a method should get a read or a write lock is fundamentally tied to the code inside the method, so I believe this should be specified on the method itself, with an annotation. Using a separate pointcut is inherently fragile because you have to specify the method names inside, which is error-prone because

  * Method names can change.  
 
  * Their inside logic can change (you used to need just a read-only lock and now you need a write lock).



Both these actions will force you to remember to modify your pointcut definition as well. I believe that having an annotation such as  


> @ReadLock  
>  public float getBalance() {  
>  // ...  
>  }  
> 

makes it easier for the developer to maintain his code.
