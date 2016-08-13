package com.book4you.book;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

public interface BookRepository extends CrudRepository<Book, Long> {
    @Override
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    void delete(@Param("id") Long id);
}
