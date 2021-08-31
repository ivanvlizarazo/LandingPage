import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
  },
  containerTitle: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: "#EE6B04",
    fontWeight: "bolder",
    marginTop: "2em",
  },
  paragraph: {
    padding: "1% 20% 5% 20%",
    textAlign: "center",
  },
}));

export default function Objectives() {
  const classes = useStyles();

  const information = [
    {
      image: "turist1.jpg",
      title: "Componente 1",
      description:
        "Diseñar una estrategia de promoción y posicionamiento de la oferta turística ambiental y cultural del departamento que permita la validación del desarrollo tecnológico.",
    },
    {
      image: "turists.jpg",
      title: "Componente 2",
      description:
        "Diseñar e implementar un sistema basado en la orquestación de servicios utilizando múltiples canales de comunicación, interacción y visualización de la oferta ambiental y cultural, donde los prestadores de servicios turísticos presenten sus servicios de aventura utilizando técnicas que simulen efectos de estimulación transcraneal para incrementar donde el sentido de la presencia “SENSE OF PRESENCE” de modo que se incentiven las visitas.",
    },
    {
      image: "kiosk.jpg",
      title: "Componente 3",
      description:
        "Facilitar el acceso a la información turística de la oferta ambiental y cultural a través de kioskos inteligentes como puntos de información integral que incluya opciones para realizar trámites, como reserva de un hotel, alquiler de vehículo, reserva en restaurantes, compra de vuelos, entre otros.",
    },
  ];

  return (
    <div>
      <Typography className={classes.containerTitle} variant="h4">
        Componentes
      </Typography>
      <Typography className={classes.paragraph} variant="body2">
        El proyecto plantea el problema como “Bajo desarrollo tecnológico para
        el aprovechamiento de la oferta de aventura en el departamento de
        Magdalena” y tiene como propósito fortalecer la oferta ambiental y
        cultural del turismo de aventura en el Departamento de Magdalena
        generando valor en el contexto de la economía naranja a través del
        desarrollo tecnológico, lo anterior por medio de tres componentes.
      </Typography>
      
        <Grid
          container
          direction="row"
          justifycontent='center'
          alignItems="flex-start"
          className={classes.container}
        >
          {information.map((itemInformation) => {
            return (
              <Grid item xs={11} lg={3} md={3} sm={6} xl={3}>
                <Card
                  image={itemInformation.image}
                  title={itemInformation.title}
                  description={itemInformation.description}
                />
              </Grid>
            );
          })}
        </Grid>
    
    </div>
  );
}
