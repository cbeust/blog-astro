---
title: Stallman, Gosling and a bit of emacs history
date: '2003-08-21T17:23:05'
slug: stallman-gosling-and-a-bit-of-emacs-history
categories:
- General
comments:
- id: 418
  author: chiara
  date: '2003-08-21T20:40:38'
  content: 'wow, this is fascinating. i love these personalities, (have to say even of that Stallman, he reminds me of Scrooge some reason, go figure)

    thanks Ced, and i love the rants.. fun reading.'
  replies: []
- id: 419
  author: Binil
  date: '2003-08-21T21:22:12'
  content: 'Chronologically, the first "real" emacs was written by James Gosling

    What about the one written by Stallman and Guy Steele? :-/'
  replies: []
- id: 420
  author: Carlos Villela
  date: '2003-08-22T04:22:26'
  content: 'Wow Ced, looks like you''ve got plenty of time on your hands to do this kind of research...are you on vacation? :D

    Awesome write-up, congratulations! :)

    Regarding Jamie Zawinski, I like the guy a lot - apart from being extremely funny, he''s also a great developer, and has a great, albeit definitely not "mainstream" musical taste (see http://www.jwz.org/gruntle/music2002b.html), which encourages me to like his personality even more.

    Another funny bit from JWZ is that he''s not a professional software developer anymore. As he says, "...now I''ve taken my leave of that whole sick, navel-gazing mess we called the software industry. Now I''m in a more honest line of work: now I sell beer." Check out his DNA Lounge [http://www.dnalounge.com], for you san franciscans out there, it looks like a really good party place :)'
  replies: []
- id: 421
  author: Drew McAuliffe
  date: '2003-08-24T20:45:05'
  content: 'Is this guy one of the new owners of DNA or was the owner back in the day? I remember going to DNA right after I moved to SF, before the whole dot-com thing, when Mosaic was in version 0.something. I''m imagining he bought into it later on, after his Netscape stock took off.

    Funny to see what happens to people. Funnier still to have watched so much of it happen here (SF).'
  replies: []
- id: 422
  author: Mike Jasnowski
  date: '2003-08-25T12:40:14'
  content: I believe JWS is one of the new owners of DNA. I haven't ever been there but I had followed the almost weekly updates done by him about the renovation and opening. Mostly because they were so funny.
  replies: []
- id: 423
  author: Mike Jasnowski
  date: '2003-08-25T12:40:50'
  content: oops.. I meant jwZ &lt;--
  replies: []
---

I have recently read some [incorrect interpretations](http://freeroller.net/page/vanessa/20030820) of the story between James Gosling and Richard Stallman.  It's easy to get lost in the various ego-centered wars flying around so I thought I would take this opportunity to set the record straight by narrating the events as I remember them.  Of course, my recollection might be a bit biased but the links to the various posts should allow you to make your own decision.

Now, let's take a little trip back with father Tiresias...

Chronologically, the first "real" emacs was written by Stallman and then branched and improved by Gosling under the name "gosmacs".  There was obviously a little bit of friction involved with this first fork but it was nothing in comparison of what was going to follow.  But first of all, some background on Stallman.

We all know the individual and his extreme views on open source, but what most people probably don't know is that back then, Stallman was extremely hostile to graphics, bitmap screens and all this fancy new technology that was going to bring the computers to the masses.  He was even a very vocal enemy of...  the mouse.  Yup.

Anyway.

These beliefs made him very hostile to the simple idea of making gnuemacs usable in a graphic environment, which back then was X Window.  Tired with his position and also upset by the constant delay that emacs 19 was incurring, a group of people decided to fork off gnuemacs and start a new project intended to gather all the latest technologies that were picking up steam fast.

Most of these people were working for a company called Lucid, and therefore, they named their emacs "Lucid emacs" (which became XEmacs in 1994 after Lucid went out of business).

Implemented by a talented group of developers, one of them being an individual called Jamie Zawinski (and I'll get back to him shortly), Lucid Emacs soon reached a very decent shape within just a few months while gnuemacs 19 had been stagnating on the FSF hard drives for several years.  It was getting increasingly clear that Stallman was more than upset at the fork and at the very fast progress of Lucid Emacs, and he manifested his anger many times throughout this period, like for example in [ this exchange](http://groups.google.com/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&threadm=19940530030419.jwz@thalidomide.lucid.com&rnum=6&prev=/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&q=stallman+lucid+emacs&sa=N&tab=wg):

> 
>     From: Richard Stallman <rms@traveller.cz>
>     To: jwz
>     Subject: lemacs 19.10
>     We decided not to post your announcements because they seem to say
>     unfair negative things about Emacs 19 and because they advertise
>     non-free Lucid products.
>     

But it was too late.  Lucid Emacs was a high-quality implementation of emacs and its very innovative support for the mouse and other graphic features made it an instant hit in the emacs community.  Soon, gnuemacs users started asking for the same features in Emacs 19 and Stallman reluctantly conceded to at least look on the other side of the fence.

For someone who has made his goal in life to promote free software and code sharing, Stallman is showing a very puzzling tendency to practice the mantra "do what I say, not what I do".

First of all, he has been repeatedly [ nailed in public](http://groups.google.com/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&threadm=9302260127.AA03158@thalidomide.lucid.com&rnum=1&prev=/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&q=stallman+lucid+emacs+\\C-g&btnG=Google+Search) for [ reinventing things from scratch](http://groups.google.com/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&selm=LAMOUR.94Oct28175626@erpland.engin.umich.edu) instead of using existing libraries, but once again, he showed an extreme reluctance to merging the code lines, even refusing to reuse the pieces that Lucid Emacs had already implemented.  This decision was partly due to Stallman's resolute belief to not trust anyone but himself but also from [ personal problems he had with some of the Lucid developers](http://groups.google.com/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&threadm=9302260127.AA03158@thalidomide.lucid.com&rnum=1&prev=/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&q=stallman+lucid+emacs+\\C-g&btnG=Google+Search).

Jamie Zawinski tried several times to [ correct several misconceptions](http://groups.google.com/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&threadm=9302260127.AA03158@thalidomide.lucid.com&rnum=1&prev=/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&q=stallman+lucid+emacs+\\C-g&btnG=Google+Search) that Stallman had about the technical aspect of the work involved, but his advice fell on deaf ears.  The height of the debate was reached when it was pointed out that despite all his critiques of Lucid Emacs, Stallman had apparently not [ even try to run it](http://groups.google.com/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&threadm=9302260127.AA03158@thalidomide.lucid.com&rnum=1&prev=/groups?hl=en&lr=&ie=UTF-8&oe=utf-8&q=stallman+lucid+emacs+\\C-g&btnG=Google+Search).  I will let you read the rest of this fascinating thread, which sheds a lot of light about what it's like to work with Stallman (notice also the post from an individual named Marc Andreessen...  that was in 1991).

The merge between Lucid Emacs and emacs 19 was attempted but failed.  We will never know the exact technical reasons but Stallman's track record in this area doesn't leave much doubt in my mind.  However, we can see a general pattern in Stallman's ways:  he has a hard time dealing with success coming from others.  He showed this clearly with his catastrophic handling of the Lucid Emacs situation, and more recently with the "Gnu/Linux" fiasco, where he tried once again to receive credit for something he had nothing to do with.

But before we conclude this little retrospective, I'd like to say a few words about Jamie Zawinski, for whom I have a particular fondness.

Aside from being a very talented developer who supplied a great deal of high quality tools for developers during these troubled times (old-timers will remember Gnus, BBDB, etc...), Jamie is a hilarious person whose postings and constant pranks have brought more than a daily chuckle on developers faces back then.  [His Web site](http://jwz.net) leaves little doubt about his extreme devotion to hackdom, but he also regularly regaled many people with his constant stream of whacky ideas, the best of which is probably the [Tent of Doom](http://www.jwz.org/tent-of-doom/).  Be sure to read some of his [random rants](http://www.jwz.org/gruntle/), they are worth it.  After Lucid, Jamie became employee #20 at Netscape and the rest is history...
