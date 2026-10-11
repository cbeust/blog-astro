---
title: Announcing JCommander 1.0
date: '2010-07-13T05:19:59'
slug: announcing-jcommander-1-0
categories:
- General
comments:
- id: 8265
  author: Simone Tripodi
  date: '2010-07-13T05:27:55'
  content: 'Hi Cedric,

    that simply rocks :) Looking forward to use it!!!'
  replies: []
- id: 8266
  author: Eugene Kuleshov
  date: '2010-07-13T05:38:00'
  content: 'Kohsuke beat you to that 5 years ago. :)

    http://weblogs.java.net/blog/kohsuke/archive/2005/05/parsing_command.html'
  replies: []
- id: 8267
  author: Oscar
  date: '2010-07-13T05:44:53'
  content: 'Nice.

    I think the name is a bit misleading ( or my brain preestablished associations are )  I thought it was some sort of FileManager,  probably JLineArgs but naaaahh...

    This is a very good use of annotations, and I have always hated command line parsing, up to the point where I prefer using system properties:  -Ddebug=false but this will definitely will change the way we do command line args processing ( or should I say, the way we won''t do that processing anymore )

    You just miss to put in your description "... allowing you to focus on your business, instead of command line processing"  :)

    The only question I have, in the sample from TestNG, I don''t see a "main" method, how is the "String[]args" bind to this?'
  replies: []
- id: 8268
  author: Cedric
  date: '2010-07-13T05:44:58'
  content: 'Eugene: indeed! I missed that project when I looked around, I was surprised nobody had tried this before.'
  replies: []
- id: 8269
  author: Cedric
  date: '2010-07-13T05:56:24'
  content: 'Oscar: this class is just the container that holds the values, look here for the actual use:

    http://github.com/cbeust/testng/blob/master/src/main/java/org/testng/TestNG.java#L1080'
  replies: []
- id: 8270
  author: Itay Maman
  date: '2010-07-13T05:56:45'
  content: Args4j, https://args4j.dev.java.net,  should also be mentioned, it is taking a similar approach for solving this problem.
  replies: []
- id: 8271
  author: Patrick
  date: '2010-07-13T06:25:00'
  content: 'JewelCli does something similar; my favorite, stylistically: http://jewelcli.sourceforge.net/usage.html.'
  replies: []
- id: 8272
  author: Michael Lee
  date: '2010-07-13T06:25:40'
  content: Nice!  I did not know that there is arg4j or jcommander.  I wrote a wrapper over 'Jopt' to do annotation based parsing.
  replies: []
- id: 8273
  author: Wouter Lievens
  date: '2010-07-13T08:09:19'
  content: 'Looks very nice. I''ll give it a try next time I have to do this.

    Don''t forget releasing it into a maven repository for easy importing!'
  replies: []
- id: 8274
  author: Dominique Gallot
  date: '2010-07-13T10:24:11'
  content: 'Nice use of the annotations !

    I quickly check the binary and the source, and I was not able to see the licence term.

    Is it Apache Licence like TestNg ?'
  replies: []
- id: 8275
  author: Cedric
  date: '2010-07-13T10:30:26'
  content: 'Dominique:  Yes, I just updated the pom.xml to specify the Apache 2.0 license.'
  replies: []
- id: 8276
  author: Pedro Newsletter 13.07.2010 &laquo; Pragmatic Programmer Issues &#8211; pietrowski.info
  date: '2010-07-13T11:37:22'
  content: '[...] command line parsing library from Cedric. JCommander. BTW there are plenty of comments so I suppose all the java command line libraries are [...]'
  replies: []
- id: 8277
  author: Julien Viet
  date: '2010-07-13T11:42:19'
  content: I'm using Args4j for annotating Groovy commans for CRaSH (Content Repository Shell). I'll give a try to jcommander to see how it fits!
  replies: []
- id: 8278
  author: Emmanuel Bourg
  date: '2010-07-13T12:52:53'
  content: Fine but how do you support i18n with this approach?
  replies: []
- id: 8279
  author: Jesse Kuhnert
  date: '2010-07-13T18:06:09'
  content: 'Looks cool, may try replacing jopt with this as well. Always felt a little dirty looking at all that jopt code I had to write for something meant to simplify. Don''t think it actually amounted to less code, just more flexible ordering/omission of arguments.

    More like the Cedric I respect/admire. :)'
  replies: []
- id: 8280
  author: syllant
  date: '2010-07-14T21:10:45'
  content: I also use JewelCli which is very close, but JCommander seems to better handle required/optional options and long/short names. I'll try it.
  replies: []
- id: 8281
  author: Simone Tripodi
  date: '2010-07-15T00:18:05'
  content: 'Also Reinier Zwitserloot from Project Lombok is maintaining a similar project on github:

    http://github.com/rzwitserloot/com.zwitserloot.cmdreader'
  replies: []
- id: 8282
  author: rod
  date: '2010-07-15T04:21:50'
  content: 'I think there is a little mistake on the project page (List management description):

    @Parameter(names = "-hosts", description = "Level of verbosity")

    public List hosts = new ArrayList();

    should be:

    @Parameter(names = "-host", description = "Level of verbosity")

    public List hosts = new ArrayList();'
  replies: []
- id: 8283
  author: Nathan
  date: '2010-07-15T12:23:26'
  content: 'Password input support would be super-nice. Lots of apps do this, e.g., `mysql -p`: you are prompted to enter a password and it won''t show up in your command history.'
  replies: []
- id: 8284
  author: Sam Pullara
  date: '2010-07-15T13:50:42'
  content: 'I can echo that this is a good idea: http://code.google.com/p/cli-parser/

    You can read about it here:

    http://www.javarants.com/2005/12/24/java-annotations-make-declarative-programming-easy/'
  replies: []
- id: 8285
  author: Nagesh
  date: '2010-07-15T13:54:31'
  content: Sam's http://code.google.com/p/cli-parser/ does static classes, delimited arrays, parameters as well as methods too.
  replies: []
- id: 8286
  author: syllant
  date: '2010-07-15T21:34:30'
  content: +1 for password input support :)
  replies: []
- id: 8287
  author: Rafael Naufal
  date: '2010-07-16T04:54:24'
  content: Cedric, the attributes annotated with @Parameter need to be public or it is possible to be private?
  replies: []
- id: 8288
  author: Cedric Pronzato
  date: '2010-07-21T05:15:08'
  content: 'Hello,

    I think there is a little typo on ''Lists'' chapter on the project page.

    @Parameter(names = "-host", description = "Level of verbosity")

    public List hosts = new ArrayList();

    should be:

    @Parameter(names = "-host", description = "List of hosts to connect to")

    public List hosts = new ArrayList();'
  replies: []
- id: 8289
  author: Cedric Pronzato
  date: '2010-07-21T05:23:24'
  content: 'And another comment, I have not yet tested the framework, I am just reading the spec:

    It is about list and arity, does an arity of 2 imply 2 mandatory arguments or it can be 0,1,2 ? And then is no arity attribute mean any number of arguments?'
  replies: []
- id: 8290
  author: pay irs credit card
  date: '2010-10-03T06:41:37'
  content: without equal expos?.
  replies: []
---

import com.beust.jcommander.Parameter;
    public class JCommanderTest {
      @Parameter
      public List<String> parameters = Lists.newArrayList();
      @Parameter(names = { "-log", "-verbose" }, description = "Level of verbosity")
      public Integer verbose = 1;
      @Parameter(names = "-groups", description = "Comma-separated list of group names to be run")
      public String groups;
      @Parameter(names = "-debug", description = "Debug mode")
      public boolean debug = false;
    }
    

Recently, I got tired of having to handle command line parsing manually. I took a look at existing frameworks and all the ones that I found (JOpts, JArgs, commons-cli) suffered from the same limitations that I was trying to avoid: they barely cut down on the boiler plate code and they are not very type safe. So I came up with my own framework, which I called [JCommander](http://beust.com/weblog/jcommander). The snippet of code above should give you a pretty good idea of what JCommander looks like, and if you need more information, just head over to the [main site](http://beust.com/weblog/jcommander). I have already integrated JCommander in [TestNG](http://testng.org) and it has already reduced the code base to handle this simple task significantly. Let me know what you think.
