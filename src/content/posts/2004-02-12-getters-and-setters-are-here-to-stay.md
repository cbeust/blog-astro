---
title: Getters and setters are here to stay
date: '2004-02-12T17:45:51'
slug: getters-and-setters-are-here-to-stay
categories:
- Java
comments:
- id: 1166
  author: All Things
  date: '2004-02-12T10:01:02'
  content: '<strong>Re: Getters and setters are here to stay</strong>

    Cedric wrote up a good entry on getters and setters, the fact they are here to stay (at least in OO programming) and that the syntax of Java leaves a bit to be desired when it comes to implementing them....'
  replies: []
- id: 1149
  author: No one
  date: '2004-02-12T11:35:35'
  content: 'Big deal...  Adding property keywords is not a big deal.  Any decent ide will automatically generate default getters and setters.  Also, those keywords won''t help at all when you need to do something more than just retrieve or set the value of something.

    I think it''s much more readable to have all the local variables at the top of the class.  To each his/her own though...'
  replies: []
- id: 1150
  author: Lasse
  date: '2004-02-12T11:40:38'
  content: I guess there's two ways of looking at the top/bottom variable placement. If you go in to figure out the implementation, it's easier if the instance variables are right there on the top. Then again, if the intent is to see what the class can do for you, the instance variables are simply clutter to scroll past. And then there's all those static variables...
  replies: []
- id: 1151
  author: No one
  date: '2004-02-12T11:48:50'
  content: 'All what static variables?

    All I do is type objectname. and I get a drop down list of all the methods.  Pretty simple.

    I guess I over estimate the number of people that use a decent IDE.  Those that don''t want to add all kinds of typing shortcuts.'
  replies: []
- id: 1152
  author: inignot
  date: '2004-02-12T12:02:48'
  content: '"the instance variables are simply clutter to scroll past"

    Even so, I''d rather have my clutter all in one place than scattered around in my code.

    I think there is precedent for keeping them all in one place.  Look a little bit higher...you know...all those lines that start with "import".  You can''t think that the code would look better if those were scattered all about, too...'
  replies: []
- id: 1153
  author: kdonald
  date: '2004-02-12T13:45:16'
  content: I don't have any issues with properties, but I do have issues with code that simply takes all the data out of one class and does something with it in another--when quite often that logic makes more sense to be encapsulated within the class itself.
  replies: []
- id: 1167
  author: Abstraction
  date: '2004-02-12T14:17:08'
  content: <strong>Java Getter/Setter Code Style Suggestion</strong>
  replies: []
- id: 1154
  author: Mats Henricson
  date: '2004-02-13T02:23:14'
  content: We don't need them! Sure, in some cases we would get a bit terser and simpler syntax, even though the C# syntax is just awful, IMNSHO. The biggest problem is that it introduces yet another way of doing things, which we don't need. One more thing to learn, and god knows there's enough of them. The beauty with Java is that it is such a simple language, but with just about all orthogonal features to allow us to span just about any coding universe.
  replies: []
- id: 1155
  author: Tom Hawtin
  date: '2004-02-13T12:08:04'
  content: 'I think it''s important to distinguish between the syntax for accessing properties and the syntax for defining them.

    For accessing properties is person.firstName("Fred"); so much different from person.firstName = "Fred";. Not much in it as far as I am concerned, although the first looks like any other method call.

    For defining implementation, I don''t see there''s any real problem as things stand. Perhaps it''d be nice to sort remove duplication in the JavaDocs. I don''t think non-encapsulation should be encouraged. A public variable is still a public variable even if you call it a property.'
  replies: []
- id: 1156
  author: James Strachan
  date: '2004-02-16T00:45:47'
  content: 'FWIW in Groovy we went with the convention that you shouldn''t use public/protected fields and should use properties instead.

    So by default declaring what looks like a public field will create getters/setters - unless you declare an explicit getter/setter method (to change visibility or add a custom implementation etc)

    e.g.

    class SomeBean {

    String name

    Integer id

    // make setter read only

    private void setId(Integer value) {...}

    }

    So far it seems a reasonable compromise in that common beans are quick and easy to write and there''s no wierd new syntax for properties'
  replies: []
- id: 1157
  author: Sven Kuenzler
  date: '2004-02-16T02:33:33'
  content: FWIW, C# like Java does not have a concise notation for attributes. The example syntax in the table can be used only to impose accessibility constraints on abstract or interface properties.
  replies: []
- id: 1158
  author: George Coller
  date: '2004-02-17T16:03:05'
  content: 'I think you missed the point of the "wannabe pundit''s" article.  Basically, the author was saying to limit providing accessors as much as possible to improve encapsulation.

    Nowhere in the article does the author suggest getting rid of getters and setters from the Java language, in fact he admits that there are times they are unavoidable.'
  replies: []
- id: 1159
  author: Dan Weinreb
  date: '2004-02-18T23:39:19'
  content: 'There will always be those cases where you do want getters and setters.  Having a more concise notation  to generate them is just fine as long as the concise notation is explicitly defined to be syntactic sugar that means "define this method and that method", so that you don''t have to introduce a whole new concept into your language called "properties" and have to hair up your language spec to explain how "properties" interact with everything else, and hair up your meta-object-protocol/reflection-facility to add a whole new thing called "properties" etc.

    And if you will pardon my going into old-fogie mode: we did this all properly in Flavors in 1979,

    and later in CLOS (Common Lisp Object System).'
  replies: []
- id: 1168
  author: Otaku, Cedric's weblog
  date: '2004-03-02T06:16:53'
  content: '<strong>POGO''s</strong>

    As I confessed earlier, I am a big fan of properties, whether they are implemented in C# or Ruby.&nbsp; Not a day goes by without me missing them thoroughly in Java land, as I tirelessly write an endless stream...'
  replies: []
- id: 1160
  author: Stephen Hosking
  date: '2006-04-11T17:21:51'
  content: 'Having done few months of C# programming in Visual Studio I''ve found that, whatever the theory, properties are very helpful practically. Whenever I have to add a property to a class, I wince at the trouble (always feeling tempted to just declare the attribute public) but I wince less at the bother that comes with the C# syntax than Java. I agree with Anders Hejlsbergs argument that the language should support the things we do most frequently.

    When I am browsing code with intellisense, I find the visual distinction made between properties and attributes is most helpful.'
  replies: []
- id: 1161
  author: foo
  date: '2006-04-21T13:08:50'
  content: I couldn't help but notice that the SSN getter returns the first name.
  replies: []
- id: 1162
  author: lhbyqsph
  date: '2007-07-02T23:17:47'
  content: effozhxc http://bhkhsmkg.com otjopvnz qzibbirc  [URL=http://tbthkmyp.com]akhaixfo[/URL]  aggvhmdv
  replies: []
- id: 1163
  author: dkpxybeh
  date: '2007-07-02T23:19:09'
  content: mffoqndl  [URL=http://qjqthogz.com]algiqsna[/URL]  gdgpllaj http://wyfjgovr.com slojjmlp hjahsyju
  replies: []
- id: 1164
  author: kzmjwmpn
  date: '2007-07-02T23:20:48'
  content: wukslsfa  [URL=http://lbzgkrfu.com]ukcuxerk[/URL]  tmxvmjdy http://xfkmatif.com frceixbs npyulpms
  replies: []
- id: 1165
  author: SAYAN BHATTACHARYA
  date: '2009-01-22T01:25:14'
  content: IT WOULD HAVE BEEN MORE HELPFUL TO DISPLAY A FULL SAMPLE CODE ALONG WITH THE MAIN FUNCTION.IT WILL HELP THE BEGINNERS.
  replies: []
---

Getters and setters are [not going away](http://www.beust.com/weblog/weblog/archives/000022.html). Deal with it. 

Don't believe what [wannabe pundits](http://www.javaworld.com/javaworld/jw-09-2003/jw-0905-toolbox.html) and OO purists tell you. At the end of the day, every object becomes a primitive type. 

Unfortunately, Java doesn't have the prettiest way to handle getters and setters, which leads up to a lot of code obfuscation. Granted, we are now very much used to visually identify the pattern: 

>   private String m_firstName;  
>    public String getFirstName() {  
>      return m_firstName;  
>    }  
>    public void setFirstName(String fn) {  
>      m_firstName = fn;  
>    }  
>    
>    private Integer m_socialSecurityNumber;  
>    public Integer getFirstName() {  
>      return m_socialSecurityNumber;  
>    }  
> 

Note that in the above example, I declared the field right next to its getters and setters, which improves readability and locality, in my opinion, but it's a technique that is pretty much never used, making it even harder to find which fields are exposed with getters and setters and which ones are stricly part of the private implementation of the class. 

Compare this to the terse but to-the-point pseudo-code: 

>   property String name;  
>    property readonly Integer socialSecurityNumber;

In order to support the most flexibility for attributes, a language needs to offer the three functionalities. Here is how Ruby, C# and Java address these three problems: 

|  Java  |  Ruby  |  C#   
---|---|---|---  
Concise notation for read-write attributes  |  N/A  |  attr_accessor :first_name  |  public string FirstName {  
  get; set;  
}   
Concise notation for read-only attributes  |  N/A  |  attr_reader :first_name  |  public string FirstName { get; }   
Full definition of accessors for additional logic  |  public String getFirstName() {  
  /* code */  
}  
public void setFirstName(String s ) {  
  /* code */  
}  
|  def first_name  
  /* code */  
end  
def first_name=  
 /* code */  
end  
|  public string FirstName {  
  get {/* code */}  
  set { /* code */}  
}  Note that another important feature supported by both Ruby and C# -- but unfortunately not Java -- is that of "Universal Access". Regardless of how you choose to define your properties, they all end up going through the same code line when executed. In other words, you can start by define "attr_accessor first_name" and then later use more complex logic by defining "def first_name=". In either cases, assigning this attribute will always end up calling the assignment method. It's too bad that properties didn't make it in Tiger.
