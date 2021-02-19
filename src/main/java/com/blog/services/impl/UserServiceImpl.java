package com.blog.services.impl;

import com.blog.models.Role;
import com.blog.models.User;
import com.blog.repositories.UserRepository;
import com.blog.services.RoleService;
import com.blog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Override
    public void create(User user) {
        List<Role> roles = user.getRoles().stream()
                .map(role -> roleService.getByRole(role.getRolename()))
                .collect(Collectors.toList());

        roles.forEach(role -> role.getUsers().add(user));

        user.setRoles(roles);

        user.setPassword(encoder.encode(user.getPassword()));

        userRepository.saveAndFlush(user);
    }

    @Override
    public User getAuthUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String name = authentication.getName();
        return userRepository.getUserByEmail(name);
    }

    @Override
    public User getUser(int id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> getByRole(String role) {
        Role byRole = roleService.getByRole(role);
        return byRole.getUsers();
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }


}
