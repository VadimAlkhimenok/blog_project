package com.blog.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "iduser")
    private int id;

    @Column(name = "name")
    private String userName;

    @Column(name = "surname")
    private String surName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "active")
    private boolean active;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "author")
    private Set<Post> posts = new HashSet<>();

    @ManyToMany(targetEntity = Role.class, fetch = FetchType.EAGER)
    @JoinTable(name = "role_users",
            joinColumns = @JoinColumn(name = "users_iduser"),
            inverseJoinColumns = @JoinColumn(name = "role_idrole")
    )
    private Set<Role> roles = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "author")
    private Set<Subscribe> subscribes = new HashSet<>();

    public User(int id, String userName, String surName, String email, String password, boolean active, Set<Post> posts, Set<Role> roles, Set<Subscribe> subscribes) {
        this.id = id;
        this.userName = userName;
        this.surName = surName;
        this.email = email;
        this.password = password;
        this.active = active;
        this.posts = posts;
        this.roles = roles;
        this.subscribes = subscribes;
    }

    public User() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Set<Subscribe> getSubscribes() {
        return subscribes;
    }

    public void setSubscribes(Set<Subscribe> subscribes) {
        this.subscribes = subscribes;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", surName='" + surName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", active=" + active +
                ", posts=" + posts +
                ", roles=" + roles +
                ", subscribes=" + subscribes +
                '}';
    }
}