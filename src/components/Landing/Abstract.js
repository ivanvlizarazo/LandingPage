import React from "react";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "1rem",
    margin: "0.8rem 0",
    padding: "10px 30px",
    borderRadius: "20px",
    color: "#fff",
    display: "inline-block",
    backgroundColor: " #EE6B04 ",
    borderColor: "#EE6B04 ",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#F7750F",
    },
    cursor: "pointer",
    outline: "none",
  },
  container: {
    margin: "0 15%",
    transform: "translateY(-180px)",
  },
  containerXS: {
    margin: "0 3%",
    transform: "translateY(-180px)",
  },

  containerText: {
    margin: "1em",

    // background:'#0FE5F7',
  },
  image: {
    backgroundImage: "url('oculus.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    margin: "1em 0",
    color: "#EE6B04",
    fontWeight: "bolder",
  },
  paragraph: {
    color: "gray",
    margin: "0 0 1em 0",
    // textAlign: "justify",
  },
}));

export default function Abstract() {
  const classes = useStyles();
  const XS = useMediaQuery("(max-width:600px)");
  
  return (
    <Paper
      className={XS ? classes.containerXS : classes.container}
      elevation={10}
    >
      <Grid
        container
        direction="row"
        justifycontent="center"
        alignItems="center"
      >
        <Grid item lg={6} md={6} sm={12} xl={6} xs={12}>
          <div className={classes.containerText}>
            <Typography className={classes.title} variant="h4">
              Resumen del proyecto
            </Typography>
            <Typography className={classes.paragraph}>
              Mediante el presente proyecto se pretende sacar mayor provecho de
              las ventajas del turismo de aventura en el departamento del
              Magdalena, por medio de la consecuci??n de proyectos de Ciencia
              Tecnolog??a e Innovaci??n que permitan trascender hacia nuevas
              oportunidades en este sector econ??mico y posicionen al
              departamento como un referente tur??stico a nivel nacional e
              internacional, m??xime, despu??s de la situaci??n de Covid-19 que ha
              afectado significativamente este sector. <br />
              <br />
              En este proyecto se espera realizar un desarrollo tecnol??gico con
              tecnolog??as disruptivas para impactar el sector turismo
              incrementando la promoci??n del turismo ambiental y de aventura en
              el departamento de Magdalena, brindando informaci??n al turista
              antes, durante y despu??s de su viaje. A trav??s de los kioscos
              inteligentes, interactivos y transaccionales, se tendr?? la
              aplicaci??n de algoritmos de inteligencia artificial para generar
              procesos informativos georreferenciados, as?? mismo, se brindar??
              una experiencia sensorial con realidad extendida en la vivencia
              del turismo de aventura, incluso previo, para motivar las visitas.
            </Typography>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xl={6} xs={12}>
          <div className={classes.image} />
        </Grid>
      </Grid>
    </Paper>
  );
}
