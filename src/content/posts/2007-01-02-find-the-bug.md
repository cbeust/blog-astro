---
title: Find the bug
date: '2007-01-02T12:52:05'
slug: find-the-bug
categories:
- Java
comments:
- id: 6191
  author: Tim Vernum
  date: '2007-01-02T14:44:38'
  content: '> Indexing months starting at 0.

    I''ve been on both sides of this argument. That''s the "C/Unix way", so starting at 1 would have been confusing to all those C++ refugees that Java was looking for.

    Of course now that java has outgrown the "Better than C++" marketing line it''s just a weight around our neck.

    But the problem isn''t starting at 0 instead of 1. The problem is using integers to represent months. A month is not an integer.

    But, if you''re going to design a brain-dead, moronic class like Calendar, then you may as well make it suck in every conceivable way.

    After having been burnt by this way too many times, I have finally trained myself to use the month constants from Calendar instead.'
  replies: []
- id: 6192
  author: Ryan Breidenbach
  date: '2007-01-02T14:54:02'
  content: 'I can''t imagine Calendar to winning this poll by a landslide. Of course, its sibling class, Date, is a close second. No methods for "date math" and all useful methods (e.g. getYear()) have been deprecated.

    Properties extending Hashtable is another head scratcher.'
  replies: []
- id: 6193
  author: Ryan Breidenbach
  date: '2007-01-02T15:00:31'
  content: 'Tim,

    My biggest gripe is not that the month index starts at 0, but that *all* of the other indexes (day, year, etc.) start and 1. What made month special I have no idea. I also have no idea how anybody looked at this API and said, "Yeah, this looks great. Ship it."

    Robert Martin recently had a similar rant: http://www.butunclebob.com/ArticleS.UncleBob.JavaDates'
  replies: []
- id: 6194
  author: Bill
  date: '2007-01-02T15:12:49'
  content: 'I haven''t used java 5 much, I''m stuck on a hardware platform that only supports 1.1 right now.  I have a question that''s slightly offtopic.

    The comment that a "Month is not an integer" made me think.  Sure it should be an enum, but month is one of those cases where it would be really cumbersome if month++ and month-- didn''t work, even month+=-5.

    It would be great if enums could handle this, but I''m pretty sure they can''t.  The syntax month=new Month(month.ordinal()+5) just sucks.

    Is there a better syntax that I''m missing?'
  replies: []
- id: 6195
  author: Carl Rosenberger
  date: '2007-01-02T15:23:15'
  content: 'Indeed, Calendar is *very* strange. Some further candidates for worst classes:

    (1) the uncertain finalizer behaviour, the option to increase the "likelihoodness" with System.runFinalizersOnExit(true) and the decision that this option is "inherently unsafe" and it should be removed again. Looking for a single class as a reason I found java.lang.Shutdown.

    Reading code and comments this is one of my absolute favourites for the worst class. It also contains the most useless class in the JDK:

    private static class Lock { };

    private static Object lock = new Lock();

    (2) java.util.Date, the root of all Calendar trouble

    (3) the choice to use primitive wrappers like java.lang.Integer instead of having true int objects. Did you know that an Integer object needs 4 bytes and 1 bit of space when it is serialized?'
  replies: []
- id: 6196
  author: Carl Rosenberger
  date: '2007-01-02T15:23:39'
  content: 'Indeed, Calendar is *very* strange. Some further candidates for worst classes:

    (1) the uncertain finalizer behaviour, the option to increase the "likelihoodness" with System.runFinalizersOnExit(true) and the decision that this option is "inherently unsafe" and it should be removed again. Looking for a single class as a reason I found java.lang.Shutdown.

    Reading code and comments this is one of my absolute favourites for the worst class. It also contains the most useless class in the JDK:

    private static class Lock { };

    private static Object lock = new Lock();

    (2) java.util.Date, the root of all Calendar trouble

    (3) the choice to use primitive wrappers like java.lang.Integer instead of having true int objects. Did you know that an Integer object needs 4 bytes and 1 bit of space when it is serialized?'
  replies: []
- id: 6197
  author: Charles Miller
  date: '2007-01-02T15:54:59'
  content: The only plausible explanation I've heard for why C/Unix chose zero-indexed months was that it meant you wouldn't waste the zero-th element of your array of month names.
  replies: []
- id: 6198
  author: Tom Hawtin
  date: '2007-01-02T15:59:04'
  content: 'Stack extends Vector.

    Anyway, how do you know that the Calendar returned from getInstance is Gregorian?'
  replies: []
- id: 6199
  author: Stephen Colebourne
  date: '2007-01-02T16:09:16'
  content: 'Has no-one here heard of Joda-Time? http://joda-time.sourceforge.net. Once you''ve used it you''ll never want to touch Date or Calendar ever again...

    DateTime dt = new DateTime(2006, 12, 30, 8, 42, 0, 0);

    Assert.assertEquals(2006, dt.getYear()); // SUCCEED!!!'
  replies: []
- id: 6200
  author: Radu
  date: '2007-01-02T16:39:02'
  content: I'm surprised to see nobody mentioned setLenient(true). That should counter problems two and three.
  replies: []
- id: 6201
  author: Matt
  date: '2007-01-02T16:54:48'
  content: 'my vote is for Date. i spent my first week in java believing i could make it work. not only is it useless, it''s a time sink. peppering classes with a slew of int constants doesn''t actually save it.

    >>I''m surprised to see nobody mentioned setLenient(true). That should counter problems two and three.

    i say deprecate everything and add setShouldNotSuck(true).'
  replies: []
- id: 6202
  author: Alex Miller
  date: '2007-01-02T18:07:01'
  content: 'These are all worthy contenders but I can''t believe no has mentioned java.util.Properties.  This bastard class has more tricks up its sleeves than you''d ever imagine.

    It extends Hashtable but provides new String-specific methods, which provide subtly different behavior than original get/put and does not shut down access to the parent class methods.  For example, you can put an Object into a Properties object, but if you use the String-based Property methods, you silently get back null.  Properties should NOT have extended Hashtable.  Should have been its own class with a backing Hashtable.

    There''s the whole backing Properties nonsense which works reasonably in some cases but is ignored or treated confusingly in some parts of the API.

    For example, cloning a Properties object (esp one with a backing set of properties) is sure to give you a whole host of interesting and unexpected behavior.  Definitely the Principle of Most Surprise at work.

    That would all be fine if Properties was some obscure class no one used, but people use this all over the place because it tantalizingly almost does most things you want and has those neat ways to read/serialize property files.  I think the whole class should be deprecated and replaced.  Seems like I''ve built libraries of utilities to protect people from it multiple times.'
  replies: []
- id: 6203
  author: Debasish Ghosh
  date: '2007-01-02T21:17:24'
  content: We have had enough with java.util.Date and java.util.Calendar. They are the two worst abstractions in JDK - totally non-intuitive. Ultimately we switched over to joda. Joda rocks !!
  replies: []
- id: 6204
  author: Bernd Eckenfels
  date: '2007-01-02T23:49:13'
  content: 'BTW: we used to use Calendar as a Timestamp Object because it contains all the time fields and especially the timezone. And then we discovered that a serialized Calendar Object is 2600 someting bytes LARGE, so beware. Get the time in millis as a long and the TZ or TZ Offset and serialise it yourself, if you want to save bandwith.'
  replies: []
- id: 6205
  author: Bernd Eckenfels
  date: '2007-01-02T23:53:24'
  content: 'Another API strangeness: the only deprecated method in the API which actually got removed (throwing an exception) was System#getEnv() which later reappeared due to the need for it.'
  replies: []
- id: 6206
  author: Gustavo Recio
  date: '2007-01-03T00:42:47'
  content: 'Have you tried to change the lenient behavior? By default, lenient = true, so setting dates out of range behave "oddly". If you do a setLenient(false), you remove that behavior, so a date out of range will throw an Exception.

    I agree with you that Calendar is one of the worst designed classes ever, and choosing the default value of lenient to true is only an example of this.

    Regards'
  replies: []
- id: 6207
  author: Tom Klaasen
  date: '2007-01-03T01:57:12'
  content: 'The Date and Calender classes are hopelessly flawed. Whenever time is involved, I turn to Jodatime (http://joda-time.sourceforge.net)

    See also another weird encounter with the standard Java date handling at http://www.tomklaasen.net/blog/2005/05/19/buggy-dates-in-java/'
  replies: []
- id: 6208
  author: Tom Klaasen
  date: '2007-01-03T01:57:50'
  content: 'The Date and Calender classes are hopelessly flawed. Whenever time is involved, I turn to Jodatime (http://joda-time.sourceforge.net)

    See also another weird encounter with the standard Java date handling at http://www.tomklaasen.net/blog/2005/05/19/buggy-dates-in-java/'
  replies: []
- id: 6209
  author: Keith Sader
  date: '2007-01-03T05:01:47'
  content: 'I think this is more of an example of bad base configuration.  cal.setLenient to false would have caught your problems, as would using the Calendar MONTH constants.

    IMO Calendar needs to be restrictive on what it takes as input unless specifically told to allow rollover items.

    However, the time/date objects as a whole in java smell of ''hurry'''
  replies: []
- id: 6210
  author: cooper
  date: '2007-01-03T06:57:37'
  content: 'My biggest issue of moronity in the JDK is java.util.Properties.

    It is a minor beef, really, but this is the kind of thing that makes a class hard to use:

    public String getProperty(String key) {

    Object oval = super.get(key);

    String sval = (oval instanceof String) ? (String)oval : null;

    return ((sval == null) && (defaults != null)) ? defaults.getProperty(key) : sval;

    }

    ... vs ...

    public synchronized Object setProperty(String key, String value) {

    return put(key, value);

    }

    While you can make arguments one way or another as to which is "correct", the use of super on the getProperty method and the lack of super on the setProperty can lead to all kinds of strange behavior if you are trying to extend this class.'
  replies: []
- id: 6211
  author: Laurent Foret
  date: '2007-01-03T07:10:28'
  content: '+1 Calendar.

    Lucky man, I lost more than half an hour with this enormity.

    Sometimes, we saw fools who wrote those foolish things :

    public final static int JANUARY = 0;'
  replies: []
- id: 6212
  author: Carlos E. Perez
  date: '2007-01-03T11:46:54'
  content: 'Dug this up:

    http://www.adtmag.com/java/articleold.aspx?id=72

    "The zero-based month numbers in Date were a vestige of old C-style programming'
  replies: []
- id: 6213
  author: Michael Lee
  date: '2007-01-03T14:57:08'
  content: 'I have a case for using ''0'' instead ''1'' to represent numeric value whose base is not 10.

    This came about writing a simple code to add and subtract months from ''YYYYMM''.

    if I use based 0-11 for MM - it becomes very simple modulo operation

    i.e.  month add 5 months

    yyyy = 2006

    mm   = 9 [october]

    mm_add = 5

    months = yyyy * 12 + mm + mm_add

    year = int( months / 12 )

    month = month % 12

    if you treat month as 1 to 12 - you have to check to see if ''mm'' is over 12, etc. - a few ''if/else'' statements.

    If you look, hour, minute, second are all based on zero to N.

    mdays is not because there is a constant N days in the months.

    I am not C++ programmer but when I saw ''Date'' class in C++-boost - I almost cried.  It was so easy to use...'
  replies: []
- id: 6214
  author: Michael Lee
  date: '2007-01-03T14:58:29'
  content: 'Correction -

    months = yyyy * 12 + mm + mm_add

    year = int( months / 12 )

    month = months % 12'
  replies: []
- id: 6215
  author: Justin
  date: '2007-01-03T18:40:32'
  content: '"# When a passed value is invalid, returning a valid date that has nothing to do with the values passed in set()."

    They must have learned that dubious behaviour from Mysql.'
  replies: []
- id: 6216
  author: sage
  date: '2007-01-04T17:20:30'
  content: If you were a programming "otaku", you should have spent 10 minutes to read the api doc rather than guessing how it might work...
  replies: []
- id: 6217
  author: Sam
  date: '2007-01-05T07:11:07'
  content: 'Hashtable seems to have worn out its welcome. Other than the previously mentioned Properties snafu, it doesn''t really serve a purpose. HashMap is faster 9 times out 10. The only corner case where anyone finds it useful is thread safety. The new Java 5 ConcurrentHashMap is thread safe without the performance hit of having all its methods synchronized.

    Sounds like a good candidate for euthanasia...'
  replies: []
- id: 6218
  author: Sualeh Fatehi
  date: '2007-01-05T10:52:31'
  content: Properties implementing Map.
  replies: []
- id: 6219
  author: Rafael Naufal
  date: '2007-01-07T11:21:17'
  content: Properties extends Hashtable is terrible.
  replies: []
- id: 6220
  author: Rafael Naufal
  date: '2007-01-07T11:22:01'
  content: Properties extends Hashtable is terrible.
  replies: []
- id: 6221
  author: Michel Casabianca
  date: '2007-01-09T03:32:11'
  content: 'My vote for the worst JDK class: java.net.URLConnection'
  replies: []
- id: 6222
  author: Michel Casabianca
  date: '2007-01-09T03:32:43'
  content: 'My vote for the worst JDK class: java.net.HttpURLConnection'
  replies: []
- id: 6223
  author: sfisque
  date: '2007-01-09T16:45:20'
  content: 'hrm.  i''d have to go with java.util.Properties.  WHY did they skip over this when they revamped Collections in jdk1.2 ??  how many of us have unrolled Properties read in from a file just to get them into a Collection object for various processings?

    ugh.'
  replies: []
- id: 6224
  author: Dan
  date: '2007-01-10T10:14:26'
  content: I agree with the earlier comment above that the real issue is that months are not integers.  A better design would have been to have a separate Month class using Bloch's typesafe enum pattern.  Using that pattern you can still assign an integer value to each instance of Month for mathematical purposes, but Calendar API would require you to pass in a Month instance instead of an integer in its set method.
  replies: []
- id: 6225
  author: Robert Jones
  date: '2007-01-12T07:13:53'
  content: 'Somewhere one explanation for the Date package is that it was designed by a summer intern at Sun.  Anyone know how much truth there is in that?

    But I think the C explanation Carlos posted makes more sense.  But also this stuff is complicated, it takes a while to get it right, look at the constant changes to Number classes (BigDecimal), and revisions to the spec even (IEEE 754).

    Other than that, I agree with the other classes on this comment list (Properties, Hashtable).  I think you can tell which classes needed work by the ones which changed later: now we have Collections, etc.

    Although the Boost library, and Yodatime, prove it can be done right, I guess.'
  replies: []
- id: 6226
  author: Brett Foster
  date: '2007-01-12T23:46:11'
  content: 'Behold! The most useless of the useless classes: java.lang.Void'
  replies: []
- id: 6227
  author: Alan Green
  date: '2007-01-12T23:51:48'
  content: java.util.Calendar gets my vote too, particularly for Sun's continued refusal to make the class thread safe, even for operations that cause no apparent state change. Serialising the same calendar in two threads caused a serious but intermittent bug in a production app I was working on.
  replies: []
- id: 6228
  author: Jeremy Weiskotten
  date: '2007-03-13T13:38:49'
  content: 'The TimeAndMoney library (http://timeandmoney.domainlanguage.com/) was built using Domain-Driven Design principles. It''s a pretty good alternative to the Java Date/Calendar API and lighter than Joda-Time, although not as feature-deep.

    To understand why months aren''t numbers (and they''re not really enums, either), read the article "March is Not a Number" by Gregor Hohpe (http://www.eaipatterns.com/ramblings/40_marchnan.html).'
  replies: []
- id: 6229
  author: DaveK
  date: '2008-04-24T13:21:44'
  content: '"My biggest gripe is not that the month index starts at 0, but that *all* of the other indexes (day, year, etc.) start and 1."

    Uhh, hours, minutes, seconds and millis don''t.  And why weren''t you using the proper named constants, anyway?  It''s your fault for bad coding style: using a hard coded numeric constant instead of the named enumeration you were given for the purpose is a classic mistake.'
  replies: []
---

I know that making fun of the `java.util.Calendar` class is as cheap as laughing at the [Darwin award winners](http://darwinawards.com/darwin/darwin2006.html) , but I spent a half hour this morning debugging the following:
    
    
    Calendar cal = Calendar.getInstance();
    cal.set(2006, 12, 30, 8, 42);
    Assert.assertEquals(2006, cal.get(Calendar.YEAR)); // FAIL
    

Here is what's wrong with `Calendar` in this example, in order of increasing moronityTM: 

  * Indexing months starting at 0.
  * Not throwing an exception when any of the passed values is invalid.
  * When a passed value is invalid, returning a valid date that has nothing to do with the values passed in `set()`.



And these lessons come from a three-line code sample using `Calendar`, which should give you a good idea why this class contains some of the worst code ever included in the JDK (only second to `Vector` extending `Stack`).

What's your vote for the worst JDK class?
