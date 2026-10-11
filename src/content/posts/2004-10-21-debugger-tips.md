---
title: Debugger tips
date: '2004-10-21T11:07:43'
slug: debugger-tips
categories:
- Java
comments:
- id: 2604
  author: Emmanuel Pirsch
  date: '2004-10-21T12:07:36'
  content: 'This is a really nice post! Debugger are really useful and it''s a shame that only a small number of people use them.

    The trick on outputting stuff using conditional breakpoints is really a good idea! I often the "watch" feature but you do have to stop at a breakpoint to actually look at it. This tricks will make watching variable a lot simpler and allow for faster debugging.

    I''m not sure that doing crazy stuff is really a good idea (like using a JOptionPane to input the value if some condition is filled : stuff= (stuff == null ? stuff= JOptionPane.showInputDialog("New Value Please") : stuff) ).

    Emmanuel.'
  replies: []
- id: 2605
  author: Marc Logemann
  date: '2004-10-21T13:57:22'
  content: 'IDEA offers you many conditional expression and a log expression in the lower left corner (see http://www.logemann.org/divs/greatDebuggerStuff.gif). This way you dont need put println() in your code. I do it nevertheless sometimes, but when doing this, i created a template which looks like this (triggered by "soutv" + TAB):

    System.out.println("*MLDBG: $EXPR_COPY$ = " + $EXPR$); //todo remove me

    The variables get replaced depending on the context and the //todo is a special marker. All todo markers can be viewed in an IDEA window, this way you easily know where you have debug println()''s in your code.

    But its really weird that noone ever written something about debugging best practices. I mean more than just a few lines.

    marc'
  replies: []
- id: 2606
  author: Cedric
  date: '2004-10-21T14:01:03'
  content: 'I always call my logging methods "ppp" so they can be easily grepped, and they always include the class name:

    static void ppp(String s) {

    System.out.println("[Account] " + s);

    }'
  replies: []
- id: 2607
  author: Hani Suleiman
  date: '2004-10-21T14:01:41'
  content: 'I actually shove a lot of my println''s into a debugger conditional.

    Debuggers that allow you to evaluate code in the current frame will actually be much faster than using a println, because you can just evaluate all the things you''d want to print, and immediately act on the info by doing more evaluatings.

    Even more fun is changing the value of a variable in a stack frame. Lets''s say you expect x to be "foo", but for some reason it''s null, you don''t really want to fix that right now but want to get back to it once you verify that when x is "foo", the rest of the code behaves well. Easy! Just set a breakpoint where you want x to be "foo". and assign it a value when the breakpoint is hit.

    With system.out.println, I find myself fixing one bug at a time, with a debugger, during the same run instance I''ll often fix 3-4, given the powerful combination of hot-deploy and breakpoint magic.'
  replies: []
- id: 2608
  author: Greg Hinkle
  date: '2004-10-21T15:04:25'
  content: 'I''m a huge debugger fan as well. What has made debuggers even more powerful for me is context sensitive completion. For example, when creating breakpoint log messages in IntelliJ, the dialog includes the full editor auto-complete for the location of that breakpoint. Even if you are stuck in the mode of printlns for debugging, at least use breakpoint logs so that you don''t have to remember to remove them (and you don''t have to recompile and deploy to add/alter them).

    I also love that while I''m stepping through, the watch creation also has auto-complete. And altering stack variables... I use that for negative testing of my code.'
  replies: []
- id: 2609
  author: Nils Winkler
  date: '2004-10-22T04:10:45'
  content: 'Another great feature are Exception Breakpoints. In Eclipse, you can set a breakpoint on any Exception class and can specify whether you want to trigger it on handled or unhandled exceptions.

    So if you know there''s an Exception being thrown somewhere deep in your code, but don''t know under which exact condition, just put a breakpoint on that exception and start your application in debug mode. When the exception is thrown, the program will stop and you can see the actual context. Works great for runtime exceptions like NPE and the like.'
  replies: []
- id: 2610
  author: Jean-Baptiste Nizet
  date: '2004-10-22T07:17:59'
  content: 'Here''s something that most of you certainly know already, but that I only discovered today (how stupid I feel!).

    When you have multiple method calls in a single line of code, you may put the cursor on the method you''re interested in and hit CTRL-F5 in Eclipse to step into this method.

    For example, if you have

    doSomething(foo.getBar(), baz.blah(), xyz());

    and you''re interested into stepping into doSomething(), put your cursor on doSomething and hit CTRL-F5. Hitting F5 (step into) will step into foo.getBar().'
  replies: []
- id: 2611
  author: Mark
  date: '2004-10-22T08:36:37'
  content: 'For debugging in Eclipse  - Bugdel

    http://www.csg.is.titech.ac.jp/~usui/bugdel/index-e.shtml

    Check out the demos.

    What you think?'
  replies: []
- id: 2612
  author: Justin
  date: '2004-10-22T11:09:08'
  content: 'No matter how productive you are with your current tools, I guarantee you will be more productive with an IDE and with a debugger.

    Amen to that! I was using emacs for a long time and moving to Eclipse was pure heaven.  I am far more productive now.  I don''t even know why people even try with ancient editors.  BTW, My favorite feature of the Eclipse debugger is the ability to go back to the beginning of the method and run it over.  Without this feature it would be take a lot longer to run through a bunch of different test iterations.'
  replies: []
- id: 2613
  author: Pete
  date: '2004-10-22T12:02:29'
  content: IntelliJ debugger lets you stop when a field in a class has been modified. This is quite helpful when you are debugging someone elses code who likes to use static fields and you are not sure where it's being modified.
  replies: []
- id: 2614
  author: Suprakash Das
  date: '2004-10-22T12:32:29'
  content: 'Excellent point Cedric! I cannot agree with you more.

    Another feature that most of you probably already know about and that I''ve found very useful in the past... From the Help for the Eclipse Platform - "When stepping through your code, you might occasionally step too far, or step over a line you meant to step into. Rather than restarting your debug session, you can use the Drop to Frame action to quickly go back to the beginning of a method. Select the stack frame corresponding to the Java method you wish to restart, and select Drop to Frame from Debug view toolbar or the stack frame''s context menu. The current instruction pointer will be reset to the first executable statement in the method. This works for non-top stack frames as well."

    Related to the "Change variable" post by Hani; are you able to do this in Eclipse? I haven''t been able to figure out a way to set variables that are null to a not-null value or vice versa during debugging even with simple String literals. This has been a major annoyance in the past.'
  replies: []
- id: 2615
  author: Rob in NJ
  date: '2004-10-22T14:13:31'
  content: 'Another nice debug feature of eclipse is "Detail Formatters".

    This comes in real handy when clicking on a variable. Eclipse does a toString() on the object, when that does not make too much sense, IE Calendar, use the following Detail Formatter:

    if (this != null) {

    new java.text.SimpleDateFormat("MM/dd/yyyy hh:mm:ss a").format(this.getTime())

    }'
  replies: []
- id: 2616
  author: Juan Carlos Vergara
  date: '2004-10-22T22:26:48'
  content: Don't forget hot swap in debugging mode mainly to change classes at runtime when  takes a long time to reinitiate some containers and the threads monitor to see the call stack in some execution point
  replies: []
- id: 2617
  author: Patrick Schriner
  date: '2004-10-23T03:59:20'
  content: AspectJ / AJDT can be used for debugging Java programs in Eclipse as well; Especially good for logging.
  replies: []
- id: 2618
  author: a
  date: '2004-10-23T11:45:23'
  content: 'This is a tough one, because with Cedric coming out for debugging, I''m happy to continue to not use debuggers and not waste time with them.  But with Hani ALSO using them, I''m torn.

    For me, I''m faster than most of my co-workers and write fewer bugs, and don''t use a debugger or an IDE, so I''m not really motivated to use on.  Empirically, every really good developer I''ve ever known has used vim/emacs and no debugger.  Most developers I know who use IDEs and debugger are slower and write more bugs and are generally not as proficient.

    A debugger can tell you what the value of something is at a given point in time, but it says nothing about the data flow, which is what you need to examine when debugging.  Furthermore, print statements don''t tell you much about that either.  They also tell you what a value is at a given point in time.  The way to effectively debug is to understand the data flow: how could value of XX be incorrect?  Where is XX''s value changed?.  Understanding that is to debug.  A debugger doesn''t help any more than print statements.'
  replies: []
- id: 2619
  author: Julian
  date: '2004-10-23T21:25:07'
  content: 'I use the debugger about once a week when programming Java in Eclipse. The rest of the time, I can figure out problems by examing the code and program behavior.

    My biggest productivity improvement was when I started running my code within Eclipse, which compiles your Java files immediately as you edit them. Avoiding compilation delays is so nice. Plus, everything is set up if a debugger is needed.'
  replies: []
- id: 2620
  author: Synomous Howard
  date: '2004-10-24T06:30:18'
  content: Emacs GUD mode is pretty useful - can anyone point out the advantages of Eclipse over the Emacs GUD mode ?
  replies: []
- id: 2621
  author: ''
  date: '2004-10-24T10:37:41'
  content: The few times I've had to use a conditional breakpoint, the program-slow-down has been so great that I cancelled the run, added an if() statement, recompiled & re-ran.
  replies: []
- id: 2622
  author: Mike Spille
  date: '2004-10-24T15:15:25'
  content: 'I''ve always found debuggers to be more trouble then they''re worth.  When I observe people working with debuggers, they seem to always move at a glacial pace.  Worse - debugger setups don''t translate across debuggers or developers.  As others have stated, a debugger is highly ephemeral in nature.

    The speed thing is an issue as well.  I can''t believe people are advocating conditional breakpoints.  Where I work I actually see a great deal of code written which short circuits great swaths of code or reduces data set size, and this is done explicitly to speed up code under debug, and is useful only for speeding up under debug.  I don''t consider this a good thing.

    Oh, and Cedric et al, lay off the "println" argument.  Professionals don''t advocate println statements, they advocate controllable logging statements, which are a completely different animal.  The best thing about them being that you can turn them on, usually dyanmically, if a problem happens outside a convenient debug session e.g. in a QA or possibly even production environment.  And my debug logging statements exist for all developers using any tool to switch on.  You can''t say that for debuggers - they are individual to the developer and don''t contribute to overall team knowledge or expertise.

    Finally - it''s surprising that so many server-side people don''t have problems with timeouts, timing sensitive issues, threading, etc in using a debugger.  How many cumulative man-hours (perhaps I should say man-years :-) ) do you guys spend hitting endless problems with timeouts and figuring out how to set them artificially high to get your debug sessions to work?  How often do you end up blocking or deadlocking your co-workers when you''re stepping through database transactions?'
  replies: []
- id: 2623
  author: ''
  date: '2004-10-24T19:52:05'
  content: I can't agree more that IDE and debugger do saves life of a developer. Tell that to my company's senior "SOFTWARE ENGINEER" who insists that developers uses VI. For GOD SAKE, vi is good if we wanna change bits and pieces of code, but for serious development..... come on DUDE!!!!! And this senior "SOFTWARE ENGINEER" of mine f***king hate IDE's like eclise, intellij or whatsoever. Whenever I am doing something like "using ctrl click on the name" to jump to the class directly, he would be like "ahhh, you could do that in vi as well". YEAH! you could but its harder. Once, my colleague was using a debugger and was spoted by him, he would go like "ahh you should be using that at all, it spoils your skills". I wonder why such person gets promoted to be a "SENIOR SOFTWARE ENGINEER". LOL.
  replies: []
- id: 2624
  author: Xavier Brouwer
  date: '2004-10-25T00:30:49'
  content: 'Try using log4j and scattering DEBUG statements through your program.

    You can then use the external log4j properties file to indicate when and how you want debug statements to be outputted. The DEBUG logging level can then be switched off externally to the code when you ship.'
  replies: []
- id: 2625
  author: sp
  date: '2004-10-25T05:55:00'
  content: The debugging is handy when the project is in maintainence mode. More so when the developer who has not developed the feature in first place is responsible for maintainence. Though this is not a desirable condition but never the less not too uncommon. I totally agree with Mike that using debugger should not be a common practice.
  replies: []
- id: 2626
  author: Nico Mommaerts
  date: '2004-10-25T07:17:48'
  content: '"Try using log4j and scattering DEBUG statements through your program."

    Logging is not the  same as debugging, although the log level name ''DEBUG'' may be deceiving. Normally you use logging to have an overview of and monitor the overall status and flow of your system. Debugging is used if you have a small problem while developing and you have need of stepping through your application with additional information (content of values etc). The DEBUG level could have just as easily be named DEVELOPMENT_LEVEL or LOTS_OF_INFO_LEVEL, which helps you while developing.

    "Professionals don''t advocate println statements, they advocate controllable logging statements"

    Same point

    "...you guys spend hitting endless problems with timeouts and figuring out how to set them artificially high to get your debug sessions to work? How often do you end up blocking or deadlocking your co-workers when you''re stepping through database transactions?"

    I don''t know about other people, but my debugging sessions don''t take 2 hours :)

    Just my opinion...'
  replies: []
- id: 2627
  author: Kamran Zaidi
  date: '2004-10-25T07:48:15'
  content: 'Interesting discussion!

    Debuggers helps me a lot, especially when I am working on multi tier project with huge lines of code and want to fix some problem in production in very short time, your know how sensitive sev 1 issues r. I love debugging with IDEs, specially with eclipse.'
  replies: []
- id: 2628
  author: Mike Spille
  date: '2004-10-25T09:59:44'
  content: 'Nico - I don''t quite get your point on logging levels.  I think you''re sort of splitting hairs there.  In particular, using something like log4j you can turn on DEBUG for selective packages, so you can tightly target just one small section of your code.  Coupling such debug statements with various levels of test, I find a debugger to be superfluous.

    "I don''t know about other people, but my debugging sessions don''t take 2 hours :)".

    I''ve seen people stepping through stuff in debuggers for timelines ranging from a couple of minutes to several hours, it depends on their style, their task at hand, and whether they get interrupted or not.  A simple phone call in the middle of a debug session can often leave the program hanging in the middle of some time-sensitive piece of code and cause problems.  And on many projects I''ve fielded innumerable questions from people on problems related to timeouts and the like coupled with debug sessions.  And DB locking is a primary concern because developers often have to share databases.  One guy fields a call in the middle of tracing some stuff and half the development staff can be mysteriously locked.

    My question remains: for people who advocate debuggers for server side stuff, how do you deal with these issues?'
  replies: []
- id: 2629
  author: ''
  date: '2004-10-27T09:23:48'
  content: 'Someone asked how to set a null variable to a non-null value in Eclipse. The easiest way to do this is to use the Display view. Just execute an expression like: "myVariable= getNewValue()".

    Since conditional breakpoints have come up a couple times, I should point out that cond. BPs in Eclipse are more powerful than most people realize. Conditions can be either an expression OR a series of statements.

    A perfectly valid condition for an Eclipse breakpoint would be:

    List[] lists= getLists();

    for (int i= 0; i  50) {

    return true;

    }

    }

    return false;'
  replies: []
- id: 2630
  author: Jared Burns
  date: '2004-10-27T09:27:26'
  content: 'Bah. The form really screwed up my condition example (guess that''s what I get for not previewing). Let me try that again.

    List[] lists= getLists();

    for (int i= 0; i &lt; lists.size(); i++) {

    if (lists[i].size() &gt; 50) {

    return true;

    }

    }

    return false;'
  replies: []
- id: 2631
  author: hoijui
  date: '2004-11-01T08:20:04'
  content: 'thanks...

    as you say.. i encountered too, that such things dont get thought(teached? :D )

    i am one of those .. worst case developers...

    learne coding bymyself.. and.. only coding (evne that they couldn''t teach us at the IT school i went to)

    just now.. after.. about 3 years, i start to realise what i miss... the whole planing thing, how to use debbugers and all that.

    will start with this now, wiht help of your tips

    ..thanks again :-)'
  replies: []
- id: 2632
  author: Nico Mommaerts
  date: '2004-11-01T15:35:57'
  content: 'Mike - About the log4j, I still think there''s a difference between logging and debugging. If I''m debugging a piece of code, it''s because I want to inspect the context I''m in, arguments, variables etc. If I would do this by logging, I''d have to introduce logging everywhere in my code, and dump the value of each and every argument, variable, who knows what else. You just can''t know up front what values you need to see to solve a bug you have.

    A debugger also provides you with control of execution of your program, a logger doesn''t. Watching the code execute can give much needed additional insight into the flow control of a piece of code, especially if you haven''t written that code yourself.

    About the long debugging sessions, well, if you have seen it yourself, I can''t argue with that of course :) The DB locking you can solve by making each developer work on his own version of the DB, if the project environment allows this.'
  replies: []
- id: 2633
  author: Jeff
  date: '2006-07-10T10:35:14'
  content: 'Lately my logs have been spammed by http://www.openfos.com The entries will look something like http://www.openfos.com/supply/ with the name of your site or name at the end of the string. There would be dozens of hits a day with the same referal url with multiple user agents. They usually use the following IP''s to spam your logs:

    218.153.70.244

    221.148.31.116

    I don''t mind a hit or two a day, but when you have sometimes 30 hits a day! (The IP''s are also blocked in .htaccess )

    The site www.openfos.com is registered to a Korean company and e-mail to the IP''s network abuse go unanswered.

    I could not find a solution using scripts to prevent the loggin, so I had to go to the server and Apache. Are there solutions to use conditional logging to stop log spamming without going into the main server files?

    Thanks!

    Jeff'
  replies: []
- id: 2634
  author: Mike
  date: '2006-08-03T12:29:47'
  content: 'Jeff,

    I don''t know of any way to use a script to keep openfos.com out of your logs. The best things to do is to deny and block the www.openfos.com IP''s that your are logging:

    218.153.70.244

    221.148.31.116

    Then use conditional logging (as you are doing) to shunt the openfos entries to a seperate log file that can be manually or deleted on  a scheduled basis. I know the deny ip in .htaccess will stop them from getting on your site.

    I wish that these companies in places like Korea and China would enforce spam and other web abuse! That would make our life a bit easier.

    Good Luck!

    Mike'
  replies: []
- id: 2635
  author: Mike
  date: '2006-08-03T14:55:30'
  content: 'Jeff,

    I forgot to tell you one thing about the conditional logging... Make sure you block the IP''s that belong to openfos.com and then take the openfos IP''s and use them for the shunt to your conditional logging. If you attempt to make a run using the domain openfos.com and use that for the conditional log, they may change their url for the hit. I understand from some lists that openfos web log spamming has changed from using "_" underscores to connect words to "-" hyphens. In any case, the best thing to do is to use the IP''s for openfos to keep the hits out of your logs.

    Again,

    Good Luck!'
  replies: []
- id: 2636
  author: Mike
  date: '2006-08-03T14:56:06'
  content: 'Jeff,

    I forgot to tell you one thing about the conditional logging... Make sure you block the IP''s that belong to openfos.com and then take the openfos IP''s and use them for the shunt to your conditional logging. If you attempt to make a run using the domain openfos.com and use that for the conditional log, they may change their url for the hit. I understand from some lists that openfos web log spamming has changed from using "_" underscores to connect words to "-" hyphens. In any case, the best thing to do is to use the IP''s for openfos to keep the hits out of your logs.

    Again,

    Good Luck!'
  replies: []
- id: 2637
  author: ''
  date: '2006-08-06T15:40:58'
  content: 'Here is a script that may keep the spam logs and abuse from your logs. The other thing it does, that is rather funny, is that they will get a blank page if the Korena openfos.com log spammers hit your site. Please note if you add IP''s just put this line and change zeros to the IP number and place it in the script below the first IP in the script:

    "000.000.000.000",

    ALSO your pages need to be done in php and this goes at the top off all of your pages. It will also work with any IP''s you want. With some changes it will also work by bot name too.

    Depending on how your program logs, this script may also prevent logging of the offensive IP''s or bots.'
  replies: []
- id: 2638
  author: Mike
  date: '2006-08-06T15:41:46'
  content: 'Here is a script that may keep the spam logs and abuse from your logs. The other thing it does, that is rather funny, is that they will get a blank page if the Korena openfos.com log spammers hit your site. Please note if you add IP''s just put this line and change zeros to the IP number and place it in the script below the first IP in the script:

    "000.000.000.000",

    ALSO your pages need to be done in php and this goes at the top off all of your pages. It will also work with any IP''s you want. With some changes it will also work by bot name too.

    Depending on how your program logs, this script may also prevent logging of the offensive IP''s or bots.'
  replies: []
- id: 2639
  author: Mike
  date: '2006-08-06T15:42:10'
  content: 'Here is a script that may keep the spam logs and abuse from your logs. The other thing it does, that is rather funny, is that they will get a blank page if the Korena openfos.com log spammers hit your site. Please note if you add IP''s just put this line and change zeros to the IP number and place it in the script below the first IP in the script:

    "000.000.000.000",

    ALSO your pages need to be done in php and this goes at the top off all of your pages. It will also work with any IP''s you want. With some changes it will also work by bot name too.

    Depending on how your program logs, this script may also prevent logging of the offensive IP''s or bots.'
  replies: []
- id: 2640
  author: Mike
  date: '2006-08-06T15:44:35'
  content: 'For some reason, I can''t post the actual script. Sorry! Bur if you look up "php" and "make array" and "exit" you should find the script I''m taking about.

    Good luck!'
  replies: []
- id: 2641
  author: Millard Stevens
  date: '2006-12-25T11:54:23'
  content: 'We have had severe problems with the company called Insight Communications, LLC. They have been hammering our site until we blocked their domain totally. We will now try to keep their hits out of the logs.

    E-mails to the company have proved useless so now our legal people are going to "serve" the company for violating posted user agreements and legal notices. They have a real interesting "bot" that uses a normal Microsoft browser string, but looks for robots.txt first. Yea! I real person looking at the site I''m sure.

    I become really suspect when I find these companies that have U.S. Government contracts then hammer your site and ignore reports to their abuse departments. It seems like these things are being done with the insightbb''s blessing. But why? Until they become responsible they are blocked from my site.

    It brings me to the point, why can''t they develop a database (like that for spam)where these companies agents and IP''s are registered, then webmasters could download it as a master "blocked" list? When companies are blocked and shut out and the people who use their services can''t see anything on the web, perhaps they''d act a lot more responsibly.

    Anyhow, that''s what I''d like to see. A master database of abusive bots, IP''s and companies that sponsor them that can be downloaded to a local server to block them from sites.

    Can this be done?'
  replies: []
- id: 2642
  author: Brent
  date: '2007-01-09T22:42:41'
  content: 'I have been having the openfos problem as well. They get me using the ip 59.10.167.58

    It is easy to find them, they always have the same number of hits and visits, unlike a real search engine.'
  replies: []
- id: 2643
  author: Mike
  date: '2007-01-24T15:12:22'
  content: 'Brent,

    We don''t know about log spam from openfos anymore. We have all of their IP''s and they shunt out of our logs due to the logging configuration. To make a long story short, openfos.com in our logs no longer exists since 2006. We do have the 59.* dumped out of our logs too.

    I''m sure Openfos is a great "ambassador" for Korea! LOL!

    They are not only log spammers, but they are e-mail spammers too. If any header contains openfos it is "discarded."

    Shame on Korea.net for this garbage!'
  replies: []
- id: 2644
  author: Mike
  date: '2007-01-26T18:08:37'
  content: 'Brent,

    CORRECTION!

    THe log spamming from openfos is though Korea Telecom. You can send an e-mail to abuse@kornet.net and wait to see if the stop the log spamming or e-mail spamming from openfos. Ya! Sure! LOL! :-)

    I think APNIC should pull IP''s from abusive companies that allow e-mail and log spamming. Just my opinion.

    Our log spamming friends at Korea Telecom:

    inetnum:      59.0.0.0 - 59.31.255.255

    netname:      KORNET

    descr:        KOREA TELECOM

    descr:        Network Management Center

    country:      KR

    admin-c:      IM76-AP

    tech-c:       IM76-AP

    remarks:      ***********************************************

    remarks:      KRNIC of NIDA is the National Internet Registry

    remarks:      in Korea under APNIC. If you would like to

    remarks:      find assignment information in detail

    remarks:      please refer to the NIDA Whois DB

    remarks:      http://whois.nida.or.kr/english/index.html

    remarks:      ***********************************************

    status:       Allocated Portable

    mnt-by:       MNT-KRNIC-AP

    changed:      hm-changed@apnic.net 20040802

    changed:      hm-changed@apnic.net 20041007

    source:       APNIC

    person:       IP Manager

    nic-hdl:      IM76-AP

    e-mail:       ip@krnic.kornet.net

    e-mail:       abuse@kornet.net

    address:      Seoul

    address:      206, Jungja-Dong, Bundang-Gu, Sungnam, Gyunggi-Do

    address:      463-711

    phone:        +82-2-3674-5708

    fax-no:       +82-2-747-8701

    country:      KR

    changed:      hostmaster@nic.or.kr 20061009

    mnt-by:       MNT-KRNIC-AP

    source:       APNIC

    inetnum:      59.10.167.0 - 59.10.167.63

    netname:      KORNET-INFRA000001-KR

    descr:        Korea Telecom

    country:      KR

    admin-c:      IM05193-KR

    tech-c:       IM05193-KR

    remarks:      This IP address space has been allocated to KRNIC.

    remarks:      For more information, using KRNIC Whois Database

    remarks:      whois -h whois.nic.or.kr

    mnt-by:       MNT-KRNIC-AP

    remarks:      This information has been partially mirrored by APNIC from

    remarks:      KRNIC. To obtain more specific information, please use the

    remarks:      KRNIC whois server at whois.krnic.net.

    changed:      hostmaster@nic.or.kr

    source:       KRNIC'
  replies: []
- id: 2645
  author: Mike
  date: '2007-04-25T04:50:46'
  content: 'This is the silliest thread I have ever had the misfortune of reading. Folks actually arguing *against* debuggers? Please don''t try to pawn yourselves off as software engineers. You aren''t.

    I suppose EE''s should stop using line testers and "understand" the flow of electricity in their circuit, eh?'
  replies: []
- id: 2646
  author: Mike
  date: '2007-04-25T04:51:40'
  content: 'This is the silliest thread I have ever had the misfortune of reading. Folks actually arguing *against* debuggers?

    I suppose EE''s should stop using line testers and "understand" the flow of electricity in their circuit, eh?'
  replies: []
- id: 2647
  author: Harvinder
  date: '2008-03-07T04:31:55'
  content: 'Does anybody know how to make Eclipse move back to some previous line which it has already executed?

    Please email if anybody have clue.'
  replies: []
---

Debuggers are back in the spotlight with a recent post from [Kasia](http://www.unix-girl.com/blog/archives/001607.html).  She likes debuggers, so do I.

I have already expressed my views [ here](http://beust.com/weblog/weblog/2003/12/08/the-power-of-debuggers/) and [here](http://beust.com/weblog/weblog/2003/12/11/more-on-debuggers/) on the importance of debuggers and my philosophy is quite simple:

> No matter how productive you are with your current tools, I guarantee you will be more productive **with** an IDE and **with** a debugger. 

I am pretty good with emacs and vi, with pinpointing potential bug areas by just reading code or quickly reading reams of output on a console, but at the end of the day, I just get things done faster if I add my IDE and a debugger to my arsenal of tools.  Ignoring this simple common sense is like being a caveman saying that he's okay without fire.

The point of this entry is not to revive this debate (let's leave cavemen into their caves) but to ponder the following question:  why is there almost no information on **how** to use a debugger wisely?  I don't mean the user manual telling you how to set a breakpoint and how to single-step through code.  I mean a "good practice" guide.

As far as I know, this is not taught in school and hardly broached in books and I wonder why.  Is it because debuggers vary widely in scope and functionalities?

 I don't believe this statement is true any more:  these days, debuggers have converged toward a very similar set of functionalities and except for a few innovations such as back-in-time debugging, you can reasonably expect your debugger to offer the same functions, regardless of the language or the operating system you are debugging in.

I would love to see a central place where all debugger tips and practices can be found, I'm sure there is a wealth of information waiting to be uncovered out there.

I'll start with a few tips of my own.

**Run method till it exits**

Sometimes, you accidentally step into a method you didn't mean to investigate, typically a library method.  You want to "get out" of this method so you can resume the debugging of the method you are really interested in.  You do this in Eclipse with the Step return button:

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/step-return.jpg)

Press it and the current method will be run until it exits and the current frame is popped, taking you back to where the call was made.

**Using conditional breakpoints.**

I cannot overstate how important conditional breakpoints are.  Unless you are working on a very simple piece of code, the bug you are trying to find or the code you are trying to test will probably not be exercised right away, or it will be run several times without the parameters you are expecting.  The only way to get there faster is to type in entire expressions in your conditional breakpoint text box.

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/breakpoint.JPG)

**Using break conditions for println**

As I stated in the link above, I'm not a big fan of "println debugging", which is antiquated and actually quite dangerous at times.  That being said, a bug sometimes happens after a certain number of iterations which cannot be easily captured by a conditional breakpoint (see below).  Or maybe, you just want to have some information about the state of the program displayed on stdout so that when you hit your breakpoint, the console contains some context information.

How could you do this without inserting println's in your code?

Simple :  use a breakpoint expression that will do this println for you.

For example, the expression above could simple be replaced with "System.out.println(methodName)".  Since this expression will never return true, the program will never stop, but it will display the value of methodName throughout the entire execution.

Now, that's what I call an efficient use of println and since the logic is contained in the debugger and not your code, no risk of shipping with it.

Of course, you don't have to limit this to just println, you could just as easily modify existing variables or do some other crazy stuff...

How about you?  Any hot tips to share about your relationship with your debugger?
