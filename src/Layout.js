import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100vw",
  },
}));

export default function Dashboard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      {/* {location.pathname === "/" ? reload("/landing") : null} */}
    </div>
  );
}
