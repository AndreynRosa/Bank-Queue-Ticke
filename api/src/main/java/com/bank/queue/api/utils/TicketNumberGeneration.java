package com.bank.queue.api.utils;

import lombok.Data;

@Data
public class TicketNumberGeneration {

    private static Integer ID = 1;

    public static Integer generetion() {
        return ID++;
    }

    public static void setNumer(Integer number) {
        TicketNumberGeneration.ID = number;
    }

    public static void reset() {
        TicketNumberGeneration.ID = 1;

    }

}
