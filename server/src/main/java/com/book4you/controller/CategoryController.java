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

    /**
     * Get all the categories.
     *
     * @return
     *  All the categories.
     */
    @RequestMapping(value="/categories", method= RequestMethod.GET)
    public ResponseEntity<Iterable<Category>> getAllCategories() {
        // Get all the categories in the categories repository.
        Iterable<Category> allCategories = categoryRepository.findAll();

        // Return all the categories in the response with "OK" status code.
        return new ResponseEntity<>(allCategories, HttpStatus.OK);
    }
}