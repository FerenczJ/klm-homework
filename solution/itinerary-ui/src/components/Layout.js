import { AppBar, Box } from '@mui/material';
import React from 'react';
import FlightPlanCard from './FlightPlanCard';
import GreetingCard from './GreetingCard';
import PriceCard from './PriceCard';

export function Layout() {
    const mainWrapperStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 12,
        mt: 20,
    }



    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "white", padding: "5px 15% " }}>
                <img src="kl-logo-2022.svg" alt="KLM Logo" width="300px" />
            </AppBar>
            <Box sx={mainWrapperStyle}>
                <Box display="flex" flexDirection="column">
                    <FlightPlanCard />
                </Box>
                <Box display="flex" flexDirection="column" gap={13}>
                    <GreetingCard />
                    <PriceCard />
                </Box>
            </Box >

        </>
    )
}