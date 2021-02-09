package com.blog.repositories;

import com.blog.models.Role;
import com.blog.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> getUserByRoles(Role role);
}
