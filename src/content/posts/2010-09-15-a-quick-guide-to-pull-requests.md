---
title: A quick guide to pull requests
date: '2010-09-15T07:45:53'
slug: a-quick-guide-to-pull-requests
categories:
- General
comments:
- id: 8464
  author: Seth Mason
  date: '2010-09-15T10:48:25'
  content: 'You can combine the `git remote add` and `git fetch` with `git remote add -f ....`

    Nice article.  Thanks for the reminder about `git am`'
  replies: []
- id: 8465
  author: Ray Kiddy
  date: '2011-08-06T15:18:55'
  content: "Helpful, but\n$ curl 'https://github.com/projectwonder/wonder/pull/43.patch' | git am\nfatal: Not a git repository (or any of the parent directories): .git\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100 17019  100 17019    0     0  25569      0 --:--:-- --:--:-- --:--:-- 36210\ncurl: (23) Failed writing body (0 != 1189)\n$\nNot quite."
  replies: []
- id: 8466
  author: Ray Kiddy
  date: '2011-08-06T15:26:51'
  content: Never mind. Pilot error. I was not in the correct directory.
  replies: []
---

It's pretty common for projects hosted on [GitHub](http://github.com) to receive "pull requests": requests from people who have cloned your project, made a modification to it and then asking you to merge their changes back into the main project. 

There are a lot of ways you can handle these pull requests, here are some of them. 

### Using GitHub's web interface

If you go to the "Fork Queue" panel of your GitHub dashboard, you will see all the pull requests that have been issued by contributors. From this page, you can apply changes directly to the specified branch, which means that you will automatically get them on your local machine next time you pull. 

I rarely use the web interface because I usually want to test the changes on my machine before committing them. I also usually want a few changes to be made to the commit before merging them, such as adding comments, cleaning up indentation, etc... and I find that it's just faster to do this myself than to request it with comments on the web interface. 

Having said that, the web interface is convenient to quickly apply cosmetic commits that don't change any code (documentation updates, space clean up, etc...). 

### git am

The `git am` command allows you apply a diff to your working directory. Every pull request comes with a corresponding patch URL that you can retrieve and apply directly. You create this URL by adding ".patch" to the address: 

```bash
curl http://github.com/cbeust/testng/pull/17.patch | git am
```

This works with regular commits as well: 

```bash
curl https://github.com/sclasen/jcommander/commit/bd770141029f49bcfa2e0d6e6e6282b531e69179.patch | git am
```

After this, you can just push your branch. 

I find this very convenient to apply patches that are coming from contributors that are sending a patch for the first time. Since I'm not sure whether this person will contribute more patches, there is no point in creating a remote branch for them yet, so this kind of one off procedure is ideal. 

### Merging the remote branch

This approach and the next require you to create a remote tracking branch for the user that sent you a pull request. Once you have identified in which branch they created their patch (usually master, but savvy users tend to create a specific branch to make sure that only the commits that they want will be part of the pull request), you simply create a remote tracking branch, fetch it, merge it in your own and then push: 

```bash
      # add the remote branch
$ git remote add nullin git://github.com/nullin/testng.git
      # fetch it
$ git fetch nullin
      # merge it into my current branch
$ git merge kneath/error-page
      # push
$ git push origin master
```

### Cherry picking

This is similar to the previous approach and it is recommended when the pull request contains some extra commits that you are not interested in. They might be there either because the author of the pull request wants you to merge them but you disagree, or they simply made a few mistakes and added unrelated commits to their request (this can happen if they didn't bother creating a specific branch for the pull request). 

The procedure is similar to the one above except that instead of merging the full remote branch, you just cherry pick the commits you want: 

```bash
      # add the remote branch
$ git remote add nullin git://github.com/nullin/testng.git
      # fetch it
$ git fetch nullin
      # (inspect the commits on the nullin branch)
      # only pick the commits I'm interested in
$ git cherry-pick commit1
$ git cherry-pick commit2
      # push
$ git push origin master
```

Have I forgotten anything? How do you handle pull requests?
