# KLM Itinerary application

This solution have a backend and a IU application separated in solution folder.
To run the compomenets please read and follow the instructions in the component folders.

# Considerations and notes
* The backend is cached toward the airport-api to minimalize the calls, cache settings are set on defaults (this could be set in the future for anything)
* CORS has been enabled for better testablility in local environment. In production environment this should be fixed.
* I have created an airport enpoint to maintain the cached functionality towards the UI
* I found airport with IATA code MNL duplicated in the airport-api response (since have the same coordinates they calculated for the same price)
* Beacuse the lack of documentation of airport-api (at least I didn't found the way), I wasn't able to query the relevant airports, so I filter the list in JAVA.
* Harvesine formula does not contain altitude component, however in airport-api response there is such a property. If it needed for calculation this should be added to the formulata later.
* 
