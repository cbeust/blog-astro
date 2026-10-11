---
title: The future of source files
date: '2005-11-10T11:03:43'
slug: the-future-of-source-files
categories:
- Java
comments:
- id: 4381
  author: Brian
  date: '2005-11-09T14:44:11'
  content: 'I like this idea, because it gives me a shortcut for Java like I have in Ruby:

    class Person

    attr_accessor :name, :age, :ssn

    ...etc.

    Think about how much easier the average JavaBean would be. It seems like Java just hasn''t caught up here, to similar constructs in Ruby, or even Python''s property syntax, or property syntax in C#.

    What worries me though, is that you are solving this issue in a tool, where I feel its really a language issue.

    I guess I feel like tools should make the language easier to *present*, as opposed to covering up a deficiency in the syntax, which is what I see something like this doing. Isn''t this just advanced folding, which hides the underlying issue that the syntax is too verbose?'
  replies: []
- id: 4382
  author: Raman Raja
  date: '2005-11-09T15:37:22'
  content: Your plugin is basically a GreaseMonkey for Eclipse
  replies: []
- id: 4383
  author: Dan
  date: '2005-11-09T16:32:49'
  content: '"in the future, languages will be stored internally in a neutral format and be shown to developers using their own preferences" - and also in the future we will be driving around in flying cars, on our homes on the moon!'
  replies: []
- id: 4384
  author: Mark
  date: '2005-11-09T19:08:06'
  content: 'At the very least, I would really, really love my source code to be presented in a more readable manner with the use of more sophisticated typographic techniques (different fonts for different structual parts of the code, better alignment, etc).

    Another step further is the alternate representation of code, e.g., a state-change diagram for GUI state changes, a truth table, or perhaps a more readable view of java annotations.

    Another would be the ability to annotate code in a less intrusive way, add diagrams, some way to mark particular concerns (e.g., logging or transactional code).

    And even further, perhaps the code could be presented as a bit of visual narrative.  There''s no particular reason that objects/variables have to be represented as text only.  In particular, it would be interesting to see what could be gained by adding some type of visual moniker for objects of different classes.

    We should be able to come up with a way to make use of our visual perception abilities, to help with the much harder task of the pure abstract thought of coding.

    The sky''s the limit!  You have nothing to lose but your 80-column ASCII display!'
  replies: []
- id: 4385
  author: Brian Slesinsky
  date: '2005-11-09T20:16:38'
  content: 'Great idea!  Even better would be port over the "var" declaration for local variables from C# 3.0.  For example:

    var myArray = new String[] {"a","b","c"};'
  replies: []
- id: 4386
  author: James Strachan
  date: '2005-11-09T20:37:42'
  content: 'BTW I like the sound of your eclipse plugin - when can I try it? :)

    Java''s not gonna go away any time soon so being able to render code in whatever visual representation you wish would rock.

    e.g. I''d love to see the property notation you use, then public methods, then protected, then private - irrespective of how the code was layed out. I also am a big fan of getting rid of pointless semicolons (its funny how a really small visual change can make things look so much cleaner).

    Reminds me a little of mylar which is cool...

    http://eclipse.org/mylar/

    Though echoing Brian''s point; this is no substitute for language innovation; Java really needs closures/delegates. Some better property / bean / list / map syntax would be good too.'
  replies: []
- id: 4387
  author: Zsolt
  date: '2005-11-09T22:32:10'
  content: 'Check out the Java Syntactic Extender.

    http://people.csail.mit.edu/jrb/jse/index.htm'
  replies: []
- id: 4388
  author: Sam Newman
  date: '2005-11-10T01:04:37'
  content: 'It''s interesting that no-one has brought up a more interesting subject here - do you really define get/set pairs so often that you need a plugin to manage it?

    A private instance variable with a get/set pair is an example of broken encapsulation (you are hiding the underlying implementation, but still completely exposing the internal state of the object). That''s completely OK if you know that is what you want, but frequently it isn''t. Lots of get/set pairs lead to lots of ask-rather-than-tell code, which is a bit of a smell - it''s often a sign of not very OO code.

    This is quite apart from the fact that adding a setter effectively introduces your objects to potential unknown states after construction - immutable good citizens are much easier to work with, and tend to lead much less to NPEs and the like.

    Virtually all the IDE''s I''ve using since Java 1.1 came out had the ability to generate get/set pairs, and this in turn has led to me seeing an awful lot of code with them in. I wrote a fair bit of it myself. I actually found my code started to work better when I stopped and thought about each and every get and/or set I added.

    See also Encapsulation is not Information Hiding: http://nat.truemesh.com/archives/000498.html

    ask-don''t-tell code also leads to much more state based testing, rather than interaction based testing: http://nat.truemesh.com/archives/000342.html'
  replies: []
- id: 4389
  author: Erlend Boe
  date: '2005-11-10T03:33:14'
  content: 'I used to think that it was really irritating that Java doesn''t have a more "natural" syntax for getters and setters, even after reading articles like "Why getter and setter methods are evil" (http://www.javaworld.com/javaworld/jw-09-2003/jw-0905-toolbox.html).

    I think that automated tools or improved syntax can make us do the wrong thing without even thinking about it.

    I know thats what I have done in the past...

    .. having said all that, I''m still looking forward to installing the plugin, so that all that existing code will be easier to read :-)'
  replies: []
- id: 4390
  author: Patrick Calahan
  date: '2005-11-10T09:17:03'
  content: 'Mmmm, so after we convert our source to XML, is he going to do all of my cross-branch integs for me?  I''m sure as heck not going to. :)

    Seriously though - while that article has some interesting ideas, the proposal completely ignores the realities of distributed and large-scale software development.  Software development is as much social and political as it is technical - for better or worse, that''s why lowest common denominator approaches win.'
  replies: []
- id: 4391
  author: James Stauffer
  date: '2005-11-10T10:15:23'
  content: I would like a source file where I can switch between languages at will.  i.e. One section written in perl, another in Ruby, and the rest in Java.  Then I can always use the best language for the specific problem that I am tackeling.
  replies: []
- id: 4392
  author: Steve
  date: '2005-11-11T02:42:43'
  content: 'Couldn''t something like this be used to simulate closures?

    (Apologies for the poor formating of the code; I couldn''t figure out how to post it right)

    void someMethod(){

    ...

    Closure c = {

    String var1, String var2 |

    System.out.println("Hello"+var1 +var2);

    };

    ...

    c.doIt(" ","World!");

    ...

    }

    Generates to...

    void someMethod(){

    ...

    Closure c = new Closure ({

    public void doIt(Obj arg, Obj arg2){

    myClosure(arg,arg2);

    }

    });

    ...

    c.doIt(" ","World!");

    }

    /*GENERATED METHOD*/

    private void myclosure1(Object var1, Object var2{

    System.out.println("Hello"+var1 +var2);

    }

    Please note I haven''t tried this code. I don''t know much about how to parse the code so I''m not sure about whether "{".."}"  is a good choice for the closure construct.

    I haven''t thought about what to do if you mention method local variables in side a this "closure".

    The other more tricky part of the problem, is how to maintain the "source code" representation so that your IDE still displays the original code:

    Closure c = {

    String var1, String var2 |

    System.out.println("Hello"+var1 +var2);

    };

    Probably the simplest solution is to keep a C-style comment in the "true source". This would maybe represent an intermediate format, but without writing the code for the first part I wouldn''t want to guess too much.'
  replies: []
- id: 4393
  author: Bruno Patini Furtado
  date: '2005-11-11T05:32:19'
  content: I
  replies: []
- id: 4394
  author: Guillaume Laforge
  date: '2005-11-11T13:51:37'
  content: 'Your ideas for this plugin reminds me what Alain Ravet did for IntelliJ IDEA through his "Camouflage" plugin which offers some visual cues, clever folding and transformations to render your code easier to read or understand:

    http://www.intellij.org/twiki/bin/view/Main/CamouflagePlugin'
  replies: []
- id: 4395
  author: Guillaume Laforge
  date: '2005-11-11T13:52:02'
  content: 'Your ideas for this plugin reminds me what Alain Ravet did for IntelliJ IDEA through his "Camouflage" plugin which offers some visual cues, clever folding and transformations to render your code easier to read or understand:

    http://www.intellij.org/twiki/bin/view/Main/CamouflagePlugin'
  replies: []
- id: 4396
  author: Frank Bolander
  date: '2005-11-12T14:33:27'
  content: 'I like the idea of your plugin from a personal perspective since it''s pretty clean, but I''m not sure that it''s a good thing from a development pool/project perspective.

    For one, everyone would have to accept and interpret your "view" of the underlying code(I know you said in your post that this should be orthogonal from a compiler perspective but I''m not sure how it can be). Yours is a simple case, but I could see this type of thing getting out of control for more complex cases. Other developers would have to accept your view and program accordingly. In other words, extending any language via macros or macro-like constructs is a catch 22 situation.

    Brings me back to the days using assembler and people having their own toolkits of macros. They were usefull and all but they almost always degenerated into their own minilanguages and impacted development and maintenance.

    It seems that the purpose of any source language(with all it''s shortcomings) is to provide a baseline grammar and syntax to allow everyone to communicate with. If you go down the path of "You say POTAYTO, I say POTAHTO" with source view representations, it''s only going to cause confusion in the long run.

    Anyway, I''ll still use your plugin if you post it :)'
  replies: []
- id: 4397
  author: Erik
  date: '2005-11-13T08:01:31'
  content: 'This "simplification" seems interesting but it''s just to create another syntax for the same language ?!

    The problem in the software industry is not really the syntax of a language but its abstraction level. Simplifying a syntax is just a funny stuff be it does not solve anything'
  replies: []
- id: 4398
  author: mP
  date: '2005-11-13T16:28:41'
  content: 'Why is it that people are always complaining about setters/getters. They seem to not understand why they should be used rather than directly accessing the field itself.

    Cedric: why are half your recommendations all about less typing rather than increasing type safety or features ? The implicit typed local variables again isnt really necessary it only adds confusion. Most people are fast typists and im sure typing the type doesnt take half the day and reduce productivity.'
  replies: []
- id: 4399
  author: Cedric
  date: '2005-11-13T17:31:10'
  content: 'MP:

    Type inference doesn''t weaken typing.  I like my strong typing and I want the best of both worlds.  That''s one advantage that Groovy has over Python and Ruby:  you can specify types if you want to (and most of the time, you do), but after that, you can rely on type inference to avoid repetition.

    I explained this in more depth on the podcast I gave recently:  http://javaposse.com/index.php?post_id=32346

    --

    Cedric'
  replies: []
- id: 4400
  author: Sam Newman
  date: '2005-11-14T06:19:57'
  content: 'mp: Err, I never claimed you should use getters/setters rather than accessing the field itself - you obviously didn''t read my comment, nor any of the things I linked to. What I said is that by providing getters/setters you are breaking encapsulation. If that is what you want, then fine - just be aware that it can make for very state-based (non-OO) code. With a get/set pair all you have done is hide the underlying implementation of an object''s state (information hiding) - you haven''t restricted access to it.'
  replies: []
- id: 4401
  author: Cedric
  date: '2005-11-14T06:26:09'
  content: 'Sam,

    If you are referring to the "getters and setters are evil" idea, please take a look here:

    http://www.beust.com/weblog/weblog/archives/000022.html'
  replies: []
- id: 4402
  author: murphee
  date: '2005-11-15T15:52:45'
  content: 'The same (or slightly modified) article you link also appeared in ACM Queue. My arguments against the text''s ideas are in this blog entry:

    http://www.jroller.com/page/murphee?entry=xml_future_of_source_files'
  replies: []
- id: 4403
  author: DAR
  date: '2005-11-18T12:50:10'
  content: 'This is an old concept - even in the context of Java.  Take a look at this page:

    http://mindprod.com/projects/scid.html

    It describes an editor that handles in the fashion you''re describing.'
  replies: []
---

I just finished reading a [very interesting article](http://www.third-bit.com/~gvwilson/xmlprog.html) by Gregory Wilson that covers many issues that I feel strongly about.  In a nutshell:

  * UNIX shells are a wonderful, albeit aging, invention.
  * COM is a very powerful framework that has enabled a formidable ecosystem of innovative technologies on the Windows platform.
  * No matter how hard we try, we don't seem to be able to solve problems in only one language.
  * Even worse, we are increasingly mixing different languages in one source file.



My first observation is that this article fails to mention [MSH](http://en.wikipedia.org/wiki/MSH_\(shell\)), Microsoft's next generation shell, which expands on the first two points by providing a type-safe shell that formalizes the data that is exchanged through connecting processes.  No more arcane and non-standard command-line switches, or hacks using regular expressions to parse the output of all these tools.  MSH is a fascinating tool and I'll save its description to a future entry.

Gregory Wilson also makes the point that in the future, languages will be stored internally in a neutral format and be shown to developers using their own preferences.

A few weeks ago, I started working on an Eclipse plug-in that would allow me to have properties in my Java files.  The following code:

> private String m_name;
> 
> public String getName() {  
>    return m_name;  
>  }  
>    
>  public void setName(String name) {  
>    m_name = name;  
>  }

would appear in my editor as:

> \+ property String Name; ...

This line would be folded by default and would be replaced with the full declaration above if expanded.

How does this relate to the article above?  Quite directly:  with this plug-in, I am transforming the Java syntax into my own.  I am using the Java source as an internal format and using an IDE to present it to me in a form that I find easier to read.

It doesn't have to stop there.  Maybe you don't like Java's semi-colons and braces and you prefer Pythons' significant spaces instead:

> if (m_suiteConfigurationFailed)  
>    result = false  
>  else  
>     for(Object targetInstance : instances)  
>       m_method = new InvokedMethod(targetInstance  
>     result = true

As for Wilson's basic point and the idea that all the programs in the world can be expressed in XML and shown in a user-defined way, I am still very skeptical.  It's not so much about the read-only view but more about the way people write programs.  New languages keep being created on a weekly basis, and some of them bring new concepts with them, which won't be adequately captured by this universal XML format without modifying its semantic, which brings us back to square one:  representations that are incompatible with each other and programs that can only be read or saved with a specific version of the representational language.

Another problem with Wilson's approach is that developers spend a lot of time reading other people's code, which mandates the existence of a language that everybody understands.  The tricks described above do not alter the Java source, and the physical file can not only still be parsed and compiled by ` javac`, it can also be understood by any Java developer.

But I believe there is some hope and some promise, and in the meantime, nothing stops us from taking baby steps toward this destination, such as the Property plug-in I described above.

How about you:  how would you like to see your Java programs represented?
