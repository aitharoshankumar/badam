package com.badamshakti.order.service;

import com.badamshakti.order.entity.Order;
import com.badamshakti.order.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    public Order placeOrder(Order order) {
        order.setStatus("PLACED");
        order.setOrderDate(LocalDateTime.now());
        return repository.save(order);
    }

    public List<Order> getOrdersByUser(Long userId) {
        return repository.findByUserId(userId);
    }
}
