---
title: Numbered interfaces
date: '2005-06-14T09:07:52'
slug: numbered-interfaces
categories:
- Java
comments:
- id: 3797
  author: Keith Sader
  date: '2005-06-14T10:29:51'
  content: '>So just pick a convention and stick with it.

    So, I see this thread has come full circle to the end of all religious arguments.

    Can we now get on to discussing the important things say like { } positioning or tabs vs. spaces? ;-)'
  replies: []
- id: 3798
  author: Erik Burckart
  date: '2005-06-14T10:32:13'
  content: 'Just to add my $.02 to "just pick a convention and stick with it"...

    Have a convention for each component you write.  I personally dislike mixed conventions within a group of code...may as well be no convention at all.  For example, if you mixed the I prefix and Impl suffix...a name without either prefix or suffix could be either.  I see this way too much. :-/'
  replies: []
- id: 3799
  author: Andrew Fung
  date: '2005-06-14T11:46:05'
  content: 'I find that conventions without the context they were invented in quite religious.  However, a lot of  value can be found in looking at the convention and why/how it was appropriate in the context in which it first came about.

    Unfortunately, the context usually isn''t available; only the convention gets stated or communicated, and people get all riled up automatically imagining the convention in their own context (IDE, language, type of software, etc.).

    Statements like Cedric made, like choosing conventions that make it easier to find what you want in an IDE, are pretty important, probably more important than the convention itself and definitely enlightening.

    Probably means that if my entire team uses vi, we should probably make sure all fields are at the bottom (easy to get to, just hit ''G'') rather than worry about prefixes.

    I think similar issues apply for tabs/spaces (how many editors are we using, and what can they handle?), or hungarian notation (apps vs. systems).'
  replies: []
- id: 3800
  author: Dave
  date: '2005-06-14T13:26:08'
  content: 'Using numbers to maintain backwards compatibility might possibly make sense for a published widespread API (like DirectX), but for internal projects, or even inter-company APIs, it seems like overengineered overkill.  Just refactor the interface.

    As for using "I", personally, it''s dumb.  It seems really hard to defend, as it it''s really against "true" hungarian notation (whose prefixes aren''t concerned with types, so much as meaning) and it really adds nothing but noise.  Code should be in English, so it''s easy to talk about.

    Plus, what if you need to change an abstract base class to an interface or vice versa?  You now have your class names coupled to their implementation.  Seems silly and without benefit.

    I use gvim, and I can cursor to a classname, type "K" and get the javadoc.  It takes 1 second.  Then I know if I can "new" it or what.'
  replies: []
- id: 3801
  author: Alex Blewitt
  date: '2005-06-16T03:38:57'
  content: 'I use tabs, because then you can configure your editor to expand to the space that you''re used to. Avoiding tabs because editors Notepad defaultS to 8 spaces is a stupid reason; pretty much every other text-based editor (vi, emacs, wordpad, editplus) can be configured to show tabstops at different places. Similarly, I don''t start method names in the first column just so that I can use vi''s search for ^method to jump to the right place; I let me IDE handle that.

    Prefixes are generally superior to suffixes for any convention in editors that support completion, since they allow you to choose a subset of items to be completed if you follow a standard prefix.

    I''ve commented more on this item in my blog:

    http://alblue.blogspot.com/2005/06/naming-and-indentation-conventions.html'
  replies: []
---

This is beginning to look like the "thread that never ends"... 

Robert posted a few additional thoughts that I'd like to comment on:

> Cedric, you said you wanted to distinguish between needing to use 'new' vs a factory. Why bother? Simply use a factory _all the time_ for your own objects.

I like factories a lot, but using them all the time is a bit extreme in my opinion.  Constructors have a lot of shortcomings (name that changes all the time, can't use polymorphism, etc...) but they are a fairly convenient construct and I think banning them from everywhere in your code base except for a small set of factory methods might be a bit overkill.

> BTW, I said that adding numbers to an interface was an admission you made a mistake - namely, that you forgot something.

That's a bit harsh.  No matter how much thought you have put into an interface, you can't really anticipate all the crazy ways future users will want to use it for.  I would certainly not call this a mistake, maybe just a lack of foresight, but it certainly doesn't reflect badly on the author of the interface in my eyes.

Another comment about numbered interfaces:

> Anybody who first sits down with various COM API's and encounters all the different numbered interfaces and has no idea what the difference is between them can attest to this.

Actually, the numbers serve a very useful purpose:  the higher the number, the more sophisticated the interface is.  When you are wondering which one to implement, the numbered interfaces give you a good way to figure out how much functionalities you want to implement and if the one without a number is good enough for you, it will also be the one with the least methods, so the easiest to implement.  When you don't use numbers, comparing the richness of interfaces that extend each other is not as obvious.

In another comment, Alex Blewitt made another excellent point:

> One advantage that a prefix has over a suffix is nothing to do with JavaDoc; it allows you to get a list of all interfaces by typing I+ctrl+space (or whatever your favourite IDE uses).

This made me realize that I use this a lot, along with other conventions that use prefixes instead of suffixes:

  * `get`/`set` for getters (obvious).  It makes it straightforward to see what properties you can query from an object (type `get<ctrl-space>`).
  * A leading underscore (e.g. `_name`) for fields.



Overall, I feel that if you are using an IDE, conventions that use prefixes instead of suffixes will make your life easier, but at this point, I'm ready to concede that it's really nitpicking.  At least, most of the people who commented seem to agree on the fact that differentiating interfaces from concrete classes with syntactic conventions is useful, and the rest is details.

So just pick a convention and stick with it.
