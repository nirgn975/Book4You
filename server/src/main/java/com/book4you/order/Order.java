package com.book4you.order;

import com.book4you.book.Book;
import com.book4you.core.BaseEntity;
import com.book4you.user.User;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "`Order`")
public class Order extends BaseEntity {

    @ManyToOne
    private User user;

    private String username;

    @NotNull
    @Size(min = 3, max = 50)
    private String fullName;

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

    @NotNull
    @Min(1)
    private int totalAmount;

    protected Order() {
        super();
        user = new User("nir", "galon", "nirgn23", "password", new String[] {"ROLE_USER", "ROLE_ADMIN"});
    }

    public Order(String username, String fullName, String street, int houseNumber, String city, List<Book> books, int totalAmount) {
        this.username = username;
        this.fullName = fullName;
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
        this.books = books;
        this.totalAmount = totalAmount;
    }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }

    public String getUsername() { return username; }

    public String getFullName() { return fullName; }

    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getStreet() { return street; }

    public void setStreet(String street) { this.street = street; }

    public int getHouseNumber() { return houseNumber; }

    public void setHouseNumber(int houseNumber) { this.houseNumber = houseNumber; }

    public String getCity() { return city; }

    public void setCity(String city) { this.city = city; }

    public List<Book> getBooks() { return books; }

    public void setBooks(List<Book> books) { this.books = books; }

    public int getTotalAmount() { return totalAmount; }

    public void setTotalAmount(int totalAmount) { this.totalAmount = totalAmount; }
}
