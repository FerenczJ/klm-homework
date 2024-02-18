package com.klm.itinerary.model;

import com.klm.itinerary.util.DistanceUtil;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
@Slf4j
public class Trip {
    public static final double TAX_RATE = 0.21;

    private Airport departure;
    private Airport arrival;
    private int intermediateStations = 0;
    private double distance = 0;
    private double fare = 0;
    private double tax = 0;


    public Trip(Airport departure, Airport arrival) {
        this.departure = departure;
        this.arrival = arrival;

        this.distance = DistanceUtil.calculateDistance(departure.getLocation().getCoordinates(), arrival.getLocation().getCoordinates());
        this.fare = calculateFare();
        this.tax = calculateTax();
    }

    public Trip(Airport departure, Airport arrival, int intermediateStations, double distance) {
        this.departure = departure;
        this.arrival = arrival;
        this.intermediateStations = intermediateStations;
        this.distance = distance;
        this.fare = calculateFare();
        this.tax = calculateTax();
    }

    public Trip add(Trip trip) {
        return new Trip(
                this.departure,
                trip.getArrival(),
                this.intermediateStations + 1,
                this.distance + trip.getDistance());
    }

    public static List<Trip> consecutiveTripList(List<Airport> airports) {

            if (airports.size() < 2) throw new IllegalArgumentException();

            var result = new ArrayList<Trip>();

            for (int i = 0; i < airports.size() - 1; i++) {
                result.add(new Trip(airports.get(i), airports.get(i + 1)));
            }

            return result;
    }

    public double calculateFare() {
        return 0.05 * this.distance + 25.00 * this.intermediateStations + 50.00;
    }

    public double calculateTax() {
        return this.fare * TAX_RATE;
    }
}