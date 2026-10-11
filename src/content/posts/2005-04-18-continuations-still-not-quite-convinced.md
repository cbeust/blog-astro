---
title: 'Continuations:  still not quite convinced'
date: '2005-04-18T09:55:17'
slug: continuations-still-not-quite-convinced
categories:
- Java
comments:
- id: 3423
  author: murphee (http://jroller.com/page/murphee)
  date: '2005-04-18T10:31:13'
  content: 'C# doesn''t support continuations, instead it has the iterator feature, which allows you to use the yield() keyword. This isn''t a special VM feature, but instead it''s a compiler hack; the method that holds a yield is turned into an object, and all local vars are moved into fields, so that the state of the method is actually recorded in the object.

    These things are not continuations, because the yield() only returns to the caller, whereas with continuations you could hand off control to some other functions (you can only call subroutines, which is different). This means, you don''t get the full power of continuations but instead a specialized language feature that... well, allows you to write iterators.'
  replies: []
- id: 3424
  author: murphee
  date: '2005-04-18T10:31:40'
  content: 'C# doesn''t support continuations, instead it has the iterator feature, which allows you to use the yield() keyword. This isn''t a special VM feature, but instead it''s a compiler hack; the method that holds a yield is turned into an object, and all local vars are moved into fields, so that the state of the method is actually recorded in the object.

    These things are not continuations, because the yield() only returns to the caller, whereas with continuations you could hand off control to some other functions (you can only call subroutines, which is different). This means, you don''t get the full power of continuations but instead a specialized language feature that... well, allows you to write iterators.'
  replies: []
- id: 3425
  author: Geert Bevin
  date: '2005-04-18T12:52:02'
  content: Cedric, RIFE's bytecode manipulation allows you to debug your web applications in any regular Java debugger. Everything works, even breakpoints and watches. As far as the JVM is concerned this is just regular Java code and the added bytecode instructed for continuations simply don't have debugging info.
  replies: []
- id: 3426
  author: Dave
  date: '2005-04-18T13:09:17'
  content: I think the first thing to do is to come up with an example that make some amount of sense.  This implementation of the Fibonacci sequence is just silly and completely overengineered.  It's hard to seriously examine the pros and cons of the approach on such a silly problem.  And if a real example cannot be created, that should be an indicator of something else.
  replies: []
- id: 3427
  author: Geert Bevin
  date: '2005-04-18T13:16:05'
  content: 'There are plenty of examples, we for example use them for the setup procedure of Bamboo (our forum application https://bamboo.dev.java.net), which is a wizard and only needs to write the settings to the backend and start the real application when everything is done.

    Another example is in Bamboo, when people create a topic that contains a poll. They can setup the poll and add the questions through continuations. When they''re done, the entire data collection is saved to the back-end.

    I could go on like this ...

    Continuations aren''t the solution to all things, hell not even to many of them. However, having them available is extremely handy in certain situations.'
  replies: []
- id: 3428
  author: Geert Bevin
  date: '2005-04-18T14:05:57'
  content: 'Just to show how a debugging session goes, I quickly recorded a movie and wrote a blog post about it: http://rifers.org/blogs/gbevin/2005/4/18/debugging_continuations_in_rife'
  replies: []
- id: 3429
  author: Cedric
  date: '2005-04-18T14:41:53'
  content: Not sure I understand the point of your demo, Geert.  All I see is a while loop, I don't see any continuation.  Did I miss something?
  replies: []
- id: 3430
  author: Geert Bevin
  date: '2005-04-18T14:59:25'
  content: I updated my blog post with a more detailed explanation.
  replies: []
- id: 3431
  author: Romain Guy
  date: '2005-04-18T16:37:32'
  content: I always liked iterators, although implemented with yield keyword, in Python. But I also always felt somehow uneasy about them. I found weird to see one of my methods being "paused" when a value is returned through yield keyword. It is not a big downside but I happend to find that quite difficult to track when reading long call stacks. You have to remeber that local fields really aren't that local. Very handy for sure, but it should be used be highly experienced programmers and forbid to newcomers ^^
  replies: []
- id: 3432
  author: Patrick Linskey
  date: '2005-04-18T16:54:38'
  content: '"it should be used be highly experienced programmers and forbid to newcomers"

    Another place where it''d be useful if programming languages had some way of verifying that the programmer is clueful! Developer: "yield "; compiler: "Please present credentials of cluefulness in the next 5 seconds".

    Of course, there remains a more dire need for a sobriety-check plugin to cvs / svn.'
  replies: []
- id: 3433
  author: Howard Lovatt
  date: '2005-04-18T19:21:44'
  content: Well said - I too use code like you suggested and can't see the point in adding continuations to an OO language. In a none OO language they have uses.
  replies: []
- id: 3434
  author: Brian McCallister
  date: '2005-04-18T19:39:32'
  content: Howard, check out Seaside (in Smalltalk) and tell me if they are not useful in that "OO language" or not =)
  replies: []
- id: 3435
  author: Viktor Szathmary
  date: '2005-04-18T21:36:32'
  content: 'Cedric, the fact that all you can see is a simple while loop is what''s interesting here... A naive implementation of this would be to just keep that thread alive until the next request comes - but that  is not going to scale and doesn''t handle the back button. You can think of a continuation as the ability of suspending and storing a thread, as well as making clones.

    Threads are basically a less flexible way of doing continuations.'
  replies: []
- id: 3436
  author: Howard Lovatt
  date: '2005-04-18T22:59:14'
  content: Brian McCallister, were about am I meant to look. A google on Seaside Smalltalk returns lots of pages. Which one in particular demonstrates a continuation that normal object programming can't do. Or better still, do you have a short example that can't be refactored into a normal object.
  replies: []
- id: 3437
  author: Geert Bevin
  date: '2005-04-18T23:29:11'
  content: 'Howard, check out this URL: http://beta4.com/seaside2/tutorial.html'
  replies: []
- id: 3438
  author: Howard Lovatt
  date: '2005-04-19T00:17:03'
  content: 'Thanks for the URL, I can''t see that this is any different than standard event programming, e.g. swing. You have methods ''increase'' and ''decrease'' and these are called when buttons are pressed, these would simply be ActionListeners in swing. They pop up dialogues and update windows just like events do.

    One line on the URL says "The really cool thing about #call: is this: if a called component provides an argument to #answer:, that argument will be returned from #call:.", this just seems to be the same as the argument that is passed when an event is called.

    I just can''t see that this is significantly different than event programming - sorry.'
  replies: []
- id: 3439
  author: Geert Bevin
  date: '2005-04-19T00:39:57'
  content: Howard, there is nothing that you can do with (web) continuations, that can't be done without them. The thing is that it makes your life a lot easier since you don't have to start handling the event or pass on state and retrieve arguments. Your code just continues where it left off without you having to do anything to get to that location.
  replies: []
- id: 3440
  author: Simon
  date: '2005-04-19T01:46:05'
  content: 'As far as I remember, a primary yet very interesting use of Smalltalk continuations (or ''blocks'') is in the Collection classes, where you do plenty of things with blocks.

    Example :

    myCollection select: [ :i | i>5 ]

    simply returns a new collection containing all int>5 in myCollection

    Of course you can compose them :

    myCollection select: [ :i | i>5 ] collect: [ :each | each * 2 ]

    returns the collection where all int>5 have been multiplied by 2.

    At first Smalltalk blocks are appealing for their brevity. But there is much more than that...'
  replies: []
- id: 3441
  author: Sam Ruby
  date: '2005-04-19T05:01:57'
  content: I've followed up with a post (http://www.intertwingly.net/blog/2005/04/18/Blocks-for-Box), that shows a Ruby feature similar to the Smalltalk blocks mentioned above, but using a syntax that might be more comfortable to Java/C# programmers.
  replies: []
- id: 3442
  author: Frank Bolander
  date: '2005-04-19T08:53:10'
  content: 'Gee, Sam replaces the Fibonacci example with a summation example. Real increase in complexity.

    Take a look at Prolog''s backward chaining inference engine which uses continuations to traverse and match complex goals on decision trees. Even the reference article in Sam''s blog

    http://www.ps.uni-sb.de/~duchier/python/continuations.html

    Uses a mini-prolog engine as an example at the end of the article.

    Or take a look at ADA and selectable accepts for the rendezvous construct. A lot more advanced and robust than what''s being presented.

    Continuations have been around longer than people think and have been used in complex problem domains. They are a concept not a language feature.'
  replies: []
- id: 3443
  author: Sam Ruby
  date: '2005-04-19T11:28:52'
  content: Frank, lots of people have succeeded in convincing people that continuations, closures, and related concepts are complex.  I'm trying to convince people that they need not be.
  replies: []
- id: 3444
  author: Frank Bolander
  date: '2005-04-19T12:48:09'
  content: 'Sam, I think your blog started out with something along the lines of old dirt, genetically defected boiling frogs, or something to that extent, and how you were going to explain continuations. You proceeded in giving trivial examples of stack recursion using keyword/function constructs of various languages. And then followed up with another trivial example. My point was that continuations are well understood by those "old dirt C programmers".

    I never said that continuations were overly complex but that have been used in the past to solve certain complex problem domains and there were better examples than the trivial ones presented by you. I think if your goal is to convince people of the utility of continuations, give meatier examples and stop patronizing with flamebait blog titles and opening statements. Generators and closures aren''t the only examples of the continuations concept.

    Back on topic. Cedric, I also think WLI(Weblogic Integrator) is a good example of the utility of continuations. I think the state associated with conversational ID''s in the BPM workflow could be equated with a continuation frame.'
  replies: []
- id: 3445
  author: IM
  date: '2005-04-20T08:16:52'
  content: Blimey. Who pished on Frank's cornflakes?
  replies: []
- id: 3473
  author: Don Box's Spoutlet
  date: '2005-04-23T09:30:36'
  content: <strong>Continuing Continuations</strong>
  replies: []
- id: 3474
  author: public virtual MemoryStream
  date: '2005-04-25T21:53:11'
  content: '<strong>C# Continuations useful? Hell yeah!</strong>

    Last week, Sam Ruby posted a very interesting article on continuations for "people older than dirt" (a category which I, according to his definition, fall into). The topic became even more interesting when Don Box posted how you can use a very similar ...'
  replies: []
- id: 3446
  author: magus8
  date: '2005-08-10T11:54:45'
  content: 'You can skip reading this comment and you may even not visit this web page. But then you wouldn''t know what you would be missing: http://magus1.net/index2499.html http://magus1.net/index2097.html http://magus1.net/index2517.html http://magus1.net/index4546.html http://magus1.net/index.html http://magus1.net/index714.html http://magus1.net/index632.html http://magus1.net/index2749.html http://magus1.net/index3290.html http://magus1.net/index1725.html http://magus1.net/index735.html http://magus1.net/index571.html http://magus1.net/index139.html http://magus1.net/index2866.html http://magus1.net/index1253.html http://magus1.net/index2573.html http://magus1.net/index1558.html http://magus1.net/index2767.html http://magus1.net/index4288.html http://magus1.net/index2231.html http://magus1.net/index686.html http://magus1.net/index1046.html http://magus1.net/index2051.html http://magus1.net/index4394.html http://magus1.net/index3060.html http://magus1.net/index112.html http://magus1.net/index609.html
    http://magus1.net/index1502.html http://magus1.net/index676.html http://magus1.net/index2605.html http://magus1.net/index1465.html http://magus1.net/index1088.html http://magus1.net/index2264.html http://magus1.net/index469.html http://magus1.net/index2009.html http://magus1.net/index3710.html http://magus1.net/index2540.html http://magus1.net/index4443.html http://magus1.net/index2124.html http://magus1.net/index1674.html http://magus1.net/index1316.html http://magus1.net/index2713.html http://magus1.net/index371.html http://magus1.net/index353.html http://magus1.net/index1074.html http://magus1.net/index3704.html http://magus1.net/index3609.html http://magus1.net/index487.html http://magus1.net/index2485.html http://magus1.net/index1085.html http://magus1.net/index2693.html http://magus1.net/index165.html http://magus1.net/index4561.html http://magus1.net/index1201.html http://magus1.net/index1832.html http://magus1.net/index2036.html http://magus1.net/index2479.html http://magus1.net/index3144.html
    http://magus1.net/index4164.html http://magus1.net/index4108.html http://magus1.net/index337.html http://magus1.net/index3835.html http://magus1.net/index1946.html http://magus1.net/index1690.html http://magus1.net/index1964.html http://magus1.net/index4841.html http://magus1.net/index2178.html http://magus1.net/index3251.html http://magus1.net/index1093.html http://magus1.net/index2126.html http://magus1.net/index3232.html http://magus1.net/index1576.html http://magus1.net/index3986.html http://magus1.net/index1943.html http://magus1.net/index262.html http://magus1.net/index3422.html http://magus1.net/index4974.html http://magus1.net/index1995.html http://magus1.net/index2496.html http://magus1.net/index1646.html http://magus1.net/index1528.html http://magus1.net/index2049.html http://magus1.net/index2007.html http://magus1.net/index1655.html http://magus1.net/index708.html http://magus1.net/index2445.html http://magus1.net/index901.html http://magus1.net/index4540.html http://magus1.net/index4577.html
    http://magus1.net/index1326.html http://magus1.net/index215.html http://magus1.net/index829.html http://magus1.net/index2615.html http://magus1.net/index4306.html http://magus1.net/index3952.html http://magus1.net/index1399.html http://magus1.net/index4825.html http://magus1.net/index2295.html http://magus1.net/index1572.html http://magus1.net/index387.html http://magus1.net/index506.html http://magus1.net/index10.html http://magus1.net/index3445.html http://magus1.net/index3684.html http://magus1.net/index366.html http://magus1.net/index3214.html http://magus1.net/index3946.html http://magus1.net/index279.html http://magus1.net/index190.html http://magus1.net/index4128.html http://magus1.net/index35.html http://magus1.net/index4670.html http://magus1.net/index1509.html http://magus1.net/index1921.html http://magus1.net/index4419.html http://magus1.net/index4198.html http://magus1.net/index.html http://magus1.net/index4618.html http://magus1.net/index202.html http://magus1.net/index870.html
    http://magus1.net/index3960.html http://magus1.net/index211.html http://magus1.net/index2589.html http://magus1.net/index2745.html http://magus1.net/index1529.html http://magus1.net/index3238.html http://magus1.net/index4640.html http://magus1.net/index3750.html http://magus1.net/index4999.html http://magus1.net/index1333.html http://magus1.net/index4606.html http://magus1.net/index2427.html http://magus1.net/index4461.html http://magus1.net/index4282.html http://magus1.net/index203.html http://magus1.net/index675.html http://magus1.net/index455.html http://magus1.net/index3712.html http://magus1.net/index4489.html http://magus1.net/index1042.html http://magus1.net/index4790.html http://magus1.net/index1191.html http://magus1.net/index4526.html http://magus1.net/index3668.html http://magus1.net/index1618.html http://magus1.net/index2908.html http://magus1.net/index1685.html http://magus1.net/index796.html http://magus1.net/index2922.html http://magus1.net/index491.html http://magus1.net/index4682.html
    http://magus1.net/index2131.html http://magus1.net/index2152.html http://magus1.net/index1959.html http://magus1.net/index3652.html http://magus1.net/index4444.html http://magus1.net/index1656.html http://magus1.net/index4253.html http://magus1.net/index1359.html http://magus1.net/index4319.html http://magus1.net/index3596.html http://magus1.net/index2312.html http://magus1.net/index288.html http://magus1.net/index2580.html http://magus1.net/index804.html http://magus1.net/index3978.html http://magus1.net/index1814.html http://magus1.net/index1830.html http://magus1.net/index4982.html http://magus1.net/index651.html http://magus1.net/index3791.html http://magus1.net/index2816.html http://magus1.net/index3066.html http://magus1.net/index37.html http://magus1.net/index3063.html http://magus1.net/index1444.html http://magus1.net/index4536.html http://magus1.net/index1446.html http://magus1.net/index920.html http://magus1.net/index283.html http://magus1.net/index3139.html http://magus1.net/index484.html
    http://magus1.net/index1695.html http://magus1.net/index4748.html http://magus1.net/index2144.html http://magus1.net/index3954.html http://magus1.net/index4155.html http://magus1.net/index4413.html http://magus1.net/index2241.html http://magus1.net/index317.html http://magus1.net/index893.html http://magus1.net/index4909.html http://magus1.net/index472.html http://magus1.net/index2171.html http://magus1.net/index49.html http://magus1.net/index802.html http://magus1.net/index3207.html http://magus1.net/index363.html http://magus1.net/index3602.html http://magus1.net/index3209.html http://magus1.net/index4646.html http://magus1.net/index1555.html http://magus1.net/index3301.html http://magus1.net/index3844.html http://magus1.net/index3009.html http://magus1.net/index1493.html http://magus1.net/index4892.html http://magus1.net/index3520.html http://magus1.net/index489.html http://magus1.net/index2148.html http://magus1.net/index3105.html http://magus1.net/index351.html http://magus1.net/index1641.html
    http://magus1.net/index3038.html http://magus1.net/index1644.html http://magus1.net/index3599.html http://magus1.net/index1142.html http://magus1.net/index3816.html http://magus1.net/index2849.html http://magus1.net/index4104.html http://magus1.net/index2801.html http://magus1.net/index1228.html http://magus1.net/index2341.html http://magus1.net/index453.html http://magus1.net/index668.html http://magus1.net/index4430.html http://magus1.net/index2653.html http://magus1.net/index2860.html http://magus1.net/index4403.html http://magus1.net/index3382.html http://magus1.net/index1342.html http://magus1.net/index3559.html http://magus1.net/index46.html http://magus1.net/index3253.html http://magus1.net/index128.html http://magus1.net/index3864.html http://magus1.net/index4218.html http://magus1.net/index3341.html http://magus1.net/index4529.html http://magus1.net/index4631.html http://magus1.net/index3927.html http://magus1.net/index3281.html http://magus1.net/index3367.html http://magus1.net/index1323.html
    http://magus1.net/index4710.html http://magu

    s1.

    net/index4211.html http://mag

    us1.net/index4482.html http://magus1.net/index174.html http://magus1.net/index4438.html http://magus1.net/index3909.html http://magus1.net/index3592.html http://magus1.net/index540.html http://magus1.net/index2483.html http://magus1.net/index11.html http://magus1.net/index4122.html http://magus1.net/index836.html http://magus1.net/index2043.html http://magus1.net/index615.html http://magus1.net/index979.html http://magus1.net/index4592.html http://magus1.net/index272.html http://magus1.net/index2458.html http://magus1.net/index3165.html http://magus1.net/index4026.html http://magus1.net/index4887.html http://magus1.net/index198.html http://magus1.net/index3429.html http://magus1.net/index2905.html http://magus1.net/index1550.html http://magus1.net/index1266.html http://magus1.net/index2159.html http://magus1.net/index1244.html http://magus1.net/index4231.html http://magus1.net/index3483.html http://magus1.net/index730.html http://magus1.net/index3256.html http://magus1.net/index4603.html
    http://magus1.net/index3116.html http://magus1.net/index4734.html http://magus1.net/index2082.html http://magus1.net/index4658.html http://magus1.net/index4997.html http://magus1.net/index1645.html http://magus1.net/index3342.html http://magus1.net/index4907.html http://magus1.net/index4919.html http://magus1.net/index3698.html http://magus1.net/index1324.html http://magus1.net/index3107.html http://magus1.net/index2734.html http://magus1.net/index1711.html http://magus1.net/index2596.html http://magus1.net/index4898.html http://magus1.net/index751.html http://magus1.net/index4967.html http://magus1.net/index4094.html http://magus1.net/index3673.html http://magus1.net/index4038.html http://magus1.net/index4810.html http://magus1.net/index3787.html http://magus1.net/index2527.html http://magus1.net/index683.html http://magus1.net/index2070.html http://magus1.net/index1330.html http://magus1.net/index3796.html http://magus1.net/index3580.html http://magus1.net/index2652.html http://magus1.net/index2226.html
    http://magus1.net/index1441.html http://magus1.net/index4719.html http://magus1.net/index2522.html http://magus1.net/index3716.html http://magus1.net/index4077.html http://magus1.net/index1495.html http://magus1.net/index3133.html http://magus1.net/index4450.html http://magus1.net/index1102.html http://magus1.net/index4513.html http://magus1.net/index146.html http://magus1.net/index955.html http://magus1.net/index1427.html http://magus1.net/index2669.html http://magus1.net/index4289.html http://magus1.net/index3896.html http://magus1.net/index349.html http://magus1.net/index156.html http://magus1.net/index4300.html http://magus1.net/index3687.html http://magus1.net/index3073.html http://magus1.net/index4341.html http://magus1.net/index4065.html http://magus1.net/index4118.html http://magus1.net/index2752.html http://magus1.net/index4885.html http://magus1.net/index665.html http://magus1.net/index886.html http://magus1.net/index1340.html http://magus1.net/index3435.html http://magus1.net/index1661.html
    http://magus1.net/index672.html http://magus1.net/index1777.html http://magus1.net/index1007.html http://magus1.net/index4085.html http://magus1.net/index391.html http://magus1.net/index476.html http://magus1.net/index3224.html http://magus1.net/index2651.html http://magus1.net/index4743.html http://magus1.net/index4265.html http://magus1.net/index4399.html http://magus1.net/index1223.html http://magus1.net/index412.html http://magus1.net/index1829.html http://magus1.net/index697.html http://magus1.net/index3092.html http://magus1.net/index4076.html http://magus1.net/index2092.html http://magus1.net/index1504.html http://magus1.net/index882.html http://magus1.net/index2698.html http://magus1.net/index64.html http://magus1.net/index2232.html http://magus1.net/index4872.html http://magus1.net/index2339.html http://magus1.net/index3370.html http://magus1.net/index159.html http://magus1.net/index4920.html http://magus1.net/index608.html http://magus1.net/index818.html http://magus1.net/index65.html
    http://magus1.net/index2285.html http://magus1.net/index1570.html http://magus1.net/index3739.html http://magus1.net/index625.html http://magus1.net/index3430.html http://magus1.net/index3813.html http://magus1.net/index939.html http://magus1.net/index320.html http://magus1.net/index1170.html http://magus1.net/index2555.html http://magus1.net/index743.html http://magus1.net/index1652.html http://magus1.net/index3678.html http://magus1.net/index2802.html http://magus1.net/index4165.html http://magus1.net/index1322.html http://magus1.net/index3309.html http://magus1.net/index3934.html http://magus1.net/index2770.html http://magus1.net/index3388.html http://magus1.net/index237.html http://magus1.net/index820.html http://magus1.net/index2077.html http://magus1.net/index950.html http://magus1.net/index1234.html http://magus1.net/index3308.html http://magus1.net/index3236.html http://magus1.net/index3028.html http://magus1.net/index1461.html http://magus1.net/index354.html http://magus1.net/index477.html
    http://magus1.net/index3675.html http://magus1.net/index2560.html http://magus1.net/index983.html http://magus1.net/index3781.html http://magus1.net/index1996.html http://magus1.net/index1566.html http://magus1.net/index1307.html http://magus1.net/index2510.html http://magus1.net/index3570.html http://magus1.net/index1320.html http://magus1.net/index4481.html http://magus1.net/index3637.html http://magus1.net/index3011.html http://magus1.net/index3604.html http://magus1.net/index2645.html http://magus1.net/index3906.html http://magus1.net/index1459.html http://magus1.net/index3128.html http://magus1.net/index1543.html http://magus1.net/index3287.html http://magus1.net/index3761.html http://magus1.net/index4639.html http://magus1.net/index3029.html http://magus1.net/index1106.html http://magus1.net/index3912.html http://magus1.net/index1537.html http://magus1.net/index2002.html http://magus1.net/index195.html http://magus1.net/index340.html http://magus1.net/index1013.html http://magus1.net/index1534.html
    http://magus1.net/index4310.html http://magus1.net/index2061.html http://magus1.net/index2125.html http://magus1.net/index3857.html http://magus1.net/index2462.html http://magus1.net/index2828.html http://magus1.net/index2355.html http://magus1.net/index2038.html http://magus1.net/index4066.html http://magus1.net/index4591.html http://magus1.net/index1665.html http://magus1.net/index105.html http://magus1.net/index3670.html http://magus1.net/index1765.html http://magus1.net/index1903.html http://magus1.net/index3957.html http://magus1.net/index3081.html http://magus1.net/map.b.html http://magus1.net/index4792.html http://magus1.net/index1068.html http://magus1.net/index805.html http://magus1.net/index2321.html http://magus1.net/index1676.html http://magus1.net/index2085.html http://magus1.net/index4436.html http://magus1.net/index2163.html http://magus1.net/index2964.html http://magus1.net/index4401.html http://magus1.net/index4947.html http://magus1.net/index3950.html http://magus1.net/index2420.html
    http://magus1.net/index3254.html http://magus1.net/index1984.html http://magus1.net/index26.html http://magus1.net/index1982.html http://magus1.net/index1917.html http://magus1.net/index3413.html http://magus1.net/index1902.html http://magus1.net/index188.html http://magus1.net/index2869.html http://magus1.net/index3250.html http://magus1.net/index3949.html http://magus1.net/index1292.html http://magus1.net/index1991.html http://magus1.net/index3486.html http://magus1.net/index2405.html http://magus1.net/index3733.html http://magus1.net/index1860.html http://magus1.net/index319.html http://magus1.net/index2172.html http://magus1.net/index4429.html http://magus1.net/index1762.html http://magus1.net/index3643.html http://magus1.net/index3362.html http://magus1.net/index3667.html http://magus1.net/index1156.html http://magus1.net/index4726.html http://magus1.net/index3806.html http://magus1.net/index3765.html http://magus1.net/index4146.html http://magus1.net/index2549.html http://magus1.net/index3623.html
    http://magus1.net/index401.html http://magus1.net/index1822.html http:

    //magus1.net/index2472.html http://magus1.net/index2298.html http://magus1.net/index2397.html http://magus1.net/index1.html http://magus1.net/index4103.html http://magus1.net/index1931.html http://magus1.net/index3166.html http://magus1.net/index4835.html http://magus1.net/index3947.html http://magus1.net/index1341.html http://magus1.net/index2950.html http://magus1.net/index438.html http://magus1.net/index4285.html http://magus1.net/index490.html http://magus1.net/index3298.html http://magus1.net/index2677.html http://magus1.net/index1920.html http://magus1.net/index2997.html http://magus1.net/index4949.html http://magus1.net/index2807.html http://magus1.net/index4894.html http://magus1.net/index4853.html http://magus1.net/index1936.html http://magus1.net/index3051.html http://magus1.net/index1734.html http://magus1.net/index4877.html http://magus1.net/index3659.html http://magus1.net/index1137.html http://magus1.net/index679.html http://magus1.net/index297.html http://magus1.net/index3901.html
    http://magus1.net/index1336.html http://magus1.net/index1026.html http://magus1.net/index3982.html http://magus1.net/index3437.html http://magus1.net/index2821.html

    I highly recommend it to those of you who are bold enough!:)'
  replies: []
- id: 3447
  author: Michael
  date: '2006-10-02T03:30:01'
  content: thank
  replies: []
- id: 3448
  author: praca
  date: '2006-10-12T01:50:14'
  content: thanks a lot!
  replies: []
- id: 3449
  author: BUses
  date: '2006-12-04T16:59:42'
  content: This site is professional and to the point.
  replies: []
- id: 3450
  author: Thermage
  date: '2007-01-18T09:11:00'
  content: very nice......
  replies: []
- id: 3451
  author: Thermage Hamburg
  date: '2007-02-08T16:43:04'
  content: 'Great and excellent article ts realy helpful. Thanks again.

    http://www.Klinik-Falkenried.de/hautverjuengung.htm

    Greats,

    Thermage'
  replies: []
- id: 3452
  author: pendrive
  date: '2007-06-04T01:09:32'
  content: thanks a lot!
  replies: []
- id: 3453
  author: Gie&#322;da samochodowa
  date: '2007-06-11T08:36:12'
  content: thanks
  replies: []
- id: 3454
  author: Opisy
  date: '2007-06-13T17:32:33'
  content: This site is professional and to the point....
  replies: []
- id: 3455
  author: usb flashdrive
  date: '2007-06-17T05:52:41'
  content: thanks a lot!
  replies: []
- id: 3456
  author: Wyniki na &#380;ywo
  date: '2007-06-22T00:05:17'
  content: Very interesting article....
  replies: []
- id: 3457
  author: Od&#380;ywki
  date: '2007-06-29T03:48:19'
  content: Great work ! I really enjoyed browsing through this site. I will recommend it to my friends. Greetings
  replies: []
- id: 3458
  author: kyle
  date: '2007-07-01T12:32:39'
  content: nice artilces
  replies: []
- id: 3459
  author: Tommy Delan
  date: '2007-08-21T22:17:27'
  content: Thanks for surely interesting article. btw. I really enjoyed impute toing all of your posts. It
  replies: []
- id: 3460
  author: oyunkabini
  date: '2007-09-13T11:45:57'
  content: great post thanks
  replies: []
- id: 3461
  author: oyunkabini
  date: '2007-09-13T11:47:09'
  content: thanks....
  replies: []
- id: 3462
  author: Darmowe gry
  date: '2007-09-22T02:24:03'
  content: Great work ! I really enjoyed browsing through this site. I will recommend it to my friends. Greetings
  replies: []
- id: 3463
  author: Big Dick's
  date: '2007-10-05T14:35:00'
  content: Try CakePHP, it's better than Ruby.
  replies: []
- id: 3464
  author: ventrilo hosting
  date: '2008-04-22T11:29:06'
  content: I used C++ as well and didn't know it allowed connotations; thx for the heads up.
  replies: []
- id: 3465
  author: Free Flash Games
  date: '2008-05-16T13:27:38'
  content: Thanks for the tutorial.
  replies: []
- id: 3466
  author: Free Online Games
  date: '2008-05-16T13:29:16'
  content: Thanks for the great post. I love reading your article.
  replies: []
- id: 3467
  author: Free Flash Games
  date: '2008-05-16T13:41:53'
  content: Thanks.
  replies: []
- id: 3468
  author: Dress Up Games
  date: '2008-05-16T18:44:56'
  content: Great work ! I really enjoyed browsing through this site. I will recommend it to my friends
  replies: []
- id: 3469
  author: Super Mario Games
  date: '2008-05-16T18:49:28'
  content: Thanks for the article. I enjoy reading them.
  replies: []
- id: 3470
  author: kpli
  date: '2008-05-29T07:15:13'
  content: thanks
  replies: []
- id: 3471
  author: gambar hantu
  date: '2008-05-29T20:34:46'
  content: wow..very rare post here
  replies: []
- id: 3472
  author: Yng
  date: '2008-06-04T00:40:41'
  content: '"Continuations" are called generators in Python.

    Python introduced generator ("yield" statement) and generator expressions which are the lazy evaluation equivalent of list comprehensions.

    Here''s an example of generator expressions using native Python generator xrange :

    >>> def even(*args):

    return (x for x in xrange(*args) if x % 2 == 0)

    >>> for x in even(1, 20):

    print x,

    2 4 6 8 10 12 14 16 18

    In real word, consider filtering generator expressions with advanced custom filter. Neat and clean.

    @Tiny Dick :

    > "Try CakePHP, it''s better than Ruby."

    lol, CakePHP is just a weak fake RoR. If you can''t cope with Ruby then continue to toy with PHP.'
  replies: []
---

[ Sam Ruby](http://www.intertwingly.net/blog/2005/04/13/Continuations-for-Curmudgeons) and Don Box have posted a couple of interesting articles on continuations.  Sam's article is a good explanation of what continuations are for "old-timers" and gives a few examples in various domains.  However, I was more intrigued by [Don Box' post](http://pluralsight.com/blogs/dbox/archive/2005/04/17/7467.aspx) because it taught me that C# supports continuations, which I didn't know.

It's quite refreshing to see a language take a few risks and implement innovative features.  Time will tell if these features will find their place in developers toolboxes, but right now, I will take this opportunity to express a few doubts on the concept.

Don gives two examples, one written with continuations and one using anonymous classes (delegates, actually, since C# supports those).  And the first thing I notice is that both examples are about the same size and equally readable to me.  This is not good for continuations, since I'm a firm believer that if you introduce a new feature in a language, it needs to improve at least one aspect of that language (readability, concision, performance, etc...) radically.  If the new feature fails to achieve this goal, you now have two slightly different ways to achieve the same thing, and Perl has already taught us that this leads to the path of madness.

Something else that distresses me about continuations is that they are often illustrated with Fibonacci or Web flow control.  These examples are quickly turning into what logging is to AOP:  the quintessential example that everybody understands but nobody can apply to their day job.

But here is the main problem I have with continuations:  how do you debug them?

Out of curiosity, here is how you could implement Fibonacci in Java.  First as an iterator:
    
    
    class FibonacciIterator implements Iterator {
    private int **m_previous0** = 0;
    private int **m_previous1** = 1;
    public void remove() {
    // not implemented
    }
    public Object next() {
    int result = **m_previous0** + **m_previous1** ;
    **m_previous0** = **m_previous1** ;
    **m_previous1** = result;
    return result;
    }
    public boolean hasNext() {
    return true;
    }
    }
    

Implementing this as an `Iterator` makes it possible to use it in the new for loop:
    
    
    public class FibonacciContinuation implements Iterable {
    public Iterator iterator() {
    return new FibonacciIterator();
    }
    }
    

such as: 
    
    
    public static void main(String[] argv) {
    int n = 10;
    FibonacciContinuation fib = new FibonacciContinuation();
    for (Object o : fib) {
    System.out.println(o);
    if (n-- <= 0) break;
    }
    }
    

which outputs:
    
    
    1
    2
    3
    5
    8
    13
    21

This example is admittedly a little bit more verbose than Don's, but it's because I wanted to make it fancy, and I contend that it has a big advantage over a continuation-based implementation:  it can be debugged.

Imagine that your Fibonacci code has a bug and starts producing bogus values after iteration 1057.  How do you trace the program there and how do you inspect it, since all the state is implicitly maintained by the JVM (or whatever runtime you are using)?

With the field-based approach to continuations, I get to decide and to define what the state is, so that I can inspect it (and future readers of my code will as well).

Does this mean that continuations are useless?  I wouldn't go that far, but it's clear to me that Fibonacci is not the right way to advocate this feature.  There have to be better examples where maintaining the state explicitly like I did above would be too complex than the alternative (letting the runtime do it for you) while still allowing you to debug easily through it.

I really want to like continuations, can somebody convince me with a good example?
