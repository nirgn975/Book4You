package com.book4you.controller;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.book4you.model.Order;
import com.book4you.repository.OrderRepository;

@RestController public class OrderController {

    @Inject
    private OrderRepository orderRepository;

    @RequestMapping(value="/orders", method= RequestMethod.GET)
    public ResponseEntity<Iterable<Order>> getAllOrders() {
        Iterable<Order> allOrders = orderRepository.findAll();
        return new ResponseEntity<>(allOrders, HttpStatus.OK);
    }
}