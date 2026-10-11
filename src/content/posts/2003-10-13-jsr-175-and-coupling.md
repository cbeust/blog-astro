---
title: JSR 175 and coupling
date: '2003-10-13T09:45:38'
slug: jsr-175-and-coupling
categories:
- Java
comments:
- id: 598
  author: Sandeep Dath
  date: '2003-10-13T11:40:58'
  content: 'I just posted some ideas on this at TSS:

    http://www.theserverside.com/home/thread.jsp?thread_id=21872

    Sandeep.'
  replies: []
- id: 599
  author: Zohar
  date: '2003-10-13T15:37:00'
  content: 'what about :

    import javax.ejb.annotations.*;

    @Session(

    ejb-name = "statelessSession"

    )

    public class TraderEJB implements SessionBean {

    @Remote (

    transaction = Required

    )

    public void buy(String stockSymbol, int shares) {

    // buy shares

    }

    }

    If you have struts/AOP/Hibernate annotations, you _are_ tied to hibernate/AOP tool/Struts.

    tags or no tags.

    You will likely have some imports from those , and will need the jars to compile.

    a lot of the annotations supported by ejbgen,xdoclet etc will be a standard part of  j2EE 1.5 so the common case will always compile'
  replies: []
- id: 600
  author: Jason Carreira
  date: '2003-10-13T16:01:35'
  content: '...or we could just forget this silly static typing of annotations and use the Javadoc method that''s worked well for everyone for several years... I guess something working in the real world is a mark against it in the JCP world :-)'
  replies: []
- id: 601
  author: chiara
  date: '2003-10-13T22:50:14'
  content: I never even thought about that. rather it didn't occur to me this is how it would happen. i like Jason's idea. can we just forget about it.
  replies: []
- id: 602
  author: Zohar
  date: '2003-10-14T02:55:52'
  content: 'Yes , that sounds like a plan, chiara and jason you just forget about it.

    >>silly static typing of annotations

    And javadoc comments are somehow typed?

    Yes javadoc has been flexible enough to provide a  limited form of compile time meta data for tools like Xdoclet etc, but it was always a limited subset of what a metadata facility should provide, and the runtime should support.

    Have a look at the way the CLR / .NET class libraries take advantage of a similar facility.

    look at the design of atrributes , and how they are used.

    J2EE 1.5 + metadata will render the javadoc based tools obselete, and will make doing the simple J2EE things ( stateless session beans, mdb  ) simple as they should be ...

    I hope we see WL innovate by providing  a comprehensive set of annotations in addition to the standard ones.'
  replies: []
- id: 603
  author: Jason Carreira
  date: '2003-10-14T06:05:24'
  content: 'It doesn''t NEED to be statically typed... If there was a standard facility for querying metadata attributes defined as javadoc, then what would you need this ugly class-like structure for? I liked the ideas behind Commons Attributes, it just never went anywhere. It was going to give you the powerful runtime support for metadata you''re looking for without this messed up class-structure-to-create-a-macro thing that is JSR-175.

    Make no mistake, although they try to deny it and play down this aspect, what they''ve really created with JSR-175 are statically typed macros. I asked what one would have to do to implement an Attribute, and was told it would involve creating a code template to be included when the attribute is applied. This is a macro, plain and simple.'
  replies: []
- id: 604
  author: Cedric
  date: '2003-10-14T08:35:09'
  content: 'Come on Jason, you are being silly now.

    Please take a look at what''s out there, and more specifically

    1) How annotations work on Win32

    2) Where and when they are used

    Then a lot of JSR 175 will make much more sense to you and you will realize you are missing a huge part of the big picture.

    --

    Cedric'
  replies: []
- id: 605
  author: Zohar
  date: '2003-10-14T10:51:24'
  content: '>>you are missing a huge part of the big picture.

    Hear Hear.

    Jason, you can start here :

    http://tinyurl.com/qwfl'
  replies: []
- id: 606
  author: Jason Carreira
  date: '2003-10-14T17:54:10'
  content: 'So this is a case of "me too", and we have to do the same thing as .NET did?

    That''s always been my suspicion about JSR-175....

    So how is this silly? I sat in a BOF about JSR-175 and they got VERY defensive when someone asked how this was different from a macro, which makes me think that they KNOW that this is what they''ve built.

    And you should have SEEN some of the horrendous ideas they had as examples... The worst was an example where you tag a field in your class as being an ejb (say something like:

    private @ejb(...) service1;

    )

    and it would then AUTOMATICALLY look it up in JNDI and get the component interface for you! Explain how that''s not a macro?'
  replies: []
- id: 607
  author: Frank Bolander
  date: '2003-10-15T08:25:49'
  content: 'Why the need for meta-data inlining? Why not implement a .meta extension for all class definitions. This would allow for the least amount of instrusiveness with meta data.

    Plus, inlining meta-data is a problem in terms of application lifecycle. As an example:

    @DataSource(

    jndi-name=myDataSource

    database=TESTDB

    username=myuser

    password=mypassword

    )

    Now, without a variable replace mechanism in a build, you''re going to have to do a cut&paste when you move from test>stage>production in your source code. Plus, if you do have development partner relationships with different toolkits, a separate .meta file would isolate problems without impacting the core sources. In addition, it could promote global metadata policies such as the defintion of the DataSource above(it would require an include mechanism). A change in one meta file would assure all dependent classes would be updated.

    Yes, I know it would create extra files, but on large projects I think inline meta-data would cause more problems than help.'
  replies: []
- id: 608
  author: Cedric
  date: '2003-10-15T08:38:46'
  content: '>Why the need for meta-data inlining? Why not

    > implement a .meta extension for all class

    > definitions. This would allow for the least

    > amount of instrusiveness with meta data.

    Because you have to add positional meta-data to your data.  For example:

    >

    >Plus, inlining meta-data is a problem in terms of application lifecycle. As an example:

    >

    >@DataSource(

    >  jndi-name=myDataSource

    >  database=TESTDB

    >  username=myuser

    >  password=mypassword

    >)

    >

    You will need to specify where this tag should be applied.  Imagine it''s a method-level tag, such as "@RemoteMethod".  You specify the method name, along with its signature (quite a pain already).

    Then one day you refactor, and you have to update your .meta file as well.  Which is exactly the problem that XML descriptors have these days:  duplication.

    Don''t violate the DRY principle if you can avoid it (Don''t Repeat Yourself).

    --

    Cedric'
  replies: []
- id: 609
  author: Frank Bolander
  date: '2003-10-15T10:23:20'
  content: '>>Because you have to add positional meta-data to your data.

    I don''t know if this is bad or not. What about

    @Remote(

    method-name=*

    method-name=setXYZ

    )

    Sort of feels like aspect-oriented meta-data :)

    Refactoring is still a pain with this approach, but I''m not sure if inlining meta-data is any more immune to the DRY principle. Refactoring is a pain with or without meta data. Rarely is it benign to the rest of the codebase or build processes. The pain is more manageable with separate .meta files and I think it addresses your concerns with compile time dependencies.

    Great topic.'
  replies: []
- id: 610
  author: Zohar
  date: '2003-10-15T17:31:14'
  content: '>>So this is a case of "me too", and we have to >>do the same thing as .NET did?

    The need for a metadata facility is clear ( look at all the ad-hoc tools )

    The .NET design seems sound , and a lot of the usage in the clr class lib is fine.

    The JSR guys had a look and made sure we are not missing any major feature ( met attribs , etc )

    I _was_ at the BOF you talk about , and had a long talk with the SUN chaps later.

    I hate the chosen syntax with the @ notation , but this JSR is a welcome addition.'
  replies: []
- id: 611
  author: DM
  date: '2003-10-15T18:24:51'
  content: 'Regarding the comment about refactoring issues around the annotated code elements. I wonder if there should have been a way to externalize the annotation specification through the use URLs or something like that in the code. It may help with testing or tuning an application during development phases. I guess it depends what the specific annotation is about.

    I have heard some talk about ejb descriptors being replaced by annotations in ejb 3.0. If the ejb deployment descriptors are replaced by annotations what would it mean in terms of deployment flexibility now that the code has to recompiled everytime i want to change some annotation based descriptor ?

    I guess having a nice IDE environment may make some of this easier to deal with.'
  replies: []
- id: 612
  author: Thierry Kormann
  date: '2003-10-16T00:41:57'
  content: 'My first post in Cedric''s weblog. My feeling is that JSR175 is trying to mimic what''s done in the .NET platform through Attributes.

    To clarify what''s happening on .NET:

    1. The value of an attribute can be any subclass of System.Attribute.

    2. There is a bunch of "generic" subclasses available for you.

    3. Attributes can be accessed by using introspection.

    4. If you need a custom Attribute, you need to subclass System.Attribute. Any source code that is using that attributes needs the class.

    So, to conclude:

    a. The JDK should provide a bunch of generic attributes that can be used safely.

    b. javac should generate an error if the class of an attribute is missing - mainly because of 3.

    My two cents.

    Thierry.'
  replies: []
- id: 613
  author: Russ Freeman
  date: '2003-10-22T09:04:18'
  content: Not sure what the bug deal is, really?  In most cases the annotations are surely real extensions to the code; they have semantics that usually mean something important, .e.g persistence info, threading info.  If you need these features then it implies that you need the tools to build the code.  Just accept that your javac compliler is just getting more sophisticated - it has more to do and therefore relies on more libraries.  Why is this a issue? Processor cycles are cheap, right? If the tools cause problems when compiling then that's a problem with the tool - not the annotations.  The future of software is surely more complex systems - but with the tools to support that complexity - not simpler systems.
  replies: []
- id: 614
  author: Ally
  date: '2004-08-17T04:02:56'
  content: How old is this post?
  replies: []
---

As you probably all know, JSR 175 will enable annotations for Java programs as part of the JDK.  The current method, using Javadoc, will slowly be phased out and replaced by this JSR which defines models for

  * The annotations.
  * The class file format.
  * An API to access the annotations.



The current Javadoc approach is very fragile and non-standard, but it does have a fairly strong point in its favor:  it is totally non-intrusive.

Consider the following Stateless Session Bean defined with EJBGen annotations:

> /**  
>   * @ejbgen:session  
>   *    ejb-name = statelessSession  
>   */  
>  public class TraderEJB implements SessionBean {  
>    
>    /**  
>     * @ejbgen:remote-method  
>     *     transaction = Required  
>     */  
>    public void buy(String stockSymbol, int shares) {  
>      // buy shares  
>    }  
>  }  
> 

This Java source file doesn't have any dependency on EJBGen.  You can compile it with any Java compiler as long as you have the J2EE libraries in your classpath.  No need for ejbgen.jar.

Now consider the JSR 175 equivalent:

> import com.bea.wls.ejbgen.annotations.*;  
>    
>  @Session(  
>    ejb-name = "statelessSession"  
>  )  
>  public class TraderEJB implements SessionBean {  
>    
>    @Remote (  
>        transaction = Required  
>    )  
>    public void buy(String stockSymbol, int shares) {  
>      // buy shares  
>    }  
>  } 

This file will not compile unless you have the EJBGen annotations (com.bea.wls.ejbgen.annotations.*) in your classpath.  You have just tied yourself to a tool.

Now imagine that this source file uses other tools as well, mixing several kinds of annotations such as Struts, AOP, etc...  Suddenly, your dependencies shoot up the roof and a simple source file like the one above ends up pulling a big set of JAR files before you can even run javac on it.

Here is another example:  you send me an MBean source with annotations from a tool that helps you create MBeans.  I want to be able to build that MBean even if I'm not using your tool.

How about IDE's such as Rational that save information as annotations in their Java files.  With JSR 175, you will no longer be able to compile these files unless you have the Rational classes in your classpath.

The common point in these examples is that the class **can** be useful without the annotations, which are merely hints used by third-party tools to get a certain job done faster.

What can we do about this?

The first idea that came to my mind was to make annotations optional to javac.  If the compiler cannot locate an annotation type, it will emit a warning but keep compiling.  This is similar to the Javadoc behavior, which tries to make a full transitive closure of all the types in your source files, attempts to locate the dependent source files but simply issues a warning if it can't find them and keeps going.

After all, all this means is that no documentation will be available for these dependent classes, but it shouldn't stop the tool from producing documentation for the supplied classes.

Another way to mitigate the problem would be for tools to be distributed in two parts:  the annotation jar file (or even better:  the annotation source files) and the "real" (runtime) jar file.  Compiling the above source file would still make you depend on EJBGen, but only the annotation part, not the whole runtime.

What do you think?

  * Should javac have an option -ignoreAnnotations?  
 
  * Should this flag be turned on by default?
