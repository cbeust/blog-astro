---
title: Humane or spartan?
date: '2005-12-07T13:22:46'
slug: humane-or-spartan
categories:
- General
comments:
- id: 4540
  author: murphee
  date: '2005-12-07T13:55:34'
  content: 'I wonder... why do you have a utility class that has a method like ListUtilities.last(List) but no   little util like FileUtilities.readFileContents(File)?

    And I agree: this readFile business is very annoying... also because you''ll have to remember all the things that are necessary to make sure you do it right (make sure stream is closed in finally, what buffer size do you use, do you use BufferedReader.readLine and concat the Strings with a String Buffer or buffer yourself ...).

    And all that for something that should be done in one line (or 5 if you still want to get exceptions if something goes wrong).'
  replies: []
- id: 4541
  author: PA
  date: '2005-12-07T14:45:41'
  content: 'Re: nobody writes

    Perhaps ''aCollection.iterator().next()'' instead?'
  replies: []
- id: 4542
  author: Cedric
  date: '2005-12-07T14:47:50'
  content: '> Perhaps ''aCollection.iterator().next()'' instead?

    1) Violation of encapsulation

    2) Exposing iterator...  Tell me again why I need to know about it if all I want is the first element?'
  replies: []
- id: 4543
  author: Sam Pullara
  date: '2005-12-07T15:19:38'
  content: I think the broken part is needing the first or last element. It sounds to me like you should be using a Queue or a Stack for whatever it is you are doing, which likely why these were left out of the List API. I think that using that idiom every once in a while probably doesn't merit a whole method.  If you go down this road too far you get the Common Lisp API which is just about as "humane" as you can get if thats what you want; I mean you might want the second or third or nth element right?
  replies: []
- id: 4544
  author: Mark
  date: '2005-12-07T15:26:16'
  content: 'The difference here is between "I *might* need this someday" and "Hundreds of people have coded this method, separately, on their own."  One is speculation, the other is a path that has been worn into the grass.

    There is also a big difference between the design of a class that gets used millions of times (in a standard API) versus a class that gets used once.

    Unless you''re amazingly good at predicting the future, I''d be willing to bet that you''ve added design-y generalizations, pluggable whatnots, etc. that have only been used once in the application.  I know I have.

    (Great blog, btw!)'
  replies: []
- id: 4545
  author: Robert
  date: '2005-12-07T15:54:11'
  content: 'The problem here is that a different context (writing public APIs to be used by hundreds of thousands of developers) changes the forces at play.

    When writing your own code, a Spartan interface is almost certainly better - less duplication, easier to see what''s happening, and less time spent wondering "which one do I use"? YAGNI applies almost entirely to code written for your own use (or the use of your team or company).

    When writing code for others, it is a good idea to consider their common use cases and make it easier for them. This doesn''t mean that you need to stick it all on the one class - the Collections and Arrays utility classes are a good example of providing "common use" methods.

    (Of course, you have to trade _this_ off the cost of learning the libraries)

    Almost by definition, when you write for others to use, you are speculating somewhat. YAGNI becomes less powerful, because you don''t _know_ what others are going to need.

    The different context changes the strength of the various forces and thus the "best practice". The advice that Martin gives in the two entries quoted above is not contradictory, but applied to different contexts.

    Whenever you see a common task done over and over again, there is an argument for making that task a one-liner at the language library level. Still, people can already make utilty methods of their own to turn repeated tasks into one-liners, and many people don''t.'
  replies: []
- id: 4546
  author: Simon Harris
  date: '2005-12-07T16:17:17'
  content: 'I''m not sure I agree with your assertion that Humane Interfaces necessarily violate YAGNI.

    YAGNI simply says don''t implement functionality you don''t need, yet; Humane Interfaces, IMHO, says if you need functionality then encapsulate that in an method on a class somewhere in a manner that enriches the domain rather than in some helper class. Or in other words, create high-level functionality rather than simply a set of primtive operations. I suppose you could think of this as being similar to CISC versus RISC.

    The question of whether or not you NEED the functionality or not is a separate discussion to HOW the functionality is implemented. YAGNI addresses the NEED, Humane Interfaces addresses the HOW.'
  replies: []
- id: 4547
  author: Brian Slesinsky
  date: '2005-12-07T17:50:44'
  content: 'This has nothing whatsoever to do with YAGNI.  If you have at least one caller for each method in your "humane interface", and those callers are there because there''s a business requirement for them, YAGNI is satisfied.

    (Extreme programming actually doesn''t have a whole lot to say about how to design and evolve an external API.  Its focus is on application development and internal API''s, where backward compatibility at the API level is not a problem because you can always change the callers.)'
  replies: []
- id: 4548
  author: Stephen Colebourne
  date: '2005-12-08T05:08:08'
  content: '"Now, can we please have java.io.File#readFile() that reads an entire file in a String so we don''t have to rewrite it over and over, like I just did this morning?"

    Commons-IO:

    FileUtils.readFileToString(File, String)'
  replies: []
- id: 4549
  author: Marc
  date: '2005-12-08T08:38:19'
  content: '+1 Brian Slesinsky''s comment

    Martin''s post on HumaneInterfaces has nothing to do with YAGNI.  I am an XP fan, but I also think that Sun''s anemic API''s are a joke.  There are so many commonly used methods missing from them that you have to really wonder what how stupid they really are.  Anyway, YAGNI is good for app development but the philosophy has nothing whatsoever to do with generic APIs.'
  replies: []
- id: 4550
  author: LeeMeador
  date: '2005-12-08T08:55:53'
  content: 'I''ve noticed that each version of Java seems to add a few "humane" methods here and there.

    Look at "String" for example and notice what wasn''t there in the early Java versions but is there now.'
  replies: []
- id: 4551
  author: Emmanuel Pirsch
  date: '2005-12-08T09:46:22'
  content: 'I find it funny that some people complain about the "minimalist" Java API.

    I find it funny that some people complain about the "bloated" Java API.

    I find it funny that often these are the same people.

    It''s easy to pick up an API and complain about it. It''s a lot more difficult to actually write that same API to make it useful. Choices have to be made as to what needs to be included or not. Sometimes bad choices are made (and this is true for ANY programming language and their APIs) and we have to live with it forever.

    The good thing about the minimalist approach is that you can easily add the functionality you want in an helper class or a subclass. With the humane approach, if it becomes bloated, you cannot take out the bloated parts without affecting compatibility.

    Now I think there is a middle ground between the minimalist and humane approaches. But the exact balance will never be reached in a single API.

    I like Java a lot... I begining to like Ruby a lot...

    I have gripes with APIs for both languages. Some Ruby APIs are better than their Java equivalent, and the other way around is also true.'
  replies: []
- id: 4552
  author: Ron
  date: '2005-12-08T10:42:29'
  content: cost of maintenance makes baby jesus cry
  replies: []
- id: 4553
  author: Sam Newman
  date: '2005-12-09T06:11:27'
  content: '(sorry cedric - it seems like its my monthly ''disagree with cedric'' time again...)

    Code we (all of us) write falls into three categories:

    1. Code you know you need

    2. Code you might need

    3. Code you don''t need

    We can all agree that you want code you need. We can all agree you don''t need to write code you don''t need. What we are talking about is code you might need. Why would you write code you only might need? If you might need it, you don''t know you''ll need it, so aren''t you better off spending your time writing code (e.g. implemnenting functionality/deliverying business value) you know you''ll need?

    If you have nothing left you know you need to do, why waste your time writing stuff you might need? Why not just ship/signoff the product/version/story and move on to the next thing?'
  replies: []
- id: 4554
  author: Ross Judson
  date: '2005-12-09T18:23:43'
  content: 'I see a lot of people missing the forest for the trees here.  Libraries/classes in Ruby and Java exhibit their characteristics largely because of the characteristics of the _language_, not necessarily because of the designer.

    Some may consider it "humane" to have a wide interface to a class, providing a large number of methods (and quite often various permutations of parameters) in order to ease calling of that class.  Wide interfaces create tension for implementors -- I wouldn''t want to be the person having to implement 78 methods on an Ruby list just so my better-mousetrap can play nice with other parts of a system.

    What we all get annoyed at is having to type repetitive crap.  We design "helper" functions into our classes and interfaces to fold the boilerplate together, and to clarify our thinking.  Wide interfaces are a particular pain in the ass in Java, as inheriting common method implementations means that your overall inheritance structure is quite fixed (you need to start with AbstractList, for example).

    We can write the code to read a file into a string.  Java and Ruby have us create a method somewhere that does this; we write a method call and have our String.  What''s better than calling a method?  Not calling one at all.  The wonderful world of type inferencing and views helps us out tremendously here.  Consider this off-the-cuff example of Scala code:

    def view(file: java.io.File): String = {

    ...

    }

    def makeElement(s: String): Element = {

    ...

    }

    val elem1 = makeElement(new File ("c:/hello.world"));

    val elem2 = makeElement("some text");

    The powerful type system in Scala does extensive type inferencing, so it allows you to skip most declarations of type in your programs.  Scala''s _view_ system allows you to wire up a scope with explicit conversion functions; the appropriate function is automatically called by the compiler, as in the example above.

    Scala''s bag of tricks also includes "traits", which are roughly like interfaces that can have code in them.  The restriction is that traits cannot have _state_; they rely on classes to provide it.

    I don''t consider Ruby (and other dynamically typed languages) to be particularly useful as they will _never_ (by definition) be able to perform type inferencing and view coercion.  Dynamic languages will never be able to "do what I mean", when that meaning can be _reasoned_ out of the code, as written.

    Java could conceivably be extended to include some of these concepts.  But why not simply use Scala?  :)'
  replies: []
- id: 4555
  author: Sony Mathew
  date: '2005-12-10T16:00:04'
  content: 'The humane methods don''t use the internals of the List implementation but are merely functions built on top of the List iterface.  The humane classes can have varying implementations if so designed (e.g. sort()).

    Its not about mininal vs. humane - just where the methods belong.  Most would agree that List should be mininal and the humane methods moved into a ListUtil.'
  replies: []
- id: 4556
  author: ''
  date: '2005-12-17T01:08:41'
  content: 'Just to reiterate with slightly different words: Once And Only Once, as well as expressive code, trump YAGNI. So if an XPer argues against humane interfaces, it''s not because him being an XPer.'
  replies: []
- id: 4557
  author: badri
  date: '2005-12-21T16:21:21'
  content: 'One should try not to take any one practice in isolation and try to evaluate its merits. In XP, while YAGNI is definitely a guiding principle, so are testing and refactoring. If during the course of writing your app code or tests, you came across the need to send the same object a message more than once, the correct response is to refactor and add it to that object. That way, the code is only introduced when needed (keeping with YAGNI) and humane interface (the method exists because it is needed more than once) and DRY (Don''t Repeat Yourself).

    While you might think that this goes against "Simplest thing that could possibly work" - remember it has to be "simplest" not "laziest" or "first thing that comes to mind" or "copied from somehwhere where someone else had done exactly the same thing". The creation of additional methods is not in violation of "do the simplest thing" if the methods are introduced at the right time, when needed by tests.'
  replies: []
- id: 4558
  author: anjan bacchu
  date: '2006-01-08T23:01:03'
  content: 'hi cedric,

    reading in entire file into a string by using 2 lines

    Scanner scanner = new Scanner(new File(fileName));

    scanner.useDelimiter("\\z");

    After I read this article(http://java.sun.com/developer/JDCTechTips/2004/tt1201.html#1) on java.net, I''ve been using these 2 lines for my work.

    BR,

    ~A'
  replies: []
- id: 4559
  author: anjan bacchu
  date: '2006-01-08T23:01:23'
  content: 'hi cedric,

    reading in entire file into a string by using 2 lines

    Scanner scanner = new Scanner(new File(fileName));

    scanner.useDelimiter("\\z");

    After I read this article(http://java.sun.com/developer/JDCTechTips/2004/tt1201.html#1) on java.net, I''ve been using these 2 lines for my work.

    BR,

    ~A'
  replies: []
- id: 4560
  author: fghfh
  date: '2006-04-08T17:00:09'
  content: 'basketball betting

    http://basketballbetting.atspace.com

    basketball betting

    online basketball betting

    http://onlinebasketballbetting.atspace.com

    online basketball betting

    college basketball betting

    http://collegebasketballbetting.atspace.com

    college basketball betting

    ncaa basketball betting

    http://ncaabasketballbetting.atspace.com

    ncaa basketball betting

    basketball betting line

    http://basketballbettingline.atspace.com

    basketball betting line

    nfl betting

    http://nflbetting.atspace.com

    nfl betting

    nfl betting odds

    http://nflbettingodds.atspace.com

    nfl betting odds

    nfl football betting

    http://nflfootballbetting.atspace.com

    nfl football betting

    nfl betting line

    http://nflbettingline.atspace.com

    nfl betting line

    virtual betting

    http://virtualbetting.atspace.com

    virtual betting

    betting etrade spread

    http://bettingetradespread.atspace.com

    betting etrade spread

    betting olympic sports

    http://bettingolympicsports.atspace.com

    betting olympic sports

    football betting

    http://footballbetting.atspace.com

    football betting

    college football betting

    http://collegefootballbetting.atspace.com

    college football betting

    online football betting

    http://onlinefootballbetting.atspace.com

    online football betting

    ncaa football betting

    http://ncaafootballbetting.atspace.com

    ncaa football betting

    football betting system

    http://footballbettingsystem.atspace.com

    football betting system

    football betting line

    http://footballbettingline.atspace.com

    football betting line

    horse betting

    http://horsebetting.atspace.com

    horse betting

    baseball betting

    http://baseballbetting.atspace.com

    baseball betting

    online sports betting

    http://onlinesportsbetting.atspace.com

    online sports betting

    spread betting

    http://spreadbetting.atspace.com

    spread betting

    soccer betting

    http://soccerbetting.atspace.com

    soccer betting

    betting online wager

    http://bettingonlinewager.atspace.com

    betting online wager'
  replies: []
- id: 4561
  author: bol
  date: '2007-06-19T13:07:07'
  content: this is madness!
  replies: []
- id: 4562
  author: truth machine
  date: '2007-08-04T19:35:53'
  content: '"I find it funny that some people complain about the "minimalist" Java API.

    I find it funny that some people complain about the "bloated" Java API.

    I find it funny that often these are the same people."

    They are shed painters who are too stupid to do anything else.  Like this penny wise but pound foolish guy:

    "cost of maintenance makes baby jesus cry

    Posted by: Ron at December 8, 2005 10:42 AM"

    It costs Sun more to field feature enhancement requests for frequently used functionality, and bug reports stemming from user mistakes in implementing their own versions of that functionality, then it would to add it to the library in the first place.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/humane.png)

I am not a big fan of YAGNI, and I have stated it in[many occasions](http://www.beust.com/weblog/weblog/archives/000087.html).  In so doing, I am in disagreement with most of the XP crowd, including Martin Fowler, [ who says](http://www.martinfowler.com/articles/designDead.html#id2249302):

> You don't want to spend effort adding new capability that won't be needed until a future iteration. And even if the cost is zero, you still don't want to it because it increases the cost of modification even if it costs nothing to put in.

Interestingly, in a recent entry, Martin is now praising what is called a "[humane interface](http://martinfowler.com/bliki/HumaneInterface.html)":

> The obvious contrast to a minimal interface is that humane interfaces tend to be much larger, and indeed humane interface designers don't worry too much about the interface being big. 

Humane Interfaces clearly violate both YAGNI and the "do the simplest thing that could possibly work" principle, so I'm quite happy to see them gaining traction.  For these same reasons, you can expect XP advocates to come out strongly against the idea of Humane Interfaces (and [Elliote is leading the charge](http://www.cafeaulait.org/oldnews/news2005December6.html)), which probably guarantees that they will become mainstream in no time :-)

By the way, Elliote, nobody writes `list.get(list.size() - 1)` any more:  we all have a method in a helper class somewhere and we invoke it everywhere we need it.  Wouldn't it be nice if that method were included in the `List` class?

Now, can we please have `java.io.File#readFile()` that reads an entire file in a String so we don't have to rewrite it over and over, like I just did this morning?
