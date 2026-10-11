---
title: NoSQL explained correctly (finally)
date: '2010-02-25T12:44:12'
slug: nosql-explained-correctly-finally
categories:
- General
comments:
- id: 7996
  author: Chris
  date: '2010-02-26T04:46:05'
  content: The end result in 10 years (less I hope) is some more very smart people figure out how to make RDBMS scale as well as the NoSQL solutions, to make them function in a distributed fashion which does not have a single point of failure. I hope these smart people are working on this right now, as I am desperate need for it.
  replies: []
- id: 7997
  author: Mervin Faulkner
  date: '2010-02-26T10:53:35'
  content: 'Over 30 years ago I developed an Information Retrieval Technique that I still use today.

    History....

    Database was just getting started then so I studied the concept to find out what it was all about.

    I came up with 2 conclusions as to why the concept was developed.

    The first was to reduce data redundancy. Example: Payroll maintained a file that contained each employee''s personal data (name,address, date of birth etc.) and Personnel maintained a file that also contained the same data. The main reason this occurred was "Empire Building". Each department would not let the other access their data.

    The problem with this was that if you asked Payroll how many employees you had they would give you one number (ie.1000) and if you asked Personnel the same question they would give you a different number (ie. 1005).

    Maintaining more then 1 file that contains the same data is inefficient and costly.

    The second conclusion was to provide the ability to search on any field within the database. This was the theory.

    The original concept was that all data for any business would reside in one database.

    As time went on I started seeing articles on Accounting Databases, Payroll Databases, Inventory Databases, etc. What happened to one database for all?

    Then articles appeared talking about the position of Database Administrator. What was this about? The main reason this position was created was to evaluate the search requirements for each database. Each field to be accessed for search purposes resulted in an index file being created therefore you had to justify your request to access a field, for example, if you would only access the field once a month, access would probably be denied.

    Our environment.....

    We were running an IBM System 3/10 at that time with 16k memory and 9.1 megabits of on-line storage. (For the non-old-timers, this system used punch cards for input and only had a console typewriter.)

    A database system was out of the question.

    Upon analyzing our systems I found out we did not have a "data redundancy" problem. Common data was shared by all applications that needed it.

    What about data access? This was a problem! All of our time in IT was used to create new reports for each department as their information needs changed. Reports that became quickly redundant.

    Solution.....

    I developed a technique that allowed us to search through files, and all related files, by processing a sentence typed into a punch card.

    Example. "list a 3933 employees with a date-of-birth = 19770210"

    As time went on I realized my technique would process sentences in any language. To test my theory, I had fellow employees who were fluent in German, French and Serbian translate sentences for me and proceeded to process them successfully.

    I provided the ability to perform the following comparisons on any field:

    equal

    greater-than

    less-than

    from... to....

    not equal

    not greater-than

    not less-than

    not from... to....

    You could also use; and, or, any X and every x.

    This technique did not use any indexes therefore there was no overhead.

    My point.....

    As mentioned in another comment, the media costs have fallen so dramatically that it is not a major factor any more.

    To regress for a moment: years ago, after I had finished speaking at a conference, a gentleman approached me and said, "Do you realize that us programmers are masters of past arts?"

    I asked, "What do you mean?"

    He said, "When we wrote 32k programs for a 16k system we had to learn how to overlay the program into memory. We just got that down pat and they came out with virtual memory. We learned how to pack data to conserve disk space and reduce access time and they came out with media that could hold more in less space and drastically reduced the cost."

    Today my technique, which is embedded in all of our application systems, runs infinitely faster then it originally did and I have not changed a thing.

    Maybe the need for "databases" is also outdated. Proper system design based on all of the needs of the organization will reduce "data redundancy" and maybe there is an alternative to SQL for information retrieval.

    I realize that some of us consider SQL as a programming language but it is my opinion that the application should do it''s own math and decision making considering it takes a programmer, or a person proficient in SQL, to formulate the query statement anyways.

    Information Retrieval (by the way "information" is data compared to standards) in an easy comfortable way is vitally important to today''s businesses in order to adapt to the quickly changing  business environment.

    My two cents worth...

    Have a super one!'
  replies: []
- id: 7998
  author: abcphp.com
  date: '2010-02-26T13:29:24'
  content: '<strong>NoSQL explained correctly (finally) ?? Otaku, Cedric''s weblog...</strong>

    A very interesting write-up with one little oversight: you??re wrong. I am part of a large program to write a NoSQL database for military applications. It??s not a backlash against paying Oracle (the DoD has a blanket license for Oracle installations) or...'
  replies: []
- id: 7999
  author: jj
  date: '2010-03-07T11:56:01'
  content: 'The annoying thing about the NoSQL movement, is that many of its followers are people that don''t understand proper relational design to begin with, and don''t know what transactions are nor how to optimize indexes.

    It is true that RDBMS will suffer on distributed systems and when you have to handle the amount of information that Facebook has to. But I think NoSQL is misunderstood by too many newbies in the same way they consider non-waterfall processes as "no need to document anything or do any requirements gathering; just program and iterate".

    Also, since SQL is probably the piece of the puzzle that less has to do with the relational model, the whole movement should probably be NoRelational and not NoSQL.'
  replies: []
- id: 8000
  author: alphadog
  date: '2010-03-22T13:56:15'
  content: 'Not too many people get the relational-SQL-NoSQL universe of discourse thing right. (And, I don''t claim to have it nailed too. I''m still trying to understand it all. It is made confusing by the sheer majority of developers who simply do not understand the Relational Model.)

    The current dogpile of self-titled NoSQL databases have varying degrees of "non-relationalness" and/or "non-consistency".

    The former is a logical issue, and not to be confused with SQLness. For example, the Relational Model imposes some strong schema needs, whereas lots of NoSQL DBs pride themselves on their chaoticness.

    The latter is a physical implementation issue when scaling to extremes, which various groups again address differently than your typical old-school RDBMS. (See CAP Theorem) Note that you can put a relational front-end over the typical, physical implementations of many NoSQL DMBSes that sacrifices the "C" in "CAP", yet still be SQLish.

    The best name for the movement would actually be NoLegacyRDBMsForNicheEnvironments, but it doesn''t quite roll off the tongue as easily. :)'
  replies: []
- id: 8001
  author: blue lock
  date: '2010-08-25T18:37:00'
  content: It is good that the name was coined not to proclaim its opposition to sql but to show that it was outside of and had nothing to do with sql. I like that it has been clarified here. When great minds get together a load can be achieved and the collective effort really has paid off, hasn??t it? Now what made the need for this? It is a back handed compliment of sorts and one which was necessary to give sql a much needed break, so as to attain consistency.
  replies: []
- id: 8002
  author: ehcache.net
  date: '2011-03-11T21:40:01'
  content: '<strong>NoSQL explained correctly (finally)...</strong>

    I am part of a large program to write a NoSQL database for military applications. It??s not a backlash against paying Oracle (the DoD has a blanket license for Oracle installations) or a philosophical stance by the hippies in the defense arena; it??s the...'
  replies: []
- id: 8003
  author: Jack3d
  date: '2011-06-05T16:47:07'
  content: I agree, it's one of the best language there is and it's the reason why SQL is the most preferred way to retrieve data stored in tables. Not useless, as the other commenter said at all.
  replies: []
---

Now here is a definition of "NoSQL" that I can agree with: 

> A very interesting write-up with one little oversight: you're wrong. I am part of a large program to write a NoSQL database for military applications. It??s not a backlash against paying Oracle (the DoD has a blanket license for Oracle installations) or a philosophical stance by the hippies in the defense arena; it's the fact that RDBMSs are built in a different space in the CAP trades (see [this article](http://www.julianbrowne.com/article/viewer/brewers-cap-theorem)). Google, Amazon, Facebook, and DARPA all recognized that when you scale systems large enough, you can never put enough iron in one place to get the job done (and you wouldn't want to, to prevent a single point of failure). Once you accept that you have a distributed system, you need to give up consistency or availability, which the fundamental transactionality of traditional RDBMSs cannot abide. Based on the realization that something fundamentally different needed to be built, a lot of Very Smart People tackled the problem in a variety of different ways, making different trades along the way. Eventually, we all started getting together and trading ideas, and we realized that we needed some moniker to call all of these different databases that were not the traditional relational databases. The NoSQL name was coined more along the lines of "anything outside of the SQL part of the Venn diagram" rather than "opposed to SQL". The NoSQL databases are a pragmatic response to growing scale of databases and the falling prices of commodity hardware. It??s not a noble counterculture movement (although it does attract the sort that have a great deal of mental flexibility), it??s just a way to get business done cheaper. 

This is a comment to [this article](http://www.kellblog.com/2010/02/24/the-database-tea-party-the-nosql-movement/). 

The commenter is dead on. There is nothing (well, very little) wrong with SQL. It's an old language, but it's still the best language that we have today when we need to retrieve data stored in tables. Nothing comes even close. And as a matter of fact, NoSQL products have typically very crippled query functionalities compared to SQL. 

This is not to say that NoSQL is useless, but as the commenter correctly points out, NoSQL is just an extension of the current model to meet certain specific needs. 

I bet that in ten years from now, we will still have a majority of SQL based systems complemented by a small portion of NoSQL frameworks.
