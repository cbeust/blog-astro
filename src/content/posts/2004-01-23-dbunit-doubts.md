---
title: DBUnit doubts
date: '2004-01-23T10:12:47'
slug: dbunit-doubts
categories:
- Java
comments:
- id: 988
  author: Keith Sader
  date: '2004-01-23T12:44:15'
  content: 'Are you calling super.setUp() in your setUp method?  IIRC that invokes getConnection().

    Second, on the new maven-based page there''s a spiffy set of links under ''Overview'' that are the docs.

    I''ve used DbUnit for about two years now and have found it invaluable for doing persistance testing.  The thing it''s pretty good at is exporting data from an existing database, that way you''ve got ''real'' data to test againt.'
  replies: []
- id: 989
  author: Carlos E. Perez
  date: '2004-01-23T12:56:13'
  content: 'I just had a thought that might be interesting.

    How about using Hypersonic SQL to create your "mock" databases.  If I''m correct, Hypersonic writes its data in SQL format, every time you restart it you just replay the SQL.

    So build your mock db, just have code that writes the SQL.

    Of course, its not going to help you if you got some schema evolution concerns.  So may, OFBIZ EE may be better.

    Just a thought.

    Carlos'
  replies: []
- id: 990
  author: Brian Slesinsky
  date: '2004-01-24T02:15:08'
  content: 're: "If you initialize your test data in the code, you get  an additional way of testing your database code, and you are also probably  closer to the way your users will initialize their own database."

    True, but on the other hand, using an independent method of loading and verifying the database guards against inadvertently breaking backward compatibility.  So long as changes to read and write methods are consistent, unit tests done entirely through the same API won''t catch a change in serialization format.  (Of course, whether that matters depends on the app.)'
  replies: []
- id: 996
  author: java work
  date: '2004-01-25T03:29:57'
  content: '<strong>DbUnit</strong>

    Otaku, Cedric''s weblog lists a few woes of DbUnit. Here are few answers to C'
  replies: []
- id: 991
  author: Manuel Laflamme
  date: '2004-01-28T08:48:59'
  content: 'Hi Cedric,

    The "flat" XML format is far from being hierarchical; I think the name says it all! I use a smart XML editor, namely XML Spy, which allows me to edit dataset in a tabular fashion. The format has been explicitly crafted with that editor in mind.

    I found your properties file suggestion very funny! I''m not sure I would like to use that personally! ;-)

    Not everybody is willing to implement his own database-testing framework; myself included! I have created DbUnit because nothing similar existed at the time.

    http://groups.yahoo.com/group/junit/message/4239'
  replies: []
- id: 992
  author: Doug Walker
  date: '2004-01-29T08:45:42'
  content: 'I too tried DBUnit.  I really wanted to like it too.

    However, I found it to be too slow for my uses.  I ended up writing my own TestSetup Decorator that merely asks for a set of SQL statements for setup/teardown (ex: ''insert into blah......'').

    I have two static arrays containing my SQL code.  One for setup, the other for teardown.

    I found this approach to be far faster.  I also found that whenever a schema change occurs, it''s easier to update the data in my TestCase rather than attempt to track those changes in a separate data file.'
  replies: []
- id: 993
  author: ''
  date: '2004-07-27T08:48:26'
  content: Could you not overcome the maintenance cost (paragraph 6) by using reflection?
  replies: []
- id: 994
  author: news-
  date: '2004-08-05T08:33:34'
  content: news
  replies: []
- id: 995
  author: Jeryl Cook
  date: '2007-02-20T16:23:33'
  content: Bump JUnit, ..just load the data using SQL setUp() to HypersonicSQL and call it a day :).
  replies: []
---

I was looking forward to converting my database tests to [DBUnit](http://dbunit.sourceforge.net/), created by Manuel Laflamme.  The idea of being able to specify my test data in an external file was appealing, as was the fact that DBUnit is a thin layer on top of JUnit, so I was confident I would feel comfortable with the product.

Unfortunately, things turned out differently.

First of all, I still haven't been able to get it to work.  For some strange reason, my getConnection() never gets invoked.  I am not extremely worried about that, I know I will eventually figure it out, but why is it that every single open-source product that I try never works as advertised out of the box?  Why do I always have to become much more intimate with their source base than I would like to?

Another sadly typical thing in open-source projects is that if you go to [DBUnit's home page](http://dbunit.sourceforge.net/), there is no obvious link to the documentation.  I give them points for putting the Download link on top, but if I am trying to evaluate your product, why would I care so much for Changes, FAQ, Getting Support, Source or JavaDocs?  Just point me to a simple white paper of a few pages explaining why I should care about your product.  To make matter worse, the [only page that provides some assistance](https://sourceforge.net/support/getsupport.php?group_id=47439) tells you that the documentation can be found in the release.  Come on, now, just make the darn thing available online and make sure it sits right up next to the Download link.

Anyway.

The real problem is the idea behind DBUnit.  I started realizing that specifying the test data in an external file didn't make that much sense after all.  If you are going to modify the said data, you will be modifying your Java code as well, so the maintenance cost is pretty much the same in both cases.  Except that if you initialize your test data in the code, you get an additional way of testing your database code, and you are also probably closer to the way your users will initialize their own database.

Another hint on the questionable premise of DBUnit can be read in the author's own comments.  He initially started with a generic XML format to describe the data that your database should be initialized with.  Then, in the next version, he makes the following observation:

> The FlatXmlDataSet class has been introduced in version 1.2. I found that generic XML datasets were hard to write and to maintain. This was particularly painful for tables having a lot of columns. 

This new XML format is more generic but also dependent on your database schema.  It's a progress over the first iteration, but it's a pity that Manuel didn't push this realization to its conclusion:  you are trying to model relational data, XML is **not** a good way to do that because it is hierarchical.  From a practical standpoint, I see very little difference in verbosity between FlatXmlDataSet and plain Java code.  I would argue that a dumb properties file would probably be the easiest choice:

> person.row0 = "Beust", "Cedric", ""  
>  person.row1 = "Purdy", "Harold", "C"

I really want to like DBUnit, but at this point, I see very little added value compared to writing my own framework on top of JUnit.

Can someone convince me otherwise?
