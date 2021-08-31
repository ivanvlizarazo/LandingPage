import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FormContact from "./FormContact";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    color: "#fff",
    backgroundImage: "url('Contact.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "80vh",
  },
  containerXS: {
    textAlign: "center",
    color: "#fff",
    backgroundImage: "url('Contact.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "110vh",
   
  },
  containerSM: {
    textAlign: "center",
    color: "#fff",
    backgroundImage: "url('Contact.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "80vh",
  },
  containerMD: {
    textAlign: "center",
    color: "#fff",
    backgroundImage: "url('Contact.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "90vh",
  },
  containerLG: {
    textAlign: "center",
    color: "#fff",
    backgroundImage: "url('Contact.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  containerXL: {
    textAlign: "center",
    color: "#fff",
    backgroundImage: "url('Contact.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  Form: {
    
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },

  text: {
    padding: "5% 0 0 0",
    fontSize: "50px",
  },
  textXS: {
    padding: "5% 0 ",
    fontSize: "2.8em",
  },
  textSM: {
    padding: "5% 0 ",
    fontSize: "50px",
  },
  textMD: {
    padding: "5% 0 ",
    fontSize: "50px",
  },
  textLG: {
    padding: "5% 0 ",
    fontSize: "50px",
  },
  textXL: {
    padding: "5% 0 ",
    fontSize: "50px",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const XS = useMediaQuery("(max-width:600px)");
  const SM = useMediaQuery("(max-width:960px)");
  const MD = useMediaQuery("(max-width:1280px)");
  const LG = useMediaQuery("(max-width:1921px)");
  const XL = useMediaQuery("(max-width:3000px)");

  return (

    <div
      className={
        XS
          ? classes.containerXS
          : SM
          ? classes.containerSM
          : MD
          ? classes.containerMD
          : LG
          ? classes.containerLG
          : XL
          ? classes.containerXL
          : classes.container
      }
    >
      <div
        className={
          XS
            ? classes.textXS
            : SM
            ? classes.textSM
            : MD
            ? classes.textMD
            : LG
            ? classes.textLG
            : XL
            ? classes.textXL
            : classes.text
        }
      >
        Contacto
      </div>

      <div  className={classes.Form
      }>
        <FormContact />
      </div>
    </div>
   
  );
}
