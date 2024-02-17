package com.klm.itinerary.model;

import lombok.Data;

@Data
public class Longitude{
    private int degrees;
    private int minutes;
    private int seconds;
    private String direction;
}
