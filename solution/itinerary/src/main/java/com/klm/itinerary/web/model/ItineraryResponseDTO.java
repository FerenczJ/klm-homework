package com.klm.itinerary.web.model;

import lombok.Data;

import java.util.List;

@Data
public class ItineraryResponseDTO {
    List<String> airports;
    double fare;
    double tax;
    double distance;
}
