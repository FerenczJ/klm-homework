
import { List, ListItemButton, ListItem, ListItemText } from '@mui/material';
import { selectedAirportsState } from '../state/airportState';
import { useRecoilState } from 'recoil';

export function AirportList() {

    const [selectedAirports, setSelectedAirports] = useRecoilState(selectedAirportsState);
    return (
        <List>
            {
                selectedAirports.map(airport => {
                return (
                    <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={airport.name} />
                </ListItemButton>
                </ListItem>
                )})
        }
        </List>
    )
}