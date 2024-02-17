package com.klm.itinerary.feign.client;

import com.klm.itinerary.model.Airport;
import com.klm.itinerary.model.IATA;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("airports")
public interface AirportClient {

    @GetMapping(value = "/airports/{code}", consumes = "application/json")
    Airport getAirport(@PathVariable("code") IATA code);
}