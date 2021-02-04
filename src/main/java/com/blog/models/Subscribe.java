package com.blog.models;

import javax.persistence.*;

@Entity
public class Subscribe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idsubscribe;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "idauthor")
    private User idauthor;

    public Subscribe() {}

    public Subscribe(Integer idsubscribe, User idauthor) {
        this.idsubscribe = idsubscribe;
        this.idauthor = idauthor;
    }

    public Integer getIdsubscribe() {
        return idsubscribe;
    }

    public void setIdsubscribe(Integer idsubscribe) {
        this.idsubscribe = idsubscribe;
    }

    public User getIdauthor() {
        return idauthor;
    }

    public void setIdauthor(User idauthor) {
        this.idauthor = idauthor;
    }
}
