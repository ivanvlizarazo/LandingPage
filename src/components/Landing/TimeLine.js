import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HorizontalTimeline from "react-horizontal-timeline";
import { Typography } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    margin: "2em 5%",
  },
  containerTimeLine: {
    height: "100px",
    margin: "2em 0",
  },
  titleInformacion: {
    textAlign: "justify",
  },
  containerTitle: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    margin: "1em 0",
    color: "#EE6B04",
    fontWeight: "bolder",
  },
}));

const Dates = [
  new Date("06/04/2021"),
  new Date("08/01/2021"),
  new Date("09/01/2021"),
];

export default function TimeLine(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    value: 0,
    previous: 0,
  });
  const information = [
    <div>
      <Typography variant="h5">Aprobación del proyecto</Typography>
    </div>,
    <div>
      <Typography variant="h5">Contratación</Typography>{" "}
    </div>,
    <div>
      <Typography variant="h5">Articulación de actores</Typography>
    </div>,
  ];
  const options = { year: "numeric", month: "short", day: "numeric" };

  const views = information.map((entry, index) => {
    return (
      <div className="container" key={index}>
        {entry}
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <Typography className={classes.containerTitle} variant="h4">
        Línea de tiempo del proyecto
      </Typography>

      <div className={classes.containerTimeLine}>
        <div className="text-center">
          <SwipeableViews
            index={state.value}
            // resistance
            onChangeIndex={(value, previous) => {
              setState({ value: value, previous: previous });
            }}
          >
            {views}
          </SwipeableViews>
        </div>
        <HorizontalTimeline
          index={state.value}
          indexClick={(index) => {
            setState({ value: index, previous: state.value });
          }}
          styles={{
            background: "#ffffff",
            foreground: "#4ED5A5",
            outline: "#dfdfdf",
          }}
          values={Dates}
          getLabel={function (date) {
            return date.toLocaleString("es-ES", options);
          }}
        />
      </div>
    </div>
  );
}
