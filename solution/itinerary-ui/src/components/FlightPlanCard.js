import { Alert, Box, Button, Card, CardContent, Snackbar, Typography } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedAirportsState } from "../state/airportState";
import { calculationState } from '../state/calculationState';
import { AirportAutocomplete } from './AirportAutocomplete';
import { AirportList } from './AirportList';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { itineraryService } from '../service/itineraryService';
import { useState } from 'react';

export default function FlightPlanCard() {
    const selectedAirports = useRecoilValue(selectedAirportsState);
    const setCalculation = useSetRecoilState(calculationState);
    const [open, setOpen] = useState(false);

    const airportsSelectorCardStyle = {
        position: "absolute",
        top: "460px",
        left: "17%",
        display: "block",
        minWidth: "600px",
        minHeight: 260,
    }

    const onCalculateButtonClick = (event) => {
        itineraryService.getItinerary(selectedAirports)
            .then(setCalculation)
            .catch(() => setOpen(true))
    }

    return (
        <>
            <Card sx={airportsSelectorCardStyle} >
                <CardContent >
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow="1" >
                            <Typography variant="h6" color="primary">Plan your flight</Typography>
                        </Box>
                        <Button variant="contained"
                            onClick={onCalculateButtonClick}
                            disabled={selectedAirports.length < 2}
                            startIcon={<AirplaneTicketIcon />} >
                            Calculate price
                        </Button>
                    </Box>
                    <AirportAutocomplete />
                    <AirportList />
                </CardContent>
            </Card >
            <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={6000}>
                <Alert severity="error">Unable to calculate the price, please try again later.</Alert>
            </Snackbar>
        </>
    )
}