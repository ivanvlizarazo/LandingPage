import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";
import Map from "./Map";

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
    margin: "2em",

    // background:'#0FE5F7',
  },
  image: {
    backgroundImage: "url('boat.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "90vh",
  },
  containerTitle: {
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
  },
}));

export default function Sites() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justifycontent="center" alignItems="center">
      <Grid item lg={6} md={6} sm={12} xl={6} xs={12}>
        <div className={classes.containerText}>
          <Typography className={classes.containerTitle} variant="h4">
            Sitios turísticos de interés en este proyecto
          </Typography>
          <Typography className={classes.paragraph}>
            Este proyecto se ejecutará con un impacto en los 14 municipios con
            turismo de naturaleza referenciados por{" "}
            <Link
              target="_blank"
              href="https://www.siturmagdalena.com/quehacer/index?tipo=3"
            >
              SITUR (Sistema de Información Turística)
            </Link>
            {", "}
            los cuales son: <br />
            <br />
            1. Municipio de Fundación <br />
            2. Municipio de Plato <br />
            3. Municipio de Ariguaní <br />
            4. Municipio de Zona Bananera <br />
            5. Municipio de Pueblo viejo <br />
            6. Municipio de San Sebastián de Buena vista <br />
            7. Municipio de Sitio Nuevo <br />
            8. Municipio de Salamina <br />
            9. Municipio de Algarrobo <br />
            10. Municipio de Ciénaga <br />
            11. Municipio de Santa Marta <br />
            12. Municipio de Aracataca <br />
            13. Municipio de El Banco <br />
            14. Municipio de Guamal
          </Typography>
        </div>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xl={6} xs={12}>
        <Map />
      </Grid>
    </Grid>
  );
}
