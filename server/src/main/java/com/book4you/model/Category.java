package com.book4you.model;

import javax.persistence.*;
import java.util.Set;


@Entity
public class Category {

    @Id
    @GeneratedValue
    @Column(name = "CATEGORY_ID")
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "CATEGORY_ID")
    @OrderBy
    private Set<Book> books;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Book> getBooks() {
        return books;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }
}
