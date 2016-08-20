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
    private int total;

    @OneToOne
    private User user;

    protected Cart() {
        super();
        this.total = 0;
        books = new ArrayList<>();
    }

    public Cart(User user) {
        this();
        this.user = user;
    }

    public List<Book> getBooks() {
        return books;
    }

    public int getTotal() {
        return total;
    }

    public void addBook(Book book) {
        total += book.getPrice();
        books.add(book);
    }

    public void removeBook(Book book) {
        total -= book.getPrice();
        books.remove(book);
    }
}
