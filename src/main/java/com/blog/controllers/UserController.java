package com.blog.controllers;

import com.blog.models.User;
import com.blog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value = "/authors") // ?
    public List<User> authors() {
        return userService.getByRole("author");
    }

    @GetMapping(value = "/users/{id}")
    public User user(@PathVariable int id) {
        return userService.getUser(id);
    }
}
