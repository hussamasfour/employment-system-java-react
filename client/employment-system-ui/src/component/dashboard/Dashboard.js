import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { fetchEmployees } from "../../redux/actions";
import EmployeeItem from "../employeeItem/EmployeeItem";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }
  render() {
    const { isLoggedIn, employeesList } = this.props;
    console.log();
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        {employeesList.map((employee) => (
          <EmployeeItem employee={employee} key={employee.id} />
        ))}
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
export default connect(mapStateToProps, { fetchEmployees })(Dashboard);
