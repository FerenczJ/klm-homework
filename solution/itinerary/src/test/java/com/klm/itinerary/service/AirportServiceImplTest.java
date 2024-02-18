package com.klm.itinerary.service;

import com.klm.itinerary.feign.client.AirportClient;
import com.klm.itinerary.mapper.TripMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@SpringBootTest
class AirportServiceImplTest {

    @MockBean
    AirportClient airportClient;

    @MockBean
    TripMapper tripMapper;

    @Autowired
    private AirportService airportService;
    @Test
    void testGetAirports(){
        airportService.getAirports();

        verify(airportClient, times(1)).getAirports();
    }
}