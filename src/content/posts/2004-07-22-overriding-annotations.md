---
title: Overriding annotations
date: '2004-07-22T08:24:41'
slug: overriding-annotations
categories:
- General
comments:
- id: 1823
  author: Val
  date: '2004-07-23T00:48:18'
  content: http://radio.javaranch.com/channel/val/2004/07/23/1090568800000.html
  replies: []
- id: 1824
  author: Bill Burke
  date: '2004-07-23T06:36:32'
  content: 'Cedric,

    Hey, just wanted to refute some of your comments. :)

    You wrote:

    "if you rename this method in your Java code, you need to remember to update the fragile string in your deployment descriptor"

    I don''t see this problem going away with your suggestion.  Your proposal still needs:

    a) The method name

    b) the Annotation name

    c) The annotation''s member value name

    d) The annotation values themselves

    Also, your approach doesn''t handle overriden methods.  (void foo(int), void foo(double), etc...).  I''ll will blog about my proposal and post the link here.'
  replies: []
- id: 1825
  author: Bill Burke
  date: '2004-07-23T06:50:01'
  content: 'Another comment I wanted to make is that your proposal is solely about overriding annotations.  I think there absolutely positively needs to be the ability to define/add/insert annotation definitions in XML as well.  The use case is in Entity beans where you will want to define column/table mappings on a per deployment basis.  Same goes for IDGenerators, etc.. that may be different per vendor DBMS.

    Bill'
  replies: []
- id: 1826
  author: Bill Burke
  date: '2004-07-23T07:16:57'
  content: 'Ok, I''m flooding you sorry... but here''s my blog on this:

    http://jboss.org/jbossBlog/blog/bburke/?permalink=XML+overrides+for+EJB3.html'
  replies: []
- id: 1827
  author: Cameron
  date: '2004-07-23T08:29:22'
  content: There's no problem in computer science that can't be solved by yet another level of indirection.
  replies: []
- id: 1828
  author: Jason Carreira
  date: '2004-07-23T10:47:35'
  content: So we wanted to replace the complexity of having meta data in external XML files with annotations... now we need meta-meta-data in external XML files to describe the changes we'd like to make to our meta-data. Nice.
  replies: []
- id: 1829
  author: Laurent Etiemble
  date: '2004-07-24T08:14:07'
  content: http://www.jroller.com/page/letiemble/20040724#overriding_annotations
  replies: []
- id: 1830
  author: Val
  date: '2004-07-25T23:46:23'
  content: 'Some feedback as promised: http://radio.javaranch.com/channel/val/2004/07/26/1090824307000.html

    ;)'
  replies: []
---

While annotations have been very well received by the community, I have repeatedly been asked at JavaOne about the possibility of overriding certain annotations later during the cycle (at deployment time).

Here are a few thoughts on this subject.  
   
The overriding is specified in an external XML file which could look like this:  

```xml
<override>
  <annotation-class names="javax.ejb3.TransactionAttribute" />
  <scope>
    <package names="com.foo" />
    <class names="Account" />
    <method names="deposit withdraw" />
  </scope>
  <overridden-values>
    <value name="value"
           old-value="javax.ejb3.TransactionAttributeType.SUPPORTS" />
           new-value="javax.ejb3.TransactionAttributeType.REQUIRED" />
  </overridden-values>
</override>
```

An override is specified with three parameters:

  1. What annotation type is being overridden .
  2. Hani pointed out that he didn't like space-separated names, which I tend to agree with.
  3. The syntax should allow for regular expressions, including the possibility to exclude certain patterns.
  4. The scope of the override (which Java elements are impacted:  package, class, method, field, etc...).
  5. Which values are overridden and what the new values are.



Notice in the file above that "names" is plural, so you can specify several space-separated elements each time.  
   
Anything under a scope is "and'ed" together.  In the example above, only methods named "deposit()" and "withdraw()" inside the class com.foo.Account will be candidates for overriding.  We could imagine having several <scope> stanzas to specify that an "or" should be used instead.  
   
The <overridden-values> stanza specifies the new values that need to be applied to the Java elements targetted by the <scope> stanza.  The first part must be a valid name of the annotation type (TransactionAttribute.value() in this example).  Optionally, you can specify an old-value in order to further restrict the scope of the overriding.  In the above example, overriding will only apply if the targetted element has a current transaction attribute "SUPPORTS".  If it doesn't, the override will not happen.  
   
The matching of the values in the XML file to the actual enum type can be performed through reflection, including enums, since it is possible to retrieve a String version of each enum value.  
   
The API could probably be very similar to the existing one:

```java
AnnotationOverrider ao = new AnnotationOverrider("override.xml");
Method m = ...;  // retrieve the method
TransactionType oa = ao.getAnnotation(m, TransactionType.class);
// oa.value() now contains the overridden annotation
```

Here are some open questions/concerns that have come up so far:

  * We should be able to override defaults as well.  
 
  * Should we make it possible to insert annotations and not just override existing ones?  
 
  * Specifying compound values could be problematic.  
 
  * Is the syntax too verbose?  For example, Bill Burke is suggesting to insert entire Java snippets to identify the targets:  

```xml
    <annotation method="public void setEM(javax.ejb.EntityManager)">
    @javax.ejb.Inject
    </annotation>
```

I personally think that writing Java code in an XML file is a very strong design smell, and it's a step backward since we are reintroducing redundancy in the programming model (if you rename this method in your Java code, you need to remember to update the fragile string in your deployment descriptor). 

Please let us know what you think.
