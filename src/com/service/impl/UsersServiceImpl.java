package com.service.impl;

import com.entity.Users;
import com.mapper.UsersMapper;
import com.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {
    @Autowired
    public UsersMapper usersMapper;

    @Override
    public Users queryByNameAndPwd(String username, String password) {
        return usersMapper.queryByNameAndPwd(username,password);
    }

    @Override
    public Users queryByName(String username) {
        return usersMapper.queryByName(username);
    }

    @Override
    public List<Users> queryAll() {
        return usersMapper.queryAll();
    }

    @Override
    public List<Users> filteByName(String username) {
        return usersMapper.filteByName(username);
    }

    @Override
    public Users queryPwdByName(String username) {
        return usersMapper.queryPwdByName(username);
    }

    @Override
    public Integer updatePwdAndTime(String username, String newPassword, String newDate) {
        usersMapper.updatePwdAndTime(username,newPassword,newDate);
        return 1;
    }
}
