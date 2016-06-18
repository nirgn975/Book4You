package com.book4you.controller;

import javax.inject.Inject;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.book4you.model.Book;
import com.book4you.repository.BookRepository;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController public class BookController {

    @Inject
    private BookRepository bookRepository;

    /**
     * Get all the books.
     *
     * @return
     *  All the books.
     */
    @RequestMapping(value = "/books", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Book>> getAllBooks() {
        // Get all the books in the book repository.
        Iterable<Book> allBooks = bookRepository.findAll();

        // Return all the books in the response with "OK" status code.
        return new ResponseEntity<>(allBooks, HttpStatus.OK);
    }

    /**
     * Create a new book.
     *
     * @param book
     *  The book to be created.
     *
     * @return
     *  The response with the uri of the newly created book.
     */
    @RequestMapping(value = "/books", method = RequestMethod.POST)
    public ResponseEntity<?> createBook(@RequestBody Book book) {
        // Save the new book.
        book = bookRepository.save(book);

        // Set the location header for the newly created resource.
        HttpHeaders responseHeaders = new HttpHeaders();

        // Create the newly book uri.
        URI newBookUri = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(book.getId()).toUri();

        // Add the newly book uri to the response headers.
        responseHeaders.setLocation(newBookUri);

        // Return the newly created book uri in the headers with "CREATED" status code.
        return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
    }

    /**
     * Get a book data by it's ID.
     *
     * @param bookId
     *  The ID of the book to find.
     *
     * @return
     *  The response with the book data.
     */
    @RequestMapping(value = "/books/{bookId}", method = RequestMethod.GET)
    public ResponseEntity<?> getBook(@PathVariable Long bookId) {
        // Find the book by it's ID.
        Book book = bookRepository.findOne(bookId);

        // Return the book with status code "OK".
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    /**
     * Update a book data by it's ID.
     *
     * @param newBook
     *  The new ook to save.
     * @param bookId
     *  The ID of the book to update.
     *
     * @return
     *  The response status code.
     */
    @RequestMapping(value = "/books/{bookId}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateBook(@RequestBody Book newBook, @PathVariable Long bookId) {
        // Save the new book entity.
        Book book = bookRepository.save(newBook);

        // Return status code "OK".
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * Delete a book by it's ID.
     *
     * @param bookId
     *  The book ID.
     *
     * @return
     *  The response status code.
     */
    @RequestMapping(value = "/books/{bookId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteBook(@PathVariable Long bookId) {
        // Delete the book by it's ID.
        bookRepository.delete(bookId);

        // Return status code "OK".
        return new ResponseEntity<>(HttpStatus.OK);
    }
}