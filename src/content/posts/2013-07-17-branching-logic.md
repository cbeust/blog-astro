---
title: Branching logic
date: '2013-07-17T16:53:08'
slug: branching-logic
categories:
- General
comments:
- id: 9710
  author: Michael Lee
  date: '2013-07-17T17:56:08'
  content: Can you use a strategy pattern?  Inject "security check" strategy/behavior into runSomeLogic()?   This will make the code more testable as well.
  replies: []
- id: 9711
  author: Yonatan
  date: '2013-07-17T18:53:52'
  content: Your last method will also require you to define BOTH, and NONE in the Use and DontUse enum. Which will explode into more combinatorial when you add more flags.
  replies: []
- id: 9712
  author: Cedric
  date: '2013-07-17T19:39:13'
  content: '@Yonatan: not necessarily, I can just keep the signature with the same amount of parameters. I''m more turned off by the fact that these parameters are now all of the same type, so it''s definitely not an approach I would recommend, even if it reads nicely (its only good property, to be honest).'
  replies: []
- id: 9713
  author: Cedric
  date: '2013-07-17T19:40:12'
  content: '@Michael Lee: Sure, but that''s more heavyweight. Also, if the branching code appears in several places inside the gnarly code instead of just once, strategy becomes increasingly harder to apply.'
  replies: []
- id: 9714
  author: Antoine Toulme
  date: '2013-07-17T19:59:19'
  content: 'Allright, here is something I used in the past and I think works across languages.

    You can use binary masks (http://www.vipan.com/htdocs/bitwisehelp.html)

    So you declare first a bunch of constants:

    private static final int NONE = 0;

    private static final int MEMCACHE = 1 &lt;&lt; 1;

    private static final int SECURITY = 1 &lt;&lt; 2;

    Now you can call the method with:

    runSomeLogic(account, person, NONE); // can use 0 directly as well.

    runSomeLogic(account, person, SECURITY);

    runSomeLogic(account, person, MEMCACHE);

    runSomeLogic(account, person, MEMCACHE | SECURITY);

    In the method, you use the &amp; operator to find if the flag is in use.

    IIRC comparison with &amp; is very very fast. You can pile on flags in this int.'
  replies: []
- id: 9715
  author: Heiko Rupp
  date: '2013-07-17T22:20:26'
  content: 'That is the beauty in Objective C, which was there from the start and which I am missing in Java since I started with Java:

    [runSomeLogic withAccount:account onPerson:person useMemcache:no useSecurity:yes];

    built-in language construct that is also type safe and can be IDE-completed etc.'
  replies: []
- id: 9716
  author: Heiko Rupp
  date: '2013-07-17T22:22:17'
  content: 'Actually the syntax is a bit different than in #6

    [account runSomeLocicForPerson:person useMemcache:no...]

    The leftmost item is the receiving object - can''t edit my original comment'
  replies: []
- id: 9717
  author: J??r??me Mainaud
  date: '2013-07-18T00:59:19'
  content: "I would do something like\nenum Options {\n  MEMCACHE,\n  NO_SECURITY\n}\nvoid runSomeLogic(Account account, Person person, Options... options) {\n    EnumSet opts = EnumSet.copyOf(Arrays.asList(options));\n    // ...\n    if ( ! opts.contains(Options.NO_SECURITY)) {\n        // do security\n    }\n    if (opts.contains(Options.MEMCACHE) {\n        // do cache\n    }\n}\nThats the modern form of Antoine's binary masks."
  replies: []
- id: 9718
  author: Russ Egan
  date: '2013-07-18T02:07:44'
  content: "Another approach would be named args, ala ruby, python, groovy, etc:\n(python): run_some_logic(account, person, memcache: true, memcache_security: false)\nYet another would be wrapping the options in a simple class:\nclass LogicOptions {\n  boolean memcached = true;\n  boolean security = true;\n}\nrunSomeLogic(person, account, new LogicOptions(true, false))\nK, not sure that gets any more readable, but at least you can add options in a typesafe manner in the future, plus add validation into the options class."
  replies: []
- id: 9719
  author: Dave
  date: '2013-07-18T03:59:47'
  content: "I'd go with the fluent builder approach.\nnew LogicExecutor(account, person)\n    .withMemCache(true)\n    .withSecurity(false)\n    .run();"
  replies: []
- id: 9720
  author: Tracy
  date: '2013-07-18T08:45:22'
  content: Fluent builder was the best I could think of without taking too long of a break from work. Dave beat me to it (and saved me some time thinking how I'd build it).
  replies:
  - id: 9721
    author: Cedric
    date: '2013-07-18T08:48:28'
    content: '@Tracy, @Dave: the problem with the fluent builder is that it''s much more effective with constructors than regular method calls.'
    replies: []
- id: 9722
  author: Tracy
  date: '2013-07-18T09:41:50'
  content: Yeah, that's why I hadn't posted earlier. I wanted to think about it more. Damnit stop posting these things that make me want to bail on work and think about!
  replies: []
- id: 9723
  author: Tracy
  date: '2013-07-18T09:43:16'
  content: Camel's fluent API uses inheritence to make a nice API available to the coder but that doesn't work well here.
  replies: []
- id: 9724
  author: Maciej Pilichowski
  date: '2013-07-18T11:42:39'
  content: 'Since all languages are welcome...

    I am annoyed with this issue so much, that when I have to use C# I force myself to use named parameters. But when I design my own laguage Skila I addressed this problem at the very beginning introduced, surprise, surprise, forced named parameters.

    http://skila.pl/?page=/2013/05/20/named-parameters/

    So you can use booleans but you HAVE to name the parameters:

    def runSomeLogic(account Account, person Person, named useMemcache Bool, named securityCheck Bool);

    now such call is illegal in Skila:

    runSomeLogic(account,person,true, false);

    but this is OK:

    runSomeLogic(account,person,useMemcache:true, securityCheck:false);

    If you like this, bad news, Skila is not released (yet) -- working on it.'
  replies: []
- id: 9725
  author: Mark
  date: '2013-07-19T07:25:31'
  content: 'Well said, well written.

    My "however" is that this isn''t anything new.  In the context of this discussion, "true" and "false" aren''t really any different than any other mathematical constant:  There are more than enough techniques and/or patterns for properly substituting "magic numbers" -- of the earliest being C''s #define, even if that wasn''t type-safe or domain-safe.'
  replies: []
- id: 9726
  author: Brian Slesinsky
  date: '2013-07-19T19:29:54'
  content: 'In Go you could use a struct:

    run(account, person, Flags{cache: true, secure: true})

    See: http://play.golang.org/p/lE4wFf3N6F

    In Java it would have to be more like:

    RunFlags f = new RunFlags();

    f.cache = true;

    f.secure = true;

    run(account, person, f);

    Which seems not that bad for Java if you go against convention and use fields directly.'
  replies: []
- id: 9727
  author: Andy Lee
  date: '2013-07-20T03:10:47'
  content: 'The article reminds me of the following quote:  "The first thing they teach you in programming class is the "if" statement. You then spend your rest of your career trying to avoid it."

    https://twitter.com/cowboyd/status/343098848165634048

    In the past I have occasionally used similar tactics to those Mark eludes to:

    private final static Boolean WITH_CACHING = Boolean.TRUE;

    private final static Boolean WITHOUT_CACHING = Boolean.FALSE;

    This is obviously not type safe but is very explicit when reading code and means no additional commenting.

    I think this is equivalent to the enum suggestion ( - I guess you''d have to make the Use and DontUse enum implement the same interface though for it to work?)

    I don''t like the idea of passing a map of options because it is not type safe and is quite verbose in both the caller and callee .

    It''s more tempting to fight it using OOAD and DDD. Strategy patterns, fine grain services etc - things which will add a certain level of complexity and more classes. I abhor large classes so would rather use these.'
  replies: []
- id: 9728
  author: Rob Freundlich
  date: '2013-07-22T03:09:36'
  content: 'I prefer your CacheInfo and SecurityInfo enums solutions:

    1. It''s extremely clear and unambiguous for both the author of the method and the caller

    2. It''s pretty lightweight

    3. It''s consistent with what you''d do for other types of parameters such as ints and strings.  The fact that there are only two values for each parameter and that they could therefore be thought of as boolean doesn''t mean you *have* to think of them as boolean.'
  replies: []
- id: 9729
  author: Robert Konigsberg
  date: '2013-07-23T03:39:04'
  content: "I haven't read other replies in detail, but you may consider\nenum Features {\n  SECURITY,\n  CACHING\n}\nvoid run(x, y, Features... features);\nwhich lets you extend the set of binary options in a familiar pattern and uses less code. For simplicity's sake, you can then throw the Features into a Set\nSet Features = EnumSet.of(features) and check for set membership. Depending on your performance needs this may be undesirable."
  replies: []
- id: 9730
  author: Miroslav Pokorny
  date: '2013-07-23T23:34:00'
  content: 'I think the problem is two originally boolean params exist at all. These should be present on the operation method aka runSomeLogic but rather should be used as a selector to pick the appropriate Stuff class. Clients who call this method should not be messing about with these options they should be given a Stuff class with the right internals set from the beginning.

    The simple q for me, is how or should any client ever change these parameters. I think its safe to say they will hard coded and your examples sort of show this in that you use constants instead of a fake method to source both.'
  replies: []
- id: 9731
  author: Jason Cheatham
  date: '2013-07-25T08:39:31'
  content: "Use Groovy:\nclass LogicParameter {\nAccount account\n Person person\n boolean useMemcache\n boolean securityCheck\n}\nrunSomeLogic(new LogicParameter(account:account, person:person, useMemcache:true, securityCheck:true));"
  replies: []
- id: 9732
  author: PJ
  date: '2013-07-25T15:16:45'
  content: "Enums are fine, but some of this is word choice.  Instead of 'CacheInfo.USE' and 'SecurityInfo.DONT_USE' you can do like 'Memcache.ENABLED' and 'Security.DISABLED'.\nAlternately could you perhaps be more functionalish and 1) predefine some caching/security methods/objects that you then 2) use as parameters. First off this removes the if() in the code (turns it into use of the interface)and secondly it's more readable:\nrunSomeLogic(account, person, MemCacheInterface, SecurityInterface)\n{\nif (SecurityInterface(account, person)) {\n    throw new failure()\n}\n...\nMemCacheInterface.cache(key, value)"
  replies: []
- id: 9733
  author: Ron Lugge
  date: '2013-08-09T10:37:03'
  content: To expand on Heiko Rupp's reply, the real solution is to adapt the languages to people, not the other way around.  Objective-C's real strength isn't that it belongs to apple, it's that it focuses on taking object-oriented code and adapting it to be more easily worked with by humans.  I actually wrote a blog post (http://ronlugge.net/?p=21) on this, but the trackback to here apparently didn't work.
  replies: []
- id: 9734
  author: Xavier Combelle
  date: '2013-09-30T08:18:00'
  content: "as any language welcome, in python3\nI would use keyword only arguments\ndef runSomeLogic(account,person,*, useMemcache,securityCheck):\n     ...\nto be used like this\nrunSomeLogic(account, person, useMemcache=True, securityCheck=False)"
  replies: []
- id: 9735
  author: Arguments bool??ens et lisibilit?? du code | Vlord
  date: '2013-10-03T08:49:20'
  content: '[&#8230;] Cet article est une synth??se de celui de C??dric Beust (d??veloppeur de TestNG et JCommander entre autres) :??http://beust.com/weblog/weblog/2013/07/17/branching-logic/ [&#8230;]'
  replies: []
- id: 9736
  author: Bill K
  date: '2013-12-04T09:55:29'
  content: 'I might be missing part of the point, but it seems like a good case for either making subclasses or delegating.

    If  you have methods for cache() and securityCheck() that are no-ops in your main class, you could extend that class to implement some more specific behavior.  The calls could even be more general and allow different behaviors.

    Of course, extends isn''t the best solution because it''s inflexible so unless it was a perfect fit you should instead pass in an interface with those two methods and delegate to it.'
  replies: []
- id: 9737
  author: Bill K
  date: '2013-12-04T11:12:22'
  content: 'Now that I''m back from lunch I can restate the above more clearly..

    You could make the "Memcache" object a reusable plugin that you set on the object containing the method--that seems much more clean and obvious--if you set a memcache with empty methods nothing happens, if you set one with a given implementation it would automatically pick it up.

    Another way to look at it: is a single object that handles this work AND the caching AND the secuity a good example of the SRP?'
  replies: []
---

How does the following code make you feel: 
    
    
      runSomeLogic(account, person, true, false);
    

? 

Me? Annoyed. 

I wish we could do away completely with this kind of code but I've come to the conclusion that such calls are unavoidable for a simple reason: 
    
    
      private void complexStuff() {
        // ... gnarly code here...
        if (some condition) {
          doA
        } else {
          doB
        }
        // ... more gnarly code...
      }
    

Accepting branching parameters in the signature is a good way to minimize the amount of duplication that you will write, however, this doesn't mean that you need to expose your callers to this implementation detail, or at least, that you can do it in a safer way than using naked booleans. 

There is a whole spectrum to cover such cases, and the example above sits at one end of it. Let's see if we can enumerate the alternatives. 

Let's start with the lazy way, which doesn't require any code change: 
    
    
      runSomeLogic(account, person,
            true /* use memcache */,
            false /* no security check */);
    

This gives me a better sense of what the code is doing but it's still error prone since comments are easily forgotten. Can we get the compiler to help us? 
    
    
      /** Never call this, call the overloaded helper methods */
      private void runSomeLogic(Account account, Person person, boolean useMemcache,
          boolean securityCheck) { ... }
      public void runSomeLogicNoCacheSecurity(Account account, Person person) {
        runSomeLogic(account, person, false, true);
      }
      public void runSomeLogicCacheSecurity(Account account, Person person) {
        runSomeLogic(account, person, true, true);
      }
      // ... you get the idea
    

A bit better and the compiler will keep us honest, but you can see the combinatorial explosion here: each new boolean forces you to multiply the number of methods by two. Not really scalable. One way to make it scalable is to prevent more than one boolean parameter, but this is really just kicking the can down the road. 

Maybe booleans are the problems, how about something more descriptive? 
    
    
      enum CacheInfo {
        USE,
        DONT_USE
      }
      enum SecurityInfo {
        USE,
        DONT_USE
      }
      runSomeLogic(account, person, CacheInfo.USE, SecurityInfo.DONT_USE);
    

This looks somewhat better: it's both enforced by the compiler and readable, although maybe we can improve on that by creating one big enum instead of plenty of tiny ones: 
    
    
      enum Use {
        MEMCACHE,
        SECURITY
      }
      enum DontUse {
        MEMCACHE,
        SECURITY
      }
      runSomeLogic(account, person, Use.MEMCACHE, DontUse.SECURITY);
    

The cost is two uber enums that everybody needs to import but the code reads more fluently. The downside of this approach is that we've weakened static guarantees considerably: it's now possible to pass a `Use.MEMCACHE` where a security configuration setting is expected. 

Can you think of other ways to approach this problem? (all languages welcome)
