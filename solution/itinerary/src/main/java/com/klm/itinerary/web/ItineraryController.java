package com.klm.itinerary.web;

import com.klm.itinerary.model.IATA;
import com.klm.itinerary.web.model.ItineraryResponseDTO;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


public interface ItineraryController {
    ItineraryResponseDTO itinerary(@RequestParam List<IATA> codes);
}
