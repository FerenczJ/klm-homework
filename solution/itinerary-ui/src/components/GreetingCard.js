import { Box, Card, CardContent, Typography } from '@mui/material';
export default function GreetingCard() {
    const greetingCardStyle = {
        minWidth: "600px",
        maxWidth: "600px",
        backgroundColor: "primary.main",
        opacity: ".8"
    }

    return (
        <Card sx={greetingCardStyle} >
            <CardContent>
                <Typography variant="h5" color="primary.contrastText" sx={{ mb: 2 }}> AAFE Airways </Typography>
                <Box color="primary.contrastText" > An Airline that Flies Everywhere, abrand - new airline that wants to stand out by offering a great network with prices that are always the same, despite when or how you book.</Box>
            </CardContent>
        </Card >
    )
}


