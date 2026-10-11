---
title: Bertrand Meyer's interview
date: '2003-10-30T07:38:56'
slug: bertrand-meyers-interview
categories:
- Java
comments:
- id: 641
  author: lurker
  date: '2003-10-31T01:41:41'
  content: 'Your language posts are very interesting. Any chance of comments on Groovy and BeanShell?

    cheers'
  replies: []
- id: 642
  author: Anonymous Coward
  date: '2003-10-31T06:45:13'
  content: I admire your willingness to take on sacred cows of the OO world, like Bertrand Meyer and Eiffel. Keep it up!
  replies: []
- id: 643
  author: Stefan Tilkov
  date: '2003-10-31T16:39:44'
  content: Is it too late for me to write sensibly, or is the complete text duplicated twice in your post?
  replies: []
- id: 648
  author: Random Stuff
  date: '2003-10-31T16:45:49'
  content: '<strong>Meyer and Eiffel</strong>

    Cedric Beust has some excellent comments on a recent interview with Bertrand Meyer, who will obviously be trying to push Eiffel in 25 years with the same arguments he had 15 years ago.'
  replies: []
- id: 644
  author: Eric Hancock
  date: '2003-10-31T18:04:43'
  content: 'One of the aspects of Java I''ve always admired is its feature set.  Starting from almost nothing, the designers had to decide on syntax, structure, features, and also write basic libraries.

    What stands out about Java is not what the designers put in, but what they left out.  Everyone has one or two features from another language they''d like included in Java, but few people find Java so lacking that they can''t develop with it.  Java is a far more inclusive language than many others, helping developers avoid mistakes so common in other languages.  Many of the most confusing and most often misused features were left out of the language.  Java makes it easier to write good code.

    Eiffel, too, is noted for the decisions involved in its design.  Wherever Meyer had to make a decision, he didn''t.  He just included the feature.  Eiffel lets you do everything you''d ever want to do with Exceptions, but the implementation is terribly complex.   Generics?   Sure.  Polymorphism?  No problem.  How about late binding, design by contract, invariants, explicit tuples, self documenting code, redefinition, multiple inheritance, even deferred classes.   At least they left out GOTO and pointers to memory.

    In the hands of a brilliant developer, Eiffel is a powerful tool.  But given that many of the people with whom I work are not brilliant developers, I prefer that they use Java.

    Far, far fewer opportunities to shoot themselves in the foot.'
  replies: []
- id: 645
  author: Jonathan
  date: '2003-11-03T10:06:03'
  content: 'Ah poor old Bertrand. He spent 10 years raging that C++ was such an evil abortion of a language, and Eiffel was so pure and beautiful. A veritable King Lear of the programming world, he could never understand the stupidity of so many C++ programmers. Debates between Meyer and Stroustrup were always fun. Meyer would do his usual C++ is rubbish, and Stroustrup would just sidestep the argument, and say he wasn''t providing the world with a pure OO language.

    That said, he wrote a great book, and I still remember the Eureka effect I had when I saw how undo could be implemented by reifying the command. Of course, everybody knows this stuff, but back in the late 80''s it was very clever.

    The other thing I liked was his class library for collections. At the time it seemed as if he had come up with a fundamental building blocks for collections. Its probably been superceded by the C++ STL.'
  replies: []
- id: 646
  author: Suraj
  date: '2003-11-03T17:11:14'
  content: '>> For example, in just about every recent

    >> object-oriented language, you have the ability,

    >> with some restriction, of directly assigning to

    >> a field of an object: x.a = 1, where x is an

    >> object, a is a field. Everyone who has been

    >> exposed to the basics of modern methodology and

    >> object technology understands why this is

    >> wrong.

    >

    > Well, no.  Just saying "everyone understands

    > it''s wrong" is not going to make it suddenly a

    > reality.

    It''s called encapsculation and is generally

    considered a good thing.

    It doesn''t sound like Meyer is indicating that

    direct field access is the root cause of all evil,

    just showing that a small thing like this has the

    potential to mushroom into a big problem. Java

    retricts field access using protected, package and

    private access while it sounds like in Eiffel all

    fields are private. Sounds quite sensible, neither

    approach can be considered much better than the

    other, they''re just different language design

    decisions.

    > simple concept is laughable. And the quasi

    > non-existence of Eiffel in the industrial world

    > since its inception (almost twenty years now)

    > doesn''t seem to bother Bertrand Meyer at all

    > about the validity of the choices he made when

    > he designed Eiffel.

    So lack of acceptance in the industrial world =>

    technical inferiority ? I don''t know much about

    Eiffel but arguing that it might have technical

    drawback just because it does not have wirespead

    acceptance does not sound right. Read "Worse is

    Better"

    http://www.dreamsongs.com/WorseIsBetter.html for a

    more cynical view.

    >> Readability is also enhanced when overloading

    >> is not possible. With overloading you would

    >> need to consider the type of the arguments as

    >> well as the type of the target before you can

    >> work out which feature is called. With multiple

    >> inheritance and dynamic binding this is awkward

    >> for a compiler and error-prone for a human.

    > "awkward for a compiler"?  Now that''s a good

    >  one.  Code is code.  It might be a difficult

    >  problem to tackle, but refusing to implement

    >  overloading and choosing instead to support

    >  multiple inheritance of implementations makes

    >  me wonder about the sanity of the ISE

    >  engineers.

    Do you feel the same way about lack of operator

    overloading in Java?  I think the justification

    makes sense, overloading in the presence of

    multiple inheritence means figuring out which

    method is being called is little more complicated

    for the user. Yes, ide support can is useful but

    why require a more complicated ide for a fairly

    dubious feature. It may be a questionable decision

    but hardly ridiculous.

    > Besides, I happen to know for a fact the

    > original motivation for leaving overloading out

    > of Eiffel (my teacher was a close friend of

    > Bertrand Meyer).  Back then, Eiffel was

    > generating C, and overloading is not supported

    > in C.  Of course, it never stopped the original

    > C++ compilers (cfront) from solving this

    > problem, but it looks like the ISE engineers

    > have decided that this problem was too hard for

    > them.  And they haven''t revisited their choice

    > since 1985.

    That might have been the initial motivation, but

    it seems plausible that they don''t want to waste

    effort on something they consider unnecessary. Do

    you miss all the features from C++ that Java

    dropped. Does dropping these features make the

    java compiler writer lazy? It definitely made

    their lives easier.

    > Bertrand can rest assured: anyone who sees an

    > Eiffel program for the first time will

    > definitely not think "it''s too good to be true".

    It sounds like you had a not so good experience

    with Eiffel in college :-).'
  replies: []
- id: 647
  author: ponydemon
  date: '2010-01-02T12:31:49'
  content: 'Pharmacy online pharmacy, online pharmacies, no prescription pharmacy. http://www.onlinepharmacyhost.com/ Online pharmacy no prescription pharmacy online pharmacy, online pharmacies. Online pharmacies., online pharmacy no prescription pharmacy online pharmacy. http://www.onlinepharmacyhost.com/allergy.htm Allergy http://www.onlinepharmacyhost.com/anthelmintics.htm Anthelmintics http://www.onlinepharmacyhost.com/anti-bacterial.htm Anti bacterial http://www.onlinepharmacyhost.com/anti-convulsants.htm Anti convulsants http://www.onlinepharmacyhost.com/anti-depressants.htm Anti depressants http://www.onlinepharmacyhost.com/anti-fungal.htm Anti fungal http://www.onlinepharmacyhost.com/anti-viral.htm Anti viral http://www.onlinepharmacyhost.com/antibiotics.htm Antibiotics http://www.onlinepharmacyhost.com/arthritis.htm Arthritis http://www.onlinepharmacyhost.com/asthma.htm Asthma http://www.onlinepharmacyhost.com/bladder-and-gout.htm Bladder and gout http://www.onlinepharmacyhost.com/blood-pressure.htm
    Blood pressure http://www.onlinepharmacyhost.com/cancer.htm Cancer http://www.onlinepharmacyhost.com/cardiovascular.htm Cardiovascular http://www.onlinepharmacyhost.com/cholesterol.htm Cholesterol http://www.onlinepharmacyhost.com/diabetes.htm Diabetes http://www.onlinepharmacyhost.com/diuretics.htm Diuretics http://www.onlinepharmacyhost.com/erectile-dysfunction.htm Erectile dysfunction http://www.onlinepharmacyhost.com/gastrointestinal.htm Gastrointestinal http://www.onlinepharmacyhost.com/hair-loss.htm Hair loss http://www.onlinepharmacyhost.com/heartburn.htm Heartburn http://www.onlinepharmacyhost.com/inflammatory.htm Inflammatory http://www.onlinepharmacyhost.com/lung-diseases.htm Lung diseases http://www.onlinepharmacyhost.com/migraines.htm Migraines http://www.onlinepharmacyhost.com/neurologic-diseases.htm Neurologic diseases http://www.onlinepharmacyhost.com/osteoporosis.htm Osteoporosis http://www.onlinepharmacyhost.com/other.htm Other http://www.onlinepharmacyhost.com/pain-medicine.htm
    Pain medicine http://www.onlinepharmacyhost.com/parkinson-and-alzheimer.htm Parkinson and alzheimer http://www.onlinepharmacyhost.com/respiratory.htm Respiratory http://www.onlinepharmacyhost.com/skin-care.htm Skin care http://www.onlinepharmacyhost.com/stop-smoking.htm Stop smoking http://www.onlinepharmacyhost.com/surgery.htm Surgery http://www.onlinepharmacyhost.com/thyroid.htm Thyroid http://www.onlinepharmacyhost.com/weight-loss.htm Weight loss http://www.onlinepharmacyhost.com/viagra.htm Viagra http://www.onlinepharmacyhost.com/levitra.htm Levitra http://www.onlinepharmacyhost.com/lasix.htm Lasix http://www.onlinepharmacyhost.com/cipro.htm Cipro http://www.onlinepharmacyhost.com/clomid.htm Clomid http://www.onlinepharmacyhost.com/cialis.htm Cialis http://www.onlinepharmacyhost.com/propecia.htm Propecia http://www.onlinepharmacyhost.com/zithromax.htm Zithromax http://www.onlinepharmacyhost.com/diflucan.htm Diflucan http://www.onlinepharmacyhost.com/cialis-soft.htm Cialis soft http://www.onlinepharmacyhost.com/
    Www.onlinepharmacyhost.com http://www.onlinepharmacyhost.com/sitemap.htm Online pharmacy sitemap } ) { . , ; ( - : Viagra, cialis, levitra buy online, cheap generic viagra, online viagra, buy viagra online order viagra, cheap viagra online, order levitra, cialis online, buy cialis, buy levitra, cheap cialis, order cialis online. http://www.buyviagracheapcialisorderlevitra.com/ Ed medication viagra, cialis, levitra online generic viagra, order viagra online, buy viagra online, cheap viagra, buy viagra, viagra online, buy generic viagra, online viagra generic cialis, order cialis online, buy cialis online, cheap cialis, buy cialis, cialis online, buy generic cialis, online cialis generic levitra, order levitra online, buy levitra online, cheap levitra, buy levitra, levitra online, buy generic levitra, online levitra. high penis potention tabs and pills. for long sex pills tabs apcalis oral jelly, caverta, cialis, cialis soft, eriacta, erectalis, female viagra, intagra, kamagra, kamagra
    soft, kamagra oral jelly, levitra, lovegra, suhagra, silagra, tadacip, tadalis, trial packs, viagra, viagra soft, viagra oral jelly, vigora, viagra super active, cialis super active. Cialis super active., viagra super active, vigora, viagra oral jelly, viagra soft, viagra, trial packs, tadalis, tadacip, silagra, suhagra, lovegra, levitra, kamagra oral jelly, kamagra soft, kamagra, intagra, female viagra, erectalis, eriacta, cialis soft, cialis, caverta, online levitra. high penis potention tabs and pills. for long sex pills tabs apcalis oral jelly, buy generic levitra, levitra online, buy levitra, cheap levitra, buy levitra online, order levitra online, online cialis generic levitra, buy generic cialis, cialis online, buy cialis, cheap cialis, buy cialis online, order cialis online, online viagra generic cialis, buy generic viagra, viagra online, buy viagra, cheap viagra, buy viagra online, order viagra online, levitra online generic viagra, cialis, ed medication viagra. http://www.buyviagracheapcialisorderlevitra.com/contact.htm
    Contact us http://www.buyviagracheapcialisorderlevitra.com/cialis.htm Cialis http://www.buyviagracheapcialisorderlevitra.com/cialis-soft.htm Cialis soft http://www.buyviagracheapcialisorderlevitra.com/kamagra.htm Kamagra http://www.buyviagracheapcialisorderlevitra.com/kamagra-oral-jelly.htm Kamagra oral jelly http://www.buyviagracheapcialisorderlevitra.com/levitra.htm Levitra http://www.buyviagracheapcialisorderlevitra.com/viagra.htm Viagra http://www.buyviagracheapcialisorderlevitra.com/viagra-soft.htm Viagra soft http://www.buyviagracheapcialisorderlevitra.com/caverta.htm Caverta http://www.buyviagracheapcialisorderlevitra.com/cialis.htm Cialis http://www.buyviagracheapcialisorderlevitra.com/cialis-soft.htm Cialis soft http://www.buyviagracheapcialisorderlevitra.com/eriacta.htm Eriacta http://www.buyviagracheapcialisorderlevitra.com/erectalis.htm Erectalis http://www.buyviagracheapcialisorderlevitra.com/female-viagra.htm Female viagra http://www.buyviagracheapcialisorderlevitra.com/intagra.htm
    Intagra http://www.buyviagracheapcialisorderlevitra.com/kamagra.htm Kamagra http://www.buyviagracheapcialisorderlevitra.com/kamagra-soft.htm Kamagra soft http://www.buyviagracheapcialisorderlevitra.com/kamagra-oral-jelly.htm Kamagra oral jelly http://www.buyviagracheapcialisorderlevitra.com/levitra.htm Levitra http://www.buyviagracheapcialisorderlevitra.com/lovegra.htm Lovegra http://www.buyviagracheapcialisorderlevitra.com/suhagra.htm Suhagra http://www.buyviagracheapcialisorderlevitra.com/silagra.htm Silagra http://www.buyviagracheapcialisorderlevitra.com/tadacip.htm Tadacip http://www.buyviagracheapcialisorderlevitra.com/tadalis.htm Tadalis http://www.buyviagracheapcialisorderlevitra.com/trial-packs.htm Trial packs http://www.buyviagracheapcialisorderlevitra.com/viagra.htm Viagra http://www.buyviagracheapcialisorderlevitra.com/viagra-soft.htm Viagra soft http://www.buyviagracheapcialisorderlevitra.com/viagra-oral-jelly.htm Viagra oral jelly http://www.buyviagracheapcialisorderlevitra.com/vigora.htm
    Vigora http://www.buyviagracheapcialisorderlevitra.com/viagra-super-active.htm Viagra super active http://www.buyviagracheapcialisorderlevitra.com/cialis-super-active.htm Cialis super active http://www.buyviagracheapcialisorderlevitra.com/sitemap.htm Sitemap http://www.buyviagracheapcialisorderlevitra.com/ Www.buyviagracheapcialisorderlevitra.com http://www.buyviagracheapcialisorderlevitra.com/ Viagra, cialis, levitra buy online, cheap generic viagra, online viagra, buy viagra online order viagra, cheap viagra online, order levitra, cialis online, buy cialis, buy levitra, cheap cialis, order cialis online. http://www.buyviagracheapcialisorderlevitra.com/sitemap.htm Online pharmacy sitemap } ) { . , ; ( - : online pharmacy http://your-online.100webspace.net/user-sites/ online pharmacy http://onlineph.blogbugs.org/ online pharmacy http://op-start.blogbugs.org/ online pharmacy http://helloblue.blogbugs.org/ online pharmacy Z:'
  replies: []
---

Eiffel inventor, Bertrand Meyer, gave an [interview on artima](http://www.artima.com/intv/serious3.html) recently. He makes reasonable points in the first two parts. And then he mentions Eiffel (which he never fails to do).

I learned Eiffel in college a long time ago and it was quite an ordeal.  I suspect the tools have improved quite a bit since then but the language itself remains a puzzling mix of very questionable design choices for an object-oriented languages, such as renaming imports a syntax that will make you miss C++.  A lot of these features made sense back then when we didn't know better and Java didn't exist, but I would argue that by now, we have a pretty good idea of which object-oriented concepts are sound and which ones should stay in the realm of academia.  As far as I can tell, Eiffel hasn't really learned these lessons as of today, but that's not the point of this posting.

Eiffel is vastly different from the C++/Java family of languages, and there are undoubtedly dozens of different things you could discuss in such an interview, but instead, Bertrand tries to make the point that assigning fields is evil:

> For example, in just about every recent object-oriented language, you have the ability, with some restriction, of directly assigning to a field of an object: `x.a = 1`, where `x` is an object, `a` is a field. Everyone who has been exposed to the basics of modern methodology and object technology understands why this is wrong. 

Well, no.  Just saying "everyone understands it's wrong" is not going to make it suddenly a reality.

Without even discussing whether this is a good point or not, reducing  most of the complexity of today's software base to this simple concept is laughable. And the quasi non-existence of Eiffel in the industrial world since its inception (almost twenty years now) doesn't seem to bother Bertrand Meyer at all about the validity of the choices he made when he designed Eiffel.

Eiffel sports some very amusing archaisms, such as the absence of overloading.  The justification is worth a read (from the [FAQ](http://www.faqs.org/faqs/eiffel-faq/)):

> Readability is also enhanced when overloading is not possible. With overloading you would need to consider the type of the arguments as well as the type of the target before you can work out which feature is called. With multiple inheritance and dynamic binding this is awkward for a compiler and error-prone for a human. 

"awkward for a compiler"?  Now that's a good one.  Code is code.  It might be a difficult problem to tackle, but refusing to implement overloading and choosing instead to support multiple inheritance of implementations makes me wonder about the sanity of the ISE engineers.

Even now, Bertrand Meyer is certainly still convinced that overloading is evil:

> This kind of apparent short-term convenience buys a lot of long-term complexity, because you have to find out in each particular case what exactly is the signature of every variant of an operation. 

Well, this is called a "paradigm shift".  And by the way, the paradigm shifted at least ten years ago, and I can guarantee that by now, programmers are pretty much used to read polymorphic overloaded methods.  Especially with modern IDE's.

Besides, I happen to know for a fact the original motivation for leaving overloading out of Eiffel (my teacher was a close friend of Bertrand Meyer).  Back then, Eiffel was generating C, and overloading is not supported in C.  Of course, it never stopped the original C++ compilers (cfront) from solving this problem, but it looks like the ISE engineers have decided that this problem was too hard for them.  And they haven't revisited their choice since 1985.

Finally, one last gem: 

> "if it looks too good to be true, then it must not be true," which is certainly the stupidest utterance ever proffered by humankind. This is the kind of cliche we hear from many people, and it's just wrong in the case of Eiffel.

Bertrand can rest assured: anyone who sees an Eiffel program for the first time will definitely not think "it's too good to be true". 

Eiffel inventor, Bertrand Meyer, gave an [interview on artima](http://www.artima.com/intv/serious3.html) recently. He makes reasonable points in the first two parts. And then he mentions Eiffel (which he never fails to do).

I learned Eiffel in college a long time ago and it was quite an ordeal.  I suspect the tools have improved quite a bit since then but the language itself remains a puzzling mix of very questionable design choices for an object-oriented languages, such as renaming imports and a syntax that will make you miss C++.  A lot of these features made sense back then when we didn't know better and Java didn't exist, but I would argue that by now, we have a pretty good idea of which object-oriented concepts are sound and which ones should stay in the realm of academia.  As far as I can tell, Eiffel hasn't really learned these lessons as of today, but that's not the point of this posting.

Eiffel is vastly different from the C++/Java family of languages, and there are undoubtedly dozens of different things you could discuss in such an interview, but instead, Bertrand tries to make the point that assigning fields is evil:

> For example, in just about every recent object-oriented language, you have the ability, with some restriction, of directly assigning to a field of an object: `x.a = 1`, where `x` is an object, `a` is a field. Everyone who has been exposed to the basics of modern methodology and object technology understands why this is wrong. 

Well, no.  Just saying "everyone understands it's wrong" is not going to make it suddenly a reality.

Without even discussing whether this is a good point or not, reducing  most of the complexity of today's software base to this simple concept is laughable. And the quasi non-existence of Eiffel in the industrial world since its inception (almost twenty years now) doesn't seem to bother Bertrand Meyer at all about the validity of the choices he made when he designed Eiffel.

Eiffel sports some very amusing archaisms, such as the absence of overloading.  However, contrary to Ruby's take on the subject, the justification is worth a read (from the [FAQ](http://www.faqs.org/faqs/eiffel-faq/)):

> Readability is also enhanced when overloading is not possible. With overloading you would need to consider the type of the arguments as well as the type of the target before you can work out which feature is called. With multiple inheritance and dynamic binding this is awkward for a compiler and error-prone for a human. 

"awkward for a compiler"?  Now that's a good one.  Code is code.  It might be a difficult problem to tackle, but refusing to implement overloading and choosing instead to support multiple inheritance of implementations makes me wonder about the sanity of the ISE engineers.

Even now, Bertrand Meyer is certainly still convinced that overloading is evil:

> This kind of apparent short-term convenience buys a lot of long-term complexity, because you have to find out in each particular case what exactly is the signature of every variant of an operation. 

Well, this is called a "paradigm shift".  And by the way, the paradigm shifted at least ten years ago, and I can guarantee that by now, programmers are pretty much used to read polymorphic overloaded methods.  Especially with modern IDE's.

Besides, I happen to know for a fact the original motivation for leaving overloading out of Eiffel (my teacher was a close friend of Bertrand Meyer).  Back then, Eiffel was generating C, and overloading is not supported in C.  Of course, it never stopped the original C++ compilers (cfront) from solving this problem, but it looks like the ISE engineers have decided that this problem was too hard for them.  And they haven't revisited their choice since 1985.

Finally, one last gem: 

> "if it looks too good to be true, then it must not be true," which is certainly the stupidest utterance ever proffered by humankind. This is the kind of cliche we hear from many people, and it's just wrong in the case of Eiffel.

Bertrand can rest assured: anyone who sees an Eiffel program for the first time will definitely not think "it's too good to be true".
