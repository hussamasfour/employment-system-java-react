import React, { useEffect } from "react";
import { TableContainer } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Table, TableBody, TableHeader, TableRow } from "material-ui";
import { TableCell } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { fetchEmployees } from "../../redux/actions";
import EmployeeItem from "../employee/EmployeeItem";
import CustomButton from "../customButton/CustomButton";

const Dashboard = ({ history }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const employeesList = useSelector((state) => state.employee.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Employees List</h1>
      <TableContainer component={Paper}>
        <Table aria-label="caption table">
          <TableHeader>
            <TableRow>
              <TableCell>Emp ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Edit/Delete</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeesList.map((employee) => (
              <EmployeeItem employee={employee} key={employee.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomButton
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          history.push("/employee/new");
        }}
      >
        Add Employee
      </CustomButton>
    </div>
  );
};

export default withRouter(Dashboard);
