package com.book4you.core;

import com.book4you.book.Book;
import com.book4you.cart.Cart;
import com.book4you.category.Category;
import com.book4you.user.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
public class RepositoryConfig extends RepositoryRestMvcConfiguration {
    @Override
    protected void configureRepositoryRestConfiguration(
            RepositoryRestConfiguration config) {
        config.exposeIdsFor(Book.class, Cart.class, Category.class, User.class);
    }
}