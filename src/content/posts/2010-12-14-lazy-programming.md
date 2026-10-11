---
title: Lazy programming
date: '2010-12-14T12:33:09'
slug: lazy-programming
categories:
- General
comments:
- id: 8591
  author: Guillaume Laforge
  date: '2010-12-14T12:56:49'
  content: 'Indeed, that''s why I encourage people to use types in Groovy especially in APIs (method signatures, parameters, return types, etc), as it''s a contract that helps everybody, the IDE, the users of the API, also improves documentation, etc.

    Unfortunately, not all dynamic languages support "optional typing" (as we often call it in Groovy).'
  replies: []
- id: 8592
  author: Sony Mathew
  date: '2010-12-14T13:35:16'
  content: 'Finally, someone decides to shine real data on what has been obvious to most of us static worshipers - Nice!  Hope this puts an end to the dynamic vs static  debate once and for all.  Now only if someone would do the same for AOP and IoC containers.

    p.s just kidding - Dynamic languages and AOP and IoC containers have a lot to offer - just not as much as they like to pretend..'
  replies: []
- id: 8593
  author: Eric P
  date: '2010-12-14T14:15:23'
  content: 'Echoing G. Laforge - you can definitely do this in Groovy and it''s great for coding in your IDE.

    The one place where I wish this this was possible was Grails autowiring.

    For example, in a controller you can have a declaration like

    def fooService

    and it will autowire the service for you at run time.  But your IDE can''t autocomplete, typecheck, etc for you..   I''ve actually found myself doing things like this

    FooService fooService

    //def fooService

    so I get the IDE goodness while in the heat of coding and then reversing the comments when I get ready to run.'
  replies: []
- id: 8594
  author: matt b
  date: '2010-12-14T16:26:10'
  content: "Funny, I find myself wanting to type\n     def raiseSalary(Employee employee)\ninstead"
  replies: []
- id: 8595
  author: Josh Berry
  date: '2010-12-14T17:32:43'
  content: I think there is something to be said for not having to include the types, though.  Consider a checkin that changed the actual type of Employee to be something like CurrentEmployee that still type checked, but didn't require touching every place that employee was used in the code.  (That is, I still like static typing, but could live without some of the places we have to specify the types.)
  replies: []
- id: 8596
  author: Alexandre Bertails
  date: '2010-12-14T17:35:23'
  content: 'As you said, there is *always* a type in the developer''s mind. Whatever dynamic language folks pretend. And yes, it''s true *even* with the so-called duck-typing. Just call it structural typing.

    So one just has to use a language with type inference to avoid annotating types, but still with a good type system that will allow a lot of well-typed programs. Luckily for us, research in this area has been doing well the past 20 years and gave us many languages where you never have to sacrifice type safety.

    "I know, amazing, right?"'
  replies: []
- id: 8597
  author: Cedric
  date: '2010-12-14T17:36:17'
  content: 'Josh: the places where I can live without having to specify the types is when the compiler can figure it out for me, i.e. type inference.

    Completely changing the type in the way you describe sounds very rare (isn''t it basically Duck Typing? Something I flagged as dangerous in a previous post [1]), and even so, a refactoring should be able to do this automatically and safely for you.

    [1] http://beust.com/weblog/weblog/2008/02/11/structural-typing-vs-duck-typing/'
  replies: []
- id: 8598
  author: '&nbsp; Programaci??n perezosa&nbsp;-&nbsp;Observatorio de Grails'
  date: '2010-12-15T00:47:48'
  content: '[...] informaci??n sobre Lazy programming (traducido al [...]'
  replies: []
- id: 8599
  author: Gavin Bong
  date: '2010-12-15T02:58:10'
  content: "When I started out in python, I would litter my code with isinstance checks.\ndef explode(self, other):\n    if isinstance(other, Bus):\n        return other.detonate()\n    else:\n        return NotImplemented\nThen everyone started berating me for writing non-pythonic code."
  replies: []
- id: 8600
  author: G. Ralph Kuntz, MD
  date: '2010-12-15T04:25:36'
  content: 'I agree with Cedric in #7. Type inference is the way to go (Scala, C#, F#, etc.) I should not have have to tell the compiler what it already knows (or can easily figure out).'
  replies: []
- id: 8601
  author: Craig Tataryn
  date: '2010-12-15T06:35:54'
  content: 'One thing I really wished Java would have adopted is a "lazy" declaration syntax where I could write:

    employee = new Employee();

    or if I wanted to be explicit, then fall back to the old way:

    Employee employee = new MarketingEmployee();

    I''ve always hated writing that extra Type at the beginning of variable declarations, and as I do more and more Scala it''s become even more hard to write that extra Type :)

    So, you can have static typing + be lazy in Scala.'
  replies: []
- id: 8602
  author: Josh Berry
  date: '2010-12-15T06:50:16'
  content: 'Yeah, I realized that was type inference.  My point is simply that in some languages, it can infer everything.   Scala is probably some people''s first introduction to it (was mine), but I understand that Haskel goes all the way.

    And, sure, you can have an IDE''s refactoring tool do the changes for you, or you could get a better compiler that can verify them for you.  :)  I see no reason to really prefer one over the other, so why not go for both?  (Well, I do like that with inference, I could split a class in two and not have to really touch half of the places it was being used.  Makes the checkin much clearer.)'
  replies: []
- id: 8603
  author: jmarranz
  date: '2010-12-15T07:25:52'
  content: 'My opinion about this in your twin article.

    http://java.dzone.com/articles/lazy-programming#comment-42993'
  replies: []
- id: 8604
  author: Oleg Tsvinev
  date: '2010-12-15T08:14:14'
  content: 'I think the real lazy people here are those who design languages and write compilers.

    Scala is a statically-typed language yet compiler goes extra mile to infer types in many cases, which places Scala in a class by itself. It was possible only because of combined effort of the language and compiler design team, and the fact that the language was designed from scratch.

    If learn to absolve from the need of knowing the type every time we read code we''ll have less things to worry about. I don''t know how easy it would be for me, I''m a statically-typed person myself :)

    Lazy are those programmers who don''t want to adopt a new languages and whine about missing features in their favorite ones, like "Closures in Java OMG!"

    And then again, we cannot realistically afford switching a language once a new paradigm is invented.

    This whole thing reminds me of conflict between the law and the real life: laws often reflect realities of the past while modern realities are often not reflected in the law. The common reason is that both laws and programming languages are secondary to the real life realities.'
  replies: []
- id: 8605
  author: Geir
  date: '2010-12-15T15:53:33'
  content: 'But it could be a string!  or a Socket!  or an integer!

    Strong types are the hobnailed boot of the Enterprise Man on the neck of the Agile Code Poet

    geir'
  replies: []
- id: 8606
  author: Henning Koch
  date: '2010-12-16T10:43:03'
  content: 'My experience from dropping a decade of Java experience for Ruby:

    - Calling wrong methods on the wrong objects is not an issue. Ever. Seriously.

    - Contrary to what Alexandra said, you don''t always "have a type in mind anyway". Languages like Ruby give you so many options to share behavior you stop caring about types. It''s all about exchanging messages.

    - Tests give you so much more value any static checking could ever provide, so why spend keystrokes on weak compiler checks when you can have the good stuff.'
  replies: []
- id: 8607
  author: Cedric
  date: '2010-12-16T10:56:38'
  content: 'Henning,

    Substituting "messages" for "types" solves nothing: it''s still useful to know statically what messages a certain object responds to.

    As for tests, you are seeing it backward: why would I have to manually write tests for something that the compiler can check for me? I''d rather save my time writing tests that actually test complex stuff.'
  replies: []
- id: 8608
  author: Henning Koch
  date: '2010-12-16T12:16:38'
  content: '@Cedric: You wouldn''t write a test that merely checks whether an object responds to a method. When your test describes how a method should behave, a compiler checking whether type X responds to method Y adds little value.'
  replies: []
- id: 8609
  author: Cedric
  date: '2010-12-16T12:18:11'
  content: Agreed, but again, the value of static typing is not so much in tests but in the tooling and improved understanding that it enables.
  replies: []
- id: 8610
  author: Henning Koch
  date: '2010-12-16T12:24:25'
  content: I do miss the tooling I have with Java. E.g. renaming a method takes more time, which cuts into the productivity gains from working without static typing. There is a tradeoff here, and I assume I found my sweet spot to be somewhere else than you did.
  replies: []
- id: 8611
  author: Bill K
  date: '2010-12-17T10:25:55'
  content: 'In Java I often think it might be better that you can''t be lazy about things like this:

    ArrayList names=new ArrayList();

    because you really shouldn''t do that!  What you should do is:

    List names=new ArrayList();

    or possibly

    Queue names=new ArrayList();

    The type of the variable is NOT redundant, and shouldn''t be assumed.

    It seems like once you start to allow a simplification, everybody thinks it''s the only way and doesn''t take the time to notice they could be doing it better.

    My most obvious case is anonymous inner classes as swing listeners.  Quite a few times in my career I''ve seen people cut &amp; paste anonymous inner classes with little tweaks for the listener.  I''ve cut out 80% of the GUI handling code in these cases by instantiating an actual, named class.

    It works great and it''s the way it SHOULD be done almost all the time (Most classes with more than one listener on a screen are going to reuse some code), but people get in the habit of using the shortcut and forget that there is a correct way.

    Another case is writable properties--you add variables and it''s just so easy to make it a settable property.  Now you''ve got a mutable class with an internal variable type that you can''t easily replace when you should be striving for immutable types, hiding your variables and manipulating them from within your class only.  Again, they are not bad in many cases, but they promote'
  replies: []
- id: 8612
  author: Josef B.
  date: '2010-12-18T07:42:43'
  content: 'World War III:

    send( Marty.launch())

    Awww! Shucks, I meant,  send(Marty.lunch()) ....

    What''s that bright light out there?

    Josef'
  replies: []
- id: 8613
  author: Eivind Eklund
  date: '2011-01-07T18:24:29'
  content: '@Cedric

    My opinion, from about a decade of of experience with languages of the Java/C++/Pascal style and another decade experience programming in dynamically typed languages :

    The value of Java/C++ styles types is overrated.  The reason that they seem valuable to most Java/C++ programmers without extended experience in other paradigms is that they are used to thinking inside the Java/C++ paradigm.  They don''t have the knowledge/working style to exploit the benefits they could get from dropping the types, and they don''t have much practice with the techniques to deal with code without the benefit of their type assisted tools - so they''re hit on both ends, losing the benefits and taking extra costs.  For instance, type assisted refactoring. I find type assisted refactoring in Java to be nice - but usually not nice enough that I bother to fire up an IDE that support it.  The startup time is just too expensive compared to just doing the refactoring directly, manually in my usual tools (vim and the shell).

    As mentioned above, types seldom catch errors.  When you''re just a little bit used to writing in a dynamic language, you hardly ever make these errors, and they''re trivial to fix when they happen (an immediate, simple run time error when you run your test.)

    And, in my opinion, the cost in readability is higher than the value in "certainty".  The cost of visually scanning the type information exceeds the value of the information they provide.

    The idea that "it''s just laziness in typing characters that makes people want to not have types, because people mostly write code that could be typed with a C++/Java style type system" is malformed.  It''s the *mostly* in there.  A little violation goes a long way.

    Some examples of the value of violations:

    Earlier today I was mucking about with EasyMock in Java.  I was trying to partially mock a class (as I had one method in the class I wanted to mock, while I was testing another method in the same class).  The class under test calls some other method in itself from its constructor.

    With Python, I could either trivially do this using just the built in functionality with

    myobj = MyObject()

    myobj.amethod = lambda s: True

    ... continue doing stuff here ...

    or use Mox, which is strongly inspired by EasyMock, and write

    myobj = MyObject()

    mox.StubOutWithMock(myobj, "amethod")

    myobj.amethod.AndReturn(True)

    With Java, I can''t do this without rewriting EasyMock.  EasyMock has the ability to construct objects and mock only some methods in them - but that requires a lot of trickery, and only works *after* the constructor has been called.

    Some more examples:

    When I write a program, I often start with careless types and then refine them as needed.  In a runtime checked language, I can trivially change them around, the entire calling hierarchy being taken care of at once.  With Java, I can''t - I have to fix each level.

    When I''m testing something in Ruby or Perl or Python, I can pass in a completely fake object that responds to *just* the protocol under test, with a real implementation.  In java, I can''t.

    When I''m programming in Perl or Ruby or Python, I can start implementing an interface from a couple of tests.  I don''t have to stub out all of the interface and create lots of noise; I can just start writing some test code, and then handle the first part of the test first, and then the next part - without having to stub out the methods that are called later in the test.  In a statically typed language, I have to fill out fake code.

    When I''m writing something in Perl/Python/Ruby, I can trivially build an in-program datastructure of arrays/hashes, without the need for these to be typewise well formed.  This allows me to hack together a quick little interpreter for my problem, and then run that.  In Java, I can''t - if I''m to do that, I need to go outside Java.  Java programmers often turn to XML for this kind of thing, as they need things to be dynamic - and that''s much worse than having it directly in the program.

    All of these things are enabled by avoiding (naive) static types.  They''re actually all theoretically statically typeable (even the one where I call methods that don''t exist, as the earlier failure could be inferred and the lack of implementation of latter calls ignored).  However, they''re a problem in the real languages we use today.  In theory, a static language with a sufficiently flexible type system would be better than a dynamic language - I''ve just not yet programmed in one that I feel is better in practice.  (Haskell may change my mind on that, I''ve seen it change the mind of other people.)'
  replies: []
- id: 8614
  author: Nathan Zook
  date: '2011-01-13T17:10:43'
  content: "Interesting post.  It puts a lot of perspective on your \"Rails will never go mainstream.\" comments a few years ago.\nA couple of years into Ruby, I commented to a friend that I was uncomfortable with open classes.  His response was to ask me if I was okay with objects changing.\nConsider the following snippet:\nx = Object.new\nclass &lt;&lt; x\n  def bar\n    &quot;Suprise!&quot;\n  end\nend\nSo now x has a method bar, which returns a string.  Question:\nWhat is x&#039;s class, really?\nIf we define a class by the set of methods (including signatures), then clearly, x is in a class by itself.\nDoes &quot;structured&quot; typing help?  Not really.  The true signature of a method includes the methods which are be a called on the returns of the methods used.  No end to that rabbit hole.\nRuby&#039;s power comes from its open classes.  It&#039;s why things like cucumber &amp; rspec &amp; Rails are ours.  It&#039;s charm comes from its clean code, which is to a great extent comes\
    \ from its duck typing which is required by its open classes.\nDon&#039;t get me wrong, duck punching is a dangerous sport.  But now that I&#039;ve wielded the power, I&#039;m not going back.\nBTW, my previous language was assembly.   Now THERE is your strongly-typed language!"
  replies: []
- id: 8615
  author: Henrik Sarvell
  date: '2011-01-14T09:44:29'
  content: For Christ's sake try working with a dynamic language for a year or two and then revisit this post. I think you will feel pretty stupid if you do.
  replies: []
---

[This blog post](http://gnuu.org/2010/12/13/too-lazy-to-type/) shows some interesting data confirming some thoughts that I have harbored about dynamic languages for a while. 

In a nutshell, so called "dynamic languages" seem to be more used because they allow you to type less than because they use really dynamic features. 

Maybe it's because static typing is so ingrained into my brain, but when I write something like: 

```text
def raise_salary(employee)
...
```

I really, REALLY, **REALLY** want to type: 

```text
def raise_salary(Employee employee)
...
```

My fingers are just screaming to add this type information. Same for local variables or return types. It's in my head, it's in my code, why can't I just give this information to the compiler, the tools and to future readers and reviewers of this code? It's really not that much to type and it buys me so much. Think about it: refactorings that are guaranteed 100% correct. 

I know, amazing, right?
