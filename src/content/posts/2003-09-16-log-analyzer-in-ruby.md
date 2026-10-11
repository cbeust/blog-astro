---
title: Log analyzer in Ruby
date: '2003-09-16T12:22:39'
slug: log-analyzer-in-ruby
categories:
- Ruby
comments:
- id: 519
  author: No one
  date: '2003-09-16T14:15:48'
  content: I'm sorry, but if you are going to send your blogs to "JAVAblogs", don't you think they should be about Java?
  replies: []
- id: 520
  author: eu
  date: '2003-09-16T14:15:52'
  content: 'Just for my own curiosity I wrote last snippet in Java...

    private static Comparator LAST_MODIFIED_COMPARATOR = new LastModifiedComparator();

    private static final GZFilter GZ_FILE_FILTER = new GZFilter();

    List files = Arrays.asList( new File( args[ 0]).listFiles( GZ_FILE_FILTER));

    Collections.sort( files, LAST_MODIFIED_COMPARATOR);

    Iterator it = files.subList( 0, 3).iterator();

    PS: is there any better way to place code within comments?'
  replies: []
- id: 521
  author: Cedric
  date: '2003-09-16T14:42:47'
  content: 'You forget the source of GZFilter and also the iteration on it.

    My point was just to show the terseness of Ruby compared to Java, which your example proves :-)'
  replies: []
- id: 522
  author: eu
  date: '2003-09-17T06:47:10'
  content: 'Cedric, come on! My example wasn''t intend to prove something. It was just about my own curiosity.

    I believe that any Java application which need to work with files and directories have such filter class already (mine does).

    PS: btw you didn''t answer my question about code posting... ;-)'
  replies: []
- id: 523
  author: eu
  date: '2003-09-17T06:51:02'
  content: 'By the way, it will be convenient to have something like this in Java:

    Collections.sort( fArrays.asList( new File( args[ 0]).listFiles( GZ_FILE_FILTER)), LAST_MODIFIED_COMPARATOR).subList( 0, 3).iterator();

    Why the hell, Collections and Arrays classes does not returns sorted collection or array. However from the bytecode and memory prospective first version will be more optimal.'
  replies: []
- id: 524
  author: Cedric
  date: '2003-09-17T09:33:23'
  content: 'Hey eu,

    Yes, I realize you were just posting this as an example, and I was too lazy to write the Java code myself, so thanks.

    As for comments, I can enable HTML formatting in them but I don''t know that Movable Type supports posting code in them.  And honestly, I''m not sure it''s that important anyway.

    Thanks for your feedback!

    Stay tuned for the next entry.

    --

    Ced'
  replies: []
- id: 525
  author: Jason Boutwell
  date: '2003-09-17T13:15:48'
  content: 'Cedric,

    Sorry to be offtopic. Would you mind flipping on your RSS 2.0 MT template? My reader doesn''t support the rdf format yet, and I like to keep up with your blog.

    Jason'
  replies: []
- id: 526
  author: Chris Smith
  date: '2004-07-01T03:14:36'
  content: 'Please visit my website.

    Chris Smith o'
  replies: []
- id: 527
  author: los angeles zone diet
  date: '2004-11-04T13:11:35'
  content: 'Hi - I was looking for some political sites with articles on the recent US election and found your nice site. The comments from others on here are pretty good so I just thought I''d add my thoughts also!

    Elaine Cooper'
  replies: []
- id: 528
  author: Flep
  date: '2005-10-05T02:08:39'
  content: Hi, I am trying to learn something from it, by writing a log file parser, however, I can't work it all out. Is the source somewhere to be found?
  replies: []
---

Here is the problem I am trying to solve:  all the statistics for my Web site are stored by my ISP in a directory, one per day.  Each file is compressed and called, for example, [ www.20030915.gz](http://www.20030915.gz).

I want to write a Log analyzer that will make it easy for me to collect various statistics and still be extensible so that I can add more monitoring objects as time goes by.  Right now, here are some examples of the numbers I'd like to see:

  * Number of hits on my site.
  * For my weblog, number of HTML and RSS hits.
  * The list of referrers for, say, the past three days.
  * The number of [EJBGen](http://beust.com/weblog/ejbgen) downloads each day.
  * The keywords typically used on search engines to reach my site.



Of course, it should be as easy to obtain totals per month or even per year if needed.

The idea is the following:  when the script is run, it should run through all the compressed files and build an object representation of each file and line.  Then it will invoke each listener with two pieces of information, Date and LogLine.  Each listener is then free to compute its statistics and store them for the next phase.

Once the data gathering is complete (back-end), it's time to present the information.  There are several possibilities to achieve that goal but for now, I'll just make sure that back-end and front-end are decoupled.  I envision one class, View, to be passed all the gathered information and generate the appropriate HTML.

So first of all, we have the class LogDir, which encapsulates the directory where my log files are stored.  Using the convenient "backtick" operator, it is fairly easy to invoke gzip on each file and store each file in a LogFile object, which in turn contains a list of LogLines.

When it's done, LogDir then calls all the listeners with the following method:

> ` def processLogFiles  
>    @files.each { |fileName|  
>      sf = LogFile.new(fileName)  
>      sf.logLines.each { |l|  
>        @lineListeners.each { |listener|  
>          listener.processLine(fileNameToDate(fileName), l)  
>        }  
>      }  
>    }  
>  end # processLogFiles`

The main loop is fairly simple:

> ` ld = LogDir.new(LOG_DIR)  
>  ld.addLineListener(ejbgenListener = EJBGenListener.new)  
>  ld.addLineListener(weblogListener = WeblogListener.new)  
>  ld.addLineListener(referrerListener = ReferrerListener.new)  
>  ld.addLineListener(searchEngineListener = SearchEngineListener.new)  
>  ld.processLogFiles `

The last line is what causes LogDir to start and invoke all the listeners. 

For example, here is the EJBGenListener.  All it needs to do is see if the HTTP request includes "ejbgen-dist.zip" and increment a counter if it does.  The overall result is a Hashmap of counts indexed by a Date object:

> ` class EJBGenListener  
>    def initialize  
>      @ejbgenCounts = Hash.new(0)  
>    end  
>    
>    def processLine(date, line)  
>      if line.command =~ /ejbgen-dist.zip/  
>        key = date.to_s  
>        n = @ejbgenCounts[key]  
>        n = n + 1  
>        @ejbgenCounts[key] = n  
>      end  
>    end  
>    
>    def stats  
>      @ejbgenCounts  
>    end  
>  end # EJBGenListener`

The only thing worth noticing is that the Hash constructor can take a parameter which represents the default value of each bucket (0 in this case).

Ruby's terseness is a real pleasure to work with.  For example, I need to run some listeners on the three most recent files of the directory (which obviously change every day).  Here is the relevant Ruby code:

> ` Dir.new(dir).entries.sort.reverse.delete_if { |x| ! (x =~ /gz$/) }[0..2].each { |f|  
>    // do something with f  
>  }`

Compare this with the number of lines needed in Java...

So far, the code is mundane and very straightforward, not very different from how you would program it in Java.  In the next entry, I will tackle the front-end (HTML generation) because this is really the point I am trying to make with this series of articles.
