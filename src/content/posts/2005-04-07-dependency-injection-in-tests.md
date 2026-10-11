---
title: Dependency injection in tests
date: '2005-04-07T10:25:33'
slug: dependency-injection-in-tests
categories:
- Java
comments:
- id: 3364
  author: Emmanuel Pirsch
  date: '2005-04-07T12:00:11'
  content: 'Please... not another configuration file! Now I need 3 files to configure one test.

    You know, I really liked this quote : "Basically, what you are doing here is spreading your b-u-s-i-n-e-s-s logic into both Java and XML for no apparent reason and some quite obvious drawbacks." (I let you guess the author)

    I will just replace "b-u-s-i-n-e-s-s" with "test" in the previous quote!

    It seems that with framework like Spring, the goal is to extract spagetti from the code and put it in configuration files.

    That''s why I like pico/nano container a lot more than Spring. There is no need to learn something new to configure your stuff (it''s the only IoC that is lightweight in the sense that Camron Purdy put it : http://www.jroller.com/page/cpurdy/20050407#defining_light_weight)

    I agree that passing argument to a test method is a nice way to specify dependencies for a specific test... But please, don''t add another layer of xml configuration file to dot it.

    I believe a Pico like approach should be used to configure the test container :

    picoLike.registerComponentImplementation(UserDAO.class, TestUserDAOImpl.class);

    Then the test container should look at test method arguments and call the method with the appropriate implementation. Lets call it argument based injection (or type 4 DI) ;-).

    If a particular test method needs a specific implementation you could have :

    picoLike.registerComponentImplementation(UserDAO.class, SpecificUserDAOImpl.class, "MyTestClass.testSomething");

    (ps: it looks like b-u-s-i-n-e-s-s don''t pass the incredibly annoying "objectionable content" detector ;-) )'
  replies: []
- id: 3365
  author: eu
  date: '2005-04-07T12:50:11'
  content: 'It would make more sence to put these annotations right into the method parameters. That will solve all stupid cases when you have 20 dependencies all of the same type... :-)

    However the huge disadvantage of such approach is that you have to repeat these declarations for each and every test method. From this point it is better to have dependencies as fields, because you declare them only once (less coding and easier to change/refactor).'
  replies: []
- id: 3366
  author: Robert Watkins
  date: '2005-04-07T14:08:25'
  content: 'Cedric,

    Is there any reason you couldn''t give the option of putting the "spring-bean-name" directly in the annotation? As well as the config file (where it would override the annotation)?

    Also have to agree with eu; make this an option on the class as well (via the constructor)'
  replies: []
- id: 3367
  author: Ara Abrahamian
  date: '2005-04-08T01:58:52'
  content: 'I like your approach :)

    But the parameter tag in testng.xml is redundant. Just define the bean name in the annotation.

    Btw the config file must let the user specify a list of *context.xml files. So for example, I would add all the context files of my app to the list but substitute hibernateSessionContext.xml with testHibernateSessionContext.xml which connects to the in-memory hsql instead of Oracle. It would also be nice to be able to define these context files per test group. So one group would load one set of specific context files and the other one another set.

    TestNG is indeed much better than JUnit, and I would have switched to it if only there was an IDEA plugin...

    Ara.'
  replies: []
- id: 3368
  author: Ara
  date: '2005-04-08T02:00:28'
  content: 'I like your approach :)

    But the parameter tag in testng.xml is redundant. Just define the bean name in the annotation.

    Btw the config file must let the user specify a list of *context.xml files. So for example, I would add all the context files of my app to the list but substitute hibernateSessionContext.xml with testHibernateSessionContext.xml which connects to the in-memory hsql instead of Oracle. It would also be nice to be able to define these context files per test group. So one group would load one set of specific context files and the other one another set.

    TestNG is indeed much better than JUnit, and I would have switched to it if only there was an IDEA plugin...

    Ara.'
  replies: []
- id: 3369
  author: Sam Newman
  date: '2005-04-08T06:01:56'
  content: 'Biggest problem? Your tests become non-obvious. Test data is being decalared elsewhere and passed in - net result you''re not 100% what you are testing. Tests should confirm your code works, and ideally act as an example of how to use your code - they should be a living document (although I hate myself for saying this, see what Fowler has to say on the subject: http://www.martinfowler.com/bliki/CodeAsDocumentation.html)'
  replies: []
- id: 3370
  author: Keith Donald
  date: '2005-04-08T08:43:12'
  content: 'Ara''s solution would''ve been better had he asked the container to do the test wiring for him, by asking the container to "autowire by type", matching parameter types on setters to a single instance of that type in the registry.  This is arguably still magical, but it''s behaivior is very deterministic in terms of what the container will do here: it''ll either hand you an instance of the right type if one exists, or it''ll fail if non exist or more than one exist.  In my experience, this works well, particularly in helping allieviate the limitations of JUnit for integration testing.  In this case, you can also reuse the same configuration between production and test environments, so no duplicate config is required for integration testing.

    Please note I said "integration testing." This kind of dependencing wiring, hooking in beans produced by a factory is only appropriate there.  It is not appropriate for standalone unit testing.

    Cedric - I like where you''re going with TestNG - I''m lookin forward to trying it out, Colin I know is already ready for the Spring team to make the switch :-)

    Cheers,

    Keith'
  replies: []
- id: 3371
  author: Colin Sampaleanu
  date: '2005-04-08T09:02:56'
  content: 'I just want to point out that Spring has actually since early last summer included a very convenient built-in enhanced version of Ara''s original ideas.

    This would be the AbstractDependencyInjectionSpringContextTests and subclasses such as AbstractTransactionalSpringContextTests. You subclass one of these base tests classes, and by default your dependencies get injected into the test class by setter injection, using byType matching. On that basis, you can have as many private fields as you want in the test, and the dependency injection won''t interfere with them. You can also override this to do field injection instead (similar to Ara''s original approach), matching by name.

    What is nice about the AbstractTransactionalSpringContextTests subclass is that it will automatically wrap each test method with a transaction (the transaction manager is injected into the base class). By default the tx will roll back after each test, but this is overridable by the test calling a setComplete() method. This means tests can play around as much as needed with database data without having to worry about messing it up for the next test.

    The net result is that for most integration style tests I''ve been writing lately, pretty well _all_ the code in the test classes is about test logic.

    I think given TestNG''s enhanced capabilities, some more powerful variations of this kind of stuff is definitely worth thinking about.

    Colin'
  replies: []
---

I came across this [old entry from Ara about dependency injection in tests](http://www.jroller.com/page/ara_e/20040717).

The idea is to define your beans in XML with a framework like Spring and then use his decorator to inject the beans inside your tests.  The problem with this approach can be summed up in three words:  "too much magic".

Ara's solution uses reflection to enumerate the fields in your test class and match them against the name of the bean as declared in your XML file.  Another problem with this approach is that you need to declare this field inside your class whereas only a few methods might need it, but I agree that JUnit doesn't leave you much choice there.

I believe a better solution is simply to pass the resolved bean as a parameter to the test method.

Ara's test case can then simply be rewritten like this:

> public void testSomething(UserDAO userDao) throws Exception {  
>    userDao.createAdmin();  
>  } 

The advantages of this approach are:

  * No more reflection magic and mysterious naming.
  * `userDao` is scoped to the method that uses it, which makes for better isolation.
  * Uses the standard Java way to pass parameters.
  * No need to declare it as a field.



Now, how do we get the testing framework to pass this parameter to the method?

It's pretty easy to do with TestNG, but as of today, passing parameters is limited to primitive types (no XML bean support such as in Spring), so TestNG only solves half of this problem.

In the future, I am definitely considering adding support for Spring's bean factory so that the limitation to primitive types can be entirely lifted.  Then we could have:

> @Test(parameters = { "user-dao" })  
>  public void testSomething(UserDAO userDao) throws Exception {  
>    userDao.createAdmin();  
>  }

and in testng.xml:

> <parameter name="user-dao" spring-bean-name="user-dao-bean">

The good thing about this approach is that it leverages a well-known and robust framework, but we now have two indirections (one Java file and two XML file), so another possibility would be to offer bean support in `testng.xml` itself:

> <bean name="user-dao-bean">  
>      <property name="userName" value="Cedric" />  
>  </bean>  
>  <parameter name="user-dao" bean-name="user-dao-bean">

Whatever solution we eventually support, I think that passing parameters to test methods is a very important feature that has been overlooked for too long.
