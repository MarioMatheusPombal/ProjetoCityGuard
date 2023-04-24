import ResponsiveAppBar from "../../utils/navbar";
import * as React from 'react';
import { Typography } from "@mui/material";
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';








export default function Editar() {

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

                    <hr style={{display:'flex', justifyContent:'center', width:'50%',marginTop:'70px'}}></hr>

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

                    <Button
                    variant="contained"
                    size='medium'
                    color='primary'
                    style={{margin:'40px', padding:'20px'}}
                    align='justify'
                    onClick={handleClickOpen}
                    >
                        Salvar Alterações
                    </Button>
                    <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                    {"As alterações serão registradas. Tem certeza?"}
                                    </DialogTitle>
                                    <DialogActions>
                                    <Button onClick={handleClose}>Sim</Button>
                                    <Button onClick={handleClose} autoFocus>
                                        Não
                                    </Button>
                                    </DialogActions>
                                </Dialog>
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