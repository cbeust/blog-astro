---
title: The ultimate View technology
date: '2003-09-17T16:27:15'
slug: the-ultimate-view-technology
categories:
- Java
comments:
- id: 529
  author: Jay Dunning
  date: '2003-09-18T09:37:03'
  content: Even though it is cleaner, your example still mixes code and template text.  For complete separation of template and code, take a look at Dynamator, XMLC, and Tapestry.
  replies: []
- id: 530
  author: Dion Almaer
  date: '2003-09-18T10:44:28'
  content: 'Seeing:

    xml.body {

    xml.table{

    xml.tr {

    makes me shudder a little.  This looks like interfaces that came out a long time ago, such as the HTML::* modules.

    I don''t want to write methods to produce a html tag.  I want a simple language to represent my output, and items to help out.

    I also like to be able to load the template in a browser and see the "basic" structure of the page. For this reason I am not a big fan of the way Faces works.

    I do still think that Ruby could be used, but it could be overkill.  I also think that having a system with Java + Scripting language is really powerful.

    D'
  replies: []
- id: 531
  author: Jed Wesley-Smith
  date: '2003-09-18T17:46:10'
  content: 'uninformed anon bigots are the ones who should be "killed". there is always room for expanding ones view of the world by looking at alternatives and seeing how they do things. anyway, this post is relevant to javablogs as it does a comparison w/ java technologies.

    btw. noone, if you are so clueless you can''t even set up your own RSS feed reader and have to depend on JavaBlogs to provide your world for you, you deserve every clueless, irrelevant crap post you spend your day avoiding work reading. idiot.'
  replies: []
- id: 532
  author: Steven Noels
  date: '2003-09-19T04:16:52'
  content: 'Gee. Now I know why I sometimes spend time deleting comments and blocking IP addresses on my blog. What warrants this flame, Jed?

    Steven.'
  replies: []
- id: 533
  author: rentzsch
  date: '2003-09-21T09:06:08'
  content: The url for the ruby source code (xml.rb) appears broken. A little help?
  replies: []
- id: 534
  author: Cedric
  date: '2003-09-21T18:12:09'
  content: 'I just tried, the file is there and the link works.  Here it is again:

    http://beust.com/weblog/weblog/xml.rb

    Otherwise, just leave your email address and I''ll send it to you directly.'
  replies: []
- id: 535
  author: baliku
  date: '2004-01-23T00:51:39'
  content: 'I think I suggested its truly

    , :)Great content to find another.

    Interesting. Nice to get your information'
  replies: []
- id: 536
  author: Michael S.
  date: '2004-08-04T02:36:51'
  content: xml.rb doesn't work from http://beust.com/weblog/weblog/archives/000028.html, because it's linked via href="xml.rb", not href="/weblog/xml.rb".
  replies: []
- id: 537
  author: Google
  date: '2004-11-10T15:11:42'
  content: Hello.
  replies: []
- id: 538
  author: Google
  date: '2004-11-14T14:13:25'
  content: 'for what is the button "decode"

    Search Google http://www.google.com/'
  replies: []
- id: 539
  author: Google
  date: '2004-11-17T02:24:09'
  content: 'Keister:

    Search Google http://www.google.com/'
  replies: []
- id: 540
  author: Lacey
  date: '2005-06-13T06:30:10'
  content: 'After a long search, I finally found your site.

    My granny used to say, that you must never give up to reach a certain aim.

    So keep on going like I did it recently.'
  replies: []
- id: 541
  author: ban deodorant
  date: '2006-09-19T18:26:32'
  content: big thank
  replies: []
---

As you probably know, there are a lot of "template view" technologies out there.  The most popular, and also a J2EE standard, is JSP.  Another one is Velocity.  One could also name XML+XSL.

All these technologies have pros and cons, but they all have in common that they are mixing two different languages in a single source.  The amount of interlace varies, based on the technology you use and it's sometimes hard to draw the line.  Is a JSP page an HTML or a Java source?

These technologies also have different ways to solve the "escape in / escape out" problem.  In JSP, you use special markers to insulate the Java code from HTML.  In Velocity, you use # and $ to refer to Velocity code.  None of these methods are real showstoppers but they can end up producing some fairly ugly templates.

Is there no really clean way to solve this problem?

Well, there is.

Ruby.

In a [previous entry](http://beust.com/weblog/weblog/archives/000027.html), I used a mix of two features in Ruby (closures and dynamicity, and more particularly, method_missing) to solve the following three problems in one fell swoop:

  * Make sure each open tag gets closed automatically.
  * Automatically indent.
  * Integrate cleanly with the Ruby syntax.



Let me give a quick example from the LogAnalyzer utility I have been discussing these past days.  This piece of code generates the HTML to display a list of referrers:

> ` **def** createMiddleReport  
>    xml = XML.**new**  
>    @referrers.referrers.each { |date, refs|  
>      xml.p {  
>        xml.b("Referrers for #{date}")  
>      }  
>      xml.table {  
>        refs.each { |ref, ref2|  
>          xml.tr {  
>            xml.td {  
>              xml.a({ "href" => ref }) {  
>                xml.append(ref)  
>              }  
>            }  
>          }  
>        }  
>      }  
>    }  
>    
>    xml.to_xml  
>  **end**  
>  `

Notice how this code happily mixes templating and logic.  I iterate whenever I have to and I insert the content into the HTML string when the time is right.  Other technologies will subtly impose their programming model on your code, for example by making you compute the generated code and store it in a HashMap, or assign it to a variable which you can then use. 

With this method, there is no need to escape in and out of HTML:  it is automatically covered by the method invocations on the XML instance.

Here is another example:

> ` xml = XML.**new**  
>  xml.html {  
>    xml.head {  
>      xml.title("Statistics for  [ http://beust.com/weblog](http://beust.com/weblog)")  
>    }  
>    xml.body {  
>      xml.table{  
>        xml.tr {  
>          xml.td({ "valign" => "top" }) {  
>            xml.append(v.createLeftSideReport)  
>          }  
>          xml.td({ "valign" => "top" }) {  
>            xml.append(v.createMiddleReport)  
>          }  
>        }  
>      }  
>    }  
>  }  
>    
>  File.open(OUTPUT_MAIN, "w") { |f|  
>    f << xml.to_xml  
>  }  
>  `

If you are curious, you can take a look at the [final result](http://beust.com/weblog/weblog/stats-loganalyzer2.html), and also download [xml.rb](xml.rb).

Alright, let's be a little bit more serious now.

Of course, saying that Ruby is the ultimate template view technology should be taken with a grain of salt.  Obviously, this is not an option if you are a Java programmer.  You should also note that Ruby happens to have two very handy functionalities that make this trick possible, the method_missing hack is actually more due to Ruby being dynamically typed than anything else.  Also, if your language of choice doesn't support closures, you will be reduced to something like XMLStringBuffer, which I described in a [previous entry](http://beust.com/weblog/weblog/archives/000025.html).  It is not as pretty as what you just saw, but it fits the bill pretty well.
