package com.book4you.repository;

//import java.util.List;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.PagingAndSortingRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
//import com.devmedia.server.model.Book;
//
//@RepositoryRestResource(collectionResourceRel = "book", path = "books")
//public interface BookRepository extends PagingAndSortingRepository<Book, Long> {
//
//    /**
//     * Method that returns a list of books by the passed title parameter.
//     *
//     * @param title
//     * @return list of books
//     */
//    List<Book> findByTitle(@Param("title") String title);
//
//    /**
//     * Method that returns a book with only its title by the passed id parameter.
//     *
//     * @param id
//     * @return book of the id passed as parameter.
//     */
//    @Query("SELECT book.title FROM Book book where book.id = :id")
//    Book findTitleById(@Param("id") Long id);
//
//    /**
//     * Method that returns a list of books by the passed title parameter and sorting them by the title.
//     *
//     * @param title
//     * @return list of books
//     */
//    List<Book> findByTitleOrderByTitle(@Param("title") String title);
//}



import com.book4you.model.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {

}