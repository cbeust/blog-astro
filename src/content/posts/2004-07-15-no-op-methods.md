---
title: No-op methods
date: '2004-07-15T17:19:50'
slug: no-op-methods
categories:
- Java
comments:
- id: 1798
  author: Robert Watkins
  date: '2004-07-15T19:51:37'
  content: 'Gotta agree; annotations remove the need for marker interfaces. No question about it.

    Should be good when they''re really available. ;)'
  replies: []
- id: 1799
  author: Patrick Linskey
  date: '2004-07-15T20:08:06'
  content: 'So I got a bit long-winded in my follow-up comments, and figured it wouldn''t be right to flood the comments with my full response. So, I bit the bullet and started a blog. Yes, at long last, I have arrived at the great Information Water Cooler.

    See my response at my brand-spanking-new weblog at http://jroller.com/page/pcl

    -Patrick'
  replies: []
- id: 1800
  author: Geir Magnusson Jr
  date: '2004-07-16T06:38:11'
  content: 'So I need to implement the method and then say "never mind"?

    With the approach of  a simple 1-method interface, I can just ignore implementing the interface.  No confusion, and no risk of getting things out of sync (adding a body and then forgetting to remove the NoOp.)

    I think that people will forget to add the NoOp annotation, resulting in horrific performance.  That''s not so bad for people with big data sets at first - they''ll figure it out quickly.  But for systems that start small and grow, at first, the lack of the NoOp won''t matter with small data sets, but over time, as data sets get big, the workload increases (with a onDelete in particular as you have to load in data into memory rather than just deleting it).  I wonder if it will be obvious to people to go back and look at their code (which could be pretty old), or will they focus on their DB configuration and tuning, to no avail.

    I also don''t fully buy the comparison to the 1-method interface being a marker, since it indicates and requires implementation of functionality in the class, rather than a ''quality'', if that makes any sense.

    geir'
  replies: []
- id: 1801
  author: Bob Lee
  date: '2004-07-16T07:11:15'
  content: This is a container optimization. Why expose the user to it at all? Can't the container look at the bytecode and determine if the method is a no-op?
  replies: []
- id: 1802
  author: Patrick Linskey
  date: '2004-07-16T09:19:03'
  content: 'The container could, and we used to take this approach. However, this quickly starts to become pretty ugly. What about if you have some other tool in your toolchain that inserts code (say, profiling information) into the block? The nice thing about either approach (fine-grained interfaces or a @NoOp that is treated as a language extension) is the explicitness. Inferring that "empty code block means no delete callback" is not necessarily valid. For example, imagine putting a breakpoint on the method. You''d be at least a little surprised that the breakpoint wasn''t triggered.

    Now, one of the big downsides of a @NoOp approach is that this relies on the language extension becoming sufficiently broadly adopted that all the relevant systems that interact with the disappeared method know what to do with the language extension. This is an adoption / standardization problem, and one that Java has thus far pretty much entirely avoided, since there is only one codebase for the Java language (insert C# joke here), but is something that might become more of an issue as annotations open the door for language extension.

    -Patrick'
  replies: []
---

I have been exchanging emails with Patrick Linskey recently about [the thread on TheServerSide.com](http://theserverside.com/news/thread.tss?thread_id=27303) discussing callback interfaces for EJB 3.0.  Patrick sides with the proponents of "one method per interface" but he is the first one to produce a convincing argument:

> So if you have lots of business logic in your jdoPreDelete() callback   
>  (validating that the delete is allowed, deleting related external   
>  resources, etc.), and you do a bulk delete and *don't* bring the   
>  objects into the VM in order to execute the callback, then some of the   
>  intended consequences of a delete may not be performed. 

In short, Patrick is saying that it can be important for the container to determine if the callback it is about to invoke is a no-op or if it contains an implementation written by the user, because the container might have some potentially expensive work to do before invoking the said callback.

If each callback is encapsulated in its own interface, making this decision becomes a simple matter of testing instanceof on the object:

```java
if (o instanceof ILoadCallback) {
  ((ILoadCallback) o).onLoad();
}
```

The assumption here being:  if the developer declared she implements this interface, she is going to provide an implementation for the method it contains, so it should always be called by the container.  Therefore, there are indeed cases when you need to know whether the method you are going to invoke is empty or not.

But are interfaces the best way to solve this problem?

The more I thought about it, the more this problem reminded me of marker interfaces (Serializable, Cloneable), which solve a real problem by pushing the usage of interfaces beyond what it was designed for.

Then it occurred to me that annotations would probably a better way to do this.  For example, we could create a simple @NoOp annotation:

```java
import java.lang.annotation.*;
@Retention(RetentionPolicy.RUNTIME)
@Target(java.lang.annotation.ElementType.METHOD)
public @interface NoOp {
}
```

All the classes that implement the callback methods with empty implementations can be flagged with the @NoOp annotation:

```java
public class LoadCallbackAdapter implements ILoadCallback {
  @NoOp
  public void onLoad() {}
}
```

And any class that extends this adapter will simply override the method without the annotation:

```java
public class MyClass extends LoadCallbackAdapter {
  public void onLoad() { /* ... */}
}
```

The nice thing about this technique is that it is totally transparent to the user:  they don't need to know about the @NoOp annotation at all.  But the container will be looking for it, and if it can't find it, it will invoke the callback:

```java
Method m = o.getClass().getMethod("onLoad", null);
if (null != m.getAnnotation(NoOp.class)) {
  // invoke o.onLoad()
}
```

Personally, I find this approach cleaner than using interfaces, which pollutes the type system of your object to address a concern that you should know nothing about.
