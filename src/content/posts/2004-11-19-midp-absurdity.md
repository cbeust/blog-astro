---
title: MIDP absurdity
date: '2004-11-19T09:30:39'
slug: midp-absurdity
categories:
- Java
comments:
- id: 2798
  author: Emmanuel Pirsch
  date: '2004-11-19T10:09:40'
  content: 'I don''t know if MIDP enforce jar sealing, but if it does not, then you can create your own CustomItem class in the same package as the Item class and provide the public constructor you need.

    This can cause upward compatibility problems, but you can overcome them by choosing the name of the class so it has less chance of colision in a future release of MIDP (like not following accepted code convention and naming the class with a lowercase first letter).'
  replies: []
- id: 2799
  author: aitor
  date: '2004-11-19T10:31:54'
  content: 'As far as I know the Item class was not designed to be extended because they didn''t have that in mind when they shipped MIDP 1.0 and that''s why everything is package protected. That was a design flaw because being able to create new items (your "option 2") is a nice feature, but then, MIDP 1.0 isn''t that mature and well designed anyway. It mimics what phones could do when it came out.

    MIDP 2.0 is certainly much better designed and developer-friendly. But I disagree with you, MIDP 2.0 phones are out there, you don''t have to wait for two years. Most new phones have been coming out with 2.0 implemented since (I''d say) late 2003, so they should be pretty widely available in 2005.'
  replies: []
- id: 2800
  author: Marcus Brito
  date: '2004-11-19T11:29:20'
  content: 'Considering that the usual turnaround period for cell phones is around 6 moths, 1 year for the most conservative (budget oriented) people, I wouldn''t say that MIDP 2.0 is "a couple of years" away.

    MIDP 2.0 phones are out for at least an year, and I could say that anyone that care about mo.bile applications should be using one of those an year from now, at most. Right now I have a Nokia 7650 (MIDP 1.0, Series 60) set -- which I''m sure won''t last another year.'
  replies: []
- id: 2801
  author: Jonathan Ellis
  date: '2004-11-19T20:33:01'
  content: Glad I'm going with SuperWaba instead of j2me.
  replies: []
- id: 2802
  author: Heiko W. Rupp
  date: '2004-11-20T11:31:38'
  content: 'The 7650 is pretty old now. But even as we speak/write, new phones are still delivered with MIDP 1.0 -- even from manufacturers that have MIDP 2.0 phones in their offering.

    While option 1 might not be the best, it will ensure that it runs on every device ...'
  replies: []
- id: 2803
  author: Tom Hawtin
  date: '2004-11-20T11:51:12'
  content: My understanding was that the limitation was in place to ease implementation across platforms of the time. I don't believe MIDP 1.0's design was that badly thought out. Apart from using ye olde collection classes.
  replies: []
- id: 2804
  author: Shai Almog
  date: '2004-11-21T05:45:40'
  content: 'People should stop blaming Sun for every single thing thats wrong with Java. Sure they did some bad things but MIDP is mostly the effort of the spec lead: Nokia.

    However, this particular decision was not wrong! Building a custom item requires many things from the operating system GUI such as clipping surfaces and layout next to native widgets... At the time of MIDP 1.0 no one knew it would take off and cell phone companies were not willing to rebuild GUI libraries to suite the whims of Java developers.

    If it weren''t for this (and many other "small") omission from 1.0 a 2.0 version might not have existed at all.'
  replies: []
- id: 2805
  author: Uwe Geuder
  date: '2004-11-26T14:22:41'
  content: 'Motorola was the spec lead for both MIDP versions. See www.jcp.org for details.

    MIDP 1.0 was never intended to have custom items on Form. Call it limited functionality, but it''s not the only limitation, MIDP 1.0 was just a quite limited approach in many aspects.

    MIDP 2.0 phones have been available in Europe and Asia since autumn 2003. Not sure about the US.

    http://www.benhui.net/modules.php?name=Midp2Phones lists 85 of them. There are some false entries and

    some are not commercially available, but still there are 10s of devices you can buy today.'
  replies: []
- id: 2806
  author: Marc Logemann
  date: '2004-11-29T14:46:01'
  content: 'Someone mentioned MIDP 1 phones are still being sold as of today. I really cant follow him on this one because in germany, its really tough, perhaps impossible to get a MIDP 1.0 phone nowadays.

    I dont think its a design flaw, not in the way that a coder forgot to make the methods public ;-) The phones back then were really limited. Some of them were able to carry max. 50kb of JAR size. Can someone tell me how to create wonderful descendants of Items when you have only 50kb of JAR size? Even with obfuscating, my apps reached sizes of 70-80kb and this without user created Items, only by using default GUI stuff. So it was a API design decission based on the hardware capabilities these days. And remember, MIDP1 is really old and the hardware back then was simple.'
  replies: []
---

In J2ME, MIDP is the library that allows you to build user interfaces (among other things) and its functionalities obviously much simpler than even AWT.  The two classes of interest are:

  * **`Form`** , which supports structured widgets called Items (`TextField`, `ChoiceGroup`, etc...)
  * **`Canvas`** , the lowest-level class, where you need to paint everything yourself.



Faced with the task of building a User Interface, a J2ME developer will typically consider the following options, in increasing order of difficulty:

  1. Use a `Form` with the standard Items.
  2. Use a `Form` with custom Items.
  3. Use a `Canvas`.



For obvious reasons, the standard Items are pretty crude and offer only the simplest functionality.  On the other hand, writing a `Canvas` from scratch is quite challenging and requires a lot of geometric calculations and 2D drawing.  Therefore, option 2 presents a strong appeal, striking a good balance between the other two options.

Taking a look at the `Item` class, we see that it has three abstract methods, one of which is paint() and the other two return size-related information.  So far, so good, it seems simple enough.

Except that...  Sun made it impossible for you to extend `Item` in MIDP 1.0.

Why?

Because the `Item` class only has package-protected constructors:
    
    
    public abstract class Item {
    Item(String label) { ... }
    Item(String label, int num) { ... }
    

And a closer look at the class reveals that even the abstract methods mentioned above are package-protected as well...  I'm not sure what genius came up with this design but more distressing is the fact that Sun actually shipped this class, which is installed on millions of devices as we speak. 

Interestingly, they seem to have realized their mistake because MIDP 2.0 comes with a new class, `CustomItem`, which exposes the carefully hidden constructors to the outside world:
    
    
    public abstract class CustomItem extends Item {
    protected Item(String label) { ... }
    

It's too bad that MIDP 2.0 will not be widely available on phones before at least a couple of years...

Until then, it's back to good-ole Canvas programming.  It feels like 1996 all over again.
