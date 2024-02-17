package com.klm.itinerary.service;

import com.klm.itinerary.feign.client.AirportClient;
import com.klm.itinerary.model.Airport;
import com.klm.itinerary.model.IATA;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AirportServiceImpl implements AirportService {

    private AirportClient airportClient;

    @Override
    public Airport getAirport(IATA code) {
        return airportClient.getAirport(code);
    }
}
