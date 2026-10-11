---
title: Java field of dreams
date: '2004-02-03T08:56:58'
slug: java-field-of-dreams
categories:
- Java
comments:
- id: 1093
  author: Howard M. Lewis Ship
  date: '2004-02-03T09:28:30'
  content: 'This may be a case of follow-the-leader ... I know I''ve worked in languages where it was necessary for a variable to be declared before it could be referenced.

    I like seeing the variables first myself. To me, the variables (plus the extends and implements clauses) are the "foundation" upon which the rest of the code is constructed, and I like to see things bottom up.'
  replies: []
- id: 1094
  author: Anthony Eden
  date: '2004-02-03T09:33:31'
  content: I placed my variables at the end of my code for the longest time, but eventually you have to give in to the "standard" and just go with it.
  replies: []
- id: 1095
  author: Mike
  date: '2004-02-03T09:53:55'
  content: I've tried just about everything to see which I like better and my current code style is to put them at the bottom.  I don't need to see them at the top...I guess my thinking is that I don't care...the public methods are the most important and then the protected and so on.
  replies: []
- id: 1096
  author: Valery Silaev
  date: '2004-02-03T10:27:57'
  content: 'Sounds very familiar to me.

    Many of seasoned C++ developers migrated to Java often complain about the fact that Java has no separation between declaration and implementation on "source file level" i.e. there are no way to have some form of header files + implementation files. I mean "many of C++ developers I know", of course.

    Technically I see no problems to implement some pre-compilation tool that allows having both header and implementation files and merge them together before passing as javac input. However, I see no real reason to implement it myself:

    0. I''m lazy ;-)

    1. Programming against an interface overcome this issue in most cases.

    2. In any case, if source file contains more then several screens of code it is a bad sign (typically, too many responsibilities assigned to one class). If not, there are no real difference whether I see public method of class on first screen, or, say, on second and third ones.

    3. I''m using IntelliJ IDEA and it has excellent source code folding feature. Still waiting for release of Eclipse 3.0 -- AFAIR they promised to support this feature too.

    BTW, there is no way to avoid class-level documentation comments on the very top of class source (as well as nice-formatted copyrights & license ;-). So sometimes it takes several "page-downs" to look what this class extends / implements and whether or not it is public itself ;-)'
  replies: []
- id: 1097
  author: Sam Pullara
  date: '2004-02-03T10:29:26'
  content: I think they are at the top for maintainability -- if you are having to work on a class that someone else wrote, it helps to know the details of the implementation.  If you are just trying to find out the public interface of the class, use the JavaDocs, not the source.
  replies: []
- id: 1098
  author: Carlos Villela
  date: '2004-02-03T11:04:13'
  content: 'Let me quote Mr. Brooks here: "Show me your code and conceal your data structures, and I shall continue to be mystified. Show me your data structures, and I won''t usually need your code; it''ll be obvious."

    Of course, this goes against encapsulation... but if you''ve already got the source file open, then why not reveal data structures upfront?

    I usually look at the method outline *before* opening the sourcefile (thanks, Eclipse!), and when I do, I''m usually just interested in some particular implementation, and if I know about all the data at first glance, the code inside the methods will be, most of the time, a lot easier to read, if not just plain obvious (can you figure what does getFirstChild() means if you already know you''ve got a ''private List children = new LinkedList()'' in the first few lines?)'
  replies: []
- id: 1099
  author: Morten Andersen
  date: '2004-02-03T12:47:41'
  content: 'Some of the JDK classes actually uses this style. Pt. though I can only find java.text.DecimalFormat (I checked the source in  jdk 1.4.2).

    But from the copyright notice in the source-file, it does not look like a original Sun-file, so this is propably not the recommended style inside Sun.

    When I first read this source-file, I wondered where the instance variables was, but now I actually find the sections at the end of this source-file very clear.

    (if anyone wonders: no, I did not read the entire source for DecimalFormat, I just had to find out whether a specific method was thread safe, thats why I delved into the source).'
  replies: []
- id: 1100
  author: Drew Nelson
  date: '2004-02-03T14:16:13'
  content: Personally....reading past the variable declaration section, even though I try to ignore it, leaves some residue in my mind. So when creating new code I use that "mental buffer feature" and put variables at the top, but when I'm done debugging and I shift gears to final checkin/maintenance mode I move 'em to the bottom.
  replies: []
- id: 1101
  author: Mike Spille
  date: '2004-02-03T16:39:59'
  content: 'I like having variables at the top.  When I''m in a source file, I''m usually there to either understand how the code works in depth, to fix something, or to add something.

    If I want to look at the externally visible API only, I''ll typically look at the interfaces the class implements, or look at the Java doc as others have mentioned.  Of course, I can always skip around in the source itself with "/public\s+" :-)

    For me, I suppose it comes down to why I''m normally in a source file.  If I''m in the source, I typically need to know what the data structures and private member variables are, and the top is a convenient spot.

    I don''t grok comments on this subject talking about encapsulation, or only being interested in encapsulation.  Yer in the freakin'' source!  By the talk here you''d think member variables were some trivial minutiae that only the peasants soil themselves with!'
  replies: []
- id: 1102
  author: Stefan Tilkov
  date: '2004-02-03T23:58:49'
  content: 'I think it makes sense only because very often many, if not all, of the object''s properties are exposed via getters and setters (whether that''s good or bad, it''s just the way things are). Just taking a look at three lines that contain a type and variable name allows one to grasp this a lot faster than looking at the equivalent information encoded in about 10 lines for a get and set method.

    Maybe if Java had a "property > > [readonly]" syntax, this would be easier ... just dreaming, of course.'
  replies: []
- id: 1103
  author: Cameron
  date: '2004-02-04T10:27:16'
  content: What you mean, "we"? ;-) Fields always go last in the class declaration.
  replies: []
- id: 1104
  author: Stephane Rodriguez
  date: '2004-02-04T11:02:40'
  content: 'Actually I like a lot when members are at the top. Why? because I spend my time integrating classes back and forth in various projects, and I need a quick way to find the actual class dependencies.

    By the way, does it really matter anymore with an outliner that hides that section?'
  replies: []
- id: 1105
  author: Zohar Melamed
  date: '2004-02-04T17:10:39'
  content: I suspect getting any half decent refactoring IDE to let you decide where they should go 'on the fly' is trivial to implement...   IDEA & Eclipse coed formatting features (backed by an AST ) mean you can now have stuff where you want it , and not impact anyone else.
  replies: []
---

Why do we put Java fields at the top of the class?

Here is a typical example:

> public class Employee {  
>    private String m_firstName;  
>    private String m_lastName;  
>    
>    public Employee(String firstName, String lastName) {  
>    ... 

From day one, this convention has always struck me as odd and counter-intuitive, especially coming from a C++ background where developers go to great lengths to hide private members.

When I read a source code for the first time, I couldn't care less about the log instance and resource bundle it uses, or all the private HashMaps needed to maintain its state.  My attention usually goes immediately to the outline of the class showing all the public methods, and then to the constructor.  All the rest is noise to me at this early stage.

Since it has now (sadly) become a standard, I put the Java fields of my classes at the top, like everyone else, but I still can't figure out why such a nonsensical convention happened in the first place.

Any suggestion?
