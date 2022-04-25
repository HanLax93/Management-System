$(function(){
    //获取一些信息，emmm 待修改.
    var username = $(".userDetails li:nth-of-type(2)").text();
    var userType = $(".getUserType").text();
    if(userType == 'admin') {$(".userDetails li:nth-of-type(3)").html("管理员")}
    else{$(".userDetails li:nth-of-type(3)").html("普通会员")}

    //点击登录按钮
    $(".login").click(function(){
        var username = $("input[name='username']").val();
        var password =$("input[name='password']").val();
        if(username != "" && password != "")
        {
            $.ajax({
                url: "users/login",
                type: "post",
                data: {"username": username, "password":password},
                dataType: "json",
                success: function (mydata) {
                    if((mydata.name != "null")&&(mydata.status != 0)){
                        window.location.href = "home.jsp";
                    }else if((mydata.name != "null")&&(mydata.status == 0)){
                        alert("该用户已冻结！");
                        window.location.reload();
                    }else{
                        alert("用户名或密码输入错误！");
                        window.location.reload();
                    }
                }
            })
        }else{
            alert("请输入完整信息！")
        }
    })

    //隐藏一些选项
    $(".userInfo").hide();
    $(".pwdChange").hide();
    $(".filter").hide();
    //筛选功能
    $("input[value='确定']").click(function () {
        var filter = $("input[name='filter']").val();
        filteByName(filter);
    })

    //点击修改密码选项
    $("input[name='changePwd']").click(function(){


        var oPwd = $("input[name='oPwd']").val();
        var nPwd = $("input[name='nPwd']").val();
        var cPwd = $("input[name='cPwd']").val();

        checkPwd(username,oPwd,nPwd,cPwd);
    })

    //点击退出登录选项
    $(".loginout").click(function () {
        var logout = confirm("确定退出系统？");
        if(logout){
            window.location.href = "users/loginout";
        }else {

        }
    })

    //点击信息维护选项
    $(".nav span").click(function(){
        var location = $(this).text();
        $(".location p:nth-of-type(2)").html(location);
        if (location == "会员信息"){
            $(".pwdChange").hide();
            $(".userInfo").show();
            if(userType == 'admin'){
                $(".filter").show();
                queryAllUsers();
            }else{
                // $(".userInfo th:first-of-type").remove();
                // $(".userInfo td:first-of-type").remove();
                queryUser();
            }
        }else if(location == "密码修改"){
            $(".userInfo").hide();
            $(".pwdChange").show();
        }else{
            $(".userInfo").hide();
            $(".pwdChange").hide();
        }
    })

    //查询当前用户会员信息
    function queryUser() {
        $.getJSON("users/queryUser",{"username":username},function (mydata) {
            var username = mydata.name;
            var userType = "普通会员"
            var userStatus = mydata.status;
            var last_modify_time = mydata.last_modify_time;
            var userStatus = toStatusZh(userStatus);
            $(".userInfo").empty();
            let tr1 = $("<tr></tr>");
            let tr2 = $("<tr></tr>");
            let th1 = $("<th>用户名</th>");
            let th2 = $("<th>用户状态</th>");
            let th3 = $("<th>用户类型</th>");
            let th4 = $("<th>最后修改时间</th>");
            let td1 = $("<td></td>").html(username);
            let td2 = $("<td></td>").html(userStatus);
            let td3 = $("<td></td>").html(userType);
            let td4 = $("<td></td>").html(last_modify_time);
            tr1.append(th1).append(th2).append(th3).append(th4);
            tr2.append(td1).append(td2).append(td3).append(td4);
            $(".userInfo").append(tr1).append(tr2);
        })
    }

    //查询全部会员信息
    function queryAllUsers() {
        $(".userInfo").empty();
        let tr1 = $("<tr></tr>");
        let th1 = $("<th>用户名</th>");
        let th2 = $("<th>用户状态</th>");
        let th3 = $("<th>用户类型</th>");
        let th4 = $("<th>最后修改时间</th>");
        tr1.append(th1).append(th2).append(th3).append(th4);
        $(".userInfo").append(tr1);

        $.ajax({
            url: "users/queryAllUsers",
            success: function (mydata) {
                $(mydata).each(function () {
                    var username = this.name;
                    var userType = this.userType.name;
                    var userStatus = this.status;
                    var last_modify_time = this.last_modify_time;
                    var userType= toUserTypeZh(userType);
                    var userStatus = toStatusZh(userStatus);

                    let tr2 = $("<tr></tr>");
                    let td1 = $("<td></td>").html(username);
                    let td2 = $("<td></td>").html(userStatus);
                    let td3 = $("<td></td>").html(userType);
                    let td4 = $("<td></td>").html(last_modify_time);
                    tr2.append(td1).append(td2).append(td3).append(td4);
                    $(".userInfo").append(tr2);
                })
            }
        })
    }

    //将用户类型转义为中文，emmm 待修改.
    function toUserTypeZh(userType) {
        var userTypeZh = "普通会员";
        if (userType == "commonMem"){
            userTypeZh = "普通会员";
        }else{
            userTypeZh = "管理员";
        }
        return userTypeZh;
    }

    //将用户状态转义为中文
    function toStatusZh(userStatus) {
        var statusZh = "正常"
        if (userStatus == 1){
            statusZh = "正常";
        }else{
            statusZh = "冻结";
        }
        return statusZh;
    }

    //通过用户名模糊查询会员信息
    function filteByName(filter){
        $(".userInfo").empty();
        let tr1 = $("<tr></tr>");
        let th1 = $("<th>用户名</th>");
        let th2 = $("<th>用户状态</th>");
        let th3 = $("<th>用户类型</th>");
        let th4 = $("<th>最后修改时间</th>");
        tr1.append(th1).append(th2).append(th3).append(th4);
        $(".userInfo").append(tr1);

        $.ajax({
            url: "users/filteByName",
            type: "post",
            data: {"filter":filter},
            success: function (mydata) {
                if (mydata.length==0){
                    var trE = $("<tr></tr>");
                    var tdE = $("<td colspan='4'></td>").html("抱歉，暂无数据！");
                    trE.append(tdE);
                    $(".userInfo").append(trE);
                } else{
                    $(mydata).each(function () {
                        var username = this.name;
                        var userType = this.userType.name;
                        var userStatus = this.status;
                        var last_modify_time = this.last_modify_time;
                        var userTypeZh = toUserTypeZh(userType);
                        var statusZh = toStatusZh(userStatus);

                        let tr2 = $("<tr></tr>");
                        let td1 = $("<td></td>").html(username);
                        let td2 = $("<td></td>").html(statusZh);
                        let td3 = $("<td></td>").html(userTypeZh);
                        let td4 = $("<td></td>").html(last_modify_time);
                        tr2.append(td1).append(td2).append(td3).append(td4);
                        $(".userInfo").append(tr2);
                    })
                }
            }
        })
    }

    //修改密码函数
    function checkPwd(username,oPwd,nPwd,cPwd) {
        $.getJSON("users/queryPwd",{"username":username},function (mydata) {
            //在前端判断原密码，emmm.
            var realPwd = mydata.password;
            if(oPwd != realPwd){
                alert("原密码输入错误！");
                $("input[name='oPwd']").val("");
                $("input[name='nPwd']").val("");
                $("input[name='cPwd']").val("");
            }else{
                if(nPwd != cPwd){
                    alert("两次密码输入不一致！");
                    $("input[name='oPwd']").val("");
                    $("input[name='nPwd']").val("");
                    $("input[name='cPwd']").val("");
                }
                else{
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1 ;
                    var day = date.getDate();
                    var newDate = year+"-"+month+"-"+day;
                    $.ajax({
                        url: "users/updateInfo",
                        type: "post",
                        data: {"username": username, "nPwd": nPwd, "newDate": newDate},
                        success: function (mydata) {
                            if (mydata == 1){
                                alert("密码修改成功！请重新登录");
                                window.location.href = "users/loginout";
                            }else{

                            }
                        }
                    })
                }
            }
        })
    }
})