package com.blog.services.impl;

import com.blog.models.Role;
import com.blog.models.User;
import com.blog.repositories.UserRepository;
import com.blog.services.RoleService;
import com.blog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @Override
    public User getUser(int id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> getByRole(String role) {
        Role byRole = roleService.getByRole(role);
        return userRepository.getUserByRoles(byRole);
    }

}
