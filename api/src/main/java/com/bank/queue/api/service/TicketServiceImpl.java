package com.bank.queue.api.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import com.bank.queue.api.model.entity.TicketEntity;
import com.bank.queue.api.model.enums.TicketStatusEnum;
import com.bank.queue.api.model.enums.TicketTypeEnum;
import com.bank.queue.api.repository.TicketRepository;
import com.bank.queue.api.service.interfaces.TicketService;
import com.bank.queue.api.utils.TicketNumberGeneration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketServiceImpl implements TicketService {

    private final TicketRepository repository;

    private final String FAKE_TOKEN = "Bearer 5588b2921d6be2d656e61652ac916a";

    @PostConstruct
    void initSequence() {
        TicketEntity theLestGeneratedTicket = findByTheLargestNumber();
        if (null != theLestGeneratedTicket) {
            TicketNumberGeneration.setNumer(theLestGeneratedTicket.getNumber() + 1);
        } else {
            TicketNumberGeneration.setNumer(0);
        }
    }

    @Autowired
    public TicketServiceImpl(final TicketRepository repository) {
        this.repository = repository;
    }

    private TicketEntity findByTheLargestNumber() {
        Optional<TicketEntity> opt = repository.findByTheLargestNumber();
        return opt.orElse(null);
    }

    @Override
    public TicketEntity save(final TicketEntity entity) {
        return repository.save(TicketEntity.builder().createdDate(new Date()).status(TicketStatusEnum.WAITING)
                .type(entity.getType()).number(TicketNumberGeneration.generetion()).build());

    }

    @Override
    public TicketEntity findById(final Integer id) {
        final Optional<TicketEntity> opt = repository.findById(id);
        return opt.orElse(null);
    }

    @Override
    public List<TicketEntity> findAllByStatus(final TicketStatusEnum statusEnum) {
        final List<TicketEntity> allTickets = repository.findAllByStatus(statusEnum.toString());
        return allTickets;
    }

    @Override
    public TicketEntity callNext(String authorization) throws Exception {
        if (!FAKE_TOKEN.equalsIgnoreCase(authorization))
            throw new Exception("Not authorized");

        TicketEntity ticket = new TicketEntity();

        ticket = finFirstByType(TicketTypeEnum.PRIORITY.toString());
        if (null != ticket) {
            ticket.setStatus(TicketStatusEnum.ATTENDED);
            return ticket;
        }

        ticket = finFirstByType(TicketTypeEnum.NORMAL.toString());
        if (null != ticket) {
            ticket.setStatus(TicketStatusEnum.ATTENDED);
            return ticket;
        }
        return null;
    }

    private TicketEntity finFirstByType(String status) {
        Optional<TicketEntity> opt = repository.finFirstByType(status);
        return opt.orElse(null);
    }

    @Override
    public String reset(String authorization) throws Exception {
        if (!FAKE_TOKEN.equalsIgnoreCase(authorization))
            throw new Exception("Not authorized");
        TicketNumberGeneration.reset();
        repository.deleteAll();
        return "OK";
    }

}
