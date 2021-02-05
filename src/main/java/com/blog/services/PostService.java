package com.blog.services;

import com.blog.models.Post;

public interface PostService {
    void add(Post post);

    void update(Integer id, Post post);

    void delete(Integer id);
}
