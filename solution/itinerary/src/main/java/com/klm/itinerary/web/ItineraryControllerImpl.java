package com.klm.itinerary.web;

import com.klm.itinerary.mapper.TripMapper;
import com.klm.itinerary.model.Airport;
import com.klm.itinerary.model.IATA;
import com.klm.itinerary.service.AirportService;
import com.klm.itinerary.web.model.ItineraryResponseDTO;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
@Slf4j
public class ItineraryControllerImpl implements ItineraryController {

    private AirportService airportService;
    private TripMapper tripMapper;

    @GetMapping("/airports")
    public List<Airport>  airports() {
        return airportService.getAirports();
    }

    @GetMapping("/itinerary")
    public ItineraryResponseDTO itinerary(List<IATA> codes) {
        var trip = airportService.calculateTrip(codes);

        if (trip.isPresent()) {
            var itineraryDto = tripMapper.toItineraryResponseDTO(trip.get());
            itineraryDto.setAirports(codes.stream().map(IATA::name).toList());

            return itineraryDto;
        }

        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Trip not found");
    }
}
