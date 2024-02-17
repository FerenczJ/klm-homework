package com.klm.itinerary.web;

import com.klm.itinerary.model.IATA;
import com.klm.itinerary.service.AirportService;
import com.klm.itinerary.web.model.ItineraryResponseDTO;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@AllArgsConstructor
@Slf4j
public class ItineraryControllerImpl implements ItineraryController {

    private AirportService airportService;

    @GetMapping("/itinerary")
    public ItineraryResponseDTO itinerary(@RequestParam("airport") List<IATA> codes){

        codes.stream().forEach(code -> log.info(airportService.getAirport(code).toString()));

        return new ItineraryResponseDTO();
    }
}
