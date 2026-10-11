---
title: Announcing TestNG 4.0
date: '2005-10-11T08:38:01'
slug: announcing-testng-4-0
categories:
- Java
comments:
- id: 4286
  author: Zsolt
  date: '2005-10-11T01:28:40'
  content: 'Congrats!

    I think it should be straightforward to use the DataProvider mechanism to integrate FIT with TestNG test suites. Has anyone tried it yet?'
  replies: []
- id: 4287
  author: eu
  date: '2005-10-11T02:05:42'
  content: Crap! You did go with rrays after all... :(
  replies: []
- id: 4288
  author: Geert Bevin
  date: '2005-10-11T02:50:44'
  content: Congrats on the 4.0 release! Looking forward to trying it.
  replies: []
- id: 4289
  author: R. Zenin
  date: '2005-10-11T11:03:17'
  content: 'Can I create dataprovider with 1-dimentional array?

    e.g.

    @Test(dataProvider = "test1")

    public void verifyData1(Object value) {

    System.out.println(value);

    }

    @DataProvider(name = "test1")

    public Object[] createData1() {

    return new Object[] {

    "Value1", "Value2"

    };

    }'
  replies: []
- id: 4290
  author: R. Zenin
  date: '2005-10-11T11:07:03'
  content: 'Also what about collections?

    e.g.

    @Test(dataProvider = "test1")

    public void verifyData1(Object value) {

    System.out.println(value);

    }

    @DataProvider(name = "test1")

    public Set createData1() {

    return new HashSet();

    }

    and finally can I do this?:

    @Test(dataProvider = "test1")

    public void verifyData1(Date value) {

    System.out.println(value);

    }

    @DataProvider(name = "test1")

    public List createData1() {

    List res =  new ArrayList();

    res.add(new Date());

    return res;

    }'
  replies: []
- id: 4291
  author: R. Zenin
  date: '2005-10-11T11:11:40'
  content: 'My &lt; and &gt; got stripped off...

    I meant last example a list of Date objects:

    @Test(dataProvider = "test1")

    public void verifyData1(Date value) {

    System.out.println(value);

    }

    @DataProvider(name = "test1")

    public List&ltDate&gt; createData1() {

    List res = new ArrayList();

    res.add(new Date());

    return res;

    }'
  replies: []
- id: 4292
  author: ''
  date: '2005-10-11T11:12:34'
  content: 'My &lt; and &gt; got stripped off...

    I meant last example a list of Date objects:

    @Test(dataProvider = "test1")

    public void verifyData1(Date value) {

    System.out.println(value);

    }

    @DataProvider(name = "test1")

    public List&lt;Date&gt; createData1() {

    List res = new ArrayList();

    res.add(new Date());

    return res;

    }'
  replies: []
- id: 4293
  author: Cedric
  date: '2005-10-11T11:17:49'
  content: 'No, Data Providers return Object[][].

    It wouldn''t be hard to support, but it''s pretty easy to convert any collections to an array...

    --

    Cedric'
  replies: []
- id: 4294
  author: Larry Williams
  date: '2005-10-11T23:08:13'
  content: I'd like to use TestNG but Maven 2 does not support it yet. When will there be a Maven 2 plugin?
  replies: []
- id: 4295
  author: faustothegrey
  date: '2005-10-12T01:43:53'
  content: 'Hi

    I''m a developer of the JTestCase project. http://jtestcase.sourceforge.net/

    I was thinking of ways to integrate the two frameworks and Data Providers seem to be

    the right kind of hook for integration.

    If you think it is of some interest, i can give more details eventually.

    Yours, Fausto'
  replies: []
- id: 4296
  author: amou
  date: '2005-10-13T18:19:07'
  content: 'hi, cedric

    thanks for your work!

    I just haven''t read your code, but I crated my own  dataprovider system. My codes here:

    public class Test2 {

    public Test2() {

    }

    @DataProvider(method="provide")

    public int add(int a, int b){

    System.out.println(a+b);

    return a+b;

    }

    @DataProvider(method="provide2")

    public Object[][] provide(int x,int y){

    return new Object[][]{{x,x},{x,y},{y,y}};

    }

    @DataProvider(method="provide3")

    public Object[][] provide2(int x){

    return new Object[][]{{x*x,x+x}};

    }

    public Object[][] provide3(){

    return new Object[][]{{4}};

    }

    }

    and the output here as your suppose:

    32

    24

    16

    It''s not perfect now, because provider''s provider cann''t pass multi-params, only the root provider can cause a loop of test case.

    any one have ideas?'
  replies: []
- id: 4297
  author: Jose Gonzalez
  date: '2005-10-14T06:59:05'
  content: '+1 on the Maven 2 plugin... any info on this?

    Great work!!!'
  replies: []
- id: 4298
  author: Joerg Gellien
  date: '2005-11-14T01:59:48'
  content: 'Hi all,

    first of all - great work!

    The framework is evolving realy quick.

    Like Fausto above I am developing a data centric approach to testing:

    http://ddtunit.sourceforge.net

    As soon as there is more time on my schedule I will try to dock on your new DataProvider concept.

    Again, like Fausto I am interested in discussion on use of external definitions of complex data types in testing.

    best regards

    Joerg'
  replies: []
- id: 4299
  author: sagar
  date: '2006-01-01T23:09:18'
  content: 'Hi,when iam trying plugin testng-eclipse plugin with wsad the icon is not appearing in showview

    other,java.I placed this testng-eclipse plugin into eclipse directory and restarted the system..

    some times it is showing as org.eclipse.core.resources/expressions is not found...Iam using WSAD 5.1 application developer'
  replies: []
- id: 4300
  author: sagar
  date: '2006-01-02T00:14:39'
  content: 'Hi cedric,

    Iam using j2sdk1.4...so would u pls tell me the possible ways to integrate testng with eclipse?suggest me to run testng samples by using standalone dos prompt with jdk 1.4..in your website there is a article which has some screens hots  ...of how to integrate testng with eclipse with testng-eclipse plugins.....i downloaded the testng-eclipse plugin from your plugin''s directory og org.testng site and extracted the into eclipse  plugins directory...after restarting the server the icon of testng is not appearing when iam selecting window/showview/other

    /java/  only junit and projectresorces is coming...since from last two days iam trying for this but still remains as a problem for me...we are going to use testng in my current project ...so before that i want to make a testng setup...would u pls suggest me how to use testng with command prompt if iam not using any editor...so i want to writw testng programme using edit plus and testng.xml also so what are the jar files required to set in the claaspath..and how can i run that application...so please give me the solution ASAP as u can..expecting the result   .Thanks

    sagar...'
  replies: []
- id: 4301
  author: Hema
  date: '2006-01-03T05:49:21'
  content: 'Hi Cedric,

    I have j2sdk 1.4.2_10 installed on my system. I''m using eclipse 3.0 and downloaded the testng plugin for eclipse and placed it in eclipse directory. In the show view i can see TestNG icon and also in Run i can see TestNG related icons. But, when I''m clicking on them there is an error while loading the plugin. But i''m not having this problem if i use jdk1.5. Can you please clarify me whether eclipse plugin works only with jdk1.5 or can i make it work with jdk 1.4.

    Thank You..

    Hema'
  replies: []
- id: 4302
  author: Hema
  date: '2006-01-03T05:50:23'
  content: 'Hi Cedric,

    I have j2sdk 1.4.2_10 installed on my system. I''m using eclipse 3.0 and downloaded the testng plugin for eclipse and placed it in eclipse directory. In the show view i can see TestNG icon and also in Run i can see TestNG related icons. But, when I''m clicking on them there is an error while loading the plugin. But i''m not having this problem if i use jdk1.5. Can you please clarify me whether eclipse plugin works only with jdk1.5 or can i make it work with jdk 1.4.

    Thank You..

    Hema'
  replies: []
- id: 4303
  author: ''
  date: '2006-02-04T12:27:46'
  content: Any news about maven 2 plugin ?
  replies: []
- id: 4304
  author: Cedric
  date: '2006-02-04T16:10:47'
  content: Yes, the Maven2 plug-in is complete but needs a few check-ins in the Maven source to be functional.  Please take a look at the mailing-list to see the latest updates about it.
  replies: []
- id: 4305
  author: Nikolas Pontikos
  date: '2006-02-16T18:12:10'
  content: 'Hello Cedric,

    If I want to run TestNG from my code by creating a TestNG object, I get the problem that TestNG seems to always be running the same test...

    This is the code I''m running:

    TestNG tg = new TestNG();

    tg.setOutputDirectory("test_results") ;

    List list = new ArrayList() ;

    list.add("testng2.xml") ;

    tg.setTestSuites(list) ;

    tg.run() ;

    In testng2.xml I''ve specified a test class which is modified and recompiled each tine before running the test.  However TestNG does not seem to pick up the change in the test class.  I always get the same result regardless of if the test class code has changed...

    Why is this so?  How may I fix this problem?

    Thanks,

    --

    Nikolas.'
  replies: []
---

I am very happy to announce the immediate availability of [TestNG 4.0](http://testng.org).  There are a lot of improvements and new features in this release, so we decided to skip to a major version (actually, we considered calling it version 5, but it wouldn't have been fair to JUnit ;-)).

The change log is included below, but I'd like to take this opportunity to discuss one of the new features:  Data Providers.

TestNG lets you specify parameters to your test methods, and their values are then defined in `testng.xml`.  This approach works fine in simple cases but is not enough when:

  * You need to pass complex objects.
  * These parameters need some complex logic to be created.



Data Providers address these two problems and also let you specify as many sets of parameters as you want, so that your test methods will be invoked several times, each time with a different set of parameters.

Here is an example:

> // This test method declares that its data should be supplied by the Data Provider  
>  // named "test1"  
>  @Test(dataProvider = "test1")  
>  public void verifyData1(String n1, Integer n2) {  
>    System.out.println(n1 + " " \+ n2);  
>  }
> 
> // This method will provide data to any test method that declares that its Data Provider  
>  // is named "test1"  
>  @DataProvider(name = "test1")  
>  public Object[][] createData1() {  
>    return new Object[][] {  
>      new Object[] { "Cedric", new Integer(36) },  
>      new Object[] { "Anne", new Integer(37)},   
>    };  
>  }  
>   

This code will cause the method `verifyData1()` to be invoked twice, once with `"Cedric", 36` and then with `"Anne", 37`.

Of course, this data can come from more complex places, such as a file, a database or the network.  Since the creation of the parameters is done in Java, anything is possible.

This is a big release for the TestNG team, and it wouldn't have been possible without a lot of hard work from Alexandru Popescu and Hani Suleiman.  Thanks guys!

TestNG 4.0 can be downloaded on <http://testng.org> and the Eclipse plug-in has also been uploaded to the update site.  Here is the change log:

_Change log for TestNG 4.0  
_  
**Core:**

  * Fixed: suite methods now invoked only once in a hierarchy
  * Added: @DataProvider and @testng.data-provider
  * Fixed: Interleave order now respected for before/afterClass methods
  * Added: Can now invoke java -jar testng-4.0.jar <...>
  * Added: Support for BeanShell
  * Added: Method Selectors (IMethodSelector)
  * Fixed: In the absence of dependencies, @Configuration methods respect inheritance
  * Fixed: Bug in multithreaded dependencies on methods
  * Fixed: dependsOnGroups wasn't working on regular expressions
  * Fixed: Bug in <package> when directories contain spaces in their names
  * Fixed: Introduced a JDK5 dependency in the JDK1.4 build (getEnclosingClass())
  * Fixed: Output directory in ant task was not honored if it didn't exist
  * Fixed: Problem with timeout according to <http://forums.opensymphony.com/thread.jspa?threadID=6707>  
 



**Eclipse plug-in:**

  * Fixed: Wasn't handling linked directories correctly
  * Fixed: Bug in QuickFix implementation
  * Added: Quick Fix for JUnit conversion (Annotations and JavaDoc)
  * Fixed: Methods Run as TestNG test
  * Added: Package level Run as TestNG test
  * Fixed: Resources from the linked directories are using a wrong path when 
  * passed to command line TestNG



  
**IDEA plug-in:**

  * Added: Support for JDK 1.4 (both projects and IDEA itself)
  * Fixed: Classes that contained only configuration were ignored
