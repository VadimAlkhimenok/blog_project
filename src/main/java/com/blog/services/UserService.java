package com.blog.services;

import com.blog.models.User;

import java.util.List;

public interface UserService {
    User getUser(int id);
    void create(User user);
    User getAuthUser();
    List<User> getByRole(String role);
    User update(User user);
}
