package com.book4you.order;

import com.book4you.book.Book;
import com.book4you.book.BookRepository;
import com.book4you.cart.CartRepository;
import com.book4you.category.CategoryRepository;
import com.book4you.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@BasePathAwareController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    OrderRepository orders;

    @Autowired
    BookRepository books;

    @Autowired
    UserRepository users;

    @Autowired
    CartRepository carts;

    @ResponseBody
    @RequestMapping(value = "addNewOrder", method = RequestMethod.POST)
    public ResponseEntity addOrder(@RequestBody Order order) {
        try {

            // Set the user entity on the order.
            order.setUser(users.findByUsername(order.getUsername()));

            for (Book b: order.getBooks()) {
                Book myBook = books.findOne(b.getId());
                b.setCategory(myBook.getCategory());
            }

            // Save the new order.
            books.save(order.getBooks());
            orders.save(order);
        } catch (Exception ex) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<String>(HttpStatus.OK);
    }

}
