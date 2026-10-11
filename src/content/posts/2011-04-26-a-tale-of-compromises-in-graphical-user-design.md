---
title: A tale of compromises in graphical user design
date: '2011-04-26T13:32:47'
slug: a-tale-of-compromises-in-graphical-user-design
categories:
- Java
- TestNG
comments:
- id: 8903
  author: Matthew Hall
  date: '2011-04-26T14:33:56'
  content: 'A few things you''re doing wrong with respect to Eclipse/SWT:

    1) Performing a long running operation on the UI thread.

    A SWT app is unresponsive any time event handlers are running.  If you event handlers run very quickly this will be unnoticeable.

    But if there''s even a chance something could take a while, you should fork that to another thread.  In RCP the preferred method is to spawn a Job.  Make sure to report back progress through IRunnableWithProgress / IProgressMonitor interfaces, and check periodically to see if the user canceled the job (by clicking the stop button in the Progress view).

    http://www.eclipse.org/articles/Article-Concurrency/jobs-api.html

    2) Using a regular tree that could potentially contain thousands (or millions) of items.

    Use a SWT.VIRTUAL tree.  This goes hand in hand with filtering your results on another thread.  If you wanted to go to the trouble, you could populate the tree as you go while filtering.  The benefit to a SWT.VIRTUAL tree is that changing the item count only redraws the scroll bar and any items currently visible.  No items offscreen have to be rendered.

    http://www.eclipse.org/articles/Article-SWT-Virtual/Virtual-in-SWT.html'
  replies: []
- id: 8904
  author: Matthew Hall
  date: '2011-04-26T14:35:44'
  content: 3) If using JFace Data Binding, use observeDelayedValue so the user has a chance to stop typing before you kick off the filter job
  replies: []
- id: 8905
  author: Cedric
  date: '2011-04-26T14:58:58'
  content: 'Matthew,

    I believe I already addressed these points in the post:

    1) I am aware of virtual trees and I might use this at some point.

    2) All the processing is already being done in a separate thread, the problem is creating a million TreeItems (which needs to be done on the EDT, obviously). When the search is done, I am posting this runnable on the EDT with asyncExec(). Except for virtual, there is simply no way to avoid this cost, nor is it possible to avoid starving the other tasks waiting to be processed on the EDT. I could space out the creation of TreeItems a bit more but then the tree will take forever to be created.'
  replies: []
- id: 8906
  author: Matthew Hall
  date: '2011-04-26T17:29:13'
  content: If that's the case, then the lack of virtual trees is probably your entire problem.
  replies: []
- id: 8907
  author: klr8
  date: '2011-04-26T22:15:29'
  content: 'What also surprised me was the following quote from the user:

    "In case I don??t restart eclipse for weeks.."

    Wow!'
  replies: []
- id: 8908
  author: Nicolas Duboc
  date: '2011-04-27T10:09:43'
  content: 'My first reaction is What''s the point of displaying a tree of 1M items?  I can hardly imagine having a real usage of that as a user.

    So my idea would be to try to create a sort of ''sparse'' tree when its size reaches a threshold. With elipsis for subtrees whose status are equivalent.  On the idea of the Eclipse problem view which only displays the first 100 issues of 20000 in my workspace. (Yes I saw a workspace with so many issues...)'
  replies: []
- id: 8909
  author: Micha? Gruca
  date: '2011-04-28T02:05:51'
  content: 'Hi Cedric,

    I never created plugin for eclipse nor I have created anything in SWT, however I would try to get there some kind of pagination. Get 100 first matching results and display message that there are more, but in order to see them, user have to provide more specific search query.

    Regards,

    Michal'
  replies: []
- id: 8910
  author: Robert Konigsberg
  date: '2011-04-30T05:01:39'
  content: Cedric, which part of the operation takes the most time? The UI or the search algorithm? I wouldn't just put the results in another thread. Make it a Job, give progress and respect the cancellation API. Giving the users that might make a big difference.
  replies: []
---

I recently received an alarming bug report about the [TestNG Eclipse plug-in](http://testng.org/doc/eclipse.html): 

> I'm talking about TestNG plugin for eclipse and its performance. Since some time this plugin contains new feature - searching already finished tests. (just "Search: " with a field). Performing this search makes that my eclipse does not response for minutes. After all I can see as a result - all historical run tests (according to my search request). 

A bug that would cause Eclipse to be unresponsive for minutes is certainly unacceptable, so I tried to dig into this problem quickly. However, I was still not quite sure what this user was doing, and since I use and I work on the plug-in on a regular basis, the problem have been happening under some very specific and unusual circumstances. A few emails later, I received the following clarification: 

> Yes, I'm talking about the Search box and filtering. 'historical data" means all collected test results. In case I don't restart eclipse for weeks and start million tests (via providers) performance plays here important role. In fact I don't need the search box feature. Simply today I filled it up by mistake and lost half an hour... First to find, second to remove from the box... 

I have to say I laughed when I read "I filled it by mistake and lost a half hour". Okay, maybe not very funny from this user's stand point, but funny because I can see how having a million test instances could cause the plug-in to become unresponsive. 

The problem is caused by the "Search filter", a feature that appeared in the plug-in a few months ago: 

![](http://testng.org/pictures/search.png)

When you type characters in this text box, the results displayed in the tree get filtered and only the nodes that match the text are shown, a functionality that is very convenient when you want to inspect the results of a specific test. 

This poor user created a test run with one million test instances, accidentally typed a letter in the search box and then the plug-in diligently went through the million nodes, retaining only those that contain this letter. Obviously, deleting this character will cause the exact same thing to happen, except that the entirety of the test suite will be restored in the tree view. 

This code is fairly naive and not really optimized to account for the creation of a million `TreeItem`s, so I wasn't really surprised to hear that doing so would cause Eclipse to become unresponsive for a while. After all, the addition of these SWT objects has to be made on the Event Dispatch Thread at some point, and whether you add them one by one or in bulk (which is what the plug-in is doing), it's pretty much guaranteed that the dispatch thread will get severely hogged. 

It's a pretty simple problem with a few obvious solutions, the hard part is finding out the best course of action. 

My first thought at trimming down the solution space was to decide that a test result featuring millions of objects was an unusual case and that optimizing this part of the code should therefore not be my priority. But just for the sake of argument, I explored several ways of doing so and I came up with various ideas, among which doing some precaching of subwords (for example, so I can match three letter words to nodes very quickly) or by virtualizing the tree. I'm sure there are plenty of other techniques available and I'm definitely interested in hearing about them. 

But for now, I decided to take a lighter approach, so I made two changes: 

1) When I detect that the tree contains more than a certain number of nodes, I configure the text box not to start filtering until it has at least three characters. This addresses the problem of accidentally typing a letter in the box, and it also guarantees that when the filtering is triggered, it will match fewer nodes (since these will have to match three letters instead of just one). Obviously, the code sill has to go through the million nodes. 

This looks simple enough but I couldn't help trying to devise clever ways of actually calibrating these numbers: when should this behavior be triggered? 1000 nodes? 10,000 nodes? Also, should the minimum number of characters be a function of that number? For example, require two characters for 1000 nodes but three for 10,000 nodes? How about using a log in base 1000 to create these pairs of values? Or should the base of the log be 50? 

2) I added a new "Clear results" icon to the toolbar: 

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/clear-results.png)

Clicking it wipes the results displayed in all the panes, which guarantees that typing text in the search filter will do nothing (the search text box actually gets disabled). 

The only concern I have with this approach is that users might get confused to see that sometimes, the search filter will activate with one character and other times, it requires three. They might even think that the search filter is broken if nothing happens after typing two characters. 

You can work around this problem by providing a tool tip to the text box or, better, display a helpful text tip in a greyed out font inside the text box itself, saying something like _"[Type at least three characters to search]"_. 

I found it interesting how such a simple problem can offer so many different avenues to solve it and how each one comes with benefits and costs that need to be carefully weighed. I'm hoping to have struck a correct balance with the current approach, one which solves the problem at hand without impacting most of the regular users too adversely.
