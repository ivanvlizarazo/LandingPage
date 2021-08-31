import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "50%",
    height: "auto",
  },
  imageXS: {
    width: "55%",
    height: "auto",
  },
  imageSM: {
    width: "25%",
    height: "auto",
  },
  grow: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  link: {
    margin: theme.spacing(1, 1.5),
    color: "#000",
    textTransform: "none",
    // "&:hover": {
    //   color: theme.palette.color4.main,
    //   // textDecoration: "none",
    // },
  },
  logo: {
    width: "30%",
  },
  logoXS: {
    width: "100%",
  },
  logoSM: {
    width: "100%",
  },
  logoMD: {
    width: "30%",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menu: {
    color: "#000",
  },
}));

export default function AppBarInnovanex(props) {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { window } = props;
  const XS = useMediaQuery("(max-width:600px)");
  const SM = useMediaQuery("(max-width:960px)");

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 600,
  });

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <nav>
        <MenuItem>
          <Link
            className={classes.link}
            variant="button"
            color="textPrimary"
            target="_blank"
            href="https://contratacion.innovanex.com.co/auth/login"
          >
            Contratación
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className={classes.link}
            variant="button"
            color="textPrimary"
            href="#about"
          >
            Sobre nosotros
          </Link>
        </MenuItem>

        <MenuItem>
          <Link
            className={classes.link}
            variant="button"
            color="textPrimary"
            href="#objectives"
          >
            Componentes
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className={classes.link}
            variant="button"
            color="textPrimary"
            href="#allies"
          >
            Aliados
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className={classes.link}
            variant="button"
            color="textPrimary"
            href="#sites"
          >
            Beneficiados
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            className={classes.link}
            variant="button"
            color="textPrimary"
            href="#contact"
          >
            Contacto
          </Link>
        </MenuItem>
      </nav>
    </Menu>
  );


  return (
    <div className={classes.grow} in={trigger.toString()}>
      <AppBar
        elevation={3}
        style={{ background: trigger ? "#fff" : "transparent" }}
      >
        <Toolbar>
          <div
            className={XS ? classes.logoXS : SM ? classes.logoSM : classes.logo}
          >
            <img
              className={
                XS ? classes.imageXS : SM ? classes.imageSM : classes.image
              }
              src={"LogoInnovanex.png"}
              alt='logo innovanex'
            ></img>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Menu desplegable"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon className={classes.menu} />
            </IconButton>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="https://contratacion.innovanex.com.co/auth/login"
                target="_blank"
                className={classes.link}
              >
                Contratación
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#about"
                className={classes.link}
              >
                Sobre nosotros
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#objectives"
                className={classes.link}
              >
                Componentes
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#allies"
                className={classes.link}
              >
                Aliados
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#sites"
                className={classes.link}
              >
                Beneficiados
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#contact"
                className={classes.link}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}
