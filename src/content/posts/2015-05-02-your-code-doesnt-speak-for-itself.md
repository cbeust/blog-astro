---
title: Your code doesn't speak for itself
date: '2015-05-02T08:11:20'
slug: your-code-doesnt-speak-for-itself
categories:
- General
---

I recently reviewed a commit that said "Fix the list view bug". I reviewed it, saw that it was fixing an off-by-one error, approved it and moved on. 

A few days later, another commit went by that said "Really fix the list view bug". This fix was a bit more involved and caused the first item in the list view to sometimes receive the wrong styling. I then realized that I shouldn't have approved the first commit without asking a few more questions. 

Here is another scenario. Let's say you are asked to review the following code: 
    
    
    public static int compare(@Nonnull Long a, @Nonnull Long b) {
    	return a.compareTo(b);
    }
    

Seems pretty harmless, doesn't it? No reason not to approve it. 

How about this one: 
    
    
    /**
     * @return 0 if the two numbers are equal, 1 otherwise.
     */
    public int cmp(@Nonnull Long a, @Nonnull Long b) {
    	return a.compareTo(b);
    }
    

Now we have a problem: the code and the comment do not agree. This should not be approved before asking the developer to fix this (either change the comment or change the code). 

There is this prevalent notion in the software world that good code doesn't need comments, that it stands on its own. Or that comments are a code smell. 

Irritatingly, this myth just won't die despite repeated evidence that comments are sometimes vital to code correctness. Proponents of this myth point out that it's easy for comments to get out of sync with the code (see the example above) and decide that because this approach is not perfect, it should be avoided altogether. 

This is a false dichotomy that is easily avoided by making it clear to your teammates that both code and comments need to be reviewed. 

The problem with the first example that I gave is that the developer failed to disclose what the intent of his code was. The code type checks, is correct and fixes a bug, but it turns out to be doing something different than the developer intended, and the reviewer would have caught it if the developer had explained what the intent of his code is. 

Not all code needs comments, but certain pieces of code are useless and can't be verified without comments. 

Your code says "What?", your comments say "Why?". Sometimes, you need both in order to assess the correctness of a commit. Just make sure you review comments as seriously as you review code.
