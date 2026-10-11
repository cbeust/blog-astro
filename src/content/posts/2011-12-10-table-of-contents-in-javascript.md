---
title: Table of contents in Javascript
date: '2011-12-10T22:32:22'
slug: table-of-contents-in-javascript
categories:
- General
comments:
- id: 9404
  author: Dan Fabulich
  date: '2011-12-11T09:27:30'
  content: It might be more semantically correct to wrap these in h1, h2, h3 tags. Additionally, Google recommends it in its SEO starter guide.
  replies: []
- id: 9405
  author: Cedric
  date: '2011-12-11T09:33:28'
  content: Actually I was thinking even this was going too far. Ideally, you just want to wrap them in divs or spans with the correct class (indent1, indent2, etc...) and slap a CSS on them.
  replies: []
- id: 9406
  author: JB
  date: '2012-01-06T08:53:58'
  content: I agree with Dan. h1, h2 etc. are the standard tags used to define a title hierarchy. The indentation should be directly deduced from the enclosing heading tag.
  replies: []
---

This is my week end project: [a table of contents generator](https://github.com/cbeust/misc/blob/master/src/main/javascript/toc.js). Well, technically, it's more like a two hour project interrupted four times over the course of a Saturday but I guess it still qualifies as a week end project. 

I got tired of managing the table of contents of my documentations manually and in particular, of having to modify all the section numbers by hand whenever I moved things around. This short Javascript program now automatically takes care of it for me. Here is the quick documentation: 
    
    
    // A simple HTML "table of contents" generator.
    //
    // 1) Include toc.js in your HTML file:
    //          <script type="text/javascript" src="toc.js"></script>
    //
    // 2) Call generateToc() in your onLoad() method:
    //           <body onLoad="generateToc();">
    //
    // 3) Declare a div with the id "table-of-contents" where you want
    // your table of contents:
    //           <div id="table-of-contents"></div>
    //
    // 4) Put each of your sections in an <a> tag with class "section",
    // specifying an "indent" representing the indentation of that section.
    // Only the length of the indent matters, now its content. If no indent
    // is found, a string of size 1 is the default.
    //
    // Example:
    // <a class="section" name="Section 1">Section 1</a>
    // <a class="section" indent=".." name="Section 1a">Section 1a</a>
    // <a class="section" name="Section 2">Section 2</a>
    

This script now powers both [testng.org](http://testng.org/doc/documentation-main.html) and [jcommander.org](http://jcommander.org), go take a look there if you want to see what it looks like. 

Ideas for potential improvements: 

  * Make the numbering optional or configurable. 
  * Have the script add CSS classes to the sections for easier styling ("section1", "section2", etc...), since the indenting is pretty crude right now.
