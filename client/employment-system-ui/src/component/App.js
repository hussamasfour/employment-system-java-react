import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
