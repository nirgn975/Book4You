package com.book4you.core;

import com.book4you.book.Book;
import com.book4you.book.BookRepository;
import com.book4you.category.Category;
import com.book4you.category.CategoryRepository;
import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DatabaseLoader implements ApplicationRunner {
    private final BookRepository books;
    private final CategoryRepository categories;

    @Autowired
    public DatabaseLoader(BookRepository books, CategoryRepository category) {
        this.books = books;
        this.categories = category;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
//        Category[] dummyCategories = {
//                new Category("c_first"),
//                new Category("c_second"),
//                new Category("c_third")
//        };
//
//        Book[][] dummyBooks = {
//                {
//                    new Book("1", "2", "3", 80),
//                    new Book("4", "5", "6", 120)
//                },
//                {
//                    new Book("7", "8", "9", 75),
//                    new Book("10", "11", "12", 92),
//                    new Book("13", "14", "15", 25)
//                },
//        };
//
//        // Save the data.
//        int i = 1;
//        for (Category c: dummyCategories) {
//            for (Book b: dummyBooks[i]) {
//                c.addBook(b);
//            }
//            i++;
//            categories.save(c);
//        }

        // Create category and book.
        Category category = new Category("populars");
        Book firstBook = new Book("1", "2", "3", 80);
        Book secondBook = new Book("4", "5", "6", 90);

        // Book is link to the category 'populars'
        category.addBook(firstBook);
        category.addBook(secondBook);

        // Save the data.
        categories.save(category);
        books.save(firstBook);
        books.save(secondBook);
    }
}
