---
title: Convenient refactorings in Eclipse
date: '2005-08-29T09:00:00'
slug: convenient-refactorings-in-eclipse
categories:
- Java
comments:
- id: 4171
  author: Greg Ostravich
  date: '2005-08-30T10:25:35'
  content: 'I went to a refactoring session at the Agile 2005 Conference in Denver where the presenter did this.

    Is it a new feature (to replace all occurrences with the new method call) or was it available in previous version of Eclipse.  I agree this is pretty cool.

    I think for the same reason you should cut and paste instead of retyping something twice so you avoid mistakes, you should also refactor using tools within your IDE to avoid making errors during manual refactoring.'
  replies: []
- id: 4172
  author: Rob
  date: '2005-08-30T11:55:38'
  content: I'm pretty sure that the feature was available in Eclipse 2.1 and up.  I use WSAD at work (based on 2.1), and it does the replace all occurences thing with extract method.
  replies: []
- id: 4173
  author: Pepe Iborra
  date: '2005-08-30T12:12:39'
  content: This isn't necessarily targeted at Cedric, but if you are an Eclipse Java programmer and don't know about these shortcuts yet, then you'd better fing a better fit for your talents
  replies: []
- id: 4174
  author: Cedric
  date: '2005-08-30T12:25:56'
  content: 'Pepe,

    Everybody learns shortcuts at their own pace and you can be sure there are plenty of people who know more Eclipse shortcuts than you.  That doesn''t make them, or you, a better or worse Java developer.'
  replies: []
- id: 4175
  author: Keith Lea
  date: '2005-08-30T13:46:45'
  content: I think it's very strange that any serious Java developer is not completely familiar with these refactorings in IDEA or Eclipse. I use Inline Variable all the time, for example when I want to extract a method but I don't want to have to pass the variable as a parameter to the extracted method.
  replies: []
- id: 4176
  author: Bruno Patini Furtado
  date: '2005-08-30T14:28:15'
  content: '''Introduce Parameter'' it'
  replies: []
- id: 4177
  author: ''
  date: '2005-08-30T15:18:54'
  content: The thing I find most disturbing is Cedric's choice of font!
  replies: []
- id: 4178
  author: Pepe Iborra
  date: '2005-08-30T15:19:39'
  content: 'Sorry Cedric, I didn''t notice how hostile my comment was. I wanted to mean that the refactorings mentioned should be well known for Java developers, as Keith Lea comments too, not just the shortcuts. In any case I share your opinion, Eclipse is fairly even if it lags behind Idea in the variety of refactorings it offers.

    I wonder why they have received so little attention in the 3.1 release. There aren''t many new ones apart from Java 5 specific refactorings. I''d like to see improved Pull Up, an Insert SuperClass one, and others I can''t remember right now. Idea has a few nice ones too.

    Given Eclipse very nice API (and source code), I bet it wouldn''t be that hard to create your own refactorings.'
  replies: []
- id: 4179
  author: Bitter
  date: '2005-08-31T03:34:39'
  content: It's important to make sure you don't leave that checked accidentally -- Extract Local Variable, for example, can't tell that your two calls to factory.newThingy() shouldn't be collapsed into one call.
  replies: []
- id: 4180
  author: Knube
  date: '2005-09-02T08:12:55'
  content: 'I have another Eclipse Tip I just found out :D

    It is cool !

    I was debugging code and was stepping into a class of a library where you got the source code... now there I would like to insert a log. Well Aspect J would do this easy I think but sadly I can''t use it now. - Well now what I have done is added breakpoint where I wished to insert code, opened the breakpoint properties and added this code segment to the condition :

    {

    System.out.println("*** "+name+" / "+obj.getClass().getName());

    return false;

    }

    Well it works - it never stops at the breakpoint but all the code gets executed !!!

    Very useful to know.. sigh *'
  replies: []
- id: 4181
  author: anonymous
  date: '2005-09-06T05:59:50'
  content: 'Isn''t the last one wrong?

    The orginal code instantiated one label, the refactored code instantiates two.'
  replies: []
---

There is a class of refactorings that I am using very often in Eclipse and since I recently learned a bit more about it, I thought I would share with the rest of the community.

The refactorings are `Extract Method` (`Alt-Shift-m`) and `Extract Local Variable` (`Alt-Shift-l`).

Their use is fairly straightforward, but I discovered by accident recently that Eclipse is actually more clever than I thought:  when the code segment you are trying to replace with a method is found at several locations within your class, the refactoring is automatically applied to all of them.

Here is an example where the three highlighted lines are also repeated in the method above: 

Before  |  After  |  ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/extract-method2.png) |  ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/extract-method3.png)  
---|---  
  
Similarly, you can do the same by introducing a local variable to capture an expression repeated several times:   
  Before  |  After  |  ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/extract-local2.png) |  ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/extract-local3.png)  
---|---  
  
Finally, as a curiosity, notice that you can do the opposite as well:  remove a local variable and replace it with the expression it was assigned to:

Before  |  After  |  ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/inline-local2.png) |  ![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/inline-local3.png)  
---|---  
  
Admittedly, this refactoring is fairly rare but I have used it a few times already for J2ME programming, where every byte counts.  If you see a local variable that is only being used once in your code, you should probably consider inlining it.

These refactorings in themselves are pretty benign until you learn their keyboard shortcuts:

  * **`Alt-Shift-m`** for "Extract Method"
  * **`Alt-Shift-l`** for "Extract Local Variable"
  * **`Alt-Shift-i`** for "Inline Local Variable"



Memorize these shortcuts and very soon, you will be using them everywhere.
