import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { fetchEmployees } from "../../redux/actions";
import EmployeeItem from "../employee/EmployeeItem";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }
  render() {
    const { isLoggedIn, employeesList } = this.props;

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

              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {employeesList.map((employee) => (
              <EmployeeItem employee={employee} key={employee.id} history />
            ))}
          </tbody>
        </table>

        <Link to="/employee/new">Add Employee</Link>
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
