package com.blog.repositories;

import com.blog.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User getUserByEmail(String email);
    Optional<User> findUserByEmail(String email);
    List<User> findUsersByRoles(String role);
}