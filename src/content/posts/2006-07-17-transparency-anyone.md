---
title: Transparency anyone?
date: '2006-07-17T14:07:02'
slug: transparency-anyone
categories:
- General
comments:
- id: 5775
  author: Alex Blewitt
  date: '2006-07-17T14:47:12'
  content: 'There are some very good apps that hover above what you''re doing giving you status updates but in a non-distracting way. Rather than have it over the top and blocking what''s underneath, you can have it blend seamlessly through what''s there.

    One example is Watch It (http://www.coldpizzasoftware.com/watchit/) which provides a countdown timer that you can position anywhere and have available. Some people like clocks (though I tend not to).

    I really don''t see the point of transparency for the sake of transparency; for example, if you do:

    defaults write com.apple.Terminal TerminalOpaqueness 0.5

    then open a new window, you get a transparent terminal. Some people might find it useful to have (e.g.) a tailing /var/log/syslog or similar (or track who''s logging into a box remotely) but I''ve never really seen the point of it myself.

    I do like the inspectors disappearing in e.g. OminGraffle when you switch between apps. It''s a way of keeping the document visible but not its supporting cast of dialogs.

    Alex.'
  replies: []
- id: 5776
  author: Romain Guy
  date: '2006-07-17T14:59:15'
  content: 'I *hate* translucent windows for the same reasons you do. Now, in some cases it does work. The only examples I know of are in the iLife suite and Aperture. The image manipulation palette is translucent but black and not too translucent, and I guess it''s the key: you can actually read its content.

    That''s also why I don''t like the Aero glass theme in Vista. It looks cool (well... the frosted glass is cool) but it makes title bars highly unreadable to me.

    As any visual design trick, the overuse is always a problem. Gradients are another great example of that (although they work in most cases.)'
  replies: []
- id: 5777
  author: Charles Miller
  date: '2006-07-17T15:23:25'
  content: 'You don''t have to do the "defaults write" trick to get transparency in the terminal any more: it''s been in Terminal->Window Settings->Color since about 10.3?

    Transparency is a cool effect, but it''s much better being used as just that -- an effect -- than as a constant interface feature. Transparency that is used to say that something is inactive or transient is good. Transparency applied to something you''re actually trying to do work on is generally more annoying than it''s worth.

    That said, for a long time I had slightly transparent green-on-black terminal windows. Because that''s cool.'
  replies: []
- id: 5778
  author: RichB
  date: '2006-07-17T15:26:37'
  content: Transparency in the Dock on MacOS works well. Perhaps this is because it's isn't a usual transparency, it's a stained glass transparency.
  replies: []
- id: 5779
  author: Jason.
  date: '2006-07-17T17:29:08'
  content: Oh, it's not just you. Even us long-time OS X users sometimes find it annoying. It's cool for providing depth, but I don't get Terminal at any opacity except 100% opaque.
  replies: []
- id: 5780
  author: Andrew GJ Fung
  date: '2006-07-17T21:52:34'
  content: 'I find it useful for de-emphasizing "passive" windows so as not to distract, whilst still letting them remain visible in case I need to look at it quickly for something.

    e.g. I have a small very-transparent console running a loop that perpetuates an SSH tunnel to my server.  Usually I don''t need to look at it, but if my app stops working, I can glance to the corner to see if there''s an error message printed.

    Other examples are clocks, and CPU or memory meters.  If they were fully opaque, their motion could be distracting, but blended with the wallpaper, they''re "invisible" unless I need them.

    I could Alt-Tab or use the tray, but I''d find that frustratingly slow for such a small thing.  It''s much faster to flick the line of sight to "that corner" to see if there''s anything wrong.'
  replies: []
- id: 5781
  author: Justin McCarthy
  date: '2006-07-17T23:37:43'
  content: 'Pretty much just shells (OS ''Terminal''), with server processes or `tail -f` in the background, and nearly opaque editing / interaction windows in the foreground.  Movement in the background is simply a cue that "something happened"; I''ll then bring the window to the foreground to actually read it.

    Use it as you would your peripheral vision, not as a scheme for increasing information density.

    If real estate is what you''re looking for, Desktop Manager is the key (universal binary: http://guiheneuf.org/Files/DesktopManagerUniversalInstaller-0.2.dmg)'
  replies: []
- id: 5782
  author: thomas woelfer
  date: '2006-07-18T04:06:30'
  content: 'transparency sample here: http://www.die.de/blog/Default.aspx#a068231d0-a0f7-4a0b-b31c-185337661ec1'
  replies: []
- id: 5783
  author: Joshua Marinacci
  date: '2006-07-18T10:32:30'
  content: 'It is possible to use transparency as a good user interface effect that provides useful feedback to the user and creates a better experience overall. However, this is often the exception rather than the rule.  All too often transparency (like animation) is just eye candy that provides nothing and often actively hurts the user experience.

    For a good use of transparency see the editing palettes in iPhoto. They let you see what''s underneath, which is essential when you are working with a fullscreen document.'
  replies: []
- id: 5784
  author: Alexander Staubo
  date: '2006-07-18T22:00:04'
  content: 'The terminal window is pretty much the only place where transparency works for me (example: http://purefiction.net/paste/transparencyshell.png). I have set the window background to white and the opacity at approximately 75%, which allows me to see a tiny bit of the background without at all interfering with the foreground.

    If you are coming from a black-background terminal, a white-background window takes a few minutes to get used to, but it has the added benefit that you can clearly distinguish between overlapping terminal; since terminal windows have no border, but a drop shadow, this is nigh impossible with black windows (which is why I used to run them at 5% gray).'
  replies: []
- id: 5785
  author: david Flores
  date: '2006-07-24T08:10:55'
  content: 'A part of using it in terminal (80%) I found transparency good (using floating in front at the same time) when I watch a video(cast), because is something that I don''t need to keep an eye all the time but when I need to look is easy to do it.

    To make windows transparent and floating I use this:

    http://millenomi.altervista.org/Afloat/'
  replies: []
- id: 5786
  author: john doe
  date: '2006-08-29T15:47:54'
  content: I tried the default writes com.apple.Terminal Terminal Opaqueness 0.5 command on a MacOSX and it didn't do anything. Why? My OS is 10.3.7 - does this have anything to do with it?
  replies: []
- id: 5787
  author: mike
  date: '2006-10-22T13:43:27'
  content: 'The only place I use transparency is my terminal. If I can''t read the text, just turn up the shading.

    Translucency is only a cool-looking effect.'
  replies: []
- id: 5788
  author: jane doe
  date: '2007-02-07T16:27:32'
  content: '@john doe

    No wonder it didn''t work...

    It''s "defaults write" not "default writes" maybe you need glasses.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/transparency.png)  
**Word is trying to look cool**

There is something really beautiful about transparency on a computer screen.  I can definitely remember the shock of seeing transparent waters in Far Cry or some of the [numerous](http://www.pcnet-online.com/picks/images/alphaxp.jpg) [operating](http://files.blog-city.com/files/J05/88284/b/vista_desktop.png) [systems](http://www.eikke.com/files/mc-scroll-transparency-orig.png) that support alpha-blending.  But the sad truth is... it's never worked for me.

I've tried to use transparency in many different ways (transparent terminals, transparent dialogs, etc...) but it always ends up looking ugly, and I always end up making all my windows opaque again.  Maybe it's because I'm a proficient windows switcher and that I can do so extremely fast with keyboard shortcuts, but the bottom line is that the few times when a window is partially obscuring another window that I'm trying to read, I find it faster to Alt-Tab twice than trying to make sense of the blended backgrounds.

But maybe it's just me...

Are you using transparent windows on your desktop?  How?  (and feel free to post links to screenshots if you have any)
