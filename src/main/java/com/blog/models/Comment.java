package com.blog.models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idcomment;

    private String description;
    private Date date;

    @ManyToOne
    private User iduser;

    @ManyToOne
    private Post idpost;

    public Comment() {}

    public Comment(Integer idcomment, String description, Date date, User iduser, Post idpost) {
        this.idcomment = idcomment;
        this.description = description;
        this.date = date;
        this.iduser = iduser;
        this.idpost = idpost;
    }

    public Integer getIdcomment() {
        return idcomment;
    }

    public void setIdcomment(Integer idcomment) {
        this.idcomment = idcomment;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getIduser() {
        return iduser;
    }

    public void setIduser(User iduser) {
        this.iduser = iduser;
    }

    public Post getIdpost() {
        return idpost;
    }

    public void setIdpost(Post idpost) {
        this.idpost = idpost;
    }
}
