---
title: Why I love Ruby
date: '2004-09-16T13:10:12'
slug: why-i-love-ruby
categories:
- General
comments:
- id: 2336
  author: Eoin
  date: '2004-09-16T14:49:49'
  content: String already implements Comparable? Collections.sort(result) should be sufficient?
  replies: []
- id: 2337
  author: Cedric
  date: '2004-09-16T14:55:41'
  content: 'The problem is I need to sort them in reverse order...

    The STL allowed to address this kind of problem pretty well but I can''t think of a way to do this in Java without supplying my own Comparator.

    Anyone?'
  replies: []
- id: 2338
  author: Doug L.
  date: '2004-09-16T15:06:09'
  content: 'FWIW, zsh:  ls -rd ^*.gz

    Not that this helps you very much ...'
  replies: []
- id: 2339
  author: Scott
  date: '2004-09-16T15:07:29'
  content: Collections.sort(result, Collections.reverseOrder());
  replies: []
- id: 2340
  author: Sam Pullara
  date: '2004-09-16T15:23:00'
  content: 'Here is a groovier version:

    gzippedFiles = new java.io.File(args[0]).listFiles().toList().sort().reverse().findAll { it =~ "gz$" }'
  replies: []
- id: 2341
  author: Dmitri Colebatch
  date: '2004-09-16T17:49:28'
  content: 'What is it about stuffing as much code into one line as possible that seems attractive?  I''ve only dabbled in Ruby, but agree that its damn nice (really should have another look at what support is around in IDEs, I dont like typing).

    You''re also forgetting java''s FilenameFilter:

    List files = Arrays.asList(new File(directory).listFiles(new FilenameFilter()

    {

    public boolean accept(File dir, String name)

    {

    return name.endsWith(".gz");

    }

    }));

    Collections.sort(files, Collections.reverseOrder());'
  replies: []
- id: 2342
  author: Dmitri Colebatch
  date: '2004-09-16T18:05:11'
  content: 'I meant to add - that the only nice thing you''re demonstrating there are closures, which yes - are damn nice (o:'
  replies: []
- id: 2343
  author: Jonathan O'Connor
  date: '2004-09-17T02:43:38'
  content: If you only run this stuff once a month, and it takes 5 minutes, then that's an hour for a whole year. How much time are you going to waste optimizing this? More than an hour, I guess :-)
  replies: []
- id: 2344
  author: Peter Reilly
  date: '2004-09-17T04:04:03'
  content: 'Pretty neat ruby and groovy examples.

    I would like to include them in the

    ant script manual page.'
  replies: []
- id: 2345
  author: Cedric
  date: '2004-09-17T05:25:14'
  content: 'Ah, good point, Jonathan.

    Actually, I run this script every day and it gives me statistics on the past month.

    Still not that much of a big deal, but as you know, developers never need a sound reason to rewrite something from scratch :-)'
  replies: []
- id: 2346
  author: Cedric
  date: '2004-09-17T05:25:51'
  content: Peter, you are very welcome to include these examples in the manual.  Let me know where to find it, by the way...
  replies: []
- id: 2347
  author: Peter Reilly
  date: '2004-09-17T05:56:10'
  content: 'Ta,

    the manual page in in cvs:

    http://cvs.apache.org/viewcvs.cgi/ant/docs/manual/OptionalTasks/script.html'
  replies: []
- id: 2348
  author: Scott Ganyo
  date: '2004-09-17T06:07:08'
  content: 'FWIW, it would be slightly more efficient to sort after select, like this (groovy syntax):

    gzippedFiles = new java.io.File(args[0]).listFiles().toList().findAll { it =~ "pdf" }.sort().reverse()

    Scott'
  replies: []
- id: 2349
  author: Scott Ganyo
  date: '2004-09-17T06:09:18'
  content: 'Bah.  Ignore that "pdf".  It should''ve been:

    gzippedFiles = new java.io.File(args[0]).listFiles().toList().findAll { it =~ "gz$" }.sort().reverse()

    Sigh'
  replies: []
- id: 2350
  author: Chris Thiessen
  date: '2004-09-17T07:26:03'
  content: 'You might want to check out the Kataba libraries for Java (www.kataba.com).  They provide closures, collections for all types, and a simplified I/O model, but they focus on reducing verbosity.  They were actually inspired partly by Ruby and Python.  Anyway, here''s the code:

    List_o zippedFiles

    =Colls.list(Files.nameMatches(Files.listDir(dir),"gz$")).sort().reverse();

    You''d need a couple of imports:

    import com.kataba.io.*;

    import com.kataba.coll.*;

    I actually used it to write a log analyzer, so I know it works well for that. :)

    -Chris (author of Kataba Dynamics)'
  replies: []
- id: 2351
  author: Luke Hutteman
  date: '2004-09-17T09:06:57'
  content: 'Even simpler (and more performant) than " Collections.sort(files, Collections.reverseOrder());" :

    Collections.reverse(result);'
  replies: []
- id: 2352
  author: Jonas Galvez
  date: '2004-09-17T10:36:53'
  content: 'The Python version is pretty much a one-liner too:

    files = filter(lambda s: re.match("gz$", s), sorted(os.listdir(dir))[::-1])'
  replies: []
- id: 2353
  author: Jonas Galvez
  date: '2004-09-17T10:40:00'
  content: Err, that should re.search.
  replies: []
- id: 2354
  author: Joel VanderWerf
  date: '2004-09-17T12:16:18'
  content: 'A shorter way in ruby:

    zipped = Dir.entries(dir).sort.reverse.grep(/gz$/)'
  replies: []
- id: 2355
  author: Martin DeMello
  date: '2004-09-17T12:21:38'
  content: 'Shorter Ruby way:

    Dir.new(dir).entries.grep(/gz$/).sort.reverse'
  replies: []
- id: 2356
  author: Daniel Berger
  date: '2004-09-17T12:32:39'
  content: 'Is the sort really necessary?  Aren''t they already going to be returned in sorted order by default, ala ''ls''?

    Also, as Joel indicates, Dir.new(dir).entries can be reduced to Dir.entries(dir), unless you really want a Dir object.  You don''t in your example.'
  replies: []
- id: 2357
  author: Bill Guindon
  date: '2004-09-17T14:07:25'
  content: 'Why not just:

    Dir[dir + ''*.gz''].sort.reverse'
  replies: []
- id: 2358
  author: Jonas Galvez
  date: '2004-09-17T15:03:21'
  content: 'Here''s another Python version:

    files = glob.glob("*.gz")

    files.sort()

    files.reverse()

    In Python 2.4, it could be:

    files = sorted(reversed(glob.glob("*.gz")))

    Pretty damn simple, I say :)'
  replies: []
- id: 2359
  author: botp
  date: '2004-09-17T19:11:30'
  content: Dir.glob("*.gz").sort.reverse
  replies: []
- id: 2360
  author: botp isbotp
  date: '2004-09-17T19:17:35'
  content: 'Dir.glob("*.rb").sort.reverse

    #if it looks and acts like ruby, then it is ruby'
  replies: []
- id: 2361
  author: Thien
  date: '2004-09-17T21:08:36'
  content: Dir['*.gz'].sort.reverse
  replies: []
- id: 2362
  author: Robert
  date: '2004-09-19T04:48:54'
  content: 'Another solution that saves 1 intermediate array:

    dir = ... # the dir you want to explore

    Dir[File.join( dir, "*.gz" )].sort {|a,b| ba}'
  replies: []
- id: 2363
  author: Moritz Petersen
  date: '2004-09-20T04:52:15'
  content: 'Here''s my Java version:

    Collections.reverse(Arrays.asList(new File(dir).listFiles(new FileFilter(){public boolean accept(File f){return f.getName().matches(".*\\.gz$");}})));

    ;-)'
  replies: []
- id: 2364
  author: Sam Pullara
  date: '2004-09-22T11:00:58'
  content: 'Here is a slightly more efficient java version:

    Arrays.sort(new File(dir).list(new FilenameFilter() {public boolean accept(File f, String n) {return n.endsWith(".gz");}}), Collections.reverseOrder());'
  replies: []
- id: 2365
  author: Sam Pullara
  date: '2004-09-22T11:31:44'
  content: 'Just for fun, here are some benchmarks on a 659 file directory:

    Sam''s Java Version: 2.7 ms per list

    Sam''s Groovy Version: 15.8 ms per list

    Moritz Petersen''s Java Version: 9.6 ms per list

    Cedric''s Java Version: 3.1 ms per list

    I''d love to test the other ones on my machine (powermac g4 1.4/1.4) if you send me an easy to run benchmark that measures them.'
  replies: []
- id: 2366
  author: Moritz Petersen
  date: '2004-10-18T23:57:28'
  content: Damn. I lost ;-)
  replies: []
- id: 2367
  author: '`kill -3 thoughtProcess`'
  date: '2004-10-21T08:23:37'
  content: '<strong>Agile language dilemma</strong>

    I have always felt that a successful developer needs to be proficient in atleast one scripting language. It is essential since it

    allows one to prototype and test rapidly.

    helps you get out of tricky situations where you really dont want to start'
  replies: []
- id: 2368
  author: Jacklyn
  date: '2010-10-02T07:16:07'
  content: Couldn't agree more, "kill -3". If a developer masters 1 scripting language, have the battle is won.
  replies: []
- id: 2369
  author: Jacklyn
  date: '2010-10-02T07:18:37'
  content: 'Sorry, forgot to add: but it''s the same with mastering different languages: add 1 additonal language - scripting or spoken - and you leave another 25% of the competition behind you.'
  replies: []
- id: 2370
  author: Anuj
  date: '2012-03-06T08:38:32'
  content: '(New to the blog, so exploring).

    With LINQ support in C# you could get this kind of syntactic sugar too:

    var zippedFiles = new DirectoryInfo("path").GetFiles(".gz").OrderByDescending(f =&gt; f.Name); // assuming you''re ordering by name'
  replies: []
---

zippedFiles =
    Dir.new(dir).entries.sort.reverse.delete_if { |x| ! (x =~ /gz$/) }
    

'nuff said. 

Okay, there is more to say. 

First of all, what does this line of code do? It goes through every file in the given directory, sort them in reverse order while excluding any file that doesn't end in ".gz". 

This code ported to Java is quite intimidating: 

```java
List<String> result = new ArrayList<String>();
File f = new File(directory);
for (String fileName : f.list()) {
if (fileName.endsWith(".gz")) {
result.add(fileName);
}
}
Collections.sort(result, new Comparator<String>() {
public int compare(String o1, String o2) {
return o2.compareTo(o1);
}
public boolean equals(Object o) {
return super.equals(o);
}
});
```

This code comes from a log analyzer utility that I wrote some time ago. It goes through the Apache log of my Web server and allows me to easily plug-in listeners to collect various kinds of statistics. This utility has provided me with a flexible log analyzer framework into which I have plugged various additional loggers these past months. 

Since I hadn't taken a look at this code in a few months, I was quite happy to realize that it passes the "six-month readability test". A language that has never passed this test for me is Perl. Perl might be a powerful language but if you stop using it for six months, you will need a book to reread your own code and a personal trainer just to modify it. 

So I was quite happy to understand my old Ruby code right away, even in the most idiomatic sections such as the one I pasted above. The code carries its intent clearly thanks to aptly-name methods and closures are, as usual, as pleasant to use as they are powerful. 

There is a problem with my log analyzer, though, which is the reason why I am revisiting it today: it's pretty slow. It takes about five minutes to run through a month of logs, which I find unacceptable. Therefore, I want to port it to a different language. 

While I love Ruby, I have to say I like Groovy even more, because it gives me the same flexibility as Ruby with the familiar Java syntax on top of it. However, I have had some bad experiences with the current versions of Groovy and as far as I can tell from the mailing-list, the stability of the compiler still leaves a lot to be desired. 

Exit Groovy (for now). So it will probably be Java or C#. I am hoping the poor performance comes from the Ruby interpreter and not from my code, but I will find out soon enough.
