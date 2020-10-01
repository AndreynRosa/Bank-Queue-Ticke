package com.bank.queue.api.service.interfaces;

import java.util.List;

import com.bank.queue.api.model.entity.TicketEntity;
import com.bank.queue.api.model.enums.TicketStatusEnum;

public interface TicketService {

    TicketEntity save(TicketEntity entity);

    TicketEntity findById(Integer id);


    List<TicketEntity> findAllByStatus(TicketStatusEnum statusEnum);

    TicketEntity callNext(String authorization) throws Exception;

    String reset(String authorization) throws Exception;

}
