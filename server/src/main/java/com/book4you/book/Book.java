package com.book4you.book;

import com.book4you.category.Category;
import com.book4you.core.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Book extends BaseEntity {
    @NotNull
    @Size(min = 3, max = 225)
    private String title;

    @NotNull
    @Size(min = 2, max = 50)
    private String author;

    @Size(max = 5000)
    private String description;

    @NotNull
    @Min(1)
    @Max(1000)
    private int price;

    private byte[] picture;

    @ManyToOne
    private Category category;

    @NotNull
    @Min(0)
    private int inventory;

    protected Book() {
        super();
    }

    public Book(String title, String author, String description, int price, byte[] picture, int inventory) {
        this();
        this.title = title;
        this.author = author;
        this.description = description;
        this.price = price;
        this.picture = picture;
        this.inventory = inventory;
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

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public Category getCategory() { return category; }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getInventory() {
        return inventory;
    }

    public void setInventory(int inventory) {
        this.inventory = inventory;
    }
}
