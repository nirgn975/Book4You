package com.book4you.user;

import com.book4you.book.Book;
import com.book4you.cart.Cart;
import com.book4you.core.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "`User`")
public class User extends BaseEntity {
    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @NotNull
    @Size(min = 2, max = 25)
    private String firstName;

    @NotNull
    @Size(min = 2, max = 25)
    private String lastName;

    @NotNull
    @Column(unique = true)
    @Size(min = 3, max = 50)
    private String username;

    @JsonIgnore
    private String password;

    @JsonIgnore
    private String[] roles;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Book> wishList;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Cart cart;

    protected User() { super(); }

    public User(String firstName, String lastName, String username, String password, String[] roles) {
        this();
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        setPassword(password);
        this.roles = roles;
        this.wishList = new ArrayList<>();
        this.cart = new Cart(this);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    public String[] getRoles() {
        return roles;
    }

    public void setRoles(String[] roles) {
        this.roles = roles;
    }

    public List<Book> getWishList() {
        return this.wishList;
    }

    public void addBookToWishList(Book book) {
        this.wishList.add(book);
    }

    public void removeBookFromWishList(Book book) {
        this.wishList.remove(book);
    }

    public Cart getCart() { return cart; }

    public void addBookToCart(Book book) {
        this.cart.addBook(book);
    }

    public void removeBookFromCart(Book book) {
        this.cart.removeBook(book);
    }
}
