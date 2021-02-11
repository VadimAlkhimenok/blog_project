package com.blog.repositories;

import com.blog.models.Subscribe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubscribeRepository extends JpaRepository<Subscribe, Integer> {
    List<Subscribe> getSubscribeById(int id);
}
