import * as React from 'react';
import { AppBar, Box, Button, Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, tableCellClasses } from '@mui/material';
import { AirportList } from './AirportList';
import { AirportAutocomplete } from './AirportAutocomplete';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { selectedAirportsState } from '../state/airportState';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { calculationState } from '../state/calculationState';

export function Layout() {

    const [selectedAirports, setSelectedAirports] = useRecoilState(selectedAirportsState);
    const [calculation, setCalculation] = useRecoilState(calculationState);
    const resetCalculation = useResetRecoilState(calculationState);

    const airportsSelectorCardStyle = {
        position: "absolute",
        top: "460px",
        left: "17%",
        display: "block",
        minWidth: "600px",
        minHeight: 260,
    }

    const greetingCardStyle = {
        position: "absolute",
        top: "250px",
        right: "17%",
        display: "block",
        minWidth: "600px",
        maxWidth: "600px",
        backgroundColor: "primary.main",
        opacity: ".8"
    }

    const priceCardStyle = {
        position: "absolute",
        top: "460px",
        right: "17%",
        display: "block",
        minWidth: "600px",
        maxWidth: "600px",
    }

    const tableStyle = {
        maxWidth: "400px",
        [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            padding: "5px"
        }
    }

    const fetchCalculation = () => {
        const query = selectedAirports.map(x => "airport=" + x.iata).join("&")

        return fetch("http://localhost:8080/itinerary?" + query)
            .then(response => response.json())
            .then(setCalculation)
    }

    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "white", padding: "5px 15% " }}>
                <img src="kl-logo-2022.svg" alt="image" width="300px" />
            </AppBar>

            <Card sx={airportsSelectorCardStyle} >
                <CardContent >
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow="1" >
                            <Typography variant="h6" color="primary">Plan your flight</Typography>
                        </Box>
                        <Button variant="contained"
                            onClick={fetchCalculation}
                            disabled={selectedAirports.length < 2}
                            startIcon={<AirplaneTicketIcon />} >
                            Calculate price
                        </Button>
                    </Box>
                    <AirportAutocomplete />
                    <AirportList />
                </CardContent>
            </Card >
            <Card sx={greetingCardStyle}>
                <CardContent >
                    <Typography variant="h5" color="primary.contrastText" sx={{ mb: 2 }}>AAFE Airways</Typography>
                    <Box color="primary.contrastText">An Airline that Flies Everywhere, abrand-new airline that wants to stand out by offering a great network with prices that are always the same, despite when or how you book.</Box>
                </CardContent>
            </Card >
            <Card sx={priceCardStyle}>
                <CardContent >
                    <Typography variant="h6" color="primary" marginBottom="15px">Your price</Typography>
                    <TableContainer sx={{ marginBottom: "12px" }}>
                        <Table sx={tableStyle}>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left"><Typography fontSize={16} color="primary">Distance</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="h6" color="primary">{calculation.distance?.toFixed(2)} km</Typography></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="left"><Typography fontSize={16} color="primary">Price</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="h6" color="primary">{calculation.fare?.toFixed(2)}$</Typography></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell align="left"><Typography fontSize={16} color="primary">Tax</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="h6" color="primary">{calculation.tax?.toFixed(2)}$</Typography></TableCell>
                                </TableRow>
                                <TableRow sx={{ borderTop: "1px solid #072b45" }}>
                                    <TableCell align="left"><Typography variant="h6" color="primary">TOTAL</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="h6" color="primary">{(+calculation.fare?.toFixed(2) + +calculation.tax?.toFixed(2)).toFixed(2)}$</Typography></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card >
        </>
    )
}