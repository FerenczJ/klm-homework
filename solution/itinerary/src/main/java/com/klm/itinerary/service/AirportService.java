package com.klm.itinerary.service;

import com.klm.itinerary.model.Airport;
import com.klm.itinerary.model.IATA;
import com.klm.itinerary.model.Trip;
import java.util.List;
import java.util.Optional;

public interface AirportService {
    Airport getAirport(IATA code);

    List<Airport> getAirports();
    Optional<Trip> calculateTrip(List<IATA> codes);

}
