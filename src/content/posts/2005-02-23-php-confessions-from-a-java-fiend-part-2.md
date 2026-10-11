---
title: PHP confessions from a Java fiend (part 2)
date: '2005-02-23T22:13:55'
slug: php-confessions-from-a-java-fiend-part-2
categories:
- Java
comments:
- id: 3175
  author: Rami Kayyali
  date: '2005-02-23T16:23:48'
  content: 'Just a couple of notes here, I think you might be interested:

    - You can always use mysql_fetch_array() if you want results by field name, and loop over in a while() loop:

    $result = mysql_query("...");

    while ( $row = mysql_fetch_array($result) ) {

    echo $row[''field_name''];

    }

    - You could also wrap that in an iterator interface if you''re using PHP5.

    - ADOdb DBAL for PHP (Alternativley you could use PEAR::DB).

    - AFAIR session_register() and session_unregister() are deprecated. Use $_SESSOIN[''key''] = ''value'' and unset($_SESSION[''key'']).'
  replies: []
- id: 3176
  author: Dan
  date: '2005-02-23T20:59:37'
  content: 'Re: Database abstraction, PEAR is probably a great place to start.  Much like perl''s CPAN or a hypothetical J2SE, to which users can contribute:

    http://pear.php.net/packages.php?catpid=7&catname=Database'
  replies: []
- id: 3177
  author: Robert McIntosh
  date: '2005-02-24T07:37:13'
  content: 'If you haven''t discovered this gem yet, see my favorite: http://jroller.com/page/sftarch/20041222#learning_php'
  replies: []
- id: 3178
  author: ''
  date: '2005-02-24T07:50:50'
  content: 'More un-asked for advice, triggered by your thoughts on databases.

    Most important is to remember PHP is stateless. What that means in practice is every incoming request begins with PHP as a blank slate. Nothing is preserved between requests (sessions being the exception) - more: http://www.sitepoint.com/blog-post-view.php?id=151665

    Bearing that in mind it''s worth being aware of PHP''s persistent database connection resources (http://www.php.net/manual/en/features.persistent-connections.php). At the same time believe MySQL takes care of keeping the connection overhead low plus most shared hosts disable permanent connections anyway.

    As to fetching data with PHP, the APIs are generally designed for the most part geared to a common idiom;

    1. Select result set

    2. Loop once through rows from start to finish (e.g. while rendering table)

    3. Throw away result set

    It''s very easy to access table "metadata" e.g.;

    while ( $row = mysql_fetch_array($rs, MYSQL_ASSOC) ) {

    echo $row[''username''].'''';

    echo $row[''password''].'''';

    }

    Regarding db abstraction layers, there''s a few. These are probably the most noteworthy;

    http://pear.php.net/DB - probably inspired by Perl''s DBI originally

    http://adodb.sourceforge.net/ - modelled after MS''s ADO (pre .NET). Find this excellent for working with Oracle, the native PHP oci extension being for too low level

    http://pear.php.net/MDB2 - have no experience

    http://www.phpdb.org/ - Creole is the abstraction layer and Propel is inspired by Apache Torque. Much Java influence.

    Most of the abstraction layers are focused primarily on database portability (not about simplifying the API). ORM is getting there (Propel is one example and DB_DataObject is another - http://pear.php.net/package/DB_DataObject/), should you want to go there.

    If you know you will be only running against MySQL, it''s probably not worth using these libraries though. A better approach would be wrapping common operations in an API. Something like;

    getField($sql) - fetch a single cell value from a table

    getOneColumnQuery($sql) - return a single column as an array, for use in a HTML select tag

    getTwoColumnQuery($sql) - return a single column as an array, for use in a HTML select multiple tag

    getResultIterator($sql) - ready for tables etc.

    A library which takes this approach (only one I''m aware of) is WACT: http://wact.sourceforge.net. There''s an example at: http://wact.sourceforge.net/examples/showsource/showsource.php?file=apps/crud/lib/phpmodule/phpmodule.model.php'
  replies: []
- id: 3179
  author: Will
  date: '2005-02-24T08:39:22'
  content: 'As far as template frameworks go, have you looked at Smarty?  It reminds me of Velocity.

    Here''s a nice article:

    http://www.onlamp.com/pub/a/php/2002/09/05/smarty.html'
  replies: []
- id: 3180
  author: Leendert Brouwer
  date: '2005-02-24T09:07:05'
  content: Also have a look at the upcoming PDO extension for a uniform data access API, php.net/PDO
  replies: []
- id: 3181
  author: Anusha Perera
  date: '2005-03-08T10:13:02'
  content: 'ezSQL: A class that makes it ridiculously easy to use mySQL, Oracle8, Inerbase/Firebase, PostgreSQL, SQLite (PHP), SQLite (C++), MS-SQL database(s) within your PHP/C++ script. It works with Smarty templating language as well.

    http://php.justinvincent.com/'
  replies: []
- id: 3186
  author: Byron's WebLog
  date: '2005-03-09T12:33:55'
  content: '<strong>Cedric on PHP</strong>

    Cedric Beust, a key developer for some of the biggest WebLogic releases and a strong early proponent of annotations in Java, recently gave PHP a spin and was pleasantly surprised. I like his initial write-up and part 2. It''s refreshed...'
  replies: []
- id: 3187
  author: 'Confluence: 0. Gonzo'
  date: '2005-06-17T10:04:09'
  content: '<strong>Cedric Beust has a couple</strong>

    Cedric Beust has a couple of interesting blogs on PHP :  PHP confessions from a Java fiend'
  replies: []
- id: 3182
  author: qwe
  date: '2006-03-27T06:55:38'
  content: well done http://www.google.com
  replies: []
- id: 3183
  author: Hussain
  date: '2007-02-21T04:30:01'
  content: In my Register.php file when i enter the Membershipno of existing member the required data will b shown in name,address and telno of that member but it can't be happen..so wht can i do...and  my database is mysql..
  replies: []
- id: 3184
  author: Hussain
  date: '2007-02-21T04:38:35'
  content: In my Register.php file when i enter the Membershipno of existing member the required data will b shown in name,address and telno of that member but it can't be happen..so wht can i do...and  my database is mysql..
  replies: []
- id: 3185
  author: dsfdf
  date: '2007-12-16T14:23:45'
  content: asdfsadf
  replies: []
---

_[Read part 1.](http://beust.com/weblog/weblog/archives/000245.html)_

When you are putting together a Web site, there are two things you need from a language:

  * Database access.
  * Web support.



As far as I can tell, PHP's support for the former is adequate but the Web is definitely its forte.

I can only talk about PHP's support for MySQL, but support for other databases is probably not very different.  As a friend of mine told me not long ago, "there are not a hundred ways you can retrieve rows from a database".

The pair PHP-MySQL is actually so popular that it's very likely that if your ISP supports PHP, they probably installed the MySQL extensions with it, and a quick way of telling is by invoking `phpconfig()` and look for "MySQL" in the result page.

MySQL support is pretty much identical to JDBC:  very low level, you name columns directly and you reference results by ordinal number.  And just like JDBC, you need to remember to close the connection when you're done:

> $resultRow = mysql_query($query);  
>  $rowCount = mysql_numrows($resultRow);  
>  for ($i = 0; $i < $rowCount; $i++) {  
>    $name = mysql_result($result, $i, "name");  
>    $date = mysql_result($result, $i, "date");  
>  }

I am sure there are numerous packages built on top of this simple abstraction but I haven't done any research yet, and I am purposely trying to keep things very basic with my code (hence no class or other object-oriented features of PHP for now, although just using classes would already help separate neatly the various layers of my application).

The only principle I have found helpful so far is to centralize all the database-oriented code in one single file, and avoiding to use hardcoded strings to reference anything in my schemas.  Having said that, I can already envision some future maintenance nightmare...

Let's turn to Web support now, which is where PHP really shines.

There are three areas of particular interest to Web developers:

  * Forms
  * Cookies
  * Sessions



And in the three areas, PHP is an example of simplicity.

Consider the following form:

> <form action="post.php">  
>    <input type="text" name="date" />  
>  </form>

You collect the value entered in the text field in `post.php` like this:

> $date = $_POST["date"];

Of course, you would use `$_GET` if that's the action you are using instead.

Cookies follow a similar pattern:

> setcookie("user", "cedric");  
>    
>  // ...
> 
> if (isset($_COOKIE["user"])) {  
>    $user = $_COOKIE["user"];  
>  }

Sessions are stored in an array called, unsurprisingly, `$_SESSION`.  You can have one started automatically by PHP or do this explicitly with ` session_start()`.  Of course, the same warnings as in J2EE apply, such as making sure you keep the number of variables in your session to a minimum (you can unregister variables with `session_unregister()`).

If you can put aside the mildly annoying asymmetry in the API (sometimes you invoke a function, other times it's a global array), PHP puts a lot of power in your hands with these simple API's, and making changes involving an alteration of a schema and the accompanying change in the business logic and the HTML can often be made in less than ten minutes.

The next task I'd like to tackle is to research a higher level of abstraction than what I have been looking at so far, such as template frameworks and database abstractions.
