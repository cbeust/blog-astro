---
title: The Return of the AOP Caching Challenge!
date: '2005-04-19T10:38:08'
slug: the-return-of-the-aop-caching-challenge
categories:
- Java
comments:
- id: 3475
  author: Alex
  date: '2005-04-20T03:05:01'
  content: 'Hello Cedric,

    I created Wanghy-Cache which is an abstraction layer to multiple cache implementations. It uses AOP to cache and flush method result based on method signature and parameters hash key and can use annotations to enable caching and cache flushing.

    What do you think?

    Best regards,

    Alex.'
  replies: []
- id: 3476
  author: Alex
  date: '2005-04-20T03:06:06'
  content: 'Forgot the link :)

    http://wanghy.sourceforge.net/cache/index.html'
  replies: []
- id: 3477
  author: Max
  date: '2006-12-21T15:44:09'
  content: 'http://www.addlink.pl/strona,pozycjonowanie_reklama_stron_internetowych,322.html

    http://katalog.wpadki.com/inform-407.html

    http://www.promocja24.info/pozycjonowanie-info-139.html

    http://www.spv-centrum.info/pozycjonowanie---reklama-stron-internetowych-i-1928.html

    http://katalog.webtodate.pl/pozycjonowanie-info-86.html

    http://www.seocity.info/internet/pozycjonowanie-stron-www/pozycjonowanie-l98.html

    http://katalog.wyszukajto.info/pozycjonowanie-stron-i-268.html

    http://katalog.nimek.info/szczegoly-117.html

    http://www.katalog.mypenpals.info/szcz_155.html

    http://katalog.borkowscy.pl/strona-5653.html

    http://seo.bydgoszcz.pl/pozycjonowanie-info-69.html

    http://nowy.qlwebik.info/pozycjonowanie-info-498.html

    http://katalog.pe4.org/38.Pozycjonowanie

    http://seo.malopolska.pl/info-16.html

    http://katalog-stron.wfe.pl/info-2794.html

    http://hotele.name/info-24.html

    http://nie1.info/info-41.html

    http://kat.internetdsl.pl/index.php?m=3&wpis=7

    http://katalog-stron.wfe.pl/info-2794.html

    http://www.katalog.motonews.net/info-130.html

    http://www.ikatalog.net/info-22115.html

    http://www.fregata.info/katalog/info-852.html

    http://www.katalog2.tapety4u.be/pozycjonowanie-info-14.html

    http://tlen4.one.pl/szcz-81.html

    http://www.katalog.winka.net/szcz-1247.html

    http://www.katalog.imagica.com.pl/info-96.html

    http://katalog.seofriendly.pl/detail/link-27.html

    http://www.kps.pl/pozycjonowanie-reklama-stron-internetowych_2871.html'
  replies: []
---

An [ interesting article on caching with Aspect-Oriented Programming](http://www.theserverside.com/articles/article.tss?l=ObjectCachingWithAOP) was just published on TheServerSide, and while it does a decent job at benchmarking and describing the infrastructure, I have a few issues with some of the aspect-related material it covers.

Here are a few comments:

> it's not easy to turn caching on or off dynamically when it's part of your business logic 

It should be configurable externally.  You don't need AOP to branch conditionally and disable (or alter) your caching logic at runtime.  Most of the EJB and web containers that I know have been providing this kind of functionality in XML files for quite a while.

> it's not easy to turn caching on or off dynamically when it's part of your business logic 

True, so it's quite surprising that Srini's own solution still falls in this trap anyway (see below).

> The cached data is released from memory (purged), by implementing a pre-defined eviction policy, when the data is no longer needed. 

I disagree with the "pre-defined" (sic) part.  Eviction policies should absolutely be configurable at runtime, even more so than caching activation itself.  Adjusting the eviction policy is a big part of fine-tuning and optimizing an application, and you need as much flexibility in terms of strategies (round-robin, last used first, timeouts, evict biggest first, etc...) as possible.

Except for these points, Srini does a good job at framing the overall problem and he makes a convincing case to use AOP for caching.  However, caching with AOP is a very complicated thing to achieve, and a couple of years ago, I offered an [AOP caching challenge](http://www.beust.com/weblog/aop-thread.html) that turned out to to be much harder to solve than everybody thought initially (including myself).

Srini's pointcut is the following:
    
    
    List around(String productGroup) : getInterestRates(productGroup) {
    

The problem with this approach is that it explicitly references a method in the business code.

Not only is this dangerous because you are increasing the coupling in your code (and I'm assuming that refactoring will take care of modifying the aspect, should you decide to rename or modify the `getInterestRates()` method), but it's actually impossibly to scale.  As the number of methods you want to cache increases, you need to remember to update the pointcut to include the newcomers, and this will clearly fall apart very quickly.

Srini is falling in the same trap as the people who tried to solve the AOP Caching Challenge fell into:  not enough abstraction, too much coupling.

As Srini said himself above, caching is completely independent of domains, and this fact should be reflected in the pointcuts you use.  The above pointcut is **not** independent from the domain model it applies to.

You should be able to determine a trait that "methods that can be cached" share and use this as your pointcut.  I can think of two ways to solve this problem:

  * Decide that any method that takes a string as a key and returns a value can be cached (potentially dangerous since you could get false positives, but this could be alleviated with naming conventions).
  * Use annotations to indicate when a method can be cached.



I think the annotation-based solution is the best compromise in this case, since it makes you independent of naming conventions and doesn't require any modification of your pointcuts as your code base grows.  Also, the burden on developers is minimal since all they need to remember is to add an annotation whenever a method can be cached.

You can also imagine more annotation schemes that would allow for a better partitioning of your caching:
    
    
    @Cacheable(category = "datasources")
    public DataSource getDataSource(String driverName);
    @Cacheable(category = "db.accounts")  // "use the cache for rows in table ACCOUNTS"
    public Account findAccount(String customerName);

Jonas and Alex, from AspectWerkz, and Ramnivas Laddad, the author of "AspectJ in action" have published a [series](http://www.ibm.com/developerworks/java/library/j-aopwork3/) [of](http://www-128.ibm.com/developerworks/java/library/j-aopwork4/) [articles](http://www-128.ibm.com/developerworks/views/java/libraryview.jsp?search_by=AOP@work:) on annotation-based AOP with AspectJ/AspectWerkz which I strongly recommend.

Regardless, this is an interesting contribution to the problem of AOP-based caching in general, but it goes to prove -- again -- that even two years later, we still haven't quite figured how to solve this problem optimally.
