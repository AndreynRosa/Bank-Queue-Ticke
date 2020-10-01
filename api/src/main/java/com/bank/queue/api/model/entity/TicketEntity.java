package com.bank.queue.api.model.entity;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import com.bank.queue.api.model.enums.TicketStatusEnum;
import com.bank.queue.api.model.enums.TicketTypeEnum;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@Table(name = "ticket")
@AllArgsConstructor
@NoArgsConstructor
public class TicketEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private TicketStatusEnum status;

    @Enumerated(EnumType.STRING)
    private TicketTypeEnum type;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private  Date createdDate;
    
    private Integer number;

}
