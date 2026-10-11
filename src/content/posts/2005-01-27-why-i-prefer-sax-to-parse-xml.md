---
title: Why I prefer SAX to parse XML
date: '2005-01-27T06:40:03'
slug: why-i-prefer-sax-to-parse-xml
categories:
- Java
comments:
- id: 3036
  author: Christophe
  date: '2005-01-27T07:01:44'
  content: Well, I agree that SAX is the best solution in most cases. The only cases where I rely on the DOM is when I really need a tree representation of my XML (like to apply CSS styling). In that case going through SAX would anyway result in building the tree...
  replies: []
- id: 3037
  author: Ben Galbraith
  date: '2005-01-27T07:35:52'
  content: 'You really ought to take a look at StAX, especially since it came out of BEA when you were still there. Think of the Collections API''s Iterator interface crossed with SAX''s ContentHandler contract and you get sort of an idea.

    Much more convenient API than SAX; makes it easier to create reusable parser utility methods, etc.  Unlike SAX, you can actually stop the parsing process any time without throwing an Exception.

    Check out:

    http://dev2dev.bea.com/technologies/stax/index.jsp

    http://jcp.org/en/jsr/detail?id=173

    Best,

    Ben'
  replies: []
- id: 3065
  author: Euxx
  date: '2005-01-27T08:09:57'
  content: '<strong>Parsing and Processing Large XML Documents with Digester Rules.</strong>

    My article "Parsing and Processing Large XML Documents with Digester Rules"  has been published  at ONJava.com.'
  replies: []
- id: 3038
  author: Mike Poindexter
  date: '2005-01-27T08:20:46'
  content: I agree, DOM is very inefficient.  We had a product at work that routed and transformed XML documents, but to do this it built DOMs(It also built the DOM 3 times at the minimum before it was done with it, but that's a different story).  When it came time to write an application which needed XML routing and transformation, we initially tried to use this product.  After watching it keel over under minimal load (gee, who'da thunk), it was back to the drawing board.  Since we had to deal with large XML documents, with many elements with the same name with different parents, I wrote a simple framework which would fairly efficiently allow you to register a callback on a particular element using a basic subset of XPath.  Works quite fast, and has none of the tedious context building that I'd come to associate with using SAX.
  replies: []
- id: 3039
  author: dolapo
  date: '2005-01-27T08:22:01'
  content: 'I personally find SAX code harder to maintain because of all the state-tracking you have to do when handling complex documents.

    Is there any active development on the StAX JSR? I was hoping it would make 5.0, but I guess we''ll have to wait.'
  replies: []
- id: 3040
  author: Koen
  date: '2005-01-27T08:34:43'
  content: 'I recently started to use StAX, and I must say I like it. It''s very simple, fast and easy to use (but maybe that''s the same as simple?) ;)

    Anyways you should check it out.'
  replies: []
- id: 3041
  author: kevin bourrillion
  date: '2005-01-27T08:35:14'
  content: Did I hear somewhere that JDK 5 would bundle support for xpath?  Now, that would rock.  Using xpath makes stuff easy as hell.
  replies: []
- id: 3042
  author: Sualeh Fatehi
  date: '2005-01-27T08:47:42'
  content: I avoid low-level parsing completely, and use something like Castor to map XML into my Java objects.
  replies: []
- id: 3043
  author: Emmanuel Pirsch
  date: '2005-01-27T09:06:12'
  content: 'I think that instead of doing all this by coding a sax event handler which will get a lot more complicated when the document to parse it a bit complex. You better to create your object creation rules using common-digester. You have best of both world, you keep you logic in just one place and you get the effeciency of SAX. Because you can create rules that depends on a tag parent tag, you get a really clean way to parse your XML files.

    Another way to make thing a bit cleaner, is to use a stack. To maintain your objects while parsing.

    This way, when you encounter a vampire-* tag, you can create the appropriate Vampire* object and put it on the stack. Then, if the Vampire* type all implement a common interface for the firstName and lastName property, then you just cast the stacked object to the proper common type and call the setters. If they do not implement a common interface, then you can use the common-beanutils to assign the property base on it''s name (assuming the property on both object have the same name). (This is very similar to how the digester work).'
  replies: []
- id: 3044
  author: Bernhard Walliser
  date: '2005-01-27T09:06:46'
  content: I also prefer StaX.
  replies: []
- id: 3045
  author: Howard M. Lewis Ship
  date: '2005-01-27T09:41:38'
  content: 'I agree ... I like SAX.  For Tapestry 3.0, I used Digester on top of SAX.  For 3.1 (and in HiveMind) I just have my own state machines consume the XML and churn out my objects directly. Speed is great, as is control over error messages (something a valid*ting parser takes away from you).

    Cedric: you''re blog post filters are a bit extreme!'
  replies: []
- id: 3046
  author: Anthony Eden
  date: '2005-01-27T11:17:41'
  content: 'FYI: Your code is incorrect since you are asking for the attribute "name" but in your documents the name of the attribute is "value".

    I like SAX a lot too, especially when dealing with poorly formed documents (i.e. HTML in the wild).  HotSax does a really good job of dealing with this because it doesn''t care about well-formedness of documents.'
  replies: []
- id: 3047
  author: Ben Galbraith
  date: '2005-01-27T13:28:52'
  content: 'I should have read your entire post before suggesting StAX in my earlier post.  Yes, StAX is easier than SAX and would probably be a better fit for your solution.  But as Kevin said, there''s a *much* better way.

    Parse your XML as a JDOM tree and use its built-in XPath support to select what you want.

    The code would be:

    Document jdomDoc = new SAXBuilder().build(new File("my.xml"));

    String name = XPath.newInstance("/project/members/vampire-slayer/first-name/@value").valueOf(jdomDoc);

    That''s pretty easy.  If the document is fairly small, you might also consider the more compact:

    String name = XPath.newInstance("//vampire-slayer/first-name/@value").valueOf(jdomDoc);

    If you''re using JDK 5, you can do XPath over DOM nodes, too. That would be:

    String name = XPathFactory.newInstance().newXPath().evaluate("//vampire-slayer/first-name/@value", domTree);

    XPath blows away hand-coded stream parser solutions for ease-of-use.  Some may make the argument that it would be materially slower than SAX/StAX. Sure, parsing the XML into a tree is expensive, and the XPath execution has a cost, but unless you''re creating high-volume production systems where you have to extract maximum performance, I doubt it will have a material impact.

    RE: commenter who asked about StAX JSR activity.  There are at least three StAX implementations I''ve seen, and I believe more are in the works.  It''s here to stay, regardless of whether it gets picked up in J2SE 6 (and I''d bet it will).

    RE: J2SE 5 XPath API.  The API is decoupled from the underlying object model, but I''m not aware of any JDOM implementation ATM.  It would be trivial to wrap Jaxen (an XPath engine that supports JDOM) to comply with JDK 5 XPath API -- perhaps this has already been done by someone somewhere.'
  replies: []
- id: 3048
  author: eric
  date: '2005-01-28T02:17:18'
  content: 'I totally agree with Kevin and Ben. For me XML shows its real strength when used with XPath.

    XPath allows to transform a tree walk problem into a simple "request" definition.

    Personally, I often prefer to use XPath instead of XML binding tools when I have to manipulate read-only XML data .'
  replies: []
- id: 3049
  author: Nelson
  date: '2005-01-28T08:05:13'
  content: 'I find SAX confusing, but then again I don''t like writing state machines. The problem with DOM is the standard API is so hideously wordy and convoluted. Neither API is fit for humans.

    Cedric, you work too hard. XPath and Python are the way. Here''s an example:

    >import xml.dom.minidom

    >from xml import xpath

    >doc = xml.dom.minidom.parse("lousyShow.xml")

    >for name in xpath.Evaluate(''//first-name/@value'', doc.documentElement):

    >    print name.value

    More about Python and XPath here:

    http://www.nelson.monkey.org/~nelson/weblog/tech/python/xpath.html'
  replies: []
- id: 3050
  author: Frank Harper
  date: '2005-01-28T08:47:27'
  content: 'LOL!

    Cedric did you choose your examples on purpose so that ads for "Gothic Dating", and "Buffy Merchandise " would appear on your blog???

    I guess it just goes to show that you have to pick your examples carefully nowadays!'
  replies: []
- id: 3051
  author: Richard Rodger
  date: '2005-01-28T10:48:55'
  content: 'dom4j and XPath - haven''t used anything else in a long time.

    I do remember using dear old AElfred - one of the very first SAX parsers - a damn fine piece of code.'
  replies: []
- id: 3052
  author: Heiko W. Rupp
  date: '2005-01-28T11:48:29'
  content: Yeah, XPath rocks.
  replies: []
- id: 3053
  author: Kevin Krouse
  date: '2005-01-28T12:42:49'
  content: Or use XMLBeans' XmlCursor to walk the xml tree.  Instead of getting SAX events and maintaining all the state yourself, you're in control like with DOM.  The DOM spec forces implementations to be ineffiecient.  With XmlCursor, you get a 'cursor' which points to a location within the document -- much more lightweight than DOM objects.  In addition, you can execute xpath directly on the cursor.  It uses a built-in xpath enginge (the subset of xpath required by XMLSchema) and you can plugin other xpath/xquery engines.  Saxon as an xpath/xquery engine was added just last week. :)
  replies: []
- id: 3054
  author: Angsuman Chakraborty
  date: '2005-01-31T02:19:27'
  content: 'For fixed structure documents (with fixed levels only) I prefer DOM over SAX, specially when the amount of information to process from the document is large.  SAX is better when I need to pick up only a few things from a large XML document. In any case if you are using almost all the information in the XML file DOM or its derivatives are always a better choice.

    Personally though I mostly use JDOM.

    BTW: What''s up with this buffy fixation ;)'
  replies: []
- id: 3055
  author: Frank Harper
  date: '2005-01-31T03:20:22'
  content: 'I like Cedric''s suggested way of cleaning up Sax code. But what if xmlVampireSlayer() had to process element attributes?

    The SAX startElement method has an attributes parameter, but endElement does not.

    So what would a good solution be? Adding an extra parameter to xmlVampireSlayer() to pass in the attributes? The attribute parameter would then be null when processing the endElement.

    With a null parameter it doesn''t seem as nice and clean as in Cedric''s example.

    Any better ideas?'
  replies: []
- id: 3056
  author: ''
  date: '2005-01-31T04:58:18'
  content: 'I like Cedric''s suggested way of cleaning up Sax code. But what if xmlVampireSlayer() had to process element attributes?

    The SAX startElement method has an attributes parameter, but endElement does not.

    So what would a good solution be? Adding an extra parameter to xmlVampireSlayer() to pass in the attributes? The attribute parameter would then be null when processing the endElement.

    With a null parameter it doesn''t seem as nice and clean as in Cedric''s example.

    Any better ideas?'
  replies: []
- id: 3057
  author: Aramis
  date: '2005-02-03T05:21:11'
  content: It seem that SAX is the clear favorite here. Just a note about Castor and XPath regarding schema changes. Castor mappings files would need to change when the schema changes (unless you are using the auto-complete feature which makes the parsing brittle to you object model changes). XPath expressions will typically have to specify the full path to the element or attribute of interest again making this brittle.
  replies: []
- id: 3058
  author: vict0r
  date: '2005-02-03T15:41:17'
  content: 'Here the better idea you asked for:  XOM  http://www.cafeconleche.org/XOM/

    Oh, why peek at XOM? Because http://www.cafeconleche.org/SAXTest/'
  replies: []
- id: 3059
  author: unni
  date: '2006-05-09T00:56:34'
  content: 'Hi,

    I would like to ask one question about the choice of  xml parsing.I have 25 mb of xml file(It is too high, to think).I want to create a html presentation by parsing this huge xml file.Now please tell me which parser should I use, SAX or DOM or STAX

    thanks

    Unni'
  replies: []
- id: 3060
  author: unni
  date: '2006-05-09T00:56:55'
  content: 'Hi,

    I would like to ask one question about the choice of  xml parsing.I have 25 mb of xml file(It is too high, to think).I want to create a html presentation by parsing this huge xml file.Now please tell me which parser should I use, SAX or DOM or STAX

    thanks

    Unni'
  replies: []
- id: 3061
  author: Kevin
  date: '2007-05-11T09:54:05'
  content: 'Unni,

    DOM is read into memory all at once while SAX reads it sequencially.  SAX won''t slow you down with a big file like DOM will.  Sorry, I don''t know much about STAX.

    Thanks,

    Kevin'
  replies: []
- id: 3062
  author: Kiran Reddy
  date: '2007-11-03T00:44:24'
  content: 'I read the blog , But i have a problem in hand of loading the xmls ...... i have 100 xmls each of 1MB (average) . But i have a filter criteria of loading only 5 XML''s at a time on to the UI . What is the best way to do it, I am planning to keep all the loading in the static variables and load them in init() menthod of the servlet to keep the XML object ready so that i can get the results faster , when i use XPATH / XQUERY on those objects..

    Please suggest a way for this problem ...... Thanks'
  replies: []
- id: 3063
  author: Lindsay
  date: '2008-03-19T00:20:51'
  content: Sometimes I like to use a SAX parser driving a Builder that is a state machine, IE. implementing the State pattern. The Builder can also do some validation of the directions that the parser gives it, and provide error messages and maybe some logging.
  replies: []
- id: 3064
  author: barriers
  date: '2009-11-20T13:49:29'
  content: You may also want to investigate vtd-xml, which is the latest XML parsing technology
  replies: []
---

There are numerous ways to parse XML in Java but they are all based on one of the two technologies:

  * DOM
  * SAX



I'm not going to explain what these two API's do exactly, there are plenty of articles on the subject, but in a nutshell, DOM gives you a tree view of your XML document, which you can then navigate by moving from one node to the other, while SAX is event-driven and will call your code whenever it encounters a tag.

Over the years, I have come to developa strong liking for SAX despite its apparent limitations, and now, it's reached a point where I haven't needed to resort to DOM for a long time, and here is why.

The thing I like most about SAX is that it allows you to ignore all the portions of your XML document that you don't care about, making it not only trivial to only pick the information you are interested in, but also easier to migrate your schema over time, should you decide to do so.

Consider the following XML document:

> <person>  
>    <first-name value="Cedric"</first-name>  
>    <last-name value="Beust"</last-name>  
>  </person>

Extracting the first and last names is straightforward:

>  public void startElement(String uri, String localName, String qName, Attributes attributes)  
>      throws SAXException  
>    {  
>      String name = attributes.getValue("value");  
>      if ("first-name".equals(qName)) {  
>        System.out.println("First name:" \+ name);  
>      }  
>      else if ("last-name".equals(qName)) {  
>        System.out.println("Last name:" \+ name);  
>      }  
>  }   
> 

Note that the code above is completely ignoring the <person> tag and it focuses exclusively on the content we are interested in.  If we have reached this point in the code (which is defined in a ContentHandler), the parser has probably already verified the validity and _well-formedness_ of your document.

Of course, this code won't work if the same tags appear several times in the document:

> <project name="TestNG">  
>    <members>  
>      <person>  
>        <first-name value="Cedric"</first-name>  
>        <last-name value="Beust"</last-name>  
>      </person>  
>      <person>  
>        <first-name value="Alexandru"</first-name>  
>        <last-name value="Popescu"</last-name>  
>      </person>  
>    </members>  
>  </project>

or, even more tricky, if these tags have different parents:

> <project name="TestNG">  
>    <members>  
>      <vampire-slayer>  
>        <first-name value="Buffy"</first-name>  
>        <last-name value="Sommers"</last-name>  
>      </vampire-slayer>  
>      <vampire>  
>        <first-name value="Angel"</first-name>  
>        <last-name value="Angelus"</last-name>  
>      </vampire>  
>    </members>  
>  </project>

A typical way to solve this is to keep track of the parent tag:  


> private VampireSlayer m_vampireSlayer = null;  
>  private Vampire m_vampire = null;
> 
>  public void startElement(String uri, String localName, String qName, Attributes attributes)  
>      throws SAXException  
>    {  
>      String name = attributes.getValue("value");  
>      if ("vampire-slayer".equals(qName)) {  
>        m_vampireSlayer = new VampireSlayer();  
>      }  
>      else if ("first-name".equals(qName)) {  
>        if (null != m_vampireSlayer) {  
>          m_vampireSlayer.setFirstName(name);  
>        }  
>        else if (null != m_vampire) {  
>          m_vampire.setFirstName(name);  
>        }  
>      }  
>  // ...

Don't forget to "pop out the context" when you exit the tag:

>  public void endElement(String uri, String localName, String qName)  
>      throws SAXException   
>    {  
>      if("vampire".equals(qName)) {  
>        // store the vampire somewhere  
>        m_vampire = null;  
>      }  
>      eles if("vampire-slayer".equals(qName)) {  
>        // store the vampire slayer somewhere, then  
>        m_vampireSlayer = null;  
>      }

However, the problem with this approach is that the business logic attached to a certain tag is now scattered in two different places, which makes the code hard to maintain, so I have adopted the following rule:  whenever I need to run code both at the start and at the end of a tag, I move the business logic in a method that takes a boolean indicating if we are opening or closing the tag:

>  public void startElement(String uri, String localName, String qName, Attributes attributes)  
>      throws SAXException  
>    {  
>      String name = attributes.getValue("value");  
>      if ("vampire-slayer".equals(qName)) {  
>        xmlVampireSlayer(true /* start */);  
>      }  
>  // ...

>  public void endElement(String uri, String localName, String qName)  
>      throws SAXException   
>    {  
>      if("vampire-slayer".equals(qName)) {  
>        xmlVampireSlayer(false /* start */);  
>      }  
>  // ...

>   /**  
>     * @param start If true, we are looking at a opening tag (e.g. <foo>),  
>     * otherwise, we are looking at a closing tag (</foo>)  
>     */  
>    private void xmlVampireSlayer(boolean start) {  
>      if (start) {  
>        m_vampireSlayer = new VampireSlayer();  
>      }  
>      else {  
>        // store the vampire slayer somewhere, then  
>        m_vampireSlayer = null;  
>      }  
>    }  
> 

And now we have the best of both worlds: code that is not only easier to read but also quite robust in the fact of schema changes.

Now, imagine a more complex situation where your XML file can have tags nested six or seven levels deep.  One day, you need to add a new tag.  With DOM, you would have to locate the code that is walking this particular area of the tree, and even with typed tree-based solutions such as XMLBeans, locating and modifying code is never easy.

With SAX, all you need to do is two things:

  * See if the name of this tag is unique within your file (if not, you will need to disambiguate it with the context approach shown above).
  * Implemt the method xmlTagName(boolean start) and gather its treatment inside.



How about you?  Do you prefer DOM over SAX?  Have you encountered situations where DOM was a much better fit than SAX?
