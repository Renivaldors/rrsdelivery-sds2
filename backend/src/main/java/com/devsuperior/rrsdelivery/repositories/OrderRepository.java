package com.devsuperior.rrsdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.rrsdelivery.entities.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {

}

