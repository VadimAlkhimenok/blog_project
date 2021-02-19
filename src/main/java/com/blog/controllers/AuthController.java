package com.blog.controllers;

import com.blog.models.User;
import com.blog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController {
    @Autowired
    UserService userService;

    @GetMapping(value = "/login")
    public User login() {
        return userService.getAuthUser();
    }

    @PostMapping(value = "/registration")
    public ResponseEntity<?> registration(@RequestBody User user) {
        userService.create(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}