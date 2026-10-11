---
title: Setting pointers to null is useful
date: '2005-09-06T10:33:43'
slug: setting-pointers-to-null-is-useful
categories:
- Java
comments:
- id: 4183
  author: Geert Bevin
  date: '2005-09-06T11:18:15'
  content: '"Setting references to NULL to "help" GC is the easiest way to sign up for a NPE in other parts of the code."

    I tend to think that it''s one of the nicest benefits of setting pointers to null. LIke that you''re really sure that when an object shouldn''t be used anymore, that it''s not referenced. Better having a NPE than modifying something that shouldn''t be modified.'
  replies: []
- id: 4184
  author: Morten Andersen
  date: '2005-09-06T13:14:11'
  content: 'Hi Cedric

    I am definitely not an expert on GC, but your argument about you helping the garbage collector *no matter what GC algorithm* by "nulling"? If I remember correctly from my reading of Jones and Lins "Garbage Collection" ( http://www.amazon.co.uk/exec/obidos/ASIN/0471941484/qid=1126036524/sr=8-2/ref=sr_8_xs_ap_i2_xgl/202-4837466-3399064 ), this is not true for e.g. Mark-and-sweep, as you will newer try to follow links in a non-referenced object.

    I don''t have the book at hands right now, so I just did a quick google on Mark-and-sweep, and took a pick on a totally un-validated site: http://lambda.uta.edu/cse5317/notes/node47.html

    Which explains the Mark-and-sweep algorithm as I also remember it.

    An example from the picture on the side: No matter if the reference from object 2 -> 4 is "nulled" or not, the garbage collector will newer follow this reference, as object 2 is not reachable from the root-objects when the garbage collector runs.

    Please feel free to correct me, if I misunderstood your explanation.

    Best Regards

    Morten'
  replies: []
- id: 4185
  author: Cedric
  date: '2005-09-06T13:16:56'
  content: 'No Morten, you are right.  My remarks only apply to certain implementations of garbage collectors.

    Thanks for pointing out my mistake.'
  replies: []
- id: 4186
  author: RichB
  date: '2005-09-06T13:36:20'
  content: IIRC, Microsoft's .Net GC can consider a reference to be no longer used mid-way through a method. What's the point in setting a reference to null if you have a GC this capable?
  replies: []
- id: 4187
  author: Jason Marshall
  date: '2005-09-06T14:17:19'
  content: 'Any mark and sweep collector will skip over object references that themselves are dead.

    Where things get tricky is in determining if a reference on the stack is still valid.  There are some special situations where a stack variable may be only conditionally in scope (used in a conditional block that may or may not be skipped in the current call).  There are still fewer situations where this code arrangement matters.

    A lingering object reference in a leaf method will have no material effect on the memory usage of the app.  Whether the object graph can be collected now or in another 200 clock cycles makes very little impact on how much memory I have available -on average- during program execution.

    On the other hand, a lingering object reference in a top level method, like a main loop(message pump, work queue, scheduler, etc) may have a dramatic impact on available memory, because the reference will linger for millions of clock cycles longer than strictly necessary.  Add to this the fact that one tends to see larger object graphs closer to the ''center'' of the app, and this problem is compounded.  I think where opinions differ is that some, like me, consider these to be merely an important exception to a very good rule.

    The typical antipattern, that many are skirting around here is keeping one large object graph erroneously alive while calculating a replacement for it.  If the graph is the single largest memory use in the app, you''ve virtually doubled your app''s memory needs:

    BigGraph foo;

    while (true)

    {

    foo = calculateReallyBigGraph();

    ...

    }

    instead of

    BigGraph foo;

    while (true)

    {

    foo = null;

    foo = calculateReallyBigGraph();

    ...

    }

    or where applicable, the much preferred solution of narrowing your variable scope:

    while (true)

    {

    BigGraph foo = calculateReallyBigGraph();

    ...

    }

    For every time I''ve come across this situation, I''ve come across hundreds of situations where someone was needlessly nulling an object, and hundreds of thousands of situations where someone could have done so.'
  replies: []
- id: 4188
  author: ''
  date: '2005-09-06T15:23:46'
  content: There are instances where you must set a pointer to null in order to avoid a memory leak - read Effective Java for an explicit example. I'd give you the chapter and page, but my copy is at work.
  replies: []
- id: 4189
  author: ''
  date: '2005-09-06T17:52:45'
  content: 'Cedric, take a look at the following article by Brian Goetz: http://www-128.ibm.com/developerworks/java/library/j-jtp01274.html

    "For most applications, explicit nulling, object pooling, and explicit garbage collection will harm the throughput of your application, not improve it -- not to mention the intrusiveness of these techniques on your program design. In certain situations, it may be acceptable to trade throughput for predictability -- such as real-time or embedded applications. But for many Java applications, including most server-side applications, you probably would rather have the throughput."

    There are some nice examples in the article as well (including cases when nulling is really needed).'
  replies: []
- id: 4190
  author: Patrick Calahan
  date: '2005-09-06T21:31:07'
  content: TSS has definitely jumped the shark.
  replies: []
- id: 4191
  author: kirk
  date: '2005-09-06T23:52:51'
  content: 'I''ve blogged (http://kirk.blog-city.com/code_smell_x__null.htm) on this subject a while back after recieving a hidous performance tuning article that suggested that the cure to their performance ills was to null out variables.

    The technique is about the same as calling a destructor on a C++ object which leads me to believe that we are entering into completely different set of questions.

    GC mark&sweep works in blocks. All objects are visited in the mark phase irregardless of the state of any application reference to them. The next step is a transitive closure on all reachable objects. IOW, if the root of an object is not reachable, then the child nodes will not be visited. So, nulling has no effect on this phase either. The third step is to free memory and that phase is once again based on the oop table and once again nulling has no effect on this operation.

    Now where nulling does have an effect is if the place holder is improperly scoped. If an object survives too long, it will end up in old space. GC in old space is MUCH more expensive then GC in young. Plus young is a copy collector which means that extra objects hanging about means more work moving them from eden to s1, s2 and back.

    The cost of GC is mostly in what is left behind, not in what is collected!'
  replies: []
- id: 4192
  author: Staffan Larsen
  date: '2005-09-07T08:51:08'
  content: '> IIRC, Microsoft''s .Net GC can consider a

    > reference to be no longer used mid-way

    > through a method. What''s the point in setting

    > a reference to null if you have a GC this capable?

    JRockit does this as well.'
  replies: []
- id: 4193
  author: Andy
  date: '2005-09-07T12:54:24'
  content: I'd say that this is what block scoping was invented for.  Although rarely used or at least intentionally thats why you can always enclose things with {} and get a scope.  First off it basically negates the need to set to null.  Second off, this is the ultimate trick for efficiency nuts since it clues the VM/compiler to the fact that this is a nice place to do direct register assignment.  Of course I bet the first IO call you make negates all of thse tricks...If you're using web services or RMI or whatever than this is the least of your worries.
  replies: []
---

Setting pointers to null is useful

[This discussion](http://www.theserverside.com/news/thread.tss?thread_id=36362) on TheServerSide is showing people up in arms about the practice of setting pointers to null:

> FUD at its best... Not only it is unnecessary in most situations (read any Java book) but it is been lately discouraged to rely on such technique at all. 

> It
