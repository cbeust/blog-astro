---
title: Bill Joy on the future
date: '2003-10-06T08:51:54'
slug: bill-joy-on-the-future
categories:
- General
comments:
- id: 578
  author: Marcello
  date: '2003-10-06T17:24:19'
  content: it's also true that most of the time you don't need to execute any attachments in Outlook to let a virus propagate, the program does it for you...
  replies: []
- id: 585
  author: maps and legends - craig pfeifer
  date: '2003-10-06T18:25:29'
  content: '<strong>Joy Blasts Outlook, Cedric Defends It</strong>

    Finally! A sane and rational person rebutts Bill Joy''s comments about Outlook being the root of all email virii. This...'
  replies: []
- id: 579
  author: Rune
  date: '2003-10-11T00:37:45'
  content: 'There are some things in your posting that are just plain wrong. First you have the issue above posted by Marcello that for example the preview mode in Outlook can ''execute malicious code''. Outlook is the most dangerous e-mail client because of it''s design, wide spread use, and tightly Windows integrations. Don''t blame the users for bad design choices made by Microsoft! It''s not a good habit to blame the users for obvisouly design flaws. Remember that.

    The second BIG mistake is your analysis of the ''choices'' made by Microsoft. It is completely wrong to say that Microsoft deliberatly made the choice of making COM without restrictions and then when they had the marked planned to patch all the security flaws. How they got the marked is a more complex story, and stating it was choices is just a wrong pick of words (as we say it in Norway). Do not take a reductionist account of this, I mean you can''t tell the story by referencing to com and the java sandbox alone.

    Last, you seem to know Bill Joy and if that is the case you should now that he ''often'' answers strangely to questions in interviews. For example saying he i now using Netscape instead of vi etc.   You should look beyond that and really take a look at his visions. They are great even though they haven''t been implemented with the right technology and marked strategy. Remember that some of the greatest innovations have been invented by small companies that not neccesary have been a great enterprise/commercial successes, but still got picked up later by other companies with highly commercial success.

    Ok, I will stop my bad english now.

    - Rune'
  replies: []
- id: 580
  author: Ross Judson
  date: '2003-10-13T07:02:44'
  content: 'There is a third way.  Neither the sandbox nor the "full access" concept is workable, in a hostile environment (which the internet most surely is).

    You must be able to full access, but granting that access must be harmless.  I have discussed the idea of a ring system before...the key is to _widen_ the notion of sandbox to include nearly the entire realm of system capabilities, while restricting anything that emerges from that sandbox.  Essentially you construct a virtual systems, within virtual systems, within virtual systems...code running at the most protected level includes the base operating system and little else.  The next ring out includes basic system updates.  Then comes a mutable device driver level, followed by insatlled application levels, and finally throwaway internet access levels.  You can create, nest, and toss away these sandboxes at will.

    You _cannot_ grant access to external resources in a sandbox.  In fact, there should NEVER be a need to -- everything a program could possibly need is already available to it in the sandbox.

    Shared document directories would be exactly that -- document directories, with no execution allowed.

    Contamination at the lower levels can be strictly disallowed...'
  replies: []
- id: 581
  author: Osifrage
  date: '2003-10-31T00:33:25'
  content: Sounds like your sour and full of envy, you have accepted that you will never get the exposure and fame that Bill Joy has gotton, dont be mad, do something about instead of crying on the net.
  replies: []
- id: 582
  author: Erica
  date: '2004-08-08T15:48:27'
  content: Good read
  replies: []
- id: 583
  author: amateur nude pictures
  date: '2004-11-11T22:32:04'
  content: Google linked me to this page, nice reading
  replies: []
- id: 584
  author: amateur nude
  date: '2004-12-10T11:17:29'
  content: Hi.
  replies: []
---

Bill Joy gave an [ interview to Fortune](http://www.fortune.com/fortune/technology/articles/0,15114,490598-3,00.html) recently and some of his statements puzzle me.

> Another reason spam is so bad is that so many companies use Microsoft Outlook for reading e-mail. Again, because that program is written in C, it's quite easy to design a virus to go through your e-mail address book and broadcast spam to all the people you know 

Sometimes, I wonder if Joy really lives in the same world we live in.  Or if he really knows what he's talking about.  There are two things that are totally wrong in the above quotation: 

  * It's not because Outlook is written in C that viruses can read your address book.  It's because of a Windows language-neutral technology called COM.  
 
  * Windows viruses propagate not because of Outlook but because people execute attachments.  You will suffer the same fate if you are using Eudora or Mozilla Mail and you double click on the virus.



I also note that Joy encourages writing programs in Java over C, because C is not as safe as Java (true enough) but I notice that he doesn't mention C#, which is just as safe.

> So by using Outlook, you're not practicing safe e-mail. We need a "condomized" version of it. 

Even though Joy is "cutting the cord" completely with Sun, he obviously can't resist spinning things according to the party line of his former employer.  This idea of running programs in protected environments is very dear to Sun.  It sounds good in theory but is just a disaster of usability in the real world.  Let's contrast the two approaches:

  * Sun decided to go the "sandbox" way, by denying all actions potentially harmful to Java programs, thus forcing users and developers to explicitly grant access to dangerous functionalities.  The result?  A model that has totally failed to catch on because using Java applets is extremely unpractical both for users and developers.  
 
  * Microsoft decided to take the opposite approach:  start by (mistakenly) allowing everything to run everywhere without restrictions.  The result?  They created a tremendous traction in the user space, generated millions of dollars in revenues both for themselves and the industry, but they also spawned the civilization of viruses that we all know and hate today.  Now that they have momentum, they are proceeding to patch the holes.



Who made the best choice? You decide.

So far, Bill Joy has been the "enfant cheri" of Sun.  Every year, he came up with a brand new idea and regardless of whether it became a success or not, Bill Joy kept being saluted as a visionary and a true hero of our time.

But are you really a visionary when you keep repeating that the world is doomed unless we change our ways, that we should use more solar-powered energy and design our power-grids so they never black out?  Last time I checked, being a visionary was about proposing solutions for the future, not making trite statements about events past and predicting extinction.

There is no safety net this time, he will have to prove himself.  The coming years will show whether he really has what so many people see in him, or if he is simply a standard geek who just happened to be at the right place at the right time and ended up receiving much more exposure than he deserved.

I wish him well.  Honestly.  But the only way he can achieve the ambitious goals he set for himself is to break away from the religion and start looking at things objectively.

Otherwise, [the future simply doesn't need you](http://www.wired.com/wired/archive/8.04/joy.html).
