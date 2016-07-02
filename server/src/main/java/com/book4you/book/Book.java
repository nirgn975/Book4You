package com.book4you.book;

import com.book4you.category.Category;
import com.book4you.core.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class Book extends BaseEntity {
    private String title;
    private String author;
    private String description;
    private int price;

    @ManyToOne
    private Category category;

    protected Book() {
        super();
    }

    public Book(String title, String author, String description, int price) {
        this();
        this.title = title;
        this.author = author;
        this.description = description;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
