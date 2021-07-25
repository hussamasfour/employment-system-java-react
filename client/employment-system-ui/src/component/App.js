import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./dashboard/Dashboard";
import EmployeeForm from "./employee/employeeForm/EmployeeForm";
import Login from "./login/Login";
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/employee/new" exact component={EmployeeForm} />
      </Switch>
    </div>
  );
};

export default App;
