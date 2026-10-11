---
title: Announcing EJBGen 2.15
date: '2003-08-12T15:19:45'
slug: announcing-ejbgen-2-15
categories:
- Java
comments:
- id: 289
  author: los angeles zone diet delivery
  date: '2004-11-04T13:11:35'
  content: 'Hi - I was looking for some political sites with articles on the recent US election and found your nice site. The comments from others on here are pretty good so I just thought I''d add my thoughts also!

    Elaine Cooper'
  replies: []
---

I just released [EJBGen 2.15](http://beust.com/weblog/ejbgen).  The main addition is the use of templates (which will be improved further in the next version).  Here is the change log since 2.14:

2.15  
\- Fixed: pk and value classes were always regenerated  
\- Fixed: disable-warning moved to @ejbgen:jar-settings  
\- Added: documentation for templates  
\- Added: templates, and -templateDir option  
\- Fixed: variables not defined in ejbgen.properties are preserved  
\- Added: package specification in @ejbgen:file-generation  
\- Fixed: generate-on was not working properly  
\- Fixed: value objects now test against null in hashCode() and equals()  
\- Fixed: -localHome.baseClass was not working correctly  
\- Fixed: -jndiPrefix/-jndiSuffix was not honored in resource-description  
\- Added: -xmlEncoding  
\- Added: -noImports  
\- Added: {create|remove|passivate}-as-principal-name attributes  
\- Fixed: documentation for options  
\- Fixed: StackOverFlowError in debugLog()
