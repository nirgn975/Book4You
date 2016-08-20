package com.book4you.cart;

import com.book4you.book.Book;
import com.book4you.core.BaseEntity;
import com.book4you.user.User;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Cart extends BaseEntity {
    @OneToMany
    private List<Book> books;

    @NotNull
    @Min(0)
    private int totalAmount;

    @NotNull
    @Min(0)
    private int totalItems;

    @OneToOne
    private User user;

    protected Cart() {
        super();
        this.totalAmount = 0;
        this.totalItems = 0;
        books = new ArrayList<>();
    }

    public Cart(User user) {
        this();
        this.user = user;
    }

    public List<Book> getBooks() {
        return books;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public int getTotalItems() {
        return totalItems;
    }

    public void addBook(Book book) {
        totalAmount += book.getPrice();
        totalItems += 1;
        books.add(book);
    }

    public void removeBook(Book book) {
        totalAmount -= book.getPrice();
        totalItems -= 1;
        books.remove(book);
    }
}
