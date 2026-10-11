---
title: Why chaining constructors is bad
date: '2004-11-05T10:04:21'
slug: why-chaining-constructors-is-bad
categories:
- Java
comments:
- id: 2719
  author: Luc Claes
  date: '2004-11-05T10:30:13'
  content: 'Declaring members ''final'' is a useful way to force initialization at construction time:

    private final String m_lastName;

    public Person(String lastName) {

    m_lastName = lastName;

    }

    Doesn''t the ''init()'' construct prevent such a declaration ?'
  replies: []
- id: 2720
  author: Pierre CARION
  date: '2004-11-05T10:44:44'
  content: 'As Luc, I loves final member so that I know I don''t need to worry about them later on ;-)

    the init() pattern does not allow that.'
  replies: []
- id: 2721
  author: ''
  date: '2004-11-05T10:49:49'
  content: 'The problem I have this is that there is a secret Object() constructor called before each of the init() calls in the 3rd example.  Now, this may be fine for classes which subclass Object.  What about when you have superclasses which don''t define a no-op constructor?

    I despise the hidden constructor calls, and always make the call explicit (ie, add a super(); before the init() calls).  I also despise hidden no-arg constructors, and always add one explicitly.  Too much magic.'
  replies: []
- id: 2722
  author: Cedric
  date: '2004-11-05T11:05:26'
  content: 'Yes it does!

    Here is what I responded to Luc:

    > Doesn''t the ''init()'' construct prevent such a declaration ?

    No, if you don''t initialize your field in the declaration, you can assign it later:

    private final String m_firstName;

    private void init() {

    m_firstName = ...

    }

    Making them final guarantees they are only initialized once, but you can do it anywhere.

    Besides, there are times where you can''t initialize your class at construction time, but that''s a different debate.

    --

    Cedric'
  replies: []
- id: 2723
  author: Tim Haley
  date: '2004-11-05T12:00:55'
  content: 'Luc is correct...

    public class Person

    {

    private final String m_firstName;

    private final String m_lastName;

    private final String m_ssn;

    public Person(String lastName)

    {

    init(null, lastName);

    }

    public Person(String firstName, String lastName)

    {

    init(firstName, lastName);

    }

    private void init(String firstName, String lastName)

    {

    m_firstName = firstName;

    m_lastName = lastName;

    if (null == m_firstName)

    {

    m_ssn = getSsn();

    }

    }

    private String getSsn()

    {

    throw new UnsupportedOperationException(); //todo

    }

    }

    Compile your suggested code and you will get the following errors:

    Information: 3 errors

    Information: 0 warnings

    Information: Compilation completed with 3 errors and 0 warnings

    C:\IDEAProjects\IBEAM\src\wm\Person.java

    Error:  line (20) cannot assign a value to final variable m_firstName

    Error:  line (21) cannot assign a value to final variable m_lastName

    Error:  line (24) cannot assign a value to final variable m_ssn'
  replies: []
- id: 2724
  author: Tim Haley
  date: '2004-11-05T12:13:46'
  content: 'BTW, the original source that you referenced, does support final members and almost satisfies your requirements:

    Have all your constructors converge toward one unique ... method ... and that will contain the entirety of all the parameters that your constructors may receive. (it''s the constructor with the most parameters)

    Don''t add any logic to the constructors, all they should do is invoke [the common constructor] with the right parameters and null for default ones.'
  replies: []
- id: 2725
  author: Luc Claes
  date: '2004-11-05T12:41:35'
  content: 'I''m not sure I''m totally correct :)

    By experience, constructs like:

    public class FinalTest {

    private final String m_strLastName;

    public FinalTest(String strLastName) {

    init(strLastName);

    }

    private void init(String strLastName) {

    m_strLastName = strLastName;

    }

    }

    ... are rejected by my (Eclipse) compiler.

    But is Eclipse right or too conservative ?

    The Java specification concerning ''blank finals'' initialization is rather complex (http://java.sun.com/docs/books/jls/second_edition/html/defAssign.doc.html)'
  replies: []
- id: 2726
  author: Cedric
  date: '2004-11-05T12:45:29'
  content: 'I stand corrected, it''s not possible to assign a final value outside of the constructor...  serves me right for not trying it.

    Tim is right, if you have final values, you need to pick one constructor to be the canonical one, but if you have no final variables, I think init() is easier to locate when you browse your source.'
  replies: []
- id: 2727
  author: Jonathan Ellis
  date: '2004-11-05T13:04:08'
  content: Perhaps not central to your main point, but using a null firstname to indicate "init ssn" is poor style as well...
  replies: []
- id: 2728
  author: a
  date: '2004-11-05T13:09:05'
  content: 'How is reading the name of a constructor easier than reading the name of a method?  It''s not hard to scroll down until you see a bunch of code.  If you are going to create a non-compiler-enforced convention, why not make it one that specifies the "doit" constructor is the first thing declared in the class?

    Of course, all this wouldn''t be necessary if you could specificy default values a la C++'
  replies: []
- id: 2729
  author: a
  date: '2004-11-05T13:09:17'
  content: 'How is reading the name of a constructor harder than reading the name of a method?  It''s not hard to scroll down until you see a bunch of code.  If you are going to create a non-compiler-enforced convention, why not make it one that specifies the "doit" constructor is the first thing declared in the class?

    Of course, all this wouldn''t be necessary if you could specificy default values a la C++'
  replies: []
- id: 2730
  author: a
  date: '2004-11-05T13:10:02'
  content: sorry for double post, caught a logic-reversal bug after I hit submit.  Second snide comment is the intended one :)
  replies: []
- id: 2731
  author: Cedric
  date: '2004-11-05T13:13:18'
  content: Because the name of the constructor changes for every class, while init() can be kept constant throughout your code base.
  replies: []
- id: 2732
  author: Rob Meyer
  date: '2004-11-05T15:03:26'
  content: Seems to me that a standardized comment ("this is the init constructor") give you the same scannability for the "Real" constructor. Maybe even a custom javadoc tag to identify the "full constructor" in the api-docs? @fullconstructor or something...
  replies: []
- id: 2733
  author: Ryan LeCompte
  date: '2004-11-05T15:50:19'
  content: I don't think that having an init() method is always a good idea, since this method may unintentionally be called in places OTHER than the constructor. Initialization code should be put in the constructor. If there is common code that is used when the class is first initialized as well as later on (ie, it has the notion of being "reinitialized") then having a "reInitialize()" type of method this is called from the constructor (and potentially other places) is desirable.
  replies: []
- id: 2734
  author: Keith Lea
  date: '2004-11-05T16:31:55'
  content: 'You could also create an annotation so you could declare

    private @Initializer MyClass(lots of, args here) {..}'
  replies: []
- id: 2735
  author: Nick Minutello
  date: '2004-11-05T17:20:06'
  content: Hmmm
  replies: []
- id: 2736
  author: Marc Logemann
  date: '2004-11-06T00:25:17'
  content: 'Ok, i will join this one, because i was quoted as bad example ;-)

    First of all, i like init() methods and i use them all over the time, but they have some risks. Its easy to call them more than once when you do inheritance.

    public class Person extends Human {

    public Person() {

    super();

    init();

    }

    private void init() {

    //init stuff here

    }

    }

    public class Human {

    public Human () {

    init()

    }

    private void init() {

    //init stuff there

    }

    }

    What i mean is, you can easily come into trouble when you dont chain the init() methods correctly. And i think that my example is really not hard to read, you have a lot of this-constructors and one with some code. But technically these two ways are not too far away, both try to focus on a certain place where all the stuff happens.

    Marc'
  replies: []
- id: 2737
  author: Marc Logemann
  date: '2004-11-06T00:47:35'
  content: 'Note: to prevent comments like "why do you use super() in Person()" --> i just wanted to outline the callgraph, for the case that perhaps 2% of the visitors dont know about the auto-insertion of super() :-)'
  replies: []
- id: 2738
  author: Julian
  date: '2004-11-07T11:27:19'
  content: 'Whenever I have more than one constructor, one of them is called by all the others, as in the JTextField example you linked to. That approach is clear and avoids redundancy.

    Besides, my classes rarely have more than 2 or 3 constructors, keeping them from being that confusing.'
  replies: []
- id: 2739
  author: MmeGuerin
  date: '2004-11-08T11:46:01'
  content: 'When I design a class, I always try to apply the following rule : Constructors must not invoke overridable methods, directly or...indirectly !

    Having said that, since Person class is not final, I''m assuming the getSsn() method in your example should not be overridden ?!

    Invoking overridable methods from a constructor might cause errors because the object is not in a a valid state.'
  replies: []
- id: 2740
  author: B. K. Oxley (binkley)
  date: '2004-11-08T17:08:06'
  content: Cedric, you are right that I did elide your point of finding the privileged constructor with a special name.  Would you find my counter-example if the "real" constructor was listed first and all the others following?  I am a strong believer the value of clarity, so I take your point quite seriously.
  replies: []
- id: 2741
  author: Oliver Kamps
  date: '2004-11-09T01:02:21'
  content: 'I''m with what seems to be the majority of the crowd and would prefer to call a chained constructor.

    I agree with you that the body of this constructor should be as expressive as your init method, i.e. it should communicate clearly under which circumstances we need to initialize the SSN.

    I''d also avoid long chains of constructor calls, i.e. calling a single other constructor should suffice in almost all cases.

    Cheers,

    Oliver'
  replies: []
- id: 2742
  author: Mike Lehmann
  date: '2004-11-09T06:00:13'
  content: 'The best is to make the variables final (which is impossible using the init-method):

    public class Person {

    private final String m_firstName;

    private final String m_lastName;

    private long m_ssn = 0;

    public Person(String lastName) {

    this(null, lastName);

    m_ssn = getSsn();

    }

    public Person(String firstName, String lastName) {

    m_firstName = firstName;

    m_lastName = lastName;

    }

    }'
  replies: []
- id: 2743
  author: Joe Maia
  date: '2004-11-10T23:25:22'
  content: 'It is standard practice to have one constructor - the one with the most parameters - do ALL the work, with all other constructors calling that one constructor.  Since this is the *standard*, it is also the most readable because most programmers reading your code will *expect* this pattern.

    I find it is rarely the case that values I initialize in constructors can be declared as "final".  Sometimes this may be the case, but many times the values might change over the course of time.'
  replies: []
- id: 2744
  author: ''
  date: '2004-11-10T23:31:30'
  content: 'It is standard practice to have one constructor - the one with the most parameters - do ALL the work, with all other constructors calling that one constructor.  Since this is the *standard*, it is also the most readable because most programmers reading your code will *expect* this pattern.

    I find it is rarely the case that values I initialize in constructors can be declared as "final".  Sometimes this may be the case, but many times the values might change over the course of time.'
  replies: []
- id: 2745
  author: sarsor
  date: '2005-02-19T05:34:44'
  content: '<strong>Why chaining constructors is bad.</strong>

    Ping Back???blog.csdn.net'
  replies: []
---

I personally find that [this code snippet](http://www.logemann.org/day/archives/000104.html) demonstrating constructor chaining is hard to read.

This code makes it very hard to identify which of the many constructors is the "real" one:  the constructor that does the real job and that I should call if I add a new overloaded constructor.

This is why I use the following two rules when I write overloaded constructors:

  * Have all your constructors converge toward one unique private method that you will name consistently throughout your code base (e.g. **init**) and that will contain the entirety of all the parameters that your constructors may receive.
  * Don't add any logic to the constructors, all they should do is invoke **init** with the right parameters and null for default ones.



Here is an example, from worst: 
    
    
    public class Person {
      private String m_firstName = null;
      private String m_lastName = null;
      private long m_ssn = 0;
      public Person(String lastName) {
        m_firstName = null;
        m_lastName = lastName;
        m_ssn = getSsn();
      }
      public Person(String firstName, String lastName) {
        m_firstName = firstName;
        m_lastName = lastName;
      }
    

... to better: 
    
    
    public Person(String lastName) {
      this(null, lastName);
      m_ssn = getSsn();
    }
    public Person(String firstName, String lastName) {
      m_firstName = firstName;
      m_lastName = lastName;
    }
    

... to best: 
    
    
    public Person(String lastName) {
      init(null, lastName);
    }
    public Person(String firstName, String lastName) {
      init(firstName, lastName);
    }
    private void init(String firstName, String lastName) {
      m_firstName = null;
      m_lastName = lastName;
      if (null == m_firstName) {
        m_ssn = getSsn();
      }
    }
    

Here is why the latter form is preferable:

  * It doesn't duplicate any code.
  * It makes the initialization rules clear : "if no _firstName_ was given, then _ssn_ gets initialized".
  * The signature of **init** gives a good indication of the various parameters this class needs to be initialized, while a multitude of overloaded constructors obscures this fact.
