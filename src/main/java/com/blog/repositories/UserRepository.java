package com.blog.repositories;

import com.blog.models.Role;
import com.blog.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> getUserByRoles(Role role);
    Optional<User> findUserByUserName(String userName);
}