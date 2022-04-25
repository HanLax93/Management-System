package com.service;

import com.entity.Users;

import java.util.List;

public interface UsersService {
    public Users queryByNameAndPwd(String username, String password);
    public Users queryByName(String username);
    public List<Users> queryAll();
    public List<Users> filteByName(String username);
    public Users queryPwdByName(String username);
    public Integer updatePwdAndTime(String username, String newPassword, String newDate);
}
