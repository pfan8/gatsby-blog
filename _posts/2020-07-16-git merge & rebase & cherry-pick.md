---
layout:     post   				    # 使用的布局（不需要改）
title:      Git Work Flow 	# 标题 
subtitle:   something you need to know for teamwork			#副标题
date:       2020-07-16  			# 时间
update_date:       2020-07-16  			# 时间
author:     pfan8 						# 作者
header-img: img/post-bg-github-cup.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	[Git-Git Workflow, Git-Git merge]							#标签
---
# Preface

Since I come to a place where I need to speak English everyday, I wanna have a try to post this blog with English, it seems intersting and challenging, even for the future, maybe we can see a Janpanese blog too!!! =w= this idea came into my mind just now, but few seconds later I realize that's gonna be a long way to go, however, nobody knows future except god. Ok, talk a load of garbage, let's dig into Git flow!

# Team workflow

In order to be clear to process of Git (or other version control tools), we need to take a landscape for team workflow, which will lift you up from concrete git command whenever you get confused with them.

There are several workflows desgined by company managers who wants to make their team collaborate better, and the main ideas of different workflows will cause different solutions under conflict situation, I will talk this later. Actually, GitFlow is the most popular and worldwidely used workflow for team work, which works in my team.

Gitflow Workflow is a Git workflow design which was first published and made popular by Vincent Driessen at nvie. The Gitflow Workflow defines a strict branching model designed around the project release. This provides a robust framework for managing larger projects.

What I understand this workflow is that we make three type branches which will make managering different parts of code from different team members, they can take own's work finished seperately and merged them togather easily. The main idea is to check carefully and log commit history made by every member, thus problem can be positioned and fixed faster. 

The next part is to introduce these 3 branches (`master`, `develop`, `feature`), once you fully understand the reason for seperating 3 branches and even higher level design thought, it's impossible for you to make mistake on git commands. in fact, only a few patience you need to take to study this, then you will find the git world is open to you.

# Git flow

## Master and Develop branches

once you constructing your product, you must make every version work well and there should be few bugs for users who will use your product, your released product need to be stable, useful, and even friendly to user, which means if you build a web site or app, you may use the most powerful server to run application and thus make it faster. This will make some diffs between your release production and develop production, the former is used to serve your customer, the latter is used to develop new things (which is called `feature`, we will use this term later).Actually, we call the former branch in Gitflow `master` branch, which must be reviewed and tested before we make a new function (called `push a new commit`) into it, thus we can get a cleaner and safer branch to build and take them to user. For example, you can test many test cases which usually won't happen, one of them is called `corner case`, such as a user sign up and cancel the account repeatly, this must be a rare case, but user can be upset if we cannot response to them correctly, even more, what if such action mess up our system and break other users? Yes, you may never see the actual situation, but I tend to think of it as a possibility model, you can imagine it like your interview, the more knowledge areas you coverd, the more possible for you to achieve it, of course these areas should be related to what the job or industry need. I thinks this metaphor is quite accurate.

So, if you absord my words above, you will get what the picture here says: as for your `master` branch, there will be less but more stable commit, and on your `develop` branch, you can test more cases you wanna to check, it maybe a bug fix, or new feature, or backend/architecture's optimazation. **Make sure to sync develop branch with master branch once master branch push a new commit, only this way will make sence for Gitflow design.**

![](https://wac-cdn.atlassian.com/dam/jcr:2bef0bef-22bc-4485-94b9-a9422f70f11c/02%20(2).svg?cdnVersion=1131)

one more thing to say, you can use version number to signature each commit, or some other way which you can track your commit action or history by this tag (such as date info in my company, this is decided by your company rules), in industry they usually use three numbers, and make them togather to build version number, for example

```
V 1.2.0
```
`V` means version, the first part `1` should be a baseline for your current production, if this part number changed, your must take a makeover to your product, which user can obviously feel. The second part `2` maybe several different develop flow, may be leaded by different team in big company, or just different aspect for your production, but it should also be quite a big change, and stable to use. The last part usually shows your new feature, you can let it to small part of your customer and get some feedback on these new features, therefore it may lead to bugs somehow, but worth. I believe the nightly version of some famous works such as VS-Code, Tensorflow, may work like this way. and you can also see them as that the first part of `1` means `master` branch, the second part of `2` means `develop` branch, the last `0` means `feature` branch. Of course, there are still some subtle difference between them, but you can get most part of it.

I don't want to say much to practice command and teach you step by step, because I believe the design idea/concept is a shorcut to mastering a skill/tool, once you get the idea, you can learn the related commands by yourself, it gonna be faster than the way I tell you them straightly, as long as the question is a consumption of the brain, this rule will always work, until now I don't miss it.

However, I will give several main commands for two reason:
1. log here for me if I forget them in the future
2. make this blog complete

So, back to the topic of branch, if you want to create `master` branch and `develop` branch, you may use the following commands: 

```sh
git branch # see all branches and HEAD info
git checkout master
git pull
git checkout -b develop
git push -u origin develop
```

When using the git-flow extension library, executing git flow init on an existing repo will create the develop branch:

```sh
$ git flow init
Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []

$ git branch
* develop
 master
```

## Feature branch

In Gitflow, what makes team work really works is `feature` branch, as I mentioned above, every unit task should be fullfilled in `feature` branch, which can be seperately coded by different member. Besides, one main advantage for `feature` branch is that we can easily backup specific commit which is completed by members who finished their test, other members can continue their work and wait for next commit on `develop` branch, thus to improve effciency of whole team work.

![](https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20(2).svg?cdnVersion=1131)

In pracetice, team members usually code on their own feature branch and test on their local machine first, after first check, they can push feature branch to remote github repo and create a `PR`(pull request) which may need a reviewer in your team (usually your mentor or TM), after they approve code on your feature branch, the feature branch come to merge into develop branch, then test engineers or QA will test your function to check if these functions work well on test server, that's the second check. After this double-check, it should be safe enough to merge new code to master. To avoid some accidents, you can leave new develop branch a few days before merging it into master branch, during the period your team member may use the test server and find some bugs which have not been found before, thus to make changes safer.

```sh
git checkout master
git checkout -b feature_branch # the name is usually engineer's taskID and even adding engineer name
git commit
git push # may push multiple times until engineer finishing task

# create a PR first on github
# it will merge them into specific branch(usually master or develop) automatically
# otherwise your TM can manually merge them as below
git checkout develop
git merge feature_branch
git push
```

## Release branch & Hotfix branch

there are still 2 extra type branches which is popular used, one is `release branch`, the other is `hotfix branch`, the former is more popular. I'd like to put them togather and seperate from `master`/`develop`/`feature` branches since the purpose and working style is different. The release branch or hotfix branch is more like a point, while master,develop and feature branch is line, use the picture to explain this:

![](https://wac-cdn.atlassian.com/dam/jcr:a9cea7b7-23c3-41a7-a4e0-affa053d9ea7/04%20(1).svg?cdnVersion=1134)

As you can see, the `release branch` will be created only when we want to merge `develop` into `master`, this way can be more formal and easy to track history. Moreover, a team usually have a plan for the future tasks, with release branch TM can check and glance over what we have done, thus to get a clear mind on strategy steps. Therefore, `release branch` may exist only for few days, generally one day. Once merged into `master branch`, their mission is complete with lifecycle ending, since then they will not and should not be checkout from, if you want to start a new feature branch, you need to checkout from master, or at least develop branch, which can ensure your branch history clean and correctly. Until now, I found that **most conflicts are stemmed from here, if you don't checkout from `master branch`, your code can be dirty, it means your feature branch will have some commits by others which shouldn't been merged into master**. Even checkout from `develop branch` can be polluted because some new features on test server may not take into `release branch`, maybe still under testing or canceled according to later design.

The other type of "point" branch is `hotfix branch`, actually saying, it is not used in my company, I think small company or some team not so formal won't use it too. However, if you want to use it, hotfix on your production can be tracked easier of course.

`hotfix branch` is created when some bugs or a small function need to be added or fixed ASAP, since it maybe found by your user/customer, your reaction to them can result in different user experience and reflect your team ability to users in some sence, if it takes you long time to fix a small bug, user will lower their ratings to your product and company, need attention.

In practice, if you want to create a `release branch` or `hotfix branch`, the command is same as above, difference is these two branches can be merged into `master branch` directly after artificial check. As for the diff betweens release and hotfix, `release branch` will merge other function in `feature branch` or `develop branch`, but `hotfix branch` won't merge any other branch, engineer will code on this branch immediately, thus reducing product online time.

For example
+ **release branch**
```sh
git checkout master # it can be master or develop, master suggested
git checkout -b release/0.1.0
git merge feature # do multiple times, merge everything you want to release
git push
git checkout master
git merge release/0.1.0
```

+ **hotfix branch**
```sh
git checkout master
git checkout -b hotfix_branch
git checkout master
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch # don't forget leave message on merging master branch 
                            # if you don't want to remain hotfix_branch
```

![](https://wac-cdn.atlassian.com/dam/jcr:61ccc620-5249-4338-be66-94d563f2843c/05%20(2).svg?cdnVersion=1134)


Then we can dig into git command `merge`,`rebase` and `cherry-pick`, they are all used to resolve conflict situation, although small difference here, you need to identify scenario 

## Review

I introduce common branches of Git flow so far, if you catch up with me, you should have an idea about git flow and landscape in mind. As what I said, if you truely understand the design thought of Git flow, you shouldn't be confused with problems you may get in your work, like what I will say next —— confilict. Leave a graph here to help you review these branches:

![](https://nvie.com/img/git-model@2x.png)

# Command to resolve conflict

Since understanding why people use something is important, be familiar with the way to use it is also important, just like manual worker may not rethink usually, their key to profession is just practice, practice more until body memory comes, engineers will also need it, anyway, 10000 hours makes a expert is what I agreed.

There is a list of main git command which is being used mostly (at least for me):

+ git checkout
+ git checkout -b `branch_name`
+ git branch
+ git add -u (-u, --update          update tracked files)
+ git commit -n (into vim, with -m just input message inline)
+ git push -n
+ git pull
+ git reset --hard `origin`
+ git stash
+ git stash list
+ git stash pop
+ git diff `commit_1` `commit_2`
+ git merge
+ git rebase
+ git cherry-pick

I don't want to explain them carefully, if you are not familiar with them, you can and should learn them by yourself, maybe search them on Internet like Baidu or Google, I think ti's also a basic ability for software engineer. One more thing to say, official documents is always a good choice.

However, I will explain `merge`/`rebase`/`cherry-pick` commands following, because these 3 commands should be hard to get, and they are all used when branch conflicts. List them togather will also make it clearly to compare between each other.

## merge

![](https://cdn-media-1.freecodecamp.org/images/VonhijTBQgjwtRXz31wLzF7iWDnDFk2o8EWi)

Git merge is a common practice for developers to use when meet conflicts between 2 branches, under your branch, merge the other branch you wanna merged into yours, usually git will automatically generate a combined version code, but it will also generate the version which you don't want, at least in my cases. For example, it may use the code of others which you wanna replaced with yours, and in turn replaced origin code by yours which you want you use theirs. So merge files manually is what I suppose, when you get a file need you to decide which commit fit, it will be like this:

```
Here are lines that are either unchanged from the common
ancestor, or cleanly resolved because only one side changed.
<<<<<<< yours:sample.txt
Conflict resolution is hard;
let's go shopping.
|||||||
Conflict resolution is hard.
=======
Git makes conflict resolution easy.
>>>>>>> theirs:sample.txt
And here is another line that is cleanly resolved or unmodified.
```

you need to choose which one remains and delete extra content including marks

An merge arg usually been used in this way:
 
 ```sh
 git merge --no-ff
 ```
 
 it will enforce git merge create a new commit with merge message, otherwise git may merge branches in a fast-forward way, which means if git find your branch is derived from master branch, it may be delete some commits automatically, which managers may not want, the need more infos on branch line, not less.

## rebase

Rebase is another way to integrate changes from one branch to another. Rebase compresses all the changes into a single “patch.” Then it integrates the patch onto the target branch.

Unlike merging, rebasing flattens the history because it transfers the completed work from one branch to another. In the process, unwanted history is eliminated.

![](https://cdn-media-1.freecodecamp.org/images/aEjZMJ6s4rDVqzXveqgLrwkQ0RJEvOTjAIUc)

In my experience, `git rebase` works well in the situation that you reverted your commits from which have been merged into main branches (like master or develop) before, it will clean those redundant commits and infos, make your PR clean and easy to read for your reviewer. I'm not sure if it's what I understand, you can somehow refer it.

As the graphs shown above, as for rebase will lost more informations for branch, **you should use `merge` command as possible as you can, check carefully if the scenario suits for `rebase` before you use it**

## cherry-pick

`cherry-pick` is a powerful and magic command to use, it's subtle because it can pick specific commit you want and put it on your current branch, and the picked commit may from other branch. Take a look at this example:

```
    a - b - c - d   Master
            \
            e - f - g Feature
```

you create Feature branch from c commits of Master, if you use the following commands:

```sh
git checkout feature
git pull
git checkout master
git cherry-pick f
```

then the branch graph will be:

```
    a - b - c - d - f   Master
         \
           e - f - g Feature
```

you can see we "pick" f commit into master branch ! wonderful, so if you have messy history on your branch because of checking out from a dirty branch, then you can use `cherry-pick` to pick your own changes into master or other main branch you wanna merged into.

My colleague said she treat 'git rebase' as multiple times `git cherry-pick`, it sounds right, maybe this metaphor can help you understand these two commands. However, you may find rebase more automatically so that it may generate what you don't want, use cherry-pick can be s little bit complicated but definitely what you want.

# After words

It takes me three days to complete this blog, but look back to it, interesting stuff indeed, I don't know if it's worth, I finished it anyway.