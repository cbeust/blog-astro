---
title: The Art of Commenting
date: '2005-05-20T12:01:40'
slug: the-art-of-commenting
categories:
- General
comments:
- id: 3654
  author: cooper
  date: '2005-05-20T13:18:10'
  content: 'I like to add comments for closing braces:

    My first CS prof in college actually required this and would doc you if you didn''t. I abhorred the practice at the time, but I do it now two if the block runs on for more than 20 lines (a screenish) or so.'
  replies: []
- id: 3655
  author: Robert Watkins
  date: '2005-05-21T00:44:51'
  content: 'Cooper, you''re seeing another smell there: overly long blocks. As Mike points out, commenting closing braces is nearly always the sign of a method that''s too long. (Though complicated mathematical algorithims may well be a different kettle of fish).

    One thing I do with my Eclipse comment configuration is put the words "TODO" in - that way, it shows up in the various lists of tasks.'
  replies: []
- id: 3656
  author: Carfield Yim
  date: '2005-05-21T11:18:13'
  content: I think your comment is much better than the orginal article, that one just contain common practice with available everywhere. But your comment is really your idea and experience, I like this much more~
  replies: []
- id: 3657
  author: cooper
  date: '2005-05-22T17:57:39'
  content: '>>Cooper, you''re seeing another smell there: overly long blocks. As Mike points out, commenting closing braces is nearly always the sign of a method that''s too long. (Though complicated mathematical algorithims may well be a different kettle of fish).

    You know, I think that is really an oversimplification, and not necessarily true. Frankly, if you have a 15 or 20 step proceedure, I would rather see it laid out in one method where it is clear what you are doing. Personally, I think there is a lot of "method propogation" that goes on in the name of this that makes code much harder to follow.

    Secondly, 20 lines is easy to hit when you are looking at code at my office in gnu style.

    public void foo()

    {

    for

    {

    switch()

    {

    case 0:

    call();

    breal;

    case 1:

    call2();

    break;

    case 2:

    if

    {

    call();

    }

    else

    {

    call();

    }

    break;

    default:

    call();

    }

    }

    }

    Again, a pretty short and mostly control structures, but still long enough that by the end of the method, you might be wondering where the for() block ends.'
  replies: []
- id: 3658
  author: Tugdual Grall
  date: '2005-05-22T19:36:05'
  content: 'Hmmm you want some help with yours comments, just use Commentator: http://www.cenqua.com/commentator/  ;-)'
  replies: []
- id: 3659
  author: cooper
  date: '2005-05-23T08:04:29'
  content: Well, I never know who uses UBB-ish stuff and who used HTML :P The line count in the above is all I really cared about though, so I think it still gets the point across.
  replies: []
- id: 3660
  author: Vincent Mallet
  date: '2005-05-25T07:45:28'
  content: 'As a general rule I always try to stay away from closing-brace comments. Comments tend to fall out of sync pretty quickly, even more so when they are on a closing brace, and even more so when they are on a closing brace of a bigger code block.

    I have been tricked more than once by comments that told me I was looking at the closing brace of an "if (cond)" when really it was the end of a while loop with a different condition.

    DRY totally applies in this situation especially when even the tools can''t help you catch the problem.'
  replies: []
- id: 3661
  author: Rafael
  date: '2005-06-01T14:45:20'
  content: 'Cedric,

    The Eclipse template is a very good idea.

    I don''t like to put comments in the closing brace because I think it''s not necessary when I have only a few lines of code between braces and if I have a lot of code between the braces I do some refactoring to resolve the problem.

    I really appreciate to comment blocks of code, but in the last few months I have used methods with descriptive names despite block comments (//) and my experience have been very nice.

    Sample:

    public void foo() {

    // Reads file lines

    File f = new File(path);

    BufferedReader reader = new BufferedReader(new FileReader(f));

    String line;

    StringBuffer lines=new StringBuffer();

    while ((line = reader.readLine()) != null) {

    lines.append(line);

    }

    // ...

    }

    The above code changes to:

    public void foo() {

    String lines = readFileLines();

    // ...

    }

    private String readFileLines() {

    File f = new File(path);

    BufferedReader reader =

    new BufferedReader(new FileReader(f));

    String line;

    StringBuffer lines=new StringBuffer();

    while ((line = reader.readLine()) != null) {

    lines.append(line);

    }

    return lines.toString();

    }'
  replies: []
- id: 3662
  author: Stock
  date: '2005-06-02T10:30:27'
  content: 'I agree with Mr. Watkins.  If you need to comment your closing braces, then you have a problem with your code.  I use to follow this practice in my C days but you shouldn''t need it in an OO Java application except possibly in some unusual (read: rare) algorithms.'
  replies: []
- id: 3663
  author: Tinou Bao
  date: '2005-06-02T22:47:24'
  content: 'I think people comment too much. That''s right, too much. Why do you comment? Because the code is too messy/complicated. Instead of wasting time writing comments to explain just make your code better.

    Unfortunately I think it''s one of those things where if you comment people automatically assume you''re doing a good thing.'
  replies: []
- id: 3664
  author: Someone
  date: '2005-06-21T13:47:50'
  content: '"I like to add comments for closing braces"

    As many people already said, my experience says, that this is a pretty bad practice that does not live with time and does not support team development.

    I have seen this kind of practice with overly long and convoluted code..and after a year it was a mix of commented and uncommented brace.

    Such comments clutter the code a lot. With today''s IDE you get brace highlighting for free you don''t need to comment that, otherwise you may well invent a language with named blocks.

    I have listen to my first mentor that taught me to write methods with no more than 20-30 LOC'
  replies: []
- id: 3665
  author: Mdiaaga
  date: '2007-02-18T09:07:08'
  content: 'http://chase-home-finance.soignio.info chase home finance chase home finance [url=http://chase-home-finance.soignio.info ]chase home finance[/url]

    http://nursing-journals.copestic.info nursing journals nursing journals [url=http://nursing-journals.copestic.info ]nursing journals[/url]

    http://bunn-coffee-maker.herspara.info bunn coffee maker bunn coffee maker [url=http://bunn-coffee-maker.herspara.info ]bunn coffee maker[/url]

    http://pet-sitting.herspara.info pet sitting pet sitting [url=http://pet-sitting.herspara.info ]pet sitting[/url]

    http://breast-cancer-symptom.restenli.info breast cancer symptom breast cancer symptom [url=http://breast-cancer-symptom.restenli.info ]breast cancer symptom[/url]'
  replies: []
- id: 3666
  author: Djjjk
  date: '2007-02-19T07:46:32'
  content: 'http://acid-reflux-diet.monyar.info acid reflux diet [url=http://acid-reflux-diet.monyar.info]acid reflux diet[/url]

    http://stomach-virus.oliacili.info stomach virus [url=http://stomach-virus.oliacili.info]stomach virus[/url]

    http://income-tax-software.oliacili.info income tax software [url=http://income-tax-software.oliacili.info]income tax software[/url]

    http://tax-office.otered.info tax office [url=http://tax-office.otered.info]tax office[/url]

    http://nutrition-product.mirect.info nutrition product [url=http://nutrition-product.mirect.info]nutrition product[/url]'
  replies: []
- id: 3667
  author: macsimsuka
  date: '2007-03-06T04:13:32'
  content: 'http://mobile-phone-games-download.eoe1o.info mobile phone games download [url=http://mobile-phone-games-download.eoe1o.info]mobile phone games download[/url]

    http://high-speed-cable-internet.klpmm.com high speed cable internet [url=http://high-speed-cable-internet.klpmm.com]high speed cable internet[/url]

    http://lcd-versus-plasma.eoe1o.info lcd versus plasma [url=http://lcd-versus-plasma.eoe1o.info]lcd versus plasma[/url]

    http://teen-pregnancy-article.erw1r.info teen pregnancy article [url=http://teen-pregnancy-article.erw1r.info]teen pregnancy article[/url]

    http://agent-estate-real-toronto.klpmm.com agent estate real toronto [url=http://agent-estate-real-toronto.klpmm.com]agent estate real toronto[/url]'
  replies: []
- id: 3668
  author: aelwogpe
  date: '2007-06-12T23:42:35'
  content: tfngkzey  zmrwnftc http://ugbpouki.com jkhogpjb crtdcxlc  [URL=http://fsskkcvk.com]hziaarai[/URL]
  replies: []
- id: 3669
  author: ubrssivt
  date: '2007-06-12T23:46:57'
  content: prgnrbqj  [URL=http://yoeumfkf.com]xjezemro[/URL]  kiudebhu http://oyyklhxb.com ryfdskgt hoeygatc
  replies: []
- id: 3670
  author: nthuijgjst
  date: '2007-07-31T11:24:58'
  content: vyziva | [url=http://ninepa.com]zexava[/url] | [link=http://cusihe.com]nenuzo[/link] | http://xuxuxi.com | huzehe | [http://pirixe.com cuhiwi]
  replies: []
---

Mike Clark wrote an [ interesting piece on comments](http://www.stickyminds.com/s.asp?F=S9041_ART_3), and I have a few things to contribute as well.

Here are some of the practices I follow with regards to comments:

  * I configured Eclipse so that whenever I create a new class, it inserts a JavaDoc comment that says "This class ".  Yup, that's right.  Just these two words.  
  
I found that modifying templates so they contain fragments of sentences forces a reaction in me.  As soon as I see them, either I go ahead and edit them to complete the sentence, or I delete them completely.  Which is much better than seeing five lines of text saying "This comment was generated in a template.  To configure your template, go to Windows / Preferences /...".  
 
  * I like to add comments for closing braces:

>   } // for (word in sentence)  
>  } // if file exists

I don't know about you, but to me, a closing brace means nothing.  I have no idea what it applies to and while I can obviously put my cursor on it and find its matching pair (Ctrl-Shift-p in Eclipse), it's actually much better to write it down explicitly.  This kind of comment helps me understand the algorithm I am looking at much better and sometimes, even spot bugs right away ("Shouldn't we close the file outside the for loop?").  
 
  * There is a big difference between a JavaDoc comment and a regular comment.  This is a point that seems to be absent from Mike's article but it's a very important one.  For that reason, I find it acceptable to be less strict when you are writing a non-JavaDoc comment (you don't really need to supply an @param for each parameter of your method).  I also tend to reserve the /* syntax for JavaDoc comments and multiple // comments for the rest (this is purely a matter of taste).  
 
  * I like to comment blocks of code at a time, as opposed to commenting lines.  For example, I will spend two-three lines describing a for loop at the top of the said loop but I will probably not bother adding extra comments inside (there are exceptions to this rule if the loop is particularly complicated, of course).



These are all more or less personal preferences, but there is one rule that think should be applied at all times:

> Get in the habit of commenting code that is not yours.

This is not easy.

There is some kind of unsaid rule in the software development world that somehow makes it hard for people to follow this rule.  Think about it:  how would you feel if you see a commit log indicating that someone modified a file that you created and all they did was adding comments?

Chances are you will take it a bit personally...  "Is she trying to tell me my code isn't clean? Or that my comments are not good enough?".

You need to get over it.  There are many reasons why people other than you adding comments to your code is a Good Thing:

  * Your comments show your own bias.  Since you wrote this code, you are making a lot of assumptions on what the reader already knows and you will most likely omit details in your comment.  
 
  * Consider this a code review.  Code reviews are fairly rare in my experience, so any opportunity you can have to get somebody else to take a close look at what you wrote and try to actually understand it is a great way to improve not only this particular piece of code but your skills as a whole.  
 
  * Somebody else commenting your code goes a long way toward making your code easier to read and evolve in the future.  They are trying to share their perspective on what you wrote and make it available to everybody else.  They are trying to save future developers the trouble they had to go through your code.



So next time it happens, don't take it personally, take a close look at the new comments and if they are not to your liking, work with the person to improve them.  And of course, feel free to return the favor, and if everybody does their part, your code base will end up being easier to read and maintain.
