---
title: Iterators?  They still make these?
date: '2010-06-17T12:03:12'
slug: iterators-they-still-make-these
categories:
- General
comments:
- id: 8258
  author: Adam Rabung
  date: '2010-06-17T12:28:26'
  content: What about lazily loading an expensive set of data, ie ResultSet?
  replies: []
- id: 8259
  author: James Carman
  date: '2010-06-17T13:34:31'
  content: '@Adam: Depending on the language and medium. Things like Mmap exist. Also many API''s (e.g. ORM) will handle these issues behind the scene''s for you, or as a configuration option.

    http://search.cpan.org/~swalters/Sys-Mmap-0.13/Mmap.pm

    http://davidhayden.com/blog/dave/archive/2007/08/05/LINQToSQLLazyLoadingPropertiesSpecifyingPreFetchWhenNeededPerformance.aspx'
  replies: []
- id: 8260
  author: Hugo
  date: '2010-06-17T13:52:53'
  content: 'The new for-loops haven''t really made iterators go away though. They''ve just made them easier to work with, a little syntactic sugar. Look at a language like python, it''s got iterators all over the place, with a hugely simplified interface. And if you need anything more complicated, you can use the richer sequence types.

    So iterators are still a good idea, they just needed a nicer interface'
  replies: []
- id: 8261
  author: /b
  date: '2010-06-17T14:01:36'
  content: "First off, I agree that the procedural code is much more understandable--but only because it's in C++, a language with a syntactical bias towards procedural code.\nConceptually, I actually find the functional way more understandable, and I think you do too; hence, your preference to obviate away the explicitness of the for loop for the foreach style loop. The difference in code between:\nfor( int i : list ) {\n  // code on i\n}\nand\n(map (lambda [i]\n         ;;code on i)\n list)\nIs so subtle as to be practically non-existent from the programmer's perspective.\nHowever, as to your central point in attacking iterators: they're simply a mechanism for abstracting away the concept of going through a collection sequentially. As a result, they're what makes the generic foreach statement possible, so your conclusion that they \"no longer [have a] place in modern software\" seems kind of silly."
  replies: []
- id: 8262
  author: Alex
  date: '2010-06-17T14:10:46'
  content: 'I second Adam, lazy execution is the best reason for iterators to exist.

    For example, imagine I wanted to find the first item that satisfied some condition from a collection. If that collection is 1,000,000 items in a database, then no way do I want to load up all those entries into a List, I want to lazily iterate until I find what I''m looking for.

    Even in more general mathematical cases I might want to iterate. For example, imagine I want to find the first power of two greater than a given number. I could have an iterator that returns the next power of two each time I ask for it. Any finite list of powers of two wouldn''t work. (A procedural loop would work in this case, but imagine I didn''t want powers of two, I wanted to decide how to calculate the next number at runtime...)

    I agree that in many cases iterators are silly, the snippets above prove that. And iter.end() is a really stupid idea: if you can index the end of the collection, why not just give me a collection where I can index the whole damn thing. But I resolutely believe that the abstraction of iterators is very useful. Claiming that iterators are useless because there are better ways to index over in-memory finite collections is not really a valid argument.'
  replies: []
- id: 8263
  author: Adam Rabung
  date: '2010-06-17T14:19:26'
  content: '@James - it seems that in any language, I would not a user of my API to think they have random access reads or write access to the elements of a structure I am lazily loading.  I agree you can fake this out in many situations (memory mapping of files especially), but iterators are great at expressing this, and not painful to use.'
  replies: []
- id: 8264
  author: Chris Oldwood
  date: '2010-07-01T03:53:12'
  content: 'I know they''re conceptually similar, but Andrei Alexandrescu did a session at the ACCU 2009 conference and then later at the Boost conference called "Iterators are Out, Ranges are In". I think their prevalence in C# (as IEnumerable) shows how powerful the concept [still] is, and yet can largely be hidden away with syntactic sugar.

    http://accu.org/content/conf2009/AndreiAlexandrescu_iterators-must-go.pdf

    or

    http://www.boostcon.com/site-media/var/sphene/sphwiki/attachment/2009/05/08/iterators-must-go.pdf'
  replies: []
---

The war between procedural and functional programming continues to rage, and the latest skirmish appears in [this article](http://blog.objectmentor.com/articles/2010/06/12/c-algorithms-boost-and-function-currying), where the author shows two versions that add the contents of a vector. 

### Traditional C++

```java
int Dice::total() const {
  int total = 0;
  for(const_iterator current = dice.begin();
      current != dice.end();
      ++current)
    total += (*current)->faceValue();
  return total;
}
```

### Functional C++

```cpp
int Dice::total() const {
  return std::accumulate(
      dice.begin(),
      dice.end(),
      0,
      bind(std::plus(), _1, bind(&Die;::faceValue, _2))
  );
}
```

The comments show the usual dichotomy between people who prefer one style over the other (I continue to think the procedural style is vastly more readable), but interestingly, nobody seems to notice the one thing that makes both these snippets terrible examples of clean code: they both use iterators. 

Iterators were made popular by the [Standard Template Library (STL)](http://www.sgi.com/tech/stl/). When it came out (around 1994 I think), the STL featured a lot of concepts that were quite groundbreaking at the time, such as the extreme emphasis on composition over inheritance, something that is still considered a very good practice today. 

Unfortunately, the STL also made iterators very popular, and although back then, iterators definitely raised the level of abstraction in the manipulation of containers and algorithms, their main drawback is that they expose a lot more about the internals of the containers than users really need to know. 

When the first versions of the Java Collections came out, they enthusiastically embraced iterators as well. We can't blame the authors, nobody really knew better back then, and this kind of code: 

### Old Java

```java
List<Integer> l = ...;
int result = 0;
for (Iterator<Integer> it = l.iterator(); it.hasNext(); ) {
  result += it.next();
}
```

was considered a marvel of abstraction. 

It took a few years, but finally, the Java community started wondering why we needed iterators at all for such operations. We have a container, we have elements, and we want to apply a certain operation on these elements. In the description of this problem, iterators are nowhere to be found. This simple realization led to one of the best new features ever introduced in Java : the enhanced `for` loop. 

### New Java

```java
List<Integer> l = ...;
int result = 0;
for (int n : l) {
  result += n;
}
```

The syntax itself is unimportant (some languages use `foreach`, others `for i in l`, etc...), what really matters is that iterators are gone. 

Which brings us back to the two code snippets shown at the top of this post. What's more disturbing is not so much that the procedural version of this code uses iterators (this is, sadly, a common idiom in C++) but that the functional version exposes iterators as well. Why the author of this snippet can even remotely think this is a good idea is beyond me. 

And the more I think about iterators, the more I really wonder if they have any place in a public API. At all. 

For a while, I thought that being able to traverse a collection without exposing the underlying container sounded like a good idea, so instead of returning a `List` or a `Set`, you just return an iterator. I could buy that, although I found that in practice, iterators are pretty hard to manipulate, and as soon as you find yourself needing more sophisticated access to the underlying container (such as the size of the sequence, or random access to its elements), you quickly replace your iterator with a collection exposing the richer interface you need. 

Let's just declare iterators a cute idea that no longer has its place in modern software and move on, shall we?
