---
title: More DBUnit woes
date: '2004-01-23T16:30:56'
slug: more-dbunit-woes
categories:
- Java
comments:
- id: 997
  author: Slava Imeshev
  date: '2004-01-23T17:33:05'
  content: 'Cedric,

    I''ve been using DBUnit for 2 years W/O any problem. May be you just don''t cook it right?'
  replies: []
- id: 998
  author: David Channon
  date: '2004-01-25T14:25:27'
  content: You might not have setup the schema DTD for the data correctly or at all. This would be the result if this is the case.
  replies: []
- id: 999
  author: Manuel Laflamme
  date: '2004-01-28T07:23:46'
  content: '1. "last_name" problem:

    I agree, DbUnit should report this kind of mistakes and I''ll look into why it does not. DbUnit 2.0 tries to be "default value" friendly by omitting null from the insert statement. Having an empty string as default value for "last_name" would explain why you don''t get the "not nullable" error with version 2.0. I should have made this configurable and disabled it by default.

    2. "middle_name" problem:

    Looks like you are using a data type not natively supported by DbUnit for this column. Version 2.0 features configurable data type factory and provides implementations for a few vendors.

    You should have got a warning about the unrecognized data type. Perhaps the warning was lost in the middle of a very verbose output! Maybe it should be an error instead of a warning!'
  replies: []
- id: 1000
  author: Rich Youngkin
  date: '2004-01-30T15:03:55'
  content: 'I agree that populating data in a separate file sounds good, but my experience has been that it''s just another thing to keep track of.

    That said, I use the assertEqual() capability a lot and find it very useful.  After all ,who wants to write all that rote ResultSet traversal code?

    All in all, I find DBUnit very useful and like having it in my bag of tricks.  Kudos to Manuel for continuing to improve it.'
  replies: []
- id: 1001
  author: Karim
  date: '2005-07-20T16:55:30'
  content: 'I found a possible answer to your question #2.

    Example:

    In the above example "column2" will not get populated.  It seems like the table metadata gets set up for the first entry DbUnit encounters.  If you change the ordering then you will start to see "column2" getting populated.

    Hope this helps...'
  replies: []
- id: 1002
  author: Karim
  date: '2005-07-20T16:56:33'
  content: 'I found a possible answer to your question #2.

    Example:

    (could not include xml markup!)

    sometable column1="value1"

    sometable column1="value1" column2="value2"

    In the above example "column2" will not get populated.  It seems like the table metadata gets set up for the first entry DbUnit encounters.  If you change the ordering then you will start to see "column2" getting populated.

    Hope this helps...'
  replies: []
- id: 1003
  author: easy
  date: '2007-03-05T14:44:58'
  content: 'hey

    have you set DTD in dataset?

    I have the same problem!!

    try this

    http://timshadel.com/2005/07/11/strange-dbunit-loading-problem/

    may helpful'
  replies: []
---

By an interesting coincidence, DBUnit released version 2.0 yesterday, so I immediately installed it.  The good news is that it didn't require any change in my code (probably because I am still in the early experimentation stage at this point, but I understand that some major configuration changes have been made).

That being said, my first contact with version 2.0 is not good at all.  For example, I made a typo in my XML dataset and misspelled a column name:

> <PERSON last_nam = "Molinier" first_name = "David" middle_name = "L" />

With DBUnit 1.5.6, the punishment is immediate:

> java.sql.SQLException: General error, message from server: "Column 'last_name' cannot be null"

(Note that the error is **not** that the column name is incorrect, which is already not looking good).

But with DBUnit 2.0, the error is silently discarded and I end up with an inconsistent database:

> +-----------+------------+-------------+  
>  | last_name | first_name | middle_name |  
>  +-----------+------------+-------------+  
>  |           | David      | NULL        |  
>  +-----------+------------+-------------+

Second, I can't seem to be able to initialize the middle_name column, neither with 1.5.6 nor with 2.0.  No error message, no indication whatsoever of what went wrong.  Of course, I am pretty confident the spelling is right.

Strike three for DBUnit.  Very disappointed.
