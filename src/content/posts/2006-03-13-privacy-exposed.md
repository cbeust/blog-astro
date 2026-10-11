---
title: Privacy exposed
date: '2006-03-13T16:32:36'
slug: privacy-exposed
categories:
- Java
comments:
- id: 4938
  author: Robert
  date: '2006-03-13T20:18:21'
  content: 'Sometimes. In most of the work I do, the main reason for the Javadoc in the first place is to use it within the IDE - in this context, documenting privates make sense.

    However, since I started using Java 1.5, most of my private comments have faded - mostly, I used them to document the contents of collections.'
  replies: []
- id: 4939
  author: ct
  date: '2006-03-13T21:17:21'
  content: 'I think its ironic to talk about what the IDE can do for you when you use the eye-sore (and completely redundant) techniques of  IInterface and m_field.

    TestNG is nice, but the source makes my eyes water ;)'
  replies: []
- id: 4940
  author: Nicolas Delsaux
  date: '2006-03-14T01:04:49'
  content: 'I''m almost surprised you didn''t document your privates, since javadocing all the code is the only way you can be sure your code can be read by another developper without issues.

    But, well, sometimes, they''re not documented that good ;-)'
  replies: []
- id: 4941
  author: Tim Jansen
  date: '2006-03-14T01:09:24'
  content: Usually I have complete Javadocs for all public methods and fields, and describe them in all details (allowed argument range, exceptions etc). For private members I only use simple comments, only one line most of the time. It makes less sense to have a complete documentation for private methods, as a) those who see them also have the full source code, and b) they tend to change more often than public methods.
  replies: []
- id: 4942
  author: George Petrov
  date: '2006-03-14T02:07:41'
  content: 'There''s nothing more annoying than this:

    /** Mobile phone number */

    private String mobilePhoneNumber;

    except may be this:

    /** A string field used to store the mobile phone number of this customer */

    private String mobilePhoneNumber;

    or this:

    /** Temporary storage for the difference between m_optiplex_frida and pqrKK_H. This field is initiali....

    .....

    Added on May the 24th by Jason to comply with spec HGJ17, might remove it later...

    */

    private String g_x_hamster;'
  replies: []
- id: 4943
  author: Tarik Idris
  date: '2006-03-14T02:49:38'
  content: '> "javadocing all the code is the only way you can be sure your code can be read by another developper without issues"

    How about putting the info in the field name? With the refactoring support in modern IDEs, it is easy enough to change a field name (esp. a private one). So if you can''t immediately tell what the field does, give it a better name.

    Btw, I totally agree with ct that using naming conventions like m_field is pretty useless, esp. when your post is about adding metadata for IDE use. Your IDE can tell you what type the field is, can''t it?'
  replies: []
- id: 4944
  author: ''
  date: '2006-03-14T09:16:15'
  content: That is the matter of how obvious it is. If you can easily guess what this method/member does based on its name and signature, then the comments are not required.
  replies: []
- id: 4945
  author: Professor Ronald Hutton
  date: '2006-03-14T10:02:49'
  content: In the case of this one, the means of effecting it, by murdering most of the English political
  replies: []
- id: 4946
  author: Professor Ronald Hutton
  date: '2006-03-14T10:03:27'
  content: In the case of this one, the means of effecting it, by murdering most of the English political
  replies: []
- id: 4947
  author: Lee Meador
  date: '2006-03-16T11:23:15'
  content: 'I used to worry over order of things. It made a lot of sense when I used to print out source code and read it. Later, I would read it in the text editor--not an IDE, just an editor.

    That made sense back then.

    Now, I just make 4 groups in my source file.

    1) At the top are the class/static and instance variables and any initializers, which are all static. I sometimes put static variables before the instance variables but its not really a rule I use.

    2) Constructors go next. If there is a no-args constructor I always put it first.

    3) Methods go next. I don''t worry about the order except I like get and set methods to go at the bottom where I don''t have to look at them.

    4) Inner classes go at the very bottom. Sometimes this gets messed up when I automatically add some get or set methods for new attributes and they go at the bottom.

    Finally, since I use Eclipse, I set the outline view to order things in this order and I click the button to sort by name within the groups. (The only time I switch back to the unordered view is the rare case that I want to reorder the methods by dragging them in the outline view.

    Its funny how I used to obsess (sp?) over the order of methods and now I spend no time at all on it. The time saved by the tool makes it work.'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/private-tooltip.jpg)

Do you document your private methods and fields?

I do.

I realized this not long ago when I was trying to use a field, forgot exactly what its type was, put my cursor on top of it and waited for the tooltip to appear.

Now, why would you want to add JavaDoc comments to parts of your code that will be skipped by JavaDoc?  For your IDE, of course.

In theory, you should never need this since the class and the name of your fields should be self explanatory, but there are times when real comments come in very handy.  Compare:

> List<Account> m_accounts;

with

> Map<String, List<Method>> m_groups;

Again, this example is a bit borderline.  When your types become a bit contrived such as the one shown above, you should probably consider creating a class to hold them:

> public class GroupMap extends Map<String, List<Method>> {

or even better, use composition instead of inheritance to make sure you only expose in your API what you really need.  Still, this practice is sometimes overkill, especially when this private field will only be used in one class.

Exposing privates is something that is very Java-y.  I remember being quite surprised the first times I read Java code.  Not only were implementations and interfaces mixed up in one class, the private fields were shown at the top of the class!  C++ programmers usually put the private parts of their classes at the very bottom of their code in order to focus on the important (public) part of their class, and you tend to browse header files more than the real implementation when you are trying to find out how to use an API.

It took me a while but I finally got used to it.  I still think there are pros and cons to this practice, though:

**+** When you read a class, seeing the private fields first might give you a better sense of how the class works.

**-** Very often, the first thing I'm interested in when I read the code of a class is its constructors, and private fields get in the way of this information.

Still.  At the end of the day, if you see some Java code that is not immediately obvious to you, the simple fact that you're wondering whether you should add a comment or not means you probably should.

How about you, do you document private methods and fields?
