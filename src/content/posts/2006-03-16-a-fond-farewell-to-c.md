---
title: A fond farewell to C++
date: '2006-03-16T07:44:40'
slug: a-fond-farewell-to-c
categories:
- General
comments:
- id: 4948
  author: Anjan Bacchu
  date: '2006-03-16T09:50:42'
  content: 'hi cedric,

    I''ve long wanted typedefs for java. Recently typedefs for generic Java types -- do you see them coming ?

    "you''d better have some very good reasons to pick C++" : Suppose someone were to write a search engine competing with Google, would someone write in C#/Java/Visual Basic ? I know about Nutch but what is the collective industry capability to do something like Google/Yahoo search in java/C# ?

    "help me tackle the software challenges of the next twenty years as opposed to not forgetting to insert a space in my code or remembering to free the memory that I''m not even sure I allocated in the first place" : Isn''t there a role for IDEs to play here ?

    Thanks,

    BR,

    ~A'
  replies: []
- id: 4949
  author: Ben Eng
  date: '2006-03-16T17:31:10'
  content: 'How do you suggest we handle reflection for typedef-ed classes?

    Would "MyType".equals(MyType.class.getName()) still be true?

    Does typedef offer any significant advantage over: class FooList extends ArrayList?'
  replies: []
- id: 4950
  author: Muthu Ramadoss
  date: '2006-03-16T19:45:12'
  content: 'C++ is a good starting point, to lay your programming foundation.

    But I would not want to go back to it now.

    Why do something in a difficult way when you can take it easy.

    http://groups.google.com/group/etoe'
  replies: []
- id: 4951
  author: Gordon J Milne
  date: '2006-03-19T14:13:08'
  content: 'I disagree with Muthu''s comment that "C++ is a good starting point".

    C++ is an awful starting point for those learning to program. When all we had was assembler, C was wonderful. Once C++ hove into view it clearly gave you better tools to handle bigger problems. Not that big problems were not already handled in C (and assembler), they were, but C++ gave individuals a bigger lever to work with.

    However, if I were going to teach someone programming now, I would start out with Java or C#. I would love to say that I would start with Ruby but its still for grown ups at this stage.

    Typical Java and C# development environments let a novice programmer get something (highly visible) going really quickly. This sort of (almost) instant reward/feedback is essential to help novice programmers learn how the language works.

    As you mature as a developer, the need for instant gratification lessens for typical work but as soon as you work on something new, or different, the reward of near-instant feedback helps to accelerate your _exploration_ of the new area of work.

    C++ remains a tool for grownup developers. Its syntax can be awful and it is woefully hindered by  having its roots in C. C++ development tools are poor compared to those used by simpler languages such as Java and C#. C++ offers a lot of power but at what is considered a high cost these days. To obtain that power you have to breath the language in over several years. With Java and C# you can achieve the same effect in 6-12 months.

    C++ is worth it for those environments where speed is of the essense. Please do not give into any need that you might feel to trot out any "Java is as fast as X" comparisions. In general, it is not. Ok, it might be if I am prepared to spend lots of time tuning things and choosing the _right_ set of jvm switches and run it on a platform with a  JIT compiler. I just don''t have the time for all that investigation. I don''t get to choose my platform.

    In practice, C++ is faster than Java, for a lot of things. However, for many business purposes Java is fast enough and that is all that matters.

    I work in embedded environments. I need C/C++ for some performance-critical parts of my development. I do not need C/C++ for everything.

    The result is mixed-language solution; lots of Java, a smattering of C and some C++.

    It is a "horses for courses" effect. Some languages are better for somethings whilst others are not.

    C remains good for OS programming whilst C++ remains good for certain aspect of systems and high-performance graphics programming. Languages written to a VM (i.e. Java and C#) tend to be good for everything else that remains, and that is a lot of ground.

    Pragmatism rules! Do not waste your time working with a language if it gives you pain. Choose the path of least resistance. These days that means Java and C#. This does not mean that C and C++ are finished. These languages still have their uses. Their days are not yet numbered.

    C and C++ will finally die when new operating systems with a VM at their core become the norm. Microsoft''s Singularity (http://research.microsoft.com/os/singularity/) is  a sign of things to come.'
  replies: []
- id: 4952
  author: Laurent
  date: '2006-03-20T02:08:35'
  content: '> go back to using gcc while avoiding templates because they are still buggy in that implementation

    Do you have something to back that claim?

    It''s not that I doubt it''s wrong, it''s just that gcc has evolved during the last "nine years".  Most notably, the C++ parser has been completely rewritten.

    BTW most of the time forte is written without accent even though the Academie Francaise accepts the accent (which you will note I can''t use due to a UK keyboard).'
  replies: []
- id: 4953
  author: Sony Mathew
  date: '2006-03-20T11:24:44'
  content: 'I don''t think Bjarn is competing with Java.  If he did he''d just create a new language.  C++ is and has been for system level programming.  The fact that Businesses adopted it for their high-level needs is their own damn fault.

    The Future will bring higher abstracted languages than Java.  I would like to see an Enterprise-VM platform with its own language (eve or e++).  Instead of JEE/EJB with loaded set of annotations.

    public stateless service StockPurchase {

    public transaction void purchase(String smbl,

    int shares, Money money)

    {

    Share[] stock = select from Share s where

    s.symbol = symbl;

    //purchasing logic.

    save stock;

    }

    }'
  replies: []
- id: 4954
  author: Sony Mathew
  date: '2006-03-20T11:25:39'
  content: 'I don''t think Bjarn is competing with Java.  If he did he''d just create a new language.  C++ is and has been for system level programming.  The fact that Businesses adopted it for their high-level needs is their own damn fault.

    The Future will bring higher abstracted languages than Java.  I would like to see an Enterprise-VM platform with its own language (eve or e++).  Instead of JEE/EJB with loaded set of annotations.

    public stateless service StockPurchase {

    public transaction void purchase(String smbl,

    int shares, Money money)

    {

    Share[] stock = select from Share s where

    s.symbol = symbl;

    //purchasing logic.

    save stock;

    }

    }'
  replies: []
- id: 4955
  author: Deva
  date: '2006-03-20T12:23:29'
  content: 'I diasagree with Gordon and Muthu.  C would be a good language to start for a beginner. Java is a very easy language so most beginners are not even aware of the concept of pointers ( which is not a good thing.).

    C enforces simplicity and makes you appreciate other high level languages. In short, C is as low as you can get in learning the inner workings of a hardware platform.

    If you need a good starting point, pick up the "C programming Language" also called the White book by K&R - thats the best book ever written for a programming language.'
  replies: []
- id: 4956
  author: Bill Kress
  date: '2006-03-20T14:40:58'
  content: 'It is no longer necessary to immediately understand underlying data-structures and pointers.  I think there are still purposes for bit-manipulation and recognizing that "Object a=b" does not actually duplicate an object, but for a starting student it''s much more important to learn OO Design principles than any of the "Low-Level" functionality that C provides.

    C++ is so ugly and incomprehendable that I wouldn''t recommend it to anyone, least of all a student.

    Really I suggest a simple OO language.  Java is great (even better with an environment like BlueJ) and many others will do, but the whole concept of starting with C OR c++ is as silly as starting out coding in z-80 machine language like I did.

    That said, I don''t think I''d hire a programmer that didn''t understand Pointers and I''d be really put off if they only knew Java & VB but no C, but get the important general concepts down first.'
  replies: []
- id: 4957
  author: Pierre Samanni
  date: '2006-03-21T16:06:23'
  content: 'Back in 97-99 I did enjoy coding in C++ for the sense of "completeness" of constructs it brought me back then. One of those were templates (generics), and I do think that "const" is in fact pretty neat, even though you need to go through the learning curve for all the goodies.

    What I found dreadful though, and I''m surprised no one is mentioning this in the comments, was the problems related to writing portable C++ code. HP at the time had a terrible C++ compiler. Also, the STL was slowly emerging as a mature tool, but it seemed everyone and their cousins were working on their own versions. At the time C++ was lacking a unified set of utility libraries.

    ( And what about use and abuse of macros, to the point of making the code way too abstract to read? Compiling and linking dependencies? Core dumps? Crashing your machine/server when running your code? Profiling your executables and libraries to death with Purify? Memory leaks? Oh, and the multi-platform multi-compiler makefiles, that was lovely too... )

    And then Java came up with a nice set of standard libraries for all kinds of things - among those a unified thread model -, an easier way to write multi-platform code, a more readable way to write/read code, garbage collection and a "simplified" set of features that made OO look more accessible to the managerial crowd.

    Of course, Java is not perfect in all aspects, far from it, but as long as I can stay away from legacy C++ code, I think I will try to. :-)'
  replies: []
- id: 4958
  author: AzCoder
  date: '2006-03-25T12:00:48'
  content: 'I saw Bjarne make that presentation.  Now this may surprise some of you, but c++ is by far my favorite language.  I use Java exclusively at work for Enterprise Web Development.  I am a certified Java programmer.  Java is great for Web development.

    But for game development, I really prefer c++.  The STL may be difficult to learn, but ultimately it combines great flexibility and high-performance.  I taught c++ at the local community college for several years in the mid-90s.  Java may be a good beginners language, but ultimately it hides too much of the what is actually going on.  Pointers and memory management are critical concepts to understand for career developers.

    If you are going to spend a career developing applications,  your time investment in c++ pays off by enabling you to develop applications with superior performance.  Of course this only applies if performance is importance.

    Just my 2 cents....'
  replies: []
- id: 4959
  author: Simen
  date: '2006-03-27T10:19:25'
  content: 'Just one point: you list "no new keywords" as one of the reasons why C++0x doesn''t raise the level of abstraction. If you really believe that keywords raise the level of abstraction, you''re just pricelessly wrong. Many of the most powerful (as in "you can do complex things with little code while it''s still readable") very high level languages have few or no keywords at all.'
  replies: []
- id: 4960
  author: Zarplex
  date: '2006-06-13T11:53:52'
  content: 'C++ is not that bad.  Everyone''s just getting too worked up over how you can do the same thing in a million different ways in C++.  C++ is not a horrible starting point for beginners either.  Just don''t teach beginners the ridiculous features.  Java and C# make crummy real-time applications.  I''ve developed a video game using DirectX and programmers still use C++ for these kinds of applications.  People who have started off on C++ and know the ins and outs of C++ know more about the mechanics behind Java than programmers who have only programmed exclusively in Java.  C++ DOESN''T follow coding conventions, I''ll admit that.  It''s horrible.  Why couldn''t Bjarne Stroustrup do something about that?  It''s probably because he just doesn''t think this is an issue or he is out of touch with the successes of Java and C#.  But you can write code just as eloquently in C++ as you can in Java.  And you can utilize hash maps and binary tree maps, etc., in C++ just as you can in Java
    (they''re just not standard but every compiler provides them).  And you can stick all of your classes into different files, just like in Java.  You can also hide all the implementation details from programmers just as you can in Java by using new styled headers.  Here''s how I write my C++ code:

    /**

    * Provides some functionality.

    * @author Zarplex

    * @version 1.0, 06/13/06

    */

    class MyClass {

    private:

    /**

    * stores an int

    */

    int someVar;

    /**

    * stores another int

    */

    int someVar2;

    // more vars...

    public:

    /**

    * Creates a MyClass object.

    */

    MyClass() {

    // do something

    } // end default constructor

    /**

    * Performs some method on the given int.

    * @param a the given int

    * @return the results of the method being

    * performed on the given int

    */

    int someMethod(int a) {

    // do something here too...

    } // end someMethod()

    /**

    * Take care of pointer issues.

    */

    ~MyClass() {

    // do something here as well

    } // destructor

    }; // end class MyClass

    And this compiles just fine in C++.  If you want to access static vars in classes just as you can in Java, use enum - you can achieve the exact same effect.

    Do not use preprocessor directives other than for including files and creating namespaces.  Minimize pointers; I''ve seen pointer usage get way out of hand in a lot of applications where a simpler solution was possible without the use of pointers.  Voila!  We have C++ code that is no harder to read/write than Java.  The only problems you have to deal with now are the lack of standard math/util libraries and POINTERS.  Preventing all memory leaks with pointers can be difficult in complex systems, but the results are way better than the bubble gum applications that Java and C# create.  By the way, I''ve been writing applications exclusively in Java for the past 6 years.  I don'
  replies: []
- id: 4961
  author: Alex
  date: '2006-09-30T05:10:53'
  content: http://www.infoworld.com/img/38FEjobs_sc1.jpg
  replies: []
- id: 4962
  author: alex
  date: '2006-09-30T05:12:35'
  content: 'I''m sorry, it did not pick up the link, here it is again:

    America''s 10 most wanted'
  replies: []
- id: 4963
  author: Chris
  date: '2007-01-18T06:39:09'
  content: 'I agree with AzCoder and C++ is my favorite language as well. Is still find STL has by far and away the best, fastest and most flexible use of ADTs. Multi-paradigm programming really lets me think how I want to, rather than being forced into some notion of "goodness" and simplicity. I like to implement goodness and simplicity in my design.

    Sure, C++ has taken me much longer to master than C#, Java, C or Assembly but I feel the reward is also much greater. Everyone seems to forget about heavy numeric computing when it comes to C++. This type of code is everywhere. Maybe the zealots who do this don''t waste their time ranting in the interweb.'
  replies: []
- id: 4964
  author: Chris
  date: '2007-01-18T06:39:35'
  content: 'I agree with AzCoder and C++ is my favorite language as well. Is still find STL has by far and away the best, fastest and most flexible use of ADTs. Multi-paradigm programming really lets me think how I want to, rather than being forced into some notion of "goodness" and simplicity. I like to implement goodness and simplicity in my design.

    Sure, C++ has taken me much longer to master than C#, Java, C or Assembly but I feel the reward is also much greater. Everyone seems to forget about heavy numeric computing when it comes to C++. This type of code is everywhere. Maybe the zealots who do this don''t waste their time ranting in the interweb.'
  replies: []
- id: 4965
  author: Chris
  date: '2007-01-18T06:40:14'
  content: 'I agree with AzCoder and C++ is my favorite language as well. Is still find STL has by far and away the best, fastest and most flexible use of ADTs. Multi-paradigm programming really lets me think how I want to, rather than being forced into some notion of "goodness" and simplicity. I like to implement goodness and simplicity in my design.

    Sure, C++ has taken me much longer to master than C#, Java, C or Assembly but I feel the reward is also much greater. Everyone seems to forget about heavy numeric computing when it comes to C++. This type of code is everywhere. Maybe the zealots who do this don''t waste their time ranting in the interweb.'
  replies: []
- id: 4966
  author: SStovall
  date: '2007-07-22T22:52:35'
  content: I find that the learning curve of C++ really depends on the source of learning.  I'm learning C++ right now as my first programming language and am finding the ideas of OOP and the syntax in C++ quite understandable.  I admit I have yet to take a look at Java or C#, but so far my learning of C++ has been enjoyable.  I like the flexibility I get with pointers as well as many other features of C++.  I do have an aversion to C++/CLI though...
  replies: []
- id: 4967
  author: Arthur
  date: '2007-09-16T06:05:39'
  content: You're on right way, C++ is a best language for software development.
  replies: []
- id: 4968
  author: Zezo
  date: '2012-08-29T08:53:41'
  content: 'Hey OLD MAN.  Didn''t we aaldrey have this ?  Didn''t we aaldrey establish that your outmoded tendencies of grinding your own flour to bake a loaf of bread, looming your own fabric for a t-shirt, and managing your own memory references when programming run counter culture to the way the rest of us get things done every day?  Do I need to spell it out to you in a null-terminated buffer of ASCII characters, lest you miss the end and I BLOW YOUR MIND?Seriously.  OS hackers and computer scientists should know C and pointers and assembly and understand  and the thousand other things that make  System.out.println( Hello world! )'' work under the covers.  But for high school students and software engineers, managed languages are the way to go.As Joel points:  Now, I freely admit that programming with pointers is not needed in 90% of the code written today, and in fact, it''s downright dangerous in production code. OK. That''s fine. And functional programming is just not used much in
    practice. Agreed. You teach the 90% first and the hardcore 10% remainder will find a way to learn the rest like they always do.  Teaching C first is like trying to teach someone to ride a bike by putting them on a fixed gear and pointing them down a hill in San Francisco.  It''s too much too soon and it hides the real basics of what programming is about: flow control, algorithms, abstractions.  Heck, I freely admit that even Java is too much too soon, but my colleagues here at UW who fret and worry about declining CS enrollment and do research about the best way to teach intro CS still pick Java before C.Also, get a haircut, you hippie.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/cplusplus-0x.png)

I recently attended a presentation of C++0x by Bjarne Stroustrup.  It wasn't pretty.

C++0x is the next version of the C++ specification and it's scheduled to be final in 2009.  Yes, you read that right:  2009. 

"Well, okay, I guess that with such a distant deadline, the changes to C++ are going to be completely revolutionary, right?"

Right?

Not really.

If you are a hardcore C++ developer, I'm sure you will welcome these modifications, but anyone with a simple passing (or forced) interest in C++ will be less than impressed and will probably shrug the whole effort away and go back to using gcc while avoiding templates because they are still buggy in that implementation.

So, what's going on with C++?  Here is a quick rundown (obviously not exhaustive).

  * Make the language easier for beginners, for example by providing easy ways to convert ints to strings.    
 
  * Get rid of the maddeningly mandatory space required between ">" signs for templates.  It's about time users, and not compiler authors, got the last word on that one.  
 
  * Scoped macros, one of my favorite features:  you can now clearly delineate where your macros apply and when they become undefined with...  well, macros (`#scope` / `#endscope`). The intent is noble, but rescoping existing macros is probably not going to happen, so this change will only benefit new macros.   
 
  * "Admit the GC as a valid implementation technique".  I am quoting this directly from Stroustrup's slides because the phrasing is too precious.  It looks like there is something to learn from "next generation languages" (Java, C#) after all...  
 
  * Type inference, woohoo!  In C++0x, variables can declared with ` auto`.  Now we're talking 21st century.    
 
  * Better runtime type information, dubbed XTI ("Extended Type Information").  Reflection for C++...  Well, as much as possible anyway.  
 
  * Template `typedefs`.  A long overdue good idea that will make templates (and related errors) a tad more readable.



As you can see, nothing that is really going to help C++ programmers raise the level of abstraction where they are currently stuck:  no closures, no LINQ, no new keywords, and still this unavoidable exposure to all these low-level details that fewer and fewer people care for these days.  Why do I even need to know about the existence of iterators when all I want is to work on every element of a collection?

I wrote my last line of C++ about nine years ago, so my exposure to Java, C# and Ruby these past years has undoubtedly made me very biased, but I have to say I found all the snippets of code that Bjarne showed absolutely dreadful to read.  Coding conventions have never been the forté of C++ programmers, but with the advent of templates, partial specialization, traits and other advanced programming techniques, C++ code has become a terrible alphabet soup mixing lower case, upper case, all caps, camel case, *, & and [] and const appearing sometimes left and sometimes right, underscore sometimes followed by a capital, other times by a lowercase character or an all-caps word, etc...

Now, to be fair, you need to remember that from day one, C++ has been submitted to extremely strict constraints that have had a very strong impact on its design.  I certainly give credit to Bjarne and the C++ committee (which I used to be a part of) for never forgetting their users and keeping in mind that breaking the slightest feature in the language will result in millions of lines of code breaking across the planet.

Having said that, it's becoming increasingly clear to me that C++ is turning into a niche language, and if you want to start a new project, you'd better have some very good reasons to pick C++.  Chances are very good that Java, C# or Visual Basic will fit the bill in 99% of the cases.

Good bye, C++.  I'm looking forward to reusing my C++ brain cells for concepts that will help me tackle the software challenges of the next twenty years as opposed to not forgetting to insert a space in my code or remembering to free the memory that I'm not even sure I allocated in the first place.
