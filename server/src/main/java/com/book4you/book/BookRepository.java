package com.book4you.book;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

public interface BookRepository extends PagingAndSortingRepository<Book, Long> {

    @RestResource(rel = "title-contains", path = "containsTitle")
    Page<Book> findByTitleContaining(@Param("title") String title, Pageable page);
}
