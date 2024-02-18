package com.klm.itinerary.service;


import com.klm.itinerary.feign.client.AirportClient;
import com.klm.itinerary.model.Airport;
import com.klm.itinerary.model.IATA;
import com.klm.itinerary.model.Trip;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

import static com.klm.itinerary.model.Direction.U;

@AllArgsConstructor
@Service
@Slf4j
public class AirportServiceImpl implements AirportService {
    private static final Predicate<Airport> isAirportCoordinatesPresent = airport ->
            !U.equals(airport.getLocation().getCoordinates().getLatitude().getDirection()) &&
            !U.equals(airport.getLocation().getCoordinates().getLongitude().getDirection());

    private static final Predicate<Airport> isAirportEnabled = airport ->
            Arrays.asList(IATA.values())
                    .stream()
                    .map(IATA::name)
                    .toList()
                    .contains(airport.getIata());


    private AirportClient airportClient;

    @Override
    public Airport getAirport(IATA code) {
         return this.getAirports()
                 .stream()
                 .filter(airport -> code.name().equals(airport.getIata()))
                 .findFirst()
                 .get();
    }

    @Override
    public List<Airport> getAirports() {
        return airportClient.getAirports()
                .stream()
                .filter(isAirportEnabled)
                .filter(isAirportCoordinatesPresent)
                .toList();
    }

    @Override
    public Optional<Trip> calculateTrip(List<IATA> codes) {
        if(codes.size() < 2) throw new IllegalArgumentException("List of codes must contain at least 2 code.");

        var airports = codes.stream()
                .map(this::getAirport)
                .toList();

        return Trip.consecutiveTripList(airports)
                .stream()
                .reduce(Trip::add);
    }
}
