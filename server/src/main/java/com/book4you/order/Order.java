package com.book4you.order;

import com.book4you.book.Book;
import com.book4you.core.BaseEntity;
import com.book4you.user.User;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
public class Order extends BaseEntity {

    @ManyToOne
    private User username;

    @NotNull
    @Size(min = 3, max = 50)
    private String street;

    @NotNull
    @Min(1)
    private int houseNumber;

    @NotNull
    @Size(min = 3, max = 50)
    private String city;

    @ManyToMany
    private List<Book> books;

    protected Order() { super(); }

    public Order(User username, String street, int houseNumber, String city, List<Book> books) {
        this.username = username;
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
        this.books = books;
    }

    public User getUsername() { return username; }

    public void setUsername(User username) { this.username = username; }

    public String getStreet() { return street; }

    public void setStreet(String street) { this.street = street; }

    public int getHouseNumber() { return houseNumber; }

    public void setHouseNumber(int houseNumber) { this.houseNumber = houseNumber; }

    public String getCity() { return city; }

    public void setCity(String city) { this.city = city; }

    public List<Book> getBooks() { return books; }

    public void setBooks(List<Book> books) { this.books = books; }
}
