package com.book4you.book;

import org.junit.Test;

import com.book4you.core.Utils;
import com.book4you.book.Book;

import static org.junit.Assert.*;


public class BookTest {
    private Utils utils = new Utils();

    @Test
    public void getTitle() throws Exception {
        Book book = new Book("Title", "Author", "Description", 10, utils.Image2ByteArray("images/FallingAngel.jpg"));

        assertEquals("Title", book.getTitle());
    }
}
