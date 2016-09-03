package com.book4you.user;

import com.book4you.book.Book;
import com.book4you.utils.Utils;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

public class UserTest {
    private Utils utils = new Utils();
    User user;
    User admin;
    Book firstBook;
    Book secondBook;

    @Before
    public void setUp() throws Exception {
        user = new User("nir", "galon", "nirgn", "password", new String[] {"ROLE_USER"});
        admin = new User("ishay", "rabi", "ishayr", "pass", new String[] {"ROLE_USER", "ROLE_ADMIN"});

        firstBook = new Book("Title", "Author", "Description", 10, utils.Image2ByteArray("images/FallingAngel.jpg"), 1);
        secondBook = new Book("Title2", "Author2", "Description2", 20, utils.Image2ByteArray("images/IsraelsEconomicPolicyInTime.jpg"), 1);
    }

    @Test
    public void getFirstName() throws Exception {
        assertEquals("nir", user.getFirstName());
        assertEquals("ishay", admin.getFirstName());
    }

    @Test
    public void setFirstName() throws Exception {
        user.setFirstName("newFirstName");
        admin.setFirstName("newFirstName");
        assertEquals("newFirstName", user.getFirstName());
        assertEquals("newFirstName", admin.getFirstName());
    }

    @Test
    public void getLastName() throws Exception {
        assertEquals("galon", user.getLastName());
        assertEquals("rabi", admin.getLastName());
    }

    @Test
    public void setLastName() throws Exception {
        user.setLastName("newLastName");
        admin.setLastName("newLastName");
        assertEquals("newLastName", user.getLastName());
        assertEquals("newLastName", admin.getLastName());
    }

    @Test
    public void getUsername() throws Exception {
        assertEquals("nirgn", user.getUsername());
        assertEquals("ishayr", admin.getUsername());
    }

    @Test
    public void setUsername() throws Exception {
        user.setUsername("newUsername");
        admin.setUsername("newUsername");
        assertEquals("newUsername", user.getUsername());
        assertEquals("newUsername", admin.getUsername());
    }

    @Test
    public void getPassword() throws Exception {
        assertNotEquals("password", user.getPassword());
        assertNotEquals("pass", admin.getPassword());
    }

    @Test
    public void getRoles() throws Exception {
        assertArrayEquals(new String[] {"ROLE_USER"}, user.getRoles());
        assertArrayEquals(new String[] {"ROLE_USER", "ROLE_ADMIN"}, admin.getRoles());
    }

    @Test
    public void setRoles() throws Exception {
        user.setRoles(new String[] {"ROLE_USER", "ROLE_ADMIN"});
        admin.setRoles(new String[] {"ROLE_USER"});
        assertArrayEquals(new String[] {"ROLE_USER"}, admin.getRoles());
        assertArrayEquals(new String[] {"ROLE_USER", "ROLE_ADMIN"}, user.getRoles());
    }

    @Test
    public void removeBookFromWishList() throws Exception {
        user.addBookToWishList(firstBook);
        user.removeBookFromWishList(firstBook);

        assertEquals(new ArrayList<>(), user.getWishList());
    }
}