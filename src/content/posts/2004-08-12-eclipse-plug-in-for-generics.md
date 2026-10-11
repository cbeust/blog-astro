---
title: Eclipse plug-in for generics
date: '2004-08-12T09:42:46'
slug: eclipse-plug-in-for-generics
categories:
- Java
comments:
- id: 1944
  author: mjasnowski
  date: '2004-08-13T11:09:33'
  content: Any hopes of an IntelliJ Version?
  replies: []
---

I have just added support for concrete collections to [J15](http://beust.com/weblog/j15):  use Ctrl-1 on the creation of a concrete collection and J15 will add the correct Generic parameters.

Before: 
    
    
    List l2 = new ArrayList();
    Float n2 = new Float(42);
    l2.add(n2);
    

After: 
    
    
    **ArrayList <Float> l2 = new ArrayList<Float>();**
    Float n2 = new Float(42);
    l2.add(n2);
    

Before: 
    
    
    Map m = new HashMap();
    m.put(new Integer(42), "Cedric");
    

After: 
    
    
    **HashMap <Integer, String> m = new HashMap<Integer, String>();**
    m.put(new Integer(42), "Cedric");

Let me know if you can think of other conversions that this plug-in could make for you.
