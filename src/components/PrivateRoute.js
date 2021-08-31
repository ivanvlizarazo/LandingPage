import React from "react";
import { Route, Redirect } from "react-router-dom";
import getCookieInfo from "../getCookieInfo";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route exact {...rest} render={props => (
    getCookieInfo('id') != null
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/'}} />
)} />
}
