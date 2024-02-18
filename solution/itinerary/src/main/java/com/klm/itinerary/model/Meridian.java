package com.klm.itinerary.model;

import lombok.Data;

@Data
public class Meridian {
    private int degrees;
    private int minutes;
    private int seconds;
    private Direction direction;

    public double toDouble() {
        var result =  this.degrees + (double) this.minutes / 60 + (double) this.seconds / 3600;

        return switch (this.direction) {
            case N, E, U  -> result;
            case S, W -> -result;
        };
    }

}
