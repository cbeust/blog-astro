---
title: Distributed TestNG
date: '2006-02-08T12:48:12'
slug: distributed-testng
categories:
- Java
comments:
- id: 4802
  author: Andrew GJ Fung
  date: '2006-02-08T13:37:19'
  content: 'From two-phase commit terminology, "coordinator" and "participant"?

    This is a good idea!  Slow test suites discourage testing often.

    I think sequential, unless classloaders are used to prevent concurrency issues on statics.  I think tests are often written with the unconscious assumption of sequential running.

    It strikes me that something similar could be achieved by setting up tests to be run from the command line, and distributing it with conventional grid technology.  Those products would handle any resource pool management issues, one would only have to worry about breaking up the request and aggregating the results.'
  replies: []
- id: 4803
  author: eu
  date: '2006-02-08T14:16:57'
  content: 'Look great, but it is unclear how do you marshal classes and other configuration to the remote runners?

    If it is not there yet, thn maybe it worth to look at some continous integration server. I believe Continuum has multi-server support since recently, so it could be interesting to hook into it, so all the code and required resource could be transparently sent to the remote server for the execution which is already running anyways.'
  replies: []
- id: 4804
  author: Cedric
  date: '2006-02-08T14:26:05'
  content: Right now, the only serialization that happens is done by TestNG.  The test developer doesn't need to worry about it (no need to make their tests serializable) since only the class names and their results are exchanged between master and slaves.
  replies: []
- id: 4805
  author: Cedric
  date: '2006-02-08T14:27:12'
  content: As for your other remark, yes, the hard work (making TestNG run remotely) is done, so it should be fairly easy to integrate with any continuous build server.
  replies: []
- id: 4806
  author: Christian
  date: '2006-02-08T14:40:29'
  content: 'Just curious: why did you implement it so that the master has to know its slaves instead of the other way around?'
  replies: []
- id: 4807
  author: Cedric
  date: '2006-02-08T14:45:14'
  content: 'Ah, I *knew* this would come up :-)

    No particular reason, I weighed the pros and cons of each and couldn''t determine that an approach was blatantly better than the other one, so I just picked one.

    The downside of having the clients declare themselves to the master is the risk of creating a "ping storm" on the master, but the advantage of that approach is that the master needs to do a lot less bookkeeping...

    I can still be convinced either way...  (or even support both models).'
  replies: []
- id: 4808
  author: eu
  date: '2006-02-08T15:18:49'
  content: Cedric, are you saying that classes and otherdependencies are not delivered to the slaves? How does that suppose to work for more or less complicated and actively changed code?
  replies: []
- id: 4809
  author: Cedric
  date: '2006-02-08T15:21:15'
  content: Only the class names (actually, the testng.xml) is transmitted to the slaves.  The slaves then simply load these classes and run the tests in them (it is assumed that they have these classes in their classpath).
  replies: []
- id: 4810
  author: Jesse Wilson
  date: '2006-02-08T17:10:09'
  content: This seems like a great place to support zero configuration. Apple's Bonjour or JINI both solve the detection and discovery problems, which means your users don't have to shuffle IP addresses.
  replies: []
- id: 4811
  author: Geoff
  date: '2006-02-08T17:57:49'
  content: '"The slaves then simply load these classes and run the tests in them (it is assumed that they have these classes in their classpath)"

    That doesn''t seem to be very distributed, couldn''t you load the classes from the server?'
  replies: []
- id: 4812
  author: Cedric
  date: '2006-02-08T18:04:32'
  content: Yes, eventually, I'd like to be able to distribute classes from the server, but for now, the goal is simply to be able to distribute the CPU load...
  replies: []
- id: 4813
  author: ''
  date: '2006-02-09T00:35:24'
  content: '"master / slaves" is just fine and very well established and accepted in the computer science jargon. Granted you live in the US, but do you *really* feel you need to be politically correct on this? :)

    Merry... holidays ;)'
  replies: []
- id: 4814
  author: Ruslan Zenin
  date: '2006-02-09T08:03:54'
  content: 'How about this naming:

    "slave" -> "testServer" (since that whatit realy is)

    "master" -> "testClient" or "testDirector"

    Also, I would use UDP multicast for auto-discovery.

    Each test server will register on specific range of multicast group and your test client when you run it will send ONLY one UDP multicast call and will wait for the reply from available test servers...'
  replies: []
- id: 4815
  author: Ruslan Zenin
  date: '2006-02-09T08:07:37'
  content: 'In addition, your test client might receive statistics from test server (e.g. current CPU load, number of connected clients, number of the tests to be executed on the queue, etc).

    Based on this information you can make "smart" load-balancing decisions'
  replies: []
- id: 4816
  author: Deva
  date: '2006-02-09T11:48:47'
  content: 'I am surprised working in Google you didn''t look up the Google File System design before you decided to see if the clients should identify themselves to Master or the other way around.

    Another suggestion, explaning the fact that all the test slaves should all have the jar files and JVM installed with correct version dependencies in your documentation would also tremendously help.

    ;-)

    --Deva.'
  replies: []
- id: 4817
  author: Laurent Ploix
  date: '2006-02-09T14:25:52'
  content: 'I have a "special" use case : I would like to have the same tests run on several machines, just to tests several OSes and versions.

    Exemple 1 : I want to tests the same 1.4.2 compiled classes, but on :

    -> W$ / 1.4.2 VM

    -> W$ / 1.5 VM

    -> Solaris / 1.4.2

    -> AIX / 1.4.2

    Exemple 2 : In fact, I now run my python tests integrated seamlessly into TestNG... and it would be sssssoooooo great to be able to run the python tests on all the OSes I use (W$ / Solaris / Tru64 / Linux / HP / AIX).

    Just my 2 cents...'
  replies: []
- id: 4818
  author: Jon Tirsen
  date: '2006-02-09T14:41:20'
  content: 'How are changed classes distributed to the "slaves"? Is this handled by TestNG or do you manually have to do it with scp or networked file system or something as such?

    If it''s handled by TestNG I assume there''s some form of remote class loader scheme in place. That makes me slightly scared as class loader juggling usually end in tears.'
  replies: []
- id: 4819
  author: Jon Tirsen
  date: '2006-02-09T14:41:42'
  content: 'How are changed classes distributed to the "slaves"? Is this handled by TestNG or do you manually have to do it with scp or networked file system or something as such?

    If it''s handled by TestNG I assume there''s some form of remote class loader scheme in place. That makes me slightly scared as class loader juggling usually end in tears.'
  replies: []
- id: 4820
  author: Jon Tirsen
  date: '2006-02-09T14:43:22'
  content: 'Oh, I missed your last paragraph. Sorry. :-)

    As I said, if you implement remote class loading be sure to make it optional.'
  replies: []
- id: 4821
  author: Dan Creswell
  date: '2006-02-13T10:07:06'
  content: '"If it''s handled by TestNG I assume there''s some form of remote class loader scheme in place. That makes me slightly scared as class loader juggling usually end in tears."

    I''m not sure I understand your reasoning.  If you use the more manual approach with NFS or SCP or whatever, you''ll be in the same hell I think?

    You''ve delivered new classes which you need to get into the slave.  How do you get it to load those new classes in favour of the old ones?  You can restart the slave JVM of course but it''s not entirely desirable - what if someone else is running a test at the time?  If you don''t want to restart the slave that brutally you''ll be into classloader games I suspect?'
  replies: []
- id: 4822
  author: John
  date: '2006-02-24T22:16:44'
  content: 'A couple things - one, Laurent has a very good idea.  Distributed testing can serve two purposes (1. distribute load over many CPUs and 2. to provide testing over a span of many different OS and hardware platforms).  It looks like your approach solves 1. easily but I don''t think 2 is supported.  Since it seems the master is picking and choosing which tests to send to which slaves.  You should have a mode that sends ALL tests to ALL slaves.

    The second thing - perhaps use multicasting as someone suggested to help alleviate the prior knowledge of which slaves go to which master and/or vice versa.  Slaves/masters need only know the addr/port of the multicast.  You could use different addr/ports if you have different master/slave configurations, but in the typical case, both master and slave could default to a commonly agreed upon rendevous point and therefore no pre-configuration of IPs/hostnames would be required.  The master merely belts out a call "who wants to take this test" and listens for a slave to reply.  First one wins, or whatever strategy you want to use.  But that initial handshake is all you would need, once a slave calls in, it can send additional info (like what TCP/IP port the master can use to communicate directly with the slave as an example).'
  replies: []
- id: 4823
  author: Steve Nahm
  date: '2007-09-07T19:02:45'
  content: 'I''d like to second John''s comment on the need/value of being able to distribute tests to different platforms to validate software on different OS/hardware platforms.  At the least you should include the ability to run ALL tests on all clients, not just divvy the tests up among them. An alternative system is STAF http://staf.sourceforge.net/index.php) but suffers greatly from difficult test development.

    Regarding distributing the clients/slaves, this sounds like good application for JXTA (http://jxta.org), the Java P2P system.'
  replies: []
- id: 4824
  author: Pankaj Arora
  date: '2007-10-12T17:20:45'
  content: 'public class T {

    public static int m_count = 0;

    @Configuration(beforeSuite = true) // or beforeTest, or after

    public void init() {

    m_count = 0;

    }

    @Test

    public void f() {

    m_count++;

    assertEquals(1, m_count);

    }

    }

    What to do if I have Singleton which does some system wide settings for a test case. When I run the next test case that static method from my code is not used as it is running on same JVM.

    I tries fork="yes" but I think it does not work with testNg. Any ideas?'
  replies: []
- id: 4825
  author: VS
  date: '2009-05-26T12:53:44'
  content: 'Hello Cedric,

    Can you kindly let us know how to use this feature with the latest version of testNG(testng-5.8-jdk15.jar). I tried launching the slave with following command

    java -cp "testng-5.8-jdk15.jar" org.testng.TestNG -slave 5150

    I get the following error,

    [ERROR]:

    Fail to initialize slave mode

    What is missing here? Do we have to add some more jar files? Can you please respond to this soon? We are trying to decide if testNG can provide some distributed testing feature. Thanks a lot!

    VS'
  replies: []
- id: 4826
  author: Craig
  date: '2009-07-27T22:20:27'
  content: 'Hi VS,

    Try running it like this:

    java -cp "testng-5.8-jdk15.jar" org.testng.TestNG -slave slave.properties

    In slave.properties file:

    slave.port=5150

    verbose=0

    -Craig'
  replies: []
- id: 4827
  author: Aleksandar
  date: '2009-10-13T04:47:14'
  content: When running the slave, how can I put verbose option. I would like to see some output on the slave machine as well.
  replies: []
---

And I thought na
