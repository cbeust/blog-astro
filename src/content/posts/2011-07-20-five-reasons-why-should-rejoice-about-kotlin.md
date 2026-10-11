---
title: Five reasons why you should rejoice about Kotlin
date: '2011-07-20T11:39:47'
slug: five-reasons-why-should-rejoice-about-kotlin
categories:
- General
- Kotlin
comments:
- id: 9030
  author: Jan Kotek
  date: '2011-07-20T13:23:03'
  content: 'A few points

    1) Groovy has very good IDE support by Spring Source

    2) Groovy is backed by Vmware (Spring Source)

    3) There is no way Eclipse would rolled out their own language, those guys are very conservative.

    4) Gosub already has Reified generics

    Otherwise I agree 100%'
  replies: []
- id: 9031
  author: Cedric
  date: '2011-07-20T13:25:47'
  content: Thanks for the corrections, Jan, I fixed my mistake about reified generics.
  replies: []
- id: 9032
  author: Sam Pullara
  date: '2011-07-20T15:57:22'
  content: I'm really excited about this as well. IDE support has been the achilles heel of new languages for the JVM when you are coming from Java.
  replies: []
- id: 9033
  author: John Haugeland
  date: '2011-07-20T16:03:27'
  content: '"Now, did it ever occur to you that a language could allow several words to mean ??one??, and ??two??, and ??three??, etc???"

    Single, double, triple.

    Singlet, pair, threesome.

    Singleton, multiton.

    Unique, repeated.

    Individual, couple.

    Alone, lone, lonesome, onely, solitary, singular, solo, stag, unaccompanied; together, grouped, accompanied, along.

    PPeerless; peered.

    Special, exceptional; exclusive; odd; unique.

    Individual; group.

    One-fold, two-fold/bi-fold, three-fold.

    Homogenous; heterogenous or diverse.

    Isolated; clustered; repeated; cloned.

    Distinct; mixed.

    We change how we say numbers for context, for numericity, for whether we''re distinguishing, grouping, separating, unifying, whether we''re referring to something with history; whether it''s concrete or hypothetical; et cetera.

    Hell, we can''t even pick whether to use digits, roman numerals, upper or lower case letters or symbols when bulleting lists.'
  replies: []
- id: 9034
  author: Andrew Binstock
  date: '2011-07-20T16:13:19'
  content: 'In addition to the points you make, I think taking the builders from Groovy is a brilliant move.

    Just to fill in on some of the logistical details from the presentation yesterday: 1) They''re looking to ship the first beta by end of year; 2) Currently, the compiler is not standalone, but part of the IDE (!). They expect to break it out separately by the time beta rolls around; 3) the largest programs they''ve written w/ Kotlin are a few hundred lines. These factors tend to make me believe that lots will change in the language between now and the release.'
  replies: []
- id: 9035
  author: Carson Gross
  date: '2011-07-20T20:35:32'
  content: 'The #1 focus on the Gosu team right now is our IntelliJ plugin.

    These things just take time.'
  replies: []
- id: 9036
  author: Hamlet D'Arcy
  date: '2011-07-20T21:34:14'
  content: '&gt;&gt; None of the existing JVM languages (Groovy, Scala, Fantom,

    &gt;&gt; Gosu, Ceylon) have really focused much on the tooling aspect.

    The IntelliJ IDEA support for Groovy is excellent and is far better than Eclipse''s/VMWare''s. IDEA''s Groovy support allows code completion, refactoring, inspections, smart find usages, full debugger and evaluator. I honestly don''t know what''s missing from the IDEA Groovy support that one could want. I''d say IDEA+Groovy is about as good as NetBreans+Java.'
  replies: []
- id: 9037
  author: Roman Taycher
  date: '2011-07-20T21:54:18'
  content: Is groovy really more popular then scala? That seems strange.
  replies: []
- id: 9038
  author: van Geir
  date: '2011-07-20T22:45:37'
  content: 'I still remember how good Visual Studio 2008 was when I once spent 2 months writing code in C#, so I think excellent IDE support is essential.

    I think static typing, preferably with inference, is also essential in a language to be used for more than just scripting, which is what differentiates Scala, Gosu, Ceylon, and Kotlin from other JVM langauges such as Groovy and JRuby.'
  replies: []
- id: 9039
  author: nickik
  date: '2011-07-21T00:02:54'
  content: 'Why do you never talk about clojure? I would guess that clojure is at least as big as groovy and I highly dout that scala has less users then groovy.

    In terms of jobs clojure is pretty far ahead of the others. I cant find the statistic anymore.'
  replies: []
- id: 9040
  author: steve
  date: '2011-07-21T03:11:21'
  content: 'So is this another case of  "A bird in the hand? Meh ... Better those two two in the bush!".

    I wonder when the Java community will stop that constant infighting and bickering and start to get things done _now_ instead of hoping that yet-the-next language will be usable by 2018/2020.'
  replies: []
- id: 9041
  author: han
  date: '2011-07-21T03:45:57'
  content: 'no reference to Clojure, not considered code?

    I actually feel there''s more code written in Clojure, maybe even past Groovy

    by genre, Groovy(Ruby-likes) and Clojure(Lisp-likes) and Scala (static functional) has covered quite a fair bit of ground

    I find that among this 3, Scala is closest to Java, at the same time it''s too close to warrant the change, you know what I mean?

    Java can be brewed further in 7/8 and as Gosling mused, the Java language itself isn''t the most interesting aspect of Java technology, and it''ll happen fast in these 2-3 years.

    I feel Java language remain an important reference marker for all the different dialects to align with.'
  replies: []
- id: 9042
  author: BoD
  date: '2011-07-21T06:22:52'
  content: 'About the last bit of your article.

    I wonder what would happen if Google would officially support/recommend one of these new languages (or another one) for Android.

    That would motivate a lot of developers to learn it, and probably give the language tremendous momentum.

    Just wondering :)'
  replies: []
- id: 9043
  author: sulfide
  date: '2011-07-21T07:47:39'
  content: Hope thats just the codename, and the real name is better :P
  replies: []
- id: 9044
  author: Cedric
  date: '2011-07-21T07:51:23'
  content: 'han: My omission of Clojure is a simple oversight. The list wasn''t meant to be exhaustive, and I''m a big Lisp fan myself.

    Having said that, while the percentages that I used are admittedly pulled out of thin air, I think they accurately reflect the current pecking order of mindshare on the JVM: 1) Java 2) Groovy and 3) Scala. This comes from a combination of the TIOBE index and a few job sites.'
  replies: []
- id: 9045
  author: Tim
  date: '2011-07-21T11:27:39'
  content: One thing that you guys seem to also not mention is practicality of the language. For example, I don't care how good the tooling support of Groovy is if it can't perform at the level that I need it to. Since the performance of scala is closer to java, I would imagine it would be the easiest for most companies to adopt if it wasn't for the complexities with adopting it such as tooling and backwards compatibility for libraries.
  replies: []
- id: 9046
  author: David
  date: '2011-07-21T15:21:36'
  content: Kotlin is exciting and welcomed to the party.  But still, I think the points you make about Kotlin are just as true about Gosu.  It's cool (its open type system is very cool, for instance), its IDE support exists and is getting better, it has reified Generics, and it enjoys commercial support.  So I wish them both well!
  replies: []
- id: 9047
  author: Micha? Gruca
  date: '2011-07-22T03:38:11'
  content: 'I still believe that groovy has bigger market share than Scala.

    We, Engineers, like to think that ''better'' language, more popular, on which more articles are written, so on and so on.

    But real life is bit different. I can believe that groovy has still bigger market share. It was on the market, in use, before scala.

    Some tools use groovy (spock, gradle, etc), but Scala is catching up.

    And please don''t expect that someone will start paying you for working with ''cool'' language. It''s for the same reason that pure jsp/servlet or struts 1 applications are still alive.'
  replies: []
- id: 9048
  author: Peter
  date: '2011-07-22T07:16:20'
  content: What seems to be forgotten here is that different languages are used for different things. For example, Groovy isn't really used very widely as a programming language, but it is very popular as a glue language and/or a language for expressing unit tests.
  replies: []
- id: 9049
  author: Pierre Queinnec
  date: '2011-07-22T09:05:39'
  content: 'In a way, Eclipse already has a JVM language: Xtend 2.

    http://blog.efftinge.de/2010/12/xtend-2-successor-to-xpand.html'
  replies: []
- id: 9050
  author: Nicolas
  date: '2011-07-23T14:32:36'
  content: 'Honestly, the most probable successor to Java is Java. Java 7 is out, and that not much, but is solve some problems. More importantly, Java 8 is now in one year. And you can be sure that ALL IDE will have stellar support for it from day one. And all frameworks will soon follow.

    Integration will be perfect and with key features like closures (albeilt not as clear as in other language), we almost have all we need. Of course that''s not perfect but you can work with it. This will be enough for most to continue their use of Java.

    I think scala is good improvement over java, and I can see the point of using it, instead of java, even Java8. This is still not usable for me because of lack of stellar IDE support. I say stellar because java do have it. If I loose on the tooling part what I gain of the language part, this is not an improvement.

    So Kotlin? I don''t understand why. I''am not against high level expressive languages. But the goal is not to have dosen of them with poor support. Why can''t we settle on a few of them? Do we really need to just new mix of the sames features put differently with a new name?

    Today the best entreprise grade alternatives are C++ and C#. Both ofter more advenced languages feature than today java. And have both very good IDE support and are both more used than the toy language we make here on the JVM.

    And for C#/Java to replace C++ it had taken all the power of MS and Sun and lot of new features, package, managed code, extensive high quality out of the box libraries, write once, run everywhere.... And the most important of them - automatic memory management -.

    What will it take to replace java? We have to take for granted everything it has: big company, extensive standard library, frameworks... And add something that will make it.

    We need more than just reussing the same concept and syntax... Please do something really new!'
  replies: []
- id: 9051
  author: Chris H.
  date: '2011-07-26T19:39:46'
  content: '@Nic: The last time we heard that the next version of Java was a year away it was in 2006 when Java 6 came out. Needless to say, it''s 2011 and Java 7 is just now coming out. I have a hard time believing that we''ll see modularity/Jigsaw and closures implemented in a year, but I''d love to be wrong about that.

    That said, I do agree with most of what you said.'
  replies: []
- id: 9052
  author: Ed
  date: '2012-01-11T04:06:07'
  content: 'As Pierre has pointed out Xtend 2 is a languages from Eclipse.

    I wonder why no one knows and cares about it.'
  replies: []
- id: 9053
  author: Nicholas Sterling
  date: '2012-04-16T11:56:53'
  content: 'Thanks for the interesting article; I hope Kotlin is successful.

    The amount of JVM code (94%?) written in Java doesn''t seem particularly interesting to me.  What seems *far* more relevant is the proportion of new functionality being implemented in Java, and that number is certainly far lower.  Our shop, for example, still has lots of Java code, but a significant portion of new code is being written in Scala, and it''s only going to increase for the foreseeable future.  To take this example to its logical conclusion, let''s say that at some point we are writing 100% of new code in Scala but Java still accounts for 90% of the code we have accumulated over the years.  Would you still say that Java dominates in our world?  That characterization would seem very misleading to me.

    Also, a given number of tokens of Scala seems to get at least three times as much done (and more maintainably) as the same number of tokens of Java.  So if I write 3000 tokens of Java and 1000 tokens of Scala, I''m really doing half of my work in Scala.

    Don''t get me wrong; I hope Kotlin brings something great to the party, and I''m always on the lookout for a better language that looks viable.  But I am always wary of opinions that there is no significant competition to Java on the JVM.  People point to jobs openings and to StackOverflow questions and the like, but such metrics are deeply flawed, as discussed here: http://www.scala-lang.org/node/10923

    Also, while I''m happy for the enhancements in Java 7 and those planned for Java 8, bear in mind that during the time it took to produce the language and API enhancements in Java 7 the Scala folks made *far* more substantial enhancements.  There really is no comparison.  The JVM enhancements of course accrue to *all* JVM languages (although to some more than others -- dynamic languages in particular benefited greatly from Java 7''s invokedynamic).

    Personally, at this point I would be unlikely to work for any shop that still sees the Java *language* as the future.  I would be concerned about them not being able to keep pace with their competition, for one thing, and I would just feel more comfortable working with what I consider more powerful tools and folks who know how to use them.  From what I have seen recently, many companies are actually quite willing to have engineers program in Scala, if they have staff who know the language.

    There will be lots of Java code around for a long time, but I don''t think it''s anywhere close to true that migration to other tools has yet to start.  Those who really believe this may find themselves behind the curve at some point.'
  replies: []
---

As you probably saw by now, JetBrains just announced that they are working on a brand new statically typed JVM language called [Kotlin](http://confluence.jetbrains.net/display/Kotlin/Welcome). I am planning to write a post to evaluate how Kotlin compares to the other existing languages, but first, I'd like to take a slightly different angle and try to answer a question I have already seen asked several times: what's the point? 

We already have quite a few JVM languages, do we need any more? 

Here are a few reasons that come to mind. 

### 1) Coolness

New languages are exciting! They really are. I'm always looking forward to learning new languages. The more foreign they are, the more curious I am, but the languages I really look forward to discovering are the ones that are close to what I already know but not identical, just to find out what they did differently that I didn't think of. 

Allow me to make a small digression in order to clarify my point. 

_Some time ago, I started learning Japanese and it turned out to be the hardest and, more importantly, the most _foreign_ natural language I ever studied. Everything is different from what I'm used to in Japanese. It's not just that the grammar, the syntax and the alphabets are odd, it's that they came up with things that I didn't even think would make any sense. For example, in English (and many other languages), numbers are pretty straightforward and unique: one bag, two cars, three tickets, etc... Now, did it ever occur to you that a language could allow several words to mean "one", and "two", and "three", etc...? And that these words are actually not arbitrary, their usage follows some very specific rules. 

What could these rules be? Well, in Japanese, what governs the word that you pick is... the shape of the object that you are counting. That's right, you will use a different way to count if the object is long, flat, a liquid or a building. Mind-boggling, isn't it? 

Here is another quick example: in Russian, each verb exists in two different forms, which I'll call A and B to simplify. Russian doesn't have a future tense, so when you want to speak at the present tense, you'll conjugate verb A in the present, and when you want the future, you will use the B form... in the present tense. It's not just that you need to learn two verbs per verb, you also need to know which one is which if you want to get your tenses right. Oh and these forms also have different meanings when you conjugate them in past tenses. _

End of digression. 

The reason why I am mentioning this is because this kind of construct bends your mind, and this goes for natural languages as much as programming languages. It's tremendously exciting to read new syntaxes this way. For that reason alone, the arrival of new languages should be applauded and welcome. 

Kotlin comes with a few interesting syntactic innovations of its own, which I'll try to cover in a separate post, but for now, I'd like to come back to my original point, which was to give you reasons why you should be excited about Kotlin, so let's keep going down the list. 

### 2) IDE support

None of the existing JVM languages (Groovy, Scala, Fantom, Gosu, Ceylon) have really focused much on the tooling aspect. IDE plug-ins exist for each of them, all with varying quality, but they are all an afterthought, and they suffer from this oversight. The plug-ins are very slow to mature, they have to keep up with the internals of a compiler that's always evolving and which, very often, doesn't have much regards for the tools built on top of it. It's a painful and frustrating process for tool creators and tool users alike. 

With Kotlin, we have good reasons to think that the IDE support will be top notch. JetBrains is basically announcing that they are building the compiler and the IDEA support in lockstep, which is a great way to guarantee that the language will work tremendously well inside IDEA, but also that other tools should integrate nicely with it as well (I'm rooting for a speedy Eclipse plug-in, obviously). 

### 3) Reified generics

This is a pretty big deal. Not so much for the functionality (I'll get back to this in the next paragraph) but because this is probably the very first time that we see a JVM language with true support for reified generics. This innovation needs to be saluted. 

_Correction from the comments: Gosu has reified generics_

Having said that, I don't feel extremely excited by this feature because overall, I think that reified generics come at too high a price. I'll try to dedicate a full blog post to this topic alone, because it deserves a more thorough treatment. 

### 4) Commercial support

JetBrains has a very clear financial interest in seeing Kotlin succeed. It's not just that they are a commercial entity that can put money behind the development of the language, it's also that the success of the language would most likely mean that they will sell more IDEA licenses, and this can also turn into an additional revenue stream derived from whatever other tools they might come up with that would be part of the Kotlin ecosystem. 

This kind of commercial support for a language was completely unheard of in the JVM world for fifteen years, and suddenly, we have two instances of it (Typesafe and now JetBrains). This is a good sign for the JVM community. 

### 5) Still no Java successors

Finally, the simple truth is that we still haven't found any credible Java successor. 

Java still reigns supreme and is showing no sign of giving away any mindshare. Pulling numbers out of thin air, I would say that out of all the code currently running on the JVM today, maybe 94% of it is in Java, 3% is in Groovy and 1% is in Scala. This 94% figure needs to go down, but so far, no language has stepped up to whittle it down significantly. 

What will it take? Obviously, nothing that the current candidates are offering (closures, modularity, functional features, more concise syntax, etc...) has been enough to move that needle. Something is still missing. 

Could the missing piece be "stellar IDE support" or "reified generics"? We don't know yet because no contender offers any of these features, but Kotlin will, so we will soon know. Either way, I am predicting that we will keep seeing new JVM languages pop up at a regular pace until one finally claims the prize. And this should be cause for rejoicing for everyone interested in the JVM ecosystem. 

So let's cheer for Kotlin and wish JetBrains the best of luck with their endeavor. I can't wait to see what will come out of this. 

Oh, and secretly, I am rooting for Eclipse to start working on their own JVM language too, obviously. 

_[Link to the discussion on Google+](https://plus.google.com/108840253750748459271/posts/1kf76ZDN46c)_
