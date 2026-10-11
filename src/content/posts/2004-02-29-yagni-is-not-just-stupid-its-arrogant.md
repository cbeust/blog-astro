---
title: YAGNI is not just stupid, it's arrogant
date: '2004-02-29T13:40:16'
slug: yagni-is-not-just-stupid-its-arrogant
categories:
- Java
comments:
- id: 1200
  author: Chris
  date: '2004-03-01T04:54:44'
  content: 'Couldn''t agree more....

    ( "Ving-dioux! T''as ben raison!" in french ;D)

    Chris'
  replies: []
- id: 1201
  author: Rafael Alvarez
  date: '2004-03-01T05:19:25'
  content: '"You aren''t gonna need it" is not about making a method private because "no one will use it, never". It''s about not putting a pluggable generic templating mechanism for different kind of outputs if your requirement just state "show static html". YAGNI MUST be used with common sense and following good design principles.

    YAGNI is another way to spell KISS (Keep it simple and Stupid). Of course, it can be used by "lazy" people to try to reject a requirement or just stop thinking about a problem.'
  replies: []
- id: 1213
  author: The Fishbowl
  date: '2004-03-01T05:28:34'
  content: '<strong>Defending YAGNI</strong>

    YAGNI tells us not to implement features blindly or architect clever "flexible" solutions just in case: it asks us to keep in mind that there is a cost to everything, and that we should prioritize development of things we know we need over things we mi...'
  replies: []
- id: 1202
  author: Ross Judson
  date: '2004-03-01T09:09:51'
  content: 'The most jarring example of YAGNI I can think of was the Delphi class libraries...to extend them was very difficult at times, because the coders declared some pretty key stuff to be private.

    Most developers do NOT consider what is necessary to extend their classes through inheritance.  They DO consider interfaces, reasonably well.  In general, extension schemes that rely on the coder to subclass fail fairly miserably or are a pain in the ass.

    Forcing yourself to use interfaces for extensions makes the entire mechanism far cleaner.'
  replies: []
- id: 1203
  author: Alan Green
  date: '2004-03-01T11:17:48'
  content: '> "...but right now, I would suggest you focus

    > on the task at hand so that you can fulfill

    > the number one task that as a software

    > developer, you will be facing at every step of

    > your whole career:  deliver your code on

    > time."

    An eloquent statement of one of the two main driving forces behind YAGNI :) - the other one being the opportunity cost argument.

    An assumption underlying YAGNI is that the source you want to modify will be available when you need it. YAGNI doesn''t seem to work in closed source environments, or for shrink-wrap products, or for source that is not maintained.'
  replies: []
- id: 1204
  author: Andrew Reid
  date: '2004-03-01T14:57:19'
  content: YAGNI == IAP so don't build it now if you're not sure because you might be wasting your time. If it turns out you need it in the future, build it then.
  replies: []
- id: 1205
  author: Ted Neward
  date: '2004-03-01T21:03:56'
  content: I had to, Cedric. Still friends? :-)
  replies: []
- id: 1206
  author: ''
  date: '2004-03-02T01:20:30'
  content: '>>> If a student comes to me and shows me a design that I consider superfluous,

    >>> I am not going to say "You aren''t gonna need it", but more something like

    >>> "Okay, [..] but right now, I would suggest you focus on the task at hand...

    So, without thinking about it, trying to understand what motivated it or even (heaven forbid) doing any research, you would tell them to  put the extra features aside and focus on the core task?

    YAGNI at work. Don''t focus on the extra features until you need to.

    By then, you will also have actually implemented the basic code, and will know how it has changed (IAP) from the design, and you will have more feedback of how your program behaves and therefore be in a better position to choose and design extra features. In many cases, it will turn out that you didn''t need it - or it wouldn''t work done in the way you originally planned, etc - after all.'
  replies: []
- id: 1207
  author: Dan Weinreb
  date: '2004-03-03T01:08:48'
  content: '"YAGNI" appears to mean "Don''t put in stuff that you will not, in fact, need in the future".  If I had a crystal ball I would certainly subscribe to this advice wholeheartedly.  Lacking omniscience, I think it''s obvious that sometimes it''s far more efficient to anticipate possible change, but it''s less efficient if you overdo it.  The knowledge of how much is good and how much is overdoing it will never be provided by a cute slogan with a cute acronym. That''s why software engineering takes skill and experience.'
  replies: []
- id: 1208
  author: Dmitri Colebatch
  date: '2004-03-03T17:22:40'
  content: I think a key thing that is missing from this discussion is library vs user-oriented software.  Obviously if your writing a library, it is impossible to know the full range of uses for it.  However, when writing user oriented software, you know what your use cases/user stories/requirements are, and can write software that does that.  YAGNI (imho) is about this situation, not second guessing what the user _might_ need, and putting that in.  You know what you know, so work off that.
  replies: []
- id: 1209
  author: John Avery
  date: '2004-03-05T04:08:01'
  content: '>> "If I had a crystal ball I would certainly

    >> subscribe to this advice wholeheartedly.

    >> Lacking omniscience I think it''s obvious that

    >> sometimes it''s far more efficient to

    >> anticipate possible change, but it''s less

    >> efficient if you overdo it. "

    But people tend to overestimate the possible changes, they DO overdo it. It''s intellectually satisfying to solve a problem neatly and genericly.'
  replies: []
- id: 1210
  author: mathew
  date: '2006-08-18T10:57:10'
  content: 'It seems to me you''re really objecting to the name.

    YAGNI is really "You don''t need it now, you don''t know you''ll need it later, so don''t build it now". That doesn''t seem arrogant to me.'
  replies: []
- id: 1211
  author: Ben Kittrell
  date: '2007-05-18T09:11:31'
  content: If IAP, how do you know "You Are Going to Need It"?
  replies: []
- id: 1212
  author: James Watson
  date: '2007-05-18T17:56:45'
  content: 'I have learned that there is no cut-and-dried answer to this question.  When I first started writing designs, I wanted to try to address every possible future need.  I''ve seen a lot of beginners do the same thing.  So from the perspective of not writing code that is not needed right now, I completely agree with YAGNI.

    But... On the other hand, I think some proponents of YAGNI take it too far.  Just because you don''t write the code right now doesn''t mean you can''t consider the possible and especially probable needs.  For example, I wrote some code that I doubt will need to be very scalable.  I didn''t add any multi-threading capabilities.  I did, however, write the code in such a way that making it multi-threaded will not require changing a lot of code.  In the end the code is more robust and easier to understand anyway.  The problem I have with some of the proponents of YAGNI is that they use it as an excuse or never being prepared for the unexpected.  I''ve seen measured prediction pay off too many times to be convinced otherwise.  It''s something that comes from experience.  Rookies should try to follow YANGI, definitely.  i imagine this is what Cedric is trying to get across.'
  replies: []
- id: 1214
  author: Stephie
  date: '2010-10-02T07:23:54'
  content: When you say "...discover bugs on corner cases you didn??t even think were possible", isn't that the purpose of it all? A bug is a bug, cornered or not.
  replies: []
---

The [thread of discussion](http://theserverside.com/news/thread.jsp?thread_id=24232) started by Mike Spille's comments on Rob Martin's entry got me thinking.

"You Aren't Gonna Need It" is not only a stupid statement, it's also incredibly arrogant.  It takes some guts to listen to a suggestion and without even thinking about it, trying to understand what motivated it or even, heaven forbid, doing some research, retort "You aren't gonna need it".

If my past experiences have taught me anything about the evolution of software, it's "It Ain't Predictible", or IAP (I've always wanted to dub a three-letter acronym, and it looks like your chances of coining such a term are largely increased if you use street-speak, so here is my contribution).

Seriously, it's just mind-boggling what users will sometimes do with software you put out there.  They will twist it in forms you would never have imagined in your wildest dreams, ask for improvements, discover bugs on corner cases you didn't even think were possible. 

Now that I am reminiscing, I actually remember vividly that about fifteen years ago, I faced this very problem when I was using a C++ library that wouldn't let me override what I needed.  I just ended up downloading the source and replacing a few "private" with "public".  Little did I know I had just uncovered the IAP principle.

I don't know, maybe Rob and I have different ways of solving problems, but we certainly have a different view on teaching.  If a student comes to me and shows me a design that I consider superfluous, I am not going to say "You aren't gonna need it", but more something like "Okay, we could sit down after class and you could give me a few examples where your design will be better suited than the simpler one I recommend, but right now, I would suggest you focus on the task at hand so that you can fulfill the number one task that as a software developer, you will be facing at every step of your whole career:  deliver your code on time."
