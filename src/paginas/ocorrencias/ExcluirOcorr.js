import ResponsiveAppBar from "../../utils/navbar";
import { Typography } from "@mui/material";
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';






export default function Excluir() {

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