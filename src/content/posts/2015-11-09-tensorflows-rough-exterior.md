---
title: TensorFlow's rough exterior
date: '2015-11-09T22:51:45'
slug: tensorflows-rough-exterior
categories:
- General
- Kotlin
---

Like many others, I have paid very close attention to Google's TensorFlow announcement and I'm planning to invest a decent amount of time to dive into it and understand it but watching [Jeff Dean's video](https://www.youtube.com/watch?v=90-S1M7Ny_o&t=21m2s) about it, I couldn't help but take notice of one of the code samples that he shows: 
    
    
    graph = tf.Graph()
    with graph.AsDefault():
      examples = tf.constant(train_dataset)
      labels = tf.constants(train_labels)
      W = tf.Variables(tf.truncated_normal(rows*cols, num_labels]))
      b = tf.Variables(tf.zeros([num_labels]))
      logits = tf.mat_mul(examples, W) + b
      loss = tf.reduce_mean(tf.nn.softmax_cross_entropy_with_logits(logits, labels))
    

What a mess... 

I realize this is just one of the two front ends (Python, the other being in C++) but the syntactic conventions of the snippet above are all over the map. 

I see capitalized functions (`Graph()`) when most of the functions are lowercased. Capital variables (`W`) and lowercase ones (`b`), both of which the result of the same function. Functions using underscores and others using capitalized camel case. There just doesn't seem to be any rhyme nor reason to the conventions. 

The only style that's not represented in this short snippet is straight camel case. 

This hurts my eyes. Hopefully, spending some time with this fascinating tool will demystify it somewhat. Or maybe it will motivate me to write a front end I feel more comfortable with, say in Kotlin.
