---
title: Language popularity on GitHub
date: '2014-05-03T21:11:32'
slug: language-popularity-on-github
categories:
- General
comments:
- id: 9775
  author: huhwhat
  date: '2014-05-03T23:11:48'
  content: Go's type system is not "antiquated". It's just made simple, and by purpose. I think the purpose was to stay as near to C as possible but still give some tools for stable APIs. It's not exactly duck typing, but pretty near. And it works in my experience very very well.
  replies: []
- id: 9776
  author: vincent
  date: '2014-05-04T04:29:12'
  content: One point that I would like to raise here is that when you add one of the increasingly popular front end frameworks such as twitter Bootstrap or Zurb foundation to say, a Rails app, your project is seen by Github as more than 50% JavaScript, even if you wrote none of it yourself.
  replies: []
- id: 9777
  author: Dan
  date: '2014-05-04T07:45:00'
  content: 'Python and Go do not have cross purposes imo. I mean obviously to the people who were just using python because they enjoyed it, and it was fast enough for them; then fine most languages are basically interchangeable. But for systems that actually benefit from python''s dynamism, Go strips out too many good python idioms that don''t really make them alternatives.

    Personally even if none of that was true, (In the case where python is fast enough, and obviously it should be if we''re making this comparison) I wouldn''t ever use a C-style language over python''s--what I think is really nice--syntax. And the speed of development in a dynamic languages is almost always higher. Which would tend to be the things that I would pick python for in the first place. Something that needs some nice speedy development that will take advantage of dynamism, metaprogramming, and/or asyncio'
  replies: []
- id: 9778
  author: boggle
  date: '2014-05-04T07:56:57'
  content: '@huhwhat go''s type system is very limited since only very basic properties of values may be expressed by it (in comparison to practically used powerful type systems of languages like scala, haskell, and rust).  I think it is also valid to call it antiquated in the sense that the set of features that it does support rely on type theory papers from way before the 80''s if not much earlier (as opposed to more modern type systems based on more modern type systems).'
  replies: []
- id: 9779
  author: Stefane Fermigier
  date: '2014-05-04T08:41:08'
  content: 'Bullshit analysis, based on bogus data, posing as serious science (or at least, credible analyst work).

    For instance, 1/2 of my repositories, which are really Python projects, are misclassified by GitHub as Javascript projects. Same for other people, of course (see the comments below mine on dberkholz''s post).'
  replies: []
- id: 9780
  author: huhwhat
  date: '2014-05-04T09:51:02'
  content: '@boggle Academia vs real life, please don''t go there... It will turn ugly, when you start putting academic toy languages like Haskell on the line with stuff used widely in software industry..'
  replies: []
- id: 9781
  author: James
  date: '2014-05-04T17:21:16'
  content: '@huhwhat Haskell might be primarily an academic language, but I''d hardly consider put Scala or Rust in the same category.'
  replies: []
- id: 9782
  author: ARealProgrammer
  date: '2014-05-04T18:01:42'
  content: Real programmers program in assembly! :-P
  replies: []
- id: 9783
  author: Paul
  date: '2014-05-05T06:11:27'
  content: Am I missing something?  How can Go be replacing Python if it's not even showing up on the graph?
  replies:
  - id: 9785
    author: Cedric
    date: '2014-05-05T07:18:47'
    content: The prediction that Go is slowly replacing Python is entirely mine, it doesn't follow from these graphs.
    replies: []
- id: 9784
  author: Joker_vD
  date: '2014-05-05T06:51:58'
  content: '@boggle: Generics (aka "parametric polymorphism") were invented in 70ies. Heck, half of the CS was invented back in the 70ies, they just didn''t have resources to implement it. We are (re)implementing (and reinventing) it today!'
  replies: []
- id: 9786
  author: Articles for 2014-may-6 | Readings for a day
  date: '2014-05-05T21:18:45'
  content: '[&#8230;] Language Popularity on GitHub [&#8230;]'
  replies: []
---

![](http://dberkholz-media.redmonk.com/dberkholz/files/2014/04/github_new_repos-custom.png)

[RedMonk just published their latest survey of Github's most popular languages](http://redmonk.com/dberkholz/2014/05/02/github-language-trends-and-the-fragmenting-landscape/), and given Github's continuous growth in popularity, they are worth a look. 

Here are the results at a glance: 

  * Javascript is seeing a consistent and serious growth. 
  * Ruby is in sharp decline. 
  * Python is showing a decline as well, although not as severe as Ruby. 
  * Java is showing some growth, and it's also the only JVM language in the top 12 listed by Red Monk. 
I'm going to go out on a limb and predict that Python is being replaced by Go. I don't have a lot of information to back up this prediction except that most of the positive articles I read about Go are written by Python developers, and a lot of them say that they are now actively migrating their code base from Python to Go. I don't see as much enthusiasm for Go from developers using statically typed languages, probably because of Go's antiquated type system (which is still a big step up from Python, obviously). 

It's interesting to see Java continue to grow twenty years after its introduction. I think this constant growth is fueled by the language's remarkable versatility and its ability to adapt to new technologies but also driven by a series of constant popularity boosts such as Android five years ago and Java 8 this year. 

I'm surprised not to see Groovy in this top 12 of languages, since it's usually acknowledged as the second most popular language on the JVM and I expected its popularity grow thanks to Gradle, but this doesn't seem to be enough to crack the top 12 on Red Monk. 

_Update:[Discussion on reddit](http://www.reddit.com/r/programming/comments/24oesn/language_popularity_on_github/)_
