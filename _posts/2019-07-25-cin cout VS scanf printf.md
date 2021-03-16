---
layout:     post   				    # 使用的布局（不需要改）
title:      cin cout VS scanf printf	# 标题 
subtitle:   C++输入输出流效率				#副标题
date:       2019-07-29   			# 时间
update_date:       2019-07-29   			# 时间
author:     pfan8 						# 作者
header-img: img/post-bg-cpp.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	 [C++-IO]
---

# 前言
昨天参加了拼多多的笔试，一败涂地。除了题目本身有难度，个人水平不够以外，测试平台需要自己处理输出输出流的方式也让我很不习惯……之前其实做头条笔试的时候就体会过了，然而没想到其他公司也是这样的，平时在LeetCode等网上刷题平台的习惯让人养成了“衣来伸手饭来张口”的恶习，所以终于狠下心来把这一块补补，不然不是只能写python了  o(´^｀)o
# 一、scanf使用

| 数据类型         | 格式符 | 举例             |
| ---------------- | ------ | ---------------- |
| int              | %d     | scanf("%d",&n)   |
| long long        | %lld   | scanf("%lld",&n) |
| float            | %f     | scanf("%f",&fl)  |
| double           | %lf    | scanf("%lf",&db) |
| char             | %c     | scanf("%c",&c)   |
| 字符串(char数组) | %s     | scanf("%s",str)  |

**说明**

+ scanf中，出了char数组，都需要加取地址运算符&
+ char数组不需要加&（因为数组就是取第一个元素的地址）
+ 读取char以外的格式时，默认空格或换行是终止符

[更多使用介绍](https://blog.csdn.net/gaoyu1253401563/article/details/90693365)

# 二、cin使用
首先，使用cin和cout要导入头文件`<iostream>`，略微提醒一下，做题时候需要注意
```c++
#include <iostream>

using namespace std;
```

## 1. cin读入单个变量

```c++
int var;
cin >> var;
```

另外，cin可以连续赋值

```c++
cin >> a >> b;
等同于
cin >> a;
cin >> b;
```
## 2. getline读入一行

因为cin读取string字符串时会将`whitespaces, tabs, new-line...`等空白字符作为终止符，因此补充getline

```c++
while(getline(cin, s)){ //getline 将一行内容给s，s的长度自动适配
    ```
}
```

## 3. stringstream

`<sstream>`头文件中定义的stringstream能够将字符串作为流处理，类似于cin和cout，其主要作用是将string转换为数值类型或者反之，看下面例子

```c++
// stringstreams
#include <iostream>
#include <string>
#include <sstream>
using namespace std;

int main ()
{
  string mystr;
  float price=0;
  int quantity=0;

  cout << "Enter price: ";
  getline (cin,mystr);
  stringstream(mystr) >> price;
  cout << "Enter quantity: ";
  getline (cin,mystr);
  stringstream(mystr) >> quantity;
  cout << "Total price: " << price*quantity << endl;
  return 0;
}
```


# 三、cin、cout和scanf、printf对比

cin cout是C++开发的类型安全的输入输出流管理，和C的scanf、printf对比，大多数时候后者似乎更快，可是事实却并非如此

[详细介绍看这里](https://blog.csdn.net/YinJianxiang/article/details/76436089)

原理在这篇博客，这里只说使用，加上这两行，就可以提升效率，超越scanf、printf了

```c++
ios_base::sync_with_stdio(false);
cin.tie(0);
```

# 其他
期间看到一篇总结C++刷题类库的[博客](http://www.voidcn.com/article/p-sypfybhx-bpr.html)，觉得还不错