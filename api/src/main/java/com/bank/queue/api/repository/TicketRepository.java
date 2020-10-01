package com.bank.queue.api.repository;

import java.util.List;
import java.util.Optional;

import com.bank.queue.api.model.entity.TicketEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TicketRepository extends JpaRepository<TicketEntity, Integer> {

    @Query(value = "SELECT * FROM ticket where ticket.status like :status ORDER BY number ASC", nativeQuery = true)
    List<TicketEntity> findAllByStatus(String status);

    @Query(value = "SELECT * FROM ticket where ticket.status like'WAITING' and ticket.type = :type ORDER BY number ASC LIMIT 1", nativeQuery = true)
    Optional<TicketEntity> finFirstByType(@Param("type") String type);

    @Query(value = "SELECT * FROM ticket ORDER BY number DESC LIMIT 1", nativeQuery = true)
    Optional<TicketEntity> findByTheLargestNumber();


}
