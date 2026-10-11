---
title: The perils of split()
date: '2004-08-12T10:41:16'
slug: the-perils-of-split
categories:
- Java
comments:
- id: 1945
  author: tjansen
  date: '2004-08-14T12:18:29'
  content: You can use it for other separators wuth which empty tokens may make sense. For instance, you can use split(",") to parse a CSV-formated line. For CSV data it's important to get empty strings, as the row-number is usually needed.
  replies: []
- id: 1946
  author: Frank Nestel
  date: '2004-08-16T05:38:13'
  content: The behaviour of StringTokenizer has made some of my collegues crazy, cause it was not well documented with Java (I don't know if it is now). The point is that with separators like " " people would expect the StringTokenizer behaviour, with separators like "," or ";" would expect the split() behaviour. But making it depend on the split charactor would make a really messy contract.
  replies: []
- id: 1947
  author: James A. Hillyerd
  date: '2004-08-17T09:58:47'
  content: 'In this case the empty tokens make sense to me. What I don''t like is that:

    "abc".split("")

    returns

    { "", "a", "b", "c" }

    I understand why it works that way from an implementation standpoint, but I prefer the way perl''s split works.  Since my app lets users configure the split regex, I now have to check for the "" special case and handle it differently.'
  replies: []
---

Can you spot why the following program:
    
    
    public class Split {
    public static void main(String[] argv) {
    String STRING = "foo  bar";
    String[] s = STRING.split(" ");
    for (int i = 0; i < s.length; i++) {
    System.out.println(i + " '" + s[i] + "'");
    }
    }
    }

displays: 
    
    
    0 'foo'
    1 ''
    2 'bar'
    

The reason is that split() works a little differently from StringTokenizer:  it accepts a regular expression as a separator.  In the code above, I define this regular expression as " " (one space character) but the input string contains two of them.  Therefore, we can solve this problem by using the " +" as a regular expression ("at least one space character").

Still, the fact that split() can return empty strings is deceiving, especially if you are converting your code from StringTokenizer.

There are a couple of good things about this behavior, though:

  * You can reconstitute the original string if you need to.
  * It makes it easier to parse strings with records that can be empty, such as lines from a log file.



Can you think of any other use?
