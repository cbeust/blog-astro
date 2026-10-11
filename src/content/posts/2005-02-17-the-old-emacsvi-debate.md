---
title: The old emacs/vi debate
date: '2005-02-17T09:12:06'
slug: the-old-emacsvi-debate
categories:
- General
comments:
- id: 3113
  author: ''
  date: '2005-02-17T09:52:01'
  content: Code, post code ! :)
  replies: []
- id: 3114
  author: James A. Hillyerd
  date: '2005-02-17T09:57:22'
  content: 'I usually use perl on the command line (ie: perl -pi.bak -e ''s/foo/bar/'') for things like that. Although you are probably right, I''d end up scripting something that complicated.

    I tried hard to like Vi, but having to hit the Esc key all the time is an ergonomic nightmare; especially on a Kinesis Contour keyboard.

    I tried hard to like Emacs...  It always took to long to load on 1990''s hardware, and I have a bad habit of quitting an editor when I''m not using it.   I also cannot stand LISP, and got sick of logging onto the #emacs IRC channel and begging for help everytime I wanted to change my config.'
  replies: []
- id: 3115
  author: Cedric
  date: '2005-02-17T09:57:31'
  content: 'There is no code, that''s the point!  I did it all by recording a macro in emacs and repeating it a hundred times.

    I''ll post the solution soon along with an explanation of why there are cases where macros are more powerful than even the coolest script language...'
  replies: []
- id: 3116
  author: RhesusJesus
  date: '2005-02-17T10:39:56'
  content: XSLT? Anyone?
  replies: []
- id: 3117
  author: ''
  date: '2005-02-17T10:48:23'
  content: 'Vi works swell on a Kinesis Contour keyboard after you switch Caps Lock and Esc.

    I do not remember the last time I voluntarily used Caps Lock ;)'
  replies: []
- id: 3118
  author: Emmanuel Pirsch
  date: '2005-02-17T10:59:37'
  content: 'You can do that easily with jEdit. The nice thing is that macro recording creates a BeanShell script.

    So if you need to do stuff that cannot be recorded (like looping the macro until some condition matches), you can easily add it to the script.

    You get fast macro recording and easy macro customization.'
  replies: []
- id: 3119
  author: Daniel Serodio
  date: '2005-02-17T11:46:31'
  content: 'Real programmers know that the Caps Lock key should be remapped to Control, not Esc! :)

    Actually, before Eclipse I used to spend all day inside Emacs, but now I keep Eclipse open all day, and Emacs takes too long to open. I know about GNUserv, but for "quick edits" I now use Vim.'
  replies: []
- id: 3120
  author: Emmanuel Pirsch
  date: '2005-02-17T12:04:57'
  content: 'Here is the BeanShell recored by jEdit. It search For each span it takes the text in quotes, append it to the Register $, then it take the text in the span tag and append it in Register $.

    It reposition the cursor after the closing span tag. All that''s missing is a loop.

    When your done, just paste Register $ in a new file et voil'
  replies: []
- id: 3121
  author: Emmanuel Pirsch
  date: '2005-02-17T12:06:27'
  content: 'Oups... wrong macro... here is the full one...

    // This is a recorded macro. First, check over the

    // commands to make sure this is what you intended. Then,

    // save this buffer, and the macro should appear in the

    // Macros menu.

    SearchAndReplace.setSearchString("");

    SearchAndReplace.setAutoWrapAround(false);

    SearchAndReplace.setReverseSearch(false);

    SearchAndReplace.setIgnoreCase(true);

    SearchAndReplace.setRegexp(false);

    SearchAndReplace.setSearchFileSet(new CurrentBufferSet());

    SearchAndReplace.find(view);

    textArea.goToStartOfWhiteSpace(false);

    textArea.goToMarker(''a'',true);

    Registers.append(textArea,''$'',"\n",false);

    textArea.goToStartOfWhiteSpace(false);

    textArea.goToNextLine(false);

    textArea.goToNextLine(false);'
  replies: []
- id: 3122
  author: Emmanuel Pirsch
  date: '2005-02-17T12:07:25'
  content: Sorry... it looks like I have to escape "&lt;"... Just a moment...
  replies: []
- id: 3123
  author: Emmanuel Pirsch
  date: '2005-02-17T12:09:19'
  content: 'Here it is...

    // This is a recorded macro. First, check over the

    // commands to make sure this is what you intended. Then,

    // save this buffer, and the macro should appear in the

    // Macros menu.

    SearchAndReplace.setSearchString("&lt;span");

    SearchAndReplace.setAutoWrapAround(false);

    SearchAndReplace.setReverseSearch(false);

    SearchAndReplace.setIgnoreCase(true);

    SearchAndReplace.setRegexp(false);

    SearchAndReplace.setSearchFileSet(new CurrentBufferSet());

    SearchAndReplace.find(view);

    textArea.goToStartOfWhiteSpace(false);

    textArea.goToNextLine(false);

    buffer.addMarker(''a'',textArea.getCaretPosition());

    textArea.goToPrevLine(false);

    SearchAndReplace.setSearchString("\"");

    SearchAndReplace.setAutoWrapAround(false);

    SearchAndReplace.setReverseSearch(false);

    SearchAndReplace.setIgnoreCase(true);

    SearchAndReplace.setRegexp(false);

    SearchAndReplace.setSearchFileSet(new CurrentBufferSet());

    SearchAndReplace.find(view);

    textArea.goToNextCharacter(false);

    buffer.addMarker(''b'',textArea.getCaretPosition());

    SearchAndReplace.setSearchString("\"");

    SearchAndReplace.setAutoWrapAround(false);

    SearchAndReplace.setReverseSearch(false);

    SearchAndReplace.setIgnoreCase(true);

    SearchAndReplace.setRegexp(false);

    SearchAndReplace.setSearchFileSet(new CurrentBufferSet());

    SearchAndReplace.find(view);

    textArea.goToPrevCharacter(false);

    textArea.goToMarker(''b'',true);

    Registers.append(textArea,''$'');

    textArea.goToStartOfWhiteSpace(false);

    SearchAndReplace.setSearchString("&lt;/span&gt;");

    SearchAndReplace.setAutoWrapAround(false);

    SearchAndReplace.setReverseSearch(false);

    SearchAndReplace.setIgnoreCase(true);

    SearchAndReplace.setRegexp(false);

    SearchAndReplace.setSearchFileSet(new CurrentBufferSet());

    SearchAndReplace.find(view);

    textArea.goToStartOfWhiteSpace(false);

    textArea.goToMarker(''a'',true);

    Registers.append(textArea,''$'',"\n",false);

    textArea.goToStartOfWhiteSpace(false);

    textArea.goToNextLine(false);

    textArea.goToNextLine(false);'
  replies: []
- id: 3124
  author: Amir Brown
  date: '2005-02-17T12:28:03'
  content: Given that xsl is said to be lisp with brackets I'd say xsl is the same and doesn't require a particular editor.
  replies: []
- id: 3125
  author: Cedric
  date: '2005-02-17T12:58:49'
  content: 'Well done, Emmanuel.  That''s the idea.  I''m more interested in the keystrokes to define the macros than the source, though, but I definitely think it''s the best way to do this kind of mass reformat.

    As for XSL...  yuck :-)  (especially if you are dealing with HTML, which might not be well-formed XML)'
  replies: []
- id: 3126
  author: Bob McWhirter
  date: '2005-02-17T13:09:43'
  content: 'You can annoy everyone by using viper-mode in XEmacs.

    And mapping the Escape key to the End key under your left thumb really makes vi useful when you''ve got a Kinensis.'
  replies: []
- id: 3127
  author: Nico
  date: '2005-02-17T13:34:59'
  content: Buffy Sommers? Dude... :)
  replies: []
- id: 3128
  author: Alan Green
  date: '2005-02-17T15:05:15'
  content: 'Yes, you could do this in Vim with a keystroke macro repeated 100 times:

    qa(keystrokes)q   (Record a macro ''a'')

    99@a                     (Execute ''a'' 99 more times)

    Depending what wanted to do (keystrokes) probably be a bunch for :s commands to modify the file to the canonical form, then write the file out to a new file with a different extension, then end with :n (Go to next file).'
  replies: []
- id: 3129
  author: Evan
  date: '2005-02-17T16:47:22'
  content: 'What Alan said.  To extract your spans, the vi-speak would be

    (search for span to get it in the search buffer)

    /^&lt;span

    (then)

    df"f"dnj0

    (repeated as many times as you like.)'
  replies: []
- id: 3130
  author: Andrew Collins
  date: '2005-02-17T21:54:17'
  content: 'There is a vi plugin for Eclipse which I find extremely useful: http://www.satokar.com/viplugin/'
  replies: []
- id: 3131
  author: ''
  date: '2005-02-17T23:32:50'
  content: 'One tool I like to use for batch processing XML files is XMLStarlet (http://xmlstar.sourceforge.net/):

    For example, youcould extract the content of the &lt;span&gt; elements with the following command:

    xmlstarlet sel -t -m "//span" -v "normalize-space(text())" -n 100.html'
  replies: []
- id: 3132
  author: Charles Miller
  date: '2005-02-17T23:33:29'
  content: ':%!extractspans.rb

    :)'
  replies: []
- id: 3133
  author: Ruslan Zenin
  date: '2005-02-18T05:16:13'
  content: 'I think Delphi IDE editor has quite powerful editor that can record macro...

    Was quite useful, when I used to program in Object Pascal'
  replies: []
- id: 3134
  author: B Wheeler
  date: '2005-02-18T05:30:14'
  content: One aspect of macros you might want to mention is to use them only if there are a few invocations.
  replies: []
- id: 3135
  author: Richard Rodger
  date: '2005-02-18T05:31:47'
  content: 'Nice one Cedric!

    I have been known to rope Emacs into "extreme" data munging on occasion - great for turning a CSV file or the like into a nice set of 10000 or so INSERT statements :)

    What I really like though is the way you can do this without context-switching: in Emacs you often lash out a whole set of keystrokes, stuff happens, and afterwards you can''t actually say what you typed, but it just worked. Direct brain-to-text interface. Coding up a script to do the same thing just doesn''t have the same flow.

    I know Eclipse is better for me, but somehow I remain stuck in Emacs-land, even for Java...

    PS: On my current machine Emacs (with JDE and a whole stack of extra modes) loads in about 2 secs, and Eclipse (standard, no plugins) in about 9!'
  replies: []
- id: 3136
  author: Mocky Habeeb
  date: '2005-02-18T05:56:23'
  content: 'I''d use Visual SlickEdit. It''s easy to record macros of that kind, multi-file searches, outputing to a separate buffer, etc.

    Emacs never did it for me. I liked vi, and for quite a while I used Visual SlickEdit in vi emulation mode, but when Idea and Eclipse came around a few years ago, I got out of the vi habit.

    I mainly use Eclipse now, but I keep SlickEdit around for the fast and powerful searching, the top notch macro support, and the occasional hex editing of class files and other binaries.'
  replies: []
- id: 3137
  author: Mocky Habeeb
  date: '2005-02-18T06:17:14'
  content: 'Ok, but now here''s what I''d really like to see: recording macros that include java code refactorings.

    1. Begin Recording Macro

    2. search for field: within current class, where access is public

    3. refactor'
  replies: []
- id: 3138
  author: Emmanuel Pirsch
  date: '2005-02-18T11:01:36'
  content: 'Cedric,

    key stroke to start recording : C-m C-r

    You get a popup to name your macro.

    Then you just do the stuff you want to repeat.

    Then C-m C-s.

    Then C-s to save the macro.

    A way a bit more efficient (if you do not want to modify nor save the macro) is to use temporary macro

    C-m C-m to start recording

    C-m C-s to stop

    C-m C-p to play the macro

    The only downside with jEdit, is the startup time if you have many plugins. But I generally keep it minimized.'
  replies: []
- id: 3139
  author: ''
  date: '2005-02-18T15:00:56'
  content: '"Real programmers know that the Caps Lock key should be remapped to Control, not Esc! :)"

    Since this was a reply to the Kinesis Contour comment, I''d have to guess you''ve never seen a Kinesis Contour keyboard - the Ctrl key is directly under each thumb on this keyboard so there''s no reason to remap it. Most people won''t even give these keyboards a try since they look too alien and take a week or two to get used to but they absolutely rock once you''ve gotten used to them. My only complaint is that the curly braces are in the wrong place and I can''t think of an appropriate location to remap them to...'
  replies: []
- id: 3140
  author: Anjan Bacchu
  date: '2005-02-22T17:58:04'
  content: 'Hi Emmanuel,

    The other way to optimize jedit load time is to use the  -background  flag during startup. I have a je.bat file which does something like below. After you  close jedit using the CLOSE button(top right), you can recall jedit (with the je.bat ) shortcut or otherwise and it comes up (again) pretty fast.

    start javaw -Dcom.sun.management.jmxremote -Xms32M -Xmx128M -jar "C:\Program Fil

    es\jEdit 4.2\jedit.jar" -background -reuseview %*'
  replies: []
- id: 3141
  author: dhwz
  date: '2006-02-21T23:53:28'
  content: 'James A. Hillyerd wrote:

    > I tried hard to like Vi, but having to hit the

    > Esc key all the time is an ergonomic nightmare.

    So press Ctrl-C instead. Ctrl-C does not quit Vi, all it does is take you out of insert mode.'
  replies: []
- id: 3142
  author: donh
  date: '2008-03-29T12:14:15'
  content: 'eeks!, no, no, not ctrl-c!

    ctrl-[ is the same as esc

    (& ctrl-h is the same as backspace)

    If this ever changes due to unicode,

    much of my sense that vi is

    the only editor that was ever actually

    engineered for human fingers will be

    lost.  I suspect there is a strong

    intersection between people that don''t

    know this, and people who prefer

    emacs to vi.

    Vi''s interface and normal mode command set

    is engineered for maximum physiological

    speed and efficiency, if not maximum learning

    time, emac''s macro facility is engineered for elegance and power.  Which

    is more important in a text editor, do you think?'
  replies: []
---

I'm a fan of both vi and emacs (and Eclipse too), which I still use on a daily basis.  I've been using emacs for more than fifteen years so I know it pretty much inside and out and I fall back to it to edit anything that is not Java and more than a few dozen lines.  [This posting about vi](http://squizlog.keithpitty.org/archives/000318.html) reminded me that in terms of macros, emacs still has a formidable edge over vi (and pretty much any editor I can think of, actually).

But instead of empty words, here is a concrete task I had to do recently.

I have a bunch of HTML files named 100.html, 101.html...  199.html.  They all contain something that looks like this:

> <span class="number">  
>  100  
>  </span>  
>  ...  
>  <span class="author">  
>  Buffy Sommers  
>  </span>  
>  ...  
>  <span class="text">  
>  Arbitrary HTML  
>  that can span several lines.  
>  </span>

I want to extract the content of the `span` tags and put them into a file in a canonical format (eventually a .ddl file for insertion in a database, but it doesn't really matter).

Emacs allowed me to accomplish this task within a few minutes with macros.  Can you think of another tool that will let you do that?  (without writing a script, which takes more than a few minutes anyway).
