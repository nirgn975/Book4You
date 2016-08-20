package com.book4you.category;

import com.book4you.book.Book;
import com.book4you.core.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category extends BaseEntity {
    @NotNull
    @Size(min = 2, max = 25)
    private String name;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Book> books;

    protected Category() {
        super();
        books = new ArrayList<>();
    }

    public Category(String name) {
        this();
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Book> getBooks() { return books; }

    public void addBook(Book book) {
        book.setCategory(this);
        books.add(book);
    }
}
