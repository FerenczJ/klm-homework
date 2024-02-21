import { AppBar } from '@mui/material';
import React from 'react';
import FlightPlanCard from './FlightPlanCard';
import GreetingCard from './GreetingCard';
import PriceCard from './PriceCard';

export function Layout() {
    return (
        <>
            <AppBar position="static" sx={{ bgcolor: "white", padding: "5px 15% " }}>
                <img src="kl-logo-2022.svg" alt="KLM Logo" width="300px" />
            </AppBar>
            <FlightPlanCard />
            <GreetingCard />
            <PriceCard />
        </>
    )
}