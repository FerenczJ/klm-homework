const HOST = process.env.REACT_APP_ITINERARY_SERVICE_HOST;

export const itineraryService = {
    getItinerary: (airports) => {
        const query = airports.map(x => "airport=" + x.iata).join("&")

        return fetch(HOST + "/itinerary?" + query)
            .then(response => response.json())
    },
    getAirports: () => {
        return fetch(HOST + "/airports")
            .then(response => response.json())
    }
}