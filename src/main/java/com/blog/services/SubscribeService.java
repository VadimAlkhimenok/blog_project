package com.blog.services;

import com.blog.models.Subscribe;

import java.util.List;

public interface SubscribeService {
    List<Subscribe> getSubscribers(int idAuthor);
    Subscribe createSubscribe(int subscriber, int author);
}
