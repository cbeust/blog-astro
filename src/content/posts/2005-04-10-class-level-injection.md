---
title: Class-level injection
date: '2005-04-10T11:08:38'
slug: class-level-injection
categories:
- Java
comments:
- id: 3372
  author: Tiago Silveira
  date: '2005-04-12T05:36:49'
  content: 'I like the first construct better. Not only are parameters easier to identify when they''re together, it uses less keystrokes. I''m deeply worried about keystrokes. :-)

    That''s also why I see an immense redundancy and verbosity in this code:

    public Test1(@Dependency("xml-file") String xmlFile) {

    // ...

    }

    Of course a parameter in the constructor is a dependency! What else could it possibly be?

    Cheer''s for the nice feature, though!!'
  replies: []
---

My post on dependency injection in tests has generated a lot of very interesting comments and email.

Eugene noted that:

> However the huge disadvantage of such approach is that you have to repeat these declarations for each and every test method. From this point it is better to have dependencies as fields, because you declare them only once (less coding and easier to change/refactor). 

Very true.  Obviously, both method parameters and fields serve a purpose, but it occurred to me that TestNG didn't really help you with fields.  Since I still have some reluctance to the idea of a container altering my private fields, I tried hard to come up with a solution that would solve both problems, and it occurred to me that a natural extension to TestNG would be to allow parameters at the class level.  These parameters would then be passed in the constructor when TestNG is creating an instance of your test class:

> @Test(parameters = { "xml-file" })  
>    public class Test1 {  
>     
>      public Test1(String xmlFile) {  
>        // ...  
>      }  
>  }

This mechanism is already in place for test methods, so TestNG users are already familiar with it.  With this construct, the developer is then free to do whatever they want with the parameters passed in the constructor, the most likely approach being to store it in a field for later use in your test methods.

This approach addresses Eugene's remark by enabling both "class-level injection" and "test method parameter injection", but a few hours later, Eugene offered further refinement on the mailing-list:

> Better approach will be to have these "parameters" (actually dependencies) declared in the constructor. Something like:
>
>> @Test  
>  public class Test1 {  
>    
>    public Test1( @Dependency( "xml-file") String xmlFile) {  
>      // ...  
>    }  
>  }

Indeed, this is even better, but the problem here is that I want to keep supporting JDK 1.4 for a little while and QDox doesn't support parameter annotations.  But at some point in the future, this is most likely how this feature will be implemented.
