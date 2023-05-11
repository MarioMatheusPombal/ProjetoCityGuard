import * as React from 'react';
import ResponsiveAppBar from "../utils/navbar";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import Caixascentralizada from "../utils/caixascentralizada";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Perfil() {
    return (
        <>

            <div>
                <ResponsiveAppBar></ResponsiveAppBar>
            </div>
            <div>
                <Item>
                    <Caixascentralizada></Caixascentralizada>
                </Item>
            </div>

        </>
    )
}