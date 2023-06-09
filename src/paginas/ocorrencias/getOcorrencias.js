import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Add } from "@mui/icons-material";
import "../styles/ocorrencias.css";
import { differenceInHours, differenceInMinutes } from "date-fns";



export default function GetOcorrencias({
  ocorrencias,
  showPopup,
  ocorrenciaSelecionada,
  setDialogAddOpen,
}) {
  const convertDateToText = (dtOcorrencia) => {
    const date = new Date(dtOcorrencia);

    const hours = differenceInHours(new Date(), date);

    if (hours >= 24) return `há ${(hours / 24).toFixed(0)} dias`;

    const minutes = differenceInMinutes(new Date(), date);

    if (minutes >= 60) return `há ${(minutes / 60).toFixed(0)} horas`;

    return `há ${minutes} min`;
  };

  return (
    <div className={'DivPrincipal'}>
      <section>
        <Typography  variant="h6">Ocorrências</Typography>

        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() => {
            setDialogAddOpen(true);
          }}
        >
          Criar nova
        </Button>
      </section>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          height: "100%",
        }}
      >
        {ocorrencias.map((post, index) => (
          <div className={'DivOcorrencias'} key={index}>
            <ListItem alignItems="flex-start">
              <ListItemButton selected={ocorrenciaSelecionada === index}>
                <ListItemText
                    primaryTypographyProps={{fontWeight:"bold",color:"white", fontSize:"1.3em", textAlign:"center"}}
                  primary={post.attributes.titulo}
                  onClick={() => {
                    showPopup(index);
                  }}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ fontWeight:"bold", color: "white", lineHeight:"2.43", display:"block", textAlign:"center" }}
                        component="span"
                        variant="body2"
                      >
                        {convertDateToText(post.attributes.data)}
                      </Typography>
                      <Typography
                        sx={{color:"white", paddingTop:"10px", textAlign:"center", fontSize:"0.9em"}}>
                        {`  ${post.attributes.descricao || "sem descrição"}`}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider component="li" key={`${index}-divider`} />
          </div>
        ))}
      </List>


    </div>
  );
}
