---
title: It's not about one-liners
date: '2004-09-17T13:36:49'
slug: its-not-about-one-liners
categories:
- Java
comments:
- id: 2371
  author: Jonas Galvez
  date: '2004-09-17T15:28:08'
  content: 'Cedric, you''re right. I, too, think lambda is a bit of a line noise. And [::-1] is definitely obscure. But I somehow find it readable and clear enough, I mean, it''s definitely not as obscure as some Perl idioms. Anyway, did you see my latest comment? Python has a built-in module called "glob" which allows you to retrieve a list of files using special parameters. The cleanest Python version would be something like (as I already posted before):

    files = glob.glob(".gz")

    files.sort()

    files.reverse()

    Or, in Python 2.4:

    files = reversed(sorted(glob.glob(".gz")))'
  replies: []
- id: 2372
  author: Jonas Galvez
  date: '2004-09-17T15:34:26'
  content: 'Ops, that should glob.glob("*.gz").

    By the way, I wrote a comment about Ruby but I keep getting a "Your comment could not be submitted due to questionable content" message. I''ve placed the content on a text file and uploaded it to my server:

    http://jonasgalvez.com/unsorted/about-ruby-20040917.txt'
  replies: []
- id: 2373
  author: Jonas Galvez
  date: '2004-09-17T15:44:44'
  content: I should add that I do realize this discussion is not about that specific operation of filtering files etc, but about the way properties/methods are accessed and how nicely it flows in Ruby. The portion of my comment that I placed in the .txt file (since it kept being rejected by the spam filtering system) summarizes my opinion on the subject :)
  replies: []
- id: 2374
  author: Michael Levin
  date: '2004-09-18T16:26:17'
  content: Yes, I agree readability is best, but I hear "life's better without braces". (remains to be seen, but I plan to see!)
  replies: []
- id: 2376
  author: techno.blog("Dion")
  date: '2004-09-19T23:07:25'
  content: '<strong>RE: It''s not about one-liners</strong>

    I agree with Cedric. The "best" programming language, doesn''t mean the one that creates the lowest wc -l. I actually always found myself writing quite "verbose" Perl code, for example. However, I do feel that languages such as Ruby, Groovy,...'
  replies: []
- id: 2375
  author: qevdxmmi
  date: '2007-05-28T20:42:33'
  content: chqyivsw  [URL=http://qjsjsgev.com]hqhyndtk[/URL]  mzmoudqi http://qcgfpkyx.com brnsgmqu hsqsrsmz
  replies: []
---

I have received quite a few comments on the previous entry so I thought I would clarify something. Jonas Galvez says: 
    
    
    The Python version is pretty much a one-liner too:
    
    
    
    files = filter(lambda s: re.match("gz$", s), sorted(os.listdir(dir))[::-1])

I don't care about the size of the code (I find that ten lines of Java are usually more readable that one line of Perl). 

I do care about readability, which usually boils down to: 

  * **Ease of reading.** This is usually a factor of how many non-alphabetical characters are used for a statement, but it also depends on keywords and on the names of the methods, which must carry the intent of the code very clearly. The code above doesn't score very well on this scale. 

  * **Consistency of the API.** In the Python code above, we have a mix of lambda, method invocation, string parameters, cryptic parameters (::-1) and arbitrary ordering of such parameters. I am sorry, I don't find this readable but worse, I wonder if I would remember this magic invocation in six months. 

  * **Flow of the statements**. What I like about the Ruby example is that it's basically a piped sequence of method invocations: pipe the output of the previous invocation into the input of the next one. All methods, one object, no fuss (with the exception of the closure). Again, the Python code above seems to require object method invocation, imperative method invocations and parameters that alter the meaning of these methods. 
Ruby scores pretty high on each of these points: the line can almost be read as natural language and I find it "very" object-oriented.
