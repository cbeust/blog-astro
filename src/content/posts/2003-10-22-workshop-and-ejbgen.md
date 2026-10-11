---
title: Workshop and EJBGen
date: '2003-10-22T09:20:27'
slug: workshop-and-ejbgen
categories:
- Java
comments:
- id: 618
  author: Eric
  date: '2004-03-23T00:27:22'
  content: 'Hi,

    Is EJBGen using Sun''s default source of 1.3 instead of 1.4?

    I am trying to compile the message driven bean in Workshop:

    package com;

    import javax.ejb.*;

    import javax.jms.*;

    import weblogic.ejb.*;

    /**

    * @ejbgen:message-driven

    *   ejb-name = mybean

    *   destination-jndi-name = destJNDIName

    *   destination-type = javax.jms.Queue

    *

    */

    public class mymdb

    extends GenericMessageDrivenBean

    implements MessageDrivenBean, MessageListener

    {

    public void onMessage(Message msg) {

    assert true : "You should never see this";

    assert false : "This will pop up if the assertions are on in jre";

    }

    }

    But I get these errors:

    Application Build Starting

    Application Build Status: ericejb

    BUILD STARTED

    check-env:

    clean:

    Deleting 1 files from C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build

    Deleted 2 directories from C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build

    removed module ''ericejb.jar''

    build:

    WARNING: Building to temporary directory C:\DOCUME~1\pollardt\LOCALS~1\Temp\/wlw_ericejb_build...

    WARNING: Running EJBGen...

    Loading source file C:\DOCUME~1\pollardt\LOCALS~1\Temp\/wlw_ericejb_build/com\mymdb.java...

    C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build\com\

    WARNING: mymdb.java:19: as of release 1.4, assert is a keyword, and may not be used as an identifier

    assert true : "You should never see this";

    ^

    WARNING: mymdb.java:20: as of release 1.4, assert is a keyword, and may not be used as an identifier

    assert false : "This will pop up if the assertions are on in jre (-ea or -ea:com.nokia... flag)";

    ^

    4 errors

    2 warnings

    post-ejbgen:

    WARNING: EJBGen ok.  Compiling...

    Compiling 1 source file to C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build

    C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build\com\mymdb.java:19: warning: as of release 1.4, assert is a keyword, and may not be used as an identifier

    assert true : "You should never see this";

    ^

    C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build\com\mymdb.java:19: not a statement

    assert true : "You should never see this";

    ^

    C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build\com\mymdb.java:19: '';'' expected

    assert true : "You should never see this";

    ^

    C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build\com\mymdb.java:20: warning: as of release 1.4, assert is a keyword, and may not be used as an identifier

    assert false : "This will pop up if the assertions are on in jre (-ea or -ea:com.nokia... flag)";

    ^

    C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build\com\mymdb.java:20: not a statement

    assert false : "This will pop up if the assertions are on in jre (-ea or -ea:com.nokia... flag)";

    ^

    C:\DOCUME~1\pollardt\LOCALS~1\Temp\wlw_ericejb_build\com\mymdb.java:20: '';'' expected

    assert false : "This will pop up if the assertions are on in jre (-ea or -ea:com.nokia... flag)";

    ^

    4 errors

    2 warnings

    BUILD FAILED

    ERROR: Compile failed; see the compiler error output for details.

    Application Build had errors.'
  replies: []
- id: 619
  author: popup
  date: '2004-08-31T17:13:30'
  content: Will my personal information be public if I post here?
  replies: []
- id: 620
  author: Namita
  date: '2005-05-04T00:25:41'
  content: 'hi,

    we are facing the same problem we have used jdk1.4 and resin server 3and resin 2.1.16 both

    same assert error is coming how u solved that problem please help'
  replies: []
- id: 621
  author: Carlos de Luna
  date: '2005-12-29T15:40:49'
  content: 'I am facing the same problem with maven 1.0.2

    Greetings'
  replies: []
---

If you are curious to see how Workshop supports EJBGen, take a look at [this article](http://dev2dev.bea.com/products/wlworkshop81/articles/EJB_Development.jsp) on dev2dev. 

Also, I just noticed that the [EJBGen mailing-list](http://groups.yahoo.com/group/ejbgen/) has passed the 600 subscribers. It looks like there are still a few people using EJB's after all...
