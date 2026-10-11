---
title: TestNG in Ruby
date: '2005-08-04T09:10:49'
slug: testng-in-ruby
categories:
- Java
comments:
- id: 4112
  author: John Rogers
  date: '2005-08-04T09:20:32'
  content: Lately I have been reading some blogs about the relative merits of various scripting languages. I see many performance comparisions and debates made between Python, Perl, TCL, Ruby and Java. However, I cannot remember even one instance where Euphoria was included. I would like to know why the Euphoria programming language never seems to get considered as a viable contender in any of these discussions.
  replies: []
- id: 4113
  author: Funky Monkey
  date: '2005-08-04T14:03:50'
  content: 're: Euphoria

    Probably because most people never even heard of it.  There are literally thousands of scripting languages available.  Only a half dozen at best will ever be commonly known.

    Oh, and the quality of the scripting language has little to do with it''s popularity.'
  replies: []
- id: 4114
  author: Sumit
  date: '2005-08-04T14:40:17'
  content: In the same vein, I would like to know why Ecstasy was not included. This was a scripting language I wrote for a term project back in college.
  replies: []
- id: 4115
  author: Michael Kovacs
  date: '2005-08-04T18:20:56'
  content: 'Cedric,

    Please give me a project.

    Thanks,

    -Michael'
  replies: []
- id: 4116
  author: Puroshatttam
  date: '2005-08-05T06:38:50'
  content: 'Sir u have to gime me Java project!

    I''m waiting'
  replies: []
- id: 4117
  author: Alain Rogister
  date: '2005-08-05T12:05:41'
  content: I *am* anxiously waiting for the Malbolge port (http://www.lscheffer.com/malbolge.html)
  replies: []
- id: 4118
  author: Sumit
  date: '2005-08-05T19:33:16'
  content: The Malbolge port, yu Indians, might be an excellent project.
  replies: []
---

We're going global with this baby...

A discussion recently started on the comp.lang.ruby mailing-list about the possibility to [ port TestNG to Ruby](http://groups-beta.google.com/group/comp.lang.ruby/browse_thread/thread/3a0952199bb1bc1d/8a4a6d7931c039ce?lnk=st&q=testng+ruby&rnum=1&hl=en).

While Ruby doesn't support annotations natively, it's actually quite easy to simulate and both [Aslak](http://tinyurl.com/6xjnj) and a participant of this thread have posted a technique to add annotations to Ruby.  For example:

> config :after_test => true  
>  def teardown  
>    puts "Test2#teardown called"  
>  end  
>    
>  test :groups => ['one']  
>  def test_method1  
>    puts "Test2#test_method1 called"  
>  end 

This trick relies on the fact that it's possible to add definitions to ` Class` in Ruby.  The annotations `config` and `test` above are actually real methods that update fields added to the `Class` class.  When one of these methods is encountered in a `Class` definition, it is parsed and then silently discarded so it never actually gets added to the `Class` definition.  This is made possible by overriding the `method_added` method of the `Class` class, where you can control what to do whenever a new method definition is found by the parser.

You can find the full listing for an example implementation of this technique in [ this message from Ryan Leavengood](http://groups-beta.google.com/group/comp.lang.ruby/msg/59e3ef4e4730a15d?hl=en&).

I also suggested to replace `testng.xml` with a Ruby file containing these definitions (the Ruby community is usually not very friendly to XML file, and I can certainly sympathize with this feeling).

I'm curious to see where all this will lead...
