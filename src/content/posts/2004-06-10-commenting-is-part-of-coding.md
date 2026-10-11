---
title: Commenting is part of coding
date: '2004-06-10T08:21:53'
slug: commenting-is-part-of-coding
categories:
- Java
comments:
- id: 1649
  author: Mike Spille
  date: '2004-06-10T08:38:00'
  content: Well said, Cedric.  I just wish your sentiment would seep more into the open source world, where commenting still seems to be the exception rather than the rule.
  replies: []
- id: 1650
  author: Rob Meyer
  date: '2004-06-10T09:30:20'
  content: 'Yes, please. Since they are junior programmers, if you put them in front of an uncommented peice of code and ask them to make a change they will likely misinterpert the code, add incorrect comments, and make the change incorrectly. I''m not sure how this helps the developers grow or helps the project advance.

    Reading and figuring out uncommented code is a great way to learn, but it''s better done as a training excercise, or under close supervision of a senior programmer; it''s got no place in production quality code.'
  replies: []
- id: 1651
  author: Tim Haley
  date: '2004-06-10T10:59:10'
  content: 'I think that you completely missed the point of the original article.

    Over time, heavily commented code becomes misleadingly commented code.  As the code is modified, the comments are inconsistantly updated.

    From my 15 years of experience writing my own code as well as maintaining and enhancing that written by other people, I can say that there is nothing worse than comments that lie to you.  They get in the way of understanding the code.

    If your code is well-written, modular, and uses meaningful names for variables, parameters, fields, methods, and classes there is little need for excessive comments.  They just duplicate what is expressed by the name of the item being commented.

    As noted by the original author, JavaDoc comments are an exception.  Most modern IDEs provide easy access to the JavaDoc comments, which are essential in understanding the details of how to work with an unfamiliar class or package.'
  replies: []
- id: 1652
  author: Mike Spille
  date: '2004-06-10T11:29:39'
  content: 'Tim, I disagree for a very simple reason: code tells you what, comments (at least good ones!) tell you the _why_.  For example, in some NIO code I have, there''s a comment:

    // The only way to get the Selector to do its internal list management is via selectNow().

    // We have to do this to avoid spurious CancelledKeyExceptions under heavy load

    Without this comment, you''d have to be very, very deep into the multithreaded code flow to have any clue why the code is written the way it is.  Two simple comment lines explain something that may be very mysterious to someone looking at it - or for myself if I''ve been away from the code for awhile.

    Yeah, comments can get out of date - so can code.  Out of date comments are, in my mind, the same thing as dead code, duplicated code, etc that happens as code accretes over time.  You combat it the same way - refactor your comments just as you refactor your code.

    I routinely work with complex code in the 50,000+ SLOC range.  Javadoc comments for that just wouldn''t be enough - I want the developers (including me!) to explain _why_ the code is written the way it is, not just give me 50,000 lines which I have to figure out the programmer''s intent all on my own.'
  replies: []
- id: 1653
  author: Guillaume Poirier
  date: '2004-06-10T13:27:29'
  content: 'I agree with what you both are saying (Cedric and Mike), except that I did not understood the entry you are pointing to in the same way you did.

    He seems to be only saying not do document language or API features.  For example, in something like :

    return a > b ? -1 : 0;

    It''s not really needed to document the language feature used here.  The author seems to refer to such cases rather than explaining e.g. why this particular block of code is synchronized.

    From his blog : "I''ve often encountered the attitude that code or scripts should be commented to the extent that someone *unfamiliar with the language* being used can understand what''s going on." -- The two "*" are added by me'
  replies: []
- id: 1654
  author: Robert Watkins
  date: '2004-06-10T13:36:26'
  content: 'Cedric, you did miss the point; as the later examples show, I''m not against explanations of the "why" as I''m against the explanations of the "what".

    And yes, I am serious. You shouldn''t have obscure code that is commented; you should have non-obscure code that doesn''t require comments in the first place. See http://twasink.net/blog/archives/2004/06/_no_comment.html for more details.'
  replies: []
- id: 1655
  author: Cedric
  date: '2004-06-10T13:53:57'
  content: 'Robert, "non-obscure" is a myth.

    Everybody has a different definition for what obscure code is, and I suspect you will realize that   soon enough when you have read enough code written by other parties...

    Not only should obscure code be always commented, but also any non-trivial code.  If it takes more than twenty lines to express in Java, a couple of lines in English will save everyone (including yourself) hours in the future.

    Code gets read a lot more than it gets written.'
  replies: []
- id: 1656
  author: Robert Watkins
  date: '2004-06-10T14:02:48'
  content: The comment posted by Mike, BTW, is an excellent example of a "why" style of comment that should be preserved.
  replies: []
- id: 1657
  author: Robert Watkins
  date: '2004-06-10T14:11:08'
  content: 'A team has a local sense of what non-obscure is; I believe you can get to it and produce code of that level.

    Sure, everyone has a different understanding of things, that''s normal. But people also have a different understanding of language as well, and the two lines of English are not likely to be any more or less obscure than the code.

    In any case, the point should be to write code that a person familiar with the langauge can follow, and not comment it to the level that someone unfamiliar with the language can follow it; that''s what my first post said after all.'
  replies: []
- id: 1658
  author: Robert Watkins
  date: '2004-06-10T14:15:08'
  content: 'Hey, anyway: look at the actual example (http://twasink.net/blog/archives/2004/06/commenting_exam.html) I posted. I replaced 1 line of crappy comment with 10 lines of good comments; even if you take out the params and returns (which I would for private methods) and reformat for a larger display window, it would still be four lines of comments.

    I''m not against comments, I''m against crappy comments and crappy code. I''m also not very good at explaining what I mean, obviously. :)'
  replies: []
- id: 1659
  author: Beth
  date: '2004-06-11T09:18:42'
  content: 'I think the argument that comments can easily get out of date is a bit of a strawman. If you are changing code that is commented, part of making those changes properly is to update the comments.

    I''m also a bit skeptical that a team''s local sense of non-obscure will last as long as the code does. Projects change, people leave, and sometimes you have to come back to something you haven''t thought about in months. Unless that shared understanding is written down, it won''t be there when you need it.'
  replies: []
- id: 1660
  author: Alexander Dvorkovyy
  date: '2004-06-15T05:07:06'
  content: Code never lies. Comments do. That's the point. The only thing comments are good for are "why" and "API" use cases, described above. If you want to understand what the code does, read the code. Comments will not make bad code better and they will not add much vaue to a good code either.
  replies: []
- id: 1661
  author: weathervanes
  date: '2005-08-03T16:58:41'
  content: Also, another issue which I didn't mention in my post is regarding theoretical groundings of information science(s)/studies. Here as well, there are theories regarding separate research focuses (information retrieval, information seeking, information behaviors, etc...). However, these sound like theoretical frameworks for various sub-disciplines of information studies rather than Information Science (singular). What is that 'thing' that ties all the information sciences (plural) together, besides for the fact that they all claim to be dealing with the 'thing' called 'information' - which is not necessarily defined the same across the various concentrations and research areas within information science/studies.
  replies: []
- id: 1662
  author: http://cven.thor.prohosting.com/androgel.html
  date: '2006-12-07T00:38:29'
  content: defined the same across the various concentrations and research areas within information.
  replies: []
---

[This entry](http://twasink.net/blog/archives/2004/06/how_not_to_comm_1.html) explains why it's better not to comment code so that junior programmers and newcomers to the code base really try to understand how it works: 

> If people are given an explanation that covers what they see in front of them, they won't go off and learn for themselves. If they won't learn for themselves, they won't be able to grow and develop. If they don't grow and develop, they'll never cease being junior people. 

I found this article quite amusing until I realized that robertwd, the author of this entry, was actually serious. He really seems to think that the more obscure your code is, the better it is for your readers. 

I can't even begin to describe how wrong and arrogant this kind of attitude is. 

It reminds me of an acquaintance of mine who was also teaching computer science classes. During a lunch, he explained to me that each of his classes was architected so that it would be a little obscure and would fail to explain a few things, in order to "keep a healthy distance between the knowledge of students and that of the teacher". "This way, you keep their respect, you see?". He was dead serious. 

As seems to be the author of the above entry. 

The simple truth is: you don't make junior people become senior by forcing them to understand the intricacies of your coding style. I am hoping that when robertdw gets to read the _uncommented_ code written by these junior people and he tries to make sense of it, he will start realizing the importance of thoughtful, well-written comments. 

Which leads me to my next point: I can tell the maturity (a term I prefer over "seniority") of a programmer by the comments they write. Not just by the fact that they write comments, but also by the way they phrase them and where they put them. 

But this will be the topic of another blog entry. Until then, please comment your code.
