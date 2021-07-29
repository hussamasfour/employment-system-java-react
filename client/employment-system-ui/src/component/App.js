import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./dashboard/Dashboard";
import EmployeeEdit from "./employee/EmployeeEdit";
import EmployeeNew from "./employee/EmployeeNew";

import Login from "./login/Login";
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/employee/new" exact component={EmployeeNew} />
        <Route path="/employee/:id/edit" exact component={EmployeeEdit} />
      </Switch>
    </div>
  );
};

export default App;
