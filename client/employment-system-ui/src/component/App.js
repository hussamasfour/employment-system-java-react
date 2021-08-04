import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./dashboard/Dashboard";
import EmployeeEdit from "./employee/EmployeeEdit";
import EmployeeNew from "./employee/EmployeeNew";
import "./App.css";
import Login from "./login/Login";
import Header from "./header/Header";
import SignUp from "./signUp/SignUp";
const App = () => {
  return (
    <div>
      <Header />
      <div className="container h-100">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />

          <Route path="/employee/new" exact component={EmployeeNew} />
          <Route path="/employee/:id/edit" exact component={EmployeeEdit} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
