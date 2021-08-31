import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    margin: "1em 0",
  },
  containerTitle: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: "#EE6B04",
    fontWeight: "bolder",
  },
  typography: {
    margin: "2em 0",
    // textAlign: "justify",
  },
  typographyTitle: {
    textAlign: "center",
  },
  link: {
    margin: theme.spacing(0),
    color: "#000",
    textTransform: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  linkParagraph: {
    color: "#A60303",
    fontWeight: "bolder",
    textTransform: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  linkCountry: {
    color: "#A60303",
    textTransform: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  nexuraContent: {
    // background: "#A60303bb",
  },
  gefeticContent: {
    // background: "#0B3DC2bb",
  },
  b: {
    color: "#777",
  },
  card: {
    // background: "#ff0",
    height: "100%",
    maxWidth: "85%",
    padding: "0 5%",
  },
  parent: {
    margin: "0 0 1em 2em",
  },
  media: {
    maxWidth: "50%",
    paddingLeft: "25%",
  },
}));

export default function About() {
  const classes = useStyles();
  const XS = useMediaQuery("(max-width:600px)");
 
  return (
    <div className={classes.parent}>
      <Typography variant='h4' className={classes.containerTitle}>
        Sobre nosotros
      </Typography>
      <Typography
        variant={XS ? "subtitle2" : "h6"}
        className={classes.container}
      >
        La unión temporal INNOVANEX está conformada por las empresas: Gefetic
        S.A.S y Nexura Internacional S.A.S
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item lg={6} md={6} sm={6} xl={6} xs={12}>
          <div></div>
          <Card
            image={"nexuralogo.jpg"}
            stylesMedia={classes.media}
            stylesCard={classes.card}
            title={
              <Link
                target="_blank"
                href="https://www.nexura.com/"
                className={classes.link}
              >
                <Typography className={classes.typographyTitle} variant="h5">
                  Nexura Internacional S.A.S
                </Typography>
              </Link>
            }
            description={
              <Typography className={classes.typography}>
                Es una empresa especializada en ofrecer{" "}
                <b className={classes.b}>
                  servicios y soluciones tecnológicas para gobierno digital
                </b>{" "}
                a entidades públicas en América Latina, con presencia en{" "}
                <Link
                  target="_blank"
                  href="https://www.nexura.com/publicaciones/129389/colombia---nexura-internacional-sas/"
                  className={classes.linkCountry}
                >
                  Colombia,
                </Link>{" "}
                <Link
                  target="_blank"
                  href="https://www.nexura.com/publicaciones/129390/mexico---nexura-internacional-sa-de-cv/"
                  className={classes.linkCountry}
                >
                  México,
                </Link>{" "}
                <Link
                  target="_blank"
                  href="https://www.nexura.com/publicaciones/129391/peru---nexura-sac/"
                  className={classes.linkCountry}
                >
                  Perú,
                </Link>{" "}
                contribuyendo a la innovación pública y el mejoramiento continuo
                en los <b className={classes.b}>procesos de atención</b> de las
                entidades oficiales, generando valor público, mejor calidad de
                vida y satisfacción a los ciudadanos.
                <br />
                <br /> Desde el año 2002 y a lo largo de su trabajo, se han
                convertido en la compañía con el mayor número de{" "}
                <Link
                  target="_blank"
                  href="https://www.youtube.com/watch?v=9QKIRnIW2hg&t=26s&ab_channel=Nexura"
                  className={classes.linkParagraph}
                >
                  implementaciones de la estrategia de gobierno electrónico en
                  Colombia (conocida como 'Gobierno en Línea')
                </Link>{" "}
                , conocimiento que nos permite dimensionar y atender
                oportunamente las necesidades de cada entidad, implementando
                procesos eficientes y apoyándolos para realizar sus proyectos de
                manera <b className={classes.b}>efectiva.</b>
                <br />
                <br />
                Asimismo, ha ejecutado proyectos y productos de Ciencia,
                Tecnología e Innovación, los cuales han sido llevado a los
                diversos sectores de la economía, como turismo, salud, educación
                entre otros.
              </Typography>
            }
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xl={6} xs={12}>
          <Card
            image={"gefeticlogo.jpg"}
            stylesCard={classes.card}
            stylesMedia={classes.media}
            title={
              <Link
                // target="_blank"
                // href=""
                className={classes.link}
              >
                <Typography className={classes.typographyTitle} variant="h5">
                  Gefetic S.A.S
                </Typography>
              </Link>
            }
            description={
              <Typography className={classes.typography}>
                Gefetic S.A.S es una empresa del sector de tecnologías de la
                información y las comunicaciones, que se dedica a{" "}
                <b className={classes.b}>
                  {" "}
                  conceptualizar, formular, gestionar y ejecutar proyectos de
                  CTeI
                </b>
                , así como, también tiene dentro de sus áreas el desarrollo de
                productos de software. Su conformación organizacional le permite
                contar con{" "}
                <b className={classes.b}>
                  procesos definidos, flexibles y alineados{" "}
                </b>{" "}
                con la estrategia de la organización . También cuenta con un{" "}
                <b className={classes.b}>
                  equipo de trabajo de alto nivel con formación en
                  postdoctorado, maestría, especialización y algunos de ellos
                  pertenecientes a grupos de investigación.
                </b>
              </Typography>
            }
          ></Card>
        </Grid>
      </Grid>
    </div>
  );
}
