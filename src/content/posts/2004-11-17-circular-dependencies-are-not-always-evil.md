---
title: Circular dependencies are not always evil
date: '2004-11-17T10:30:26'
slug: circular-dependencies-are-not-always-evil
categories:
- Java
comments:
- id: 2755
  author: Brian Sletten
  date: '2004-11-17T11:19:39'
  content: 'To further expand your point, I think cyclical dependencies between "Class Categories" is not a problem. This is Booch speak for classes that live and work and are reused together.

    Ideally your class categories are modularized well so that these dependencies are within a particular package. The real maintenance issue is when these dependencies start to span package boundaries which is when refactoring becomes a good idea.'
  replies: []
- id: 2756
  author: Noah Campbell
  date: '2004-11-17T11:50:23'
  content: 'You have a typo in your code example

    public class Account implements Account {

    }

    should read:

    public class Account implements IAccount {

    }'
  replies: []
- id: 2757
  author: Mike Spille
  date: '2004-11-17T11:56:31'
  content: Cedric, I wish upon you good tidings, and the patience of a saint when Michal reads this blog entry :-)
  replies: []
- id: 2758
  author: ''
  date: '2004-11-17T12:31:44'
  content: I'm not entirely sure but isn't double dispatching in most object-oriented languages an example of circulare dependencies? The visitor pattern requires double dispatching in java from what I know. So, if this is all true than you have another argument against why circular dependencies is a very real need.
  replies: []
- id: 2759
  author: Jonathan Ellis
  date: '2004-11-17T14:23:41'
  content: 'I don''t follow your example.

    Presumably some user of Account is calling getOwner or the whole thing is pointless.  How''s he supposed to get this information in your interfaced version?'
  replies: []
- id: 2760
  author: MGuerin
  date: '2004-11-17T16:26:24'
  content: 'Using interface as much as possible is not only the right choice...but the better choice in order to reduce dependency cycles between classes.

    As Martin Fowler stated :"Putting abstract classes in supertype package is good way of breaking cycles in the dependency structure"

    This is based on Indirection Pattern.

    I guess Cedric had in mind the following:

    public interface IPerson {

    List getAccounts();

    }

    public  interface IAccount {

    IPerson getOwner();

    }

    public  class Account implements IAccount {

    public IPerson getOwner(){

    //do something

    }

    }

    public class Person implements IPerson {

    public List getAccounts(){

    //do something

    };

    }'
  replies: []
- id: 2761
  author: Michal
  date: '2004-11-18T03:20:08'
  content: 'Cedric!

    >Software fundamentalists are quick to point out >that if you see a cycle in your classes or your >packages, you should immediately remove it.

    Nope - there is no way to actually remove all of them!

    There is a primary reason why interfaces exists in Java in other languages

    http://java.sun.com/docs/books/tutorial/java/concepts/interface.html

    You can see that reason is to define - protocols/contracts which will be then implemented by classes.

    Good interface will expose as much of implementation details as one needs to know how  to code only against the interface without knowing any internals of any class which will ever implement that interface.

    As somebody pointed in my discussion with Mike -  there are such situation when there is no way to avoid cyclical dependencies between classes/interfaces.

    For example this may happen if you have to implement callback methods.

    Now the question is what is better:

    a) define precisely protocol/contract

    using interfaces which will define caller/callee responsibilities in such case.

    b) Hide the fact that such coupling will

    anyway __always__ exists

    My subjective judgment is that a) is better as b) may lead more easily to broken contract when  implementation of calle/caller implementation are not compatible.

    Note  that with my discussion with Mike I was not talking about __that kind__ of cyclical dependencies.

    I was rather talking about runtime cyclical dependencies between components.

    When IT industry will be more matured - it could be that will see applications having 1000s of components and most likely (ideally) you will be using many components which were

    not written by you - you will be able to buy them or use open source components.

    In such scenario you really don''t care how those components were written and how ugly they might be internally.

    You can even not care if they were written in Java, Groovy, C or Assembler.

    What will be interesting for you is if those components cooperate nicely and smoothly

    during the application runtime ...

    You may say that this is a scenario from "dreamland" and this will never happen - I don''t know what will happen in 10-20 years

    but what I know is that cycles in component world are different from cycles between  complie time entities like java classes.

    What many people fail to see that there are different rules to obey when you are writing components then when you are writing ordinary classes.

    For example for some reasons EJB should not use any class from java.io package, yet there is many application deployed with ejbs which perform blocking io operations. Why - and why do they work?

    Simply because this rule is needed to cooperate nicely with other distributed components in distributed and possibly clustered application in the general case. It might be that in particular case this rule can be ignored (nobody can be sure about it). But if you were component vendor (we don''t really have them yet) and you are trying to sell your ejbs that''s the rule which you cannot ignore. You have to obey the contract. As the part of ejb contract you can also expressed if your ejb component is re-entrant. it means that you are able to tell to container - "yes I know about some  cycles and I know how to handle them". If not ejb

    container should not let you execute not declared re-entrant methods calls. That is complex but indeed it is badly needed to feature to have in order to have contract cheching provided by the container.

    But this can be easily simplified but just one rule: components cannot form cycles from the perspective of the container.

    Isn''t that rule easy to understand comparing to that part of ejb spec? And this is something which may certainly might be required by some lightweight containers

    which are trying to offer application safty as the replacement for that elaborated functinality offered by ejb container. Code beauty is important but safety of the code and application safety is far more important aspcect from practical point of view. And both those things can go well together.

    Michal

    P.S.

    Mike - LOL :)'
  replies: []
- id: 2762
  author: ''
  date: '2004-11-18T03:36:46'
  content: 'hi,

    Why would you even want 2 classes in this case ?

    Since both cannot be used without each other

    you could collapse them to 1 class.

    -> problem solved, because self reference is not a problem.

    Regards,

    Markus (http://www.jroller.com/page/nil)'
  replies: []
- id: 2763
  author: Mike Spille
  date: '2004-11-18T09:44:24'
  content: 'Michal, as I mentioned in my blog the more specific you can be, the better people will understand where you''re coming from.  In this case you''ve provided enough background that the issue can actually be discussed rationally :-)

    You''re talking about generic containers, components from many sources, and a sort of large scale component marketplace.  This is of course a valid viewpoint.

    But it bears no resemblance to the sort of development I was talking about.  My examples, and indeed most of my blog, talks about internal IT development of very large applications, where a team specifically owns a very large body of source code.  The design imperatives in such a context are quite different from the component market place you envision.  In my own group, it can be perfectly natural for developers to design components that are designed to work together in concert with each other, and even to have cyclical dependencies on each other.  Even in a larger marketplace, a unified single component API may be exposed to the world by component XYZ, but unbeknownst to you that component may be internally organized with one or more groups of cooperating components internally.  Cyclical dependencies may be inside of that blob of code called a "component", but that fact is hidden from you the user of the component.  Likewise, in IT-developed code some "local" components may be defined
    in a cooperating, mutually depedendent manner, but _nobody cares but the writers of those cooperating components_.  As such this can be a local design choice that has no impact on the large architecture or design.

    This is, I believe, the error in your assertions.  You are asserting effectively that you should treat the large scale (thousands of components) identically to local, tactical development.  I disagree - tactical concerns are quite different from sweeping architectural ones, and indeed good developers can take more liberties on the local scale and simultaneously hide this fact from higher level concerns.

    Software does not have to be a homogenous layer of components all existing at the same level as "peers".  It can also be hierarchical layers of varying abstraction, and with different techniques applied at different levels.'
  replies: []
- id: 2764
  author: Michal
  date: '2004-11-18T11:24:40'
  content: '>This is, I believe, the error in your assertions. >You are asserting effectively that you should treat >the large scale (thousands of components) >identically to local, tactical development. I >disagree - tactical concerns are quite different >from sweeping architectural ones, and indeed good >developers can take more liberties on the local >scale and simultaneously hide this fact from higher >level concerns.

    No! I never expressed such opinion.

    I myself currently devlop an application which is composed from 4 different containers.

    There is for example nothing wrong with j2ee aplication having servlet and ejb containers (that''s not my scenario) and with picocontainer embeded inside servlet container and spring inside ejb container.

    From the beging I was keep telling you that you should not try to generalize some rules (e.g. your rule that cyclical dependcies must be supported by good container) as in some context such rules are simply false or not important.

    Michal'
  replies: []
- id: 2765
  author: Kirk
  date: '2004-11-19T04:19:32'
  content: 'The example you provide is very granular and the inclusion of a circular reference seems natural as it captures an important circular relationship in the abstraction, ownership.

    So clearly in this example, circular dependencies are not only ok, they are quite necessary! But, when we increase the level of granularity beyond objects to components, then I would strongly object to the existance of circular dependencies.

    IME, circular dependencies in components indicate missing or the use of poor abstraction, or the an inability in the design to deliniate roles and responsibilities.

    I think metrics such as Demeter address this idea as it allows for couplings between closely related things and penalizes one for couplings between distantly related things.

    I wrote an bit on efferent and afferent couplings for IBM-DW a few months ago. In that article I used serialization to demonstrate the importance or the effects that these types of couplings can have on the overall maintainability of the code. Clearly, you can have as many circular dependencies in your code as you want. Similarly, the people maintaining serialization can do the same. The whole scheme breaks down if serialization allowed for a circular dependency to exists. For the circular dependency to exist, Sun would have to have knowledge of your code as you''d have to have knowledge of the serialization code. Not only does this constitue a serious violation of encapsulation, it is clearly unworkable.'
  replies: []
- id: 2766
  author: Michael Dressel
  date: '2005-08-15T08:13:43'
  content: 'The person-account example may suggest a situation which makes cyclic

    dependencies a good choice. I would like to point out that this suggestion

    often changes when the bigger picture is taken into account. First of all one

    should define the "interfaces" according to the needs of the users of the

    objects. And in the given example there is not much known about these needs!

    E.g. why should the account know the person in the first place? Probably it

    would turn out that there is a bank knowing accounts and persons?

    Depending on the purpose of the piece of software it may well be that objects

    which in the original example ask the account for the owner may be better off

    asking a bank for the person owning a given account.

    So the cyclic dependency could be resolved by introducing a bank:

    public class Person {

    public List getAccounts();

    }

    public class Account {

    // simply do some accounting

    }

    public class Bank {

    public Person getOwner(Account account);

    }

    Certainly this is by no means a general solution. And this is exactly the point

    I want to make: There is no general solution to all cyclic-dependency

    situations but I''m sure most of them may be resolved e.g. by asking what do

    I want to get out of it in the end?'
  replies: []
- id: 2767
  author: Charles
  date: '2008-02-26T08:43:38'
  content: 'As stated already, the example given is one having an inherently tight and natural relationship, which might not be appropriate to abstract.  It  depends on what responsibilities the Account and Person types will have.  Also, experts reject circular dependency most forcefully in broader contexts than class level.  Circular dependency is always a blunder at component level.

    But the item I most wish to respond to is when you state, "your code is more decoupled but it''s also more complex."  Count-of-types is a poor measure of complexity.  Count-of-relationships is overwhelmingly more telling a measure of complexity.  (And we should really go further to speak of measuring number of specific categories of relationship, but we haven''t the space here.)'
  replies: []
---

[ Mike Spille's article on Inversion of Control containers](http://www.pyrasun.com/mike/mt/archives/2004/11/13/20.07.21/index.html) was, as always, thoroughly researched and quite illuminating.  It also brought up the old issue of cyclical dependencies, which are usually identified as a very ugly practice.  Software fundamentalists are quick to point out that if you see a cycle in your classes or your packages, you should immediately remove it.

I wish it were that simple.

The sad truth is that sometimes, cyclical dependencies are not only necessary, they are actually quite essential and contribute greatly to making your code more readable and maintainable.

The dangers of cyclical dependencies are well-known (stronger coupling, fragile build, etc...) as are the remedies (the introduction of an interface is usually a good start).  For example, the following dependency:

```java
public class Person {
public List<Account> getAccounts();
}
public class Account {
public Person getOwner();
}
```

can be refactored like this: 

```java
public interface IAccount {
}
public class Account implements IAccount {
}
public class Person {
public List<IAccount> getAccounts();
}
```

By introducing an interface, you have decoupled your two concrete classes, which is usually a good thing.

The point of this post is not to offer a critique of this method but to bring up two points:

  * Your code is more decoupled but it's also more complex.
  * The concept of a "cyclical dependency" is highly dependent on the language you are using.



The second point is obvious:  the perception of a "cyclical dependency" is very different in Java and, say, in C++, where you will usually declare and implement two coupled classed in the same file, thereby reducing the physical dependency (but not the logical one).

The first point is more subtle.

In the example code above, you now have three classes where you used to have two.  And two of these three classes need to be kept in sync (`IAccount` must be modified whenever you modify `Account`).  As I said earlier, it is usually a good thing, but not always, as was the case with Mike's `JobDispatcher` example.

I find that most of the time, cycles are created as a consequence of a previous refactoring in which you have been breaking down one complex class into two smaller ones.  There is clearly tension between two goals that are sometimes at odds:  you can't always decrease both the complexity and the "coupledness" of your code (I know it's not a word, sorry, couldn't come up with a better one).  If you improve one, you will probably make the other worse.

Overall, introducing an interface in your code is usually the right choice, but there are some exceptions.  Keep them in mind the next time someone is trying to convince you that your code is evil because two classes have a circular dependency on each other.
