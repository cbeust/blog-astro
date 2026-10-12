---
title: Dynamic language, refactoring IDE.  Pick one.
date: '2006-10-01T12:16:05'
slug: dynamic-language-refactoring-ide-pick-one
categories:
- General
comments:
- id: 5958
  author: Bob Lee
  date: '2006-10-01T13:21:40'
  content: 'Let''s take your example another step:

    class D

    def init

    ...

    end

    end

    If we rename C.init() and then rename the calls to init() from f1 and f2 (based on runtime information), will f1 and f2 no longer be able to call D.init(), or will we rename D.init(), too?'
  replies: []
- id: 5959
  author: Geoff Wozniak
  date: '2006-10-01T13:59:20'
  content: '"...dynamic languages that allow you to type your variables if you feel like it, and the only language that I can think of that does that at the moment is Groovy."

    For what it''s worth, Common Lisp allows you to declare the types of variables/names, if you feel like it.'
  replies: []
- id: 5960
  author: Alan Green
  date: '2006-10-01T15:03:02'
  content: There's a fair amount of work being done in type inferencing for dynamic languages. PyPy is particularly interesting, sacrificing a small amount of dynamism to allow static analysis - http://codespeak.net/pypy/dist/pypy/doc/coding-guide.html#our-runtime-interpreter-is-restricted-python
  replies: []
- id: 5961
  author: afsina
  date: '2006-10-01T18:47:51'
  content: all those dynamic language users should take a look at IntelliJ IDEA or Eclipse. Has any ruby-python  developer tried changing a method , class , property  , package (if any) name in over 500 files in 2-3 seconds without breaking the code? to those people, if your answer is no, please shut up.
  replies: []
- id: 5962
  author: ramzi
  date: '2006-10-01T23:41:51'
  content: 'I don''t think ruby-python developers are ignorant about the power of Intellij or Eclipse, because most of them(at least those I know) know java and used or still use the tools. I do love Intellij but I really hate writing java code(and I guess those ruby-python programmers feel the same). They just can''t bear it, writing java code all day is so depressing for them, even with Intellij.

    Maybe an intermediary solution as Cedric has suggested is Groovy, or maybe the statically typed language (with type inference) Scala which works on top of java with very good performance'
  replies: []
- id: 5963
  author: Tiago Silveira
  date: '2006-10-02T01:33:11'
  content: 'I guess this kind of refactoring is rarely needed when you write good modules with clear boundaries and nice APIs.

    No IDE will save you if your API gets renamed. API methods are used everywhere and cannot be changed before they''ve been deprecated for a while. Imagine Sun coming and saying that now the hashCode() method should be called hashNumber().

    For the rest, you should deprecate them for a while and point people to the right name.'
  replies: []
- id: 5964
  author: nzhuk
  date: '2006-10-02T05:34:03'
  content: '"...dynamic languages that allow you to type your variables if you feel like it, and the only language that I can think of that does that at the moment is Groovy."

    You can type your variables in Objective-C if you feel like it, but you can as well use the ''id'' type. By using typed variables you give the compiler the opportunity to check your code and issue some warnings about unimplemented methods or nonconformance to some protocol(s), but it''s optional.'
  replies: []
- id: 5965
  author: afsina
  date: '2006-10-02T07:20:07'
  content: ramzi, i like writing Java code. it is expressive, simple and i feel safe. Granted Java has its shortcomings, but it is a fine language especially with a powerful IDE. i can write safer and posibly same speed  code against ruby or python in many type of applications.
  replies: []
- id: 5966
  author: afsina
  date: '2006-10-02T07:22:22'
  content: 'Tiago Silveria:

    public API''s are usually minority of your code. And it is true changing it is not easy. But in a normal application %95 of the code is internal.. And you do name change, method signature change type of refactorings very frequent;y.'
  replies: []
- id: 5967
  author: afsina
  date: '2006-10-02T09:56:32'
  content: 'a comment i saw in the blogs for Tiago:

    http://stuffthathappens.com/blog/2006/10/02/just-dont-write-bugs/'
  replies: []
- id: 5968
  author: Paulo Gaspar
  date: '2006-10-02T09:58:03'
  content: 'Tiago:

    Actually, it is already possible to publish refactorings on at least one Java IDE: Eclipse.

    There is even an interesting experiment going on at the moment, since one of the Eclipse projects (*) published a set of refactorings together with an updated API they have in development.

    Basically, the developers of projects that use that API, just have to play those refactorings against those projects.

    Have fun,

    Paulo Gaspar

    (*) Sorry, I no longer remember which Eclipse project did this but it was mentioned on a recent EclipseZone (http://www.eclipsezone.com/) news piece.'
  replies: []
- id: 5969
  author: Jason Kratz
  date: '2006-10-02T14:09:27'
  content: 'http://wiki.cs.uiuc.edu/RefactoringBrowser/Refactoring+Browser''s+Refactorings

    Seems like a lot more than search and replace to me.

    Jason'
  replies: []
- id: 5970
  author: ''
  date: '2006-10-03T05:56:00'
  content: Actually the smalltalk refactoring browser runs the tests and analyses the code while they are running to determine which names apply to which classes/methods.  Yes, that means you need to have a good test suite.  And I'm sure you would agree that it's worth building a good test suite.
  replies: []
- id: 5971
  author: Simon Brunning
  date: '2006-10-03T06:21:39'
  content: Python has a very good refacting browser available - Bicycle Repair Man.
  replies: []
- id: 5972
  author: Ben Galbraith
  date: '2006-10-03T07:12:20'
  content: Adobe's JavaScript implementation in Flash 9 supports optional typing of variables.
  replies: []
- id: 5973
  author: masklinn
  date: '2006-10-03T07:23:55'
  content: '> All the Smalltalk IDE did for renaming was search and replace, which is, frankly, the best it could do.

    I''m actually pretty sure it wasn''t (it was able to rename symbols along with methods/class names), nor was it "the best it could do". This is the best a Ruby or Python refactoring browser can do if it uses the current language implementations, but Smalltalk is different: it doesn''t need static analysis because it''s image based. The code is live in the image and can be introspected at runtime. This may not be perfect, but it''s pretty darn good and much better than just a search&replace.

    The only way to do this in Python or Ruby would be to create a new, image-based implementation specifically for the refactoring browser.

    > ramzi, i like writing Java code. it is expressive, simple

    Java is neither expressive nor simple. Granted it''s more expressive than assembly and simpler than C++, but these are not known for being respectively expressive or simple.

    > and i feel safe.

    Which is a wrong sense of safety.

    Java/C# IDEs do give you a good number of fairly safe refactorings, but feeling safe means you''re misguided

    > it is a fine language especially with a powerful IDE.

    The main issue I have is that Java nowadays is a fine language _exclusively_ when you have a powerful IDE. Writing Java or C# with Eclipse, IntelliJ or Visual Studio is fine, writing them in a less powerful environment is a pain.

    Now the fun part is that there are languages out there with both the expressiveness and the conciseness of Ruby and the type-safety of Java (which are, in fact, much more type-safe than Java). SML or Haskell come to mind.'
  replies: []
- id: 5974
  author: masklinn
  date: '2006-10-03T07:24:17'
  content: '> All the Smalltalk IDE did for renaming was search and replace, which is, frankly, the best it could do.

    I''m actually pretty sure it wasn''t (it was able to rename symbols along with methods/class names), nor was it "the best it could do". This is the best a Ruby or Python refactoring browser can do if it uses the current language implementations, but Smalltalk is different: it doesn''t need static analysis because it''s image based. The code is live in the image and can be introspected at runtime. This may not be perfect, but it''s pretty darn good and much better than just a search&replace.

    The only way to do this in Python or Ruby would be to create a new, image-based implementation specifically for the refactoring browser.

    > ramzi, i like writing Java code. it is expressive, simple

    Java is neither expressive nor simple. Granted it''s more expressive than assembly and simpler than C++, but these are not known for being respectively expressive or simple.

    > and i feel safe.

    Which is a wrong sense of safety.

    Java/C# IDEs do give you a good number of fairly safe refactorings, but feeling safe means you''re misguided

    > it is a fine language especially with a powerful IDE.

    The main issue I have is that Java nowadays is a fine language _exclusively_ when you have a powerful IDE. Writing Java or C# with Eclipse, IntelliJ or Visual Studio is fine, writing them in a less powerful environment is a pain.

    Now the fun part is that there are languages out there with both the expressiveness and the conciseness of Ruby and the type-safety of Java (which are, in fact, much more type-safe than Java). SML or Haskell come to mind.'
  replies: []
- id: 5975
  author: Ramon Leon
  date: '2006-10-03T08:20:45'
  content: 'You''re talking out of your ass.  Smalltalk does far more than a simple search and replace.  I''ve never once run into a problem with a class renaming accidentally renaming the wrong class.  IntelliJ, by the way, awesome IDE, but even the JetBrains guys will admit they stole it all from Smalltalk.  Having an image, totally changes the nature of dynamic code, Smalltalk is not Ruby, and doesn''t suffer from Ruby''s weaknesses.

    Ramon Leon

    http://onsmalltalk.com'
  replies: []
- id: 5976
  author: Charles Oliver Nutter
  date: '2006-10-03T08:30:53'
  content: 'I have to disagree, because I refuse to give up the fight so easily.

    Say that search and replace gives us a minimum level of refactoring. It''s not anywhere near 100% accurate, but it may be enough for many uses.

    Anything that adds accuracy improves the utility of refactoring. Tim''s suggestion to gather information through unit tests may not ever produce 100% accuracy, but neither will any existing refactoring today when reflection is used. To make matters worse, many frameworks in the Java world provide container intermediates that disconnect an outward interface from an internal implementation. EJBs for example, can''t be refactored with 100% accuracy...you have to change both the bean and its interface. In the case of dependency injection frameworks, you have more legwork...you must refactor the interface for the service being injected and all of that interface''s implementations.

    So a lot of information can be gathered through test runs. A lot more information can be gathered through static analysis, further increasing accuracy.

    Given Cedric''s example, you can already know that the "o" object provides an init method. That narrows it down to types which have init. What''s not shown here is the actual instantiation. A new example is in order:

    class A

    def init; end

    end

    class B

    def init; end

    end

    def foo(o)

    o.init

    end

    def bar(o)

    o.init

    end

    x = B.new

    foo(x)

    bar(x)

    By looking at a whole picture, suddenly the inference capabilities have changed. I can tag the "x" variable ahead of time as being an instance of B, and other than tricks with metaprogramming, I''ll be right a high percentage of the time. Now I know that foo and bar are receiving a B when they''re called. I can determine where foo and bar are because they''re visible in the same script as their calls; it''s not much of a leap to tie them together. So guess what, without even running the code we know what "o" is in both methods, and the refactoring can work just fine.

    Granted, these are still difficult problems to solve, but to say it''s impossible is ludicrous. Just because we can''t solve it today doesn''t mean it will never be solved. Let''s have a little faith, shall we?'
  replies: []
- id: 5977
  author: Slava Pestov
  date: '2006-10-03T10:05:14'
  content: 'Groovy is not the only language which allows optional type declarations, Common Lisp comes to mind. There are many others.

    I posted a rebuttal at http://programming.reddit.com/info/ko17/comments/ckpcw. Basically the problem you highlighted does exist, but only in Smalltalk and Ruby. There are other dynamic languages where usage search and renaming can be done safely.'
  replies: []
- id: 5978
  author: Slava Pestov
  date: '2006-10-03T10:05:33'
  content: 'Groovy is not the only language which allows optional type declarations, Common Lisp comes to mind. There are many others.

    I posted a rebuttal at http://programming.reddit.com/info/ko17/comments/ckpcw. Basically the problem you highlighted does exist, but only in Smalltalk and Ruby. There are other dynamic languages where usage search and renaming can be done safely.'
  replies: []
- id: 5979
  author: notmasklin
  date: '2006-10-03T10:05:58'
  content: 'masklin, re: "Java/C# IDEs do give you a good number of fairly safe refactorings, but feeling safe means you''re misguided"

    I''ll be sure to let you know the next time (which would be the first time) ReSharper screws up a refactoring. I doubt you''ll be hearing from me. Ever.

    re: SML and Haskell - anyone can write a good list of languages that for all intents and purposes don''t exist because they simply don''t matter. Please don''t waste our time here by writing yet another such list.'
  replies: []
- id: 5980
  author: Slava Pestov
  date: '2006-10-03T10:09:28'
  content: 'notmasklin: for me personally, Java doesn''t matter. It is poorly designed, not useful for the things I do, and the community consists of cubicle slaves and idiots. You will of course disagree, so lets just agree that in a discussion on programming languages, all languages matter. You can''t just limit yourself to the mainstream and pretend the state of the art does not exist.'
  replies: []
- id: 5981
  author: notmasklin
  date: '2006-10-03T10:09:44'
  content: 'Jason Kratz - re: "http://wiki.cs.uiuc.edu/RefactoringBrowser/Refactoring+Browser''s+Refactorings

    Seems like a lot more than search and replace to me."

    I just checked that page, read through some of the more commonly executed refactorings, and came away with the following to relate:

    It doesn''t matter how long the list of refactorings is if the most important ones all say that they are only "fairly safe" or "can be safe if" etc.

    All you''ve done by linking that page is provide yet more evidence in support of Cedric''s original post.'
  replies: []
- id: 5982
  author: notmasklin
  date: '2006-10-03T10:12:16'
  content: Slava - for me personally, Java doesn't matter either. But I wasn't speaking personally, I was speaking in terms to what matters to the industry at large, and in that case while languages like Java and C# clearly matter, SML and Haskell equally clearly do not.
  replies: []
- id: 5983
  author: Slava Pestov
  date: '2006-10-03T10:13:44'
  content: 'notmasklin: sure, if you want to work in the "industry" developing web apps from 9 to 5 for minimum wage.'
  replies: []
- id: 5984
  author: Hiren
  date: '2006-10-03T10:43:04'
  content: 'Cedric, Have u ever used Squeak(atleast for more then one day) ? If u dnt know Smalltalk why r u wasting your time showing your ignorance EveryTime !?

    Hiren Thacker

    www.jroller.com/page/daredevil

    For other to know what is impression of Cedric in smalltalkers read:

    http://wilkes.blogspot.com/2005/12/power-of-smalltalk-ides.html

    http://www.cincomsmalltalk.com/blog/blogView?showComments=true&entry=3311489337

    http://www.cdegroot.com/blog/2005/12/08/cedric-who/

    http://astares.blogspot.com/2005/12/todays-smalltalk-ides.html

    http://www.blainebuxton.com/weblog/2005/12/live-vs-dead.html

    http://www.cincomsmalltalk.com/blog/blogView?showComments=true&entry=3311577763'
  replies: []
- id: 5985
  author: Ozten
  date: '2006-10-03T10:52:30'
  content: 'Without talking about a specific smalltalk refactoring browser... In general your statement is misleading. The refactroing takes place against the AST, not some willy nilly search and destroy across the image. Renaming of method definitions in the class and all subclasses are performed. Then uses of that method are renamed. If there is ambiguity ( an unrealated class declares a similar method ), then the user can be warned.

    If you want to dispell the old "Smalltalk did that 30 years ago", then you have to atlest be specific and truthful.

    My eclipse refactorings don''t handle many corner cases, much like a Smalltalk refactoring browser. On the whole, for common refactorings SMALLTALK DID THIS 100 YEARS AGO. For edge cases, ya it sucked and so do tools built on top of staticly typed languages.'
  replies: []
- id: 5986
  author: Ron Pomeroy
  date: '2006-10-03T10:58:01'
  content: 'Lets set the record straight.

    The RefactoryBrowser in Smalltalk does WAY more than search and replace.  I should know.  I''ve used it in VisualAge and VisualWorks for years. It does:

    Extract Method

    Extract Local Variable

    Rename method (lets you browse callers to decide which to rename)

    Rename Class

    Pull up (find code common to subclasses and move to superclass)

    Push down

    Rename instance variable, class variable etc.

    ...and more

    Yea - Java has more in part because of static typing and in part because of the level of development activity.

    Careful what you say on the net - you can ruin your reputation pretty quickly.  Do the research.

    RP'
  replies: []
- id: 5987
  author: Isaac Gouy
  date: '2006-10-03T13:21:04'
  content: '1) Cedric Beust wrote "First of all, that commenter is wrong. All the Smalltalk IDE did for renaming was search and replace..."

    I''m not sure what you mean

    - do you mean that back in 1980 all the Smalltalk IDE did was search and replace

    - do you mean that back in the ''90s all the Smalltalk Refactoring Browser did was search and replace?

    http://st-www.cs.uiuc.edu/users/brant/Refactory/Refactorings.html

    2) I''m curious to understand how the latest Java IDEs deal with method renaming in the face of interfaces and method overriding - what happens to the call-site in "testMethod" if we try to rename "doStuff" in class B

    class Test {

    void testMethod(I i){ i.doStuff(); }

    }

    interface I {

    public void doStuff();

    }

    class A implements I {

    public void doStuff(){ }

    }

    class B extends A {

    public void doStuff(){ }

    }'
  replies: []
- id: 5988
  author: Cedric
  date: '2006-10-03T13:37:25'
  content: 'Hi Isaac,

    Interesting question.  I was pretty sure Eclipse was doing the right thing, but I wasn''t quite sure how.  Turns out it''s a refactoring I''ve never done so far, because it popped a dialog that I had never seen before:  "This method is an implementation of I#doStuff, okay to proceed?".

    And if you say yes, doStuff() gets renamed everywhere:  interface, implementing classes and call sites.

    As for your link to the Smalltalk refactorings, its wording is a bit ambiguous so it''s hard to tell if it proves or invalidates my point, but it does say that it renames "all" senders, which hints that it could possibly rename the wrong senders...

    --

    Cedric'
  replies: []
- id: 5989
  author: Isaac Gouy
  date: '2006-10-03T14:07:14'
  content: 'Hi Cedric

    So it seems like Eclipse is doing "the safe thing" and renaming all the methods and call sites.

    We can choose how to operate the Smalltalk Refactoring Browser:

    - we can do the same thing that Eclipse does "the safe thing" and rename all the methods and call sites

    - we can be specific, the Refactoring Browser will open a dialog listing all the methods with that name and all the methods with call sites. We can  select a method from the list, and see the method text before and after the method-renaming. We can choose to exclude that method from the method-renaming by removing it from the list, and then go ahead and rename the other methods and call-sites.

    I''m still not clear what you meant by "All the Smalltalk IDE did for renaming was search and replace..." - the ancient Smalltalk IDE or the ''90s Refactoring Browser, and what criteria are you using to say X is refactoring and Y is "search and replace"?'
  replies: []
- id: 5990
  author: ''
  date: '2006-10-03T23:54:19'
  content: 'I''d like to mention Scala (http://scala.epfl.ch/) a oo and functional language, which can be compiled to the JVM and .NET or be interpreted! It is very strongly typed, but uses type inference to avoid you from typing the type over and over again!

    A fantastic language, which will become a great one!'
  replies: []
- id: 5991
  author: Henry Story
  date: '2006-10-04T11:34:02'
  content: Netbeans's JackPot allows you to publish refactorings too now. So that library writers who refactor their library can publish the refactorings, thereby allowing all the users of the library to update the changes automatically.
  replies: []
- id: 5992
  author: Sami
  date: '2006-10-05T01:13:35'
  content: Having typed method signatures would instantly remove a big part of the benefits of dynamic languages. The point of leaving types out of signatures is not to save on the amount of typing, it's to enable more powerful polymorphism via "duck-typing". It's a choice you have to make. If you want to get the full benefit from dynamic typing, you will lose having 100% automatic refactoring.
  replies: []
- id: 5993
  author: Carfield Yim
  date: '2006-10-09T00:28:51'
  content: In fact, may be the IDE can pre-compile the dynamic language to some kind of structure and to provide refactoring support as what eclipse does?
  replies: []
- id: 5994
  author: Noah
  date: '2006-10-24T11:38:05'
  content: 'Wow, people who are into these dynamic languages are really religious about it.

    I keep looking at these other languages and have yet to find a single area that makes it worth while to switch.

    Of course I''m a pretty fast typist.  If it took me significantly longer to type "int i" than "i" I might reconsider.

    I suppose that''s a little rude.  I have been at this programming stuff for a while now and I''ve come to really enjoy understanding the language I''m working in.

    When I''m working in a new language, I find that the less restrictive language lets me get going quicker.  I don''t have to worry about getting certain details right.

    For instance, when I was starting at Java, I had a lot of trouble remembering how to write inner classes and even catch certain exceptions.  The syntax changes a little in those places and makes me learn a little more.

    I suppose if I were jumping into a new language and had to deal with Java or something I could just dive into, I''d prefer the quicker language.

    But that''s not the case, I can code java in Notepad almost as well as an IDE except for large refactorings--so I guess that''s why I don''t see an advantage to the "easier" languages.

    There are "Hard" parts to programming:

    unclear documentation: Not knowing what a specific method call will do or not knowing that there is a secret order that methods or functions must be called in...

    Not knowing what calls effect other calls (a common consequence of shared/global variables)

    Confusing rules: a language should consist of the simplest set of rules possible that gets the job done--every new pattern you add is simply something else to remember (damn java typesafe collections).

    "Tricks": Any pattern that is used rarely and not required is a trick.  It may be more fun to use, but that makes it even worse--it means that someone reading your code might not get it--and chances are when you are reading it a year later you''re going to have to puzzle over it for a few minutes.  (When this happens, you generally notice that it could have been done MUCH more clearly with no penalty whatsoever if you hadn''t been so enamoured of the "trick").

    repeating yourself:  Horrible. This is one area where Java lacks, but not by much.  I''ve seen lots of people choose to repeat themselves and I''ve always been able to go in and refactor the repetitions into a single block of code and some data.

    Java is actually a serious offender in this area when it comes to anonymous inner classes--those things are terrible.

    Of course more often than not, that''s the wrong structure to be using, you should be creating a separate class, but in cases where what you really want is an anonymous inner class, java''s syntax is awkward, ugly, unreadable and hard to remember.

    Notice that being verbose and explicit are not "problems" for larger development teams--They are actually huge advantages.  If you are explicit it means that people will make less mistakes and have to guess less.  If they are a little more verbose it means that your code will be more readable.

    And by the way, if you are one of the many people posting here that think that Cedric was wrong about refactoring dynamic languages, you completely missed the point.  It''s not that you couldn''t get most of it, or you couldn''t blindly refactor all methods, it''s the fact that you CANNOT for CERTIAN identify EXACTLY every method that might have to be changed.

    If you are saying java isn''t much better--you don''t get it even more.  Java is deterministic--you know for absolute certain which methods extend/will be replaced by what.  This is deliberate.  This is a huge advantage.  A great thing.  Java deliberately doesn''t let you override arbitrary methods from arbitrary classes without knowing SOMETHING about the class you are overriding. that would be ridiculous for certain development projects--perhaps most but not all, for sure.

    I suppose my conclusion would be that if you really don''t want to understand your language, don''t want to/aren''t good at "Design" or if you just want to throw something together and make it work, you''re great with a dynamic language, but don''t assume that makes it a great professional team language for huge projects.  Issues like Refactoring grow exponentially with project size.'
  replies: []
- id: 5995
  author: Noah
  date: '2006-10-24T11:38:47'
  content: 'Wow, people who are into these dynamic languages are really religious about it.

    I keep looking at these other languages and have yet to find a single area that makes it worth while to switch.

    Of course I''m a pretty fast typist.  If it took me significantly longer to type "int i" than "i" I might reconsider.

    I suppose that''s a little rude.  I have been at this programming stuff for a while now and I''ve come to really enjoy understanding the language I''m working in.

    When I''m working in a new language, I find that the less restrictive language lets me get going quicker.  I don''t have to worry about getting certain details right.

    For instance, when I was starting at Java, I had a lot of trouble remembering how to write inner classes and even catch certain exceptions.  The syntax changes a little in those places and makes me learn a little more.

    I suppose if I were jumping into a new language and had to deal with Java or something I could just dive into, I''d prefer the quicker language.

    But that''s not the case, I can code java in Notepad almost as well as an IDE except for large refactorings--so I guess that''s why I don''t see an advantage to the "easier" languages.

    There are "Hard" parts to programming:

    unclear documentation: Not knowing what a specific method call will do or not knowing that there is a secret order that methods or functions must be called in...

    Not knowing what calls effect other calls (a common consequence of shared/global variables)

    Confusing rules: a language should consist of the simplest set of rules possible that gets the job done--every new pattern you add is simply something else to remember (damn java typesafe collections).

    "Tricks": Any pattern that is used rarely and not required is a trick.  It may be more fun to use, but that makes it even worse--it means that someone reading your code might not get it--and chances are when you are reading it a year later you''re going to have to puzzle over it for a few minutes.  (When this happens, you generally notice that it could have been done MUCH more clearly with no penalty whatsoever if you hadn''t been so enamoured of the "trick").

    repeating yourself:  Horrible. This is one area where Java lacks, but not by much.  I''ve seen lots of people choose to repeat themselves and I''ve always been able to go in and refactor the repetitions into a single block of code and some data.

    Java is actually a serious offender in this area when it comes to anonymous inner classes--those things are terrible.

    Of course more often than not, that''s the wrong structure to be using, you should be creating a separate class, but in cases where what you really want is an anonymous inner class, java''s syntax is awkward, ugly, unreadable and hard to remember.

    Notice that being verbose and explicit are not "problems" for larger development teams--They are actually huge advantages.  If you are explicit it means that people will make less mistakes and have to guess less.  If they are a little more verbose it means that your code will be more readable.

    And by the way, if you are one of the many people posting here that think that Cedric was wrong about refactoring dynamic languages, you completely missed the point.  It''s not that you couldn''t get most of it, or you couldn''t blindly refactor all methods, it''s the fact that you CANNOT for CERTIAN identify EXACTLY every method that might have to be changed.

    If you are saying java isn''t much better--you don''t get it even more.  Java is deterministic--you know for absolute certain which methods extend/will be replaced by what.  This is deliberate.  This is a huge advantage.  A great thing.  Java deliberately doesn''t let you override arbitrary methods from arbitrary classes without knowing SOMETHING about the class you are overriding. that would be ridiculous for certain development projects--perhaps most but not all, for sure.

    I suppose my conclusion would be that if you really don''t want to understand your language, don''t want to/aren''t good at "Design" or if you just want to throw something together and make it work, you''re great with a dynamic language, but don''t assume that makes it a great professional team language for huge projects.  Issues like Refactoring grow exponentially with project size.'
  replies: []
- id: 5996
  author: Paul Beckford
  date: '2006-11-28T10:37:07'
  content: 'Hi Cedric,

    I agree. But what I think you''ve stumbled on here is a language smell implicit in static OO languages. The implicit assumption is that class and type are the same thing. So just because C is a class with a menthod init, it does not necessarily imply that the init method will/should have different semantics to the method with the same name in the class D say.

    Infact methods with the same names with the same semantics but different implementations is what is comonly known as polymorphism.

    In static languages the concept of polymorphism is constrained to objects that share a common implementation through their class hierarchy.

    Is this true polymorphism? I want different implementatons of the same thing, but they must share a common implementation? Hmmm....

    To find out how this should be done, take a look at Strongtalk:

    class C &lt;INITABLE&gt;

    def init

    ...

    end

    end

    class D &lt;INITABLE&gt;

    def init

    ...

    end

    end

    Here the idea of type and implementation (class) are clearly seperated. Using a dynamic language like Strongtalk with type anotations seperate from Class, you can gain the benefits of the "rename all semantically equivalent methods" refactor, AND have true polynorphism (different forms, no shared implementation). So C and D could share a common type but be completely unrelated classes.

    As for me, I would rather have pure OO semantics, and do the type stuff in my head if need be. After all the most powerful static analysis tool I know of is my brain.

    BTW. Java achieves this seperation of concerns to some degree with the idea of Interface - where it is used it can lead to some pretty flexible late bound code. Dynamic languages just take this idea  to its ultimate conclusion. If the interface (message signatures and their semantics) fit then the object is of the right type. If it looks like a Duck and quacks then ...I guess its a duck, with or without the annotation to prove it!

    Paul.'
  replies: []
- id: 5997
  author: Paul Beckford
  date: '2006-11-28T10:37:39'
  content: 'Hi Cedric,

    I agree. But what I think you''ve stumbled on here is a language smell implicit in static OO languages. The implicit assumption is that class and type are the same thing. So just because C is a class with a menthod init, it does not necessarily imply that the init method will/should have different semantics to the method with the same name in the class D say.

    Infact methods with the same names with the same semantics but different implementations is what is comonly known as polymorphism.

    In static languages the concept of polymorphism is constrained to objects that share a common implementation through their class hierarchy.

    Is this true polymorphism? I want different implementatons of the same thing, but they must share a common implementation? Hmmm....

    To find out how this should be done, take a look at Strongtalk:

    class C &lt;INITABLE&gt;

    def init

    ...

    end

    end

    class D &lt;INITABLE&gt;

    def init

    ...

    end

    end

    Here the idea of type and implementation (class) are clearly seperated. Using a dynamic language like Strongtalk with type anotations seperate from Class, you can gain the benefits of the "rename all semantically equivalent methods" refactor, AND have true polynorphism (different forms, no shared implementation). So C and D could share a common type but be completely unrelated classes.

    As for me, I would rather have pure OO semantics, and do the type stuff in my head if need be. After all the most powerful static analysis tool I know of is my brain.

    BTW. Java achieves this seperation of concerns to some degree with the idea of Interface - where it is used it can lead to some pretty flexible late bound code. Dynamic languages just take this idea  to its ultimate conclusion. If the interface (message signatures and their semantics) fit then the object is of the right type. If it looks like a Duck and quacks then ...I guess its a duck, with or without the annotation to prove it!

    Paul.'
  replies: []
- id: 5998
  author: Paul Beckford
  date: '2006-11-28T10:39:17'
  content: 'Hi Cedric,

    I agree. But what I think you''ve stumbled on here is a language smell implicit in static OO languages. The implicit assumption is that class and type are the same thing. So just because C is a class with a menthod init, it does not necessarily imply that the init method will/should have different semantics to the method with the same name in the class D say.

    Infact methods with the same names with the same semantics but different implementations is what is comonly known as polymorphism.

    In static languages the concept of polymorphism is constrained to objects that share a common implementation through their class hierarchy.

    Is this true polymorphism? I want different implementatons of the same thing, but they must share a common implementation? Hmmm....

    To find out how this should be done, take a look at Strongtalk:

    class C &lt;INITABLE&gt;

    def init

    ...

    end

    end

    class D &lt;INITABLE&gt;

    def init

    ...

    end

    end

    Here the idea of type and implementation (class) are clearly seperated. Using a dynamic language like Strongtalk with type anotations seperate from Class, you can gain the benefits of the "rename all semantically equivalent methods" refactor, AND have true polynorphism (different forms, no shared implementation). So C and D could share a common type but be completely unrelated classes.

    As for me, I would rather have pure OO semantics, and do the type stuff in my head if need be. After all the most powerful static analysis tool I know of is my brain.

    BTW. Java achieves this seperation of concerns to some degree with the idea of Interface - where it is used it can lead to some pretty flexible late bound code. Dynamic languages just take this idea  to its ultimate conclusion. If the interface (message signatures and semantics) fit then the object is of the right type. If it looks like a Duck and quacks then ...I guess its a duck, with or without the annotation to prove it!

    Paul.'
  replies: []
- id: 5999
  author: Paul Beckford
  date: '2006-11-28T10:40:41'
  content: 'Hi Cedric,

    I agree. But what I think you''ve stumbled on here is a language smell implicit in static OO languages. The implicit assumption is that class and type are the same thing. So just because C is a class with a menthod init, it does not necessarily imply that the init method will/should have different semantics to the method with the same name in the class D say.

    Infact methods with the same names with the same semantics but different implementations is what is comonly known as polymorphism.

    In static languages the concept of polymorphism is constrained to objects that share a common implementation through their class hierarchy.

    Is this true polymorphism? I want different implementatons of the same thing, but they must share a common implementation? Hmmm....

    To find out how this should be done, take a look at Strongtalk:

    class C &lt;INITABLE&gt;

    def init

    ...

    end

    end

    class D &lt;INITABLE&gt;

    def init

    ...

    end

    end

    Here the idea of type and implementation (class) are clearly seperated. Using a dynamic language like Strongtalk with type anotations seperate from Class, you can gain the benefits of the "rename all semantically equivalent methods" refactor, AND have true polynorphism (different forms, no shared implementation). So C and D could share a common type but be completely unrelated classes.

    As for me, I would rather have pure OO semantics, and do the type stuff in my head if need be. After all the most powerful static analysis tool I know of is my brain.

    BTW. Java achieves this seperation of concerns to some degree with the idea of Interface - where it is used it can lead to some pretty flexible late bound code. Dynamic languages just take this idea  to its ultimate conclusion. If the interface (message signatures and semantics) fit then the object is of the right type. If it looks like a Duck and quacks then ...I guess its a duck, with or without the annotation to prove it!

    Paul.'
  replies: []
- id: 6000
  author: Paul Beckford
  date: '2006-11-28T10:41:08'
  content: 'Hi Cedric,

    I agree. But what I think you''ve stumbled on here is a language smell implicit in static OO languages. The implicit assumption is that class and type are the same thing. So just because C is a class with a menthod init, it does not necessarily imply that the init method will/should have different semantics to the method with the same name in the class D say.

    Infact methods with the same names with the same semantics but different implementations is what is comonly known as polymorphism.

    In static languages the concept of polymorphism is constrained to objects that share a common implementation through their class hierarchy.

    Is this true polymorphism? I want different implementatons of the same thing, but they must share a common implementation? Hmmm....

    To find out how this should be done, take a look at Strongtalk:

    class C &lt;INITABLE&gt;

    def init

    ...

    end

    end

    class D &lt;INITABLE&gt;

    def init

    ...

    end

    end

    Here the idea of type and implementation (class) are clearly seperated. Using a dynamic language like Strongtalk with type anotations seperate from Class, you can gain the benefits of the "rename all semantically equivalent methods" refactor, AND have true polynorphism (different forms, no shared implementation). So C and D could share a common type but be completely unrelated classes.

    As for me, I would rather have pure OO semantics, and do the type stuff in my head if need be. After all the most powerful static analysis tool I know of is my brain.

    BTW. Java achieves this seperation of concerns to some degree with the idea of Interface - where it is used it can lead to some pretty flexible late bound code. Dynamic languages just take this idea  to its ultimate conclusion. If the interface (message signatures and semantics) fit then the object is of the right type. If it looks like a Duck and quacks then ...I guess its a duck, with or without the annotation to prove it!

    Paul.'
  replies: []
- id: 6001
  author: Bob Aman
  date: '2008-05-15T08:00:27'
  content: '> In order for this approach to work, you would

    > need to have 100% coverage with your tests

    > which, I claim, is probably achieved by 0.001%

    > of the projects out there, all of which are

    > simple "Hello world" programs. And without this,

    > who wants an IDE that performs a correct

    > refactoring "most of the time"?

    As a counter-point, I would like to direct your attention to addressable.rubyforge.org -- clearly not a trivial "Hello World" program.  I not only have 100% C0 code coverage, I believe I have 100% code coverage of all logical branches.  It can be done, and it''s not as hard to do as you make it out to be.

    Also, your comment spam filter needs some work.'
  replies: []
- id: 6002
  author: Jim Sawyer
  date: '2008-05-16T18:37:53'
  content: '> It''s not that you couldn''t get most of it,

    > ... it''s the fact that

    (er, the poster''s opinion that...)

    >you CANNOT for CERTIAN identify EXACTLY

    >every method that might have to be changed.

    (As far as the poster is aware,

    and/or is able to imagine, that is.

    No evidence, no bibliography, etc.

    Common sense, maybe, but one still

    shouldn''t overstate the case...)

    > who wants an IDE that performs a correct

    > refactoring "most of the time"?

    Not me!  So I''m with you here, I think.

    But it does seem that some people find

    this acceptable.  Better than nothing?

    Better than the alternatives they''ve tried?

    Sad, sad state of affairs.  I couldn''t do it -

    get stuck with immature/inferior tools just

    so I can use a language that is ''trendy'', or

    type less.

    I want an IDE that does most (i.e. simple)

    refactorings correctly, every time. And that

    lets me easily guide the process around the

    remaining ambiguities (for the harder cases).

    For example:

    Say I''m in the IDE, and I do a ''rename''

    refactoring, against something with a common

    name, so that the same ''name'' string will also

    occur in many other unrelated places -

    places in the code, and in the comments.

    So a text based search and replace is hopeless.

    I want the rename to change everything it

    should, and to change nothing that it shouldn''t.

    So any and all dependencies on the old name get

    handled correctly.

    Like - if the topmost class in the hierarchy

    was named ''MasterCylinder'', and everything

    else was subclassed from the ''MasterCylinder''

    class.  And suppose this ''MasterCylinder'' class

    had a very large number of methods, most of

    which are inherited, all the way down.

    I want a ''rename class'' refactoring to work

    correctly - even against something like the

    ''MasterCylinder'' class.

    Say I have some unit tests, but not 100%

    coverage.  Say something like 20% coverage.

    Say I run half my tests.  Then I refactor,

    renaming the ''MasterCylinder'' class to

    something innocuous like ''Object'', and then

    run the other half of my tests.  All my tests

    should still pass - everything still just works.

    Now, if I was ever going to even dream of using

    a dynamic language, with (*shudder*) so called

    duck typing, I would need the refactorings to

    be at least as reliable as previously described.

    And same goes for a ''live'' image - I''d still

    need the same refactorings; same reliability.

    At the very least, right?

    Yeah sure - like a rename class refactoring,

    that can even rename class Object, in a

    running system, on the fly, and then resume,

    right? - so we should see a language/IDE

    do that correctly, about, when?

    What''s your guess?

    This year?

    In ten years?

    Would you believe,

    ten years ago?

    Parcplace VisualWorks 3.0

    IBM VisualAge 3.0

    Dolphin Smalltalk 98

    Three comercial Smalltalk products

    have included an implementation of

    The RefactoringBrowser (Brandt+Roberts)

    since at least 1998.

    The RB itself is a derivation from

    at least 2 PhD Dissertations, with

    (by 1998) at least a dozen man years

    of R+D effort. A very mature tool.

    (And a looooong way beyond grep, etc.).

    So - while it is correct to suggest that

    automated refactoring is harder to do

    for dynamic languages, it is *not*

    correct to suggest that the automated

    refactoring support provided by dynamic

    languages is therefore somehow inferior

    to that provided for static languages.

    Quite the reverse is true:

    While it is *easier* to do for static languages,

    static languages as a whole are only recently

    starting to catch up.  Eclipse and IDEAJ are

    the best known examples - and are (finally)

    roughly on par with the Smalltalk RB.

    Good mornin'' little school girl

    -Ten years after

    And Ruby? Still not there - true. But

    that''s a different kettle of fish. Same

    slope, but will likely take longer than

    for Java, *primarily* because there are fewer

    resources available, and then partly because

    it *is* a bit harder to do.

    > All the Smalltalk IDE did for renaming

    > was search and replace, which is, frankly,

    > the best it could do.

    Authoritative - sounding.

    Also true, up until around

    ten years ago, whereupon -

    not so much.

    Some say Programing is a young man''s game.

    So much so that young''uns may even forget

    to check. Doh!

    Regards,

    -cstb'
  replies: []
- id: 6003
  author: Curt Sampson
  date: '2008-05-29T11:50:05'
  content: '''[W]ho wants an IDE that performs a correct refactoring "most of the time"?''

    Well, most of us, I would think. After all, Ruby is a language that does the right thing "most of the time," and lets us write programs that do the right thing "most of the time." In many cases, this works. In (admittedly fewer) cases, it''s even the best way to go.

    Ruby programmers that are worried about doing the right thing all the time are using Haskell instead.

    cjs@cynic.net'
  replies: []
- id: 6004
  author: Daniel Sobral
  date: '2009-04-30T11:38:55'
  content: 'Personally, I feel refactoring, generally speaking, is overrated.

    Most of the times I have seen it used, it was used to deal with problems imposed by the language -- sometimes the static typing itself. It''s not that it wasn''t needed, it''s just that the need was a result of the language choice itself.

    Anyway, as for the example given, any tool would be able to provide a correct refactoring of that code provided the code was written to what would be possible in a statically typed language.

    In other words, if the variables do not get assigned to different types, if the function calls all pass objects of the same class or subclass, then you can do a perfect refactoring of it.

    If, however, the code does something that is "not possible" in statically typed languages, you may be unable to do a correct refactoring of it. Or you might be able to, even still.

    As for "not possible", and "statically typed", that''s not as clearly defined as some think. For instance, in a trully statically typed language -- as opposed to a language that does mostly statically typing -- you could never get a run-time error when calling a method on an objectel. And, yet, who here hasn''t seen a Null Pointer Exception in Java? You can''t have that error on the strictly statically typed languages.

    Also, how well does your Java IDE of choice refactor your reflections? How about changes in the covariance of a class?'
  replies: []
- id: 6005
  author: Davin McCall
  date: '2010-08-26T16:15:37'
  content: 'Daniel, it''s not about eliminating all runtime errors entirely, just most of them. Change the return type of a method? The compiler will pick it up and warn you if you forgot to update a couple of call sites. Add/remove a parameter or change a parameter type? Likewise. Change the method name? Likewise. Change a field name? Likewise. Remove a method? Likewise. And there''s more.

    Sure, reflection isn''t handled too well, but that''s because you''re starting to avoid static typing. The moral is: don''t do it, if it''s possible to avoid it. And of course it would be possible to add language features to make even this case less of a problem (for instance it would be nice to have an expression which returned the name of a method as a string, or to have method literals and field literals in much the same way as Java already has class literals). Of course, that''s just Java; the argument is really about static typing versus dynamic typing, not specifically about Java.

    And, the issue is not how well some particular IDE performs a certain refactoring, just that it''s possible (excluding reflection or its equivalent) to perform automated refactoring.'
  replies: []
---

In a recent entry, [Tim Bray revisits the old debate about refactoring dynamically typed languages](https://www.tbray.org/ongoing/When/200x/2006/09/29/Dynamic-IDE):

> IDEs all have a "Find Usages" feature, which in itself is handy (I'm thinking of nuking this stupid method, where is it used?) but if you think closely, is also vital too pretty well every other refactoring operation. If you're going to rename a method or a class or extract an interface, it's absolutely vital that the IDE know all the places where that code is used; otherwise refactoring equals breakage.
> 
> Of course, the problem is harder with dynamic languages, because variables aren't declared, and because you can screw around with the insides of classes at runtime,
> 
> As always in this kind of debate, a commenter was quick to point out that "Smalltalk already did it":
> 
> As with everything else: it's all be done before: Smalltalk. In fact refactoring was pioneered (like many other things, oop, gui, unit testing, agile/xp...) in Smalltalk!  
> Smalltalk has 30 years of experience making the Ruby object model fast.

First of all, that commenter is wrong. All the Smalltalk IDE did for renaming was search and replace, which is, frankly, the best it could do. And clearly unacceptable today.

It's simple, really: dynamic languages that are not statically typed (i.e. let you get away with not typing variables) simply *cannot* do certain refactorings, among which "renaming".

How could they? They just don't have the type information to know exactly which types are being used to invoke your methods.  
A few months ago, I offered the following code snippet to the author of the Ruby Refactoring Browser:

```ruby
def f1(o)
    o.init
end

def f2(o)
    o.init
end

class C
    def init
        ...
    end
end
```

And I asked him: "If I rename C.init to C.init2, how do you know which o.init must be renamed in f1 and f2?".

His response was unequivocal:

> This problem is difficult for dynamically typed language. I think computer can't determine whether those must be renamed or not.
> 
> Therefore Ruby Refactoring Browser provides two functions, one is renaming all methods that have same name, and another is renaming only methods and calls that cleary belong the class. The former renames o.init in f1 and f2, and the latter doesn't rename them.

This shouldn't come as a surprise. One of the main reasons why people like dynamically typed languages is precisely because they don't have to specify these types. Is it really so shocking that this convenience comes at the price of not being able to perform any operation that requires type information on this code?

As for Tim's solution to this problem, which consists in having the IDE gain this knowledge by running your code instead of analyzing it statically: it's clearly not going to work either.

In order for this approach to work, you would need to have 100% coverage with your tests which, I claim, is probably achieved by 0.001% of the projects out there, all of which are simple "Hello world" programs. And without this, who wants an IDE that performs a correct refactoring "most of the time"?

So is there any way out of this conundrum? I think there is: dynamic languages that allow you to type your variables if you feel like it, and the only language that I can think of that does that at the moment is Groovy. This is clearly the best of both worlds, because you only need to type your variables once (i.e. in your method signature) and type inference will save you the trouble of duplicating this information from that point on.
