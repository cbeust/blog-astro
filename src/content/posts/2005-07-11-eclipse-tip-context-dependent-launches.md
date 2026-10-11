---
title: 'Eclipse tip:  context-dependent launches'
date: '2005-07-11T16:12:03'
slug: eclipse-tip-context-dependent-launches
categories:
- Java
comments:
- id: 3835
  author: Anjan Bacchu
  date: '2005-07-11T18:59:50'
  content: 'Hi Cedric,

    Earlier today, "discovered" that my code templates include the enclosing_method variable. We''re adding logging to our code and having a template that can use variables is cool.

    But I wish that Eclipse has the macro capability of Visual Studio/Emacs that would make life more easier.

    BR,

    ~A'
  replies: []
- id: 3836
  author: eu
  date: '2005-07-11T19:15:20'
  content: 'At some point I''ve used "current project location" variable to share external tools config for Ant xdoclet target between several projects.

    Anjan, it is not quite macros, but also could be quite powerful. http://eclipseexeditor.sourceforge.net/

    Hey, Cedric, do you fancy to add support of the groovy/baeanshell/javascript into this plugin? :-)'
  replies: []
- id: 3837
  author: Juze
  date: '2005-07-12T21:00:38'
  content: 'It would make you happy: It would make you happy: http://www.eclipse-plugins.info/eclipse/plugin_details.jsp?id=1069'
  replies: []
- id: 3838
  author: Bradley Ward
  date: '2005-07-14T11:55:10'
  content: 'Cedric, I took your challenge and played around with some of the other variables. Here are some I really liked...

    The ${file_prompt} variable is really neat, because you can then write a simple command line program that expects a fully qualified filename of some input file to process as the first argument. Use ${file_prompt} when you run it, and bingo, up pops a nice GUI dialog to let you select the file. When you click OK on the dialog, off your program goes with the fully qualified filename as args[0].

    The ${folder_prompt} variable works the same way, but brings up a folder selection dialog.

    ${string_prompt} is even more generic, in that it brings up a plain vanilla dialog and lets you enter any text you want into it. If you enter "a b c" into the dialog then hit the OK, you will get args[0]=a, args[1]=b, etc. If you want args[0] to return the entire string, just enclose ${string_prompt} in quotes.'
  replies: []
- id: 3839
  author: Paul Brickell
  date: '2009-12-15T06:20:50'
  content: '%{folder_prompt} and ${file_prompt} are great. If only I could select multiple values to grab a subset of files, for example.'
  replies: []
---

This feature has probably been in Eclipse for a while but I only recently discovered it, and I've found it quite useful already:  Eclipse lets you define launch configurations that depend on the current selection.

Consider the simple following program that prints out the parameter passed on the command line:

> public class Echo {  
>    public static void main(String[] args) {  
>      System.out.println(args[0]);  
>    }  
>  }

Then create a launch configuration and press the Variables button:

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/variables.png)

Choose the variable "selected-text":

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/selected-text.png)

And close the launch dialog.  Next select some text in a buffer, say the first line of the class:

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/public-class.png)

Launch, and you get:

> public class Echo { 

I have used this feature quite a few times already to launch groups of tests with TestNG by simply selecting them from my Java source or the XML file, but I'm sure there are many other uses.

There are plenty of other interesting variables to choose from, by the way, try them out and report here!
