---
title: 'Erlang: the verdict'
date: '2007-10-01T09:02:38'
slug: erlang-the-verdict
categories:
- General
comments:
- id: 6935
  author: Alex Blewitt
  date: '2007-10-01T11:10:52'
  content: 'You should still look into Scala :-)

    That said, there are some features of the language that you don''t touch on. One is the ability to replace running code on the fly with new code. That''s not really supported in Java (outside of a debugging environment) and the ability to keep the system up whilst doing an upgrade is an important factor. Even having to stop and re-start a JVM with new classes -- no matter how robust -- is going to impact the uptime.

    One of the reasons that the googles of the world have the uptime is because they don''t care that I have to re-log into GMail again, or see a ''the server is temporarily unavailable; please try again''.

    As for the errors; they''re really the functional equivalent of exceptions in Java-esque languages. It''s nice that processes can be linked (even over a distributed network) but although it plays a part, it''s not something that couldn''t be done elsewhere.

    As for the "here''s a counter-example" -- the one you cited is knowingly IO-bound, not process-bound. Whether you''re using ruby or python or Erlang or JavaScript isn''t going to make that much difference if the CPU is twiddling its thumbs waiting for data to arrive.

    You should look into ''lift'', the web framework that runs on Scala. That''s a problem with parallelism, and that''s what the rubies of the world don''t solve.

    Alex.'
  replies: []
- id: 6936
  author: Bill de hOra
  date: '2007-10-01T12:56:46'
  content: '" Now, if we have to think in terms of distribution from the very beginning of our design phase, Erlang''s edge fades considerably. It seems pretty easy to me to design similar programs with Java using messaging API''s, and with very little additional effort."

    Not really. The thinking problem matters insofar as Java is fundamentally oriented to a certain way of thinking about the problem (shared memory concurrency), as you well know. Somehow it seems implausible to say the natural direction a language leads you in here doesn''t matter (whereas the object and type systems matter a heck of lot). This also misses a point about isolation, which I suspect Java/JVM will eventually need to support, perhaps by resurrecting Isolates.

    "No matter how much Erlang supports you from a syntactic standpoint, you still need to implement the supervisors and, in short, to plan for failure. This doesn''t strike me very different from any other languages, regardless of the failure mechanism they support (typically, exceptions)."

    Supervisors in spirit are akin to load balancers or monitoring nodes. Comparing them to exception handling seems off.'
  replies: []
- id: 6937
  author: Alex Fabijanic
  date: '2007-10-01T14:42:24'
  content: 'Apparently, the main reason why Erlang does well in concurrent scenarios has nothing to do with language and everything to do what the code runs on. Namely, Erlang does not depend on OS threads (or processes, for that matter) for concurrency. See (speculative) comment at the bottom of this page:

    http://www.sics.se/~joe/apachevsyaws.html

    So, it looks like the reason for Erlang''s concurrent performance has probably more to do with its scheduler than the language itself. On sceduler details, see

    http://www.erlang.org/ml-archive/erlang-questions/200104/msg00072.html'
  replies: []
- id: 6938
  author: thomas lackner
  date: '2007-10-01T15:15:37'
  content: It is amusing to watch people attempt to tear apart and deconstruct Erlang, trying to refute its benefits, while Erlang coders continue on their merry way creating incredible software. Carry on, Java programmers!
  replies: []
- id: 6939
  author: ''
  date: '2007-10-01T17:02:27'
  content: 'To really appreciate Erlang, you need to have hands on experience with it... Not just read a few anti blogs or look at a few biased benchmarks. What people have achieved using Erlang with so little effort is not the result of a hero programming approach, but the fruit of attempting to solve software related issues back in 1987.

    /Someone who has worked with Erlang for a long time'
  replies: []
- id: 6940
  author: Laurent Simon
  date: '2007-10-01T18:23:21'
  content: 'I am not sure that you are right when you say: When somebody creates a language after writing a "sucks" article, you know the yet-to-be-born language is already starting at a disadvantage...

    I remember a guy who wrote a testing framework after writing "sucks" articles, and his framework was not so bad ;-)'
  replies: []
- id: 6941
  author: Anonymous Coward
  date: '2007-10-02T04:51:21'
  content: '"Regardless of how lightweight the implementation of this message passing is, there has to be a lock on all these inboxes to guarantee that when dozens of processes send messages to your own process, these messages are delivered and treated in the order they are received from."

    http://www.artes.uu.se/events/gsconf02/papers/zhang.pdf'
  replies: []
- id: 6942
  author: Steve Vinoski
  date: '2007-10-02T06:58:45'
  content: 'Have you noticed that the premise of your entire article is that you personally find Erlang feature/capability X hard to fathom, so therefore X must not actually work?

    What you''re saying in effect is that despite the fact that the Erlang guys have already proven this stuff in practice time and again with actual, working, reliable, and long-running telecommunication systems (and systems in other fields as well), your gut feelings are a much better proof and indicator of what actually works in practice and what doesn''t, so the reader should believe you, not them. Wow.'
  replies: []
- id: 6943
  author: Mark Bradley
  date: '2007-10-02T07:24:14'
  content: 'I think it is great that you actually read the book.  However it seems like you read the book in order to try convince yourself that Erlang was great.  As if you said "okay erlang, tell me why you are special or I will dismiss you as toyish!".  This is probably the wrong reason to read a book.

    Also your conclusion seems very much like you want the rest of the world to finish what the book started.

    "so I''d love to see some concrete and objective evidence to back these up. Failing that, Erlang will remain the oddity that it always been ever since it was created."

    What''s the point if you are already biased and too lazy to do your own research?'
  replies: []
- id: 6944
  author: Richard Pollock
  date: '2007-10-02T08:23:20'
  content: 'I can see where the bias is coming from this is an old Imperative vs FP war all again

    Java modern ! Erlang old ?'
  replies: []
- id: 6945
  author: Richard Pollock
  date: '2007-10-02T08:25:24'
  content: 'And do your research!

    Erlang is faster than Ruby (see the shootout)'
  replies: []
- id: 6946
  author: Scott Fleckenstein
  date: '2007-10-02T08:58:38'
  content: '"Furthermore, what is the difference between a supervisor process waiting for a process to die, and a supervisor thread catching a thrown exception? Not much, really."

    The real difference here is that it is much simpler (i.e. you don''t even have to think about it) to run the supervisor process on an entirely separate node in your cluster.  This is paramount for real fault tolerance in a running system, and you don''t even have to think about it in erlang.  I don''t know how easy or hard this would be to accomplish in Java, but it is stupid simple in erlang.'
  replies: []
- id: 6947
  author: ''
  date: '2007-10-02T10:43:28'
  content: 'A couple of points:

    1) I wouldn''t say that basing a language''s concurrency features entirely on message passing rather than shared memory is just a feature of the "syntax" of the language.

    2) You say that "If an object can be accessed by only two processes, only these two processes will compete for this lock. In Erlang, these two processes will have to pass messages to the inbox of my process, thereby competing with *all* the processes of my application." But why would *all* the processes compete unless they *all* were sending messages to the same inbox? Wouldn''t this actually be analogous to having *all* your Java processes competing for one lock, rather than just the two? Perhaps I''m missing something here.

    3) Even if all those processes *are* sending messages to one processes message queue, there are well-known lock-free queue algorithms. I believe they are commonly used for interprocess communication. So the inbox might not need any locking after all.

    4) I believe Erlang uses its own threading implementation, rather than OS threads. I don''t know the details of Erlang''s implementation, but this could easily mean that they can make sending and receiving messages atomic if they want to. So, again, no locks necessary.'
  replies: []
- id: 6948
  author: Erik
  date: '2007-10-02T10:56:27'
  content: '+1 to Steve Vinoski.

    I wouldn''t criticize a language after having read one book about it. Maybe after one or two projects and one year of experience.

    Before that I''m aware I could hardly give a valid opinion on anything else than about my liking/disliking of its syntax ;-)

    Erik

    PS I''m now certainly curious to have a closer look at Erlang - but I''ll wear other glasses than C'
  replies: []
- id: 6949
  author: K
  date: '2007-10-02T11:00:36'
  content: 'It''s good that you''re investigating alternative languages.  It''s good that you''re (sort of) asking questions about the things you don''t understand.  Some of your more specific criticisms are spot-on.  Error messages can be awful.  Testing and debugging deserve greater coverage than they got in the book, and it appears that the state of the art is far behind Java.  It''s a long list.  I can add to it.  The shell is a poor substitute for a true REPL.  Having to explicitly reverse accumulators in tail-recursive functions is inelegant and easy to forget.

    You get into trouble, though, when you draw broader conclusions about Erlang''s viability without (apparently) having gotten your hands dirty.  What would you say about a C++ fan who claimed Java was doomed because it lacked operator overloading, multiple inheritance, or pointers, without having ever written any substantial Java program?  I can write a pretty long list of warts in Java, but it''s still my bread and butter.

    You mention that more traditional languages and environments already get the job done, but it''s not about whether the language can get the job done.  Java, Ruby, Python, Erlang, Haskell, C++, Perl, OCaml, C, Scala, and all the rest don''t differ in WHAT they can do, but rather in how efficiently they do it.  You can pass messages and execute varying instructions based on the contents of those messages, but none of those languages can match Erlang''s succinctness and clarity in doing either of those things.

    It''s inevitably true of learning any new programming language that you write it in the way you write the ones you already know.  You can program Fortran in any language.  Nearly every new, unfamiliar language is going to seem inadequate in comparison to a familiar one.  The things familiar language do well may often be done badly in the new language, or simply use strange, unintuitive idioms.  For example, you could abuse the process dictionary to get variables like other languages instead of doing things "the Erlang way."

    Then there are the things that the familiar languages do badly.  Either you implement mediocre workarounds and claim they are good, or you just avoid them from years of experience.  The unfamiliar language may be a whiz at those tasks, but you it''s hard to see that at first.  You''re used to doing the certain things in certain ways.  There are definitely things Erlang does worse than Java.  There are other things that seem strange, like tail recursion instead of looping.  Then there are things that Erlang does better.  Erlang''s matching blew my mind once I really understood it; in comparison, Java''s method overloading and conditional constructs now seem rather limited and inflexible.  You can''t fully appreciate that power just from reading a book.

    You have to live the language for a little while.  You have to get advice from people who know it well.  You have to progress beyond the surface.  You have to explore its strengths as well as its weaknesses.  Right now, all you can credibly comment on are the things that look good and the things that you don''t understand.  That there are those who are happy and productive with Erlang doesn''t mean it is a good language, but it definitely means you should look deeper before dismissing it.  Your conclusions are mostly based on inference, assumption, and hearsay.  You may very well be right about some or all you say.  However, you would only be right by coincidence, a lucky guess; you cannot KNOW that you''re right.  You haven''t done the work.'
  replies: []
- id: 6950
  author: Brian
  date: '2007-10-02T12:00:58'
  content: 'Verdict? What you list here sounds like idle speculation, not a verdict.

    I am new to Erlang, so I can''t claim to have answers for all of your questions. I recognize that Erlang has its warts, one of the biggest being in string processing (which is why Tim Bray''s single benchmark did so poorly). Every language has its warts, though, so in order to fairly evaluate those you need to get past the warts and actually look at the language itself. Also, as you mention, you certainly could implement any part of Erlang in Java, but that doesn''t mean that Erlang isn''t useful; the fact that the massive concurrency is built in and natural to use makes it a lot more useful than a hypothetical, non-existent library in Java.

    To address some of your specific concerns, you claim that message passing introduces "one big lock." Where do you get that claim from? First of all, the default mode is for Erlang to operate with no shared memory, in a single operating system process and thread, which means that you don''t need locks, as access to the message queues is atomic (if you want to support multiple cores in this mode, you can boot up multiple processes and they communicate over sockets). If you enable Erlang''s SMP support, then you do have to have locks, but I don''t see any reason why you''d have to have more than one lock per message queue, which is one lock per process (Erlang process, that is). In Erlang, because processes are so inexpensive, you can afford to have thousands of them at once, most of them dormant at any given time. Thus, any locking will be at whatever granularity you want, based on how many processes you have.

    Also, you lament the fact that Erlang doesn''t have "OO", whatever OO is supposed to mean (I''ve seen dozens of different models that all could be considered object orient in one way or another; Java''s style of object orientation isn''t the be-all, end-all way of doing it). If you look at it closely, though, Erlang supports a form of object-orientation that''s much closer to how it was originally envisioned than what most people consider OO today. Think about each process as an object. Instead of calling a method on an object synchronously, you send a message to a process asynchronously. You can use this in a synchronous fashion if you''d like, always having the original process wait for the one it called to return a value to it, but you can also embrace the asynchrony and deal with objects in a completely different way than you have before.

    I believe that Erlang has a lot to teach us, and is demonstrably very useful and robust in real-world applications. It has its warts, and could use improvements in many areas, but that doesn''t make it useless. You have to actually get into it, however, and really discover how it works, before you write it off. You can write COBOL code in any language, but that doesn''t mean that different languages are all the same.'
  replies: []
- id: 6951
  author: Jon Tirsen
  date: '2007-10-02T20:31:19'
  content: 'Disregarding the rest of the debate: (Man, I''m sooo over language wars.)

    Isn''t it possible to add an item to a queue atomically or at least with an extra-ordinarily short-spanned lock? If we assume the only operations supported is enqueue and dequeue and we assume the queue is not exposed to CPU memory caching (that is we''re not running under the tyranny of the Java memory model). If the queue is implemented as a singly linked list we should be able to build up the entire message outside the queue and then atomically update the pointer on the last entry. I''m not sure but we may have to hold on to a very fast lock on the second to last entry to prevent it from being unlinked during the update.

    Anyway, interesting question you could pose to your colleague Doug Lea. :-)'
  replies: []
- id: 6952
  author: dbt
  date: '2007-10-03T09:54:43'
  content: In fact, the "post message to mailbox" operation has historically been the most tightly tuned hand-written algorithm in the entire erlang VM, for exactly that reason... but go ahead and assume it sucks. :)
  replies: []
- id: 6953
  author: Sony Mathew
  date: '2007-10-03T12:18:42'
  content: 'Someone suggested Java can''t compute 4 digit factorials.  Use BigInteger - and it comes back in a snap for the factorial of 1000.

    example:

    public BigInteger factorialBig(BigInteger f) {

    if (f.equals(BIG_ONE) || f.equals(BIG_ZERO)) {

    return BIG_ONE;

    }else{

    return

    f.multiply(factorialBig(f.subtract(BIG_ONE)));

    }

    }

    private static final BigInteger BIG_ONE

    = new BigInteger("1");

    private static final BigInteger BIG_ZERO

    = new BigInteger("0");'
  replies: []
- id: 6954
  author: Joe
  date: '2007-10-08T07:12:04'
  content: 'Yeah, Joe Armstrong wrote an "OO Sucks" blog post, and *then* went back in time to the 1980s to create erlang out of spite.

    This really is one of the most profoundly ignorant anti-erlang articles I''ve read in a long time.

    I hope all Java programmers read it and believe it completely.'
  replies: []
- id: 6955
  author: Isaac Gouy
  date: '2007-10-08T17:04:23'
  content: 'The Internet Archive first notices that "Why OO sucks" page on July 23, 2002. The "Why OO sucks" page was written while Joe Armstrong was at Bluetail and Bluetail wasn''t founded until 1998.

    Your suggestion that the Erlang language was created after "Why OO sucks" was written is factually incorrect by at least 10 years - never let the facts get in the way of dismissive innuendo!'
  replies: []
- id: 6956
  author: Rob
  date: '2007-10-09T12:10:27'
  content: 'Wow, Cedric, you better try and tease out the language preferences of all your future hiking cohorts. The Ruby and now Erlang cults look to have it in for you.

    This is not innuendo. To call it such is just more baby talk from people who see any criticism as a personal attack. He''s asking you to backup your claims, but instead, you are arguing about when posts were made. It''s funny how similar this is to Ruby: make outrageous claims and then attack anyone who asks you to substantiate them.

    Frankly, I was astounded at the amount of work that Cedric did. Thanks, C, this was interesting and useful.

    I would be more inclined to look at Scala, but the arguments about updating running code are not super compelling, unless you are going whole hog into dynamic domain models through metaprogramming. Otherwise, you are talking about a problem that should be solved on the container layer, or at least through intelligent clustering, a la Terracotta. Concurrency is hugely important though, esp. now that all the chipmakers have dropped their muskets on the branch prediction boondoggle and are focusing on just increasing density of cores.'
  replies: []
- id: 6957
  author: Telco Project
  date: '2007-10-11T09:39:02'
  content: It had derived very many advantages in executing Erlang/OTP based projects. We had executed some really sleek and sensitive message handling systems that are interfaced to vendor specific SS7-ISUP and SS7-TCAP. The customer compared the benefits of investment with relation to the delivered capabilities. It is always compared to the capacity of the systems with similar capabilities. It was observed that the systems required for the telco traffic capabilities were as big as ten to fifteen times comparing to the similar applications written in Erlang and executed. And it is the inherent capability of OTP to allow upgrading modules on-the-fly that had really helped in fixing the problems when the system is deployed. This is with the older versions of Erlang, and the current version is cleared for any possible left over thread management problems.
  replies: []
- id: 6958
  author: Isaac Gouy
  date: '2007-10-11T14:33:01'
  content: 'Rob wrote "He''s asking you to backup your claims..."

    Rob ask Cedric to show you who made those claims.

    Cedric Beust wrote "... Erlang''s claim to fame: that it produces infinitely scalable and fault-reliant programs more easily than other languages."

    Google finds 17 hits for fault-reliant and #1 the only one which mentions Erlang is "Otaku, Cedric''s weblog".'
  replies: []
- id: 6959
  author: Lucindo
  date: '2007-10-16T10:24:08'
  content: 'Just a few points:

    - Introduction:

    "Maybe if some OO had been thrown in Erlang from the start, we would indeed be facing a language that has the potential to become meaningful."

    Well, Erlang is a Purely Functional language. This means it has no state. It''s the absence of state that allows Erlang to support some concurrent features. On the other hand, OO is all about state, and if Erlang had some OO features it won''t be Erlang as we known.

    When programming in Erlang you will see that you can think of Erlang process as objects. The processes (objects) communicate using messages. It''s like a functional Smalltalk :)

    - Scalability:

    You say that a Java implementation using a message-passing style to communicate (maybe using some API) would perform as well as Erlang, or even better: "I am skeptical that an Erlang program will come ahead in the long run."

    Well, It would be nice to have some code and tests  to show that, don''t you think?

    At least you agree with the Erlang-style of process communication and data sharing.

    - The myth of lock-free programming

    "At least, Java gives me complete control on the coarseness of the locks that I use, and also absolute freedom on where I want to place these locks."

    Hey! I remember I used to say something like that: "At least, C++ gives me complete control of memory management."

    - Five nines

    Yep, I think a introductory book don''t cover much of that, but you can google for Joe Armstrong''s PhD Thesis: "Making reliable distributed systems in the presence of sodware errors"

    You will see that OTP play a fundamental role to achieve five nines.

    - Conclusion

    Yep, it''s possible to do all Erlang claims to do in any language. *Any* language. But, we aren''t programming in assembly anymore, right?

    I''m not trying to take Erlang''s side, but I think you could also provide some concrete examples of all you said, and not just "I''m having a hard time imagining ...", "I am skeptical that ...", ...'
  replies: []
- id: 6960
  author: xxx
  date: '2007-10-25T14:03:00'
  content: in 2 years we will see if erlang gained significant community growth or not
  replies: []
- id: 6961
  author: Ulf Wiger
  date: '2008-05-20T07:18:51'
  content: 'You could perhaps read the material presented at www.macs.hw.ac.uk/~dsg/telecoms/ which is the result of an EU-funded and peer-reviewed research project trying to scientifically verify the claims of "Erlang folklore".

    You could also read www.erlang.se/publications/bjarnelic.ps, which describes the process leading up to the design of Erlang. Among other things, it mentions that OO was evaluated along with other techniques in the early experiments. It also gives other valuable insights into the development of Erlang, and blogs.teamb.com/craigstuntz/2008/05/19/37819 and accompanying links will provide even more.

    As to whether Erlang will gain significant community growth, as ulf.wiger.net/weblog/2008/04/01/erlang-statistics/ shows, Erlang has enjoyed significant growth ever since it went Open Source. Every indication right now is that the growth will pick up even more in the coming years.

    But I''m sure that other languages will keep innovating and improve in terms of concurrency support as well. Personally, I think this is great. Concurrency Done Right is a wonderful modeling paradigm, which deserves a wider audience.'
  replies: []
- id: 6962
  author: Jaime Bellmyer
  date: '2009-03-23T12:23:55'
  content: 'Wow!  I know this is an old article, but I''m astounded at the emotion involved.  I think Cedric laid out his research of Erlang, his opinions, and an open invitation for LOGICAL debate.  What he got in return was a lot of hate-mongering and angry erlangers. Here are the themes I heard over and over, and my responses:

    "The anti-OO blog came after Erlang."

    I hate yellow cars.  I''ve never bought one, going back the whole 16 years I''ve owned a car. See?  My current opinions *can* be used as a window into the decisions I made several years before. It''s not absolute - opinions change over time - but it can offer at least *some* insight, right?

    Cedric initially mistook Erlang''s birthday, and subsequently corrected it near the top of the article.  A valid point remains, however. Armstrong dislikes OO, so it''s no surprise that 10 years prior (or so) he kept OO out of something he created.

    "You should read more than one book on Erlang, and use it for at least a year before criticizing."

    What?  Did YOU even do that??  Are you telling me that you remained skeptical of Erlang for up to a year, and required more than one book to convince you?  Absolutely not.  And even if you did, any language that would require that is doomed from the start.  Heck, did you give a year each to Java, PHP, C/C++, Perl, Ruby, Python?  How did you get any work done?

    It''s much more likely that Erlang suited you, and that was apparent within the first few dozen hours studying/coding it.  And that same amount of time is all that other people need to decide Erlang *doesn''t* suit them. Thoroughly reading one definitive book, and following along with the code samples, is all you can ask of anyone.  I was personally hooked on Ruby after just an hour. It suited me.

    Don''t take me for an Erlang hater, either.  I''m reading Programming Erlang myself now.  I''m 3 chapters in and still not really feeling it, but I''ll definitely give it the whole book and several hours of practice coding afterward.  But anything more than that - I have to move on to another candidate.  Or ask myself if I really had a problem that needed solving in the first place.  Often, I just look into new stuff because there''s a buzz, and I want to be familiar.

    Just my 1,002 cents :)'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/erlang.jpg)

Ever since [I finished reading Joe Armstrong's "Programming Erlang"](http://beust.com/weblog/weblog/archives/000461.html), several details have been nagging me but I haven't been able to put my finger on them... until now. 

First of all, an erratum: I misinterpreted [the wikipedia page](http://en.wikipedia.org/wiki/Erlang_\(programming_language\)) when I said that Erlang was created in 1998. Erlang was _open sourced_ in 1998, but it's actually [much more ancient than that](http://www.erlang.org/course/history.html ). In some way, this explains why the language and tools feel so old, but I also learned something else that sheds another interesting light on why the language is completely devoid of any OO feature. 

As it turns out, Joe Armstrong, the author of the book, is actually one of the main designers, if not the creator, of Erlang. He worked at Ericsson back then and created the language to address the fault-tolerance aspects of the products that Ericsson was trying to create. After doing some research in this area, I came across an article titled [Why OO sucks](http://www.sics.se/~joe/bluetail/vol1/v1_oo.html) written by... Joe Armstrong himself. 

I found the article quite emotional and very light in substance, and this text would probably be inconsequential if it didn't explain in great parts why Erlang doesn't support any OO feature. When somebody creates a language after writing a "sucks" article, you know the yet-to-be-born language is already starting at a disadvantage because its creator is obviously not going to follow a "take what's best in all languages" approach while designing his new language. And unfortunately, Erlang fell right into this trap. Which makes me very sad, because as I said in my previous post, I quite enjoyed the other aspect of the language and the decent blend of unification and functional programming that it offers. Maybe if some OO had been thrown in Erlang from the start, we would indeed be facing a language that has the potential to become meaningful. As it stands, I still believe that Erlang is a non-starter for this reason, and a bunch of others that I'll get to in the following paragraphs. 

##  Scalability 

Let's now turn our attention to Erlang's claim to fame: that it produces infinitely scalable and fault-reliant programs more easily than other languages. 

I have always had problems with this claim, and even after reading Armstrong's book, my skepticism has not abated. I can definitely see that the syntax of the language makes it easier to write message-based components which, I agree, are probably easier to scale than locking intensive languages such as Java, but syntax itself is not enough. Just because you write a program in Erlang doesn't mean your code will scale better on multiple processors than if you had written it in Java. 

Armstrong doesn't overlook this point, and he points out that you also need to change the way you think. He gives a few examples in the book (such as an implementation of Map Reduce) and he clearly shows that the initial approach needs to be completely reimplemented before it can be distributed to multiple processes. 

Now, if we have to think in terms of distribution from the very beginning of our design phase, Erlang's edge fades considerably. It seems pretty easy to me to design similar programs with Java using messaging API's, and with very little additional effort. Message passing might end up being more expensive than Erlang, which has been optimized to make this as lightweight as possible, but without any credible figures, I am skeptical that an Erlang program will come ahead in the long run. 

Notwithstanding the fact that Erlang itself, the language and the virtual machine, already runs orders of magnitude slower than Java (and even than Ruby), as [Tim Bray's latest forays](http://www.tbray.org/ongoing/When/200x/2007/09/27/Beautiful-Erlang) in the domain have shown so far (quote from Tim's series of articles: "How does it run? Well, like dogshit, more or less."). Interestingly, Tim has received the assistance of a few distinguished Erlang experts to help him speed up his program (which is basically a simple log parsing routine) but the results are still running an order of magnitude slower than Ruby, which is telling since Ruby is already considered one of the slowest dynamic languages today. 

##  The myth of lock-free programming 

I am also beginning to question a few claims that are often tossed around when discussing about Erlang, such as the fact that since Erlang doesn't have any variable nor side effect, it is contention free, and therefore doesn't suffer from lock issues that traditional languages have. 

First of all, contention exists as soon as you use the network, the file system, a database or even ETS and DETS (Erlang's version of databases). But more importantly, there is one crucial bottleneck that's never even mentioned in the entire book: the message inbox. 

The only way a process can modify the state of or talk to another process is by sending a message to that process. Regardless of how lightweight the implementation of this message passing is, there has to be a lock on all these inboxes to guarantee that when dozens of processes send messages to your own process, these messages are delivered and treated in the order they are received from. 

In effect, Erlang seems to be moving locks scattered in various places throughout your code (e.g. synchronized blocks in Java) into one single bottleneck. No matter how efficient this bottleneck is, I'm having a hard time imagining that this approach scales as miraculously as Erlang advocates claim. At least, Java gives me complete control on the coarseness of the locks that I use, and also absolute freedom on where I want to place these locks. If an object can be accessed by only two processes, only these two processes will compete for this lock. In Erlang, these two processes will have to pass messages to the inbox of my process, thereby competing with *all* the processes of my application. And since Erlang programmers want you to create as many processes as you possibly can, this can represent a lot of contention and wait times. 

##  Five nines 

Another Erlang claim to fame is that it makes it easy to create fault-tolerant system. This is usually ascribed to the fact that Erlang processes don't throw exceptions: they die, and it's up to a supervisor to detect this crash and act on it (usually by restarting that process). Again, I find the evidence that this approach is more robust than traditional ones hard to believe. No matter how much Erlang supports you from a syntactic standpoint, you still need to implement the supervisors and, in short, to plan for failure. This doesn't strike me very different from any other languages, regardless of the failure mechanism they support (typically, exceptions). 

##  Conclusion 

After spending some time to try to find some back up evidence for these various Erlang claims, I still aven't been able to find anything meaningful in any of the areas described above. 

I know there are Erlang programs in the million of lines of code that have been running flawlessly for years, but there are even more running with mash ups of languages that were not even designed to be that resilient. The truth is that it's fairly easy these days to achieve this level of reliability with redundant machines (ask the Googles, Yahoos, Facebook and eBays of the world) and also quite possible to achieve extremely high volumes of transactions with API's built on top of traditional languages (e.g. Coherence). As I said in my previous post, the great lesson in scalability we learned this past decade is that it's much easier to distribute data than code, and the current crop of modern languages (Java and C#) proves this admirably. 

The claims put forth by Erlang advocates are quite provocative, and sometimes borderline outrageous, so I'd love to see some concrete and objective evidence to back these up. Failing that, Erlang will remain the oddity that it always been ever since it was created.
