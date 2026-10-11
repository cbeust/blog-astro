---
title: Installation from hell (volume 2)
date: '2003-11-06T06:40:44'
slug: installation-from-hell-volume-2
categories:
- General
comments:
- id: 661
  author: ''
  date: '2003-11-06T10:05:52'
  content: '> I went for CGI again for simplicity, but ISAPI

    > is safer

    How in hell is ISAPI safer? If PHP ISAPI module crashes, it means usually that your whole service crashes. ISAPI on the other hand is faster as it works in same process as Web Server. PHP ISAPI plugin has not been wery stable in my opinion, and CGI is too slow.'
  replies: []
- id: 662
  author: ''
  date: '2003-11-08T05:31:37'
  content: '> Actually, I take that back.  It is a nightmare to install on Apache as well.

    After reading this I''ve decided to give it to try.

    I needed online gallery anyway.

    So, off we go with Apache 2.0.43 and PHP 4.2.3.

    Total time to get things running: umm, may be 2 hours. This included downloading NetPBM and such and understanding how the things work, changing php.ini, etc. The biggest problem was to figure out that .htaccess is now different, and is now semi-xml file ?

    why ?

    Anyway, sorry to read about all this trouble with IIS.'
  replies: []
---

Next came the choice of a Web server.  That was a tough one.  I am very familiar with Apache but its track record with XP is not stellar, to say the least.  And the Gallery documentation makes it very clear that Apache 2 and PHP do not form a happy couple.  As much as I hated the thought, I resigned myself and went with IIS.  Editing text files was fun fifteen years ago but I am willing to forego some safety in order to regain my intellectual sanity.

It takes a little while to adjust from the Apache mindset to IIS's opinion of what a Web server is, but it's not very hard to configure overall.  Adding PHP support to it was a breeze (I went for CGI again for simplicity, but ISAPI is safer)

My initial attempts went well:  my pictures were there, I could log in and change stuff.  Then I tried to upload my first photo, and it didn't work.

I enabled the debug mode and Gallery quickly rewarded me with a "Cannot fork "cmd /c ... <imagemagick executable>".

First of all, I'll pass on the incredibly geeky message about "not being able to fork", which is a shame even for a debug mode.  It's pretty obvious that the authors of Gallery have been fed UNIX juice when they were kids.  Okay, the message isn't helpful in the least, but at least I understand what's going on.  I just don't know **why**.  PHP being the language that it is, there is no stack trace in the error message so I can't debug the code myself (not that I would want to, although I ended up giving it a quick try).

The path to the ImageMagick executable is correct and Google is denying me any kind of help.  As do the Gallery forums. I make sure that the IUSR_machine user has the right permission, so I am at a loss understanding what is going on.  Then I have the idea to run the faulty script by hand from the command line and... surprise!  It works.

It's only when run by IIS that the command fails.  In order to confirm my suspicion, I write a quick PHP script that simply invokes the "dir" command through cmd.exe, and it fails as well.  I think I know where this is going now...  Somehow, the IIS user doesn't have the permission to run cmd.exe.

Considering it would be a big security hole if IIS were configured to allow this by default, I give credit to the install process for going with the safer setting.  But now I need to fix it.

Finding the corresponding menu in IIS is pretty easy but to my utmost surprise, the error persists.

My next thought is that maybe the permission is being denied at the OS level.  The thing is, I can't find any security setting for file and users on XP, so I call Google to the rescue.  I finally stumble upon the screenshot of a File property window that has a "Security" tab.  I right-click on one of my files, bring up the Properties window but alas, no Security tab.  Uh?

More Googling and I finally learn that if I am not seeing this Security tab, it's either because 1) the file system is not NTFS (it is) or 2) advanced file sharing is disabled (Explorer / File options / Advanced).  And it is!

I enable advanced file sharing and this time, the Security tab is here.  I allow the IIS user to run cmd.exe and reload the Gallery test page...  victory!  IIS can now run executables.

Wait...

IIS can run executables?!?

This icy realization puts a quick damper on my triumphant mood.  Okay, do I **really** want that?

Well, I am not quite sure yet.  Right now, I am just happy to be done with this installation and having learned a ton of things in the process.  However, I would really like to make sure that only Gallery is allowed to run the cmd.exe executable.

My initial idea right now is to copy cmd.exe to another secret location and to patch Gallery so that it refers to that secret location instead.  This way, the "real" cmd.exe remains non-executable by IIS.

Still working on that part...  Feel free to make suggestions!
