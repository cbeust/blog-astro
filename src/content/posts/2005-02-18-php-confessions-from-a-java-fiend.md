---
title: PHP confessions from a Java fiend
date: '2005-02-18T08:00:38'
slug: php-confessions-from-a-java-fiend
categories:
- Java
comments:
- id: 3143
  author: Jonathan Ellis
  date: '2005-02-18T15:26:45'
  content: There are actually very few languages more regular in any dimension than TCL...  the rules may not be what you are used to, but that doesn't make them nebulous.
  replies: []
- id: 3144
  author: Emmanuel Pirsch
  date: '2005-02-18T15:57:44'
  content: 'On TCL...

    I had to get used to TCL a 4 years ago to create Vignette templates.

    basic usage for template was OK... However, when we ran into some issues with the performance of Vignette XML parser, we had to create a layer around it in TCL, we also created a kind of XML-RPC API, to talk to a J2EE backend, for our Vignette template.

    Learning TCL was quite challenging at first, but after getting used to it... I find TCL to be a very powerful and nice language.'
  replies: []
- id: 3145
  author: Jason Barker
  date: '2005-02-18T19:47:26'
  content: 'I''m glad you post this entry.

    Many Java programmers looked down on PHP and boldly claimed that PHP is inferior, and sadly most of those programmers never even attempted to use PHP.

    The worst I''ve heard so far from Java people was the claim from the JBoss guys when they ported PostNuke into Nukes on JBoss.

    The problem was PostNuke implementation doesn''t scale (no connection pooling etc), yet their claim was that PHP doesn''t scale.

    I hope Cedric''s posting will show people to at least try to look at it first before making any silly statements.'
  replies: []
- id: 3146
  author: aaa
  date: '2005-02-18T20:02:35'
  content: well, in my previous job i was dealing with php extensively. now i am a java programmer. to my liking, java is a breeze. php is evolved nicely, but the mindset of the rogrammers are not same as java developers. At least i didnt like the quality of php code around. most of the time a horrible spaghetti. the only adavantage i see php is that it is common in ISP's. For small web sites, php might be a non brainer, but for non-web and more serious stuff i use java any day.
  replies: []
- id: 3147
  author: Frank Bolander
  date: '2005-02-18T23:06:06'
  content: 'Be careful Cedric, the mythos of PHP has its warts.

    I''ve kept a tolerant opinion of PHP until recently when a phpBB forum I was serving for a bunch of buddies exposed huge PHP/phpBB deficiencies which lead to several days of me poring through syslogs and a couple of days of downtime-- and I wasn''t the only one in the world. I had to correlate crap to my tighten down my firewall rules after an injection vulnerability reared it''s ugly head.

    PHP is dangerous at it''s best. I originally thought it was innocuous but when I did research on all the major gaping security holes, I''m thinking of removing it from all my machines-- even with the latest patches. It''s allure as an alternative/proxy to ASP/JSP makes everyone blinded IMO just because of GPL. It''s pretty sad when a server side scripting engine will allow Perl statements to be injected in GET parameters and cause major damage after all the years of use and hype.

    In addition, since you admit you''re new to PHP, read all the user comments in the docs. You''ll find not everyone is happy with the language and find that the promised functionality is not what is advertised, especially with configuration. I know all languages are like this to some degree, but PHP is really starting to p*ss people off(sort of like Groovy :) ).

    The only thing I''ll give it is that it forced me to research more security tools that are pretty cool. But I wasn''t really interested in doing that .'
  replies: []
- id: 3148
  author: drscroogemcduck
  date: '2005-02-18T23:30:22'
  content: i doubt postnuke doesn't support connection pooling. if it allows you to configure the db driver then you can just use a pooling a driver that layers on top of the real driver
  replies: []
- id: 3162
  author: sarsor
  date: '2005-02-19T05:34:53'
  content: '<strong>Why chaining constructors is bad.</strong>

    Ping Back???blog.csdn.net'
  replies: []
- id: 3149
  author: Luke Reeves
  date: '2005-02-19T08:04:36'
  content: 'Frank: PHP isn''t licensed under the GPL, but rather it uses it''s own license terms'
  replies: []
- id: 3150
  author: Chris
  date: '2005-02-19T11:20:08'
  content: 'Frank,

    Your post is just FUD; the hole was in phpBB and has nothing to do with PHP. It is just as easy to create an insecure script in any language; because phpBB happens to have a bad security problem has nothing to do with whether PHP is an acceptable language to use or not. There are lots of valid criticisms of PHP, this is not one of them.'
  replies: []
- id: 3151
  author: Lukas
  date: '2005-02-19T11:23:00'
  content: '"Strings can contain newlines, so you can embed big pieces of HTML into your code" .. thats a feature?'
  replies: []
- id: 3163
  author: Die wunderbare Welt von Isotopp
  date: '2005-02-19T13:15:27'
  content: '<strong>PHP5 Poster</strong>

    Dank baerli bin ich jetzt stolzer Besitzer eines riesengro'
  replies: []
- id: 3152
  author: Daniel
  date: '2005-02-19T14:09:39'
  content: 'Cedric,

    having "display_errors On" in your php.ini is good; it would be even better to use "error_reporting E_ALL" while developing, this would e.g. throw Notices for unset Variables (http://www.php.net/error_reporting).'
  replies: []
- id: 3153
  author: Alan Knowles
  date: '2005-02-19T18:39:29'
  content: 'The log() error is strange, perhaps it''s an old version of php.

    #php4 -r  ''function log($x) { } ''

    Fatal error: Cannot redeclare log() in Command line code on line 1

    look at pear.php.net - you can use all your java OO skills, with PHP too.

    You probably have to consider that PHP is designed to be coded and written without a fancy editor (which does method lookups etc. for you), so limiting scope and poluting the global namespaces with imports, goes against this as it''s quite important for readability.'
  replies: []
- id: 3154
  author: Harry Fuecks
  date: '2005-02-20T11:26:35'
  content: 'You may be interested in a response which has been posted here: http://www.procata.com/blog/archives/2005/02/19/php-first-impressions-from-a-j2ee-programmer/

    Some random thoughts;

    You may find constants more useful than global variables for the particular $URL example you had. See http://www.php.net/manual/en/language.constants.php. In general (a rule to be broken) it''s better to pass variables to functions as arguments - generally makes code less tightly coupled.

    Constants are also useful for managing inclusion of "libraries" e.g. at top of "library" script that you will be including;

    &lt;?php

    if ( !defined(''LIB_PATH'') ) {

    // __FILE__ is a magic constant - the current file

    define(''LIB_PATH'', dirname(__FILE__) .''/'');

    }

    // Require_once or include_once are useful for helping with dependencies

    require_once(LIB_PATH . ''baseclass.php'');

    // etc.

    If you _really_ want to log, this may appeal: http://www.vxr.it/log4php/

    Classes in PHP are the most useful mechanism for namespacing and their syntax was inspired largely by Java. Watch out for object references in PHP4 - by default PHP4 passes everything as a copy (changed with PHP5). There''s some useful notes here: http://phplens.com/phpeverywhere/node/view/31

    Otherwise these may be useful thoughts: http://wact.sourceforge.net/index.php/PHP%20Application%20Design%20Concerns'
  replies: []
- id: 3155
  author: Kelvin
  date: '2005-02-21T06:29:28'
  content: 'I''m a veteran J2EE developer and a convert to PHP, I''d like to quickly give Frank Bolander a reality check -

    QUOTE: "PHP is dangerous at it''s best."

    All systems that serve web content have potential security flaws, Java and J2EE have given me more security headaches than PHP ever could, also its got to be the worst platform ever for multi user enviroments.

    QUOTE: "tighten down my firewall rules after an injection vulnerability"

    And? Are you a novice administrator? this is a problem with the system and security, its not PHP''s fault if you can''t keep your system updated correctly - Java/J2EE is not exempt from attacks.

    QUOTE: "Find that the promised functionality is not what is advertised especially with configuration..."

    And what exactly does this mean? care to give some examples?

    1) All the options can be independantly enabled, disabled and removed.

    2) It''ll run in virtually any enviroment.

    QUOTE: "but PHP is really starting to p*ss people off"

    While you race ahead shouting your J2EE dribble take a moment to look behind you, you''ll find more J2EE developers jumping ship and converting to PHP than vice versa; PHP has 10x more available resources than J2EE/Jsp/Servlet, its faster, cleaner and much more versatile.'
  replies: []
- id: 3156
  author: Sean
  date: '2005-02-23T08:29:22'
  content: 'I''m a J2EE developer working in a J2EE shop.  I''ve used PHP for personal websites for years, but recently we started using it internally at work.

    Ironically we store our Junit test suite data into MySQL and have various PHP reporting tools do everything from track runtime performance to graphical chart generation.

    Since it''s an interal Apache server, I can just edit pages live if I want to.  I certainly wouldn''t be so casual in production, but we were able to build a ton of development infrastructure in a hurry with PHP.'
  replies: []
- id: 3157
  author: Rami Kayyali
  date: '2005-02-23T16:11:10'
  content: 'Comparing Oracle to MySQL is like comparing a B52 bomber to a F22 fighter jet. I don''t quite remember where I heard this analogy before, but I think it''s applicable to J2EE and PHP.

    What I personally like about PHP is that it makes it really easy to jot down prototypes of medium to large applications, in addition to its ease of deployment. PHP''s loose types make it much more flexible when compared to Java. I''m not going to start "enterprise-ready" debates here, but with its current performance, PHP is a really competitive option.

    Agreed, it still has its gotchas, but then again, any language does. It''s probably more about the platform itself rather than the syntax and the nitty-gritty details, I mean the combination of a Web server, a database server, and the rest of the tools you need to build a web application. PHP is just way too easy when compared with J2EE.

    Cedric, I''m glad you finally took a look at PHP, and I''m sure you won''t be disappointed. I know it''s hard to shake years of OO experience, but with PHP5, a unit testing framework, and a caching module for Apache, I think you''ll get a comparable platform to J2EE and it you''ll be back to coding the way you usually do; not to mention extensions like SimpleXML, SQLite and SPL (yep, iterators!). Hopefully, you won''t be disappointed.'
  replies: []
- id: 3158
  author: Angsuman Chakraborty
  date: '2005-03-18T09:21:15'
  content: 'What is painful in php is that it silently consumes errors, without letting you know what went wrong, in most cases. It is as such very frustrating to debug.

    So long you want to quickly hack uo something it is great. As you said its like jsp with few added niceties.

    However when you are thinking enterprise class applications, frameworks etc. you quickly realize that there aren''t much to go on. It is very much function oriented language, lots of functions for everything imaginable.

    Mini FAQ: How to comment in your blog.

    If I give my email address (no place for url in your comment form originally) then it will show it. So I give it an url so it cries foul. When it does, it actually shows up another field to submit my url. Now I can safely add both my email and url, knowing that only the url will be displayed :)'
  replies: []
- id: 3164
  author: 'Confluence: 0. Gonzo'
  date: '2005-06-17T10:04:04'
  content: '<strong>Cedric Beust has a couple</strong>

    Cedric Beust has a couple of interesting blogs on PHP :  PHP confessions from a Java fiend'
  replies: []
- id: 3159
  author: eminence skin care
  date: '2006-09-28T09:40:52'
  content: thank
  replies: []
- id: 3160
  author: rolfhub
  date: '2007-02-24T04:30:58'
  content: 'To all those who claim that PHP eats errors without complaining:

    That''s easy to get rid of, if you are using PHP version 4.*, you can just start your script with

    ----------------------------

    &lt;?php

    error_reporting(E_ALL);

    ----------------------------

    If you are using PHP 5.*, you can get the interpreter to complain even more with

    ----------------------------

    &lt;?php

    error_reporting(E_ALL|E_STRICT);

    ----------------------------

    Of course you shouldn''t turn this on on your production server, but it''s a very good idea to turn this on on your development machines, to find most of the problems in no time.

    It''s also a good idea to use Eclipse with a PHP plugin to do PHP development, because it just safes a great amount of time. I can recomend PHPEclipse (http://www.phpeclipse.de/ or http://sourceforge.net/projects/phpeclipse/) because it seems to be quite mature, given it''s early development stage ("Development Status : 4 - Beta, 5 - Production/Stable"). With this plugin, you can get most of the luxuries that you get when developing Java code with the Eclipse. Sweet!'
  replies: []
- id: 3161
  author: soitto&auml;&auml;net
  date: '2009-01-12T21:52:29'
  content: nice!
  replies: []
---

I spent that last few days revamping a Web site and I took this opportunity to learn PHP, which has been an interesting experience.

This Web site contains about a thousand different HTML pages which I wanted to store in a database in order to make it easier to browse.  My first task was therefore to scrape this HTML in order to extract its meaningful content and then to store into a database.

When I started this Web site six years ago, I had no idea I would ever need to do something like this but I still followed the convention of surrounding the information of importance with <span> tags.  This turned out to be of critical importance.  I wrote a short Ruby script that did the parsing and extracted the data into a canonical format that I later used as the central repository from which to populate the database.

The next step was to set up Apache and MySQL to my liking, which turned out to be a little more challenging than I had anticipated, because what I have access to on my development machine is different from what my ISP lets me modify.  But I'll save that for a future entry if there's interest and I'll focus on PHP for now.

Picking PHP was a no-brainer.  First because it is supported by my ISP but also because I had always wanted to learn it and find out what all the buzz was about.  I expected the experience to be painless and...  surprisingly, it was.  Way beyond my expectations.

Here are a few thoughts from the perspective of a Java programmer who has been heavily exposed to J2EE for almost five years now.  Since these reflexions are based on a PHP experience that is hardly just a few days old, it will most likely contain inaccuracies that you should feel free to point out in the comments.

PHP is a very simple imperative language with an impressive amount of libraries.  Even though it possesses a few object-oriented attributes, I chose to ignore this aspect of the language in order to see what the code would look like if I didn't try to be too fancy, a habit that's shockingly hard to shake off after so many years of J2EE work.

PHP's main strength is its very regular syntax and a few details that make it extremely well suited for the Web, among which:

  * Strings can contain newlines, so you can embed big pieces of HTML into your code (not the most readable way to proceed, but awesome to reach a working prototype very fast).
  * String can be delimited with either double quotes or single quotes, and of course, the latter should be preferred since double quotes tend to come up quite often in well-formed HTML.



Not surprisingly, developing with PHP is very similar to JSP:  you end up concatenating pieces of static HTML with dynamic PHP and this speeds up prototyping quite a bit.  The problem is that once it works, you tend to think twice before refactoring it because errors with missing or extra delimiters are quite common, so in order to make it easy to debug, make sure you set `display_errors = true` in your `php.ini`.

There are two PHP idiosyncrasies that Java programmers will most likely trip upon:

  * Variables need to start with a dollar sign.
  * Globals are not available by default inside functions.



This first point was actually pretty easy to get used to, but `globals` still tricks me now and then.  For example:

> $URL = "<http://a.com>";
> 
> function foo() {  
>    echo $URL;  
>  }

will print an empty string.  Yup, not even an error (maybe this is configurable in `php.ini`, I didn't check).  The correct code is:

> $URL = "<http://a.com>";
> 
> function foo() {  
>    globals $URL;  
>    echo $URL;  
>  }

This idiom will look familiar to those of you who used to program in TCL, which had even more nebulous scoping rules.

Another thing I found out the hard way is that PHP doesn't have any notion of name space, so it took me quite a while to figure out why the following code didn't work:

> function log($msg) {  
>     echo "[LOG] $msg";  
>  }

The reason is that this function collides with the log function from the standard library and that not only does PHP decide to favor the other one, it also won't let you know of such a collision.  This was a clear message to me that I should invent my own namespace, and I therefore decided to prefix all my methods with "cb" (I'm still unclear on which style is the best:  `cbConnectToDataBase()` or `cb_connectToDataBase()`).

In the next installment, I will discuss the PHP MySQL API and how fighting ten years of good software and OO practices are hard to shake off, even though they're not exactly easy to achieve with PHP.
