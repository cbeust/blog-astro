---
title: Learning to like early aborts
date: '2005-08-01T09:29:52'
slug: learning-to-like-early-aborts
categories:
- Java
comments:
- id: 4082
  author: Stephan Schmidt
  date: '2005-08-01T09:43:22'
  content: Exactly the same with me, I prefer single returns in methods but for some time now also use returns for early aborts. Both is consistent with higher readability of source code.
  replies: []
- id: 4083
  author: SotA
  date: '2005-08-01T09:59:16'
  content: 'I like to take a pragmatic approach to this question.

    Use the style that makes the execution of the operation more readable and understandable.

    For example I changed the style, I implement equals()-operations. I used to define a boolean value ''equal = false'' at the beginning an return the modified value at the end, but I think it''s better understandable to leave the operation as soon as you can say, that the objects are not equal.'
  replies: []
- id: 4084
  author: Mikhail
  date: '2005-08-01T10:07:32'
  content: 'I also a big fan of single return functions and I do not give up. In order to combine a single return with early aborting I use the the following trick:

    do {

    &nbsp;&nbsp;&nbsp;&nbsp;if (b == null) { // abort

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;

    &nbsp;&nbsp;&nbsp;&nbsp;}

    &nbsp;&nbsp;&nbsp;&nbsp; ... // do something useful

    } while (false);

    ... // cleanup'
  replies: []
- id: 4085
  author: Jonathan Aquino
  date: '2005-08-01T11:25:42'
  content: Go guard clauses!
  replies: []
- id: 4086
  author: Emmanuel Pirsch
  date: '2005-08-01T11:55:37'
  content: 'I was a big fan of single return a while back... back in the days of no "finally" clause (that was before java).

    But with the "finally" clause, I do not care very much for single return. "finally" allow you to have a kind of single return. Sometimes, you want to do some common clean-up whatever the control flow in the method. Then you can use mulptiple returns and have the clean-up code inside the finally clause as it will be executed whenever you return normally or not.

    However, I prefer early returns than returns in a middle of block inside of a block inside of a block inside of a ...

    It all comes down to code readability and common sense. Sometimes, it''s easier to understand a method with a single return, sometime it''s better with multiple early returns.'
  replies: []
- id: 4087
  author: Charlie Tuckey
  date: '2005-08-01T12:40:19'
  content: 'Cedric, for the most part I agree with you. One thing I also like, and always do, is name the ''result'' variable "result" like you do in your examples. That way you can easily tell when the function''s result is being altered.

    I started doing this when I quit writing multi return point functions. When I see:

    &nbsp;&nbsp;&nbsp;&nbsp;result = someVal;

    in the function code I can, with some care, mentally replace that with:

    &nbsp;&nbsp;&nbsp;&nbsp;return someVal;

    I find this idiom helps combine the advantages of ''multi return point'' and ''single return point'' functions.

    Of course, this only works if the function is returning a value.'
  replies: []
- id: 4088
  author: Stock
  date: '2005-08-01T12:41:26'
  content: I use to be a big single return nazi as well.  Originally I adopted this style due to the immense amount of multi-threaded C code I was writing in my OS/2 days.  I needed to make sure that I was properly releasing semaphores and whatnot and the only way to do it safely was with single returns.  I adopted the same practice for Java for the sake of readability (I don't do as much multi-threaded stuff in Java) but quickly found that it isn't always very readible.  I much prefer the short-circuit method.  So far I haven't found it to be a problem.
  replies: []
- id: 4089
  author: R.J.
  date: '2005-08-01T13:14:35'
  content: 'I agree all too much with this.

    This is why I am almost always against any ''always'' or ''never'' rule when the consequence of not following the rule is simply style - sure, always/never rules sometimes have to exist; but in most cases it is a sign that someone hasn''t seen a particular scenario enough. If you don''t mind, I think I''ll begin using the term ''early aborts'' as I express my distaste for ''single return nazism'' as  Stock called it ;).'
  replies: []
- id: 4090
  author: Radu
  date: '2005-08-01T13:41:55'
  content: 'Well, I''m a fan of multiple return points (multiple =2 or rarely 3). I found it reduces identation :). Leaving joke aside, I find it very easy to follow when you put down your logic as "take down the easy cases first". To find an analogy from game playing, it''s like clearing out all corners/small rooms before walking through the main door.

    I''ve seen both approaches taken to the extreme, and I still find multiple (in the ranges of tens!!) exit points easier to follow than if-else...

    Also with multiple return points, you usually see what happens in front of your eyes (no need to chase the end of the  else if else chain to see if there is extra code involved). I found this also makes it easier to refactor (e.g. extract the code inside the if as a method).You can extract it anyway, but there are better chances the entire code responsible for a certain operation will end up in that method.

    However, I agree with both forms as long as the method is short. It''s when having a 500+ lines method when you really start to question readability...'
  replies: []
- id: 4091
  author: Vincent Mallet
  date: '2005-08-01T13:50:47'
  content: 'I too much prefer guard clauses that cleanly abort early rather than leaving the reader dangling. They instantly explain what conditions need to be met for the method to do useful work.

    There is another case where I tend to prefer multiple returns (altough I had a bigger struggle to let go of the single-return on that one): when a simple method has to partially iterate over a collection to make a decision. For example:

    public boolean containsEmtpy(List&lt;String&gt; names) {

    for (String name : names) {

    if (name.length() == 0) {

    return true;

    }

    }

    return false;

    }

    IMO this construct conveys the idea in a much clearer way rather than the convolution of adding in a ''result'' temp, especially with the java 5 for loop.'
  replies: []
- id: 4092
  author: Anjan Bacchu
  date: '2005-08-01T13:53:01'
  content: 'Hi Cedric,

    Agree with you whole heartedly. On methods that I modify, I do a javadoc WARNING that "this method has multiple return points" when I don''t want(bugs, time, etc) to refactor the code.

    We need an intelligent commenting tool that will look at code and insert an automatic javadoc commenting to this effect so people reading it are fore-warned and kinda gives us a TODOLIST for refactoring in the next release.

    Note :  Eclipse has a way to find out the multiple return points of a method (ALT + SHIFT + O), if you''re visiting new code.

    BR,

    ~A'
  replies: []
- id: 4093
  author: M. Roller
  date: '2005-08-01T13:59:47'
  content: 'One of the problem that the maxime ''single return'' is trying to solve is to minimize the number of possible control flows through a method.

    Considering, however, that any exception is a possible exit to a method, this maxime does not seem very helpful. To my tastes, forcing ''single return'' often decreases readability (which is very much a matter of taste) and does not really decrease the control flow compexity.

    I find short methods, together with finally, much more helpful in that situation.'
  replies: []
- id: 4094
  author: Robert Watkins
  date: '2005-08-01T16:04:35'
  content: 'Early aborts/guard clauses are a great way of specifying preconditions, ala Design By Contract.

    In a true DBC system, these guard clauses will be executed for you prior to the method call. Lacking DBC, having guard clauses give you a similar benefit: you know that the main body of the code won''t have to worry about bad callers, and the reader of the code is told very clearly what is accepted in the way of incoming parameters (as opposed to having to dig it out of the method, or to find it in the docs)'
  replies: []
- id: 4095
  author: PowersUSA
  date: '2005-08-01T19:55:23'
  content: Mikhail is close. Yes, you can have your shortcut and single exit too. The answer however is not a do-while hack but rather the seldom used labeled block. So rewriting Mikhail example to use a labeled block called
  replies: []
- id: 4096
  author: Brian Slesinsky
  date: '2005-08-01T22:12:55'
  content: The labeled break statement approach seems more complicated than putting the cleanup and trace statement in a finally block.  The only reason I can think of for doing it that way is if you want to log the value being returned.
  replies: []
- id: 4097
  author: ''
  date: '2005-08-02T01:12:43'
  content: 'Easy reading is king. To be forced having a single point of return is not always easy. Many come with deep nested ifs wich a much harder to undestand. Human brain stack size is small

    return name.length() == 0;

    for one of the above examples seems best. If one needs to be clearer

    boolean flag = name.length() == 0;

    return flag;'
  replies: []
- id: 4098
  author: Sebastiano
  date: '2005-08-02T01:27:10'
  content: 'I agree with the comment by Robert Watkins: once you are a user of somebody else''s API you learn eventually to code in a very defensive way. Early aborts are one of the techniques I prefer, since the rest of the code has less nasty things to worry about.

    (Ah, and you may want to improve your comment filter, as it rejects my last name because 4 out of 5 letters correspond to a product to prevent "grossesses").'
  replies: []
- id: 4099
  author: Koo Koo kachoo
  date: '2005-08-02T04:14:12'
  content: 'Dear Sir,

    I would like to renew my request of you to send me some early aborts for doing my final project.

    My last request was not honored. This cause a missing deadline and now I have to do my final project for new.

    Send it to me!

    catbert.L

    ;-)'
  replies: []
- id: 4100
  author: Binil Thomas
  date: '2005-08-02T04:39:17'
  content: 'Reminds me of an egineering lead who worked with a friend few years ago. He was a big fan of the single-exit style. But he took it to extremes. If someone wrote:

    if (b) {

    return x;

    } else {

    return y;

    }

    he would ask it to be changed to:

    return (b? x : y);

    even when b, x and y are complex expressions.'
  replies: []
- id: 4101
  author: Julian
  date: '2005-08-02T05:20:54'
  content: 'In the prior case, I generally say

    Object result;

    if (b) {

    result = x;

    } else {

    result = y;

    }

    return result;

    I''m not a single-return Nazi. However, the company coding standards (which most employees disregard) call for a single return, and the resulting code is more readable.'
  replies: []
- id: 4102
  author: Christian Murphy
  date: '2005-08-02T06:37:25'
  content: I like the human stack hypothesis mentioned by Martin M
  replies: []
- id: 4103
  author: mjasnowski
  date: '2005-08-03T11:06:30'
  content: I prefer the multiple return, early abort approach, especially since it calls more attention to the worst condition that can be returned rather than lumping it in with the rest.
  replies: []
- id: 4104
  author: Rafael Naufal
  date: '2005-08-07T06:58:34'
  content: In my work, the code more prevalent is the second one (with single return point functions), which I think is the better choice. Because the first one increases your cyclomatic complexity. The cyclomatic complexity (a McCabe metric) increases with the number of executon routes. In the first example, the cyclomatic complexity is 4. In the second one (with single return point functions), this number is 2. So I think the second exemple is the better choice, moreover its legibility and flow of execution is better than the fist example.
  replies: []
- id: 4105
  author: ''
  date: '2005-08-27T11:31:04'
  content: 'I vote for the "early abort idiom". So, you avoid to pollute tests that will consider b as a "legal" value with an initial test just to reject an illegal value.

    I also totally agree with Martin M'
  replies: []
- id: 4106
  author: Robert Konigsberg
  date: '2005-09-03T16:05:56'
  content: 'I don''t mind multiple exit points. We gave up single exit points with exceptions. Granted exceptions serve a different role than flow control, but what makes you not do this:

    public int foo(String bar) {

    RuntimeException e = null;

    int rv = ...;

    if (bar == null)

    e = new NullPointerException();

    else

    ...

    if (e != null) throw e;

    return rv;

    }

    instead of this

    public int foo(String bar) {

    if (bar == null)

    throw new NullPointerException();

    int rv = ...;

    ...

    return rv;

    }

    OK this is a bit of an absurd example, but there''s a reason why you throw exceptions early: it''s cleaner looking and documents exceptional conditions up front.

    For methods which have more complex cases than simple parameter validation, it''s, of course, less clear. If you''re method gets to be too large to follow, you can always refactor or document.

    An aside: Rafael suggests that cyclomatic complexity is a factor in his decisions. I know just a little about cyclomatic complexity - what is the difference between multiple exit points and multiple conditional branches within the method itself? I''ll probably ask him directly.'
  replies: []
- id: 4107
  author: Robert Konigsberg
  date: '2005-09-03T16:07:05'
  content: 'I don''t mind multiple exit points. We gave up single exit points with exceptions. Granted exceptions serve a different role than flow control, but what makes you not do this:

    public int foo(String bar) {

    RuntimeException e = null;

    int rv = ...;

    if (bar == null)

    e = new NullPointerException();

    else

    ...

    if (e != null) throw e;

    return rv;

    }

    instead of this

    public int foo(String bar) {

    if (bar == null)

    throw new NullPointerException();

    int rv = ...;

    ...

    return rv;

    }

    OK this is a bit of an absurd example, but there''s a reason why you throw exceptions early: it''s cleaner looking and documents exceptional conditions up front.

    For methods which have more complex cases than simple parameter validation, it''s, of course, less clear. If you''re method gets to be too large to follow, you can always refactor or document.

    An aside: Rafael suggests that cyclomatic complexity is a factor in his decisions. I know just a little about cyclomatic complexity - what is the difference between multiple exit points and multiple conditional branches within the method itself? I''ll probably ask him directly.'
  replies: []
- id: 4108
  author: eckes
  date: '2005-09-27T16:03:36'
  content: 'I use early aborts to avoid indention and to better document the exceptions the function has.

    Also it is a good coding guideline to early abort with explicite returns because inexperienced programmers are more forced to see the return code, especially if catches are involved.

    Bernd'
  replies: []
- id: 4109
  author: eckes
  date: '2005-09-27T16:08:52'
  content: 'BTW:

    if (a==5)

    {

    if (b==6)

    {

    rc = 7; break out;

    }

    if (b==7)

    {

    rc = 1; break out;

    }

    }

    out: return rc;

    PS: http://www.javaspec ialists.co.za/archive/Issue110.html

    (need to break the url because of stupid keyword match on "c|al|s"

    Greetings

    Bernd

    --

    http://bernd.eckenfes.net'
  replies: []
- id: 4110
  author: Noodnik
  date: '2006-09-24T07:41:01'
  content: 'I gave up striving towards single exit points decades ago - after years of struggling with that dogma - for many of the same reasons other folks have cited in the thread above.

    However, one thing I often notice in others'' "exit in the middle" code - which I have NEVER understood - goes something like:

    if (something) {

    return 1;

    } else {

    return 2;

    }

    Why waste the time writing (and reading) the "else" clause, when the "if" clause will never flow through?

    I find:

    if (something) {

    return 1;

    }

    return 2;

    to be the only reasonable approach - much clearer.'
  replies: []
- id: 4111
  author: skin fungus infection
  date: '2006-10-08T08:45:38'
  content: thank
  replies: []
---

I am a big fan of single return point functions.  Instead of:

> public int dilbert() {  
>    if (...) {  
>      ...  
>      return 1;  
>    }  
>    else {  
>      ...  
>      return 0;  
>    }

I prefer:

> public int dilbert() {  
>    int result = 0;  
>    if (...) {  
>      result = 1;  
>    }  
>    return result;  
>  }

There are several advantages to this approach:

  * **Clearer flow of execution**.  You know the final return result will be run, no matter what.  
 
  * **Easier to debug**.  I can set a breakpoint on the return and inspect the returned value.



However, I started questioning this habit in a particular case:  when the failure in a condition should cause the method to abort right away.  Compare:

> public void dogbert1(Boss b) {  
>    if (b != null) {  
>      ...  
>    }    
>  }

with:

> public void dogbert2(Boss b) {  
>    if (b == null) return;  
>    ...  
>  }

Until recently, I used to favor the first form because, again, it made the execution flow more obvious.  If you make the second method more complicated and you start peppering `return`s a bit everywhere, it can become quite difficult to read.

The problem is that `dogbert1()` can also be difficult to read because "it leaves you dangling".

When you read the first `if` in `dogbert1()`, you make a mental note that there might be an `else` case further down and you will keep it in the back of your mind as you read the body of the `if`.  When you start adding several nested `if`s, the mental state you need to store to understand the method is increasing, and if these `else` clauses are going to be empty, I would argue that the "early abort idiom" is probably a better choice.

Having said that, I believe there is a happy medium between these two conventions, so I would recommend using the early abort idiom only when...  well, it really is about an early abort.  If your abort logic has to end up buried down a few nested levels and that it's only one of many other possible cases, you might want to refactor your code so that the abort logic will be featured prominently at the top of your method, as shown above.

What do you think?  In the code you read on a daily basis, what form is more prevalent?
