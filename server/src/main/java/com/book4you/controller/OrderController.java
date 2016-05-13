//package com.book4you.controller;
//
//
//import com.book4you.model.Order;
//import com.book4you.repository.OrderRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class OrderController {
//
//    @Autowired
//    private OrderRepository orderRepository;
//
//    @RequestMapping(value = "/orders")
//    public ResponseEntity<Iterable<Order>> getAllOrders() {
//        Iterable<Order> allOrders = orderRepository.findAll();
//        return new ResponseEntity<>(allOrders, HttpStatus.OK);
//    }
//}
