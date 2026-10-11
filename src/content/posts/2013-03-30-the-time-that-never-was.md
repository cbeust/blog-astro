---
title: The time that never was
date: '2013-03-30T07:32:43'
slug: the-time-that-never-was
categories:
- General
tags:
- java jodatime
comments:
- id: 9691
  author: Kris Nuttycombe
  date: '2013-03-30T09:04:31'
  content: 'This looks like an awful solution to me. Hardcoded, special-cased, fragile, depending upon an exception for control flow. I''d suggest a much better solution would be:

    max = eventLocalTime.withTimeAtStartOfDay().plusHours(22)'
  replies: []
- id: 9692
  author: Cedric
  date: '2013-03-30T09:13:50'
  content: 'Kris, this won''t work if eventLocalTime is March 30th: you''ll end up with the same illegal time.'
  replies: []
- id: 9693
  author: Kris Nuttycombe
  date: '2013-03-30T09:20:08'
  content: Really? That seems like a bug then; advancing the time of day from the start of day by a fixed number of hours should always end with a valid time, rolling past the daylight savings change. Note that I'm not suggesting to set the hour to 22; I'm suggesting to advance the clock.
  replies: []
- id: 9694
  author: Cedric
  date: '2013-03-30T09:21:30'
  content: Yes. Stephen is telling me this behavior has been fixed in JSR-310, which will automatically do the +1 to avoid creating an illegal time.
  replies: []
- id: 9695
  author: Horia Toma
  date: '2013-03-30T09:45:15'
  content: "It's just a snippet, but you may want to use a variable instead of hard coded numbers (unless the hard coded value is 42, which does not seem to be the case).\ntry {\n    max = eventLocalTime.withTime(defaultDelay, 0, 0, 0);\n} catch (IllegalFieldValueException e) {\n    max = eventLocalTime.withTime(defaultDelay+1, 0, 0, 0);\n}\nAlso, since crazy things seem to happen on time changes, you may use a loop in the catch part to protect against what could be considered a (un)reasonable amount of time adjustment (for instance what if they adjust by 90 minutes instead of an hour?)."
  replies: []
- id: 9696
  author: Martin
  date: '2013-03-30T11:19:06'
  content: 'Hi C??dric,

    Thanks for remembering me that I have to  adjusting my clocks for daylight savings time :-)'
  replies: []
- id: 9697
  author: Joshua
  date: '2013-03-30T12:29:26'
  content: It wouldn't be a new Java release if it didn't have a new time or date API.
  replies: []
- id: 9698
  author: Stephen Colebourne
  date: '2013-03-30T16:39:01'
  content: Kris's solution should work well. See http://joda-time.sourceforge.net/apidocs/org/joda/time/DateTime.html#plusHours%28int%29 , in that plusHours() adds duration, not period
  replies:
  - id: 9699
    author: Cedric
    date: '2013-03-30T17:13:07'
    content: I stand corrected, sorry Kris!
    replies: []
- id: 9700
  author: Emil
  date: '2013-04-03T21:21:48'
  content: 'Here is Ruby TZinfo API that documents the behaviour :

    http://tzinfo.rubyforge.org/doc/classes/TZInfo/Timezone.html#M000053

    What you described is  PeriodNotFound exception, also note the AmbiguousTime exception condition when switching back in the fall!

    Also, an interesting aspect, is that the dst dates were historically changing, and Ruby TZinfo uses the TZ Database to provide historic dst aware transformations ;)'
  replies: []
---

I spent some time tracking down a funny bug yesterday, which suddenly starting clogging our logs with the following error message: 

```text
org.joda.time.IllegalFieldValueException: Value 22 for hourOfDay is not supported: Illegal instant due to time zone offset transition
```

If there are two things I have learned about Joda-Time these past years, it's that 1) it hardly ever fails and 2) when it does, it's for a good reason. So I took a look at the code causing the exception and I found this: 

```java
max = eventLocalTime.withTime(22, 0, 0, 0);
```

I see the "22" value but this code has been working flawlessly for weeks, what is suddenly causing it to fail? I fired the debugger, reproduced the problem and inspected the `eventLocalTime` variable. Something felt a bit unusual about its value: 

```text
2013-03-30T22:32:00.000 (America/Godthab)
```

I won't claim that I know all the different time zones in existence in North America, but "America/Gothab" is certainly new to me. A quick Google search reveals that [this time zone is in Greenland](http://www.timezoneconverter.com/cgi-bin/zoneinfo.tzc?s=default&tz=America/Godthab). Alright, so we have users in Greenland, but why would this cause a problem? 

Reading this page again, something strikes me: 

```text
Next Scheduled DST Transition
DST will begin on Sat 30-Mar-2013 at 10:00:00 P.M. when local clocks are set forward 1 hour
```

and then everything falls into place. 

The variable `eventLocalTime` is perfectly legitimate but today is March 29th, and adding 22 hours to it puts it into a nonexistent time, which happens whenever a time zone transitions to or from Daylight Savings Time. By adding twenty-two hours to the variable, we were trying to create a date "March 30th, 10pm", which doesn't exist because the clock in this time zone skips to 11pm. In the US, this nonexistent time period is usually between 2am and 3am, but for some reason, Greenland does this switch at 10pm. 

The fix ended up looking as follows (happy to hear if there is a better solution): 

```java
try {
    max = eventLocalTime.withTime(22, 0, 0, 0);
} catch (IllegalFieldValueException e) {
    max = eventLocalTime.withTime(23, 0, 0, 0);
}
```

I am so happy that Joda will finally become standard with Java 8, and I have to tip my hat to Stephen, again, for his dedication to the terribly hard problem of date management. 

If you have any funny bug to share, please go ahead and do so in the comments!
