package com.blog.services;

import com.blog.models.User;

import java.util.List;

public interface UserService {
    User getUser(int id);
    List<User> getByRole(String role);
}
