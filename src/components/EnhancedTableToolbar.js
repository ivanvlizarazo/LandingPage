import React, { useState, useRef } from "react";

//import from core
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//import from icons
import FilterListIcon from "@material-ui/icons/FilterList";

import { lighten, makeStyles } from "@material-ui/core/styles";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
}));

export default function 
EnhancedTableToolbar(props) {
  const classes = useToolbarStyles();
  const anchorRef = useRef(null);
  const XS = useMediaQuery("(min-width:600px)");
  const [openMenuProfile, setOpenMenuProfile] = useState(false);
  const [open, setOpen] = useState(true);
  const [infoFilter, setInfoFilter] = useState("allUsers");
  props.info(infoFilter);

  const handleToggle = () => {
    setOpenMenuProfile((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenuProfile(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenuProfile(false);
    }
  }

  function changeInfoFilter(event, input) {
    setInfoFilter(input);
    handleClose(event);
  }

  return (
    <Toolbar>
      <Typography
        className={classes.title}
        variant={XS?"h5":null}
        id="tableTitle"
        component="div"
        style={{fontWeight:XS?null:'bolder', fontSize:XS?null:'1.2em'}}
      >
        Usuarios registrados en la plataforma
      </Typography>

      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={openMenuProfile ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={() => handleToggle()}
          aria-label="filtros"
          size="small"
        >
          Filtros
          <FilterListIcon />
        </IconButton>

        <Popper
          open={openMenuProfile}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={(e) => handleClose(e)}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={() => handleListKeyDown()}
                  >
                    <MenuItem onClick={(e) => changeInfoFilter(e, "allUsers")}>
                      Todos los usuarios
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={(e) => changeInfoFilter(e, "onlyActiveUsers")}
                    >
                      Usuarios activos
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={(e) => changeInfoFilter(e, "onlyInactiveUsers")}
                    >
                      Usuarios inactivos
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Toolbar>
  );
}
