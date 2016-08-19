package com.book4you.wishList;

import com.book4you.book.Book;
import com.book4you.core.BaseEntity;
import com.book4you.user.User;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;

@Entity
public class WishList extends BaseEntity {

    @OneToMany()
    private List<Book> books;

    @OneToOne
    private User user;

    protected WishList() {
        super();
        this.books = new ArrayList<>();
    }

    public WishList(User user) {
        this();
        this.user = user;
    }

    public List<Book> getBooks() {
        return books;
    }

    public User getUser() {
        return user;
    }

    public void addBook(Book book) {
        this.books.add(book);
    }

    public void removeBook(Book book) {
        this.books.remove(book);
    }
}
