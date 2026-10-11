---
title: Generating XML in Ruby
date: '2003-09-12T16:19:01'
slug: generating-xml-in-ruby
categories:
- Ruby
comments:
- id: 514
  author: Random Stuff
  date: '2003-09-14T02:55:02'
  content: '<strong>Ruby and XML</strong>

    Cedric Beust uses Ruby to generate XML - yet another example of the benefits of a dynamic language to work with XML documents. Neat.'
  replies: []
- id: 515
  author: atog
  date: '2003-12-09T06:57:20'
  content: '<strong>generate xml in ruby</strong>

    cedric found a very easy way of generating xml in ruby. as i''m still a ruby-n00b, i think this is quite an amazing approach :)...'
  replies: []
- id: 509
  author: jennifer anniston zone diet success
  date: '2004-11-04T13:11:37'
  content: 'Hi - I was looking for some political sites with articles on the recent US election and found your nice site. The comments from others on here are pretty good so I just thought I''d add my thoughts also!

    Elaine Cooper'
  replies: []
- id: 510
  author: Darrin
  date: '2005-08-22T08:15:39'
  content: Cedric, This looks really cool. Any chance you could post those forty lines (ie the source)?
  replies: []
- id: 511
  author: Eric Armstrong
  date: '2009-01-01T22:46:27'
  content: 'I like the looks of the code. I found what would appear to be the code here:

    webscripts.softpedia.com/script/Snippets/A-Fast-Ruby-XML-Builder-25566.html

    (The comment handler won''t let me post it as a link.)

    The trouble is, I can''t seem to find a way to download it. When I clicked the download button, it said I needed to install a BitTorrent client. So I did. But refreshing the page didn''t cause any negotiation with the client, and there isn''t any link I can find that I can manually paste into the client.

    So I''m stuck. Maybe someone else who finds this will have better luck. (eric [dot] armstrong [at] sun [dot] com)'
  replies: []
- id: 512
  author: Eric Armstrong
  date: '2009-01-01T22:52:50'
  content: 'Here''s another site that purports to let you download the code. I don''t see any link on it, though. Perhaps I need to log in? (If that''s a requirement for downloading, as opposed to posting, it would be nice if these sites said so.)

    snippets.dzone.com/posts/show/2528'
  replies: []
- id: 513
  author: Eric Armstrong
  date: '2009-01-01T22:58:06'
  content: 'Ok. Never mind. That last site is the good one. Nothing to download. It just shows you the darn snippet, so you can copy it:

    snippets.dzone.com/posts/show/2528'
  replies: []
---

I have been running my weblog on Movable Type for about a month now and I have to say I am really impressed.  For a collection of scripts put together, Movable Type is an impressive piece of software, both powerful and intuitive.  I expected it to be a challenging installation, especially since I am not running my blog on my home machine but at an ISP, but it turned out to be remarkably painless. 

Having said that, I have one big complaint:  no support for referrer logs.  I couldn't find any way to have quickly access to my referrer log anywhere in the Movable Type distribution.  A quick Google query turned up several packages implemented in various languages.  I tried a lot of them but I could never quite reach the result I was looking for, so I decided to write my own. 

My ISP conveniently stores the logs for my Web site every night in a well-defined directory, following a standard naming notation for each day.  I decided it would be easier to calculate my log referrer from these logs instead of embedding scripting information in my main index file, since the updates don't really need to be more frequent than once a day. 

Finally, I had to choose a language.  Since I opted for the static approach, I am not limited to the languages that my ISP supports for CGI programming (PHP and Perl).  The obvious choice was Ruby, which excels at this kind of treatment with its native support for regular expressions, invocation of external commands and offers an object-oriented language from the ground up giving me extreme flexibility in my attempt to write a utility that will be easy to extend for my future log parsing needs. 

Since I was going to have to generate HTML, I thought I would port a small Java class that I have been using to generate XML in [EJBGen](http://beust.com/weblog/ejbgen) called XMLStringBuffer.  The idea is simply to not have to worry about indentation and closing the tags.  With this class, generating XML is as simple as: 

> ` XMLStringBuffer xsb = new XMLStringBuffer();  
>  xsb.push("person");  
>  xsb.addRequired("last-name", m_lastName);  
>  xsb.addOptional("first-name", m_firstName);  
>  xsb.pop("person");`
> 
> `

Note that I don't really need to specify the closing tag in the pop() call, but it makes debugging easier since the XMLStringBuffer maintains an internal stack of the tags and can therefore tell me right away if my push/pop get out of synch. 

It quickly occurred to me that I could make this class even fancier in Ruby thanks to two features that are sadly absent from Java:  closures and method_missing (really dynamic typing).

The idea is to use closures to simulate indentation, and method_missing to make the XML class allow invocations on any method.  If the said method is unknown, it is simply turned into an XML tag.

Here is a piece of code that will make it all clearer:

> ` xml = XML.new  
>    
>  xml.html {  
>    xml.head {  
>    }   
>    xml.body {  
>      xml.table {  
>        xml.tr {  
>          xml.td({ "valign" => "top"}, "Content1"){  
>          }  
>          xml.td {  
>            xml.append("Content2")  
>          }  
>        }  
>      }  
>    }  
>  }
> 
> `

As you can see, each new closure (pairs of { }) starts a new tag and will cause an indentation and the proper tag to be closed when the block is exited.  Note also that every tag can be passed a Hash that will be turned into attributes if found.  You can also specify the content of the tag either inline or later in the closure with the append() method.  The generated XML is as follows:

> ` <html>  
>    <head>  
>    </head>  
>    <body>  
>      <table>  
>        <tr>  
>          <td valign="top">Content1</td>  
>          <td>  
>            Content2  
>          </td>  
>        </tr>  
>      </table>  
>    </body>  
>  </html>   
>  `

The XML class is about forty lines, including comments.

In a next entry, I will give more details about the logging utility itself.
