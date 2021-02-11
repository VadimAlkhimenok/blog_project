package com.blog.services.impl;

import com.blog.models.Subscribe;
import com.blog.models.User;
import com.blog.repositories.SubscribeRepository;
import com.blog.services.SubscribeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscribeServiceImpl implements SubscribeService {
    @Autowired
    private SubscribeRepository subscribeRepository;

    @Override
    public List<Subscribe> getSubscribers(int idAuthor) {
        return subscribeRepository.getSubscribeById(idAuthor);
    }

    @Override
    public Subscribe createSubscribe(int subscriber, int author) {
        Subscribe subscribe = new Subscribe();
        User reader = new User();
        reader.setId(subscriber);

        User authorId = new User();
        authorId.setId(author);

        subscribe.setSubscriber(authorId);
        subscribe.setSubscriber(reader);

        return subscribeRepository.save(subscribe);
    }
}
