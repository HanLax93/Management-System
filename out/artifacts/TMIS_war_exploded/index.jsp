<%--
  Created by IntelliJ IDEA.
  User: woode
  Date: 2020/6/24
  Time: 19:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>欢迎使用商务会员管理系统！请登录</title>
    <link rel="icon" type="image/icon" href="res/icon.svg"/>
    <link rel="stylesheet" type="text/css" href="css/index.css"/>
    <script src="js/jquery-3.5.0.js"></script>
    <script src="js/index.js"></script>
</head>
<body>
<div class="header"></div>
<div class="logo">
    <div>
        <h1 class="name">商务会员管理系统</h1>
        <h2>公司管理系统</h2>
    </div>
    <div class="com">
        <sub>HUIYUAN SOFTWARE CO.,LTD</sub>
        <h4>HYsoft</h4><br>
        <h6>会员软件股份有限公司</h6>
    </div>
</div>
<div class="loginBox">
    <img src="res/pic.png"/>
    <form actiion="users/login" method="post">
        <div>
            <label>用户名：</label>
            <input class="username" type="text" name="username">
        </div>
        <div>
            <label>密　码：</label>
            <input class="password" type="password" name="password">
        </div>
        <div>
            <input class="login" type="button" value="">
            <input class="rst" type="reset" value="">
        </div>
    </form>
</div>
<div class="copyright">&copy;0000-0000&nbsp;<img src="res/logo.png"/>&nbsp;会员股份有限公司</div>
</body>
</html>
