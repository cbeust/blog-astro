---
title: New TestNG, now with groups of groups!
date: '2004-08-06T13:16:03'
slug: new-testng-now-with-groups-of-groups
categories:
- Java
---

I have just released TestNG 0.9.  Among the new features, the most interesting one is "groups of groups".  I'll quote the documentation directly:

Groups can also include other groups.  For example, you might want to define a group "all" that includes "checkintest" and "functest".  "functest" itself will contain the groups "windows" and "linux" while "checkintest will only contain "windows".  Here is how you would define this in your property file:

> testng.group.functest = windows linux  
>  testng.group.checkintest = windows  
>  testng.group.all = functest checkintest  
>    
>  testng.includedGroups = all  
> 

I have also added new Javadocs and more code excerpts to the documentation.  For all the details, please refer to the [ TestNG main page](http://beust.com/weblog/testng).
