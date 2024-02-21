import * as React from 'react';
import { Autocomplete, Box, ListItem, ListItemText, TextField } from '@mui/material';
import { airportsSelector, airportsState, selectedAirportsState } from '../state/airportState';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { titleCase } from '../util/ItineraryUtil';
import { calculationState } from '../state/calculationState';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

export function AirportAutocomplete(props) {
  const [selectedAirports, setSelectedAirports] = useRecoilState(selectedAirportsState);
  const [airportOptions, setAirportOptions] = useRecoilState(airportsSelector);
  const [airports, setAirports] = useRecoilState(airportsState);
  const resetCalculation = useResetRecoilState(calculationState);
  const [value, setValue] = React.useState(null);

  const defaultProps = {
    options: airportOptions,
    getOptionLabel: (airport) =>
      "(" + airport.iata + ") " + titleCase(airport.location.country + ", " + airport.location.city + " - " + airport.name),
  };

  const addAirportToSelected = (event, airport) => {
    setSelectedAirports((selectedAirports).concat(airport));
    resetCalculation();
  }

  const customScollbarStyle = {
    scrollbarColor: "#072b45 #f1f1f1",
    scrollbarWidth: "thin"
  }


  React.useEffect(() => {
    fetch("http://localhost:8080/airports")
      .then(response => response.json())
      .then(setAirports)
  }, []);

  return (
    <Box {...props}>
      <Autocomplete
        {...defaultProps}
        blurOnSelect
        sx={{ color: "primary.dark" }}
        onChange={addAirportToSelected}
        value={value}
        renderInput={(params) => (
          <TextField {...params} label="Select an Airport" variant="standard" />
        )}
        renderOption={(props, airport) => (
          <ListItem {...props} key={airport.iata + airport.name}>
            <LocalAirportIcon sx={{ mr: 2 }} />
            <ListItemText primary={titleCase(airport.location.city + ", " + airport.name)} secondary={airport.iata + " - " + titleCase(airport.location.country)} />
          </ListItem>
        )}
      />
    </Box >
  )
}