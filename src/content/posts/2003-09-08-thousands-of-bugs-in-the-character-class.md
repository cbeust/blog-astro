---
title: Thousands of bugs in the Character class
date: '2003-09-08T08:32:18'
slug: thousands-of-bugs-in-the-character-class
categories:
- Java
comments:
- id: 467
  author: Cameron
  date: '2003-09-08T12:11:48'
  content: 'Uh .. maybe it''s your usage that is broken, no?

    For example, did you check to see if the character were a letter? Uppercase to start with? Lowercase to start with? etc.

    Take away his keyboard ;-)'
  replies: []
- id: 468
  author: Sam Pullara
  date: '2003-09-08T14:04:58'
  content: 'I believe the correct answer for isLowercase for most Japanese characters would be ''mu'', or "unask the question".  They do not have a case and the behavior of isLowercase(toLowercase) returning false for such characters is well documented in the Javadocs.

    I would probably use getType and just make sure that it is not an UPPERCASE_LETTER but still a Java identifier or something along those lines.

    Unicode is the bane of all those who think they understand text processing but have only dealt with ASCII.'
  replies: []
- id: 474
  author: The Fishbowl
  date: '2003-09-08T14:30:31'
  content: '<strong>How toLowerCase and isLowerCase Interact: Not a Bug.</strong>

    This is not a bug. The Javadoc for the Character Class explains that the toLowerCase() method does not necessarily return a lower-case letter. It returns either a lower-case letter, or the original letter if it has no lower-case equivalent.'
  replies: []
- id: 469
  author: Charles Miller
  date: '2003-09-08T14:32:04'
  content: 'Even more trippy, you can call isLowerCase() on a character, and get an upper-case result back. It''s not a bug though: http://fishbowl.pastiche.org/archives/001549.html#001549'
  replies: []
- id: 470
  author: Charles Miller
  date: '2003-09-08T14:32:53'
  content: Erk. The above should read "toLowerCase()", not "isLowerCase()". Never post before the first cup of tea.
  replies: []
- id: 471
  author: baliku
  date: '2004-01-25T17:45:35'
  content: 'I suggested its truly big idea.

    , :)Great content to find another.

    Interesting. Nice to get your information'
  replies: []
- id: 472
  author: Sergey Ivanov
  date: '2004-07-01T05:56:45'
  content: '"Satisfied customers with the most professional and affordable offshore development solution"

    With this mission in mind our developers has one priority: The real needs of our customers.

    We do not sell workarounds.  We sell a clean and real service.

    Our experience said that the offshore customers know exactly what they want.

    Because of that, Soft-Industry has develop a simple development methodology

    which has been build with the experience of different consultants and partners which collaborate with us.'
  replies: []
- id: 473
  author: Faisal
  date: '2009-03-11T00:57:01'
  content: Your program is very stupid,Idon't like it.
  replies: []
---

I received an interesting bug report on ejbc recently.  It's very simple:  one of our Japanese customers is using his native alphabet to name CMP fields but ejbc complains because the said CMP fields do not start with a lowercase letter, as mandated by the specification.

None of the three Japanese alphabets have the concept of uppercase/lowercase letters, so I immediately suspected a bug in the Unicode support of the JDK.  I wondered how the Character API implemented the toLowerCase() method for these alphabets that do not have lowercase letters, so I wrote the following test case:

> public static void main(String[] argv) {  
>    int count = 0;  
>    for (char i = 0; i < 65535; i++) {  
>      if (! Character.isLowerCase(Character.toLowerCase(i)))  
>        count++;  
>    }  
>    System.out.println("# of incorrect values: " \+ count);  
>  }  
> 

The idea is simple:  regardless of whether a certain alphabet has lowercase letters or not, the call isLowerCase(Character.toLowerCase(...)) should always return true.

Well, the result is interesting:

> # of incorrect values: 64077 

Ouch.

This made me wonder how Character.toLowerCase() is implemented...

> public static boolean isLowerCase(char ch) {  
>    return (A[Y[((X[ch>>5]&0xFF)<<4)|((ch>>1)&0xF)]|(ch&0x1)]  
>            & 0x1F) == LOWERCASE_LETTER;  
>  } 

And people say that obfuscated Java is impossible...  (in case you wonder:  this is the real source, not the decompiled version).

Okay, having said that and after poking some harmless fun at the Sun developers, I have to say I actually understand why this method would be so obfuscated.  The call needs to be very fast and it's not like hundreds of developers are going to refer to this source for guidance.

Still, the lowercase handling of Unicode characters is severely broken in the JDK, so beware.
