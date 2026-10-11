---
title: Think globally, invoke locally
date: '2008-05-27T11:40:44'
slug: think-globally-invoke-locally
categories:
- General
comments:
- id: 7280
  author: Robbie Vanbrabant
  date: '2008-05-27T12:41:17'
  content: I agree that hiding remoteness is a bad idea. We should never allow for deliberate decisions to become accidental decisions. Which is also why I like the idea of API's having a performance signature (e.g. tinyurl.com/5zuk2d) as a part of their documentation.
  replies: []
- id: 7281
  author: Paul Brown
  date: '2008-05-27T12:53:55'
  content: 'Seems like you''d like some of the concepts that are part of Jini, where an implementation might be a concrete local object or might be a stub to a remote implementation via RMI.

    That said, the idea with Erlang''s hiding of locality is that scaling across machines is then transparent to the programmer, and if you buy that locality is worthy of abstraction, then I''d suggest just transforming an argument for garbage collection versus explicit memory management into an argument in favor of hiding locality.'
  replies: []
- id: 7282
  author: Dave
  date: '2008-05-27T13:13:59'
  content: The difference with Erlang is that an Erlang program implicitly assumes that all message sends, local or remote, are fallible, and that code needs to be written to handle errors for any message send.  Once you've bitten that bullet (and the bullet of no shared mutable state), then hiding locality is a lot less dangerous.  Note also that Erlang philosophy makes error handling "easy", in as much as you mostly just crash the erroring process and assume some supervisor process will reboot it, fresh and clean.  This all might be overkill for many systems, but it's a fairly well-accepted way of designing systems where extreme robustness is necessary.
  replies: []
- id: 7283
  author: Steven Jackson
  date: '2008-05-27T13:18:56'
  content: '> should write our code assuming that *any* call

    > can potentially be remote?

    The Elrang assumption is that cross-process calls are potentially remote, not that *any* call is remote.'
  replies: []
- id: 7284
  author: Peter Bona
  date: '2008-05-28T01:55:51'
  content: 'The real question is how the difference between remote and local call is expressed in the code and that is partly matter of taste.

    Some like to have a checked NetworkNotAvailableException, so he can deal with it beforehand. Some don''t want this but like to have a unchecked exception so the code doesn''t have to be cluttered by unnecessary try catch blocks.

    I think we all agree that making a difference is important, but it is debatable at what level it should be tackled. Erlang decided to have an implicit unchecked exception for each cross-process method.

    It seems you like the checked exceptions.'
  replies: []
- id: 7285
  author: Wei Ling Chen
  date: '2008-05-28T07:35:11'
  content: 'Hi Cedric,

    My name is Wei-Ling Chen and I''m the Community Coordinator for DZone. I''d like to talk to your about our MVB program, but couldn''t seen to find your email address. Could you please send shoot me a email when you get a chance? :).

    Thanks!

    -Wei Ling'
  replies: []
- id: 7286
  author: Miguel Moquillon
  date: '2008-05-28T07:58:53'
  content: 'Yes and no.

    In fact, if our language is built upon message-passing, we have to take into account a possible message sending failure, whatever it is sent remotely or locally. So, the language have to provide elegant features on such failure reprise.

    A look on a such language/framework category would show how elegant and efficient way they perform in the distribution computing.'
  replies: []
- id: 7287
  author: Dan Creswell
  date: '2008-05-30T07:53:52'
  content: '"The difference with Erlang is that an Erlang program implicitly assumes that all message sends, local or remote, are fallible, and that code needs to be written to handle errors for any message send. Once you''ve bitten that bullet (and the bullet of no shared mutable state), then hiding locality is a lot less dangerous."

    It may be less dangerous but it''s still problematic - you have to consider not only failure but latency and throughput.  A message sent across a backplane between two processors has quite different characteristics from a message sent across a WAN or LAN.'
  replies: []
- id: 7288
  author: Steve Vinoski
  date: '2008-06-01T22:20:28'
  content: '@Cedric: it''s strange that you''ve attempted to imply that I don''t know about Jim Waldo''s paper. I not only have referenced that paper quite often over the years in my own publications, but I used to work with Jim and Geoff, and I also interacted with all the authors around the time they published the paper due to some joint development work going on back then between HP and Sun. My wife and I even used to babysit Geoff''s kids (they lived two doors down from our house at the time).

    Now, as for Erlang, the following two lines of Erlang seem to be quite different from each other:

    module:func(args)

    Pid ! Msg

    The first is a local call, the second is an interprocess call. Two very different mechanisms for two very different purposes.'
  replies: []
- id: 7289
  author: Cedric
  date: '2008-06-01T22:24:14'
  content: 'Steve, this still doesn''t address my initial question:  when invoking a method on a process, how can I tell whether that process is remote or local?

    Both the paper and Joe himself claim that failing to differentiate these two cases makes it impossible to write efficient code.'
  replies: []
- id: 7290
  author: Steve Vinoski
  date: '2008-06-01T22:58:19'
  content: '@Cedric: if you want to know where a process is, you can call erlang:node(Pid) where Pid is the process ID. Calling erlang:node() returns the name of your own node, and you could compare them if you really wanted to. But I believe you''re missing the point. As I showed above, a local call and an IPC call are completely different. Whether an Erlang process is local on the same node or remote on another node, the same distributed system failure modes are in effect, and you deal with them the same way, using process linking, supervisors, etc. It''s the failure modes that matter, and Erlang clearly and cleanly separates them.'
  replies: []
- id: 7291
  author: Sony Mathew
  date: '2008-06-02T12:01:58'
  content: 'I think the following are definitely problematic.

    -Always assuming Remote (bad).

    -Always assuming Local (worst).

    However, the following is fundamental to all large scale operations and is needed.

    - Assuming specific stereotypes as Remotes (e.g. a Stateless "Service").'
  replies: []
- id: 7292
  author: Stephan Schmidt
  date: '2008-06-04T22:10:02'
  content: '"The first is a local call, the second is an interprocess call."

    This doesn''t answer the question, the talk was about RPC not IPC.

    Peace

    -stephan'
  replies: []
- id: 7293
  author: Jabber Dabber
  date: '2008-06-08T10:35:07'
  content: '>  the talk was about RPC not IPC.

    Steve is using the Erlang definition of process, not the operating system definition.  The target of a message send might be in the same operating system process, a different operating system process on the same machine or a process on a different machine.   Erlang treats them all the same.  RPC == IPC as far as Erlang is concerned.'
  replies: []
- id: 7294
  author: Cedric
  date: '2008-06-08T10:50:31'
  content: 'And that''s exactly the problem:  as Joe admitted himself, it''s not possible to write efficient code if you don''t know whether the process you are talking to is running locally or remotely.'
  replies: []
- id: 7295
  author: Ramzi Benyahya
  date: '2008-06-24T22:56:04'
  content: 'There''s a clear difference between:

    Result = rpc:call(..),

    and

    Result = Pid ! {call,..}, receive X -> {ok, X} after Timeout -> timeout end.

    It doesn''t matter if Pid is a remote process, just like in JMS it doesn''t matter that the one that is listening on the target queue is on the local VM or a remote one, the performance of message sending doesn''t take that on account.

    What really matters is it''s you who decide that the call has failed or not. This is not really the case with RMI for example, once you did the call, you''re trapped there until a value is returned or an exception is thrown, there''s no escape unless you deal with it in a concurrent way and it''s not easy to do so.

    JMS and other asynchronous solutions, offer more control, so you can emulate the same mechanism using send and receiveWithin(Long).

    However, if you want to grow your solution from local to distributed seamlessly, you need to add an abstract layer that doesn''t hide distribution but deals with it and plug for example a JMS solution later as a concrete implementation of this abstraction.

    In Erlang, (and the Actor Model in general) the abstraction is in the notion of processes and asynchronous message sending, so you don''t need to know whether the process is local or remote, all you need is a way to specify your requirements and to deal with failure when it happens. in : ''P ! Call, receive .. after Time -> .. end'', it doesn''t matter if P is local or remote, because you''re explicitly dealing with the failure case.

    Howeve, you''re totally powerless with  : try { remote.rmiCall(..) } catch (RemoteException e) { // ok what time is it now? }'
  replies: []
---

Recently, both Steve Vinoski (CORBA veteran) and Joe Armstrong (creator of Erlang) have come out strongly against Remote Procedure Calls ([here](http://steve.vinoski.net/blog/2008/05/24/defending-something-other-than-rpc/) and [here](http://armstrongonsoftware.blogspot.com/2008/05/road-we-didnt-go-down.html)). 

First of all, it seems to me that when they say "RPC", they really mean "remote procedure calls that try to pass up as local procedure calls". Second, this message is not exactly new: ever since the seminal paper ["A note on distributed computing"](http://research.sun.com/techrep/1994/abstract-29.html) came out (in 1994!), we have known that trying to disguise remote calls as local calls is wrong, and some of the principles described in this paper were consolidated over the years into ["The Fallacies of Distributed Computing"](http://en.wikipedia.org/wiki/Fallacies_of_Distributed_Computing), which is also a must-read for anyone interested in this space. 

This paper gave birth to RMI and to a whole generation of distributed frameworks based on this very principle: remote calls throw a checked exception in order to differentiate them from local calls and to force the caller to deal with the possible failures that can result from sending a call over a network. 

The outrage justifying this string of blog posts is fourteen years overdue, but fine, after all, it's an important lesson and it doesn't hurt to repeat it. 

Where I'm a bit stumped is that it seems to me that Erlang is built on exactly this false premise and therefore, repeating the errors we made before that paper came out. 

The main point behind Erlang's philosophy about distribution is that you never really know if a process you are calling is remote or local. In Erlang, you should assume that anything can potentially be remote. I've always been puzzled by this but I hadn't put my finger on it until I read the blog posts mentioned above. 

Joe seems aware of this problem: 

> If programmers cannot tell the difference between local and remote calls then it will be impossible to write efficient code. 

So why can't I differentiate a remote process call from a local one in Erlang? 

Distributed computing is hard, but is the answer really that we should write our code assuming that *any* process call can potentially be remote? Isn't this taking this idea to the extreme? One thing that I like with RMI and other similar distributed frameworks is that I have a very precise knowledge of what is remote and what is local, and I can optimize in consequence. On top of that, exceptions let me know when remote processes have died and I can act in consequence (like Erlang's supervisors). 

What am I missing?
