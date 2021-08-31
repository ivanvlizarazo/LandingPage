import React from "react";
import {
  Link,
  Grid,
  Typography,
  List,
  ListItem,
  ListSubheader,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Brightness1Icon from "@material-ui/icons/Brightness1";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import YouTubeIcon from "@material-ui/icons/YouTube";

import Map from './MapLocation'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    // backgroundImage: "url('footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // height: "50vh",
  },

  footerXS: {
    paddingTop: "1em",
    backgroundColor: theme.palette.secondary.main,
  },
  typography: {
    color: theme.palette.color5.main,
    fontSize: "0.9em",
  },
  typographyXS: {
    color: theme.palette.color5.main,
    fontSize: "0.7em",
  },
  titleXS: {
    color: theme.palette.color5.main,
    fontSize: "1em",
    textAlign: "center",
  },
  title: {
    color: theme.palette.color5.main,
    fontSize: "1.5em",
  },
  footerSM: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  image: {
    width: "90%",
    height: "auto",
  },

  list: {
    maxWidth: 360,
    color: theme.palette.color5.main,
  },
  
  linked: {
    fontSize: "40px",
    color: theme.palette.color5.main,
  },
  linkedXS: {
    fontSize: "30px",
    color: theme.palette.color5.main,
  },
  copyright: {
    color: "#fff",
    padding: "2em 0 1em 0",
    textAlign: "center",
  },
  grid: {
    justifyContent: "center",
    flexGrow: 1,
  },
}));

const contact = [
  {
    title: "Email",
    item: "gerencia@innovanex.com.co",
  },
 
  {
    title: "Celular",
    item: "(+57) 321 456 78 90",
  },
];

const location = [
 
  {
    title: "Dirección",
    item: "Carrera 26 # 12-24 - Barrio Álamos, Pereira, Risaralda, Colombia",
  },
  
  
  
];

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.copyright}>
      {"Copyright © "}
      <Link color="inherit" target="_blank" href="https://innovanex.com.co">
        Innovanex
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const XS = useMediaQuery("(max-width:600px)");
  const SM = useMediaQuery("(max-width:960px)");

  return (
    <footer
      className={XS ? classes.footerXS : SM ? classes.footerSM : classes.footer}
    >
      <Grid
        container
        direction="row"
        justifycontent="center"
        alignItems="center"
        className={classes.grid}
      >
        <Grid
          item
          container
          direction="column"
          justifycontent="center"
          alignItems="center"
          lg={4}
          md={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <Grid item xs={12} lg={8} md={8} sm={9} xl={8}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography
                    variant="h4"
                    className={XS ? classes.titleXS : classes.title}
                  >
                    Información de contacto
                  </Typography>
                </ListSubheader>
              }
              className={SM ? classes.listSM : classes.list}
            >
              {contact.map((item) => (
                <ListItem id={item.title}>
                  <div style={{ paddingRight: "10px" }}>
                    <Brightness1Icon
                      style={{
                        color: theme.palette.color5.main,
                        fontSize: XS ? "8px" : "15px",
                      }}
                    />
                  </div>

                  <Typography
                    variant="body1"
                    className={XS ? classes.typographyXS : classes.typography}
                  >
                    <Typography
                      variant="body2"
                      // className={XS ? classes.typographyXS : classes.typography}
                    >
                      {item.title}{' '}:
                    </Typography>
                    {item.item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifycontent="center"
          alignItems="center"
          lg={4}
          md={4}
          sm={12}
          xl={4}
          xs={12}
        >
          <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
            {/* <span>
              <a
                title="Linkedin"
                // target="_blank"
                href="https://co.linkedin.com/"
              >
                <LinkedInIcon
                  className={XS ? classes.linkedXS : classes.linked}
                />
              </a>

              <a
                title="Facebook"
                // target="_blank"
                href="https://www.facebook.com/"
              >
                <FacebookIcon
                  className={XS ? classes.linkedXS : classes.linked}
                />
              </a>
              <a
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com"
              >
                <InstagramIcon
                  className={XS ? classes.linkedXS : classes.linked}
                />
              </a>

              <a
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                <TwitterIcon
                  className={XS ? classes.linkedXS : classes.linked}
                />
              </a>
              <a
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com"
              >
                <YouTubeIcon
                  className={XS ? classes.linkedXS : classes.linked}
                />
              </a>
            </span> */}
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography
                    variant="h4"
                    className={XS ? classes.titleXS : classes.title}
                  >
                    Ubicación
                  </Typography>
                </ListSubheader>
              }
              className={SM ? classes.listSM : classes.list}
            >
              {location.map((item) => (
                <ListItem id={item.title}>
                  <div style={{ paddingRight: "10px" }}>
                    <Brightness1Icon
                      style={{
                        color: theme.palette.color5.main,
                        fontSize: XS ? "8px" : "15px",
                      }}
                    />
                  </div>

                  <Typography
                    variant="body1"
                    className={XS ? classes.typographyXS : classes.typography}
                  >
                    <Typography
                      variant="body2"
                      // className={XS ? classes.typographyXS : classes.typography}
                    >
                      {item.title}
                    </Typography>
                    {item.item}
                  </Typography>
                </ListItem>
              ))}
            </List>
            
            <Map  center={[4.797549, -75.6906334]} zoom={12} />
           
          </Grid>
        </Grid>
        {!XS && !SM && (
          <Grid
            item
            container
            direction="column"
            justifycontent="center"
            alignItems="flex-start"
            lg={4}
            md={4}
            sm={3}
            xl={4}
          >
            <Grid item lg={12} md={12} sm={12} xl={12}>
              <div>
                <img className={classes.image} src={"innovanexblanco.png"} alt='logo innovanex'></img>
              </div>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Copyright />
    </footer>
  );
}
