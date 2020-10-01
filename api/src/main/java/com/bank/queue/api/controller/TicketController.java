package com.bank.queue.api.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import com.bank.queue.api.model.entity.TicketEntity;
import com.bank.queue.api.model.enums.TicketStatusEnum;
import com.bank.queue.api.service.TicketServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller

@RequestMapping(value = "/api/v1/ticket")
@Api(value = "Queue Banck Ticket API REST")
public class TicketController {

    @Autowired
    private TicketServiceImpl service;

    @ResponseBody
    @Transactional(rollbackOn = Throwable.class)
    @RequestMapping(value = "", method = RequestMethod.POST, produces = "application/json")
    @ApiOperation(value = "O ticket será criado e retornado.  Aceita como parametro  PRIORITY ou NORMAL.  ")
    public ResponseEntity<TicketEntity> save(@RequestBody TicketEntity tikect) {
        return ResponseEntity.ok(service.save(tikect));
    }

    @ResponseBody
    @Transactional(rollbackOn = Throwable.class)
    @ApiOperation(value = "Busca todas as senhas por status. Aceita como parametro  WAITING ou ATTENDED ")
    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<TicketEntity>> findAllByStatus(@RequestParam TicketStatusEnum status) {
        return ResponseEntity.ok(service.findAllByStatus(status));
    }

    @ResponseBody
    @Transactional(rollbackOn = Throwable.class)
    @ApiOperation(value = "Chama a proxima senha, proirizando as preferências. É necessário passar token para simular usuario com role de admin ")
    @RequestMapping(value = "/call", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity<?> call(HttpServletRequest request) throws Exception {
        TicketEntity resp = new TicketEntity();

        try {
            resp = service.callNext(request.getHeader("Authorization"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(resp);
    }

    @ResponseBody
    @ApiOperation(value = "Reinicia a contagem dos números das senhas. É necessário passar token para simular usuario com role de admin")
    @Transactional(rollbackOn = Throwable.class)
    @RequestMapping(value = "/reset", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity<?> reset(HttpServletRequest request) throws Exception {
        String resp = "";

        try {
            resp = service.reset(request.getHeader("Authorization"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(resp);
    }
}
