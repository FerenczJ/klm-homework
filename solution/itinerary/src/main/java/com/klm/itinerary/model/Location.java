package com.klm.itinerary.model;

import lombok.Data;

@Data
public class Location{
    private String city;
    private String country;
    private Coordinates coordinates;
    private int altitude;
}
