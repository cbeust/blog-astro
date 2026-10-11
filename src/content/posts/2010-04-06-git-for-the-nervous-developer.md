---
title: Git for the nervous developer
date: '2010-04-06T12:44:24'
slug: git-for-the-nervous-developer
categories:
- General
comments:
- id: 8106
  author: Davide Del Vento
  date: '2010-04-06T15:41:35'
  content: 'Just curious: did you or your team try any alternative DVCS such as Mercurial or Bazaar? To me they seems more suitable to the kind of workflow you described (but I have to confess I used them just a little bit - and I didn''t use git at all, probably because I was too scared by the possible brain leak through my ears :-)'
  replies: []
- id: 8107
  author: Cedric
  date: '2010-04-06T17:32:30'
  content: 'Hi Davide,

    I''ve heard a lot of good things about Mercurial but I never used it myself. It seems to provide a subset of the features offered by Git and be a bit slower, but it''s definitely a decent alternative to Git.

    As for Bazaar, let''s just say that it doesn''t seem to be very liked :-)

    All in all, I think that Git has enough momentum to become the de facto DVCS standard in the next couple of years, which is why I decided to focus my efforts on it.'
  replies: []
- id: 8108
  author: Ray Jirou
  date: '2010-04-06T22:05:29'
  content: 'in my experience, changing from svn to git was quite a nightmare, our team occasionally lost some of the code changes. After a while, we realize that in git, we cannot pull an uncommitted source, while its safe to do it in svn.

    I guess changing to a dvcs from a centralized vcs require us to ''reset'' our mind about how to do things with it.

    a very good post, I wish I read this a few months ago, when my team was migrating to git.'
  replies: []
- id: 8109
  author: Stephen
  date: '2010-04-06T23:37:04'
  content: 'I went through a svn-&gt;git migration and hacked together a post-commit script as a hacky way to preserve monotonous revision numbers in the centralized repo:

    http://github.com/stephenh/git-central/blob/master/server/post-receive-commitnumbers

    It just makes a tag for each commit. We then started using the tag in our build ids/version stamps/etc. I have no idea how large a repo this would work on (e.g. Apache''s ~1 million-commit beast of a svn repo), so YMMV.

    Very cool that you''re contributing to gerrit--I''m looking for any excuse to try it. Currently stuck with hosted jira/crucible. The github folks need to integrate gerrit as part of their renewed code review efforts, perhaps then I could swing doing a trial project in it.'
  replies: []
- id: 8110
  author: tarelli
  date: '2010-04-07T03:16:19'
  content: thanks for the post, nice non-biased take!
  replies: []
- id: 8111
  author: Sid
  date: '2010-04-07T03:54:36'
  content: '&gt; It seems to provide a subset of the features offered by Git

    That is incorrect. It is currently a superset of the features offered by Git, and with a much saner UI to boot.'
  replies: []
- id: 8112
  author: JB
  date: '2010-04-08T03:07:13'
  content: Thanks for this interesting article. I tried to click on the "Git magic" link, and got a 404. The URL seems to have changed to http://www-cs-students.stanford.edu/~blynn/gitmagic/
  replies: []
- id: 8113
  author: Tero
  date: '2010-04-08T12:28:43'
  content: 'I have to say that I fully agree your feelings :) We are at work still using Subversion and we don''t even has plan to change this, but for my personal projects I have used both Git and Mercurial.

    Mercurial has more Subversion like UI and that is why I now prefer Mercurial over Git.

    Thank you for nice post.'
  replies: []
- id: 8114
  author: Cody
  date: '2010-04-08T15:07:16'
  content: 'Very nice high-level writeup of the advantages of Git/DVCS.

    I''m personally a Bazaar fan.  It might not *seem* to be very liked, but there are quite a few of us using it and enjoying its features and nice UI.

    As you mentioned, switching to a DVCS is much easier to do as a single user, and this is one of the areas that Bzr shines.  The bzr-svn plugin offers the best DVCS/SVN integration I''ve seen. It makes it really easy to play with branch juggling, local branches, etc. without having to change the central repository that your organization is using.   Plus it''s really satisfying to be able to continue working and committing when everyone else gets stopped by an SVN outage. :p

    For more info:  http://wiki.bazaar-vcs.org/ForeignBranches/Subversion'
  replies: []
- id: 8115
  author: Bill K
  date: '2010-04-08T15:25:22'
  content: 'One thing I''ve always wondered about DVCS systems.  Many teams I''ve worked on are small enough not to branch.  I really dislike merging--enough that I''ll often revert a confused merge and re-create the edits before I attempt to guess what the intent of the other person might have been.

    Doesn''t using a distributed VCS remove that option?  Or perhaps they are so good at merging that you really never need to deal with it?'
  replies: []
- id: 8116
  author: Cedric
  date: '2010-04-08T15:30:19'
  content: 'Bill:  it looks you are manually doing something that git automatically does for you with a command called "rebase".

    In a nutshell, `git rebase` tells git to replay all your changes on top of the current HEAD, thereby completely avoiding the need for merges (assuming that your changes don''t overlap with the changes that were made by other people, in which case a merge will be unavoidable).

    As for the more general question, branches bring me so much benefit that the cost of merging is usually worth it.'
  replies: []
- id: 8117
  author: Links &laquo; Otaku, Cedric&#039;s weblog
  date: '2010-04-10T07:49:32'
  content: '[...] About                   &laquo; Git for the nervous developer [...]'
  replies: []
- id: 8118
  author: Newsletter KW 16 / 2010
  date: '2010-04-19T15:30:07'
  content: '[...] Mit Git habe habe ich mich bisher noch nicht besch??ftigt, aber viel Gutes geh??rt. Vielleicht h??lt ja mal [...]'
  replies: []
- id: 8119
  author: 'Destillat #29 &#8211; Versionierung, git | duetsch.info - Open Source, Wet-, Web-, Software'
  date: '2010-04-20T00:11:21'
  content: '[...] Git for the nervous developer [...]'
  replies: []
- id: 8120
  author: 'git top links: 2010-7 &laquo; git blog'
  date: '2010-07-16T14:13:42'
  content: '[...] Git for the nervous developer (10): Explaining git from a convert [...]'
  replies: []
- id: 8121
  author: Jack9
  date: '2010-09-10T11:26:50'
  content: 'I''m often puzzled by people talking about the pain of VCS ticket switching. Doesn''t everyone branch by ticket, work (switch around branches), tentative finish, test, merge trunk to ticket branch, re-test, elevate and remove branch?

    Subversion is perfect for this, as the branch can be removed from physical existence, but still exist in the version record. This tracking of temporary branches and anywhere the words "make sure to" is a place where there will be problems, inevitably. Seems unnecessarily messy and definitely sloppy.'
  replies: []
- id: 8122
  author: Ad Hoc Version Control With Git &laquo; Josef&#039;s Blog
  date: '2011-08-10T17:26:16'
  content: '[...] nice recent blog post by C. Beust, &#8220;Git for the nervous developer&#8221;, provides a nice perspective on using Git, [...]'
  replies: []
- id: 8123
  author: Git is magnificent. | incrediblog
  date: '2012-01-25T16:35:22'
  content: '[...] reading: Designers read??Git: A Designer??s Perspective. Developers read the article above and??Git for the nervous developer.  Extracurricular: A SlideShare presentation on the more technical aspects of Git.  Git options on [...]'
  replies: []
- id: 8124
  author: Sumana Harihareswara
  date: '2012-03-12T17:27:35'
  content: 'Thanks for your blog post!  I will probably circulate it to the MediaWiki development team, which is switching to Git.

    Just out of curiosity - any thoughts on Gerrit?'
  replies: []
- id: 8125
  author: Pourquoi j&rsquo;ai un ??-priori contre git | riduidel&#039;s wordpress
  date: '2014-01-08T01:01:16'
  content: '[&#8230;] git n&#039;est pas exempt de probl??mes, le moindre n&#039;??tant pas sa ligne de commande, r??put??e &quot;d??licate&quot; ?? manipuler. Et personnellement, si il y a bien un truc qui me rend fou, [&#8230;]'
  replies: []
- id: 8126
  author: Remove CVS folders from Git version control | T. C. Mits
  date: '2014-02-15T16:30:54'
  content: '[&#8230;] Git for the nervous developer [&#8230;]'
  replies: []
- id: 8127
  author: Ad Hoc Version Control With Git | T. C. Mits
  date: '2014-02-27T15:36:17'
  content: '[&#8230;] nice recent blog post by C. Beust, &#8220;Git for the nervous developer&#8221;, provides a nice perspective on using Git, [&#8230;]'
  replies: []
---

![](https://raw.githubusercontent.com/cbeust/beust-com/master/pics/gitx.png)

I've been meaning to put together an article on Git for quite a while but I've always ended up postponing it for various reasons, one of which being that there is already so much material describing Git inside and out that I wasn't quite sure I could add anything to the subject. 

After thinking about this a bit more, I decided to go ahead anyway but to give this article a slightly different spin than what you might have read elsewhere. For this reason, you won't find in this post any elaborate discussion of Git's branching model, command line switches or graphical tools. I do include at the end of this article a list of references that covers all the technical aspects of Git that I'm glossing over today. 

This article is meant for people who are interested in Git, either personally or as a corporation, but wondering what making the jump will really mean and what to expect. 

What you won't find in this post: 

  * Fanboy opinions ("Git is so good that it cured my asthma"). 
  * Hater opinions ("Git's command line syntax is so arcane that it will make your brain leak through your ears"). 
What you will find in this post is the perspective of someone who: 
  * ... was forced to switch to Git 
  * ... has become reasonably comfortable with it (although by no means an expert) 
  * ... but still remembers the pain it took to get there. 


## State of the union

It's hard to argue with the fact that Git has gained a lot of momentum these past years and that it's slowly eclipsing other more popular Version Control Systems (VCS), such as Subversion or Perforce. Just a few days ago, [the Subversion team released their roadmap](http://lwn.net/Articles/381794/) which promptly generated [discussions](http://www.reddit.com/r/programming/comments/bmm9c/svn_roadmap_is_svn_dead/) wondering whether Subversion wasn't dying (I think it's a bit exaggerated and the Subversion team is making the right decision by focusing on the non distributed aspect of their VCS). 

## What to expect

Switching to Git can be very easy or absolutely traumatizing, depending on how you approach it. Individual users will usually have a pleasant experience since they can start small and expand their knowledge from there, but corporations have to take a big jump, retrain entire teams of developers, adjust their tools and their expectations and be ready to give up on a few benefits that they don't think they can live without. 

### As a user

This is undoubtedly the best way to start with Git. Start by picking a hosting service, which can be either remote (e.g. [Github](http://github.com)) or local (your own machine), and from that point on, you can pretty much get by with just a few commands: 

  * `git add [file]` to tell Git to track a new file. 
  * `git commit -a -m "Commit message"` to commit the changes you have made to your local repository. 
  * `git push` to push your changes to the "server". 
  * Additionally, you will probably want to learn about `git clone` or `git pull` to download a repository to your machine. 
You can go very far with these simple commands, which mimic almost exactly the work flow of a non-distributed VCS. This is the best way to get comfortable with Git until you get bored, at which point you can start exploring some of its advanced features. 

### As a team

Switching an entire team or organization from a regular VCS to Git is a complex project that will require managing not just the technical complexity but also the users' expectations. I could write a lot of pages on this topic alone, but for now, I'll just give you a few quick tips: 

  * The transition will work much better if several of your employees are already familiar with Git and can help you evangelize the idea and provide support to reticent users. 
  * Be very clear on the features that they will have to learn to live without (e.g. monotony, see below) and emphasize the personal benefits (e.g. branch juggling, see below as well). You won't get a lot of credit by telling them that they can inspect each other's repositories, but they will most likely appreciate the fact that moving between several lines of code is trivial. 


## Distribution

You will find plenty of definitions for what a "Distributed" Version Control System is, but let me just sum it up for you and share a dirty little secret at the same time: 

  * A DVCS doesn't have a central server. 
  * I bet that most people using a DVCS are still using a central server. 
Confused yet? 

Let me rephrase this: I think the DVCS aspect of Git is not its main strength, but it does provide a lot of benefits which are really what get people hooked to Git. 

The one thing you need to know when you are using a DVCS such as Git is that whenever you work on a depot on your computer, you are carrying the entire repository with you. I'm simplifying this a little bit, but it's the general idea. In contrast, centralized VCS will usually allow you to create "views" or "clients" on your local machine, but the only place where the full repository is stored is on the server (and hopefully, its backups). 

Carrying a full repository on your machines sounds like a crazy idea but it comes with a lot of benefits ("cheap branching" and "easy offline work" are two benefits that developers will immediately appreciate) and, more importantly, it works, mostly because Git is extremely efficient in the way it stores the representation of that repository (the fact that hard drives are cheap doesn't hurt, of course). 

Since every user carries a full repository on their machine, everyone is a potential server, which means it's very easy for developer A to "pull" a change from developer B in order to inspect it and then discard it or merge it in their own repository. This sounds very useful, but in practice, I think that most regular Git users will not take advantage of that feature, preferring to push to and pull from a central server. And by "regular Git user", I mean "everyone except the Linux kernel team". 

## Taming the beast

Git's user interface is probably its greatest weakness. It's inconsistent, counter-intuitive and it often reappropriates verbs and nouns that have a clear meaning in the VCS world and it makes them mean something else. 

I've been trying to come up with a lot of ways to rationalize this bizarre and arcane user interface, but in the end, all I can tell you is: "Deal with it". 

I know, it's sad, but there is really no other way. Here is an analogy that might help, though: to me, learning Git is very similar to learning a foreign language. Natural languages are notoriously hard to learn for adults because their organic growth has resulted in all kinds of inconsistencies and oddities. At the end of the day, the only way to learn a foreign language is to memorize, memorize and memorize. As years go by, practice make memory regurgitation more automatic and the use of that language requires less and less conscious effort, but the learning curve is something that just can't be avoided. 

Git is very similar in this respect. Don't try to understand why `checkout` suddenly means something completely different from what you were used to or to explain the various switches of the `reset` command: memorize the recipes and just apply them. And don't be shy about asking seasoned Git users, they are used to getting these questions and they will give you instant answers that will save you a lot of time hunting down the documentation. 

However, there is hope for those of us who want to do more than regurgitating Git recipes: if you are serious about becoming comfortable with Git, you should definitely spend some time trying to understand its internals. I'm referring to the graphs, objects, commits, heads and branches that form the backbone of Git. As opposed to its ugly user interface, Git's underlying infrastructure is very solid and extremely well designed. On top of that, it's actually not that hard to understand, and once you do, a whole new world will open up. 

Once you understand these internals, you will be able to solve problems conceptually by simply visualizing the operations that need to be done on that underlying structure (moving the head there, branching here, rebasing this, merging that, etc...). Once you have solved that problem conceptually, applying the awkward Git user interface to actually do the work will look much easier, albeit still not very natural. 

## The end of monotony

Centralized VCS such as Subversion and Perforce offer a very popular feature: monotonic revisions. Whenever a new change list is committed to the main repository, it receives a unique number that's guaranteed to be greater than the previous submission. This makes it very easy to compare files and commits chronologically and to determine which one is the most recent. 

Unfortunately, you will have to give up this feature with a DVCS. Because of its distributed nature, it's not possible (or rather, "practical"/"easy") to offer such a monotonic number. There is no denying that this feels like a huge step backward, especially for large teams. 

However, the absence of such a feature reflects the more fundamental reality that these numbers are not always accurate, and that the bigger and more active and branched out a project is, the more meaningless they become. When branch 2.1 receives commit #720 and branch 2.0.4 has #742, what do these numbers actually tell you about these change lists? 

The good news is that there are ways to make up for the absence of monotony, and the main difference is that the tagging will be performed by humans, which is what a lot of VCS-based organizations are already doing anyway. 

## Branch juggling

When you are trying to make the case for Git in front of a skeptical crowd, it's important to provide anecdotes that developers can relate to. I promised that this post would avoid content that can be easily found elsewhere, but I have to talk a little bit about branching because for me, understanding this was the first time that I actually acknowledged a very tangible advantage of Git over other source control systems. 

The daily routine of a software developer typically involves a lot of multitasking. As much as you want to focus your work on "feature A" and you don't want to be interrupted, there are many reasons why you might be forced to put your work on hold and start working on "bug B" or "feature C" before being able to resume work on "feature A". 

Switching back and forth between tasks has always been painful with regular VCS but Git makes it very smooth. That's all I'm going to say about this topic, but if you want to find out more, most of the links that I supply at the end of this article will show you how to achieve this goal very early on in the tutorial. 

## Gerrit

I'd like to conclude this little overview by saying a few words about a tool that we, the [Android team](http://android.com), are using a lot for our Git work: [Gerrit](http://code.google.com/p/gerrit/). 

Gerrit is a web based application that allows you to perform code reviews for Git repositories. It's basically a server that acts as a gatekeeper: developers push their Git changes to it, other developers review them and when these changes are approved, Gerrit pushes them to the main repository on behalf of the original submitter. If you're curious to see Gerrit in action, here is the [Android open source Gerrit](http://review.source.android.com/#all,open,n,z). 

The reason I mention Gerrit (besides the fact that I contribute to it in my 20%) is that it represents an interesting compromise where a DVCS is used as a centralized VCS. You might wonder if using a DVCS with a central server is not a bit paradoxical, and I can't argue that it is in a certain way, but I see this as having the best of both worlds. 

The Gerrit server acts as a canonical repository from where developers can clone their own repositories but all the facilities offered by a DVCS (direct push/pull between developers) are still possible and fully compatible with this model. For example, you could pull a change from a fellow developer, makes a few additional changes and then push that change to Gerrit so it will be committed to the canonical repository. After that, both developers can pull and merge in order to reconcile their local repository with the central one. 

## Wrapping up

First of all, I'd like to apologize for the amorphous nature of this post. I tried to structure it in a way that would show some linearity and consistency, but this is basically a big brain dump of points that have been twirling in my head for a while. 

Looking back, it took me a while to warm up to Git (quite a while), but now that I'm here, I really enjoy using it. As I hinted throughout this essay, the benefit will probably not be very apparent for very small teams that mostly commit and push (although you will probably find value in branch juggling even if you're the only one on your project), but as the team and the number of committers and releases grows, you will find that Git provides an undeniable increase in productivity. 

## Resources

  * [Pro Git](http://proGit.org/book). This is a free PDF book written by Scott Chacon, a Git expert who happens to be also very good at explaining Git concepts very clearly. 
  * [The Git community book](http://www.scribd.com/doc/7502572/The-Git-Community-Book). Another book, written by the entire Git community, so not as consistent as Chacon's book but with quite a few useful tips as well
  * [Git user's manual](http://www.scribd.com/doc/14066532/Git-Users-Manual), written by Linus Torvalds and a few other authors. 
  * [Git magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/). A small and digestible overview of the main concepts. 
  * [Git ready](http://Gitready.com/). A web site dedicated to providing Git recipes to solve common problems. A great time killer when you feel like you'd like to learn something about Git but you're not sure what. 
  * [Git documentation](http://Git-scm.com/documentation). A misleading name that might lead you to think this is the authoritative documentation for Git, which it's not. It's more like a hub that points to other Git materials. 
  * [Embrace the Git index](http://www.scribd.com/doc/2545829/Embrace-The-Git-Index). A good overview of one of Git's core components. 
  * [Smacking Git around](http://www.scribd.com/doc/15008433/Smacking-Git-Around-Advanced-Git-Tricks). Another document by Scott Chacon, this time showing advanced tricks. 
  * [Git from the bottom up](http://www.scribd.com/doc/6377254/Git-from-the-bottom-up-by-John-Wiegley). Save this for the end and only if you want to become a Git expert. This book explains how Git stores its objects and dives deep into the Git internals. You don't really need to know any of this to be a happy Git user. 
  * [Git manuals](http://www.kernel.org/pub/software/scm/git/docs/). UNIX manuals usually represent the worst possible way to document tools, but the Git manuals are a pleasant exception in this ocean of mediocrity because they do something right: they show you examples for every single command. See for example the manual for [`checkout`](http://www.kernel.org/pub/software/scm/git/docs/git-checkout.html) (scroll to the bottom).
