package com.book4you.user;

import com.book4you.book.Book;
import com.book4you.book.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@BasePathAwareController
@RequestMapping("users")
public class UserController {
    @Autowired
    UserRepository users;

    @Autowired
    BookRepository books;

    @ResponseBody
    @RequestMapping(value = "{userId}/wishList/{bookId}", method = RequestMethod.PATCH)
    public ResponseEntity addBookToWishList(@PathVariable("userId") int userId, @PathVariable("bookId") int bookId) {
        try {
            // Add the book to user's wish list.
            findUser(userId).addBookToWishList(findBook(bookId));

            // Save users.
            users.save(findUser(userId));
        } catch (Exception ex) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @ResponseBody
    @RequestMapping(value = "{userId}/wishList/{bookId}", method = RequestMethod.DELETE)
    public ResponseEntity removeBookFromWishList(@PathVariable("userId") int userId, @PathVariable("bookId") int bookId) {
        try {
            // Add the book to user's wish list.
            findUser(userId).removeBookFromWishList(findBook(bookId));

            // Save users.
            users.save(findUser(userId));
        } catch (Exception ex) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<String>(HttpStatus.OK);
    }

    @ResponseBody
    @RequestMapping(value = "checkUserAdmin/{userId}", method = RequestMethod.GET)
    public ResponseEntity checkUserAdmin(@PathVariable("userId") int userId) {
        // Find the user ROLEs and SET it.
         Set<String> VALUES = new HashSet<String>(Arrays.asList(
                 findUser(userId).getRoles()
        ));

        // Check if the SET has the ADMIN role.
        if (VALUES.contains("ROLE_ADMIN")) {
            return new ResponseEntity<String>("Ok", HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("No", HttpStatus.OK);
        }
    }

    @ResponseBody
    @RequestMapping(value = "getUserId/{userName}", method = RequestMethod.GET)
    public ResponseEntity getUserId(@PathVariable("userName") String userName) {
        User user;

        try {
            // Find the user.
            user = users.findByUsername(userName);
        } catch (Exception ex) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(user.getId(), HttpStatus.OK);
    }

    private Book findBook(int bookId) {
        Book book = books.findOne(new Long(bookId));
        return book;
    }

    private User findUser(int userId) {
        User user = users.findOne(new Long(userId));
        return user;
    }
}
