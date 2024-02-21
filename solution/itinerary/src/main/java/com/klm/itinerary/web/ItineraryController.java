package com.klm.itinerary.web;

import com.klm.itinerary.model.Airport;
import com.klm.itinerary.model.IATA;
import com.klm.itinerary.web.model.ItineraryResponseDTO;
import jakarta.validation.constraints.Size;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


public interface ItineraryController {
    ItineraryResponseDTO itinerary(@Validated
                                   @Size(min = 2, message = "Airport list must be contain at least 2 item.")
                                   @RequestParam(value = "airport") List<IATA> codes);

    List<Airport> airports();
}
