---
title: Statement modifiers in Ruby
date: '2006-05-11T10:11:15'
slug: statement-modifiers-in-ruby
categories:
- General
comments:
- id: 5339
  author: bob pasker
  date: '2006-05-11T11:02:24'
  content: 'Ruby''s modifiers are taken directly from Basic Plus, a language I used in the late 70s on the PDP-11.

    see http://en.wikipedia.org/wiki/BASIC-PLUS'
  replies: []
- id: 5340
  author: RichB
  date: '2006-05-11T11:51:29'
  content: This reminds me a lot of the Torvalds Technique - however I can't find the original (usenet?) post for it.
  replies: []
- id: 5341
  author: Charles Miller
  date: '2006-05-11T15:14:39'
  content: 'I agree that you shouldn''t use statement modifiers for anything longer than a one-line expression, but I''m less convinced about the side-effects thing.

    For example,

    raise "Premature end of file" unless buf = file.readline()'
  replies: []
- id: 5342
  author: Jon Tirsen
  date: '2006-05-11T18:33:07'
  content: 'I use it as guard clauses in the beginning of methods:

    def find_by_name(name

    raise ''name must be specified'' unless name

    # ...

    end

    Personally, I would never do what Charles suggests (but not sure why):

    raise "Premature end of file" unless buf = file.readline()'
  replies: []
- id: 5343
  author: Cedric
  date: '2006-05-11T18:37:14'
  content: 'Mmmh, that''s a seriously contrived piece of code, Charles.

    Anyone who''s not extremeley familiar with Ruby will assume that = is the same as "==" in Java and will have a hard time interpreting this code, which actually means

    buf = file.readline();

    if buf == nil

    raise "EOF"

    end

    I think this particular example proves my points pretty well, but I''m still open about the side effect part, if you can find a more convincing example :-)

    --

    C'
  replies: []
- id: 5344
  author: vivek
  date: '2006-05-12T08:09:33'
  content: But, thats the point. You wont be looking at this code unless a) you know ruby b) are learning ruby. Its like me looking at a similar construct in cobol (yikes!) and commenting on confusion arising from it just because I know java and not cobol.
  replies: []
- id: 5345
  author: Anonymous Coward
  date: '2006-05-12T08:15:38'
  content: 'Ah, exceptions: the glorified goto''s grossly misused in Java... And apparently in Ruby too.  If only more language designers had read (and understood) Meyer''s OOSC, we''d have real Design by Contract (he coined and trademarked the term) and exceptions only used for really exceptional conditions (ie violation of pre/post conditions or invariants, which really should only happen exceptionally, when the program is provably wrong [that''s the whole point of DbC]).

    But, no, we''re still in the stone age and this discipline has not much to do with "computer science".

    I''m done ranting now, gone for a bicycle ride far far away from all those monkeys Java-throwing and Ruby-raising exceptions for "exceptional conditions", like, say, a dropped network connection (this is *really* exceptional, right!? Uh...).   1980''s called, programmers want their goto back ;)'
  replies: []
- id: 5346
  author: ''
  date: '2006-05-12T20:41:55'
  content: 'i love gotos: they''re fun, stupid folks thinks they are stupid and they always provide for a good laugh.

    goto rocks'
  replies: []
- id: 5347
  author: Niels Bech Nielsen
  date: '2006-05-13T01:18:17'
  content: 'It might be that the statement modifier is as yet mostly unseen in imperative languages, but imperative languages have until now been using the smallest command set to solve the most cases.

    Notice how Ruby (re-)introduces the unless. I have often found myself using way too much though on if (!nottruecond). Just seconds each time, but still it adds up to unnecessary frustrations.

    I have been doing lots of introductionary programming courses, and find that people (before knowing of imperative constructs) can specify conditions before the action or after the action.

    Look at these semantically identical sentences:

    I will visit you if I''m in Otario

    If I''m in Otario, I will visit you

    (Actually they may not be identically received, because of tonation and personal comprehension etc)

    If you think in one way, why should a modern programming language impose a reduction of your communication skills :-)

    So, I think using statement modifiers is a great idea.

    Personally I have found most usage for the statement modifiers in premature aborts (Because of  the neater one-liner rather than 3 lines).'
  replies: []
- id: 5348
  author: Gabriel
  date: '2006-05-14T15:02:17'
  content: 'These kind of line remind me perl:

    print OUT unless /^#/ ;

    which means: write this (the $_ var) on the OUT handler unless it begins with a #.

    Very usefull - and can improve readability in some case, just like in natural language, it''s another way to say something

    btw : about the Goto : if you use the Throw at the beginning of a method to check that the contract is well understood it''s it a way to design by contract?

    (eg.:

    if (arg==null) throw new IllegalArgumentException("blah blah");'
  replies: []
- id: 5349
  author: Bruce Tate
  date: '2006-06-09T06:03:51'
  content: 'To me, modifiers are not just tools for brevity. If you can express a complete thought, it should help, and not hinder the readability of the code.

    item.tax = 0.06 unless item.type == food

    person.save unless event == cancel

    On a slightly related note, you can also use Ruby''s rescue as a modifier.

    nickname = department.person.first_name rescue nil

    I like each of these examples. They are more readable, not less.'
  replies: []
- id: 5350
  author: Paolo "Nusco" Perrotta
  date: '2006-08-11T11:53:42'
  content: Same for me. I only use statement modifiers for guard clauses, to get all special cases in a method out of the way quickly before I get to the real meat.
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/ruby.jpg)

Ruby supports a syntactic construct known as a "statement modifier".  A statement modifier lets you move control structures at the end of an expression.  For example, the following two examples are equivalent:

> if c.empty?  
>    return  
>  end

> return if c.empty?

I have always found this construct suspicious.  After all, the saving is fairly limited (no need to close the block with `end`) and moving the logic at the end of the line is counter-intuitive for most imperative programming languages.

As I was re-reading some of the Ruby code I have written over these past months, I noticed a pattern on how and when I used statement modifiers, and it started making a little bit more sense.  I say "a little" because I still think it's a feature that should be used sparingly.

I started realizing that statement modifiers shared a lot in common with exceptions.  For me, they are a way to quickly handle error or trivial cases without impacting the readability of my code.  In a way, it's an extension to the "early abort" approach, that [I discussed in an earlier entry](http://www.beust.com/weblog/weblog/archives/000308.html).  If you're not using exceptions, early aborts or statement modifiers, you usually end up wrapping your logic in a big `if` and handling the other case in an `else`, which is not necessarily the most readable way to structure your code.

With statement modifiers -- and more generally, early aborts and exceptions \--, the body of your methods remains focused on the business logic that is expected to happen "if all goes well", and other cases are moved out of the way.

Having said that, there are definitely a few usage patterns and conditions that must be met by the statement modifier if you want to keep your code clean.  Your statement modifier should:

  * **Be simple**.  If it's going to span over several lines or feature a complex boolean condition, you should be using a real block.  
 
  * **Not perform any side effects**.  If it does, then you're doing business logic and not an early abort, and again, you should probably use a real block instead.



How do you use statement modifiers?  Do you have examples of good ones?  And, more interestingly, of very bad ones?
