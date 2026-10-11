---
title: A default that's not really one
date: '2007-10-17T09:46:39'
slug: a-default-thats-not-really-one
categories:
- Java
comments:
- id: 6968
  author: Stephan Schmidt
  date: '2007-10-17T10:02:08'
  content: 'All methods should be public per default, all attributes should be private per default. A lot less noise :-)

    Or better, all attributes should be public and rubyesque overidable with accessor methods.

    Peace

    -stephan'
  replies: []
- id: 6969
  author: Stephan Schmidt
  date: '2007-10-17T10:02:31'
  content: 'All methods should be public per default, all attributes should be private per default. A lot less noise :-)

    Or better, all attributes should be public and rubyesque overidable with accessor methods.

    Peace

    -stephan'
  replies: []
- id: 6970
  author: James Stauffer
  date: '2007-10-17T11:24:03'
  content: Definitely private for variables but package or private for methods.
  replies: []
- id: 6971
  author: Phil
  date: '2007-10-17T11:27:18'
  content: 'There should be no default-- you should have to explicitly state private, public, protected, or pkgprotected.  It makes it only slightly more verbose, but makes it precise.

    One problem with the default is that most people think it''s private rather than the odd package protected meaning.  When there''s nothing there, it''s not clear whether the developer intentionally wanted it to be package protected, or doesn''t know any better and intended it to be private, or whether they just forgot to put a modifier on it.

    That being said, I think private is the best default because then you have explicitly expose both the internal API via protected and package protected and the external API via public.'
  replies: []
- id: 6972
  author: Phil
  date: '2007-10-17T11:32:49'
  content: Oh, and you shouldn't even be allowed to make attributes anything other than private, but the bean interface (get/setFoo => property foo) should be exposed natively as if they were member variables, so you could say myobj.foo instead of myobj.getFoo()
  replies: []
- id: 6973
  author: Nikita Ivanov
  date: '2007-10-17T11:50:03'
  content: Should be no defaults, period. What are we saving??
  replies: []
- id: 6974
  author: Erik Engbrecht
  date: '2007-10-17T14:09:37'
  content: Do it in sections like C++, that way it's expcility and concise.
  replies: []
- id: 6975
  author: gordy
  date: '2007-10-17T14:29:00'
  content: 'A guy I interviewed once told me he found the package scope idea very confusing until he realised that package scope was Java''s equivalent of C++ friend classes.

    If you think about it this way, it all makes sense.

    You don''t go around (like C++) telling everyone who your friends are. Your friends know they are your friends because they have more access to you than those who know you on a more formal basis (i.e. public).

    Not having a package keyword seems like a poor idea but when you look at it from the friendship angle it makes sense. Friends come in groups (i.e. the Java package) they don''t come with lists of their personal set of friends (i.e. primary school).'
  replies: []
- id: 6976
  author: Bob Lee
  date: '2007-10-17T14:44:52'
  content: 'I used to use "default" access all the time. I care about the public API of my package a lot more than internal accessibility. No need to defend against myself.

    However, I''ve started using "private" more and more because my use of package-private inevitably prompted questions from other programmers, and IDEs currently support private better. For example, they can tell you when a private method isn''t used right away, but they aren''t so good about doing that with package-private methods.

    In any case, I think the current default is OK, but making "private" the default for everything might be even better. I definitely don''t think classes and methods should be public by default--far too many people make too many things public which don''t need to be. Just look at the Spring API to see what I mean. ;)'
  replies: []
- id: 6977
  author: lumpynose
  date: '2007-10-17T21:45:14'
  content: 'I''m with Phil; no default, or if there is one, make it private.

    You''re remark about tests brings up another issue of mine, which is why is it that people mix the test classes with everything else?  I''ve been putting my tests in a separate package, and then that package is in a separate project in Eclipse.

    A coworker of mine had a similar idea about interfaces; put them all in separate packages, and in a separate project.'
  replies: []
- id: 6978
  author: Gaurav Chawla
  date: '2007-10-18T00:02:23'
  content: 'Nothing should be default. It is ambiguous because you never know if it was left package for a reason or someone just forgot. And what is the big deal in saying one more word. It is clear and precise.

    If the compilers are forgiving, then they should err on the more restrictive side and declare everything private.

    Agree with Phil on the keywords. They should be private, pkgprotected, and public. protected doesn''t carry its exact meaning.'
  replies: []
- id: 6979
  author: Doug Matthews
  date: '2007-10-18T03:01:50'
  content: 'I agree that package-protected should have its own keyword and not be the default; there should be no default.  I do find package-protected useful for testing, though the only time I seem to use it is to expose string or numeric constants that I need to access in my tests.

    One question I''ve always had is "why does package-protected scope not extend down to sub packages"?  If I''m going to create a sub package it seems logical to me it should have access to the same package-protected methods as its parent.'
  replies: []
- id: 6980
  author: Scott Vachalek
  date: '2007-10-18T10:41:34'
  content: 'I think the reason you always wonder if they used default on purpose or forgot it is because it is generally a useless setting.  Note that in interfaces the default is public (+ static final for fields) instead, and I think it reads nicely without all the extra keywords.

    I would say all fields should be private by default - maybe even by necessity as Phil described above.  Classes should not be public by default but I''d lean towards public for methods.  If your class has more than half private methods it''s probably two or three classes bundled into one.'
  replies: []
- id: 6981
  author: Michael
  date: '2007-10-18T13:14:31'
  content: 'It''s easy to get programming principles and language design mixed up. OOD says "make every field private, keep methods private unless they are specified in an interface" but this should not be enforced by the language but instead the language should simplify this construct.

    From a language design the use of private fields and getter/setter methods is a failure of the Java language. Making private the default scope of a field doesn''t help this flaw in the language. It would also make Java harder to learn.'
  replies: []
- id: 6982
  author: Paul Rivers
  date: '2007-10-18T14:24:00'
  content: 'I totally agree - it''s peculiar. It clutters up the code with a bazillion declarations of "public" and "private".

    I''ve thought about this subject for a while before - it seems like all my instance variables are private, while 90% of my methods are public, so I think making variables private by default and methods public by default would make sense.

    Alternatively, perhaps it would also make sense to make everything private by default so it wasn''t "confusing" that instance variables and methods had different levels of visibility. In my opinion, I''d still go with my first suggestion, but it''s a thought.

    This post made me think of something else, though - with unit tests being so widespread, might it be a useful language addition to allow test classes to directly access private methods? Perhaps packages who''s name starts with "test", like test.com.yahoo.search would be able to directly call private functions/variables in the com.yahoo.search package?'
  replies: []
- id: 6983
  author: Thom
  date: '2007-10-19T10:31:17'
  content: 'Hi Cedric,

    Sorry to post off-topic here, but I didn''t see another method to contact you. Just wanted to say, I enjoy your Perry Rhodan summaries - I was a fan of the english books way back in the late 70''s-early 80''s. I still have most of them. I''d love to help fill in your early book summaries, if you''d email me telling me:

    HOW to ''easily'' get more german heftes (I have 50 or so), and more details on how you go about scanning / translating them. (Maybe I could ultimately help with translating issues that never made it to english as well).

    Btw, I''m a software support engineer at Oracle, supporting the Oracle Application Server (web server) to include java, Apache, webcache, etc., so I''m quite impressed by your site.

    Best regards,

    Thom'
  replies: []
- id: 6984
  author: khalid
  date: '2007-10-22T04:16:00'
  content: 'Please, can you help me to rebuild TestNG source code

    I''m using Java1.5 and eclipse IDE

    thank you'
  replies: []
- id: 6985
  author: stopjava
  date: '2007-10-25T06:15:46'
  content: 'Hey, Cedric. I also admire you and I also want you to help me to install Ubuntu on my laptop.

    But a question?.. Is it one million dollar question after all?

    I don''t like repeating myself when writing zillions of strings "private ", "protected ", "public " in Java code. I enjoyed B.Stroutsrup''s (or guy named like that) default private scope and other "protected:", "public:" scopes for all "regions" of declarations in .h files. Well, but in Java implementation goes with declaration so this stuff is obsolete :(

    Package visibility helps sometimes. In tests, true. It''s synonim to C++ "friends" as gordy noticed.

    After all this question to me seems just religious. Though I''d vote for private as default saving most of the typing time for "java programmer" as opposed to "cobol programmer" (majority of java programmers nowadays in fact would love "public static" to be default).

    And why "const" is just reserved keyword and nothing more in Java?'
  replies: []
- id: 6986
  author: Kyle Lahnakoski
  date: '2007-10-29T05:44:07'
  content: 'I enjoy Java''s default package-protected scope.  I often make a set of classes that implement a single interface; and the package-protected scope allows me have those classes work tightly together without exposing attributes and methods to the public.

    But I wish for super-package-protected scope: Allowing all classes in a package, or sub-package, or sibling package, access the semi private attributes.  I find the interfaces are much cleaner if I allow the occasional class to reach deep into another''s structure.  This deep reaching does not happen often, and only happens with a logical group of classes;  a monolithic group.

    As it stands, when I make a set of classes, I have to choose between grouping the classes into sub-packages for clarity, or having the benefits of with Java''s package-protected scope.  With the former I over-expose methods, accessors and attributes.  With the latter, the class list is too long to find what I am looking for.

    For example, I like my parsers/compilers in one package, and the tokens they work on in another.  This makes it easy to find the compiler classes in the sea of token classes.  The compiler needs to create tokens before all the attributes are set; forcing me to make the attributes (or setter) public.  I do not want to expose the setters to the public.    For now, for each token, I must make a public interface (with no setters), a class that implements that interface, and then insert casts all over the place in the compiler.'
  replies: []
---

I have always found it ironic that Java's default access scope (the one you get when you don't specify either of `private`, `protected` or `public`) is actually the least useful (or least used). 

Default access package has recently received a little bit more love when avid testers realized that it represents a good compromise between not opening your API to external users too much while making it easier for tests in the same package to access your protected state, but even so, default access scope in Java is pretty much never used. 

Which is a shame, really, because this makes Java more verbose than it needs to be. 

Or does it? 

Is there really a scoping keyword that is prevalent compared to the other two? 

If you could magically redesign this part in Java, which of `private`, `protected` or `public` would you make the default and why?
