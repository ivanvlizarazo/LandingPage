import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerParent: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  containerChild: {
    textAlign: "center",
    width: "80%",
    padding: "0em 1em 0em 1em",
    margin: "3em 0",
    borderRadius: "10px",
    flexWrap: "wrap",
  },
  containerAvatar: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    margin: "1em 0",
  },
  containerH4: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    margin: "1em 0",
    color: "#EE6B04",
    fontWeight: "bolder",
  },
  image: {
    width: "50%",
    height: "50%",
  },
  image2: {
    width: "80%",
    height: "50%",
  },
}));

export default function Cooperators() {
  const classes = useStyles();

  return (
    <div className={classes.containerParent}>
      <div className={classes.containerChild}>
        <Typography className={classes.containerH4} variant="h4">
          Aliados y Cooperantes
        </Typography>
        <Grid
          container
          direction="row"
          justifycontent="space-between"
          alignItems="center"
        >
          <Grid item lg={3} md={3} sm={3} xl={3} xs={12}>
            <div className={classes.containerAvatar}>
              <img
                className={classes.image}
                src={"universidadmagdalena.jpg"}
                alt="logo universidad de magdalena"
              />
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xl={3} xs={12}>
            <div className={classes.containerAvatar}>
              <img
                className={classes.image}
                src={"gobernacionmagdalena.png"}
                alt="logo gorbernacion de magdalena"
              />
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xl={3} xs={12}>
            <div className={classes.containerAvatar}>
              <img
                className={classes.image2}
                src={"minciencias.png"}
                alt="logo minciencias"
              />
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xl={3} xs={12}>
            <div className={classes.containerAvatar}>
              <img
                className={classes.image2}
                src={"sgr.jpg"}
                alt="logo Sistema General de Regalias"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
