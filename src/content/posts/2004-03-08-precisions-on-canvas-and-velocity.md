---
title: Precisions on Canvas and Velocity
date: '2004-03-08T10:37:29'
slug: precisions-on-canvas-and-velocity
categories:
- Java
comments:
- id: 1294
  author: Erik Hatcher
  date: '2004-03-08T11:09:59'
  content: 'So nice to have java.net trackbacks!

    I''m not going to defend Velocity versus Canvas, even as the author of the article you refer to.  Yes, it is somewhat unfortunate that Velocity has access to the underlying objects, but certainly this can be dealt with by only placing dumb objects into the context.

    We use Velocity as a simple way to allow clients to customize e-mail templates and snippets which get injected into the presentation (legalese, instructions, and such).  Velocity syntax is much friendlier to non-technical users than JSP-like syntax such as Canvas, IMHO.

    That being said - Canvas is quite cool, as is Groovy.  I certainly will consider integrating them into my applications in the future.  Canvas would make a very nice substitute for our Ruby code generation using ERB.

    Another project to compare to, on the extreme end of MVC templating engines is Parr''s StringTemplate engine.'
  replies: []
- id: 1295
  author: Bob Lee
  date: '2004-03-08T11:31:02'
  content: 'You should add BeanShell support as well. The reason I prefer it sometimes is not so much for my sake, but for other developers''. Anything you can do in Java will work in BeanShell. Plus, it has some nice syntactic sugar of its own. The last example from the Canvas home page in bsh:

    Workplaces are'
  replies: []
- id: 1296
  author: Bob Lee
  date: '2004-03-08T11:32:14'
  content: 'Ugh...

    Workplaces are &lt;%

    workplaces["Cedric"] + " " + workplaces["Alois"]

    %&gt;'
  replies: []
- id: 1297
  author: Sam Pullara
  date: '2004-03-08T14:40:18'
  content: Cedric's so smart and had such a good idea that I checked in Template/TemplateEngine interfaces into the groovy.text package along with a SimpleTemplateEngine that uses JSP scriptlet and EL syntax.  Some trivial examples are in the TemplateTest unit test. You can get these features if you build from CVS.  Using these interfaces you can build other template engines that do their transformations however you like without changing the basic way you access them.
  replies: []
- id: 1298
  author: Stephan Schmidt
  date: '2004-03-09T04:37:02'
  content: 'Thanks for Canvas. Any ideas how to use this with WebWork2?

    Canvas would be nice in SnipSnap, the templates stored in snips.'
  replies: []
- id: 1302
  author: maps and legends - craig pfeifer
  date: '2004-03-14T11:38:42'
  content: '<strong>Velocity Abandoned?</strong>

    According to TSS, the Velocity project has been abandoned? After the tongue lashing I received from Jon Scott Stevens in response to my book review I can''t say I''ll miss it terribly. Cedric thinks Velocity has certain problems as well....'
  replies: []
- id: 1299
  author: Christian Stein
  date: '2004-03-31T22:44:37'
  content: 'The Canvas story continues...

    http://wiki.codehaus.org/groovy/TemplateServlet

    :)'
  replies: []
- id: 1300
  author: ''
  date: '2004-06-01T11:53:17'
  content: L
  replies: []
- id: 1301
  author: ''
  date: '2004-06-01T11:54:01'
  content: C
  replies: []
---

I have to say I am surprised by some of the comments I have received about [Canvas](http://beust.com/weblog/weblog/archives/000093.html), and in particular from people who say that the Velocity Template Language (VTL) is a better choice than Groovy because it's not a "real" language, so you are not tempted to mix presentation and business logic.

First of all, the assumption that the generated template is for "presentation" (probably meaning:  a Web page) is a generalization.  Velocity is used for much more than just generating Web pages, so this argument is weak in my opinion.

But if you think the VTL is just a declarative language, you are fooling yourself.  VTL has

  * Control structures (if, while, etc...).
  * Variables.
  * Macros.
  * And worst (or best) of all, it has access to the underlying Java objects.



In other words, I am pretty sure that you can use VTL to write arbitrarily complex pieces of code inside your template, and [Sam](http://www.sampullara.com/) was quick to point out a [ perfect example of that](http://today.java.net/pub/a/today/2003/12/16/velocity.html?page=2).

With that in mind, if we are going to have to deal with a language inside the template, I would rather use one that I like, is powerful and ideally, close to the Java syntax.

There is also another reason why VTL is less than optimal for this, and it has to do with the philosophy behind Velocity templates.

Velocity templates make no distinction between "verbatim text" and VTL.  The only way to identify the pieces of VTL code in your template is by spotting the various syntactic annotations (#, $, etc...).  The problem with this approach is that it makes it pretty much impossible to guarantee the indentation of the generated files, since you can never tell when a space is significant (part or your "verbatim text") or should be ignored (used to indent a VTL expression).

The JSP syntax (or any delimiter-based syntax) makes it obvious what spaces should be preserved and which ones can be ignored for the generation of the final file:

> // Canvas template  
>  public class GeneratedClass {  
>    <%  
>      for (i in methods) { i.generate() }  
>    %>  
>  } 

From my experience, it is absolutely impossible to get a decent indentation for this very simple example with Velocity...
