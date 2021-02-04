package com.blog.controllers;

import com.blog.models.User;
import com.blog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public void createUser(@RequestBody User user) {
        userService.create(user);
    }

    @GetMapping("/users")
    public List<User> getUserList() {
        return userService.readAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUsers(@PathVariable Integer id) {
        try {
            User user = userService.read(id);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Integer id) {
        try {
            userService.delete(id);
            new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable Integer id) {
        if (userService.readAll().contains(userService.read(id))) {
            userService.create(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}











