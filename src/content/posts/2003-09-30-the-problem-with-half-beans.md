---
title: The problem with "Half Beans"
date: '2003-09-30T08:29:35'
slug: the-problem-with-half-beans
categories:
- Java
comments:
- id: 555
  author: Cameron
  date: '2003-09-30T09:24:21'
  content: Hmm .. multiple classes that you need to keep in sync and that generally just "postpone the problem" .. are you talking half-beans or EJ beans? ;-)
  replies: []
- id: 556
  author: Andy
  date: '2003-09-30T09:58:26'
  content: If this isn't the correct solution... what is?  How do you handle when you need to pass 20 parameters into an object?  I don't think having a constructor with 20 parameters makes sense.
  replies: []
- id: 557
  author: Bob Lee
  date: '2003-09-30T10:43:33'
  content: '"I don''t think having a constructor with 20 parameters makes sense."

    Just use getters and setters and unit test. If the data isn''t there when you go to use it, throw a NullPointerException. It''s a lot simpler than maintaining overloaded constructors or builder classes.'
  replies: []
- id: 558
  author: Andy
  date: '2003-09-30T13:14:54'
  content: 'If using getters/setters is okay, how do you handle methods that expect a primitive?  You could use a boolean to see if this value was set or not, but that is a pain to code.  You could require an object versus the primitive, but that is a pain to use.  What is a better way?

    If you use getters/setters, how do you verify that all of the required setters got called?  If you create a verify method, do you call it every time that someone calls one of the getters?  If you do that, what happens if you are using the object as a VO?

    Also, how do you make getter/setter based objects immutable and when is it okay to use constructors versus getters/setters to build up an object?'
  replies: []
- id: 559
  author: Ryan Campbell
  date: '2003-09-30T16:24:21'
  content: '"If using getters/setters is okay, how do you handle methods that expect a primitive?"

    private Integer mInteger = null;

    public void setPrimitive(int primitive) {

    mInteger = new Integer(primitive);

    }

    Voila!  NullPointerException is your friend, believe it or not.'
  replies: []
- id: 560
  author: Andy
  date: '2003-09-30T18:23:18'
  content: 'Oh duh!  Now that is elegant!  Thank you!

    So how you advise handling the immutable and validator questions?'
  replies: []
- id: 561
  author: Ryan Campbell
  date: '2003-09-30T20:38:08'
  content: 'I guess immutable objects won''t have setters by definition, right?  But they won''t have huge constructors either, usually just small single argument ones.

    As for the validator object (VO?) question, could you be more specific?  Why won''t using setters work in this situation?'
  replies: []
- id: 562
  author: Brian Slesinsky
  date: '2003-10-01T00:40:38'
  content: 'Well, the point here is to come up with a way to handle big, complicated immutable objects - to show that they can be more than just simple value objects.

    See my weblog for more about this.'
  replies: []
- id: 563
  author: Markus
  date: '2003-10-01T08:33:56'
  content: I think Andy was talking about Value Objects (VO)
  replies: []
- id: 564
  author: Bob Lee
  date: '2003-10-01T10:40:14'
  content: '"If you use getters/setters, how do you verify that all of the required setters got called? If you create a verify method, do you call it every time that someone calls one of the getters? If you do that, what happens if you are using the object as a VO? Also, how do you make getter/setter based objects immutable and when is it okay to use constructors versus getters/setters to build up an object?"

    Unit tests. In regard to immutability, most times it''s possible to make the setters package-protected.'
  replies: []
- id: 565
  author: patrick
  date: '2003-10-01T10:46:14'
  content: My own follow up posted here http://blogs.browsermedia.com/page/patrick/20031001#half_baked_beans
  replies: []
- id: 566
  author: Markus
  date: '2003-10-01T12:22:42'
  content: If you use package level protection, does that mean you use the same package for your DAO classes?
  replies: []
- id: 567
  author: Bob Lee
  date: '2003-10-03T08:16:17'
  content: '"If you use package level protection, does that mean you use the same package for your DAO classes?"

    I do.'
  replies: []
- id: 568
  author: test close
  date: '2004-03-01T06:37:46'
  content: blah
  replies: []
- id: 569
  author: Google
  date: '2004-11-14T14:13:29'
  content: 'I think the lack of confidence is taught to American kids at a much younger age than University, it starts in grade school when "self esteem" is valued more than true confidence and achievement.  Predetermined outcomes, grade inflation, etc set a lot of people up for a harsh fall later when they are unshielded from reality...maybe making them more ripe for self-hatred later?  Confidence comes from believing in yourself, and past accomplishments...if you have neither of those then you will either try harder, or come to hate those that do succeed, or are confident.

    Search Google http://www.google.com/'
  replies: []
- id: 570
  author: Google
  date: '2004-11-17T02:24:13'
  content: 'Yay!

    Search Google http://www.google.com/'
  replies: []
- id: 571
  author: prosolution
  date: '2005-12-12T02:14:41'
  content: 'Three phrases should be among the most common in our daily usage. They are: Thank you, I am grateful and I appreciate.'
  replies: []
---

In an entry titled "Functional style in Java", Brian Slesinsky presents a [technique he calls "half beans"](http://slesinsky.org/brian/code/functional/half_bean.html).

Never mind the fact that I can't really see the connection between this and functional programming, I find his recommendations quite questionable.

Brian is trying to solve the problems of objects that are not quite completely initialized.  In order to make sure an object is fully initialized, he forces his class (Album) to have just one constructor that accepts only one parameter, of type AlbumBuilder.  AlbumBuilder is the helper class in charge of making sure the object will be fully initialized.

There are a number of issues with his points.

  * First of all, the name.  I initially assumed that "half bean" meant that the pattern is supposed to avoid those "half beans", those Java Beans that are not completely initialized.  Well, no.  Half in this case means that the getters are in the main class and the setters and no-op argument are in the Builder class.  And to validate his point, Brian makes the following parallel:  


> The getters go into one class and the no-arg constructor and setters go in the other. If it looks familar, you're right - it's basically the same pattern as String/StringBuffer. 

String and StringBuffer certainly have no such connection.  They are two very separate classes and one just happens to use the other for its internal implementation, but that's just a detail.  They could happily live separately and would serve a purpose on their own, as opposed to the Album/AlbumBuilder duo.  
 
  * Second, all the AlbumBuilder class does is postpone the problem.  Instead of making sure that Album is fully initialized, you must now put this logic in AlbumBuilder.  
 
  * And finally, this technique introduces a lethal weakness in the application by coupling the classes Album and AlbumBuilder in ways that are not only invisible to the programmer but invisible to the compiler as well.  For example, if one day, the design mandates the addition of a field "Producer" to the Album class, I have to remember to update AlbumBuilder or everything will break.



Overall, this technique doesn't help you address the main problem which, in my opinion, is not **where** you should signal the error but rather **how** you should handle it.  It is much more important to decide whether such an error should be an AssertionError, or an IllegalArgumentException or something else, and more importantly, whether it should be recoverable or not.

On a related note, the initial motivation that made Brian come up with this design was the absence of named parameters in Java:

> Some languages solve this problem with keyword arguments, but Java doesn't have them, so we need another solution. 

It is actually quite easy to emulate named parameters in Java.  For example:

> new Album().title("The Wall").band("Pink Floyd"); 

This is very much un-Java, but it's there if you decide you need it one day.
