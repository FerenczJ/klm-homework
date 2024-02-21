import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableRow, Typography, tableCellClasses } from '@mui/material';
import { useRecoilValue } from "recoil";
import { calculationState } from '../state/calculationState';



export default function PriceCard() {

    const calculation = useRecoilValue(calculationState);

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

    return (
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
    )
}