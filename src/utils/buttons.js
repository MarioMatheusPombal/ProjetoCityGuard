import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FloatingActionButtons() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add" title="Adicionar item">
                <AddIcon />
            </Fab>

            <Fab color="secondary" aria-label="edit" title="Editar item">
                <EditIcon />
            </Fab>

            <Fab color="tertiary" aria-label="delete" title="Excluir item">
                <DeleteIcon />
            </Fab>

            <Fab disabled aria-label="like" title="Curtir item">
                <FavoriteIcon />
            </Fab>
        </Box>
    );
}
