package com.blog.controllers;

import com.blog.models.User;
import com.blog.services.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SubscribeController {
    @Autowired
    SubscribeService subscribeService;

    @PutMapping(value = "/users/{id}/subscribe")
    public ResponseEntity<?> subscribe(@PathVariable int id, @RequestBody User author) {
        subscribeService.subscribe(author.getId(), id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
