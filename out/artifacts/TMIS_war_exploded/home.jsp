<%--
Created by IntelliJ IDEA.
User: jiang
Date: 2020/6/18
Time: 8:57
To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/icon" href="res/icon.svg"/>
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <script src="js/jquery-3.5.0.js"></script>
    <script src="js/index.js"></script>
</head>
<body>
<div>
    <div class="header">
        <div class="user">
            <div class="logo">
                <h1>商务会员管理系统</h1>
                <h2>公司管理系统</h2>
            </div>
            <div class="userDetails">
                <ul>
                    <li>欢迎您: </li>
                    <li>${user.name}</li>,
<%--                    该项由js更改--%>
                    <li>用户类型</li>

                    <span>|</span>
                    <li class="loginout">退出</li>
                    <span>|</span>
                </ul>
            </div>
        </div>
        <div class="nav">
            <ul>
                <li class="noneOpt">
                    <span>首页公告</span>
                </li>
                <li class="Opt">
                    <span>信息维护</span>
                    <ul class="subMenu">
                        <li><span>会员信息</span></li>
                        <li><span>密码修改</span></li>
                    </ul>
                </li>
                <li class="Opt"><span>公用信息</span></li>
            </ul>
        </div>
        <div class="location">
            <p>当前位置 --</p>
            <p></p>
            <form class="filter">
                <span>用户名: </span><input type="text" name="filter">
                <input type="button" value="确定">
            </form>
        </div>
    </div>
    <div class="dividingLine"></div>
    <div class="main">
        <div class="mainBox">
            <div class="contentBox">
                <table class="userInfo" cellspacing="0"></table>
                <form >
                    <table class="pwdChange" cellspacing="0">
                        <tr>
                            <td>
                                输入原密码: <input type="password" name="oPwd">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                输入新密码: <input type="password" name="nPwd">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                确认新密码: <input type="password" name="cPwd">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <input type="button" value="修   改" name="changePwd">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
    <div class="footer">
                <span>
                    &copy;0000-0000&nbsp;<img src="res/logo.png"/>&nbsp;会员股份有限公司
                </span>
    </div>
</div>
<div class="getUser">
    <div class="getUserType">${user.userType.name}</div>
</div>
</body>
</html>