---
title: Flexible configuration with Guice
date: '2013-07-12T17:54:22'
slug: flexible-configuration-with-guice
categories:
- General
comments:
- id: 9701
  author: plumpy
  date: '2013-07-13T11:13:26'
  content: "Guice has type conversion built in if you bind it with bindConstant(). No need for your conversion classes or types stored in the property. So I do an almost identical thing, but mine looks like this. I quickly modified it to use your class names and added support for default values, which intentionally don't allow... so forgive me if it doesn't compile, but you get the point:\nfor (Property property : Property.values()) {\n  String name = property.key();\n  String value = allProps.contains(name) ?\n      allProps.get(name) : property.default();\n  bindConstant()\n      .annotatedWith(new PropImpl(property))\n      .to(value);\n}\nNow I can just inject a parameter annotation with @Prop(Property.HOST) and Guice converts it automatically for me. If you want to add additional converters, use AbstractModule#convertToTypes. Like, I have this one:\nconvertToTypes(\n        Matchers.only(new TypeLiteral&lt;Set&gt;(){}),\n        new CommaSeparatedSetTypeConverter());"
  replies: []
- id: 9702
  author: aldir
  date: '2013-07-13T16:01:00'
  content: Take a look at androidannotations
  replies: []
- id: 9703
  author: Mo Firouz
  date: '2013-07-15T06:52:49'
  content: 'Hello.

    I think that your approach is good, but shouldn''t you want to limit the depth of where your configurations values go?

    One would assume that most of your configuration needs to happen on bootstrapping, therefore your configurations only needed when Guice is starting to load your module content.

    That would mean that you can write custom providers that read stuff from your Configuration once and only once and keep a neat abstraction layer from config to your runtime logic.

    What do you think about this?'
  replies: []
- id: 9704
  author: Hani
  date: '2013-07-15T08:05:59'
  content: Somewhat of a tangent, but this is another reason as to why Spring is more 'pragmatic' than Guice. You don't need to write any custom code, just use @Value to inject any environment stuff anywhere. If it's from a properties file it's free, if it's from other sources (like commons-config) then you'd write something to bridge it.
  replies: []
- id: 9705
  author: plumpy
  date: '2013-07-16T05:44:11'
  content: 'Hani: I think you''re missing the point. Guice has Names.bindProperties() if you just want to inject properties and get them by their names. It''s very simple. But doing it this way is better, for the reasons he lists in "Objectives".'
  replies: []
- id: 9706
  author: Your name (required)
  date: '2013-08-21T03:41:18'
  content: For properties/configuration, there's OWNER (https://github.com/lviggiano/owner)
  replies: []
- id: 9707
  author: B. K. Oxley (binkley)
  date: '2013-10-27T10:48:32'
  content: 'I experimented with Enum-keyed properties for some time, ran into the same issue you had with generics and typing.  Eventually I jettisoned my own code and adopted OWNER API.

    Wrapping it in a Guice module is simple - https://github.com/binkley/binkley/blob/develop/guice/src/main/java/hm/binkley/inject/OwnerModule.java'
  replies: []
- id: 9708
  author: Taharqa
  date: '2013-11-20T06:52:43'
  content: '@Hani Spring or Guice does not aim the same public. Spring general architecture choices are quite good for simple, non complex sometimes wide applications , but does not fit for next generation framework, where modularity or dynamicity are required. Guice by its clear api and spi bring developers choices to achieve a feature to build their own technical stack. With Spring you create application, with guice you create framework and complex applications. So your argument on the Spring pragmatism is not really applicable there.'
  replies: []
---

There are quite a few configuration libraries available in Java, such as [this one available from Apache Commons](http://commons.apache.org/proper/commons-configuration/), and they usually follow a very similar pattern: they parse a variety of configuration files and in the end, give you a `Property` or `Map` like structure where you can query your values: 
    
    
    Double double = config.getDouble("number");
    Integer integer = config.getInteger("number");
    

I have always been unsatisfied with this approach for a couple of reasons: 

  * A lot of boiler plate to retrieve these parameters. 
  * Having to share the whole configuration object even if I only need one parameter from it. 
  * It's very easy to misspell a property and received incorrect values. 
A while ago, I was reading the [Guice documentation](https://code.google.com/p/google-guice/wiki/BindingAnnotations) and I came across a paragraph that made me realize that maybe, we could do better. Here is the relevant excerpt: 

> Guice supports binding annotations that have attribute values. In the rare case that you need such an annotation: Create the annotation @interface. Create a class that implements the annotation interface. Follow the guidelines for equals() and hashCode() specified in the Annotation Javadoc. Pass an instance of this to the annotatedWith() binding clause. 

I thought that using this technique might be exactly what I needed to create a smarter configuration framework, even though I had different plans than using this trick with the `annotatedWith` method, as suggested by this paragraph. The relevance of this snippet will become clear later, so let's start with the goals. 

### Objectives

I want to: 

  * Be able to inject individual configuration values anyhere in my code base and I want this to be type safe. No `@Named` or other string-based lookup. 
  * Have a canonical list of all the properties available to the application, with their full type, default value, documentation and leaving the door open for improvements (e.g. is this option mandatory or optional, detecting when some properties are not used anywhere, deprecation, aliasing, etc...). 
I don't care much about the front end: how these properties get gathered is not relevant to this framework, they can come from XML, JSON, the network, a database, and they can have arbitrarily complex resolution and overriding rules, let's save this for a future post. The input of this framework is a `Map` of properties and I take it from there. 

By the time we're done, we will be able to do something like this: 
    
    
        # Some property file
        host=foo.com
        port=1234
    

Using these configuration values in your code: 
    
    
    public class A {
        @Inject
        @Prop(Property.HOST)
        private String host;
        @Inject
        @Prop(Property.PORT)
        private Integer port;
        // ...
    }
    

### Implementation

The definition of the `Prop` annotation is trivial: 
    
    
    @Retention(RUNTIME)
    @Target({ ElementType.FIELD, ElementType.PARAMETER })
    @BindingAnnotation
    public @interface Prop {
      Property value();
    }
    

`Property` is an enum that captures all the information necessary for all your properties. In our case: 
    
    
    public enum Property {
        HOST("host",
            "The host name",
            new TypeLiteral<String>() {},
            "foo.com"),
        PORT("port",
            "The port",
            new TypeLiteral<Integer>() {},
            1234);
    }
    

This enum contains the string name of the property, a description, its default value and its type. Note that this type is a `TypeLiteral`, so we can even offer properties that have generic types that would otherwise be erased, a trick that comes in handy to inject caches or other generic collections. Obviously, you can have additional parameters as you see fit (e.g. "`boolean deprecated`"). 

The next step is to tie all the properties that we parsed as input -- we'll use a `Map` called `"allProps"` \-- into our module so that Guice knows how to inject them. 

In order to do this, we iterate all these properties and bind them to their own provider. Because we are using typed names, note the use of `Key.get` from the Guice API, which lets us specifically target each property with a specific annotation: 
    
    
        for (Property prop : Property.values()) {
            Object value = PropertyConverters.getValue(prop.getType(), prop, allProps.asMap());
            binder.bind(Key.get(prop.getType(), new PropImpl(prop)))
                    .toProvider(new PropertyProvider(prop, value));
        }
    

There are three classes in this piece of code that I haven't explained yet. The first one is `PropertyConverters`, which simply reads the string version of the property and converts it to a Java type. The second one is `PropertyProvider`, a trivial Guice provider: 
    
    
    public class PropertyProvider<T> implements Provider<T> {
        private final T value;
        private final Property property;
        public PropertyProvider(Property property, T value) {
            this.property = property;
            this.value = value;
        }
        @Override
        public T get() {
            return value;
        }
    }
    

`PropImpl` is more tricky and also the one thing that has always prevented me from implementing such a framework, until I came across this obscure tidbit of the Guice documentation quoted above. In order to understand the necessity of its existence, we need to understand how Guice's `Key.get()` works. Guice uses this class to translate a type into a unique key that it can use to inject the correct value. The important part here is to notice that not only does this method work with both `Class` and `TypeLiteral` (which we are using), but it can also be given a specific annotation. This annotation can be `@Named`, which I'm not a big fan of because it's a string, so susceptible to typos, or a real annotation, which is what we want. However, annotations are special beasts in Java and you can't get an instance of them just like that. 

This is where the trick mentioned at the top of this article comes into play: Java actually allows you to implement an annotation with a regular class. [The implementation turns out to be fairly trivial](https://github.com/cbeust/personal/blob/master/src/main/java/com/beust/prop/PropImpl.java), the difficulty was realizing that this was possible at all. 

Now that we have all this in place, let's back track and dissect how the magic happens: 
    
    
        @Inject
        @Prop(Property.HOST)
        private String host;
    

When Guice encounters this injection point, it looks into its binders and it finds multiple bindings for `Strings`. However, because they have all been bound with a `Key`, the key is actually a pair: `(String, a Prop)`. In this case, it will look up the pair `String, Property.HOST` and it will find a provider there. This provider was instantiated with the value found in the property file, so it knows what value to return. 

### Generalizing

Once I had the basic logic in place, I wondered if I could turn this mini framework into a library so that others could use it. The only missing piece would be to allow the specification of a more general `Prop` annotation. In the example above, this annotation has a value of type `Property`, which is specific to my application: 
    
    
    @Retention(RUNTIME)
    @Target({ ElementType.FIELD, ElementType.PARAMETER })
    @BindingAnnotation
    public @interface Prop {
        Property value();
    }
    

In order to make this more general, I need to make this attribute return an `enum` instead of my own: 
    
    
    @Retention(RUNTIME)
    @Target({ ElementType.FIELD, ElementType.PARAMETER })
    @BindingAnnotation
    public @interface Prop {
        Enum value();
    }
    

Unfortunately, this is not legal Java, because according to the JLS section 8.9, `Enum` and its generic variants are **not** enum types, something that Josh Bloch confirmed, to my consternation. 

Therefore, this cannot be turned into a library, so if you are interested in using it in your project, you will have to copy the source and make a few modifications to adjust it to your needs, starting by having `Prop#value` have the type of the enum that captures your configuration. 

[You can find a small proof of concept here](https://github.com/cbeust/personal/tree/master/src/main/java/com/beust/prop), which I hope you'll find useful.
