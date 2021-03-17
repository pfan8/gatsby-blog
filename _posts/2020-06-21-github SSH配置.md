---
layout:     post   				    # 使用的布局（不需要改）
title:      Github SSH配置	# 标题 
subtitle:   安全便捷的git环境			#副标题
date:       2020-06-21  			# 时间
update_date:       2020-06-21  			# 时间
author:     pfan8 						# 作者
header-img: img/post-bg-github-cup.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	[Github-SSH, Security]							#标签
---
# 背景

用公司的Github账号时登录有2FC的存在，导致本地`git clone`时候总是登录失败无法clone代码下来，在manager的建议下，采用SSH的方式登录github，跳过2FC的步骤，也不用再设置账号密码

# 步骤

https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

跟着Github官方文档的说明走就行，里面也讲得比较详细，这里用我的语言重复一遍，加之中文，让使用过的工程师能更快地回想这个过程

P.S. 下面针对Mac系统，其他系统看上面链接找相应命令

1. 确认你是否存在已有的SSH key，`ls -al ~/.ssh`，如果目录存在，查看目录下是否还有公钥的文件，如
    + id_rsa.pub
    + id_ecdsa.pub
    + id_ed25519.pub

    如果你有这些文件，想用现成的，那么跳过2直接看3，不过既然你在看这篇文章，大概率是没有的，那么就要进入第2步——新建SSH key
2. 输入下面指令生产SSH key

    `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`

    会提示你确认文件位置和密码（这个密码是对私钥文件的多一层保护）

    ```
    > Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]
    ```

3. 添加SSH key到ssh-agent，这样就不用每次都做公钥私钥匹配了，由ssh-agent统一管理，先查看ssh-agent的PID

    ```
    `$ eval "$(ssh-agent -s)"`
    > Agent pid 59566`
    ```

    检查config文件是否存在，如果不存在，则新建一个

    ```
    $ open ~/.ssh/config
    > The file /Users/you/.ssh/config does not exist.
    $ touch ~/.ssh/config
    $ open ~/.ssh/config
    ```
    添加下面内容到文件：（最后一行是文件位置，如果有变更需要自行替换）
    ```
    Host *
      AddKeysToAgent yes
      UseKeychain yes
      IdentityFile ~/.ssh/id_rsa
    ```
    最后添加
    ```
    $ ssh-add -K ~/.ssh/id_rsa
    ```

4.添加SSH key到你的github账号，可以通过命令`pbcopy < ~/.ssh/id_rsa.pub`快速得到拷贝，也可以自己手动去复制，然后在github账号上点击`Settings -> SSH and GPG keys -> New SSH key or Add SSH key`，在Key里面粘贴即可，图文教程查看[这里](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

5.测试并使用，在终端里输入
```
$ ssh -T git@github.com
# Attempts to ssh to GitHub

可能有warning
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
> Are you sure you want to continue connecting (yes/no)? 
或者
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
> Are you sure you want to continue connecting (yes/no)?

输入yes
> Hi username! You've successfully authenticated, but GitHub does not
> provide shell access.
```

clone的时候使用ssh的链接，在页面上点击`Clone or download`的时候注意选择，然后clone即可：
```
git clone git@github.com:xxx.git
```