import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Planet } from "react-planet";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../../css/circle_time_line.css";
import $ from "jquery";
import { range } from "lodash";
const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    justifyItems: "center",
    display: "flex",
  },
  containerTitle: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    margin: "1em 0",
    color: "#EE6B04",
    fontWeight: "bolder",
    textAlign: "center",
  },
  subMenu: {
    height: 80,
    width: 80,
    borderRadius: "50%",
    backgroundColor: "#6AFFA5",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover": {
      backgroundColor: "#00A915",
    },
  },
  wrapper: {
    width: "100%",
    height: "50vh",
    position: "relative",
  },
  menuBtn: {
    width: "100px",
    height: "100px",
  },
}));

$(function () {
  var $btn = $(".btn"),
    $menuBtn = $(".menu-btn"),
    $icon = $(".icon");
  $(this).toggleClass("active");
  $icon.toggleClass("show");
  $btn.toggleClass("active");
});

export default function CircleNavigation(props) {
  const classes = useStyles();
  const [text, setText] = useState("Aprobación del proyecto");
  const XS = useMediaQuery("(max-width:600px)");
  const SM = useMediaQuery("(max-width:960px)");
  const MD = useMediaQuery("(max-width:1280px)");
 
  const [ID, setID] = useState(0);



  function changeText(e, id, text) {
    e.preventDefault();
    setText(text);
    setID(id);
  }
  const Info = [
    { date: new Date("06/04/2021"), text: "Aprobación del proyecto" },
    { date: new Date("08/01/2021"), text: "Contratación" },
    { date: new Date("09/01/2021"), text: "Articulación de actores" },
  ];
  const options = { year: "numeric", month: "short", day: "numeric" };

  const coordinates = [
    { x: 0, y: -200 }, //0
    { x: 80, y: -185 }, //1
    { x: 152, y: -152 }, //2
    { x: 190, y: -80 }, //3
    { x: 210, y: 0 }, //4
    { x: 190, y: 80 }, //5
    { x: 152, y: 152 }, //6
    { x: 80, y: 185 }, //7
    { x: 0, y: 200 }, //8
    { x: -77, y: 190 }, //9
    { x: -150, y: 150 }, //10
    { x: -190, y: 80 }, //11
    { x: -200, y: 0 }, //12
    { x: -190, y: -80 }, //13
    { x: -150, y: -150 }, //14
    { x: -77, y: -185 }, //15
  ];
  const coordinatesXS = [
    { x: 13, y: -110 }, //0
    { x: 60, y: -100 }, //1
    { x: 100, y: -73 }, //2
    { x: 124, y: -32 }, //3
    { x: 132, y: 15 }, //4
    { x: 124, y: 62 }, //5
    { x: 100, y: 104 }, //6
    { x: 60, y: 128 }, //7
    { x: 13, y: 133 }, //8
    { x: -35, y: 128 }, //9
    { x: -80, y: 104 }, //10
    { x: -100, y: 62 }, //11
    { x: -110, y: 15 }, //12
    { x: -100, y: -32 }, //13
    { x: -80, y: -73 }, //14
    { x: -35, y: -100 }, //15
  ];

  const step = Math.floor(16 / Info.length);

  function Range(x, step) {
    var Steps = [];
    for (var i = 0; i < x; i = Math.ceil(i + step)) {
      Steps.push(i);
    }
    return Steps;
  }
  const steps = Range(16, step);
  return (
    <div>
      <Typography className={classes.containerTitle} variant="h4">
        Línea de tiempo del proyecto
      </Typography>
      <div
        style={{
          margin: XS ? "1em 0" : SM?"6em 0 ": MD? '6em 0': "4em 0",
        }}
        className={classes.wrapper}
      >
        <div
          style={{
            width: XS ? "170px" : "280px",
            height: XS ? "170px" : "280px",
            color: "#fff",
            textAlign: "center",
          }}
          className="menu-btn"
        >
          <div className="btn">{text}</div>
        </div>

        <div className="icons-wrapper">
          <div className="icons">
            {Info.map((item, idx) => {
              return (
                <div
                  className="icon"
                  onClick={(e) => changeText(e, idx, item.text)}
                  onMouseEnter={(e) => changeText(e, idx, item.text)}
                  style={{
                    height: XS ? 45 : 70,
                    width: XS ? 45 : 70,

                    backgroundColor: idx === ID && "#0060A9",
                    color: idx === ID && "#fff",
                    justifyContent: "center",
                    justifyItems: "center",
                    display: "flex",
                    textAlign: "center",
                    flexWrap: "inherit",

                    transform: `translate(${
                      XS
                        ? coordinatesXS[steps[idx]].x
                        : coordinates[steps[idx]].x
                    }px, ${
                      XS
                        ? coordinatesXS[steps[idx]].y
                        : coordinates[steps[idx]].y
                    }px)`,
                    borderRadius: "50%",
                  }}
                >
                  <Typography
                    style={{ marginTop: XS?"2em":'0.5em', fontSize: XS && "0.5em" }}
                  >
                    {item.date.toLocaleString("es-ES", options)}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
