---
title: Stylistic issues
date: '2003-08-28T09:41:13'
slug: stylistic-issues
categories:
- Java
comments:
- id: 434
  author: Cameron
  date: '2003-08-28T10:36:03'
  content: 'Yeah, your code is arguably better in this particular example. Except it should have been ''aoResult'' (result is an array of objects).

    Smartypants.

    However, having more than one return doesn''t bother me in Java quite as much as it did in C++. It''s not something that I avoid religiously.'
  replies: []
- id: 435
  author: ''
  date: '2003-08-28T15:30:35'
  content: Respectfully respected? Beautiful :)
  replies: []
- id: 436
  author: Olivier
  date: '2003-08-29T00:06:00'
  content: 'The "Only one result" rule is good, but it oftens goes agains the "Deeply nested if statements are hard to read" rule. Then, you start having to comment your closing brackets, ...

    Besides, I find it elegant to treat these "weaker" post-conditions at the beginning of the method and once for all.'
  replies: []
- id: 437
  author: iwaku
  date: '2003-08-30T02:58:37'
  content: '"note that I respectfully respected your insane indentation scheme"

    Really insane.'
  replies: []
- id: 438
  author: Daniel Farinha
  date: '2003-08-30T14:19:12'
  content: 'Well I''m glad I''m not the only one using the ''insane'' indentation :)

    Hang in there Cameron, we''re a dying breed but still alive and kicking ;)'
  replies: []
- id: 439
  author: ''
  date: '2003-09-01T03:16:50'
  content: You guys haven't got anything better to do?
  replies: []
- id: 440
  author: Richard
  date: '2003-09-01T15:32:38'
  content: In the end - who cares? It's really a matter of personal taste and so you set up your IDE to format it the way you like it and if someone else has to work with it, they can just format it the way they like it.
  replies: []
- id: 441
  author: Das
  date: '2003-09-04T11:37:31'
  content: 'Well, I have no problems "cutting and pasting" the cuddled-catches. You just have to paste *over* the closing brace of try. The closing brace will be replaced by the catch''s first brace.

    --Das'
  replies: []
- id: 442
  author: baliku
  date: '2004-02-10T19:54:53'
  content: 'I followed the link to all your ads

    Nice to get your information

    that''s what I want to tell'
  replies: []
- id: 443
  author: lose weight with zone diet
  date: '2004-11-04T13:11:36'
  content: 'Hi - I was looking for some political sites with articles on the recent US election and found your nice site. The comments from others on here are pretty good so I just thought I''d add my thoughts also!

    Elaine Cooper'
  replies: []
- id: 444
  author: Google
  date: '2004-11-14T14:13:20'
  content: 'Could it be that conservatives tend to spend more time at home?

    Search Google http://www.google.com/'
  replies: []
- id: 445
  author: Google
  date: '2004-11-17T02:24:04'
  content: 'Now that these (fairly damning) facts have been documented by records obtained under the FOIA (AFTER the 2000 election by the way), we should focus on the even more damning issues:

    Search Google http://www.google.com/'
  replies: []
- id: 446
  author: yaoi
  date: '2004-12-10T13:27:00'
  content: Merci pour l'information ici
  replies: []
- id: 447
  author: kayuar
  date: '2005-10-17T23:36:48'
  content: just lunch new site
  replies: []
- id: 448
  author: turnkey business
  date: '2006-01-08T16:31:59'
  content: You guys haven't got anything better to do?
  replies: []
- id: 449
  author: Bo Wen
  date: '2006-05-15T22:49:49'
  content: 'On the contrast, I think multiple returns is easier to understand the flow.  If you have many if-else, then single return assignment may soon be buried.  But if a return can be made immediately after a condition is met, it is a clear flag that its flow ends there and it is easier to track.

    Anyway, this is really kind of personal preference.'
  replies: []
---

Comments on a few stylistic issues I noticed these past days.

[Ted](http://www.sauria.com/blog/) talks about "[cuddled else's](http://www.sauria.com/blog/2003/08/28#533)" (what a cute name):

> `} else {   
>    
>  ` AKA, the "cuddled else". I never heard of a name for this before. I use this style extensively when I'm programming in Java, but it and all the close brackets use up a lot of whitespace. 

This convention is recommended by Sun, but I usually prefer to have the closing brace and the next instruction on separate lines.  Nothing religious or artistic about this preference, the reason is pragmatic:  easier copy and paste.

For example, suppose you need to move the catch block to a different place in your source.  Compare the copy/paste operation between the following two formattings:

> ` try {  
>    // ...  
>  } catch {  
>    //...  
>  } `

and

> ` try {  
>    // ...  
>  }  
>  catch {  
>    //...  
>  } `

[Cameron](http://freeroller.net/page/cpurdy) posted the [following code snippet](http://freeroller.net/page/cpurdy/20030827), that I would also write slightly differently:

> ` public Object[] toArray()  
>    {  
>    int cItems = size();  
>    if (cItems == 0)  
>    {  
>      return EMPTY_ARRAY;  
>    }  
>    
>    Object[] aoItem = new Object[cItems];  
>    // ...  
>    return aoItem;  
>    } `

I have two remarks about this code:

  1. I tend to avoid multiple returns in the same method.  They make it harder to follow the logic behind the flow and it's also inconvenient to break at the end of the method in order to introspect the returned value.  
 
  2. I always store my returned values in a variable called "result" (one of the few things I liked about Eiffel).  This way, I can highlight this variable and pinpoint immediately where it is assigned.



Therefore, I would rewrite Cameron's code this way:

> ` public Object[] toArray()  
>    {  
>    Object result = EMPTY_ARRAY;  
>    int cItems = size();  
>    if (cItems >= 0)  
>      {  
>      result = new Object[cItems];  
>      // ...  
>      }  
>    
>    return result;  
>    } `

(Cameron, note that I respectfully respected your insane indentation scheme).
