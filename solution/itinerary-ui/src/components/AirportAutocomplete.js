import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { Alert, Autocomplete, Box, ListItem, ListItemText, Snackbar, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { itineraryService } from '../service/itineraryService';
import { airportsSelector, airportsState, selectedAirportsState } from '../state/airportState';
import { calculationState } from '../state/calculationState';
import { titleCase } from '../util/ItineraryUtil';

export function AirportAutocomplete(props) {
  const [selectedAirports, setSelectedAirports] = useRecoilState(selectedAirportsState);
  const airportOptions = useRecoilValue(airportsSelector);
  const setAirports = useSetRecoilState(airportsState);
  const resetCalculation = useResetRecoilState(calculationState);
  const [open, setOpen] = useState(false);
  let value = null;

  const addAirportToSelected = (event, airport) => {
    setSelectedAirports((selectedAirports).concat(airport));
    resetCalculation();
  }

  useEffect(() => {
    itineraryService.getAirports()
      .then(setAirports)
      .catch(() => setOpen(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box {...props}>
        <Autocomplete
          blurOnSelect
          options={airportOptions}
          sx={{ color: "primary.dark" }}
          onChange={addAirportToSelected}
          value={value}
          renderInput={(params) => (
            <TextField {...params} label="Select an Airport" variant="standard" />
          )}
          getOptionLabel={(airport) => [airport.iata, airport.name, airport.location.city, airport.location.country].join(", ")}
          renderOption={(props, airport) => (
            <ListItem {...props} key={airport.iata + airport.name}>
              <LocalAirportIcon sx={{ mr: 2 }} />
              <ListItemText primary={titleCase(airport.location.city + ", " + airport.name)} secondary={airport.iata + " - " + titleCase(airport.location.country)} />
            </ListItem>
          )}
        />
      </Box >
      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={6000}>
        <Alert severity="error">Unable to fetch airport list, please try reload the page.</Alert>
      </Snackbar>
    </>
  )
}