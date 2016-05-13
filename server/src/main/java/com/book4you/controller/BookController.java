//package com.book4you.controller;
//
//import com.book4you.model.Book;
//import com.book4you.repository.BookRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//
//@RestController
//public class BookController {
//
//    @Autowired
//    private BookRepository bookRepository;
//
//    @RequestMapping(value = "/books")
//    public ResponseEntity<Iterable<Book>> getAllBooks() {
//        Iterable<Book> allBooks = bookRepository.findAll();
//        return new ResponseEntity<>(allBooks, HttpStatus.OK);
//    }
//}
