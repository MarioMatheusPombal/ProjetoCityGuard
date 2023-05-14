import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Maps from "../maps/maps";
import axios from "axios";

import GetOcorrencias from "../paginas/ocorrencias/getOcorrencias";
import DialogNovaOcorrencia from "../dialogs/novaOcorrencia";
const baseURL = "http://localhost:1337/api/ocorrencias/";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [markers, setMarkers] = useState([]);
  const [dialogAddOpen, setDialogAddOpen] = useState(false);
  const [ocorrencias, setOcorrencias] = useState([]);
  const [ocorrenciaSelecionada, setOcorrenciaSelecionada] = useState(null);

  const getPosts = async () => {
    const { data } = await axios.get(baseURL);
    console.log(data);
    setOcorrencias(data.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const togglePopup = (ocorrenciaIndex) => {
    if(ocorrenciaSelecionada != null) 
        markers[ocorrenciaSelecionada].togglePopup()

    markers[ocorrenciaIndex].togglePopup();

    setOcorrenciaSelecionada(
      ocorrenciaIndex === ocorrenciaSelecionada ? null : ocorrenciaIndex
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5}>
        <Grid item xs={3}>
          <Item>
            <GetOcorrencias
              ocorrencias={ocorrencias}
              showPopup={togglePopup}
              ocorrenciaSelecionada={ocorrenciaSelecionada}
              setOcorrenciaSelecionada={setOcorrenciaSelecionada}
              setDialogAddOpen={setDialogAddOpen}
            />
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <Maps
              ocorrencias={ocorrencias}
              setMarkers={setMarkers}
              setOcorrenciaSelecionada={setOcorrenciaSelecionada}
            />
          </Item>
        </Grid>
      </Grid>

      <DialogNovaOcorrencia open={dialogAddOpen} setDialogAddOpen={setDialogAddOpen}/>
    </Box>
  );
}
