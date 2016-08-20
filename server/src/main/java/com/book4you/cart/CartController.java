package com.book4you.cart;

import com.book4you.book.Book;
import com.book4you.book.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@BasePathAwareController
@RequestMapping("carts")
public class CartController {
    @Autowired
    BookRepository books;

    @Autowired
    CartRepository cart;

    @ResponseBody
    @RequestMapping(value = "{cartId}/addToCart/{bookId}", method = RequestMethod.PATCH)
    public ResponseEntity addToCart(@PathVariable("cartId") int cartId, @PathVariable("bookId") int bookId) {
        try {
            // Add the book to the Cart.
            findCart(cartId).addBook(findBook(bookId));

            // Save my cart.
            cart.save(findCart(cartId));
        } catch (Exception ex) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @ResponseBody
    @RequestMapping(value = "{cartId}/removeFromCart/{bookId}", method = RequestMethod.PATCH)
    public ResponseEntity removeFromCart(@PathVariable("cartId") int cartId, @PathVariable("bookId") int bookId) {
        try {
            // Add the book to the cart.
            findCart(cartId).removeBook(findBook(bookId));

            // Save my cart.
            cart.save(findCart(cartId));
        } catch (Exception ex) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<String>(HttpStatus.OK);
    }

    private Book findBook(int bookId) {
        Book book = books.findOne(new Long(bookId));
        return book;
    }

    private Cart findCart(int cartId) {
        Cart myCart = cart.findOne(new Long(cartId));
        return myCart;
    }
}
