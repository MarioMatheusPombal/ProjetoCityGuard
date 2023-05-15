import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { format } from "date-fns";

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNpc2Nvc3ZhcmdhcyIsImEiOiJjanpibGtqMTUwMGZ5M2x0ZGFvc3p6cWliIn0.L1MZkEar7vOsEi3O_a3uaw";

function DialogNovaOcorrencia({ open, setDialogAddOpen }) {
  const [type, setType] = useState("Acidente");
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markerRef = useRef(null);

  const inputTituloRef = useRef(null);
  const inputDescricaoRef = useRef(null);

  const handleSend = async () => {
    const coords = markerRef.current.getLngLat();
    const ocorrenciaDTO = {
      titulo: inputTituloRef.current.value,
      data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      descricao: inputDescricaoRef.current.value,
      tipo: type,
      coordenadas: `${coords.lng},${coords.lat}`,
      ativo: true,
    };
    console.log(ocorrenciaDTO);

    const { data } = await axios.post(
      `http://localhost:1337/api/ocorrencias/`,
      JSON.stringify({ data: ocorrenciaDTO }),
      { headers: { "Content-Type": "application/json" } }
    );

    setDialogAddOpen(true);
  };

  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      zoom: 13,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      map.current.setCenter([coords.longitude, coords.latitude]);

      markerRef.current = new mapboxgl.Marker({
        color: "#880808",
        draggable: true,
      })
        .setLngLat([coords.longitude, coords.latitude])
        .addTo(map.current);
    });
  }, [open]);

  return (
    <Dialog open={open} onClose={() => setDialogAddOpen(false)} keepMounted>
      <DialogTitle>Cadastrar nova ocorrência</DialogTitle>
      <DialogContent style={{ width: "600px", marginTop: "10px" }}>
        <Typography style={{ fontWeight: "bold" }}>Dados Gerais</Typography>
        <Typography style={{ fontSize: 12, marginBottom: 10 }}>
          Informe os dados necessários para atendimento à ocorrência.
        </Typography>

        <FormControl style={{ width: "550px", marginTop: 5 }}>
          <InputLabel id="demo-simple-select-label">
            Tipo de ocorrência
          </InputLabel>
          <Select
            label="Tipo de ocorrência"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <MenuItem value={"Acidente"}>Acidente</MenuItem>
            <MenuItem value={"Assalto"}>Assalto</MenuItem>
            <MenuItem value={"Incêndio"}>Incêndio</MenuItem>
            <MenuItem value={"Outro"}>Outro</MenuItem>
          </Select>
        </FormControl>

        <TextField
          style={{ width: "550px", marginTop: 15 }}
          label="Título"
          required
          inputRef={inputTituloRef}
        />

        <TextField
          style={{ width: "550px", marginTop: 15 }}
          multiline
          rows={3}
          label="Descrição"
          inputRef={inputDescricaoRef}
        />

        <Typography style={{ fontWeight: "bold", marginTop: 15 }}>
          Localização
        </Typography>
        <Typography style={{ fontSize: 12 }}>
          Arraste o marcador para o ponto da ocorrência.
        </Typography>

        <div
          ref={mapContainer}
          style={{ width: "550px", height: 300, marginTop: "10px" }}
        ></div>
      </DialogContent>
      <DialogActions style={{ margin: "10px 18px" }}>
        <Button variant="outlined" style={{ marginRight: "auto" }} onClick={() => { setDialogAddOpen(false)}}>
          Cancelar
        </Button>
        <Button variant="outlined" onClick={handleSend}>
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogNovaOcorrencia;
