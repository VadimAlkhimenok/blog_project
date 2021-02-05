package com.blog.services;

import com.blog.models.User;

import java.util.List;

public interface SubscribeService {
    List<User> getSubscribers(Integer idAuthor);
}
