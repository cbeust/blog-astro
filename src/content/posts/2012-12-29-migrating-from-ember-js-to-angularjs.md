---
title: Migrating from Ember.js to AngularJS
date: '2012-12-29T17:36:08'
slug: migrating-from-ember-js-to-angularjs
categories:
- General
comments:
- id: 9602
  author: Dominic Mitchell
  date: '2012-12-29T22:29:15'
  content: I've had pretty good experiences overall with angular, but the migration issue was a pain there too. I had one app that moved from 0.9.x to 0.10.x to 1.0. It was a huge pain. Thankfully the API seems to be a great deal more stable now.
  replies: []
- id: 9603
  author: jamel
  date: '2012-12-30T08:45:39'
  content: "Thanks for your post. It is always good for people to blog about the tools they use or stopped using.\nIn the interest of people that might see this post in the future while evaluating what tool to use, I thought I should put out that emberjs allows to use modules to pick and  You pick and choose which functionalities to use.  It also has Support for partials and inclusion of templates. Finally, it has an inbuilt dependency injection module.\n      Support for partials and inclusion of templates.\nhttp://stackoverflow.com/questions/12596209/emberjs-analogue-of-rails-partial\nModules.\nEmberjs  is built from the ground up as a mixture of module  ie controllers, router, model etc are all modules.  You can replace them eg the ember-mapper below is to replace ember-data if you don't want it. Ember-touch is an external module you can add\n  https://github.com/emberjs-addons/ember-touch\n  https://github.com/rlivsey/ember-mapper\n                  Injection and testability.\nEmberjs\
    \ has the container module for lightweight dependency built into the framework\nhttps://github.com/emberjs/ember.js/blob/master/packages/container/lib/main.js\n  See the container module in use here:\nhttps://github.com/emberjs/ember.js/blob/master/packages/ember-routing/tests/integration/basic_test.js\nline 20 container = Ember.Application.buildContainer(App);\nline 32  container.register('router', 'main', Router);\nThanks for the good post"
  replies: []
- id: 9604
  author: Cedric
  date: '2012-12-30T09:11:57'
  content: Thanks for chiming in, Jamel!
  replies: []
- id: 9605
  author: Ezekiel Victor
  date: '2013-01-02T15:20:22'
  content: '"bound to become the defacto standard"

    I echo that sentiment. There are a handful of things that AngularJS does differently than other frameworks -- using DOM-driven templates instead of strings, using digest phase and dirty-checking to control data binding, and others -- that are rather well thought out and powerful in context.'
  replies: []
- id: 9606
  author: James Strachan
  date: '2013-01-03T03:26:32'
  content: 'Good blog post C??dric, I agree - angularjs is awesome. I hope it gets even more traction &amp; awareness.

    I love the combination of regular HTML templates with a few custom attributes for 2 way data binding; then clean simple JavaScript for the controllers to load/save/filter and other actions etc. The dependency injection, partials and directives are great too. (The latter letting you make your own Web Components in a clean way). I like the way angularjs is low footprint &amp; very modular; allowing you to do whatever you want in the controllers &amp; helping you use whatever else you want/need from angularjs services.

    As an aside, I''ve been enjoying the combination of angularjs + TypeScript with IDEA''s tooling; to add better completion, navigation &amp; neater compiler error messages. Add to this the use of LiveReload so you can edit TypeScript/HTML/CSS and the browser reloads on the fly and its close to nirvana from a tooling perspective (though I''d like smart completion inside the angularjs attribute expressions :).

    Here''s how we''re using them together: http://hawt.io/building/index.html. I''m currently hacking on http://hawt.io/ which is an open source HTML5 web console for JMX, OSGi, Apache Camel &amp; ActiveMQ (among other things) based on angularjs + TypeScript and a few other things (like the excellent Jolokia to provide REST/JSON access to JMX)

    http://hawt.io/developers/index.html'
  replies: []
- id: 9607
  author: Matt
  date: '2013-01-12T23:18:16'
  content: 'This is a very interesting and informative post, and thanks for linking to Misko''s post on StackOverflow, that indeed was very interesting and answered a question I''d been wondering about regarding the observer pattern and concurrency. Along those lines, I just wanted to point out, in response to your statement about EmberJS:

    "Cascading updates are being executed right away"

    Although I haven''t personally used EmberJS I have been evaluating it and reading their documentation quite a bit, and it states explicitly that cascading updates are *not* executed right away. Perhaps this was a recent change since you stopped using the framework....but when reading about EmberJS''s run loop I got the impression that avoiding immediate updates to the DOM was one of the major motivations for the run loop.

    So it seems to me that *both* the EmberJS and AngularJS frameworks implement the observer pattern robustly (avoiding gotchas common in many other frameworks), just in different ways.'
  replies: []
- id: 9608
  author: Guido Garc??a
  date: '2013-01-31T23:08:23'
  content: With angular, you don't need to use "proprietary HTML attributes", you can use standard "data-xxx" html5 attributes (i.e. data-ng-repeat)
  replies: []
- id: 9609
  author: Jon Abrams
  date: '2013-02-04T22:23:10'
  content: "I too would like to publicly confess my love of Angular.js. Thanks for the article!\nI??d like to point out a small correction though:\n&lt;ul ng-repeat=\"person in people\"&gt;\n    &lt;li&gt;Hello, {{person.name}}!&lt;/li&gt;\n&lt;/ul&gt;\nshould be\n&lt;ul&gt;\n    &lt;li ng-repeat=\"person in people\"&gt;Hello, {{person.name}}!&lt;/li&gt;\n&lt;/ul&gt;"
  replies:
  - id: 9610
    author: Cedric
    date: '2013-02-04T22:25:35'
    content: Good catch, Jon, fixed. Thanks!
    replies: []
- id: 9611
  author: Thom Seddon
  date: '2013-02-05T00:00:15'
  content: 'Just a note, you should probably use (and advocate!) the use of  as the browser will attempt to render an image with the literal URL "/{{imgSrc}}" until angular has evaluated the expression, similar to using ng-href over href.

    http://docs.angularjs.org/api/ng.directive:ngSrc'
  replies: []
- id: 9612
  author: '&raquo; Migrating from Ember.js to AngularJS via @cbeust &raquo; Mathieu Elie - Freelance Consultant'
  date: '2013-02-05T03:02:28'
  content: '[...] Migrating from Ember.js to AngularJS ?? Otaku, Cedric&#8217;s blog [...]'
  replies: []
- id: 9613
  author: Dan
  date: '2013-02-05T08:25:26'
  content: Angular vs. backbone?  Really suprised no one has chimed in on that. How does angular compare?
  replies: []
- id: 9614
  author: Geoffrey Grosenbach
  date: '2013-02-05T15:33:33'
  content: 'I''m curious about your third point.

    Ember does in fact have a mechanism for rendering templates in at least three ways. You can use "partial", which renders a template using the current controller. Or you can "render" a controller, which uses the new controller''s data and associated template. Or you can make a custom view.

    We recently made a video about the blazingly newest version of Ember, which has been well received and has given many people insights into how Ember works (whether you''re planning to use it or just compare it to other frameworks).

    https://peepcode.com/products/emberjs'
  replies: []
- id: 9615
  author: Elmer
  date: '2013-02-08T03:01:31'
  content: I've been jumping from various client-side mvc framework and I finally settled with AngularJs.  Great post btw!
  replies: []
- id: 9616
  author: Sebastian
  date: '2013-02-08T03:11:36'
  content: 'Having used both Ember and Angular, I agree with you, Angular is easier to learn and use. I spent a lot more time learning Ember than Angular.

    I really like starting with plain html and then extending it with angular attributes instead of having to put everything inside template in Ember.

    Re Backbone

    I have used Backbone too and I feel that Angular is years ahead. Backbone requires a lot more work to get anything done, you have to bind lots of events yourself. Angular manages all this for you.

    Another framework I like very much is CanJS, used a lot. Is more like Backbone, way better in my opinion. But still Angular is a step forward.'
  replies: []
- id: 9617
  author: Harley Trung
  date: '2013-02-08T03:22:24'
  content: 'I also ended up going with AngularJS over Ember.js for similar reasons listed by Cedric, the author. Two most important reasons for me were 1) much easier data binding and 2) better testability

    @Geoffrey: agree Ember does have some great template rendering options that fit most common use cases. I followed along your Ember.js screencast (which is really well done!) and you explained those "3 ways" very well.

    After following along, I decided to learn AngularJS and migrated the Peepcode''s demo app (called Ordr) from Ember.js to AngularJS. Someone else from Peepcode had given me permission to share it here https://github.com/harleyttd/angular-ordr -- you can see migration done in a single diff here: https://github.com/harleyttd/angular-ordr/commit/0b93f678776867b8e7a1e97c8050ea66113f3ede

    While doing it, I thought Ember.js had better conventions for including templates and rendering layouts (noted that in the README file)! It wasn''t easy to know how to use AngularJS''s ng-view, ng-include, and templateUrl via directives effectively. However, after knowing AngularJS more now, I love how AngularJS can be more flexible and still let you write less code.

    I like how Ember.js and AngularJS have conventions to help you write way less code than say if you used Backbone (plus some other Backbone plugins, maybe). I think Backbone was a great pioneer but I already started migrating some Backbone code to AngularJS when I revisit to extend them'
  replies: []
- id: 9618
  author: Peter Wagenet
  date: '2013-02-08T06:54:36'
  content: 'Unfortunately, this post is both outdated and inaccurate. Tom Dale of the Ember.js Core Team has covered some of this here: http://news.ycombinator.com/item?id=5169168'
  replies: []
- id: 9619
  author: Earl
  date: '2013-02-08T08:10:17'
  content: Custom HTML attributes, as suggested by another comment, are not really a great idea. They won't validate with an HTML validator. But I suppose that's only important if you care about such things.
  replies: []
- id: 9620
  author: Cedric
  date: '2013-02-08T08:37:39'
  content: 'Earl: no matter where you stand on the issue "Are HTML documents with invalid attributes valid HTML documents?", Angular-based templates are certainly more correct from an HTML spec aspect than Ember-based ones (or any other framework that forces you to insert template directives directly into the document).'
  replies: []
- id: 9621
  author: Peter Wagenet
  date: '2013-02-08T09:50:26'
  content: Cedric, Ember doesn't force anyone to do anything to the HTML spec. Handlebars is a templating language that outputs valid HTML.
  replies: []
- id: 9622
  author: Cedric
  date: '2013-02-08T09:54:27'
  content: '@Peter:

    Unless I''m mistaken, I believe we are talking about the files before they get processed by the templating engine.

    I can''t say I care either way, to be honest, I was just responding to a commenter. I don''t have a problem with templates not being HTML compliant (why would they have to be?).'
  replies: []
- id: 9623
  author: Harley Trung
  date: '2013-02-08T10:04:50'
  content: '@Peter: while I really like and respect Yehuda and Tom Dale, I find it ironic that Tom Dale said this blog post contains "much FUD" from that HN comment, because some people, myself included, feel the same thing about Tom''s (insightful nevertheless) answer on quora regarding the Ember.js vs AngularJS question: http://www.quora.com/Ember-js/Which-one-of-angular-js-and-ember-js-is-the-better-choice

    it''s difficult for a blog post like this to be entirely accurate, but it''s a "case study". For example, given many people, myself included, agree with what''s said in this article, the ember community and team can find out how to make Ember even more accessible and useable to other users like us to prevent such "misunderstanding", or "misconception"'
  replies: []
- id: 9624
  author: Peter Wagenet
  date: '2013-02-08T10:26:54'
  content: 'Cedric, you''re right. Personally, I think trying to shoehorn everything into `data` properties is a bit crazy, and would prefer to just be explicit about it as a templating language. That said, not everyone shares the same opinion.

    Harley, my concern is less about FUD and more about factual inaccuracies. It''s one thing to say that Ember isn''t right for someone (it may not be), but it''s another to have the reasons be largely things that aren''t actually true of Ember. I think Ember is a better solution for most people than Angular is, but if my reasoning for that line of thought is based on falsehoods about Angular, I would definitely want to be set straight.'
  replies: []
- id: 9625
  author: Tane Piper
  date: '2013-02-10T02:54:15'
  content: 'In your last example where you do:

    This should instead be

    The problem is that on loading the app the img tag will immediately look for the src value, but if the data is not loaded yet then it will try load /{{srcUrl}} as the actual value.

    ng-src is a way to mask this - angular will recognise this and then when the actual srcUrl value is loaded, it will add the src correctly.'
  replies:
  - id: 9626
    author: Cedric
    date: '2013-02-10T06:52:19'
    content: Good point, I updated the post. Thanks!
    replies: []
- id: 9627
  author: Links &amp; reads for 2013 Week 6 | Martin&#039;s Weekly Curations
  date: '2013-02-10T11:15:20'
  content: '[...] Migrating from Ember.js to AngularJS [...]'
  replies: []
---

I recently spent some time converting a medium-sized Javascript application using [Ember.js](http://emberjs.com/) to [AngularJS](http://angularjs.org/), here are a few thoughts about the migration. 

First of all, why migrate at all? 

The Ember.js code is based on a 0.9x version and as Ember.js is approaching 1.0, I was growing increasingly nervous at the thought of porting the application to 1.0 considering the number of breaking changes that the new version contains (nothing wrong with that, it's the risk you take when you use a pre-release version). Since there would be major work involved, I thought that taking another look at Angular wouldn't hurt. Overall, Angular is a much more extensive framework than Ember. On top of offering a binding/MVC framework, Angular supports: 

  * Modules. You pick and choose which functionalities you want and you can create modules of your own code as well. 
  * Injection and testability. This should come as no surprise since one of Angular's main developers, Misko, is a [regular poster on Google's testing blog](http://misko.hevery.com/about/). 
  * Support for partials and inclusion of templates. This is another thing I really missed with Ember.js, which offers no easy way to break down your HTML templates into smaller, more manageable files. Angular allows you to do this either through routes and partials or straight inclusion of files. 
  * Documentation. While the Ember.js documentation is fairly large, I found it very unorganized and I often resorted to searching the page to find what I need. In contrast, Angular's documentation follows a clean structure where each page contains a full example of the concept being explained (a trend I wish more documentations followed: with this kind of model, it doesn't matter much if your documentation is well written as long as the code samples work. Also, I really like the way they present the code in these samples, with individual panels for the HTML, Javascript and any other file you might need). 
There are a lot of fundamental differences in philosophy between Ember.js and Angular, and one of the most important ones is how they handle templates. 

Ember.js follows the more classical way of making you write files that look like HTML but are not really since they are littered with directives that drive the template engine: 
    
    
    
        
        
          {{#each people}}
            
        * Hello, {{name}}!
    
      {{/each}}
    
    
    

In contrast, Angular template files use proprietary HTML attributes which will be processed by its compiler to modify the DOM: 
    
    
    
    
    
        
        * Hello, {{person.name}}!
    
    
    
    

I have found that Angular's approach makes it easier to debug your templates because the HTML that you are inspecting is exactly what it looks like after expansion. Reading Ember.js processed templates is made harder by the fact that they are littered with magic Ember identifiers (e.g. "`id="metamorph-34-start"`"). 

Data binding is performed very differently between the two frameworks. Ember.js makes you wrap all the objects that are part of your model so that it can monitor them. Despite offering theoretical great power, updating Ember objects is still fraught with annoyances: 

  * You need to remember to call the setter: `object.set('foo', newValue)`. Assigning this field directly will not fail but will cause some data binding to not work. 
  * Cascading updates are being executed right away. While this seems like a good idea in theory, the practice is very different since there are times where I want to do batch updates to my objects before telling my UI to update itself. I ended up adding boolean flags to manually prevent my listeners from automatically triggering until my model was ready, which seems to defeat the purpose of data binding. 
Angular's data binding is much more straightforward (you just update the objects of your model directly) and "most of the time", it works. There are times where you will have to tell Angular to perform its updates, but these are rare. See this [very interesting explanation from Misko](http://stackoverflow.com/questions/9682092/databinding-in-angularjs) on StackOverflow. 

Ember's data binding is also magic is a few more ways. You can bind values together (for example, defining that a "full name" is made of "first name" and "last name" by declaring dependencies between these fields) and you declare these by adding "Binding" to the end of the variable. This takes a little to get used to. Bindings at the template level are pretty awkward too, especially for attributes: 
    
    
      
      <img {{bindAttr alt="altText"}} />
      
      <img alt="{{altText}}" />
    

I had a few other items to cover in this comparison but I'll stop here, except for one last point: IDEA's Javascript support is light years ahead of Eclipse and a joy to work with. 

Overall, I have to say that I am enjoying working with Angular a lot more than I ever did with Ember, and between the credentials of both the company and the engineers driving Angular, the vibrant community (the mailing-list gets about fifty emails every day), the high quality documentation and support and the modern concepts it supports (modularity, testability, injection), it's clear to me that Angular has a tremendous amount of momentum and is bound to become the defacto standard with which Javascript single page applications are written in the future.
