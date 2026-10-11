---
title: Value or reference?
date: '2011-01-07T12:53:38'
slug: value-or-reference
categories:
- General
comments:
- id: 8710
  author: matt b
  date: '2011-01-07T13:00:52'
  content: 'The StackOverflow question on this topic is pretty exhaustive. Is this really not enough for anyone?

    http://stackoverflow.com/questions/40480/is-java-pass-by-reference'
  replies: []
- id: 8711
  author: Jared
  date: '2011-01-07T13:08:12'
  content: Pass by what? A water cooler explanation - http://jared.cacurak.com/2010/02/pass-by-what-water-cooler-explanation.html
  replies: []
- id: 8712
  author: Bill K
  date: '2011-01-07T13:56:05'
  content: 'Passes references by value, but the fact is if  you bring up either you are going to confuse people.

    I usually use simpler terms because those two are actually useless as a summation.

    A two piece answer can work wonders:

    You can modify anything passed into a method without effecting the caller, BUT

    Java never creates objects on it''s own, so if you pass in an object and modify that, of course it will modify the object.

    So Java just does what is simple and makes sense.  Any other methodology would detract from overall usability.'
  replies: []
- id: 8713
  author: Lawrence Kesteloot
  date: '2011-01-07T14:07:17'
  content: 'Bill K is right that it passes references by value, and I think this whole discussion is confusing because there are two definitions of "reference":

    1. A pointer with different syntax than C. Java and C++ have these.

    2. A mechanism where a function gets passed the address of the parameter instead of its value.

    Java doesn''t have #2 like C++ does with the ampersand. Had Java used the word "pointer" (which it partially does with NPE), there would be less confusion. You could just say that Java, like C, passes everything by value: primitives and pointers.'
  replies: []
- id: 8714
  author: Toby
  date: '2011-01-07T15:33:39'
  content: "I think the crux of the problem lies in the understanding of the term \"reference\", and I think this answer on the SO thread linked above hits on this nicely:\n\"The crux of the matter is that the word reference in the expression \"pass by reference\" means something completely different from the usual mening of the word reference in Java.\nUsually in Java reference means a a reference to an object. But the technical terms pass by reference/value from programming language theory is talking about a reference to the memory cell holding the variable, which is someting completely different.\"\nIn C++, a reference to a value and the physical memory address of that value are the same thing (well, due to the OS managing memory, it's actually a virtual memory address, but let's ignore that). In Java, a reference to a value (i.e. object) and the physical memory address are NOT the same thing, since the VM moves objects around during its operation. Instead, a reference is a symbol managed\
    \ on the VMs symbol table, and is updated with a new address whenever the object is moved around in memory. For obvious reasons, Java doesn't allow direct access to physical addresses.\nThe following example demonstrates:\n#include\nvoid foo(int &amp;x) {\n  printf(\"Foo before: %d @ %p\\n\", x, &amp;x);\n  x = 20;\n  printf(\"Foo after: %d @ %p\\n\", x, &amp;x);\n}\nvoid bar(int *x) {\n  printf(\"Bar before: %d @ %p\\n\", *x, x);\n  *x = 30;\n  printf(\"Bar after: %d @ %p\\n\", *x, x);\n}\nvoid baz(int *x) {\n  printf(\"Baz before: %d @ %p\\n\", *x, x);\n  int y = 40;\n  x = &y;\n  printf(\"Baz after: %d @ %p\\n\", *x, x);\n}\nint main() {\n  int x = 10;\n  printf(\"Initial: %d @ %p\\n\", x, &amp;x);\n  foo(x);\n  printf(\"Main after foo: %d @ %p\\n\", x, &amp;x);\n  bar(&amp;x);\n  printf(\"Main after bar: %d @ %p\\n\", x, &amp;x);\n  baz(&amp;x);\n  printf(\"Main after baz: %d @ %p\\n\", x, &amp;x);\n  return 0;\n}\nOutput:\nInitial: 10 @ 0x7fffe99c981c\nFoo before: 10 @ 0x7fffe99c981c\n\
    Foo after: 20 @ 0x7fffe99c981c\nMain after foo: 20 @ 0x7fffe99c981c\nBar before: 20 @ 0x7fffe99c981c\nBar after: 30 @ 0x7fffe99c981c\nMain after bar: 30 @ 0x7fffe99c981c\nBaz before: 30 @ 0x7fffe99c981c\nBaz after: 40 @ 0x7fffe99c97fc\nMain after baz: 30 @ 0x7fffe99c981c\nAt this point it should be clear that the way I've defined the method \"baz\" above is how Java performs method calls for non-primitives. All such method calls pass only references to objects, but any changes to the references themselves (not the values they refer to!) remain within the scope of the callee. This subtle distinction means that the call is technically by value, even though we're providing only references as parameters."
  replies: []
- id: 8715
  author: Josh Berry
  date: '2011-01-07T17:09:44'
  content: 'I get bogged by the different stress of the "object" of the question.  It seems natural to think that you pass objects by reference to functions, because you only have a reference in the first place.  What you can not do, however, is pass a reference to your reference, as Java doesn''t have reference types (I am assuming I am not using the correct term, is there one?).

    That is, in the example you give, I would have little hesitation to say that you pass the Person to the calls by reference.  I say this because typically you are concerned with the actual object that was passed, and not the variable you passed it with.  What you can not do is pass a reference to your Person reference to another function.  (Well, not without using another type.) (And, I would only say this if going quickly, as i am well aware of the technically correct answer, I''m just far from perfect.  :) )'
  replies: []
- id: 8716
  author: cooper
  date: '2011-01-07T17:17:04'
  content: I know what these do, and this is an old argument about whether Java is "pass by ref" or "pass by pointer value." Either way, if you write code that operates in this fashion, you are gun.shoot(foot); The great irony of gun.shoot(foot) is that it is much more manageable from a code perspective as foot.shootWith(gun);.
  replies: []
- id: 8717
  author: Tweets that mention Value or reference? ?? Otaku, Cedric's blog -- Topsy.com
  date: '2011-01-07T17:47:56'
  content: '[...] This post was mentioned on Twitter by Rick F. Barnes, Coffee Guy. Coffee Guy said: Value or reference? http://goo.gl/fb/IHi1r [...]'
  replies: []
- id: 8718
  author: Bob Lee
  date: '2011-01-08T09:39:38'
  content: 'These debates are a pet peeve of mine. IMO, "pass by value/reference" is C/C++ terminology that''s clearly confusing when applied directly, with the same exact meaning, to Java. "Reference" means something different in Java, and Java has no concept of C/C++''s pass by reference feature, so there''s not much value in dragging it into any explanations.

    I think it''s perfectly fine to say that objects in Java are "passed by reference." We mean the Java definition of "reference," not the C/C++ definition. If you''re trying to explain Java to a new developer, "pass by reference" will make a lot more sense to them.'
  replies: []
- id: 8719
  author: Incredulous
  date: '2011-01-08T11:45:40'
  content: 'I Cannot believe that people are still comment on this.

    Java PBV discussions are the kudzu of the programming community.

    I even stop myself here from saying "Java does xxxxx because of yyyyy" because it won''t add anything.

    Facts are facts, Java still does something in a certain way, totally unambigouously, totally just the way it is, and yet, people argue about whether or not it actually does it.'
  replies: []
- id: 8720
  author: Wouter Lievens
  date: '2011-01-09T23:00:46'
  content: 'I think only people who haven''t had a formal education in computer science or software engineering could have a problem with this. If you know how a compiler or an interpreter works, you have no issues with these concepts.

    Java is pass by value. Pass by reference means that you can change at the formal side what a variable at the actual side points to. You can''t do that in Java.'
  replies: []
- id: 8721
  author: Josh Berry
  date: '2011-01-10T09:33:27'
  content: The problem there, though, comes in to the question of "are objects passed by value, or by reference?"  :)  I think the odd cognitive dissonance between these two questions is what bothers many people.
  replies: []
- id: 8722
  author: Josh Berry
  date: '2011-01-10T12:38:30'
  content: D'oh, finally getting back to this, I meant my question to be "are objects created by value or by reference?"  :)
  replies: []
- id: 8723
  author: Incredulous
  date: '2011-01-11T10:51:00'
  content: '@Josh Berry,

    To answer your post #11, objects aren''t passed in Java. That''s just the way it is. References to objects are passed.

    There is simply no way to pass an object by value *or* by reference the same way that it is done in C++. It does not exist. The only analogue that is correct is passing a pointer to an object by value in C++.

    To answer your post #12, I have no idea what the fuck that means. Presumably, you are wondering if "Object o();" makes sense as creating by value, i.e., is there automatic storage in Java.

    Yeah, yeah, I know. You understand what pbv means and were just throwing out a hypothetical question, trying to shed light on the debate and why people are confused.

    I too would like insight on why people get confused  --- It helps me to teach them.

    But ultimately, the distinction between pbv and pbr and then the same thing for pointers is something clear, concrete, unambiguous, and really, it should be expected that anyone competent can go and grasp this within a half hour at the very very most.

    I call it "Incredulous''s Litmus Test To Weed Out People Who Learned To Program By Permutation Alone".'
  replies: []
- id: 8724
  author: Josh Berry
  date: '2011-01-11T13:31:13'
  content: 'Post 11 was an accident, but my understanding is that your response is no longer accurate.  With escape analysis turned on objects may never touch the heap and could in fact be passed "by value."

    It was probably easier for me to ask "does Java have value or reference types?"  Since it is so heavily ingrained that all objects are reference types, it is not shocking that many people incorrectly state that it is pass by reference.   This is especially true as you get more and more people that have never used a true "pass by reference" language.

    So, since I never made it clear.  I like the point this blog post made, heavily.  I''m just sympathetic to people that would say it is pass by reference, so long as they can explain how they meant that.'
  replies: []
- id: 8725
  author: Incredulous
  date: '2011-01-11T16:40:19'
  content: 'I agree with your last sentence, in general, quite completely. I think that interviewers must be open to the very likely and common and frequent occurence of interviewees using shorthand or colloquialisms for things. To rely on precise formal definitions for things would mean that you''d exclude a great number of people as candidates due to them simply being human; I''d bet that often, those who live formalism miss the forest for the trees when it comes to actually designing things.

    That being said, in the specific case at hand, the argument of Java being pbv vs. pbr is just stupid. There''s a clear answer to a clear question and it''s not up for much debate.

    In turn, *that* being said, I''m right with you in that, if I were interviewing someone, and they told me that Java was pbr, I''d want them to explain how just to make sure they weren''t kind of using a short hand for things.

    But ultimately: Easy concept, clear difinitive answer as to which Java is, and someone who argues voiciferously for the incorrect answer is just asking to be categorized as one of them folks that Joel says is in the group that doesn''t understand pointers.

    In an interview: I''m with both you and Cedric. For a Linkedin group of "professionals" who are "experienced developers": I''m appalled and aghast, really.'
  replies: []
- id: 8726
  author: Incredulous
  date: '2011-01-11T16:41:38'
  content: Also, my understanding is that escape analysis is an optimization, not an aspect of the language itself. Is this not correct?
  replies: []
- id: 8727
  author: Josh Berry
  date: '2011-01-11T17:50:48'
  content: 'Fair enough, and I do agree with your points.

    As for it being an optimization, yes.  But it is one that matters, no?  Often the reason this comes up, I thought, was when people are lamenting the lack of "value types" in java.  Well, that and interview questions. :)'
  replies: []
- id: 8728
  author: Incredulous
  date: '2011-01-11T17:59:27'
  content: 'It''s a good discussion. If I ever apply to wherever it is that you work, I hope that I have you as an interviewer.

    :)'
  replies: []
- id: 8729
  author: lee
  date: '2011-01-24T13:11:49'
  content: 'The whole discussion predates C or C++. It goes back to when someone came up with the idea of encapsulating and generalizing some code in such a way that that bit of code could use names for things supplied from the outside (the caller) to generalize the code thus encapsulated. They called them functions or subroutines or subfunctions or methods or whatever.

    These were the days of Dartmouth Basic, Fortran IV, Cobol and Lisp. Algol was a gleam in somebodies eye. PL/1 was new and Bell Labs made telephones. (Ok ... not exactly but close.)

    Early processors were invented before these "functions" were invented and the low-level (assembly, maybe) code to support them was something of a rube-goldberg affair. There was no stack. So this bunch of code was written in different ways by various compiler.

    And, too, they were just inventing structures or data blocks that contained pointers to other data blocks so that whole confusion didn''t really matter.

    In one way to do it, that I saw on the CDC 6x00 mainframes for some language was to reserve some memory locations just before the memory location that held the 1st instruction of the function. Go back one and it was reserved for the return address. Back two held the return value and three and so on were the parameters themselves. An integer argument value could be put in the location back three from the entry point OR the address of some memory location holding an integer value could go there. It depended on the language at times. (Everything was the same size, mostly.)

    A call to the function, foo, consisted of code to store the return address at foo-1, store the parameters (or their addresses) at foo-3, foo-4, etc. followed by a goto foo itself. Code at the return address would copy the values from the argument block back to the variables when control returned to the caller. Or not. (That''s why they cared about call by ref or value.)

    A return from the function consisted of storing the return value (if any) at foo-1, storing the argument values (maybe) back into foo-2 and above, grabbing the return address from foo-1 and jumping to it. (Recursion was not an option.)

    The whole handling of the arguments was just dependent on how you wrote the compiler.

    Later, someone came up with stack based processors. It was cool beyond belief. Recursion worked. You could do a sort of push on the stack to create a block of memory to hold parameters and local variables. And a return was simply pop the stack frame and return address and jump to the popped address.The mechanism of function calling was built into the instruction set.

    That limited the possibilities of how to call a function and made the whole argument of call by value or call by reference a matter of archeology.

    I say, "Who cares?"'
  replies: []
---

Death and Taxes are not the only two things that are certain in life: the regular resurgence of the "Is Java pass by value or pass by reference?" controversy comes to haunt us regularly as well. This year, it's brought to us in the LinkedIn Java group and on TheServerSide. 

Like all debates centered around words, it's pretty hard to get a final resolution when most participants don't agree on the meaning of these words. 

This question makes for a great warm up interview question, though, but it would be pretty evil to ask it in these ambiguous terms, so instead, I simply prefer to show the candidate the two following snippets: 
    
    
    public void foo1(Person p) {
      p = new Person("Joe");
    }
    public void foo2(Person p) {
      p.name = "Joe";
    }
    

and then ask them to explain what these two methods do. 

The number of candidates who hesitate (and sometimes get it wrong) is pretty surprising. As is the amount of discussion that sometimes follows this question. 

At any rate, the ensuing conversation is always interesting and it usually makes the candidate more comfortable for the rest of the interview.
