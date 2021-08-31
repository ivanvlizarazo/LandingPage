import React, { Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link, withRouter } from "react-router-dom";
import getCookieInfo from "../getCookieInfo";

function MainListItems() {
  return (
    <div>
      {getCookieInfo("role") === "admin" ? (
        <Fragment>
          <Link
            to="/crear-especialista"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem button>
              <ListItemIcon>
                <PersonAddIcon fontSize="small" style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText
                primary="Crear especialista"
                primaryTypographyProps={{ variant: "subtitle2" }}
              />
            </ListItem>
          </Link>
          <Link
            to="/gestion-de-usuarios"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon fontSize="small" style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText
                primary="Gestión de usuarios"
                primaryTypographyProps={{ variant: "subtitle2" }}
              />
            </ListItem>
          </Link>
        </Fragment>
      ) : null}

      <Link to="/sesiones" style={{ textDecoration: "none", color: "#fff" }}>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon fontSize="small" style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary="Sesiones"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItem>
      </Link>
      <Link
        to="/gestion-de-resultados"
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon fontSize="small" style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary="Gestión de resultados"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
        </ListItem>
      </Link>
    </div>
  );
}

export default withRouter(MainListItems);
