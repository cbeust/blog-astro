---
title: Dynamic and static languages are fighting again
date: '2007-07-10T08:44:50'
slug: dynamic-and-static-languages-are-fighting-again
categories:
- Java
comments:
- id: 6808
  author: Todd Huss
  date: '2007-07-10T09:00:04'
  content: I work in both platforms with some regularity and I love developing greenfield projects in Rails so much more than I do in Java, but when it comes to refactoring (arguably the most important part of good maintainability) I much prefer Java.
  replies: []
- id: 6809
  author: Muthu Ramadoss
  date: '2007-07-10T09:42:33'
  content: 'I am wondering..

    Why then the newer web2.0 sites like Youtube, Facebook, Pownce etc., are using dynamic languages like PHP, ROR, Python and not Java.

    http://groups.google.com/group/etoe'
  replies: []
- id: 6810
  author: andrew binstock
  date: '2007-07-10T10:57:23'
  content: 'There is always Groovy as a solution; it swings both ways: you can use static or dynamic typing, as you prefer.'
  replies: []
- id: 6811
  author: Jason Carreira
  date: '2007-07-10T11:01:05'
  content: '@Muthu I guess we''ll find out how that works when they get a little older and they have more code to maintain. I think eBay was originally built on Perl, but they re-built it on Java...'
  replies: []
- id: 6812
  author: yozzeff
  date: '2007-07-10T12:20:59'
  content: this fight will go on as long as both camps don't understand that you simply need both. types and no types within your project.
  replies: []
- id: 6813
  author: Aristotle Pagaltzis
  date: '2007-07-10T12:27:58'
  content: 'Jason Carreira: and Steve Yegge wrote that seeing apples-to-apples comparison of Java and Perl turned him from a static typing believer to a dynamic typing proponent.

    Hmm.

    Btw, I haven'
  replies: []
- id: 6814
  author: toni
  date: '2007-07-10T13:46:27'
  content: 'I totally agree.

    I see Dynamic languages only good as "plugged" in for resolving particular small problems inside a system written in a static language.'
  replies: []
- id: 6815
  author: Antoine
  date: '2007-07-10T14:02:10'
  content: Thanks, this was interesting.
  replies: []
- id: 6816
  author: Michael
  date: '2007-07-10T16:47:37'
  content: '"if you are using a more expressive language, you don''t write shorter programs, you write programs with more functionalities in them"

    Is that really true? Programmers write code with some end-functionality in mind. If they accomplish that functionality in 100 lines of code instead of 150 lines of code, they don''t turn around and jam in however many features can be afforded by 50 more lines of code.

    I guess it might be true that this efficiency is incorporated in time estimates, thus the programmers agrees to fit in more features in the same amount of time. This assumes an unrealistic linear association between lines of code and time to develop.

    With that in mind, your post is a pure strawman.'
  replies: []
- id: 6817
  author: Deepak Shetty
  date: '2007-07-11T11:04:05'
  content: 'My experience says i refactor when

    a) The application/functionality can be easily tested(end to end , integration NOT unit)

    b) When the environment supports it . I tend to refactor a lot while working in eclipse but almost never when working in say BEA workshop 8.1 where there is 0 refactoring support

    and that language is seldom a factor except that possibly java is better at b. than the dynamic languages

    regards

    deepak'
  replies: []
- id: 6818
  author: Obie Fernandez
  date: '2007-07-12T06:13:32'
  content: 'You said: "I have found that big programs written in dynamic languages don''t age as well as those written in a statically typed language because developers are more afraid to refactor them."

    I''ve worked on quite a few large Rails codebases now, and there is never fear of refactoring, because there is always great test coverage. A good test suite is way better than a compiler.'
  replies: []
- id: 6819
  author: Stefan Arentz
  date: '2007-07-13T09:23:32'
  content: 'Muthu: Web 2.0 has NOTHING to do with dynamic languages on the server side. It is a huge misunderstanding that Web 2.0 is only ''possible'' with the Scripting Language du Jour.'
  replies: []
- id: 6820
  author: Cliff Meyers
  date: '2007-07-13T11:39:36'
  content: '"A good test suite is way better than a compiler."

    Of course it is but you have to invest time and money for a good test suite.  The compiler is already there and does some very good "sanity checking" on your code before it''s ever executed.'
  replies: []
- id: 6821
  author: Rob
  date: '2007-07-15T11:28:04'
  content: 'Great post. Doesn''t have to mention the fact that the duck typers are just the latest spawn in the VB tradition: crack smoking their way into a frenzy, never realizing that constantly rewriting things ultimately leads to the gray goo syndrome (witness, Microsoft''s last OS release was 5 years late and contained few new features)...'
  replies: []
- id: 6822
  author: Gabriel Handford
  date: '2007-07-15T15:18:02'
  content: 'The most intelligent post I''ve seen on this topic:

    "My RSS reader uncovered a thought provoking paper by Chris Smith entitled'
  replies: []
- id: 6823
  author: Sony Mathew
  date: '2007-07-16T12:53:57'
  content: 'Maybe the dynamic folks should start naming their methods with the interface name in it .. haha.

    e.g. myobj.Explodable_explode() ... so that refactorings just turn to search and replace..'
  replies: []
- id: 6824
  author: Roy
  date: '2007-07-16T14:58:46'
  content: Hi! Your web site is helpful. Many thanks. Best regards!
  replies: []
- id: 6825
  author: Rob
  date: '2007-07-16T17:17:44'
  content: 'Would you care to share with us exactly what "large"  systems (and in which dynamic languages) you have worked on and are basing your assumptions regarding them on? Otherwise, like most of your postings regarding dynamic languages, a lot of hot air. Otherwise, please see #2 in the comment by Gabriel above.'
  replies: []
- id: 6826
  author: Petrik de Heus
  date: '2007-07-17T14:29:27'
  content: 'Cedric in the Artima discussion: "Can you think of any features of certain dynamic languages that make them inherently more testable than, say, C++? (I can''t at the moment, but I''ll think about it some more)"

    Actually once you start writing real tests in Ruby you''ll start appreciating it''s power.

    Here are some examples:

    MOCKING

    Mocking in Ruby is a lot simpler compared to Java

    public void testAddAndChangeDocument() {

    mock = createMock(Collaborator.class);

    ClassUnderTest classUnderTest = new ClassUnderTest();

    classUnderTest.addListener(mock);

    mock.documentAdded("Document");

    replay(mock);

    classUnderTest.addDocument("Document", "Some text");

    verify(mock);

    }

    The same test in Ruby:

    def test_add_and_change_document

    Collaborator.any_instance.expects(:document_added).with("Document")

    class_under_test.add_document("Document", "Some text")

    end

    And if I put an object between class_under_test and collaborator the ruby test could stay the same while the Java code could get really ugly quickly (with another replay/verify..etc).

    Also note that dependency injection is no longer needed in the Ruby example.

    Another good one is mocking class/static methods.

    In Ruby with Mocha you can mock class methods, object methods and instance methods, for example:

    Collaborator.expects(:new).returns(SomeClass.new)

    CREATING OBJECTS

    The use of creating a subclass dynamically is very handy for testing an abstract class.

    For example a class called DynamicLanguage

    class DynamicLanguage

    def typing

    "Dynamic"

    end

    end

    Ruby = Class.new(DynamicLanguage)

    r = Ruby.new

    r.typing => "Dynamic"

    r2 = Ruby.new

    r.typing => "Dynamic"

    You can also use a Struct (sort of a Javabean that can be created dynamically with minimal syntax).

    person = Struct.new(:name))

    person.name = "Paul"

    Testing/calling private methods is a lot simpler in Ruby compared to Java (I use it all the time in Ruby and seldom in Java):

    Ruby.send(:secret)

    Then you have irb to quickly try something...and of course you have the use of blocks, instance_eval, define method, etc.. to remove lots of duplication in test and code.'
  replies: []
- id: 6827
  author: Stephan Schmidt
  date: '2007-09-13T23:04:41'
  content: 'Cedric, I have this feeling ever since I started Perl, Python and Ruby in the 90es. Im happily back to Java (and some parts Groovy).

    @Jon: I feel sad whenever I read something from you, because you''ve been a great loss to the Java community. As I''ve written somewhere (google it ;-) with runtime analysis (I guess ST refactoring tools do this), path simulation (as JTest or FindBugs does) types can be determined for some parts of the code. But I have the feeling (and search for numbers) that the level of security for Java and Ruby refactoring are different.

    @Petrik: I guess it was just a mistake to

    a.) use the most verbose Mock framework in Java (EasyMock I guess)

    b.) added the ClassUnderTest classUnderTest = new ClassUnderTest(); call to Java but forgot the classUnderTest creation for Ruby.

    Peace

    -stephan

    --

    Stephan Schmidt :: stephan@reposita.org

    Reposita Open Source - Monitor your software development

    http://www.reposita.org

    Blog at http://stephan.reposita.org - No signal. No noise.'
  replies: []
- id: 6828
  author: Stephan Schmidt
  date: '2007-09-13T23:06:49'
  content: '@Petrik: And when we''re at it, why not write your Java tests in Groovy?

    http://groovy.codehaus.org/Groovy+Mocks

    Peace

    -stephan'
  replies: []
- id: 6829
  author: Stephan Schmidt
  date: '2007-09-13T23:25:15'
  content: 'The general problem with dynamic typing beside refactoring is this: Documentation

    I''ve written about this several times, like here

    http://stephan.reposita.org/archives/2007/06/21/ruby-complexity-cannot-be-reduced/

    It''s easier to read Java code several months in the future than to read dynamic reference typed code.

    def person = Persons.getOldestPerson()

    after several months or years, it might not be the case that Persons returns a Person type object. It could return something else. When then working with the person object in the IDE, it''s not clear how to handle it, what to do with it.

    Person person = Persons.getOldestPerson()

    has a statically typed reference of type Person and this

    a.) documents the object

    b.) makes it easier in the code following this line

    But consider this:

    def getOldestPerson(date)

    What type is date? Several months in the future, or when I''m new to the code I need to decide what date is. Date type, Calendar type, long?

    (I could look into the tests, if there are some, but the test method usally will call getOldestPerson() with a concrete class, not an interface. Can I use the method with other classes? Or only the one from the test?)

    Person getOldestPerson(Date date) makes it much easier to understand.

    Funny thing is that some dynamic type users add this to their method definitions

    // {Date} date

    // return Person

    to make the type clear. How this is better, or shorter, or easier to understand than the type in the method declaration is beside me.

    The funniest thing was from Ola Bini though:

    http://ola-bini.b-l-o-gspot.com/2007/09/should-ruby-have-optional-typing-and.html

    He proposes this:

    def test_one(first, second, *rest)

    declare type: [Fixnum first, Enumerable second, Array rest]

    declare return: Fixnum

    to Ruby. How is this more readable than

    FixNum test_one(FixNum first, Enumerable second, Array rest)

    you can decide for yourself

    Peace

    -stephan'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/duel.jpg)

There is quite an [interesting discussion](http://www.artima.com/forums/flat.jsp?forum=106&thread=209353&msRange=15) going on at Artima about the age old subject of static and dynamic languages. I found the following quote particularly interesting: 

> Maybe we should look more closely at the kind of programs being written in Ruby and Python and Javascript, and the way good programmers use those languages, to understand if there are reasons that refactoring might seem less obviously helpful in those languages. 

I've read and written a lot of reasonably long (> 10,000 lines of code) programs in various dynamic languages (Python, Ruby, PHP and more obscure ones as well) and I haven't seen any evidence that refactoring is less needed in these languages. 

Granted, these listings sometimes have constructs that would take more code to write in Java, but here is the catch: **if you are using a more expressive language, you don't write shorter programs, you write programs with more functionalities in them**. And at the end of the day, you face the exact same problem that Java and other statically typed languages face: you need to refactor if you want your code to evolve. 

I feel much more comfortable refactoring Java code than I do Ruby or Python. It doesn't even matter whether I authored that code and how confident I am about the test coverage. I just know that I can't rely on the compiler and the type system to catch my mistakes, and this impacts my productivity immensely. Suddenly, I'm more hesitant and I'm afraid to break something with my changes. 

Here are a few select quotes from this discussion that match my own experience very closely: 

> What I find in Python is that I can barely reuse my old code, much less modify it without a lot of pain. (James Watson) 

> I, at least, find that my Ruby or Javascript code degrades over time more than my Java code does, mainly because I get lazy and avoid refactorings that I would be more likely to do if they were safer and more automatic. (Alan Keefer) 

Ultimately, I have found that big programs written in dynamic languages don't age as well as those written in a statically typed language because developers are more afraid to refactor them. And rightfully so, since [certain refactorings are just plain impossible to achieve automatically in these languages](http://beust.com/weblog/weblog/archives/000414.html) (another reason why [duck typing is too dangerous to use in large scale projects](http://beust.com/weblog/weblog/archives/000269.html)). 

The bottom line is actually fairly simple: nothing beats a dynamic language to write a prototype, but if you know that the code will have to be maintained and that it will be in use for several years, the initial cost of using a statically typed language is an investment that is very quickly amortized...
