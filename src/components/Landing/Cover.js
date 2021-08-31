import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { Button, Paper, Typography } from "@material-ui/core";

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
    position: "relative",
    textAlign: "center",
    backgroundImage: "url('cover.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    transform:'translateY(-65px)'
  },
  containerXS: {
    position: "relative",
    textAlign: "center",
    backgroundImage: "url('cover.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    transform:'translateY(-65px)'
  },
  containerSM: {
    position: "relative",
    textAlign: "center",
    backgroundImage: "url('cover.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    transform:'translateY(-65px)'
  },

  containerMD: {
    position: "relative",
    textAlign: "center",
    backgroundImage: "url('cover.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    transform:'translateY(-65px)'
  },
  paper: {
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    padding: "0 0 0 10%",
  },
  buttonPaper: {
    alignItems: "start",
    justifyContent: "start",
    display: "flex",
    padding: "0 0 0 10%",
  },
  title: {
    color: "#fff",
  },
  image: {
    width: "50%",
    height: "auto",
  },
  article: {
    textAlign:'start',
    height: "100vh",
    // background: "#ffffff11",
    // backdropFilter: "blur(10px)",
    // display: "inline-grid",
    
  },
 
}));

export default function Cover() {
  const classes = useStyles();
  const XS = useMediaQuery("(max-width:600px)");
  const SM = useMediaQuery("(max-width:960px)");
  const MD = useMediaQuery("(max-width:1280px)");

  return (
    <div
      className={
        XS
          ? classes.containerXS
          : SM
          ? classes.containerSM
          : MD
          ? classes.containerMD
          : classes.container
      }
    >
      <Grid
        container
        direction="row"
        justifycontent="flex-start"
        alignItems="center"
      >
        
        <Grid className={classes.article} item lg={6} md={6} sm={6} xl={6} xs={12}>
        
    
        </Grid>
        <Grid item lg={6} md={6} sm={6} xl={6} xs={12}>
          <div className={classes.logo}>
            {XS || MD ? null: <img className={classes.image} src="LogoInnovanex.png" alt='logo innovanex' /> }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
