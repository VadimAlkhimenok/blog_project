package com.blog.services;

import com.blog.models.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();
    User getUser(Integer id);
}
