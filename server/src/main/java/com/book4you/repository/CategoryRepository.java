package com.book4you.repository;

import com.book4you.model.Category;
import org.springframework.data.repository.CrudRepository;


public interface CategoryRepository extends CrudRepository<Category, Long> {

}