---
title: Return of the Statically Typed Languages
date: '2008-05-12T21:16:59'
slug: return-of-the-statically-typed-languages
categories:
- Java
comments:
- id: 7224
  author: Sam
  date: '2008-05-12T22:21:45'
  content: I'm liking using Groovy for prototyping Java code as I can build it quickly, use refactoring in IntelliJ, then convert it to Java with it compiling and running the whole time.  With the type inference in IntelliJ plus using almost all Java (typed) libraries it is enormously powerful.
  replies: []
- id: 7225
  author: Sam
  date: '2008-05-12T22:52:50'
  content: 'Concrete example: pastie.caboo.se/195919

    In that code fragment, IntelliJ did all the imports and knows the type of every object and does completion as if it were Java code. Through some straightforward isomorphic non-breaking transformations I could convert it into Java code.'
  replies: []
- id: 7226
  author: Neil Bartlett
  date: '2008-05-12T23:36:15'
  content: 'I can''t quite work out whether you actually realise Scala is a statically typed language or not. You''re not explicit about it, but it seems odd that in a post where you claim to be defending static languages you immediately attack the most statically typed language available on the JVM, and for fairly ignorant reasons that have nothing to do with its static/dynamic-ness.

    In your last paragraph you mention you will take a "tour of the dynamic landscape and contrast it with Java". The problem is, Java is a very weak example of a static language, so a debate which is fought on the merits of (say) Ruby vs Java is increasingly being won by the Rubyists. Especially as their performance improves, thanks (ironically!) to the JVM. Most of the arguments against static languages are actually against properties of Java that are not universal properties of static languages, and they crumble in the face of sterner competition such as Scala or Haskell.

    So, rather than being a robust defence of static languages in general, this post reads more like the sad wail of a Java developer who just isn''t willing to learn something new, be it a dynamic language OR an alternative static language. This is a big shame because I agree with your overall conclusion, despite how you got there.'
  replies: []
- id: 7227
  author: Steve Yegge
  date: '2008-05-12T23:45:18'
  content: 'Heya Cedric!

    You got this out pretty fast - before I had a chance to follow up with you.  You used the technique I sometimes use, of composing an email to someone (as a test audience), and then posting it to my blog after I''ve composed my thoughts.  Tricky!

    This is all good stuff, of course.  Although now you''ll have the H-M/Haskell/ML folks after you as well.  I guess they''re... Jabba the Hut.

    Here''s the deal, though:  you have to be really, really careful when you say it''s not political.  It''s easy to construe that stance as (highly) disrespectful.  If I say:  "Oh, people with green skin aren''t really human beings, so let''s just take that off the table", I''d be a complete monster -- and this has happened so many times in human history, but people still do it.

    When money is involved, it''s political.  When jobs are involved it''s political.  When *beliefs* are involved it''s political.  And make no mistake, these are all involved here.

    You simply don''t want to be caught advocating a one-party system.  Your "common sense" is clearly not considered quite so common by the _millions_ of engineers using Perl, Python, Ruby, JavaScript, Lua, Lisp, Squeak and other dynamic languages to build large-scale systems that solve real-world problems -- and, I might add, whose salaries depend on it.  I think you''ll find that they don''t appreciate being told their viewpoint is simply not worth considering.

    I know you meant well, but you''re in danger of not merely putting your foot in your mouth, but jamming both hands and both feet down your throat so far that you look like a grotesque human pretzel.  Not good.

    This issue _is_ political, and I encourage you to think deeply about it, and then apologize to those whom you''ve (no doubt unintentionally) slighted by saying their position is simply "not common sense".

    There is room for multiple opinions here, but respect is a critical ingredient.'
  replies: []
- id: 7228
  author: Ignacio Coloma
  date: '2008-05-13T00:14:59'
  content: '> And the weird thing is, I realized early in my career that I would actually rather have a runtime error than a compile error.

    I have been working with javascript exclusively these last two weeks, and boy, how I miss the compile-time check. I could not imagine my life as this in the long term.

    In my experience, development is a (20% coding - 40% debugging - 40% staring at others'' code) thing. Dynamic helps with the first 20% and penalizes the remaining 80%, so it clearly is not for me.

    If I had to choose, I would prefer learning another javascript framework (dojo, ext, jquery) than Ruby. I would get more benefit out of it.'
  replies: []
- id: 7229
  author: Tony Morris
  date: '2008-05-13T00:44:44'
  content: 'I''m not sure which mistake is bigger; yours or Steve''s. I strongly encourage you to understand both implicits and pattern matching (algebraic types) before drawing such superficial conclusions. I''d feel a bit silly posting a tutorial in this little box while there are so many out there.

    I''ve written a few things on both Scala''s implicits and algebraic data types, though I''m not sure they''ll help (more important is that you really how out-of-your-depth you are). Would you like a link?'
  replies: []
- id: 7230
  author: jaman
  date: '2008-05-13T01:47:08'
  content: 'I am a manager and I don''t understand steve''s argument. Let''s say our development team can implement in ruby 5x faster than java. In our case (not sure about others), 90% of the programmign work is not in development, but in maintenance and testing - the does ruby help here. If we are building a business out of the software, we will be running with the platform for the next 3-5 years, so I need the following:

    1. Abundance of programmers

    2. Simple to pick up

    Does ruby help with this as well? Or is it just as I suspect, simply the initial prototype?'
  replies: []
- id: 7231
  author: Andrew Shuttlewood
  date: '2008-05-13T01:50:34'
  content: 'Not everything works well with classes - compilers are a case where sometimes it''s easier to destructure objects using pattern matching rather than use objects. Basically, scala is providing a handy way of implementing the Visitor pattern without the pain of double dispatch and other nastiness and having to hold explicit state.

    Also there are many times where we all have to implement complex and fiddly objects where simple pattern matching is more than good enough and gives us more flexibility'
  replies: []
- id: 7232
  author: matthias
  date: '2008-05-13T01:54:10'
  content: 'Can you exapnd a bit on your scala comments?

    > "Have you taken a look at implicits? Seriously? Just when I thought we were not just done realizing that global variables are bad, but we have actually come up with better ways to leverage the concept with DI frameworks such as Guice, Scala knocks the wind out of us with implicits and all our hardly earned knowledge about side effects is going down the drain again."

    A) How do implicit arguments relate to global variables? B) How do imicit arguments relate to side effects?

    def aFunction(arg) = {

    implicit val aLocalVariable = new FooBar()

    aFunctionTagingAnImplicitArgument(arg)

    }

    No global variables, no side effects are cause (not variables are changed, no IO, no whatever).

    > "As for pattern matching, it makes me feel as if all the careful data abstraction that I have built inside my objects in order to isolate them from the unforgiving world are, again, thrown out of the window because I am now forced to write deconstructors to expose all this state just so my classes can be put in a statement that doesn''t even have the courtesy to dress up as something that doesn''t smell like a switch/case..."

    object even {

    def unapply(x : Int) = x % 2 == 0

    }

    ...

    someNumber match {

    case even => "someNumber is even"

    case _    => "someNumber is noteven"

    }

    What details did I expose? I mean I''m talking about the basic type Int. And I exposed that you can find out whether a number is even or not. Damn that will break all my abstractions.'
  replies: []
- id: 7233
  author: Ignacio Coloma
  date: '2008-05-13T01:56:47'
  content: 'Tony,

    I love these kind of comments: full of technical detail, considerate, and to the point.

    Instead of making it personal, could you please counterargument the point about implicits making it easy to introduce side-effects? Lots of things around scala remind me about hard debugging C++ days.

    Being more concrete, I would love someone sharing his debugging woes and development antipatterns using scala. To me, implicits closely resemble one (since I don''t like black magic in my code), but I''m open to opinions.'
  replies: []
- id: 7234
  author: Mark Lee Smith
  date: '2008-05-13T02:23:18'
  content: 'With all due respect, the honesty is very endearing, but If you can''t understand a 200 line program you wrote just days before maybe programming was a bad career choice?

    This certainly isn''t my experience with the dynamic code I''ve worked on, so I can''t agree.'
  replies: []
- id: 7235
  author: Tony Morris
  date: '2008-05-13T02:29:18'
  content: 'Hi Ignacio, I don''t intend to make personal comments (and I don''t think I did). I actually started writing a refutation to Cedric''s mistakes (I concluded that Steve''s are worse, but only just) and to be honest, I lost patience. I''d really rather Cedric understand the topic at hand before making comments and I''m more than happy to help that be the case (or anyone on this blog for that matter). If Cedric is *keen to understand his mistakes*, then I''ll take action, but otherwise, I''ll just make a passing remark that he is significantly out of his depth here in the hope that he pursues the issue further rather than draw these conclusions.

    I''d rather not play the public blogging game. I hope this is an acceptable approach.'
  replies: []
- id: 7236
  author: Tony Morris
  date: '2008-05-13T02:38:15'
  content: 'I have written about implicits in an article titled "The Power of Type-classes with Scala Implicit Defs" (though, not really supporting or counter-claiming Cedric''s mistakes)

    I have written about algebraic data types (the point of pattern matching) in an article titled "Algebraic Data Types Again".

    As a former programmer on the Java implementation, the claim about generics is wildly false and I produce a counter-example with a project called "Functional Java".

    Again, I will bother with a detailed explanation of the falsity of Cedric''s claims only if pushed and I can be reasonably assured of a positive outcome from my efforts. I have a thorough knowledge of both Java and Scala (and the theory of the topics at hand) and am more than willing to assist others in understanding it too. I don''t do it for the ego-centric idea of fun.

    * I can''t have URLs in a post? sheesh!'
  replies: []
- id: 7237
  author: she
  date: '2008-05-13T03:16:19'
  content: 'The thing is ... I advocate one-language-to-rule-them-all.

    Sure this is not possible, for example ruby will always need a faster language (C or C++).

    But Java alone is also a bad decision. You dont want to write tiny classes in java right? But in ruby this goes without even *thinking*, you just write your class Foo, have it do its stuff, and integrate it into your ecosystem of ruby and C code. (And yaml for data)'
  replies: []
- id: 7238
  author: MIchael Foord
  date: '2008-05-13T04:11:19'
  content: ':-)

    You''re wrong.'
  replies: []
- id: 7239
  author: Paulo Gaspar
  date: '2008-05-13T04:39:13'
  content: '@ Steve Yegge (was it really him on this comment?):

    Your comment sure is totally political: no technical arguments at all.

    It is also contradictory since it fails the "respect is a critical ingredient" rule it professes at its end, making a few unpleasant insinuations about Cedric''s intentions/character instead of just biting the bullet and fight back his arguments.

    Sorry Steve, but I expected better than that.

    Besides, using arguments like the "_millions_ of engineers" and "whose salaries depend on it" makes me think you should get into politics full time. I don''t see how these are arguments have place in a technical discussion.

    Can you please just reply to Cedric TECHNICAL arguments?

    If you have any valid TECHNICAL counter-argument, I am interested. The "millions of jobs depend on Perl" stuff you can leave it for the Perl Programmers Union speach.

    Have fun,'
  replies: []
- id: 7240
  author: Adam Fitzpatrick
  date: '2008-05-13T05:10:01'
  content: '> You dont want to write tiny classes in java right?

    Sure I do. I do it all the time. Granted, the signal-to-braces ratio is a lot worse than I''d like, but it still leads to more readable code.'
  replies: []
- id: 7241
  author: pko
  date: '2008-05-13T05:59:24'
  content: 'Paulo, how was the "80% common sense" remark technical?

    Also, as others mentioned scala is not a dynamically typed language, not to mention the confusion about scala''s implicit. so much about technical arguments.'
  replies: []
- id: 7242
  author: Fred
  date: '2008-05-13T06:03:55'
  content: '> Again, I will bother with a detailed explanation of the falsity of Cedric''s claims only if pushed and I can be reasonably assured of a positive outcome from my efforts.

    Guess you needn''t bother then.  Thanks for stopping by!'
  replies: []
- id: 7243
  author: Ignacio Coloma
  date: '2008-05-13T06:15:15'
  content: 'I usually do not get into these kind of discussions, but maybe this is good timing for learning a bit, since I do not know scala good enough. Suppose this if clause is failing without any stack trace:

    if (a == b)

    In java, I need to check a and b. In scala, it''s something like:

    * a and b.

    * is equals overriden.

    * has a or b any implicit defined, and is there any equals overriden for that type.

    (Maybe there are more, I don''t know)

    Is that so? As I said, I spend much more time debugging than developing, so I am interested in this kind of things.'
  replies: []
- id: 7244
  author: Justin Duewel-Zahniser
  date: '2008-05-13T07:15:02'
  content: '"Let me turn the table on you and imagine that one of your coworkers comes to you and tells you that he really wants to implement his part of the project in this awesome language called Draco. How would you react?"

    This is disingenuous.  There''s a difference between someone wanting to write using an Amiga-based language ignoring the target platform and someone wanting to use, say, Python which is supported on the target platform.  I''m not saying their reasons for saying no aren''t valid (Steve has changed is view on this, as he says) but that your example is silly in a non-constructive way.'
  replies: []
- id: 7245
  author: Adam Kahtava
  date: '2008-05-13T07:45:02'
  content: 'So... basically what I hear you saying is: too much statically type language kool-aid and we all loose objectivity.'
  replies: []
- id: 7246
  author: Sam
  date: '2008-05-13T08:21:56'
  content: Wow, the Scala people are starting to sound as shrill and annoying as the Lisp people. Maybe functional languages do that to people.
  replies: []
- id: 7247
  author: James Iry
  date: '2008-05-13T09:24:02'
  content: '"Have you taken a look at implicits? Seriously? Just when I thought we were not just done realizing that global variables are bad, but we have actually come up with better ways to leverage the concept with DI frameworks such as Guice, Scala knocks the wind out of us with implicits and all our hardly earned knowledge about side effects is going down the drain again. "

    Implicits have nothing to do with global variables or side effects.  I don''t know what led you to that conclusion.

    Implicits cover 4 bases.  The first is a statically type safe way to add functionality to an existing class - somewhat like C#''s extension methods.  The second base is to cover default parameters.  The third base is an encoding of Haskell''s type classes. The 4th is a type safe way to create your own coercions similar to the way Java can coerce anything to a String as needed.

    They have nothing to do with DI, since DI is about composition and not coercion. You can use DI frameworks with Scala if you want.  Many common use cases are subsumed by Scala''s mixin model, though not all.

    "As for pattern matching, it makes me feel as if all the careful data abstraction that I have built "

    In reference to ML and Haskell this is called the representation problem: in those languages for pattern matching to work you have to expose the representation of your data types.  Wadler has a nice paper on the subject where he proposes "views":  homepages.inf.ed.ac.uk/wadler/topics/language-design.html.

    Both F# and Scala were influenced by that paper and have an answer.  In both languages you can expose just as much representation as you want.  Also, remember that Scala is an OO language with core semantics that are very similar to Java''s.'
  replies: []
- id: 7248
  author: Paulo Gaspar
  date: '2008-05-13T10:19:47'
  content: '@ PKO

    Yes, there were non-technical arguments from Cedric, which have a low objective value. Steve, however, on his reply, used NO technical arguments at all.

    Tony already made that point about Scala.

    I think that talking about features of a specific script language is a distraction from a compiled v. scripting language debate (Cedric''s bad IMHO).

    Either you have a compiled vs. scripting debate with low focus on language features or you better go for a language A vs. language B. debate feature by feature (and you better know them both well enough).

    Have fun,'
  replies: []
- id: 7249
  author: brian doll
  date: '2008-05-13T10:36:26'
  content: 'I respect both sides of this discussion while personally leaning in favor of dynamic languages. More importantly, however, I am glad to see these two rather iconic (go ahead, get a big head!) voices discussing this topic in an open context.

    Perhaps you guys could arrange for a Google Tech Talk with a debate format, where you make your case.  While nobody should be looking for a "winner", it would be great to get a lot of the details (technical and political) out on the table in that format.  I''m sure this would bring a ton of audience participation, too.

    Cheers,

    b'
  replies: []
- id: 7250
  author: Mark
  date: '2008-05-13T11:24:01'
  content: '"I found myself in this very predicament when trying to improve a Ruby program that 1) I just wrote a few days before and 2) is 200 lines long. I was staring at an object, trying to remember what it does, failing, searching manually in emacs where it was declared, found it as a "Hash", and then realized I still had no idea what the darn thing is. You see my point..." -- yeah, sounds like you need to write a couple tests.'
  replies: []
- id: 7251
  author: Ray Cromwell
  date: '2008-05-13T11:37:08'
  content: 'I think you''ll find that GWT does alot of things that are much harder to do in Javascript, which require you spend lots of time hacking up elaborate build and dependency scripts, adding weird hungarian-notation-like idioms to JS variable naming or comments, and writing tools to process your special idiomatic JS.

    The ImageBundle stuff in GWT is just the type of the iceberg. There''s also ImmutableResourceBundle/StyleInjector, and how about statically compiled and checked CSS Selectors in a jQuery-like selector library? GWT''s ability to aggressive prune and inline is unmatched for certain use cases, which is why I use it, not believe I love Java, but because it simply produces the fastest, most compact Javascript, with fewest HTTP requests of any tool. Ultimately, my aim is to produce the best user experience, and if that means holding my tongue and swallowing some yucky Java verbosity, so be it.

    I agree with many of the criticisms of Java, I''m not a big fan of the required boilerplate and verbosity, but I have to say, it is depressing to see hackers with decades of experience still being dogmatic about stuff people argued about in their teens on usenet, instead of just getting work done, picking tools that work for you.

    Every time I see another big flame war over static vs dynamic typing, I just have to sigh. There is simply no objective way to solve this IMHO. People are different. It''s like trying to argue whether Chinese is technically more efficient for writing poetry than English or French.'
  replies: []
- id: 7252
  author: Robert Hanson
  date: '2008-05-13T13:26:01'
  content: '@jaman

    jaman> I am a manager ... Let''s say our development team can implement in ruby 5x faster than java.

    I think that this is a poor assumption unless your application is trivial.  I think that the development time would be about the same no matter what language you use, assuming that your developers are knowledgeable in that language.

    jaman> 90% of the programmign work is not in development, but in maintenance and testing

    So why only choose one language?  I do my coding in Java, my testing in Groovy (you could use Ruby as well).  This makes my tests terse while my core code base stays highly maintainable.

    I was a Perl developer for a long time before Java, and in my experience it is easier to maintain Java code.  The tools story for Java is really good, and that IS important.

    Among other things, the tools can detect bugs for you, saving you maintenance dollars. FindBugs is one such tool that can identify common bugs in compiled Java classes.  Of course the Ruby developers will try to convince you that they never make mistakes.

    Then there is the issue of scalability.  If this could be an issue for you, you may want to look into the problems that Twitter has has with using Ruby.

    jaman> I need the following: 1. Abundance of programmers

    Java.  Seach for "TIOBE index" on Google.  Java is  #1, and well ahead of Ruby.  The index is based on the number of skilled workers, vendors, and courses.

    jaman> 2. Simple to pick up

    If your developers don''t already know the platform you are developing on, you can expect a substantial increase in the cost of your maintenance.

    If you use a language without really good tool support the problem is even worse, because it is harder to refactor the code into something usable.

    So again, I recommend Java.  No easier to learn than Ruby, but easier to maintain due to the outstanding tools.'
  replies: []
- id: 7253
  author: tcmaster
  date: '2008-05-13T14:00:16'
  content: Software is not writen for wrting, but for reading and maintaining. Script language till now are hard to maintain, refactoring. Mostly writing in script language makes one happy, even amazed, but reading, mostly feels like in hell...
  replies: []
- id: 7254
  author: Andrew Binstock
  date: '2008-05-13T14:08:45'
  content: Cedric's point about generics usage in Java is spot on. The difficulty is that when you run into code written by the other 10% of developers, you feel like you're reading another language. Even with that limitation, though, I'd rather have the generics as they are currently in Java, rather than no generics at all.
  replies: []
- id: 7255
  author: Bob
  date: '2008-05-14T13:40:40'
  content: 'A couple of minor issues...

    "I would therefore revise your break down as follows: the reason for not using a non-mainstream language in a big company is 10% politics 10% technology and 80% common sense."

    What is and is not "common sense" is usually tied to the ideological positions of the speaker.

    So, of course, to someone who, in this case, prefers Java, sticking with Java is the common sense decision. Just like, say, letting the market do its mystical magic is common sense to a liberal, or (to give it a topical edge) censoring the internet is common sense to a Chinese person.

    There are reasons why a company should avoid esoteric languages. Perhaps you could be more explicit about what you think they are in this talk thingy you mentioned.

    Secondly, how is bashing Scala some great assault on dynamically-typed languages? I''ve never actually used Scala, but I''ve seen some code, and it''s pretty obvious that it''s not dynamically-typed. Well, you could say certain features give it dynamism, but if you use them, you''d have to conclude that Java is dynamically-typed as well. Polymorphism, for instance.

    Those are just niggles really. I look forward to reading/watching this talk. Hopefully it won''t just be "why should anyone ever need anything but Java?" which is what this post feels like. Nobody likes a bigot.'
  replies: []
- id: 7256
  author: Mats Henricson
  date: '2008-05-14T15:45:52'
  content: 'Cedric, my enthusiasm for Scala was also somewhat mellowed when I bumped into implicits, and I still want to understand why the inventors of Scala believe they were such a great idea, but your objections against case classes are a bit lame. If you don''t like them, then don''t use them.

    I''m still enthusiastic about Scala, but I''m convinced we need great Scala IDE support yesterday, or the verdict is going to be harsh for creating a language that is so hard to read.'
  replies: []
- id: 7257
  author: Paul Beckford
  date: '2008-05-15T02:34:13'
  content: 'Everyone here including Cedric are missing the point I feel. The most important success factor is the people. Whe have tried dumbing down programming and relying on tools and have had mixed results.

    Others have been advocating for sometime that a valid alternative is to educate the programmers, and provide them with powerful higher level languages, allowing them to do more with less.

    The key thing here is choice. And with the dominance of C++ and it''s prodigy (Java and C#) there was little choice in mainstraim programming for a long time. A bit like the model T Ford, you can have any colour you liked as long as it''s Black.

    Now with the reassurgance of Dynamic languages, and a new interest in computer science, choice has been restored.

    What does this mean? Well I can see the industry segmenting into low cost developer teams with 20-30 odd developers operating out of Mumbai. These teams are likely to stick with Java/JEE and hire the lowest cost developers they can find. Then there will be the "three men in a shed" startup relying on "working smarter" and leveraging expressive higher level languages to beat the 30+ man competition. This group will be inspired by the essays of Paul Graham, and are likely to be using light-wieght Agile approaches and will higher the best and the brightest irrespective of cost.

    Intersting times. The main things is that there is now viable alternatives which is good. We all get to choose how we would rather work.

    I know my choice. I''m just greatful that I can now exercise it :)'
  replies: []
- id: 7258
  author: Tetsuo
  date: '2008-05-15T14:24:08'
  content: '"When money is involved, it''s political. When jobs are involved it''s political. When *beliefs* are involved it''s political. And make no mistake, these are all involved here."

    So, a decision is technical only if it ignores cost, time, and the fact that you''ll only find someone capable of maintaining the ''thing'' if you go to the basement of some university?'
  replies: []
- id: 7259
  author: Sony Mathew
  date: '2008-05-16T11:54:44'
  content: 'Nice...I have to say.  I always wanted to see you and Yegge go at this topic.  I was very impressed with your arguments (and i''m not easily impressed).  I hope you will include an additional argument at your Jazoon presentation around how Static Typing provides for an assertive/defensive or contractual style of programming that is very beneficial toward "proving" execution correctness - as I commented on Yegge''s blog.

    Its too bad Yegge took your comment badly regarding "common sense use of a mainstream language".  Yes there are Perl, Ruby shops - but they too most likely maintain just one language standard in their shop.  It is indeed just common sense and it does not dismiss in anyway these shops or their use of a dynamic language as their shop standard.'
  replies: []
- id: 7260
  author: James Robertson
  date: '2008-05-19T03:52:32'
  content: '"What will keep preventing dynamically typed languages from displacing statically typed ones in large scale software is not performance, it''s the simple fact that it''s impossible to make sense of a giant ball of typeless source files, which causes automatic refactorings to be unreliable, hence hardly applicable, which in turn makes developers scared of refactoring. And it''s all downhill from there. Hello bit rot.

    I hate giving anecdotal evidence to support my points, but that won''t stop me from telling a short story that happened to me just two weeks ago: I found myself in this very predicament when trying to improve a Ruby program that 1) I just wrote a few days before and 2) is 200 lines long. I was staring at an object, trying to remember what it does, failing, searching manually in emacs where it was declared, found it as a "Hash", and then realized I still had no idea what the darn thing is. You see my point.."

    To be honest, if you have this level of problem, you shouldn''t be writing code.  Period.'
  replies: []
- id: 7261
  author: Carl Gundel
  date: '2008-05-19T07:44:24'
  content: '"I found myself in this very predicament when trying to improve a Ruby program that 1) I just wrote a few days before and 2) is 200 lines long. I was staring at an object, trying to remember what it does, failing, searching manually in emacs where it was declared, found it as a "Hash", and then realized I still had no idea what the darn thing is. You see my point..."

    I can''t believe you use that as an anecdote.  How can you write a 200 line program in a high level language and then blame the language because you don''t understand what it does?  Try again.'
  replies: []
- id: 7262
  author: daredevil
  date: '2008-05-19T17:10:48'
  content: Can you please put that ruby code here ? So it could be analyzed.
  replies: []
- id: 7263
  author: ''
  date: '2008-05-22T14:30:04'
  content: 'List> tasks = new ArrayList>();

    too frequent'
  replies: []
- id: 7264
  author: Lee
  date: '2008-05-23T08:58:19'
  content: 'Ignacio said something that I think bears on all the discussion. He said programming was 10% coding, 40% debugging and 40% staring at other peoples code.

    Of course, I would break it up a little differently :) but my key difference is the time spent thinking. So here goes: 10% coding, 30% debugging, 30% thinking about what other peoples code does (and staring at it) and 30% thinking about what the code should do and how it should work.

    Several points:

    1) You don''t spend much time typing so the number of keys pressed doesn''t much matter.

    2) You spend time reading, so the number of characters to read doesn''t much matter if you can fit it in about one screen view.

    3) You spend a lot of time figuring out what old code does. This can either mean you''re hosed because someone can write unreadable code in any language. Or it can mean a language should encourage and allow readable code.

    4) You spend a lot of time debugging so the tools surrounding a language (along with the language constructs) need to make it easy to debug. Debugging in my dictionary includes everything from static analyzers to runtime single-stepping and breakpoints to print statements (i.e. logging).

    5) Finally, because you spend a lot of time thinking about what to do, a programmer has to invest in themself which is totally independent of the language features.

    One more thing, I suspect anyone out of university for more than 2 years has written 200 lines of unreadable code in more than one language. It seems to me that is part of our education process. We see how to write unreadable code. We see how hard it makes our job in the future. We change the way we do things to avoid it. (Doctor, doctor, it hurts when I hold my arm over my head like this ... Well, don''t hold your arm that way.)'
  replies: []
- id: 7265
  author: Curt Sampson
  date: '2008-05-29T11:37:17'
  content: '"...all our hardly [sic] earned knowledge about side effects is going down the drain again."

    I know you meant "hard earned," but I read it, due to the typo, as "hardly learned," and that might even be a better way of putting it.

    cjs@cynic.net'
  replies: []
- id: 7266
  author: Tony Morris
  date: '2009-11-16T03:30:02'
  content: 'Ignacio,

    Sorry for the late reply. I hope you receive this.

    I think it is pretty clear that Cedric is wrong on many points here and I''m happy that others have seen through it. I''d be interested in taking the matter further with you privately if you like. I''m not much interested in "having it out" on a public forum such as this, where learning and discussion can easily get out of hand.

    Cheers.'
  replies: []
- id: 7267
  author: Mireya
  date: '2010-10-02T07:12:44'
  content: This article was written in 2008. And although it might have been written in the stars that Statically Typed Languages would return, de facto evidence since proved it wasn't to be the case. We can't always be right. No worries!
  replies: []
- id: 7268
  author: Mike Jennings
  date: '2010-11-04T06:44:02'
  content: 'Interesting and well written article, thanks! I''m definitely in the "strongly typed" camp, but as I get older, I suspect that the whole "typed vs. dynamic" thing is a matter of taste (and possibly religion). I would be curious to find out what (if any) correlation there is between age and language preference.

    The old farts that I know tend to be fans of strongly typed languages, whereas the young brilliant people tend to love dynamic languages (with extra syntactic sugar please!)'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/skywalker.jpg)

My good buddy Steve Yegge posted [quite an article](http://steve-yegge.blogspot.com/) yesterday. It's the transcript of a presentation he gave at Stanford a few days ago, and the overall idea is that dynamically typed languages are on the rise and statically typed languages are on their way out. 

I highly recommend reading the entire transcript, it's very entertaining and, like a lot of the stuff that Steve writes, filled with insight and provocative thoughts. Unfortunately, this time, just like a supervillain, Steve put his fantastic observation skills and remarkable breadth of knowledge to serve a lost cause. There's no easy way to put it, Steve, but you're just wrong :-) 

I sent him a reaction email shortly after he posted his article, and he encouraged me to make it public in an attempt to document our two opposing viewpoint publicly. I'm happy to be the Luke Skywalker to his Darth Vader. 

Evil shall not prevail. 

### Scala

First of all, I was initially very excited about Scala until I realized that two features were close to being deal breakers for me: implicits and pattern matching. 

Have you taken a look at implicits? Seriously? Just when I thought we were not just done realizing that global variables are bad, but we have actually come up with better ways to leverage the concept with DI frameworks such as Guice, Scala knocks the wind out of us with implicits and all our hardly earned knowledge about side effects is going down the drain again. 

As for pattern matching, it makes me feel as if all the careful data abstraction that I have built inside my objects in order to isolate them from the unforgiving world are, again, thrown out of the window because I am now forced to write deconstructors to expose all this state just so my classes can be put in a statement that doesn't even have the courtesy to dress up as something that doesn't smell like a switch/case... 

###  About the difficulty to impose a non-mainstream language in the industry 

> this in the beginning: this is 80% politics and 20% technology, right? You know. 

I find this very disingenuous. Steve, you know it's not true, right? Most of the people around you would love to be able to use the language that they really like, but the cost for the company just doesn't make sense. I would therefore revise your break down as follows: the reason for not using a non-mainstream language in a big company is 10% politics 10% technology and 80% common sense. 

Let me turn the table on you and imagine that one of your coworkers comes to you and tells you that he really wants to implement his part of the project in this awesome language called Draco. How would you react? 

Well, you're a pragmatic kind of guy and even though the idea seems wacky, I'm sure you would start by doing some homework (which would show you that Draco was an awesome language used back in the days on the Amiga). Reading up on Draco, you realize that it's indeed a very cool language that has some features that are a good match for the problem at hand. But even as you realize this, you already know what you need to tell that guy, right? Probably something like "You're out of your mind, go back to Eclipse and get cranking". And suddenly, you've become *that* guy. Just because you showed some common sense. 

###  Tools 

> Not harder to build dynamic tools than for static languages, just different. 

I still strongly disagree with that. It is different *and* harder (and in some cases, [impossible](http://beust.com/weblog/weblog/archives/000414.html)). Your point regarding the fact that static refactoring doesn't cover 100% of the cases is well taken, but it's 1) darn close to 100% and 2) getting closer to it much faster than any dynamic tool ever could. By the way, Java refactorings correcting comments, XML and property files are getting pretty common these days, but good luck trying to perform a reliable method renaming in 100 Ruby files. 

###  Generics 

I no longer bother trying to understand why complex Generic examples are so... well, darn complex. Yes, it's pretty darn hard to follow sometimes, but here are a few points for you to ponder: 

  * 90% of the Java programmers (including myself) only ever use Generics for Collections. 
  * These same programmers never go as far as nesting two Generic declarations. 
  * For API developers and users alike, Generics are a huge progress. 
  * Scala still requires you to understand covariance and contravariance (but with different rules. People seem to say that Scala's rules are simpler, I'm not so sure, but not interested in finding out for the aforementioned reasons). 


###  Performance 

I'm actually surprised you spend so much time defending the performance of dynamic languages, because I don't think it's worth it. Yeah, they're slower overall but in the same margin as Java used to be slower than C++, and we know how that turned out. Not much to argue about here in my opinion. 

What will keep preventing dynamically typed languages from displacing statically typed ones in large scale software is not performance, it's the simple fact that it's impossible to make sense of a giant ball of typeless source files, which causes automatic refactorings to be unreliable, hence hardly applicable, which in turn makes developers scared of refactoring. And it's all downhill from there. Hello bit rot. 

I hate giving anecdotal evidence to support my points, but that won't stop me from telling a short story that happened to me just two weeks ago: I found myself in this very predicament when trying to improve a Ruby program that 1) I just wrote a few days before and 2) is 200 lines long. I was staring at an object, trying to remember what it does, failing, searching manually in emacs where it was declared, found it as a "Hash", and then realized I still had no idea what the darn thing is. You see my point... 

###  Javascript 

Javascript is on the verge of becoming part of the assembly language family, and toolkits like GWT are making sure that this will happen before too many developers join the pool of low level language victims. I'm sure you can relate to that stigma. 

Also, I think you are vastly overestimating how the optimization work on Javascript is going to advance the science in that area. I'm sure thousands of very smart researches are busy doing that right at this moment, but come on: Javascript has become very much good enough for a lot of apps. 

And what's interesting is that, as opposed to Java, Javascript has an upper bound where it no longer matters to make things go faster, because there is only so much you want to do on the client anyway. Gears is even showing us that we can do a decent amount of processing on the client, but so few applications need that that I think the backdoor tricks that GWT uses (such as image bundles) are much more clever and much more useful than any of the stuff that you show in these slides. 

###  Emacs 

> You know, even Emacs has to evolve. 

No: it's Emacs users who have to evolve. 

###  Error messages 

> And the weird thing is, I realized early in my career that I would actually rather have a runtime error than a compile error. 

You probably already know this, but you drew the wrong conclusion. You didn't want a runtime error, you wanted a clear error. One that doesn't lie to you, like CFront (and a lot of C++ compilers even today, I hear) used to spit in our faces. And once I have a clear error message, I much prefer to have it as early as possible, thank you very much. 

###  Trace trees 

The PDF link is broken. 

###  The dynamic nuclear winter 

> And everybody else went and chased static. And they've been doing it like crazy. And they've, in my opinion, reached the theoretical bounds of what they can deliver, and it has FAILED. 

Quite honestly, words fail me here. 

###  Flamewar 

Finally, the largest flamewar that I ever witnessed involving Stallman was when he dissed XEmacs on comp.lang.emacs and it quickly turned out in the discussion he hadn't even launched the darn thing. Get your history facts straight! 

###  Conclusion 

Interestingly, I am currently working on a brand new presentation on this very topic that I'll be making at [Jazoon](http://jazoon.com/) next month. I'm still working out the details, but this presentation will take a quick tour of the dynamic landscape, contrast it with Java and argue that statically typed languages in general and Java in particular have never been in a stronger position to remain the language of choice for large scale software for the decade to come. 

Hope to see some of you there!
