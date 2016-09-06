package com.book4you.category;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}
