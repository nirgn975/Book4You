package com.book4you.wishList;


import com.book4you.book.Book;
import com.book4you.user.User;

import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;

public class WishList {
    @OneToMany()
    private List<Book> wishlist;

    @OneToOne()
    private User user;

    public WishList(User user) {
        this.user = user;
        this.wishlist = new ArrayList<>();
    }

    public List<Book> getWishlist() {
        return wishlist;
    }

    public void setWishlist(List<Book> wishlist) {
        this.wishlist = wishlist;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void addBookToWishlist(Book book) {
        this.wishlist.add(book);
    }

    public void removeBookFromWishlist(Book book) {
        this.wishlist.remove(book);
    }
}
