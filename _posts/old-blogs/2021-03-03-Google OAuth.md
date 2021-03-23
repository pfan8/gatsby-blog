---
layout:     post   				    # 使用的布局（不需要改）
title:      Google OAuth2	# 标题 
subtitle:   under express server-side-sessions store	#副标题
date:       2021-03-03 				# 时间
update_date: 2021-03-03  			# 更新时间
author:     pfan8 						# 作者
header-img: img/post-bg-map.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	[Network-Security-OAuth2, Node-Express, Network-Cookie]							#标签
---

## 1. Google OAuth

**Intro**: OAuth 2 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, and DigitalOcean. It works by delegating user authentication to the service that hosts the user account, and authorizing third-party applications to access the user account. OAuth 2 provides authorization flows for web and desktop applications, and mobile devices.

[more details for OAuth2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)

Simply put, if we want to use Google Account to login our application or connect gmail, we can use Google OAuth2 flow to verify the user, Google will handle the authentication flow and hand back the control to your application, togather with user's google account infomations.

![](https://developers.google.com/identity/protocols/oauth2/images/flows/implicit.png)

for Nodejs, `react-google-login` lib is enough to use. But if you wanna enhance your system's security, you can use `state` param in Google OAuth2 api, however this param is not supported in `react-google-login`, besides, the formal Javascript Google api lib `gapi` doesn't support it as well! so you need to call googleapis with axios/ajax by yourself. follow the formal doc of type [OAuth 2.0 Endpoints](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#oauth-2.0-endpoints)

## 2. JWT/Session

for node application's authentication, there're mainly 2 modern solutions:

+ [JWT](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)
+ Store session in server DB (like express-session)

the main difference for these 2 machanism is in this [sof post](https://stackoverflow.com/questions/43452896/authentication-jwt-usage-vs-session), I concluded them as below:

1. JWT store in client, so that low costing for server, boost the speed
2. JWT may confront with XSS attact, Server-side sessions is safer

## State Construct

unlike JWT, we store the user session values in Backend-DB (sessions tbl), in order to meet the requirement, validate state during the whole oauth flow on both Frontend&Backend, we use sessionID to generate state value, build the state the value as below

1. in login page, if google-state not in localstorage, Frontend will call /loginWithGoogle with param {startOauth: true} ,  Backend will generate a “fake“ user (passport.js), thus initializing a new entry in sessions tbl, and return the sessionID as data in response.
   1. for gmail connect, the browser should contain the google-state in localstorage already, otherwise it should be treated as invalid user.
2. Once Frontend receiving the sessionID, it generate state param using the sessionID with bcryptjs’s hash function, and store the sessionID with storageHelper into localstorage.
3. Frontend hold the state value so it can directly validate the state value from Google OAuth response
4. Backend will use bcrypt lib to compareSync the value between request sessionID and state_token passed from Frontend

## Flow
![](https://thumbsnap.com/i/92rFej1X.jpg?0303)

implement Google OAuth2 authorization as End point (https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=fr), deprecate the react-google-login lib, call Google OAuth2 apis, handle the response on Frontend, then call  corresponding APIs on Backend. 

- Google Login

1. enter login page, generate fake session to fetch sessionID
   1. if google-state not in localstorage, automatically call Backend API to generate new session, Backend will return sessionID
   2. if google-state aleady in localstorage, do nothing.
2. user login
   1. if user choose normal login, the sessionID will be refreshed to a new one so that we can defense XSS attack, therefore after user logged in, Frontend will receive the updated sessionID and updated it in localstorage
   2. if user choose Google login, 
      1. frontend call OAuth2 API with scope(email profile openid), response_type(token) and open a new mini window
      2. Google will handle the OAuth2 flow and let user to authorize it
      3. once confirmed, Google will redirect the link to the callback address which is specified to callback url
      4. in this page, Frontend will check state param, if passed, call /loginWithGoogle again, and pass user’s data and state_token as well to Backend
      5. Backend will use bcrypt to compareSync the state_token and sessionID first, once passed, follow the previous logics for this API.

- Gmail connect

1. frontend call OAuth2 API with scope(email profile https://mail.google.com/), response_type(code)  and open a new mini window
2. Google will handle the OAuth2 flow and let user to authorize it
3. once confirmed, Google will redirect the link to the callback address which is specified to callback url.
4. in this page, Frontend will check state param, if passed, call backend connect gmail API , and pass code and state_token to Backend
5. Backend will use bcrypt to compareSync the state_token and sessionID first, once passed, follow the previous logics for this API.

## AWS ELB issue

Recently we use aws elb to add one layer between Frontend and Backend as proxy, in this way we can terminate SSL/TLS in front of the proxy, so that it will reduce network costs(encrypt) and boost response speed. 

However the login flow doesn’t work in this network architecture, as we finally find, it’s caused by **cookie** **issue**.

The new flow will be as below:

![](https://thumbsnap.com/s/etVKhb6D.png?0303)

1. Frontend request HTTPS with nginx proxy
2. nginx send HTTP request to Backend

cause Backend use express framework to handle HTTPS/HTTP request,  there are some configs for response cookie set, one option is secure , if this value set to true, compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection. 

and the express formal doc described:

> If you have your node.js behind a proxy and are using secure: true, you need to set "trust proxy" in express

so use app.set('trust proxy', 1) make the flow works, Frontend can set csrf token into cookies, and the WebApp can pass session check.

**Why 'trust proxy' works**

as it mentioned, express use ‘trust proxy' to add X-Forwarded-Proto header, this header can make server trust the client and send response with cookies:

1. **Client** sends an HTTPS request to the **Proxy**
2. **Proxy** decrypts the HTTPS traffic and sets the "X-Forwarded-Proto: https"
3. **Proxy** sends the HTTP request to the **Server**
4. **Server** sees that the URL is "http://"" but also sees that "X-Forwarded-Proto" is "https" and trusts that the request is HTTPS
5. **Server** sends back the requested web page or data