package com.book4you.book;

import org.junit.Test;

import com.book4you.utils.Utils;
import com.book4you.book.Book;

import static org.junit.Assert.*;


public class BookTest {
    private Utils utils = new Utils();
    Book book;

    @Before
    public void setUp() throws Exception {
        book = new Book("Title", "Author", "Description", 10, utils.Image2ByteArray("images/FallingAngel.jpg"), 1);
    }

    @Test
    public void getTitle() throws Exception {
        assertEquals("Title", book.getTitle());
    }

    @Test
    public void getAuthor() throws Exception {
        assertEquals("Author", book.getAuthor());
    }

    @Test
    public void getDescription() throws Exception {
        assertEquals("Description", book.getDescription());
    }

    @Test
    public void getPrice() throws Exception {
        assertEquals(10, book.getPrice());
    }

    @Test
    public void getInventory() throws Exception {
        assertEquals(1, book.getInventory());
    }
}
