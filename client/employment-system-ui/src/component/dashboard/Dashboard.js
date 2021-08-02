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
      <div className="row">
        <div className="col-lg-12">
          <h1 className="pb-4 text-white pl-0">Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="border p-4 col-md-12 shadow-sm p-3 mb-5 bg-white rounded col-lg-12">
          <table className="table col-lg-12">
            <thead>
              <tr scope="row">
                <th scope="col" className="p-3 ">
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
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-end ">
          <CustomButton
            onClick={() => history.push("/employee/new")}
            className="btn btn-success btn-lg "
          >
            Add Employee
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
