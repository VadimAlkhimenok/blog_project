package com.blog.services;

import com.blog.models.Comment;

public interface CommentService {
    void add(Comment comment);

    void update(Integer id, Comment comment);

    void delete(Integer id);
}