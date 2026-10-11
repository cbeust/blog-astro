---
title: TestSetup and evil static methods
date: '2004-08-25T14:18:08'
slug: testsetup-and-evil-static-methods
categories:
- Java
comments:
- id: 2263
  author: Matt Raible
  date: '2004-08-25T14:53:08'
  content: I'd love to use TestNG, unfortunately it's JDK 5 only.  I'll stick with static initialization blocks for now.
  replies: []
- id: 2264
  author: Robert Watkins
  date: '2004-08-25T16:15:09'
  content: 'Um, I can''t see what you''re getting at, Cedric. I know you and I have disagreed on JUnit before, but:

    The whole idea of TestSetup is to give you a method that is only invoked once per Test, where TestCase and TestSuite are instances of Test. Even if you use the convenience static suite() method to create the TestSuite, the setUp and tearDown is only called once per run of the TestSuite. Isn''t that what you''re asking for?'
  replies: []
- id: 2265
  author: Roger Rustin
  date: '2004-08-25T18:27:58'
  content: It might sound stupid but I am trying to learn here. YOu mentioned that the reuse of the same JVM will cause problem since the class is using static variable. Could you please elaborate on that? Why would the code break?
  replies: []
- id: 2266
  author: Roger Rustin
  date: '2004-08-25T18:28:07'
  content: It might sound stupid but I am trying to learn here. YOu mentioned that the reuse of the same JVM will cause problem since the class is using static variable. Could you please elaborate on that? Why would the code break?
  replies: []
- id: 2267
  author: ''
  date: '2004-08-27T01:23:16'
  content: JUnit is not forcing you to use static methods at all. In the example quoted above, you could simply move the start method into the TestSetup class.
  replies: []
- id: 2268
  author: Ben Hogan
  date: '2004-09-06T01:02:11'
  content: 'You say:

    > I don''t have anything against static methods in general, I tend to use them as much as possible whenever they don''t need access to any non-static fields since it decreases the coupling between my classes.

    How does this decrease coupling between classes?

    Ben

    http://geekbeers.blogspot.com/'
  replies: []
- id: 2269
  author: robspassky
  date: '2005-11-23T06:42:10'
  content: I may be missing something, but what's to stop you from creating a Singleton to hold your "static" initialization stuff?  There may be multiple calls to "setup", but of course the Singleton will only be initialized once.
  replies: []
- id: 2270
  author: Bill Kress
  date: '2005-12-02T09:19:51'
  content: 'Ben, it decreases coupling (kinda) because classes don''t have to store references to each other if they are only using static methods.

    I''m not sure if that is exactly what I''d term "Coupling", since you are still tied to the static methods'' signature but I think that''s what he was getting at.

    I suppose what he might have actually been refering to is the fact that if you don''t have a reference to the class and need one, you might have to start looking for methods in classes you do have that supply that object, and using that reference would couple you closer to the intermediate class.

    Oh, and Rob, I recommend not doing the singleton thing.  Although it looks promising, you are making an assumption that you will never need two of what that singleton is supplying.

    That always seems to sound good, but for me seems to fail later.  For instance, number of monitors, number of keyboards, a ram cache for a DB (found that I needed to flush one set of data and not another) A "Main" window in my java program, ...

    I''m not saying it''s not tempting and often useful, but I''d have saved myself a lot of time (in many cases) if I had just created an instance and passed it around rather than using a singleton, because that''s a bitch of a refactor.'
  replies: []
- id: 2271
  author: Kiborgov
  date: '2007-09-03T02:15:06'
  content: 'Hi all!

    Welcome to my homepage. http://xenoid12.atwiki.com/

    my page [url=http://xenoid12.atwiki.com/]my page[/url]

    bye =)'
  replies: []
- id: 2272
  author: Rashid
  date: '2008-11-07T09:15:53'
  content: I've just downloaded Test NG on my system - vista OS, but I cannot locate the executable file to run the application, albeit I've extracted the folders from the zip file. What I'm I doing wrong?
  replies: []
- id: 2273
  author: John
  date: '2010-02-15T16:57:54'
  content: 'It looks like the download for testNG-5.11 is corrupt. When I download and then try to unzip, errors are reported stating that the zip file is corrupt. Previous versions 5.9,5.8 are not corrupt and can be downloaded and unzipped ok. The link I''m using is http://testng.org

    Has anyone experienced the same?'
  replies: []
- id: 2274
  author: Cedric
  date: '2010-02-15T19:45:01'
  content: 'Hi John,

    I just downloaded and tested the file and it looks fine:

    No errors detected in compressed data of /Users/cbeust/Downloads/testng-5.11.zip.'
  replies: []
---

[TestSetup](http://www.jdocs.com/junit/3.8.1/api/junit/extensions/TestSetup.html) is a JUnit class you can use if you want to introduce initialization in your JUnit tests that only get invoked once, and not once before test method, which is what JUnit does (making it difficult to make sure that an initialization method is only invoked once during the lifetime of the class). I wrote more about this oddity [not long ago](http://www.beust.com/weblog/weblog/archives/000082.html). 

A [recent weblog entry about TestSetup](http://jroller.com/page/raible/20040825#one_time_setup_with_testsetup) shows how to use it, which is pretty straightforward. I still have a big problem with this solution, and what JUnit forces you to do to work around this "design choice": it forces you to introduce static methods in your code. 

I don't have anything against static methods in general, I tend to use them as much as possible whenever they don't need access to any non-static fields since it decreases the coupling between my classes. However, static methods are particularly evil when they modify state, and by extension, force you to declare static fields. 

Which is exactly the only choice that JUnit leaves you. 

The problem with non-const static methods is that they break badly in several cases: 

  * Multi-thread access. 
  * Different objects thinking they are accessing private content, while it is actually shared. 
  * Reuse of the same JVM. 
This last point is particularly important. By forcing you to introduce static methods in your code, JUnit guarantees that if somebody ever invokes your class several times from an ant task while not providing the flag _fork="yes"_ , your code will break in mysterious ways. 

Classes in object-oriented programming obey very simple rules: 

  * If you invoke your initialization from the constructor, it will only be invoked once. 
  * If your content is not static, it is guaranteed to be private to your instance. 
JUnit violates these two principles and I just can't get used to it. Instead of righting a wrong with another wrong, why not return to the most intuitive way of doing this and letting test writers implement methods that are guaranteed to be invoked once? 

Of course, these is also [an alternative](http://beust.com/weblog/testng). :-)
