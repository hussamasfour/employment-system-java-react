import React from "react";
import { TableContainer, TableHead } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Table, TableBody, TableHeader, TableRow } from "material-ui";
import { TableCell } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { fetchEmployees } from "../../redux/actions";
import EmployeeItem from "../employee/EmployeeItem";
import CustomButton from "../customButton/CustomButton";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }
  render() {
    const { isLoggedIn, employeesList, history } = this.props;

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
  }
}

const mapStateToProps = ({ auth, employee }) => {
  return {
    isLoggedIn: auth.isLoggedIn,
    employeesList: employee.employees,
  };
};
export default connect(mapStateToProps, { fetchEmployees })(
  withRouter(Dashboard)
);
