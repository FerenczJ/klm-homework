package com.klm.itinerary.model;

import lombok.Data;

@Data
public class Latitude{
    private int degrees;
    private int minutes;
    private int seconds;
    private String direction;
}
