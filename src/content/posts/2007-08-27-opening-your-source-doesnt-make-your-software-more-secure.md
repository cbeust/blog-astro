---
title: Opening your source doesn't make your software more secure
date: '2007-08-27T10:07:58'
slug: opening-your-source-doesnt-make-your-software-more-secure
categories:
- General
comments:
- id: 6849
  author: Pinar Y.
  date: '2007-08-27T11:21:27'
  content: 'in fact it''s a strange point, that can vary from a situation to another..

    yes, open source is the most secure platform (i cannot imagine any other system that delevoping by thousands of people..). but that "open source secure" only encloses the best projects; like a famous distro, or a famous cms, or a music player, .. you guess.

    but no, open source isn''t secure as we think, when we talk about unknown, or less known projects.. because you control your code with less people, less development, .. any little bugs or secure problems can blow your head..

    hmm yeap that''s the point.'
  replies: []
- id: 6850
  author: Frank Bolander
  date: '2007-08-27T14:20:25'
  content: 'I agree with you. Open Source/Closed Source means nothing with regards to security. The way I see it contemporary security problems are because OS developers are trying  to please the least common denominator in terms of a wider userbase -- with good intentions and valid business reasons. "Easier use" becomes a target for the "average hacker" as you say. We still see the mainframe as the most secure of all animals but I''m pretty sure you wouldn''t call a mainframe session a "user friendly" experience. Patches nowadays seem to bandaid a hole instead of plug it up.

    I use to work for a military contractor where one guy use to say:" The only secure computer is one that isn''t connected". An older security guy came back with "or turned off". Insecurity is something I think we''re going to have to live with open source or closed source.'
  replies: []
- id: 6851
  author: Joshua Foster
  date: '2007-08-27T14:50:15'
  content: 'I agree that Open source is not "more secure". I think it comes from a path of logic that has never been proven. Its assumed to be correct because it sounds right.

    Joshua'
  replies: []
- id: 6852
  author: A-C
  date: '2007-08-27T14:58:19'
  content: 'You''re all missing the point.

    The whole point is _how fast_ you get a fix for a secutiry issue.

    In the proprietary world, you can do nothing but waiting for the company to release a fix ASAP.

    ASAP sometimes means weeks or months. You *cannot* afford such delays when security matters.

    In the open source world, anyone can access sources, which means that fixes might and will usually come within a day because there are enough

    skilled people around. Period.

    Other arguments are irrelevant.'
  replies: []
- id: 6853
  author: Cedric
  date: '2007-08-27T15:06:59'
  content: 'AC,

    I think you''re missing an important point as well.  Yes, the fix comes faster, but what does it buy you if days after the vulnerability and fix have been disclosed, hundreds of web sites start going down because they did not (or could not) apply that fix while hackers acted on the vulnerability right away?

    A lot of systems in production simply cannot be patched as soon as such fixes are made available, and this is why the approach of "security via obscurity" works as well:  because it makes the vulnerability obscure to users and hackers alike.'
  replies: []
- id: 6854
  author: Paul Tyma
  date: '2007-08-27T16:03:31'
  content: August 27th, 2007 - Cedric has agreed that "security via obscurity" has value. I'll remember this day :)
  replies: []
- id: 6855
  author: Pinar Yanardag
  date: '2007-08-27T16:31:10'
  content: 'A-C,

    i think we''re talking about the same; when i talk about well-known & famous open source project''s security, i meant how many coders around it. if there''s at least 100 good hackers (or less or more, just an example) around your code, they can find and fix bugs easily and early.. but if you''re not well-known, i cannot trust to your projects'' security with 3 developers.. a hacker comes, looks through your code, finds and uses it.. if you don''t have a well-covered community; who can hear it? who can help? so you simply die. that''s the point i''m talking about.

    and Cedric,

    of course first step of security is the physical security of your machine :)

    i agree with the guy who told the most secure is a turned-off computer. because you can monitor an unconnected computer with ray technologies as well.

    and i thought about your last words: "we''re going to have to live with open source or closed source". i don''t agree with you, i think we have to live with both open source and closed souce. when i talk about "closed source", most people understands closed source x operating system :)

    a hybrid secure system i can imagine: if you want to make your system secure; you have to use an open sourced operating system (because, let''s talk about Linux, i can''t imagine any other operating system that been fixed so quickly and with a good community.. that''s the open source (and free software) effect..) and on this operating system; your applications have to be a) a good open source projects b) a good-coded but closed source project. i think that strategy works.'
  replies: []
- id: 6856
  author: pcal
  date: '2007-08-27T23:20:18'
  content: '...what does it buy you if days after the vulnerability and fix have been disclosed, hundreds of web sites start going down because they did not (or could not) apply that fix while hackers acted on the vulnerability right away?

    Ok, Cedric, let me get this straight: your claim is that closed source projects actually get a leg up in the security department because it''s harder for hackers to find out about their vulnerabilities?

    Maybe you should share your insight with Microsoft, who clearly are squandering tons of potential ''obscurity value'':

    http://www.microsoft.com/technet/security/bulletin/ms07-aug.mspx'
  replies: []
- id: 6857
  author: Brian Slesinsky
  date: '2007-08-28T00:14:48'
  content: 'Sure, secure software has to be written by good, dedicated professionals, and most open source software doesn''t get nearly enough attention to be good.  But for the winners of the popularity contest (Linux for example), it seems fair to say that part of the reason they get all that attention and years of updates and security fixes comes from being open source.

    Or to put it another way, the "given enough eyes" thing only works for Linux and maybe a few other projects; it doesn''t generalize.'
  replies: []
- id: 6858
  author: Angsuman Chakraborty
  date: '2007-08-29T20:17:28'
  content: 'Well said. Open source is not a guarantee for security. In fact non so well reviewed open source software may be more of a security risk because the security-by-obscurity veil is lifted from the start.

    I have had serious hacking problems with Mambo in the past which forced me to switch to a dedicated hosting and even there I was threatened that my service would be switched off. On investigation, I realized the problem was because I didn''t apply a recent security patch to Mambo. I later switched on to Joomla (Mambo derivative). However it left a bitter taste in my mouth about the myth of open source security.'
  replies: []
- id: 6859
  author: Preet
  date: '2007-09-05T07:48:21'
  content: Hey, Just went through your blog and it makes for some nice reading. That thread about Indian students was hilarious. I'm Indian so I can understand what that must have been like. I'm sure they did not intend to be rude. Only those Indians who study in good schools (like me haha) can speak good English. The funny thing is - I came across your blog while searching for ideas about Java projects for beginners. So maybe that's how they came across your blog and thought that you were offering suggestions. But I'm rambling here -nice work on the blog, keep it up!
  replies: []
---

In an [article comparing Windows to Red Hat](http://www.microsoft.com/windowsserver/compare/compare_linux.mspx), Microsoft recently used the following quote from former chair of the Apache security team Ben Laurie: 

> Although it
