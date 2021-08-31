import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import QRCode from "qrcode.react";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    display: "flex",
  },
}));

export default function QRCode(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <QRCode value="https://www.youtube.com/" renderAs="svg" />
    </div>
  );
}
