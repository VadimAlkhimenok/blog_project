package com.blog.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idcomment;

    private String description;
    private Date date;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "post_idpost")
    private Post idpost;

    public Comment() {}

    public Comment(Integer idcomment, String description, Date date, Post idpost) {
        this.idcomment = idcomment;
        this.description = description;
        this.date = date;
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

    public Post getIdpost() {
        return idpost;
    }

    public void setIdpost(Post idpost) {
        this.idpost = idpost;
    }
}
