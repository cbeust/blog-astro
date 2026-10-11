---
title: Ruby on Rails and validation
date: '2005-12-06T10:59:35'
slug: ruby-on-rails-and-validation
categories:
- Ruby
comments:
- id: 4515
  author: Zsolt
  date: '2005-12-06T12:18:35'
  content: 'One gripe I have with ActiveRecord is that the validation normally kicks in only when the entity is persisted or updated. This means your -- possibly invalid -- domain object goes through the web layer and your business logic until it gets caught by the validation framework.

    I prefer the XWork/WebWork approach where the validation mechanisms can be context sensitive, and always apply immediately when the input data reaches the controller.'
  replies: []
- id: 4516
  author: David Heinemeier Hansson
  date: '2005-12-06T12:52:53'
  content: 'Cedric: It''s actually quite easy to bundle all this up in either a mixin or your own meta validation. You could wrap it up into something like validates_cedricness_of :name and have that include both length, uniqueness, and format.

    Zsolt: You can just call model.valid? to do this.'
  replies: []
- id: 4517
  author: Simon Harris
  date: '2005-12-06T13:02:48'
  content: 'Zsolt,

    You can manually invoke validation whenever you like by calling valid?'
  replies: []
- id: 4518
  author: Zsolt
  date: '2005-12-06T13:09:23'
  content: Cool :)
  replies: []
- id: 4519
  author: Cedric
  date: '2005-12-06T13:10:28'
  content: Great, thanks David!
  replies: []
- id: 4520
  author: Bill Kress
  date: '2005-12-06T17:37:06'
  content: 'For a system with a lot of GUIs, you really need to have a generic mechanism to transfer data back and forth anyway.

    You really should define that mechanism with meta data. At least an XML template listing the objects/attributes rather than just throw a hashtable out there.

    With those requirements identified, adding a simple drop-in validation into the XML definition should be pretty easy.

    Just specify the name of the class used to validate the field and an optional string parameter.  It certainly makes more sense than specifying the validation relationship in code anywhere.

    This would allow you to specify much more than validations too, you could identify what to do with the data when it connects with any other sub-system.

    Oh well, that''s how I was designing it anyway.'
  replies: []
- id: 4521
  author: ''
  date: '2005-12-06T17:42:49'
  content: 'XML SUCKS!

    Keep your horrid metadata away from rails!

    Mixins can keep rails models much nicer, and keep the application simple.'
  replies: []
- id: 4522
  author: Todd Huss
  date: '2005-12-06T18:10:47'
  content: There's nothing wrong with the code if you don't want to reuse it though ;-) Thanks for the reference to my blog, nice to see folks are reading it. If I reach a point where I need to validate a name the same way in other parts of the code that would violate the DRY principle I like DHH's suggestion.
  replies: []
- id: 4523
  author: Jason Carreira
  date: '2005-12-07T11:42:46'
  content: 'Well, you don''t just call valid() on an object to validate it, no, you ask the validation framework to validate the object:

    ActionValidatorManager.validate(object, context);

    But, as you do in Ruby, we could add this as a mixin using AOP to any objects we like to have the validation framework validate them.

    One question for the Rails folks... How do you do context-sensitive validations? Also, how do you collect the validation error messages, and how do you localize them? These are all requirements that my validation framework (the XWork Validation Framework) had to address for real-world requirements at work.'
  replies: []
- id: 4524
  author: Michael Neale
  date: '2005-12-08T14:58:50'
  content: 'I really like the Mixin idea. You can then break out all your common validation rules into a set of declarative classes, and mixin as needed. Kind of like meta-data validation rules, but its not metadata. Nice.

    Three cheers for mixins.'
  replies: []
- id: 4525
  author: Jesus
  date: '2005-12-08T15:31:06'
  content: 'What you need to do is Mixin with AOP then Inject with IoC, squeeze in a Context, implement IValidatable and finally let it sit overnite.

    wallah !!!'
  replies: []
- id: 4526
  author: David Heinemeier Hansson
  date: '2005-12-09T12:22:55'
  content: 'We have not had a need to do context-sensitive validations and I''d argue that most applications do not. So the the validation rules that you specify in the Rails models are the absolutes, the "must always be true" kind of validations.

    If you have context-sensitive validations needed on top of that, you''ll have to roll on your own. So this is one of those "most people, most of the time" things. We''re not after the "all people, all of the time" kind of framework coverage.'
  replies: []
- id: 4527
  author: Alex Shneyderman
  date: '2005-12-19T11:48:37'
  content: '[quote]

    We have not had a need to do context-sensitive validations and I''d argue that most applications do not. So the the validation rules that you specify in the Rails models are the absolutes, the "must always be true" kind of validations.

    If you have context-sensitive validations needed on top of that, you''ll have to roll on your own. So this is one of those "most people, most of the time" things. We''re not after the "all people, all of the time" kind of framework coverage.

    [/quote]

    hmm, well look at the first post in this thread. There is a real use case for the need of it. What I like in XWork/WW approach (same goes for Spring with its rules validations) even more is that I can run the same validation in multiple layers presentation and business, and if my business and presentation sit on the same JVM I can propagate validation that was done already into the business layer so it does not waste its time re-checking. He, he no need for context sensitive validation --> you must be kidding me.'
  replies: []
- id: 4528
  author: Alex Shneyderman
  date: '2005-12-19T11:49:11'
  content: '[quote]

    We have not had a need to do context-sensitive validations and I''d argue that most applications do not. So the the validation rules that you specify in the Rails models are the absolutes, the "must always be true" kind of validations.

    If you have context-sensitive validations needed on top of that, you''ll have to roll on your own. So this is one of those "most people, most of the time" things. We''re not after the "all people, all of the time" kind of framework coverage.

    [/quote]

    hmm, well look at the first post in this thread. There is a real use case for the need of it. What I like in XWork/WW approach (same goes for Spring with its rules validations) even more is that I can run the same validation in multiple layers presentation and business, and if my business and presentation sit on the same JVM I can propagate validation that was done already into the business layer so it does not waste its time re-checking. He, he no need for context sensitive validation --> you must be kidding me.'
  replies: []
- id: 4529
  author: S. Potter
  date: '2006-04-23T15:21:49'
  content: 'Ref: Contextual validation use cases

    I think this is mis-named to be honest (and getting lots of google hits for the wrong thing).  I would call this multi-layer validation and the great thing about RoR is the fact that it isn''t clunky like Spring and other Java frameworks I have worked with (I have had 8-9 years of professional Java experience and 2 year of Python and Ruby, so I am not just a Ruby head or anti-Java head).

    In fact, even Marc Fluery of JBoss (a big Java head) agrees that keeping your apps as thin and stateless as possible is best for scaling apps to handle significant load.  You may or may not like his arrogant way, but I think in this instance he makes a genuinely great point.  Why uber-architects insist on having multiple seperate containers for their apps unless extremely domain-specific use cases mandate this is beyond me.

    I have worked with plenty of uber-architects that want to redesign the world to make it even more generic than the vast majority of real world use cases need them to be and ALL of those projects have been complete failures.  Of course, the opposite extreme also produces project failures.  However, if we agree that RoR''s main focus is on helping application developers build streamlined web applications and that Marc Fluery has a good point, then I would argue that this is a moot point.

    But if you like Spring so much, stick to it, please!

    As for those that are interested in doing what I would call context-sensitive validation...

    RoR provides the validate, validate_on_create and validate_on_update protected methods for application developers to override them.  This seems like the perfect place to do contextual validation.'
  replies: []
- id: 4530
  author: vipul
  date: '2006-07-26T07:21:54'
  content: 'how to perform email validation i m confused when i m using following coe it return code it not consider index('''') method of ruby in model.

    mymodwl.rb

    def validate

    apos=:email.index(''@'').to_i

    dotpos=:email.rindex(".")

    lastpos=:email.length-1;

    if (apos  3 || lastpos-dotpos&lt;2)

    errors.add(:email, "is missing or invalid")

    end

    end'
  replies: []
- id: 4531
  author: lurker
  date: '2006-12-25T00:29:09'
  content: 'apos=:email.index(/@/).to_i

    use this code'
  replies: []
- id: 4532
  author: Aditya Agustyana
  date: '2007-02-13T21:23:29'
  content: 'i have make upload image form, i save path info about image on database and i placed uploaded image to public/images/user_pix/ directory

    everything is running well, except i can''t validate content type of image, my apps accept jpg,gif & png filetype only

    so guys, would you please tell me how to validate content type when you save/update image data

    *i''m sorry if my english bad'
  replies: []
- id: 4533
  author: ''
  date: '2007-03-09T04:20:13'
  content: hkh
  replies: []
- id: 4534
  author: bijah
  date: '2007-11-25T15:26:31'
  content: 'In my address model, I have address line 1 and address line 2. Address line 2 is optional and I want to validate it when present. So, I defined the following validate function.

    def validate

    if(!address_line_2.nil? and !address_line_2.blank?)

    validates_length_of     :address_line_2, :maximum => 30, :too_long => " exceeds %d characters"

    validates_format_of :address_line_2, :with => /^(\w+|(\s|,|-|\.|'')*)+$/

    return true

    end

    end

    But rails throws a NoMethodFound exception for validates_length_of. How can I fix it?'
  replies: []
- id: 4535
  author: bijah
  date: '2007-11-25T19:53:47'
  content: 'OK. I solved it as follows:

    validates_length_of :address_line_2, :maximum => 30, :too_long => " exceeds %d characters", :if => Proc.new { |a| !a.addres

    s_line_2.blank? }

    validates_format_of :address_line_2, :with => /^(\w+|(\s|,|-|\.|'')*)+$/, :if => Proc.new { |a| !a.address_line_2.blank? }

    But I still would like to know the cause for the NoMethodFound error in the previous approach.

    Thanks.'
  replies: []
- id: 4536
  author: sdf
  date: '2008-04-23T06:21:12'
  content: ds
  replies: []
- id: 4537
  author: Gevorik u Goqor
  date: '2008-04-23T06:22:37'
  content: Lav ban eq asum
  replies: []
- id: 4538
  author: aditi
  date: '2008-05-22T22:21:45'
  content: hello
  replies: []
- id: 4539
  author: ''
  date: '2008-10-14T11:48:17'
  content: ruby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input ruruby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input ruby rails input validation example codevalidatiruby rails input validation example codeon exampruby rails input validation example codele coderruby rails input validation example codeuby railruby rails input validation example codes input ruby rails input validation example codevalidatiruby rails input validation example codeon exampruby rails input validation example codele codebruby ruby rails input validation example coderuby rails input validation example coderuby rails ruby rails input validation example
    codeinput validation example coderuby rails input validation example coderuby rails input validation example coderails input validation example codey rails ruby rails input validation example codeinput ruby rails input validation example codevalidation example codevalidation example coderuby raruby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example codeils input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example
    coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example coderuby rails input validation example code
  replies: []
---

Ruby on Rails is radically changing the way developers look at Web applications, and it's great to see all the excitement that surrounds the many innovative features it offers.  One of these features is in-model validation, which is understandably seen as an improvement over validation tied to the presentation framework.

In [ this entry](http://jroller.com/page/thuss?entry=validation_belongs_in_the_domain), Todd Huss shows a convincing example of this approach:

> class Entry < ActiveRecord::Base  
>    
>    # Relationships  
>    belongs_to :bliki  
>    
>    # Validation  
>    validates_length_of :name, :within => 6..100  
>    validates_uniqueness_of :name  
>    validates_format_of :name, :with => /^\w+$/,  
>    :message => "cannot contain whitespace"  
>    validates_length_of :content, :minimum => 10   
>    validates_associated :bliki  
>  end

This kind of code is fairly usual to any regular Ruby on Rails developer to the point where it's actually easy to overlook that there is something very wrong with it:  there is no easy way to capture this validation logic for reuse elsewhere.

I could move this validation to a common class but it's not good enough, for two reasons:

I still might want to fine tune a few parameters here and there (sometimes, the length of the name can be 6..100, other times 5..10 but the other constraints need to stay in place).

Not all my ActiveRecord objects extend the same class.

Has anyone tried to use a mix-in to achieve this?   Any other idea?
