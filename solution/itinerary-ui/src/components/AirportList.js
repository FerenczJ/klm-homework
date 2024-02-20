
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import  DeleteIcon  from '@mui/icons-material/Delete';
import { selectedAirportsState } from '../state/airportState';
import { useRecoilState } from 'recoil';

export function AirportList() {

    const [selectedAirports, setSelectedAirports] = useRecoilState(selectedAirportsState);
    const removeAirportFromSelected = (airport) => setSelectedAirports(selectedAirports.filter(x => x.iata != airport.iata));

    return (
        <List>
            {
                selectedAirports.map(airport => {
                return (
                    <ListItem
                        secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => removeAirportFromSelected(airport)}>
                            <DeleteIcon />
                        </IconButton>
                        }>
                        <ListItemText primary={airport.name} />
                    </ListItem>
                )})
        }
        </List>
    )
}