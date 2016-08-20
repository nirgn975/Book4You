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
            // Find user.
            User user = users.findOne(new Long(userId));

            // Find book.
            Book book = books.findOne(new Long(bookId));

            // Add the book to user's wish list.
            user.addBookToWishList(book);
            users.save(user);
        } catch (Exception ex) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<String>(HttpStatus.OK);
    }
}
