import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { fetchEmployees } from "../../redux/actions";
import EmployeeItem from "../employee/EmployeeItem";
import CustomButton from "../customButton/CustomButton";

const Dashboard = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const employeesList = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Employees List</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Emp ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Salary</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((employee) => (
            <EmployeeItem employee={employee} key={employee.id} />
          ))}
        </tbody>
      </table>

      <CustomButton onClick={() => history.push("/employee/new")}>
        Add Employee
      </CustomButton>
    </div>
  );
};

export default Dashboard;
