import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Maps from "../maps/maps";

export default function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Maps></Maps>
            </Container>
        </React.Fragment>
    );
}