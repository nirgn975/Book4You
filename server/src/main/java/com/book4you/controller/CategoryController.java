package com.book4you.controller;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.book4you.model.Category;
import com.book4you.repository.CategoryRepository;

@RestController public class CategoryController {

    @Inject
    private CategoryRepository categoryRepository;

    @RequestMapping(value="/categories", method= RequestMethod.GET)
    public ResponseEntity<Iterable<Category>> getAllCategories() {
        Iterable<Category> allCategories = categoryRepository.findAll();
        return new ResponseEntity<>(allCategories, HttpStatus.OK);
    }
}