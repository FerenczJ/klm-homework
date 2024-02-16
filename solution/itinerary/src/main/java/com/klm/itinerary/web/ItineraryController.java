package com.klm.itinerary.web;

import com.klm.itinerary.web.model.ItineraryResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
public class ItineraryController {

    @GetMapping("/itinerary")
    public ItineraryResponseDTO itinerary(@RequestParam List<String> airport){
        return new ItineraryResponseDTO();
    }
}
