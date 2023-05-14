import React, { useEffect, useState } from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNpc2Nvc3ZhcmdhcyIsImEiOiJjanpibGtqMTUwMGZ5M2x0ZGFvc3p6cWliIn0.L1MZkEar7vOsEi3O_a3uaw";

const createPopupOcorrencia = (ocorrencia) => `
  <div style="">
    <h3>${ocorrencia.attributes.titulo}</h3>
    <p>${
      ocorrencia.attributes.descricao ||
      "Descrição não informada para esta ocorrência."
    }</p>
    <a href="localhost:3000/ocorrencias/${ocorrencia.id}">Ver detalhes</a>
  <div>
`;

export default function Maps({ ocorrencias, setMarkers, setOcorrenciaSelecionada }) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v12",
      zoom: 11,
    });

    map.addControl(new mapboxgl.NavigationControl());

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log([coords.longitude, coords.latitude]);
      map.setCenter([coords.longitude, coords.latitude]);
    });

    const markers = ocorrencias.map((ocorrencia, index) => {
      return new mapboxgl.Marker({
        color: "#880808",
      })
        .setLngLat(ocorrencia.attributes.coordenadas.split(","))
        .setPopup(
          new mapboxgl.Popup()
            .setHTML(createPopupOcorrencia(ocorrencia))
            .on("open", () => {
              setOcorrenciaSelecionada(index)
            })
            .on("close", () => {
              setOcorrenciaSelecionada(null)
            })
        )
        .addTo(map);
    });

    setMarkers(markers);
  }, [ocorrencias]);

  return (
    <div id="map-container" style={{ width: "100%", height: "89vh" }}></div>
  );
}
