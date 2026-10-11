---
title: Continuous tax
date: '2007-09-25T09:13:32'
slug: continuous-tax
categories:
- Java
comments:
- id: 6893
  author: Brian Doll
  date: '2007-09-25T09:38:19'
  content: 'Typically when discussing this religious topic (it''s a debate about values, as one is not superior to others in all circumstances) the proponents of dynamic languages point to Test Driven Development as being a good way of addressing the reliability of the code in question.

    Oddly enough, some people see the act of writing tests as "continuous tax" in that it''s something else you have to write that does not go toward the "bottom line" of the features you''re implementing.

    I''m interested to get your thoughts, as an author of a testing tool, on how you see the overall reliability of testing in dynamic and strongly typed languages.

    I tend to think that because Java is strongly typed, the typical development team will call their compiler the test suite, and "if it compiles it must be good".

    Without the crutch of compile-time errors in strongly typed languages, and with the urgings toward writing various types of tests (unit, functional, integration) with a framework like Rails that creates the stubs for you, I think we may see more TDD in dynamic languages than we do in Java.'
  replies: []
- id: 6894
  author: Bob Lee
  date: '2007-09-25T09:48:52'
  content: 'I think you''re spot on with regard to consultants liking RoR because they don''t spend much time actually maintaining code. I know. I used to be one.

    They''re not deliberately evil. It''s just difficult to measure problems outside of your own experience bubble.

    What''s funny is, convincing a client to use RoR means the consultant has to do even *less* maintenance of existing software because RoR will likely require lots of new code. Once they''ve realized all this Ruby code is unmaintainable, they''ll hock something new which requires yet another rewrite, and they''ll continue to stay oblivious to the trials of software maintenance.'
  replies: []
- id: 6895
  author: Emmanuel Pirsch
  date: '2007-09-25T10:37:45'
  content: 'There is a "continuous tax" for any system that is being maintained. The fact that the system is build with a statically or dynamically typed language has nothing to do with that.

    It all comes down to how well the system is designed and documented. While statically typed language offer a bit more "default" documentation, they do not offer any more insight about the behaviour of an API than a dynamically linked language.

    Cedric, most of your post are very interesting and well-tought. But everytime you post about dynamic language, it''s the same kind of mindless bashing over and over. This is unfortunate, as I''m sure yo can do better (Erlang post for example).'
  replies: []
- id: 6896
  author: Anthony Eden
  date: '2007-09-25T10:42:17'
  content: I'm with Emmanuel here. I've seen horribly implemented systems that were a nightmare to maintain in a wide variety of languages, including Java, C#, Python, Ruby and Perl. It takes discipline to create a clean, well documented system in any language. The beauty of a language like Ruby is that it takes much less code to accomplish something and  I really believe that less is more. The less code I need to slog through to understand what is actually happening in a program the happier I am.
  replies: []
- id: 6897
  author: Cedric
  date: '2007-09-25T10:48:54'
  content: 'Less code is not necessarily more readable (and it''s often less maintainable).  I much prefer

    draw(Rectangle rect, Point point)

    over

    draw(rect, point)

    Notwithstanding the fact that the former enables automatic refactoring and easy browsing while hardly anything can be deduced from the latter.'
  replies: []
- id: 6898
  author: Jeremy Weiskotten
  date: '2007-09-25T11:45:35'
  content: 'I''m a former C++ and Java developer with 6+ months of experience with Rails. I''ve built and maintained fairly large (enterprise) apps in C++ and Java. While most of my Rails work is new development, there is a pretty large codebase that occasionally requires refactoring, bug fixes, and feature enhancement.

    I do miss some of the automated refactoring from Java (Eclipse). I occasionally miss the templating, suggestion, and code completion features.

    However, in the grand scheme of things, it really hasn''t been that bad. It''s usually pretty obvious what''s what. Refactoring is usually a little easier without types getting in the way, even though it''s usually a more manual process. And modern Ruby editors do a decent job of code completion. Unit and functional tests go a long way towards helping you understand intention, as do the many conventions and idioms in both Ruby and Rails.

    Sometimes less code really is more readable/elegant/maintainable. There tends to be less repetition, with less noise to make the compiler happy. Closures, the Ruby hash syntax, optional parentheses, no semi-colons, etc., help reduce the amount of noise.'
  replies: []
- id: 6899
  author: ''
  date: '2007-09-25T13:59:52'
  content: '"While statically typed language offer a bit more "default" documentation, they do not offer any more insight about the behaviour of an API than a dynamically linked language."

    The key here is not the defaultness of the documentation (e.g., types), but rather that the documentation is machine-enforceable via the compiler''s type checker.  It''s then the user''s responsibility to understand that this guarantees, at compile-time, "not completely wrong" rather than "correct".'
  replies: []
- id: 6900
  author: Phil
  date: '2007-09-25T14:03:30'
  content: '"While statically typed language offer a bit more "default" documentation, they do not offer any more insight about the behavior of an API than a dynamically linked language."

    The key here is not the defaultness of the documentation (e.g., types), but rather that the documentation is machine-enforceable via the compiler''s type checker.  It''s then the user''s responsibility to understand that this guarantees, at compile-time, "not completely wrong" rather than "correct".'
  replies: []
- id: 6901
  author: Sam
  date: '2007-09-25T14:11:47'
  content: I have been playing with Grails (and by implication Groovy) lately and the support for completion and refactoring in IntelliJ is fantastic.  It really does make dynamic language code far more maintainable.  Though the reason this works is because it is layered on top of Java which has a bunch of types that it can depend on.  It also helps that you can declare types for things.  If you like dynamic languages but can't do without IDE assistance, its a good compromise.
  replies: []
- id: 6902
  author: Bob Lee
  date: '2007-09-25T21:38:55'
  content: Bill, you mean something like SOA? Because injecting remote interfaces simplifies things. ;)
  replies: []
- id: 6903
  author: Razvan
  date: '2007-09-26T00:16:57'
  content: 'Ruby is not *the* reference for dynamically typed languages! I suspect that Smalltalk is more widespread in the enterprise than Ruby (in-production systems) and it has refactoring and auto-complete capabilities. Ruby is a garage-built language, and it shows, so please stop using it as a pretext for bashing dynamically typed languages.

    OTOH saying that Java''s weak type system gives you any safety beyond the minimum any statically typed language offers is a flat-out lie. And even that little safety is unavailable once you start using dynamic class loading and reflection. That''s why this kind of functionality is being moved to Spring/App Servers in the Java World, so that most developers never have to maintain such sensitive code. And how is maintaining Spring or Hibernate XML different than maintaining Ruby code ?'
  replies: []
- id: 6904
  author: Lorin
  date: '2007-09-26T11:16:31'
  content: 'Razvan: "And how is maintaining Spring or Hibernate XML different than maintaining Ruby code ?"

    Depends on the IDE your using. Since your Java code has types, and the XML you''re editing has a DTD, the IDE can provide all of the same error correction, auto-completion, navigation and refactoring support in a spring XML file as it does in a Java class.  IntelliJ works that way out of the box. I haven''t used eclipse in a while, but I''d guess there must to be a plugin somewhere by now that supports Spring XML files.  It may be the "minimum any statically typed language offers" but it is quite a lot when working with a decent sized amount of code you didn''t write.

    I use Rails for almost all of my personal one or two developer projects because it is so easy to get something up and running.  At my job, with a bigger team, (often of varying skill levels), and a much bigger codebase, the refactoring, auto-completion, and most importantly, code navigation features of a good IDE are indispensable, IMO.'
  replies: []
- id: 6905
  author: Nolan
  date: '2007-09-26T12:58:51'
  content: Cedric, if you think that ruby results in less code merely because there are no types in method signatures you clearly do not understand ruby.  Meta programming and blocks would be two good examples of why ruby results in less and thus more readable code.
  replies: []
- id: 6906
  author: Rob
  date: '2007-09-26T21:03:19'
  content: 'Amen, Cedric. It is sad that the world makes new batches of hypesters hyenas. With ADD spreading like foot fungus, there''s little help that this will abate.

    I agree with Crazy Bob: there''s just a fundamental difference and for the guys who are just slapping up the latest coat of paint, let them have it. Personally, though, I believe there are no simple projects anymore. There are complex ones, and ones that aren''t worth doing.

    But boy, I guess we just don''t get it. The Nolan entry is so typical: the only thing cults acknowledge are fellow acolytes and people who don''t get it. Consider it an honor to be counted among the latter.'
  replies: []
- id: 6907
  author: Cedric
  date: '2007-09-26T22:10:57'
  content: 'Nolan,

    The only thing you have clearly demonstrated is that you did not understand my post.  Where did I ever say that the only reason why Ruby was more compact is because it lets you omit types?

    For what it''s worth, I am quite familiar with a lot of the concepts that underlie Ruby, including closures, which I was already using in Scheme and CLOS about twenty years ago.

    --

    Cedric'
  replies: []
- id: 6908
  author: Nolan
  date: '2007-09-26T22:29:41'
  content: '"Less code is not necessarily more readable (and it''s often less maintainable). I much prefer

    draw(Rectangle rect, Point point)

    over

    draw(rect, point)..."

    Posted by: Cedric at September 25, 2007 10:48 AM

    Which was a reply to the less code arguement made by Anthony.'
  replies: []
- id: 6909
  author: Trond Arve Wasskog
  date: '2007-09-27T01:01:08'
  content: 'Cedric, Bob,

    Your claim that consultants don''t spend much time actually maintaining code is false. I spend most of my time in projects maintaining code that is going to last for many years. And so do most of my colleagues both in my company and competing consulting companies I know. Using this argument lowers your credibility and is not helpful in this discussion.

    Cheers,

    Trond Arve'
  replies: []
- id: 6910
  author: James Robertson
  date: '2007-09-27T06:54:59'
  content: 'I responded here:

    http://www.cincomsmalltalk.com/blog/blogView?showComments=true&printTitle=Continuous_Confusion&entry=3368339650'
  replies: []
- id: 6911
  author: Rob
  date: '2007-09-27T07:47:14'
  content: 'Hey Nolan:

    You guys are such babies, and, yeah you are a cult, just like Scientology, the minute someone says boo, you come running in accusing them of abuse. Saying that you only recognize fellow acolytes and people who don''t get it is ad hominem? I always love when someone screams abuse and then says the stock stupid ''next time you won''t look like an idiot.'' Another typical feature of cult stupidity: that which you rail (pun intended) against is fine, so long as you are on the sender side.

    Now, on your other ''point,'' are you clearer now that Cedric pointed out to you that your huge distinguishing feature is 20y old? (a point I have made many times...) No of course not.

    Ruby''s moment has already come and gone. You got your 15m to convince people with your collective all air arguments, now it''s over, time for you guys to go be Jim Jones in your corner and leave the rest of us alone. Crusading against ad hominem and abusive speech when the whole fracas was kicked off by Obie''s suckass argument, which was loaded with things like morons and babies, is just plain laughable. Shake the sand out of your shorts, or get someone to change your diaper; it''s time.'
  replies: []
- id: 6912
  author: Paul Beckford
  date: '2007-09-27T08:21:05'
  content: 'Hi Cedric,

    Dynamic (duck) typing and static typing are orthoganol concerns. You can have both if you choose:

    http://www.strongtalk.org/

    With that out of the way. Given units tests and TDD, how much of a tax do you believe duck typing by itself (without static type checks) actually is?

    I agree that name completion in your IDE is nice, but does that compensate for the code verbosity often needed to get around the straight jacket imposed by a compulsory and restrictive static type system like the one in Java?

    Why do you think the more expressive type system in Scala was invented? Why do you think that the type System in Strongtalk is pluggable?

    Infact what experience (if any) do you have with dynamic languages?

    Your post is pure FUD with no supporting evidence.  It will be interesting to see whether you choose to answer the questions I raise.

    Paul.'
  replies: []
- id: 6913
  author: anon
  date: '2007-09-27T13:41:34'
  content: I think Rob forgot to take his meds today.
  replies: []
- id: 6914
  author: Slava Pestov
  date: '2007-09-27T20:30:52'
  content: Cerdic, I agree that static typing has many benefits, and it is good to see "mainstream" programmers finally educating themselves. However, you are a Java programmer, and Java's type system is very weak (nulls anyone?), so while you "talk the talk", you don't "walk the walk" and actually use a language which implements static typing properly.
  replies: []
- id: 6915
  author: anon2
  date: '2007-09-27T20:38:40'
  content: 'Obie Fernandez made a very poor attempat at humor that was interpreted as actual bashing.  IMHO he should take that post down for the good of everyone.

    Cedric - have you developed a moderately-sized rails app and maintained it for more than 6 months?

    I''m just curious.  It''s one thing to have taken a look at something and said "nah, it''s not for me."  It''s another to sling mud when you''re discussing things on an academic / heard through the blogvine type of discussion.

    Almost anyone who comes away from taking a look at Ruby at the very least says "it''s a beautiful language", even if it may not be their particular cup of tea for all, or even any future projects.'
  replies: []
- id: 6916
  author: x
  date: '2007-09-27T20:51:44'
  content: Slava, can you elaborate exactly how the Java type system could be improved?
  replies: []
- id: 6917
  author: x
  date: '2007-09-27T23:28:18'
  content: 'I don''t know what the funniest in Peter''s post:  the fact that he looks like Obie will look like in three years or the fact that he uses Smalltalk as an example that dynamic languages rule the world.

    Talk about deluded...'
  replies: []
- id: 6918
  author: Peter William Lount
  date: '2007-09-28T01:34:34'
  content: 'Mr "X",

    If all you can muster are ad hominem personal attacks then it''s a sad day for you sir.

    Please refrain from such low level non-arguments and either engage in a serious debate or take a hike.

    I look forward to your non-ad hominem discussion.

    All the best,

    Peter'
  replies: []
- id: 6919
  author: Paul Beckford
  date: '2007-09-28T10:24:11'
  content: 'Mr "X",

    " don''t know what the funniest in Peter''s post: the fact that he looks like Obie will look like in three years or the fact that he uses Smalltalk as an example that dynamic languages rule the world.

    Talk about deluded..."

    This is the thing Smalltalk just might, in the guise of Ruby:

    http://rubini.us/

    Rubinius is Smalltalk in everything but name (and syntax), it also manages to integrate lisp as an intermediate form. So it''s Lisp too.

    This is just it. Good ideas are eternal, they don''t fade. If you took the time to read and understand Peters comment, you would realise that there is very little new in Ruby. Most of the programming concepts in Ruby have been rehearsed many times for over 20 years.

    Ruby itself is older then Java and the concepts are even older still. If you take a look at the historical context you will see that Java is in fact the baby, the new untested kid on the block, and after tens years of public experimentation and millions of dollars of investment, Java has been found wanting. Some Smalltalkers (like Alan Kay) could see the flaws at the outset. After 10 years of mixed success with Java, the mainstream programming community are finally catching up with the early ''OO'' adopters like Alan Kay and are gaining their insight!

    Times are changing, and like C++ before Java will have to move to one side to make space for something better...

    Paul.'
  replies: []
- id: 6920
  author: Daniel Serodio
  date: '2007-09-28T10:47:51'
  content: '"x", for an example of how Java''s type system could be improved, see http://nice.sourceforge.net/'
  replies: []
- id: 6921
  author: x
  date: '2007-09-28T10:51:45'
  content: 'Daniel:  sorry, pointing to a different language is not a very helpful answer.  I''d like to see some specific proposals on how the Java type system could be improved, especially the "null" part.  And explaining what is actually wrong with it would be a good start.

    Here is a proposal:  show me something where the Java type system leads to bad Java code but good Nice code.  Then we''ll have something concrete to discuss...'
  replies: []
- id: 6922
  author: Andrew Binstock
  date: '2007-09-28T12:18:03'
  content: I check on Nice periodically, but the project looks quasi-dormant. The last source code refresh appears to be Jan 2006. Anyone know *for sure* what the status is?
  replies: []
- id: 6923
  author: Porter
  date: '2007-10-04T10:46:12'
  content: 'Paul -

    Language evolution is not a zero sum game.  C++ is, if you haven''t noticed, still around, and still quite popular.  Especially amongst the set that doesn''t write web-based applications.

    Peter -

    Smalltalk is great;  unfortunately outside of some DOD projects, I haven''t seen many (if any) large scale commercial products written using Smalltalk.  In real terms, this does make me question the applicability of Smalltalk to the general domain of solving problems with software based systems.  For some reason, it seems like it''s "hard" to produce packaged software using the tool chain provided in most Smalltalk environments.  Or, is that a "non factor"?

    Something about restoring an image from disk to produce a running environment (in essence the freeze-dried state of the system) works really well in academia, but not so well outside of it.  And in spite of the dynamism of Smalltalk - the environment (as you describe it, and I am familiar with) ends up doing a lot of the work that modern IDEs do for languages like Java, C++, C#, etc.  Modern IDEs handle code completion and preform type inspection to make sure you don''t invoke methods which don''t belong to a given type...

    Again, I repeat, language choice is not a zero sum game.  For one to "win" another does not have to "lose".  There''s a lot of room out there for a lot of languages.  I don''t think that any serious developer would deny that there is room for improvement in any language - some interesting work has been done in Java in terms of Groovy and particularly in Scala.

    Dynamic features are not necessarily the antithesis of strong typing.  Groovy shows a little of that with the MOP (Meta Object Protocol) used to "splice" in behavior at run-time.  They''ve even added in Ruby-like features for catching calls/access to methods/properties which don''t exist on an object.  While I like my software systems a little better "planned" than that - I can see how it''s a useful feature.

    ''null'' drive me nuts.  Always has.  Although the "null pointer exception" has little to do with type, and everything to do with scope.  When you see that error in a Java application it typically means you accessed an object that''s no longer (or never became) in scope.  It''s uninitialized.  However, I''ve never really understood _why_ - I mean if I''ve written:

    Person myPerson = null;

    The type is right there!  myPerson should be a Person...  Semantically syntactically this statement represents an object named myPerson with the type of Person, that is uninitialized.  So when you use the following:

    if(myPerson!=null)

    You''re asking is this initialized?

    I agree, it''s ugly syntax...  But it does go deeper than that.  Attempting to add myPerson to a collection will probably fail;  it''s null, and if you''re using generics in Java and you have a typed collection...  I''m pretty sure it''ll fail there as well.  Perhaps better would be having an isNull() method on the base Object...  So that way myPerson could retain it''s type in spite of being set to null.

    Who knows?  I wandered a little far afield.'
  replies: []
- id: 6924
  author: Paul Beckford
  date: '2007-10-04T13:22:24'
  content: 'Hi Porter,

    "Paul -

    Language evolution is not a zero sum game. C++ is, if you haven''t noticed, still around, and still quite popular. Especially amongst the set that doesn''t write web-based applications."

    I agree. This is why I said "move to one side". There is plenty of space for several languages. The right tool for the job.

    I agree with much you say. Smalltalk was a success for people who adapted their programming style to suite the language. in fact "The Smalltalk Way" is what gave rise to Extreme Programming and Test Driven Development.

    A lot of what is said about dynamic languages is FUD based on fear and ignorance. If your language choice was based on following the heard, then fear of change is a natural consequence.

    Most in the Ruby community do not envy the popularity of Java. Because with mass popularity comes the heard mentality. Java is good for some things, but it''s biggest problem is a community and culture that thinks it''s great for everything. C++ suffered from the same problem.

    Paul.'
  replies: []
- id: 6925
  author: lumpynose
  date: '2007-10-04T20:14:56'
  content: It seems to me that not only do dynamic languages incur an overhead in long term maintenance due to the lack of the built in documentation that variable declarations provide, but that it's also exacerbated by languages, for example Ruby, where at run time you can open classes and add or change its methods.
  replies: []
- id: 6926
  author: balbes
  date: '2008-02-07T08:06:14'
  content: But it does go deeper than that. Attempting to add myPerson to a collection will probably fail; it's null, and if you're using generics in Java and you have a typed collection...
  replies: []
---

Crazy Bob [coined a term that I really like](http://crazybob.org/2007/09/gavin-king-on-activerecord.html) and that summarizes very neatly the pros and cons of using dynamically typed languages: 

> Brian, Java in general has a much higher learning curve than Ruby, especially when you consider generics and learning to get the most out of your tools. Java's type system pays off in long term maintainability and usability. You can take a shortcut and skip this step with Ruby, and you'll hit the ground running a little faster, but you'll also pay a continuous tax. 

This "continuous tax" is defined by the fact that when you need to maintain or use an API that was written in a language such as Ruby or Python, you have very little information available to you, and even if you eventually figure it out by looking at the sources of the tests (does anyone ever do that?), this knowledge you gain is ephemereal, and you will have to go through that same exercise if you need to modify this same portion of code a year later. 

Another facet of the continuous tax is that by choosing a language that's dynamically typed, you forego a set of tools (IDE's) and practices (automatic refactorings) that have proven immensely beneficial to software maintenance and evolution. And beware anyone who tells you that not being able to use an IDE is a good thing, because you are most likely talking to a language zealot who will not carefully consider all alternatives before giving you their opinion. 

Interestingly, Ruby and [Ruby on Rails bigots](http://www.jroller.com/obie/entry/top_10_reasons_why_java) seem to be quite oblivious to the art of maintaining software, probably because most of them are consultants and because software that's hard to maintain means charging more consulting fees. Or maybe they just don't need to see beyond a few months in the future of the code base they help develop. 

At any rate, the term "continuous tax" to describe dynamically typed languages is dead-on accurate because it captures very precisely the trade-off you are making when you choose to use a language that is not statically typed.
