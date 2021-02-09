package com.blog.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer iduser;

    private String name;
    private String surname;
    private String email;

    private String password;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
    private Set<Post> posts = new HashSet<>();

    @ManyToMany(targetEntity = Role.class)
    @JoinTable(name = "role_users",
            joinColumns = @JoinColumn(name = "users_iduser"),
            inverseJoinColumns = @JoinColumn(name = "role_idrole")
    )
    private Set<Role> roles = new HashSet<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
    private Set<Subscribe> subscribes = new HashSet<>();

    public User(Integer iduser, String name, String surname, String email, String password) {
        this.iduser = iduser;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
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

    public User() {}

    public Integer getIduser() {
        return iduser;
    }

    public void setIduser(Integer iduser) {
        this.iduser = iduser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
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

    public Set<Subscribe> getSubscribes() {
        return subscribes;
    }

    public void setSubscribes(Set<Subscribe> subscribes) {
        this.subscribes = subscribes;
    }
}