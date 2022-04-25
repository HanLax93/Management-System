package com.mapper;

import com.entity.Users;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UsersMapper {
    public Users queryByNameAndPwd(@Param("username")String username, @Param("password")String password);
    public Users queryByName(@Param("username")String username);
    public List<Users> queryAll();
    public List<Users> filteByName(@Param("username") String username);
    public Users queryPwdByName(@Param("username")String username);
    public Integer updatePwdAndTime(@Param("username")String username,@Param("newPassword")String newPassword,@Param("newDate")String newDate);
}
