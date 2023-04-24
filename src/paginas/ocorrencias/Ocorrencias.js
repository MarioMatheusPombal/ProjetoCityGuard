import React from 'react';
import ResponsiveAppBar from "../../utils/navbar";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';






export default function Ocorrencias() {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>

                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                paddingTop={5}
                paddingBottom={3}
                gutterBottom>
                    Painel de Ocorrências
                </Typography>


                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Bem-vindo(a) à tela de Ocorrências do CityGuard.
                </Typography>


                <Typography variant="h5" align="center" color="text.secondary" paddingTop={5} paddingBottom={5} marginLeft={30} marginRight={30} paragraph>
                Use os botões abaixo para gerenciar as suas ocorrências
                </Typography>
           


            
         

            <div align='center'>
                <Button
                variant="contained"
                size='large'
                color='primary'
                style={{margin:'20px', padding:'50px'}}
                align='justify'
                >
                    Registrar <br></br>ocorrência
                </Button>
                <Button
                variant="contained"
                size='large'
                color='primary'
                style={{margin:'20px', padding:'50px'}}
                >

                    Listar <br></br> Ocorrência
                </Button>
                <Button
                variant="contained"
                size='large'
                color='primary'
                style={{margin:'20px', padding:'50px'}}
                align='justify'
                >
                    Editar <br></br> Ocorrência
                </Button>
                <Button
                variant="contained"
                size='large'
                color='primary'
                style={{margin:'20px', padding:'50px'}}
                >

                    Excluir <br></br> Ocorrência
                </Button>
            </div>

            <Box sx={{bgcolor: 'background.paper', marginTop:'77px',  p: 6}} component="footer">
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        CityGuard: Aliando a tecnologia à qualidade de vida.
                    </Typography>
                </Box>

        



            
        </div>
    )
}