---
title: My first virus
date: '2003-08-13T08:06:21'
slug: my-first-virus
categories:
- General
comments:
- id: 394
  author: Lance
  date: '2003-08-13T09:31:29'
  content: I tried to make sure my machines were patched last night, but I was unable to get through to WindowsUpdate.... Wonderful virus, it achievs its aim through social engineering and code.
  replies: []
- id: 395
  author: Talip Ozturk
  date: '2003-08-13T09:39:10'
  content: Using Windows is very good sometimes. You can make lots of interesting stories out of it. this blog entry for example, I won't have the chance of writing such blog entry, simply because my desktop runs Linux. Hopefully sometime in the future, i will have to run Windows and will have such mysterious email-virus stories to blog about. How cool is to be able to say "I have got virus today". Even cooler thing is to get a sound enabled notifier (like AOL email one) saying something like "You have got virus!"...super cool idea.
  replies: []
- id: 396
  author: Ricky Datta
  date: '2003-08-13T10:50:13'
  content: 'How did you expose rpc port to public ?

    No firewall ?'
  replies: []
- id: 397
  author: Paul Watson
  date: '2003-08-13T11:27:09'
  content: At home, I use AVG antivirus. Its free for home use, effective, fast, and gentle on CPU cycles.
  replies: []
- id: 398
  author: Bob Lee
  date: '2003-08-13T15:29:27'
  content: You're still using Windows? Try OS X. ;) Actually, Outlook was less secure than other e-mail clients. The problem was a mime type mapping mismatch between outlook and the OS. You could trick Outlook for example into thinking that an exe attachment was of an image mime type, in which case it would pass it off to the OS without question. The OS would recognize that it was actually an exe and run it. The problem here is that you didn't have to opt to open the attachment. Simply previewing the message would result in executing the exe. If you have an unpatched install of Windows, you problem have this problem.
  replies: []
- id: 399
  author: Pierre CARION
  date: '2003-08-18T19:59:07'
  content: 'Funny to read one of your current google ads : "Avoid the Blaster Worm"

    ;-)'
  replies: []
- id: 400
  author: email virus
  date: '2004-06-26T21:07:14'
  content: I'm new to this site, just browsing around
  replies: []
- id: 401
  author: Baha
  date: '2004-06-30T02:41:44'
  content: Ha-ha-ha
  replies: []
- id: 402
  author: Baha
  date: '2004-06-30T02:41:48'
  content: Ha-ha-ha
  replies: []
- id: 403
  author: Baha
  date: '2004-06-30T02:46:16'
  content: Ha-ha-ha
  replies: []
- id: 404
  author: email virus
  date: '2004-08-31T02:06:42'
  content: Interesting thoughts, just wanted to mention I came from blogspot.
  replies: []
- id: 405
  author: email virus
  date: '2004-08-31T02:06:51'
  content: Was browsing through blogspot when I stumbled here
  replies: []
---

Like probably thousands of other people, I have been hit by the [ MSBlaster virus](http://securityresponse.symantec.com/avcenter/venc/data/w32.blaster.worm.html).  I hadn't really noticed anything until an advisory suggested that I took a closer look.  And lo and behold, I had an msblast.exe process running and I also had that executable in \WINNT\SYSTEM32.

This is my first virus ever.  I am so excited.

Cleaning it was relatively easy.  For future references, you want to

  * Install the [OS security patch](http://www.microsoft.com/technet/security/bulletin/MS03-026.asp).  
 
  * Run a [ remover](http://securityresponse.symantec.com/avcenter/venc/data/w32.blaster.worm.removal.tool.html).



Although I recognize viruses as a very real threat, I have never really been proactive at stopping them.  My work machine has an antivirus because it came with one, but none of my other machines do.  I use Outlook (well, used to) and other reputedly dangerous software, but I have always relied on my common sense to keep me out of trouble.

I am not saying this is a good idea.

One day, I expect to click on an unsafe attachment and infect myself.  We all have lapses in our attention and relying on our human senses to keep us safe from viruses is not just stupid, it's suicidal.  But well, habits die hard.

One word about Outlook:  there is this myth that it is the main enabler for virus propagation out there and that if you are using another client, such as Eudora or Mozilla Mail, you are safe.  This is incorrect.  Viruses typically travel through email attachments.  You can launch an attachment with any mail client and you will get infected just the same, so just be vigilant regardless of your mail client.  It is true that Outlook used to have unreasonable security defaults, but this is no longer the case.  Even Word and Excel now come with a high security default, not allowing you to run macros and other mechanisms that viruses use to propagate.

What's interesting is that I have always thought that I would be infected one day through email, but I ended up receiving a virus through another means (tftp and RPC).  Fortunately for me, this virus is relatively harmless for the user:  its main purpose seems to trigger a SYN attack on a Microsoft site on August 16th.  I am curious to see how this is going to unfold.  I am confident Microsoft has taken all the necessary precautions to foil the upcoming onslaught, but we will see.

I remember when I saw my first virus.  It was circa 1988 on the Amiga.  Viruses were totally unheard of back then.  This virus, called [SCA](http://home4.inet.tele.dk/vht-dk/amiga/desc/txt/sca.htm), was probably not the first but definitely a very early one.  It propagated by copying itself on the boot sector of floppies and all it did is wait for the third invocation and then display a message saying "Something wonderful has happened, your Amiga is alive, etc...".  I remember finding this cool the very first time I saw it, probably because I had no idea it was based on a concept that would cause billions of dollars in losses in the coming years.

I disassembled the SCA virus back then and published an article about it in the French Amiga magazine I was working for.  As the assembly code was unfolding in front of my eyes, I remember feeling much more fascination than anger at the author.  It was such a neat idea (and also a pretty cool Copper list).

These days are gone. Protect yourself and if you don't like to use anti-viruses because they slow down your I/O operations, at least make sure your machine is reasonably up-to-date with security patches.
