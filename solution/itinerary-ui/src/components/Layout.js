import { Grid } from '@mui/material';
import { AirportList } from './AirportList';
import { AirportAutocomplete } from './AirportAutocomplete';

export function Layout() {
    return (
        
        <Grid item spacing={2}>
            <Grid item xs={8}>
                <AirportAutocomplete/>
                <AirportList/>
            </Grid>
            <Grid item xs={4}>
                
            </Grid>
        </Grid>
    )
}