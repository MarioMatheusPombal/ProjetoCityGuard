import ResponsiveAppBar from "../../utils/navbar";
import { Typography } from "@mui/material";
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(titulo, data, tipo ,status) {
    return { titulo, data, tipo, status };
  }
  
  const rows = [
    createData('Ocorrência 1', '17/03/2023', 'Incêndio', 'Resolvida'),
    createData('Ocorrência 2', '21/02/2023', 'Acidente', 'Resolvida'),
    createData('Ocorrência 3', '19/04/2023', 'Assalto', 'Em aberto'),

  ];


export default function Listar() {



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
                    Listar Ocorrência
                </Typography>

                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Visualize aqui as suas ocorrências já registradas
                </Typography>

                <div style={{display:'flex', justifyContent:'center', width:'50%', margin:'auto', marginTop:'40px'}}>
                    <TableContainer component={Paper}>
                        <Table style={{borderColor:'primary', borderWidth:'30px'}} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Título da Ocorrência</TableCell>
                                <TableCell align="right">Data</TableCell>
                                <TableCell align="right">Tipo</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.titulo}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.titulo}
                                </TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                                <TableCell align="right">{row.tipo}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </div>

                <Box sx={{bgcolor: 'background.paper', marginTop:'50px',  p: 6}} component="footer">
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

           


        

        
    );
}