package com.blog.controllers;

import com.blog.models.User;
import com.blog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PersonalDataController {
    @Autowired
    UserService userService;

    @GetMapping(value = "/users/{id}/personal-data")
    public User getUserById(@PathVariable int id) {
        return userService.getUser(id);
    }

    @PutMapping(value = "/users/{id}/update")
    public ResponseEntity<?> update(@RequestBody User user) {
        userService.update(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
