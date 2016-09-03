package com.book4you.category;

import com.book4you.book.Book;
import org.junit.Before;
import org.junit.Test;

import com.book4you.utils.Utils;
import static org.junit.Assert.*;

public class CategoryTest {
    private Utils utils = new Utils();
    Category category;

    @Before
    public void setUp() throws Exception {
        category = new Category("הפופולאריים");
        category.addBook(new Book("Title", "Author", "Description", 10, utils.Image2ByteArray("images/FallingAngel.jpg"), 1));
        category.addBook(new Book("Title2", "Author2", "Description2", 20, utils.Image2ByteArray("images/IsraelsEconomicPolicyInTime.jpg"), 1));
    }

    @Test
    public void getName() throws Exception {
        assertEquals("הפופולאריים", category.getName());
    }

    @Test
    public void setName() throws Exception {
        category.setName("categoryName");
        assertEquals("categoryName", category.getName());
    }

    @Test
    public void getNumBooks() throws Exception {
        assertEquals(2, category.getBooks().size());
    }

    @Test
    public void addBook() throws Exception {
        category.addBook(new Book("Title3", "Author3", "Description3", 30, utils.Image2ByteArray("images/ElonMusk.jpg"), 1));
        assertEquals(3, category.getBooks().size());
    }
}