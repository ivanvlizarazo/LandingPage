import React from "react";
import { Switch, Route} from "react-router-dom";
import Landing from "./containers/Landing";

const BaseRouter = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

export default BaseRouter;
