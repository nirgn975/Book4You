package com.book4you;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = { "com.book4you.model" })
@EnableJpaRepositories(basePackages = { "com.book4you.repository" })
public class Book4YouApplication {

	public static void main(String[] args) {

		SpringApplication.run(Book4YouApplication.class, args);
	}
}
