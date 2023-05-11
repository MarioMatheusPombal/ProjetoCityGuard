import React, { useState } from 'react';
import ResponsiveAppBar from "../../utils/navbar";
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';






function ButtonDialog({ buttonLabel, dialogTitle}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <Button variant="contained" size="medium" style={{margin:'10px', padding:'20px'}} color="primary" align="justify" onClick={handleOpen}>
                {buttonLabel}
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {dialogTitle}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Sim</Button>
                    <Button onClick={handleClose} autoFocus>
                        Não
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}








function createData(titulo, data, tipo ,status) {
    return { titulo, data, tipo, status };
}

const rows = [
    createData('Ocorrência 1', '17/03/2023', 'Incêndio', 'Resolvida'),
    createData('Ocorrência 2', '21/02/2023', 'Acidente', 'Resolvida'),
    createData('Ocorrência 3', '19/04/2023', 'Assalto', 'Em aberto'),

];







export default function Ocorrencias() {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };







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
                Gerencie suas ocorrências aqui
            </Typography>




            <hr style={{width:'50%'}}></hr>






            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                paddingTop={5}
                paddingBottom={3}
                gutterBottom>
                Registrar Ocorrência
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Insira os dados abaixo para registrar a sua ocorrência
            </Typography>




            <div style={{display:'flex', justifyContent:'center', marginTop:'70px'}}>

                <TextField
                    label="Título da Ocorrência"
                    variant="filled"
                    style={{width:'30%'}}
                />



            </div>









            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>

                <Button
                    variant="contained"
                    size='medium'
                    color='primary'
                    style={{margin:'10px', padding:'20px'}}
                    align='justify'
                >
                    Apontar local no mapa
                </Button>

            </div>


            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
                <FormControl>
                    <FormLabel style={{textAlign:'center', marginBottom:'20px'}} id="demo-row-radio-buttons-group-label">Tipo de Ocorrência</FormLabel>

                    <RadioGroup row>

                        <FormControlLabel value="Assalto" control={<Radio />} label="Assalto" />
                        <FormControlLabel value="Incêndio" control={<Radio />} label="Incêndio" />
                        <FormControlLabel value="Acidente" control={<Radio />} label="Acidente" />
                        <FormControlLabel value="Outro" control={<Radio />} label="Outro" />

                    </RadioGroup>
                </FormControl></div>





            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>

                <TextareaAutosize style={{ width: '30%', height:'200px' }} aria-label="empty textarea" placeholder="Descreva sobre a ocorrência..." />
            </div>






            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>

                <ButtonDialog
                    buttonLabel="Registrar"
                    dialogTitle="A ocorrência será registrada. Tudo certo?" />


            </div>



            <hr style={{width:'50%'}}></hr>



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
                    <Table style={{borderColor:'primary', borderWidth:'30px', paddingBottom:'30px'}} sx={{ minWidth: 650 }} aria-label="simple table">
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



            <hr style={{width:'50%', marginTop:'120px'}}></hr>



            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                paddingTop={5}
                paddingBottom={3}
                gutterBottom>
                Editar Ocorrência
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Use a barra de pesquisa para encontrar e editar a ocorrência desejada
            </Typography>





            <div style={{display:'flex', justifyContent:'center', marginTop:'70px'}}>
                <TextField
                    variant="outlined"
                    placeholder="Pesquisar"
                    InputProps={{
                        startAdornment: <SearchIcon />,
                    }}
                />

            </div>

            <hr style={{display:'flex', justifyContent:'center', width:'30%',marginTop:'70px'}}></hr>

            <div style={{display:'flex', justifyContent:'center', marginTop:'70px'}}>

                <TextField
                    label="Título da Ocorrência"
                    variant="filled"
                    style={{width:'30%'}}
                />



            </div>












            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>

                <Button
                    variant="contained"
                    size='medium'
                    color='primary'
                    style={{margin:'10px', padding:'20px'}}
                    align='justify'
                >
                    Apontar local no mapa
                </Button>


            </div>


            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
                <FormControl>
                    <FormLabel style={{textAlign:'center', marginBottom:'20px'}} id="demo-row-radio-buttons-group-label">Tipo de Ocorrência</FormLabel>

                    <RadioGroup row>

                        <FormControlLabel value="Assalto" control={<Radio />} label="Assalto" />
                        <FormControlLabel value="Incêndio" control={<Radio />} label="Incêndio" />
                        <FormControlLabel value="Acidente" control={<Radio />} label="Acidente" />
                        <FormControlLabel value="Outro" control={<Radio />} label="Outro" />

                    </RadioGroup>
                </FormControl></div>




            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>

                <TextareaAutosize style={{ width: '30%', height:'200px' }} aria-label="empty textarea" placeholder="Descreva sobre a ocorrência..." />
            </div>


            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>

                <ButtonDialog
                    buttonLabel="Salvar Alterações"
                    dialogTitle="As alterações serão salvas. Tem certeza?" />


            </div>


            <hr style={{width:'50%'}}></hr>


            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                paddingTop={5}
                paddingBottom={3}
                gutterBottom>
                Excluir Ocorrência
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Use a lista abaixo para selecionar uma ou mais ocorrências e realizar a exclusão
            </Typography>

            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (

                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`Ocorrência ${value + 1}`} />
                            </ListItemButton>

                        );
                    })}
                </List>
            </div>

            <div style={{display:'flex', justifyContent:'center', marginTop:'40px'}}>

                <Button
                    variant="contained"
                    size='medium'
                    color='primary'
                    style={{margin:'10px', padding:'20px'}}
                    align='justify'
                    onClick={handleClickOpen}
                >
                    Excluir

                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Tem certeza que deseja excluir?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>Sim</Button>
                        <Button onClick={handleClose} autoFocus>
                            Não
                        </Button>
                    </DialogActions>
                </Dialog>

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