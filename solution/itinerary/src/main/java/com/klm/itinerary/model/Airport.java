package com.klm.itinerary.model;

import lombok.Data;

@Data
public class Airport {
    private String icao;
    private String iata;
    private String name;
    private Location location;
}
