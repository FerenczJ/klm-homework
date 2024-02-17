package com.klm.itinerary.service;

import com.klm.itinerary.model.Airport;
import com.klm.itinerary.model.IATA;

public interface AirportService {
    Airport getAirport(IATA code);
}
