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
        Category[] dummyCategories = {
                new Category("הפופולאריים"),
                new Category("מתח"),
                new Category("הדרכה ופנאי"),
                new Category("ספרי ביכורים"),
                new Category("מדע ופנטזיה"),
                new Category("שירה"),
                new Category("נוער"),
                new Category("רומן ושירה"),
                new Category("יהדות"),
                new Category("אימה"),
                new Category("ילדים"),
                new Category("לימוד"),
                new Category("הרפתקאות")
        };

        Book[][] dummyBooks = {
                {
                        new Book("7", "8", "9", 75, ""),
                        new Book("10", "11", "12", 92, ""),
                        new Book("13", "14", "15", 25, "")
                },
                {
                        new Book("7", "8", "9", 75, ""),
                        new Book("The Girl on the train",
                                "Paula Hawkins",
                                "the girl on the train",
                                59,
                                "")
                },
                {
                        new Book("7", "8", "9", 75, ""),
                },
                {
                        new Book("7", "8", "9", 75, ""),
                        new Book("10", "11", "12", 92, ""),
                        new Book("13", "14", "15", 25, "")
                },
                {
                        new Book("16", "17", "18", 62, "")
                },
                {
                        new Book("7", "8", "9", 75, ""),
                        new Book("10", "11", "12", 92, ""),
                        new Book("13", "14", "15", 25, "")
                },
                {
                        new Book("16", "17", "18", 62, "")
                },
                {
                        new Book("7", "8", "9", 75, ""),
                        new Book("10", "11", "12", 92, ""),
                        new Book("13", "14", "15", 25, "")
                },
                {
                        new Book("16", "17", "18", 62, "")
                },
                {
                        new Book("7", "8", "9", 75, ""),
                        new Book("10", "11", "12", 92, ""),
                        new Book("13", "14", "15", 25, "")
                },
                {
                        new Book("16", "17", "18", 62, "")
                },
                {
                        new Book("7", "8", "9", 75, ""),
                        new Book("10", "11", "12", 92, ""),
                        new Book("13", "14", "15", 25, "")
                },
                {
                        new Book("16", "17", "18", 62, "")
                }
        };

        // Save the data.
        int i = 0;
        for (Category c: dummyCategories) {
            for (Book b: dummyBooks[i]) {
                c.addBook(b);
            }
            i++;
            categories.save(c);
        }
    }
}
