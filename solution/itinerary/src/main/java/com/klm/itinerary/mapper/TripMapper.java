package com.klm.itinerary.mapper;

import com.klm.itinerary.model.Trip;
import com.klm.itinerary.web.model.ItineraryResponseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TripMapper {

    ItineraryResponseDTO toItineraryResponseDTO(Trip trip);
}
