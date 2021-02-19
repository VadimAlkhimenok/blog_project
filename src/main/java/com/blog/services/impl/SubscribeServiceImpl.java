package com.blog.services.impl;

import com.blog.models.Subscribe;
import com.blog.models.User;
import com.blog.repositories.SubscribeRepository;
import com.blog.services.SubscribeService;
import com.blog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscribeServiceImpl implements SubscribeService {
    @Autowired
    private SubscribeRepository subscribeRepository;

    @Autowired
    private UserService userService;

    @Override
    public Subscribe subscribe(int idAuthor, int idSubscriber) {
        User subscriber = userService.getUser(idSubscriber);
        User author = userService.getUser(idAuthor);

        Subscribe subscribe = new Subscribe();
        subscribe.setSubscriber(subscriber);
        subscribe.setAuthor(author);

        return subscribeRepository.save(subscribe);
    }
}
