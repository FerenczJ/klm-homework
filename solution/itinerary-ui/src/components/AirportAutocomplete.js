import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { airportsSelector, selectedAirportsState } from '../state/airportState';
import { useRecoilState } from 'recoil';

export function AirportAutocomplete() {
  const [selectedAirports, setSelectedAirports] = useRecoilState(selectedAirportsState);
  const [airportOptions, setAirportOptions] = useRecoilState(airportsSelector);
  const [value, setValue] = React.useState(null);

  const defaultProps = {
    options: airportOptions,
    getOptionLabel: (option) => option.name,
  };

  return (
    <Autocomplete
    {...defaultProps}
    blurOnSelect
    onChange={(event, newValue) => {
      setSelectedAirports((selectedAirports).concat(newValue));
    }}
    value={value}
    renderInput={(params) => (
      <TextField {...params} label="Select an Airport" variant="standard" />
    )}
  />
  )
}