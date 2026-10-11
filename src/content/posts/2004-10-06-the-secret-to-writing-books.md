---
title: The secret to writing books
date: '2004-10-06T06:31:27'
slug: the-secret-to-writing-books
categories:
- General
comments:
- id: 2562
  author: ''
  date: '2004-10-06T08:38:58'
  content: 'Structured text (a la wiki) is my favorite writing format: you can use any tool to write, manage your content with powerful tools (CVS, etc) and yet put the structural markup (not formatting) in while writing.

    IMHO the small number of wiki codes needed for article or book writing don''t get in the way too much, I find it to be a good compromise between "kilometer writing" and the hassle of typing in a wysiwyg thing.'
  replies: []
- id: 2563
  author: Radu Popescu
  date: '2004-10-06T09:59:55'
  content: 'Cedric, I think though your argument is valid and it''s something most of us learn the hard way, DocBook documents don''t really fall into this category.

    Writing in DocBook helps with logical layout, there''s not much formatting to do, or at least that I know of.

    You have your code, quote, em and a couple of other tags and that''s about it, the rest is all about sections, sub-sections and friends, and lists, tables, figures.

    You really don''t get to waste much time on things like formatting; you can''t slip into pointless tasks very easily.

    Cheers

    PS: why is the email address required ? With so much spam around, I''m hesitant to place it on public pages.'
  replies: []
- id: 2568
  author: merg's blog
  date: '2004-10-06T12:34:06'
  content: '<strong>Tech writing: content comes first</strong>

    Just as I am using DocBook for a few projects I read the following blog at Cedric''s page which also refers to Bruce Snyders page. Couldn''t agree more. Before you know it your fooling around with another extra style...'
  replies: []
- id: 2564
  author: ''
  date: '2004-10-06T20:48:58'
  content: 'Thanks for the tips, Cedric. This is exactly what I''m doing with the current chatper - writing it in VIM without any formatting whatsoever. I''ll style it later when I''m finished to get it ready for the editing cycles. I still wish that once I took the content into Word that there was a way to go back to XML for full round trip editing (XML->Word->XML) without losing the styles.

    On a side note, Jason van Zyl contacted me about this topic as well and we discussed it a bit. Please see my latest blog entry on this saga.'
  replies: []
- id: 2565
  author: Neil Ellis
  date: '2004-10-07T15:11:57'
  content: 'Hey your blogging software doesn''t like the word b-e-a-s-t :-) :-) LOL :-)

    I gave in and just use the b-e-a-s-t Word. You can roundtrip the XML if you are

    a) Are dedicated

    b) Have far too much time on your hands

    c) Slightly warped

    Ultimately WordML preserves enough information that it can pass through a stylesheet back to sensible XMl and vice versa. It''s really not hard. I''ve done it one direction and can see it''s not too hard the other. However my editor would have my dangly bits for breakfast if I waste anymore time doing this sort of thing :-)

    So I use the b-e-a-s-t instead :-)

    Good luck!'
  replies: []
- id: 2566
  author: Heiko W. Rupp
  date: '2004-10-08T11:57:33'
  content: 'Cederic,

    I like your notion of "kilometer writing". This is definitively the right thing to do. But it is also a good idea to directly put some markup while you type, as it gets harder to remember what is what when the text is completely unstructured.

    Heiko'
  replies: []
- id: 2567
  author: rob
  date: '2004-11-17T06:51:03'
  content: I think this could also apply to writing code.
  replies: []
---

Bruce Snyder is feeling some [ distress about Word](http://jroller.com/page/CastorLive/20040926#microsoft_word_is_killing_my):

> Unfortunately I am required to use Microsoft Word to write this book. Anyone who knows me knows that my choice would be [VIM](http://vim.sf.net/) but I haven't figured out how to author XML documents that make use of [DocBook](http://docbook.org/) and keep some type of styles intact upon conversion to Word. 

Bruce, here is the secret: don't mix the task of writing with the tax of formatting.  
  
First, write the text. Word, emacs, vi, notepad, it doesn't matter. Just write the text, the code, the remarks, maybe you can use a few newlines to help you visually, but perform *no* formatting whatsoever. I call that "Typing kilometer text" (yeah, I am still a metric system person).  
  
Then when you're done with a decent chunk (I usually do that after a chapter), proofread yourself and start using the mouse to format your text.  
  
I wrote my PhD dissertation and a book using this technique and the amount of productivity I gained was just astounding. Plus, it allowed me to leverage the strengths of all the tools (emacs and Word) while not being hampered by their weaknesses.  It's also a great way to "stay in the zone" when you are on a good writing roll, and you don't get distracted by stupid formatting issues.

And as a matter of fact, I just noticed I use this very technique for my weblog entries as well...  You learn something every day.
