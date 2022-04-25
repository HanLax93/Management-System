package com.controller;

import com.entity.Users;
import com.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersService usersService;

    @RequestMapping("/login")
    @ResponseBody
    public Users login(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletRequest request){
        Users user = usersService.queryByNameAndPwd(username,password);
        if(user != null){
            HttpSession session = request.getSession();
            session.setAttribute("user",user);
            return user;
        }else{
            Users userNull = new Users();
            userNull.setName("null");
            return userNull;
        }
    }
    @RequestMapping("/queryUser")
    @ResponseBody
    public Users queryByName(@RequestParam("username")String username){
        return usersService.queryByName(username);
    }

    @RequestMapping("/loginout")
    public void loginout(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        session.invalidate();
        response.sendRedirect(request.getContextPath()+"/index.jsp");
    }

    @RequestMapping("/queryAllUsers")
    @ResponseBody
    public List<Users> queryAll() {
        return usersService.queryAll();
    }

    @RequestMapping("/queryPwd")
    @ResponseBody
    public Users queryPwdAndName(@RequestParam("username")String username){
        return usersService.queryPwdByName(username);
    }

    @RequestMapping("/filteByName")
    @ResponseBody
    public List<Users> filteByName(@RequestParam("filter")String filter){
        return usersService.filteByName(filter);
    }

    @RequestMapping("/updateInfo")
    @ResponseBody
    public Integer updatePwdAndTime(@RequestParam("username")String username,@RequestParam("nPwd")String nPwd,@RequestParam("newDate")String newDate){
        return usersService.updatePwdAndTime(username,nPwd,newDate);
    }
}
