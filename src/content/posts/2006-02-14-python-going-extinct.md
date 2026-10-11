---
title: Python going extinct?
date: '2006-02-14T09:54:23'
slug: python-going-extinct
categories:
- General
comments:
- id: 4873
  author: Stefan Tilkov
  date: '2006-02-13T22:46:42'
  content: It seems that matz made that comment in May 2005, which is not exactly three years ago ...
  replies: []
- id: 4874
  author: Cedric
  date: '2006-02-13T22:50:21'
  content: 'Indeed, Stefan.  I hadn''t noticed Matz commented on the entry two years after I posted it :-)

    I stand corrected.'
  replies: []
- id: 4875
  author: Alex Blewitt
  date: '2006-02-14T00:35:37'
  content: 'I''m not as convinced Python is going to die out and be replaced by Groovy any time soon. The former has a number of years in the field, whereas Groovy doesn''t even have a decent parser. The lambda problem might be a problem for Python, but Groovy has even worse handling of general syntactic sugar.

    I agree with your idea on domain specific languages, though. Isn''t it strange how no matter where you start, you evolve towards Smalltalk?'
  replies: []
- id: 4876
  author: Doug L.
  date: '2006-02-14T00:43:35'
  content: 'Some good points, but here''s a small correction:  Python does have lambdas.  The rejected proposals are for *multi-line* lambdas.  One practical effect of Python''s current lambda rules is to limit their size.  I think that the party line is that this usually makes things more readable, and therefore more "Pythonic".'
  replies: []
- id: 4877
  author: Jon Tirsen
  date: '2006-02-14T07:17:28'
  content: 'Doug, correct me if I''m wrong but as far as I understand "lambdas" in Python aren''t real closures, that is they don''t carry their lexical scope at instantiation around with them. That makes them a lot less useful.

    I agree with you Cedric (for once ;-)  ), I don''t think Python has much for it in the competition of dynamic languages. It did once, but age has not treated Python well.'
  replies: []
- id: 4878
  author: ''
  date: '2006-02-14T08:54:54'
  content: 'Python lambdas are real closures, but they are single expressions, not statements.

    Python has some very interesting features that only Haskell also has: list and generator expressions.

    There are problems with Python, but there are also problems with Ruby.  The confusion over whether local variables first used in a block are created in the method scope or limited to block scope for example.  Blocks in Ruby aren''t real objects and you have to use ugly "lambda" or "proc" functions to turn them into objects.  Also, the usefulness of blocks in Ruby is greatly diminished by Ruby''s parenthesis-and-commas syntax for method calls compared to Smalltalk''s keyword-argument syntax or the minimal syntax of LISP and functional languages.'
  replies: []
- id: 4879
  author: Cedric
  date: '2006-02-14T09:04:09'
  content: 'Hi Anonymous,

    Ruby has named parameters using the hash notation:

    Person.new({:firstName => "Cedric", :lastName => "Beust"})

    Anyway, this entry is not about comparing languages but about discussing the ability of Python to evolve.'
  replies: []
- id: 4880
  author: Rick
  date: '2006-02-19T06:33:23'
  content: '> Person.new({:firstName => "Cedric", :lastName => "Beust"})

    You don''t need put them in {}. If you do, it''s just a hash literal you''re passing.

    For keyword arguments use this format, that is without braces:

    Person.new(:firstName => "Cedric", :lastName => "Beust")'
  replies: []
- id: 4881
  author: Evan
  date: '2006-02-19T08:59:47'
  content: 'Haskell has an elegant solution to this problem: the language is defined in terms of curlies and semicolons, but if you use whitespace they are optional.  So it has the nice spare layout of Python normally, but when you need a multiline whatever you just stick in the appropriate braces.'
  replies: []
- id: 4882
  author: gabriele renzi
  date: '2006-02-19T09:09:25'
  content: 'I don''t think meaningful indentation is a problem in evolving a language much more than any other specific syntax rule.

    Python has evolved a lot in semantics even if just slightly in syntax, but there is quite a bit of new stuff there too.

    For example, ruby''s special cased one-function-argument syntax makes it harder to provide multiple blocks as in Smalltalk, or think of how hard adding a pythonic/javaish stackable function decorator syntax with arguments would be.

    I think meaningful indentation may be a slightly more pesky problem, but not really much.

    As for the "python lambdas are not closures" python lambdas do carry their environment, the problem is you can''t use assignment in lambdas, and even using nested functions when you try to reassign to a variable that you got from an outer scope you''ll create a new local one, i.e.:

    >>> def exp(num):

    ...  def f():

    ...   num= num * num

    ...   return num

    ...  return f

    >>> powers_of_two=exp(2)

    >>> power_of_two()

    Traceback (most recent call last):

    File "", line 1, in ?

    File "", line 3, in f

    UnboundLocalError: local variable ''num'' referenced before assignment

    which is different from any other closure system I''m aware of.'
  replies: []
- id: 4883
  author: eduardo
  date: '2006-02-28T16:05:25'
  content: 'Cedric,

    All due respect. I''m no Python zealot, but you seem to be conflating syntax with implementation. Python has a rock solid implementation. Guido''s conservatism is to be applauded. You can''t just give the kids every toy that they want.

    I was never a proponent of the lack of curly braces in Python, but I respects Guido''s stubborness and the Python community is growing, not shrinking.

    In fact more and more of us are thinking less in terms of languages. I need a rock solid implementation, though, and in that respect Perl is superior to Ruby.'
  replies: []
- id: 4884
  author: Allan Kelly
  date: '2006-03-14T15:48:49'
  content: 'As a newcomer to ruby, the "killer app" is rails - I''m looking at the whole language due to that one application. I''m from a Perl background, with 10 years now as a sys admin using perl for everything. Python has never interested me, due to the incompressible syntax - usually my programs start and end life as 1-line hacks. Of course the larger programs are well-structured and indented, but it''s orthogonal. So far, perl is still my perfect language. Unfortunately Larry''s doing too much re-invention with Perl 6, so instead of simply adding ''proper'' O-O to perl5 we have effectively a new language. Who will move into this space (parser language that scales to application space)? So far it looks like ruby to me, fuelled by rails, but the language *must* fix overloading and allow curlys just like we learned in kindergarten (even SVR4 vi will parentheses match ON %).

    Python, to me, is a fan-boy language which is already ghetto-ised.

    But hey, that''s just me. al.

    allan at eh42 dot com'
  replies: []
- id: 4885
  author: Hasan
  date: '2006-03-15T14:32:26'
  content: Languages never completely die. They may lose the press they once had, but legacy systems always exist. Case in point, MI-6 still uses NeXTStep, even though it's been EOLed since the early 90s.
  replies: []
- id: 4886
  author: Brad Phelan
  date: '2006-05-15T01:55:08'
  content: 'Here is a nice pattern for multiple blocks being handed to a function. It effectively mirrors Java''s anonymous inner class trick but uses a helper method to generate it. See below for a canned example

    (excuse the dots in the formatting)

    def multi_yield(&block)

    ...Class.new do |klass|

    ......klass.class_eval &block

    ...end.new

    end

    def mouse(&block)

    ...handler = multi_yield &block

    ...handler.moved(2)

    ...handler.clicked(2)

    end

    mouse do

    ...def moved(x)

    ......puts "moved " + x.to_s

    ...end

    ...def clicked(y)

    ......puts "clicked " + y.to_s

    ...end

    end

    The mutli yield helper creates an anoymous class and then yields to the user written block to fill in the methods. Things like mouse handlers always have a number of methods. Obviously in real life you would store the handler and execute the methods later upon a mouse event.

    An obvious extension is to provide a default super class or a method_missing handler so that the user would not have to fill out all handlers.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/extinct.gif)

Guido recently posted [an interesting thought](http://www.artima.com/forums/flat.jsp?forum=106&thread=147358) about his recent decision to reject two proposals to add lambdas to Python.

It's a hard problem, but the reason why this particular aspect is interesting is the grounds for refusal:  not only does Guido think that all the proposals so far have failed to be "pythonic" enough (especially because they force the language to switch between two modes, one where spaces are significant and one when they're not), but he flat out claims that there is no solution to this problem.

In short, there will never be any lambdas in Python.  And a bunch of other potential features will most likely never make it into the language for that reason.

Of course, Python is Guido's language and ultimately, what he says goes.  I certainly respect his efforts to keep his language in line with his philosophy.

But it makes me sad that a feature that looks so elegant (space significant indentation) might actually spell Python's doom.  The problems that developers solve every day change constantly, and languages need to evolve as well if they want to stay relevant, but unfortunately, Python seems to be headed toward an evolutionary dead end.

In 1998, Guy Steele published a seminal paper called [Growing a Language](http://homepages.inf.ed.ac.uk/wadler/steele-oopsla98.pdf) in which he spelled out a few rules to make a language as flexible to change as possible.  Of course, we can't expect Python to have been designed with these rules in mind since it was created in 1990, but after 1998, it would definitely have been wise to try and incorporate some of Guy's ideas to make sure that Python would be able to withstand the tides of changes.

Interestingly, Matz (the author of Ruby) saw this coming.  Three years ago, I posted an article called [Flaws in Ruby](http://www.beust.com/weblog/weblog/archives/000042.html) in which I pointed out a few aspects where I thought Ruby could improve.  One of the improvements that I suggested was space-significant indentation.  Matz commented on this entry and said:

> "The meaningful indenting" is plain wrong for a language like Ruby, where expressions and statements are interchangeable. See the lambda problem in Python. Guido decided to remove it in the future. But I won't give up lambda nor value giving blocks. 

It's quite eerie to see Matz talk about the "Lambda problem in Python" back in 2003.  He definitely saw that one coming, and as shown by Guido's article, the topic is as hot today as it has been on the Python mailing-list these past years.

From this standpoint, Ruby seems to be better fitted to face the challenges of the future.  First because it is not limited by the space indentation problem (an improvement I was wrong to suggest, as it turns out), and second because it seems to have a decent amount of potential to create [Domain Specific Languages](http://www.martinfowler.com/bliki/DomainSpecificLanguage.html) (for example, Ruby on Rails lets you use keywords such as :one_to_many which are not recognized by Ruby but which syntactic placement simplifies greatly programming).

I'll conclude by quoting two [comments](http://www.artima.com/forums/flat.jsp?forum=106&thread=147358) that were made by readers of Guido's article, which summarize my point well:

> Having toyed around with Ruby and blocks, I know how nicely they work, how cool they look, how gracefully they fit in the language. But Python's not ruby, something that works for ruby doesn't necessarily work for Python, and blocks don't. Everyone's time would probably be much better invested in creating useful, new, original features (== ripping Lisp or Smalltalk ;) ) 

> I think it would be sad to see Python as the last kid on the block without a cool bike. 

As opposed to the last person, my point is not to say that blocks are cool or uncool:  they are just the symptom of a deeper problem in Python's design and implementation that will most likely prove to be a big challenge for its adaptability in the coming years, with Ruby and Groovy setting the bar increasingly higher.

What do you think, is Python in danger to be marginalized because it can't evolve any more?
