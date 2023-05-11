import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Formulario from "./FormularioPerfil";

export default function Caixascentralizada() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ height: '180vh' }} >
                    <Formulario></Formulario>
                </Box>
            </Container>
        </React.Fragment>
    );
}