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
      <h1>Dashboard</h1>
      <div className="row">
        <div className="border p-4 col-md-12 shadow-sm p-3 mb-5 bg-white rounded">
          <table className="table">
            <thead>
              <tr scope="row ">
                <th scope="col" className="p-3">
                  Emp ID
                </th>
                <th scope="col" className="p-3">
                  First Name
                </th>
                <th scope="col" className="p-3">
                  Last Name
                </th>
                <th scope="col" className="p-3">
                  Age
                </th>
                <th scope="col" className="p-3">
                  Salary
                </th>
                <th scope="col" className="p-3">
                  Email
                </th>

                <th scope="col" className="p-3">
                  Edit/Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {employeesList.map((employee) => (
                <EmployeeItem employee={employee} key={employee.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CustomButton onClick={() => history.push("/employee/new")}>
        Add Employee
      </CustomButton>
    </div>
  );
};

export default Dashboard;
