//package com.book4you.controller;
//
//
//import com.book4you.model.Category;
//import com.book4you.repository.CategoryRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class CategoryController {
//
//    @Autowired
//    private CategoryRepository categoryRepository;
//
//    @RequestMapping(value = "/categories")
//    public ResponseEntity<Iterable<Category>> getAllCategories() {
//        Iterable<Category> allCategories = categoryRepository.findAll();
//        return new ResponseEntity<>(allCategories, HttpStatus.OK);
//    }
//
//}
