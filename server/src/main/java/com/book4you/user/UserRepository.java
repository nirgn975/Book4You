package com.book4you.user;

import org.springframework.data.repository.CrudRepository;

//@RepositoryRestResource(exported = false)
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
