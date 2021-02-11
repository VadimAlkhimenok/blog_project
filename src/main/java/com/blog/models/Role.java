package com.blog.models;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idrole;

    private String rolename;

    @ManyToMany(targetEntity = User.class, mappedBy = "roles")
    private Set<User> users;

    public Role() {}

    public Role(Integer idrole, String rolename) {
        this.idrole = idrole;
        this.rolename = rolename;
    }

    public Integer getIdrole() {
        return idrole;
    }

    public void setIdrole(Integer idrole) {
        this.idrole = idrole;
    }

    @Column(name = "rolename")
    public String getRolename() {
        return rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }
}
